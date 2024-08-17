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
  }