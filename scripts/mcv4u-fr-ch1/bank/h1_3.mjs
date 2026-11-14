// 1.3 Limites — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { planeDoc, P, H } from "./fig.mjs";

export const TOPIC = "1.3 Limites";
export const Q = [
  num(String.raw`Évalue $\lim_{x\to2}\frac{x^3-8}{x^2-4}$.`, 3, "(x² + 2x + 4)/(x + 2) → 12/4."),
  num(String.raw`Évalue $\lim_{x\to0}\frac{(2+x)^3-8}{x}$.`, 12, "12 + 6x + x²."),
  num(String.raw`Évalue $\lim_{x\to1}\frac{\sqrt{x+3}-2}{x-1}$.`, 0.25, "1/(√(x + 3) + 2).", null, 0.0001),
  num(String.raw`Évalue $\lim_{x\to\infty}\frac{\sqrt{x^2+1}}{2x}$.`, 0.5, "√(1 + 1/x²)/2.", null, 0.0001),
  num(String.raw`Pour la valeur de $k$ qui fait exister $\lim_{x\to3}\frac{x^2+kx-15}{x-3}$, trouve la limite.`, 8, "9 + 3k − 15 = 0 → k = 2; (x + 5) → 8."),
  mc("Pour le graphique représenté, quel énoncé est vrai en x = 2?", "la limite est 1, mais f(2) = 3", ["la limite est 3", "la limite n'existe pas", "la limite est 2"], "Les deux côtés s'approchent de 1.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 4 }, curves: [{ f: (x) => 0.25 * (x - 2) ** 2 + 1, a: -1, b: 1.95, color: "violet" }, { f: (x) => 0.25 * (x - 2) ** 2 + 1, a: 2.05, b: 5, color: "violet" }], points: [H(2, 1), P(2, 3, false)], step: { x: 1, y: 1 } })),
  num("Trouve le rapport des nombres de Fibonacci consécutifs 13 et 8 (13/8).", 1.625, "13 ÷ 8.", null, 0.0001),
  num("Trouve la limite des rapports de nombres de Fibonacci consécutifs (3 décimales).", 1.618, "(1 + √5)/2.", null, 0.001),
  num(String.raw`Évalue $\lim_{x\to0}\frac{\frac1{x+2}-\frac12}{x}$.`, -0.25, "−1/(2(x + 2)).", null, 0.0001),
  tf(String.raw`La valeur de $\lim_{x\to a}f(x)$ dépend de $f(a)$.`, false, "Seules les valeurs voisines comptent."),
  num(String.raw`Évalue $\lim_{x\to-3}\frac{x^2-9}{x^2+x-6}$.`, 1.2, "(x − 3)/(x − 2) → −6/−5.", null, 0.0001),
  num("Pour f(x) = x² quand x < 1 et f(x) = 2x + k quand x ≥ 1, trouve k pour que la limite en x = 1 existe.", -1, "1 = 2 + k.", planeDoc({ view: { xmin: -2, xmax: 3, ymin: -2, ymax: 6 }, curves: [{ f: (x) => x * x, a: -2, b: 1, color: "violet" }, { f: (x) => 2 * x - 1, a: 1, b: 3, color: "green" }], points: [P(1, 1)], step: { x: 1, y: 1 } })),
  num(String.raw`Évalue $\lim_{x\to\infty}\frac{2x^3-x}{x^3+5x^2}$.`, 2, "Divise par x³."),
  num(String.raw`Avec $t_1=0$ et $t_{n+1}=\sqrt{2+t_n}$, de quelle valeur les termes s'approchent-ils?`, 2, "L = √(2 + L) → L = 2.", planeDoc({ view: { xmin: 0, xmax: 9, ymin: -0.2, ymax: 2.4 }, points: [0, Math.SQRT2, Math.sqrt(2 + Math.SQRT2), 1.9616, 1.9904, 1.9976, 1.9994, 1.9998].map((y, i) => ({ x: i + 1, y, color: "blue" })), lines: [{ m: 0, b: 2, color: "red", dash: true }], step: { x: 1, y: 0.5 } })),
  mc(String.raw`Combien vaut $\lim_{x\to2}\frac{|x-2|}{x-2}$?`, "elle n'existe pas", ["1", "−1", "0"], "−1 par la gauche, 1 par la droite."),
  num(String.raw`Évalue $\lim_{x\to4}\frac{x-4}{\sqrt x-2}$.`, 4, "√x + 2."),
  num(String.raw`Évalue $\lim_{x\to0}\frac{(x-5)^2-25}{x}$.`, -10, "x − 10."),
  num("Loin vers la gauche, le graphique s'approche d'une droite horizontale. Quelle est la limite quand x → −∞?", -1, "Asymptote horizontale y = −1.", planeDoc({ view: { xmin: -10, xmax: 6, ymin: -6, ymax: 6 }, curves: [{ f: (x) => (3 - x) / (x + 1), a: -10, b: -1.5, color: "violet" }, { f: (x) => (3 - x) / (x + 1), a: -0.4, b: 6, color: "violet" }], vlines: [{ x: -1, color: "red", dash: true }], step: { x: 2, y: 1 } })),
  num(String.raw`Évalue $\lim_{x\to1}\frac{x^5-1}{x-1}$.`, 5, "1 + 1 + 1 + 1 + 1."),
  num(String.raw`Évalue $\lim_{x\to0}\frac{\sqrt{1+2x}-1}{x}$.`, 1, "2/(√(1 + 2x) + 1)."),
];
