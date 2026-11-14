// MCV4U-FR Fiche d'exercices 7.6 — Applications du produit scalaire et du produit vectoriel (édition de l'enseignant)
import { svgT } from "./figT.mjs";
import { vdoc, pol, p3, axes3, merge } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const EXAMPLES = [
  { title: "Moment de force", q: S`Une force de 35 N agit à l'extrémité d'une clé de 0.3 m, à $60^\circ$ du manche. Trouve le moment de force.`,
    fig: VF({ view: { xmin: -0.6, xmax: 7.4, ymin: -0.8, ymax: 4.2 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 0], vl: "r", label: "0.3 m", off: 16, w: 5 }, { from: [5, 0], to: pol(3.5, 60, [5, 0]), vl: "F", label: "35 N", color: "red", off: -16 }], arcs: [{ at: [5, 0], r: 1, a: 0, b: 60, label: "60°" }] }, 4.6),
    steps: [S`$|\vec\tau|=0.3\times35\times\sin60^\circ$.`], ans: "environ 9.09 N·m" },
  { title: "Un vecteur moment de force", q: S`$\vec r=[0,0.4,0]$ m et $\vec F=[20,0,15]$ N. Trouve $\vec\tau=\vec r\times\vec F$.`,
    steps: [S`$[0.4(15)-0(0),\ 0(20)-0(15),\ 0(0)-0.4(20)]=[6,0,-8]$.`], ans: "[6, 0, −8] N·m, de norme 10 N·m" },
  { title: "Aire d'un triangle", q: S`Trouve l'aire de $\triangle ABC$ pour $A(2,0,1)$, $B(0,3,1)$ et $C(1,1,4)$.`,
    steps: [S`$\overrightarrow{AB}=[-2,3,0]$, $\overrightarrow{AC}=[-1,1,3]$; produit vectoriel $[9,6,1]$.`, S`La moitié de $\sqrt{118}$.`], ans: "environ 5.43" },
  { title: "Volume", q: S`Trouve le volume du parallélépipède construit sur $\vec a=[1,2,0]$, $\vec b=[0,1,3]$ et $\vec c=[2,0,1]$.`,
    steps: [S`$\vec b\times\vec c=[1,6,-2]$.`, S`$\vec a\cdot(\vec b\times\vec c)=1+12+0$.`], ans: "13 unités cubes" },
  { title: "Coplanaires?", q: S`$[1,0,2]$, $[2,1,1]$ et $[3,1,3]$ sont-ils coplanaires?`,
    steps: [S`$[2,1,1]\times[3,1,3]=[2,-3,-1]$; produit scalaire avec $[1,0,2]$ : $2+0-2=0$.`], ans: "oui ([3, 1, 3] est la somme des deux autres)" },
  { title: "Le travail dans l'espace", q: S`$\vec F=[4,1,-2]$ N déplace un objet de $(1,0,0)$ à $(5,3,-1)$. Trouve le travail.`,
    steps: [S`$\vec d=[4,3,-1]$; $16+3+2$.`], ans: "21 J" },
  { title: "Hauteur d'un parallélépipède", q: S`Pour le parallélépipède de l'exemple 4, trouve la hauteur au-dessus de la face formée par $\vec b$ et $\vec c$.`,
    steps: [S`Aire de la base $|\vec b\times\vec c|=\sqrt{41}$.`, S`Hauteur $=\frac{13}{\sqrt{41}}$.`], ans: "environ 2.03" },
  { title: "La meilleure traction", q: S`Quel est le plus grand moment de force possible avec une force de 30 N sur une clé de 0.5 m?`,
    steps: [S`On tire à $90^\circ$ : $0.5\times30$.`], ans: "15 N·m" },
  { title: "Un parallélogramme dans l'espace", q: S`Trouve l'aire du parallélogramme de sommets $(0,0,0)$, $(3,0,0)$, $(1,2,2)$ et $(4,2,2)$.`,
    fig: VF(merge(V3, axes3(4.6), { polys: [{ pts: [p3(0, 0, 0), p3(3, 0, 0), p3(4, 2, 2), p3(1, 2, 2)], fill: "#ede9fe", stroke: "violet" }] }), 4.2),
    steps: [S`Côtés $[3,0,0]$ et $[1,2,2]$; produit vectoriel $[0,-6,6]$.`], ans: S`$\sqrt{72}\approx8.49$` },
];

