export class Statut {

    id: number; // nom "id" obligatoire pour faire fonctionner InMemoryDataService
    nom: string;
    illustration: string;
    imageLore: string;
    description: string;
    idCarteReferent: number; // id carte qui a crée le statut
    extraDescription: string;
    periodiciter: Boolean; // (si  null = ne se réveille pas, si false = se réveille seulement la première nuit, si true = se réveille chaque nuit)
  
   /* constructor(
      camps: Camp = [CAMPS[0]],
      name: string = 'Entrer un nom',
      illustration: string = 'Entrer une image',
      imageCarte: string = 'Entrer une image',
      description: string = 'Entrer une description',
      typesPouvoir: typesDePouvoirs[] = [TYPESDEPOUVOIR[0]],
      estActiver: boolean = true,
      imageLore: string = 'Entrer une image',
      typeDeCarte: typesDeCartes = TYPESDECARTES[0],
      nomDuBatiment: string = 'Vagabond',
      periodiciter: Boolean = null
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
      this.periodiciter = periodiciter;
    }*/
}