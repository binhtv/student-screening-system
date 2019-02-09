import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { UnauthorizedComponent } from './shared/components/unauthorized/401.component';
import { StaffGuard } from './shared/services/staff.guard';
import { LoginComponent } from './shared/components/login/login.component';
import { HomeComponent } from './shared/components/home/home.component';
import { AdminGuard } from './shared/services/admin.guard';

const routes: Routes = [
  { path: 'student', loadChildren: './student/student.module#StudentModule' },
  { path: 'staff', loadChildren: './staff/staff.module#StaffModule', canActivate: [StaffGuard] },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule', canActivate: [AdminGuard] },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'not-found', component: NotfoundComponent },
  { path: '401', component: UnauthorizedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, /*{ preloadingStrategy: PreloadAllModules }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
