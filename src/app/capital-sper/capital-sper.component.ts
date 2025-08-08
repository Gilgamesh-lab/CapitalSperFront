import { Component } from '@angular/core';
import { SearchcarteComponent } from "../carte/search-carte/search-carte.component";
import { Carte } from '../carte/carte';
import { Router } from '@angular/router';
import {carteService} from '../carte/carte.service'
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
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
  nbPartie: number ;
  lancer: boolean;
  log: any = undefined;
  data: any;
  tab: string;
  messageDonneeIncorrecte: string;
  modeAmbiance: boolean = false;
  

  constructor(private router: Router, private carteService: carteService, private auth: AuthService, private app:AppComponent){
    this.cartesNb = this.carteService.cartesNb;
    this.carteService.resetCarteCapitalSper();
  }

  async ngOnInit(): Promise<void> {
    if(this.carteService.cartes == undefined){
      this.carteService.initCarte(await this.carteService.getCartes())
    }
    (await this.carteService.getCartes()).forEach(carte => this.cartesNb[carte.id] = 0);
    if(this.carteService.tab == undefined){
      this.carteService.getObjet();
    }
    
    this.lancer = false;
    this.carteService.partie = null;
    this.carteService.erreur = false;
    
  }

  setNbPartie(){
    this.nbPartie = +(<HTMLInputElement>document.getElementById("nbPartie")).value;
    
    
  }

  getNbpartie(): number{
    if(this.nbPartie){
      return this.nbPartie;
    }
    else{
      return undefined;
    }
  }

  getModeAmbiance(): boolean{
    if(this.modeAmbiance){
      return this.modeAmbiance;
    }
    else{
      return false;
    }
  }

  getCartService(){
    return this.carteService;
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

  selectModeAmbiance(): void{
      this.modeAmbiance = !this.modeAmbiance;
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

   simulation(){
    let carteCapitalSper: Carte[] = this.carteService.getCarteCapitalSper();

    let aUnMaire: boolean = carteCapitalSper.filter(carte => carte.id == 13).length != 0;
    let nbPartie: number  = +(<HTMLInputElement>document.getElementById("nbPartie")).value;
    let listeId: number[] = carteCapitalSper.map(carte => carte.idOrdreAppel).filter(id => id != 98 && id != 15 && id != 21);

    this.data = {
      nbSimpleVillageois : this.cartesNb[1],
      nbLoupGarou : this.cartesNb[2],
      aUnMaire : aUnMaire,
      nbPartie : nbPartie,
      listeIdRolePersonnageSpecial : listeId,
      modeAmbiance : this.modeAmbiance
      
    }
    this.lancer = true;
    this.getCartService().partie = undefined;
    this.carteService.createPost(this.data)
    

  

  }

  public goMenu(): void {
    this.app.goMenu();

  }

  goTocarte(carte: Carte){
    this.router.navigate(['/cartes', carte.id]);
    window.top.window.scrollTo(0,0);
  }

  public checkData(): void{

    if(!this.lancer && this.getCartService().tab){
      let listeId: number[] = this.carteService.getCarteCapitalSper().map(carte => carte.idOrdreAppel).filter(id => id != 98 && id != 15 && id != 21);

      if(!(<HTMLInputElement>document.getElementById("nbPartie")).value){
        this.messageDonneeIncorrecte = "Le nombre de partie doit être définit";
      }

      else if(+(<HTMLInputElement>document.getElementById("nbPartie")).value > 100 || +(<HTMLInputElement>document.getElementById("nbPartie")).value <= 0 ){
        this.messageDonneeIncorrecte = "Le nombre de partie doit être un nombre entre 1 et 100";
      }
      
      
      else if(this.cartesNb[1] + this.cartesNb[2] + listeId.length < 3){
        this.messageDonneeIncorrecte = "La partie doit être composé d'au moins 3 personnages";
        }

      else if(this.cartesNb[1] + this.cartesNb[2] + listeId.length > 25){
        this.messageDonneeIncorrecte = "La partie peut-être composé au maximun de 25 personnages";
      }
      
      else if(this.carteService.getCarteCapitalSper().filter(carte => carte.camps != null &&  carte.camps[0].id != this.carteService.getCarteCapitalSper()[0].camps[0].id).length == 0 ){
        this.messageDonneeIncorrecte = "La partie doit être composé d'au moins 1 personnage du camps des villageois et 1 personnage du camps des loups-garous";
      }

      else{
        this.simulation();
        this.messageDonneeIncorrecte = undefined;
      }
    }

    

    
    
      
  }

  public retour(){
    this.lancer = false;
    this.carteService.partie = null;
    this.router.navigate(['/capital-sper'])
  }

  public relancer(){
    this.lancer = true;
    this.getCartService().partie = undefined;
    this.carteService.createPost(this.data);
    window.top.window.scrollTo(0,0);
  }


  

  getNb(idCarte: number): number{
    return this.cartesNb[idCarte];
  }

}
