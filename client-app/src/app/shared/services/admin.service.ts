import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URLS } from './endpoints';
import { Question } from '../models/question';
import { User } from '../models/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http: HttpClient, private router: Router) { }

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

  public loadStaffs() {
    return this.http.get(API_URLS.API_ADMIN_STAFF_LIST);
  }

  public updateUserStatus(email: string, status: boolean) {
      const user = {
        email: email,
        status: status
      };
      this.http.put(API_URLS.API_ADMIN_UPDATE_STAFF_STATUS, user)
          .subscribe(response => {
              alert('Successfully Save');
          }, error => {
              alert('Unsuccessfully Save');
          });
  }

  public loadExams() {
    return this.http.get(API_URLS.API_ADMIN_LOAD_EXAMS);
  }

  public loadExam(id) {
    return this.http.get(`${API_URLS.API_ADMIN_LOAD_EXAM}/${id}`);
  }

  public updateExamStatus(status, id) {
    return this.http.put(`${API_URLS.API_ADMIN_UPDATE_EXAM_STATUS}/${id}`, {status});
  }

  public publishExamResult(examId) {
    return this.http.post(`${API_URLS.API_ADMIN_PUBLISH_RESULT}`, {examId});
  }

  public loadQuestions(){
    return this.http.get(API_URLS.API_ADMIN_LOAD_QUESTIONS);
  }

  public updateQuestionStatus(id: string, status:boolean){
    const question = {
      id: id,
      status: status
    };
    this.http.put(API_URLS.API_ADMIN_UPDATE_QUESTION_STATUS, question)
      .subscribe(repsonse => {
        alert('Update Success');
      },error => {
        alert('Can not update');
      });
  }
}
