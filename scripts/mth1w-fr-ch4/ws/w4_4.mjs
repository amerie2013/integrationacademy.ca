// Fiche 4.4 — Comparer des droites (édition enseignant)
import { EXAMPLES } from "./e4_4.mjs";
import { planeT } from "./plotT.mjs";

const PROBLEMS = [
  { level: 1, q: String.raw`Quelle droite est la plus inclinée, et laquelle commence le plus haut : $y=4x-3$ ou $y=-6x+1$?`, recap: String.raw`$y=4x-3$ et $y=-6x+1$.`, ans: String.raw`plus inclinée : $y=-6x+1$ ($|-6|>4$); départ plus haut : $y=-6x+1$ ($1>-3$)` },
  { level: 1, q: String.raw`Trouve le point d'intersection de $y=x+5$ et de $y=3x-1$.`, ans: "$(3, 8)$" },
  { level: 1, q: String.raw`Les droites $y=-2x+4$ et $y=-2x-6$ se coupent-elles? Explique.`, recap: "Même pente, ordonnées à l'origine différentes.", ans: "non : elles sont parallèles (même pente, ordonnées à l'origine différentes)" },
  { level: 2, q: String.raw`Trouve l'intersection de $y=\frac12x+3$ et de $y=-x+12$.`, ans: "$(6, 6)$" },
  { level: 2, q: String.raw`Utilise la table pour trouver où les relations sont égales.\begin{center}\begin{tabular}{c|ccccc}$x$ & 0 & 1 & 2 & 3 & 4\\\hline A & 2 & 5 & 8 & 11 & 14\\ B & 14 & 12 & 10 & 8 & 6\end{tabular}\end{center}`, recap: "Tables A et B.", ans: String.raw`entre $x=2$ et $3$ : $3x+2=14-2x$, $x=2.4$, $y=9.2$` },
  { level: 2, q: String.raw`Estime l'intersection à partir du graphique, puis trouve-la exactement.${planeT({ view: { xmin: -2, xmax: 8, ymin: -2, ymax: 10 }, lines: [{ m: 1.5, b: -1, color: "blue" }, { m: -0.5, b: 7, color: "red" }], step: { x: 1, y: 1 } }, 5.5)}`, recap: String.raw`$y=1.5x-1$ et $y=-0.5x+7$.`, ans: "$(4, 5)$" },
  { level: 2, q: String.raw`Forfait A : $15$ dollars plus $0.08$ par texto. Forfait B : $0.12$ par texto, sans frais fixes. Quand coûtent-ils la même chose?`, recap: "Textos : 15 + 0.08t et 0.12t.", ans: "$375$ textos ($45$ dollars)" },
  { level: 2, q: String.raw`Résous $2x+3=-x+3$ et explique ce que la solution signifie pour les deux droites.`, recap: String.raw`$2x+3=-x+3$.`, ans: String.raw`$x=0$ : les droites se rencontrent en $(0,3)$ — elles ont la même ordonnée à l'origine` },
  { level: 3, space: 5.5,
    q: String.raw`Deux montgolfières : A est à $1200$ m et descend de $40$ m/min; B est à $300$ m et monte de $50$ m/min.
a) Écris une équation pour chaque hauteur.
b) Quand sont-elles à la même hauteur, et quelle est cette hauteur?
c) Trace les deux relations de $0$ à $15$ min et marque l'intersection.`,
    recap: "Montgolfières 1200 − 40t et 300 + 50t.",
    ans: String.raw`a) $h=1200-40t$; $h=300+50t$ b) $t=10$ min, $800$ m c) des droites qui se croisent en $(10, 800)$` },
  { level: 3, space: 5.5,
    q: String.raw`Centre A : $50$ dollars d'adhésion, $35$ par mois. Centre B : $200$ d'adhésion, $20$ par mois. Centre C : aucuns frais d'adhésion, $45$ par mois.
a) Écris les trois équations.
b) Trouve où A et B sont égaux, et où A et C sont égaux.
c) Quel centre est le moins cher pour $3$, $8$ et $12$ mois?`,
    recap: "Trois centres de conditionnement physique.",
    ans: String.raw`a) $C=35m+50$; $C=20m+200$; $C=45m$ b) A$=$B à $m=10$ ($400$); A$=$C à $m=5$ ($225$) c) $3$ : C ($135$); $8$ : A ($330$); $12$ : B ($440$)` },
  { level: 3, space: 5.5,
    q: String.raw`Maya part avec $2$ km d'avance et court à $8$ km/h; Liam part de la ligne et court à $12$ km/h.
a) Écris des équations de leurs distances à partir du départ.
b) Quand et où Liam rattrape-t-il Maya?
c) Si la course est de $5$ km, qui gagne? Par combien de minutes?`,
    recap: "Coureurs 2 + 8t et 12t.",
    ans: String.raw`a) $d=8t+2$; $d=12t$ b) $t=0.5$ h, $6$ km c) Maya termine à $0.375$ h, Liam à $0.4167$ h : Maya gagne par $2.5$ min (Liam ne la rattraperait qu'après l'arrivée)` },
  { level: 3, space: 5,
    q: String.raw`Une école compare deux autobus pour une sortie : l'entreprise 1 demande $350$ dollars plus $2.25$ par km; l'entreprise 2 demande $500$ dollars plus $1.50$ par km.
a) Trouve la distance du seuil de rentabilité.
b) La sortie est de $180$ km dans chaque sens. Quelle entreprise est la moins chère, et de combien?
c) Explique comment le graphique montre quelle entreprise choisir pour n'importe quelle distance.`,
    recap: "Autobus 350 + 2.25d et 500 + 1.5d.",
    ans: String.raw`a) $d=200$ km b) $360$ km : l'entreprise 2 ($1040$ contre $1160$), de $120$ dollars c) à gauche de l'intersection, la droite la plus basse est celle de l'entreprise 1; à droite, celle de l'entreprise 2` },
  { level: 3, space: 5,
    q: String.raw`Crée deux relations linéaires qui a) se rencontrent en $(2, 7)$; b) ne se rencontrent jamais; c) se rencontrent en tout point. Justifie chaque cas.`,
    recap: "Créer des droites sécantes, parallèles et confondues.",
    ans: String.raw`Exemple : a) $y=3x+1$, $y=-x+9$ b) $y=2x+1$, $y=2x-4$ c) $y=2x+3$, $2y=4x+6$` },
];

