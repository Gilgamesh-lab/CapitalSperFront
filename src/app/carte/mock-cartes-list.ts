import { CAMPS } from './mock-camps-list';
import { TYPESDEPOUVOIR } from './mock-typesDePouvoirs-list';
import { Carte } from './carte';
import { TYPESDECARTES } from './mock-typesDeCartes-list';


export const CARTES: Carte[] = [
    {
        id: 1,
        nom: "Les Simples Villageois",
        illustration: "Simple-villageois.png",
        imageCarte:  "sv.jpg",
        camps: CAMPS[0],
        typesPouvoir: null,
        imageLore:  "svLore.png",
        description: "C’est le villageois de base du jeu, il ne possède aucun pouvoir spécial. " +
        "De ce fait, il peut porter des accusations et se mettre en danger sans pénaliser son camp.",
        typeDeCarte: TYPESDECARTES[0],
        estActiver: true
    },
    {
        id: 2,
        nom: "Les Simples Loups-Garous",
        illustration: "Loup-garou.png",
        imageCarte:  "ww.jpg",
        camps: CAMPS[1],
        typesPouvoir: [TYPESDEPOUVOIR[2]],
        imageLore:  "wwLore.png",
        description: "C’est le loup garou de base du jeu.",
        typeDeCarte: TYPESDECARTES[0],
        estActiver: true
    },
    {
        id: 3,
        nom: "La Voyante",
        illustration: "Voyante.png",
        imageCarte:  "vovo.jpg",
        camps: CAMPS[0],
        typesPouvoir: [TYPESDEPOUVOIR[0]],
        imageLore:  "vovoLore.png",
        description: "Chaque nuit, lorsque le meneur la réveille, elle a la capacité de voir clairement le rôle du joueur de son choix.",
        typeDeCarte: TYPESDECARTES[0],
        estActiver: true
    },
    {
        id: 4,
        nom: "La Sorcière",
        illustration: "Sorciere.png",
        imageCarte:  "soso.jpg",
        camps: CAMPS[0],
        typesPouvoir: [TYPESDEPOUVOIR[1], TYPESDEPOUVOIR[2], TYPESDEPOUVOIR[0]],
        imageLore:  "sosoLore.png",
        description: "Elle est réveillée par le meneur chaque nuit après les loups garous tant qu’elle au moins une potion. "+ 
        "Le meneur lui montre alors la victime des loups garous. La sorcière dispose de deux potions : " + 
        "la potion de  VIE  qui peut lui permet de ressusciter la victime des loups garous, et une potion de  MORT  qui lui permet d’éliminer un joueur. " +
        "Elle peut utiliser chaque potion une seule fois dans toute la partie. Elle peut très bien ne pas utiliser ses potions pendant une nuit. " +
        "Elle peut très bien n’utiliser qu’une seule potion durant la nuit, ou bien utiliser les deux la même nuit si elle le souhaite. " +
        "La sorcière est autorisée à utiliser sa potion de  VIE sur elle même si les loups garous avaient décider de la dévorer durant leur festin nocturne. " +
        "Si la sorcière a utilisé sa potion de  VIE , le meneur ne lui montreras pas la victime des loups garous les nuits suivantes.",
        typeDeCarte: TYPESDECARTES[0],
        estActiver: true
    },
    {
        id: 5,
        nom: "Le Chasseur",
        illustration: "Chasseur.png",
        imageCarte:  "chasseur.jpg",
        camps: CAMPS[0],
        typesPouvoir: [TYPESDEPOUVOIR[2]],
        imageLore:  "chasseurLore.png",
        description: "Il n'a aucun pouvoir de son vivant. En revanche s’il vient à mourir, peut importe la manière, "+ 
        "la chasseur doit impérativement désigner un autre joueur qu’il va éliminer en lui tirant dessus avec la dernière cartouche de son fusil. ",
        typeDeCarte: TYPESDECARTES[0],
        estActiver: true
    },
    {
        id: 6,
        nom: "Cupidon",
        illustration: "Cupidon.png",
        imageCarte:  "cupidon.jpg",
        camps: CAMPS[0],
        typesPouvoir: [TYPESDEPOUVOIR[2], TYPESDEPOUVOIR[0]],
        imageLore:  "cupidonLore.png",
        description: "Il est réveillé uniquement durant la première nuit, où il va désigner deux personnes qui vont tomber amoureuse l’une de l’autre jusqu’à la fin de la partie. " +
        "Cupidon peut se désigner comme l’un des deux amoureux s’il le souhaite. " +
        "Si l’un des deux amoureux est éliminé de la partie, le second meurt de chagrin avec lui immédiatement. " +
        "Il est interdit pour un amoureux d’éliminer son aimé, ni même de voter contre lui, ni même d’argumenter contre lui. " +
        "Si les amoureux ne font pas partie du même camps, ils doivent éliminer tout les autres joueurs sinon leurs conditions de victoire ne changent, " +
        "ils gagnent avec leurs camps.",
        typeDeCarte: TYPESDECARTES[0],
        estActiver: true
    },
    {
        id: 7,
        nom: "Le Capitaine",
        illustration: "maire.png",
        imageCarte:  "maireCarte.png",
        camps: null,
        typesPouvoir: [TYPESDEPOUVOIR[2]],
        imageLore:  "maireLore.png",
        description: "Le capitaine ou plus communément appelée maire est élue par vote à la majorité relative. " +
        "Le capitaine possède 2 voix au lieu d’une, de plus c’est lui qui tranche en cas d’égalité. En cas de décès, dans son dernier souffle il désigne son successeur",
        typeDeCarte: TYPESDECARTES[1],
        estActiver: true
    }
];
