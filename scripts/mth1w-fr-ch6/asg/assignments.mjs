// MTH1W-FR chapitre 6 — devoirs (miroir de ../../mth1w-ch6/asg/assignments.mjs) : 10 questions chacun —
// Connaissance et compréhension 1-3, Habiletés de la pensée 4-5, Communication 6-7, Mise en application 8-10.
// [[clé|légende]] dans une ligne est remplacé par une figure (SVG téléversé) à la publication. Rangées trouvées par asgId(6, k).
import { boxPlotDoc, dotPlotDoc, histogramDoc, barChartDoc, scatterDoc } from "../figs6.mjs";
import { planeDoc } from "../../mth1w-ch4/figs4.mjs";
import { asgId } from "../../mth1w-fr/common.mjs";

export const ASSIGNMENTS = [
  { code: "6.1", id: asgId(6, 1), title: "Devoir 6.1 — Les mégadonnées et leurs répercussions", figs: {
      bars: barChartDoc({ bars: [["lun.", 310], ["mar.", 318], ["mer.", 325]], base: 300, top: 330, step: 5, ylabel: "usagers" }) }, lines: [
    "Connaissance et compréhension",
    "1. Classe chaque variable comme qualitative, discrète ou continue : (a) la masse d'un animal de compagnie (b) le nombre d'animaux de compagnie (c) le type d'animal de compagnie.",
    "2. Nomme la méthode d'échantillonnage : (a) chaque 15e détenteur de billet (b) un échantillon aléatoire dans chaque année d'études (c) interroger tes amis.",
    "3. Quelle est la différence entre une population et un échantillon? Donne un exemple de chacun.",
    "Habiletés de la pensée",
    String.raw`4. Un échantillon aléatoire de \(90\) des \(2700\) élèves d'un conseil scolaire révèle que \(36\) vont à l'école à vélo. Estime le nombre d'élèves du conseil qui vont à l'école à vélo.`,
    "5. Le graphique montre le nombre d'usagers de l'autobus pendant trois jours. Combien de fois plus haute la bande du mercredi semble-t-elle par rapport à celle du lundi? Quel est le vrai rapport? [[bars|Diagramme à bandes pour la question 5]]",
    "Communication",
    "6. Explique pourquoi un sondage en ligne sur un site Web de nouvelles n'est pas un moyen fiable de mesurer l'opinion publique.",
    "7. Décris un avantage et un risque liés à l'utilisation, par une ville, des données de localisation des téléphones pour planifier de nouvelles routes.",
    "Mise en application",
    String.raw`8. Une école compte \(450\) élèves de 9e année, \(400\) de 10e année et \(350\) de 11e année. Planifie un échantillon stratifié de \(48\) élèves.`,
    "9. Reformule la question « N'es-tu pas d'accord que la nourriture de la cafétéria est trop chère? » pour qu'elle soit neutre.",
    String.raw`10. Des biologistes marquent \(40\) tortues dans un étang. Plus tard, ils capturent \(50\) tortues, dont \(8\) sont marquées. Estime la population de tortues et énonce une hypothèse.`,
  ] },
  { code: "6.2", id: asgId(6, 2), title: "Devoir 6.2 — Données à une variable et statistiques", figs: {
      dots: dotPlotDoc({ data: [2, 3, 3, 4, 4, 4, 5, 5, 6, 7, 15], lo: 0, hi: 16, step: 1, label: "heures" }),
      box: boxPlotDoc({ five: [18, 26, 31, 37, 52], lo: 15, hi: 55, step: 5, showValues: true, label: "âge" }) }, lines: [
    "Connaissance et compréhension",
    String.raw`1. Trouve la moyenne, la médiane, le mode et l'étendue de \(12, 17, 9, 14, 17, 21, 15\).`,
    String.raw`2. Trouve le résumé en cinq nombres et l'écart interquartile (EI) de \(4, 9, 11, 13, 15, 18, 20, 24\).`,
    "3. Lis la médiane, Q1, Q3 et l'EI sur le diagramme de quartiles. [[box|Diagramme de quartiles pour la question 3]]",
    "Habiletés de la pensée",
    "4. Le diagramme à points montre des heures de bénévolat. Trouve la moyenne et la médiane, vérifie si 15 est une valeur aberrante et décide quelle mesure de tendance centrale est la meilleure. [[dots|Diagramme à points pour la question 4]]",
    String.raw`5. Cinq nombres ont une moyenne de \(20\). Quatre d'entre eux sont \(14, 18, 25, 22\). Trouve le cinquième.`,
    "Communication",
    "6. Explique pourquoi on présente habituellement la médiane plutôt que la moyenne pour les prix des maisons.",
    "7. Explique ce que représentent la boîte et chaque moustache d'un diagramme de quartiles.",
    "Mise en application",
    String.raw`8. Un tableau de fréquences de la taille des familles : \(2\) personnes : \(5\) familles, \(3\) : \(8\), \(4\) : \(9\), \(5\) : \(3\). Trouve la moyenne et la médiane de la taille des familles.`,
    String.raw`9. Temps (s) de deux coureurs lors de cinq courses : A : \(12.1, 12.4, 12.3, 12.2, 12.5\); B : \(11.8, 12.9, 12.0, 13.1, 11.7\). Compare leurs tendances centrales et leurs dispersions. Qui est le plus régulier?`,
    "10. Recueille un ensemble d'au moins 10 mesures personnelles (par exemple, le temps pour te rendre à l'école chaque jour). Trouve le résumé en cinq nombres, trace un diagramme de quartiles et rédige deux phrases qui décrivent les données.",
  ] },
  { code: "6.3", id: asgId(6, 3), title: "Devoir 6.3 — Nuages de points et corrélation", figs: {
      sc: scatterDoc({ pts: [[2, 30], [3, 34], [4, 41], [5, 43], [6, 50], [7, 52], [8, 60], [9, 61], [10, 68]], view: { xmin: 0, xmax: 12, ymin: 0, ymax: 80 }, step: { x: 1, y: 10 }, xlabel: "heures travaillées", ylabel: "gains ($)" }),
      trip: planeDoc({ view: { xmin: 0, xmax: 70, ymin: 0, ymax: 30 }, segs: [{ pts: [[0, 0], [20, 15], [30, 15], [45, 27], [70, 0]] }], step: { x: 10, y: 5 }, xlabel: "temps (min)", ylabel: "km de la maison" }) }, lines: [
    "Connaissance et compréhension",
    "1. Indique le type de corrélation auquel tu t'attendrais entre (a) la température extérieure et les ventes de chocolat chaud (b) la taille et l'envergure des bras (c) la pointure et la couleur préférée.",
    "2. Nomme la variable indépendante et la variable dépendante de la question 1(b).",
    String.raw`3. Une droite la mieux ajustée a pour équation \(y=3.5x+12\). Prédis \(y\) quand \(x=6\).`,
    "Habiletés de la pensée",
    "4. Décris la corrélation dans le nuage de points, trace une droite la mieux ajustée et trouve son équation. Utilise-la pour prédire les gains pour 7.5 heures. [[sc|Nuage de points pour la question 4]]",
    "5. Décris le trajet représenté sur le graphique et trouve la vitesse sur chaque partie en mouvement, en km/h. [[trip|Graphique distance-temps pour la question 5]]",
    "Communication",
    "6. Explique la différence entre l'interpolation et l'extrapolation, et pourquoi l'extrapolation est plus risquée.",
    "7. Les élèves qui jouent d'un instrument de musique tendent à avoir de meilleures notes. Explique pourquoi cela ne prouve pas que la musique cause de meilleures notes.",
    "Mise en application",
    String.raw`8. Une droite la mieux ajustée passe par \((10, 85)\) et \((50, 45)\). Trouve son équation.`,
    String.raw`9. À l'aide de l'équation de la question 8 (données de \(x=10\) à \(50\)), prédis \(y\) pour \(x=30\) et pour \(x=100\). Commente chaque prédiction.`,
    "10. Conçois une enquête pour savoir si le nombre d'heures de sommeil est lié au temps de réaction. Énonce les variables, la façon de recueillir les données et la façon de les analyser.",
  ] },
  { code: "6.4", id: asgId(6, 4), title: "Devoir 6.4 — Le processus de modélisation mathématique", figs: {
      cool: scatterDoc({ pts: [[0, 88], [4, 66], [8, 51], [12, 41], [16, 34], [20, 30]], view: { xmin: 0, xmax: 30, ymin: 0, ymax: 100 }, step: { x: 4, y: 10 }, xlabel: "temps (min)", ylabel: "T (°C)" }),
      hist: histogramDoc({ bins: [[0, 2, 3], [2, 4, 7], [4, 6, 12], [6, 8, 6], [8, 10, 2]], xlabel: "heures de devoirs par semaine" }) }, lines: [
    "Connaissance et compréhension",
    "1. Énumère dans l'ordre les six étapes du processus de modélisation mathématique.",
    String.raw`2. Décide si chaque régularité est linéaire ou exponentielle : (a) \(5, 9, 13, 17\) (b) \(5, 10, 20, 40\) (c) \(64, 32, 16, 8\).`,
    String.raw`3. Évalue \(P=1500(1.04)^t\) pour \(t=5\) (à l'unité près).`,
    "Habiletés de la pensée",
    "4. Les données montrent une boisson qui refroidit dans une pièce à 22 °C. Explique pourquoi un modèle linéaire ne convient pas et propose un meilleur type de modèle. [[cool|Données de refroidissement pour la question 4]]",
    String.raw`5. Un forfait téléphonique coûte \(36\) dollars pour \(300\) Mo et \(48\) dollars pour \(700\) Mo. Selon un modèle linéaire, trouve le coût par Mo et les frais fixes.`,
    "Communication",
    "6. Explique pourquoi les hypothèses doivent être énoncées dans une réponse de modélisation. Donne un exemple d'hypothèse qui pourrait faire échouer un modèle.",
    "7. Utilise l'histogramme pour estimer le nombre moyen d'heures de devoirs, et explique pourquoi ta réponse est une estimation. [[hist|Histogramme pour la question 7]]",
    "Mise en application",
    String.raw`8. Une ville de \(18\,000\) habitants croît de \(3\%\) par année. Écris un modèle et prédis la population dans \(8\) ans.`,
    String.raw`9. Un club scolaire vend \(300\) bracelets à \(5\) dollars chacun; chaque hausse de \(0.50\) dollar fait perdre \(20\) ventes. Trouve le prix qui donne le plus grand revenu.`,
    "10. Estime combien d'argent un élève pourrait économiser en une année en apportant son dîner de la maison plutôt qu'en l'achetant. Montre chaque étape du processus de modélisation, y compris tes hypothèses.",
  ] },
];
