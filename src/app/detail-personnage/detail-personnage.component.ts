import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personnages } from '../mock-personnages-list';
import { Personnage } from '../personnage';
import { CommonModule } from '@angular/common';  
import {PersonnageCampColorPipe} from '../personnage-camp-color.pipe';

@Component({
  selector: 'app-detail-personnage',
  standalone: true,
  imports: [CommonModule,PersonnageCampColorPipe],
  templateUrl: './detail-personnage.component.html',
  styleUrl: './detail-personnage.component.css'
})
export class DetailPersonnageComponent implements OnInit{

  listePersonnage:  Personnage[];
  personnage: Personnage|undefined;

  constructor(private route: ActivatedRoute, private router: Router){
  
  }

  ngOnInit(): void {
    this.listePersonnage = Personnages;
    const personnageId: number|null = +this.route.snapshot.paramMap.get('id');// on récupère l'id
    if(personnageId){
      this.personnage = this.listePersonnage.find(personnage => personnage.idDeRole == personnageId)
    }
    

  }

  goMenu(){
    this.router.navigate(['/personnages']);
  }

}
