// import { Injectable } from '@angular/core';
// import * as mapboxgl from 'mapbox-gl';
// import { environment } from "./environment";
// @Injectable({
// providedIn: 'root'
// })
// export class MapService {
// map = mapboxgl.Map;
// style= 'mapbox://styles/graphite-bug/ckudqgudd60oa17mwva3u1eod';
// lat = 45.899977;
// lng = 6.172652;
// zoom = 12
// constructor() {
//   mapboxgl.accessToken = environment.mapbox.accessToken;
// }
// buildMap() {
//   this.map = new mapboxgl.Map({
//     container: 'map',
//     style: this.style,
//     zoom: this.zoom,
//     center: [this.lng, this.lat]
//   })
//  this.map.addControl(new mapboxgl.NavigationControl());
// }
// }