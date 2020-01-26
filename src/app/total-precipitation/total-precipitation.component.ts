import { Component, NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { DataService } from '../data.service';


@Component({
  selector: 'app-total-precipitation',
  templateUrl: './total-precipitation.component.html',
  styleUrls: ['./total-precipitation.component.scss']
})
export class TotalPrecipitationComponent implements OnInit {

  ngOnInit(){

  }
  
  single: any[];
  multi: any[];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  showYAxisLabel = true;
  color = [{"name":"Total Rainfall","value":"#8a99e2"}];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(public dataService: DataService) {
  }

  onSelect(event) {
    console.log(event);
  }
}
