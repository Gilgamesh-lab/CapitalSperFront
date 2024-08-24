import { Personnage } from "./personnage";

export class Camp {

    id: number; // nom "id" obligatoire pour faire fonctionner InMemoryDataService
    nom: string;
    but: string;
    illustration: string;
    description: string
    listePersonnage: number[]; // pas de Personnage[] pour éviter les dépendances circulaires
    

    constructor(
    nom: string = 'Village',
    but: string = 'Entrer un nom',
    illustration: string = 'Entrer une image',
    description: string = 'Entrer une image',
    ){

    this.nom = nom;
    this.but = but;
    this.illustration = illustration;
    this.description = description;
    this.listePersonnage = [];
}
  }