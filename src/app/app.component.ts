import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import {PersonnageCampColorPipe} from './personnage/personnage-camp-color.pipe';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PersonnageFormComponent } from './personnage/personnage-form/personnage-form.component';

@Component({
  imports: [CommonModule, PersonnageCampColorPipe, RouterOutlet, FormsModule, PersonnageFormComponent,], // pour ngif et ngfor
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true
})



export class AppComponent {

  constructor(private router: Router){
    
  }

  goMenu(){
    this.router.navigate(['/personnages']);
  }

  
}
