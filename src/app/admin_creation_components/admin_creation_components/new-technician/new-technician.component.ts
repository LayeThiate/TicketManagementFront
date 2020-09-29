import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatFormFieldControl, MatFormField } from '@angular/material';

import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-new-technician',
  templateUrl: './new-technician.component.html',
  styleUrls: ['./new-technician.component.css']
})
export class NewTechnicianComponent implements OnInit {

  //display bools
  modification:boolean = false;

  @ViewChild('repondAField') repondAField:MatFormFieldControl<MatFormField>;
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
  skills: string;
  answersTo: string;
  responsable = false;

  id: string;

  constructor(private userS:UserService, private _Activatedroute:ActivatedRoute) { }

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

      inputElem = <HTMLInputElement>document.getElementById("answers-to-input");
      inputElem.value = this.answersTo;

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

  isResponsable(){
    return !this.responsable;
  }

  createTechnician(){
    //TODO: backend call to create ticket in DB
    //Testing log
    console.log("Creating technician ");
    console.log("Nom: " + this.firstName);
    console.log("Prenom: " + this.lastName);
    console.log("Date de naissance: " + this.birthDate);
    console.log("Email: " + this.email);
    console.log("Telephone: " + this.telephone);
    console.log("Portable: " + this.portable);
    console.log("Adresse: " + this.adress);
    console.log("Date d'embauche: " + this.hiringDate);
    console.log("Id du contrat: " + this.contractID);
    console.log("Compétences: " + this.skills);
    console.log("Rend compte à: " + this.answersTo);
    console.log("Login: " + this.userName);
    console.log("Mot de passe: " + this.password);
    console.log("Is responsable:" + this.responsable);

    //TODO: backend call to create technician in DB
    var user = new User(this.userName, this.password, this.lastName, this.firstName, this.email, null);
    this.userS.createUser(user);
    
    //Come back to the previous page after creation
    //this.cancel();
  }

  cancel(){
    window.history.back();
  }

}
