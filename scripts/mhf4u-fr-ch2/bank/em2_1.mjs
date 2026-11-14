// 2.1 Division de polynômes et théorème du reste — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

export const E = [
  num(String.raw`Trouve le reste lorsque $x^3+x+1$ est divisé par $x-1$.`, 3, "P(1) = 1 + 1 + 1."),
  num(String.raw`Trouve le reste lorsque $x^2-4x+7$ est divisé par $x-2$.`, 3, "P(2) = 4 − 8 + 7.", graph((x) => x * x - 4 * x + 7, { xmin: -1, xmax: 5, ymin: -1, ymax: 10 }, [P(2, 3)])),
  num(String.raw`Trouve le reste lorsque $2x^3-x^2+5$ est divisé par $x+1$.`, 2, "P(−1) = −2 − 1 + 5."),
  mc(String.raw`Lorsqu'on divise par $x+4$ à l'aide de la division synthétique, quel nombre place-t-on dans la case?`, String.raw`$-4$`, [String.raw`$4$`, String.raw`$1$`, String.raw`$\tfrac14$`], "x + 4 = x − (−4)."),
  tf(String.raw`Le reste de la division de $P(x)$ par $x-b$ est égal à $P(b)$.`, true, "C'est le théorème du reste."),
  num("Un polynôme de degré 4 est divisé par un binôme linéaire. Quel est le degré du quotient?", 3, "Une unité de moins que 4."),
  mx(String.raw`Trouve le quotient de $(x^2+8x+15)\div(x+3)$.`, "x+5", "(x + 3)(x + 5)."),
  mx(String.raw`Trouve le quotient de $(x^2-x-20)\div(x-5)$.`, "x+4", "(x − 5)(x + 4)."),
  num(String.raw`Trouve le reste lorsque $x^3-27$ est divisé par $x-3$.`, 0, "27 − 27."),
  mc(String.raw`Quels coefficients amorcent la division synthétique de $x^3-2x+5$?`, "1, 0, −2, 5", ["1, −2, 5", "1, −2, 5, 0", "0, 1, −2, 5"], "Un 0 tient la place de x²."),
  num(String.raw`$P(x)=(x+2)(x^2-3)+7$. Trouve $P(-2)$.`, 7, "Le produit vaut 0 en x = −2."),
  tf(String.raw`Lorsqu'on divise par $x-3$, le reste pourrait être $x+1$.`, false, "Le reste doit être de degré inférieur à celui de x − 3 : une constante."),
  num(String.raw`Trouve le reste lorsque $4x^2+3x-2$ est divisé par $x+2$.`, 8, "16 − 6 − 2."),
  mc("Le graphique de y = P(x) passe par le point marqué. Quel est le reste lorsque P(x) est divisé par x − 3?", String.raw`$-2$`, [String.raw`$3$`, String.raw`$0$`, String.raw`$2$`], "Le reste est P(3).", graph((x) => x ** 3 - 4 * x * x + x + 4, { xmin: -1.5, xmax: 4, ymin: -6, ymax: 6 }, [P(3, -2)])),
  num(String.raw`Trouve le reste lorsque $x^4+1$ est divisé par $x-2$.`, 17, "16 + 1."),
  mc("Dans la division synthétique, après avoir multiplié par b, on :", "additionne", ["soustrait", "divise", "multiplie encore"], "C'est pourquoi on utilise b au lieu de −b."),
  num(String.raw`Trouve le reste lorsque $3x^2-5x+1$ est divisé par $x-1$.`, -1, "3 − 5 + 1."),
  mx(String.raw`Trouve le quotient de $(2x^2+7x+3)\div(x+3)$.`, "2*x+1", "(x + 3)(2x + 1)."),
  num(String.raw`Trouve le reste lorsque $x^3+2x^2+3x+4$ est divisé par $x+1$.`, 2, "−1 + 2 − 3 + 4."),
  fill(String.raw`Lorsque $P(x)$ est divisé par $x-b$, le reste est égal à $P($___$)$.`, ["b"], "Remplace x par b."),
];

