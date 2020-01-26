import { Component, NgModule, OnInit, HostListener } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { multi } from './data';
import { DataService } from '../data.service';

@Component({
  selector: 'app-precipitation',
  templateUrl: './precipitation.component.html',
  styleUrls: ['./precipitation.component.scss']
})
export class PrecipitationComponent implements OnInit {
  multi: any[];

  // options
  legend: boolean = true;
  view = [540,260];
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  colorScheme = {
    domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
  };
  ngOnInit(){
    
  }
  constructor(public dataService: DataService) {
    Object.assign(this, { multi });
    var x = window.matchMedia("(min-width: 700px)");
    this.resize(x);
    x.addListener(this.resize);
  }

  onSelect(event) {
    console.log(event);
  }
  resize(x){
    if(!x.matches){
      this.view = [300,260];
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    let w = event.target.innerWidth;
    if(w < 700 && this.view[0] != 300){
      this.view = [300,260];
    }
    else if(w >= 700 && this.view[0] != 540)
    {
      this.view = [540,260];
    }
  }
}
