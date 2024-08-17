import { Component, OnInit } from '@angular/core';
import { PersonnageFormComponent } from "../personnage-form/personnage-form.component";
import { Personnage } from '../personnage';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-add-personnage',
  standalone: true,
  imports: [PersonnageFormComponent, CommonModule,NgIf],
  templateUrl: './add-personnage.component.html',
  styleUrl: './add-personnage.component.css'
})
export class AddPersonnageComponent implements OnInit {
  
  personnage: Personnage;

  ngOnInit() {
    this.personnage = new Personnage();
    this.test(this.personnage)
  }

  test(objet: Personnage){
    console.log(objet);
  }

  getPerso(): Personnage{
    return this.personnage;
  }
}
