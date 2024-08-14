import { Component } from '@angular/core';
import { Personnage } from '../personnage';
import { Personnages } from '../mock-personnages-list';
import {AppComponent} from '../app.component'
import { CommonModule } from '@angular/common';  
import {PersonnageCampColorPipe} from '../personnage-camp-color.pipe';

@Component({
  selector: 'app-liste-personnage',
  standalone: true,
  imports: [AppComponent, CommonModule,PersonnageCampColorPipe],
  templateUrl: './liste-personnage.component.html',
  styleUrl: './liste-personnage.component.css'
})
export class ListePersonnageComponent {
  ListeDePersonnages: Personnage[] = Personnages;

}
