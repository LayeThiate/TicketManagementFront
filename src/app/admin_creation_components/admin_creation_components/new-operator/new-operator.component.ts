import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-operator',
  templateUrl: './new-operator.component.html',
  styleUrls: ['./new-operator.component.css']
})
export class NewOperatorComponent implements OnInit {

  //display bools
  modification:boolean = false;
  
  firstName: string;
  lastName: string;
  birthDate: string;
  email: string;
  telephone: string;
  portable: string;
  adress: string;
  hiringDate: string;
  contractID: string;
  userName: string;
  locale: string;
  password: string;

  id: string;

  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    //TODO:get company data from link
    this.id=this._Activatedroute.snapshot.paramMap.get("id");

    if(this.id != null){
      //Id found in the href
      this.modification = true; //to change page title
      //get data from DB
      
      //fill data in form
        //contract id
      var inputElem = <HTMLInputElement>document.getElementById("contract-id-input");
      inputElem.value = this.id;

      inputElem = <HTMLInputElement>document.getElementById("first-name-input");
      inputElem.value = this.firstName;

      inputElem = <HTMLInputElement>document.getElementById("last-name-input");
      inputElem.value = this.lastName;

      inputElem = <HTMLInputElement>document.getElementById("dob-input");
      inputElem.value = this.birthDate;

      inputElem = <HTMLInputElement>document.getElementById("email-input");
      inputElem.value = this.email;

      inputElem = <HTMLInputElement>document.getElementById("telephone-input");
      inputElem.value = this.telephone;

      inputElem = <HTMLInputElement>document.getElementById("portable-input");
      inputElem.value = this.portable;

      inputElem = <HTMLInputElement>document.getElementById("adress-input");
      inputElem.value = this.adress;

      inputElem = <HTMLInputElement>document.getElementById("hiring-date-input");
      inputElem.value = this.hiringDate;

      //add fill for skills

      //get data for resp status

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

  createOperator(){
    //TODO: backend call to create ticket in DB
    //Testing log
    console.log("Creating operator ");
    console.log("Nom: " + this.firstName);
    console.log("Prenom: " + this.lastName);
    console.log("Date de naissance: " + this.birthDate);
    console.log("Email: " + this.email);
    console.log("Telephone: " + this.telephone);
    console.log("Portable: " + this.portable);
    console.log("Adresse: " + this.adress);
    console.log("Date d'embauche: " + this.hiringDate);
    console.log("Id du contrat: " + this.contractID);
    console.log("Login: " + this.userName);
    console.log("Mot de passe: " + this.password);

    //TODO: backend call to create ticket in DB

    //Come back to the previous page after creation
    //this.cancel();
  }

  cancel(){
    window.history.back();
  }
}
