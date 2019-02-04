import { NgModule } from '@angular/core';
import { InvitationComponent } from './invitation/invitation.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaffService } from '../shared/services/staff.service';

@NgModule({
	declarations: [InvitationComponent, DashboardComponent],
	imports: [CommonModule, RouterModule.forChild([
		{ path: '', component: DashboardComponent },
		{ path: 'invite', component: InvitationComponent }
	])],
	providers: [StaffService],
	bootstrap: []
})
export class StaffModule { }
