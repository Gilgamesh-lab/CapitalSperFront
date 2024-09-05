import { Camp } from "./camp";
  
export const CAMPS: Camp[] = [
    {
        id: 1,
        nom: "Villageois",
        but: "Éliminer les loups-garous",
        illustration:  "villageois.png",
        description: "La nuit la plupart des villageois dorment. Le jour ils se concertent pour essayer de trouver les loups-garous cachés parmis eux."
    },
    {
        id: 2,
        nom: "Loups-Garous",
        but: "Éliminer les autres habitants du village",
        illustration:  "meute.webp",
        description: "Chaque nuit, les loups garous sont réveillés par le meneur afin" +
       " qu’il s’entendent pour choisir le villageois qu’ils vont dévorer. Les loups garous ne peuvent pas dévorer "+
        "l’un de leurs congénères durant la nuit, mais peut très bien voter contre lui lors du vote de la journée. " +
        "Si la nuit les loups garous ne se mettent pas d’accord unanimement pour le choix du villageois à dévorer, le festin est annulé par le meneur. " +
        "Le jour ils se dissimulent parmis les villageois et essayent de faire condamner un innocent." 
    }
];