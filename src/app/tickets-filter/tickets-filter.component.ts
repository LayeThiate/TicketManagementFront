import { Component, OnInit, Output, Injectable, Input, OnChanges } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatToolbarModule, MatCardModule, MatDatepickerModule, MatNativeDateModule, MatInputModule, MatFormFieldModule, MatTableDataSource } from '@angular/material';
import { MatIconModule, MatSelectModule, MatButtonModule, MatListModule, MatDividerModule } from '@angular/material';
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
  selector: 'app-tickets-filter',
  templateUrl: './tickets-filter.component.html',
  styleUrls: ['./tickets-filter.component.css']
})
export class TicketsFilterComponent implements OnInit, OnChanges {
	

  panelOpenState = false;
  protected filter:Filter = new Filter();
  listCategory:any;

  myControl = new FormControl();
  categoryOptions: string[] = [];
  filteredOptions: Observable<string[]>;

  @Input() dataSource = new MatTableDataSource<Ticket>();

  
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

	constructor(protected ticketService:TicketService) {

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

	ngOnChanges(): void {
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

	protected changeCategory(value){
		console.log(value);
	
		this.filter.categoryId = value;
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
  
}
