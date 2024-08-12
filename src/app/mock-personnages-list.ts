import { Personnage } from './personnage';
  
export const Personnages: Personnage[] = [
    {
        idDeRole: 1,
        name: "Simple-villageois",
        picture: "../assets/images/Simple-villageois.png",
        pictureCarte:  "../assets/images/sv.jpg",
        camps: "Village",
        typesPouvoir: [],
        created: new Date()
    },
    {
        idDeRole: 2,
        name: "Loup-garou",
       picture: "../assets/images/Loup-garou.png",
       pictureCarte:  "../assets/images/ww.jpg",
       camps: "Loups-Garous",
       typesPouvoir: ["Mort"],
        created: new Date()
    },
    {
        idDeRole: 3,
        name: "Voyante",
        picture: "../assets/images/Voyante.png",
        pictureCarte:  "../assets/images/vovo.jpg",
        camps: "Village",
        typesPouvoir: ["Voyance"],
        created: new Date()
    },
    {
        idDeRole: 4,
        name: "Sorcière",
       picture: "../assets/images/Sorciere.png",
       pictureCarte:  "../assets/images/soso.jpg",
       camps: "Village",
       typesPouvoir: ["Vie", "Mort", "Voyance"],
        created: new Date()
    },
    {
        idDeRole: 5,
        name: "Chasseur",
        picture: "../assets/images/Chasseur.png",
        pictureCarte:  "../assets/images/chasseur.jpg",
        camps: "Village",
        typesPouvoir: ["Mort"],
        created: new Date()
    },
    {
        idDeRole: 6,
        name: "Cupidon",
        picture: "../assets/images/Cupidon.png",
        pictureCarte:  "../assets/images/cupidon.jpg",
        camps: "Village",
        typesPouvoir: ["Mort", "Voyance"],
        created: new Date()
    }
    ,
];