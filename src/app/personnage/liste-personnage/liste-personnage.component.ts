import { Component, OnInit } from '@angular/core';
import { Personnage } from '../personnage';
import {AppComponent} from '../../app.component'
import { CommonModule } from '@angular/common';  
import {PersonnageCampColorPipe} from '../personnage-camp-color.pipe';
import { Router } from '@angular/router';
import { PersonnageService } from '../personnage.service';
import { SearchPersonnageComponent } from "../search-personnage/search-personnage.component";
import { LoaderComponent } from '../loader/loader.component';
import { AuthService } from '../../auth.service';
import { BorderCardDirective } from '../border-card.directive';

@Component({
  selector: 'app-liste-personnage',
  standalone: true,
  imports: [AppComponent, CommonModule, PersonnageCampColorPipe, SearchPersonnageComponent, LoaderComponent, BorderCardDirective],
  templateUrl: './liste-personnage.component.html',
  styleUrl: './liste-personnage.component.css'
})
export class ListePersonnageComponent implements OnInit {
  ListeDePersonnages: Personnage[];
  

  constructor(private router: Router, private personnageService: PersonnageService, private authService: AuthService){

  }

  ngOnInit() : void{
    this.personnageService.getPersonnageListe().subscribe(listePersonnages => this.ListeDePersonnages = listePersonnages);
  }

  goToPersonnage(personnage: Personnage){
    this.router.navigate(['/personnages', personnage.id])
  }

  goToAdd(){
    this.router.navigate(['/personnages/add'])
  }

  estConnecter(): boolean{
    return this.authService.isLoggedIn;
  }

}
