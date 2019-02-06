import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Subscription } from 'rxjs';

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
  private authListenerSubs: Subscription;
  private authListenerSubsRole: Subscription;

  constructor(private authService: AuthService ) { }

  ngOnInit() {
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.isAdmin = this.authService.isAdmin();
    this.isStaff = this.authService.isStaff();
    // this.isRole = this.authService.getIsRole();
    // this.authListenerSubs = this.authService
    // .getAuthStatusListener()
    // .subscribe(isAuthenticated => {
    //     this.userIsAuthenticated = isAuthenticated;
    // });

    // this.authListenerSubsRole = this.authService
    // .getAuthStatusListenerRole()
    // .subscribe(isAuthenticatedRole => {
    //   this.isRole = isAuthenticatedRole;
    // });
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    //this.authListenerSubs.unsubscribe();
  }

}
