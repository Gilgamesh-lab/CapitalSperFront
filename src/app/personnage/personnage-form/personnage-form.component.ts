import { Component, Input, NgModule, OnInit } from '@angular/core';
import { PersonnageService } from '../personnage.service';
import { Personnage } from '../personnage';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonnagePouvoirColorPipe } from '../personnage-pouvoir-color.pipe';

@Component({
  selector: 'app-personnage-form',
  standalone: true,
  imports: [FormsModule, CommonModule, PersonnagePouvoirColorPipe],
  templateUrl: './personnage-form.component.html',
  styleUrls: ['./personnage-form.component.css']
})
export class PersonnageFormComponent implements OnInit {
  @Input() personnage: Personnage;
  typesDePouvoirs: string[];

  constructor(private personnageService: PersonnageService, private router: Router){

  }

  ngOnInit(): void {
    this.typesDePouvoirs = this.personnageService.getPersonnageTypePouvoir();
  }

  aCeTypeDePouvoir(typeDePouvoir: string) : boolean{
    return this.personnage.typesPouvoir.includes(typeDePouvoir);
  }

  aCeCamp(camp: string) : boolean{
    return this.personnage.camps == camp;
  }

  selectTypePouvoir($event: Event, type: string){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.personnage.typesPouvoir.push(type);
    }
    else{
      const index = this.personnage.typesPouvoir.indexOf(type);
      this.personnage.typesPouvoir.splice(index, 1);
    }
  }

  estTypeDePouvoirValide(typeDePouvoir: string): boolean{
    if(this.personnage.typesPouvoir.length == 1 && this.aCeTypeDePouvoir(typeDePouvoir)){// pour pas qu'un personnage se retrouve sans type de pouvoir
      return false;
    }

    /*if(this.personnage.typesPouvoir.length > 2 && !this.aCeTypeDePouvoir(typeDePouvoir)){// pour limiter le nombre max assignable
      return false;
    }*/
    
    return true
  }

  selectCamp($event: Event, type: string){

  }

  onSubmit(){
    console.log('Le formulaire a été envoyé !');
    this.router.navigate(['/personnages', this.personnage.idDeRole]);
    
  }

}
