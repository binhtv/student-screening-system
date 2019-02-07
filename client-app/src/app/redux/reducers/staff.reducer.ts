
import { ActionTypes, AppActions } from '../actions/actions';

export function staff(state: any = [], action: AppActions) {
    switch (action.type) {
        case ActionTypes.STAFF_LOAD_STUDENTS:
            return {
                ...state,
                students: action.payload
            };
        case ActionTypes.STAFF_LOAD_INVITATIONS:
            return {
                ...state,
                invitations: action.payload
            }
        default: 
            return state;
    }
}