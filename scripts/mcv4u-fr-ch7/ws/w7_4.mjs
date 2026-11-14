// MCV4U-FR Fiche d'exercices 7.4 — Vecteurs dans l'espace (édition de l'enseignant)
import { svgT } from "./figT.mjs";
import { vdoc, p3, axes3, box3, merge } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
const VF = (o, w = 6) => svgT(vdoc(o), w);
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const EXAMPLES = [
  { title: "Représenter un point", q: S`Représente $A(4,-2,1)$ et trouve $|\overrightarrow{OA}|$.`,
    fig: VF(merge(V3, axes3(4.8, 2.6), { segs: box3(4, -2, 1) }, { arrows: [{ from: [0, 0], to: p3(4, -2, 1), vl: "OA", color: "red", off: 16 }], points: [{ x: p3(4, -2, 1)[0], y: p3(4, -2, 1)[1], label: "A(4, −2, 1)", dx: -40, dy: 18 }] }, { view: { xmin: -5.2, xmax: 5.6, ymin: -3.2, ymax: 5.6 } }), 4.6),
    steps: [S`4 le long de l'axe des x, $-2$ le long de l'axe des y (vers la gauche), 1 vers le haut.`, S`$\sqrt{16+4+1}=\sqrt{21}$.`], ans: "environ 4.58" },
  { title: "Les octants", q: S`Décris où se situe le point $(3,-1,-2)$.`,
    steps: [S`x positif (en avant), y négatif (à gauche), z négatif (sous le plan xy).`], ans: "l'octant où x > 0, y < 0, z < 0" },
  { title: "Une distance", q: S`Trouve la distance de $P(-1,3,2)$ à $Q(5,1,-1)$.`,
    steps: [S`$\overrightarrow{PQ}=[6,-2,-3]$.`, S`$\sqrt{36+4+9}$.`], ans: "7" },
  { title: "Opérations", q: S`Pour $\vec u=[2,0,-1]$ et $\vec v=[-1,3,4]$, trouve $\vec u+2\vec v$ et sa norme.`,
    steps: [S`$[2-2,\ 0+6,\ -1+8]=[0,6,7]$.`, S`$\sqrt{36+49}=\sqrt{85}$.`], ans: "[0, 6, 7], environ 9.22" },
  { title: "Produit scalaire et angle", q: S`Trouve l'angle entre $[1,-1,2]$ et $[3,2,1]$.`,
    steps: [S`Produit scalaire $3-2+2=3$; normes $\sqrt6$ et $\sqrt{14}$.`, S`$\cos\theta=\frac{3}{\sqrt{84}}\approx0.3273$.`], ans: "environ 70.89°" },
  { title: "Angles directeurs", q: S`Trouve les angles directeurs de $[1,2,2]$.`,
    steps: [S`Norme 3 : $\cos\alpha=\frac13$, $\cos\beta=\cos\gamma=\frac23$.`], ans: S`$\alpha\approx70.53^\circ$, $\beta=\gamma\approx48.19^\circ$` },
  { title: "Un vecteur unitaire", q: S`Trouve le vecteur unitaire de même direction que $[-3,0,4]$.`,
    steps: [S`Norme 5; on divise.`], ans: "[−0.6, 0, 0.8]" },
  { title: "Un point milieu", q: S`Trouve le point milieu de $(2,5,-1)$ et de $(6,-3,7)$.`,
    steps: [S`On fait la moyenne de chaque coordonnée.`], ans: "(4, 1, 3)" },
  { title: "Perpendiculaires dans l'espace", q: S`$[2,-3,1]$ et $[4,3,1]$ sont-ils perpendiculaires?`,
    fig: VF(merge(V3, axes3(4.4), { arrows: [{ from: [0, 0], to: p3(2, -3, 1), vl: "a", off: 16 }, { from: [0, 0], to: p3(4, 3, 1).map((z) => z * 0.8), vl: "b", color: "blue", off: -16 }] }, { view: { xmin: -5, xmax: 5, ymin: -3.4, ymax: 5 } }), 4.4),
    steps: [S`$8-9+1=0$.`], ans: "oui" },
];

