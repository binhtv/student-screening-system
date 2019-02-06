import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Exam } from 'src/app/shared/models/exam';
import { StudentService } from 'src/app/shared/services/student.service';
import { ApiResponse } from '../../shared/models/api-response';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/redux/app.store';
import { Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { LoadExam, ChangeAnswer } from 'src/app/redux/actions/actions';

@Component({
  selector: 'app-exam',
  templateUrl: './review-exam.component.html',
})
export class ReviewExamComponent implements OnInit {
  exams: Observable<Array<Exam>>;
  sending: boolean = false;
  private subscription: Subscription;


  constructor(private store: Store<AppStore>, private router: Router, private studentService: StudentService, private formBuilder: FormBuilder) {
    this.exams = store.select(store => store.admin.exams);
  }

  ngOnInit() {
    this.subscription = this.exams.subscribe(exams => {
      console.log(exams);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // get answer1() {
  //   return this.examForm.get('answer1');
  // }

  // get answer2() {
  //   return this.examForm.get('answer2');
  // }
  // get answer3() {
  //   return this.examForm.get('answer3');
  // }
}
