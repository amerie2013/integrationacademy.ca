// 2.1 Division de polynômes et théorème du reste — 20 questions difficiles
import { mc, num, tf, mx } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "2.1 Division de polynômes et théorème du reste";
export const Q = [
  num(String.raw`$x^3+ax^2+2x+b$ laisse un reste de 3 lorsqu'il est divisé par $x-1$ et de $-15$ lorsqu'il est divisé par $x+2$. Trouve $a$.`, -1, "a + b = 0 et 4a + b = −3."),
  num(String.raw`$2x^3-3x^2+ax+b$ laisse un reste de 1 lorsqu'il est divisé par $x-1$ et de 5 lorsqu'il est divisé par $x-2$. Trouve $b$.`, 3, "a + b = 2 et 2a + b = 1 : a = −1, b = 3."),
  num(String.raw`$P(2)=5$ et $P(-2)=1$. Le reste de la division de $P(x)$ par $x^2-4$ est $mx+n$. Trouve $m$.`, 1, "2m + n = 5, −2m + n = 1."),
  num(String.raw`Trouve le reste lorsque $x^{99}+x^3+1$ est divisé par $x+1$.`, -1, "−1 − 1 + 1."),
  num(String.raw`$x^3+kx^2-x+6$ laisse le même reste lorsqu'il est divisé par $x-1$ et par $x+2$. Trouve $k$.`, 2, "P(1) = k + 6, P(−2) = 4k : k + 6 = 4k."),
  num(String.raw`Trouve le reste lorsque $8x^3-4x^2+2x-1$ est divisé par $2x-1$.`, 0, "P(½) = 1 − 1 + 1 − 1."),
  mx(String.raw`Trouve le quotient de $(6x^3+5x^2-12x+4)\div(2x-1)$.`, "3*x^2+4*x-4", "La division synthétique avec ½ donne 6, 8, −8 (reste 0); divise par 2."),
  num("Le graphique de y = P(x) passe par les deux points marqués. Le reste de la division de P(x) par (x + 1)(x − 2) est mx + n. Trouve n.", 3, "−m + n = 6 et 2m + n = −3 : m = −3, n = 3.", graph((x) => x ** 3 - 2 * x * x - 4 * x + 5, { xmin: -2, xmax: 3.5, ymin: -6, ymax: 10 }, [P(-1, 6), P(2, -3)])),
  num(String.raw`La division de $P(x)$ par $x-3$ donne le quotient $x^2+2x-1$ et le reste 4. Trouve $P(1)$.`, 0, "(1 − 3)(1 + 2 − 1) + 4 = −4 + 4."),
  tf(String.raw`Si $P(5)=0$, alors la division de $P(x)$ par $x-5$ laisse un reste de 0.`, true, "Théorème du reste avec P(5) = 0."),
  num(String.raw`Trouve la somme des coefficients du quotient de $(x^4+2x^3-x+3)\div(x-1)$.`, 9, "Division synthétique : 1, 3, 3, 2 (reste 5)."),
  mc("Le graphique de y = P(x) est illustré. Quel diviseur laisse un reste de 0?", String.raw`$x+2$`, [String.raw`$x-2$`, String.raw`$x+1$`, String.raw`$x-3$`], "P(−2) = 0 sur le graphique.", graph((x) => 0.5 * (x + 2) * (x - 1) ** 2, { xmin: -3, xmax: 3, ymin: -4, ymax: 6 })),
  num(String.raw`Trouve le reste lorsque $(x+1)^5$ est divisé par $x$.`, 1, "P(0) = 1."),
  num(String.raw`Trouve le reste lorsque $(2x+1)^3$ est divisé par $x-1$.`, 27, "3³."),
  num(String.raw`$3x^3+x^2+kx-4$ laisse le même reste lorsqu'il est divisé par $x-1$ et par $x+1$. Trouve $k$.`, -3, "P(1) = k, P(−1) = −6 − k."),
  num(String.raw`Trouve le reste lorsque $(x^2+x+1)^2$ est divisé par $x+1$.`, 1, "(1 − 1 + 1)² = 1."),
  mc("Un polynôme de degré 5 est divisé par un polynôme de degré 2. Quels sont les degrés du quotient et du reste?", "quotient de degré 3, reste de degré au plus 1", ["quotient de degré 3, reste de degré 2", "quotient de degré 2, reste de degré au plus 1", "quotient de degré 3, reste toujours 0"], "Les degrés se soustraient; le reste est de degré inférieur à celui du diviseur."),
  num(String.raw`La division de $P(x)$ par $2x-1$ laisse le reste illustré sur le graphique. Quel est-il?`, 2, "Le reste est P(½).", graph((x) => 4 * x ** 3 - 2 * x + 2.5, { xmin: -1.5, xmax: 1.5, ymin: -4, ymax: 6 }, [P(0.5, 2)], { step: { x: 0.5, y: 1 } })),
  num(String.raw`Pour quelle valeur de $a\ne0$ le polynôme $x^3-2x^2+3$ laisse-t-il un reste de 3 lorsqu'il est divisé par $x-a$?`, 2, "a³ − 2a² = 0 → a = 2.", planeDoc({ view: { xmin: -1.5, xmax: 3, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x ** 3 - 2 * x * x + 3, color: "violet" }, { f: () => 3, color: "green" }], step: { x: 0.5, y: 1 } })),
  mc(String.raw`$P(x)$ laisse un reste de 4 lorsqu'il est divisé par $x-1$. Quel énoncé est nécessairement vrai?`, String.raw`$P(x)-4$ est divisible par $x-1$`, [String.raw`$P(4)=1$`, String.raw`$P(x)+4$ est divisible par $x-1$`, String.raw`$P(0)=4$`], "P(1) − 4 = 0."),
];
