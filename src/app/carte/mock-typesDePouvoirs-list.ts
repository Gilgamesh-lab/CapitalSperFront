import { typesDePouvoirs } from "./typesDePouvoirs";

  
export const TYPESDEPOUVOIR: typesDePouvoirs[] = [

    {
        id: 1,
        nom: "Voyance",
        illustration:  "voyance.png",
        description: "Le type de pouvoir voyance désigne tout les pouvoirs qui permettent d'obtenir des informations sur un ou plusieurs joueurs." +
        " Leurs missions est donc de transmettre discrètement ces informations précieuses à leurs camps.",
        nomMembre: "enquêteurs"
    },
    {
        id: 2,
        nom: "Vie",
        illustration:  "vie.png",
        description: "Le type de pouvoir vie désigne tout les pouvoirs qui permettent de sauver la vie d'un joueur peut importe la manière."
        + " Leurs missions est donc d'identifier et de protéger avec leurs pouvoirs les joueurs qui pourraient être important pour la victoire de leurs camps.",
        nomMembre: "protecteurs"
    },
    {
        id: 3,
        nom: "Mort",
        illustration:  "mort.png",
        description: "Le type de pouvoir mort désigne tout les pouvoirs qui permettent d'éliminer un joueur que ce soit de manière direct ou indirecte."
        + " Leurs missions est donc d'identifier et éliminer les joueurs qui pourraient être une menace pour la victoire de leurs camps.",
        nomMembre: "exécuteurs"
    }
    
];