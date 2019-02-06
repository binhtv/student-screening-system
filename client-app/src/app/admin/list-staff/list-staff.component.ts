import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../shared/services/admin.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-list-staff',
  templateUrl: './list-staff.component.html',
  styleUrls: ['./list-staff.component.scss']
})

export class ListStaffComponent implements OnInit {

  users;

  constructor(private adminService: AdminService ) {
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

  onUserSelectChange(email: string, status: boolean) {
    this.adminService.updateUserStatus(email, status);
  }
}
