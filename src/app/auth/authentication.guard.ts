import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
	constructor(
		private authService: AuthenticationService, 
		private router: Router) {}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.authService.isLoggedIn.pipe(
		  take(1),
		  map((isLoggedIn: boolean) => {
			if (!isLoggedIn) {
			  this.router.navigate(['/login']);
			  return false;
			}
			return true;
		  })
		);
	}
  
}
