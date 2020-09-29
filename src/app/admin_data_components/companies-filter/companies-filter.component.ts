import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatToolbarModule, MatCardModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { MatIconModule, MatButtonModule, MatListModule, MatDividerModule } from '@angular/material';

export interface Choice {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-companies-filter',
  templateUrl: './companies-filter.component.html',
  styleUrls: ['./companies-filter.component.css']
})
export class CompaniesFilterComponent implements OnInit {

  filteredCompany:string;
  filteredCity:string;
  filteredEmpNumb:string;

  numbers: Choice[] = [
    {value: 'all', viewValue: 'Tous'},
    {value: '0-50', viewValue: '0-50'},
    {value: '51-100', viewValue: '51-100'},
    {value: '101-500', viewValue: '101-500'},
    {value: '501-1000', viewValue: '501-1000'},
    {value: '+1000', viewValue: '+1000'}
  ]

  changeNumbEmp(value){
    this.filteredEmpNumb = value;
  }

  constructor() { }

  ngOnInit() {
  }

  submitNewRequest(){
    console.log("Filtered company:" + this.filteredCompany);
    console.log("Filtered city:" + this.filteredCity);
    console.log("Filtered employee number:" + this.filteredEmpNumb);
  }

    panelOpenState = false;

}
