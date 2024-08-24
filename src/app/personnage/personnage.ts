import { Camp } from "./camp";
import { CAMPS } from "./mock-camps-list";

export class Personnage {

  id: number; // nom "id" obligatoire pour faire fonctionner InMemoryDataService
    camps: Camp;
    name: string;
    picture: string;
    pictureCarte: string;
    typesPouvoir: Array<string>;
    lore: string;
    description: string;
    estActiver: boolean;

    constructor(
      camps: Camp = CAMPS[0],
      name: string = 'Entrer un nom',
      picture: string = 'Entrer une image',
      pictureCarte: string = 'Entrer une image',
      description: string = 'Entrer une description',
      typesPouvoir: string[] = ['Vie'],
      estActiver: boolean = true,
      lore: string = 'Entrer une image'
    ){

      this.camps = camps;
      this.name = name;
      this.picture = picture;
      this.pictureCarte = pictureCarte;
      this.description = description;
      this.typesPouvoir = typesPouvoir;
      this.estActiver = estActiver;
      this.lore = lore;
  }
}