

export class typesDePouvoirs {

    id: number; // nom "id" obligatoire pour faire fonctionner InMemoryDataService
    nom: string;
    illustration: string;
    description: string;
    nomMembre: string;
    

    constructor(
    nom: string = 'Vie',
    illustration: string = 'Entrer une image',
    description: string = 'Entrer une image',
    nomMembre: string = 'Les protecteurs'
    ){

    this.nom = nom;
    this.illustration = illustration;
    this.description = description;
    this.nomMembre = nomMembre;
}
  }