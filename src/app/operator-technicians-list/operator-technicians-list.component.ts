import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule, MatIconModule } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';

export interface Techician{
  nom:string;
  login:string;
  email:string;
  dateEmbauche:string;
  competences:string;
  responsable:string;
}

const ELEMENT_DATA: Techician [] = [
  {nom:'Frigg Orist', login:'friori11', email:'frigg.orist@urss.com', dateEmbauche:'10/11/19', competences:'Frigoriste', responsable: 'Eugène Da'},
  {nom:'Maude Erater', login:'mauera1011', email:'maude.erater@urss.com', dateEmbauche:'10/11/19', competences:'Plomber', responsable: 'Drake Uhlah'},
  {nom:"Carter d'Or", login:'cardor0311', email:'carter.d-or@urss.com', dateEmbauche:'03/11/19', competences:'Mécanicien', responsable: 'Drake Uhlah'},
  {nom:'Eugène Da', login:'eugda0211', email:'eugene.da@urss.com', dateEmbauche:'02/11/19', competences:'Plombier, Frigoriste', responsable: ''},
  {nom:'Drake Uhlah', login:'drauhl2810', email:'drake.uhlah@urss.com', dateEmbauche:'28/10/19', competences:'Electricien', responsable: ''},
  {nom:'Anna Lyst', login:'annlys1609', email:'anna.lyst@urss.com', dateEmbauche:'16/09/19', competences:'Informaticien', responsable: 'Eugène Da'},
]

@Component({
  selector: 'app-operator-technicians-list',
  templateUrl: './operator-technicians-list.component.html',
  styleUrls: ['./operator-technicians-list.component.css']
})
export class OperatorTechniciansListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  displayedColumns: string[] = ['nom', 'login', 'email', 'dateEmbauche', 'competences', 'responsable'];
  dataSource = new MatTableDataSource<Techician>(ELEMENT_DATA);

}
