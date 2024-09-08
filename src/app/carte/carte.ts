import { Camp } from "./camp";
import { CAMPS } from "./mock-camps-list";
import { TYPESDECARTES } from "./mock-typesDeCartes-list";
import { TYPESDEPOUVOIR } from "./mock-typesDePouvoirs-list";
import { typesDeCartes } from "./typesDeCartes";
import { typesDePouvoirs } from "./typesDePouvoirs";

export class Carte {

  id: number; // nom "id" obligatoire pour faire fonctionner InMemoryDataService
  camps: Camp;
  nom: string;
  illustration: string;
  imageCarte: string;
  typesPouvoir: Array<typesDePouvoirs>;
  imageLore: string;
  description: string;
  estActiver: boolean;
  typeDeCarte: typesDeCartes;
  nomDuBatiment: string;

  constructor(
    camps: Camp = CAMPS[0],
    name: string = 'Entrer un nom',
    illustration: string = 'Entrer une image',
    imageCarte: string = 'Entrer une image',
    description: string = 'Entrer une description',
    typesPouvoir: typesDePouvoirs[] = [TYPESDEPOUVOIR[0]],
    estActiver: boolean = true,
    imageLore: string = 'Entrer une image',
    typeDeCarte: typesDeCartes = TYPESDECARTES[0],
    nomDuBatiment: string = 'Vagabond'
  ){

    this.camps = camps;
    this.nom = name;
    this.illustration = illustration;
    this.imageCarte = imageCarte;
    this.description = description;
    this.typesPouvoir = typesPouvoir;
    this.estActiver = estActiver;
    this.imageLore = imageLore;
    this.typeDeCarte = typeDeCarte;
    this.nomDuBatiment = nomDuBatiment;
  }
}