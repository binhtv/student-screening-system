import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [1, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    // const login = { email: this.loginForm.value.email, password: this.loginForm.value.password };
    // this.authService
    //   .login(login)
    //   .subscribe(
    //     response => {
    //       //localStorage.setItem('_token',response);
    //       console.log(response);
    //     },
    //     error => {
    //       return console.log(error);
    //     }
    //   );
  }
}
