import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URLS } from './endpoints';
import { Question } from '../models/question';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient) { }

  private request(question): Observable<any> {

    const url = API_URLS.API_ADMIN_NEW_QUESTION;

    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this.http.post(url, JSON.stringify(question), {
      headers: headers
    });
  }

  public createQuestion(question: Question):  Observable<any> {
    return this.request(question);
  }

  public createAdmissionStaff(staff: User): Observable<any> {
    return this.http.post(API_URLS.API_ADMIN_NEW_STAFF, staff);
  }

  loadStaffs() {
    return this.http.get(API_URLS.API_STAFF_LIST);
  }
}
