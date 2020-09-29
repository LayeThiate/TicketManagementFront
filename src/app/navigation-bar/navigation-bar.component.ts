import { Component, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav'

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})

export class NavigationBarComponent implements OnInit {

  title = 'URSS';
	
  constructor() { }

  ngOnInit() {
  }
  
  @Output() navToggle = new EventEmitter<boolean>();
  navOpen() {
    this.navToggle.emit(true);
  }

}
