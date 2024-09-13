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
import { CARTES } from '../mock-cartes-list';


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

  ngOnInit(): void {
    const carteId: number|null = +this.route.snapshot.paramMap.get('id');// on récupère l'id
    if(carteId){
      //this.carteService.getcarteParId(carteId).subscribe((carte) =>{
        //this.carte = carte;
      this.carte = CARTES.find((carte) => carte.id == carteId);
      if(this.carte == undefined){
        this.appComponent.goTo404();
      }
      ;
      
    }
    else{
      this.appComponent.goTo404();
    }
    

  }

  deletecarte(carte: Carte){
    this.carteService.supprimercarteParId(carte.id)
    .subscribe(() => this.goMenu());
  }

  goMenu(){
    this.router.navigate(['/']);
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
