import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from './endpoints';
import { Exam } from '../models/exam';

@Injectable()
export class StudentService {
	constructor(private http: HttpClient) { }

	loadExam() {
		return this.http.get(API_URLS.API_STUDENT_GET_EXAM);
	}

	getStudentInfo() {
		return this.http.get(API_URLS.API_STUDENT_GET_STUDENT_INFO);
	}

	submitExam(exam: Exam) {
		return this.http.put(API_URLS.API_STUDENT_SUBMIT_EXAM, exam);
	}

	startExam() {
		return this.http.put(API_URLS.API_STUDENT_START_EXAM, {});
	}
}