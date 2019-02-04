import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {
  FormBuilder,
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@NgModule({
  declarations:
  [
    LoginComponent
  ],
	imports: [CommonModule, RouterModule.forChild([
		{ path: '', component: LoginComponent },
		{ path: 'login', component: LoginComponent }
	])],
	providers: [

  ],
	bootstrap: []
})
export class AdminModule { }

