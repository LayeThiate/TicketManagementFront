import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { CompanyService } from '../services/company.service';
import { Company } from '../model/company.model';

/* export interface Company{
  id:string;
  nom:string;
  city:string;
  nbUsers:number;
} */

/* const ELEMENT_DATA: Company [] = [
  { id:'POP-19', nom:'Pops1920', city:'Orsay', nbUsers: 2},
  { id:'IUT-19', nom:'IUT1920s', city:'Orsay', nbUsers: 13},
  { id:'WYN-ENT', nom:'Wayne Entreprises', city:'Gotham City', nbUsers: 90},
  { id:'FRK-HOS', nom:'Frankenstein Hospitals', city:'New York', nbUsers: 333},
  { id:'DCL-BNK', nom:'Dracula Bloodbank',  city:'Bran', nbUsers: 666}
] */


@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})

export class CompaniesListComponent implements OnInit {

  companies:Company[] = [];
  displayedColumns: string[] = ['edit', 'nom', 'city', 'nbUsers', 'delete'];
  dataSource = new MatTableDataSource<Company>();

  constructor(private router: Router, private companyService:CompanyService) { }

  ngOnInit() {
    this.companyService.listAllCompanies();
    this.companyService.companies.subscribe(data => {
      this.dataSource = new MatTableDataSource<Company>(data);
    })
  }
  
  

}
