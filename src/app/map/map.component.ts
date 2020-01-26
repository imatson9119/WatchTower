
import { Component, OnInit } from '@angular/core';
import {} from 'googlemaps';
import {} from 'google';
import { ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @ViewChild('map', {static: true}) mapElement: any;
  map: google.maps.Map;
  constructor(public dataService: DataService, public database : AngularFireDatabase) {
    
  }

  ngOnInit() {
    this.map = new google.maps.Map(this.mapElement.nativeElement,    this.dataService.mapProperties);
    let sub = this.database.list<any>("/").valueChanges().subscribe((values : any) => {
      //console.log("Test");
      let heatMapData = [];
      //console.log("VALUES");
      //console.log(values);
      values.forEach((value : string) => {
        let elems = value.split(",");
        //console.log(elems[0] + " " + elems[1] + " " + elems[2]);
        let obj = {
          location: new google.maps.LatLng(parseFloat(elems[0]), parseFloat(elems[1])), 
          weight:1*parseFloat(elems[2])
        };

        heatMapData.push(obj);

      });

      let heatMap = new google.maps.visualization.HeatmapLayer({
        data: heatMapData
      });

      heatMap.setOptions({data:heatMapData,
        radius:1.2,
        dissipating:false,
      });
      heatMap.setMap(this.map);

      sub.unsubscribe();
    });
  }

  onRefresh(){
    this.map = new google.maps.Map(this.mapElement.nativeElement,    this.dataService.mapProperties);

    let sub = this.database.list<any>("/").valueChanges().subscribe((values : any) => {
      //console.log("Test");
      let heatMapData = [];
      //console.log("VALUES");
      //console.log(values);
      values.forEach((value : string) => {
        let elems = value.split(",");
        //console.log(elems[0] + " " + elems[1] + " " + elems[2]);
        let obj = {
          location: new google.maps.LatLng(parseFloat(elems[0]), parseFloat(elems[1])), 
          weight:1*parseFloat(elems[2])
        };

        heatMapData.push(obj);

      });

      let heatMap = new google.maps.visualization.HeatmapLayer({
        data: heatMapData
      });

      heatMap.setOptions({data:heatMapData,
        radius:0,
        dissipating:true
      });
      heatMap.setMap(this.map);

      sub.unsubscribe();
    });
  }

}
