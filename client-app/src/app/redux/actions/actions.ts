import { Action } from '@ngrx/store';

export enum ActionTypes {
	ADD_CAMPAIGNS = 'ADD_CAMPAIGNS'
}

export class AddCampaign implements Action {
	readonly type = ActionTypes.ADD_CAMPAIGNS;
	constructor(public payload: any[]) {}
}