import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule  } from '@angular/common';
import { FormsModule } from '@angular/forms';
  
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
  
    constructor(private authService: AuthService, private router: Router) { }

    ngOnInit(): void {
        this.auth = this.authService;
      }
  
    // Informe l'utilisateur sur son authentfication.
    setMessage() {
        this.message = this.authService.isLoggedIn ?
            'Vous êtes connecté.' : 'Identifiant ou mot de passe incorrect.';
    }
  
    // Connecte l'utilisateur auprès du Guard
    login() {
        this.message = 'Tentative de connexion en cours ...';
        this.authService.login(this.name, this.password).subscribe((isLoggedIn: boolean) => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                // Récupère l'URL de redirection depuis le service d'authentification
                // Si aucune redirection n'a été définis, redirige l'utilisateur vers la liste des pokemons.
                console.log(this.authService.redirectUrl);
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
                // Redirige l'utilisateur
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
    }
}