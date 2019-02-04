import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CampaignService } from '../shared/services/campaign.service';

@Component({
	selector: 'app-student',
	templateUrl: './student.component.html',
})
export class StudentComponent implements OnInit {
	campaigns: Observable<Array<any>>;
	private subscription: Subscription;
	constructor(private campaignService: CampaignService) {
		this.campaigns = this.campaignService.campaigns;
	}
	ngOnInit() {
		this.subscription = this.campaigns
			.subscribe(campaigns => console.log(campaigns)
				,
				error => console.log(error)
			);
	}

	addCampaign() {
		this.campaignService.addCampaign({name: 'Green summer'});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}