import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()
export class StaffGuard implements CanActivate {
	constructor(private router: Router) { }
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
		const role = localStorage.getItem('role');
		if(role === 'staff') {
			return true;
		} else {
			this.router.navigate(['401']);
			return false;
		}
	}
}