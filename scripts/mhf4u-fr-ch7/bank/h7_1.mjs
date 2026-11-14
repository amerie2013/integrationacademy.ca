// 7.1 Formes équivalentes des équations exponentielles — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const TOPIC = "7.1 Formes équivalentes des équations exponentielles";
export const Q = [
  num(S`Résous $5^{x^2-x}=25^{3}$. Entre la racine positive.`, 3, "x² − x = 6 ⇒ (x − 3)(x + 2) = 0."),
  num(S`Résous $2^{x^2}=4^{x}\cdot8$. Entre la racine négative.`, -1, "x² = 2x + 3 ⇒ (x − 3)(x + 1) = 0."),
  num(S`Résous $2^{x+3}+2^{x+1}=80$.`, 3, "2ˣ(8 + 2) = 80 ⇒ 2ˣ = 8."),
  num(S`Résous $5^{x+1}+5^{x}=750$.`, 3, "6·5ˣ = 750 ⇒ 5ˣ = 125."),
  num(S`Résous $4^{x}-2^{x+1}=0$.`, 1, "2²ˣ = 2ˣ⁺¹ ⇒ 2x = x + 1."),
  num(S`Résous $\sqrt{2^{x}}=8^{x-5}$ (nombre décimal).`, 6, "x/2 = 3x − 15 ⇒ 5x/2 = 15."),
  num(S`Résous $\left(\frac{1}{9}\right)^{x-2}=27^{x+1}$ (nombre décimal).`, 0.2, "−2x + 4 = 3x + 3 ⇒ x = 1/5.", null, 0.001),
  num(S`Résous $16^{x}\cdot4^{x+1}=2^{14}$.`, 2, "4x + 2x + 2 = 14."),
  num(S`Résous $\dfrac{9^{x+1}}{27^{x}}=3^{-1}$.`, 3, "2x + 2 − 3x = −1."),
  num(S`Trouve $h$ tel que $3^{x+h}=243\cdot3^{x}$ pour toute valeur de $x$.`, 5, "243 = 3⁵."),
  num(S`Résous $2^{2x}-2^{x+2}=0$.`, 2, "2ˣ(2ˣ − 4) = 0, et 2ˣ ≠ 0."),
  mc(S`Quelle transformation de $y=2^x$ donne le même graphique que $y=2^{x-3}$?`, S`une compression verticale de facteur $\frac18$`, [S`un agrandissement vertical de facteur $8$`, S`une translation de $3$ vers le haut`, S`une réflexion par rapport à l'axe des $x$`], "2ˣ⁻³ = 2ˣ/8."),
  mc(S`$a^{2x}=a^{x+3}$ a exactement une solution, $x=3$, pour toute base positive $a$, sauf…`, S`$a=1$`, [S`$a=2$`, S`$a=10$`, S`$a=\frac12$`], "Avec a = 1, les deux membres valent 1, donc toute valeur de x est une solution."),
  ms(S`Sélectionne toutes les équations dont la solution est $x=2$.`, [S`$9^{x}=3^{x+2}$`, S`$8^{x}=4^{x+1}$`, S`$25^{x}=5^{x+1}$`, S`$\left(\frac12\right)^{x}=\frac14$`], [0, 1, 3], "Troisième : 2x = x + 1 donne x = 1."),
  tf(S`$2^{x}=-8$ a pour solution $x=-3$.`, false, "2⁻³ = 1/8; une puissance de 2 n'est jamais négative."),
  tf(S`$3^{2x}=9^{x}$ est vraie pour toute valeur de $x$, donc elle a une infinité de solutions.`, true, "3²ˣ = (3²)ˣ."),
  mc("Le graphique montre y = x² − 2x et la droite y = 3. Utilise-le pour résoudre 5^(x² − 2x) = 125.", "x = −1 ou x = 3", ["x = 3 seulement", "x = 1 ou x = 3", "x = 0 ou x = 2"], "5^(x² − 2x) = 5³ ⇒ x² − 2x = 3.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -2, ymax: 8 }, curves: [{ f: (x) => x * x - 2 * x, color: "violet" }], lines: [{ m: 0, b: 3, color: "blue", dash: true }], points: [{ x: -1, y: 3, label: "(−1, 3)", color: "amber" }, { x: 3, y: 3, label: "(3, 3)", color: "amber" }], step: { x: 1, y: 1 } })),
  mc("Le graphique montre y = 3ˣ⁺¹ + 3ˣ et y = 36. Résous l'équation de façon exacte.", "x = 2", ["x = 3", "x = 1.5", "x = 2.5"], "4·3ˣ = 36 ⇒ 3ˣ = 9.", planeDoc({ view: { xmin: -1, xmax: 3, ymin: -2, ymax: 50 }, curves: [{ f: (x) => 3 ** (x + 1) + 3 ** x, color: "violet" }], lines: [{ m: 0, b: 36, color: "blue", dash: true }], points: [{ x: 2, y: 36, label: "(2, 36)", color: "amber" }], step: { x: 0.5, y: 5 } })),
  mc("Les graphiques de y = 4ˣ et de y = 2ˣ⁺³ se coupent au point indiqué. Quelles sont ses coordonnées?", "(3, 64)", ["(2, 16)", "(1.5, 8)", "(3, 48)"], "2²ˣ = 2ˣ⁺³ ⇒ x = 3, y = 64.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -5, ymax: 90 }, curves: [{ f: (x) => 4 ** x, color: "violet" }, { f: (x) => 2 ** (x + 3), color: "blue" }], points: [{ x: 3, y: 64, label: "?", color: "amber" }], step: { x: 1, y: 10 } })),
  mc("Quel énoncé sur le graphique explique pourquoi 2ˣ = 2ᵏ a exactement une solution?", "toute droite horizontale au-dessus de l'axe des x coupe y = 2ˣ une seule fois", ["y = 2ˣ est une droite", "y = 2ˣ passe par (0, 1)", "y = 2ˣ a une asymptote"], "y = 2ˣ est croissante, donc biunivoque.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], lines: [{ m: 0, b: 6, color: "blue", dash: true }, { m: 0, b: 2, color: "blue", dash: true }], step: { x: 1, y: 1 } })),
];
