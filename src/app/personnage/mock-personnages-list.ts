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
        description: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablavbla",
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
        description: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablavbla",
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
        description: "blabl",
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
        description: "Elle est réveillée par le meneur chaque nuit après les loups garous tant qu’elle a moins une potion. Le meneur lui montre alors la victime des loups garous. La sorcière dispose de deux potions : la potion de « VIE » qui peut lui permet de ressusciter la victime des loups garous, et une potion de « MORT » qui lui permet d’éliminer un joueur. Elle peut utiliser chaque potion une seule fois dans toute la partie. Elle peut très bien ne pas utiliser ses potions pendant une nuit. Elle peut très bien n’utiliser qu’une seule potion durant la nuit, ou bien utiliser les deux la même nuit si elle le souhaite. La sorcière est autorisée à utiliser sa potion de « VIE » sur elle même si les loups garous avaient décider de la dévorer durant leur festin nocturne. Si la sorcière a utilisé sa potion de « VIE », le meneur ne lui montreras pas la victime des loups garous les nuits suivantes.",
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
        description: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablavbla",
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
        description: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablavblablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablavbla",
        estActiver: true
    },
    
];