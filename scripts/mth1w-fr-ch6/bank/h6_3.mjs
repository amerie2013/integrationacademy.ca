// 6.3 Nuages de points et corrélation — 20 questions difficiles (miroir de ../../mth1w-ch6/bank/h6_3.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterDoc, planeDoc, FIG } from "./fig.mjs";

export const TOPIC = "6.3 Nuages de points et corrélation";
export const Q = [
  num(`Une droite la mieux ajustée passe par (1.5, 92) et (7.5, 47). Trouve sa pente.`, -7.5, "−45 ÷ 6."),
  num(`Une droite la mieux ajustée passe par (1.5, 92) et (7.5, 47). Trouve son ordonnée à l'origine.`, 103.25, "Pente −45 ÷ 6 = −7.5; 92 = −11.25 + b."),
  num(`Des données sur les heures d'étude (1 à 10) et les notes donnent y = 4.2x + 51. Deux élèves ont une différence de 3.5 heures d'étude. De combien de points leurs notes prédites diffèrent-elles?`, 14.7, "4.2 × 3.5.", null, 0.006),
  num(`Avec y = 4.2x + 51, combien d'heures le modèle prédit-il pour une note de 93?`, 10, "4.2x = 42."),
  mc(`Avec y = 4.2x + 51, on prédit qu'un élève qui étudie 15 heures obtiendra 114 %. Le meilleur commentaire est…`, "l'extrapolation au-delà de 10 heures donne une note impossible; la tendance doit se stabiliser", ["l'élève obtiendra 114 %", "la droite a la mauvaise pente", "il n'y a pas de corrélation"], "Les notes ne peuvent pas dépasser 100 %."),
  num(`Estime l'ordonnée à l'origine de la droite la mieux ajustée illustrée.`, 2, "Elle passe par (0, 2) et (8, 10).", scatterDoc({ pts: [[1, 3.4], [2, 3.7], [3, 5.2], [4, 5.8], [5, 7.3], [6, 7.6], [7, 9.4], [8, 9.8]], view: { xmin: 0, xmax: 9, ymin: 0, ymax: 12 }, step: { x: 1, y: 2 }, line: { m: 1, b: 2 } })),
  ms(`Pour quels ensembles de données t'attendrais-tu à une forte corrélation? Choisis toutes les bonnes réponses.`, ["l'âge d'un arbre et son nombre de cernes", "la température extérieure et la facture de chauffage", "la date d'anniversaire d'un élève et sa note", "la distance parcourue en voiture et le carburant utilisé"], [0, 1, 3], "La date d'anniversaire et la note n'ont aucun lien."),
  mc(`Les pays qui ont plus de téléviseurs par habitant ont une espérance de vie plus longue. La meilleure explication est…`, "la richesse : les pays plus riches ont plus de téléviseurs et de meilleurs soins de santé", ["les téléviseurs font vivre les gens plus longtemps", "vivre longtemps pousse les gens à acheter des téléviseurs", "c'est une erreur de mesure"], "Une variable cachée."),
  num(`Maya part de chez elle à pied à 90 m/min. Dix minutes plus tard, son frère part à vélo à 240 m/min sur le même chemin. Combien de minutes après le départ de Maya la rattrape-t-il?`, 16, "90t = 240(t − 10) → 150t = 2400."),
  num(`Le graphique distance-temps d'une coureuse va de (0, 0) à (12, 3), puis jusqu'à (30, 6) (minutes, km). Trouve sa vitesse moyenne pour toute la course en km/h.`, 12, "6 km en 0.5 h.", FIG.run),
  num(`Le graphique distance-temps d'une coureuse va de (0, 0) à (12, 3), puis jusqu'à (30, 6) (minutes, km). De combien (km/h) la première partie était-elle plus rapide que la deuxième?`, 5, "3/0.2 = 15 km/h; 3/0.3 = 10 km/h.", FIG.run),
  tf(`Si le coefficient de corrélation est −0.95, les variables ont une relation forte.`, true, "La force dépend de |r|; le signe donne le sens."),
  num(`Trouve la pente du segment entre 20 et 30 minutes (m/min); une valeur négative signifie un retour.`, -150, "De 1500 m jusqu'à 0 en 10 min.", planeDoc({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 1800 }, segs: [{ pts: [[0, 0], [10, 1500], [20, 1500], [30, 0]] }], step: { x: 5, y: 300 }, xlabel: "temps (min)", ylabel: "m de la maison" })),
  mc(`Deux droites la mieux ajustées sont y = 3x + 10 et y = 3.4x + 8 pour des données où 0 ≤ x ≤ 6. Où leurs prédictions diffèrent-elles le plus à l'intérieur des données?`, "pour x = 0", ["pour x = 5", "pour x = 6", "elles ne diffèrent jamais"], "Différence |0.4x − 2| : 2 pour x = 0, 0.4 pour x = 6."),
  num(`L'envergure des bras (cm) est modélisée par y = 0.98x + 3, où x est la taille. Prédis l'envergure d'un élève de 165 cm (à 1 décimale près).`, 164.7, "161.7 + 3.", null, 0.06),
  mc(`Une chercheuse constate que les villes qui ont plus de cafés ont des revenus moyens plus élevés. Ouvrir plus de cafés va…`, "pas nécessairement faire monter les revenus — la corrélation peut refléter le fait que les quartiers plus riches attirent les cafés", ["certainement faire monter les revenus", "faire baisser les revenus", "prouver une causalité"], "Causalité inverse ou variable cachée."),
  num(`Une droite la mieux ajustée a pour équation y = mx + 12 et passe par (5, 37). Trouve m.`, 5, "37 = 5m + 12."),
  num(`Points de données (2, 9), (4, 13), (6, 18), (8, 21). Avec la droite qui passe par le premier et le dernier point, prédis y pour x = 5.`, 15, "m = 12/6 = 2; y = 2x + 5 → 15."),
  ms(`Qu'est-ce qui rend la conclusion tirée d'un nuage de points plus fiable? Choisis toutes les bonnes réponses.`, ["un plus grand échantillon aléatoire", "des points répartis sur une grande étendue de valeurs de x", "la recherche de variables cachées", "tracer la droite par les deux premiers points"], [0, 1, 2], "La droite devrait tenir compte de toute la tendance."),
  num(`Un autobus part à 8 h 00 et parcourt 30 km à 60 km/h, attend 15 min, puis parcourt 45 km à 90 km/h. Combien de minutes après 8 h 00 arrive-t-il?`, 75, "30 + 15 + 30 min."),
];
