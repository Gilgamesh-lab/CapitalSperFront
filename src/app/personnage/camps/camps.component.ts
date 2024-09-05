import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonnageService } from '../personnage.service';
import { Camp } from '../camp';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';
import { AppComponent } from '../../app.component';
import { Personnage } from '../personnage';
import { PERSONNAGES } from '../mock-personnages-list';

@Component({
  selector: 'app-camps',
  standalone: true,
  imports: [CommonModule, LoaderComponent, AppComponent],
  templateUrl: './camps.component.html',
  styleUrl: './camps.component.css'
})
export class CampsComponent implements OnInit {
  
  camp: Camp|undefined;

  constructor(private route: ActivatedRoute, private personnageService: PersonnageService, private appComponent: AppComponent){

  }

  ngOnInit(): void {
    const campId: number|null = +this.route.snapshot.paramMap.get('id');// on récupère l'id
    if(campId){
      this.camp = this.personnageService.getPersonnageCamp()[campId - 1];
      if(this.camp == undefined){
        this.appComponent.goTo404();
      }
    }
    else{
      this.appComponent.goTo404();
    }
  }

  public getPersonnagesQuiACeCamp(camp: Camp): Personnage[]{
    return PERSONNAGES.filter((personnage) => personnage.camps.id == camp.id && personnage.estActiver);
  }

  public goToPrevious(): void {
    this.appComponent.goToPrevious();

  }

  goToPersonnage(personnage: Personnage){
    this.appComponent.goToPersonnage(personnage);
  }

  public goMenu(): void {
    this.appComponent.goMenu();

  }
}
