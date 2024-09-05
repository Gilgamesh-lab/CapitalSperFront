import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { CARTES } from './carte/mock-cartes-list';
import { Carte } from './carte/carte';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  
  createDb() {
    const cartes: Carte[] = CARTES.filter((carte) => carte.estActiver);
    return { cartes };
  }
}
