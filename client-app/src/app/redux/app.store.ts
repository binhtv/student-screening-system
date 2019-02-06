import { Exam } from '../shared/models/exam';

export interface AppStore {
    admin: any,
    staff: { students: any[] },
    student: { exam: Exam },
    campaigns: any[],
    user: any[],
}
