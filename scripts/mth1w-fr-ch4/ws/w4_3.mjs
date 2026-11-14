// Fiche 4.3 — Représenter des relations linéaires : y = mx + b (édition enseignant)
import { EXAMPLES } from "./e4_3.mjs";
import { planeT } from "./plotT.mjs";

const PROBLEMS = [
  { level: 1, q: String.raw`Donne la pente et l'ordonnée à l'origine : a) $y=-4x+9$ b) $y=7-\frac12x$ c) $y=6x$.`, recap: "m et b de trois équations.", ans: String.raw`a) $-4, 9$ b) $-\frac12, 7$ c) $6, 0$` },
  { level: 1, q: String.raw`Trouve la pente de la droite passant par $(2,-1)$ et $(6,7)$.`, ans: "$2$" },
  { level: 1, q: String.raw`Variation directe ou partielle? a) $C=3.2n$ b) $C=25+3.2n$ c) $d=60t$.`, recap: "Directe ou partielle.", ans: "a) directe b) partielle c) directe" },
  { level: 2, q: String.raw`Trace $y=\frac34x-2$ à l'aide de l'ordonnée à l'origine et de la pente. Donne trois points de la droite.`, recap: String.raw`Tracer $y=\frac34x-2$.`, ans: String.raw`$(0,-2), (4,1), (8,4)$` },
  { level: 2, q: String.raw`Écris l'équation de la droite.${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: -1.5, b: 3 }], points: [{ x: 0, y: 3 }, { x: 2, y: 0 }] }, 5.5)}`, recap: "Droite passant par (0, 3) et (2, 0).", ans: String.raw`$y=-\frac32x+3$` },
  { level: 2, q: String.raw`Une table donne $y=8, 13.5, 19, 24.5$ à $x=1,2,3,4$. Écris l'équation.`, recap: String.raw`$y$ : $8, 13.5, 19, 24.5$.`, ans: String.raw`$y=5.5x+2.5$` },
  { level: 2, q: String.raw`Une gardienne d'enfants gagne $12$ dollars plus $15$ dollars l'heure. Écris l'équation, trouve la paie pour $4.5$ h et trouve le nombre d'heures pour $102$ dollars.`, recap: "Gardienne 12 + 15h.", ans: String.raw`$P=15h+12$; $79.50$ dollars; $6$ h` },
  { level: 2, q: String.raw`Un réservoir contient $800$ L et se vide à raison de $25$ L/min. Écris $V$ en fonction de $t$ et donne le sens de la pente et de l'ordonnée à l'origine.`, recap: "Réservoir 800 L, −25 L/min.", ans: String.raw`$V=800-25t$ : commence à $800$ L, perd $25$ L chaque minute` },
  { level: 3, space: 5.5,
    q: String.raw`Deux agences de location de voitures : Rapido demande $45$ dollars par jour plus $0.20$ dollar par km; Économo demande $0.35$ dollar par km sans frais quotidiens.
a) Écris une équation pour chacune pour une location d'une journée. Laquelle est une variation directe?
b) Trace les deux sur les mêmes axes pour $0$ à $500$ km.
c) Pour quelles distances Économo est-elle moins chère?`,
    recap: "Rapido 45 + 0.20d; Économo 0.35d.",
    ans: String.raw`a) $C=0.2d+45$; $C=0.35d$ (directe) b) des droites qui se croisent en $(300, 105)$ c) moins de $300$ km` },
  { level: 3, space: 5.5,
    q: String.raw`Une rampe pour fauteuil roulant monte de $0.6$ m sur une distance horizontale de $7.2$ m.
a) Trouve sa pente sous forme de fraction et de nombre décimal.
b) Le code du bâtiment exige une pente d'au plus $\frac1{12}$. La rampe respecte-t-elle le code?
c) Quelle longueur horizontale faut-il pour une montée de $0.75$ m avec une pente d'exactement $\frac1{12}$?`,
    recap: "Rampe de 0.6 m sur 7.2 m.",
    ans: String.raw`a) $\frac{1}{12}\approx0.083$ b) oui, exactement à la limite c) $9$ m` },
  { level: 3, space: 5.5,
    q: String.raw`Le graphique montre les prix d'une imprimerie.
${planeT({ view: { xmin: 0, xmax: 500, ymin: 0, ymax: 300 }, lines: [{ m: 0.4, b: 60, color: "blue" }], points: [{ x: 0, y: 60, label: "(0, 60)", color: "green" }, { x: 300, y: 180, label: "(300, 180)" }], xlabel: "affiches n", ylabel: "coût C", step: { x: 50, y: 50 } }, 7)}
a) Trouve l'équation.
b) Explique le sens de $m$ et de $b$.
c) Une autre entreprise demande $0.55$ dollar par affiche sans frais de préparation. Quand est-elle moins chère?`,
    recap: "Imprimerie : (0, 60), (300, 180).",
    ans: String.raw`a) $C=0.4n+60$ b) $0.40$ dollar par affiche; frais de préparation de $60$ dollars c) $0.55n<0.4n+60$ donne $n<400$ affiches` },
  { level: 3, space: 5,
    q: String.raw`Une bougie de $30$ cm brûle de $2.5$ cm par heure.
a) Écris l'équation et donne le domaine qui a du sens.
b) Trace-la et indique les deux coordonnées à l'origine. Que signifie chacune?
c) Une deuxième bougie mesure $24$ cm et brûle de $1.5$ cm par heure. Quelle bougie dure le plus longtemps, et de combien?`,
    recap: "Bougies 30 − 2.5t et 24 − 1.5t.",
    ans: String.raw`a) $h=30-2.5t$, $0\le t\le12$ b) $(0,30)$ hauteur de départ; $(12,0)$ elle est entièrement consumée c) la deuxième dure $16$ h, $4$ h de plus` },
  { level: 3, space: 5,
    q: String.raw`Pour $y=mx+b$, décris en mots ce qui arrive au graphique et à la situation réelle quand a) $b$ augmente de $10$ dans $C=0.4n+60$; b) $m$ double; c) $m$ devient $0$.`,
    recap: "Effets d'un changement de m et de b dans un modèle de coût.",
    ans: "a) chaque coût augmente de 10 : la droite monte b) le coût par article double : plus inclinée c) seulement des frais fixes : droite horizontale" },
];

