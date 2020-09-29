import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-vtabs',
  templateUrl: './admin-vtabs.component.html',
  styleUrls: ['./admin-vtabs.component.css']
})
export class AdminVtabsComponent implements OnInit {

  adminName:string = 'Anne Camper';

  constructor() { }

  ngOnInit() {
  }

}
