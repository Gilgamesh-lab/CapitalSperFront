import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CARTES } from '../carte/mock-cartes-list';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-regles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './regles.component.html',
  styleUrl: './regles.component.css'
})
export class ReglesComponent {

  constructor(private router: Router, private auth: AuthService){
  
  }

  goMenu(){
    this.router.navigate(['/']);
  }

  estBatimentActiver():boolean{
    return this.auth.isLoggedIn || CARTES.filter((carte) =>  carte.typeDeCarte.id == 3 && carte.estActiver).length > 0;
  }

  estFonctionActiver():boolean{
    return  this.auth.isLoggedIn || (CARTES.filter((carte) => carte.typeDeCarte.id == 2 && carte.estActiver).length > 0);
  }
}
