
import { CreatingExamComponent } from "./create-question/creating-question.component";
import { ManagingStaffComponent} from './managing-staff/managing-staff.component';
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

export const routes: Routes = [
    { path: ''},
    {
        path: 'create-question', component: CreatingExamComponent
        /*children: [
            { path: 'exam', component: CreatingExamComponent },
            { path: 'evaluation', component: EvaluationComponent },
            { path: 'managestaff', component: ManagingStaffComponent }
        ]*/

    },
{
    path: 'manage-staff', component: ManagingStaffComponent
}
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);