import { Component, OnInit } from '@angular/core';
import { Carte } from '../carte';
import {AppComponent} from '../../app.component'
import { CommonModule } from '@angular/common';  
import {carteCampColorPipe} from '../carte-camp-color.pipe';
import { Router } from '@angular/router';
import { carteService } from '../carte.service';
import { SearchcarteComponent } from "../search-carte/search-carte.component";
import { LoaderComponent } from '../loader/loader.component';
import { AuthService } from '../../auth.service';
import { BorderCardDirective } from '../border-card.directive';
import { CARTES } from '../mock-cartes-list';

@Component({
  selector: 'app-liste-carte',
  standalone: true,
  imports: [AppComponent, CommonModule, carteCampColorPipe, SearchcarteComponent, LoaderComponent, BorderCardDirective],
  templateUrl: './liste-carte.component.html',
  styleUrl: './liste-carte.component.css'
})
export class ListecarteComponent implements OnInit {
  ListeDecartes: Carte[];
  

  constructor(private router: Router, private carteService: carteService, private authService: AuthService){

  }

  ngOnInit() : void{
    //this.carteService.getcarteListe().subscribe(listecartes => this.ListeDecartes = listecartes);
    this.ListeDecartes = CARTES;
  }

  goTocarte(carte: Carte){
    this.router.navigate(['/cartes', carte.id])
  }

  goToAdd(){
    this.router.navigate(['/cartes/add'])
  }

  goToRegles(){
    this.router.navigate(['/regles'])
  }


  estConnecter(): boolean{
    return this.authService.isLoggedIn;
  }

}
