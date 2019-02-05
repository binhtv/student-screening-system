import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatingExamComponent } from './create-question/creating-question.component';
import { routing } from './adminRoutes';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    routing,
    FormsModule
  ],
  declarations: [
    CreatingExamComponent,
    LoginComponent,
    AdminComponent
  ],
  exports: [
    CreatingExamComponent,
  ]
})
export class AdminModule { }

