// 4.2 Rational Exponents — 20 hard questions
import { mc, ms, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

export const TOPIC = "4.2 Rational Exponents";
export const Q = [
  num(String.raw`Evaluate $16^{3/4}-8^{2/3}+81^{-1/4}$ (3 decimals).`, 8 - 4 + 1 / 3, "8 − 4 + ⅓.", null, 0.0005),
  num(String.raw`Solve $x^{-2/3}=\frac19$ for $x>0$.`, 27, "x^(2/3) = 9 → x = 9^(3/2).", planeDoc({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 0.6 }, curves: [{ f: (x) => x ** (-2 / 3), a: 0.5, color: "violet" }], lines: [{ m: 0, b: 1 / 9, color: "amber", dash: true }], points: [P(27, 1 / 9, "(27, 1/9)")], step: { x: 5, y: 0.1 } })),
  num(String.raw`Solve $(x-1)^{3/2}=8$.`, 5, "x − 1 = 8^(2/3) = 4."),
  num(String.raw`Evaluate $4^{-3/2}\cdot8^{4/3}$.`, 2, "⅛ · 16."),
  mc(String.raw`Evaluate $\left(\tfrac{27}{8}\right)^{-2/3}$.`, String.raw`$\frac49$`, [String.raw`$\frac94$`, String.raw`$-\frac94$`, String.raw`$\frac{8}{27}$`], "(8/27)^(2/3) = (2/3)²."),
  num(String.raw`Evaluate $0.0016^{1/4}$.`, 0.2, "0.2⁴ = 0.0016.", null, 1e-9),
  num("The graph shows y = 16ˣ. Find y at x = −0.75 (decimal).", 0.125, "16^(−3/4) = 1/8.", planeDoc({ view: { xmin: -1.5, xmax: 1, ymin: -1, ymax: 17 }, curves: [{ f: (x) => 16 ** x, color: "violet" }], points: [P(-0.75, 0.125, "(−0.75, ?)")], step: { x: 0.25, y: 2 } }), 1e-9),
  tf(String.raw`$\left(a^2\right)^{1/2}=a$ for every real number $a$.`, false, "For a = −3 it gives 3: it equals |a|."),
  num("A cube has volume 512 cm³. Use V^(2/3) to find its surface area 6V^(2/3) (cm²).", 384, "512^(2/3) = 64; 6 × 64."),
  num(String.raw`A planet's orbital period is $T=a^{3/2}$ years, with $a$ in astronomical units. Find $T$ for $a=4$.`, 8, "4^(3/2) = 2³."),
  num("The graph shows T = a^(3/2). Find T when a = 9.", 27, "√9³.", planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 40 }, curves: [{ f: (a) => a ** 1.5, a: 0, color: "violet" }], points: [P(9, 27)], step: { x: 1, y: 5 }, xlabel: "a (AU)", ylabel: "T (years)" })),
  num(String.raw`Solve $2^{x/2}=32$.`, 10, "x/2 = 5."),
  ms("Which are irrational? Select all.", [String.raw`$8^{1/2}$`, String.raw`$8^{1/3}$`, String.raw`$27^{2/3}$`, String.raw`$2^{3/2}$`, String.raw`$16^{3/4}$`], [0, 3], "√8 = 2√2 and 2^(3/2) = 2√2; the others are 2, 9, 8."),
  num(String.raw`Evaluate $\left(\sqrt2\right)^6$.`, 8, "2^(6/2)."),
  num(String.raw`Evaluate $9^{0.5}+27^{1/3}\cdot4^{0.5}$.`, 9, "3 + 3 × 2."),
  num(String.raw`Find the positive solution of $x^{1/2}=\frac x4$.`, 16, "x = x²/16."),
  mc(String.raw`Which is the largest: $2^{1/2}$, $3^{1/3}$ or $6^{1/6}$?`, String.raw`$3^{1/3}$`, [String.raw`$2^{1/2}$`, String.raw`$6^{1/6}$`, "they are equal"], "Raise all to the 6th power: 8, 9, 6."),
  num("The graph shows y = x^(2/3), which is defined for negative x too. Find y at x = −8.", 4, "(∛−8)² = (−2)².", planeDoc({ view: { xmin: -10, xmax: 10, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.cbrt(x) ** 2, color: "violet" }], points: [P(-8, 4), P(8, 4)], step: { x: 2, y: 1 } })),
  num(String.raw`Evaluate $\left(64^{1/3}\right)^{1/2}$.`, 2, "4^(1/2)."),
  num(String.raw`An animal's resting metabolic rate is modelled by $M=70m^{3/4}$ (m in kg). Find $M$ for a 16 kg animal.`, 560, "16^(3/4) = 8."),
];
