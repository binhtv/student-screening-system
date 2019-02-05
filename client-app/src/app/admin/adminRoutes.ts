
import { CreatingExamComponent } from './create-question/creating-question.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin.component';

export const routes: Routes = [
    { path: '', component: AdminComponent },
    { path: 'create-question', component: CreatingExamComponent },
    { path: 'login', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
