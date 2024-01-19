import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app-routing.module';
import { withFetch } from '@angular/common/http';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