export const WS = {
  code: "4.4",
  title: "Comparer des droites",
  bigideas: String.raw`On peut comparer deux relations linéaires selon leurs \textbf{taux de variation} (pentes) et leurs \textbf{valeurs initiales} (ordonnées à l'origine). L'endroit où elles sont égales est le \textbf{point d'intersection}, qu'on trouve à partir d'une table, qu'on estime à partir d'un graphique ou qu'on calcule exactement en posant les expressions égales. L'intersection est le seuil de rentabilité : une option est meilleure avant, l'autre après. Des droites parallèles (pentes égales) ne se rencontrent jamais.`,
  goals: ["Comparer les pentes et les ordonnées à l'origine dans un contexte.", "Trouver des intersections à partir de tables.", "Estimer des intersections à partir de graphiques.", "Calculer des intersections par l'algèbre.", "Interpréter des seuils de rentabilité et prendre des décisions."],
  curriculum: "C4.1, C4.4",
  vocab: [["Point d'intersection", "même x et même y sur les deux droites"], ["Seuil de rentabilité", "là où deux options sont égales"], ["Système linéaire", "deux relations linéaires ensemble"], ["Parallèles", "même pente : aucune intersection"]],
  hook: String.raw`Présente deux offres d'emploi : A paie $200$ dollars par semaine plus $5\%$ des ventes; B paie $350$ par semaine, sans commission. Demande aux élèves de voter, puis demande : « Pour quelles ventes est-ce que ça change quelque chose? » Tracer les deux montre que la réponse est le point de croisement.`,
  concepts: [
    ["1. Comparer deux relations", String.raw`Forfait A $C=0.10m+30$; forfait B $C=0.20m+15$. B commence plus bas mais croît plus vite, donc les droites se croisent.
${planeT({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 80 }, lines: [{ m: 0.1, b: 30, color: "blue", label: "A", lx: 260 }, { m: 0.2, b: 15, color: "red", label: "B", lx: 250 }], points: [{ x: 150, y: 45, label: "(150, 45)", color: "green" }], xlabel: "minutes", ylabel: "coût", step: { x: 50, y: 10 } }, 6.5)}`],
    ["2. Trois méthodes", String.raw`\textbf{Table :} calcule les deux pour le même $x$. \textbf{Graphique :} lis le croisement (estimation). \textbf{Algèbre :} $0.10m+30=0.20m+15\Rightarrow m=150$, puis $C=45$.`],
    ["3. Cas particuliers", String.raw`Pentes égales, ordonnées à l'origine différentes : parallèles, aucune solution. Pentes et ordonnées à l'origine égales : la même droite, une infinité de solutions.`],
  ],
  tips: ["Vérifie l'intersection dans les deux équations.", "Donne la réponse dans son contexte, avec les unités.", "Une table peut montrer que le croisement se situe entre deux lignes.", "L'option la moins inclinée l'emporte pour de grandes valeurs de x.", "Les estimations graphiques doivent être confirmées par l'algèbre."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
