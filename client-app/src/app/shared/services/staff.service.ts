import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from './endpoints';

@Injectable()
export class StaffService {
	constructor(private http: HttpClient) {}

	loadStudents() {
		return this.http.get(API_URLS.API_STUDENT_LIST);
	}

	sendEmail() {
		return this.http.post(API_URLS.API_SEND_EMAIL, {});
	}
}