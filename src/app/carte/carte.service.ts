import { Injectable } from '@angular/core';
import { Carte } from './carte';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, delay, firstValueFrom, of, retry, take, tap } from 'rxjs';
import { CAMPS } from './mock-camps-list';
import { Camp } from './camp';
import { TYPESDEPOUVOIR } from './mock-typesDePouvoirs-list';
import { typesDePouvoirs } from './typesDePouvoirs';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc  } from "firebase/firestore";
import { CARTES } from './mock-cartes-list';
import axios from 'axios';
import { AuthService } from '../auth.service';
import { UtilsService } from '../utils.service';
import { Router } from '@angular/router';

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

  cartes: Carte[] = undefined;
  premiereInstanceTableauDeBord: boolean;
  cartesNb: { [id: number] : number; } = {};
  carteCapitalSper: Carte[] = [];
  tab: number[];
  partie: string;

  async ngOnInit() : Promise<void>{
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const querySnapshot = getDocs(collection(db, "Cartes"));
    this.premiereInstanceTableauDeBord = true;
    (await this.getCartes()).forEach(carte => this.cartesNb[carte.id] == 0);
    
  }

  
  
  constructor(private http: HttpClient, private auth: AuthService,  private utilsService: UtilsService, private router: Router) { }

  async getCartesNb(): Promise<{ [id: number]: number; }>{
    return this.cartesNb;
  }




  
  


  

  async getObjet (): Promise<number[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    var tab: number[];
    let url: string = `${this.utilsService.getEndPoint().apiUrl}/api/getPersonnages`;
    this.tab = await firstValueFrom(this.http.get<number[]>(url, httpOptions)
                                                            .pipe(retry(3) ,
                                                            take(1),
                                                            delay(2000)));
    return this.tab
    
    }

    async createPost(data: any): Promise<void> {
      interface ApiResponse {
        log: string; 
      }

      let responseData: string ;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json', 
        })
      };
      let url: string = `${this.utilsService.getEndPoint().apiUrl}/api/lancerUnePartie`;
      this.http.post(url, data, httpOptions ).pipe(retry(3) ,
      take(1),
      delay(2000))
      .subscribe(
        (response: ApiResponse )=> {
          this.partie = response.log;
        },
        error => {
          console.error('Erreur :', error);
        }
      );
    }

    getcarteParI(carteId: number): Observable<Carte|undefined>{
      return this.http.get<Carte>(`api/cartes/${carteId}`).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleErreur(error, null))
      );
    }

  getCarteCapitalSper(): Carte[]{
    return this.carteCapitalSper;
  }

  resetCarteCapitalSper(){
    this.carteCapitalSper = [];// pour les changements de page
  }

  incrementerNb(carte: Carte): void {
    
    if(carte.id == 1 || carte.id == 2){
      this.cartesNb[carte.id] += 1; 
    }
    else{
      this.cartesNb[carte.id] = 1; 
      
    }
    if((this.getCarteCapitalSper().filter(carte2 => carte.id == carte2.id).length == 0)){
      
      this.carteCapitalSper.push(carte);
    }
    
    
  }

  dimunuerNb(carte: Carte): void {
    this.cartesNb[carte.id] -= 1; 
    if(this.cartesNb[carte.id] == 0){
      const index = this.carteCapitalSper.indexOf(carte, 0);
      if (index > -1) {
        this.carteCapitalSper.splice(index, 1);
      }
    }
  }

  
  async getCartes(): Promise<Carte[]>{
    /*CARTES.forEach(async carte =>
      { {
          try {
          const docRef =  await addDoc(collection(db, "Cartes"), {
            id: carte.id,
            activer: carte.estActiver,
          });
          console.log("Document written with ID: ", docRef);
        } catch (e) {
          console.error("Error adding document: ", e);
        }}}
    )*/
    for (let carte of CARTES) {
      const matchingDoc = (await querySnapshot).docs.find((doc) => doc.data()["id"] == carte.id);
      if(matchingDoc){
        carte.estActiver = matchingDoc.data()["activer"];  // Attendre que l'état soit récupéré
      }
      
      
      
    }
    return CARTES;
  }

  initCarte(cartes: Carte[]){
    this.cartes = cartes.filter((carte) => carte.estActiver || this.auth.isLoggedIn);
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
   let isCapitalSper: boolean = this.router.url.includes('capital-sper');
    if(mot.length < 2){
      return of([]);
    }

    const resultats = this.cartes.filter( carte =>
      carte.nom.toLowerCase().includes(mot.toLowerCase()   ) 
    ); // Promise.all(this.getObjet()).then(resultats => resultats.filter(id => id == carte.idOrdreAppel)   )

    return of(resultats).pipe(
      catchError((error) => this.handleErreur(error, []))
    );
  }

  private log(response: any){
    console.log(response);
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
