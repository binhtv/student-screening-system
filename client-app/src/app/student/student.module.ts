import { NgModule } from '@angular/core';
import { StudentComponent } from './student.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExamComponent } from './exam/exam.component';
import { StudentService } from '../shared/services/student.service';
import { ReactiveFormsModule } from '@angular/forms';
import { AceEditorModule } from 'ng2-ace-editor';
import { CompleteComponent } from './complete/complete.component';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
	declarations: [
		StudentComponent,
		ExamComponent,
		CompleteComponent
	],
	imports: [CommonModule, 
		ReactiveFormsModule,
		AceEditorModule,
		CountdownModule,
		RouterModule.forChild([
		{ path: 'take-exam', component: StudentComponent },
		{ path: 'start-exam', component: ExamComponent },
		{ path: 'complete', component: CompleteComponent }
	])],
	providers: [StudentService],
	bootstrap: []
})
export class StudentModule { }
