import { Component, OnInit } from '@angular/core';
import { MainService } from './services/main.service';
import { Router } from '@angular/router';
import { CarModelDetails, ModelOptionsConfig } from './models/models.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  carModelColorObj: CarModelDetails;
  carConfigData: ModelOptionsConfig;

  constructor(private route: Router, private mainService:MainService) {}

  ngOnInit(): void {

    this.mainService.selectedCarModelColorDetails.subscribe(data => {
      this.carModelColorObj = data;
      this.mainService.setCarModelDetails(this.carModelColorObj);
    });

    this.mainService.carConfigSubject.subscribe(data => {
      this.carConfigData = data;
    })
  }

  modelColor(): void {
    this.route.navigate(['/modelColor']);
  }

  configOptions(): void {
    this.route.navigate(['/config']);
  }

  totalCost(): void {
    this.route.navigate(['/cost']);
  }


}
