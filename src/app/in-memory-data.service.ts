import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { CARTES } from './carte/mock-cartes-list';
import { Carte } from './carte/carte';
import { AuthService } from './auth.service';
import { carteService } from './carte/carte.service';




@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor(private authService: AuthService) { }
  
  createDb() {
    let cartes: Carte[] = CARTES;
    return { cartes };
  }

  get(reqInfo: any) {
    // 🚀 Si l'URL commence par "api", utiliser InMemory API
    console.log("test : " + reqInfo.collectionName)
    if (reqInfo.collectionName == 'cartes') {
      return undefined; // Laisser l’API in-memory gérer ça
    }

    // 🔥 Sinon, laisser passer la requête vers Spring Boot
    return null;
  }
}
