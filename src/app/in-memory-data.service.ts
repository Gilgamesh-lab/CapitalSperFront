import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Personnages } from './personnage/mock-personnages-list';
import { Personnage } from './personnage/personnage';


@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  
  createDb() {
    const personnages: Personnage[] = Personnages;
    console.log("perso = " + personnages);
    return { personnages };
  }
}