const PROBLEMS = [
  { level: 1, q: S`Trouve $|[2,-3,6]|$.`, recap: "√(4 + 9 + 36).", ans: "7" },
  { level: 1, q: S`Trouve $\overrightarrow{AB}$ pour $A(1,0,2)$ et $B(4,4,2)$.`, recap: "Pointe moins origine.", ans: "[3, 4, 0]" },
  { level: 1, q: S`Trouve $[1,2,3]\cdot[-1,0,2]$.`, recap: "−1 + 0 + 6.", ans: "5" },
  { level: 2, q: S`Trouve la distance entre $(3,-2,1)$ et $(-1,2,3)$.`, recap: "√(16 + 16 + 4).", ans: "6" },
  { level: 2, q: S`Trouve l'angle entre $[1,0,1]$ et $[0,1,1]$.`, recap: S`$\cos\theta=\frac12$.`, ans: "60°" },
  { level: 2, q: S`Trouve $k$ pour que $[k,2,-1]\perp[3,-1,k]$.`, recap: "3k − 2 − k = 0.", ans: "k = 1" },
  { level: 2, q: S`Trouve les cosinus directeurs de $[2,-1,2]$.`, recap: "Divise par 3.", ans: S`$\frac23,\ -\frac13,\ \frac23$` },
  { level: 2, q: S`Esquisse le point $(2,3,3)$ sur les axes avec sa boîte de repère.`, recap: "x, puis y, puis z.", ans: "un coin de la boîte de 2 sur 3 sur 3", fig: VF(merge(V3, axes3(4.8)), 4.6) },
  { level: 3, space: 5, q: S`Montre que $A(2,1,1)$, $B(4,3,2)$ et $C(1,3,3)$ forment un triangle isocèle, et trouve $\angle A$.`, recap: "Les longueurs, puis un produit scalaire.", ans: S`$AB=AC=3$, $BC=\sqrt{10}$; $\cos A=\frac49$, $\angle A\approx63.61^\circ$` },
  { level: 3, space: 5, q: S`Trouve le vecteur de norme 10 de même direction que $[2,-2,1]$.`, recap: "Le vecteur unitaire multiplié par 10.", ans: S`$\frac{10}{3}[2,-2,1]\approx[6.67,-6.67,3.33]$` },
  { level: 3, space: 5, q: S`Un vecteur forme un angle de $60^\circ$ avec l'axe des x et avec l'axe des y. Quel angle peut-il former avec l'axe des z?`, recap: "La somme des carrés des cosinus vaut 1.", ans: "45° ou 135°" },
  { level: 3, space: 5, q: S`Trouve le point de l'axe des z situé à égale distance de $(1,2,3)$ et de $(-1,0,5)$.`, recap: "Utilise (0, 0, z) et égale les carrés des distances.", ans: "(0, 0, 3)" },
  { level: 3, space: 5, q: S`Trouve $c$ pour que $[1,c,2]$ forme un angle de $60^\circ$ avec l'axe des z.`, recap: S`$\frac{2}{\sqrt{5+c^2}}=\frac12$.`, ans: S`$c=\pm\sqrt{11}\approx\pm3.32$` },
];

export const WS = {
  code: "7.4",
  title: "Vecteurs dans l'espace",
  bigideas: S`Trois axes perpendiculaires (système de main droite) donnent à chaque point des coordonnées $(x,y,z)$ et à chaque vecteur trois composantes $[a,b,c]=a\vec i+b\vec j+c\vec k$. Les distances et les normes utilisent $\sqrt{a^2+b^2+c^2}$; les opérations et le produit scalaire gagnent un troisième terme. Les angles directeurs $\alpha$, $\beta$, $\gamma$ avec les axes ont pour cosinus $\frac a{|\vec v|}$, $\frac b{|\vec v|}$, $\frac c{|\vec v|}$, dont la somme des carrés vaut 1.`,
  goals: ["Représenter des points dans l'espace.", "Trouver des distances et des normes.", "Effectuer des opérations sur des vecteurs de l'espace.", "Trouver des angles et des angles directeurs."],
  curriculum: "C1.4, C2.1, C2.4",
  vocab: [["$\\vec k$", "$[0,0,1]$"], ["Norme", "$\\sqrt{a^2+b^2+c^2}$"], ["Cosinus directeurs", "$\\frac a{|\\vec v|},\\frac b{|\\vec v|},\\frac c{|\\vec v|}$"], ["Octant", "combinaison des signes de x, y, z"]],
  hook: S`Un drone fait du surplace à 30 m au-dessus d'un point situé à 40 m à l'est et à 120 m au nord de toi. À quelle distance de toi se trouve-t-il?`,
  concepts: [
    ["1. Représenter un point", S`Le point $(3,4,2)$ est un coin d'une boîte :
${VF(merge(V3, axes3(4.8), { segs: box3(3, 4, 2) }, { points: [{ x: p3(3, 4, 2)[0], y: p3(3, 4, 2)[1], label: "(3, 4, 2)" }] }), 4.4)}`],
    ["2. Formules", S`$|\vec v|=\sqrt{a^2+b^2+c^2}$; $\vec a\cdot\vec b=a_1b_1+a_2b_2+a_3b_3$.`],
    ["3. Angles directeurs", S`$\cos^2\alpha+\cos^2\beta+\cos^2\gamma=1$.`],
  ],
  tips: ["Dans les croquis, l'axe des x vient vers toi.", "Élève les trois composantes au carré.", "Les angles directeurs se mesurent avec les axes positifs.", "Point milieu : moyenne de chaque coordonnée.", "Axes en système de main droite."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
