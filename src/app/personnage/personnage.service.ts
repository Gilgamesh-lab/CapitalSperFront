import { Injectable } from '@angular/core';
import { Personnage } from './personnage';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonnageService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  
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
      catchError((error) => this.handleErreur(error, undefined))
    );
  }

  private log(response: Personnage|Personnage[]|undefined){
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
