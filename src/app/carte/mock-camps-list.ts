import { Camp } from "./camp";
  
export const CAMPS: Camp[] = [
    {
        id: 1,
        nom: "Villageois",
        but: "Éliminer les loups-garous",
        illustration:  "camps/villageois.png",
        description: "Attachés à la survie du village, les personnages suivants défendent son harmonie avec détermination. "+
            "Devant les menaces, ils seront amenés à éliminer ceux qu'ils soupçonnent d'être trop dangereux, même si cela leur est douloureux."
    },
    {
        id: 2,
        nom: "Loups-Garous",
        but: "Éliminer les autres habitants du village",
        illustration:  "camps/meute.webp",
        description: "Chaque nuit, les loups garous sont réveillés par le meneur afin" +
       " qu’il s’entendent pour choisir le villageois qu’ils vont dévorer. Les loups garous ne peuvent pas dévorer "+
        "l’un de leurs congénères durant la nuit, mais peuvent très bien voter contre lui lors du vote de la journée. " +
        "Si la nuit les loups garous ne se mettent pas d’accord unanimement pour le choix du villageois à dévorer, le festin est annulé par le meneur. " +
        "Certains d'entre eux peuvent être ensuite appelé à tour de rôle pour utiliser leurs pouvoirs individuelles. " + 
        "Le jour ils se dissimulent parmis les villageois et essayent de faire condamner un innocent." 
    },
    {
        id: 3,
        nom: "Solitaires",
        but: "Réaliser leurs propres objectifs, indépendamment de leurs camps",
        illustration:  "camps/solitaires.jpg",
        description: "Leurs passés pourraient sans doute nous expliquer pourquoi ils détestent autant les habitants de Thiercelieux. " + 
            "Une certitude : ils font vraiment peur à tout le monde !" 
    },
    {
        id: 4,
        nom: "Ambigus",
        but: "Faire gagner le camp auquel ils appartiennent",
        illustration:  "camps/ambigus.jpeg",
        description: "Ils peuvent être alliés ou devenir des ennemis du village. Durant la partie, ils peuvent changer de camp ou de personnage." 
    }
];