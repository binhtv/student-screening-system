import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from './endpoints';

@Injectable()
export class StudentService {
	constructor(private http: HttpClient) { }

	loadExam() {
		//return this.http.get(API_URLS.API_TAKE_EXAM);
	}

	getStudentInfo(token) {
		return this.http.get(`${API_URLS.API_STUDENT_GET_STUDENT_INFO}?token=${token}`);
	}
}