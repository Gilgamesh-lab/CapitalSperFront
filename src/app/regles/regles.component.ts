import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CARTES } from '../carte/mock-cartes-list';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { carteService } from '../carte/carte.service';
import { LoaderComponent } from '../carte/loader/loader.component';
import { Carte } from '../carte/carte';
import { CAMPS } from '../carte/mock-camps-list';

@Component({
  selector: 'app-regles',
  standalone: true,
  imports: [CommonModule, LoaderComponent],
  templateUrl: './regles.component.html',
  styleUrl: './regles.component.css'
})
export class ReglesComponent {

  constructor(private router: Router, private auth: AuthService, public carteService: carteService){
  
  }

  async ngOnInit(): Promise<void> {
    if(this.carteService.cartes == undefined){
      this.carteService.initCarte(await this.carteService.getCartes())
    }
    
  }

  goMenu(){
    this.router.navigate(['/']);
  }

  getCamps(idCamps){
    return CAMPS.find((camp) => camp.id == idCamps);
  }

  estActiver(id: number): boolean{
    return (CARTES.find((carte) => carte.id == id).estActiver || this.auth.isLoggedIn);
  }

  campActiver(idCamps: number): boolean{
    return this.carteService.cartes.filter((carte) => carte.camps != null && carte.camps.id == idCamps ).length != 0;
  }

  getCarteNom(id: number): String{
    return this.carteService.cartes.find((carte) => carte.id == id).nom;
  }

  getCarte(id: number): Carte{
    return this.carteService.cartes.find((carte) => carte.id == id);
  }

  goCamps(id: number){
    this.router.navigate(['/camps', id]);
  }

  goCartes(id: number){
    this.router.navigate(['/cartes', id]);
  }

  goTypePersonnages(id: number){
    this.router.navigate(['/typesDeCartes', id]);
  }

  estBatimentActiver():boolean{
    return this.auth.isLoggedIn || this.carteService.cartes.filter((carte) =>  carte.typeDeCarte.id == 3 ).length > 0;
  }

  estFonctionActiver():boolean{
    return  this.auth.isLoggedIn || (this.carteService.cartes.filter((carte) => carte.typeDeCarte.id == 2 ).length > 0);
  }
}
