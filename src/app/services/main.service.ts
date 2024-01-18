import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { CarModelDetails, Model, ModelOptionsConfig, SelectedOptionConfig } from '../models/models.model';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  selectedModelColor: boolean = false;
  carModelColorDetails:CarModelDetails;

  public selectedCarModelColorDetails:Subject<CarModelDetails> = new Subject();
  public selectedCarModelColorDetails$: Observable<CarModelDetails> = this.selectedCarModelColorDetails.asObservable();

  public carConfigSubject:Subject<ModelOptionsConfig> = new Subject();
  public carConfigSubject$: Observable<ModelOptionsConfig> = this.carConfigSubject.asObservable();

  carModelDetails: CarModelDetails;
  carConfigData: ModelOptionsConfig;
  towHitchValue: boolean = false;
  yokeSteering: boolean = false;



  constructor(private http: HttpClient) {}

  getModels(): Observable<Model[]> {
    const apiUrl = '/models';
    return this.http.get<Model[]>(apiUrl);
  }

  getconfigOptions(modelCode:string): Observable<SelectedOptionConfig> {
    const apiUrl = `/options/${modelCode}`;
    return this.http.get<SelectedOptionConfig>(apiUrl);
  }

  setModelColor(model:string, color:string, selectedModelColorsDescription:string, selectedCarColorPrice:number, modelDesc:string) {
    this.carModelColorDetails = {
      selectedCarModelColor: true,
      selectedCarModel: model,
      selectedCarColor: color,
      selectedModelColorsDescription: selectedModelColorsDescription,
      selectedModelColorPrice: selectedCarColorPrice,
      modelDescription: modelDesc
    }
    this.selectedCarModelColorDetails.next(this.carModelColorDetails);
  }
  
  getModelPageData() : CarModelDetails {
    return this.carModelColorDetails
  }


  setCarConfigSubject(selectedConfigValue:ModelOptionsConfig) : void {
    this.carConfigSubject.next(selectedConfigValue)
  }

  setCarModelDetails(getCarModelDetails:CarModelDetails) {
     this.carModelDetails = getCarModelDetails;
  }

  getCarModelDetails() : CarModelDetails {
    return this.carModelDetails
  }

  setCarConfigData(configData:ModelOptionsConfig) {
    this.carConfigData = configData;
  }

  getCarConfigData() : ModelOptionsConfig {
    return this.carConfigData
  }

  setTowHitch(towHitch:boolean) {
    this.towHitchValue = towHitch;
  }

  getTowHitch() : boolean {
    return this.towHitchValue
  }

  setYokeSteering(value:boolean) {
    this.yokeSteering = value;
  }

  getYokeSteering() : boolean {
    return this.yokeSteering
  }
}
