
import { ActionTypes, AppActions } from '../actions/actions';

export const admin = (state: any = [], action: AppActions) => {
    switch (action.type) {
        case ActionTypes.ADMIN_LOAD_EXAMS:
            return {
                ...state,
                exams: action.payload
            };
        default: 
            return state;
    }
}