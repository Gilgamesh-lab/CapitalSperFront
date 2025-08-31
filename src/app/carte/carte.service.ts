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
import { typesDeCartes } from './typesDeCartes';
import { TYPESDECARTES } from './mock-typesDeCartes-list';
import { Statut } from './statut';
import { STATUT } from './mock-status-list';
import { Page } from '../page';

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
  erreur: boolean = false;

  async ngOnInit() : Promise<void>{
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const querySnapshot = getDocs(collection(db, "Cartes"));
    this.premiereInstanceTableauDeBord = true;
    (await this.getCartes()).forEach(carte => this.cartesNb[carte.id] == 0);
    this.getObjet();
    
  }

  
  
  constructor(private http: HttpClient, private auth: AuthService,  private utilsService: UtilsService, private router: Router) { }

  getCartesNb(): { [id: number]: number; }{
    return this.cartesNb;
  }




  
  


  

  async getObjet (): Promise<number[]> {
    interface ApiResponse {
      log: string; 
      erreur: string;
      code: number;
      liste: number[];
    }

    interface ResponseEntity {
      status: number;
      error: ApiResponse
    }

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    var tab: number[];
    let url: string = `${this.utilsService.getEndPoint().apiUrl}/api/getPersonnages`;
    this.http.get(url, httpOptions)
    .pipe(retry({ count: 3, delay: (error, retryCount) => {
      console.warn(`Tentative ${retryCount} après échec :`, error);
      return of(null).pipe(delay(2000)); // ⏳ Délai de 2 sec SEULEMENT si erreur
    }}  ) ,
    take(1))
    .subscribe(
      (response: ApiResponse )=> {
        this.erreur = false;
        this.tab = response.liste;
        
        
      },
      (error : ResponseEntity) => {
        this.erreur = true;
        this.partie = this.partie = "Le service est malheureusement indisponible, veuillez réessayer ultérieurement";
      }
    );
    return this.tab
    
    }

    async createPost(data: any): Promise<void> {
      interface ApiResponse {
        log: string; 
        erreur: string;
        code: number;
      }

      interface ResponseEntity {
        status: number;
        error: ApiResponse
      }

      let responseData: string ;
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json', 
        })
      };
      let url: string = `${this.utilsService.getEndPoint().apiUrl}/api/lancerUnePartie`;
      this.http.post(url, data, httpOptions ).pipe(retry({ count: 3, delay: (error, retryCount) => {
        console.warn(`Tentative ${retryCount} après échec :`, error);
        return of(null).pipe(delay(2000)); // ⏳ Délai de 2 sec SEULEMENT si erreur
      }}) ,
      take(1))
      .subscribe(
        (response: ApiResponse )=> {
          this.partie = response.log;
          
          
        },
        (error : ResponseEntity) => {
          if (error.status == 400){
            this.partie = error.error.erreur;
          }
          else if (error.status == 500){
            this.partie = error.error.erreur;
          }
          else{
            this.partie = "Le service est malheureusement indisponible, veuillez réessayer ultérieurement";
          }
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

  mappageCarteToPage(carte: Carte): Page{
    return new Page(carte.id, carte.nom, carte.illustration, 1, carte.idOrdreAppel, carte.estActiver);
  }

  mappageCampToPage(camp: Camp): Page{
    return new Page(camp.id, "Le camp des " + camp.nom.toLowerCase(), camp.illustration, 2, null, true);
  }

  mappageTypeDePouvoirToPage(typeDePouvoir: typesDePouvoirs): Page{
    return new Page(typeDePouvoir.id, "Le pouvoir " + typeDePouvoir.determinant + typeDePouvoir.nom.toLowerCase(), typeDePouvoir.illustration, 3, null, true);
  }

  mappageTypeDecarteToPage(typeDecarte: typesDeCartes): Page{
    return new Page(typeDecarte.id, "Les cartes " + typeDecarte.nom.toLowerCase() + "s", typeDecarte.illustration, 4, null, true);
  }

  mappageStatutToPage(statut: Statut): Page{
    return new Page(statut.id, statut.nom, statut.illustration, 5, null, true);
  }

  cherchercarte(mot: string): Observable<Page[]>{
   let isCapitalSper: boolean = this.router.url.includes('capital-sper');
   let listePage: Page[] = this.cartes.map(carte => this.mappageCarteToPage(carte));

    if(mot.length < 2){
      return of([]);
    }

    if(!isCapitalSper){
      CAMPS.filter(camp => this.CampsEstActiver(camp)).map(camp => this.mappageCampToPage(camp)).forEach(page=> listePage.push(page));
      TYPESDEPOUVOIR.filter(typesDePouvoirs => this.typeDePouvoirsEstActiver(typesDePouvoirs)).map(typesDePouvoirs => this.mappageTypeDePouvoirToPage(typesDePouvoirs)).forEach(page=> listePage.push(page));
      TYPESDECARTES.filter(typeDecarte => this.typeDeCarteEstActiver(typeDecarte)).map(typeDecarte => this.mappageTypeDecarteToPage(typeDecarte)).forEach(page=> listePage.push(page));
      this.getStatuts().map(statut => this.mappageStatutToPage(statut)).forEach(page=> listePage.push(page));
    }
    

    const resultats = listePage.filter( carte =>
      carte.nom.toLowerCase().includes(mot.toLowerCase()   ) 
    ); // Promise.all(this.getObjet()).then(resultats => resultats.filter(id => id == carte.idOrdreAppel)   )
    
    //resultats.sort((a, b) => (a.nom > b.nom ? -1 : 1)); pertinent ?

    return of(resultats).pipe(
      catchError((error) => this.handleErreur(error, []))
    );
  }

  public CampsEstActiver(camp: Camp): boolean{
    if(this.auth.isLoggedIn ){
      return true;
    }
    else{
      return this.cartes.filter((carte) => carte.camps != null && carte.camps.includes(camp)).length > 0;
    }
  }

  public typeDePouvoirsEstActiver(typesDePouvoirs: typesDePouvoirs): boolean{
    if(this.auth.isLoggedIn ){
      return true;
    }
    else{
      return this.cartes.filter((carte) => carte.typesPouvoir != null && carte.typesPouvoir.includes(typesDePouvoirs)).length > 0;
    }
  }

  public typeDeCarteEstActiver(typesDeCartes: typesDeCartes): boolean{
    if(this.auth.isLoggedIn ){
      return true;
    }
    else{
      return this.cartes.filter((carte) =>  carte.typeDeCarte.id == typesDeCartes.id) .length > 0;
    }
    
  }

  getStatuts(): Statut[]{
    return STATUT.filter((statut) => this.cartes.find((carte) => carte.id == statut.idCarteReferent));
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
