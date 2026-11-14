// 6.2 Données à une variable et statistiques — 20 questions faciles + 20 moyennes (miroir de ../../mth1w-ch6/bank/em6_2.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { boxPlotDoc, histogramDoc, dotPlotDoc, FIG } from "./fig.mjs";

export const E = [
  num(`Trouve la moyenne de 4, 7, 9, 10.`, 7.5, "30 ÷ 4."),
  num(`Trouve la médiane de 3, 8, 5, 12, 6.`, 6, "En ordre : 3, 5, 6, 8, 12."),
  num(`Trouve la médiane de 2, 9, 4, 7.`, 5.5, "En ordre : 2, 4, 7, 9 : (4 + 7) ÷ 2."),
  num(`Trouve le mode de 5, 3, 5, 8, 2, 5, 3.`, 5, "5 apparaît trois fois."),
  num(`Trouve l'étendue de 14, 22, 9, 30, 17.`, 21, "30 − 9."),
  num(`Un diagramme de quartiles indique Q1 = 20 et Q3 = 32. Trouve l'écart interquartile (EI).`, 12, "Q3 − Q1.", FIG.box20),
  num(`Lis la médiane sur le diagramme de quartiles.`, 26, "Le trait à l'intérieur de la boîte.", boxPlotDoc({ five: [12, 20, 26, 31, 40], lo: 10, hi: 42, step: 4, showValues: true })),
  num(`Quel pourcentage des données se trouve à l'intérieur de la boîte d'un diagramme de quartiles?`, 50, "La boîte contient la moitié centrale."),
  num(`Quel pourcentage des données se trouve sous Q1?`, 25, "Q1 sépare le quart inférieur."),
  mc(`Quelle mesure de tendance centrale est la plus touchée par une valeur aberrante?`, "la moyenne", ["la médiane", "le mode", "aucune d'elles"], "Chaque valeur entre dans le calcul de la moyenne."),
  tf(`La médiane est toujours une des valeurs des données.`, false, "Avec un nombre pair de valeurs, c'est la moyenne des deux valeurs du milieu."),
  mc(`Dans un histogramme, les bandes…`, "se touchent, parce que les données sont continues", ["sont séparées par des espaces", "sont tracées dans n'importe quel ordre", "représentent des catégories"], "Les intervalles sont côte à côte."),
  num(`Trouve Q1 pour 1, 3, 4, 6, 8, 9, 11, 13.`, 3.5, "Moitié inférieure : 1, 3, 4, 6."),
  num(`Trouve Q3 pour 1, 3, 4, 6, 8, 9, 11, 13.`, 10, "Moitié supérieure : 8, 9, 11, 13."),
  mc(`Le résumé en cinq nombres est…`, "min, Q1, médiane, Q3, max", ["moyenne, médiane, mode, étendue, EI", "Q1, Q2, Q3, Q4, Q5", "min, moyenne, max, étendue, mode"], "Il permet de tracer le diagramme de quartiles."),
  num(`Combien de valeurs le diagramme à points montre-t-il?`, 10, "Compte chaque point.", dotPlotDoc({ data: [2, 3, 3, 4, 4, 4, 5, 5, 6, 8], lo: 0, hi: 10, step: 1 })),
  num(`Trouve la moyenne de 10, 10, 10, 30.`, 15, "60 ÷ 4."),
  tf(`Un ensemble de données peut avoir plus d'un mode.`, true, "Deux valeurs peuvent être à égalité pour la plus grande fréquence."),
  mc(`Pour des saveurs de crème glacée préférées, la seule mesure de tendance centrale qui a du sens est…`, "le mode", ["la moyenne", "la médiane", "l'étendue"], "On ne peut ni faire la moyenne ni ordonner des données qualitatives."),
  num(`La moyenne de 5 nombres est 8. Quelle est leur somme?`, 40, "5 × 8."),
];

