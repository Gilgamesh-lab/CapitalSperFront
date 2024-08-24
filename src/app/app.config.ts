import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { personnagesRoutes } from './personnage/personnage.module';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
    importProvidersFrom(HttpClient, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)),
      provideClientHydration(),
    
    provideRouter(personnagesRoutes),
     provideRouter(routes)
     
      //

  ]
};// on charge les routes personnages d'abord

