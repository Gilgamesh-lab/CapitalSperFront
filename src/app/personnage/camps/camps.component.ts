import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonnageService } from '../personnage.service';
import { Camp } from '../camp';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-camps',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './camps.component.html',
  styleUrl: './camps.component.css'
})
export class CampsComponent implements OnInit {
  
  camp: Camp|undefined;

  constructor(private route: ActivatedRoute, private personnageService: PersonnageService){

  }

  ngOnInit(): void {
    const campId: number|null = +this.route.snapshot.paramMap.get('id');// on récupère l'id
    if(campId){
      this.camp = this.personnageService.getPersonnageCamp()[campId - 1];
    }
  }
}
