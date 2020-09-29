import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-tickets-filter',
  templateUrl: './stats-tickets-filter.component.html',
  styleUrls: ['./stats-tickets-filter.component.css']
})
export class StatsTicketsFilterComponent implements OnInit {

  panelOpenState = false;

  categories = [
		{value: 'pb-mel', viewValue: 'Problème mél'},
		{value: 'vpn', viewValue: 'VPN'},
		{value: 'mdp', viewValue: 'Mot de passe'},
		{value: 'gestion-compte', viewValue: 'Gestion de compte'},
		{value: 'panne', viewValue: 'Panne'},
		{value: 'intervention', viewValue: 'Intervention'}
  ];
  
	statuts = [
		{value: 'ferme', viewValue: 'Fermé'},
		{value: 'en-attente', viewValue: 'En attente'},
		{value: 'oouvert', viewValue: 'Ouvert'}
  ];
  
  types = [
		{value: 'demande', viewValue: 'Demande'},
		{value: 'incident', viewValue: 'Incident'}
  ];
  
  affectations = [
		{value: 'affecte', viewValue: 'Affecté'},
		{value: 'non-affecte', viewValue: 'Non affecté'}
  ];
  
  priorities = [
		{value: 'haute', viewValue: 'Haute'},
		{value: 'moyenne', viewValue: 'Moyenne'},
		{value: 'basse', viewValue: 'Basse'}
	];

  constructor() { }

  ngOnInit() {
  }

}
