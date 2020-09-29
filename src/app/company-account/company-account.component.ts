import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Company{
  name:string;
  city:string;
  PDG:string;
  emailPDG:string;
  defaultPrio:string;
  id: string;
  adress: string;
  numberOfUser:number;
  listDemandeur:Demandeur[];
}

export interface Demandeur{
  firstName:string;
  lastName:string;
}

@Component({
  selector: 'app-company-account',
  templateUrl: './company-account.component.html',
  styleUrls: ['./company-account.component.css']
})
export class CompanyAccountComponent implements OnInit {

  listDemandeur = {}

  company:Company = {name:"Dracula Bloodbank", city:"Transylvannie", PDG:"Dracula Dragonson", emailPDG:"dracula@bloodbank.com", defaultPrio:"low",id:"DCL-BNK", adress:"6 rue des Dragons", numberOfUser:0, listDemandeur:[]};

  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.company.id=this._Activatedroute.snapshot.paramMap.get("id");

        //TODO:backend call to get data
  }

}
