// MCV4U-FR Fiche d'exercices 7.1 — Vecteurs cartésiens (édition de l'enseignant)
import { svgT, gridT } from "./figT.mjs";
import { vdoc } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const EXAMPLES = [
  { title: "Un vecteur position", q: S`Écris le vecteur position de $Q(6,-2.5)$ et trouve sa norme.`,
    fig: VF({ view: { xmin: -1, xmax: 7.5, ymin: -3.5, ymax: 1 }, step: 1, arrows: [{ from: [0, 0], to: [6, -2.5], vl: "OQ", off: 16 }], points: [{ x: 6, y: -2.5, label: "Q(6, −2.5)", dx: -30, dy: 18 }] }, 5),
    steps: [S`$\overrightarrow{OQ}=[6,-2.5]=6\vec i-2.5\vec j$.`, S`$\sqrt{36+6.25}=\sqrt{42.25}$.`], ans: "[6, −2.5], norme 6.5" },
  { title: "Entre deux points", q: S`Trouve $\overrightarrow{CD}$, sa norme et sa direction pour $C(-3,-4)$ et $D(2,8)$.`,
    steps: [S`$\overrightarrow{CD}=[5,12]$, $|\overrightarrow{CD}|=13$.`, S`Quadrant I : $\tan^{-1}\frac{12}5\approx67.38^\circ$.`], ans: "[5, 12], 13, à environ 67.38° de l'axe des x positifs" },
  { title: "Combiner", q: S`Pour $\vec u=[-4,1]$ et $\vec v=[3,-2]$, trouve $2\vec u+3\vec v$ et sa norme.`,
    steps: [S`$[-8,2]+[9,-6]=[1,-4]$.`, S`$\sqrt{1+16}=\sqrt{17}$.`], ans: "[1, −4], environ 4.12" },
  { title: "Vecteurs égaux", q: S`Trouve $x$ et $y$ si $[x+1,\ 2y]=[4,-6]$.`,
    steps: [S`Des vecteurs égaux ont des composantes égales : $x+1=4$, $2y=-6$.`], ans: "x = 3, y = −3" },
  { title: "À partir de la norme et de la direction", q: S`Écris sous forme de composantes un vecteur de norme 20 qui fait un angle de $235^\circ$ avec l'axe des x positifs.`,
    fig: VF({ view: { xmin: -13, xmax: 2, ymin: -18, ymax: 2 }, step: 2, arrows: [{ from: [0, 0], to: [-11.47, -16.38], vl: "v", label: "20", off: 16 }], arcs: [{ at: [0, 0], r: 1.6, a: 0, b: 235, label: "235°" }] }, 4),
    steps: [S`$[20\cos235^\circ,\ 20\sin235^\circ]$.`], ans: "environ [−11.47, −16.38]" },
  { title: "Un vecteur unitaire", q: S`Trouve le vecteur unitaire de même direction que $[-8,6]$.`,
    steps: [S`La norme est 10; on divise chaque composante.`], ans: "[−0.8, 0.6]" },
  { title: "Vecteurs colinéaires", q: S`$[6,-9]$ et $[-4,6]$ sont-ils colinéaires?`,
    steps: [S`$[-4,6]=-\frac23[6,-9]$.`], ans: "oui : l'un vaut −2/3 fois l'autre" },
  { title: "Utiliser une autre paire de directions", q: S`Écris $[7,-4]$ sous la forme $a[1,1]+b[1,-1]$.`,
    steps: [S`$a+b=7$ et $a-b=-4$.`, S`On additionne : $2a=3$.`], ans: "a = 1.5, b = 5.5" },
  { title: "Un point milieu", q: S`Pour $A(2,7)$ et $B(8,-1)$, trouve le point milieu $M$ et $\overrightarrow{AM}$.`,
    steps: [S`$M=\left(\frac{2+8}2,\frac{7-1}2\right)=(5,3)$.`, S`$\overrightarrow{AM}=[3,-4]$.`], ans: "M(5, 3), AM = [3, −4]" },
];

