
import { Component, OnInit } from '@angular/core';
import {} from 'googlemaps';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild('map', {static: true}) mapElement: any;
  map: google.maps.Map;
  constructor() { }

  ngOnInit() {
    const mapProperties = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
  }

}
