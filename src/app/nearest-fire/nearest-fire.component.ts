import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-nearest-fire',
  templateUrl: './nearest-fire.component.html',
  styleUrls: ['./nearest-fire.component.scss']
})
export class NearestFireComponent implements OnInit {

  constructor(public dataService: DataService) { }

  ngOnInit() {
  }
  
}
