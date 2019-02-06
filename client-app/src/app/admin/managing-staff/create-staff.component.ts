import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../shared/services/admin.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-managing-staff',
  templateUrl: './create-staff.component.html'
})
export class ManagingStaffComponent implements OnInit {
  admissionstaff: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private admistaff: AdminService) { }

  ngOnInit() {
    this.admissionstaff = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
    });
  }

  register() {
    this.admistaff.createAdmissionStaff(this.admissionstaff.value).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['/staff']);
    });
  }
}
