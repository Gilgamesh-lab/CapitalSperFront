import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-regles',
  standalone: true,
  imports: [],
  templateUrl: './regles.component.html',
  styleUrl: './regles.component.css'
})
export class ReglesComponent {

  constructor(private router: Router){
  
  }

  goMenu(){
    this.router.navigate(['/']);
  }
}
