// Fiche 6.3 — Nuages de points et corrélation (édition de l'enseignant; miroir de ../../mth1w-ch6/ws/w6_3.mjs)
import { scatterT, planeT } from "./figT.mjs";

const arm = [[150, 148], [155, 156], [158, 155], [162, 163], [165, 166], [168, 165], [171, 173], [175, 174], [178, 180], [182, 181]];

const EXAMPLES = [
  { title: "Choisir les variables", q: "Pour chaque paire, nomme la variable indépendante et la variable dépendante : (a) les heures d'ensoleillement et la hauteur d'une plante; (b) le prix d'un billet et le nombre de billets vendus; (c) l'âge d'un arbre et le diamètre de son tronc.",
    steps: [String.raw`\textbf{Définitions :} la variable \emph{indépendante} est celle qu'on fixe ou qui change en premier (sur l'axe des $x$); la variable \emph{dépendante} y réagit (axe des $y$). Demande-toi : laquelle dépend de l'autre?`,
      "(a) La hauteur de la plante dépend de l'ensoleillement : indépendante l'ensoleillement, dépendante la hauteur.",
      "(b) Les ventes dépendent du prix : indépendante le prix, dépendante le nombre de billets vendus.",
      "(c) Le diamètre dépend de l'âge : indépendante l'âge, dépendante le diamètre."], ans: "la variable cause/contrôle est l'indépendante" },
  { title: "Tracer et décrire un nuage de points", q: "La taille et l'envergure des bras (cm) de 10 élèves sont représentées. Décris la corrélation.",
    fig: scatterT({ pts: arm, view: { xmin: 145, xmax: 185, ymin: 145, ymax: 185 }, step: { x: 5, y: 5 }, xlabel: "taille (cm)", ylabel: "envergure (cm)" }, 6),
    steps: [String.raw`\textbf{Décrire deux choses :} le sens et la force.`,
      "Sens : quand la taille augmente, l'envergure augmente : positive.",
      "Force : les points sont très proches d'une droite : forte."], ans: "forte corrélation positive" },
  { title: "Équation d'une droite la mieux ajustée", q: String.raw`Une droite la mieux ajustée pour les données d'envergure passe par $(152, 151)$ et $(180, 179)$. Trouve son équation.`,
    steps: [String.raw`\textbf{Formules :} $m=\frac{y_2-y_1}{x_2-x_1}$ et $y=mx+b$.`,
      String.raw`\textbf{Pente :} $m=\frac{179-151}{180-152}=\frac{28}{28}=1$.`,
      String.raw`\textbf{Ordonnée à l'origine :} remplace $(152,151)$ : $151=1(152)+b$, donc $b=-1$. Équation $y=x-1$.`,
      String.raw`\textbf{Vérification :} $180-1=179$ \checkmark. Sens : l'envergure est environ 1 cm de moins que la taille.`], ans: String.raw`$y=x-1$ : l'envergure est environ 1 cm de moins que la taille` },
  { title: "Prédire", q: String.raw`Utilise $y=x-1$ pour prédire l'envergure d'un élève de $160$ cm et d'un joueur de basketball de $210$ cm. Quelle prédiction est la plus fiable?`,
    steps: [String.raw`\textbf{Définitions :} l'interpolation prédit à l'intérieur des données (ici de 150 à 182 cm); l'extrapolation prédit à l'extérieur.`,
      String.raw`\textbf{160 cm :} $160-1=159$ cm. À l'intérieur des données : interpolation, fiable.`,
      String.raw`\textbf{210 cm :} $210-1=209$ cm. Loin à l'extérieur des données : extrapolation, moins fiable.`], ans: "159 cm (fiable); 209 cm (extrapolation)" },
  { title: "Raisonner à rebours", q: String.raw`Avec $y=x-1$, quelle serait la taille d'un élève dont l'envergure est $170$ cm?`,
    steps: [String.raw`\textbf{Remplacer la valeur connue :} l'envergure est $y$, donc $170=x-1$.`,
      String.raw`\textbf{Résoudre :} ajoute 1 aux deux membres : $x=171$ cm.`,
      String.raw`\textbf{Vérification :} $171-1=170$ \checkmark`], ans: "environ 171 cm" },
  { title: "La force sans nombre", q: "Classe trois ensembles de données de la corrélation la plus forte à la plus faible : A — points en bande étroite qui monte de gauche à droite; B — points en nuage diffus qui descend de gauche à droite; C — points en bande de largeur moyenne qui descend.",
    steps: [String.raw`\textbf{Règle :} la force indique à quel point les points suivent une droite; le sens (montant ou descendant) n'influe pas sur la force.`,
      "A : bande étroite : forte (positive).",
      "C : bande moyenne : modérée (négative).",
      "B : nuage diffus : faible (négative)."], ans: "A, C, B" },
  { title: "Variables cachées", q: "Les villes qui ont plus de bibliothèques ont plus de crimes. Propose une variable cachée et explique.",
    steps: [String.raw`\textbf{Définition :} une \emph{variable cachée} influence les deux variables et crée une corrélation sans lien de cause.`,
      "La population : les grandes villes ont plus de tout, y compris des bibliothèques et des crimes.",
      "Correction : comparer des taux par 1000 habitants plutôt que des totaux."], ans: "la taille de la population" },
  { title: "Décrire un graphique distance-temps", q: "Décris la marche représentée, y compris les vitesses.",
    fig: planeT({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 2000 }, segs: [{ pts: [[0, 0], [10, 800], [15, 800], [25, 2000], [40, 2000]] }], step: { x: 5, y: 400 }, xlabel: "temps (min)", ylabel: "distance (m)" }, 6),
    steps: [String.raw`\textbf{Règle :} vitesse $=\frac{\text{variation de la distance}}{\text{variation du temps}}$ (la pente); un segment horizontal signifie un arrêt.`,
      String.raw`De 0 à 10 min : $800\div10=80$ m/min en s'éloignant du départ.`,
      "De 10 à 15 min : horizontal, arrêt à 800 m.",
      String.raw`De 15 à 25 min : $(2000-800)\div10=1200\div10=120$ m/min, plus vite.`,
      "De 25 à 40 min : horizontal, arrêt à 2000 m."], ans: "comme décrit" },
  { title: "Tendance non linéaire", q: String.raw`Un graphique de la vitesse d'une voiture (km/h) et de la distance d'arrêt (m) s'incurve vers le haut : $(20, 6)$, $(40, 18)$, $(60, 36)$, $(80, 60)$, $(100, 90)$. Une droite la mieux ajustée convient-elle?`,
    fig: scatterT({ pts: [[20, 6], [40, 18], [60, 36], [80, 60], [100, 90]], view: { xmin: 0, xmax: 110, ymin: 0, ymax: 100 }, step: { x: 20, y: 20 }, xlabel: "vitesse (km/h)", ylabel: "arrêt (m)" }, 5),
    steps: [String.raw`\textbf{Vérifier avec les différences} (la vitesse augmente par pas égaux de 20).`,
      String.raw`Premières différences : $12, 18, 24, 30$ : elles augmentent, donc la tendance n'est pas linéaire.`,
      String.raw`Deuxièmes différences : $6, 6, 6$ : constantes, donc c'est quadratique.`,
      "Une courbe la mieux ajustée convient, pas une droite."], ans: "non — utiliser une courbe" },
];

