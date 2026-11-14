// MCV4U-FR Fiche d'exercices 8.1 — Équations de droites dans l'espace à deux et à trois dimensions (version de l'enseignant)
import { svgT, gridT } from "./figT.mjs";
import { vdoc, p3, axes3, merge, line3 } from "../../mcv4u-ch8/vecfig.mjs";
import { TITLE } from "../l8_1.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const L2 = (p, m, t0, t1, color = "violet") => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4 });
const EXAMPLES = [
  { title: "Les trois formes", q: S`Écris les équations vectorielle, paramétriques et cartésienne de la droite passant par $(-1,4)$ de direction $[2,5]$.`,
    steps: [S`$\vec r=[-1,4]+t[2,5]$; $x=-1+2t$, $y=4+5t$.`, S`Normale $[5,-2]$ : $5x-2y+C=0$ avec $-5-8+C=0$, donc $C=13$.`], ans: S`$\vec r=[-1,4]+t[2,5]$; $5x-2y+13=0$` },
  { title: "Par deux points", q: S`Trouve une équation vectorielle de la droite passant par $(0,-3)$ et $(4,3)$, ainsi que sa pente.`,
    steps: [S`Direction $[4,6]$, ou $[2,3]$ : $\vec r=[0,-3]+t[2,3]$.`, S`Pente $\frac32$.`], ans: S`$\vec r=[0,-3]+t[2,3]$, pente 1.5` },
  { title: "De la forme cartésienne à la forme vectorielle", q: S`Écris une équation vectorielle de $3x-4y+12=0$.`,
    fig: VF({ view: { xmin: -5, xmax: 3, ymin: -1, ymax: 5 }, step: 1, segs: [L2([0, 3], [4, 3], -1.2, 0.6)], arrows: [{ from: [0, 3], to: [1.2, 1.4], vl: "n", color: "green", off: 16 }, { from: [0, 3], to: [2, 4.5], vl: "m", color: "red", off: -16 }], points: [{ x: 0, y: 3, label: "(0, 3)", dx: -42, dy: -6 }] }, 4.6),
    steps: [S`Normale $[3,-4]$, donc direction $[4,3]$. Un point : $x=0\Rightarrow y=3$.`], ans: S`$\vec r=[0,3]+t[4,3]$` },
  { title: "Sur la droite?", q: S`Le point $(7,2)$ appartient-il à $\vec r=[1,-1]+t[2,1]$?`,
    steps: [S`$x$ : $1+2t=7\Rightarrow t=3$. $y$ : $-1+3=2$. ✓`], ans: "oui, pour t = 3" },
  { title: "Une droite dans l'espace à trois dimensions", q: S`Écris les équations paramétriques de la droite passant par $(2,0,-3)$ de direction $[1,-2,4]$, et trouve le point obtenu avec $t=2$.`,
    steps: [S`$x=2+t$, $y=-2t$, $z=-3+4t$.`, S`$t=2$ : $(4,-4,5)$.`], ans: "(4, −4, 5)" },
  { title: "Deux points de l'espace", q: S`Trouve une équation vectorielle de la droite passant par $(1,1,1)$ et $(4,-1,3)$. Le point $(7,-3,5)$ appartient-il à cette droite?`,
    steps: [S`$\vec r=[1,1,1]+t[3,-2,2]$.`, S`$x$ : $t=2$; $y$ : $1-4=-3$ ✓; $z$ : $1+4=5$ ✓.`], ans: "oui, pour t = 2" },
  { title: "Une droite parallèle", q: S`Trouve une équation vectorielle de la droite passant par $(3,-2,1)$ et parallèle à $\vec r=[0,1,0]+t[2,2,-1]$.`,
    steps: [S`Utilise la même direction.`], ans: S`$\vec r=[3,-2,1]+t[2,2,-1]$` },
  { title: "Traverser les plans de coordonnées", q: S`Où la droite $x=1+2t$, $y=-2+t$, $z=3-t$ traverse-t-elle le plan xy et le plan yz?`,
    fig: VF(merge(V3, axes3(4.8), { segs: [line3([1, -2, 3], [2, 1, -1], -0.8, 3.4, "violet", 2.8)] }, { points: [{ x: p3(7, 1, 0)[0], y: p3(7, 1, 0)[1], label: "(7, 1, 0)", dx: -60, dy: 14 }] }, { view: { xmin: -5, xmax: 6, ymin: -3.4, ymax: 6 } }), 4.6),
    steps: [S`$z=0$ : $t=3$, ce qui donne $(7,1,0)$.`, S`$x=0$ : $t=-0.5$, ce qui donne $(0,-2.5,3.5)$.`], ans: "(7, 1, 0) et (0, −2.5, 3.5)" },
  { title: "L'angle entre deux droites", q: S`Trouve l'angle entre des droites de directions $[1,3]$ et $[3,1]$.`,
    steps: [S`$\cos\theta=\frac{3+3}{\sqrt{10}\sqrt{10}}=0.6$.`], ans: "environ 53.13°" },
];

