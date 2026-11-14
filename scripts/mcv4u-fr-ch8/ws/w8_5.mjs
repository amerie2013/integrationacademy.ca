// MCV4U-FR Fiche d'exercices 8.5 — Intersections de droites et de plans (version de l'enseignant)
import { svgT } from "./figT.mjs";
import { vdoc, p3, axes3, merge, line3, patch3 } from "../../mcv4u-ch8/vecfig.mjs";
import { TITLE } from "../l8_5.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
const EXAMPLES = [
  { title: "Un point", q: S`Trouve où $\vec r=[2,0,1]+t[1,-1,3]$ rencontre $x+2y-z=3$.`,
    steps: [S`$(2+t)+2(-t)-(1+3t)=3\Rightarrow1-4t=3\Rightarrow t=-0.5$.`], ans: "(1.5, 0.5, −0.5)" },
  { title: "Parallèle au plan", q: S`La droite $\vec r=[1,1,0]+t[2,0,-1]$ rencontre-t-elle $x+3y+2z=1$? Quelle distance les sépare?`,
    steps: [S`$\vec m\cdot\vec n=2-2=0$; le point donne $1+3=4\ne1$.`, S`Distance $\frac{|4-1|}{\sqrt{14}}$.`], ans: "parallèles; distants d'environ 0.80" },
  { title: "Contenue dans le plan", q: S`Montre que la même droite est contenue dans $x+3y+2z=4$.`,
    steps: [S`La substitution donne $4=4$ pour toute valeur de $t$.`], ans: "la droite est contenue dans le plan" },
  { title: "Distance à un plan", q: S`Trouve la distance de $(3,2,-1)$ au plan $x-2y+2z=5$.`,
    steps: [S`$\frac{|3-4-2-5|}{3}=\frac83$.`], ans: "environ 2.67" },
  { title: "Pied de la perpendiculaire", q: S`Trouve le point de $2x+y+2z=6$ le plus proche de $(4,3,2)$, ainsi que la distance.`,
    fig: VF(merge(V3, axes3(4.6), { polys: [patch3([2, 2, 0], [1, -2, 0], [0, 2, -1], 1.2)] }, { segs: [{ pts: [p3(4, 3, 2), p3(2, 2, 0)], color: "red", dash: true, w: 2.2 }] }, { points: [pt(4, 3, 2, "(4, 3, 2)", -60, -4), pt(2, 2, 0, "pied", 8, 14)] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.4 } }), 4.4),
    steps: [S`Droite $(4+2t,\ 3+t,\ 2+2t)$ : $15+9t=6\Rightarrow t=-1$.`, S`Pied $(2,2,0)$; distance $|t||\vec n|=3$.`], ans: "(2, 2, 0); distance 3" },
  { title: "Angle avec un plan", q: S`Trouve l'angle entre une droite de direction $[1,2,2]$ et le plan $z=0$.`,
    steps: [S`$\sin\phi=\frac{|[1,2,2]\cdot[0,0,1]|}{3\times1}=\frac23$.`], ans: "environ 41.81°" },
  { title: "Un axe rencontre un plan", q: S`Où l'axe des z rencontre-t-il $3x-y+4z=8$?`,
    steps: [S`$x=y=0\Rightarrow4z=8$.`], ans: "(0, 0, 2)" },
  { title: "Une réflexion simple", q: S`Trouve la réflexion de $(1,1,1)$ par rapport au plan $z=3$.`,
    steps: [S`Le point est 2 unités sous le plan; l'image est 2 unités au-dessus.`], ans: "(1, 1, 5)" },
  { title: "Choisir k", q: S`Trouve $k$ pour que $\vec r=t[1,k,2]$ rencontre $x+y+z=8$ en $t=2$.`,
    steps: [S`$2(1+k+2)=8$.`], ans: "k = 1" },
];

