// MCV4U-FR Fiche d'exercices 8.4 — Intersections de droites dans l'espace à deux et à trois dimensions (version de l'enseignant)
import { svgT } from "./figT.mjs";
import { vdoc, p3, axes3, merge, line3 } from "../../mcv4u-ch8/vecfig.mjs";
import { TITLE } from "../l8_4.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const L2 = (p, m, t0, t1, color = "violet") => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4 });
const EXAMPLES = [
  { title: "Deux droites en deux dimensions", q: S`Trouve le point d'intersection de $\vec r=[2,-1]+s[1,2]$ et de $\vec r=[0,4]+t[1,-1]$.`,
    fig: VF({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 5 }, step: 1, segs: [L2([2, -1], [1, 2], -0.4, 2.6), L2([0, 4], [1, -1], -0.4, 4.6, "blue")], points: [{ x: 3, y: 1, label: "(3, 1)", dx: 8, dy: 4 }] }, 4.2),
    steps: [S`$2+s=t$ et $-1+2s=4-t$.`, S`Substitue : $-1+2s=2-s\Rightarrow s=1$, $t=3$.`], ans: "(3, 1)" },
  { title: "Parallèles, mais distinctes?", q: S`Compare $\vec r=[1,0]+s[2,3]$ et $\vec r=[0,1]+t[-4,-6]$.`,
    steps: [S`$[-4,-6]=-2[2,3]$ : parallèles.`, S`Le point $(0,1)$ appartient-il à la première droite? $1+2s=0\Rightarrow s=-0.5$, $y=-1.5\ne1$.`], ans: "parallèles et distinctes" },
  { title: "Droites sécantes dans l'espace", q: S`Trouve le point d'intersection de $\vec r=[1,1,0]+s[2,0,1]$ et de $\vec r=[3,-2,4]+t[0,1,-1]$.`,
    steps: [S`$x$ : $s=1$. $y$ : $1=-2+t\Rightarrow t=3$.`, S`$z$ : $s=1$ et $4-3=1$. ✓`], ans: "(3, 1, 1)" },
  { title: "Droites gauches et distance entre elles", q: S`Montre que $\vec r=[0,1,0]+s[1,0,1]$ et $\vec r=[1,0,2]+t[0,1,1]$ sont gauches, et trouve la distance entre elles.`,
    fig: VF(merge(V3, axes3(4.6), { segs: [line3([0, 1, 0], [1, 0, 1], -1, 3, "violet", 2.6), line3([1, 0, 2], [0, 1, 1], -1.5, 2.6, "blue", 2.6)] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }), 4.2),
    steps: [S`$x$ : $s=1$; $y$ : $1=t$; $z$ : $1\ne2+1$. Non parallèles, donc gauches.`, S`$\vec n=[1,0,1]\times[0,1,1]=[-1,-1,1]$; $\overrightarrow{P_1P_2}=[1,-1,2]$ : $\frac{|-1+1+2|}{\sqrt3}$.`], ans: "gauches; distantes d'environ 1.15" },
  { title: "Droites confondues dans l'espace", q: S`Compare $\vec r=[1,2,3]+s[1,1,1]$ et $\vec r=[3,4,5]+t[-2,-2,-2]$.`,
    steps: [S`Directions parallèles; $(3,4,5)$ est le point de la première droite obtenu avec $s=2$.`], ans: "confondues" },
  { title: "Directions perpendiculaires", q: S`Trouve l'angle entre des droites de directions $[2,1,-2]$ et $[1,2,2]$.`,
    steps: [S`$2+2-4=0$.`], ans: "90° (les droites peuvent quand même être gauches)" },
  { title: "Distance entre deux droites parallèles", q: S`Trouve la distance entre $\vec r=t[1,0,0]$ et $\vec r=[0,3,4]+s[2,0,0]$.`,
    steps: [S`Les deux droites sont parallèles à l'axe des x; la deuxième passe par $(0,3,4)$.`, S`Distance à l'axe des x : $\sqrt{9+16}$.`], ans: "5" },
  { title: "À l'aide d'équations cartésiennes", q: S`Résous $2x+y=7$ et $x-3y=0$.`,
    steps: [S`$x=3y\Rightarrow7y=7$.`], ans: "(3, 1)" },
  { title: "Choisir k", q: S`Trouve $k$ pour que $\vec r=s[1,1,1]$ et $\vec r=[2,0,k]+t[0,1,0]$ se coupent.`,
    steps: [S`$x$ : $s=2$; $y$ : $t=2$; $z$ : $2=k$.`], ans: "k = 2, point d'intersection (2, 2, 2)" },
];

