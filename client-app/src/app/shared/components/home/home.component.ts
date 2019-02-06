import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAdmin = false;
  isStaff = false;
  userIsAuthenticated = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin();
    this.isStaff = this.authService.isStaff();
    this.userIsAuthenticated = this.authService.getIsAuth();
  }
}
