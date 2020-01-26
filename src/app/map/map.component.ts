
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
    this.onRefresh();
  }

  onRefresh(){


    //if(marker != null) {
      //marker.setMap(this.map);
      //console.log("Markers displayed");
    //}
    this.map = new google.maps.Map(this.mapElement.nativeElement,    this.dataService.mapProperties);

    var image = {
      url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      // This marker is 20 pixels wide by 32 pixels high.
      size: new google.maps.Size(20, 32),
      // The origin for this image is (0, 0).
      origin: new google.maps.Point(0, 0),
      // The anchor for this image is the base of the flagpole at (0, 32).
      anchor: new google.maps.Point(0, 32)
    };
    // Shapes define the clickable region of the icon. The type defines an HTML
    // <area> element 'poly' which traces out a polygon as a series of X,Y points.
    // The final coordinate closes the poly by connecting to the first coordinate.
    var shape: any = {
      coords: [1, 1, 1, 20, 18, 20, 18, 1],
      type: 'poly'
    };
    console.log("FIRES");
    console.log(this.dataService.nearbyFires);
    for (var i = 0; i < this.dataService.nearbyFires.length; i++) {
      var fire = this.dataService.nearbyFires[i];
      var marker = new google.maps.Marker({
        position: {lat: parseFloat(fire.position.lat), lng: parseFloat(fire.position.lon)},
        map: this.map,
        icon: image,
        shape: shape,
        title: "check",
        zIndex: 35
      });
      marker.setMap(this.map);
    }

    



    let sub = this.database.list<any>("/").valueChanges().subscribe((values : any) => {
      console.log("Test");
      let heatMapData = [];
      console.log("VALUES");
      console.log(values);
      values.forEach((value : string) => {
        let elems = value.split(",");
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
        opacity:0.5
      });
      heatMap.setMap(this.map);

      sub.unsubscribe();
    });
  }

}
