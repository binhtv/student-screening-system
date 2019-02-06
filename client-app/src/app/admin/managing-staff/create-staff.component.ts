import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../../shared/services/admin.service';

@Component({
  selector: 'app-managing-staff',
  templateUrl: './create-staff.component.html'
})
export class ManagingStaffComponent implements OnInit {
  admissionstaff: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private admistaff: AdminService) { }

  ngOnInit() {
    this.admissionstaff = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  register() {
    this.admistaff.createAdmissionStaff(this.admissionstaff.value).subscribe(resp => {
      console.log(resp);
      this.router.navigate(['/admin', 'staffs']);
    });
  }

  get firstName() {
    return this.admissionstaff.get('firstName');
  }
  get lastName() {
    return this.admissionstaff.get('lastName');
  }
  get email() {
    return this.admissionstaff.get('email');
  }
  get password() {
    return this.admissionstaff.get('password');
  }
}
