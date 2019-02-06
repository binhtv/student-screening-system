import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from './endpoints';
import { Invitation } from '../models/invitation';

@Injectable()
export class StaffService {

	constructor(private http: HttpClient) {}

	loadStudents () {
    return this.http.get(API_URLS.API_STUDENT_LIST);
	}

	sendInvitation(invitation: Invitation) {
		return this.http.post(API_URLS.API_STAFF_NEW_INVITATION, invitation);
  }
}
