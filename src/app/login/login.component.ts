import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav'

import { AuthenticationService } from './../auth/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	form: FormGroup;
	private formSubmitAttempt: boolean;
	title = 'URSS';

	constructor(
		private fb: FormBuilder,
		private authService: AuthenticationService
	) {}

	ngOnInit() {
		this.form = this.fb.group({
		  userName: ['', Validators.required],
		  password: ['', Validators.required]
		});
	}

	isFieldInvalid(field: string) {
		return (
		  (!this.form.get(field).valid && this.form.get(field).touched) ||
		  (this.form.get(field).untouched && this.formSubmitAttempt)
		);
	}

	onSubmit() {
		if (this.form.valid) {
		  this.authService.login(this.form.value);
		}
		this.formSubmitAttempt = true;
	}

}
