import { Action } from '@ngrx/store';
import { Exam } from 'src/app/shared/models/exam';

export enum ActionTypes {
	STAFF_LOAD_STUDENTS = 'STAFF_LOAD_STUDENTS',
	STUDENT_LOAD_EXAM = 'STUDENT_LOAD_EXAM',
	STUDENT_ANSWER_CHANGE = 'STUDENT_ANSWER_CHANGE',
	ADMIN_LOAD_EXAMS = 'ADMIN_LOAD_EXAMS',
}

export class LoadStudents implements Action {
	readonly type = ActionTypes.STAFF_LOAD_STUDENTS;
	constructor(public readonly payload: any[]) {}
}

export class LoadExam implements Action {
	readonly type = ActionTypes.STUDENT_LOAD_EXAM;
	constructor(public readonly payload: Exam) {}
}

export class ChangeAnswer implements Action {
	readonly type = ActionTypes.STUDENT_ANSWER_CHANGE;
	constructor(public readonly payload: any) {}
}

export class AdminLoadExams implements Action {
	readonly type = ActionTypes.ADMIN_LOAD_EXAMS;
	constructor(public readonly payload: Exam[]) {}
}

export type AppActions = LoadStudents | LoadExam | ChangeAnswer | AdminLoadExams;