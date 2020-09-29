import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';

export interface Company{
  nom:string;
  id:string;
  city:string;
  nbClients:number;
}

const ELEMENT_DATA: Company [] = [
  {nom:'Wayne Entreprises', id:'WYN-ENT', city:'Gotham City', nbClients:100},
  {nom:'Frankenstein Hospitals', id:'FRK-HOS', city:'New York', nbClients:200},
  {nom:'Dracula Bloodbank', id:'DCL-BNK', city:'Transylvannie', nbClients:300},
  {nom:'Seal it Bank', id:'CLIT-BNK', city:'Berne', nbClients:400}
]

@Component({
  selector: 'app-admin-company',
  templateUrl: './admin-company.component.html',
  styleUrls: ['./admin-company.component.css']
})
export class AdminCompanyComponent implements OnInit {
  
  selectedTickets = [];
	
  displayedColumns: string[] = ['edits', 'nom', 'city', 'nbClients', 'delete'];
  dataSource = new MatTableDataSource<Company>(ELEMENT_DATA);
  
  selection = new SelectionModel<Company>(true, []);

  /* Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /* Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row =>this.selection.select(row));
  }
  
  deleteCompany(id:string){
    console.log("Deleting company with id " + id);
    //TODO:add backend call to delete company

  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
