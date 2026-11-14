// MCV4U-FR Fiche d'exercices 7.3 — Applications du produit scalaire (édition de l'enseignant)
import { svgT } from "./figT.mjs";
import { vdoc, pol } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const EXAMPLES = [
  { title: "Pousser une tondeuse", q: S`On pousse une tondeuse sur 30 m avec une force de 150 N orientée à $20^\circ$ sous l'horizontale. Trouve le travail effectué.`,
    fig: VF({ view: { xmin: -0.6, xmax: 7, ymin: -0.8, ymax: 3.4 }, grid: false, axes: false, arrows: [{ from: pol(4, 160, [4, 0.2]), to: [4, 0.2], vl: "F", label: "150 N", off: -16 }, { from: [0, -0.5], to: [6.6, -0.5], color: "blue", label: "30 m", off: -12, w: 2 }], arcs: [{ at: [4, 0.2], r: 1.1, a: 160, b: 180, label: "20°" }] }, 4.8),
    steps: [S`$W=150\times30\times\cos20^\circ$.`], ans: "environ 4229 J" },
  { title: "Le travail à partir des composantes", q: S`$\vec F=[20,-5]$ N déplace un objet de $(2,3)$ à $(14,8)$ (en mètres). Trouve le travail.`,
    steps: [S`$\vec d=[12,5]$; $W=240-25$.`], ans: "215 J" },
  { title: "Projections scalaire et vectorielle", q: S`Trouve les projections scalaire et vectorielle de $[5,1]$ sur $[3,4]$.`,
    steps: [S`Produit scalaire 19, $|[3,4]|=5$ : projection scalaire 3.8.`, S`Projection vectorielle $\frac{19}{25}[3,4]$.`], ans: "3.8 et [2.28, 3.04]" },
  { title: "Une projection négative", q: S`Trouve les projections scalaire et vectorielle de $[-2,6]$ sur $[4,0]$.`,
    steps: [S`Produit scalaire $-8$, $|[4,0]|=4$ : projection scalaire $-2$.`, S`Projection vectorielle $\frac{-8}{16}[4,0]$.`], ans: "−2 et [−2, 0]" },
  { title: "Décomposer un vecteur", q: S`Décompose $[6,2]$ en une partie parallèle et une partie perpendiculaire à $[1,2]$.`,
    fig: VF({ view: { xmin: -0.5, xmax: 7, ymin: -0.8, ymax: 4.8 }, step: 1, arrows: [{ from: [0, 0], to: [6, 2], vl: "a", off: 16 }, { from: [0, 0], to: [2, 4], color: "red", label: "[2, 4]", off: -18 }, { from: [2, 4], to: [6, 2], color: "green", label: "[4, −2]", off: -16 }] }, 4.4),
    steps: [S`Projection $\frac{10}5[1,2]=[2,4]$.`, S`Partie perpendiculaire $[6,2]-[2,4]=[4,-2]$.`], ans: "[2, 4] parallèle, [4, −2] perpendiculaire" },
  { title: "Une distance", q: S`Trouve la distance du point $P(5,5)$ à la droite qui passe par l'origine et qui a la direction $[3,1]$.`,
    steps: [S`Projection de $[5,5]$ : $\frac{20}{10}[3,1]=[6,2]$.`, S`Partie perpendiculaire $[-1,3]$, de norme $\sqrt{10}$.`], ans: "environ 3.16" },
  { title: "Le travail de la gravité", q: S`Une boîte de 20 N glisse sur 5 m vers le bas d'une rampe inclinée à $25^\circ$. Quel travail la gravité effectue-t-elle?`,
    steps: [S`Le poids forme un angle de $90^\circ-25^\circ=65^\circ$ avec le mouvement.`, S`$W=20\times5\times\cos65^\circ=100\sin25^\circ$.`], ans: "environ 42.26 J" },
  { title: "Aucun travail", q: S`Un serveur transporte un plateau à hauteur constante d'un bout à l'autre d'une salle. Quel travail la force vers le haut exercée sur le plateau effectue-t-elle?`,
    steps: [S`La force est verticale et le mouvement est horizontal : $\theta=90^\circ$, $\cos90^\circ=0$.`], ans: "0 J" },
  { title: "L'ordre compte", q: S`Pour $\vec a=[2,0]$ et $\vec b=[3,3]$, compare la projection scalaire de $\vec b$ sur $\vec a$ avec celle de $\vec a$ sur $\vec b$.`,
    steps: [S`$\vec a\cdot\vec b=6$. Sur $\vec a$ : $\frac62=3$. Sur $\vec b$ : $\frac6{\sqrt{18}}\approx1.41$.`], ans: "3 et environ 1.41 — elles sont différentes" },
];

