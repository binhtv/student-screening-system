import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
//import { AuthenticationService, TokenPayload } from 'src/authentication.service';
import { Router } from '@angular/router';
import { AdminService } from '../../shared/services/admin.service';
import { AdmistaffService, IadmissionStaff } from './admistaff.service';

@Component({
  selector: 'app-managing-staff',
  templateUrl: './managing-staff.component.html'
})
export class ManagingStaffComponent implements OnInit {
  admissionstaff: FormGroup;
  staffs: IadmissionStaff[];
  constructor(private fb: FormBuilder, private  router: Router, private admistaff: AdmistaffService) { }

  ngOnInit() {
    this.admissionstaff = this.fb.group({
      fristname: [''],
      lastname: [''],
      email: [''],
      username: ['*******'],
      password: ['*******'],
      hiredate: new Date()
    })
    this.staffs = this.admistaff.getStaff();
  }
  deletStaff(questionnumber) {
    this.staffs.splice(questionnumber)
  }
  credentials:  {
    email: '',
    name: '',
    password: ''
  };
  newAdmissonStaff: IadmissionStaff = {
    fristname: "",
    lastname: "",
    email: "",
    username: "********",
    password: "********",
    hiredate: new Date()

  }

  register() {
    this.credentials.email = this.admissionstaff.value.email;
    this.credentials.password = this.admissionstaff.value.password;

    this.newAdmissonStaff.fristname = this.admissionstaff.value.fristname;
    this.newAdmissonStaff.lastname = this.admissionstaff.value.lastname;
    this.newAdmissonStaff.email = this.admissionstaff.value.email;

    this.admistaff.createAdmissionStaff(this.newAdmissonStaff);

    // this.auth.register(this.credentials).subscribe(() => {
    //   // this.router.navigateByUrl('/admin/home/managestaff');
    //   window.location.reload();
    // }, (err) => {
    //   console.error(err);
    // });
  }

}
