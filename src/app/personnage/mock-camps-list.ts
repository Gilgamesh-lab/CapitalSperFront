import { Camp } from "./camp";
import { PERSONNAGES } from "./mock-personnages-list";
  
export const CAMPS: Camp[] = [
    {
        id: 1,
        nom: "Villageois",
        but: "Tuer les loups-garous",
        illustration:  "Simple-villageois.png",
        description: "balaballazjdkczo,ckio",
        listePersonnage:  PERSONNAGES,
    },
    {
        id: 2,
        nom: "Loups-Garous",
        but: "Tuer les villageois",
        illustration:  "Loup-garou.png",
        description: "balaballazjdkczo,ckio",
        listePersonnage:  PERSONNAGES,
    }
    
];