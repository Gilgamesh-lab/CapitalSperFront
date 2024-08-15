import { Injectable } from '@angular/core';
import { Personnages } from './mock-personnages-list';
import { Personnage } from './personnage';

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  constructor() { }

  getPersonnageListe(): Personnage[]{
    return Personnages;
  }

  getPersonnageParId(personnageId: number): Personnage|undefined{
    return Personnages.find(personnage => personnage.idDeRole == personnageId);
  }

  getPersonnageTypePouvoir(): string[]{
    return ['Vie', 'Mort', 'Voyance'];
  }

  getPersonnageCamp(): string[]{
    return ['Village', 'Loups-Garous'];
  }
}
