import { NgModule } from '@angular/core';
import { StudentComponent } from './student.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { StudentService } from '../shared/services/student.service';

@NgModule({
	declarations: [
		StudentComponent,
		ExamComponent,
	],
	imports: [CommonModule, RouterModule.forChild([
		{ path: 'take-exam', component: StudentComponent },
		{ path: 'start-exam', component: ExamComponent }
	])],
	providers: [StudentService],
	bootstrap: []
})
export class StudentModule { }
