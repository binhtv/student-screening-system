
import { Action } from '@ngrx/store';
import { ActionTypes } from '../actions/actions';

export const campaigns = (state: any = [], action: Action) => {
    switch (action.type) {
        case ActionTypes.ADD_CAMPAIGNS:
            return [...state, action['payload']];
        default: 
            return state;
    }
}