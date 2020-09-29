import { Component, OnInit } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatToolbarModule, MatCardModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { MatIconModule, MatButtonModule, MatListModule, MatDividerModule } from '@angular/material';


@Component({
  selector: 'app-users-filter',
  templateUrl: './users-filter.component.html',
  styleUrls: ['./users-filter.component.css']
})
export class UsersFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
