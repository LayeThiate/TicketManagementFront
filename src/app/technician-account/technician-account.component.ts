import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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

export interface TechnicianDetails{
  skills:string;
  responsable:string;
}

@Component({
  selector: 'app-technician-account',
  templateUrl: './technician-account.component.html',
  styleUrls: ['./technician-account.component.css']
})
export class TechnicianAccountComponent implements OnInit {

  responsable: Person = {firstName:'Drake', lastName:'Uhlah', email:'drake.uhlah@urss.com', dob:'06/06/1966', telephone:'', mobile:'0666666666', adress:'6 boulevard des Empereurs', hiringDate:'28/10/2019', contractID:'DRA-UHL-281019', function:'Responsable technique', login:'drauhl2810', mdp:'anandaboss'}

  responsableDetails: TechnicianDetails = {skills: 'Electricien', responsable:''}

  technician: Person = {firstName:'Frigg', lastName:'Orist', email:'frigg.orist@urss.com', dob:'16/11/1960', telephone:'', mobile:'0612345678', adress:'6 rue des Frigoos', hiringDate:'10/11/2019', contractID:'FRI-ORI-281019', function:'Technicien', login:'friori1011', mdp:'anandoutofexample'}

  technicienDetails: TechnicianDetails = {skills: 'Friggoriste', responsable:'Eugène Da'}

  person: Person;
  personDetails: TechnicianDetails;

  isResponsable:boolean;
  changingRight:boolean;

  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.person = this.responsable;
    this.personDetails = this.responsableDetails;
    this.person.contractID=this._Activatedroute.snapshot.paramMap.get("contract-id");

    //TODO:backend call to get data
    this.isResponsable = true;
    this.changingRight = true;
  }

}
