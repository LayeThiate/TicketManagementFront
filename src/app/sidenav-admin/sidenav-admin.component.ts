import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../auth/authentication.service';

@Component({
  selector: 'app-sidenav-admin',
  templateUrl: './sidenav-admin.component.html',
  styleUrls: ['./sidenav-admin.component.css']
})
export class SidenavAdminComponent implements OnInit {

  typeOfPerson:string = 'Administrateur';

  constructor(
  private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logout();
  }

}
