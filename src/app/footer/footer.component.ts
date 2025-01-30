import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private router: Router){
    
  }

  isFooterFixe(){
    return this.router.url.includes('capital-sper') || this.router.url.includes('login');
  }


  goPlanDuSite(){
    this.router.navigate(['/plan-du-site']);
    window.top.window.scrollTo(0,0);
  }

}
