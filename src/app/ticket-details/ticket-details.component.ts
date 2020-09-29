import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketService } from '../services/ticket.service';
import { Ticket } from '../model/ticket.model'

@Component({
  selector: 'app-ticket-details',
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})
export class TicketDetailsComponent implements OnInit {

  ticketTitle:String = 'TCKT - XXX';
  companyName:String = 'Unknown company';
  type:String = 'Unknown type';
  priority:String = 'Unknown priority';
  status:String = 'Unknown status';
  description:String = 'Description of the ticket';
  
  identifier: String;
  ticketRetrieved: Ticket;

  constructor(private _Activatedroute:ActivatedRoute, private ticketService:TicketService) { }

  ngOnInit() {
	this.identifier=this._Activatedroute.snapshot.paramMap.get("identifier");	
	this.ticketService.getTicketById(this.identifier).subscribe(data => {
		this.ticketRetrieved =  data;
		this.ticketTitle = "TCKT - " + this.ticketRetrieved.identifier + " - " + this.ticketRetrieved.title;
		//this.companyName =  this.ticketRetrieved.company;
		this.type =  this.ticketRetrieved.type;
		this.priority =  this.ticketRetrieved.priority;
		//this.status =  this.ticketRetrieved.statut;
		this.description =  this.ticketRetrieved.description;
		}
	);
  }

}
