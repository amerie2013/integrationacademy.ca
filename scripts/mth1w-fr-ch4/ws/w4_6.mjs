// Fiche 4.6 — Transformations de droites (édition enseignant)
import { EXAMPLES } from "./e4_6.mjs";
import { planeT } from "./plotT.mjs";

const PROBLEMS = [
  { level: 1, q: String.raw`Décris le lien entre $y=x+4$ et $y=x$.`, ans: "translation de 4 vers le haut (parallèle)" },
  { level: 1, q: String.raw`Décris le lien entre $y=5x-1$ et $y=2x-1$.`, ans: "rotation autour de (0, −1); plus inclinée" },
  { level: 1, q: String.raw`Écris la droite $y=3x+5$ après une translation de $6$ vers le bas.`, ans: "$y=3x-1$" },
  { level: 2, q: String.raw`Écris l'image de $y=-\frac25x+3$ par une réflexion par rapport à l'axe des y.`, ans: String.raw`$y=\frac25x+3$` },
  { level: 2, q: String.raw`Ordonne de la moins inclinée à la plus inclinée : $y=-3x$, $y=\frac12x+5$, $y=2x-7$, $y=-\frac14x$.`, recap: "Ordonner quatre droites selon l'inclinaison.", ans: String.raw`$-\frac14$, $\frac12$, $2$, $-3$` },
  { level: 2, q: String.raw`Décris $y=-2x+3$ comme une transformation de $y=x$ (trois changements).`, ans: "plus inclinée (×2), réfléchie (descendante), translation de 3 vers le haut" },
  { level: 2, q: String.raw`Quelles droites font partie de la même famille que $y=4x-1$ (parallèles)? $y=4x+7$, $y=-4x-1$, $8x-2y=5$, $y=\frac14x$.`, recap: String.raw`Parallèles à $y=4x-1$.`, ans: String.raw`$y=4x+7$ et $8x-2y=5$ ($y=4x-2.5$)` },
  { level: 2, q: String.raw`La droite $y=mx+2$ passe par $(3,11)$. Trouve $m$ et décris la droite par rapport à $y=x+2$.`, recap: String.raw`$y=mx+2$ passant par $(3,11)$.`, ans: String.raw`$m=3$; rotation autour de $(0,2)$, plus inclinée` },
  { level: 3, space: 5.5,
    q: String.raw`Le tarif d'un taxi est $C=2.2d+5$.
a) Les frais fixes augmentent de $2$ dollars. Écris la nouvelle équation et décris le changement du graphique.
b) Supposons plutôt que le taux par km passe à $2.70$ dollars. Écris la nouvelle équation et décris le changement.
c) Pour une course de $12$ km, quel changement coûte le plus cher au client?`,
    recap: "Taxi 2.2d + 5 : changement des frais ou du taux.",
    ans: String.raw`a) $C=2.2d+7$ : 2 vers le haut (parallèle) b) $C=2.7d+5$ : plus inclinée autour de $(0,5)$ c) a) $33.40$, b) $37.40$ : le changement de taux coûte plus cher` },
  { level: 3, space: 5.5,
    q: String.raw`Le graphique montre $y=x$ et trois droites transformées.
${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 1, b: 0, color: "gray", label: "y = x", lx: 4 }, { m: 1, b: -3, color: "blue", label: "A", lx: 4.5 }, { m: 3, b: 0, color: "red", label: "B", lx: 1.5 }, { m: -0.5, b: 2, color: "green", label: "C", lx: -4.5 }] }, 5.5)}
a) Écris l'équation de chacune des droites A, B et C.
b) Décris chacune comme une transformation de $y=x$.
c) Deux des droites A, B, C se coupent-elles sur l'axe des y? Explique comment tu le sais.`,
    recap: "Identifier les droites A, B, C.",
    ans: String.raw`a) A : $y=x-3$; B : $y=3x$; C : $y=-\frac12x+2$ b) A : 3 vers le bas; B : plus inclinée; C : moins inclinée, réfléchie, 2 vers le haut c) aucune n'a la même ordonnée à l'origine : A à $-3$, B à $0$, C à $2$` },
  { level: 3, space: 5.5,
    q: String.raw`Une famille de droites est $y=mx+4$.
a) Esquisse les membres pour $m=-2,-1,0,1,2$. Qu'ont-ils en commun?
b) Quel membre passe par $(2,0)$?
c) Quels membres n'entrent jamais dans le troisième quadrant (x et y tous deux négatifs)? Explique.`,
    recap: String.raw`Famille $y=mx+4$.`,
    ans: String.raw`a) tous passent par $(0,4)$ b) $m=-2$ c) $m\le0$ : pour $x<0$, ces droites ont $y\ge4$; une pente positive rend $y<0$ dès que $x<-\frac4m$` },
  { level: 3, space: 5,
    q: String.raw`Le forfait de téléphone $C=0.10t+25$ change deux fois : les frais mensuels baissent de $5$ dollars et le coût par texto double.
a) Écris la nouvelle équation.
b) Pour combien de textos l'ancien forfait coûte-t-il autant que le nouveau?
c) Qui profite du changement?`,
    recap: "Forfait 0.10t + 25 → 0.20t + 20.",
    ans: String.raw`a) $C=0.2t+20$ b) $0.1t+25=0.2t+20$, $t=50$ c) les personnes qui envoient moins de $50$ textos` },
  { level: 3, space: 5,
    q: String.raw`Explique, à l'aide d'exemples, si chaque énoncé est toujours, parfois ou jamais vrai :
a) Changer $b$ change la pente. b) Changer $m$ change l'ordonnée à l'origine. c) Changer $m$ change l'abscisse à l'origine.`,
    recap: "Toujours / parfois / jamais : effets de m et de b.",
    ans: String.raw`a) jamais b) jamais c) parfois : pour $b\ne0$, oui ($-\frac bm$ change); pour $b=0$, l'abscisse à l'origine reste $0$` },
];

