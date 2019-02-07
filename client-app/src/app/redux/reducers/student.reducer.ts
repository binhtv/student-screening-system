
import { ActionTypes, AppActions } from '../actions/actions';

export function student(state: any = [], action: AppActions) {
    switch (action.type) {
        case ActionTypes.STUDENT_LOAD_EXAM:
            return {
                ...state,
                exam: action.payload
            };
        case ActionTypes.STUDENT_ANSWER_CHANGE:
            return {
                ...state,
                exam: {
                    ...state.exam,
                    questions: state.exam.questions.map((q, index) => {
                        if(index === action.payload.question) {
                            return {
                                ...q,
                                answers: [...q.answers, action.payload.answer]
                            }
                        } else {
                            return q;
                        }
                    })
                }
            }
        default: 
            return state;
    }
}