const PROBLEMS = [
  { level: 1, q: S`Trouve le point d'intersection de $y=x+1$ et $y=-x+5$.`, recap: "Égale les deux expressions.", ans: "(2, 3)" },
  { level: 1, q: S`Classe $\vec r=[1,2]+s[3,6]$ et $\vec r=t[1,2]$.`, recap: "Parallèles? Point commun?", ans: "confondues" },
  { level: 1, q: S`Combien de points communs ont deux droites gauches?`, recap: "Définition.", ans: "0" },
  { level: 2, q: S`Trouve le point d'intersection de $\vec r=[1,1]+s[2,1]$ et de $\vec r=[0,5]+t[1,-1]$.`, recap: "Deux équations en s et t.", ans: "(3, 2)" },
  { level: 2, q: S`Trouve le point d'intersection de $\vec r=[2,0,1]+s[1,1,0]$ et de $\vec r=[0,-1,2]+t[2,1,-1]$.`, recap: "Résous en x et en y; vérifie z.", ans: "(2, 0, 1)" },
  { level: 2, q: S`Détermine si $\vec r=s[1,1,0]$ et $\vec r=[0,1,1]+t[1,0,0]$ se coupent.`, recap: "Vérifie l'équation en z.", ans: "non — elles sont gauches" },
  { level: 2, q: S`Trouve l'angle entre des droites de directions $[1,1,0]$ et $[1,0,1]$.`, recap: S`$\cos\theta=\frac12$.`, ans: "60°" },
  { level: 2, q: S`Trouve le point d'intersection de $x+2y=4$ et $3x-y=5$.`, recap: "Élimine une variable.", ans: "(2, 1)" },
  { level: 3, space: 5, q: S`Trouve la distance entre $\vec r=s[1,1,0]$ et $\vec r=[0,1,1]+t[1,0,0]$.`, recap: S`$\frac{|\overrightarrow{P_1P_2}\cdot(\vec m_1\times\vec m_2)|}{|\vec m_1\times\vec m_2|}$.`, ans: "1" },
  { level: 3, space: 5, q: S`Trouve $k$ pour que $\vec r=[1,0,k]+s[1,1,1]$ et $\vec r=t[1,2,3]$ se coupent.`, recap: "Utilise x et y pour trouver s et t.", ans: "k = −1" },
  { level: 3, space: 5, q: S`Trouve la distance entre $\vec r=[1,0,0]+t[0,1,0]$ et $\vec r=[3,0,4]+s[0,2,0]$.`, recap: "Droites parallèles : distance entre elles dans le plan xz.", ans: S`$\sqrt{20}\approx4.47$` },
  { level: 3, space: 5, q: S`Montre que $\vec r=s[1,2]$ et $4x-2y=3$ sont parallèles.`, recap: "Compare la direction et la normale.", ans: "la normale [4, −2] est perpendiculaire à [1, 2], et (0, 0) n'appartient pas à 4x − 2y = 3" },
  { level: 3, space: 5, q: S`Des droites passant par l'origine ont pour directions $[1,1,1]$ et $[1,-1,0]$. Trouve l'angle entre elles et explique pourquoi elles se coupent.`, recap: "Produit scalaire; point commun.", ans: "90°; les deux passent par l'origine" },
];

export const WS = {
  code: "8.4",
  title: TITLE.slice(4),
  bigideas: S`Égale les équations paramétriques, avec des paramètres différents, et résous. En deux dimensions, des droites se rencontrent une fois, jamais (parallèles) ou partout (confondues). L'espace à trois dimensions ajoute les droites gauches : non parallèles et sans point commun. Résous deux équations de coordonnées et vérifie la troisième. La distance entre deux droites gauches est $\frac{|\overrightarrow{P_1P_2}\cdot(\vec m_1\times\vec m_2)|}{|\vec m_1\times\vec m_2|}$.`,
  goals: ["Trouver les intersections de droites.", "Reconnaître des droites parallèles et des droites confondues.", "Reconnaître des droites gauches.", "Trouver des angles et des distances entre des droites."],
  curriculum: "C3.1, C3.3, C4.7",
  vocab: [["Sécantes", "un point"], ["Confondues", "même droite"], ["Gauches", "non parallèles, sans point commun"], ["Distance", "projection sur $\\vec m_1\\times\\vec m_2$"]],
  hook: S`Deux avions suivent des trajectoires rectilignes à des altitudes différentes. Leurs trajectoires se croisent sur une carte. Risquent-ils d'entrer en collision?`,
  concepts: [
    ["1. Deux dimensions", S`Un point, aucun ou tous :
${VF({ view: { xmin: -1, xmax: 5, ymin: -2, ymax: 5 }, step: 1, segs: [L2([2, -1], [1, 2], -0.4, 2.6), L2([0, 4], [1, -1], -0.4, 4.6, "blue")] }, 3.6)}`],
    ["2. Trois dimensions", S`Vérifie la troisième coordonnée — un échec avec des directions non parallèles signifie que les droites sont gauches.`],
    ["3. Distance", S`Projette $\overrightarrow{P_1P_2}$ sur $\vec m_1\times\vec m_2$.`],
  ],
  tips: ["Paramètres différents.", "Vérifie chaque coordonnée.", "Parallèles : vérifie un point.", "Droites gauches seulement en 3D.", "Angle aigu."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
