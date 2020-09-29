import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-companies',
  templateUrl: './stats-companies.component.html',
  styleUrls: ['./stats-companies.component.css']
})
export class StatsCompaniesComponent implements OnInit {

  numberCompanies:number;
  numberUsers:number;
  numberTickets:number;
  numberHighTickets:number;
  numberMediumTickets:number;
  numberNormalTickets:number;

  constructor() { }

  ngOnInit() {
    this.getStats();
  }

  getStats(){
    this.numberCompanies = 5;
    this.numberUsers = 1114;
    this.numberTickets = 38;
    this.numberHighTickets = 18;
    this.numberMediumTickets = 9;
    this.numberNormalTickets = 11;
  }

}
