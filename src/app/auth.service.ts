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
    const isLoggedIn = (name == '1234' && password == '1234');

    return of(isLoggedIn).pipe(delay(1000),
    tap(isLoggedIn => this.isLoggedIn = isLoggedIn));
  }

  logout(){
    this.isLoggedIn = false;
  }
  
}
