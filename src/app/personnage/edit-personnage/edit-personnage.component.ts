import { Component, OnInit } from '@angular/core';
import { Personnage } from '../personnage';
import { ActivatedRoute } from '@angular/router';
import { PersonnageService } from '../personnage.service';
import { PersonnageFormComponent } from '../personnage-form/personnage-form.component';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-personnage',
  standalone: true,
  imports: [PersonnageFormComponent, CommonModule,NgIf],
  templateUrl: './edit-personnage.component.html',
  styleUrl: './edit-personnage.component.css'
})
export class EditPersonnageComponent implements OnInit {
  personnage: Personnage|undefined;

  constructor(private route: ActivatedRoute, private personnageService: PersonnageService){
    
  }
  ngOnInit(): void {
    const personnageId: number|null = +this.route.snapshot.paramMap.get('id');
    if(personnageId){
      this.personnageService.getPersonnageParId(personnageId).subscribe(personnage => this.personnage = personnage);
    }
    else{
      this.personnage = undefined;
    }
  }
}
