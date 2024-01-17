import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  carModelColorObj: any;

  constructor(private route: Router, private mainService:MainService) {}

  ngOnInit(): void {
    this.mainService.selectedCarModelColorDetails.subscribe(data => {
      this.carModelColorObj = data;
    })
  }

  modelColor(): void {
    this.route.navigate(['/modelColor'])
  }


}
