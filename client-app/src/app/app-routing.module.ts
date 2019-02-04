import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'student', loadChildren: './student/student.module#StudentModule' },
  { path: 'staff', loadChildren: './staff/staff.module#StaffModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
