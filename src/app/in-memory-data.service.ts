import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { PERSONNAGES } from './personnage/mock-personnages-list';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  
  createDb() {
    const personnages = PERSONNAGES;
    console.log("perso = " + personnages[0].camps);
    return { personnages };
  }
}
