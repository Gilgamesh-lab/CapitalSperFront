import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { PERSONNAGES } from './personnage/mock-personnages-list';
import { Personnage } from './personnage/personnage';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  
  createDb() {
    const personnages: Personnage[] = PERSONNAGES.filter((personnage) => personnage.estActiver);
    return { personnages };
  }
}
