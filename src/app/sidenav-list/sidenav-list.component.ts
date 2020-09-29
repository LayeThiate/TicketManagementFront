import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../auth/authentication.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']

})
export class SidenavListComponent implements OnInit {
	
  showSubmenu: boolean = true;
  ticketsItemSelected: boolean = true;

  constructor(
	private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  logOut(){
	this.authService.logout();
  }
  
  changingMenusBooleans(){
	if(!this.ticketsItemSelected){
		this.showSubmenu = true;
	}
	else{
		this.showSubmenu = !(this.showSubmenu);
	}
	this.ticketsItemSelected = true;
  }
  
}
