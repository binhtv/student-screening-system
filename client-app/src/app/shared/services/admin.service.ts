import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URLS } from './endpoints';

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
exam: Question[] = []; 
  public getQuestions() {
    
    this.http.get<any>('http://localhost:8000/exam').subscribe((res) => {
      res.forEach(element => {
        console.log("element " + JSON.stringify(element));// js value to json string
        this.exam.push(element);
      });
    });

    return this.exam;
  }
}
export interface Question {

  title: String,
  question: String,
  examnumber: Number

}