// MCV4U-FR Fiche d'exercices 7.5 — Le produit vectoriel et ses propriétés (édition de l'enseignant)
import { svgT } from "./figT.mjs";
import { vdoc, p3, axes3, merge } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const add3 = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const para = (a, b) => ({ polys: [{ pts: [p3(0, 0, 0), p3(...a), p3(...add3(a, b)), p3(...b)], fill: "#ede9fe", stroke: "gray" }] });
const EXAMPLES = [
  { title: "Avec les composantes", q: S`Trouve $[3,1,-2]\times[1,0,4]$ et vérifie la réponse.`,
    steps: [S`$[1(4)-(-2)(0),\ (-2)(1)-3(4),\ 3(0)-1(1)]=[4,-14,-1]$.`, S`Vérifications : $12-14+2=0$ et $4+0-4=0$.`], ans: "[4, −14, −1]" },
  { title: "Vecteurs unitaires", q: S`Trouve $\vec j\times\vec k$ et $\vec k\times\vec j$.`,
    steps: [S`$[0,1,0]\times[0,0,1]=[1,0,0]$.`, S`Inverser l'ordre change le signe.`], ans: S`$\vec i$ et $-\vec i$` },
  { title: "La norme à partir de l'angle", q: S`$|\vec a|=7$, $|\vec b|=2$, angle de $150^\circ$. Trouve $|\vec a\times\vec b|$.`,
    steps: [S`$7\times2\times\sin150^\circ$.`], ans: "7" },
  { title: "Un parallélogramme", q: S`Trouve l'aire du parallélogramme formé par $[2,2,1]$ et $[1,-1,3]$.`,
    fig: VF(merge(V3, axes3(4.2), para([2, 2, 1], [1, -1, 3]), { arrows: [{ from: [0, 0], to: p3(2, 2, 1), vl: "a", off: 16 }, { from: [0, 0], to: p3(1, -1, 3), vl: "b", color: "blue", off: -16 }] }, { view: { xmin: -4, xmax: 5, ymin: -2.8, ymax: 6 } }), 4.4),
    steps: [S`Produit vectoriel $[7,-5,-4]$.`, S`$\sqrt{49+25+16}=\sqrt{90}$.`], ans: "environ 9.49" },
  { title: "Un triangle", q: S`Trouve l'aire du triangle de sommets $O$, $(1,2,0)$ et $(3,0,1)$.`,
    steps: [S`$[1,2,0]\times[3,0,1]=[2,-1,-6]$, de norme $\sqrt{41}$.`, S`On prend la moitié.`], ans: "environ 3.20" },
  { title: "Colinéaires?", q: S`$[1,3,-2]$ et $[-2,-6,4]$ sont-ils colinéaires?`,
    steps: [S`$[3(4)-(-2)(-6),\ (-2)(-2)-1(4),\ 1(-6)-3(-2)]=[0,0,0]$.`], ans: "oui : le produit vectoriel est le vecteur nul" },
  { title: "Un vecteur normal unitaire", q: S`Trouve un vecteur unitaire perpendiculaire à $[1,0,1]$ et à $[0,1,1]$.`,
    steps: [S`$[0(1)-1(1),\ 1(0)-1(1),\ 1(1)-0(0)]=[-1,-1,1]$, de norme $\sqrt3$.`], ans: S`$\frac{1}{\sqrt3}[-1,-1,1]$ (ou son opposé)` },
  { title: "Les scalaires se mettent en facteur", q: S`Si $\vec a\times\vec b=[1,-2,2]$, trouve $(2\vec a)\times(3\vec b)$ et $\vec b\times\vec a$.`,
    steps: [S`$(2\vec a)\times(3\vec b)=6(\vec a\times\vec b)$.`, S`$\vec b\times\vec a=-(\vec a\times\vec b)$.`], ans: "[6, −12, 12] et [−1, 2, −2]" },
  { title: "Trouver l'angle", q: S`$|\vec a\times\vec b|=6$, $|\vec a|=3$, $|\vec b|=4$. Trouve l'angle entre $\vec a$ et $\vec b$.`,
    steps: [S`$\sin\theta=\frac{6}{12}=\frac12$.`], ans: "30° ou 150° (le produit vectoriel seul ne permet pas de trancher)" },
];

