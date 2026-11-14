// MCV4U-FR Fiche d'exercices 8.2 — Équations de plans (version de l'enseignant)
import { svgT } from "./figT.mjs";
import { vdoc, p3, axes3, merge, line3, patch3 } from "../../mcv4u-ch8/vecfig.mjs";
import { TITLE } from "../l8_2.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
const EXAMPLES = [
  { title: "Un point et deux directions", q: S`Écris une équation vectorielle du plan passant par $(0,1,-2)$ de directions $[1,1,0]$ et $[2,0,3]$, et trouve le point obtenu avec $s=2$, $t=-1$.`,
    steps: [S`$\vec r=[0,1,-2]+s[1,1,0]+t[2,0,3]$.`, S`$(0+2-2,\ 1+2,\ -2-3)$.`], ans: "(0, 3, −5)" },
  { title: "Trois points", q: S`Écris une équation vectorielle du plan passant par $A(1,0,1)$, $B(2,2,0)$, $C(0,1,3)$.`,
    fig: VF(merge(V3, axes3(4.6), { polys: [{ pts: [p3(1, 0, 1), p3(2, 2, 0), p3(0, 1, 3)], fill: "#dbeafe", stroke: "blue" }], points: [pt(1, 0, 1, "A", -16, 10), pt(2, 2, 0, "B", 4, 16), pt(0, 1, 3, "C")] }), 4.4),
    steps: [S`$\overrightarrow{AB}=[1,2,-1]$, $\overrightarrow{AC}=[-1,1,2]$.`], ans: S`$\vec r=[1,0,1]+s[1,2,-1]+t[-1,1,2]$` },
  { title: "Un point qui n'appartient pas au plan", q: S`Le point $(3,4,-2)$ appartient-il au plan de l'exemple 2?`,
    steps: [S`$1+s-t=3$, $2s+t=4$ donnent $s=2$, $t=0$.`, S`$z$ : $1-2+0=-1\ne-2$.`], ans: "non" },
  { title: "Un point qui appartient au plan", q: S`Le point $(1,3,2)$ appartient-il au plan de l'exemple 2?`,
    steps: [S`$s-t=0$ et $2s+t=3$ donnent $s=t=1$.`, S`$z$ : $1-1+2=2$. ✓`], ans: "oui (s = t = 1)" },
  { title: "Deux droites parallèles", q: S`Trouve une équation vectorielle du plan contenant $\vec r=[0,0,1]+t[1,2,0]$ et $\vec r=[2,1,1]+t[1,2,0]$.`,
    steps: [S`Une direction est $[1,2,0]$; l'autre relie les deux points donnés : $[2,1,0]$.`], ans: S`$\vec r=[0,0,1]+s[1,2,0]+t[2,1,0]$ (le plan $z=1$)` },
  { title: "Une droite et une direction", q: S`Trouve une équation vectorielle du plan contenant $\vec r=[1,1,0]+t[0,1,2]$ et parallèle à $[3,0,1]$.`,
    steps: [S`Utilise le point de la droite et les deux directions.`], ans: S`$\vec r=[1,1,0]+s[0,1,2]+t[3,0,1]$` },
  { title: "Par l'origine", q: S`Trouve une équation vectorielle du plan passant par l'origine et contenant $(1,2,3)$ et $(2,0,-1)$.`,
    steps: [S`Les deux vecteurs position sont situés dans le plan.`], ans: S`$\vec r=s[1,2,3]+t[2,0,-1]$` },
  { title: "Un plan parallèle à un plan de coordonnées", q: S`Écris une équation vectorielle du plan $x=4$.`,
    fig: VF(merge(V3, axes3(4.8), { polys: [{ ...patch3([4, 1.5, 1.5], [0, 1, 0], [0, 0, 1], 1.5), op: 0.6 }] }, { texts: [{ x: -1.2, y: 0.4, t: "x = 4", color: "blue" }] }), 4.2),
    steps: [S`Il contient $(4,0,0)$ et est parallèle à $\vec j$ et à $\vec k$.`], ans: S`$\vec r=[4,0,0]+s[0,1,0]+t[0,0,1]$` },
  { title: "Trois points sur une droite", q: S`Les points $A(1,1,1)$, $B(2,3,4)$ et $C(3,5,7)$ déterminent-ils un plan?`,
    steps: [S`$\overrightarrow{AC}=[2,4,6]=2\overrightarrow{AB}$ : les points sont colinéaires.`], ans: "non — une infinité de plans les contiennent" },
];

