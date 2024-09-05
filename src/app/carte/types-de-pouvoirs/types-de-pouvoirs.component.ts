import { Component } from '@angular/core';
import { typesDePouvoirs } from '../typesDePouvoirs';
import { ActivatedRoute } from '@angular/router';
import { carteService } from '../carte.service';
import { AppComponent } from '../../app.component';
import { Carte } from '../carte';
import { CARTES } from '../mock-cartes-list';
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

  constructor(private route: ActivatedRoute, private carteService: carteService, private appComponent: AppComponent){

  }

  ngOnInit(): void {
    const typesDePouvoirsId: number|null = +this.route.snapshot.paramMap.get('id');// on récupère l'id
    if(typesDePouvoirsId){
      this.typesDePouvoirs = TYPESDEPOUVOIR[typesDePouvoirsId - 1];
      if(this.typesDePouvoirs == undefined){
        this.appComponent.goTo404();
      }
    }
    else{
      this.appComponent.goTo404();
    }
  }

  public getcartesQuiACeTypeDePouvoirs(typesDePouvoirs: typesDePouvoirs): Carte[]{
    return CARTES.filter((carte) => carte.typesPouvoir.includes(typesDePouvoirs) && carte.estActiver);
  }

  public goToPrevious(): void {
    this.appComponent.goToPrevious();

  }

  goTocarte(carte: Carte){
    this.appComponent.goTocarte(carte);
  }

  public goMenu(): void {
    this.appComponent.goMenu();

  }

}
