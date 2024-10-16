import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {



  isLoggedIn: boolean = false;
  redirectUrl: string;


  login(name: string, password: string): Observable<boolean>{
    const isLoggedIn = (name == 'Lively' && password == 'CapitalSpecial');

    return of(isLoggedIn).pipe(
    tap(isLoggedIn => this.isLoggedIn = isLoggedIn));//delay(1000),
  }

  logout(){
    this.isLoggedIn = false;
  }
  
}
