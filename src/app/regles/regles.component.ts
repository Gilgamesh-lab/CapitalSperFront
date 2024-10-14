import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CARTES } from '../carte/mock-cartes-list';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { carteService } from '../carte/carte.service';

@Component({
  selector: 'app-regles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regles.component.html',
  styleUrl: './regles.component.css'
})
export class ReglesComponent {

  constructor(private router: Router, private auth: AuthService, private carteService: carteService){
  
  }

  async ngOnInit(): Promise<void> {
    if(this.carteService.cartes == undefined){
      this.carteService.initCarte(await this.carteService.getCartes())
    }
    
  }

  goMenu(){
    this.router.navigate(['/']);
  }

  goCamps(id: number){
    this.router.navigate(['/camps', id]);
  }

  goTypePersonnages(id: number){
    this.router.navigate(['/typesDeCartes', id]);
  }

  estBatimentActiver():boolean{
    return this.auth.isLoggedIn || this.carteService.cartes.filter((carte) =>  carte.typeDeCarte.id == 3 && carte.estActiver).length > 0;
  }

  estFonctionActiver():boolean{
    return  this.auth.isLoggedIn || (this.carteService.cartes.filter((carte) => carte.typeDeCarte.id == 2 && carte.estActiver).length > 0);
  }
}