const PROBLEMS = [
  { level: 1, q: "Décris la corrélation à laquelle tu t'attendrais : (a) les heures de télé et les notes; (b) l'âge d'une voiture et sa valeur; (c) le mois de naissance d'une personne et sa taille.", recap: "Corrélations attendues.", ans: "(a) faible négative (b) forte négative (c) nulle" },
  { level: 1, q: String.raw`Trouve la pente d'une droite la mieux ajustée qui passe par $(4, 30)$ et $(12, 70)$.`, recap: "Pente par (4, 30), (12, 70).", ans: "$5$" },
  { level: 1, q: String.raw`Une droite la mieux ajustée a pour équation $y=3.5x+12$. Prédis $y$ quand $x=8$.`, recap: "y = 3.5x + 12 pour x = 8.", ans: "$40$" },
  { level: 2, q: String.raw`Données : $(1, 15)$, $(2, 21)$, $(3, 24)$, $(4, 31)$, $(5, 34)$, $(6, 40)$. Place les points, trace une droite la mieux ajustée et trouve son équation.`, recap: "Six points : droite la mieux ajustée.", space: 5, ans: String.raw`environ $y=5x+10$ (passe par exemple par $(1, 15)$ et $(6, 40)$)` },
  { level: 2, q: String.raw`Pour la droite $y=-2.4x+96$ (minutes de pile restantes selon les minutes de jeu, $0\le x\le30$), prédis la pile restante après $15$ min et après $50$ min. Commente.`, recap: "Modèle de la pile.", ans: String.raw`$60$; $-24$ --- impossible : extrapolation au-delà des données` },
  { level: 2, q: "Explique la différence entre l'interpolation et l'extrapolation, avec un exemple de chacune.", recap: "Interpolation ou extrapolation.", ans: "à l'intérieur ou à l'extérieur de l'étendue des données; l'extrapolation est moins fiable" },
  { level: 2, q: "Une étude révèle que les élèves qui dorment plus ont de meilleures notes. Donne deux explications possibles autres que « le sommeil cause de meilleures notes ».", recap: "Sommeil et notes.", ans: "variable cachée (saines habitudes, moins de stress, moins de travail à temps partiel); causalité inverse (les élèves à jour dans leurs travaux peuvent se coucher plus tôt)" },
  { level: 2, q: String.raw`Le graphique distance-temps d'une cycliste monte de $0$ km à $9$ km en $30$ min, reste horizontal pendant $10$ min, puis redescend à $0$ en $20$ min. Trouve chaque vitesse en km/h.`, recap: "Vitesses de la cycliste.", ans: "18 km/h; 0; 27 km/h" },
  { level: 3, space: 5, q: String.raw`Ventes de crème glacée (\$) et température (°C) : $(14, 210)$, $(17, 260)$, $(20, 300)$, $(23, 390)$, $(26, 420)$, $(29, 490)$, $(32, 540)$.
(a) Trace un nuage de points et décris la corrélation.
(b) Trouve une équation d'une droite la mieux ajustée.
(c) Prédis les ventes à $25$ °C et à $40$ °C. Quelle prédiction est la plus fiable?`, recap: "Ventes de crème glacée.", ans: String.raw`(a) forte positive (b) environ $y=18.5x-50$ (c) $\approx412$; $\approx690$ --- extrapolation, moins fiable` },
  { level: 3, space: 5, q: String.raw`Deux élèves tracent des droites la mieux ajustées pour les mêmes données : $y=4x+20$ et $y=3.5x+24$. Prédis $y$ pour $x=8$ et pour $x=40$ avec les deux. Pourquoi les prédictions concordent-elles mieux pour $x=8$?`, recap: "Deux droites la mieux ajustées.", ans: String.raw`$x=8$ : $52$ et $52$; $x=40$ : $180$ et $164$; les droites se croisent près des données et s'écartent plus loin` },
  { level: 3, space: 5, q: "Conçois une enquête pour vérifier si le temps de réaction est lié au nombre d'heures de sommeil. Énonce les variables, la façon de recueillir les données, le graphique que tu traceras et la façon de décider s'il existe une relation.", recap: "Concevoir une étude à deux variables.", ans: "indépendante : heures de sommeil; dépendante : temps de réaction; test de la règle qui tombe auprès d'environ 20 élèves; nuage de points; examiner le sens et la force; rappeler que corrélation n'est pas causalité" },
  { level: 3, space: 5, q: String.raw`Esquisse un graphique distance-temps pour : Maya marche $600$ m jusqu'à un magasin en $8$ min, magasine pendant $12$ min, puis retourne chez elle en joggant en $4$ min. Trouve sa vitesse à l'aller et au retour, et sa vitesse moyenne pour tout le trajet (magasinage compris).`, recap: "Le trajet de Maya.", ans: String.raw`$75$ m/min; $150$ m/min; moyenne $1200\div24=50$ m/min` },
  { level: 3, space: 5, q: String.raw`Explique pourquoi les points $(1, 2)$, $(2, 8)$, $(3, 18)$, $(4, 32)$ ne devraient pas être modélisés par une droite la mieux ajustée, et propose un meilleur modèle.`, recap: "Une régularité courbe.", ans: String.raw`les différences $6, 10, 14$ augmentent (deuxièmes différences $4$) : quadratique, $y=2x^2$` },
];

