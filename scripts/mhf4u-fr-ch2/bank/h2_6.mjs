import { FIG } from "../../mhf4u-bank-figures/figs.mjs";
// 2.6 Résolution algébrique d'inéquations polynomiales factorisables — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "2.6 Résolution algébrique d'inéquations polynomiales factorisables";
export const Q = [
  mc(String.raw`Résous $x^3-x^2-9x+9\ge0$.`, String.raw`$[-3,1]\cup[3,\infty)$`, [String.raw`$(-\infty,-3]\cup[1,3]$`, String.raw`$[3,\infty)$`, String.raw`$[-3,3]$`], "x²(x − 1) − 9(x − 1) = (x − 1)(x − 3)(x + 3)."),
  num(String.raw`Combien d'entiers vérifient $x^4-3x^2-4\lt0$?`, 3, "(x² − 4)(x² + 1) < 0 : −2 < x < 2."),
  mc(String.raw`Résous $2x^3+5x^2-x-6>0$.`, String.raw`$\left(-2,-\tfrac32\right)\cup(1,\infty)$`, [String.raw`$\left(-\infty,-2\right)\cup\left(-\tfrac32,1\right)$`, String.raw`$(1,\infty)$`, String.raw`$\left(-\tfrac32,1\right)$`], "P(1) = 0; quotient (2x + 3)(x + 2)."),
  num("Pour la fonction f(x) = −(x + 2)²(x − 3) illustrée, combien d'entiers de [−5, 5] vérifient f(x) ≥ 0?", 9, "f ≥ 0 exactement lorsque x ≤ 3 : de −5 à 3.", graph((x) => -((x + 2) ** 2) * (x - 3), { xmin: -5, xmax: 4.5, ymin: -20, ymax: 40 }, [P(-2, 0), P(3, 0)], { step: { x: 1, y: 10 } })),
  mc(String.raw`Résous $x^4\ge9x^2$.`, String.raw`$(-\infty,-3]\cup\{0\}\cup[3,\infty)$`, [String.raw`$(-\infty,-3]\cup[3,\infty)$`, String.raw`$[-3,3]$`, String.raw`$[3,\infty)$`], "x²(x − 3)(x + 3) ≥ 0, et x = 0 l'annule."),
  num(String.raw`Pour quelle valeur de $k$ l'inéquation $(x-k)(x-1)(x+2)\lt0$ a-t-elle pour solution $x\lt-2$ ou $1\lt x\lt5$?`, 5, "La troisième valeur critique est k."),
  mc("La parabole illustrée est y = (x + 1)(x − 2). Quelle inéquation a pour solution [−1, 2]?", String.raw`$(x+1)(x-2)\le0$`, [String.raw`$(x+1)(x-2)\ge0$`, String.raw`$(x+1)(x-2)\lt0$`, String.raw`$(x-1)(x+2)\le0$`], "Sur l'axe ou en dessous entre les zéros.", graph((x) => (x + 1) * (x - 2), { xmin: -2.5, xmax: 3.5, ymin: -3, ymax: 5 })),
  tf(String.raw`La solution de $(x-a)^2(x-b)\ge0$ inclut toujours $x=a$.`, true, "Le produit vaut 0 en x = a."),
  num(String.raw`Combien d'entiers vérifient $x(x-2)(x-4)(x-6)\lt0$?`, 2, "(0, 2) ∪ (4, 6) : 1 et 5."),
  mc(String.raw`Résous $x^3+8\le0$.`, String.raw`$x\le-2$`, [String.raw`$x\ge-2$`, String.raw`$x\le2$`, String.raw`$-2\le x\le2$`], "(x + 2)(x² − 2x + 4), le trinôme étant toujours positif."),
  num(String.raw`Une boîte a pour dimensions $x$, $x+1$, $x+2$. Son volume dépasse $6x$ exactement lorsque $x$ est supérieur à quelle valeur?`, 1, "x(x + 4)(x − 1) > 0 avec x > 0.", FIG.box012),
  num("Pour P(x) = x³ − 7x − 6 illustrée, combien d'entiers de [−3, 3] vérifient P(x) ≥ 0?", 3, "(x + 1)(x + 2)(x − 3) ≥ 0 : [−2, −1] ∪ [3, ∞) : −2, −1, 3.", graph((x) => x ** 3 - 7 * x - 6, { xmin: -3.5, xmax: 4, ymin: -14, ymax: 10 }, [], { step: { x: 1, y: 2 } })),
  mc(String.raw`Résous $(x^2-1)(x-2)^2\le0$.`, String.raw`$[-1,1]\cup\{2\}$`, [String.raw`$[-1,1]$`, String.raw`$[-1,2]$`, String.raw`$(-\infty,-1]\cup[1,2]$`], "Le facteur au carré ajoute le point isolé 2."),
  num(String.raw`Quel est le plus petit entier qui vérifie $x^3+x^2-12x>0$?`, -3, "x(x + 4)(x − 3) > 0 : −4 < x < 0 ou x > 3."),
  tf(String.raw`$x^4-4x^3+4x^2\ge0$ pour tout réel $x$.`, true, "x²(x − 2)² ≥ 0."),
  num(String.raw`Trouve la longueur de l'intervalle borné dans la solution de $(x+3)(x-1)(x-5)\ge0$.`, 4, "[−3, 1] ∪ [5, ∞)."),
  mc("Utilise les graphiques de y = x³ et de y = x² + 6x pour résoudre x³ ≥ x² + 6x.", String.raw`$[-2,0]\cup[3,\infty)$`, [String.raw`$(-\infty,-2]\cup[0,3]$`, String.raw`$[3,\infty)$`, String.raw`$[-2,3]$`], "x(x − 3)(x + 2) ≥ 0.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -12, ymax: 40 }, curves: [{ f: (x) => x ** 3, color: "violet" }, { f: (x) => x * x + 6 * x, color: "green" }], step: { x: 1, y: 5 } })),
  num(String.raw`Combien d'entiers vérifient $(x-3)^2(x+1)(x-5)\le0$?`, 7, "[−1, 5]."),
  mc(String.raw`Résous $-x^3+x^2+2x\lt0$.`, String.raw`$(-1,0)\cup(2,\infty)$`, [String.raw`$(-\infty,-1)\cup(0,2)$`, String.raw`$(2,\infty)$`, String.raw`$(-1,2)$`], "Multiplie par −1 et inverse le sens : x(x − 2)(x + 1) > 0."),
  num(String.raw`Pour $x\ge0$, combien d'entiers vérifient $x^3\le9x$?`, 4, "x(x − 3)(x + 3) ≤ 0 avec x ≥ 0 : [0, 3]."),
];
