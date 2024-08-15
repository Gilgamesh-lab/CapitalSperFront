import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import {PersonnageCampColorPipe} from './personnage/personnage-camp-color.pipe';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, PersonnageCampColorPipe, RouterOutlet, FormsModule], // pour ngif et ngfor
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true
})



export class AppComponent {



  
}
