import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
	name: 'durationToHours'
})
export class DurationToHoursPipe implements PipeTransform {

	transform(value: number): string {
		value = value/1000;
		const hours: number = Math.floor(value/3600);
		const minutes: number = Math.floor((value - hours * 3600) / 60);
		const seconds: number = Math.floor((value - hours * 3600 - minutes * 60));
		return `${hours}:${minutes}:${seconds}`;
	}

}