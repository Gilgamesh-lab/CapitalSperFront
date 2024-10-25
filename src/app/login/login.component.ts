import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { carteService } from '../carte/carte.service';
import { CARTES } from '../carte/mock-cartes-list';
import { InMemoryDataService } from '../in-memory-data.service';
  
@Component({
  imports: [CommonModule, FormsModule],
    selector: 'login',
    templateUrl: 'login.component.html',
    standalone: true
})
export class LoginComponent implements OnInit {
    message: string ;
    name: string;
    password: string;
  
    constructor(public authService: AuthService, private router: Router, private carteService: carteService, private bdd: InMemoryDataService) { }

    ngOnInit(): void {
        this.setMessage();
      }
  
    // Informe l'utilisateur sur son authentfication.
    setMessage() {
        this.message = this.authService.isLoggedIn ?
            'Vous êtes connecté.' : 'Vous êtes déconnecté';
    }
  
    // Connecte l'utilisateur auprès du Guard
    login() {
        this.message = 'Tentative de connexion en cours ...';
        this.authService.login(this.name, this.password).subscribe((isLoggedIn: boolean) => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                this.carteService.cartes = CARTES.filter((carte) => carte.estActiver || this.authService.isLoggedIn);
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
                this.router.navigate([redirect]);
            } else {
                this.message = 'Identifiants incorrecte';
                this.password = '';
            }
        });
    }
  
    // Déconnecte l'utilisateur
    logout() {
        this.authService.logout();
        this.carteService.cartes = CARTES.filter((carte) => carte.estActiver || this.authService.isLoggedIn);
        this.setMessage();
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
        this.router.navigate([redirect]);
    }
}