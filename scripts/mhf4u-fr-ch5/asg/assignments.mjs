// MHF4U-FR devoirs du chapitre 5 : 12 questions chacun — Connaissance et compréhension 1-3, Habiletés de la pensée 4-5,
// Communication 6-7, Mise en application 8-10, Niveau difficile 11-12.
// [[clé|légende]] dans une ligne est remplacé par une figure (SVG téléversé) à la publication.
import { planeDoc } from "../bank/fig.mjs";
import { TG, UC } from "../trigfig.mjs";

const S = String.raw;
const P = Math.PI;
const V = { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 2 };
const cut = (g) => (x) => (Math.abs(g(x)) < 0.07 ? NaN : 1 / g(x));
const vl = (xs) => ({ vlines: xs.map((x) => ({ x, color: "red", dash: true })) });
const tan = (x) => (Math.abs(Math.cos(x)) < 0.06 ? NaN : Math.tan(x));

export const ASSIGNMENTS = [
  { code: "5.1", title: "Devoir 5.1 — Graphiques des fonctions sinus, cosinus et tangente", figs: {
      sc: planeDoc(TG([[Math.sin, "violet"], [Math.cos, "green"]], V)),
      tn: planeDoc(TG([[tan, "red"], [() => 2, "blue"]], { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 }, [], vl([P / 2, 1.5 * P]))) }, lines: [
    "Connaissance et compréhension",
    S`1. Donne la période, l'image et les zéros (pour \(0\le x\le2\pi\)) de \(y=\sin x\) et de \(y=\cos x\).`,
    S`2. Donne les asymptotes et les zéros de \(y=\tan x\) pour \(-\pi\le x\le\pi\).`,
    S`3. Dresse un tableau des cinq points clés de \(y=\cos x\) pour \(0\le x\le2\pi\) et esquisse un cycle.`,
    "Habiletés de la pensée",
    "4. Le graphique montre y = sin x et y = cos x. Trouve, en justifiant, tous les intervalles de [0, 2π] où sin x < cos x. [[sc|Sinus (violet) et cosinus (vert)]]",
    "5. Le graphique montre y = tan x et la droite y = 2. Combien de solutions l'équation tan x = 2 a-t-elle dans [0, 2π] ? Trouve-les à 2 décimales près et explique pourquoi elles sont espacées de π. [[tn|La tangente et la droite y = 2]]",
    "Communication",
    S`6. Explique, à l'aide du cercle trigonométrique, pourquoi \(y=\tan x\) a des asymptotes verticales et pourquoi sa période est \(\pi\).`,
    S`7. Explique la différence entre une fonction paire et une fonction impaire, et montre que le cosinus est pair et que le sinus est impair.`,
    "Mise en application",
    S`8. Utilise le graphique de \(y=\sin x\) et un angle remarquable pour résoudre \(\sin x=-\dfrac{\sqrt2}2\) pour \(-2\pi\le x\le2\pi\).`,
    S`9. Sachant que \(\cos1.2\approx0.3624\), utilise la symétrie et la périodicité pour trouver \(\cos(-1.2)\), \(\cos(2\pi-1.2)\) et \(\cos(1.2+\pi)\).`,
    S`10. Sur quels intervalles de \(0\le x\le2\pi\) les fonctions \(\sin x\) et \(\cos x\) sont-elles toutes les deux décroissantes ? Justifie.`,
    "Niveau difficile",
    S`11. Trouve toutes les valeurs de \(x\) dans \(-2\pi\le x\le2\pi\) où les graphiques de \(y=\tan x\) et de \(y=\sin x\) se rencontrent, et explique pourquoi il n'y en a pas d'autres.`,
    S`12. Détermine combien de solutions l'équation \(\sin x=\dfrac x8\) a pour \(x\ge0\). Explique ton raisonnement à l'aide d'une esquisse.`,
  ] },
  { code: "5.2", title: "Devoir 5.2 — Graphiques des fonctions trigonométriques inverses", figs: {
      cs: planeDoc(TG([[Math.sin, "violet"], [cut(Math.sin), "red"]], { xmin: -0.5, xmax: 6.8, ymin: -4, ymax: 4 }, [], vl([0, P, 2 * P]))) }, lines: [
    "Connaissance et compréhension",
    S`1. Évalue de façon exacte : \(\csc\dfrac{3\pi}2\), \(\sec\dfrac{2\pi}3\), \(\cot\dfrac{5\pi}4\).`,
    S`2. Donne le domaine, l'image et la période de \(y=\sec x\).`,
    S`3. Donne les asymptotes et les zéros de \(y=\cot x\) pour \(0\le x\le2\pi\).`,
    "Habiletés de la pensée",
    "4. Le graphique montre y = sin x et y = csc x. Décris comment chaque caractéristique du graphique de la cosécante (asymptotes, points tournants, signe) découle du graphique du sinus. [[cs|Sinus (violet) et cosécante (rouge)]]",
    S`5. Pour quelles valeurs de \(k\) l'équation \(\sec x=k\) n'a-t-elle aucune solution ? Exactement une solution dans \([0,2\pi)\) ? Explique.`,
    "Communication",
    S`6. Explique pourquoi \(\csc x\) et \(\sin^{-1}x\) sont différents, à l'aide d'un exemple.`,
    S`7. Explique pourquoi \(y=\cot x\) est décroissante sur chaque branche, à l'aide de \(\cot x=\dfrac1{\tan x}\).`,
    "Mise en application",
    S`8. Résous \(\csc x=-2\) pour \(0\le x\le2\pi\).`,
    S`9. Résous \(\sec x=\sqrt2\) pour \(0\le x\le2\pi\).`,
    S`10. Esquisse \(y=2\sec x\) pour \(0\le x\le2\pi\). Indique les asymptotes et les points tournants, et donne l'image.`,
    "Niveau difficile",
    S`11. Résous \(\sec^2x=\dfrac43\) pour \(0\le x\le2\pi\).`,
    S`12. Trouve tous les points d'intersection de \(y=\cos x\) et de \(y=\sec x\) pour \(-2\pi\le x\le2\pi\), et explique pourquoi les deux graphiques ne se rencontrent qu'en ces points.`,
  ] },
  { code: "5.3", title: "Devoir 5.3 — Fonctions sinusoïdales", figs: {
      g: planeDoc(TG([[(x) => 3 * Math.cos(2 * (x - P / 4)) + 1, "violet"]], { xmin: -0.5, xmax: 6.8, ymin: -3, ymax: 5 })) }, lines: [
    "Connaissance et compréhension",
    S`1. Donne l'amplitude, la période, le déphasage et la translation verticale de \(y=-2\sin\left(3\left(x-\dfrac\pi4\right)\right)+5\).`,
    S`2. Trouve la période et le déphasage de \(y=\cos(4x+\pi)\).`,
    S`3. Donne l'image de \(y=\dfrac12\cos x-3\).`,
    "Habiletés de la pensée",
    "4. Écris une équation avec le cosinus et une équation avec le sinus pour le graphique représenté. Vérifie chacune en deux points. [[g|Une sinusoïde]]",
    S`5. Une sinusoïde a un minimum en \((3,-5)\) et le maximum suivant en \((7,9)\). Écris son équation.`,
    "Communication",
    S`6. Explique pourquoi le déphasage de \(y=\sin(2x-\pi)\) est \(\dfrac\pi2\), et non \(\pi\).`,
    S`7. Décris, dans l'ordre, les transformations qui appliquent \(y=\sin x\) sur \(y=4\sin\left(\dfrac12x+\dfrac\pi6\right)-1\).`,
    "Mise en application",
    S`8. Donne les cinq points clés d'un cycle de \(y=-3\cos\left(2\left(x+\dfrac\pi6\right)\right)+2\) et esquisse-le.`,
    S`9. Trouve les deux premières valeurs positives de \(x\) pour lesquelles \(y=2\sin\left(x-\dfrac\pi3\right)+1\) vaut \(2\).`,
    S`10. Écris \(y=5\sin\left(x+\dfrac\pi2\right)\) sous la forme d'une fonction cosinus, et \(y=5\cos\left(x-\dfrac\pi2\right)\) sous la forme d'une fonction sinus.`,
    "Niveau difficile",
    S`11. Trouve toutes les valeurs de \(d\) pour lesquelles \(y=3\cos2x+d\) a exactement deux zéros dans \([0,\pi)\).`,
    S`12. Le graphique de \(y=\sin x\) subit une compression horizontale de facteur \(\dfrac13\), puis une translation de \(\dfrac\pi2\) vers la droite. Un élève écrit \(y=\sin\left(3x-\dfrac\pi2\right)\). Est-ce correct ? Donne l'équation correcte et vérifie-la.`,
  ] },
  { code: "5.4", title: "Devoir 5.4 — Résolution d'équations trigonométriques", figs: {
      s2: planeDoc(TG([[(x) => Math.sin(2 * x), "violet"], [() => -0.5, "blue"]], V)),
      uc: planeDoc(UC(225, "θ")) }, lines: [
    "Connaissance et compréhension",
    S`1. Résous \(2\cos x+\sqrt3=0\) pour \(0\le x\le2\pi\).`,
    S`2. Résous \(\tan x=\dfrac1{\sqrt3}\) pour \(0\le x\le2\pi\).`,
    S`3. Résous \(4\sin x-3=0\) pour \(0\le x\le2\pi\), à deux décimales près.`,
    "Habiletés de la pensée",
    "4. Le graphique montre y = sin 2x et y = −1/2. Résous sin 2x = −1/2 pour 0 ≤ x ≤ 2π et vérifie que le nombre de solutions correspond au graphique. [[s2|y = sin 2x et y = −1/2]]",
    S`5. Résous \(2\cos^2x-\sin x-1=0\) pour \(0\le x\le2\pi\).`,
    "Communication",
    S`6. Un élève résout \(\sin x\cos x=\cos x\) en divisant par \(\cos x\). Explique l'erreur et donne la solution complète pour \(0\le x\le2\pi\).`,
    "7. Le cercle trigonométrique montre un angle θ du quadrant 3. Explique comment l'angle de référence et la règle CAST donnent toutes les solutions de sin x = sin θ. [[uc|Angle θ]]",
    "Mise en application",
    S`8. Résous \(\cos2x=\sin x\) pour \(0\le x\le2\pi\).`,
    S`9. Résous \(3\tan^2x-1=0\) pour \(0\le x\le2\pi\).`,
    S`10. Écris la solution générale de \(2\sin x+1=0\).`,
    "Niveau difficile",
    S`11. Résous \(\sin2x+\sin x=0\) pour \(0\le x\le2\pi\).`,
    S`12. Résous \(2\sin^2x+3\cos x\ge3\) pour \(0\le x\le2\pi\). Explique à l'aide d'un tableau de signes ou d'un graphique.`,
  ] },
  { code: "5.5", title: "Devoir 5.5 — Modèles trigonométriques et taux de variation", figs: {
      w: planeDoc(TG([[(t) => -12 * Math.cos((P / 30) * t) + 14, "violet"]], { xmin: -2, xmax: 125, ymin: 0, ymax: 28 }, [], { step: { x: 10, y: 2 }, xlabel: "t (s)" })) }, lines: [
    "Connaissance et compréhension",
    S`1. Pour \(h(t)=6\sin\left(\dfrac\pi8t\right)+10\), donne le maximum, le minimum et la période.`,
    S`2. Une grande roue a un rayon de 18 m, son centre est à 20 m de hauteur, et elle fait un tour toutes les 90 s. Donne la plus grande et la plus petite hauteur ainsi que la valeur de \(k\).`,
    S`3. Trouve le taux de variation moyen de \(y=5\cos t\) de \(t=0\) à \(t=\pi\).`,
    "Habiletés de la pensée",
    "4. Le graphique montre la hauteur d'un passager. Écris l'équation du modèle et indique ce que représente chaque nombre. [[w|Hauteur d'un passager]]",
    S`5. Pour le modèle de la question 4, pendant combien de temps, à chaque tour, le passager est-il à plus de 20 m ?`,
    "Communication",
    "6. Explique pourquoi le taux de variation d'un modèle sinusoïdal vaut 0 à ses sommets et à ses creux, et est le plus grand là où il traverse son axe.",
    "7. Explique la différence entre un taux de variation moyen et un taux de variation instantané, en prenant la grande roue comme exemple.",
    "Mise en application",
    S`8. La marée haute est de 9.4 m à 2 h 00 et la marée basse suivante est de 1.8 m à 8 h 20. Écris un modèle avec le cosinus pour la profondeur \(t\) heures après minuit.`,
    "9. Pour ton modèle de la question 8, trouve la profondeur à 11 h 00 et le premier moment après 2 h 00 où la profondeur est de 5.6 m.",
    "10. Estime le taux de variation instantané de la profondeur à 5 h 10 à l'aide d'un petit intervalle. Interprète le signe.",
    "Niveau difficile",
    S`11. La durée du jour dans une ville est \(D=4.2\sin\left(\dfrac{2\pi}{365}(t-80)\right)+12.1\) heures. Trouve combien de jours par année ont plus de 15 heures de clarté.`,
    S`12. Deux grandes roues ont la même hauteur de centre. La roue A a un rayon de 10 m et une période de 40 s; la roue B a un rayon de 15 m et une période de 75 s. Quel passager se déplace verticalement le plus vite à un moment donné ? Justifie à l'aide des plus grands taux de variation.`,
  ] },
];
