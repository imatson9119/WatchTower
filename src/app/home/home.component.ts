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
    let sub = this.http.get("https://api.breezometer.com/air-quality/v2/current-conditions?lat=49&lon=2&key=639074e9fc5b4dd492f3b559390184d3")
      .subscribe((value : any) => {
        console.log(value);
        console.log(value.data.indexes.baqi.aqi);
      });

    let fireSub = this.http.get("https://api.breezometer.com/fires/v1/current-conditions?lat=-37&lon=148&key=639074e9fc5b4dd492f3b559390184d3&radius=100")
    .subscribe((value : any) => {
      console.log(value);
      console.log(value.data.fires);
    });
  }

}
