import { Exam } from '../shared/models/exam';

export interface AppStore {
    admin: { exams: Exam[], exam: Exam },
    staff: { students: any[] },
    student: { exam: Exam },
    campaigns: any[],
    user: any[],
}
