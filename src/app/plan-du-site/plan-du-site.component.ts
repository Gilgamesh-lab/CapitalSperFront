import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Carte } from '../carte/carte';
import { CARTES } from '../carte/mock-cartes-list';
import { typesDeCartes } from '../carte/typesDeCartes';
import { TYPESDECARTES } from '../carte/mock-typesDeCartes-list';
import { CAMPS } from '../carte/mock-camps-list';
import { Camp } from '../carte/camp';
import { typesDePouvoirs } from '../carte/typesDePouvoirs';
import { TYPESDEPOUVOIR } from '../carte/mock-typesDePouvoirs-list';
import { AuthService } from '../auth.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-plan-du-site',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plan-du-site.component.html',
  styleUrl: './plan-du-site.component.css'
})
export class PlanDuSiteComponent {

  constructor(private router: Router, private auth:AuthService){

  }

  goMenu(){
    this.router.navigate(['/']);
  }

  goRegles(){
    this.router.navigate(['regles']);
  }

  goTocarte(carte: Carte){
    this.router.navigate(['/cartes', carte.id])
  }

  public typeDeCarteEstActiver(typesDeCartes: typesDeCartes): boolean{
    if(this.auth.isLoggedIn ){
      return true;
    }
    else{
      return CARTES.filter((carte) =>  carte.typeDeCarte.id == typesDeCartes.id &&   carte.estActiver) .length > 0;
    }
    
  }

  getCartesParType(typeCarte: typesDeCartes): Carte[]{
    return CARTES.filter((carte) => carte.typeDeCarte.id == typeCarte.id && (carte.estActiver || this.auth.isLoggedIn));
  }

  getTypeDeCarte(): typesDeCartes[]{
    return TYPESDECARTES;
  }

  getCamps(): Camp[]{
    return CAMPS;
  }

  getTypeDePouvoir(): typesDePouvoirs[]{
    return TYPESDEPOUVOIR;
  }

  public typeDePouvoirsEstActiver(typesDePouvoirs: typesDePouvoirs): boolean{
    if(this.auth.isLoggedIn ){
      return true;
    }
    else{
      return CARTES.filter((carte) => carte.typesPouvoir != null && carte.typesPouvoir.includes(typesDePouvoirs) && carte.estActiver).length > 0;
    }
  }

  public CampsEstActiver(camp: Camp): boolean{
    if(this.auth.isLoggedIn ){
      return true;
    }
    else{
      return CARTES.filter((carte) => carte.camps != null && carte.camps.id == camp.id && carte.estActiver).length > 0;
    }
  }

  goToCamp(camp: Camp){
    this.router.navigate(['/camps', camp.id]);
  }

  goToPouvoir(pouvoir: typesDePouvoirs){
    this.router.navigate(['/typesDePouvoirs', pouvoir.id]);
  }

  goToType(type: typesDeCartes){
    this.router.navigate(['/typesDeCartes', type.id]);
  }


}
