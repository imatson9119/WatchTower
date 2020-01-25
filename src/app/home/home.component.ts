import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public http : HttpClient) { }

  ngOnInit() {
    let sub = this.http.get("https://api.breezometer.com/air-quality/v2/current-conditions?lat=70&lon=70&key=639074e9fc5b4dd492f3b559390184d3")
      .subscribe((value : any) => {
        console.log(value.data.aqi);
      });
  }

}
