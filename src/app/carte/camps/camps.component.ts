import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { carteService } from '../carte.service';
import { Camp } from '../camp';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { AppComponent } from '../../app.component';
import { Carte } from '../carte';
import { CARTES } from '../mock-cartes-list';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-camps',
  standalone: true,
  imports: [CommonModule, LoaderComponent, AppComponent],
  templateUrl: './camps.component.html',
  styleUrl: './camps.component.css'
})
export class CampsComponent implements OnInit {
  
  camp: Camp|undefined;

  constructor(private route: ActivatedRoute, private carteService: carteService, private appComponent: AppComponent){

  }

  async ngOnInit(): Promise<void> {
    if(this.carteService.cartes == undefined){
      this.carteService.initCarte(await this.carteService.getCartes());
    }
    const campId: number|null = +this.route.snapshot.paramMap.get('id');// on récupère l'id
    if(campId){
      this.camp = this.carteService.getcarteCamp()[campId - 1];
      if(this.camp == undefined || (this.carteService.cartes.filter((carte) =>carte.camps != null && carte.camps.id == campId )).length == 0){
        this.appComponent.goTo404();
      }
    }
    else{
      this.appComponent.goTo404();
    }
    
  }

  public getcartesQuiACeCamp(camp: Camp): Carte[]{
    return this.carteService.cartes.filter((carte) => carte.camps != null && carte.camps.id == camp.id );
  }

  public goToPrevious(): void {
    this.appComponent.goToPrevious();

  }

  goTocarte(carte: Carte){
    this.appComponent.goTocarte(carte);
  }

  public goMenu(): void {
    this.appComponent.goMenu();

  }
}
