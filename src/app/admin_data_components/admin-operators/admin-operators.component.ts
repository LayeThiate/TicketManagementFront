import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';

export interface Operator{
  nom:string;
  contractID:string;
  login:string;
  email:string;
  hiringDate:string;
}

const ELEMENT_DATA: Operator [] = [
  {nom:'Bruce Wayne', contractID:'BTMN', login:'Detective', email:'batman@justiceleague.com', hiringDate:'15/02/19'},
  {nom:'Clark Kent', contractID:'SPMN', login:'Kryptonian', email:'superman@justiceleague.com', hiringDate:'11/10/19'},
  {nom:'Diana Prince', contractID:'WDRWMN', login:'Amazon', email:'wonderwoman@justiceleague.com', hiringDate:'02/03/19'},
  {nom:'Barry Allen', contractID:'FLSH', login:'Scientist', email:'flash@justiceleague.com', hiringDate:'05/12/19'},
  {nom:'Hal Jordan',  contractID:'GRNLTRN', login:'RingBearer', email:'greenlantern@justiceleague.com', hiringDate:'14/08/19'}
]

@Component({
  selector: 'app-admin-operators',
  templateUrl: './admin-operators.component.html',
  styleUrls: ['./admin-operators.component.css']
})
export class AdminOperatorsComponent implements OnInit {

  selectedTickets = [];
	
  displayedColumns: string[] = ['edits', 'nom',  'login', 'email', 'hiringDate', 'delete'];
  dataSource = new MatTableDataSource<Operator>(ELEMENT_DATA);
  
  selection = new SelectionModel<Operator>(true, []);

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
  
 
  /*closeAllTickets() {
    const selectedOrderIds = this.selection
      .map((v, i) => v ? this.dataSource[i].id : null)
      .filter(v => v !== null);
    console.log(selectedOrderIds);
  }*/

  createOperator= function () {
    this.router.navigate(['/new-operator']);
  };
  
  deleteOperator(id:string){
    console.log("Deleting operator with contract id " + id);
    //TODO:add backend call to delete operator
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
