import { NgModule } from '@angular/core';
import { StudentComponent } from './student.component';
import { CampaignService } from '../shared/services/campaign.service';

@NgModule({
	declarations: [
		StudentComponent,
	],
	imports: [],
	providers: [CampaignService],
	bootstrap: [StudentComponent]
})
export class StudentModule { }
