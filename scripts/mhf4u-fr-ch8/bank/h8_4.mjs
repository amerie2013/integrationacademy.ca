// 8.4 Inéquations de fonctions combinées — 20 questions difficiles (miroir de ../../mhf4u-ch8/bank/h8_4.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const TOPIC = "8.4 Inéquations de fonctions combinées";
export const Q = [
  mc(S`Résous $\dfrac{2x-1}{x+3}\ge1$.`, S`$x<-3$ ou $x\ge4$`, [S`$-3<x\le4$`, S`$x\ge4$`, S`$x\le-3$ ou $x\ge4$`], "(x − 4)/(x + 3) ≥ 0; −3 est exclu."),
  mc(S`Résous $\dfrac{x^2-4}{x}\le0$.`, S`$x\le-2$ ou $0<x\le2$`, [S`$-2\le x<0$ ou $x\ge2$`, S`$-2\le x\le2$`, S`$x\le2$`], "Tableau de signes avec −2, 0 et 2."),
  mc(S`Résous $\dfrac{x+1}{x-2}\le0$.`, S`$-1\le x<2$`, [S`$-1\le x\le2$`, S`$x\le-1$ ou $x>2$`, S`$x<2$`], "Le zéro −1 est inclus; x = 2 est exclu."),
  mc(S`Résous $2\sin x\ge\sqrt3$ pour $0\le x\le2\pi$.`, S`$\frac\pi3\le x\le\frac{2\pi}3$`, [S`$\frac\pi6\le x\le\frac{5\pi}6$`, S`$\frac{\pi}3\le x\le\frac{5\pi}3$`, S`$0\le x\le\frac\pi3$`], "sin x ≥ √3/2."),
  mc(S`Résous $\cos2x>\cos x$ pour $0\le x\le\pi$.`, S`$\frac{2\pi}3<x\le\pi$`, [S`$0<x<\frac{2\pi}3$`, S`$0\le x\le\pi$`, S`$\frac\pi3<x<\frac{2\pi}3$`], "2c² − c − 1 > 0 ⇒ (2c + 1)(c − 1) > 0 ⇒ c < −1/2."),
  num(S`Combien d'entiers vérifient $x^4<9x^2$?`, 4, "x²(x² − 9) < 0, x ≠ 0 : ±1, ±2."),
  num(S`Combien d'entiers positifs vérifient $\dfrac{(x-2)(x+3)}{x-5}\le0$?`, 3, "x ≤ −3 ou 2 ≤ x < 5 : les entiers positifs 2, 3, 4."),
  num(S`Détermine l'extrémité gauche de la solution de $x^2-6x+5<0$.`, 1, "(x − 1)(x − 5) < 0."),
  num(S`Pour $x\ge0$, $3^x<4x+1$ est vraie pour $0<x<a$. Détermine $a$ (point de croisement exact).`, 2, "3² = 9 = 4(2) + 1."),
  num(S`Quand $1000(1.06)^t$ dépasse-t-elle $1500+40t$? (au dixième près)`, 11.6, "Table : t = 11 : 1898 < 1940; t = 12 : 2012 > 1980; en raffinant, t ≈ 11.6.", null, 0.1),
  num(S`Pour $x>0$, résous $x+\frac{16}x\le10$ et entre l'extrémité droite.`, 8, "x² − 10x + 16 ≤ 0 ⇒ 2 ≤ x ≤ 8."),
  ms(S`Choisis chaque intervalle compris dans la solution de $x^3-x^2-6x>0$.`, [S`$(-2,0)$`, S`$(3,5)$`, S`$(0,3)$`, S`$(-5,-2)$`], [0, 1], "x(x − 3)(x + 2) > 0."),
  tf(S`Si $f(x)>g(x)$ pour tout $x$, alors $f(x)-g(x)$ n'a aucun zéro.`, true, "La différence est toujours positive."),
  tf(S`$2^x\ge x+1$ pour tout $x$ réel.`, false, "À x = 0.5 : 1.414 < 1.5."),
  mc(S`Pourquoi $1.01^x$ doit-elle finir par dépasser $100x$?`, "la croissance exponentielle finit par dépasser toute croissance linéaire", ["seulement parce que 1.01 > 1", "parce que 100x est décroissante", "elle ne la dépasse jamais"], "Le rapport 1.01ˣ/x croît sans limite."),
  mc("Le graphique montre y = (2x − 1)/(x + 3) et y = 1. Où la courbe est-elle sur la droite ou au-dessus?", "x < −3 ou x ≥ 4", ["−3 < x ≤ 4", "x ≥ 4", "x > −3"], "Compare avec le tableau de signes.", planeDoc({ view: { xmin: -10, xmax: 8, ymin: -6, ymax: 10 }, curves: [{ f: (x) => (2 * x - 1) / (x + 3), b: -3.1, color: "violet" }, { f: (x) => (2 * x - 1) / (x + 3), a: -2.9, color: "violet" }], lines: [{ m: 0, b: 1, color: "blue", dash: true }], step: { x: 1, y: 1 } })),
  mc("Le graphique montre y = 3ˣ et y = 4x + 1. Où a-t-on 3ˣ < 4x + 1?", "0 < x < 2", ["x > 2", "x < 0", "−1 < x < 2"], "Points de croisement à 0 et à 2.", planeDoc({ view: { xmin: -1.5, xmax: 3, ymin: -2, ymax: 15 }, curves: [{ f: (x) => 3 ** x, color: "violet" }], lines: [{ m: 4, b: 1, color: "blue" }], step: { x: 0.5, y: 1 } })),
  mc("Le graphique montre y = x³ − x² − 6x. Où est-elle positive?", "−2 < x < 0 ou x > 3", ["x < −2 ou 0 < x < 3", "x > 3", "−2 < x < 3"], "Lis les parties au-dessus de l'axe des x.", planeDoc({ view: { xmin: -3.5, xmax: 4.5, ymin: -15, ymax: 15 }, curves: [{ f: (x) => x ** 3 - x * x - 6 * x, color: "violet" }], step: { x: 1, y: 2 } })),
  mc("Le graphique montre deux plans d'épargne. Quand le plan exponentiel (en violet) rapporte-t-il plus?", "après environ 11.6 ans", ["toujours", "jamais", "après environ 5 ans"], "Lis où la courbe passe au-dessus de la droite.", planeDoc({ view: { xmin: 0, xmax: 25, ymin: 800, ymax: 4500 }, curves: [{ f: (t) => 1000 * 1.06 ** t, a: 0, color: "violet" }], lines: [{ m: 40, b: 1500, color: "blue" }], step: { x: 5, y: 500 } })),
  num(S`Combien de solutions positives l'équation $\sin x=\frac x4$ a-t-elle?`, 1, "Un seul point de croisement positif, près de x ≈ 2.47 (la droite passe au-dessus de 1 après x = 4)."),
];
