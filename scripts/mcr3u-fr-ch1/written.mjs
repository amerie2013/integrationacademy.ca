// MCR3U-FR chapitre 1 — questions à réponse construite (long_answer) pour les évaluations imprimées (partie C).
// Miroir de ../mcr3u-ch1/written.mjs (mêmes figures, étiquettes en français). Notation française :
// y = af(k(x − c)) + d (c horizontal, d vertical) — lettres échangées par rapport à l'anglais, aucun nombre ne change.
//   node scripts/mcr3u-fr-ch1/written.mjs           -> essai à blanc
//   node scripts/mcr3u-fr-ch1/written.mjs --apply   -> téléverse les figures et insère les lignes absentes
import { planeDoc, P, sideways, mapDoc } from "./bank/fig.mjs";
import { runWritten } from "../mcr3u-fr/written-run.mjs";
import { TITLE as T1 } from "./l1_1.mjs";
import { TITLE as T2 } from "./l1_2.mjs";
import { TITLE as T3 } from "./l1_3.mjs";
import { TITLE as T4 } from "./l1_4.mjs";
import { TITLE as T5 } from "./l1_5.mjs";
import { TITLE as T6 } from "./l1_6.mjs";
import { TITLE as T7 } from "./l1_7.mjs";
import { TITLE as T8 } from "./l1_8.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5, 6: T6, 7: T7, 8: T8 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const WRITTEN = [
  W(1, "medium", 4, S`Le diagramme sagittal et le graphique représentent chacun une relation. (a) Chacune est-elle une fonction? Justifie. (b) Donne le domaine et l'image de la relation du diagramme sagittal. (c) La relation représentée par le graphique est-elle un à un? Explique.`,
    S`Diagramme : entrées $-3,1,4$; l'entrée $1$ correspond à $2$ et à $6$, donc ce n'est pas une fonction; $D=\{-3,1,4\}$, $I=\{0,2,6\}$. Graphique ($x=(y-2)^2-3$, une parabole couchée) : ce n'est pas une fonction — p. ex. $x=1$ la coupe en $y=0$ et en $y=4$; la notion d'un à un ne s'applique pas, puisque ce n'est pas une fonction. [2, 1, 1.]`,
    mapDoc([[-3, 0], [1, 2], [1, 6], [4, 6]])),
  W(1, "hard", 4, S`Le graphique représente la relation $x=(y-2)^2-3$. (a) Utilise le test de la droite verticale pour expliquer pourquoi ce n'est pas une fonction. (b) Pour quelles valeurs de $k$ la droite $x=k$ la coupe-t-elle exactement une fois, deux fois, jamais? (c) Écris deux fonctions dont les graphiques réunis forment la relation.`,
    S`(a) $x=1$ : $(y-2)^2=4$, $y=0$ ou $4$. (b) sommet $(-3,2)$ : une fois pour $k=-3$, deux fois pour $k>-3$, jamais pour $k<-3$. (c) $y=2+\sqrt{x+3}$ et $y=2-\sqrt{x+3}$. [1, 2, 1.]`,
    planeDoc({ view: V8, curves: sideways(-3, 2), points: [P(-3, 2)] })),
  W(2, "medium", 4, S`Le revenu d'un théâtre est $R(p)=-20p^2+800p$ dollars lorsque les billets coûtent $p$ dollars (graphique ci-contre). (a) Trouve et interprète $R(15)$. (b) Résous $R(p)=6000$ et interprète. (c) Simplifie $R(p+5)-R(p)$.`,
    S`(a) $R(15)=-4500+12000=7500$ : 7500 dollars à 15 dollars le billet. (b) $-20p^2+800p-6000=0\Rightarrow p^2-40p+300=0\Rightarrow p=10$ ou $30$. (c) $-20(2\cdot5p+25)+800\cdot5=-200p-500+4000=-200p+3500$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: 0, xmax: 42, ymin: 0, ymax: 9000 }, curves: [{ f: (p) => -20 * p * p + 800 * p, a: 0, b: 40, color: "violet" }], step: { x: 5, y: 1000 }, xlabel: "prix p", ylabel: "R" })),
  W(2, "hard", 4, S`$f(x)=ax^2+bx+c$ passe par les trois points illustrés. (a) Trouve $a$, $b$, $c$. (b) Trouve $f(f(1))$. (c) Résous $f(x)=f(4)$.`,
    S`Points $(0,3)$, $(1,0)$, $(3,0)$ : $c=3$, les zéros 1 et 3 donnent $f(x)=(x-1)(x-3)=x^2-4x+3$. (b) $f(1)=0$, $f(0)=3$. (c) $f(4)=3$ : $x^2-4x=0\Rightarrow x=0$ ou $4$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x + 3, color: "violet" }], points: [P(0, 3), P(1, 0), P(3, 0)] })),
  W(3, "medium", 4, S`Le graphique montre quatre fonctions de base. (a) Reconnais chacune d'après sa couleur. (b) Donne le domaine et l'image de la rouge et de la verte. (c) Résous $\sqrt x=\frac1x$ et marque le point.`,
    S`(a) bleue $x^2$, verte $\sqrt x$, rouge $\frac1x$, ambre $|x|$. (b) rouge : $x\ne0$, $y\ne0$; verte : $x\ge0$, $y\ge0$. (c) $x^{3/2}=1$, $x=1$ : $(1,1)$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x * x, color: "blue" }, { f: (x) => Math.sqrt(x), a: 0, color: "green" }, { f: (x) => 1 / x, color: "red" }, { f: (x) => Math.abs(x), color: "amber" }] })),
  W(4, "medium", 4, S`La hauteur d'une plongeuse au-dessus de l'eau est $h(t)=-5t^2+10t+15$ m. (a) Quand entre-t-elle dans l'eau? (b) Trouve la hauteur maximale. (c) Donne un domaine et une image qui ont du sens, en expliquant chaque restriction.`,
    S`(a) $-5(t^2-2t-3)=0\Rightarrow(t-3)(t+1)=0$ : $t=3$ s. (b) $h(1)=20$ m. (c) $0\le t\le3$ (du saut jusqu'à l'eau); $0\le h\le20$. [1, 1, 2.]`,
    planeDoc({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 22 }, curves: [{ f: (t) => -5 * t * t + 10 * t + 15, a: 0, b: 3, color: "violet" }], points: [P(0, 15), P(1, 20), P(3, 0)], step: { x: 0.5, y: 2 }, xlabel: "t (s)", ylabel: "h (m)" })),
  W(4, "hard", 4, S`(a) Trouve le domaine de $f(x)=\dfrac{\sqrt{9-x}}{x+3}$. (b) Trouve l'image de $g(x)=x^2-2x-3$ sur le domaine $-2\le x\le4$ (graphique ci-contre). (c) Explique pourquoi l'image de $\frac{12}{x^2+3}$ est $0<y\le4$.`,
    S`(a) $x\le9$, $x\ne-3$. (b) sommet $(1,-4)$; $g(-2)=5$, $g(4)=5$ : $-4\le y\le5$. (c) $x^2+3\ge3$, donc $0<\frac{12}{x^2+3}\le4$, la valeur 4 étant atteinte en $x=0$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 2 * x - 3, a: -2, b: 4, color: "violet" }], points: [P(-2, 5), P(1, -4), P(4, 5)] })),
  W(5, "medium", 4, S`$f(x)=\frac{3x-4}{2}$. (a) Trouve $f^{-1}(x)$ algébriquement. (b) Trace $f$ et $f^{-1}$ sur le quadrillage et explique le lien avec $y=x$. (c) Vérifie que $f(f^{-1}(6))=6$.`,
    S`(a) $x=\frac{3y-4}{2}\Rightarrow f^{-1}(x)=\frac{2x+4}{3}$. (b) elles sont symétriques par rapport à $y=x$; elles se rencontrent en $(4,4)$. (c) $f^{-1}(6)=\frac{16}{3}$, $f(\frac{16}{3})=\frac{16-4}{2}=6$. [1, 2, 1.]`,
    planeDoc({ view: V8, lines: [{ m: 1, b: 0, color: "gray", dash: true }] })),
  W(5, "hard", 5, S`$f(x)=-(x-1)^2+4$ (graphique ci-contre). (a) Explique pourquoi $f^{-1}$ n'est pas une fonction. (b) Restreins le domaine de $f$ à $x\ge1$ et trouve $f^{-1}$. (c) Donne le domaine et l'image de $f^{-1}$. (d) Trouve où la fonction $f$ restreinte rencontre $f^{-1}$.`,
    S`(a) $f(0)=f(2)=3$ : elle n'est pas un à un. (b) $f^{-1}(x)=1+\sqrt{4-x}$. (c) $x\le4$; $y\ge1$. (d) sur $y=x$ : $-(x-1)^2+4=x\Rightarrow x^2-x-3=0\Rightarrow x=\frac{1+\sqrt{13}}2\approx2.30$. [1, 2, 1, 1.]`,
    planeDoc({ view: { xmin: -3, xmax: 5, ymin: -3, ymax: 5 }, curves: [{ f: (x) => -((x - 1) ** 2) + 4, color: "blue" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], points: [P(1, 4), P(0, 3, false), P(2, 3, false)] })),
  W(6, "medium", 4, S`Le graphique rouge est une transformation de $y=\sqrt x$ (en gris) de la forme $y=a\sqrt{k(x-c)}+d$ avec $|k|=1$. (a) Trouve $a$, $k$, $c$ et $d$ et écris l'équation. (b) Décris les transformations dans l'ordre et écris la correspondance $(x,y)\to\left(\frac xk+c,\ ay+d\right)$. (c) Donne son domaine, son image et la valeur exacte de son ordonnée à l'origine.`,
    S`Point de départ $(3,1)$ : $c=3$, $d=1$; la courbe s'étend vers la gauche, donc $k=-1$; elle passe par $(2,3)$ : $3=a\sqrt1+1\Rightarrow a=2$. (a) $y=2\sqrt{-(x-3)}+1$. (b) étirement vertical de facteur 2, réflexion par rapport à l'axe des y, 3 vers la droite, 1 vers le haut; $(x,y)\to(-x+3,\ 2y+1)$. (c) $D : x\le3$, $I : y\ge1$; $y(0)=2\sqrt3+1\approx4.46$. [1, 1, 2.]`,
    planeDoc({ view: V8, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => 2 * Math.sqrt(3 - x) + 1, b: 3, color: "red" }], points: [P(3, 1), P(2, 3), P(-1, 5)] })),
  W(7, "hard", 4, S`Le graphique de $y=f(x)$ est illustré (sommet $(2,-4)$, zéros $0$ et $4$). (a) Esquisse $y=f(-\tfrac12x)$ et donne son sommet et ses zéros. (b) Explique pourquoi l'image ne change pas. (c) Trouve $k$ pour que $y=f(kx)$ ait pour zéros $0$ et $-1$.`,
    S`(a) $(x,y)\to(-2x,y)$ : sommet $(-4,-4)$, zéros $0$ et $-8$. (b) seules les abscisses bougent. (c) $\frac4k=-1\Rightarrow k=-4$. [2, 1, 1.]`,
    planeDoc({ view: { xmin: -9, xmax: 6, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x, color: "violet" }], points: [P(2, -4), P(0, 0, false), P(4, 0)] })),
  W(8, "medium", 4, S`Trace $y=-2\sqrt{\tfrac12(x+4)}+3$ sur le quadrillage. (a) Repère $a,k,c,d$. (b) Transforme $(0,0)$, $(1,1)$, $(4,2)$, $(9,3)$. (c) Donne le domaine et l'image.`,
    S`(a) $a=-2$, $k=\tfrac12$, $c=-4$, $d=3$. (b) $(x,y)\to(2x-4,\ -2y+3)$ : $(-4,3)$, $(-2,1)$, $(4,-1)$, $(14,-3)$. (c) $x\ge-4$; $y\le3$. [1, 2, 1.]`,
    planeDoc({ view: { xmin: -6, xmax: 16, ymin: -6, ymax: 6 }, step: { x: 2, y: 1 } })),
  W(8, "hard", 5, S`$f$ a pour domaine $-3\le x\le5$ et pour image $-2\le y\le4$; son graphique passe par $(1,4)$. (a) Trouve le domaine et l'image de $g(x)=-\tfrac12f(2x-6)+1$. (b) Que devient le point $(1,4)$? (c) Conçois une transformation $y=af(k(x-c))+d$ dont l'image a pour domaine $0\le x\le16$ et pour image $0\le y\le18$, avec $a>0$, $k>0$.`,
    S`(a) $f(2(x-3))$ : $x\to\frac x2+3$ : $1.5\le x\le5.5$; $y\to-\tfrac12y+1$ : $-1\le y\le2$. (b) $(3.5,-1)$. (c) il faut $\frac{-3}{k}+c=0$, $\frac5k+c=16$ : $k=\tfrac12$, $c=6$; $-2a+d=0$, $4a+d=18$ : $a=3$, $d=6$ : $y=3f(\tfrac12(x-6))+6$. [2, 1, 2.]`,
    planeDoc({ view: { xmin: -4, xmax: 6, ymin: -3, ymax: 5 }, segs: [{ pts: [[-3, 0], [1, 4], [3, -2], [5, 1]] }], points: [P(-3, 0), P(1, 4), P(3, -2), P(5, 1)] })),
];

await runWritten(WRITTEN, "../mcr3u-ch1/written.mjs", import.meta.url);
