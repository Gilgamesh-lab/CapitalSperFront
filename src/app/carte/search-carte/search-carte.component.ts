import { Component, OnInit } from '@angular/core';
import { Carte } from '../carte';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, filter, map, pipe, switchMap } from 'rxjs';
import { CommonModule} from '@angular/common';
import {carteService} from '../carte.service'
import { AuthService } from '../../auth.service';


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

  constructor(private router: Router, private carteService: carteService, private auth: AuthService){
    
  }

  ngOnInit(): void {
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
        arr.filter( r => r.estActiver === true || this.auth.isLoggedIn))))
    );
  }


  search(mot: string){
    this.searchTerms.next(mot);
  }

  goToDetail(carte: Carte){
    const link = ['/cartes', carte.id];
    this.router.navigate(link);
  }

}
