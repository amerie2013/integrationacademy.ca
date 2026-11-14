// MCV4U-FR Fiche d'exercices 7.2 — Le produit scalaire (édition de l'enseignant)
import { svgT } from "./figT.mjs";
import { vdoc, pol } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const EXAMPLES = [
  { title: "À partir des normes et d'un angle", q: S`$|\vec a|=8$, $|\vec b|=3$, et l'angle entre les vecteurs mesure $135^\circ$. Trouve $\vec a\cdot\vec b$.`,
    steps: [S`$8\times3\times\cos135^\circ$.`], ans: "environ −16.97" },
  { title: "L'angle à partir des composantes", q: S`Trouve l'angle entre $[-2,5]$ et $[4,1]$.`,
    fig: VF({ view: { xmin: -3, xmax: 5, ymin: -0.8, ymax: 5.8 }, step: 1, arrows: [{ from: [0, 0], to: [-2, 5], vl: "a", off: -16 }, { from: [0, 0], to: [4, 1], vl: "b", color: "blue", off: 16 }], arcs: [{ at: [0, 0], r: 1, a: 14.04, b: 111.8, label: "97.8°" }] }, 4.6),
    steps: [S`Produit scalaire $-8+5=-3$; normes $\sqrt{29}$ et $\sqrt{17}$.`, S`$\cos\theta=\frac{-3}{\sqrt{29}\sqrt{17}}\approx-0.1351$.`], ans: "environ 97.77°" },
  { title: "Perpendiculaires?", q: S`$[8,2]$ et $[-1,4]$ sont-ils perpendiculaires?`,
    steps: [S`$-8+8=0$.`], ans: "oui" },
  { title: "Résoudre pour obtenir des vecteurs perpendiculaires", q: S`Trouve $k$ pour que $[k,2]\perp[k,-8]$.`,
    steps: [S`$k^2-16=0$.`], ans: "k = 4 ou k = −4" },
  { title: "Une différence de carrés", q: S`$|\vec a|=5$ et $|\vec b|=3$. Trouve $(\vec a+\vec b)\cdot(\vec a-\vec b)$.`,
    steps: [S`On développe : $\vec a\cdot\vec a-\vec a\cdot\vec b+\vec b\cdot\vec a-\vec b\cdot\vec b=|\vec a|^2-|\vec b|^2$.`], ans: "25 − 9 = 16" },
  { title: "Un vecteur avec lui-même", q: S`Trouve $[3,-1]\cdot[3,-1]$ et compare le résultat avec $|[3,-1]|$.`,
    steps: [S`$9+1=10$, et $|[3,-1]|=\sqrt{10}$.`], ans: S`$10=|\vec a|^2$` },
  { title: "L'angle avec un axe", q: S`Utilise un produit scalaire avec $\vec i$ pour trouver l'angle entre $[1,\sqrt3]$ et l'axe des x.`,
    steps: [S`$[1,\sqrt3]\cdot[1,0]=1$, $|[1,\sqrt3]|=2$ : $\cos\theta=\frac12$.`], ans: "60°" },
  { title: "Construire un vecteur perpendiculaire", q: S`Trouve un vecteur perpendiculaire à $[5,-2]$.`,
    fig: VF({ view: { xmin: -1, xmax: 6, ymin: -3, ymax: 5.6 }, step: 1, arrows: [{ from: [0, 0], to: [5, -2], vl: "a", off: 16 }, { from: [0, 0], to: [2, 5], vl: "n", color: "blue", off: -16 }] }, 3.8),
    steps: [S`On échange les composantes et on change un signe : $[2,5]$. Vérification : $10-10=0$.`], ans: "[2, 5] (ou n'importe quel multiple)" },
  { title: "Une norme à partir de produits scalaires", q: S`$|\vec a|=4$, $|\vec b|=6$ et $\vec a\cdot\vec b=-3$. Trouve $|\vec a-\vec b|$.`,
    steps: [S`$|\vec a-\vec b|^2=|\vec a|^2-2\vec a\cdot\vec b+|\vec b|^2=16+6+36$.`], ans: S`$\sqrt{58}\approx7.62$` },
];

