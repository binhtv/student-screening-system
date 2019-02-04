import { FormArray } from '@angular/forms';

export function MustSelectStudentValidator(control: FormArray): { [key: string]: any } | null {
	const controls = control.controls;
	return controls && controls.length > 0 ? null : { mustSelectStudent: true };
}