const PROBLEMS = [
  { level: 1, q: S`Une force de 50 N agit perpendiculairement à une clé de 0.2 m. Trouve le moment de force.`, recap: "r F.", ans: "10 N·m" },
  { level: 1, q: S`Trouve le volume de la boîte construite sur $[3,0,0]$, $[0,2,0]$ et $[0,0,5]$.`, recap: "Produit mixte.", ans: "30" },
  { level: 1, q: S`Trouve le travail effectué par $\vec F=[2,0,1]$ sur un déplacement $\vec d=[3,4,5]$.`, recap: "Produit scalaire.", ans: "11 J" },
  { level: 2, q: S`Une force de 80 N agit sur une clé de 0.25 m, à $40^\circ$ du manche. Trouve le moment de force.`, recap: S`$0.25\times80\sin40^\circ$.`, ans: "environ 12.86 N·m" },
  { level: 2, q: S`Trouve l'aire du triangle de sommets $(1,0,0)$, $(0,2,0)$ et $(0,0,3)$.`, recap: "Deux vecteurs côtés à partir d'un même sommet.", ans: S`produit vectoriel $[6,3,2]$ : aire $3.5$` },
  { level: 2, q: S`Trouve le volume du parallélépipède construit sur $[1,1,1]$, $[1,2,0]$ et $[0,1,2]$.`, recap: S`$[1,2,0]\times[0,1,2]=[4,-2,1]$.`, ans: "3" },
  { level: 2, q: S`$[1,2,1]$, $[0,1,1]$ et $[1,3,2]$ sont-ils coplanaires?`, recap: "Produit mixte.", ans: "oui : le produit mixte est nul" },
  { level: 2, q: S`$\vec r=[0.3,0,0]$ m et $\vec F=[0,0,-40]$ N. Trouve $\vec\tau=\vec r\times\vec F$.`, recap: "Utilise la formule.", ans: "[0, 12, 0] N·m" },
  { level: 3, space: 5, q: S`Une force de 50 N appliquée sur une clé de 0.4 m donne un moment de force de 12 N·m. À quel angle du manche est-elle appliquée?`, recap: S`$\sin\theta=\frac{12}{20}$.`, ans: "environ 36.87° (ou 143.13°)" },
  { level: 3, space: 5, q: S`Trouve $k$ pour que $[1,k,0]$, $[0,1,1]$ et $[2,0,1]$ soient coplanaires.`, recap: S`$[0,1,1]\times[2,0,1]=[1,2,-2]$.`, ans: "k = −0.5" },
  { level: 3, space: 5, q: S`Un tétraèdre a les trois mêmes arêtes issues d'un sommet que le parallélépipède de l'exemple 4. Son volume est le sixième de celui du parallélépipède. Trouve-le.`, recap: "13 ÷ 6.", ans: "environ 2.17" },
  { level: 3, space: 5, q: S`Utilise $\frac{|\overrightarrow{OP}\times\vec d|}{|\vec d|}$ pour trouver la distance de $P(1,2,3)$ à l'axe des x, puis vérifie-la d'une autre façon.`, recap: S`$\vec d=[1,0,0]$.`, ans: S`$|[0,3,-2]|=\sqrt{13}\approx3.61$; aussi $\sqrt{2^2+3^2}$` },
  { level: 3, space: 5, q: S`Explique pourquoi $|\vec a\cdot(\vec b\times\vec c)|\le|\vec a||\vec b||\vec c|$, et dans quel cas il y a égalité.`, recap: "Volume ≤ produit des longueurs des arêtes.", ans: "le volume d'une boîte inclinée est au plus celui de la boîte rectangulaire ayant les mêmes arêtes; il y a égalité lorsque les vecteurs sont perpendiculaires deux à deux" },
];

export const WS = {
  code: "7.6",
  title: "Applications du produit scalaire et du produit vectoriel",
  bigideas: S`On choisit le produit selon la question. Le travail et les projections (combien dans la direction) utilisent le produit scalaire. Le moment de force $\vec\tau=\vec r\times\vec F$, les aires $|\vec a\times\vec b|$ et les directions perpendiculaires (combien en travers) utilisent le produit vectoriel. Le produit mixte $\vec a\cdot(\vec b\times\vec c)$ est le volume du parallélépipède (au signe près) et vaut 0 exactement lorsque les trois vecteurs sont coplanaires.`,
  goals: ["Trouver des moments de force.", "Trouver des aires dans l'espace.", "Trouver des volumes avec le produit mixte.", "Vérifier la coplanarité; trouver un travail."],
  curriculum: "C2.6, C2.8",
  vocab: [["Moment de force", "$\\vec r\\times\\vec F$"], ["Aire", "$|\\vec a\\times\\vec b|$"], ["Volume", "$|\\vec a\\cdot(\\vec b\\times\\vec c)|$"], ["Coplanaires", "produit mixte nul"]],
  hook: S`Pourquoi est-il plus facile de desserrer un boulon coincé avec une clé plus longue? À quel endroit du manche faut-il pousser, et dans quelle direction?`,
  concepts: [
    ["1. Moment de force", S`Seule la partie de $\vec F$ perpendiculaire à $\vec r$ fait tourner le boulon : $|\vec\tau|=|\vec r||\vec F|\sin\theta$.`],
    ["2. Aires et volumes", S`Parallélogramme $|\vec a\times\vec b|$; triangle : la moitié; parallélépipède $|\vec a\cdot(\vec b\times\vec c)|$ :
${VF(merge(V3, axes3(4.6), { segs: [[[0, 0, 0], [2.5, 0, 0]], [[0, 0, 0], [0.6, 3, 0]], [[0, 0, 0], [0.4, 0.8, 2.6]], [[2.5, 0, 0], [3.1, 3, 0]], [[0.6, 3, 0], [3.1, 3, 0]], [[2.5, 0, 0], [2.9, 0.8, 2.6]], [[0.4, 0.8, 2.6], [2.9, 0.8, 2.6]], [[0.6, 3, 0], [1, 3.8, 2.6]], [[0.4, 0.8, 2.6], [1, 3.8, 2.6]], [[3.1, 3, 0], [3.5, 3.8, 2.6]], [[2.9, 0.8, 2.6], [3.5, 3.8, 2.6]], [[1, 3.8, 2.6], [3.5, 3.8, 2.6]]].map((l) => ({ pts: l.map((p) => p3(...p)), color: "gray", w: 1.3 })) }), 4.2)}`],
    ["3. Travail", S`$W=\vec F\cdot\vec d$.`],
  ],
  tips: ["Moment de force : r × F, dans cet ordre.", "Triangle = la moitié du parallélogramme.", "Volume = |produit mixte|.", "Le travail est un scalaire; le moment de force est un vecteur.", "Coplanaires ⇔ produit mixte nul."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
