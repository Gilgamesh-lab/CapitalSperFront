import { Component } from '@angular/core';
import { Personnage } from '../personnage';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-search-personnage',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './search-personnage.component.html',
  styleUrl: './search-personnage.component.css'
})
export class SearchPersonnageComponent {

  searchTerms = new Subject<string>();// flux de données dans le temps de l'utilisateur lettre après lettre(= historique champs de recherche)
  personnages$: Observable<Personnage[]>;

  constructor(private router: Router){
    
  }


  search(mot: string){
    this.searchTerms.next(mot);
  }

  goToDetail(personnage: Personnage){
    const link = ['/personnages', personnage.id];
    this.router.navigate(link);
  }

}
