// MCV4U-FR Fiche d'exercices 8.6 — Intersections de plans (version de l'enseignant)
import { svgT } from "./figT.mjs";
import { vdoc, p3, axes3, merge, line3, patch3 } from "../../mcv4u-ch8/vecfig.mjs";
import { TITLE } from "../l8_6.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const EXAMPLES = [
  { title: "Deux plans", q: S`Trouve la droite d'intersection de $x+2y-z=4$ et $2x-y+z=3$.`,
    fig: VF(merge(V3, axes3(4.6), { polys: [patch3([2, 1, 0], [1, 0, 1], [0, 1, 2], 1.2, "#dbeafe", "blue", 0.5), patch3([2, 1, 0], [1, 2, 0], [0, 1, 1], 1.2, "#dcfce7", "green", 0.5)] }, { segs: [line3([2, 1, 0], [1, -3, -5], -0.5, 0.7, "red", 3)] }), 4.2),
    steps: [S`Direction $[1,2,-1]\times[2,-1,1]=[1,-3,-5]$.`, S`Avec $z=0$ : $x+2y=4$, $2x-y=3\Rightarrow x=2,\ y=1$.`], ans: S`$\vec r=[2,1,0]+t[1,-3,-5]$` },
  { title: "Plans confondus", q: S`Compare $3x-y+z=2$ et $-6x+2y-2z=-4$.`,
    steps: [S`La deuxième équation est $-2$ fois la première.`], ans: "le même plan" },
  { title: "Trois plans, un point", q: S`Résous $x+y-z=1$, $2x-y+z=5$, $x+2y+z=9$.`,
    steps: [S`Additionne les deux premières : $3x=6\Rightarrow x=2$.`, S`Alors $y-z=-1$ et $2y+z=7\Rightarrow y=2,\ z=3$.`], ans: "(2, 2, 3)" },
  { title: "Un faisceau de plans", q: S`Résous $x+y+z=3$, $x-y=1$, $2x+z=4$.`,
    steps: [S`La troisième équation est la somme des deux premières.`, S`Pose \(x=t\) : \(y=t-1\), \(z=4-2t\).`], ans: S`la droite $\vec r=[0,-1,4]+t[1,1,-2]$` },
  { title: "Un prisme triangulaire", q: S`Montre que $x+y+z=3$, $x-y=1$, $2x+z=6$ n'ont aucun point commun.`,
    steps: [S`L'addition des deux premières donne $2x+z=4$, ce qui contredit $2x+z=6$.`, S`Aucune normale n'est parallèle à une autre, mais elles sont coplanaires : un prisme triangulaire.`], ans: "aucune solution — prisme triangulaire" },
  { title: "Deux plans parallèles et un troisième", q: S`Décris $x+y+z=1$, $x+y+z=4$, $x-y=0$.`,
    steps: [S`Les deux premiers plans sont parallèles et distincts.`], ans: "aucun point commun; le troisième plan coupe chacun des deux autres selon une droite" },
  { title: "Trois plans parallèles", q: S`Décris $z=0$, $z=1$, $2z=6$.`,
    steps: [S`Toutes les normales sont des multiples de $\vec k$, avec des constantes différentes.`], ans: "trois plans parallèles, aucun point commun" },
  { title: "Le test du produit mixte", q: S`Utilise les normales pour confirmer que les plans de l'exemple 3 se rencontrent en un point.`,
    steps: [S`$[2,-1,1]\times[1,2,1]=[-3,-1,5]$; produit scalaire avec $[1,1,-1]$ : $-3-1-5=-9$.`], ans: "−9 ≠ 0, donc exactement un point" },
  { title: "Angle entre deux plans", q: S`Trouve l'angle entre les plans de l'exemple 1.`,
    steps: [S`$|\vec n_1\cdot\vec n_2|=|2-2-1|=1$; $|\vec n_1||\vec n_2|=6$.`], ans: "environ 80.41°" },
];