export const WS = {
  code: "4.6",
  title: "Transformations de droites",
  bigideas: String.raw`À partir de $y=x$, changer $b$ fait subir à la droite une \textbf{translation} verticale (droites parallèles), changer la grandeur de $m$ la fait \textbf{pivoter} autour de $(0,b)$ (plus ou moins inclinée) et changer le signe de $m$ donne sa \textbf{réflexion} par rapport à l'axe des y. En contexte : de nouveaux frais fixes déplacent le graphique vers le haut ou vers le bas; un nouveau taux change son inclinaison.`,
  goals: ["Décrire l'effet d'un changement de b.", "Décrire l'effet d'un changement de m.", "Décrire les réflexions causées par un changement de signe de m.", "Écrire des équations après des transformations.", "Interpréter des transformations dans des situations réelles."],
  curriculum: "C4.2, C4.3",
  vocab: [["Translation", "glissement : changer b"], ["Rotation", "pivotement autour de (0, b) : changer m"], ["Réflexion", "miroir par rapport à l'axe des y : m → −m"], ["Famille de droites", "droites qui ont la même pente ou la même ordonnée à l'origine"]],
  hook: String.raw`Donne à chaque paire d'élèves un spaghetti cru sur un quadrillage. « Forme $y=x$. Maintenant, fais-le glisser de 3 vers le haut sans le tourner. Maintenant, fixe-le en $(0,3)$ et rends-le plus incliné. » Les élèves réalisent physiquement des translations et des rotations avant de voir les équations.`,
  concepts: [
    ["1. Changer b", String.raw`${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 8 }, lines: [{ m: 1, b: 0, color: "gray", label: "y = x", lx: 4 }, { m: 1, b: 3, color: "blue", label: "y = x + 3", lx: 2.5 }, { m: 1, b: -2, color: "red", label: "y = x − 2", lx: 4.2 }] }, 5.5)}`],
    ["2. Changer m", String.raw`${planeT({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 8 }, lines: [{ m: 0.5, b: 1, color: "green" }, { m: 1, b: 1, color: "gray" }, { m: 3, b: 1, color: "blue" }, { m: -1, b: 1, color: "red" }], points: [{ x: 0, y: 1, color: "violet" }] }, 5.5, "Pentes ½, 1, 3 et −1, toutes passant par (0, 1).")}`],
    ["3. Résumé", String.raw`\begin{center}\begin{tabular}{ll}\toprule changement & effet\\\midrule $b$ vers le haut/le bas & translation, parallèle\\ $|m|$ plus grand/plus petit & plus/moins inclinée (rotation)\\ $m\to-m$ & réflexion par rapport à l'axe des y\\\bottomrule\end{tabular}\end{center}`],
  ],
  tips: ["L'inclinaison est |m|.", "Une rotation garde l'ordonnée à l'origine.", "Changer b déplace aussi l'abscisse à l'origine (sauf si m change).", "Utilise une table de valeurs pour montrer qu'une translation ajoute la même quantité à chaque y.", "En contexte, relie b aux coûts fixes et m aux taux."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