const PROBLEMS = [
  { level: 1, q: S`Écris une équation vectorielle de la droite passant par $(4,-1)$ de direction $[-2,5]$.`, recap: S`$\vec r=\vec r_0+t\vec m$.`, ans: S`$\vec r=[4,-1]+t[-2,5]$` },
  { level: 1, q: S`Écris les équations paramétriques de $\vec r=[0,2,-1]+t[3,1,4]$.`, recap: "Une équation par coordonnée.", ans: S`$x=3t$, $y=2+t$, $z=-1+4t$` },
  { level: 1, q: S`Trouve le point obtenu avec $t=-2$ sur $\vec r=[1,0,5]+t[2,3,-1]$.`, recap: "Substitue t.", ans: "(−3, −6, 7)" },
  { level: 2, q: S`Trouve l'équation cartésienne de la droite passant par $(2,3)$ de direction $[1,4]$.`, recap: "Normale [4, −1].", ans: S`$4x-y-5=0$` },
  { level: 2, q: S`Écris une équation vectorielle de $2x+y-6=0$.`, recap: "Direction à partir de la normale; un point.", ans: S`$\vec r=[3,0]+t[1,-2]$` },
  { level: 2, q: S`Trouve une équation vectorielle de la droite passant par $(1,2,3)$ et $(3,-2,4)$. Le point $(5,-6,5)$ appartient-il à cette droite?`, recap: "Trouve t à partir de x; vérifie y et z.", ans: S`$\vec r=[1,2,3]+t[2,-4,1]$; oui ($t=2$)` },
  { level: 2, q: S`Où la droite $x=2+t$, $y=4-2t$, $z=-1+3t$ traverse-t-elle le plan xz?`, recap: "y = 0.", ans: "(4, 0, 5)" },
  { level: 2, q: S`Trace la droite $\vec r=[-2,1]+t[3,1]$ sur la grille, en marquant les points obtenus avec $t=0,1,2$.`, recap: "Commence en (−2, 1).", ans: "(−2, 1), (1, 2), (4, 3)", fig: gridT({ xmin: -4, xmax: 6, ymin: -2, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Trouve l'angle aigu entre $2x+3y=6$ et $x-5y=1$.`, recap: "Angle entre les normales, puis l'angle aigu.", ans: "45°" },
  { level: 3, space: 5, q: S`Trouve une équation vectorielle de la droite passant par $(1,-1,2)$ et perpendiculaire à la fois à $[1,0,1]$ et à $[0,1,1]$.`, recap: "Produit vectoriel.", ans: S`$\vec r=[1,-1,2]+t[-1,-1,1]$` },
  { level: 3, space: 5, q: S`Trouve la distance de $(5,2)$ à la droite $3x-4y+1=0$.`, recap: S`$\frac{|Ax_0+By_0+C|}{\sqrt{A^2+B^2}}$.`, ans: "1.6" },
  { level: 3, space: 5, q: S`Montre que $\vec r=[1,2]+t[3,-1]$ et $\vec r=[7,0]+s[-6,2]$ représentent la même droite.`, recap: "Directions parallèles et un point commun.", ans: S`$[-6,2]=-2[3,-1]$, et $(7,0)$ est le point de la première droite obtenu avec $t=2$` },
  { level: 3, space: 5, q: S`Décris la droite passant par $(2,3,-1)$ et $(2,1,3)$ comme l'intersection de deux plans.`, recap: "x est constant; élimine t entre y et z.", ans: S`$x=2$ et $2y+z=5$` },
];

export const WS = {
  code: "8.1",
  title: TITLE.slice(4),
  bigideas: S`Une droite est déterminée par un point et une direction : $\vec r=\vec r_0+t\vec m$. Ses composantes donnent les équations paramétriques. En deux dimensions, elle a aussi une équation cartésienne $Ax+By+C=0$ dont la normale $[A,B]$ est perpendiculaire à $\vec m$. En trois dimensions, une droite n'a que des équations vectorielle et paramétriques — une seule équation cartésienne décrit un plan —; une droite de l'espace peut donc être décrite comme l'intersection de deux plans.`,
  goals: ["Écrire des équations vectorielles et paramétriques.", "Passer de la forme cartésienne aux autres formes, et inversement, en deux dimensions.", "Vérifier si des points appartiennent à des droites.", "Travailler avec des droites dans l'espace à trois dimensions."],
  curriculum: "C4.1, C4.2",
  vocab: [["Vecteur directeur", "$\\vec m$"], ["Paramètre", "t"], ["Normale (2D)", "$[A,B]$"], ["Équation vectorielle", "$\\vec r=\\vec r_0+t\\vec m$"]],
  hook: S`Un navire quitte le port au point $(2,1)$ et se déplace de $[3,4]$ km chaque heure. Où est-il après $t$ heures? Se trouve-t-il un jour au point $(14,17)$?`,
  concepts: [
    ["1. Un point et une direction", S`Chaque point s'écrit $\vec r_0+t\vec m$ :
${VF({ view: { xmin: -1, xmax: 8, ymin: -2, ymax: 5 }, step: 1, segs: [L2([2, -1], [3, 2], -1, 1.8)], arrows: [{ from: [2, -1], to: [5, 1], vl: "m", color: "green", off: 16 }], points: [{ x: 2, y: -1, label: "r₀", dx: -18, dy: 0, color: "blue" }] }, 4.2)}`],
    ["2. Forme cartésienne en deux dimensions", S`$Ax+By+C=0$ avec la normale $[A,B]\perp\vec m$.`],
    ["3. Trois dimensions", S`Aucune équation cartésienne; utilise $\vec r=[x_0,y_0,z_0]+t[m_1,m_2,m_3]$.`],
  ],
  tips: ["Normale ⟂ direction.", "Vérifie chaque coordonnée.", "Plusieurs équations, une seule droite.", "Droites en 3D : deux plans.", "Angle aigu entre les droites."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
