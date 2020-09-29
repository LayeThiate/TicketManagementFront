import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-stats-graphs',
  templateUrl: './stats-graphs.component.html',
  styleUrls: ['./stats-graphs.component.css']
})
export class StatsGraphsComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [{
      data: [1, 2, 3, 4, 5, 6 , 7, 8, 9, 10],
      type: 'line'
    }]
  };

  constructor() { }

  ngOnInit() {
  }

}
