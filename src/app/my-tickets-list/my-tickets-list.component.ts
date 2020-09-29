import { Component, OnInit, Input, Output } from '@angular/core';
import { TicketsFilterComponent } from '../tickets-filter/tickets-filter.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { TicketService } from '../services/ticket.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Category, Ticket } from '../model/ticket.model';
import { HttpClientJsonpModule } from '@angular/common/http';

export class Filter {
	compagnyId:number; 
	technicianId:number;
	start:Date; 
	end:Date;
	categoryId:number;
	statut:string;
	type:string;
	affected:boolean;
	priority: string;
}

@Component({
  selector: 'app-my-tickets-list',
  templateUrl: './my-tickets-list.component.html',
  styleUrls: ['./my-tickets-list.component.css']
})
export class MyTicketsListComponent implements OnInit {
	
  panelOpenState = false;
  protected filter:Filter = new Filter();
  listCategory:any;

  myControl = new FormControl();
  categoryOptions: string[] = [];
  filteredOptions: Observable<string[]>;
	
  selectedTickets = [];
  //@Input() filter:Filter;
	
  displayedColumns: string[] = ['select', 'id', 'client', 'demandeur', 'titre', 'type', 'categorie', 'dateCreation', 'technicien', 'statut'];

  //dataSource = new MatTableDataSource<Ticket>(this.listTicket);
  listTicket : any;
  @Input() dataSource = new MatTableDataSource<Ticket>();
  
  
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
  
  constructor(private router: Router, private ticketService:TicketService) {
    //super(ticketService);
   }

	ngOnInit() {
		this.listCategory = [];
		this.ticketService.listCategory().subscribe(data => {
			this.listCategory = data;

			//Get the names of categories for the display
			for(let cat of this.listCategory){
				this.categoryOptions.push(cat.name);
			}
		});

		this.filteredOptions = this.myControl.valueChanges
      						.pipe(
        					startWith(''),
							map(value => this._filter(value)));
		
		//GET ALL Tickets
		this.ticketService.listTicket(JSON.stringify(this.filter))
		.subscribe(data => {
      		this.dataSource = new MatTableDataSource<Ticket>(data);
		}); 
  }

  ngOnChanges(){
    
  }
  
	
  convertDateInverted(openedDateTicket){
	const strTemp = openedDateTicket.split('T')[0];
    return strTemp.split('-').reverse().join('-');
  }
  
  private _filter(value: string): string[] {
		const filterValue = value.toLowerCase();
	
		return this.categoryOptions.filter(option => option.toLowerCase().includes(filterValue));
	}

	protected changeCompany(value){
		this.filter.compagnyId = value;
	}

	protected changeTechnician(value){
		this.filter.technicianId = value;
	}

	protected changeStart(value){
		this.filter.start = value;
	}

	protected changeEnd(value){
		this.filter.end = value;
	}

	/*protected changeCategory(value){
		console.log(value);
		this.filter.categoryId = value;
	}*/
	protected changeCategory(value){
        console.log(value);
        for(let cat of this.listCategory){
            if(cat.name == value){
                this.filter.categoryId = cat.identifier;
                break;
            }
        }
        this.filter.categoryId = value;
		console.log("Val finale");
		console.log(this.filter.categoryId);
    }

	protected changeStatus(value){
		this.filter.statut = value;
	}

	protected changeType(value){
		this.filter.type = value;
	}

	protected changeAffecte(value){
		if(value == "affecte")
			this.filter.affected = true;
		else 
			if(value == "non-affecte")
				this.filter.affected = false;
			else
				this.filter.affected = null;
	}

	protected changePriority(value){
		this.filter.priority = value;
	}

	public submitNewRequest(){
		console.log("filtre");
		this.ticketService.listTicket(JSON.stringify(this.filter))
		.subscribe(data => {
			this.dataSource = new MatTableDataSource<Ticket>(data);
		});
	}

  
  filterByClient(element) {
   console.log(element.company);
   //TODO appeler la fonction de filtre avec en parametre element.company
  }
  
  filterByUser(element) {
   console.log(element.claimer);
   //TODO appeler la fonction de filtre avec en parametre element.claimer
  }
  
  filterByType(element) {
   console.log(element.type);
   //TODO appeler la fonction de filtre avec en parametre element.type
   this.filter.type = element.type;
   this.ticketService.listTicket(JSON.stringify(this.filter))
		.subscribe(data => {
			this.dataSource = new MatTableDataSource<Ticket>(data);
		});
	this.filter = new Filter();
  }
  
  filterByCategory(nameCategory) {
   console.log(nameCategory);
   //TODO appeler la fonction de filtre avec en parametre nameCategory
  }
  
  filterByDate(openedDateTicket) {
	const strTemp = openedDateTicket.split('T')[0];
    console.log(strTemp.split('T')[0]);
   //TODO appeler la fonction de filtre avec en parametre openedDateTicket
  }
  
  filterByTechnician(element) {
   console.log(element.assignedTechnicians);
   //TODO appeler la fonction de filtre avec en parametre element.assignedTechnicians
  }
  
  filterByStatus(element) {
   console.log(element.statut);
   //TODO appeler la fonction de filtre avec en parametre element.statut
  }
  

  categories = [
		{value: 'pb-mel', viewValue: 'Problème mél'},
		{value: 'vpn', viewValue: 'VPN'},
		{value: 'mdp', viewValue: 'Mot de passe'},
		{value: 'gestion-compte', viewValue: 'Gestion de compte'},
		{value: 'panne', viewValue: 'Panne'},
		{value: 'intervention', viewValue: 'Intervention'}
	];
	  
	statuts = [
		{value: 'Opened', viewValue: 'Fermé'},
		{value: 'Waiting', viewValue: 'En attente'},
		{value: 'Close', viewValue: 'Ouvert'}
	];

	types = [
		{value: 'Request', viewValue: 'Demande'},
		{value: 'Incident', viewValue: 'Incident'}
	];

	affectations = [
		{value: 'affecte', viewValue: 'Affecté'},
		{value: 'non-affecte', viewValue: 'Non affecté'}
	];

	priorities = [
		{value: 'High', viewValue: 'Haute'},
		{value: 'Medium', viewValue: 'Moyenne'},
		{value: 'Low', viewValue: 'Basse'}
	];
  
  
  
}

