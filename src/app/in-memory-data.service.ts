import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
import { Personnage } from './personnage/personnage';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  
  createDb() {
    return {Personnage};
  }
}
