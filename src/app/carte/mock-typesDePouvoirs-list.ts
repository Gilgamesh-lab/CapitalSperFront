import { typesDePouvoirs } from "./typesDePouvoirs";

  
export const TYPESDEPOUVOIR: typesDePouvoirs[] = [

    {
        id: 1,
        nom: "Voyance",
        illustration:  "voyance.png",
        description: "Le type de pouvoir voyance désigne tout les pouvoirs qui permettent d'obtenir des informations sur un ou plusieurs joueurs." +
        " Leurs missions est donc de transmettre discrètement ces informations précieuses à leurs camps.",
        nomMembre: "enquêteurs",
        determinant: "de "
    },
    {
        id: 2,
        nom: "Vie",
        illustration:  "vie.png",
        description: "Le type de pouvoir vie désigne tout les pouvoirs qui permettent de sauver la vie d'un joueur peut importe la manière."
        + " Leurs missions est donc d'identifier et de protéger avec leurs pouvoirs les joueurs qui pourraient être important pour la victoire de leurs camps.",
        nomMembre: "protecteurs",
        determinant: "de "
    },
    {
        id: 3,
        nom: "Mort",
        illustration:  "mort.png",
        description: "Le type de pouvoir mort désigne tout les pouvoirs qui permettent d'éliminer un joueur que ce soit de manière direct ou indirecte."
        + " Leurs missions est donc d'identifier et éliminer les joueurs qui pourraient être une menace pour la victoire de leurs camps.",
        nomMembre: "exécuteurs",
        determinant: "de "
    },
    {
        id: 4,
        nom: "Renforcement",
        illustration:  "renforcement.jpeg",
        description: "Le type de pouvoir renforcement désigne tout les pouvoirs qui permettent d'acccorder des cartes fonctions et/ou bâtiment à un autre joueur "+ 
        "ou d'augmenter son nombre de voix lors d'un vote.",
        nomMembre: "supports",
        determinant: "de "
    },
    {
        id: 5,
        nom: "Affaiblissement",
        illustration:  "malediction.webp",
        description: "Le type de pouvoir affaiblissement désigne tout les pouvoirs qui rendent inuitilisable de manière temporairement ou définitevement " +
        "le pouvoir d'un joueur. ou bien de l'empêche de voter",
        nomMembre: "ensorceleur",
        determinant: "d'"
    },
    {
        id: 6,
        nom: "Immunité",
        illustration:  "immuniter.jpeg",
        description: "Le type de pouvoir immunité désigne tout les pouvoirs qui permettent d'être immuniser à un pouvoir spécial.",
        nomMembre: "immunisé",
        determinant: "d'"
    }
    
];