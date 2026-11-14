// MCV4U-FR Fiche d'exercices 8.3 — Propriétés des plans (version de l'enseignant)
import { svgT } from "./figT.mjs";
import { vdoc, p3, axes3, merge, patch3, tri3 } from "../../mcv4u-ch8/vecfig.mjs";
import { TITLE } from "../l8_3.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const EXAMPLES = [
  { title: "Un point et une normale", q: S`Trouve l'équation cartésienne du plan passant par $(3,0,-1)$ de normale $[2,-5,1]$.`,
    steps: [S`$2x-5y+z=2(3)-0+(-1)=5$.`], ans: S`$2x-5y+z-5=0$` },
  { title: "De la forme vectorielle à la forme cartésienne", q: S`Trouve une équation cartésienne de $\vec r=[2,1,0]+s[1,0,2]+t[0,1,-1]$.`,
    steps: [S`$\vec n=[1,0,2]\times[0,1,-1]=[-2,1,1]$.`, S`$-2x+y+z=-4+1+0=-3$.`], ans: S`$2x-y-z-3=0$` },
  { title: "À partir des points d'intersection avec les axes", q: S`Trouve l'équation cartésienne du plan passant par $(1,0,0)$, $(0,2,0)$ et $(0,0,4)$.`,
    fig: VF(merge(V3, axes3(4.8), { polys: [tri3(1, 2, 4)] }), 4),
    steps: [S`$\frac x1+\frac y2+\frac z4=1$; multiplie par 4.`], ans: S`$4x+2y+z=4$` },
  { title: "Plans parallèles et distance entre eux", q: S`Montre que $3x-y+2z=1$ et $6x-2y+4z=9$ sont parallèles, et trouve la distance entre eux.`,
    steps: [S`$[6,-2,4]=2[3,-1,2]$; récris le premier plan sous la forme $6x-2y+4z=2$.`, S`Distance $\frac{|9-2|}{\sqrt{36+4+16}}=\frac{7}{\sqrt{56}}$.`], ans: "parallèles; distants d'environ 0.94" },
  { title: "Plans perpendiculaires", q: S`Les plans $x+2y-2z=3$ et $4x-y+z=0$ sont-ils perpendiculaires?`,
    steps: [S`$4-2-2=0$.`], ans: "oui" },
  { title: "L'angle entre deux plans", q: S`Trouve l'angle entre $2x+y-z=4$ et $x-y+3z=1$.`,
    steps: [S`$|\vec n_1\cdot\vec n_2|=|2-1-3|=2$; $|\vec n_1||\vec n_2|=\sqrt6\sqrt{11}$.`, S`$\cos\theta\approx0.2462$.`], ans: "environ 75.75°" },
  { title: "Points d'intersection avec les axes", q: S`Trouve les points d'intersection de $5x-2y+10z=20$ avec les axes.`,
    steps: [S`axe des x : 4; axe des y : $-10$; axe des z : 2.`], ans: "4, −10 et 2" },
  { title: "Distance à un plan", q: S`Trouve la distance de $(2,-1,4)$ au plan $6x+2y-3z=1$.`,
    steps: [S`$\frac{|12-2-12-1|}{\sqrt{36+4+9}}=\frac37$.`], ans: "environ 0.43" },
  { title: "Un plan parallèle passant par un point", q: S`Trouve le plan passant par $(1,2,3)$ et parallèle à $4x-y+2z=7$.`,
    fig: VF(merge(V3, axes3(4.6), { polys: [patch3([1, 2, 3], [1, 4, 0], [0, 2, 1], 0.7, "#dcfce7", "green", 0.6), patch3([1.2, 0.6, 1.2], [1, 4, 0], [0, 2, 1], 0.7, "#dbeafe", "blue", 0.6)] }), 4),
    steps: [S`Même normale : $4x-y+2z=4-2+6$.`], ans: S`$4x-y+2z=8$` },
];