const PROBLEMS = [
  { level: 1, q: S`Trouve $[1,0,0]\times[0,0,1]$.`, recap: S`$\vec i\times\vec k$.`, ans: "[0, −1, 0]" },
  { level: 1, q: S`Trouve $[2,1,0]\times[0,1,0]$.`, recap: "Seule la composante en z reste.", ans: "[0, 0, 2]" },
  { level: 1, q: S`$|\vec a|=3$, $|\vec b|=5$, vecteurs perpendiculaires. Trouve $|\vec a\times\vec b|$.`, recap: "sin 90° = 1.", ans: "15" },
  { level: 2, q: S`Trouve $[1,2,3]\times[4,5,6]$.`, recap: "Utilise la formule; vérifie avec des produits scalaires.", ans: "[−3, 6, −3]" },
  { level: 2, q: S`Trouve l'aire du parallélogramme construit sur $[1,1,1]$ et $[1,-1,0]$.`, recap: "La norme du produit vectoriel.", ans: S`$[1,1,-2]$ : $\sqrt6\approx2.45$` },
  { level: 2, q: S`Trouve l'aire du triangle $O$, $(2,1,3)$, $(1,0,2)$.`, recap: "La moitié de la norme du produit vectoriel.", ans: S`$[2,-1,-1]$ : $\frac{\sqrt6}2\approx1.22$` },
  { level: 2, q: S`Vérifie que $\vec b\times\vec a=-(\vec a\times\vec b)$ pour $\vec a=[1,0,2]$ et $\vec b=[0,3,1]$.`, recap: "Calcule les deux.", ans: "a × b = [−6, −1, 3], b × a = [6, 1, −3]" },
  { level: 2, q: S`Explique pourquoi $\vec a\times\vec a=\vec 0$ pour tout vecteur $\vec a$.`, recap: "L'angle est de 0°.", ans: "|a × a| = |a|² sin 0° = 0" },
  { level: 3, space: 5, q: S`Trouve $k$ tel que $[k,1,2]\times[2,2,4]=\vec 0$.`, recap: "Vecteurs colinéaires.", ans: "k = 1" },
  { level: 3, space: 5, q: S`Trouve l'aire de $\triangle ABC$ pour $A(1,1,1)$, $B(2,3,1)$ et $C(1,2,4)$.`, recap: "AB × AC.", ans: S`$[6,-3,1]$ : $\frac{\sqrt{46}}2\approx3.39$` },
  { level: 3, space: 5, q: S`Vérifie que $\vec a\times(\vec b+\vec c)=\vec a\times\vec b+\vec a\times\vec c$ pour $\vec a=[1,1,0]$, $\vec b=[0,1,1]$ et $\vec c=[1,0,1]$.`, recap: "Calcule les deux membres.", ans: "les deux membres valent [2, −2, 0]" },
  { level: 3, space: 5, q: S`Trouve un vecteur perpendiculaire à la fois à $[2,-1,1]$ et à l'axe des x.`, recap: S`Produit vectoriel avec $\vec i$.`, ans: "[0, 1, 1] (ou n'importe quel multiple)" },
  { level: 3, space: 5, q: S`Utilise le produit vectoriel pour trouver l'angle entre $[1,1,0]$ et $[1,0,0]$, puis confirme avec le produit scalaire.`, recap: S`$\sin\theta=\frac{|\vec a\times\vec b|}{|\vec a||\vec b|}$.`, ans: S`$|[0,0,-1]|=1$, $\sin\theta=\frac1{\sqrt2}$; le produit scalaire donne $\cos\theta=\frac1{\sqrt2}$ : $45^\circ$` },
];

export const WS = {
  code: "7.5",
  title: "Le produit vectoriel et ses propriétés",
  bigideas: S`$\vec a\times\vec b=[a_2b_3-a_3b_2,\ a_3b_1-a_1b_3,\ a_1b_2-a_2b_1]$ est un vecteur perpendiculaire à $\vec a$ et à $\vec b$, orienté selon la règle de la main droite, de norme $|\vec a||\vec b|\sin\theta$ — l'aire de leur parallélogramme. Il est anticommutatif ($\vec b\times\vec a=-\vec a\times\vec b$) et distributif, et les scalaires se mettent en facteur, mais il n'est pas associatif. Il vaut $\vec 0$ exactement pour des vecteurs colinéaires.`,
  goals: ["Calculer des produits vectoriels.", "Utiliser la règle de la main droite.", "Trouver des aires.", "Utiliser et vérifier les propriétés."],
  curriculum: "C2.6, C2.7",
  vocab: [["Produit vectoriel", "vecteur ⟂ aux deux"], ["Norme", "$|\\vec a||\\vec b|\\sin\\theta$"], ["Règle de la main droite", "doigts de a vers b"], ["Anticommutatif", "$\\vec b\\times\\vec a=-\\vec a\\times\\vec b$"]],
  hook: S`Il te faut un vecteur perpendiculaire à la fois à $[1,0,0]$ et à $[0,1,0]$. Nomme-en deux. Comment pourrais-tu en trouver un pour $[1,2,3]$ et $[4,5,6]$?`,
  concepts: [
    ["1. Direction", S`$\vec a\times\vec b$ est perpendiculaire au parallélogramme :
${VF(merge(V3, axes3(4.2), para([3, 0, 0], [0, 2.5, 0]), { arrows: [{ from: [0, 0], to: p3(3, 0, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0, 2.5, 0), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(0, 0, 4), vl: "a×b", color: "red", off: -18 }] }), 4.2)}`],
    ["2. Calculer", S`La première composante saute la première colonne : $a_2b_3-a_3b_2$; celle du milieu : $a_3b_1-a_1b_3$.`],
    ["3. Vérifier", S`$(\vec a\times\vec b)\cdot\vec a=(\vec a\times\vec b)\cdot\vec b=0$.`],
  ],
  tips: ["Attention à la composante du milieu.", "L'ordre compte.", "Vérifie avec des produits scalaires.", "Aire du triangle = la moitié.", "Nul ⇔ colinéaires."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
