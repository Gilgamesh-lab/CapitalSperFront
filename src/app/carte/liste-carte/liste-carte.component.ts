import { Component, OnInit } from '@angular/core';
import { Carte } from '../carte';
import {AppComponent} from '../../app.component'
import { CommonModule } from '@angular/common';  
import {carteCampColorPipe} from '../carte-camp-color.pipe';
import { Router } from '@angular/router';
import { carteService } from '../carte.service';
import { SearchcarteComponent } from "../search-carte/search-carte.component";
import { LoaderComponent } from '../loader/loader.component';
import { AuthService } from '../../auth.service';
import { BorderCardDirective } from '../border-card.directive';
import { CARTES } from '../mock-cartes-list';
// Required for side-effects
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore, collection, getDocs, addDoc  } from "firebase/firestore";
import { getDatabase, ref, child, get } from "firebase/database";
import { map } from 'rxjs';

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyBs7u45BBYDOQC_ivFSpoZnhK3zeUiyXBs",
  authDomain: "capitalsper.firebaseapp.com",
  projectId: "capitalsper",
  storageBucket: "capitalsper.appspot.com",
  messagingSenderId: "155930427089",
  appId: "1:155930427089:web:110cc98c345109a1460ff0",
  measurementId: "G-GQK4HKL2XX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



// Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  const querySnapshot = getDocs(collection(db, "Cartes"));
  

@Component({
  selector: 'app-liste-carte',
  standalone: true,
  imports: [AppComponent, CommonModule, carteCampColorPipe, SearchcarteComponent, LoaderComponent, BorderCardDirective],
  templateUrl: './liste-carte.component.html',
  styleUrl: './liste-carte.component.css'
})
export class ListecarteComponent implements OnInit {
  ListeDecartes: Carte[];
  
  

  constructor(private router: Router, private carteService: carteService, private authService: AuthService){
    
  }

  async ngOnInit() : Promise<void>{
    this.ListeDecartes = (await this.carteService.getCartes()).filter((carte) => carte.estActiver || this.authService.isLoggedIn);
    
  }  

  

  goTocarte(carte: Carte){
    this.router.navigate(['/cartes', carte.id])
  }

  goToAdd(){
    this.router.navigate(['/cartes/add'])
  }

  goToRegles(){
    this.router.navigate(['/regles'])
  }


  estConnecter(): boolean{
    return this.authService.isLoggedIn;
  }

}


