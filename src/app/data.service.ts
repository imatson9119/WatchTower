import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  single = [
    {
      "name": "Air Quality",
      "value": 100
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
  roundedTemp = 25;
  aqMessage = "Excellent";
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
