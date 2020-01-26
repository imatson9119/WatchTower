import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  locations = [[-12.471235,133.471387],
            [-12.471235,142.8574315],
            [-17.520864666666668,124.0853425],
            [-17.520864666666668,128.77836474999998],
            [-17.520864666666668,133.471387],
            [-17.520864666666668,138.16440925],
            [-17.520864666666668,142.8574315],
            [-22.570494333333336,114.699298],
            [-22.570494333333336,119.39232025],
            [-22.570494333333336,124.0853425],
            [-22.570494333333336,128.77836474999998],
            [-22.570494333333336,133.471387],
            [-22.570494333333336,138.16440925],
            [-22.570494333333336,142.8574315],
            [-22.570494333333336,147.55045374999997],
            [-27.620124,114.699298],
            [-27.620124,119.39232025],
            [-27.620124,124.0853425],
            [-27.620124,128.77836474999998],
            [-27.620124,133.471387],
            [-27.620124,138.16440925],
            [-27.620124,142.8574315],
            [-27.620124,147.55045374999997],
            [-27.620124,152.243476],
            [-32.669753666666665,119.39232025],
            [-32.669753666666665,124.0853425],
            [-32.669753666666665,128.77836474999998],
            [-32.669753666666665,133.471387],
            [-32.669753666666665,138.16440925],
            [-32.669753666666665,142.8574315],
            [-32.669753666666665,147.55045374999997],
            [-32.667581, 152.178911],
            [-36.178961, 149.589544],
            [-37.71938333333334,142.8574315],
            [-37.71938333333334,147.55045374999997],
            [-37.71938333333334,152.243476],
            [-41.271737, 145.360330],
            [-42.769013,147.55045374999997]];

  single = [
    {
      "name": "Air Quality",
      "value": 100
    }
  ];
  tColor = [
    {
      name: "Temperature (C)",
      value: 'rgb(255,150,150)'
    }
  ];
  aqColor = [
    {
      name: "Air Quality",
      value: '#00c853'
    }
  ];
  temp = [
    {
      name: "Temperature (C)",
      value: "25"
    }
  ];
  tRainfall = [
    {
      name: "Total Rainfall",
      value: "100"
    }
  ];
  precip = [
    {
      "name": "Precipitation",
      "series": [
        {
          "name": " ",
          "value": 0
        }
      ]
    }
  ];

  roundedtRainFall = 100;
  roundedTemp = 25;
  aqMessage = "Excellent";
  const mapProperties = {
    center: new google.maps.LatLng(35.2271, -80.8431),
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  updateTempColor(){
    
    
    if(this.roundedTemp >= 22){
      let critValH = Math.max(0,150-7*(this.roundedTemp-22));
      this.tColor = [
        {
          name: "Temperature (C)",
          value: "rgb(255," + critValH + ',' + critValH + ")"
        }
      ];
    }
    else{
      let critValC = Math.max(0,200-6*(22-this.roundedTemp));
      this.tColor = [
        {
          name: "Temperature (C)",
          value: "rgb(" + critValC + "," + critValC + ",255)"
        }
      ];
      
    }console.log(this.tColor)
  }
  setAirQualityColor(){
    let value = this.single[0].value;
    if(value >= 80){
      this.aqColor = [
        {
          name: "Air Quality",
          value: '#00c853'
        }
      ];
      this.aqMessage = "Excellent";
    }
    else if(value >= 60){
      this.aqColor = [
        {
          name: "Air Quality",
          value: '#6ad555'
        }
      ];
      this.aqMessage = "Good";
    }
    else if(value >= 40){
      this.aqColor = [
        {
          name: "Air Quality",
          value: '#ffd741'
        }
      ];
      this.aqMessage = "Moderate";
    }
    else if(value >= 20){
      this.aqColor = [
        {
          name: "Air Quality",
          value: '#ffab40'
        }
      ];
      this.aqMessage = "Low";
    }
    else{
      this.aqColor = [
        {
          name: "Air Quality",
          value: '#ff7338'
        }
      ];
      this.aqMessage = "Poor";
    }

  }
}
