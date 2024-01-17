import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ModelColorComponent } from './components/model-color/model-color/model-color.component';


@NgModule({
  declarations: [
    AppComponent,
    ModelColorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap:[AppComponent]
  
})
export class AppModule { }
