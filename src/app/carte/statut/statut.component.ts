import { Component, OnInit } from '@angular/core';
import { Statut } from '../statut';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { RouterExtService } from '../router-ext-service.service';
import { carteService } from '../carte.service';
import { STATUT } from '../mock-status-list';
import { AppComponent } from '../../app.component';
import { Carte } from '../carte';
import { LoaderComponent } from '../loader/loader.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-statut',
  standalone: true,
  imports: [LoaderComponent, NgIf],
  templateUrl: './statut.component.html',
  styleUrl: './statut.component.css'
})
export class StatutComponent implements OnInit{

  statut: Statut | undefined;
  carte: Carte | undefined;

  constructor(private route: ActivatedRoute, private router: Router, private carteService: carteService,private appComponent: AppComponent, 
    private authService: AuthService, private routerExtService: RouterExtService){
  
  }

  async ngOnInit(): Promise<void> {
    if(this.carteService.cartes == undefined){
      this.carteService.initCarte(await this.carteService.getCartes())
    }
    const statutId: number|null = +this.route.snapshot.paramMap.get('id');// on récupère l'id
    if(statutId ){ //
      this.statut = STATUT.find((statut) => statut.id == statutId);
      if(this.statut == undefined){
        this.appComponent.goTo404();
      }
      else{
        this.carte = this.carteService.cartes.find((carte) => carte.id == this.statut.idCarteReferent );
        if(this.carte == undefined){
          this.appComponent.goTo404();
        }
      }
    }
    else{
      this.appComponent.goTo404();
    }
    
    
    

  }

  goMenu(){
    this.router.navigate(['/']);
  }

  goTocarte(carte: Carte){
    this.router.navigate(['/cartes', carte.id])
  }


}