const PROBLEMS = [
  { level: 1, q: S`Trouve le point commun à $x=2$, $y=-1$, $z=4$.`, recap: "Lis-le directement.", ans: "(2, −1, 4)" },
  { level: 1, q: S`Classe $2x+4y-6z=2$ et $x+2y-3z=1$.`, recap: "L'une est-elle un multiple de l'autre?", ans: "confondus" },
  { level: 1, q: S`Décris l'intersection de $x+y=1$ et $x-y=3$ dans l'espace à trois dimensions.`, recap: "z est libre.", ans: "la droite verticale x = 2, y = −1" },
  { level: 2, q: S`Trouve la droite d'intersection de $x-y+z=2$ et $2x+y-z=1$.`, recap: "Produit vectoriel des normales; pose z = 0.", ans: S`$\vec r=[1,-1,0]+t[0,1,1]$` },
  { level: 2, q: S`Résous $x+y+z=4$, $x-y+z=2$, $x+y-z=0$.`, recap: "Combine les équations deux à deux.", ans: "(1, 1, 2)" },
  { level: 2, q: S`Trouve le produit mixte des normales de $x+2y+3z=1$, $y+4z=2$, $z=3$.`, recap: "Matrice triangulaire supérieure.", ans: "1 (donc un point)" },
  { level: 2, q: S`Les plans $2x-y+3z=1$ et $4x-2y+6z=5$ sont-ils parallèles, confondus ou sécants?`, recap: "Compare les normales et les constantes.", ans: "parallèles et distincts" },
  { level: 2, q: S`Résous $x+y+z=6$, $x-y=0$, $y-z=0$.`, recap: "x = y = z.", ans: "(2, 2, 2)" },
  { level: 3, space: 5, q: S`Pour quelle valeur de $k$ les plans $x+y+z=2$, $x+2y+3z=5$, $2x+3y+kz=7$ forment-ils un faisceau? Que se passe-t-il si la troisième constante est 8 au lieu de 7?`, recap: "Normales coplanaires; compare avec la somme des deux premières.", ans: "k = 4 (troisième = somme des deux premières); avec 8, aucune solution — un prisme" },
  { level: 3, space: 5, q: S`Classe $x+y+z=1$, $2x+2y+2z=3$, $x-z=0$.`, recap: "Cherche des plans parallèles.", ans: "deux plans parallèles coupés par un troisième : aucun point commun" },
  { level: 3, space: 5, q: S`Trouve la distance entre $x-2y+2z=1$ et $x-2y+2z=10$.`, recap: "|10 − 1| / 3.", ans: "3" },
  { level: 3, space: 5, q: S`Trouve la droite d'intersection de $x=2z$ et $y=3z$.`, recap: "Pose z = t.", ans: S`$\vec r=t[2,3,1]$` },
  { level: 3, space: 5, q: S`Explique pourquoi trois plans dont les normales vérifient $\vec n_1\cdot(\vec n_2\times\vec n_3)=0$ ne peuvent pas se rencontrer en exactement un point.`, recap: "Normales coplanaires.", ans: "les normales sont situées dans un même plan; les trois plans contiennent donc tous une direction commune (perpendiculaire à ce plan), et tout point commun s'étendrait en une droite commune" },
];

export const WS = {
  code: "8.6",
  title: TITLE.slice(4),
  bigideas: S`Deux plans non parallèles se coupent selon une droite de direction $\vec n_1\times\vec n_2$; des plans parallèles ne se rencontrent jamais; des plans confondus coïncident. Trois plans se rencontrent en un point exactement lorsque $\vec n_1\cdot(\vec n_2\times\vec n_3)\ne0$; sinon, ils ont en commun une droite ou un plan, ou n'ont aucun point commun (plans parallèles ou prisme triangulaire). L'élimination permet de trouver les solutions : $0=0$ indique une infinité de solutions, $0=c$ aucune.`,
  goals: ["Trouver la droite d'intersection de deux plans.", "Résoudre des systèmes de trois plans.", "Nommer la configuration.", "Utiliser le produit mixte des normales."],
  curriculum: "C3.2, C3.3, C4.4",
  vocab: [["Droite d'intersection", "direction $\\vec n_1\\times\\vec n_2$"], ["Faisceau", "trois plans passant par une même droite"], ["Prisme", "se coupent deux à deux, aucun point commun"], ["Produit mixte", "$\\vec n_1\\cdot(\\vec n_2\\times\\vec n_3)$"]],
  hook: S`Observe le coin d'une pièce : deux murs et le plancher. En combien de points se rencontrent-ils tous les trois? Et les pages d'un livre ouvert?`,
  concepts: [
    ["1. Deux plans", S`Une droite (non parallèles), aucun point (parallèles) ou tous les points (confondus).`],
    ["2. Trois plans", S`Un point, une droite, un plan ou rien :
${VF(merge(V3, axes3(4.6), { polys: [patch3([1.5, 0, 0], [1, 0, 0], [0, 1.4, 0], 1.5, "#dbeafe", "blue", 0.45), patch3([1.5, 1, 1], [1, 0, 0], [0, 0.7, -0.7], 1.5, "#dcfce7", "green", 0.45), patch3([1.5, -1, 1], [1, 0, 0], [0, 0.7, 0.7], 1.5, "#fee2e2", "red", 0.45)] }), 4)}`],
    ["3. Le test", S`$\vec n_1\cdot(\vec n_2\times\vec n_3)\ne0\iff$ exactement un point.`],
  ],
  tips: ["Direction de la droite : produit vectoriel des deux normales.", "0 = 0 : une infinité de solutions.", "0 = c : aucune solution.", "Vérifie les réponses dans toutes les équations.", "Normales coplanaires : aucun point unique."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
