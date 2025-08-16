export class Page {
    id: number;
    nom: string;
    illustration: string;
    typeDeConcept: number;
    idOrdreAppel: number;
    estActiver: boolean;


    constructor(
        id: number,
        name: string = 'Entrer un nom',
        illustration: string = 'Entrer une image',
        typeDeConcept: number = 1, // 1 = cartes , 2 = camps, 3 = type de pouvoir, 4 = type de carte et 5 = statut
        idOrdreAppel: number,
        estActiver: boolean
      ){
        this.id = id;
        this.nom = name;
        this.illustration = illustration;
        this.typeDeConcept = typeDeConcept;
        this.idOrdreAppel = idOrdreAppel;
        this.estActiver = estActiver;
      }

}