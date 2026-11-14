// Fiche 4.7 — Déterminer l'équation d'une droite (édition enseignant)
import { EXAMPLES } from "./e4_7.mjs";
import { planeT } from "./plotT.mjs";

const PROBLEMS = [
  { level: 1, q: String.raw`Écris l'équation de la droite de pente $-4$ et d'ordonnée à l'origine $7$.`, ans: "$y=-4x+7$" },
  { level: 1, q: String.raw`Trouve la pente de la droite passant par $(-3,5)$ et $(1,-3)$.`, ans: "$-2$" },
  { level: 1, q: String.raw`Une droite a une pente de $3$ et passe par $(2,4)$. Trouve $b$.`, ans: "$b=-2$" },
  { level: 2, q: String.raw`Écris l'équation de la droite passant par $(1,6)$ et $(5,-2)$.`, ans: "$y=-2x+8$" },
  { level: 2, q: String.raw`Écris l'équation de la droite passant par $(-4,1)$ et $(2,4)$.`, ans: String.raw`$y=\frac12x+3$` },
  { level: 2, q: String.raw`Écris l'équation de la droite illustrée.${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 0.75, b: -2 }], points: [{ x: 0, y: -2 }, { x: 4, y: 1 }] }, 5)}`, recap: "Droite passant par (0, −2) et (4, 1).", ans: String.raw`$y=\frac34x-2$` },
  { level: 2, q: String.raw`La table est-elle linéaire? Si oui, écris son équation.\begin{center}\begin{tabular}{c|cccc}$x$ & $-2$ & 1 & 3 & 7\\\hline $y$ & 13 & 4 & $-2$ & $-14$\end{tabular}\end{center}`, recap: "Table (−2, 13) … (7, −14).", ans: String.raw`oui, taux $-3$ : $y=-3x+7$` },
  { level: 2, q: String.raw`Une droite passant par $(6,k)$ et $(2,3)$ a une pente de $\frac54$. Trouve $k$.`, recap: String.raw`Trouver $k$ pour une pente de $\frac54$.`, ans: "$k=8$" },
  { level: 3, space: 5.5,
    q: String.raw`La valeur d'un téléphone cellulaire diminue de façon linéaire : $650$ dollars après $1$ an et $390$ dollars après $3$ ans.
a) Trouve l'équation de la valeur $V$ en fonction des années $t$.
b) Combien coûtait le téléphone neuf? Quand ne vaudra-t-il plus rien?
c) Un modèle linéaire est-il réaliste sur $10$ ans? Explique.`,
    recap: "Téléphone : (1, 650), (3, 390).",
    ans: String.raw`a) $V=-130t+780$ b) $780$ dollars; $t=6$ ans c) non : la valeur ne peut pas être négative, et la dépréciation ralentit habituellement (non linéaire)` },
  { level: 3, space: 5.5,
    q: String.raw`Points $A(-2,-1)$, $B(1,5)$ et $C(4,11)$.
a) Montre que $A$, $B$ et $C$ sont sur une même droite.
b) Trouve l'équation de la droite.
c) Trouve le point de cette droite où $y=20$, ainsi que l'abscisse à l'origine.`,
    recap: "A, B, C alignés.",
    ans: String.raw`a) pentes $AB=BC=2$ b) $y=2x+3$ c) $(8.5, 20)$; $(-1.5, 0)$` },
  { level: 3, space: 5.5,
    q: String.raw`La température de l'eau augmente régulièrement pendant qu'on la chauffe : $18\,^\circ$C après $2$ min et $45\,^\circ$C après $8$ min.
a) Trouve l'équation.
b) Quelle était la température de départ? Quand atteint-elle $100\,^\circ$C?
c) Trace le graphique et marque les deux points donnés et tes réponses à b).`,
    recap: "Chauffage : (2, 18), (8, 45).",
    ans: String.raw`a) $T=4.5t+9$ b) $9\,^\circ$C; $t\approx20.2$ min` },
  { level: 3, space: 5,
    q: String.raw`Une droite passe par $(3,-1)$ et a la même ordonnée à l'origine que $y=5x-7$.
a) Trouve son équation.
b) Où coupe-t-elle $y=5x-7$?
c) Trouve l'aire du triangle formé par la nouvelle droite et les deux axes.`,
    recap: String.raw`Passant par $(3,-1)$, b = −7.`,
    ans: String.raw`a) $y=2x-7$ b) $(0,-7)$ c) coordonnées à l'origine $(3.5,0)$, $(0,-7)$ : aire $\frac12(3.5)(7)=12.25$` },
  { level: 3, space: 5,
    q: String.raw`Explique comment trouver l'équation d'une droite à partir a) d'un graphique, b) de deux points, c) d'une table aux pas en x inégaux. Explique ensuite comment tu vérifierais ta réponse dans chaque cas.`,
    recap: "Expliquer trois méthodes et leurs vérifications.",
    ans: "lire b et compter montée/course; formule de la pente puis b = y − mx; Δy/Δx puis b; vérifier en remplaçant les points donnés" },
];

export const WS = {
  code: "4.7",
  title: "Déterminer l'équation d'une droite",
  bigideas: String.raw`Pour écrire $y=mx+b$, trouve la pente $m$ (la montée sur la course, ou $m=\frac{y_2-y_1}{x_2-x_1}$), puis trouve $b$ en remplaçant un point ($b=y-mx$) ou en lisant l'ordonnée à l'origine, et vérifie avec un autre point. Cela fonctionne aussi bien à partir de graphiques, de tables que de données réelles.`,
  goals: ["Lire m et b sur un graphique.", "Trouver b à partir d'un point et d'une pente.", "Utiliser la formule de la pente avec deux points.", "Écrire des équations à partir de tables (y compris aux pas inégaux).", "Modéliser des situations à partir de deux données."],
  curriculum: "C4.3, C4.4",
  vocab: [["Formule de la pente", String.raw`$m=\frac{y_2-y_1}{x_2-x_1}$`], ["b à partir d'un point", String.raw`$b=y-mx$`], ["Alignés", "sur une même droite"]],
  hook: String.raw`Deux indices : « Un plombier a demandé $155$ dollars pour $2$ heures et $260$ dollars pour $3.5$ heures. » Demande aux élèves de trouver le taux horaire et les frais de déplacement sans formule. Ils réinventent la formule de la pente et $b=y-mx$.`,
  concepts: [
    ["1. Le plan en trois étapes", String.raw`(1) la pente; (2) $b$ à partir d'un point; (3) écrire et vérifier. Exemple : $(-2,7)$, $(4,-2)$ : $m=\frac{-9}{6}=-\frac32$; $7=3+b$, $b=4$; vérifie $(4,-2)$ : $-6+4=-2$ ✓.`],
    ["2. À partir d'un graphique", String.raw`${planeT({ view: { xmin: -4, xmax: 6, ymin: -6, ymax: 8 }, lines: [{ m: 2, b: -2 }], points: [{ x: 0, y: -2, color: "green" }, { x: 3, y: 4 }], tri: { x: 0, y: -2, run: 3, rise: 6 } }, 5, "b = −2; montée de 6 sur une course de 3 : m = 2.")}`],
    ["3. À partir de données", String.raw`Deux données déterminent la droite; $m$ est le taux (avec ses unités) et $b$ la valeur de départ. Vérifie qu'un modèle a du sens avant d'extrapoler.`],
  ],
  tips: ["Même ordre au numérateur et au dénominateur.", "Des parenthèses pour les coordonnées négatives.", "Vérifie avec le deuxième point.", "Garde les pentes sous forme de fractions.", "Interprète m et b avec leurs unités en contexte."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
