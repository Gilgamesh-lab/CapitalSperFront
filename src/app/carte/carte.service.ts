import { Injectable } from '@angular/core';
import { Carte } from './carte';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { CAMPS } from './mock-camps-list';
import { Camp } from './camp';
import { TYPESDEPOUVOIR } from './mock-typesDePouvoirs-list';
import { typesDePouvoirs } from './typesDePouvoirs';


@Injectable({
  providedIn: 'root'
})
export class carteService {

  
  
  constructor(private http: HttpClient) { }

  

  getcarteListe(): Observable<Carte[]> {
    return this.http.get<Carte[]>('api/cartes').pipe( // tap = console.log sur les observable
    tap((response) => this.log(response)),
      catchError((error) => this.handleErreur(error, []))
    );
  }

  getcarteParId(carteId: number): Observable<Carte|undefined>{
    return this.http.get<Carte>(`api/cartes/${carteId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleErreur(error, null))
    );
  }

  updatecarte(carte: Carte): Observable<null>{
    const httpOption = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put('api/cartes', carte, httpOption).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleErreur(error, undefined))
    )
  }

  supprimercarteParId(carteId: number): Observable<null> {
    return this.http.delete(`api/cartes/${carteId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleErreur(error, undefined))
    )
  }

  ajoutercarte(carte: Carte): Observable<null> {
    const httpOption = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Carte>('api/cartes', carte, httpOption).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleErreur(error, undefined))
    )
  }

  cherchercarte(mot: string): Observable<Carte[]>{
    if(mot.length < 1){
      return of([]);
    }

    return this.http.get<Carte[]>(`api/cartes/?nom=${mot}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleErreur(error, []))
    )
  }

  private log(response: any){
    console.table(response);
  }

  private handleErreur(erreur: Error, erreurValeur: any){
    console.log(erreur);
    return of(erreurValeur);
  }

  getcarteTypePouvoir(): typesDePouvoirs[]{
    return TYPESDEPOUVOIR;
  }

  getcarteCampNom(): string[]{
    let tabRetour: string[] = [];
    let tabCamps: Camp[] = CAMPS;
    
    for(let i = 0; i < tabCamps.length ; i++){
      if(!tabRetour.includes((tabCamps[i].nom))){
        tabRetour.push(tabCamps[i].nom);
      }
    }
    return tabRetour;
  }

  getcarteCamp(): Camp[]{
    let tabRetour: Camp[] = [];
    let tabCamps: Camp[] = CAMPS;
    
    for(let i = 0; i < tabCamps.length ; i++){
      if(!tabRetour.includes((tabCamps[i]))){
        tabRetour.push(tabCamps[i]);
      }
    }
    return tabRetour;
  }
}