const PROBLEMS = [
  { level: 1, q: S`Trouve $[4,-1]\cdot[2,6]$.`, recap: "8 − 6.", ans: "2" },
  { level: 1, q: S`$|\vec a|=5$, $|\vec b|=2$, angle de $60^\circ$. Trouve $\vec a\cdot\vec b$.`, recap: S`$10\cos60^\circ$.`, ans: "5" },
  { level: 1, q: S`Trouve $\vec i\cdot\vec j$.`, recap: "Vecteurs unitaires perpendiculaires.", ans: "0" },
  { level: 2, q: S`Trouve l'angle entre $[3,1]$ et $[-1,2]$.`, recap: S`$\cos\theta=\frac{-1}{\sqrt{10}\sqrt5}$.`, ans: "environ 98.13°" },
  { level: 2, q: S`Trouve $k$ pour que $[6,k]\perp[3,-9]$.`, recap: "18 − 9k = 0.", ans: "k = 2" },
  { level: 2, q: S`Si $\vec a\cdot\vec b=4$, trouve $(2\vec a)\cdot(3\vec b)$.`, recap: "Les scalaires sortent.", ans: "24" },
  { level: 2, q: S`Le triangle de sommets $O$, $A(4,1)$ et $B(-1,4)$ est-il rectangle en $O$?`, recap: "Produit scalaire de OA et de OB.", ans: "oui : [4, 1] · [−1, 4] = 0" },
  { level: 2, q: S`$|\vec a|=3$, $|\vec b|=2$, $\vec a\cdot\vec b=1$. Trouve $(\vec a+2\vec b)\cdot(\vec a-\vec b)$.`, recap: "Développe comme en algèbre.", ans: "9 + 1 − 8 = 2" },
  { level: 3, space: 5, q: S`Trouve tous les vecteurs unitaires perpendiculaires à $[3,4]$.`, recap: "Direction perpendiculaire, puis norme 1.", ans: S`$\left[-\frac45,\frac35\right]$ et $\left[\frac45,-\frac35\right]$` },
  { level: 3, space: 5, q: S`Prouve que les diagonales d'un losange sont perpendiculaires.`, recap: S`Diagonales $\vec a+\vec b$ et $\vec a-\vec b$ avec $|\vec a|=|\vec b|$.`, ans: S`$(\vec a+\vec b)\cdot(\vec a-\vec b)=|\vec a|^2-|\vec b|^2=0$` },
  { level: 3, space: 5, q: S`Trouve $\angle BAC$ pour $A(1,1)$, $B(6,2)$ et $C(3,5)$.`, recap: "Utilise AB et AC.", ans: "environ 52.13°" },
  { level: 3, space: 5, q: S`Trouve $x$ pour que l'angle entre $[x,1]$ et $[1,1]$ mesure $45^\circ$.`, recap: S`$\frac{x+1}{\sqrt{x^2+1}\sqrt2}=\frac{1}{\sqrt2}$.`, ans: "x = 0" },
  { level: 3, space: 5, q: S`Explique pourquoi $(\vec a\cdot\vec b)\vec c$ a un sens, mais pas $(\vec a\cdot\vec b)\cdot\vec c$.`, recap: "Quel genre d'objet est a · b?", ans: "a · b est un scalaire : il peut multiplier c, mais un produit scalaire exige deux vecteurs" },
];

export const WS = {
  code: "7.2",
  title: "Le produit scalaire",
  bigideas: S`$\vec a\cdot\vec b=|\vec a||\vec b|\cos\theta=a_1b_1+a_2b_2$ est un scalaire. Il est positif pour les angles aigus, nul pour des vecteurs perpendiculaires et négatif pour les angles obtus, et $\cos\theta=\frac{\vec a\cdot\vec b}{|\vec a||\vec b|}$ donne l'angle entre deux vecteurs. Il est commutatif et distributif, les scalaires se mettent en facteur, et $\vec a\cdot\vec a=|\vec a|^2$ — on peut donc développer des expressions comme $|\vec a-\vec b|^2$ comme en algèbre.`,
  goals: ["Calculer des produits scalaires des deux façons.", "Trouver l'angle entre deux vecteurs.", "Vérifier si des vecteurs sont perpendiculaires.", "Développer à l'aide des propriétés."],
  curriculum: "C2.4, C2.5",
  vocab: [["Produit scalaire", "$|\\vec a||\\vec b|\\cos\\theta$"], ["Composantes", "$a_1b_1+a_2b_2$"], ["Orthogonaux", "produit scalaire nul"], ["$\\vec a\\cdot\\vec a$", "$|\\vec a|^2$"]],
  hook: S`Deux vecteurs ont des normes de 3 et de 4. Quelle est la plus grande valeur possible de leur produit scalaire? La plus petite? Quand vaut-il 0?`,
  concepts: [
    ["1. Géométrie", S`$\vec a\cdot\vec b=|\vec b|\times$ (la partie de $\vec a$ dans la direction de $\vec b$) :
${VF({ view: { xmin: -0.5, xmax: 6.5, ymin: -0.8, ymax: 4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [6, 0], vl: "b", off: 16 }, { from: [0, 0], to: pol(4.5, 42), vl: "a", off: -16 }], segs: [{ pts: [pol(4.5, 42), [3.34, 0]], dash: true }], arcs: [{ at: [0, 0], r: 1.1, a: 0, b: 42, label: "θ" }] }, 4.2)}`],
    ["2. Composantes", S`$[a_1,a_2]\cdot[b_1,b_2]=a_1b_1+a_2b_2$.`],
    ["3. Angle", S`$\cos\theta=\frac{\vec a\cdot\vec b}{|\vec a||\vec b|}$, avec $0^\circ\le\theta\le180^\circ$.`],
  ],
  tips: ["La réponse est un nombre.", "Nul signifie perpendiculaires.", "a · a = |a|².", "Les scalaires se mettent en facteur.", "L'angle est compris entre 0° et 180°."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
