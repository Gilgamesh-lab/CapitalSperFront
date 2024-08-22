import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personnage } from '../personnage';
import { CommonModule } from '@angular/common';  
import {PersonnageCampColorPipe} from '../personnage-camp-color.pipe';
import { PersonnagePouvoirColorPipe } from '../personnage-pouvoir-color.pipe';
import { PersonnageService } from '../personnage.service';
import { LoaderComponent } from '../loader/loader.component';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-detail-personnage',
  standalone: true,
  imports: [CommonModule,PersonnageCampColorPipe, PersonnagePouvoirColorPipe, LoaderComponent],
  templateUrl: './detail-personnage.component.html',
  styleUrl: './detail-personnage.component.css'
})
export class DetailPersonnageComponent implements OnInit{

  listePersonnage:  Personnage[];
  personnage: Personnage|undefined;

  constructor(private route: ActivatedRoute, private router: Router, private personnageService: PersonnageService, private authService: AuthService){
  
  }

  ngOnInit(): void {
    const personnageId: number|null = +this.route.snapshot.paramMap.get('id');// on récupère l'id
    console.log(personnageId);
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

  goToEdit(personnage: Personnage){
    this.router.navigate(['/edit/personnage', personnage.id]);
  }

  estConnecter(): boolean{
    return this.authService.isLoggedIn;
  }


}
