// 1.3 Limites — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc, P, H } from "./fig.mjs";

export const E = [
  num(String.raw`Évalue $\lim_{x\to3}(x+4)$.`, 7, "Substitue."),
  num(String.raw`Évalue $\lim_{x\to2}x^2$.`, 4, "Substitue."),
  num(String.raw`Évalue $\lim_{x\to1}\frac{x^2-1}{x-1}$.`, 2, "x + 1 → 2."),
  tf("Une limite peut exister en un point où la fonction n'est pas définie.", true, "p. ex. un trou."),
  mc(String.raw`Combien vaut $\lim_{x\to0}\frac1x$?`, "elle n'existe pas", ["0", "1", "∞ (un nombre)"], "−∞ par la gauche, +∞ par la droite."),
  num(String.raw`Évalue $\lim_{x\to\infty}\frac3x$.`, 0, "Un dénominateur énorme."),
  num(String.raw`Évalue $\lim_{x\to-1}(x^3+2)$.`, 1, "−1 + 2."),
  mc("Pour la fonction représentée, quelle est la limite quand x → 2 par la gauche?", "1", ["3", "2", "elle n'existe pas"], "Suis la partie de gauche.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 5 }, curves: [{ f: () => 1, a: -1, b: 1.97, color: "violet" }, { f: () => 3, a: 2, b: 4, color: "violet" }], points: [H(2, 1), P(2, 3, false)], step: { x: 1, y: 1 } })),
  tf("Si les limites à gauche et à droite sont différentes, la limite n'existe pas.", true, "Les deux doivent concorder."),
  num(String.raw`Évalue $\lim_{x\to4}\sqrt x$.`, 2, "√4."),
  num(String.raw`Évalue $\lim_{x\to\infty}\frac{2x+3}{x}$.`, 2, "2 + 3/x → 2."),
  mc("La substitution directe donne 0/0. Que devrais-tu faire?", "simplifier (factoriser ou rationaliser) et réessayer", ["la limite est 0", "la limite est 1", "la limite n'existe pas"], "0/0 est une forme indéterminée."),
  num(String.raw`Évalue $\lim_{x\to0}\frac{x^2+5x}{x}$.`, 5, "x + 5 → 5."),
  num(String.raw`Évalue $\lim_{x\to6}\frac{x^2-36}{x-6}$.`, 12, "x + 6."),
  mc(String.raw`Combien vaut $\lim_{x\to0^+}\frac1x$?`, String.raw`$+\infty$ (n'existe pas)`, [String.raw`$-\infty$`, "0", "1"], "De petits dénominateurs positifs."),
  num(String.raw`Évalue $\lim_{x\to\infty}\frac{5x^2}{x^2+1}$.`, 5, "Divise par x²."),
  tf("∞ est un nombre réel.", false, "Il décrit une croissance sans borne."),
  num("Le graphique a un trou en x = 1. Quelle est la limite quand x → 1?", 3, "La hauteur du trou.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x + 2, a: -2, b: 0.96, color: "violet" }, { f: (x) => x + 2, a: 1.04, b: 4, color: "violet" }], points: [H(1, 3)], step: { x: 1, y: 1 } })),
  num(String.raw`Quelle est la limite de la suite $t_n=\frac1n$?`, 0, "1/n → 0."),
  fill(String.raw`La limite à gauche s'écrit $x\to a^{\,?}$; le signe manquant est ___.`, ["-", "−", "moins", "minus"], "a⁻ signifie par valeurs inférieures."),
];

export const M = [
  num(String.raw`Évalue $\lim_{x\to3}\frac{x^2-x-6}{x-3}$.`, 5, "(x − 3)(x + 2)."),
  num(String.raw`Évalue $\lim_{x\to-2}\frac{x^2+5x+6}{x+2}$.`, 1, "(x + 2)(x + 3)."),
  num(String.raw`Évalue $\lim_{x\to0}\frac{\sqrt{x+16}-4}{x}$.`, 0.125, "1/(√(x + 16) + 4) → ⅛.", null, 0.0001),
  num(String.raw`Évalue $\lim_{x\to\infty}\frac{6x+1}{3x-2}$.`, 2, "6/3."),
  num(String.raw`Évalue $\lim_{x\to1}\frac{x^4-1}{x-1}$.`, 4, "x³ + x² + x + 1."),
  mc(String.raw`Décris $\lim_{x\to2}\frac1{(x-2)^2}$.`, String.raw`$+\infty$ — la limite n'existe pas`, ["0", String.raw`$\frac14$`, String.raw`$-\infty$`], "Les deux côtés croissent sans borne."),
  num(String.raw`Évalue $\lim_{h\to0}\frac{(1+h)^2-1}{h}$.`, 2, "2 + h."),
  num(String.raw`Estime $\lim_{x\to0}\frac{2^x-1}{x}$ (3 décimales).`, 0.693, "Les valeurs de la table s'approchent de ln 2.", null, 0.002),
  mc("Pour la fonction représentée, quelle est la limite quand x → 1?", "2", ["4", "elle n'existe pas", "1"], "Les deux côtés s'approchent de 2; f(1) = 4 ne compte pas.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 5 }, curves: [{ f: (x) => x + 1, a: -2, b: 0.96, color: "violet" }, { f: (x) => x + 1, a: 1.04, b: 4, color: "violet" }], points: [H(1, 2), P(1, 4, false)], step: { x: 1, y: 1 } })),
  num(String.raw`Évalue $\lim_{x\to-\infty}\frac{3x+1}{x-2}$.`, 3, "3/1."),
  num(String.raw`Évalue $\lim_{x\to5}\frac{x-5}{x^2-25}$.`, 0.1, "1/(x + 5).", null, 0.0001),
  tf(String.raw`$\lim_{x\to0}|x|=0$.`, true, "Les deux côtés → 0."),
  num(String.raw`Évalue $\lim_{x\to3}\frac{\frac1x-\frac13}{x-3}$ (4 décimales).`, -0.1111, "−1/(3x) → −1/9.", null, 0.0005),
  num(String.raw`Trouve la limite de la suite $t_n=\frac{2n+1}{n+3}$.`, 2, "Divise par n."),
  mc(String.raw`Combien vaut $\lim_{x\to4^-}\frac1{x-4}$?`, String.raw`$-\infty$`, [String.raw`$+\infty$`, "0", String.raw`$\frac14$`], "De petits dénominateurs négatifs."),
  num(String.raw`Évalue $\lim_{x\to1}\frac{x^2+2x-3}{x^2-1}$.`, 2, "(x + 3)/(x + 1)."),
  num(String.raw`Évalue $\left(1+\frac1{10}\right)^{10}$ (4 décimales), un terme de la suite qui s'approche de $e$.`, 2.5937, "1.1¹⁰.", null, 0.0005),
  num(String.raw`Évalue $\lim_{x\to0}\frac{x^3-2x}{x}$.`, -2, "x² − 2."),
  mc("Le graphique a les asymptotes x = 1 et y = 2. Quelle est la limite quand x → ∞?", "2", ["1", "∞", "0"], "L'asymptote horizontale.", planeDoc({ view: { xmin: -6, xmax: 10, ymin: -4, ymax: 8 }, curves: [{ f: (x) => 2 + 1 / (x - 1), a: -6, b: 0.8, color: "violet" }, { f: (x) => 2 + 1 / (x - 1), a: 1.2, b: 10, color: "violet" }], vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], step: { x: 2, y: 2 } })),
  num(String.raw`Évalue $\lim_{x\to9}\frac{\sqrt x-3}{x-9}$ (4 décimales).`, 0.1667, "1/(√x + 3).", null, 0.0005),
];
