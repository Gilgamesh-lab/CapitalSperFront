import { Component, OnInit } from '@angular/core';
import { Personnage } from '../personnage';
import { Router } from '@angular/router';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { CommonModule} from '@angular/common';
import {PersonnageService} from '../personnage.service'


@Component({
  selector: 'app-search-personnage',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './search-personnage.component.html',
  styleUrl: './search-personnage.component.css'
})
export class SearchPersonnageComponent implements OnInit{

  searchTerms = new Subject<string>();// flux de données dans le temps de l'utilisateur lettre après lettre(= historique champs de recherche)
  personnages$: Observable<Personnage[]>;

  constructor(private router: Router, private personnageService: PersonnageService){
    
  }

  ngOnInit(): void {
    this.personnages$ = this.searchTerms.pipe(
      //  {..."a"."ab"..."abz"."ab"....abc......}
      debounceTime(300), // pour éliminer des requêtes dont à pas besoin
      //  {...."ab"...."ab"....abc......}
      distinctUntilChanged(),
      //  {...."ab"........abc......}
      //map((mot) => this.personnageService.chercherPersonnage(mot));
      // concatMap / mergeMap / SwitchMap
      switchMap((mot) => this.personnageService.chercherPersonnage(mot))
    );
  }


  search(mot: string){
    this.searchTerms.next(mot);
  }

  goToDetail(personnage: Personnage){
    const link = ['/personnages', personnage.id];
    this.router.navigate(link);
  }

}
