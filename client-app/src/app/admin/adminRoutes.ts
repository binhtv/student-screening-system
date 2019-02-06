
import { CreatingExamComponent } from './create-question/creating-question.component';
import { ManagingStaffComponent} from './managing-staff/create-staff.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AdminComponent } from './admin.component';
import { LoginComponent } from './login/login.component';

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
    { path: 'login', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
