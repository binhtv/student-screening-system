import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatingExamComponent } from './create-question/creating-question.component';
import { routing } from './adminRoutes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminComponent } from './admin.component';
import { ManagingStaffComponent} from './managing-staff/create-staff.component';
import { AceEditorModule } from 'ng2-ace-editor';
import { ReviewExamComponent } from './review-exam/review-exam.component';
import { ListExamComponent } from './list-exam/list.component';
import { DurationToHoursPipe } from '../shared/pipes/durationToHours.pipe';
import { ListquestionsComponent } from './list-questions/list-questions.component';
import { ListStaffComponent } from './list-staff/list-staff.component';
import { FilterByEmail } from '../shared/pipes/filterByEmail.pipe';

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
    FilterByEmail,
    CreatingExamComponent,
    AdminComponent,
    ManagingStaffComponent,
    ReviewExamComponent,
    ListExamComponent,
    ListquestionsComponent,
    ListStaffComponent
  ],
  exports: [
    CreatingExamComponent,
    ManagingStaffComponent
  ]
})
export class AdminModule { }
