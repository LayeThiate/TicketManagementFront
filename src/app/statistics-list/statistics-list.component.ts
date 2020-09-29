import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-list',
  templateUrl: './statistics-list.component.html',
  styleUrls: ['./statistics-list.component.css']
})
export class StatisticsListComponent implements OnInit {

  //display bool
  isResponsable:boolean = true;

  numberTickets:number;
  numberTicketsClosed: number;
  numberTicketsClosedOnTime:number;
  numberTicketsNotClosedOnTime:number;
  numberTicketsNotClosed: number;

  myNumberTickets:number;
  myNumberTicketsClosed: number;
  myNumberTicketsClosedOnTime:number;
  myNumberTicketsNotClosedOnTime:number;
  myNumberTicketsNotClosed: number;

  numberTechnicians:number;
  numberTicketsPerTech:number;

  mineOnly:boolean;

  constructor() { }

  ngOnInit() {
    //TODO:add call to back-end to check if resp
    this.getStats();
  }

  getStats(){
    if(this.isResponsable){
      this.mineOnly = false;
      this.numberTickets = 38;
      this.numberTicketsClosed = 30;
      this.numberTicketsNotClosedOnTime = 7;
      this.numberTicketsClosedOnTime = this.numberTicketsClosed - this.numberTicketsNotClosedOnTime;
      this.numberTicketsNotClosed = this.numberTickets - this.numberTicketsClosed;
    }

    else{
      this.mineOnly = true;
    }

    this.myNumberTickets = 20;
    this.myNumberTicketsClosed = 12;
    this.myNumberTicketsNotClosedOnTime = 2;
    this.myNumberTicketsClosedOnTime = this.myNumberTicketsClosed - this.myNumberTicketsNotClosedOnTime;
    this.myNumberTicketsNotClosed = this.myNumberTickets - this.myNumberTicketsClosed;

    this.numberTechnicians = 12;
    this.numberTicketsPerTech = this.numberTickets / this.numberTechnicians;
  }

}
