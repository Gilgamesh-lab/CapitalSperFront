import { typesDeCartes } from "./typesDeCartes";


export const TYPESDECARTES: typesDeCartes[] = [

    {
        id: 1,
        nom: "Personnage",
        illustration:  "personnages.png",
        description: "Les cartes personnages sont des cartes faces cachés attribué à chaque joueur. Ils ne peuvent en posséder qu'une. " +
        "Ce sont elles qui définissent l'identité secrète du joueur ainsi que le groupe auquel il appartient et donc sa condition de victoire ainsi que son éventuel pouvoir spécial."

    },
    {
        id: 2,
        nom: "Fonction",
        illustration:  "fonction.jpeg",
        description: "En plus de leur identité secrète, quelques habitants peuvent une carte fonction ou charge honorifique. Elles confèrent à son détenteur un pouvoir spécifique et unique. " +
        "Contrairement aux cartes personnages, les cartes fonction sont disposés face visibles à la vue de tous mais sont cumulables avec une carte personnage. "+
        "Elles ont chacunes leurs propres règles d'attribution et de succession. " + 
        "Le but de ces joueurs ayant une carte fonction restent celles de leurs cartes personnages mais ils disposent maintenant d'un pouvoir plus grand pour y parvenir."
    },
    {
        id: 3,
        nom: "Bâtiment",
        illustration:  "batiments.jpeg",
        description: "En plus de leur identité secrète, les habitants reçoivent un jeton qui leur donne une identité publique. " +
        "Un pouvoir supplémentaire associé à leurs bâtiments est utilisable par ces habitants. " +
        "Contrairement aux cartes personnages, les cartes bâtiments sont disposés face visibles à la vue de tous mais sont cumulables avec une carte personnage et une carte fonction. "+
        "Le but de ces joueurs ayant une carte bâtiment restent celles de leurs cartes personnages mais ils disposent maintenant d'un pouvoir plus grand pour y parvenir."
    }
    
];