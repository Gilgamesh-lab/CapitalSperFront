import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { personnagesRoutes } from './personnage/personnage.module';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),provideRouter(personnagesRoutes), provideRouter(routes), provideClientHydration()]
};// on charge les routes personnages d'abord
