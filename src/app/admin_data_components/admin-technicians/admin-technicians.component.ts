import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';

export interface Techician{
  nom:string;
  contractID:string;
  login:string;
  skills:string;
  hiringDate:string;
  responsable:string;
  email:string;
}

const ELEMENT_DATA: Techician [] = [
  {nom:'Tony Stark', contractID:'IRNMN', login:'Genius', skills:'Philanthroprist', hiringDate:'15/02/19', responsable:'Steve Rogers', email:'ironman@avengers.com'},
  {nom:'Steve Rogers', contractID:'CAPT', login:'Soldier', skills:'Boomerang', hiringDate:'11/10/19', responsable:'', email:'captainamerica@avengers.com'},
  {nom:'Natasha Romanoff', contractID:'BLCKWDW', login:'Spy', skills:'PartyGoer', hiringDate:'02/03/19', responsable:'Nick Fury', email:'balckwidow@avengers.com'},
  {nom:'Bruce Banner', contractID:'HLK', login:'Smash', skills:'Smash', hiringDate:'05/12/19', responsable:'', email:'hulk@avengers.com'},
  {nom:'Clint Barton', contractID:'HWKE', login:'Marksman', skills:'Farsight', hiringDate:'14/08/19', responsable:'Nick Fury', email:'hawkeye@avengers.com'}
]

@Component({
  selector: 'app-admin-technicians',
  templateUrl: './admin-technicians.component.html',
  styleUrls: ['./admin-technicians.component.css']
})
export class AdminTechniciansComponent implements OnInit {

  
  selectedTickets = [];
	
  displayedColumns: string[] = ['edits', 'nom', 'login', 'email', 'hiringDate', 'skills', 'responsable', 'delete'];
  dataSource = new MatTableDataSource<Techician>(ELEMENT_DATA);
  
  selection = new SelectionModel<Techician>(true, []);

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
  
  hasStatusClosed(row) {
    return row.statut == "Fermé";
  }
 
  /*closeAllTickets() {
    const selectedOrderIds = this.selection
      .map((v, i) => v ? this.dataSource[i].id : null)
      .filter(v => v !== null);
    console.log(selectedOrderIds);
  }*/

  createCompany= function () {
    this.router.navigate(['/new-technician']);
  };
  
  deleteTechnician(id:string){
    console.log("Deleting technician with contract id " + id);
    //TODO:add backend call to delete technician
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
