import { Component, OnInit, ViewChild, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { DataService } from '../data.service';
import { MapComponent } from "../map/map.component";
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  currentAddress = "";

  @ViewChild(MapComponent, {static: true}) child;

  constructor(public http : HttpClient, public dataService: DataService, public cdr : ChangeDetectorRef) { }

  ngOnInit() {
    this.onSearch();
  }

  onSearch() {
    console.log("Called search");
    this.dataService.loading = 0;
    //GOOGLE GEOLOCATION API KEY: AIzaSyDxgXIfTSPLslewg0rU7ilnN0UxI1AXoek
    //CLIMACELL API KEY: kKGWvhbvo24tF2BELO9ErG2j1PH4YLon
    //TODO: Get latitude and longitude from address

    

    let addressSub = this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + this.currentAddress.trim().replace(' ', '+') + "&key=AIzaSyDxgXIfTSPLslewg0rU7ilnN0UxI1AXoek")
      .subscribe((value : any) => {
        console.log("Starting Address Sub");
        let lat = value.results[0].geometry.location.lat;
        let lng = value.results[0].geometry.location.lng;

        let airQualitySub = this.http.get("https://api.breezometer.com/air-quality/v2/current-conditions?lat=" + lat + "&lon=" + lng + "&key=639074e9fc5b4dd492f3b559390184d3")
        .subscribe((value : any) => {
          console.log("Starting AQ Sub");
          this.dataService.single = [
            {
              "name": "Air Quality",
              "value": Math.max(value.data.indexes.baqi.aqi,10)
            }
          ];
          this.dataService.setAirQualityColor();
          this.dataService.loading+=20;
          console.log("Finished AQ Sub");
          this.cdr.detectChanges();
          airQualitySub.unsubscribe();
        });
    
        let fireSub = this.http.get("https://api.breezometer.com/fires/v1/current-conditions?lat=" + lat + "&lon=" + lng + "&key=639074e9fc5b4dd492f3b559390184d3&radius=100")
        .subscribe((value : any) => {
          console.log("Starting Fire Sub");
          this.dataService.nearbyFires = value.data.fires;
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
          this.dataService.updateDistanceColor();
          this.dataService.loading+=20;
          console.log("Finished Fire Sub");
          this.cdr.detectChanges();

          fireSub.unsubscribe();
        });
        
        let now = new Date();
        let one = new Date(86400000)
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
          console.log("Starting rain sub");
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
          this.dataService.loading+=20;
          console.log("Ending Rain Sub");
          this.cdr.detectChanges();

          pastWeatherSub.unsubscribe();
        });

        let currentWeatherSub = this.http.get("https://api.climacell.co/v3/weather/realtime?lat=" + lat + "&lon=" + lng + "&unit_system=si&fields=temp,wind_speed,visibility,wind_direction:degrees,fire_index,humidity&apikey=kKGWvhbvo24tF2BELO9ErG2j1PH4YLon")
        .subscribe((value : any) => {
          console.log("Startin Weather Sub");
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
          this.dataService.fireIndex = Math.round(value.fire_index.value);
          this.dataService.updateIndexColor();

          this.dataService.loading+=20;
          console.log("Ending Weather Sub");
          currentWeatherSub.unsubscribe();
        });
        this.dataService.loading+=20;
        console.log("Ending Address Sub");
        this.cdr.detectChanges();

        addressSub.unsubscribe();
        
        const mapProperties = {
          center: new google.maps.LatLng(lat, lng),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.dataService.mapProperties = mapProperties;
        this.child.onRefresh();

      });
  }

  getAddress(event) {
    this.currentAddress = event.formatted_address;
    this.onSearch();
  }

}
