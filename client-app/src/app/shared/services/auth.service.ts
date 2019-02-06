import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from './endpoints';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/shared/models/login-response';
import { Subject } from 'rxjs';

// import { environment } from '../../../environments/environment';
// const BACKEND_URL = environment.apiUrl + '/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = false;
  private isRole = 0;
  private authStatusListener = new Subject<boolean>();
  private authStatusListenerRole = new Subject<any>();
  private tokenTimer: any;

  constructor(private http: HttpClient, private router: Router) { }

  // login(user) {
  //   return this.http.post(API_URLS.API_LOGIN, user);
  // }

  login(user) {
    this.http.post(API_URLS.API_LOGIN, user)
      .subscribe((response: LoginResponse) => {
        const token = response.token;
        if (token) {
          this.router.navigate(['/']);
          const role = response.role;
          const expiresInDuration = response.expiresIn;
          this.setAuthTimer(expiresInDuration);
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          console.log('Expired: ' + expirationDate);
          this.saveAuthData(token, expirationDate, response.userId);
          if (role === 'admin') {
            this.isRole = 1;
            this.authStatusListenerRole.next(1);
            this.router.navigate(['/admin']);
          } else {
            this.isRole = 2;
            this.authStatusListenerRole.next(2);
            this.router.navigate(['/staff/invite']);
          }
        }

      },
      error => {
        return console.log(error);
      });
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  getAuthStatusListenerRole() {
    return this.authStatusListenerRole.asObservable();
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getIsRole() {
    return this.isRole;
  }

  logout() {
    //this.token = null;
    this.isAuthenticated = false;
    this.isRole = null;
    this.authStatusListener.next(false);
    this.authStatusListenerRole.next(0);
    clearTimeout(this.tokenTimer);
    this.clearAuthData();
    //this.userId = null;
    this.router.navigate(['/']);
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
  }

  private setAuthTimer(duration: number) {
    console.log('Setting timer: ' + duration);
    this.tokenTimer = setTimeout(() => {
      this.logout();
    }, duration * 1000);
  }

}
