// MTH1W-FR 6.3 — Nuages de points et corrélation (miroir de ../mth1w-ch6/l6_3.mjs) : nuages de points, corrélation,
// droite la mieux ajustée, interpolation/extrapolation, corrélation et causalité, graphiques qui racontent une histoire
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { scatter } from "./figs6.mjs";
import { plane } from "../mth1w-ch4/figs4.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "6.3 Nuages de points et corrélation";
export const ID = lessonId(6, 3);

const pos = [[1, 3], [2, 4.5], [3, 4], [4, 6], [5, 6.5], [6, 8], [7, 7.5], [8, 9.5]];
const neg = [[1, 9], [2, 8.5], [3, 7], [4, 6.5], [5, 5], [6, 4.5], [7, 3.5], [8, 2]];
const none = [[1, 5], [2, 8], [3, 3], [4, 6], [5, 4], [6, 8.5], [7, 2.5], [8, 6]];

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Nuages de points et corrélation",
    overview: String.raw`Étudier davantage fait-il monter les notes? Une voiture perd-elle de la valeur en vieillissant? Un nuage de points montre deux variables à la fois pour que tu puisses voir si elles sont liées. Dans cette leçon, tu vas décrire le sens et la force d'une relation, tracer une droite la mieux ajustée, utiliser son équation pour faire des prédictions et comprendre pourquoi une relation entre deux variables ne prouve pas que l'une cause l'autre. Tu vas aussi lire des graphiques qui racontent une histoire, comme un trajet sur un graphique distance-temps.`,
    goals: [
      "reconnaître la variable indépendante et la variable dépendante, et tracer un nuage de points;",
      "décrire une corrélation par son sens (positive, négative, nulle) et sa force;",
      "tracer une droite la mieux ajustée et trouver son équation à partir de deux points de la droite;",
      "faire des prédictions par interpolation et par extrapolation, et juger de leur fiabilité;",
      "expliquer la différence entre corrélation et causalité;",
      "décrire la situation représentée par un graphique distance-temps.",
    ],
    curriculum: "D1.3 (données à deux variables : nuages de points, corrélation, droites les mieux ajustées), D2 (modélisation à partir de données), C1 (relations)",
    prior: [
      [String.raw`Pente de la droite qui passe par \((2, 10)\) et \((6, 22)\)?`, String.raw`\(\frac{12}{4}=3\).`],
      [String.raw`Si \(y=3x+4\), trouve \(y\) quand \(x=5\).`, String.raw`\(19\).`],
      ["Quelle variable va sur l'axe horizontal?", "La variable indépendante."],
    ],
    words: [
      ["Nuage de points", "un graphique de couples (x, y) pour deux variables", "heures d'étude et note"],
      ["Corrélation", "une relation entre deux variables", "positive, négative, nulle"],
      ["Droite la mieux ajustée", "une droite qui passe par le milieu des points", "la moitié au-dessus, la moitié en dessous"],
      ["Interpolation", "prédire à l'intérieur de l'étendue des données", "plus fiable"],
      ["Extrapolation", "prédire au-delà des données", "moins fiable"],
      ["Causalité", "une variable change directement l'autre", "exige une expérience"],
    ],
  }),

  section("📌 La corrélation : sens et force", String.raw`
  <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:6px;">
  ${scatter({ pts: pos, view: { xmin: 0, xmax: 9, ymin: 0, ymax: 10 }, step: { x: 1, y: 2 }, w: 230 }, "Positive : quand x augmente, y tend à augmenter.")}
  ${scatter({ pts: neg, view: { xmin: 0, xmax: 9, ymin: 0, ymax: 10 }, step: { x: 1, y: 2 }, w: 230 }, "Négative : quand x augmente, y tend à diminuer.")}
  ${scatter({ pts: none, view: { xmin: 0, xmax: 9, ymin: 0, ymax: 10 }, step: { x: 1, y: 2 }, w: 230 }, "Corrélation nulle : aucune tendance claire.")}
  </div>
  ${keyIdea(String.raw`La <strong>force</strong> décrit à quel point les points suivent une droite : <strong>forte</strong> (bande étroite), <strong>modérée</strong>, <strong>faible</strong> (nuage diffus). Le coefficient de corrélation \(r\) (entre \(-1\) et \(1\)) la mesure : près de \(\pm1\), elle est forte; près de \(0\), elle est nulle.`)}`),

  section("📌 La droite la mieux ajustée", String.raw`
  <ol><li>Trace une droite qui suit la tendance, avec à peu près autant de points au-dessus qu'en dessous. Elle n'a pas besoin de passer par un point des données.</li>
  <li>Choisis deux points <strong>sur ta droite</strong> (pas des points des données), éloignés l'un de l'autre.</li>
  <li>Trouve la pente \(m=\frac{\Delta y}{\Delta x}\) et l'ordonnée à l'origine \(b\) : l'équation est \(y=mx+b\).</li></ol>
  <p>La pente est le taux dans le contexte : pour le temps d'étude et les notes, « environ \(4\) points de pourcentage par heure de plus ».</p>`),

  widget("scatterFit"),

  section("📌 Corrélation n'est pas causalité", String.raw`
  <p>Les ventes de crème glacée et les accidents de baignade sont corrélés positivement — mais la crème glacée ne cause pas d'accidents. Les deux augmentent quand il fait chaud : la température est une <strong>variable cachée</strong>. Deux variables peuvent aussi être corrélées par coïncidence, ou la cause peut aller dans l'autre sens.</p>
  ${table(["Explication possible", "Exemple"], [
    ["x cause y", "plus d'heures de pratique → plus de lancers francs réussis"],
    ["une variable cachée influence les deux", "pointure et niveau de lecture chez les jeunes enfants (les deux augmentent avec l'âge)"],
    ["coïncidence", "deux tendances sans lien qui augmentent par hasard pendant les mêmes années"],
    ["y cause x (causalité inverse)", "les gens en meilleure forme font plus d'exercice parce qu'ils aiment ça"],
  ])}
  ${keyIdea("Pour démontrer une causalité, il faut une expérience contrôlée, pas seulement une corrélation.")}`),

  section("📌 Des graphiques qui racontent une histoire", String.raw`
  <p>Un graphique distance-temps décrit un trajet : un segment qui monte signifie qu'on s'éloigne, un segment horizontal signifie qu'on est arrêté, un segment qui descend signifie qu'on revient. L'inclinaison donne la vitesse.</p>
  ${plane({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 12 }, segs: [{ pts: [[0, 0], [15, 6], [25, 6], [35, 10], [60, 0]] }], step: { x: 10, y: 2 }, xlabel: "temps (min)", ylabel: "distance de la maison (km)" }, "Une balade à vélo : aller jusqu'à 6 km, un arrêt de 10 minutes, continuer jusqu'à 10 km, puis retour à la maison.")}
  ${watchOut([
    "Une droite la mieux ajustée suit la tendance; on ne relie pas les points un à un.",
    "Utilise des points de la droite, pas des points des données, pour trouver son équation.",
    "Extrapoler loin au-delà des données peut donner des prédictions absurdes.",
    "Une forte corrélation ne prouve toujours pas une relation de cause à effet.",
  ])}`),

  examples([
    ["Décrire une corrélation", String.raw`Un tableau donne l'âge d'un vélo d'occasion (en années) et son prix (en dollars) : \((1, 420)\), \((2, 360)\), \((3, 330)\), \((4, 260)\), \((5, 230)\), \((6, 170)\). Décris la corrélation.`,
      [String.raw`<b>Quoi décrire.</b> Une corrélation a un <i>sens</i> (positive : les deux augmentent ensemble; négative : l'une augmente pendant que l'autre diminue) et une <i>force</i> (à quel point les points sont proches d'une droite).`,
        String.raw`<b>Variables.</b> Indépendante (\(x\)) : l'âge. Dépendante (\(y\)) : le prix, parce que le prix dépend de l'âge.`,
        String.raw`<b>Sens.</b> Quand l'âge augmente, le prix diminue : <b>négative</b>.`,
        String.raw`<b>Force.</b> Le prix baisse de \(60, 30, 70, 30, 60\) chaque année : c'est assez régulier, donc les points sont proches d'une droite : <b>forte</b>.`],
      "une forte corrélation négative",
      scatter({ pts: [[1, 420], [2, 360], [3, 330], [4, 260], [5, 230], [6, 170]], view: { xmin: 0, xmax: 7, ymin: 0, ymax: 500 }, step: { x: 1, y: 100 }, xlabel: "âge (années)", ylabel: "prix ($)", w: 300 })],
    ["Équation d'une droite la mieux ajustée", String.raw`Pour les données des vélos, une droite la mieux ajustée passe par \((1.5, 400)\) et \((5.5, 200)\). Trouve son équation et interprète la pente.`,
      [String.raw`<b>Formules.</b> \[m=\frac{y_2-y_1}{x_2-x_1},\qquad y=mx+b\]`,
        String.raw`<b>Pente :</b> \(m=\frac{200-400}{5.5-1.5}=\frac{-200}{4}=-50\).`,
        String.raw`<b>Ordonnée à l'origine.</b> Remplace \((1.5, 400)\) dans \(P=-50a+b\) : \(400=-75+b\), donc \(b=475\).`,
        String.raw`<b>Vérification avec l'autre point :</b> \(-50(5.5)+475=-275+475=200\) ✓.`,
        String.raw`<b>Interpréter.</b> Pente \(-50\) : le vélo perd environ 50 dollars de valeur par année. Ordonnée à l'origine \(475\) : le prix d'un vélo neuf selon le modèle.`],
      String.raw`\(P=-50a+475\)`,
      scatter({ pts: [[1, 420], [2, 360], [3, 330], [4, 260], [5, 230], [6, 170]], view: { xmin: 0, xmax: 7, ymin: 0, ymax: 500 }, step: { x: 1, y: 100 }, xlabel: "âge (années)", ylabel: "prix ($)", line: { m: -50, b: 475, dash: true }, w: 300 })],
    ["Interpoler ou extrapoler?", String.raw`Utilise \(P=-50a+475\) pour prédire le prix d'un vélo qui a (a) \(3.5\) ans, (b) \(12\) ans. Commente chaque prédiction.`,
      [String.raw`<b>Définitions.</b> <i>Interpolation</i> : prédire à l'intérieur de l'étendue des données (ici de 1 à 6 ans). <i>Extrapolation</i> : prédire à l'extérieur, ce qui est moins fiable.`,
        String.raw`<b>(a)</b> \(-50(3.5)+475=-175+475=300\) dollars. \(3.5\) est entre 1 et 6 : interpolation, raisonnable.`,
        String.raw`<b>(b)</b> \(-50(12)+475=-600+475=-125\) dollars. \(12\) est à l'extérieur des données : extrapolation, et un prix négatif est impossible.`,
        String.raw`<b>Où le modèle cesse de fonctionner :</b> \(-50a+475=0\) quand \(a=9.5\). La tendance ne peut pas se poursuivre au-delà d'environ 9.5 ans.`],
      String.raw`(a) \(300\) dollars (b) \(-125\) — n'a pas de sens`],
    ["Corrélation ou causalité?", "Une étude révèle que les élèves qui déjeunent le matin ont de meilleures notes. Le déjeuner cause-t-il de meilleures notes? Propose une variable cachée.",
      [String.raw`<b>Définitions.</b> Une <i>corrélation</i> signifie que deux variables varient ensemble. La <i>causalité</i> signifie que changer l'une change vraiment l'autre. Une <i>variable cachée</i> influence les deux.`,
        String.raw`<b>Ce que montrent les données :</b> seulement une corrélation. Elles ne montrent pas que le déjeuner est la raison des notes.`,
        String.raw`<b>Une variable cachée :</b> la routine à la maison. Les familles qui ont des routines régulières peuvent offrir le déjeuner <i>et</i> encourager les devoirs et le sommeil, ce qui fait monter les notes.`,
        String.raw`<b>Comment vérifier la causalité :</b> une expérience contrôlée qui assigne au hasard certains élèves à déjeuner, en gardant tout le reste identique.`],
      "non démontré; une variable cachée possible est la routine familiale ou le sommeil"],
    ["Lire l'histoire d'un graphique distance-temps", String.raw`Dans le graphique de la balade à vélo ci-dessus, trouve la vitesse sur chaque partie en mouvement, en km/min.`,
      [String.raw`<b>Règle.</b> \[\text{vitesse}=\frac{\text{distance}}{\text{temps}}\] c'est l'inclinaison (la pente) de chaque segment d'un graphique distance-temps.`,
        String.raw`<b>De 0 à 15 min</b> (aller de 0 à 6 km) : \(6\div15=0.4\) km/min.`,
        String.raw`<b>De 15 à 25 min :</b> le graphique est horizontal, donc le cycliste est arrêté (vitesse 0).`,
        String.raw`<b>De 25 à 35 min</b> (de 6 à 10 km) : \(4\div10=0.4\) km/min.`,
        String.raw`<b>De 35 à 60 min</b> (de 10 km jusqu'à 0) : \(10\div25=0.4\) km/min, retour à la maison.`,
        String.raw`<b>En km/h :</b> \(0.4\times60=24\) km/h sur chaque partie en mouvement.`],
      "0.4 km/min sur chaque partie en mouvement (24 km/h constants); arrêté de 15 à 25 min"],
  ]),

  practice([
    q("corrélation", "Quand la température extérieure augmente, le coût du chauffage d'une maison tend à diminuer. C'est…", choice(["une corrélation négative", "une corrélation positive", "une corrélation nulle", "une causalité démontrée"], 0),
      "L'une monte pendant que l'autre descend.", ["Sens opposés : négative."], "négative"),
    q("pente", String.raw`Une droite la mieux ajustée passe par \((2, 58)\) et \((8, 82)\). Trouve sa pente.`, num(4),
      "Pente = variation de y ÷ variation de x.", [String.raw`\(\frac{82-58}{8-2}=\frac{24}{6}=4\).`], String.raw`\(4\)`),
    q("prédiction", String.raw`Une droite la mieux ajustée a pour équation \(y=4x+50\), où \(x\) est le nombre d'heures d'étude (données de 1 à 9 heures). Prédis la note pour \(6.5\) heures.`, num(76),
      "Remplace x par 6.5.", [String.raw`\(4(6.5)+50=26+50=76\).`], String.raw`\(76\)`),
    q("causalité", "Les villes qui ont plus de camions de pompiers subissent plus de dommages causés par le feu. L'explication la plus probable est…", choice(["une variable cachée : les grandes villes ont à la fois plus de camions et plus d'incendies", "les camions de pompiers causent des dommages", "les dommages causent des camions de pompiers", "c'est impossible à expliquer"], 0),
      "Pense à ce qui influence les deux.", ["La taille de la ville fait augmenter les deux quantités."], "variable cachée (taille de la ville)"),
    q("histoire", String.raw`Sur un graphique distance-temps, une marcheuse va de \(0\) m à \(450\) m en \(5\) minutes. Quelle est sa vitesse en m/min?`, num(90),
      "Vitesse = distance ÷ temps.", [String.raw`\(450\div5=90\).`], String.raw`\(90\) m/min`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi ne pas simplement relier les points?", "Les vraies données varient naturellement. Relier les points copie ce bruit; une droite la mieux ajustée montre la tendance de fond et permet de prédire."],
      ["Deux personnes peuvent-elles tracer des droites la mieux ajustées différentes?", "Oui, à l'œil, les droites diffèrent un peu, donc les prédictions aussi. La technologie trouve la seule droite qui rend la somme des carrés des distances verticales la plus petite."],
      ["Pourquoi l'extrapolation est-elle risquée?", "Nous n'avons pas de données à cet endroit, et les tendances changent souvent : la valeur d'une voiture ne peut pas descendre sous zéro; une croissance ne peut pas durer indéfiniment."],
      ["Et si les points suivent une courbe?", "Alors une droite est un mauvais modèle. Une courbe la mieux ajustée (6.4) peut mieux décrire la relation."],
      ["À partir de quand une corrélation est-elle « forte »?", "Approximativement : |r| supérieur à 0.8, forte; de 0.5 à 0.8, modérée; de 0.25 à 0.5, faible; sous 0.25, presque nulle. Le graphique compte autant que le nombre."],
    ],
    summary: [
      "Nuage de points : variable indépendante à l'horizontale, variable dépendante à la verticale.",
      "Corrélation : positive, négative ou nulle; forte, modérée ou faible.",
      "Droite la mieux ajustée au milieu des points; équation à partir de deux points de la droite.",
      "L'interpolation est plus sûre que l'extrapolation.",
      "Corrélation ≠ causalité : cherche les variables cachées.",
    ],
    next: "La leçon 6.4 rassemble tout cela dans le processus de modélisation mathématique.",
  }),
];
