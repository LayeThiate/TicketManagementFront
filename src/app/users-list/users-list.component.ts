import { Component, OnInit } from '@angular/core';
import { TicketsFilterComponent } from '../tickets-filter/tickets-filter.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { MatTableDataSource } from '@angular/material';
import { Router } from '@angular/router';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

export interface User {
  nom: string;
  login: string;
  email: string;
  entreprise: string;
}

const ELEMENT_DATA: User[] = [
  {nom: 'Valérie Guimard', login: 'valgui', email: 'valerie.guimard@u-psud.fr', entreprise: 'Pops1920'},
  {nom: 'Frédéric Voisin', login: 'frevoi', email: 'frederic.voisin@u-psud.fr', entreprise: 'Pops1920'},
  {nom: 'Xavier Lacour', login: 'xavlac', email: 'xavier.lacour@u-psud.fr', entreprise: 'IUT1920'},
  {nom: 'Jane Doe', login: 'jandoe', email: 'jane.doe@u-psud.fr', entreprise: 'IUT1920'},
  {nom: 'Sebastian Michaelis', login: 'sebmic', email: 'sebastian.michaelis@frk-hos.com', entreprise: 'Frankeinstein Hospitals'},
  {nom: 'Lestat de Lioncourt', login: 'lesdel', email: 'lestat.de-lioncourt@drc-bnk.com', entreprise: 'Dracula Bloodbank'}

];

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
		
  /* //REST calls test get countries
  apiURL = 'https://restcountries.eu/rest/v2/';
  dataRand = "+++++++++++";

  getCountries(): Observable<any> {
	const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.get(this.apiURL,{ headers, responseType: 'text'});
  }
  
  getAllCountries() {
	console.log("fonction appelee");
	this.getCountries().subscribe((response) => {
        this.dataRand = response
    });
  }
*/

  constructor(private router: Router, private http: HttpClient){
  }
  
  ngOnInit() {
  }
  
  displayedColumns: string[] = ['edit', 'nom', 'login', 'email', 'entreprise', 'delete'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

}
