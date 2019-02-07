
import { ActionTypes, AppActions } from '../actions/actions';

export function admin(state: any = [], action: AppActions){
    switch (action.type) {
        case ActionTypes.ADMIN_LOAD_EXAMS:
            return {
                ...state,
                exams: action.payload
            };
        case ActionTypes.ADMIN_LOAD_EXAM:
            return {
                ...state,
                exam: action.payload
            }
        case ActionTypes.ADMIN_CHANGE_EXAM_STATUS:
            return {
                ...state,
                exam: {
                    ...state.exam,
                    status: action.payload
                }
            }
        default: 
            return state;
    }
}