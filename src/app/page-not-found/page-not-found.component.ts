import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-404',
  standalone: true,
  imports: [],
  templateUrl: 'page-not-found.component.html'
})


export class PageNotFoundComponent { 

  constructor(private router: Router){
  
  }
  goMenu(){
    this.router.navigate(['/']);
  }
}


