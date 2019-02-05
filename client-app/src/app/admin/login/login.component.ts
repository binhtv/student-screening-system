import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';
import { LoginResponse } from 'src/app/shared/models/login-response';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userIsAuthenticated = false;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [1, [Validators.required]]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const login = { email: this.loginForm.value.email, password: this.loginForm.value.password };

    // this.authService
    //   .login(login)
    //   .subscribe(
    //     (response: LoginResponse) => {
    //       this.router.navigate(['/']);
    //       const role = response.role;
    //       if (role === 'admin') {
    //         this.router.navigate(['/']);
    //         this.authService.setIsAuth(true);
    //       } else {
    //         this.router.navigate(['/staff']);
    //       }

    //     },
    //     error => {
    //       return console.log(error);
    //     }
    //   );

    this.authService.login(login);

  }
}
