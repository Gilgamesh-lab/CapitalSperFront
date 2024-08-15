import { Component, OnInit } from '@angular/core';
import { Personnage } from '../personnage';
import {AppComponent} from '../../app.component'
import { CommonModule } from '@angular/common';  
import {PersonnageCampColorPipe} from '../personnage-camp-color.pipe';
import { Router } from '@angular/router';
import { PersonnageService } from '../personnage.service';

@Component({
  selector: 'app-liste-personnage',
  standalone: true,
  imports: [AppComponent, CommonModule,PersonnageCampColorPipe],
  templateUrl: './liste-personnage.component.html',
  styleUrl: './liste-personnage.component.css'
})
export class ListePersonnageComponent implements OnInit {
  ListeDePersonnages: Personnage[];

  constructor(private router: Router, private personnageService: PersonnageService){

  }

  ngOnInit() : void{
    this.ListeDePersonnages =  this.personnageService.getPersonnageListe();
  }

  goToPersonnage(personnage: Personnage){
    this.router.navigate(['/personnages', personnage.idDeRole])
  }

}
