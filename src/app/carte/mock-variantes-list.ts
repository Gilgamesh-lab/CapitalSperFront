import { variante } from "./variante";

export const VARIANTES: variante[] = [
    {
        id: 1,
        nom: "Clair de Lune",
        estActiver: true,
        illustration:  "reglesDuJeu/clairDeLune.jpg",
        description: "Dans un environnement obscur où l’on pourrait presque entendre le hurlement des loups, disposer devant chaque joueur une petite bougie allumée. " +
         "Dorénavant, chaque matin le meneur souffle la bougie posée devant la ou les victimes nocturnes. " +
         "Et chaque soir, après le vote, la victime du village éteint sa propre bougie. "+ 
        "Il fera de plus en plus sombre dans le village, et les survivants seront alors les seuls bien visibles, tout prêts à être dévorés. "
    },
    {
        id: 2,
        nom: "Murs-murs",
        estActiver: true,
        illustration:  "reglesDuJeu/tableau.png",
        description: "Chaque habitant de Thiercelieux encore en vie inscrit une courte phrase de son choix sur un petit papier et le donne au meneur. " +
        "L’auteur de chaque graffiti doit rester anonyme, mais chacun est libre de son contenue : soupçons, avertissements, commentaire, dénonciations, compliments, déclaration d’amour… " +
        "Lorsqu’il les a tous récupérés, le meneur lit tous ces graffitis après les avoir mélangés. "+
        "Les habitants peuvent alors s’endormir l’esprit encore tout bouleversé par ces petis messages. " 
    }





];