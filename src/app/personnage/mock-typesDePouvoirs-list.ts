import { typesDePouvoirs } from "./typesDePouvoirs";

  
export const TYPESDEPOUVOIR: typesDePouvoirs[] = [

    {
        id: 1,
        nom: "Voyance",
        illustration:  "voyance.png",
        description: "Le type de pouvoir voyance désigne tout les pouvoirs qui permettent d'obtenir des informations sur un ou plusieurs joueurs.",
        nomMembre: "enquêteurs"
    },
    {
        id: 2,
        nom: "Vie",
        illustration:  "vie.png",
        description: "Le type de pouvoir vie désigne tout les pouvoirs qui permettent de sauver la vie d'un joueur peut importe la manière.",
        nomMembre: "protecteurs"
    },
    {
        id: 3,
        nom: "Mort",
        illustration:  "mort.png",
        description: "Le type de pouvoir mort désigne tout les pouvoirs qui permettent d'éliminer un joueur que ce soit de manière direct ou indirecte.",
        nomMembre: "exécuteurs"
    }
    
];