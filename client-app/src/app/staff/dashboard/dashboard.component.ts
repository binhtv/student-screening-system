import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { AdminService } from '../../shared/services/admin.service';
import { User } from '../../shared/models/user';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  //staffForm: FormGroup;
  users;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService ) {
    // this.staffForm = this.formBuilder.group({
    //   checkAll: [false, []]
    // });
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
    // return this.adminService.updateUserStatus(this.emailArray)
    //         .subscribe((response) => {
    //           console.log(response);
    //         },
    //         error => {
    //           return console.log(error);
    //         });
  }

  onUserSelectChange(email: string, status: boolean) {
    this.adminService.updateUserStatus(email, status);
  }
}
