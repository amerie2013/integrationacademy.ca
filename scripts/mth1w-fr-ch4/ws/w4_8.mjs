// Fiche 4.8 — Forme générale et forme fonctionnelle (édition enseignant)
import { EXAMPLES } from "./e4_8.mjs";
import { planeT } from "./plotT.mjs";

const PROBLEMS = [
  { level: 1, q: String.raw`Écris $y=3x-5$ sous la forme générale.`, ans: "$3x-y-5=0$" },
  { level: 1, q: String.raw`Écris $2x+y-8=0$ sous la forme fonctionnelle.`, ans: "$y=-2x+8$" },
  { level: 1, q: String.raw`Trouve les coordonnées à l'origine de $x+4y-12=0$.`, ans: "$(12,0)$ et $(0,3)$" },
  { level: 2, q: String.raw`Écris $y=-\frac25x+3$ sous la forme générale.`, ans: "$2x+5y-15=0$" },
  { level: 2, q: String.raw`Trouve la pente et l'ordonnée à l'origine de $6x-4y+20=0$.`, ans: String.raw`$m=\frac32$, $b=5$` },
  { level: 2, q: String.raw`Trace $3x+5y-15=0$ à l'aide de ses coordonnées à l'origine.`, ans: "$(5,0)$ et $(0,3)$" },
  { level: 2, q: String.raw`Écris la forme générale de la droite passant par $(1,-2)$ et $(4,7)$.`, recap: String.raw`Forme générale passant par $(1,-2)$, $(4,7)$.`, ans: "$3x-y-5=0$" },
  { level: 2, q: String.raw`Quelles droites sont identiques? a) $y=\frac12x-2$ b) $x-2y-4=0$ c) $2x-y-4=0$`, recap: "Même droite?", ans: "a) et b)" },
  { level: 3, space: 5.5,
    q: String.raw`Un club vend des hot-dogs à $3$ dollars et des boissons à $2$ dollars, et veut amasser exactement $360$ dollars.
a) Écris la relation sous la forme générale, avec $h$ hot-dogs et $d$ boissons.
b) Trouve et interprète les deux coordonnées à l'origine.
c) Si on vend $80$ hot-dogs, combien de boissons faut-il? Montre le point sur un graphique.`,
    recap: "Collecte de fonds 3h + 2d = 360.",
    ans: String.raw`a) $3h+2d-360=0$ b) $(120,0)$ : seulement des hot-dogs; $(0,180)$ : seulement des boissons c) $60$ boissons` },
  { level: 3, space: 5.5,
    q: String.raw`Pour la droite $Ax+By+C=0$ ($B\ne0$) :
a) Montre que la pente est $-\frac AB$ et que l'ordonnée à l'origine est $-\frac CB$.
b) Trouve l'abscisse à l'origine en fonction de $A$ et de $C$.
c) Utilise tes résultats pour trouver la pente et les coordonnées à l'origine de $4x-6y+18=0$, et vérifie en traçant le graphique.`,
    recap: "Raccourcis de la forme générale.",
    ans: String.raw`a) $By=-Ax-C$, $y=-\frac ABx-\frac CB$ b) $-\frac CA$ c) $m=\frac23$, ordonnée à l'origine $3$, abscisse à l'origine $-4.5$` },
  { level: 3, space: 5.5,
    q: String.raw`La droite $kx+3y-12=0$ passe par $(2,6)$.
a) Trouve $k$.
b) Écris la droite sous la forme fonctionnelle.
c) Trouve l'aire du triangle formé par la droite et les deux axes.`,
    recap: String.raw`$kx+3y-12=0$ passant par $(2,6)$.`,
    ans: String.raw`a) $2k+18-12=0$, $k=-3$ b) $y=x+4$ c) coordonnées à l'origine $(-4,0)$, $(0,4)$ : aire $8$` },
  { level: 3, space: 5,
    q: String.raw`Explique quand chaque forme est la plus utile : forme fonctionnelle $y=mx+b$, forme générale $Ax+By+C=0$. Donne une situation réelle qui produit naturellement chaque forme.`,
    recap: "Quand utiliser chaque forme.",
    ans: "y = mx + b : tracer et lire des taux (tarif de taxi); forme générale : deux quantités qui partagent un total (budget 3h + 2d = 360) et coordonnées à l'origine" },
  { level: 3, space: 5,
    q: String.raw`On fait subir à la droite $2x-5y+10=0$ une translation de $3$ unités vers le haut.
a) Écris la nouvelle droite sous la forme fonctionnelle et sous la forme générale.
b) Trouve les deux coordonnées à l'origine de la nouvelle droite.
c) Décris comment les coordonnées à l'origine ont changé.`,
    recap: String.raw`$2x-5y+10=0$ déplacée de 3 vers le haut.`,
    ans: String.raw`a) $y=\frac25x+5$; $2x-5y+25=0$ b) $(-12.5,0)$, $(0,5)$ c) l'ordonnée à l'origine monte de 3 (à partir de 2); l'abscisse à l'origine se déplace vers la gauche, de $-5$ à $-12.5$` },
];

