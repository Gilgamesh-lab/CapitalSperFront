import {Statut} from './statut'

export const STATUT: Statut[] = [

    {
        id: 1, // nom "id" obligatoire pour faire fonctionner InMemoryDataService
        nom: "Les Amoureux",
        illustration: "",
        imageLore: "",
        description: "Si l’un des deux amoureux est éliminé de la partie, le second meurt de chagrin avec lui immédiatement. " +
        "Il est interdit pour un amoureux d’éliminer son aimé, ni même de voter contre lui, ni de lui porter préjudice (même pour faire semblant !). " +
        "Si les amoureux ne font pas partie du même camps, ils doivent éliminer tout les autres joueurs sinon leurs conditions de victoire ne changent, " +
        "ils gagnent avec leurs camps.",
        idCarteReferent: 3,
        extraDescription: "Ces deux personnes choisi par Cupidon deviennent alors ",
        periodiciter: false // (si  null = ne se réveille pas, si false = se réveille seulement la première nuit, si true = se réveille chaque nuit)
    },
    {
        id: 2, // nom "id" obligatoire pour faire fonctionner InMemoryDataService
        nom: "L'Infecté",
        illustration: "",
        imageLore: "",
        description: "Malgré qu'il soit un loup-garou, l'Infecté ne sera pas vue comme loup-garous par la voyante en n'est fait il ne change pas de carte même après sa transformation. " +
        "De plus il peut utiliser ses pouvoirs spéciaux (si il en avait) au service de sa nouvelle équipe.",
        idCarteReferent: 17,
        extraDescription: "Ce qui a comme effet de la transformé en loup-garous et plus précisément en  ",
        periodiciter: null // (si  null = ne se réveille pas, si false = se réveille seulement la première nuit, si true = se réveille chaque nuit)
    },


]