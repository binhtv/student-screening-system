import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/shared/models/exam';
import { ApiResponse } from '../../shared/models/api-response';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/redux/app.store';
import { Observable, Subscription } from 'rxjs';
import { StaffLoadInvitations } from 'src/app/redux/actions/actions';
import { StaffService } from 'src/app/shared/services/staff.service';

@Component({
  selector: 'app-list-exam',
  templateUrl: './list.component.html',
})
export class ListInviationComponent implements OnInit {
  invitations: Observable<Array<Exam>>;
  sending: boolean = false;
  private subscription: Subscription;


  constructor(private store: Store<AppStore>, private router: Router, private staffService: StaffService) {
    this.invitations = store.select(store => store.staff.invitations);
  }

  ngOnInit() {
    this.staffService.loadInvitations().subscribe((resp: ApiResponse) => {
      if(resp.code === 1) {
        this.store.dispatch(new StaffLoadInvitations(resp.data));
      } else {
        //this.store.dispatch(new Error(err));
      }
    }, err => {
      if(err.status === 401) {
        this.router.navigate(['/401']);
      }
    });

    this.subscription = this.invitations.subscribe(invitations => {
      console.log(invitations);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
