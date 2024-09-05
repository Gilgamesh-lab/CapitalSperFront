import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { cartesRoutes } from './carte/carte.module';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
    importProvidersFrom(HttpClient, HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)),
      provideClientHydration(),
    
    provideRouter(cartesRoutes),
     provideRouter(routes)
     
      //

  ]
};// on charge les routes cartes d'abord

