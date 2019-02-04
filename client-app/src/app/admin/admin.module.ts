import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { CreatingExamComponent } from './create-question/creating-question.component';
import { ManagingStaffComponent } from './managing-staff/managing-staff.component';
import { routing } from './adminRoutes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing,
    FormsModule
  ],
  declarations: [
    EvaluationComponent,
    CreatingExamComponent,
   // ManagingStaffComponent,
    AdminhomeComponent,
    AdminLoginComponent
  ],
  exports: [
    EvaluationComponent,
    CreatingExamComponent,
  //  ManagingStaffComponent
  ]
})
export class AdminModule { }

