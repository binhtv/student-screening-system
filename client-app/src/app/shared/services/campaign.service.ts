import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppStore } from '../../redux/app.store';
import { AddCampaign } from 'src/app/redux/actions/actions';

@Injectable()
export class CampaignService {
	campaigns: Observable<Array<any>>;
	constructor(private store: Store<AppStore>) {
		this.campaigns = store.select(store => store.campaigns);
	}

	addCampaign(campaign) {
		this.store.dispatch(new AddCampaign(campaign));
	}
}