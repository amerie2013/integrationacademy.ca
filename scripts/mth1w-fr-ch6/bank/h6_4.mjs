// 6.4 Le processus de modélisation mathématique — 20 questions difficiles (miroir de ../../mth1w-ch6/bank/h6_4.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterDoc } from "./fig.mjs";

export const TOPIC = "6.4 Le processus de modélisation mathématique";
export const Q = [
  num(`On vend 300 t-shirts à 12 dollars; chaque hausse de 1 dollar fait perdre 15 ventes. Quel prix donne le plus grand revenu (dollars)?`, 16, "R = (12 + x)(300 − 15x) est maximal pour x = 4 : 16 dollars × 240 = 3840."),
  num(`On vend 300 t-shirts à 12 dollars; chaque hausse de 1 dollar fait perdre 15 ventes. Quel est le plus grand revenu (dollars)?`, 3840, "R = (12 + x)(300 − 15x) est maximal pour x = 4 : 16 × 240."),
  num(`Une culture passe de 800 à 1800 cellules en 2 heures avec un rapport horaire constant. Quel est le rapport horaire?`, 1.5, "800r² = 1800 → r² = 2.25."),
  num(`Avec un rapport de 1.5 par heure à partir de 800 cellules, après combien d'heures entières la culture dépasse-t-elle 10 000 cellules pour la première fois?`, 7, "800(1.5)^6 ≈ 9113; 800(1.5)^7 ≈ 13 669."),
  num(`Un thé refroidit selon T = 21 + 74(0.8)^t (°C, minutes). Trouve la température après 5 minutes (à 1 décimale près).`, 45.2, "74 × 0.32768 ≈ 24.2; + 21.", null, 0.06),
  num(`Avec T = 21 + 74(0.8)^t, après combien de minutes entières le thé descend-il sous 30 °C pour la première fois?`, 10, "74(0.8)^t < 9 → (0.8)^t < 0.1216 : t = 10 donne 0.107."),
  mc(`Le modèle A (linéaire) et le modèle B (exponentiel) correspondent tous deux à deux points de données. Pour des prédictions lointaines…`, "ils peuvent différer beaucoup; les modèles exponentiels croissent beaucoup plus vite", ["ils concordent toujours", "le modèle linéaire croît plus vite", "aucun ne peut prédire"], "La croissance exponentielle finit par dépasser n'importe quelle droite."),
  num(`Données d'un forfait téléphonique : 200 min coûtent 32 dollars, 500 min coûtent 50 dollars. Selon un modèle linéaire, combien coûtent 800 min (dollars)?`, 68, "Taux 0.06 par min; frais 20 : 20 + 48."),
  num(`Une ville de 120 000 habitants croît de 2.5 % par année. Estime sa population après 10 ans (au millier près).`, 154000, "120 000 × 1.025¹⁰ ≈ 153 610.", null, 600),
  ms(`Une estimation du nombre de pizzas mangées par une école en une année exige quelles hypothèses? Choisis toutes les bonnes réponses.`, ["le nombre d'élèves", "la fréquence à laquelle un élève typique mange de la pizza à l'école", "le nombre de pointes par pizza", "la couleur des boîtes de pizza"], [0, 1, 2], "La couleur des boîtes n'influe pas sur le nombre."),
  num(`Un modèle de la hauteur d'une balle est h = 1.5 + 14t − 4.9t² (m, s). Trouve h pour t = 2 (à 1 décimale près).`, 9.9, "1.5 + 28 − 19.6.", null, 0.06),
  tf(`Pour le modèle de la balle h = 1.5 + 14t − 4.9t², une prédiction pour t = 5 s (h ≈ −51 m) montre que le domaine du modèle se termine quand la balle touche le sol.`, true, "Une hauteur ne peut pas être négative : le domaine s'arrête à l'atterrissage."),
  num(`Estime où la courbe illustrée croise y = 50 (à la valeur entière de x la plus proche).`, 6, "La courbe est y = 3(1.6)^x; 3(1.6)^6 ≈ 50.3, donc x ≈ 6.", scatterDoc({ pts: [[0, 3], [1, 4.8], [2, 7.7], [3, 12.3], [4, 19.7], [5, 31.5]], view: { xmin: 0, xmax: 8, ymin: 0, ymax: 80 }, step: { x: 1, y: 10 }, curve: (x) => 3 * 1.6 ** x })),
  num(`Un prêt de 1000 dollars augmente de 8 % par année, composé annuellement. Combien doit-on après 5 ans (dollars, à 2 décimales près)?`, 1469.33, "1000 × 1.08⁵.", null, 0.006),
  mc(`Un modèle de la hauteur d'un arbre h = 0.6t + 1.2 (m, années) correspond aux arbres de 1 à 15 ans. Pourquoi n'est-il pas fiable pour t = 200?`, "les arbres cessent de grandir à une hauteur maximale, donc la tendance linéaire ne peut pas se poursuivre", ["la pente est trop petite", "les arbres rapetissent", "l'ordonnée à l'origine est fausse"], "La croissance se stabilise."),
  num(`L'eau s'écoule d'un réservoir de sorte que le volume diminue de moitié toutes les 3 minutes, à partir de 640 L. Combien en reste-t-il après 12 minutes (L)?`, 40, "Quatre réductions de moitié : 640 ÷ 16."),
  num(`Les coûts d'une campagne de financement sont de 240 dollars plus 3 dollars par article; les articles se vendent 8 dollars. Combien d'articles faut-il vendre pour un profit de 400 dollars?`, 128, "5n − 240 = 400."),
  num(`Deux forfaits téléphoniques : A = 0.10m + 25, B = 0.15m + 15 (dollars). Pour combien de minutes coûtent-ils le même prix?`, 200, "0.05m = 10."),
  mc(`Quand les erreurs d'un modèle augmentent à mesure que x augmente, le problème le plus probable est…`, "le mauvais type de modèle (p. ex. linéaire au lieu de courbe)", ["trop de données", "l'arrondissement de la réponse finale", "l'utilisation d'un nuage de points"], "Une régularité systématique dans les erreurs signifie que la forme est mauvaise."),
  num(`Un modèle exponentiel y = a·b^x passe par (0, 250) et (2, 160). Trouve b.`, 0.8, "250b² = 160 → b² = 0.64."),
];
