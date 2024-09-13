

export class typesDePouvoirs {

    id: number; // nom "id" obligatoire pour faire fonctionner InMemoryDataService
    nom: string;
    illustration: string;
    description: string;
    nomMembre: string;
    determinant: string;

    constructor(
    nom: string = 'Vie',
    illustration: string = 'Entrer une image',
    description: string = 'Entrer une image',
    nomMembre: string = 'Les protecteurs',
    determinant: string = 'de'
    ){

    this.nom = nom;
    this.illustration = illustration;
    this.description = description;
    this.nomMembre = nomMembre;
    this.determinant = determinant;
}
  }