import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import {carteCampColorPipe} from './carte/carte-camp-color.pipe';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { carteFormComponent } from './carte/carte-form/carte-form.component';
import { AuthService } from './auth.service';
import { RouterExtService } from './carte/router-ext-service.service';
import { Carte } from './carte/carte';

@Component({
  imports: [CommonModule, carteCampColorPipe, RouterOutlet, FormsModule, carteFormComponent], // pour ngif et ngfor
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true
})



export class AppComponent {

  constructor(private router: Router, private auth: AuthService, private routerExtService: RouterExtService){
    
  }

  goMenu(){
    this.router.navigate(['/']);
  }

  goToTableauDeBord(){
    this.router.navigate(['/tableau-de-bord']);
  }

  goTo404(){
    this.router.navigate(['/pageNotFound']);
  }

  estConnecter(): boolean{
    return this.auth.isLoggedIn;
  }

  goPlanDuSite(){
    this.router.navigate(['/plan-du-site']);
    window.top.window.scrollTo(0,0);
  }

  goMenuLogin(){
    this.auth.redirectUrl = this.router.url;
    this.router.navigate(['/login']);
  }

  goTocarte(carte: Carte){
    this.router.navigate(['/cartes', carte.id])
  }

  public goToPrevious(): void {
    let previous = this.routerExtService.getPreviousUrl();
    if(previous && previous != this.routerExtService.getCurrentUrl() ){
      this.router.navigateByUrl(previous);
    }else{
      this.router.navigateByUrl('/');
    }

  }

  
}
