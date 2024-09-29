import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import { Carte } from '../carte/carte';
import { CARTES } from '../carte/mock-cartes-list';
import { carteService } from '../carte/carte.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tableau-de-bord',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tableau-de-bord.component.html',
  styleUrl: './tableau-de-bord.component.css'
})
export class TableauDeBordComponent {

  constructor(private authService: AuthService, private router: Router, private carteService: carteService) { }


  getCartes() :Carte[]{
    return CARTES;
  }


  affichageGeneral($event: Event) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    CARTES.forEach(
      carte => carte.estActiver = isChecked
    );
  }

  

  selectAffichage($event: Event, carte: Carte){
      const isChecked: boolean = ($event.target as HTMLInputElement).checked;
      carte.estActiver = !carte.estActiver;
      console.log(carte.estActiver);
      //CARTES[carte.id -1] = carte;
      this.carteService.updatecarte(carte);
    }

  goMenu(){
    this.router.navigate(['/']);
  }

}