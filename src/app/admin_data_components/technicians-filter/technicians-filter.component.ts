import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatToolbarModule, MatCardModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { MatIconModule, MatButtonModule, MatListModule, MatDividerModule } from '@angular/material';
import { MatDatepickerModule, MatDatepickerInputEvent } from '@angular/material/datepicker';

export interface Choice {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-technicians-filter',
  templateUrl: './technicians-filter.component.html',
  styleUrls: ['./technicians-filter.component.css']
})
export class TechniciansFilterComponent implements OnInit {

  filteredName:string;
  filteredLogin:string;
  filteredEmail:string;
  filteredDate:any;
  filteredSkills:string;
  filteredFunction: string;

  functions: Choice[] = [
    {value: 'all', viewValue: 'Tous'},
    {value: 'technicien', viewValue: 'Techniciens'},
    {value: 'responsable', viewValue: 'Responsables'}
  ]

  changeFunction(value){
    this.filteredFunction = value;
  }

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
    console.log("Filtered skills:" + this.filteredSkills)
  }
  
  panelOpenState = false;

}