const PROBLEMS = [
  { level: 1, q: S`Une force de 30 N déplace un objet sur 10 m dans sa propre direction. Trouve le travail.`, recap: S`$\cos0^\circ=1$.`, ans: "300 J" },
  { level: 1, q: S`Trouve la projection scalaire de $[3,4]$ sur $[1,0]$.`, recap: "Divise par |b| = 1.", ans: "3" },
  { level: 1, q: S`Trouve le travail effectué par $\vec F=[2,2]$ N sur un déplacement $\vec d=[5,0]$ m.`, recap: "Produit scalaire.", ans: "10 J" },
  { level: 2, q: S`Une force de 200 N, orientée à $30^\circ$ du mouvement, déplace une caisse sur 15 m. Trouve le travail.`, recap: S`$200\times15\cos30^\circ$.`, ans: "environ 2598 J" },
  { level: 2, q: S`Trouve la projection scalaire de $[1,7]$ sur $[3,-4]$.`, recap: "Le produit scalaire divisé par 5.", ans: "−5" },
  { level: 2, q: S`Trouve la projection vectorielle de $[4,2]$ sur $[1,1]$.`, recap: S`$\frac{6}{2}[1,1]$.`, ans: "[3, 3]" },
  { level: 2, q: S`Trouve la partie de $[4,2]$ perpendiculaire à $[1,1]$.`, recap: "Soustrais la projection.", ans: "[1, −1]" },
  { level: 2, q: S`$\vec F=[10,3]$ N déplace un objet de $(1,1)$ à $(6,4)$. Trouve le travail.`, recap: "d = [5, 3].", ans: "59 J" },
  { level: 3, space: 5, q: S`Trouve la distance du point $(8,1)$ à la droite qui passe par l'origine et qui a la direction $[2,1]$.`, recap: "La norme de la partie perpendiculaire.", ans: S`partie perpendiculaire $[1.2,-2.4]$ : $\approx2.68$` },
  { level: 3, space: 5, q: S`Une traction de 90 N déplace un chariot sur 25 m. Combien de travail de plus est effectué avec la traction à $35^\circ$ du sol plutôt qu'à $60^\circ$?`, recap: "La différence entre deux travaux.", ans: "environ 718 J" },
  { level: 3, space: 5, q: S`Montre que la projection scalaire de $\vec a$ sur $k\vec b$ ($k\gt0$) est égale à la projection de $\vec a$ sur $\vec b$.`, recap: "Le k se simplifie.", ans: S`$\frac{\vec a\cdot k\vec b}{|k\vec b|}=\frac{k\,\vec a\cdot\vec b}{k|\vec b|}$` },
  { level: 3, space: 5, q: S`$|\vec a|=10$ et sa projection scalaire sur $\vec b$ est 4. Trouve l'angle entre $\vec a$ et $\vec b$.`, recap: S`$10\cos\theta=4$.`, ans: "environ 66.42°" },
  { level: 3, space: 5, q: S`Un bloc posé sur une rampe orientée selon $[4,1]$ a un poids de $[0,-50]$ N. Trouve la composante de son poids le long de la rampe, sous forme de vecteur et sous forme de norme.`, recap: "Projection vectorielle sur [4, 1].", ans: S`$-\frac{50}{17}[4,1]\approx[-11.76,-2.94]$, norme $\approx12.13$ N` },
];

export const WS = {
  code: "7.3",
  title: "Applications du produit scalaire",
  bigideas: S`La projection scalaire de $\vec a$ sur $\vec b$, $\frac{\vec a\cdot\vec b}{|\vec b|}=|\vec a|\cos\theta$, est la longueur, avec un signe, de l'ombre de $\vec a$ sur la droite de $\vec b$; la projection vectorielle est $\frac{\vec a\cdot\vec b}{|\vec b|^2}\vec b$. En la soustrayant, il reste la partie de $\vec a$ perpendiculaire à $\vec b$, dont la norme est la distance d'un point à une droite. Le travail est un produit scalaire : $W=\vec F\cdot\vec d$.`,
  goals: ["Trouver des projections scalaires et vectorielles.", "Calculer un travail.", "Décomposer des vecteurs en parties perpendiculaires.", "Trouver des distances à l'aide de projections."],
  curriculum: "C2.4, C2.8",
  vocab: [["Projection scalaire", "$\\frac{\\vec a\\cdot\\vec b}{|\\vec b|}$"], ["Projection vectorielle", "$\\frac{\\vec a\\cdot\\vec b}{|\\vec b|^2}\\vec b$"], ["Travail", "$\\vec F\\cdot\\vec d$"], ["Partie perpendiculaire", "a moins sa projection"]],
  hook: S`Pourquoi est-il plus facile de tirer un traîneau avec une longue corde basse qu'avec une corde courte tenue haut, même avec la même traction?`,
  concepts: [
    ["1. L'ombre", S`Projection de $\vec a$ sur $\vec b$ :
${VF({ view: { xmin: -0.5, xmax: 7, ymin: -0.8, ymax: 4 }, grid: false, axes: false, segs: [{ pts: [[-0.3, 0], [6.8, 0]], dash: true }, { pts: [pol(4.5, 40), [3.45, 0]], dash: true }], arrows: [{ from: [0, 0], to: [6.4, 0], vl: "b", off: 16, w: 2 }, { from: [0, 0], to: pol(4.5, 40), vl: "a", off: -16 }, { from: [0, 0], to: [3.45, 0], color: "red", w: 4.5 }] }, 4.4)}`],
    ["2. Le travail", S`$W=|\vec F||\vec d|\cos\theta=\vec F\cdot\vec d$ joules.`],
    ["3. La partie perpendiculaire", S`$\vec a-\text{proj}_{\vec b}\vec a$ est perpendiculaire à $\vec b$.`],
  ],
  tips: ["Divise par |b| pour la projection scalaire.", "Divise par |b|² pour la projection vectorielle.", "Le travail est un scalaire.", "Force perpendiculaire : aucun travail.", "La projection sur b ≠ la projection sur a."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
