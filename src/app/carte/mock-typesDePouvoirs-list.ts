import { typesDePouvoirs } from "./typesDePouvoirs";

  
export const TYPESDEPOUVOIR: typesDePouvoirs[] = [

    {
        id: 1,
        nom: "Voyance",
        illustration:  "pouvoirs/voyance.png",
        description: "Le type de pouvoir voyance désigne tout les pouvoirs qui permettent d'obtenir des informations sur un ou plusieurs joueurs." +
        " Leurs missions est donc de transmettre discrètement ces informations précieuses à leurs camps.",
        nomMembre: "enquêteurs",
        determinant: "de "
    },
    {
        id: 2,
        nom: "Vie",
        illustration:  "pouvoirs/vie.png",
        description: "Le type de pouvoir vie désigne tout les pouvoirs qui permettent de sauver la vie d'un joueur peut importe la manière."
        + " Leurs missions est donc d'identifier et de protéger avec leurs pouvoirs les joueurs qui pourraient être important pour la victoire de leurs camps.",
        nomMembre: "protecteurs",
        determinant: "de "
    },
    {
        id: 3,
        nom: "Mort",
        illustration:  "pouvoirs/mort.png",
        description: "Le type de pouvoir mort désigne tout les pouvoirs qui permettent d'éliminer un joueur que ce soit de manière direct ou indirecte."
        + " Leurs missions est donc d'identifier et éliminer les joueurs qui pourraient être une menace pour la victoire de leurs camps.",
        nomMembre: "exécuteurs",
        determinant: "de "
    },
    {
        id: 4,
        nom: "Renforcement",
        illustration:  "pouvoirs/renforcement.jpeg",
        description: "Le type de pouvoir renforcement désigne tout les pouvoirs qui permettent d'acccorder des cartes fonctions et/ou bâtiment à un autre joueur "+ 
        "ou d'augmenter son nombre de voix lors d'un vote.",
        nomMembre: "supports",
        determinant: "de "
    },
    {
        id: 5,
        nom: "Affaiblissement",
        illustration:  "pouvoirs/malediction.webp",
        description: "Le type de pouvoir affaiblissement désigne tout les pouvoirs qui rendent inutilisable de manière temporairement ou définitivement " +
        "le pouvoir d'un joueur ou bien qui l'empêche de voter",
        nomMembre: "ensorceleurs",
        determinant: "d'"
    },
    {
        id: 6,
        nom: "Immunité",
        illustration:  "pouvoirs/immuniter.jpeg",
        description: "Le type de pouvoir immunité désigne tout les pouvoirs qui permettent d'être immunisé à un pouvoir spécial.",
        nomMembre: "immunisés",
        determinant: "d'"
    },
    {
        id: 7,
        nom: "Métamorphose",
        illustration:  "pouvoirs/metamorphose.png",
        description: "Le type de pouvoir métamorphose désigne tout les pouvoirs permettants de faire changer de camp ou de personnage au cours de la partie soi même ou autrui.",
        nomMembre: "métamorphes",
        determinant: "de "
    }
    
];