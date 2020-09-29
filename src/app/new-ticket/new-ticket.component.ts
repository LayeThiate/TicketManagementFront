import { Component, OnInit } from '@angular/core';
import {MatExpansionModule} from '@angular/material/expansion';
import { TicketService } from '../services/ticket.service';
import { Ticket, Category } from '../model/ticket.model';
//import { Router } from '@angular/router';

export interface Choice {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-new-ticket',
  templateUrl: './new-ticket.component.html',
  styleUrls: ['./new-ticket.component.css']
})
export class NewTicketComponent implements OnInit {
  step = 0;
  panelOpenState = false;

  types: Choice[] = [
    {value: 'Request', viewValue: 'Demande'},
    {value: 'Incident', viewValue: 'Incident'}
  ];

  priorities: Choice[] = [
    {value: 'High', viewValue: 'Urgent'},
    {value: 'Medium', viewValue: 'Normal'},
    {value: 'Low', viewValue: 'Basse'}
  ];

  companyName: string;
  companyId: string;
  companyAddress: string;

  ticketTitle: string;
  userName: string;
  ticketCategory: string;
  technicianName: string;
  ticketDescription: string;
  type : string;
  priority : string;
  skill: string;

  categories:Category[];

  constructor(private ticketService:TicketService) { }

  ngOnInit() { }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  changeType(value){
    this.type = value;
  }

  changePrio(value){
    this.priority = value;
  }

  createTicket(){
    //TODO: backend call to create ticket in DB
    //Testing log
    console.log("Creating ticket ");
    console.log("Nom de l'entreprise: " + this.companyName);
    console.log("ID: " + this.companyId);
    console.log("Adresse: " + this.companyAddress);
    console.log("Titre: " + this.ticketTitle);
    console.log("Utilisateur: " + this.userName);
    console.log("Catégorie: " + this.ticketCategory);
    console.log("Technicien: " + this.technicianName);
    console.log("Description: " + this.ticketDescription);
    console.log("Type: " + this.type);
    console.log("Priority: " + this.priority);

    //TODO: backend call to create ticket in DB

    var category = new Category(this.ticketCategory) ;

    var ticket = new Ticket(this.ticketTitle, this.type, this.priority, new Date(), new Date(), 
                            new Date(), this.ticketDescription, category, null, null, null, null);
    
    var resp = this.ticketService.createTicket(ticket);
    resp.subscribe((data) => {
      console.log(data);
      
    });                       

    //Come back to the previous page after creation
    //this.cancel();
	window.history.back();
  }
  
  cancel(){
    window.history.back();
  }
}
