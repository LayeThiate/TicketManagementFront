import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-tickets',
  templateUrl: './stats-tickets.component.html',
  styleUrls: ['./stats-tickets.component.css']
})
export class StatsTicketsComponent implements OnInit {

  numberTickets:number;
  numberOpenTickets:number;
  numberDemandes:number;
  numberIncidents:number;
  numberOfSkillsAsked:number;
  avgDemForSkill:number;

  constructor() { }

  ngOnInit() {
    this.getStats();
  }

  getStats(){
    this.numberTickets = 38;
    this.numberOpenTickets = 7;
    this.numberDemandes = 21;
    this.numberIncidents = 17;
    this.numberOfSkillsAsked = 5;
    this.avgDemForSkill = 1.3;
  }

}
