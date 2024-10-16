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
}
