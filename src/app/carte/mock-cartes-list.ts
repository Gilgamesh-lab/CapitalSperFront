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
        nomDuBatiment: null,
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
        description: "C’est le loup garou de base du jeu. Chaque nuit à l'appel du meneur, ils se réveillent pour dévorer un villageois.",
        typeDeCarte: TYPESDECARTES[0],
        nomDuBatiment: null,
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
        description: "Chaque nuit à l'appel du meneur, elle a la capacité de voir clairement la carte d'un joueur de son choix.",
        typeDeCarte: TYPESDECARTES[0],
        nomDuBatiment: null,
        estActiver: true
    },
    {
        id: 4,
        nom: "La Sorcière",
        illustration: "Sorciere.png",
        imageCarte:  "soso.jpg",
        camps: CAMPS[0],
        typesPouvoir: [TYPESDEPOUVOIR[0], TYPESDEPOUVOIR[1], TYPESDEPOUVOIR[2]],
        imageLore:  "sosoLore.png",
        description: "Elle est réveillée par le meneur chaque nuit après les loups garous tant qu’elle a au moins une de ses deux potions. "+ 
        "La potion de vie qui peut lui permet de ressusciter la victime des loups garous y compris elle même, et la potion de mort qui lui permet d’éliminer un joueur. " +
        "Tant qu'elle a sa potion de vie, le meneur lui montre la victime des loups garous. "  +
        "Elle peut utiliser chaque potion une seule fois dans toute la partie, hormis cela, elle n'a pas d'autre restriction sur l'utilisation de ses potions. " ,
        

        typeDeCarte: TYPESDECARTES[0],
        nomDuBatiment: null,
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
        "le chasseur doit impérativement désigner un autre joueur qu’il va éliminer en lui tirant dessus avec la dernière cartouche de son fusil. ",
        typeDeCarte: TYPESDECARTES[0],
        nomDuBatiment: null,
        estActiver: true
    },
    {
        id: 6,
        nom: "Cupidon",
        illustration: "Cupidon.png",
        imageCarte:  "cupidon.jpg",
        camps: CAMPS[0],
        typesPouvoir: [TYPESDEPOUVOIR[0], TYPESDEPOUVOIR[2]],
        imageLore:  "cupidonLore.png",
        description: "Il est réveillé uniquement durant la première nuit, où il va désigner deux personnes qui vont tomber amoureuse l’une de l’autre jusqu’à la fin de la partie. " +
        "Cupidon peut se désigner comme l’un des deux amoureux s’il le souhaite. " +
        "Si l’un des deux amoureux est éliminé de la partie, le second meurt de chagrin avec lui immédiatement. " +
        "Il est interdit pour un amoureux d’éliminer son aimé, ni même de voter contre lui, ni de lui porter préjudice (même pour faire semblant !). " +
        "Si les amoureux ne font pas partie du même camps, ils doivent éliminer tout les autres joueurs sinon leurs conditions de victoire ne changent, " +
        "ils gagnent avec leurs camps.",
        typeDeCarte: TYPESDECARTES[0],
        nomDuBatiment: null,
        estActiver: true
    },
    {
        id: 7,
        nom: "Le Salvateur",
        illustration: "Salvateur.png",
        imageCarte:  "salvateurCarte.png",
        camps: CAMPS[0],
        typesPouvoir: [TYPESDEPOUVOIR[1]],
        imageLore:  "salvateurLore.png",
        description: "Chaque nuit, le meneur le réveille avant les loups et lui demande de choisir une personne qui sera protégée contre la morsure des loups garous, " +
        "qui eux ne sauront pas que cette personne est protégée, et donc au petit matin la personne protégée sera vivante même si elle a été attaqué par les loups garous. " +
        "Le salvateur a le droit de se protéger lui-même. Il n’a pas le droit de protéger la même personne deux nuits de suite. " +
        "S'il est amoureux, le salvateur n’est pas obligé de protéger son amoureux.",
        typeDeCarte: TYPESDECARTES[0],
        nomDuBatiment: null,
        estActiver: true
    },
    {
        id: 8,
        nom: "Le Montreur d'Ours",
        illustration: "Montreurs_d'ours.png",
        imageCarte:  "montreurs_d_oursCarte.png",
        camps: CAMPS[0],
        typesPouvoir: [TYPESDEPOUVOIR[0]],
        imageLore:  "montreurs_d_oursLore.png",
        description: "Chaque matin juste après la révélation des éventuels victimes nocturnes, si au moins un loup garou est ou devient le voisin du montreur d'ours, "+
        "alors le meneur grogne. Seule les voisins encore en vie sont pris en compte. Si le montreur d’ours est infecté, " +
        "alors le meneur grogne tout les jours tant que le montreur d’ours n’est pas éliminé.",
        typeDeCarte: TYPESDECARTES[0],
        nomDuBatiment: null,
        estActiver: true
    },
    {
        id: 9,
        nom: "Le Corbeau",
        illustration: "Corbeau.png",
        imageCarte:  "corbeauCarte.png",
        camps: CAMPS[0],
        typesPouvoir: [TYPESDEPOUVOIR[2]],
        imageLore:  "corbeauLore.png",
        description: "Chaque nuit, le Corbeau est réveillé par le meneur, et il a la possibilité de faire circuler des rumeurs sur un joueur qu’il suspecte le plus d’être un loup garou. "+
        "Le meneur dépose alors le marqueur «affiche anonyme» devant ce joueur, qui aura automatiquement deux voix de plus contre lui lors du vote de la prochaine phase de jour. "+
        "Le Corbeau n’est pas obligé de médire quelqu’un, il peut refuser la proposition du meneur pour éviter d’handicaper un joueur. " ,
        typeDeCarte: TYPESDECARTES[0],
        nomDuBatiment: null,
        estActiver: true
    },
    {
        id: 10,
        nom: "Le Pyromane",
        illustration: "Pyromane.png",
        imageCarte:  "pyromaneCarte.png",
        camps: CAMPS[0],
        typesPouvoir: [TYPESDEPOUVOIR[0], TYPESDEPOUVOIR[1], TYPESDEPOUVOIR[2], TYPESDEPOUVOIR[4]],
        imageLore:  "pyromaneLore.png",
        description: "À l'appel de son rôle, une seule fois dans la partie, il peut mettre le feu à un bâtiment ce qui aura pour effet de le détruire définitivement. "+
        "Le meneur posera alors le marqueur «feu» sur le bâtiment. Son ex-occupant n'est pas éliminé du jeu mais il devient un vagabond. " +
        "Si le propriétaire du bâtiment est la victime des loups-garous cette nuit là, alors celui-ci est épargné, de plus le premier loup-garou à droite de la victime est éliminé.",
        typeDeCarte: TYPESDECARTES[0],
        nomDuBatiment: null,
        estActiver: false
    },
    {
        id: 11,
        nom: "Les Deux Soeurs",
        illustration: "Deux_soeurs.png",
        imageCarte:  "les_deux_soeurs.png",
        camps: CAMPS[0],
        typesPouvoir: [TYPESDEPOUVOIR[0]],
        imageLore:  "deux_soeursLore.png",
        description: "Lorsqu’elles sont présentes dans le jeu, deux joueurs ont la même carte et sont donc les deux sœurs. "+
        "La première nuit à l’appel du meneur, elles se réveillent ensemble et se reconnaissent. "+
        "Contrairement aux amoureux, leurs destins ne sont pas liés, si l’une des deux meurt, la seconde ne meurt pas avec sa sœur. ",
        typeDeCarte: TYPESDECARTES[0],
        nomDuBatiment: null,
        estActiver: true
    },
    {
        id: 12,
        nom: "L'Infect Père des Loups",
        illustration: "Infect_pere_des_loups.png",
        imageCarte:  "Infect_pere_des_loupsCarte.png",
        camps: CAMPS[1],
        typesPouvoir: [TYPESDEPOUVOIR[1],TYPESDEPOUVOIR[2]],
        imageLore:  "Infect_pere_des_loupsLore.png",
        description: "Chaque nuit, il se réveille et dévore avec les autres Loups-Garous. Mais une fois dans la partie, s’il le désire à l’appel du meneur, " + 
        "après que les loups-garous se soit endormis, il lève la main. Le meneur va alors toucher la tête de la victime, cela signifie que la victime n’est pas dévorée, mais infecté. " + 
        "Ce qui comme effet de la transformé en loup-garous et plus précisément en l’infecté. " +
        "Malgré qu'il soit un loup-garou, l'Infecté ne sera pas vue comme loup-garous par la voyante et il peut utiliser ses pouvoirs spéciaux (si il en avait) " +
        "au service de sa nouvelle équipe.",
        typeDeCarte: TYPESDECARTES[0],
        nomDuBatiment: null,
        estActiver: true
    },
    {
        id: 13,
        nom: "Le Capitaine",
        illustration: "maire.png",
        imageCarte:  "maireCarte.png",
        camps: null,
        typesPouvoir: [TYPESDEPOUVOIR[2]],
        imageLore:  "maireLore.png",
        description: "Le capitaine ou plus communément appelée maire est élue par vote à la majorité relative. " +
        "Le capitaine possède 2 voix au lieu d’une, de plus c’est lui qui tranche en cas d’égalité. En cas de décès, dans son dernier souffle il désigne son successeur.",
        typeDeCarte: TYPESDECARTES[1],
        nomDuBatiment: null,
        estActiver: true
    },
    {
        id: 14,
        nom: "Les Vagabonds",
        illustration: "vagabond.png",
        imageCarte:  "vagabondCarte.png",
        camps: null,
        typesPouvoir: [TYPESDEPOUVOIR[5]],
        imageLore:  "vagabondLore.png",
        description: "Vous êtes un vagabonds et n'avez donc pas de bâtiments mais vous êtes immunisés aux pouvoirs de l'Institutrice, du Barbier, du Corbeau et du Pyromane. " +
        "De plus le Bailli peut vous proposer un bâtiment que vous pouvez refuser. Attention, l'élimination du Bailli entraîne la fin de la distribution des logements.",
        typeDeCarte: TYPESDECARTES[2],
        nomDuBatiment: null,
        estActiver: true
    },
    {
        id: 15,
        nom: "Les Fermiers",
        illustration: "fermiers.png",
        imageCarte:  "fermes.png",
        camps: null,
        typesPouvoir: [TYPESDEPOUVOIR[3]],
        imageLore:  "loreFermiers.png",
        description: "Dès le deuxième tour, les Fermiers débattent et votent pour désigner parmis eux le Capitaine. "+
        "S'il est éliminé, le Capitaine désigne son successeur uniquement parmi les Fermiers survivants. "+
        "Si le dernier Fermier est éliminé, il n'y a plus de Capitaine.",
        typeDeCarte: TYPESDECARTES[2],
        nomDuBatiment: 'Les Fermes',
        estActiver: true
    },
    {
        id: 16,
        nom: "L'Institutrice",
        illustration: "institutrice.jpeg",
        imageCarte:  "l_ecole.png",
        camps: null,
        typesPouvoir: [TYPESDEPOUVOIR[4]],
        imageLore:  "institutriceLore.png",
        description: "Chaque jour, juste avant le vote du village, l'Institutrice peut empêcher jusqu'à deux joueurs de voter durant ce tour.  "+ 
        "Elle ne vote jamais. L'Institutrice ne peut empêcher aucun Vagabond de voter.",
        typeDeCarte: TYPESDECARTES[2],
        nomDuBatiment: "L'ecole",
        estActiver: true
    },
    {
        id: 17,
        nom: "Le Châtelain",
        illustration: "noble.png",
        imageCarte:  "manoir.png",
        camps: null,
        typesPouvoir: [TYPESDEPOUVOIR[1]],
        imageLore:  "chatelainLore.png",
        description: "Après n'importe quel vote, le Châtelain peut, sur demande de la future victime, gracier un joueur désigné par le vote du village. " +
        "Ce joueur ne sera alors pas éliminé et ne révèle donc pas sa carte Personnage. Un Châtelain peut évidemment se gracier lui même...",
        typeDeCarte: TYPESDECARTES[2],
        nomDuBatiment: "Le manoir",
        estActiver: true
    },
    {
        id: 18,
        nom: "Le Bailli",
        illustration: "bailli.png",
        imageCarte:  "maison_du_bailli.png",
        camps: null,
        typesPouvoir: [TYPESDEPOUVOIR[3]],
        imageLore:  "bailliLore.png",
        description: "Lorsqu'un bâtiment se libère, le Bailli peut l'attribuer au Vagabond de son choix. " +
        "Ce Vagabond rend son jeton Baluchon et récupère le jeton associé au bâtiment s'il a déjà été utilisé. " +
        "L'élimination du Bailli entraîne la fin de la distribution des logements.",
        typeDeCarte: TYPESDECARTES[2],
        nomDuBatiment: "La maison du Bailli",
        estActiver: true
    },
    {
        id: 19,
        nom: "Le Barbier",
        illustration: "barbier.png",
        imageCarte:  "echoppe_du_barbier.png",
        camps: null,
        typesPouvoir: [TYPESDEPOUVOIR[2]],
        imageLore:  "barbierLore.png",
        description: "N'importe quand durant la journée, le Barbier peut éliminer un joueur de son choix. " +
        "Si le joueur éliminé n'est pas un Loup-Garou, il est aussitôt lynché par le village sinon il est félicité par le village et survit à son acte. "+
        "Le Barbier ne peut pas éliminer un Vagabond.",
        typeDeCarte: TYPESDECARTES[2],
        nomDuBatiment: "L'échoppe du Barbier",
        estActiver: true
    },
    {
        id: 20,
        nom: "Le Confesseur",
        illustration: "pretre.png",
        imageCarte:  "l_église.png",
        camps: null,
        typesPouvoir: [TYPESDEPOUVOIR[0]],
        imageLore:  "confesseurLore.png",
        description: "N'importe quand durant la journée, même après la désignation par vote du joueur éliminé, "+
        "le Confesseur désigne un joueur qui a l'obligation immédiate de lui dire à l'écart et discrètement s'il s'est réveillé durant la nuit précédente.",
        typeDeCarte: TYPESDECARTES[2],
        nomDuBatiment: "L'église",
        estActiver: true
    },
    {
        id: 21,
        nom: "Le Boulanger",
        illustration: "boulanger.png",
        imageCarte:  "boulangerie.png",
        camps: null,
        typesPouvoir: [TYPESDEPOUVOIR[3]],
        imageLore:  "boulangerLore.png",
        description: "Chaque jour, juste avant le vote du village, "+ 
        "le boulanger peut augmenter de 2 la voix d'un autre joueur de son choix mais en contrepartie il ne peut pas voter durant ce vote.",
        typeDeCarte: TYPESDECARTES[2],
        nomDuBatiment: "La boulangerie",
        estActiver: true
    },
    {
        id: 22,
        nom: "Le Rebouteux",
        illustration: "rebouteux.png",
        imageCarte:  "masure.png",
        camps: null,
        typesPouvoir: [TYPESDEPOUVOIR[3]],
        imageLore:  "rebouteuxLore.png",
        description: "N'importe quand durant la journée, le Rebouteux peut rendre à un joueur le pouvoir unique de son bâtiment qu'il a déjà utilisé. " +
        "Le meneur rend au joueur le jeton qui rétablit le pouvoir lié à son bâtiment (pour un nouvel usage unique).",
        typeDeCarte: TYPESDECARTES[2],
        nomDuBatiment: "La masure",
        estActiver: true
    }
];
