
import { Component, OnInit } from '@angular/core';
import {} from 'googlemaps';
import {} from 'google';
import { ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild('map', {static: true}) mapElement: any;
  map: google.maps.Map;
  constructor(public dataService: DataService, public http: HttpClient) {
    
  }

  ngOnInit() {
    this.map = new google.maps.Map(this.mapElement.nativeElement,    this.dataService.mapProperties);
    let sub = this.http.get("/").subscribe((values : any) => {
      let test = "";
      values.forEach(value => {
        
      });
    });
  }

  onRefresh(){
    this.map = new google.maps.Map(this.mapElement.nativeElement,    this.dataService.mapProperties);
  }

}
