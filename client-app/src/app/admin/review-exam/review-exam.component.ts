import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Exam } from 'src/app/shared/models/exam';
import { ApiResponse } from '../../shared/models/api-response';
import { FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/redux/app.store';
import { Observable, Subscription } from 'rxjs';
import { AdminLoadExam, AdminChangeExamStatus } from 'src/app/redux/actions/actions';
import { AdminService } from 'src/app/shared/services/admin.service';

@Component({
  selector: 'app-review-exam',
  templateUrl: './review-exam.component.html',
})
export class ReviewExamComponent implements OnInit {
  exam: Observable<Exam>;
  sending: boolean = false;
  examData: Exam;
  snapshotIndexes: number[] = [];
  successMessage: string = '';
  errorMessage: string = '';
  private subscription: Subscription;


  constructor(private store: Store<AppStore>, private route: ActivatedRoute, private router: Router, private adminService: AdminService, private formBuilder: FormBuilder) {
    this.exam = store.select(store => store.admin.exam);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (!params.exam_id) {
        return this.router.navigate(['not-found']);
      }

      this.adminService.loadExam(params.exam_id).subscribe((resp: ApiResponse) => {
        if (resp.code === 1) {
          this.store.dispatch(new AdminLoadExam(resp.data));
        } else {
          return this.router.navigate(['not-found']);
        }
      }, err => {
        return this.router.navigate(['not-found']);
      })
    })
    this.subscription = this.exam.subscribe(exam => {
      this.examData = exam;
      if (this.examData) {
        this.examData.questions.forEach((q, index) => {
          this.snapshotIndexes[index] = q.answers.length;
        });
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  firstSnapShot(questionIndex) {
    this.snapshotIndexes[questionIndex] = 1;
  }

  nextSnapShot(questionIndex) {
    this.snapshotIndexes[questionIndex]++;
    if (this.snapshotIndexes[questionIndex] > this.examData.questions[questionIndex].answers.length) {
      this.snapshotIndexes[questionIndex] = this.examData.questions[questionIndex].answers.length;
    }
  }

  previousSnapShot(questionIndex) {
    this.snapshotIndexes[questionIndex]--;
    if (this.snapshotIndexes[questionIndex] < 1) {
      this.snapshotIndexes[questionIndex] = 1;
    }
  }

  showFinalSnapshot(questionIndex) {
    this.snapshotIndexes[questionIndex] = this.examData.questions[questionIndex].answers.length;
  }

  changeStatus(status) {
    if (confirm(`Are you sure you want to update status to '${status}'?`)) {
      this.sending = true;
      this.adminService.updateExamStatus(status, this.examData._id).subscribe((resp: ApiResponse) => {
        this.sending = false;
        if(resp.code === 1) {
          this.successMessage = 'Success!';
          this.store.dispatch(new AdminChangeExamStatus(status));
        } else {
          this.errorMessage = 'Error!'
        }
      }, err => {
        this.sending = false;
        this.errorMessage = 'Unknow error!';
      });
    }
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
