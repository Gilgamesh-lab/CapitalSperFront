import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Carte } from '../carte';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, filter, map, pipe, switchMap } from 'rxjs';
import { CommonModule} from '@angular/common';
import {carteService} from '../carte.service'
import { AuthService } from '../../auth.service';
import { CapitalSperComponent } from '../../capital-sper/capital-sper.component';
import { CARTES } from '../mock-cartes-list';


@Component({
  selector: 'app-search-carte',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './search-carte.component.html',
  styleUrl: './search-carte.component.css'
})
export class SearchcarteComponent implements OnInit{

  searchTerms = new Subject<string>();// flux de données dans le temps de l'utilisateur lettre après lettre(= historique champs de recherche)
  cartes: Observable<Carte[]>;
  isCapitalSper: boolean;
  string; mot;

  constructor(private router: Router, private carteService: carteService, private auth: AuthService){
    
  }

  ngOnInit(): void {
    this.isCapitalSper = this.router.url.includes('capital-sper');
    this.cartes = this.searchTerms.pipe(
      //  {..."a"."ab"..."abz"."ab"....abc......}
      debounceTime(300), // pour éliminer des requêtes dont à pas besoin
      //  {...."ab"...."ab"....abc......}
      distinctUntilChanged(),
      //  {...."ab"........abc......}
      //map((mot) => this.carteService.cherchercarte(mot));
      // concatMap / mergeMap / SwitchMap
      switchMap((mot) => this.carteService.cherchercarte(mot)),
      pipe(map((arr =>
        arr.filter( r => ((r.estActiver === true || this.auth.isLoggedIn) )))))
    );
    this.search(this.mot);

  }

  init(): void{
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
        arr.filter( r => ((r.estActiver === true || this.auth.isLoggedIn) && (this.carteService.getCarteCapitalSper().filter(carte2 => r.id == carte2.id).length == 0) )))))
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

  getCartes(): Carte[]{
    return this.carteService.cartes;
  }

  goToDetail(carte: Carte){
    const link = ['/cartes', carte.id];
    this.router.navigate(link);
  }

  action(carte: Carte): void{
    if( this.isCapitalSper){
      this.incrementerNb(carte);
      if(carte.id != CARTES[0].id && carte.id != CARTES[1].id){
        this.init();
      }
      
      
    }
    else{
      this.goToDetail(carte);
    }

  }




  incrementerNb(carte: Carte){
    this.carteService.incrementerNb(carte);
  }

}
