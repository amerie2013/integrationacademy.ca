// MTH1W-FR 6.5 — Révision du chapitre 6 (miroir de ../mth1w-ch6/l6_5.mjs; nouvelle leçon placée après 6.4)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice } from "./lib.mjs";
import { boxPlot, scatter } from "./figs6.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "6.5 Révision du chapitre 6";
export const ID = lessonId(6, 5);

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 6 — Les données",
    overview: String.raw`Cette page rassemble le chapitre avant le test : l'idée clé de chaque leçon sur un seul écran, des questions où tu dois choisir le bon outil, des exemples à plusieurs étapes, une pratique mixte et une liste pour vérifier si tu es prêt. Fais-la après les leçons 6.1 à 6.4 et retourne à toute leçon où tu bloques.`,
    goals: [
      "te rappeler l'idée clé et l'erreur fréquente de chaque leçon;",
      "choisir la bonne méthode d'échantillonnage, la bonne statistique, le bon graphique ou le bon modèle pour une question;",
      "résoudre des problèmes de données à plusieurs étapes;",
      "vérifier si tu es prêt pour le test du chapitre.",
    ],
    curriculum: "D1.1–D1.3, D2.1–D2.5 (tout le domaine D)",
    prior: [
      [String.raw`Médiane de \(4, 9, 2, 7\)?`, String.raw`En ordre \(2, 4, 7, 9\) : \(5.5\).`],
      ["Un sondage en ligne est-il un échantillon juste?", "Habituellement non : c'est un échantillon à réponse volontaire."],
      [String.raw`Rapports de \(2, 6, 18, 54\)?`, String.raw`\(\times3\) : exponentiel.`],
    ],
    words: [
      ["Échantillon représentatif", "ressemble à la population", "aléatoire stratifié"],
      ["Résumé en cinq nombres", "min, Q1, médiane, Q3, max", "diagramme de quartiles"],
      ["Droite la mieux ajustée", "droite de tendance au milieu des points", "\\(y=mx+b\\)"],
      ["Modèle", "équation qui représente une situation", "\\(P=12\\,000(1.05)^t\\)"],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple typique", "Attention"], [
    ["6.1 Mégadonnées", "types de données; les échantillons aléatoires, systématiques et stratifiés sont justes; biais; répercussions des mégadonnées", "28 sur 80 dans l'échantillon → 35 % de l'école", "un plus grand échantillon biaisé reste biaisé"],
    ["6.2 Une variable", "moyenne, médiane, mode; étendue, quartiles, EI; diagrammes de quartiles; valeurs aberrantes au-delà de 1.5 × EI", "résumé en cinq nombres 7, 10.5, 15, 19.5, 25", "ordonner d'abord les données"],
    ["6.3 Nuages de points", "sens et force de la corrélation; droite la mieux ajustée; interpoler ou extrapoler", "\\(P=-50a+475\\)", "corrélation ≠ causalité"],
    ["6.4 Modélisation", "comprendre, formuler des hypothèses, construire, analyser, vérifier, raffiner", "différences → linéaire; rapports → exponentiel", "énoncer les hypothèses et le domaine"],
  ])),

  section("📌 Quel outil?", keyIdea(String.raw`<strong>Tu recueilles des données?</strong> échantillon aléatoire ou stratifié, questions neutres. <strong>Une variable?</strong> tendance centrale (moyenne/médiane) et dispersion (EI), diagramme de quartiles ou histogramme. <strong>Deux variables?</strong> nuage de points, corrélation, droite la mieux ajustée. <strong>Tu prédis l'avenir?</strong> un modèle — vérifie les différences ou les rapports, puis teste-le.`)),

  practice([
    q("graphique", "Quel graphique montre le mieux la distribution des temps de réaction de 200 élèves (données continues)?", choice(["un histogramme", "un diagramme circulaire", "un diagramme à bandes avec espaces", "un pictogramme"], 0),
      "Des données continues en intervalles.", ["Les histogrammes présentent des données continues."], "histogramme"),
    q("tendance centrale", "Les prix des maisons d'un quartier comprennent un manoir. La meilleure mesure d'un prix typique est…", choice(["la médiane", "la moyenne", "l'étendue", "le maximum"], 0),
      "Quelle mesure résiste aux valeurs aberrantes?", ["La médiane n'est pas tirée par le manoir."], "médiane"),
    q("échantillon", "Pour sonder équitablement une école au sujet d'un nouvel horaire, avec des nombres d'élèves différents dans chaque année d'études, la meilleure méthode est…", choice(["un échantillon aléatoire stratifié par année d'études", "interroger le conseil des élèves", "un sondage en ligne à réponse volontaire", "interroger une seule classe"], 0),
      "Chaque année d'études devrait être représentée proportionnellement.", ["Échantillonnage aléatoire stratifié."], "stratifié"),
    q("relation", "Pour voir si l'envergure des bras et la taille sont liées, tu devrais tracer un…", choice(["nuage de points", "diagramme de quartiles", "diagramme circulaire", "histogramme"], 0),
      "Deux variables quantitatives.", ["Les nuages de points présentent deux variables."], "nuage de points"),
    q("modèle", String.raw`Un tableau donne \(y : 7, 11, 15, 19\) pour \(x=0,1,2,3\). Le meilleur modèle est…`, choice(["linéaire", "exponentiel", "quadratique", "aucun modèle"], 0),
      "Vérifie les premières différences.", ["Différence constante de 4 : linéaire."], "linéaire"),
  ]),

  examples([
    ["De l'échantillon à la population", String.raw`Un échantillon aléatoire stratifié de \(150\) des \(18\,000\) adolescents d'une ville révèle que \(42\) font régulièrement du bénévolat. Estime le nombre d'adolescents bénévoles dans la ville et explique pourquoi la méthode convient.`,
      [String.raw`<b>Règle.</b> estimation pour la population \(=\) proportion de l'échantillon \(\times\) taille de la population.`,
        String.raw`<b>Proportion de l'échantillon :</b> \(\frac{42}{150}=0.28\).`,
        String.raw`<b>Estimation :</b> \(0.28\times18\,000=5040\).`,
        String.raw`<b>Pourquoi la méthode fonctionne :</b> l'échantillonnage aléatoire stratifié conserve chaque groupe (âge, quartier) dans les mêmes proportions que dans la ville, donc l'échantillon devrait être représentatif.`],
      String.raw`environ \(5040\) adolescents`],
    ["Diagrammes de quartiles et valeurs aberrantes", String.raw`Temps (s) pour résoudre un casse-tête : \(28, 31, 33, 35, 36, 38, 40, 41, 44, 75\). Trouve le résumé en cinq nombres, vérifie si \(75\) est une valeur aberrante et décris l'effet de son retrait sur la moyenne et la médiane.`,
      [String.raw`<b>Médiane.</b> \(n=10\) (pair) : moyenne de la 5e et de la 6e valeur : \(\frac{36+38}{2}=37\).`,
        String.raw`<b>Quartiles.</b> Moitié inférieure \(28, 31, 33, 35, 36\) : \(Q_1=33\). Moitié supérieure \(38, 40, 41, 44, 75\) : \(Q_3=41\). EI \(=41-33=8\).`,
        String.raw`<b>Test de valeur aberrante :</b> borne supérieure \(Q_3+1.5\times\text{EI}=41+12=53\). Puisque \(75>53\), c'est une valeur aberrante.`,
        String.raw`<b>Moyenne.</b> Avec \(75\) : \(401\div10=40.1\). Sans : \(326\div9\approx36.2\). Elle baisse d'environ \(3.9\).`,
        String.raw`<b>Médiane sans \(75\) :</b> \(n=9\), la 5e valeur, \(36\). Elle ne baisse que de \(1\). La médiane résiste aux valeurs aberrantes; la moyenne, non.`],
      String.raw`\(28, 33, 37, 41, 75\); \(75\) est une valeur aberrante; la moyenne baisse d'environ \(3.9\), la médiane de seulement \(1\)`,
      boxPlot({ five: [28, 33, 37, 41, 44], lo: 25, hi: 80, step: 5, outliers: [75], showValues: true })],
    ["Droite la mieux ajustée et prédiction", String.raw`Des données sur la température extérieure (°C) et les ventes quotidiennes de boissons à un kiosque suivent la droite \(S=6.5T-20\) pour des températures de \(15\) à \(32\) °C. Prédis les ventes à \(26\) °C et à \(5\) °C, et commente.`,
      [String.raw`<b>À \(26\) °C :</b> \(S=6.5(26)-20=169-20=149\) boissons. \(26\) est entre \(15\) et \(32\) : interpolation, raisonnable.`,
        String.raw`<b>À \(5\) °C :</b> \(S=6.5(5)-20=32.5-20=12.5\), environ \(12\) boissons.`,
        String.raw`<b>Commentaire :</b> \(5\) est sous les données : extrapolation. La tendance peut ne pas tenir par temps froid, donc c'est moins fiable.`],
      String.raw`\(149\) boissons; environ \(12\) à \(5\) °C, mais moins fiable`,
      scatter({ pts: [[26, 149], [5, 12.5]], view: { xmin: 0, xmax: 35, ymin: 0, ymax: 200 }, step: { x: 5, y: 40 }, xlabel: "température (°C)", ylabel: "boissons vendues", line: { m: 6.5, b: -20, dash: true }, w: 320 })],
    ["Choisir un modèle", String.raw`Une vidéo a eu \(2000\), \(3000\), \(4500\), \(6750\) visionnements aux jours \(0\) à \(3\). Choisis un modèle, prédis le jour \(6\) et commente combien de temps le modèle peut durer.`,
      [String.raw`<b>Vérifier.</b> Différences \(1000, 1500, 2250\) : pas constantes. Rapports : \(\frac{3000}{2000}=1.5\), \(\frac{4500}{3000}=1.5\), \(\frac{6750}{4500}=1.5\) : constants, donc exponentiel.`,
        String.raw`<b>Modèle :</b> \(V=2000(1.5)^d\).`,
        String.raw`<b>Jour 6 :</b> \(2000(1.5)^6=2000(11.390625)\approx22\,781\) visionnements.`,
        String.raw`<b>Limites :</b> le nombre de personnes intéressées est limité, donc la croissance exponentielle ne peut pas durer; elle va ralentir.`],
      String.raw`\(V=2000(1.5)^d\); environ \(22\,800\) au jour 6`],
    ["Évaluer une affirmation", "Une publicité affirme : « 9 dentistes sur 10 recommandent notre dentifrice. » Le sondage a interrogé 10 dentistes qui vendent déjà la marque. Évalue l'affirmation.",
      [String.raw`<b>Questions à se poser :</b> Quelle est la taille de l'échantillon? Comment a-t-il été choisi? Quelqu'un profite-t-il du résultat?`,
        String.raw`<b>Taille de l'échantillon :</b> seulement 10 dentistes, beaucoup trop peu pour représenter tous les dentistes.`,
        String.raw`<b>Sélection :</b> des dentistes qui vendent la marque ont une raison de la favoriser : biais d'échantillonnage.`,
        String.raw`<b>Conclusion :</b> on ne peut pas généraliser l'affirmation à l'ensemble des dentistes.`],
      "pas convaincant : échantillon minuscule et biaisé"],
  ]),

  section("📌 Révision mixte", String.raw`<p>Chaque question fait appel à plus d'une leçon.</p>`),

  practice([
    q("estimation", String.raw`Dans un échantillon aléatoire de \(60\) élèves, \(15\) vont à l'école à pied. Sur \(840\) élèves, environ combien y vont à pied?`, num(210),
      "Utilise la proportion de l'échantillon.", [String.raw`\(\frac{15}{60}=0.25\); \(0.25\times840=210\).`], String.raw`\(210\)`),
    q("EI", String.raw`Trouve l'EI de \(5, 8, 9, 12, 14, 15, 18, 22\).`, num(8),
      "Q1 et Q3 sont les médianes des moitiés.", [String.raw`\(Q_1=8.5\), \(Q_3=16.5\) : \(8\).`], String.raw`\(8\)`),
    q("moyenne", String.raw`La moyenne de cinq nombres est \(12\). Quatre d'entre eux sont \(9, 15, 10, 14\). Trouve le cinquième.`, num(12),
      "Total = 5 × moyenne.", [String.raw`\(60-48=12\).`], String.raw`\(12\)`),
    q("droite", String.raw`Une droite la mieux ajustée passe par \((10, 35)\) et \((30, 85)\). Quelle est son ordonnée à l'origine?`, num(10),
      "D'abord la pente, puis b.", [String.raw`\(m=\frac{50}{20}=2.5\); \(35=25+b\Rightarrow b=10\).`], String.raw`\(10\)`),
    q("exponentiel", String.raw`Une colonie de \(500\) bactéries double chaque heure. Combien y en a-t-il après \(4\) heures?`, num(8000),
      "Multiplie par 2 quatre fois.", [String.raw`\(500\times2^4=8000\).`], String.raw`\(8000\)`),
  ]),

  section("📌 Suis-je prêt pour le test?", String.raw`<ul style="list-style:none;padding-left:0;">
    ${[
      ["6.1", "Je peux classer des données, décrire des méthodes d'échantillonnage, reconnaître le biais et les graphiques trompeurs, et discuter des répercussions des mégadonnées."],
      ["6.2", "Je peux trouver la moyenne, la médiane, le mode, les quartiles et l'EI, tracer des diagrammes de quartiles, repérer les valeurs aberrantes et lire des histogrammes."],
      ["6.3", "Je peux décrire une corrélation, tracer et utiliser une droite la mieux ajustée, et expliquer pourquoi corrélation n'est pas causalité."],
      ["6.4", "Je peux appliquer le processus de modélisation, choisir un modèle linéaire ou exponentiel, puis le tester et le raffiner."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  widget("statsExplorer"),

  wrapUp({
    qas: [
      ["Comment devrais-je étudier pour ce test?", "Fais la révision mixte sans tes notes. Pour chaque erreur, retourne à l'explorateur et à la pratique de cette leçon, puis essaie les problèmes de niveau 3 des fiches d'exercices pour tes deux leçons les plus faibles."],
      ["Quelles sont les erreurs les plus fréquentes?", "Ne pas ordonner les données avant de trouver la médiane, inclure la médiane dans les moitiés pour les quartiles, relier les points d'un nuage de points, se fier à une extrapolation et conclure à une causalité à partir d'une corrélation."],
      ["Combien dois-je écrire dans une réponse de modélisation?", "Assez pour que quelqu'un d'autre puisse te suivre : les hypothèses, le modèle et pourquoi tu l'as choisi, le calcul, et une phrase qui vérifie si la réponse a du sens."],
      ["Qu'est-ce qui fait une bonne comparaison écrite de deux ensembles de données?", "Compare une mesure de tendance centrale et une mesure de dispersion, avec des nombres et le contexte : « La médiane de la classe A était 3 points plus élevée, mais son EI était plus grand, donc ses résultats étaient moins réguliers. »"],
      ["Comment ce chapitre se relie-t-il à la suite?", "Les statistiques reviennent en gestion des données en 11e et 12e année; la modélisation avec des relations linéaires et exponentielles se poursuit de la 10e à la 12e année."],
    ],
    summary: [
      "Recueillir équitablement : échantillons aléatoires ou stratifiés, questions neutres.",
      "Résumer : tendance centrale (moyenne/médiane), dispersion (EI), diagrammes de quartiles, histogrammes, valeurs aberrantes.",
      "Relier : nuages de points, corrélation, droite la mieux ajustée; méfie-toi de l'extrapolation et des affirmations de causalité.",
      "Modéliser : différences → linéaire, rapports → exponentiel; tester et raffiner.",
    ],
    next: "Passe le test du chapitre 6. Le chapitre 7 porte sur la littératie financière.",
  }),
];
