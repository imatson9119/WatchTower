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
  setAirQualityColor(){
    let value = this.single[0].value;
    if(value >= 80){
      this.aqColor = [
        {
          name: "Air Quality",
          value: '#00c853'
        }
      ];
    }
    else if(value >= 60){
      this.aqColor = [
        {
          name: "Air Quality",
          value: '#6ad555'
        }
      ];
    }
    else if(value >= 40){
      this.aqColor = [
        {
          name: "Air Quality",
          value: '#ffd741'
        }
      ];
    }
    else if(value >= 20){
      this.aqColor = [
        {
          name: "Air Quality",
          value: '#ffab40'
        }
      ];
    }
    else{
      this.aqColor = [
        {
          name: "Air Quality",
          value: '#ff7338'
        }
      ];
    }

  }
}
