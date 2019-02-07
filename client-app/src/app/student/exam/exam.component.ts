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
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss'],
})
export class ExamComponent implements OnInit {
  exam: Observable<Exam>;
  examForm: FormGroup;
  examData: Exam;
  sending: any = false;
  totalTime: number = 60 * 60 * 2;//Two hours
  notifyAt: number = 15 * 60;
  private subscription: Subscription;


  constructor(private store: Store<AppStore>, private router: Router, private studentService: StudentService, private formBuilder: FormBuilder) {
    this.exam = store.select(store => store.student.exam);
    this.examForm = this.formBuilder.group({
      answer1: ['', [Validators.required]],
      answer2: ['', [Validators.required]],
      answer3: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.studentService.loadExam().subscribe((resp: ApiResponse) => {
      if (resp.code === 1 && resp.data) {
        this.store.dispatch(new LoadExam(resp.data));
        //Start the exam
        this.studentService.startExam().subscribe((resp: ApiResponse) => {
          if (resp.code === 1) {
            console.log('success start');
          } else {
            this.router.navigate(['not-found']);
          }
        }, err => {
          this.router.navigate(['not-found']);
        });
        
      } else {
        this.router.navigate(['not-found']);
      }
    });

    this.subscription = this.exam.subscribe(
      exam => this.examData = exam,
      error => console.log(error)
    );

    const DEBOUNCE_TIME = 1000;
    //Subscribe change on question 1
    this.answer1.valueChanges.pipe(debounceTime(DEBOUNCE_TIME)).subscribe(answer => {
      this.store.dispatch(new ChangeAnswer({
        question: 0,
        answer
      }));
    });
    //Subscribe change on question 1
    this.answer2.valueChanges.pipe(debounceTime(DEBOUNCE_TIME)).subscribe(answer => {
      this.store.dispatch(new ChangeAnswer({
        question: 1,
        answer
      }));
    });
    //Subscribe change on question 1
    this.answer3.valueChanges.pipe(debounceTime(DEBOUNCE_TIME)).subscribe(answer => {
      this.store.dispatch(new ChangeAnswer({
        question: 2,
        answer
      }));
    });
  }

  onSubmit() {
    if (confirm('Are you sure you want to submit?')) {
      if (this.examForm.valid) {
        this.sending = true;
        this.studentService.submitExam(this.examData).subscribe((resp: ApiResponse) => {
          this.sending = false;
          console.log(resp);
          this.router.navigate(['/student', 'complete']);
        });
      }
    }
  }

  onNoMoreTime() {
    this.sending = true;
    this.studentService.submitExam(this.examData).subscribe((resp: ApiResponse) => {
      this.sending = false;
      console.log(resp);
      this.router.navigate(['/student', 'complete']);
    });
  }

  lessTimeMore() {
    alert('Hurry up, you have not much time to do!');
  }

  @HostListener('window:beforeunload', ['$event'])
  warning($event) {
    return false;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /** Prevent editor from losing focus */
  identify(index, item) {
    return item.title;
  }

  get answer1() {
    return this.examForm.get('answer1');
  }

  get answer2() {
    return this.examForm.get('answer2');
  }
  get answer3() {
    return this.examForm.get('answer3');
  }
}
