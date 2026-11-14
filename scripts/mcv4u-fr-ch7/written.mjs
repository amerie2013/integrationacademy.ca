// MCV4U-FR chapitre 7 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C).
// Miroir de ../mcv4u-ch7/written.mjs (mêmes figures; seul le mot « bolt » devient « boulon »).
//   node scripts/mcv4u-fr-ch7/written.mjs           -> essai à blanc
//   node scripts/mcv4u-fr-ch7/written.mjs --apply   -> téléverse les figures et insère les lignes absentes
import { vdoc, pol, p3, axes3, merge } from "../mcv4u-ch7/vecfig.mjs";
import { runWritten } from "../mcv4u-fr/written-run.mjs";
import { TITLE as T1 } from "./l7_1.mjs";
import { TITLE as T2 } from "./l7_2.mjs";
import { TITLE as T3 } from "./l7_3.mjs";
import { TITLE as T4 } from "./l7_4.mjs";
import { TITLE as T5 } from "./l7_5.mjs";
import { TITLE as T6 } from "./l7_6.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5, 6: T6 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const add3 = (...v) => v.reduce((s, a) => [s[0] + a[0], s[1] + a[1], s[2] + a[2]], [0, 0, 0]);
const ppd = (a, b, c) => {
  const k = [[0, 0, 0], a, b, c, add3(a, b), add3(a, c), add3(b, c), add3(a, b, c)];
  return [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 4], [2, 6], [3, 5], [3, 6], [4, 7], [5, 7], [6, 7]].map(([i, j]) => ({ pts: [p3(...k[i]), p3(...k[j])], color: "gray", w: 1.3 }));
};

