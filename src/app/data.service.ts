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
  roundedTemp = 25;
  aqMessage = "Excellent";
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
