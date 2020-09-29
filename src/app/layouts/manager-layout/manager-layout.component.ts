import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-manager-layout',
  templateUrl: './manager-layout.component.html',
  styleUrls: ['./manager-layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ManagerLayoutComponent implements OnInit {
  title = 'URSS app';

  constructor() { }

  ngOnInit() {
  }

}

