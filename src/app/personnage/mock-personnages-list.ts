import { Personnage } from './personnage';
  
export const PERSONNAGES: Personnage[] = [
    {
        id: 1,
        name: "Les Simples Villageois",
        picture: "Simple-villageois.png",
        pictureCarte:  "sv.jpg",
        camps: "Village",
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
       camps: "Loups-Garous",
       typesPouvoir: ["Mort"],
        lore:  "wwLore.png",
        description: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablavbla",
        estActiver: true
    },
    {
        id: 3,
        name: "La Voyante",
        picture: "Voyante.png",
        pictureCarte:  "vovo.jpg",
        camps: "Village",
        typesPouvoir: ["Voyance"],
        lore:  "vovoLore.png",
        description: "blabl",
        estActiver: true
    },
    {
        id: 4,
        name: "La Sorcière",
       picture: "Sorciere.png",
       pictureCarte:  "soso.jpg",
       camps: "Village",
       typesPouvoir: ["Vie", "Mort", "Voyance"],
       lore:  "sosoLore.png",
        description: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablavbla",
        estActiver: true
    },
    {
        id: 5,
        name: "Le Chasseur",
        picture: "Chasseur.png",
        pictureCarte:  "chasseur.jpg",
        camps: "Village",
        typesPouvoir: ["Mort"],
        lore:  "chasseurLore.png",
        description: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablavbla",
        estActiver: true
    },
    {
        id: 6,
        name: "Cupidon",
        picture: "Cupidon.png",
        pictureCarte:  "cupidon.jpg",
        camps: "Village",
        typesPouvoir: ["Mort", "Voyance"],
        lore:  "cupidonLore.png",
        description: "blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablavblablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablavbla",
        estActiver: true
    },
    
];