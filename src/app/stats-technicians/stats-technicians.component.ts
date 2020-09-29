import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-technicians',
  templateUrl: './stats-technicians.component.html',
  styleUrls: ['./stats-technicians.component.css']
})
export class StatsTechniciansComponent implements OnInit {

  numberTechnicians:number;
  numberResponsables:number;
  numberSkills:number;
  numberInterventions:number;
  avgTechPerResp:number;

  constructor() { }

  ngOnInit() {
    this.getStats();
  }

  getStats(){
    this.numberTechnicians = 12;
    this.numberResponsables = 4;
    this.numberSkills = 5;
    this.numberInterventions = 17;
    this.avgTechPerResp = 3;
  }

}