const PROBLEMS = [
  { level: 1, q: S`Écris une équation vectorielle du plan passant par $(2,-1,4)$ de directions $[1,0,1]$ et $[0,1,-1]$.`, recap: S`$\vec r_0+s\vec a+t\vec b$.`, ans: S`$\vec r=[2,-1,4]+s[1,0,1]+t[0,1,-1]$` },
  { level: 1, q: S`Trouve le point obtenu avec $s=1$, $t=1$ sur $\vec r=s[1,2,0]+t[0,1,3]$.`, recap: "Additionne les deux directions.", ans: "(1, 3, 3)" },
  { level: 1, q: S`Écris les équations paramétriques de $\vec r=[1,2,3]+s[1,1,1]+t[1,-1,0]$.`, recap: "Une équation par coordonnée.", ans: S`$x=1+s+t$, $y=2+s-t$, $z=3+s$` },
  { level: 2, q: S`Écris une équation vectorielle du plan passant par $(1,1,0)$, $(3,0,2)$, $(0,2,1)$.`, recap: "Deux vecteurs issus du premier point.", ans: S`$\vec r=[1,1,0]+s[2,-1,2]+t[-1,1,1]$` },
  { level: 2, q: S`Le point $(5,-1,4)$ appartient-il à $\vec r=[1,1,0]+s[2,-1,2]+t[-1,1,1]$?`, recap: "Résous deux équations, vérifie la troisième.", ans: "oui (s = 2, t = 0)" },
  { level: 2, q: S`Écris une équation vectorielle du plan contenant $\vec r=[0,1,2]+t[1,0,-1]$ et le point $(2,3,1)$.`, recap: "Direction de la droite et un vecteur de liaison.", ans: S`$\vec r=[0,1,2]+s[1,0,-1]+t[2,2,-1]$` },
  { level: 2, q: S`Les vecteurs $[1,2,-1]$ et $[2,4,-2]$ peuvent-ils être les deux directions d'un plan? Explique.`, recap: "Sont-ils parallèles?", ans: "non : le deuxième est le double du premier" },
  { level: 2, q: S`Écris une équation vectorielle du plan yz.`, recap: S`Par l'origine, directions $\vec j$, $\vec k$.`, ans: S`$\vec r=s[0,1,0]+t[0,0,1]$` },
  { level: 3, space: 5, q: S`Montre que $A(0,0,1)$, $B(1,1,2)$, $C(2,0,3)$ et $D(3,1,4)$ sont coplanaires.`, recap: "Écris AD en fonction de AB et de AC.", ans: S`$\overrightarrow{AD}=\overrightarrow{AB}+\overrightarrow{AC}$` },
  { level: 3, space: 5, q: S`Écris une équation vectorielle du plan contenant les droites sécantes $\vec r=[1,0,0]+s[1,1,0]$ et $\vec r=[1,0,0]+t[0,1,1]$.`, recap: "Elles ont en commun le point (1, 0, 0).", ans: S`$\vec r=[1,0,0]+s[1,1,0]+t[0,1,1]$` },
  { level: 3, space: 5, q: S`Trouve $k$ pour que $(2,k,3)$ appartienne à $\vec r=s[1,0,1]+t[0,1,1]$.`, recap: "x donne s; z donne t.", ans: "k = 1" },
  { level: 3, space: 5, q: S`Montre que chaque point de $\vec r=[1,0,0]+s[1,-1,0]+t[1,0,-1]$ satisfait $x+y+z=1$.`, recap: "Additionne les équations paramétriques.", ans: S`$(1+s+t)+(-s)+(-t)=1$` },
  { level: 3, space: 5, q: S`Explique pourquoi un plan a une infinité d'équations vectorielles différentes.`, recap: "Choix du point et des directions.", ans: "on peut utiliser n'importe quel point du plan et n'importe quels deux vecteurs non parallèles situés dans ce plan" },
];

export const WS = {
  code: "8.2",
  title: TITLE.slice(4),
  bigideas: S`Un plan est déterminé par un point et deux directions non parallèles : $\vec r=\vec r_0+s\vec a+t\vec b$, avec des équations paramétriques en $s$ et en $t$. Trois points non colinéaires $A,B,C$ donnent les directions $\overrightarrow{AB}$ et $\overrightarrow{AC}$; une droite et un point situé hors de celle-ci déterminent aussi un plan. Un point appartient au plan exactement lorsqu'un même couple $s,t$ satisfait les trois équations paramétriques.`,
  goals: ["Écrire les équations vectorielle et paramétriques de plans.", "Utiliser trois points, ou une droite et un point.", "Vérifier des points.", "Reconnaître des points coplanaires."],
  curriculum: "C4.3, C4.5",
  vocab: [["Directions", "deux vecteurs non parallèles"], ["Paramètres", "s, t"], ["Coplanaires", "dans un même plan"], ["Colinéaires", "sur une même droite"]],
  hook: S`Un tabouret à trois pattes ne branle jamais, mais une chaise à quatre pattes peut branler. Explique pourquoi à l'aide des plans.`,
  concepts: [
    ["1. Un point et deux directions", S`$\vec r=\vec r_0+s\vec a+t\vec b$ :
${VF(merge(V3, axes3(4.6), { polys: [patch3([1.5, 1.5, 1.5], [1, 0, 0.6], [0, 1, 0.3], 1.6)] }, { arrows: [{ from: p3(1.5, 1.5, 1.5), to: p3(3.1, 1.5, 2.46), vl: "a", off: 16 }, { from: p3(1.5, 1.5, 1.5), to: p3(1.5, 3.1, 1.98), vl: "b", color: "green", off: -16 }] }), 4.2)}`],
    ["2. Trois points", S`$\vec a=\overrightarrow{AB}$, $\vec b=\overrightarrow{AC}$ (non parallèles).`],
    ["3. Vérification", S`Résous deux équations paramétriques pour trouver $s,t$; vérifie la troisième.`],
  ],
  tips: ["Les directions ne doivent pas être parallèles.", "Points colinéaires : aucun plan unique.", "Vérifie toujours la troisième équation.", "Plusieurs équations, un seul plan.", "En 3D, x = 4 est un plan."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
