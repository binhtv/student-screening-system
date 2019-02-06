
import { CreatingExamComponent } from './create-question/creating-question.component';
import { ManagingStaffComponent} from './managing-staff/create-staff.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';
import { ReviewExamComponent } from './review-exam/review-exam.component';
import { ListExamComponent } from './list-exam/list.component';

export const routes: Routes = [
    { path: ''},
    {
        path: 'create-question', component: CreatingExamComponent
    },
    {
        path: 'create-staff', component: ManagingStaffComponent
    },
    { path: '', component: AdminComponent },
    { path: 'create-question', component: CreatingExamComponent },
    { path: 'login', component: LoginComponent },
    { path: 'review-exam/:exam_id', component: ReviewExamComponent},
    { path: 'exams', component: ListExamComponent}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
