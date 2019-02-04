
import { CreatingExamComponent } from "./create-question/creating-question.component";
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

    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);