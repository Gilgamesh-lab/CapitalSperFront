import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { carteService } from '../carte/carte.service';
import { CARTES } from '../carte/mock-cartes-list';
  
@Component({
  imports: [CommonModule, FormsModule],
    selector: 'login',
    templateUrl: 'login.component.html',
    standalone: true
})
export class LoginComponent implements OnInit {
    message: string = 'Vous êtes déconnecté.';
    name: string;
    password: string;
    auth: AuthService;
  
    constructor(private authService: AuthService, private router: Router, private carteService: carteService) { }

    ngOnInit(): void {
        this.auth = this.authService;
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
                this.carteService.cartes = CARTES.filter((carte) => carte.estActiver || this.auth.isLoggedIn);
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
                this.router.navigate([redirect]);
            } else {
                this.password = '';
            }
        });
    }
  
    // Déconnecte l'utilisateur
    logout() {
        this.authService.logout();
        this.setMessage();
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
        this.router.navigate([redirect]);
    }
}