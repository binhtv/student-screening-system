import { Action } from '@ngrx/store';

export enum ActionTypes {
	STAFF_LOAD_STUDENTS = 'STAFF_LOAD_STUDENTS'
}

export class LoadStudents implements Action {
	readonly type = ActionTypes.STAFF_LOAD_STUDENTS;
	constructor(public readonly payload: any[]) {}
}

export type AppActions = LoadStudents;