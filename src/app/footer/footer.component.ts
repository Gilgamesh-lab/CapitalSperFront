import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { carteService } from '../carte/carte.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private router: Router, private carteService: carteService){
    
  }

  isFooterFixe(){
    return (this.router.url.includes('capital-sper') && !this.carteService.partie  )|| this.router.url.includes('login');
  }


  goPlanDuSite(){
    this.router.navigate(['/plan-du-site']);
    window.top.window.scrollTo(0,0);
  }

}
