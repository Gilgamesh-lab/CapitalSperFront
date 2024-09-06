export class typesDeCartes {

    id: number; // nom "id" obligatoire pour faire fonctionner InMemoryDataService
    nom: string;
    illustration: string;
    description: string;
    

    constructor(
    nom: string = 'Personnage',
    illustration: string = 'Entrer une image',
    description: string = 'Entrer du texte',
    ){

    this.nom = nom;
    this.illustration = illustration;
    this.description = description;
}
  }