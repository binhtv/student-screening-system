import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms'
import { AppStore } from '../../redux/app.store';
import { LoadStudents } from 'src/app/redux/actions/actions';
import { StaffService } from '../../shared/services/staff.service';
import { ApiResponse } from 'src/app/shared/models/api-response';
import { MustSelectStudentValidator } from 'src/app/shared/validator/must-select-student.validator';

@Component({
  selector: 'app-invitation',
  templateUrl: './invitation.component.html',
  styleUrls: ['./invitation.component.scss']
})
export class InvitationComponent implements OnInit {
  students: Observable<Array<any>>;
  totalStudent: number;
  inviteForm: FormGroup;
  private subscription: Subscription;

  constructor(private store: Store<AppStore>, private staffService: StaffService, 
    private formBuilder: FormBuilder) {
    this.students = store.select(store => store.staff.students);
    this.inviteForm = this.formBuilder.group({
      checkAll: [false, []],
      emails: this.formBuilder.array([], [MustSelectStudentValidator]),
      emailSubject: ['', [Validators.required]],
      emailMessage: ['']
    });
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
        console.log(students);
        this.totalStudent = students ? students.length : 0;
      },
      error => console.log(error)
    );

    this.inviteForm.valueChanges.subscribe(
      (data: any) => {
        console.log(data);
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    console.log(this.inviteForm.value);
  }

  onStudentSelectChange(email: string, checked: boolean) {
    const emailFormArray = <FormArray>this.inviteForm.controls.emails
    emailFormArray.markAsTouched();
    emailFormArray.markAsDirty();
    if(checked) {
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