const PROBLEMS = [
  { level: 1, q: S`Trouve $|[9,-12]|$.`, recap: "Pythagore.", ans: "15" },
  { level: 1, q: S`Trouve $\overrightarrow{AB}$ pour $A(0,5)$ et $B(4,2)$.`, recap: "Pointe moins origine.", ans: "[4, −3]" },
  { level: 1, q: S`Trouve $3[2,-1]-[1,4]$.`, recap: "Composante par composante.", ans: "[5, −7]" },
  { level: 2, q: S`Trouve la direction (par rapport à l'axe des x positifs) de $[-5,-5\sqrt3]$.`, recap: "Quadrant III, angle de référence 60°.", ans: "240°" },
  { level: 2, q: S`Écris sous forme de composantes un vecteur de norme 8 orienté à $300^\circ$.`, recap: S`$[8\cos300^\circ,\ 8\sin300^\circ]$.`, ans: "[4, −6.93]" },
  { level: 2, q: S`Trouve le vecteur unitaire de même direction que $[12,-5]$.`, recap: "Divise par 13.", ans: S`$\left[\frac{12}{13},-\frac5{13}\right]$` },
  { level: 2, q: S`Trouve $k$ pour que $[3,k]$ soit parallèle à $[-6,10]$.`, recap: "Même rapport entre les composantes.", ans: "k = −5" },
  { level: 2, q: S`Sur le quadrillage, trace $\vec u=[-2,3]$, $\vec v=[4,1]$ et $\vec u+\vec v$ à partir de l'origine.`, recap: "Bout à bout.", ans: "u + v = [2, 4]", fig: gridT({ xmin: -3, xmax: 5, ymin: -1, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`$A(-2,1)$, $B(3,0)$ et $C(5,4)$ sont des sommets du parallélogramme $ABCD$. Trouve $D$.`, recap: "AD = BC.", ans: "D(0, 5)" },
  { level: 3, space: 5, q: S`Trouve $a$ et $b$ tels que $a[2,1]+b[-1,3]=[3,12]$.`, recap: "Deux équations en a et b.", ans: "a = 3, b = 3" },
  { level: 3, space: 5, q: S`Trouve le point situé au tiers du chemin de $A(1,1)$ à $B(10,7)$.`, recap: "OA + (1/3)AB.", ans: "(4, 3)" },
  { level: 3, space: 5, q: S`Utilise des vecteurs pour classer $\triangle ABC$, où $A(1,1)$, $B(5,3)$ et $C(3,7)$.`, recap: "Compare les longueurs des trois côtés.", ans: S`$AB=BC=\sqrt{20}$, $CA=\sqrt{40}$, et $20+20=40$ : un triangle rectangle isocèle (angle droit en $B$)` },
  { level: 3, space: 5, q: S`Trouve le vecteur de norme 10 de sens opposé à $[3,4]$.`, recap: "Vecteur unitaire, sens inverse, multiplication.", ans: "[−6, −8]" },
];

export const WS = {
  code: "7.1",
  title: "Vecteurs cartésiens",
  bigideas: S`Sur un quadrillage, un vecteur s'écrit à l'aide de ses composantes : $[a,b]=a\vec i+b\vec j$. Le vecteur de $A$ à $B$ est la pointe moins l'origine. Les opérations se font composante par composante; la norme est $\sqrt{a^2+b^2}$; la direction s'obtient avec $\tan^{-1}\left|\frac ba\right|$ placé dans le bon quadrant; et $[m\cos\theta,\ m\sin\theta]$ transforme une norme et une direction en composantes. On divise par la norme pour obtenir un vecteur unitaire.`,
  goals: ["Écrire des vecteurs sous forme de composantes.", "Trouver des vecteurs entre deux points.", "Effectuer des opérations sur les composantes.", "Trouver des normes, des directions et des vecteurs unitaires."],
  curriculum: "C1.3, C2.1",
  vocab: [["Composantes", "$[a,b]$"], ["$\\vec i,\\ \\vec j$", "$[1,0],\\ [0,1]$"], ["AB", "B − A"], ["Vecteur unitaire", "$\\frac{\\vec v}{|\\vec v|}$"]],
  hook: S`Un robot se déplace de 3 m vers l'est et de 4 m vers le nord, puis de 1 m vers l'est et de 2 m vers le sud. Décris son déplacement total à l'aide d'une seule paire de nombres.`,
  concepts: [
    ["1. Les composantes", S`$\vec v=[4,3]$ avance de 4 unités horizontalement et de 3 unités verticalement :
${VF({ view: { xmin: -0.5, xmax: 5, ymin: -0.5, ymax: 4 }, step: 1, arrows: [{ from: [0, 0], to: [4, 0], color: "blue", label: "4i", off: 14 }, { from: [4, 0], to: [4, 3], color: "red", label: "3j", off: -16 }, { from: [0, 0], to: [4, 3], vl: "v", off: -16 }] }, 4.2)}`],
    ["2. Pointe moins origine", S`$\overrightarrow{AB}=[x_2-x_1,\ y_2-y_1]$.`],
    ["3. Direction", S`L'angle de référence vient de $\tan^{-1}\left|\frac ba\right|$, puis le quadrant vient des signes.`],
  ],
  tips: ["AB = B − A.", "Vérifie le quadrant.", "Divise chaque composante pour obtenir un vecteur unitaire.", "[a, b] est un vecteur, (a, b) est un point.", "Colinéaires : composantes proportionnelles."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