const PROBLEMS = [
  { level: 1, q: S`Où $\vec r=t[2,1,1]$ rencontre-t-elle $x+y+z=12$?`, recap: "4t = 12.", ans: "(6, 3, 3)" },
  { level: 1, q: S`Trouve la distance de l'origine au plan $2x-y+2z=6$.`, recap: "|−6| / 3.", ans: "2" },
  { level: 1, q: S`Où l'axe des x rencontre-t-il $3x+2y-z=9$?`, recap: "y = z = 0.", ans: "(3, 0, 0)" },
  { level: 2, q: S`Trouve où $\vec r=[1,2,0]+t[1,0,1]$ rencontre $2x-y+z=6$.`, recap: "Substitue, résous pour t.", ans: "(3, 2, 2)" },
  { level: 2, q: S`Montre que $\vec r=[0,0,1]+t[1,1,1]$ est parallèle à $x-y=2$, et trouve la distance qui les sépare.`, recap: "m · n = 0; distance à partir de (0, 0, 1).", ans: S`$\frac{2}{\sqrt2}\approx1.41$` },
  { level: 2, q: S`Trouve la distance de $(2,-1,3)$ au plan $2x+3y-6z=-4$.`, recap: "Écris ... + 4 = 0.", ans: S`$\frac{13}7\approx1.86$` },
  { level: 2, q: S`Trouve le pied de la perpendiculaire abaissée de l'origine sur $x+y+z=3$.`, recap: "Droite t[1, 1, 1].", ans: "(1, 1, 1)" },
  { level: 2, q: S`Trouve l'angle entre une droite de direction $[1,0,1]$ et le plan $y=0$.`, recap: "La droite est-elle parallèle au plan?", ans: "0° — la droite est parallèle au plan" },
  { level: 3, space: 5, q: S`Trouve la réflexion de $(2,3,0)$ par rapport au plan $x+y+z=2$.`, recap: "Trouve le pied, puis va aussi loin de l'autre côté.", ans: "pied (1, 2, −1); image (0, 1, −2)" },
  { level: 3, space: 5, q: S`Trouve $k$ pour que $\vec r=[1,k,0]+t[1,1,1]$ soit contenue dans le plan $x-y=1$.`, recap: "m · n = 0 et le point appartient au plan.", ans: "k = 0" },
  { level: 3, space: 5, q: S`Trouve l'angle entre une droite de direction $[2,1,2]$ et le plan $x+y+z=0$.`, recap: S`$\sin\phi=\frac{|\vec m\cdot\vec n|}{|\vec m||\vec n|}$.`, ans: "environ 74.21°" },
  { level: 3, space: 5, q: S`Trouve où $\vec r=[0,2,4]+t[1,1,-1]$ traverse $x+y+z=0$.`, recap: "6 + t = 0.", ans: "(−6, −4, 10)" },
  { level: 3, space: 5, q: S`Trouve la distance entre la droite $\vec r=[1,1,0]+t[1,-1,0]$ et le plan parallèle $x+y+2z=6$.`, recap: "Distance à partir de n'importe quel point de la droite.", ans: S`$\frac{4}{\sqrt6}\approx1.63$` },
];

export const WS = {
  code: "8.5",
  title: TITLE.slice(4),
  bigideas: S`Substitue les équations paramétriques d'une droite dans l'équation cartésienne d'un plan pour obtenir une seule équation en $t$ : une solution (un point), aucune solution (droite parallèle) ou toute valeur de $t$ (la droite est contenue dans le plan). Si $\vec m\cdot\vec n=0$, la droite est parallèle au plan ou contenue dans celui-ci. Une droite issue de $P$ selon la normale rencontre le plan au pied de la perpendiculaire, ce qui donne la distance et les réflexions. L'angle avec un plan vérifie $\sin\phi=\frac{|\vec m\cdot\vec n|}{|\vec m||\vec n|}$.`,
  goals: ["Trouver où une droite rencontre un plan.", "Reconnaître des droites parallèles à un plan ou contenues dans un plan.", "Trouver des distances et des pieds de perpendiculaires.", "Trouver des angles et des réflexions."],
  curriculum: "C4.7",
  vocab: [["Substitution", "droite dans le plan"], ["Parallèle", "$\\vec m\\cdot\\vec n=0$"], ["Pied de la perpendiculaire", "point le plus proche"], ["Angle droite–plan", "utilise le sinus"]],
  hook: S`Un faisceau laser se propage en ligne droite vers un miroir incliné. Comment trouverais-tu l'endroit exact où il frappe le miroir?`,
  concepts: [
    ["1. Substituer", S`Une seule équation en $t$ décide de tout :
${VF(merge(V3, axes3(4.6), { polys: [patch3([1.5, 1.5, 0.5], [1, -1, 0], [2, 0, -1], 1)] }, { segs: [line3([1, -1, 2], [2, 1, -1], -0.9, 3, "red", 2.6)] }), 4)}`],
    ["2. Test du parallélisme", S`$\vec m\cdot\vec n=0$ : parallèle ou contenue dans le plan.`],
    ["3. Point le plus proche", S`Trouve l'intersection du plan et de $\vec r=\overrightarrow{OP}+t\vec n$.`],
  ],
  tips: ["Substitue les trois coordonnées.", "0t = c : aucune; 0t = 0 : toutes.", "L'angle droite–plan utilise le sinus.", "Une distance n'est jamais négative.", "Vérifie que le pied appartient au plan."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
