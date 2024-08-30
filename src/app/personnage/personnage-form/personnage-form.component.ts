import { Component, Input, OnInit } from '@angular/core';
import { PersonnageService } from '../personnage.service';
import { Personnage } from '../personnage';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PersonnagePouvoirColorPipe } from '../personnage-pouvoir-color.pipe';
import { PersonnageCampColorPipe } from '../personnage-camp-color.pipe';
import { LoaderComponent } from '../loader/loader.component';
import { Camp } from '../camp';
import { typesDePouvoirs } from '../typesDePouvoirs';

@Component({
  selector: 'app-personnage-form',
  standalone: true,
  imports: [FormsModule, CommonModule, PersonnagePouvoirColorPipe,PersonnageCampColorPipe, LoaderComponent],
  templateUrl: './personnage-form.component.html',
  styleUrls: ['./personnage-form.component.css']
})
export class PersonnageFormComponent implements OnInit {
  @Input() personnage: Personnage;
  typesDePouvoirs: typesDePouvoirs[];
  isAddForm: boolean;

  constructor(private personnageService: PersonnageService, private router: Router){

  }

  ngOnInit(): void {
    this.typesDePouvoirs = this.personnageService.getPersonnageTypePouvoir();
    this.isAddForm = this.router.url.includes('add');
  }

  aCeTypeDePouvoir(typeDePouvoir: typesDePouvoirs) : boolean{
    return this.personnage.typesPouvoir.includes(typeDePouvoir);
  }

  aCeCamp(camp: string) : boolean{
    return this.personnage.camps.nom == camp;
  }

  getCamps(): Camp[]{
    return this.personnageService.getPersonnageCamp();
  }

  getTypePouvoir(): typesDePouvoirs[]{
    return this.personnageService.getPersonnageTypePouvoir();
  }

  selectTypePouvoir($event: Event, type: typesDePouvoirs){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.personnage.typesPouvoir.push(type);
    }
    else{
      const index = this.personnage.typesPouvoir.indexOf(type);
      this.personnage.typesPouvoir.splice(index, 1);
    }
  }

  estTypeDePouvoirValide(typeDePouvoir: typesDePouvoirs): boolean{
    if(this.personnage.typesPouvoir.length == 1 && this.aCeTypeDePouvoir(typeDePouvoir)){// pour pas qu'un personnage se retrouve sans type de pouvoir
      return false;
    }

    /*if(this.personnage.typesPouvoir.length > 2 && !this.aCeTypeDePouvoir(typeDePouvoir)){// pour limiter le nombre max assignable
      return false;
    }*/
    
    return true
  }

  estCampValide(camp: string): boolean{
    /*if(this.personnage.camps.length == 1 && this.aCeCamp(camp)){// pour pas qu'un personnage se retrouve sans type de pouvoir
      return true;
    }

    if(this.personnage.typesPouvoir.length > 2 && !this.aCeTypeDePouvoir(typeDePouvoir)){// pour limiter le nombre max assignable
      return false;
    }*/
    
    return true
  }

  selectCamp($event: Event, camp: Camp){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if(isChecked){
      
      this.personnage.camps = camp;
    }
  }

  selectAffichage($event: Event, mode: boolean){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if(isChecked){
      this.personnage.estActiver = mode;
    }
  }

  onSubmit(){
    if(this.isAddForm){
      this.personnageService.ajouterPersonnage(this.personnage)
        .subscribe((personnage: Personnage) => this.router.navigate(['/personnages', personnage.id]))

    }else{
      this.personnageService.updatePersonnage(this.personnage)
      .subscribe(() => {
      if(this.personnage){
        this.router.navigate(['/personnages', this.personnage.id]);
      }});
    }
    
  

  }

}
