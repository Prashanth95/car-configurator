import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { CarModelDetails, ModelOptionsConfig } from '../../../models/models.model';

@Component({
  selector: 'app-total-cost',
  templateUrl: './total-cost.component.html',
  styleUrl: './total-cost.component.scss'
})

export class TotalCostComponent implements OnInit {
  carModelDetails: CarModelDetails;
  carConfigData: ModelOptionsConfig;

  carModelText: string = '';
  carModelConfig:string = '';
  towHitch: boolean = false;
  yokeSteering: boolean = false;
  headerText:string = 'Step 3: Summary';
  finalCost:number = 0;

  public towHitchCost: number = 1000;
  public yokeCost: number = 1000;
  
  constructor(private mainService:MainService) {  }

  ngOnInit() : void {
    this.carModelDetails =  this.mainService.getCarModelDetails();
    this.carConfigData = this.mainService.getCarConfigData();
    this.towHitch = this.mainService.getTowHitch();
    this.yokeSteering = this.mainService.getYokeSteering();
    this.totalCost()
  }

  totalCost() : void {
    let carConfigPrice = this.carConfigData ? this.carConfigData.price : 0;
    let carModelPrice  = this.carModelDetails ? this.carModelDetails.selectedModelColorPrice : 0;
    let towHitchPrice = this.towHitch ? this.towHitchCost : 0;
    let yokesteeringPrice = this.yokeSteering ? this.yokeCost : 0;
    this.finalCost = carConfigPrice + carModelPrice + towHitchPrice + yokesteeringPrice;
  }

}
