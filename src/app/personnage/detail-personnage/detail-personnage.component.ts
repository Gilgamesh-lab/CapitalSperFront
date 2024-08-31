import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personnage } from '../personnage';
import { CommonModule } from '@angular/common';  
import {PersonnageCampColorPipe} from '../personnage-camp-color.pipe';
import { PersonnagePouvoirColorPipe } from '../personnage-pouvoir-color.pipe';
import { PersonnageService } from '../personnage.service';
import { LoaderComponent } from '../loader/loader.component';
import { AuthService } from '../../auth.service';
import { RouterExtService } from '../router-ext-service.service';
import { Camp } from '../camp';
import { typesDePouvoirs } from '../typesDePouvoirs';


@Component({
  selector: 'app-detail-personnage',
  standalone: true,
  imports: [CommonModule,PersonnageCampColorPipe, PersonnagePouvoirColorPipe, LoaderComponent],
  templateUrl: './detail-personnage.component.html',
  styleUrl: './detail-personnage.component.css'
})
export class DetailPersonnageComponent implements OnInit{

  personnage: Personnage|undefined;

  constructor(private route: ActivatedRoute, private router: Router, private personnageService: PersonnageService, private authService: AuthService, private routerExtService: RouterExtService){
  
  }

  ngOnInit(): void {
    const personnageId: number|null = +this.route.snapshot.paramMap.get('id');// on récupère l'id
    if(personnageId){
      this.personnageService.getPersonnageParId(personnageId).subscribe(personnage => this.personnage = personnage);
      //.subscribe(personnage => this.personnage = personnage)
    }
    

  }

  deletePersonnage(personnage: Personnage){
    this.personnageService.supprimerPersonnageParId(personnage.id)
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

  goToEdit(personnage: Personnage){
    this.router.navigate(['/edit/personnage', personnage.id]);
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
