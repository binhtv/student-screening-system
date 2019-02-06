
import { CreatingExamComponent } from './create-question/creating-question.component';
import { ManagingStaffComponent} from './managing-staff/create-staff.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminComponent } from './admin.component';
import { ReviewExamComponent } from './review-exam/review-exam.component';
import { ListExamComponent } from './list-exam/list.component';
import { ListquestionsComponent } from './listquestions/listquestions.component'
import { ListStaffComponent } from './list-staff/list-staff.component';

export const routes: Routes = [
    { path: ''},
    {
        path: 'create-question', component: CreatingExamComponent
    },
    {
        path: 'create-staff', component: ManagingStaffComponent
    },
    { path: 'staffs', component: ListStaffComponent},
    { path: '', component: AdminComponent },
    { path: 'create-question', component: CreatingExamComponent },
    { path: 'review-exam/:exam_id', component: ReviewExamComponent},
    { path: 'exams', component: ListExamComponent},
    { path: 'question', component: ListquestionsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
