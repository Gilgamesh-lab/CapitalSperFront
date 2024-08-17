export class Personnage {

  id: number; // nom "id" obligatoire pour faire fonctionner InMemoryDataService
    camps: string;
    name: string;
    picture: string;
    pictureCarte: string;
    typesPouvoir: Array<string>;
    created: Date;
    description: string;
    estActiver: boolean;

    constructor(
      camps: string = 'Village',
      name: string = 'Entrer un nom',
      picture: string = 'Entrer une image',
      pictureCarte: string = 'Entrer une image',
      description: string = 'Entrer une description',
      typesPouvoir: string[] = ['Vie'],
      estActiver: boolean = true,
      created: Date = new Date()
    ){

      this.camps = camps;
      this.name = name;
      this.picture = picture;
      this.pictureCarte = pictureCarte;
      this.description = description;
      this.typesPouvoir = typesPouvoir;
      this.estActiver = estActiver;
      this.created = created;
  }
}