const PROBLEMS = [
  { level: 1, q: S`Donne une normale à $-x+3y=5$ (un plan de l'espace à trois dimensions).`, recap: "Le coefficient de z est 0.", ans: "[−1, 3, 0]" },
  { level: 1, q: S`Écris l'équation du plan passant par l'origine de normale $[1,1,1]$.`, recap: "D = 0.", ans: S`$x+y+z=0$` },
  { level: 1, q: S`Trouve les points d'intersection de $x+2y+3z=6$ avec les axes.`, recap: "Pose deux variables égales à 0.", ans: "6, 3 et 2" },
  { level: 2, q: S`Trouve le plan passant par $(2,1,-1)$ de normale $[3,0,4]$.`, recap: S`$3x+4z=6-4$.`, ans: S`$3x+4z-2=0$` },
  { level: 2, q: S`Trouve une équation cartésienne de $\vec r=[0,0,1]+s[1,1,0]+t[1,0,2]$.`, recap: "Fais le produit vectoriel des directions.", ans: S`$2x-2y-z+1=0$` },
  { level: 2, q: S`Les plans $2x+y-z=1$ et $x-y+z=0$ sont-ils parallèles, perpendiculaires ou ni l'un ni l'autre?`, recap: "Produit scalaire des normales.", ans: "perpendiculaires" },
  { level: 2, q: S`Trouve l'angle entre $x+y=0$ et $y+z=0$.`, recap: S`$\cos\theta=\frac12$.`, ans: "60°" },
  { level: 2, q: S`Trouve la distance de l'origine au plan $x+2y+2z=6$.`, recap: "|−6| / 3.", ans: "2" },
  { level: 3, space: 5, q: S`Trouve le plan passant par $(1,1,1)$ et perpendiculaire à la fois à $x+y=1$ et à $y-z=0$.`, recap: "Sa normale est perpendiculaire aux deux normales.", ans: S`$x-y-z+1=0$` },
  { level: 3, space: 5, q: S`Trouve la distance entre $2x-y+2z=4$ et $2x-y+2z=-5$.`, recap: S`$\frac{|D_1-D_2|}{|\vec n|}$.`, ans: "3" },
  { level: 3, space: 5, q: S`Trouve le plan contenant $(2,0,0)$ et $(0,3,0)$ qui est perpendiculaire au plan xy.`, recap: S`Sa normale est perpendiculaire à $\vec k$ et à $[-2,3,0]$.`, ans: S`$3x+2y=6$` },
  { level: 3, space: 5, q: S`Trouve $D\gt0$ pour que $2x+2y+z=D$ soit à 4 unités de l'origine.`, recap: "D / 3 = 4.", ans: "12" },
  { level: 3, space: 5, q: S`Explique pourquoi $kx+2y-z=3$ ne peut jamais être parallèle à $x+y+z=1$.`, recap: "Compare les normales.", ans: "[k, 2, −1] est un multiple de [1, 1, 1] seulement si 2 = −1, ce qui est impossible" },
];

export const WS = {
  code: "8.3",
  title: TITLE.slice(4),
  bigideas: S`Une normale $\vec n=[A,B,C]$ est perpendiculaire à tous les vecteurs du plan. Le plan passant par $P_0$ de normale $\vec n$ est $\vec n\cdot(\vec r-\vec r_0)=0$, c'est-à-dire $Ax+By+Cz+D=0$. À partir d'une équation vectorielle, $\vec n=\vec a\times\vec b$. Des plans sont parallèles lorsque leurs normales sont parallèles, et perpendiculaires lorsque le produit scalaire des normales vaut 0; l'angle entre deux plans est l'angle entre leurs normales. Distance d'un point : $\frac{|Ax_0+By_0+Cz_0+D|}{|\vec n|}$.`,
  goals: ["Écrire des équations cartésiennes de plans.", "Passer de la forme vectorielle à la forme cartésienne.", "Comparer des plans.", "Trouver des angles, des points d'intersection avec les axes et des distances."],
  curriculum: "C4.3, C4.4, C4.6, C4.7",
  vocab: [["Normale", "$[A,B,C]$"], ["Équation cartésienne", "$Ax+By+Cz+D=0$"], ["Parallèles", "normales parallèles"], ["Distance", "$\\frac{|Ax_0+By_0+Cz_0+D|}{|\\vec n|}$"]],
  hook: S`Un dessus de table est de niveau lorsqu'un crayon posé debout, bien droit, pointe directement vers le plafond. Quel vecteur décrit le mieux le dessus de la table?`,
  concepts: [
    ["1. La normale", S`$\vec n$ sort perpendiculairement du plan :
${VF(merge(V3, axes3(4.6), { polys: [tri3(4, 3, 2)] }, { arrows: [{ from: p3(4 / 3, 1, 2 / 3), to: p3(4 / 3 + 0.9, 1 + 1.2, 2 / 3 + 1.8), vl: "n", color: "green", off: -16 }] }), 4)}`],
    ["2. Comparer des plans", S`Parallèles : $\vec n_2=k\vec n_1$. Perpendiculaires : $\vec n_1\cdot\vec n_2=0$.`],
    ["3. Distance", S`Substitue le point dans $Ax+By+Cz+D$ et divise par $|\vec n|$.`],
  ],
  tips: ["La normale provient des coefficients.", "a × b donne une normale.", "Angle aigu entre les plans.", "Écris ... + D = 0 avant d'utiliser la formule de la distance.", "Même normale : plans parallèles."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
