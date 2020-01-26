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

  setAirQuality(){

  }
}
