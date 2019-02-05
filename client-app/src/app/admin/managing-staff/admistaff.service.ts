import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdmistaffService {

  constructor(private http: HttpClient) { }

  createAdmissionStaff(admissionstaff) {
    console.log("i'm able to create staff " + admissionstaff);

    const url = 'http://localhost:8000/staff';

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    this.http.post(url, admissionstaff, {
      headers: headers
    }).subscribe(data => {
      console.log(data);
    });
  }

  staff: IadmissionStaff[] = [];
  public getStaff() {
    this.http.get<any>('http://localhost:8000/staff').subscribe((res) => {
      res.forEach(element => {
        console.log("element " + JSON.stringify(element));// js value to json string
        this.staff.push(element);
      });
    });
    return this.staff;
  }
}

export interface IadmissionStaff {

  fristname: String,
  lastname: String,
  email: String,
  username: String,
  password: String,
  hiredate: Date

}
