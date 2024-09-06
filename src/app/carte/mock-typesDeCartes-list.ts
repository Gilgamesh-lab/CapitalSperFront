import { typesDeCartes } from "./typesDeCartes";


export const TYPESDECARTES: typesDeCartes[] = [

    {
        id: 1,
        nom: "Personnage",
        illustration:  "personnages.png",
        description: "Les cartes personnages sont des cartes faces cachés attribué à chaque joueur. Ils ne peuvent en posséder qu'une. " +
        "Ce sont elles qui définissent l'identité secrète du joueur ainsi que le groupe auquel il appartient, sa condition de victoire ainsi que son éventuel pouvoir spécial."

    },
    {
        id: 2,
        nom: "Fonction",
        illustration:  "fonction.jpeg",
        description: "Les cartes fonctions ou charges honorifiques confèrent à son détenteur un pouvoir spécifique et unique. " +
        "Contrairement aux cartes personnages, les cartes fonction sont disposés face visibles mais sont cumulables avec une carte personnage. "+
        "Elles ont chacunes leurs propres règles d'attribution et de succession. " + 
        "Le but des joueurs ayant une carte fonction restent celles de leurs cartes personnages mais ils disposent maintenant d'un pouvoir plus grand pour y parvenir."
    }
    
];