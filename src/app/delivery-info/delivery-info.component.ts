import { Component, OnInit } from '@angular/core';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-delivery-info',
  templateUrl: './delivery-info.component.html',
  styleUrls: ['./delivery-info.component.css']
})
export class DeliveryInfoComponent implements OnInit {

  constructor() { }
  faSearch=faSearch;
  highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
        plotShadow: false,
        backgroundColor: 'transparent'
  },

  title : {
    text: 'Delivery Status'   
 },
  tooltip : {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
 },
 plotOptions : {
    pie: {
       allowPointSelect: true,
       cursor: 'pointer',
       dataLabels: {
          enabled: true,
          format: '<b>{point.name}%</b>: {point.percentage:.1f} %',
       }
    }
 },
 series : [{
    type: 'pie',
    name: 'Delivery Status',
    data: [
       ['Bangalore', 25],
       ['Chennai',   40],
       ['Calicut', 5],
       ['Vizag',    25],
       ['Pundicherry',     5]
    ]
 }]
};

  ngOnInit(): void {

  }

}
