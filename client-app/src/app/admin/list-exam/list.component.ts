import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/shared/models/exam';
import { ApiResponse } from '../../shared/models/api-response';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/redux/app.store';
import { Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AdminLoadExams } from 'src/app/redux/actions/actions';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-list-exam',
  templateUrl: './list.component.html',
})
export class ListExamComponent implements OnInit {
  exams: Observable<Array<Exam>>;
  sending: boolean = false;
  searchForm: FormGroup;
  searchingText: string = '';
  private subscription: Subscription;


  constructor(private store: Store<AppStore>, private router: Router, private adminService: AdminService, private formBuilder: FormBuilder) {
    this.exams = store.select(store => store.admin.exams);
    this.searchForm = this.formBuilder.group({
      searchEmail: ['']
    });
  }

  ngOnInit() {
    this.adminService.loadExams().subscribe((resp: ApiResponse) => {
      if(resp.code === 1) {
        this.store.dispatch(new AdminLoadExams(resp.data));
      } else {
        //this.store.dispatch(new Error(err));
      }
    });

    // this.subscription = this.exams.subscribe(exams => {
    //   console.log(exams);
    // });

    this.searchEmail.valueChanges.pipe(debounceTime(200)).subscribe(str => {
      this.searchingText = str;
    });
  }

  publishResult($event, examId) {
    this.adminService.publishExamResult(examId).subscribe((resp: ApiResponse) => {
      if(resp.code === 1) {
        $event.target.parentNode.innerHTML = '<span class="success">Sent</span>';
      } else {
        $event.target.parentNode.innerHTML = '<span class="error">Fail to sent</span>';
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  get searchEmail() {
    return this.searchForm.get('searchEmail');
  }
}
