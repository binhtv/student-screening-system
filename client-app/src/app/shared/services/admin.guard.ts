import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
	constructor(private router: Router, private authService: AuthService) { }
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		if(this.authService.getIsAuth() && this.authService.isAdmin()) {
			return true;
		} else {
			if(this.authService.isExpired()) {
				this.authService.logout();
			} else {
				this.router.navigate(['401']);
			}
			return false;
		}
	}
}