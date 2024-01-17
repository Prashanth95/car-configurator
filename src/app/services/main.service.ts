import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Model } from '../models/models.model';

const headerOptions: any = new Headers();

@Injectable({
  providedIn: 'root'
})
export class MainService {
  selectedModelColor: boolean = false;
  selectedCarModel: any;
  selectedCarColor: any;

  public selectedCarModelColorDetails:Subject<Array<Model>> = new Subject();
  public selectedCarModelColorDetails$: Observable<Array<Model>> = this.selectedCarModelColorDetails.asObservable();



  constructor(private http: HttpClient) { }

  getModels(): Observable<Model> {
    const apiUrl = '/models';
    return this.http.get<Model>(apiUrl);
  }

  setModelColor(model:Model, color:Model) {
    let carModelColorDetails:any = {
      selectedCarModelColor: true,
      selectedCarModel: model,
      selectedCarColor: color
    }
    this.selectedCarModelColorDetails.next(carModelColorDetails);
  }

  getModelColor() {
    return this.selectedCarModelColorDetails
  }
}
