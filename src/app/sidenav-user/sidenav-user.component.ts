import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../auth/authentication.service';

@Component({
  selector: 'app-sidenav-user',
  templateUrl: './sidenav-user.component.html',
  styleUrls: ['./sidenav-user.component.css']
})
export class SidenavUserComponent implements OnInit {

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout();
  }

}
