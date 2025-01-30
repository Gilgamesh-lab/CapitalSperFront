import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { RouterExtService } from '../carte/router-ext-service.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private router: Router, private auth: AuthService, private routerExtService: RouterExtService){
    
  }

  goToTableauDeBord(){
    this.router.navigate(['/tableau-de-bord']);
  }

  goMenu(){
    this.router.navigate(['/']);
  }

  goToCapitalSper(){
    this.router.navigate(['/capital-sper']);
  }

  goMenuLogin(){
    this.auth.redirectUrl = this.router.url;
    this.router.navigate(['/login']);
  }

  estConnecter(): boolean{
    return this.auth.isLoggedIn;
  }


}
