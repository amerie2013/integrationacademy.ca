// 6.3 Nuages de points et corrélation — 20 questions faciles + 20 moyennes (miroir de ../../mth1w-ch6/bank/em6_3.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { scatterDoc, planeDoc, FIG } from "./fig.mjs";

export const E = [
  mc(`Quand les heures d'entraînement augmentent, le pourcentage de lancers francs réussis tend à augmenter. C'est une…`, "corrélation positive", ["corrélation négative", "corrélation nulle", "preuve de causalité"], "Les deux augmentent ensemble."),
  mc(`Quand une voiture vieillit, sa valeur tend à diminuer. C'est une…`, "corrélation négative", ["corrélation positive", "corrélation nulle", "causalité prouvée par le graphique"], "L'une augmente, l'autre diminue."),
  mc(`Le numéro de téléphone d'une personne et sa taille présentent…`, "une corrélation nulle", ["une corrélation positive", "une corrélation négative", "une forte corrélation"], "Ils n'ont aucun lien."),
  mc(`Dans un nuage de points, la variable indépendante va sur…`, "l'axe horizontal", ["l'axe vertical", "le titre", "la légende"], "L'axe des x."),
  mc(`Décris la corrélation illustrée.`, "forte positive", ["forte négative", "faible négative", "nulle"], "Les points montent en une bande étroite.", scatterDoc({ pts: [[1, 2], [2, 3.2], [3, 3.8], [4, 5.1], [5, 6], [6, 6.8], [7, 8.1]], view: { xmin: 0, xmax: 8, ymin: 0, ymax: 10 }, step: { x: 1, y: 2 } })),
  tf(`Une droite la mieux ajustée doit passer par chaque point des données.`, false, "Elle suit la tendance au milieu des points."),
  num(`Une droite la mieux ajustée a pour équation y = 2x + 5. Prédis y quand x = 10.`, 25, "2(10) + 5."),
  num(`Trouve la pente d'une droite la mieux ajustée qui passe par (0, 10) et (5, 35).`, 5, "25 ÷ 5."),
  mc(`Prédire une valeur à l'intérieur de l'étendue des données s'appelle…`, "l'interpolation", ["l'extrapolation", "la corrélation", "la causalité"], "Inter = entre."),
  mc(`Prédire une valeur à l'extérieur de l'étendue des données s'appelle…`, "l'extrapolation", ["l'interpolation", "un recensement", "une variable cachée"], "Extra = au-delà."),
  tf(`L'extrapolation est généralement moins fiable que l'interpolation.`, true, "La tendance peut changer à l'extérieur des données."),
  tf(`Une forte corrélation prouve qu'une variable cause l'autre.`, false, "Une corrélation ne prouve pas une causalité."),
  mc(`Une variable non visible qui influence les deux variables d'une corrélation s'appelle…`, "une variable cachée", ["une variable dépendante", "une valeur aberrante", "une droite la mieux ajustée"], "p. ex. la température pour la crème glacée et les coups de soleil."),
  num(`Une personne marche 1200 m en 15 minutes. Quelle est sa vitesse en m/min?`, 80, "1200 ÷ 15."),
  mc(`Sur un graphique distance-temps, un segment horizontal signifie que la personne est…`, "arrêtée", ["en mouvement rapide", "en train de revenir à la maison", "en train d'accélérer"], "La distance ne change pas."),
  mc(`Sur un graphique de la distance de la maison, un segment qui descend signifie que la personne…`, "revient vers la maison", ["s'éloigne de la maison", "est arrêtée", "est à la maison"], "La distance de la maison diminue."),
  num(`Lis le graphique : à quelle distance de la maison la personne est-elle après 20 minutes (km)?`, 4, "Le graphique est horizontal à 4 km de 10 à 30 min.", planeDoc({ view: { xmin: 0, xmax: 50, ymin: 0, ymax: 6 }, segs: [{ pts: [[0, 0], [10, 4], [30, 4], [50, 0]] }], step: { x: 10, y: 1 }, xlabel: "temps (min)", ylabel: "km" })),
  num(`Une droite la mieux ajustée a pour équation y = −3x + 60. Prédis y pour x = 12.`, 24, "−36 + 60."),
  mc(`Quelle paire est la plus susceptible de présenter une corrélation négative?`, "les heures de télé regardées et les heures de sommeil", ["la taille et l'envergure des bras", "l'âge d'un enfant et sa pointure", "la température et les ventes de crème glacée"], "Plus de télé signifie souvent moins de sommeil."),
  tf(`Environ la moitié des points devraient se trouver au-dessus de la droite la mieux ajustée et la moitié en dessous.`, true, "C'est l'équilibre recherché quand on la trace à l'œil."),
];

