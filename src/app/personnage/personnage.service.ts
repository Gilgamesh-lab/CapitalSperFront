import { Injectable } from '@angular/core';
import { Personnage } from './personnage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { PERSONNAGES } from './mock-personnages-list';


@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  
  
  constructor(private http: HttpClient) { }

  

  getPersonnageListe(): Observable<Personnage[]> {
    return this.http.get<Personnage[]>('api/personnages').pipe( // tap = console.log sur les observable
    tap((response) => this.log(response)),
      catchError((error) => this.handleErreur(error, []))
    );
  }

  getPersonnageParId(personnageId: number): Observable<Personnage|undefined>{
    return this.http.get<Personnage>(`api/personnages/${personnageId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleErreur(error, null))
    );
  }

  updatePersonnage(personnage: Personnage): Observable<null>{
    const httpOption = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.put('api/personnages', personnage, httpOption).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleErreur(error, undefined))
    )
  }

  supprimerPersonnageParId(personnageId: number): Observable<null> {
    return this.http.delete(`api/personnages/${personnageId}`).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleErreur(error, undefined))
    )
  }

  ajouterPersonnage(personnage: Personnage): Observable<null> {
    const httpOption = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    return this.http.post<Personnage>('api/personnages', personnage, httpOption).pipe(
      tap((response) => this.log(response)),
      catchError((error) => this.handleErreur(error, undefined))
    )
  }

  chercherPersonnage(mot: string): Observable<Personnage[]>{
    if(mot.length < 1){
      return of([]);
    }

    return this.http.get<Personnage[]>(`api/personnages/?name=${mot}`).pipe(
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

  getPersonnageTypePouvoir(): string[]{
    return ['Vie', 'Mort', 'Voyance'];
  }

  getPersonnageCamp(): string[]{
    return ['Village', 'Loups-Garous'];
  }
}
