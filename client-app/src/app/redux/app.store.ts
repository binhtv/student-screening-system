import { Exam } from '../shared/models/exam';

export interface AppStore {
    admin: { exams: Exam[], exam: Exam },
    staff: { students: any[], invitations: Exam[]},
    student: { exam: Exam },
    user: any[],
}