export const WS = {
  code: "6.3",
  title: "Nuages de points et corrélation",
  bigideas: String.raw`Un nuage de points montre si deux variables sont liées. Une corrélation a un \textbf{sens} (positive, négative ou nulle) et une \textbf{force} (forte, modérée, faible). Une droite la mieux ajustée résume une tendance linéaire; son équation, trouvée à partir de deux points de la droite, permet de prédire --- avec confiance par interpolation, avec prudence par extrapolation. Une corrélation seule ne prouve jamais une causalité : cherche les variables cachées. Des graphiques comme les graphiques distance--temps racontent aussi des histoires qu'on peut lire segment par segment.`,
  goals: ["Choisir la variable indépendante et la variable dépendante.", "Décrire une corrélation.", "Tracer une droite la mieux ajustée et trouver son équation.", "Interpoler et extrapoler.", "Distinguer corrélation et causalité.", "Interpréter des graphiques distance--temps."],
  curriculum: "D1.3, D2, C1",
  vocab: [["Corrélation", "une relation entre deux variables"], ["Droite la mieux ajustée", "droite de tendance au milieu des points"], ["Interpolation / extrapolation", "prédire à l'intérieur / à l'extérieur des données"], ["Variable cachée", "une variable non visible qui influence les deux"]],
  hook: String.raw`Mesure la taille et l'envergure des bras de quelques volontaires et place les points en direct au tableau. Demande : « Que remarques-tu? Pourrais-tu prédire l'envergure de quelqu'un à partir de sa taille? »`,
  concepts: [
    ["1. Corrélation", String.raw`Positive : les deux augmentent. Négative : l'une augmente pendant que l'autre diminue. Nulle : aucune tendance. Force = à quel point les points suivent une droite.`],
    ["2. Droite la mieux ajustée", String.raw`Environ la moitié des points au-dessus et la moitié en dessous; utilise deux points de la droite : $m=\frac{y_2-y_1}{x_2-x_1}$, puis $b=y-mx$.
${scatterT({ pts: [[1, 4], [2, 5], [3, 7.5], [4, 7], [5, 9.5], [6, 10]], view: { xmin: 0, xmax: 7, ymin: 0, ymax: 12 }, step: { x: 1, y: 2 }, line: { m: 1.3, b: 2.7, dash: true } }, 5)}`],
    ["3. Causalité et histoires", String.raw`Corrélation $\ne$ causalité (variables cachées, coïncidence, causalité inverse). Distance--temps : montée = on s'éloigne, horizontal = arrêt, descente = retour; inclinaison = vitesse.`],
  ],
  tips: ["Les élèves relient souvent les points au lieu de tracer une droite de tendance.", "Utilise des points de la droite, pas des points des données, pour l'équation.", "Demande chaque fois : « Cette prédiction est-elle à l'intérieur des données? »", "Demande aux élèves d'inventer leurs propres exemples de variables cachées.", "Vérifie les unités de vitesse sur les graphiques distance-temps."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
