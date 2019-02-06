import { NgModule } from '@angular/core';
import { InvitationComponent } from './invitation/invitation.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StaffService } from '../shared/services/staff.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ListInviationComponent } from './list-invitation/list.component';

@NgModule({
	declarations: [InvitationComponent, DashboardComponent, ListInviationComponent],
  imports:
    [
      CommonModule,
      ReactiveFormsModule,
      CKEditorModule,
      FormsModule,
      RouterModule.forChild([
        { path: '', component: DashboardComponent },
        { path: 'invite', component: InvitationComponent },
        { path: 'invitations', component: ListInviationComponent}
    ])
  ],
	providers: [StaffService],
	bootstrap: []
})
export class StaffModule { }
