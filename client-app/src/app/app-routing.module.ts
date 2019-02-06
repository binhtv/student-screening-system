import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { UnauthorizedComponent } from './shared/components/unauthorized/401.component';

const routes: Routes = [
  { path: 'student', loadChildren: './student/student.module#StudentModule' },
  { path: 'staff', loadChildren: './staff/staff.module#StaffModule' },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
  { path: 'not-found', component: NotfoundComponent },
  { path: '401', component: UnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