export const M = [
  num(`Une droite la mieux ajustée passe par (2, 18) et (10, 58). Trouve son ordonnée à l'origine.`, 8, "m = 40/8 = 5; 18 = 10 + b."),
  num(`Avec y = 5x + 8 (x = heures, données de 1 à 12), prédis y pour x = 7.5.`, 45.5, "37.5 + 8."),
  num(`Avec y = 5x + 8, pour quelle valeur de x a-t-on y = 63?`, 11, "5x = 55."),
  mc(`La prédiction pour x = 30 avec y = 5x + 8 (données de 1 à 12) est…`, "une extrapolation, donc moins fiable", ["une interpolation, donc très fiable", "impossible à calculer", "une variable cachée"], "30 est loin à l'extérieur de 1–12."),
  num(`Trouve la pente de la droite la mieux ajustée tracée sur le graphique.`, -2, "Elle passe par (0, 20) et (5, 10).", scatterDoc({ pts: [[1, 18.5], [2, 15.5], [3, 14.5], [4, 11.5], [5, 10.5], [6, 7.5], [7, 6.5]], view: { xmin: 0, xmax: 9, ymin: 0, ymax: 22 }, step: { x: 1, y: 2 }, line: { m: -2, b: 20 } })),
  ms(`Quels énoncés sur la corrélation sont vrais? Choisis toutes les bonnes réponses.`, ["r près de 1 signifie une forte corrélation positive", "r près de 0 signifie peu ou pas de corrélation linéaire", "r près de −1 signifie une forte corrélation négative", "r = 0.9 prouve une causalité"], [0, 1, 2], "r mesure la force et le sens, pas la cause."),
  mc(`Les élèves qui possèdent plus de livres tendent à avoir de meilleures notes. Laquelle est une variable cachée possible?`, "l'importance que la famille accorde à la lecture et le soutien qu'elle y apporte", ["la couleur des livres", "la taille de l'élève", "le jour de la semaine"], "Le milieu familial peut influencer les deux."),
  num(`Une cycliste parcourt 12 km en 40 minutes. Quelle est sa vitesse en km/h?`, 18, "12 ÷ (40/60)."),
  num(`Un graphique distance-temps descend de 9 km à 0 km entre t = 30 min et t = 45 min. Quelle est la vitesse en km/h?`, 36, "9 km en 0.25 h.", FIG.fall9),
  tf(`Deux élèves peuvent tracer des droites la mieux ajustées légèrement différentes pour les mêmes données.`, true, "Le tracé à l'œil varie."),
  mc(`Le nuage de points de la vitesse et de la distance d'arrêt s'incurve vers le haut. Le meilleur modèle est…`, "une courbe, pas une droite", ["une droite horizontale", "une droite qui passe seulement par l'origine", "aucun modèle"], "La relation est non linéaire.", FIG.stopping),
  num(`Une droite la mieux ajustée pour la température T (°C) et les ventes de boissons S est S = 8T − 40. Prédis les ventes à 25 °C.`, 160, "200 − 40."),
  num(`Dans S = 8T − 40, de combien de boissons les ventes augmentent-elles pour chaque degré de plus?`, 8, "La pente est le taux."),
  mc(`Pour S = 8T − 40, la prédiction pour T = 2 °C est de −24 boissons. Cela montre que…`, "l'extrapolation peut donner des résultats impossibles", ["la droite est fausse partout", "les ventes sont négatives en hiver", "il n'y a pas de corrélation"], "Le modèle fonctionne seulement dans l'étendue des données."),
  num(`Lis le graphique : pendant quel intervalle de minutes la personne est-elle arrêtée? Donne la durée de l'arrêt en minutes.`, 15, "Horizontal de 20 à 35 min.", planeDoc({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 2400 }, segs: [{ pts: [[0, 0], [20, 1600], [35, 1600], [45, 2400], [60, 2400]] }], step: { x: 10, y: 400 }, xlabel: "temps (min)", ylabel: "m" })),
  num(`Le graphique montre la distance d'une personne par rapport à sa maison. Trouve la vitesse de 35 à 45 minutes en m/min.`, 80, "800 m en 10 min.", FIG.stop),
  ms(`Quelles situations présentent probablement une corrélation sans causalité? Choisis toutes les bonnes réponses.`, ["les ventes de crème glacée et les noyades", "le nombre de pompiers sur les lieux d'un incendie et les dommages", "les heures d'étude et les notes", "appuyer plus fort sur l'accélérateur et la vitesse"], [0, 1], "La température et l'ampleur de l'incendie sont des variables cachées."),
  mc(`Pour montrer qu'un nouvel engrais rend les plantes plus hautes, la meilleure méthode est…`, "une expérience contrôlée qui compare des plantes avec et sans engrais", ["un sondage auprès de jardiniers", "un nuage de points de deux variables quelconques", "demander à l'entreprise qui vend l'engrais"], "Les expériences permettent de vérifier la causalité."),
  num(`Une droite la mieux ajustée a une pente de 1.5 et passe par (4, 20). Trouve y pour x = 10.`, 29, "20 + 1.5 × 6."),
  tf(`Si les points forment une bande étroite qui descend de gauche à droite, la corrélation est forte et négative.`, true, "Étroite = forte; descendante = négative."),
];
