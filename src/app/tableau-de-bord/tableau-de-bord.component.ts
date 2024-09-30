import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import { Carte } from '../carte/carte';
import { CARTES } from '../carte/mock-cartes-list';
import { carteService } from '../carte/carte.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc  } from "firebase/firestore";

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

  

@Component({
  selector: 'app-tableau-de-bord',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tableau-de-bord.component.html',
  styleUrl: './tableau-de-bord.component.css'
})



export class TableauDeBordComponent {

  cartes$: Promise<Carte[]>;

  ngOnInit() {
    this.cartes$ = this.getCartes(); // Appeler une seule fois dans le cycle de vie
  }

  constructor(private authService: AuthService, private router: Router, private carteService: carteService) { }

  


   async getCartes() :Promise<Carte[]>{
    console.log("ok" + CARTES.length);
    for (let carte of CARTES) {
      console.log(carte.id + " : " + carte.estActiver);
      const matchingDoc = (await querySnapshot).docs.find((doc) => doc.data()["id"] == carte.id);
      carte.estActiver = matchingDoc.data()["activer"];  // Attendre que l'état soit récupéré
      
    }
    return CARTES;
  }

  /*async getCartes(): Promise<Carte[]> {
    console.log("Nombre de cartes dans CARTES: " + CARTES.length);
    console.log("Structure de CARTES :", JSON.stringify(CARTES));
    for (let i = 0; i < CARTES.length; i++) {
      const carte = CARTES[i];
      console.log(`Carte ${i + 1}/${CARTES.length} - ID: ${carte.id}, estActiver: ${carte.estActiver}`);
      
      // Désactiver temporairement l'asynchronisme pour déboguer
      // Vous pouvez réactiver cette ligne une fois le débogage terminé
      //carte.estActiver = await this.getActivationParId(carte.id);
    }
  
    console.log("Fin de la boucle.");
    return CARTES;
  }*/
  

  async getActivationParId(id: number): Promise<boolean> {
    let response = true;
    const querySnapshot = await getDocs(collection(db, "Cartes"));
    const matchingDoc = querySnapshot.docs.find((doc) => doc.data()["id"] == id);

   if (matchingDoc) {
     response = matchingDoc.data()["activer"];  // Mettre à jour la réponse si trouvée
   }

  return response;  // Retourner la réponse (true/false)
  }

  


  affichageGeneral($event: Event) {
    const isChecked: boolean = ($event.target as HTMLInputElement).checked;
    CARTES.forEach(
      carte => carte.estActiver = isChecked
    );
  }

  

  selectAffichage($event: Event, carte: Carte){
      const isChecked: boolean = ($event.target as HTMLInputElement).checked;
      carte.estActiver = !carte.estActiver;
      console.log(carte.estActiver);
      //CARTES[carte.id -1] = carte;
      this.carteService.updatecarte(carte);
    }

  goMenu(){
    this.router.navigate(['/']);
  }

}