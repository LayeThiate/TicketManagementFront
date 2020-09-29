import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-technicians-filter',
  templateUrl: './stats-technicians-filter.component.html',
  styleUrls: ['./stats-technicians-filter.component.css']
})
export class StatsTechniciansFilterComponent implements OnInit {

  functions = [
		{value: 'technician', viewValue: 'Techniciens'},
		{value: 'responsable', viewValue: 'Responsables'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
