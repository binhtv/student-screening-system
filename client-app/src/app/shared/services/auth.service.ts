import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from './endpoints';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/shared/models/login-response';
import { Subject } from 'rxjs';

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

  login(user) {
    this.http.post(API_URLS.API_LOGIN, user)
      .subscribe((response: LoginResponse) => {
        const token = response.token;
        if (token) {
          const role = response.role;
          const expiresInDuration = response.expiresIn;
          this.isAuthenticated = true;
          this.authStatusListener.next(true);
          const now = new Date();
          const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
          this.saveAuthData(token, expirationDate, response.userId, role);
          this.router.navigate(['/']);
          window.location.reload();
        }
      },
      error => {
        return console.log(error);
      });
  }

  getIsAuth() {
    //return this.isAuthenticated;
    return localStorage.getItem('token') !== null && !this.isExpired();
  }

  getIsRole() {
    return this.isRole;
  }

  isAdmin() {
    return localStorage.getItem('role') === 'admin';
  }

  isStaff() {
    return localStorage.getItem('role') === 'staff';
  }

  isExpired() {
    const expiration = localStorage.getItem('expiration');
    const expire = new Date(expiration);
    return expire <= new Date();
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
    window.location.reload();
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('expiration');
    localStorage.removeItem('userId');
    localStorage.removeItem('role');
  }

  private saveAuthData(token: string, expirationDate: Date, userId: string, role: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('expiration', expirationDate.toISOString());
    localStorage.setItem('userId', userId);
    localStorage.setItem('role', role);
  }
}
