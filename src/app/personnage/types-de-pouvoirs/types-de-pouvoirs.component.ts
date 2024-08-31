import { Component } from '@angular/core';
import { typesDePouvoirs } from '../typesDePouvoirs';
import { ActivatedRoute } from '@angular/router';
import { PersonnageService } from '../personnage.service';
import { AppComponent } from '../../app.component';
import { Personnage } from '../personnage';
import { PERSONNAGES } from '../mock-personnages-list';
import { LoaderComponent } from '../loader/loader.component';
import { CommonModule } from '@angular/common';
import { TYPESDEPOUVOIR } from '../mock-typesDePouvoirs-list';

@Component({
  selector: 'app-types-de-pouvoirs',
  standalone: true,
  imports: [CommonModule, LoaderComponent, AppComponent],
  templateUrl: './types-de-pouvoirs.component.html',
  styleUrl: './types-de-pouvoirs.component.css'
})
export class TypesDePouvoirsComponent {

  typesDePouvoirs: typesDePouvoirs|undefined;

  constructor(private route: ActivatedRoute, private personnageService: PersonnageService, private appComponent: AppComponent){

  }

  ngOnInit(): void {
    const typesDePouvoirsId: number|null = +this.route.snapshot.paramMap.get('id');// on récupère l'id
    if(typesDePouvoirsId){
      this.typesDePouvoirs = TYPESDEPOUVOIR[typesDePouvoirsId - 1];
    }
  }

  public getPersonnagesQuiACeTypeDePouvoirs(typesDePouvoirs: typesDePouvoirs): Personnage[]{
    return PERSONNAGES.filter((personnage) => personnage.typesPouvoir.includes(typesDePouvoirs) && personnage.estActiver);
  }

  public goToPrevious(): void {
    this.appComponent.goToPrevious();

  }

  goToPersonnage(personnage: Personnage){
    this.appComponent.goToPersonnage(personnage);
  }

  public goMenu(): void {
    this.appComponent.goMenu();

  }

}
