import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carte } from '../carte';
import { CommonModule } from '@angular/common';  
import {carteCampColorPipe} from '../carte-camp-color.pipe';
import { cartePouvoirColorPipe } from '../carte-pouvoir-color.pipe';
import { carteService } from '../carte.service';
import { LoaderComponent } from '../loader/loader.component';
import { AuthService } from '../../auth.service';
import { RouterExtService } from '../router-ext-service.service';
import { Camp } from '../camp';
import { typesDePouvoirs } from '../typesDePouvoirs';
import { AppComponent } from '../../app.component';
import { typesDeCartes } from '../typesDeCartes';
import { CarteTypeColorPipe } from '../carte-type-color.pipe';
import { STATUT } from '../mock-status-list';
import { Statut } from '../statut';


@Component({
  selector: 'app-detail-carte',
  standalone: true,
  imports: [CommonModule,carteCampColorPipe, cartePouvoirColorPipe, LoaderComponent, CarteTypeColorPipe],
  templateUrl: './detail-carte.component.html',
  styleUrl: './detail-carte.component.css'
})
export class DetailcarteComponent implements OnInit{

  carte: Carte|undefined;

  constructor(private route: ActivatedRoute, private router: Router, private carteService: carteService, private appComponent: AppComponent,
    private authService: AuthService, private routerExtService: RouterExtService){
  
  }

  async ngOnInit(): Promise<void> {
    if(this.carteService.cartes == undefined){
      this.carteService.initCarte(await this.carteService.getCartes())
    }
    const carteId: number|null = +this.route.snapshot.paramMap.get('id');// on récupère l'id
    if(carteId){
      this.carte = this.carteService.cartes.find((carte) => carte.id == carteId && (carte.estActiver || this.authService.isLoggedIn));
      if(this.carte == undefined){
        this.appComponent.goTo404();
      }
    }
    else{
      this.appComponent.goTo404();
    }
    
    
    

  }

  ifStatut(idCarte: number) {
    if(STATUT.find((statut) => statut.idCarteReferent == idCarte )){
      return true;
    }
    else{
      return false;
    }
  }

  getStatut(idCarte: number): Statut{
    return STATUT.find((statut) => statut.idCarteReferent == idCarte );
  }

  deletecarte(carte: Carte){
    this.carteService.supprimercarteParId(carte.id)
    .subscribe(() => this.goMenu());
  }

  goMenu(){
    this.router.navigate(['/']);
  }

  

  

  goToStatut(idStatut: number){
    this.router.navigate(['/statut', idStatut]);
  }

  goToCamp(camp: Camp){
    this.router.navigate(['/camps', camp.id]);
  }

  goToPouvoir(pouvoir: typesDePouvoirs){
    this.router.navigate(['/typesDePouvoirs', pouvoir.id]);
  }

  goToType(type: typesDeCartes){
    this.router.navigate(['/typesDeCartes', type.id]);
  }

  goToEdit(carte: Carte){
    this.router.navigate(['/edit/carte', carte.id]);
  }

  estConnecter(): boolean{
    return this.authService.isLoggedIn;
  }

  //Strange name, but it makes sense. Behind the scenes, we are pushing to history the previous url
  public goToPrevious(): void {
    let previous = this.routerExtService.getPreviousUrl();
    if(previous && previous != this.routerExtService.getCurrentUrl() ){
      this.router.navigateByUrl(previous);
    }else{
      this.router.navigateByUrl('/');
    }

  }


}
