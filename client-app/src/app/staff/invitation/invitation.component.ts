import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStore } from '../../redux/app.store';
import { LoadStudents } from 'src/app/redux/actions/actions';
import { StaffService } from '../../shared/services/staff.service';
import { ApiResponse } from 'src/app/shared/models/api-response';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {
  students: Observable<Array<any>>;
  private subscription: Subscription;

  constructor(private store: Store<AppStore>, private staffService: StaffService) {
    this.students = store.select(store => store.staff.students);
  }

  ngOnInit() {
    this.staffService.loadStudents().subscribe((resp: ApiResponse) => {
      if(resp.code === 1) {
        this.store.dispatch(new LoadStudents(resp.data));
      } else {
        //this.store.dispatch(new Error(students));
      }
    });

    this.subscription = this.students.subscribe(
      students => {
        console.log(students)
      },
      error => console.log(error)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