export const M = [
  num(String.raw`Trouve le reste lorsque $2x^3+3x^2-4x+1$ est divisé par $2x-1$.`, 0, "P(½) = ¼ + ¾ − 2 + 1."),
  num(String.raw`Trouve le reste lorsque $x^4-3x^2+x$ est divisé par $x+2$.`, 2, "16 − 12 − 2."),
  num(String.raw`$x^3+kx-4$ laisse un reste de 6 lorsqu'il est divisé par $x-2$. Trouve $k$.`, 1, "8 + 2k − 4 = 6."),
  num(String.raw`$2x^3+kx^2-3$ laisse un reste de $-3$ lorsqu'il est divisé par $x+1$. Trouve $k$.`, 2, "−2 + k − 3 = −3."),
  mx(String.raw`Trouve le quotient de $(x^3-2x^2-5x+6)\div(x-1)$.`, "x^2-x-6", "Division synthétique : 1, −1, −6, reste 0."),
  mx(String.raw`Trouve le quotient de $(2x^3+x^2-8x+5)\div(x-1)$.`, "2*x^2+3*x-5", "Division synthétique : 2, 3, −5, reste 0."),
  num(String.raw`Trouve le reste lorsque $x^3-6x^2+11x-6$ est divisé par $x-4$.`, 6, "64 − 96 + 44 − 6."),
  mx(String.raw`Trouve le quotient de $(x^4-1)\div(x-1)$.`, "x^3+x^2+x+1", "Coefficients 1, 0, 0, 0, −1 → 1, 1, 1, 1, 0."),
  num(String.raw`Trouve le reste lorsque $5x^3-2x+1$ est divisé par $x+1$.`, -2, "−5 + 2 + 1."),
  mc(String.raw`Quel est l'énoncé de la division pour $(x^2+3x+5)\div(x+1)$?`, String.raw`$x^2+3x+5=(x+1)(x+2)+3$`, [String.raw`$x^2+3x+5=(x+1)(x+3)+2$`, String.raw`$x^2+3x+5=(x+1)(x+2)+5$`, String.raw`$x^2+3x+5=(x+1)(x+4)+1$`], "(x + 1)(x + 2) = x² + 3x + 2."),
  num(String.raw`La division de $P(x)$ par $x-2$ donne le quotient $x^2+1$ et le reste $-3$. Trouve $P(0)$.`, -5, "P = (x − 2)(x² + 1) − 3."),
  num(String.raw`Trouve le reste lorsque $6x^2-x-4$ est divisé par $3x+2$ (2 décimales).`, -0.6667, "P(−⅔) = 8/3 + 2/3 − 4.", null, 0.006),
  mc("Utilise le graphique de y = P(x) pour trouver le reste lorsque P(x) est divisé par x + 2.", String.raw`$-1$`, [String.raw`$1$`, String.raw`$-2$`, String.raw`$3$`], "Lis P(−2).", graph((x) => x ** 3 - 3 * x + 1, { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, [P(-2, -1)])),
  tf(String.raw`La division de $x^5-1$ par $x-1$ laisse un reste de 0.`, true, "1 − 1 = 0."),
  num(String.raw`Trouve le reste lorsque $x^{10}-x^5+3$ est divisé par $x+1$.`, 5, "1 + 1 + 3."),
  num(String.raw`Quel est le dernier nombre de la division synthétique de $2x^3-5x^2+x-2$ par $x-3$?`, 10, "C'est P(3) = 54 − 45 + 3 − 2."),
  mx(String.raw`Trouve le quotient de $(3x^3-x^2-6x+2)\div(3x-1)$.`, "x^2-2", "x²(3x − 1) − 2(3x − 1)."),
  num(String.raw`$x^3+x^2+kx+2$ laisse un reste de $-4$ lorsqu'il est divisé par $x+2$. Trouve $k$.`, 1, "−8 + 4 − 2k + 2 = −4."),
  num(String.raw`Trouve le reste lorsque $x^3$ est divisé par $x-0.5$.`, 0.125, "0.5³.", null, 0.0001),
  num("Le graphique de y = P(x) passe par le point marqué. Trouve le reste lorsque P(x) est divisé par x − 1.", 4, "P(1) = 4.", graph((x) => x ** 3 - x * x + x + 3, { xmin: -2, xmax: 2.5, ymin: -4, ymax: 10 }, [P(1, 4)])),
];
