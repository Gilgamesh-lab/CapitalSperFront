import { Component } from '@angular/core';
import { SearchcarteComponent } from "../carte/search-carte/search-carte.component";
import { Carte } from '../carte/carte';
import { Router } from '@angular/router';
import {carteService} from '../carte/carte.service'
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { Observable, retry } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-capital-sper',
  standalone: true,
  imports: [SearchcarteComponent, CommonModule],
  templateUrl: './capital-sper.component.html',
  styleUrl: './capital-sper.component.css'
})
export class CapitalSperComponent {
  cartesNb: { [id: number] : number; } = {};
  nbPartie: number;
  singleEvents$
  

  constructor(private router: Router, private carteService: carteService, private auth: AuthService){
    this.cartesNb = this.carteService.cartesNb;
    this.carteService.resetCarteCapitalSper();
  }

  async ngOnInit(): Promise<void> {
    (await this.carteService.getCartes()).forEach(carte => this.cartesNb[carte.id] = 0);
    this.carteService.getObjet();
    
  }

  setNbPartie(){
    this.nbPartie = +(<HTMLInputElement>document.getElementById("nbPartie")).value;
    
    if(this.nbPartie > 100){
      (<HTMLInputElement>document.getElementById("nbPartie")).value = "100";
    }
    
    
  }

   getObjet (): void{
    
    //this.singleEvents$.subscribe(event => this.event = event);
    /*let tab: number[];
    this.singleEvents$.subscribe(event => this.event = event);
    this.carteService.getObjet().subscribe(reponse => tab = reponse)*/
    //return this.carteService.getObjet() ;
    }


  goToDetail(carte: Carte){
    const link = ['/cartes', carte.id];
    this.router.navigate(link);
  }

  getCartes(): Carte[]{
    return this.carteService.getCarteCapitalSper();
  }

  incrementer(carte: Carte){
    this.carteService.incrementerNb(carte);
  }

  diminuer(carte: Carte){
    this.carteService.dimunuerNb(carte);
  }


  

  getNb(idCarte: number): number{
    return this.cartesNb[idCarte];
  }

}
