import { Component, OnInit } from '@angular/core';
import { TicketsFilterComponent } from '../tickets-filter/tickets-filter.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

export interface Ticket {
  id: string;
  client: string;
  utilisateur: string;
  titre: string;
  type: string;
  categorie: string;
  dateCreation: string;
  technicien: string;
  statut: string;
}

const ELEMENT_DATA: Ticket[] = [
  {id: 'TCKT-017', client: 'Pops1920', utilisateur: 'Jane Doe', titre: 'Question de compte', type: 'Demande', categorie: 'Gestion de compte', dateCreation: '10/11/2019', technicien: 'Maude Erater', statut: 'Ouvert'},
  {id: 'TCKT-013', client: 'Pops1920', utilisateur: 'Jane Doe', titre: 'Panne du distributeur à café', type: 'Incident', categorie: 'Panne', dateCreation: '28/10/2019', technicien: "Carter d'Or", statut: 'Fermé'},
];

@Component({
  selector: 'app-user-ticket-list',
  templateUrl: './user-ticket-list.component.html',
  styleUrls: ['./user-ticket-list.component.css']
})
export class UserTicketListComponent implements OnInit {

  selectedTickets = [];
	
  displayedColumns: string[] =['id', 'client', 'utilisateur', 'titre', 'type', 'categorie', 'dateCreation', 'technicien', 'statut'];
  dataSource = new MatTableDataSource<Ticket>(ELEMENT_DATA);
  
  selection = new SelectionModel<Ticket>(true, []);

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

  /*createTicket = function () {
    this.router.navigate(['/new-ticket']);
  };
  */
  constructor() { }

  ngOnInit() {
  }

}
