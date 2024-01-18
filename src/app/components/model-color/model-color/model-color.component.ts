import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { CarModelDetails, Model, ModelColor } from '../../../models/models.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-model-color',
  templateUrl: './model-color.component.html',
  styleUrl: './model-color.component.scss'
})
export class ModelColorComponent implements OnInit {

  models: Array<Model> = [];
  isModelPageExist: CarModelDetails;
  selectedModelColors: Array<ModelColor> = [];
  selectedColorValue: string = '';
  selectedModelColorsCode: string = '';
  selectedModelDesc: string = '';
  selectedModelColorsDescription: string = '';
  selectedModelColorPrice: number = 0;
  

  headerText:string = 'Step 1: Choose your Model and Color';

  constructor(private mainService:MainService){}

  ngOnInit() : void {
    this.getModelsList();
  }

  getModelsList() : void {
    this.mainService.getModels().subscribe((results) => {
      this.models = results;
      this.checkExistingData();
    })
  }

  checkExistingData(): void {
    this.isModelPageExist = this.mainService.getModelPageData();
    if(this.isModelPageExist) {
      this.selectedModelColorsCode = this.isModelPageExist.selectedCarModel;
      this.selectedModel(this.isModelPageExist.selectedCarModel);
    }
  }

  selectedModel(selectedCode:String) : void {
    this.models.forEach((item:Model) => {
      if(item.code == selectedCode) {
        this.selectedModelColors = item.colors;
        this.selectedModelColorsCode = item.code;
        this.selectedModelDesc = item.description;
        this.selectedColorValue = this.selectedModelColors[0]?.code;
        this.selectedModelColorPrice = this.selectedModelColors[0]?.price;
        this.selectedModelColorsDescription = this.selectedModelColors[0]?.description;
      }
    })
    this.displayImage()
  }

  selectedColor(color:string) : void {
    this.selectedColorValue = color;
    this.selectedModelColors.forEach((item:ModelColor) => {
      if(item.code == this.selectedColorValue) {
        this.selectedModelColorPrice = item.price;
        this.selectedModelColorsDescription = item.description;
      }
    })
    this.displayImage()
  }


  displayImage() : void {
    if(this.selectedModelColors && this.selectedColorValue) {
      this.mainService.setModelColor(this.selectedModelColorsCode, this.selectedColorValue, 
        this.selectedModelColorsDescription, this.selectedModelColorPrice, this.selectedModelDesc);
    }
  }


}
