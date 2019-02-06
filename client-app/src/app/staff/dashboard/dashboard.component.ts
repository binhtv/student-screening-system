import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { AdminService } from '../../shared/services/admin.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  staffForm: FormGroup;
  users;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService ) {
    this.staffForm = this.formBuilder.group({
      checkAll: [false, []]
    });
  }

  ngOnInit() {
    return this.adminService.loadStaffs()
        .subscribe((response: User) => {
            this.users = response['data'];
            console.log(response);
          },
          error => {
            return console.log(error);
          }
        );
  }

  onSubmit() {
    alert('Update Comming Soon');
  }
}
