import {Statut} from './statut'

export const STATUT: Statut[] = [

    {
        id: 1, 
        nom: "Les Amoureux",
        illustration: "statut/LesAmoureux.png",
        imageLore: "lore/AmoureuxLore.png",
        description: "Si l’un des deux amoureux est éliminé de la partie, le second meurt de chagrin avec lui immédiatement. " +
        "Il est interdit pour un amoureux d’éliminer son aimé, ni même de voter contre lui, ni de lui porter préjudice (même pour faire semblant !). " +
        "Si les amoureux ne font pas partie du même camps, ils doivent éliminer tout les autres joueurs sinon leurs conditions de victoire ne changent, " +
        "ils gagnent avec leurs camps.",
        idCarteReferent: 3,
        extraDescription: "Ces deux personnes choisi par Cupidon deviennent alors ",
        periodiciter: true // (si  false = ne se réveille pas,  si true = se réveille après sa carte personnage référent)
    },
    {
        id: 2, 
        nom: "L'Infecté",
        illustration: "statut/L'Infecter.png",
        imageLore: "lore/infecterLore.png",
        description: "Malgré qu'il soit un loup-garou, l'Infecté ne sera pas vue comme loup-garous par la voyante en n'est fait il ne change pas de carte même après sa transformation. " +
        "De plus il peut utiliser ses pouvoirs spéciaux (si il en avait) au service de sa nouvelle équipe.",
        idCarteReferent: 17,
        extraDescription: "Ce qui a comme effet de la transformé en loup-garous et plus précisément en  ",
        periodiciter: false // (si  false = ne se réveille pas,  si true = se réveille après sa carte personnage référent)
    },


]