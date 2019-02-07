import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  userIsAuthenticated = false;
  isRole = 0;
  isAdmin = false;
  isStaff = false;
  constructor(private authService: AuthService, private router: ActivatedRoute ) { }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.isAdmin = this.authService.isAdmin();
    this.isStaff = this.authService.isStaff();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
  }

}
