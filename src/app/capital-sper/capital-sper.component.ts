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
import { CARTES } from '../carte/mock-cartes-list';
import { LoaderComponent } from '../carte/loader/loader.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-capital-sper',
  standalone: true,
  imports: [SearchcarteComponent, CommonModule, LoaderComponent],
  templateUrl: './capital-sper.component.html',
  styleUrl: './capital-sper.component.css'
})
export class CapitalSperComponent {
  cartesNb: { [id: number] : number; } = {};
  nbPartie: number;
  singleEvents$
  lancer: boolean;
  log: any = undefined;
  data: any;
  

  constructor(private router: Router, private carteService: carteService, private auth: AuthService, private app:AppComponent){
    this.cartesNb = this.carteService.cartesNb;
    this.carteService.resetCarteCapitalSper();
  }

  async ngOnInit(): Promise<void> {
    if(this.carteService.cartes == undefined){
      this.carteService.initCarte(await this.carteService.getCartes())
    }
    (await this.carteService.getCartes()).forEach(carte => this.cartesNb[carte.id] = 0);
    this.carteService.getObjet();
    this.lancer = false;
    
  }

  setNbPartie(){
    this.nbPartie = +(<HTMLInputElement>document.getElementById("nbPartie")).value;
    
    if(this.nbPartie > 100){
      (<HTMLInputElement>document.getElementById("nbPartie")).value = "100";
    }
    
    
  }

  getPartie(){
    return this.carteService.partie;
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

  async simulation(){
    let carteCapitalSper: Carte[] = this.carteService.getCarteCapitalSper();
    let cartesNb: { [id: number] : number; } = await this.carteService.getCartesNb();

    let nbSimpleVillageois: number = cartesNb[1];
    let nbLoupGarous: number = cartesNb[2];
    let aUnMaire: boolean = carteCapitalSper.filter(carte => carte.id == 13).length != 0;
    let nbPartie: number  = +(<HTMLInputElement>document.getElementById("nbPartie")).value;
    let listeId: number[] = carteCapitalSper.map(carte => carte.idOrdreAppel).filter(id => id != 98 && id != 15 && id != 21);

    this.data = {
      nbSimpleVillageois : nbSimpleVillageois,
      nbLoupGarou : nbLoupGarous,
      aUnMaire : aUnMaire,
      nbPartie : nbPartie,
      listeIdRolePersonnageSpecial : listeId
      
    }

    this.carteService.createPost(this.data)
    this.lancer = true;

  

  }

  public goMenu(): void {
    this.app.goMenu();

  }

  public retour(){
    this.lancer = false;
    this.carteService.partie = null;
    this.router.navigate(['/capital-sper'])
  }

  public relancer(){
    this.carteService.createPost(this.data);
    window.top.window.scrollTo(0,0);
  }


  

  getNb(idCarte: number): number{
    return this.cartesNb[idCarte];
  }

}
