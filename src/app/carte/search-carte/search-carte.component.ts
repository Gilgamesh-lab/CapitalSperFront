import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Carte } from '../carte';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, filter, map, pipe, switchMap } from 'rxjs';
import { CommonModule} from '@angular/common';
import {carteService} from '../carte.service'
import { AuthService } from '../../auth.service';
import { CapitalSperComponent } from '../../capital-sper/capital-sper.component';
import { CARTES } from '../mock-cartes-list';
import { FormsModule } from '@angular/forms';
import { Concept } from '../../concept';
import { typesDeCartes } from '../typesDeCartes';


@Component({
  selector: 'app-search-carte',
  standalone: true,
  imports: [ CommonModule, FormsModule ],
  templateUrl: './search-carte.component.html',
  styleUrl: './search-carte.component.css'
})
export class SearchcarteComponent implements OnInit{

  searchTerms = new Subject<string>();// flux de données dans le temps de l'utilisateur lettre après lettre(= historique champs de recherche)
  cartes: Observable<Concept[]>;
  isCapitalSper: boolean;
  string; mot;
  carteDisponible: number[];

  constructor(private router: Router, private carteService: carteService, private auth: AuthService){
    
  }

  async ngOnInit(): Promise<void> {
    this.isCapitalSper = this.router.url.includes('capital-sper');
    if(this.isCapitalSper){
      this.carteDisponible = this.carteService.tab;
    }
    
    this.cartes = this.searchTerms.pipe(
      //  {..."a"."ab"..."abz"."ab"....abc......}
      debounceTime(300), // pour éliminer des requêtes dont à pas besoin
      //  {...."ab"...."ab"....abc......}
      distinctUntilChanged(),
      //  {...."ab"........abc......}
      //map((mot) => this.carteService.cherchercarte(mot));
      // concatMap / mergeMap / SwitchMap,
      switchMap((mot) => this.carteService.cherchercarte(mot)),
      pipe(map( (arr =>
        arr.filter( r => ((r.estActiver === true || this.auth.isLoggedIn) && (!this.isCapitalSper || this.carteDisponible.filter(id => id == r.idOrdreAppel).length != 0)
        && (this.carteService.getCarteCapitalSper().filter(carte2 => r.id == carte2.id).length == 0)  )  ))))
    );
 
    
    
    //&& ((await this.getObjet().then()).filter(id => id == carte.idOrdreAppel).length != 0)
  }


  async init(): Promise<void>{
    this.cartes =  this.searchTerms.pipe(
      //  {..."a"."ab"..."abz"."ab"....abc......}
      debounceTime(300), // pour éliminer des requêtes dont à pas besoin
      //  {...."ab"...."ab"....abc......}
      distinctUntilChanged(),
      //  {...."ab"........abc......}
      //map((mot) => this.carteService.cherchercarte(mot));
      // concatMap / mergeMap / SwitchMap
      switchMap((mot) => this.carteService.cherchercarte(mot)),
      pipe(map((arr =>
        arr.filter( r => ((r.estActiver === true || this.auth.isLoggedIn) && (this.carteService.getCarteCapitalSper().filter(carte2 => r.id == carte2.id).length == 0) 
      && this.carteDisponible.filter(id => id == r.idOrdreAppel).length != 0  ) ))))
    );
  }


  search(mot: string){
    this.searchTerms.next(mot);
  }

  getMessage(): String{
    if(!this.isCapitalSper){
      return "Rechercher une carte";
    }
    else{
      return "Ajouter une carte"
    }
  }
  
  mappageConceptToCarte(concept: Concept): Carte{
    return CARTES.find(carte => carte.id == concept.id);
  }

  getCartes(): Carte[]{
    return this.carteService.cartes;
  }

  goToDetail(concept: Concept){
    const link = ['/cartes', concept.id];
    this.router.navigate(link);
  }

  action(concept: Concept): void{
    if( this.isCapitalSper && concept.typeDeConcept == 1){
      let carte: Carte = this.mappageConceptToCarte(concept);
      this.incrementerNb(carte);
      if(carte.id != CARTES[0].id && carte.id != CARTES[1].id){
        this.init();
      }
      
      
    }
    else{
      switch(concept.typeDeConcept){
        case(1):
          this.goToDetail(concept);
          
      }
      
    }

  }




  incrementerNb(carte: Carte){
    this.carteService.incrementerNb(carte);
  }

}
