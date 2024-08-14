import { Component, OnInit } from '@angular/core';
import {Personnages} from './mock-personnages-list'
import { Personnage } from './personnage';
import { CommonModule } from '@angular/common';  
import {PersonnageCampColorPipe} from './personnage-camp-color.pipe';
//import { RouterOutlet } from '@angular/router';

@Component({
  imports: [CommonModule, PersonnageCampColorPipe], // pour ngif et ngfor
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true
})



export class AppComponent implements OnInit{
  title: string = 'Capital-Sper';
  ListeDePersonnages: Personnage[] = Personnages;
  PersonnageSelectionner: Personnage|undefined;

  constructor(){

  }

  ngOnInit(): void {
    console.table(this.ListeDePersonnages);
  }

  selectPersonnage(personnageId: Personnage){
    const id = +personnageId.idDeRole;
    const personnage: Personnage|undefined = this.ListeDePersonnages.find(personnage => personnage.idDeRole == +personnageId.idDeRole )
    if(personnage){
      console.log(`Vous avez demandé le personnage ${personnage.name}`);
      this.PersonnageSelectionner = personnage;
    } else{
      console.log(`Vous avez demandé un personnage qui n'existe pas`);
      this.PersonnageSelectionner = personnage;
    }
    
  }
}
