import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
const BACKEND_URL = environment.apiUrl + '/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(user) {
    //console.log(BACKEND_URL + '/signup' + user);
    //return this.http.post('http://localhost:3600/api/users/signup', user);
    return this.http.post(BACKEND_URL + '/signup', user);
  }

  login(user) {
    //console.log(BACKEND_URL + '/login' + user);
    //console.log(BACKEND_URL);
    //return this.http.post('http://localhost:3600/api/users/login', user);
    return this.http.post(BACKEND_URL + '/login', user);
  }
}
