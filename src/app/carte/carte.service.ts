import { Injectable } from '@angular/core';
import { Carte } from './carte';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of, tap } from 'rxjs';
import { CAMPS } from './mock-camps-list';
import { Camp } from './camp';
import { TYPESDEPOUVOIR } from './mock-typesDePouvoirs-list';
import { typesDePouvoirs } from './typesDePouvoirs';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc  } from "firebase/firestore";
import { CARTES } from './mock-cartes-list';

const firebaseConfig = {
  apiKey: "AIzaSyBs7u45BBYDOQC_ivFSpoZnhK3zeUiyXBs",
  authDomain: "capitalsper.firebaseapp.com",
  projectId: "capitalsper",
  storageBucket: "capitalsper.appspot.com",
  messagingSenderId: "155930427089",
  appId: "1:155930427089:web:110cc98c345109a1460ff0",
  measurementId: "G-GQK4HKL2XX"
};

const app = initializeApp(firebaseConfig);



// Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  const querySnapshot = getDocs(collection(db, "Cartes"));

@Injectable({
  providedIn: 'root'
})



export class carteService {

  ngOnInit() : void{
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const querySnapshot = getDocs(collection(db, "Cartes"));
    
  }
  
  constructor(private http: HttpClient) { }

  readUserData() {
    querySnapshot.then(querySnapshot => querySnapshot.forEach((doc) => {
      console.log(`${doc.data()["id"]} => ${doc.data()["activer"]}`);
    }));
  }

  getData(){
    return querySnapshot;
  }

  getCarteExistanceParId(id: number): boolean {
    let exist: boolean = false;
    querySnapshot.then(querySnapshot => querySnapshot.forEach((doc) => {
      if( doc.data()["id"] == id ){
        exist = true;
      } ;
    }));
    return exist;
  }

  getActivationParId(id: number): boolean {
    querySnapshot.then(querySnapshot => querySnapshot.forEach((doc) => {
      if( doc.data()["id"] == id ){
        return doc.data()["activer"];
      } ;
    }));
    return null;
  }

  async test(){
    CARTES.forEach(async carte =>
      { if (!this.getCarteExistanceParId(carte.id)) {
          try {
          const docRef =  await addDoc(collection(db, "Cartes"), {
            id: carte.id,
            activer: carte.estActiver,
          });
          console.log("Document written with ID: ", docRef);
        } catch (e) {
          console.error("Error adding document: ", e);
        }}}
    )
  }

  async test2(){
    CARTES.forEach(async carte =>
      { if (!this.getCarteExistanceParId(carte.id)) {
          try {
          const docRef =  await addDoc(collection(db, "Cartes"), {
            id: carte.id,
            activer: carte.estActiver,
          });
          console.log("Document written with ID: ", docRef);
        } catch (e) {
          console.error("Error adding document: ", e);
        }}}
    )
  }

  

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
