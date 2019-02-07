import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userIsAuthenticated = false;
  errorMessage: String = '';

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      remember: [1, [Validators.required]]
    });
  }

  ngOnInit() {
    this.loginForm.valueChanges.subscribe(data => {
     this.errorMessage = '';
    });
    if(this.authService.getIsAuth() === true) {
      this.router.navigate(['/']);
    }
  }

  onSubmit() {
    const login = { email: this.loginForm.value.email, password: this.loginForm.value.password };
    this.authService.login(login, (error) => {
      if (error.status === 401) {
        this.errorMessage = 'Invalid Login';
      }
    });
  }
}
