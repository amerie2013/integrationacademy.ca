// MCV4U-FR chapitre 8 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C).
// Miroir de ../mcv4u-ch8/written.mjs (mêmes figures, mots des figures en français).
//   node scripts/mcv4u-fr-ch8/written.mjs           -> essai à blanc
//   node scripts/mcv4u-fr-ch8/written.mjs --apply   -> téléverse les figures et insère les lignes absentes
import { vdoc, p3, axes3, merge, line3, patch3 } from "../mcv4u-ch8/vecfig.mjs";
import { runWritten } from "../mcv4u-fr/written-run.mjs";
import { TITLE as T1 } from "./l8_1.mjs";
import { TITLE as T2 } from "./l8_2.mjs";
import { TITLE as T3 } from "./l8_3.mjs";
import { TITLE as T4 } from "./l8_4.mjs";
import { TITLE as T5 } from "./l8_5.mjs";
import { TITLE as T6 } from "./l8_6.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5, 6: T6 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const pt = (x, y, z, label, dx = 8, dy = -6) => { const [a, b] = p3(x, y, z); return { x: a, y: b, label, dx, dy }; };
const L2 = (p, m, t0, t1, color = "violet") => ({ pts: [[p[0] + t0 * m[0], p[1] + t0 * m[1]], [p[0] + t1 * m[0], p[1] + t1 * m[1]]], color, w: 2.4 });

