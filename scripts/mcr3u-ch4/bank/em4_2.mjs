// 4.2 Rational Exponents — 20 easy + 20 medium questions
import { mc, ms, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

export const E = [
  num(String.raw`Evaluate $49^{1/2}$.`, 7, "√49."),
  num(String.raw`Evaluate $8^{1/3}$.`, 2, "∛8."),
  num(String.raw`Evaluate $16^{1/4}$.`, 2, "2⁴ = 16."),
  num(String.raw`Evaluate $121^{1/2}$.`, 11, "√121."),
  num(String.raw`Evaluate $27^{2/3}$.`, 9, "3²."),
  num(String.raw`Evaluate $4^{3/2}$.`, 8, "2³."),
  mc(String.raw`Evaluate $9^{-1/2}$.`, String.raw`$\frac13$`, [String.raw`$-3$`, String.raw`$-\frac92$`, String.raw`$3$`], "Reciprocal of √9."),
  mc(String.raw`Which equals $x^{1/2}$?`, String.raw`$\sqrt x$`, [String.raw`$\frac x2$`, String.raw`$x^2$`, String.raw`$\frac1{x^2}$`], "Exponent ½ is a square root."),
  mc(String.raw`Write $\sqrt[3]x$ as a power.`, String.raw`$x^{1/3}$`, [String.raw`$x^3$`, String.raw`$3x$`, String.raw`$x^{-3}$`], "Index 3 → exponent ⅓."),
  num(String.raw`Evaluate $(-8)^{1/3}$.`, -2, "(−2)³ = −8."),
  tf(String.raw`$16^{1/2}=8$.`, false, "It is √16 = 4."),
  num(String.raw`Evaluate $32^{1/5}$.`, 2, "2⁵ = 32."),
  num(String.raw`Evaluate $1000^{2/3}$.`, 100, "10²."),
  mc(String.raw`Evaluate $25^{-1/2}$.`, String.raw`$\frac15$`, [String.raw`$-5$`, String.raw`$5$`, String.raw`$-\frac1{5}$`], "1/√25."),
  num(String.raw`Evaluate $81^{1/4}$.`, 3, "3⁴ = 81."),
  tf(String.raw`$(-4)^{1/2}$ is a real number.`, false, "No real number squares to −4."),
  num(String.raw`Evaluate $0.36^{1/2}$.`, 0.6, "0.6² = 0.36.", null, 1e-9),
  mc(String.raw`Which equals $x^{2/3}$?`, String.raw`$\sqrt[3]{x^2}$`, [String.raw`$\sqrt{x^3}$`, String.raw`$\frac{2x}{3}$`, String.raw`$x^{3/2}$`], "Root index 3, power 2."),
  num("The graph shows y = 4ˣ. What is y at x = ½?", 2, "√4.", planeDoc({ view: { xmin: -2, xmax: 2, ymin: -1, ymax: 16 }, curves: [{ f: (x) => 4 ** x, color: "violet" }], points: [P(0.5, 2)], step: { x: 0.5, y: 2 } })),
  num("The graph shows y = 9ˣ. What is y at x = 1.5?", 27, "9^1.5 = 3³.", planeDoc({ view: { xmin: -1, xmax: 2, ymin: -2, ymax: 40 }, curves: [{ f: (x) => 9 ** x, color: "violet" }], points: [P(1.5, 27)], step: { x: 0.5, y: 5 } })),
];

export const M = [
  num(String.raw`Evaluate $64^{2/3}$.`, 16, "4²."),
  mc(String.raw`Evaluate $27^{-2/3}$.`, String.raw`$\frac19$`, [String.raw`$-9$`, String.raw`$9$`, String.raw`$-\frac19$`], "1/3²."),
  mc(String.raw`Evaluate $\left(\tfrac49\right)^{1/2}$.`, String.raw`$\frac23$`, [String.raw`$\frac29$`, String.raw`$\frac43$`, String.raw`$\frac{16}{81}$`], "√4 / √9."),
  num(String.raw`Evaluate $\left(\tfrac{16}{81}\right)^{-1/4}$.`, 1.5, "(81/16)^(1/4) = 3/2.", null, 1e-9),
  num(String.raw`Evaluate $32^{3/5}$.`, 8, "2³."),
  mc(String.raw`Evaluate $0.09^{-1/2}$.`, String.raw`$\frac{10}{3}$`, [String.raw`$0.3$`, String.raw`$-0.3$`, String.raw`$3$`], "1/0.3."),
  num(String.raw`Evaluate $8^{2/3}+9^{1/2}$.`, 7, "4 + 3."),
  num(String.raw`Solve $x^{1/3}=4$.`, 64, "Cube both sides."),
  num(String.raw`Solve $x^{3/2}=27$.`, 9, "x = 27^(2/3)."),
  ms("Which equal 4? Select all.", [String.raw`$16^{1/2}$`, String.raw`$64^{1/3}$`, String.raw`$8^{2/3}$`, String.raw`$2^{1/2}$`, String.raw`$256^{1/4}$`], [0, 1, 2, 4], "2^(1/2) ≈ 1.41."),
  num(String.raw`Evaluate $(-27)^{2/3}$.`, 9, "(−3)² = 9."),
  tf(String.raw`$a^{m/n}=\left(\sqrt[n]a\right)^m$ for $a>0$.`, true, "Definition."),
  num(String.raw`Evaluate $125^{-1/3}$ as a decimal.`, 0.2, "1/5.", null, 1e-9),
  num(String.raw`Evaluate $10000^{3/4}$.`, 1000, "10³."),
  mc(String.raw`Write $\sqrt{x^3}$ as a power.`, String.raw`$x^{3/2}$`, [String.raw`$x^{2/3}$`, String.raw`$x^{6}$`, String.raw`$x^{1/6}$`], "Index 2, power 3."),
  num(String.raw`Evaluate $2^{1/2}\cdot2^{3/2}$.`, 4, "2²."),
  num(String.raw`Evaluate $\left(\tfrac1{32}\right)^{-2/5}$.`, 4, "32^(2/5) = 2²."),
  num(String.raw`Evaluate $1.44^{1/2}$.`, 1.2, "1.2² = 1.44.", null, 1e-9),
  num("The graph shows y = 8ˣ. What is y at x = −⅓ (decimal)?", 0.5, "1/∛8.", planeDoc({ view: { xmin: -1.5, xmax: 1.5, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 8 ** x, color: "violet" }], points: [P(-1 / 3, 0.5, "(−⅓, ?)")], step: { x: 0.5, y: 1 } }), 1e-9),
  num("The graph shows y = x^(1/2). For which x is y = 7?", 49, "x = 7².", planeDoc({ view: { xmin: 0, xmax: 60, ymin: 0, ymax: 9 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "violet" }], points: [P(49, 7)], step: { x: 5, y: 1 } })),
];
