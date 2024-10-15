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
    const cartes: Carte[] = CARTES.filter((carte) => carte.estActiver || this.authService.isLoggedIn);
    return { cartes };
  }
}
