import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

export interface User {
  userName: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

	private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(
		private router: Router
	) {}
  
	get isLoggedIn() {
		return this.loggedIn.asObservable();
	}

	login(user: User) {
		if (user.userName !== '' && user.password !== '' ) {
		  this.loggedIn.next(true);
		  this.router.navigate(['/']);
		}
	}

	logout() {
		this.loggedIn.next(false);
		this.router.navigate(['/login']);
	}
}
