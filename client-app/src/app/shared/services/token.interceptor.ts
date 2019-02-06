import { Injectable } from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
	constructor() { }
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		if (request.url.indexOf('/students') !== -1) {
			const token = localStorage.getItem('student_token');
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer ${token}`
				}
			});
		} else {
			request = request.clone({
				setHeaders: {
					Authorization: `Bearer 'Replace it'`
				}
			});
		}
		return next.handle(request);
	}
}