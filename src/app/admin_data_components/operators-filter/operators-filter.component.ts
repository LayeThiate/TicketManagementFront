import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-operators-filter',
  templateUrl: './operators-filter.component.html',
  styleUrls: ['./operators-filter.component.css']
})
export class OperatorsFilterComponent implements OnInit {

  filteredName:string;
  filteredLogin:string;
  filteredEmail:string;
  filteredDate:any;

  constructor() { }

  ngOnInit() {
  }

  changeFilteredDate(event: MatDatepickerInputEvent<Date>){
    this.filteredDate = event.value;
  }

  submitNewRequest(){
    console.log("Filtered name:" + this.filteredName);
    console.log("Filtered login:" + this.filteredLogin);
    console.log("Filtered email:" + this.filteredEmail);
    console.log("Filtered hiring date:" + this.filteredDate);
  }

}