export const WS = {
  code: "4.3",
  title: "Représenter des relations linéaires",
  bigideas: String.raw`Toute relation linéaire peut s'écrire $y=mx+b$ : $m$ est le \textbf{taux de variation} (pente $=\frac{\text{montée}}{\text{course}}$) et $b$ est la \textbf{valeur initiale} (ordonnée à l'origine). Quand $b=0$, la relation est une \textbf{variation directe} (elle passe par l'origine); sinon, c'est une \textbf{variation partielle}. On trace à partir de $(0,b)$ en utilisant la pente comme un pas.`,
  goals: ["Identifier m et b dans des mots, des tables, des graphiques et des équations.", "Calculer la pente comme la montée sur la course.", "Distinguer la variation directe et la variation partielle.", "Tracer y = mx + b à partir de b et de m.", "Modéliser des situations et répondre à des questions à l'aide de l'équation."],
  curriculum: "C4.2, C4.3",
  vocab: [["Pente", "montée ÷ course; taux de variation"], ["Ordonnée à l'origine", "valeur à x = 0; valeur initiale"], ["Variation directe", "y = mx (passe par l'origine)"], ["Variation partielle", "y = mx + b, b ≠ 0"]],
  hook: String.raw`Montre deux affiches de taxi : « 2.50 par km » et « 4.00 + 2.00 par km ». Demande laquelle est la meilleure pour une course de 3 km et pour une course de 20 km. Les élèves calculent, puis on trace les deux : l'une commence à l'origine, l'autre non. Cette différence — la valeur initiale — est l'idée du jour.`,
  concepts: [
    ["1. Le sens de m et de b", String.raw`Plombier : $C=60h+75$. $b=75$ (frais de déplacement, valeur à $h=0$); $m=60$ (dollars par heure, la première différence et la pente).`],
    ["2. La pente : la montée sur la course", String.raw`${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 2 / 3, b: -1 }], tri: { x: 0, y: -1, run: 3, rise: 2 }, points: [{ x: 0, y: -1, color: "green" }, { x: 3, y: 1 }] }, 5.5, "À partir de (0, −1) : 3 vers la droite, 2 vers le haut.")}`],
    ["3. Variation directe et partielle", String.raw`Directe : $E=16.5h$ (passe par l'origine). Partielle : $C=0.35d+12$ (commence à $12$). Dans une variation partielle, doubler $x$ ne double \emph{pas} $y$.`],
  ],
  tips: ["b est la valeur à x = 0, pas la première valeur de la table.", "y = 5 − 2x a une pente de −2.", "Pente négative : descends en avançant vers la droite.", "Interprète m et b avec leurs unités.", "Utilise des fractions pour les pentes quand tu traces."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
