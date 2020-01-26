import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { DataService } from '../data.service';
import { MapComponent } from "../map/map.component";
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentAddress = "";

  @ViewChild(MapComponent, {static: true}) child;

  constructor(public http : HttpClient, public dataService: DataService) { }

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
          this.dataService.single = [
            {
              "name": "Air Quality",
              "value": value.data.indexes.baqi.aqi
            }
          ];
          this.dataService.setAirQualityColor();
          airQualitySub.unsubscribe();
        });
    
        let fireSub = this.http.get("https://api.breezometer.com/fires/v1/current-conditions?lat=" + lat + "&lon=" + lng + "&key=639074e9fc5b4dd492f3b559390184d3&radius=100")
        .subscribe((value : any) => {
          console.log(value);
          console.log(value.data.fires);
          if(value.data.fires.length < 1){
            this.dataService.fireDistance = "100+";
          }
          else{
            let min = 100
            value.data.fires.forEach(element => {
              if(element.position.distance.value < min){
                min = element.position.distance.value;
              }
            });
            this.dataService.fireDistance = "" + Math.round(min);
          }
          fireSub.unsubscribe();
        });
        
        let now = new Date();
        let one = new Date(86400000)
        console.log(now.toJSON());
        let lastMonth = new Date((now.valueOf() - 30 * one.valueOf()));
        //console.log(yesterday.toJSON());

        let authorizationData = 'Basic ' + btoa('2cb07f8a' + ':' + '170a49283480df4caedee63e6c4cedbc');

        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Authorization': authorizationData
            })
        };

        let pastWeatherSub = this.http.get("https://insight.api.wdtinc.com/daily-precipitation/" + lat + "/" + lng + "?start=" + lastMonth.toJSON().substr(0, 10) + "&end=" + now.toJSON().substr(0,10), headerOptions)
        .subscribe((value : any) => {
          console.log("PRECIP");
          console.log(value.series);
          let tRainFall = 0;
          let objs = [{
            "name" : "Precipitation",
            "series": [{"name": "","value": 0}]
          }]
          objs[0].series.pop();
          value.series.forEach((elem: any) => {
            let name = elem.validDate.substr(5,5);
            let value = elem.value;
            tRainFall += elem.value;
            objs[0].series.push({"name":name,"value":value});
          });
          this.dataService.tRainfall = [{"name":"Total Rainfall","value":""+ tRainFall}]
          this.dataService.precip = objs;
          this.dataService.roundedtRainFall = Math.round(tRainFall);
          pastWeatherSub.unsubscribe();
        });

        let currentWeatherSub = this.http.get("https://api.climacell.co/v3/weather/realtime?lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,visibility,wind_direction:degrees,fire_index,humidity&apikey=kKGWvhbvo24tF2BELO9ErG2j1PH4YLon")
        .subscribe((value : any) => {
          this.dataService.temp = [
            {
              name: "Temperature (C)",
              value: value.temp.value
            }
          ];
          this.dataService.roundedTemp = Math.round(value.temp.value);
          this.dataService.updateTempColor();
          this.dataService.humidity = [
            {
              name: "Humidity",
              value: value.humidity.value
            },
            {
              name: "Humidity1",
              value: 100-value.humidity.value
            },
          ];
          this.dataService.roundedHumidity = Math.round(value.humidity.value);
          console.log(value);
          currentWeatherSub.unsubscribe();
        });

        addressSub.unsubscribe();
        
        const mapProperties = {
          center: new google.maps.LatLng(lat, lng),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.dataService.mapProperties = mapProperties;
        console.log("Search Done");
        this.child.onRefresh();

      });
  }

  getAddress(event) {
    console.log(event.formatted_address);
    this.currentAddress = event.formatted_address;
    this.onSearch();
  }

}
