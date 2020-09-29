import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';

export interface Company{
  id:string;
  nom:string;
  city:string;
  nbUsers:number;
}

const ELEMENT_DATA: Company [] = [
  { id:'POP-19', nom:'Pops1920', city:'Orsay', nbUsers: 2},
  { id:'IUT-19', nom:'IUT1920s', city:'Orsay', nbUsers: 13},
  { id:'WYN-ENT', nom:'Wayne Entreprises', city:'Gotham City', nbUsers: 90},
  { id:'FRK-HOS', nom:'Frankenstein Hospitals', city:'New York', nbUsers: 333},
  { id:'DCL-BNK', nom:'Dracula Bloodbank',  city:'Bran', nbUsers: 666}
]

@Component({
  selector: 'app-operator-companies-list',
  templateUrl: './operator-companies-list.component.html',
  styleUrls: ['./operator-companies-list.component.css']
})
export class OperatorCompaniesListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  displayedColumns: string[] = ['nom', 'city', 'nbUsers'];
  dataSource = new MatTableDataSource<Company>(ELEMENT_DATA);

}
