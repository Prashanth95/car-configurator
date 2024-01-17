import { Component, ElementRef, OnInit, TemplateRef } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { Model } from '../../../models/models.model';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-model-color',
  templateUrl: './model-color.component.html',
  styleUrl: './model-color.component.scss'
})
export class ModelColorComponent implements OnInit {

  models: any = [];
  selectedModelColors: any;
  selectedColorList: any;
  selectedModelColorsCode: any;
  



  headerText = 'Step 1: Choose your Model and Color';

  constructor(private mainService:MainService){}

  ngOnInit() : void {
    this.mainService.getModels().subscribe((results) => {
      this.models = results;
    })
  }

  selectedModel(selectedCode:String) : void {
    this.models.forEach((item:Model) => {
      if(item.code == selectedCode) {
        this.selectedModelColors = item.colors;
        this.selectedModelColorsCode = item.code;
      }
    })
    this.displayImage()
  }

  selectedColor(color:String) : void {
    this.selectedColorList = color;
    this.displayImage()
  }


  displayImage() : void {
    if(this.selectedModelColors && this.selectedColorList) {
      this.mainService.setModelColor(this.selectedModelColorsCode, this.selectedColorList)
    }
  }


}
