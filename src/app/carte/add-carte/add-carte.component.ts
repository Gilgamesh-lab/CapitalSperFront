import { Component, OnInit } from '@angular/core';
import { carteFormComponent } from "../carte-form/carte-form.component";
import { Carte } from '../carte';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-add-carte',
  standalone: true,
  imports: [carteFormComponent, CommonModule,NgIf],
  templateUrl: './add-carte.component.html',
  styleUrl: './add-carte.component.css'
})
export class AddcarteComponent implements OnInit {
  
  carte: Carte;

  ngOnInit() {
    this.carte = new Carte();
  }

  getPerso(): Carte{
    return this.carte;
  }
}
