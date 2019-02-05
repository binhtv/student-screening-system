import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatingExamComponent } from './create-question/creating-question.component';
import { ManagingStaffComponent} from './managing-staff/managing-staff.component';
import { routing } from './adminRoutes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing,
    FormsModule
  ],
  declarations: [
    CreatingExamComponent,
    ManagingStaffComponent

  ],
  exports: [
    CreatingExamComponent,
    ManagingStaffComponent
  ]
})
export class AdminModule { }
