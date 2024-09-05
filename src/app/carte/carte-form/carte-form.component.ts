import { Component, Input, OnInit } from '@angular/core';
import { carteService } from '../carte.service';
import { Carte } from '../carte';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { cartePouvoirColorPipe } from '../carte-pouvoir-color.pipe';
import { carteCampColorPipe } from '../carte-camp-color.pipe';
import { LoaderComponent } from '../loader/loader.component';
import { Camp } from '../camp';
import { typesDePouvoirs } from '../typesDePouvoirs';

@Component({
  selector: 'app-carte-form',
  standalone: true,
  imports: [FormsModule, CommonModule, cartePouvoirColorPipe,carteCampColorPipe, LoaderComponent],
  templateUrl: './carte-form.component.html',
  styleUrls: ['./carte-form.component.css']
})
export class carteFormComponent implements OnInit {
  @Input() carte: Carte;
  isAddForm: boolean;

  constructor(private carteService: carteService, private router: Router){

  }

  ngOnInit(): void {
    this.isAddForm = this.router.url.includes('add');
  }

  aCeTypeDePouvoir(typeDePouvoir: typesDePouvoirs) : boolean{
    return this.carte.typesPouvoir.filter((pouvoir) => pouvoir.id == typeDePouvoir.id).length > 0;
  }

  aCeCamp(camp: string) : boolean{
    return this.carte.camps.nom == camp;
  }

  getCamps(): Camp[]{
    return this.carteService.getcarteCamp();
  }

  getTypePouvoir(): typesDePouvoirs[]{
    return this.carteService.getcarteTypePouvoir();
  }

  selectTypePouvoir($event: Event, type: typesDePouvoirs){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;

    if(isChecked){
      this.carte.typesPouvoir.push(type);
    }
    else{
      const index = this.carte.typesPouvoir.indexOf(type);
      this.carte.typesPouvoir.splice(index, 1);
    }
  }

  estTypeDePouvoirValide(typeDePouvoir: typesDePouvoirs): boolean{
    if(this.carte.typesPouvoir.length == 1 && this.aCeTypeDePouvoir(typeDePouvoir)){// pour pas qu'un carte se retrouve sans type de pouvoir
      return false;
    }

    /*if(this.carte.typesPouvoir.length > 2 && !this.aCeTypeDePouvoir(typeDePouvoir)){// pour limiter le nombre max assignable
      return false;
    }*/
    
    return true
  }

  estCampValide(camp: string): boolean{
    /*if(this.carte.camps.length == 1 && this.aCeCamp(camp)){// pour pas qu'un carte se retrouve sans type de pouvoir
      return true;
    }

    if(this.carte.typesPouvoir.length > 2 && !this.aCeTypeDePouvoir(typeDePouvoir)){// pour limiter le nombre max assignable
      return false;
    }*/
    
    return true
  }

  selectCamp($event: Event, camp: Camp){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if(isChecked){
      
      this.carte.camps = camp;
    }
  }

  selectAffichage($event: Event, mode: boolean){
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    if(isChecked){
      this.carte.estActiver = mode;
    }
  }

  onSubmit(){
    if(this.isAddForm){
      this.carteService.ajoutercarte(this.carte)
        .subscribe((carte: Carte) => this.router.navigate(['/cartes', carte.id]))

    }else{
      this.carteService.updatecarte(this.carte)
      .subscribe(() => {
      if(this.carte){
        this.router.navigate(['/cartes', this.carte.id]);
      }});
    }
    
  

  }

}
