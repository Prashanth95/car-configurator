import { Component, TemplateRef } from '@angular/core';
import { MainService } from '../../../services/main.service';
import { CarModelDetails, ModelOptionsConfig, SelectedOptionConfig } from '../../../models/models.model';

@Component({
  selector: 'app-config-options',
  templateUrl: './config-options.component.html',
  styleUrl: './config-options.component.scss'
})

export class ConfigOptionsComponent {
  carModelData: CarModelDetails;
  configOptionsData: SelectedOptionConfig;
  configs: Array<ModelOptionsConfig>;
  selectedConfigValue: number;
  selectedConfigData: ModelOptionsConfig;
  isConfigPageExist: ModelOptionsConfig;
  configDropdownValue: number;
  headerText: string = 'Step 2: Select your config and options';


  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.getConfigOptions()
  }


  getConfigOptions(): void {
    this.carModelData = this.mainService.getCarModelDetails();
    if (this.carModelData) {
      this.mainService.getconfigOptions(this.carModelData?.selectedCarModel).subscribe((results) => {
        this.configOptionsData = results;
        this.configs = this.configOptionsData?.configs;
        this.isConfigPageExist = this.mainService.getCarConfigData();
        if (this.isConfigPageExist) {
          this.checkExistingData()
        } else {
          this.mainService.setTowHitch(this.configOptionsData?.towHitch);
          this.mainService.setYokeSteering(this.configOptionsData?.yoke);
        }
      })
    }
  }

  checkExistingData(): void {
    this.selectedConfigValue = this.isConfigPageExist.id;
    this.selectedConfigData = {
      id: this.isConfigPageExist.id,
      description: this.isConfigPageExist.description,
      range: this.isConfigPageExist.range,
      speed: this.isConfigPageExist.speed,
      price: this.isConfigPageExist.price
    }
    this.configOptionsData.towHitch = this.mainService.getTowHitch();
    this.configOptionsData.yoke = this.mainService.getYokeSteering();
    this.mainService.setTowHitch(this.configOptionsData.towHitch);
    this.mainService.setYokeSteering(this.configOptionsData.yoke);
  }

  selectedConfig(configValue: string): void {
    this.selectedConfigValue = Number(configValue);
    this.configs.forEach((item: ModelOptionsConfig) => {
      if (this.selectedConfigValue == item.id) {
        this.selectedConfigData = item;
        this.mainService.setCarConfigData(this.selectedConfigData);
        this.mainService.setCarConfigSubject(this.selectedConfigData);
      }
    })
  }


  towHitchChange(value: boolean): void {
    this.mainService.setTowHitch(value);
  }


  yokeSteeringChange(value: boolean): void {
    this.mainService.setYokeSteering(value);
  }


}
