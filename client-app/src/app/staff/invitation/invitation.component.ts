import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms'
import { AppStore } from '../../redux/app.store';
import { LoadStudents } from 'src/app/redux/actions/actions';
import { StaffService } from '../../shared/services/staff.service';
import { ApiResponse } from 'src/app/shared/models/api-response';
import { MustSelectStudentValidator } from 'src/app/shared/validator/must-select-student.validator';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {
  students: Observable<Array<any>>;
  totalStudent: number;
  inviteForm: FormGroup;
  sending: boolean = false;
  succMessage: string = '';
  errorMessage: string = '';
  emailEditor = ClassicEditor;
  private subscription: Subscription;

  constructor(private store: Store<AppStore>, private staffService: StaffService,
    private formBuilder: FormBuilder) {
    this.students = store.select(store => store.staff.students);
    this.inviteForm = this.formBuilder.group({
      checkAll: [false, []],
      emails: this.formBuilder.array([], [MustSelectStudentValidator]),
      emailSubject: ['Your exam is ready', [Validators.required]],
      emailMessage: ['<p><strong>Dear ##STUDENT_NAME##,</strong></p><p>This is your exam ##EXAM_LINK##,</p><p>You have <strong>120 minutes</strong> to complete. You can only take this exam once.</p><p>Good luck.</p>']
    });
  }

  ngOnInit() {
    this.staffService.loadStudents().subscribe((resp: ApiResponse) => {
      if (resp.code === 1) {
        this.store.dispatch(new LoadStudents(resp.data));
      } else {
        //this.store.dispatch(new Error(students));
      }
    });

    this.subscription = this.students.subscribe(
      students => {
        console.log(students);
        this.totalStudent = students ? students.length : 0;
      },
      error => console.log(error)
    );

    this.inviteForm.valueChanges.subscribe(
      (data: any) => {
        console.log(data);
        this.succMessage = '';
        this.errorMessage = '';
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (this.inviteForm.valid) {
      this.sending = true;
      this.staffService.sendInvitation(this.inviteForm.value).subscribe((result : ApiResponse) => {
        this.sending = false;
        if(result.code === 1) {
          this.succMessage = result.data;
        } else {
          this.errorMessage = 'Error occurred';
        }
      });
    }
  }

  onStudentSelectChange(email: string, checked: boolean) {
    const emailFormArray = <FormArray>this.inviteForm.controls.emails
    emailFormArray.markAsTouched();
    emailFormArray.markAsDirty();
    if (checked) {
      emailFormArray.push(new FormControl(email));
    } else {
      let indexes = emailFormArray.controls.findIndex(c => c.value == email);
      emailFormArray.removeAt(indexes);
    }

    //Make change on Select all check box
    this.checkAll.setValue(emailFormArray.controls.length === this.totalStudent);
  }

  onCheckAll(checked: boolean) {
    console.log('comming soon');
  }

  get emailSubject() {
    return this.inviteForm.get('emailSubject');
  }

  get emailMessage() {
    return this.inviteForm.get('emailMessage');
  }

  get emails() {
    return this.inviteForm.get('emails');
  }

  get checkAll() {
    return this.inviteForm.get('checkAll');
  }
}
