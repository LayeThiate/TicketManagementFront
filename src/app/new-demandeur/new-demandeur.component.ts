import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-demandeur',
  templateUrl: './new-demandeur.component.html',
  styleUrls: ['./new-demandeur.component.css']
})
export class NewDemandeurComponent implements OnInit {

  //display bools
  modification:boolean = true;

  firstName: string;
  lastName: string;
  company: string;
  email:string;
  userName: string;
  password: string;

  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    //TODO:get company data from link
    this.company=this._Activatedroute.snapshot.paramMap.get("companyName");

    if(this.company != null){
      //Id found in the href
      this.modification = true; //to change page title
      //get data from DB
      
      //fill data in form
      var inputElem = <HTMLInputElement>document.getElementById("company-name-input");
      inputElem.value = this.company;

      inputElem = <HTMLInputElement>document.getElementById("first-name-input");
      inputElem.value = this.firstName;

      inputElem = <HTMLInputElement>document.getElementById("last-name-input");
      inputElem.value = this.lastName;

      inputElem = <HTMLInputElement>document.getElementById("email-input");
      inputElem.value = this.email;

      inputElem = <HTMLInputElement>document.getElementById("user-name-input");
      inputElem.value = this.userName;

      inputElem = <HTMLInputElement>document.getElementById("pswd-input");
      inputElem.value = this.password;
    }
    else{
      //no data id found
      this.modification = false;
    }
  }

  generateLogins(){
    //TODO: function to create login and password
    //Tesing log
    this.userName = "TestUserName";
    this.password = "TestPassword";
  }

  getLogin(){
    if(this.userName != null)
      return this.userName;
    else
      return "";
  }

  getPswd(){
    if(this.password != null)
      return this.password;
    else
      return "";
  }

  cancel(){
    window.history.back();
  }
}