export const WRITTEN = [
  W(1, "medium", 4, S`Une droite passe par $A(3,-1)$ et $B(-1,5)$. (a) Écris des équations vectorielle et paramétriques. (b) Écris une équation cartésienne. (c) Détermine si $C(7,-7)$ est sur la droite, à l'aide de deux formes différentes.`,
    S`(a) Vecteur directeur $[-4,6]$, ou $[-2,3]$ : $\vec r=[3,-1]+t[-2,3]$; $x=3-2t$, $y=-1+3t$. (b) Vecteur normal $[3,2]$ : $3x+2y-7=0$. (c) Paramétriques : $t=-2$ donne $(7,-7)$ ✓; cartésienne : $21-14-7=0$ ✓. [1, 1.5, 1.5.]`,
    vdoc({ view: { xmin: -2, xmax: 8, ymin: -8, ymax: 6 }, step: 1, segs: [L2([3, -1], [-2, 3], -2.3, 2.2)], points: [{ x: 3, y: -1, label: "A", dx: 8, dy: 4 }, { x: -1, y: 5, label: "B", dx: 8, dy: 4 }, { x: 7, y: -7, label: "C?", dx: -26, dy: -4 }] })),
  W(1, "hard", 4, S`Une droite passe par $(2,0,1)$ et $(5,3,-2)$. (a) Écris des équations vectorielle et paramétriques. (b) Décris la droite comme l'intersection de deux plans. (c) Trouve où elle traverse le plan xy.`,
    S`(a) Vecteur directeur $[3,3,-3]$, ou $[1,1,-1]$ : $\vec r=[2,0,1]+t[1,1,-1]$; $x=2+t$, $y=t$, $z=1-t$. (b) $x-y=2$ et $x+z=3$ (on élimine $t$). (c) $z=0$ en $t=1$ : $(3,1,0)$. [1, 2, 1.]`,
    vdoc(merge(V3, axes3(4.8), { segs: [line3([2, 0, 1], [1, 1, -1], -1, 3.2, "violet", 2.8)] }, { points: [pt(2, 0, 1, "(2, 0, 1)", -60, 14), pt(3, 1, 0, "(3, 1, 0)", 8, 14)] }))),
  W(2, "medium", 4, S`Pour $A(1,2,0)$, $B(3,1,1)$ et $C(0,4,2)$ : (a) écris une équation vectorielle du plan qui passe par ces points; (b) écris ses équations paramétriques; (c) montre que $D(4,2,4)$ est sur le plan et donne les valeurs des paramètres.`,
    S`(a) $\vec r=[1,2,0]+s[2,-1,1]+t[-1,2,2]$. (b) $x=1+2s-t$, $y=2-s+2t$, $z=s+2t$. (c) $x$, $y$ : $2s-t=3$, $-s+2t=0\Rightarrow s=2,\ t=1$; $z$ : $2+2=4$ ✓. [1.5, 1, 1.5.]`,
    vdoc(merge(V3, axes3(4.6), { polys: [{ pts: [p3(1, 2, 0), p3(3, 1, 1), p3(0, 4, 2)], fill: "#dbeafe", stroke: "blue" }], points: [pt(1, 2, 0, "A", -6, 18), pt(3, 1, 1, "B", -16, 12), pt(0, 4, 2, "C"), pt(4, 2, 4, "D")] }, { view: { xmin: -3.8, xmax: 6.4, ymin: -2.8, ymax: 6 } }))),
  W(2, "hard", 4, S`Montre que $A(1,0,2)$, $B(2,1,3)$, $C(0,2,1)$ et $D(1,3,2)$ sont coplanaires, trouve une équation vectorielle de leur plan et décris le quadrilatère $ABDC$.`,
    S`$\overrightarrow{AB}=[1,1,1]$, $\overrightarrow{AC}=[-1,2,-1]$, $\overrightarrow{AD}=[0,3,0]=\overrightarrow{AB}+\overrightarrow{AC}$; $D$ est donc sur le plan $\vec r=[1,0,2]+s[1,1,1]+t[-1,2,-1]$ ($s=t=1$). Comme $\overrightarrow{AD}=\overrightarrow{AB}+\overrightarrow{AC}$, $ABDC$ est un parallélogramme. [2, 1, 1.]`,
    vdoc(merge(V3, axes3(4.6), { polys: [{ pts: [p3(1, 0, 2), p3(2, 1, 3), p3(1, 3, 2), p3(0, 2, 1)], fill: "#dbeafe", stroke: "blue" }], points: [pt(1, 0, 2, "A", -16, 10), pt(2, 1, 3, "B"), pt(0, 2, 1, "C", 6, 16), pt(1, 3, 2, "D")] }, { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 6.4 } }))),
  W(3, "medium", 4, S`(a) Trouve l'équation cartésienne du plan qui passe par $P(2,-1,3)$ et dont le vecteur normal est $[1,4,-2]$. (b) Trouve ses points d'intersection avec les axes. (c) Trouve sa distance à l'origine.`,
    S`(a) $x+4y-2z=2-4-6$, donc $x+4y-2z+8=0$. (b) Axe des x : $-8$; axe des y : $-2$; axe des z : $4$. (c) $\frac{8}{\sqrt{21}}\approx1.75$. [1.5, 1.5, 1.]`,
    vdoc(merge({ view: { xmin: -4, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false }, axes3(4.8, 3), { polys: [{ pts: [p3(-8 * 0.4, 0, 0), p3(0, -2 * 0.8, 0), p3(0, 0, 4 * 0.8)], fill: "#dbeafe", stroke: "blue" }] }, { texts: [{ x: 3.4, y: 4.6, t: "intersections −8, −2, 4 (réduites)", color: "gray" }] }))),
  W(3, "hard", 4, S`Soit $\pi$ le plan $\vec r=[1,1,0]+s[2,0,1]+t[1,3,-1]$. (a) Trouve une équation cartésienne de $\pi$. (b) Trouve l'angle aigu entre $\pi$ et $x+y+z=5$. (c) Trouve la distance de $(3,0,1)$ à $\pi$.`,
    S`(a) $\vec n=[2,0,1]\times[1,3,-1]=[-3,3,6]$, ou $[1,-1,-2]$ : $x-y-2z=0$. (b) $\cos\theta=\frac{|1-1-2|}{\sqrt6\sqrt3}\approx0.4714$, $\theta\approx61.87^\circ$. (c) $\frac{|3-0-2|}{\sqrt6}\approx0.41$. [1.5, 1.5, 1.]`,
    vdoc(merge(V3, axes3(4.6), { polys: [patch3([1, 1, 0], [2, 0, 1], [1, 3, -1], 0.7)] }, { points: [pt(3, 0, 1, "(3, 0, 1)")] }))),
  W(4, "medium", 4, S`Trouve l'intersection de $\vec r=[1,4]+s[2,-1]$ et de $\vec r=[-2,1]+t[1,1]$, ainsi que l'angle aigu entre les droites.`,
    S`$1+2s=-2+t$ et $4-s=1+t$ donnent $t=3-s$, donc $1+2s=1-s$, $s=0$, $t=3$ : le point $(1,4)$. Angle : $\cos\theta=\frac{2-1}{\sqrt5\sqrt2}\approx0.316$, $\theta\approx71.57^\circ$. [2.5, 1.5.]`,
    vdoc({ view: { xmin: -3, xmax: 5, ymin: -1, ymax: 6 }, step: 1, segs: [L2([1, 4], [2, -1], -1.6, 1.8), L2([-2, 1], [1, 1], -0.6, 4.6, "blue")], points: [{ x: 1, y: 4, label: "(1, 4)", dx: 8, dy: -6 }] })),
  W(4, "hard", 4, S`$L_1:\ \vec r=[1,-1,2]+s[1,2,0]$ et $L_2:\ \vec r=[3,0,-1]+t[0,1,2]$. (a) Montre que les droites sont gauches. (b) Trouve la plus courte distance entre elles.`,
    S`(a) Les vecteurs directeurs ne sont pas parallèles. $x$ : $s=2$; $y$ : $-1+4=t\Rightarrow t=3$; $z$ : $2$ contre $-1+6=5$ — contradiction; les droites sont donc gauches. (b) $\vec n=[1,2,0]\times[0,1,2]=[4,-2,1]$; $\overrightarrow{P_1P_2}=[2,1,-3]$; distance $\frac{|8-2-3|}{\sqrt{21}}=\frac3{\sqrt{21}}\approx0.65$. [2, 2.]`,
    vdoc(merge(V3, axes3(4.6), { segs: [line3([1, -1, 2], [1, 2, 0], -0.6, 2, "violet", 2.8), line3([3, 0, -1], [0, 1, 2], -0.4, 3.2, "blue", 2.8)] }, { view: { xmin: -4.4, xmax: 6, ymin: -3.4, ymax: 6.4 } }))),
  W(5, "medium", 4, S`On donne la droite $\vec r=[2,1,-1]+t[1,-1,2]$ et le plan $3x+y-z=15$. (a) Montre que la droite ne rencontre pas le plan. (b) Trouve la distance entre eux. (c) Pour quelle valeur de $D$ la droite serait-elle contenue dans le plan $3x+y-z=D$?`,
    S`(a) En substituant : $3(2+t)+(1-t)-(-1+2t)=8$ pour tout $t$, jamais 15 (et $\vec m\cdot\vec n=3-1-2=0$). (b) $\frac{|8-15|}{\sqrt{11}}\approx2.11$. (c) $D=8$. [1.5, 1.5, 1.]`,
    vdoc(merge(V3, axes3(4.6), { polys: [patch3([3, 3, 0], [1, -1, 2], [0, 1, 1], 0.9)] }, { segs: [line3([2, 1, -1], [1, -1, 2], -0.6, 1.6, "red", 2.8)] }))),
  W(5, "hard", 4, S`Pour $P(5,-1,4)$ et le plan $2x-y+2z=1$ : (a) trouve le pied de la perpendiculaire abaissée de $P$; (b) trouve la distance de $P$ au plan de deux façons; (c) trouve le symétrique (la réflexion) de $P$ par rapport au plan.`,
    S`(a) $(5+2t,\ -1-t,\ 4+2t)$ : $19+9t=1\Rightarrow t=-2$, pied $(1,1,0)$. (b) $|t||\vec n|=2\times3=6$; formule $\frac{|10+1+8-1|}{3}=6$. (c) $t=-4$ : $(-3,3,-4)$. [1.5, 1.5, 1.]`,
    vdoc(merge(V3, axes3(4.6), { polys: [patch3([1, 1, 0], [1, 2, 0], [0, 2, 1], 1.1)] }, { segs: [{ pts: [p3(5, -1, 4), p3(-3, 3, -4)].map((q) => q), color: "red", dash: true, w: 2.2 }] }, { points: [pt(5, -1, 4, "P"), pt(1, 1, 0, "pied", 8, 14), pt(-3, 3, -4, "P′", 8, 0)] }, { view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 } }))),
  W(6, "medium", 4, S`(a) Trouve la droite d'intersection de $x+y-z=1$ et de $2x-y+z=5$. (b) Trouve l'angle entre les plans. (c) Vérifie que ta droite est contenue dans les deux plans.`,
    S`(a) Vecteur directeur $[1,1,-1]\times[2,-1,1]=[0,-3,-3]$, ou $[0,1,1]$; l'addition des équations donne $x=2$; avec $z=0$, $y=-1$ : $\vec r=[2,-1,0]+t[0,1,1]$. (b) $\vec n_1\cdot\vec n_2=2-1-1=0$ : $90^\circ$. (c) $2+(-1+t)-t=1$ ✓ et $4-(-1+t)+t=5$ ✓. [2, 1, 1.]`,
    vdoc(merge(V3, axes3(4.6), { polys: [patch3([2, 0, 1], [1, -1, 0], [0, 1, 1], 1.2, "#dbeafe", "blue", 0.5), patch3([2, 0, 1], [1, 2, 0], [0, 1, 1], 1.2, "#dcfce7", "green", 0.5)] }, { segs: [line3([2, -1, 0], [0, 1, 1], -0.5, 2.6, "red", 3)] }))),
  W(6, "hard", 4, S`Considère $x+y+z=6$, $x-y+2z=5$ et $2x+3z=k$. (a) Montre que les vecteurs normaux sont coplanaires. (b) Pour quelle valeur de $k$ les plans ont-ils une droite commune? Trouve cette droite. (c) Décris la configuration pour toute autre valeur de $k$.`,
    S`(a) $[2,0,3]=[1,1,1]+[1,-1,2]$, donc $\vec n_1\cdot(\vec n_2\times\vec n_3)=0$. (b) L'addition des deux premières équations donne $2x+3z=11$, donc $k=11$; leur soustraction donne $2y-z=1$. Avec $z=2t$ : $\vec r=[5.5,0.5,0]+t[-3,1,2]$. (c) $k\ne11$ : système incompatible, sans plans parallèles deux à deux — un prisme triangulaire. [1, 2, 1.]`,
    vdoc(merge(V3, axes3(4.6), { polys: [patch3([1.5, 0, 0], [1, 0, 0], [0, 1.4, 0], 1.5, "#dbeafe", "blue", 0.45), patch3([1.5, 1, 1], [1, 0, 0], [0, 0.7, -0.7], 1.5, "#dcfce7", "green", 0.45), patch3([1.5, -1, 1], [1, 0, 0], [0, 0.7, 0.7], 1.5, "#fee2e2", "red", 0.45)] }, { texts: [{ x: 3.6, y: 4.6, t: "k ≠ 11 : un prisme", color: "gray" }] }))),
];

await runWritten(WRITTEN, "../mcv4u-ch8/written.mjs", import.meta.url);
