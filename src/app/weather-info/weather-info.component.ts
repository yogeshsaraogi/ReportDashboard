import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit {

  constructor() { }
  map:any= mapboxgl.Map;
  ngOnInit() {

    (mapboxgl as typeof mapboxgl).accessToken = environment.mapboxkey;
      this.map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/graphite-bug/ckudqgudd60oa17mwva3u1eod', // style URL
      center: [-74.5, 40], // starting position
      zoom: 9 // starting zoom
    });
    // this.map.addControl(new mapboxgl.NavigationControl());

  }

  

}
