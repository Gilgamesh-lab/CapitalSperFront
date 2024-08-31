import { CAMPS } from './mock-camps-list';
import { TYPESDEPOUVOIR } from './mock-typesDePouvoirs-list';
import { Personnage } from './personnage';


export const PERSONNAGES: Personnage[] = [
    {
        id: 1,
        name: "Les Simples Villageois",
        picture: "Simple-villageois.png",
        pictureCarte:  "sv.jpg",
        camps: CAMPS[0],
        typesPouvoir: [],
        lore:  "svLore.png",
        description: "C’est le villageois de base du jeu, il ne possède aucun pouvoir spécial. De ce fait, il peut porter des accusations et se mettre en danger sans pénaliser son camp.",
        estActiver: true
    },
    {
        id: 2,
        name: "Les Simples Loups-Garous",
       picture: "Loup-garou.png",
       pictureCarte:  "ww.jpg",
       camps: CAMPS[1],
       typesPouvoir: [TYPESDEPOUVOIR[2]],
        lore:  "wwLore.png",
        description: "C’est le loup garou de base du jeu.",
        estActiver: true
    },
    {
        id: 3,
        name: "La Voyante",
        picture: "Voyante.png",
        pictureCarte:  "vovo.jpg",
        camps: CAMPS[0],
        typesPouvoir: [TYPESDEPOUVOIR[0]],
        lore:  "vovoLore.png",
        description: "Chaque nuit, lorsque le meneur la réveille, elle a la capacité de voir clairement le rôle du joueur de son choix. Son but est de transmettre ses informations précieuses au village afin d’éliminer les loups garous.",
        estActiver: true
    },
    {
        id: 4,
        name: "La Sorcière",
       picture: "Sorciere.png",
       pictureCarte:  "soso.jpg",
       camps: CAMPS[0],
       typesPouvoir: [TYPESDEPOUVOIR[1], TYPESDEPOUVOIR[2], TYPESDEPOUVOIR[0]],
       lore:  "sosoLore.png",
        description: "Elle est réveillée par le meneur chaque nuit après les loups garous tant qu’elle au moins une potion. Le meneur lui montre alors la victime des loups garous. La sorcière dispose de deux potions : la potion de  VIE  qui peut lui permet de ressusciter la victime des loups garous, et une potion de  MORT  qui lui permet d’éliminer un joueur. Elle peut utiliser chaque potion une seule fois dans toute la partie. Elle peut très bien ne pas utiliser ses potions pendant une nuit. Elle peut très bien n’utiliser qu’une seule potion durant la nuit, ou bien utiliser les deux la même nuit si elle le souhaite. La sorcière est autorisée à utiliser sa potion de  VIE sur elle même si les loups garous avaient décider de la dévorer durant leur festin nocturne. Si la sorcière a utilisé sa potion de  VIE , le meneur ne lui montreras pas la victime des loups garous les nuits suivantes.",
        estActiver: true
    },
    {
        id: 5,
        name: "Le Chasseur",
        picture: "Chasseur.png",
        pictureCarte:  "chasseur.jpg",
        camps: CAMPS[0],
        typesPouvoir: [TYPESDEPOUVOIR[2]],
        lore:  "chasseurLore.png",
        description: "Il n'a aucun pouvoir de son vivant. En revanche s’il vient à mourir, peut importe la manière, la chasseur doit impérativement désigner un autre joueur qu’il va éliminer en lui tirant dessus avec la dernière cartouche de son fusil. ",
        estActiver: true
    },
    {
        id: 6,
        name: "Cupidon",
        picture: "Cupidon.png",
        pictureCarte:  "cupidon.jpg",
        camps: CAMPS[0],
        typesPouvoir: [TYPESDEPOUVOIR[2], TYPESDEPOUVOIR[0]],
        lore:  "cupidonLore.png",
        description: "Il est réveillé uniquement durant la première nuit, où il va désigner deux personnes qui vont tomber amoureuse l’une de l’autre jusqu’à la fin de la partie. Cupidon peut se désigner comme l’un des deux amoureux s’il le souhaite. Si l’un des deux amoureux est éliminé de la partie, le second meurt de chagrin avec lui immédiatement. Il est interdit pour un amoureux d’éliminer son aimé, ni même de voter contre lui, ni même d’argumenter contre lui. Si les amoureux ne font pas partie du même camps, ils doivent éliminer tout les autres joueurs sinon leurs conditions de victoire ne changent, ils gagnent avec leurs camps.",
        estActiver: true
    },
    
];