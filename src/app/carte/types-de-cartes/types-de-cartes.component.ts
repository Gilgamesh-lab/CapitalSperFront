import { Component } from '@angular/core';
import { TYPESDECARTES } from '../mock-typesDeCartes-list';
import { CARTES } from '../mock-cartes-list';
import { Carte } from '../carte';
import { typesDeCartes } from '../typesDeCartes';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../../app.component';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { carteService } from '../carte.service';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-types-de-cartes',
  standalone: true,
  imports: [CommonModule, LoaderComponent, AppComponent],
  templateUrl: './types-de-cartes.component.html',
  styleUrl: './types-de-cartes.component.css'
})
export class TypesDeCartesComponent {

  typesDeCartes: typesDeCartes|undefined;

  constructor(private route: ActivatedRoute, private carteService: carteService, private appComponent: AppComponent, private auth: AuthService){

  }

  ngOnInit(): void {
    const typesDeCartesId: number|null = +this.route.snapshot.paramMap.get('id');// on récupère l'id
    if(typesDeCartesId){
      this.typesDeCartes = TYPESDECARTES[typesDeCartesId - 1];
      if(this.typesDeCartes == undefined || !this.auth.isLoggedIn &&  CARTES.filter((carte) => carte.estActiver && carte.typeDeCarte.id == typesDeCartesId).length == 0){
        this.appComponent.goTo404();
      }
    }
    else{
      this.appComponent.goTo404();
    }
  }

  public getcartesQuiACeTypeDeCartes(typesDeCartes: typesDeCartes): Carte[]{
    return CARTES.filter((carte) => carte.typeDeCarte.id == typesDeCartes.id && carte.estActiver);
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
