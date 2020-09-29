import { Component, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-operator-account',
  templateUrl: './operator-account.component.html',
  styleUrls: ['./operator-account.component.css']
})
export class OperatorAccountComponent implements OnInit {

  person: Person = {firstName:'John', lastName:'Lenon', email:'john.lenon@urss.com', dob:'03/03/1973', telephone:'', mobile:'0612366954', adress:'3 avenue des Musiciens', hiringDate:'22/10/2019', contractID:'JOH-LEN-221014', function:'Opérateur', login:'johlen2210', mdp:'anandaking'}

  changingRight:boolean;

  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.person.contractID=this._Activatedroute.snapshot.paramMap.get("contract-id");

    //TODO:backend call to get data
    this.changingRight = true;
  }

}
