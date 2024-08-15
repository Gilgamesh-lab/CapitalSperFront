import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personnage } from '../personnage';
import { CommonModule } from '@angular/common';  
import {PersonnageCampColorPipe} from '../personnage-camp-color.pipe';
import { PersonnagePouvoirColorPipe } from '../personnage-pouvoir-color.pipe';
import { PersonnageService } from '../personnage.service';

@Component({
  selector: 'app-detail-personnage',
  standalone: true,
  imports: [CommonModule,PersonnageCampColorPipe, PersonnagePouvoirColorPipe],
  templateUrl: './detail-personnage.component.html',
  styleUrl: './detail-personnage.component.css'
})
export class DetailPersonnageComponent implements OnInit{

  listePersonnage:  Personnage[];
  personnage: Personnage|undefined;

  constructor(private route: ActivatedRoute, private router: Router, private personnageService: PersonnageService){
  
  }

  ngOnInit(): void {
    const personnageId: number|null = +this.route.snapshot.paramMap.get('id');// on récupère l'id

    if(personnageId){
      this.personnage = this.personnageService.getPersonnageParId(personnageId);
    }
    

  }

  goMenu(){
    this.router.navigate(['/personnages']);
  }

}
