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
import { debounceTime, delay } from 'rxjs';
import { carteService } from '../carte/carte.service';
import { waitForAsync } from '@angular/core/testing';
import { LoaderComponent } from '../carte/loader/loader.component';
import { Statut } from '../carte/statut';
import { STATUS } from 'angular-in-memory-web-api';
import { STATUT } from '../carte/mock-status-list';

@Component({
  selector: 'app-plan-du-site',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './plan-du-site.component.html',
  styleUrl: './plan-du-site.component.css'
})
export class PlanDuSiteComponent {

  constructor(private router: Router, private auth:AuthService, public carteService: carteService){

  }

  async ngOnInit(): Promise<void> {
    if(this.carteService.cartes == undefined){
      this.carteService.initCarte(await this.carteService.getCartes())
    }
    
  }

  goMenu(){
    this.router.navigate(['/']);
  }

  goRegles(){
    this.router.navigate(['/regles']);
  }

  goCapitalSper(){
    this.router.navigate(['/capital-sper']);
  }

  goTocarte(carte: Carte){
    this.router.navigate(['/cartes', carte.id])
  }

  public typeDeCarteEstActiver(typesDeCartes: typesDeCartes): boolean{
    if(this.auth.isLoggedIn ){
      return true;
    }
    else{
      return this.carteService.cartes.filter((carte) =>  carte.typeDeCarte.id == typesDeCartes.id) .length > 0;
    }
    
  }

  getCartes(): Carte[]{
    return this.carteService.cartes;
  }

  goToStatut(idStatut: number){
    this.router.navigate(['/statut', idStatut]);
  }

  getStatuts(): Statut[]{
    return STATUT.filter((statut) => this.carteService.cartes.find((carte) => carte.id == statut.idCarteReferent));
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
      return this.carteService.cartes.filter((carte) => carte.typesPouvoir != null && carte.typesPouvoir.includes(typesDePouvoirs)).length > 0;
    }
  }

  public CampsEstActiver(camp: Camp): boolean{
    if(this.auth.isLoggedIn ){
      return true;
    }
    else{
      return this.carteService.cartes.filter((carte) => carte.camps != null && carte.camps.id == camp.id).length > 0;
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
