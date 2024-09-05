import { Component, OnInit } from '@angular/core';
import { Carte } from '../carte';
import { ActivatedRoute } from '@angular/router';
import { carteService } from '../carte.service';
import { carteFormComponent } from '../carte-form/carte-form.component';
import { CommonModule, NgIf } from '@angular/common';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-edit-carte',
  standalone: true,
  imports: [carteFormComponent, CommonModule,NgIf,LoaderComponent],
  templateUrl: './edit-carte.component.html',
  styleUrl: './edit-carte.component.css'
})
export class EditcarteComponent implements OnInit {
  carte: Carte|undefined;

  constructor(private route: ActivatedRoute, private carteService: carteService){
    
  }
  ngOnInit(): void {
    const carteId: number|null = +this.route.snapshot.paramMap.get('id');
    if(carteId){
      this.carteService.getcarteParId(carteId).subscribe(carte => this.carte = carte);
    }
    else{
      this.carte = undefined;
    }
  }
}
