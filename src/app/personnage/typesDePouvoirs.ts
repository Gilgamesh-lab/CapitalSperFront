

export class typesDePouvoirs {

    id: number; // nom "id" obligatoire pour faire fonctionner InMemoryDataService
    nom: string;
    illustration: string;
    description: string
    

    constructor(
    nom: string = 'Village',
    illustration: string = 'Entrer une image',
    description: string = 'Entrer une image',
    ){

    this.nom = nom;
    this.illustration = illustration;
    this.description = description;
}
  }