export const M = [
  num(`Trouve la médiane de 23, 18, 30, 25, 18, 27, 21, 29.`, 24, "En ordre : 18, 18, 21, 23, 25, 27, 29, 30 : (23 + 25) ÷ 2."),
  num(`Pour 11, 15, 16, 18, 20, 22, 25, 27, 40, trouve Q1.`, 15.5, "Moitié inférieure : 11, 15, 16, 18 (la médiane 20 est laissée de côté)."),
  num(`Pour 11, 15, 16, 18, 20, 22, 25, 27, 40, trouve Q3.`, 26, "Moitié supérieure : 22, 25, 27, 40."),
  num(`Pour Q1 = 15.5 et Q3 = 26, quelle est la borne supérieure des valeurs aberrantes (Q3 + 1.5 × EI)?`, 41.75, "EI = 10.5; 26 + 15.75."),
  tf(`Pour des données où Q1 = 15.5 et Q3 = 26, la valeur 40 est aberrante.`, false, "La borne est 41.75 et 40 < 41.75."),
  num(`Quatre résultats de tests sont 68, 74, 81, 77. Quel résultat au cinquième test donne une moyenne de 76?`, 80, "5 × 76 = 380; 380 − 300."),
  num(`Un tableau de fréquences : 1 animal : 6 élèves; 2 animaux : 4; 3 animaux : 2. Trouve le nombre moyen d'animaux (à 2 décimales près).`, 1.67, "(6 + 8 + 6) ÷ 12 = 20 ÷ 12.", null, 0.006),
  num(`Estime la moyenne à partir de l'histogramme en utilisant les milieux des intervalles.`, 35, "(25·5 + 35·10 + 45·5) ÷ 20 = 700 ÷ 20.", histogramDoc({ bins: [[20, 30, 5], [30, 40, 10], [40, 50, 5]], xlabel: "résultat" })),
  ms(`Lesquelles résistent aux valeurs aberrantes (en sont à peine touchées)? Choisis toutes les bonnes réponses.`, ["la médiane", "l'EI", "la moyenne", "l'étendue"], [0, 1], "La moyenne et l'étendue utilisent les valeurs extrêmes."),
  mc(`Les prix des maisons d'une ville sont 210, 225, 240, 250, 260 et 1200 (milliers de dollars). La meilleure mesure d'un prix typique est…`, "la médiane, 245", ["la moyenne, environ 398", "l'étendue, 990", "le mode"], "Le manoir tire la moyenne vers le haut."),
  num(`Chaque valeur d'un ensemble de données augmente de 7. L'ancienne moyenne était 52. Quelle est la nouvelle moyenne?`, 59, "Ajouter une constante déplace la moyenne de cette constante."),
  num(`Chaque valeur d'un ensemble de données augmente de 7. L'ancien EI était 12. Quel est le nouvel EI?`, 12, "Un déplacement ne change pas la dispersion."),
  num(`La moyenne de 6 nombres est 15. On retire un nombre, 30. Trouve la moyenne des autres.`, 12, "90 − 30 = 60; 60 ÷ 5."),
  mc(`Le diagramme de quartiles A a un EI de 6 et le diagramme B, un EI de 15 (mêmes médianes). Quel énoncé est vrai?`, "la moitié centrale de B est plus dispersée", ["A contient plus de données", "B a une tendance centrale plus élevée", "A a plus de valeurs aberrantes"], "L'EI mesure la dispersion de la moitié centrale.", FIG.boxAB),
  num(`Trouve l'EI à partir du diagramme de quartiles.`, 14, "Q3 − Q1 = 48 − 34.", boxPlotDoc({ five: [25, 34, 40, 48, 60], lo: 20, hi: 64, step: 4, showValues: true })),
  num(`Trouve l'étendue des données du diagramme de quartiles.`, 35, "60 − 25.", FIG.box25),
  tf(`Deux ensembles de données peuvent avoir la même moyenne mais des dispersions très différentes.`, true, "p. ex. 50, 50, 50 et 0, 50, 100."),
  num(`Une classe de 20 élèves a une moyenne de 72; une autre classe de 30 élèves a une moyenne de 82. Trouve la moyenne des 50 élèves.`, 78, "(1440 + 2460) ÷ 50."),
  mc(`Quel graphique présente le mieux les tailles de 300 élèves?`, "un histogramme", ["un diagramme circulaire", "un pictogramme", "un diagramme à bandes avec espaces"], "Données quantitatives continues."),
  num(`Pointures : 7, 8, 8, 9, 9, 9, 10, 10, 11. Quelle pointure (le mode) un magasin devrait-il stocker le plus?`, 9, "9 apparaît trois fois."),
];