export const WS = {
  code: "4.8",
  title: "Forme générale et forme fonctionnelle",
  bigideas: String.raw`Une droite peut s'écrire sous la \textbf{forme fonctionnelle} $y=mx+b$ (montre la pente et l'ordonnée à l'origine) ou sous la \textbf{forme générale} $Ax+By+C=0$ (entiers, $A\ge0$; pratique pour les coordonnées à l'origine et pour les situations où deux quantités partagent un total). On passe de l'une à l'autre en réarrangeant; $m=-\frac AB$, $b=-\frac CB$. Coordonnées à l'origine : pose $y=0$ pour l'abscisse à l'origine, $x=0$ pour l'ordonnée à l'origine.`,
  goals: ["Écrire des droites sous la forme générale.", "Passer de la forme générale à la forme fonctionnelle.", "Trouver les coordonnées à l'origine et tracer à partir de celles-ci.", "Utiliser m = −A/B et b = −C/B.", "Modéliser des situations sous la forme générale."],
  curriculum: "C4.2, C4.3",
  vocab: [["Forme générale", "Ax + By + C = 0"], ["Forme fonctionnelle", "y = mx + b"], ["Abscisse à l'origine", "y = 0"], ["Ordonnée à l'origine", "x = 0"]],
  hook: String.raw`Une classe dispose de $360$ dollars à dépenser en hot-dogs à $3$ dollars et en boissons à $2$ dollars. Les élèves énumèrent des commandes possibles : $(120, 0)$, $(100, 30)$, $(0, 180)$\ldots En les plaçant, on obtient une droite dont l'équation naturelle est $3h+2d=360$ — la forme générale.`,
  concepts: [
    ["1. Passer d'une forme à l'autre", String.raw`$y=\frac23x-4\Rightarrow3y=2x-12\Rightarrow2x-3y-12=0$. \quad $4x+2y-10=0\Rightarrow y=-2x+5$.`],
    ["2. Coordonnées à l'origine", String.raw`${planeT({ view: { xmin: -10, xmax: 4, ymin: -2, ymax: 8 }, lines: [{ m: 0.75, b: 6 }], points: [{ x: -8, y: 0, label: "(−8, 0)", color: "green" }, { x: 0, y: 6, label: "(0, 6)", color: "green" }] }, 6, "3x − 4y + 24 = 0 tracée à partir de ses coordonnées à l'origine.")}`],
    ["3. Raccourcis", String.raw`À partir de $Ax+By+C=0$ : $m=-\frac AB$, $b=-\frac CB$, abscisse à l'origine $-\frac CA$.`],
  ],
  tips: ["Divise chaque terme par B.", "Élimine les fractions à l'aide du PPCD.", "Rends A positif.", "Les droites verticales n'existent que sous la forme générale (B = 0).", "Interprète les coordonnées à l'origine en contexte."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
