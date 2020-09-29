import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/company.model';
import { CompanyService } from 'src/app/services/company.service';
import { Address } from 'src/app/model/address.model';

export interface Choice {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {

  //display bools
  modification:boolean = false;

  companyName: string;
  city: string;
  PDG: string;
  emailPDG: string;
  defaultPrio: string;
  id:string;
  adress:string;

  listCompanies:Company[];

  priorities: Choice[] = [
    {value: 'high', viewValue: 'Urgent'},
    {value: 'mid', viewValue: 'Normal'},
    {value: 'low', viewValue: 'Basse'}
  ];

  displayedColumns: string[] = ['nom'];

  constructor(private _Activatedroute:ActivatedRoute, private router:Router, private companyService:CompanyService) { }

  ngOnInit() {
    //TODO:get company data from link
    this.id=this._Activatedroute.snapshot.paramMap.get("id");

    if(this.id != null){
      //Id found in the href
      this.modification = true; //to change page title
      //get data from DB
      
      //fill data in form
        //id
      var inputElem = <HTMLInputElement>document.getElementById("id-input");
      inputElem.value = this.id;

      inputElem = <HTMLInputElement>document.getElementById("company-name-input");
      inputElem.value = this.companyName;

      inputElem = <HTMLInputElement>document.getElementById("city-input");
      inputElem.value = this.city;

      inputElem = <HTMLInputElement>document.getElementById("pdg-input");
      inputElem.value = this.PDG;

      inputElem = <HTMLInputElement>document.getElementById("email-pdg-input");
      inputElem.value = this.emailPDG;

      //fill prio

      /*
      inputElem = <HTMLInputElement>document.getElementById("portable-input");
      inputElem.value = this.portable;
      */

      inputElem = <HTMLInputElement>document.getElementById("adress-input");
      inputElem.value = this.adress;

      //fill in demandeurs
      
      //GET ALL COMPANIES
      
    }
    else{
      //no data id found
      this.modification = false;
    }
  }

  changePrio(value){
    this.defaultPrio = value;
  }

  createCompany(){
    //Testing log
    console.log("Creating company ");
    console.log("Nom de l'entreprise: " + this.companyName);
    console.log("Ville: " + this.city);
    console.log("PDG: " + this.PDG);
    console.log("Email PDG: " + this.emailPDG);
    console.log("Priorité par défaut: " + this.defaultPrio);
    console.log("ID: " + this.id);
    console.log("Adresse: " + this.adress);

    //TODO: backend call to create company in DB
    const address = new Address(null, this.city, null);
    const company = new Company(this.companyName, address, null, this.emailPDG, this.PDG);
    this.companyService.createCompany(company).subscribe(data => {
      console.log(data);
    });

    //Come back to the previous page after creation
    //this.cancel();
  }

  cancel(){
    window.history.back();
  }
}
