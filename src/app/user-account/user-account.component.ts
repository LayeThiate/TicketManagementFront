import { Component, OnInit } from '@angular/core';

export interface User{
  firstName:string;
  lastName:string;
  email:string;
  company:string;
  login:string;
  mdp:string;
}

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  user: User = {firstName:'Jane', lastName:'Doe', email:'jane.doe@urss.com', company:'IUT1920', login:'jandoe', mdp:'anandone'}

  constructor() { }

  ngOnInit() {
  }

}
