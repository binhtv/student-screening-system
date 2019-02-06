import { Pipe, PipeTransform } from '@angular/core';
import { Exam } from '../models/exam';

@Pipe({
    name: 'filterByEmail',
    pure: false
})
export class FilterByEmail implements PipeTransform {
    transform(items: Exam[], filter: string): any {
		debugger;
        if (!items || !filter) {
            return items;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return items.filter(item => item.studentEmail.indexOf(filter) !== -1);
    }
}