export const WRITTEN = [
  W(1, "medium", 4, S`Pour $A(-2,3)$, $B(4,-5)$ et $C(7,1)$ : (a) écris $\overrightarrow{AB}$ et $\overrightarrow{BC}$ sous forme de composantes; (b) trouve $|\overrightarrow{AB}|$ et sa direction mesurée à partir de la partie positive de l'axe des x; (c) trouve $D$ pour que $ABCD$ soit un parallélogramme.`,
    S`(a) $\overrightarrow{AB}=[6,-8]$, $\overrightarrow{BC}=[3,6]$. (b) 10, à $360^\circ-\tan^{-1}\frac86\approx306.87^\circ$. (c) $\overrightarrow{AD}=\overrightarrow{BC}$, donc $D=(-2+3,\ 3+6)=(1,9)$. [1, 2, 1.]`,
    vdoc({ view: { xmin: -3, xmax: 8, ymin: -6, ymax: 10 }, step: 1, segs: [{ pts: [[-2, 3], [4, -5], [7, 1], [1, 9], [-2, 3]], color: "gray", dash: true }], arrows: [{ from: [-2, 3], to: [4, -5], vl: "AB", off: -16 }, { from: [4, -5], to: [7, 1], vl: "BC", color: "blue", off: 16 }], points: [{ x: -2, y: 3, label: "A", dx: -14, dy: 0 }, { x: 4, y: -5, label: "B", dx: 6, dy: 14 }, { x: 7, y: 1, label: "C", dx: 8, dy: 4 }, { x: 1, y: 9, label: "D?", dx: 6, dy: -4 }] })),
  W(1, "hard", 4, S`(a) Écris $\vec w=[8,-1]$ sous la forme $a[2,1]+b[1,-2]$. (b) Explique pourquoi tout vecteur du plan peut s'écrire comme une combinaison de $[2,1]$ et de $[1,-2]$, mais pas de $[2,1]$ et de $[-4,-2]$. (c) Trouve le vecteur unitaire de même direction que $\vec w$.`,
    S`(a) $2a+b=8$ et $a-2b=-1$ donnent $a=3$, $b=2$. (b) $[2,1]$ et $[1,-2]$ ne sont pas colinéaires; leurs combinaisons couvrent donc tout le plan. $[-4,-2]=-2[2,1]$; ses combinaisons restent donc sur une seule droite. (c) $\frac{1}{\sqrt{65}}[8,-1]\approx[0.992,-0.124]$. [2, 1, 1.]`,
    vdoc({ view: { xmin: -0.5, xmax: 9, ymin: -4.6, ymax: 3.6 }, step: 1, arrows: [{ from: [0, 0], to: [6, 3], label: "3[2, 1]", off: -16 }, { from: [6, 3], to: [8, -1], color: "blue", label: "2[1, −2]", off: -16 }, { from: [0, 0], to: [8, -1], color: "red", vl: "w", off: 16 }] })),
  W(2, "medium", 4, S`Soit $\vec a=[3,-1]$ et $\vec b=[1,5]$. (a) Trouve $\vec a\cdot\vec b$. (b) Trouve l'angle entre $\vec a$ et $\vec b$. (c) Trouve $k$ pour que $\vec a$ soit perpendiculaire à $[k,6]$, et vérifie.`,
    S`(a) $3-5=-2$. (b) $\cos\theta=\frac{-2}{\sqrt{10}\sqrt{26}}\approx-0.124$, $\theta\approx97.13^\circ$. (c) $3k-6=0\Rightarrow k=2$; $[3,-1]\cdot[2,6]=6-6=0$. [1, 2, 1.]`,
    vdoc({ view: { xmin: -1, xmax: 4, ymin: -2, ymax: 6 }, step: 1, arrows: [{ from: [0, 0], to: [3, -1], vl: "a", off: 16 }, { from: [0, 0], to: [1, 5], vl: "b", color: "blue", off: -16 }], arcs: [{ at: [0, 0], r: 0.8, a: -18.43, b: 78.69, label: "θ" }] })),
  W(2, "hard", 4, S`(a) Utilise les propriétés du produit scalaire pour montrer que $|\vec a+\vec b|^2=|\vec a|^2+2\vec a\cdot\vec b+|\vec b|^2$. (b) Utilise (a) pour déduire la loi du cosinus pour le triangle dont les côtés sont $\vec a$, $\vec b$ et $\vec a-\vec b$. (c) Montre que si $|\vec a+\vec b|=|\vec a-\vec b|$, alors $\vec a\perp\vec b$.`,
    S`(a) $(\vec a+\vec b)\cdot(\vec a+\vec b)=\vec a\cdot\vec a+\vec a\cdot\vec b+\vec b\cdot\vec a+\vec b\cdot\vec b$, et $\vec a\cdot\vec b=\vec b\cdot\vec a$. (b) De même, $|\vec a-\vec b|^2=|\vec a|^2+|\vec b|^2-2|\vec a||\vec b|\cos\theta$ — la loi du cosinus, où $\theta$ est l'angle entre $\vec a$ et $\vec b$. (c) La soustraction des deux développements donne $4\vec a\cdot\vec b=0$. [1, 2, 1.]`,
    vdoc({ view: { xmin: -0.5, xmax: 6.5, ymin: -0.8, ymax: 4.2 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [6, 0], vl: "a", off: 16 }, { from: [0, 0], to: pol(4, 50), vl: "b", color: "blue", off: -16 }, { from: pol(4, 50), to: [6, 0], color: "red", label: "a − b", off: -14 }], arcs: [{ at: [0, 0], r: 1, a: 0, b: 50, label: "θ" }] })),
  W(3, "medium", 4, S`Un enfant tire un chariot sur 120 m en exerçant une force de 65 N le long de la poignée, qui fait un angle de $28^\circ$ avec le sol. (a) Trouve le travail effectué. (b) Trouve le travail si la poignée est abaissée à $15^\circ$. (c) Explique la différence à l'aide du produit scalaire.`,
    S`(a) $65\times120\cos28^\circ\approx6887$ J. (b) $65\times120\cos15^\circ\approx7534$ J. (c) $W=\vec F\cdot\vec d=|\vec F||\vec d|\cos\theta$ : un angle plus petit oriente une plus grande partie de la traction dans le sens du mouvement; le reste ne fait que soulever la poignée. [1, 1, 2.]`,
    vdoc({ view: { xmin: -0.6, xmax: 6.4, ymin: -0.8, ymax: 3.6 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [1.8, 0], [1.8, 0.7], [0, 0.7]], fill: "#e0e7ff", stroke: "violet" }], arrows: [{ from: [1.8, 0.35], to: pol(3.8, 28, [1.8, 0.35]), vl: "F", label: "65 N", off: -16 }, { from: [1.8, 0.35], to: pol(3.8, 15, [1.8, 0.35]), color: "blue", w: 1.8, dash: true, label: "15°", off: 14 }], arcs: [{ at: [1.8, 0.35], r: 1.2, a: 0, b: 28, label: "28°" }] })),
  W(3, "hard", 4, S`Soit $\vec a=[6,2]$ et $\vec b=[3,-1]$. (a) Trouve la projection scalaire et la projection vectorielle de $\vec a$ sur $\vec b$. (b) Trouve la partie de $\vec a$ perpendiculaire à $\vec b$ et vérifie qu'elle est bien perpendiculaire. (c) Trouve la distance du point $(6,2)$ à la droite qui passe par l'origine dans la direction de $\vec b$.`,
    S`(a) $\vec a\cdot\vec b=16$, $|\vec b|=\sqrt{10}$ : projection scalaire $\frac{16}{\sqrt{10}}\approx5.06$; projection vectorielle $\frac{16}{10}[3,-1]=[4.8,-1.6]$. (b) $[6,2]-[4.8,-1.6]=[1.2,3.6]$; $[1.2,3.6]\cdot[3,-1]=3.6-3.6=0$. (c) $|[1.2,3.6]|\approx3.79$. [2, 1, 1.]`,
    vdoc({ view: { xmin: -0.5, xmax: 7, ymin: -2.2, ymax: 3 }, step: 1, segs: [{ pts: [[-0.3, 0.1], [6.6, -2.2]], color: "blue", dash: true }], arrows: [{ from: [0, 0], to: [6, 2], vl: "a", off: -16 }, { from: [0, 0], to: [3, -1], vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: [4.8, -1.6], color: "red", w: 2.2 }, { from: [4.8, -1.6], to: [6, 2], color: "green", w: 2.2 }] })),
  W(4, "medium", 4, S`Pour $A(2,-1,3)$ et $B(5,3,-9)$ : (a) trouve $\overrightarrow{AB}$ et $|\overrightarrow{AB}|$; (b) trouve les angles directeurs de $\overrightarrow{AB}$; (c) vérifie que la somme des carrés de leurs cosinus vaut 1.`,
    S`(a) $[3,4,-12]$, longueur 13. (b) $\alpha=\cos^{-1}\frac3{13}\approx76.66^\circ$, $\beta=\cos^{-1}\frac4{13}\approx72.08^\circ$, $\gamma=\cos^{-1}\left(-\frac{12}{13}\right)\approx157.38^\circ$. (c) $\frac{9+16+144}{169}=1$. [1, 2, 1.]`,
    vdoc(merge(V3, axes3(4.6), { arrows: [{ from: [0, 0], to: p3(1.2, 1.6, -4.8).map((z) => z * 0.8), color: "red", vl: "AB", off: 16 }] }, { view: { xmin: -3.8, xmax: 5.4, ymin: -4.6, ymax: 5.4 } }))),
  W(4, "hard", 4, S`Pour $P(1,0,0)$, $Q(3,1,2)$ et $R(1,3,1)$ : (a) trouve les longueurs des côtés du $\triangle PQR$; (b) trouve $\angle P$; (c) trouve l'aire du triangle.`,
    S`(a) $\overrightarrow{PQ}=[2,1,2]$ : 3; $\overrightarrow{PR}=[0,3,1]$ : $\sqrt{10}$; $\overrightarrow{QR}=[-2,2,-1]$ : 3. (b) $\cos P=\frac{5}{3\sqrt{10}}$, $\angle P\approx58.19^\circ$. (c) $\frac12|\overrightarrow{PQ}\times\overrightarrow{PR}|=\frac12|[-5,-2,6]|=\frac{\sqrt{65}}2\approx4.03$ (ou $\frac12(3)(\sqrt{10})\sin58.19^\circ$). [1, 1.5, 1.5.]`,
    vdoc(merge(V3, axes3(4.6), { polys: [{ pts: [p3(1, 0, 0), p3(3, 1, 2), p3(1, 3, 1)], fill: "#ede9fe", stroke: "violet" }], points: [{ x: p3(1, 0, 0)[0], y: p3(1, 0, 0)[1], label: "P", dx: -16, dy: 14 }, { x: p3(3, 1, 2)[0], y: p3(3, 1, 2)[1], label: "Q", dx: -16, dy: -6 }, { x: p3(1, 3, 1)[0], y: p3(1, 3, 1)[1], label: "R", dx: 8, dy: -4 }] }))),
  W(5, "medium", 4, S`Soit $\vec a=[2,-1,3]$ et $\vec b=[1,2,-1]$. (a) Trouve $\vec a\times\vec b$. (b) Vérifie qu'il est perpendiculaire à $\vec a$ et à $\vec b$. (c) Trouve l'aire du parallélogramme qu'ils engendrent. (d) Écris $\vec b\times\vec a$ sans autre calcul.`,
    S`(a) $[(-1)(-1)-3(2),\ 3(1)-2(-1),\ 2(2)-(-1)(1)]=[-5,5,5]$. (b) $-10-5+15=0$ et $-5+10-5=0$. (c) $\sqrt{75}=5\sqrt3\approx8.66$. (d) $[5,-5,-5]$. [1.5, 1, 1, 0.5.]`,
    vdoc(merge(V3, axes3(4.4), { polys: [{ pts: [p3(0, 0, 0), p3(2, -1, 3), p3(3, 1, 2), p3(1, 2, -1)], fill: "#ede9fe", stroke: "gray" }], arrows: [{ from: [0, 0], to: p3(2, -1, 3), vl: "a", off: -16 }, { from: [0, 0], to: p3(1, 2, -1), vl: "b", color: "blue", off: 16 }] }, { view: { xmin: -4.2, xmax: 5, ymin: -3.4, ymax: 5.4 } }))),
  W(5, "hard", 4, S`Soit $\vec a=[1,0,1]$ et $\vec b=[0,1,-1]$. (a) Trouve $\vec a\times\vec b$ et $(3\vec a)\times\vec b$; que remarques-tu? (b) Démontre que $(k\vec a)\times\vec b=k(\vec a\times\vec b)$ pour tous vecteurs. (c) Montre que $\vec a\cdot(\vec a\times\vec b)=0$ et explique ce que cela vérifie.`,
    S`(a) $\vec a\times\vec b=[-1,1,1]$, $(3\vec a)\times\vec b=[-3,3,3]=3(\vec a\times\vec b)$. (b) Chaque composante de $(k\vec a)\times\vec b$, par exemple $ka_2b_3-ka_3b_2$, vaut $k$ fois la composante correspondante de $\vec a\times\vec b$. (c) $-1+0+1=0$ : le produit vectoriel est perpendiculaire à $\vec a$. [1.5, 1.5, 1.]`,
    vdoc(merge(V3, axes3(4.4), { arrows: [{ from: [0, 0], to: p3(2, 0, 2), vl: "a", off: -16 }, { from: [0, 0], to: p3(0, 2, -2), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(-2, 2, 2), color: "red", label: "a × b", off: -16 }] }, { view: { xmin: -3.8, xmax: 5, ymin: -3.6, ymax: 5.4 } }))),
  W(6, "medium", 4, S`Une mécanicienne applique une force de 75 N à l'extrémité d'une clé de 0.28 m, à $65^\circ$ du manche. (a) Trouve la grandeur du moment de force. (b) Quel est le plus grand moment de force que cette force pourrait produire, et comment? (c) Pour quel angle aigu le moment de force serait-il de 15 N·m?`,
    S`(a) $0.28\times75\sin65^\circ\approx19.03$ N·m. (b) 21 N·m, en tirant perpendiculairement au manche. (c) $\sin\theta=\frac{15}{21}$, $\theta\approx45.58^\circ$. [1.5, 1, 1.5.]`,
    vdoc({ view: { xmin: -0.6, xmax: 7.4, ymin: -0.8, ymax: 4.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [5, 0], vl: "r", label: "0.28 m", off: 16, w: 5 }, { from: [5, 0], to: pol(3.6, 65, [5, 0]), vl: "F", label: "75 N", color: "red", off: -16 }], arcs: [{ at: [5, 0], r: 1, a: 0, b: 65, label: "65°" }], points: [{ x: 0, y: 0, label: "boulon", dx: -6, dy: 20 }] })),
  W(6, "hard", 4, S`Soit $\vec a=[3,1,0]$, $\vec b=[0,2,1]$ et $\vec c=[1,0,3]$. (a) Trouve le volume du parallélépipède qu'ils engendrent. (b) Trouve sa hauteur au-dessus de la face engendrée par $\vec b$ et $\vec c$. (c) Montre que $\vec a$, $\vec b$ et $\vec a+\vec b$ sont coplanaires, et explique pourquoi on pouvait s'y attendre.`,
    S`(a) $\vec b\times\vec c=[6,1,-2]$; $\vec a\cdot(\vec b\times\vec c)=18+1+0=19$. (b) Aire de la base $\sqrt{41}$; hauteur $\frac{19}{\sqrt{41}}\approx2.97$. (c) $[3,3,1]\cdot(\vec b\times\vec a)$ avec $\vec b\times\vec a=[-1,3,-6]$ : $-3+9-6=0$; $\vec a+\vec b$ est construit à partir de $\vec a$ et de $\vec b$, il est donc dans leur plan. [1.5, 1, 1.5.]`,
    vdoc(merge(V3, axes3(4.6), { segs: ppd([3, 1, 0], [0, 2, 1], [1, 0, 3]) }, { arrows: [{ from: [0, 0], to: p3(3, 1, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0, 2, 1), vl: "b", color: "blue", off: 16 }, { from: [0, 0], to: p3(1, 0, 3), vl: "c", color: "green", off: -16 }] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }))),
];

await runWritten(WRITTEN, "../mcv4u-ch7/written.mjs", import.meta.url);
