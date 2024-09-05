import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import {PersonnageCampColorPipe} from './personnage/personnage-camp-color.pipe';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PersonnageFormComponent } from './personnage/personnage-form/personnage-form.component';
import { AuthService } from './auth.service';
import { RouterExtService } from './personnage/router-ext-service.service';
import { Personnage } from './personnage/personnage';

@Component({
  imports: [CommonModule, PersonnageCampColorPipe, RouterOutlet, FormsModule, PersonnageFormComponent], // pour ngif et ngfor
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

  goTo404(){
    this.router.navigate(['/pageNotFound']);
  }

  goMenuLogin(){
    this.auth.redirectUrl = this.router.url;
    this.router.navigate(['/login']);
  }

  goToPersonnage(personnage: Personnage){
    this.router.navigate(['/personnages', personnage.id])
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
