import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../auth/authentication.service';

@Component({
  selector: 'app-sidenav-operator',
  templateUrl: './sidenav-operator.component.html',
  styleUrls: ['./sidenav-operator.component.css']
})
export class SidenavOperatorComponent implements OnInit {

  constructor(
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout();
  }

}
