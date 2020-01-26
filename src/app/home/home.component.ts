import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentAddress = "";
  
  constructor(public http : HttpClient, public dataServer: DataService) { }

  ngOnInit() {
    this.onSearch();
  }

  onSearch() {
    //GOOGLE GEOLOCATION API KEY: AIzaSyDxgXIfTSPLslewg0rU7ilnN0UxI1AXoek
    //CLIMACELL API KEY: kKGWvhbvo24tF2BELO9ErG2j1PH4YLon
    //TODO: Get latitude and longitude from address

    let addressSub = this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.currentAddress.trim().replace(' ', '+') + "&key=AIzaSyDxgXIfTSPLslewg0rU7ilnN0UxI1AXoek")
      .subscribe((value : any) => {
        console.log(value);
        console.log(value.results[0].geometry.location.lat);
        console.log(value.results[0].geometry.location.lng);
        let lat = value.results[0].geometry.location.lat;
        let lng = value.results[0].geometry.location.lng;

        let airQualitySub = this.http.get("https://api.breezometer.com/air-quality/v2/current-conditions?lat=" + lat + "&lon=" + lng + "&key=639074e9fc5b4dd492f3b559390184d3")
        .subscribe((value : any) => {
          console.log(value);
          console.log(value.data.indexes.baqi.aqi);
          this.dataServer.airQuality = value.data.indexes.baqi.aqi;
          airQualitySub.unsubscribe();
        });
    
        let fireSub = this.http.get("https://api.breezometer.com/fires/v1/current-conditions?lat=" + lat + "&lon=" + lng + "&key=639074e9fc5b4dd492f3b559390184d3&radius=100")
        .subscribe((value : any) => {
          console.log(value);
          console.log(value.data.fires);
          fireSub.unsubscribe();
        });
        
        let weatherSub = this.http.get("https://api.climacell.co/v3/weather/historical/station?start_time=2020-01-24T00:00:00Z&end_time=2020-01-25T00:00:00Z&lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=precipitation&apikey=kKGWvhbvo24tF2BELO9ErG2j1PH4YLon")
        .subscribe((value : any) => {
          weatherSub.unsubscribe();
        });
        addressSub.unsubscribe();
      });
  }

}
