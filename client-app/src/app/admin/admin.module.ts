import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatingExamComponent } from './create-question/creating-question.component';
import { routing } from './adminRoutes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin.component';
import { ManagingStaffComponent} from './managing-staff/create-staff.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { ReviewExamComponent } from './review-exam/review-exam.component';
import { ListExamComponent } from './list-exam/list.component';
import { DurationToHoursPipe } from '../shared/pipes/durationToHours.pipe';
import { ListquestionsComponent } from './listquestions/listquestions.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing,
    FormsModule,
    AceEditorModule
  ],
  declarations: [
    DurationToHoursPipe,
    CreatingExamComponent,
    LoginComponent,
    AdminComponent,
    ManagingStaffComponent,
    ReviewExamComponent,
    ListExamComponent,
    ListquestionsComponent
  ],
  exports: [
    CreatingExamComponent,
    ManagingStaffComponent
  ]
})
export class AdminModule { }
