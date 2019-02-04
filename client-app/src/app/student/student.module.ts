import { NgModule } from '@angular/core';
import { StudentComponent } from './student.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		StudentComponent,
	],
	imports: [CommonModule, RouterModule.forChild([
		{ path: '', component: StudentComponent }
	])],
	providers: [],
	bootstrap: []
})
export class StudentModule { }
