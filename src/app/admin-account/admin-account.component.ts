import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Person{
  firstName:string;
  lastName:string;
  email:string;
  dob:string;
  telephone:string;
  mobile: string;
  adress: string;
  hiringDate:string;
  contractID:string;
  function:string;
  login:string;
  mdp:string;
}

@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {

  typeOfAccount:string;

  person: Person = {firstName:'Anne', lastName:'Camper', email:'anne.camper@urss.com', dob:'05/06/1980', telephone:'0123456978', mobile:'0612345678', adress:'5 avenue du Camping', hiringDate:'10/11/2019', contractID:'ANN-CAMP-101119', function:'Administrateur', login:'anncam', mdp:'anandabest'}


  constructor() { }

  ngOnInit() {
  }

}
