// 7.1 Formes équivalentes des équations exponentielles — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;

export const E = [
  num(S`Écris $128$ comme une puissance de $2$. Entre l'exposant.`, 7, "2⁷ = 128."),
  num(S`Écris $\frac1{49}$ comme une puissance de $7$. Entre l'exposant.`, -2, "49 = 7², et un inverse donne un exposant négatif."),
  num(S`Écris $\sqrt{5}$ comme une puissance de $5$. Entre l'exposant (nombre décimal).`, 0.5, "Une racine carrée correspond à la puissance 1/2.", null, 0.001),
  num(S`Écris $1$ comme une puissance de $6$. Entre l'exposant.`, 0, "b⁰ = 1."),
  mc(S`Quelle expression est égale à $9^x$?`, S`$3^{2x}$`, [S`$3^{x+2}$`, S`$3^{x^2}$`, S`$3^{x/2}$`], "(3²)ˣ = 3²ˣ."),
  mc(S`Quelle expression est égale à $2^{x+4}$?`, S`$16\cdot2^x$`, [S`$8\cdot2^x$`, S`$2^x+16$`, S`$2^{4x}$`], "2ˣ⁺⁴ = 2ˣ·2⁴."),
  num(S`Résous $3^x=81$.`, 4, "81 = 3⁴."),
  num(S`Résous $2^{x+1}=32$.`, 4, "32 = 2⁵, donc x + 1 = 5."),
  num(S`Résous $10^{x}=0.001$.`, -3, "0.001 = 10⁻³."),
  num(S`Résous $5^{2x}=625$.`, 2, "625 = 5⁴, donc 2x = 4."),
  num(S`Résous $4^x=2$ (nombre décimal).`, 0.5, "4^(1/2) = 2.", null, 0.001),
  num(S`Résous $6^{x-3}=1$.`, 3, "1 = 6⁰, donc x − 3 = 0."),
  tf(S`$8^x=2^{3x}$ pour toute valeur de $x$.`, true, "(2³)ˣ = 2³ˣ."),
  tf(S`$4^{x+1}=2^{2x+1}$ pour toute valeur de $x$.`, false, "4ˣ⁺¹ = 2²⁽ˣ⁺¹⁾ = 2²ˣ⁺²."),
  tf(S`Si $7^a=7^b$, alors $a=b$.`, true, "y = 7ˣ est biunivoque."),
  fill(S`$\frac1{8}=2^{\,\square}$. L'exposant est ____.`, ["-3", "−3"], "8 = 2³."),
  fill(S`Pour résoudre $9^x=27$, écris les deux membres comme puissances de ____.`, ["3"], "9 = 3², 27 = 3³."),
  mc(S`Quelle base utiliserais-tu pour résoudre $4^x=8$?`, "2", ["4", "8", "10"], "4 et 8 sont tous deux des puissances de 2 : 2x = 3."),
  mc("Le graphique montre y = 2ˣ et la droite y = 16. Où se coupent-ils?", "x = 4", ["x = 8", "x = 16", "x = 2"], "2⁴ = 16.", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 20 }, lines: [{ m: 0, b: 16, color: "blue", dash: true }], curves: [{ f: (x) => 2 ** x, color: "violet" }], step: { x: 1, y: 2 } })),
  mc("Le graphique montre y = 3ˣ. Utilise-le pour résoudre 3ˣ = 1/3.", "x = −1", ["x = 1", "x = 0", "x = 1/3"], "3⁻¹ = 1/3.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 9 }, curves: [{ f: (x) => 3 ** x, color: "violet" }], points: [{ x: -1, y: 1 / 3, label: "(−1, 1/3)", color: "amber" }], step: { x: 1, y: 1 } })),
];

export const M = [
  num(S`Résous $8^{x}=4^{x+2}$.`, 4, "2³ˣ = 2²ˣ⁺⁴."),
  num(S`Résous $27^{x-1}=9^{x}$.`, 3, "3x − 3 = 2x."),
  num(S`Résous $\left(\frac15\right)^x=125$.`, -3, "5⁻ˣ = 5³."),
  num(S`Résous $4^{2x-1}=\frac1{16}$ (nombre décimal).`, -0.5, "4²ˣ⁻¹ = 4⁻², donc 2x − 1 = −2.", null, 0.001),
  num(S`Résous $9^{x}=\sqrt3$ (nombre décimal).`, 0.25, "3²ˣ = 3^(1/2).", null, 0.001),
  num(S`Résous $2^{3x}\cdot2^{x}=2^{12}$.`, 3, "Additionne les exposants : 4x = 12."),
  num(S`Résous $\dfrac{5^{4x}}{5^{x}}=5^{9}$.`, 3, "Soustrais les exposants : 3x = 9."),
  num(S`Résous $100^{x}=1000^{x-1}$.`, 3, "10²ˣ = 10³ˣ⁻³."),
  num(S`Résous $2^{x}+2^{x}=64$.`, 5, "2·2ˣ = 2ˣ⁺¹ = 2⁶."),
  num(S`Résous $3^{x+1}-3^{x}=54$.`, 3, "3ˣ(3 − 1) = 54, donc 3ˣ = 27."),
  mc(S`Écris $\dfrac{8^{x}}{4}$ comme une puissance de $2$.`, S`$2^{3x-2}$`, [S`$2^{3x+2}$`, S`$2^{x-2}$`, S`$2^{2x}$`], "2³ˣ ÷ 2²."),
  mc(S`Écris $\sqrt[3]{25^{x}}$ comme une puissance de $5$.`, S`$5^{2x/3}$`, [S`$5^{3x/2}$`, S`$5^{2x+3}$`, S`$5^{x/3}$`], "(5²ˣ)^(1/3)."),
  mc(S`$2^{x+5}=k\cdot2^x$ pour toute valeur de $x$. Trouve $k$.`, "32", ["5", "10", "25"], "2ˣ⁺⁵ = 2ˣ·2⁵."),
  ms(S`Sélectionne toutes les expressions égales à $16^x$.`, [S`$2^{4x}$`, S`$4^{2x}$`, S`$(2^x)^4$`, S`$4^{x+2}$`], [0, 1, 2], "16 = 2⁴ = 4²."),
  tf(S`On peut résoudre l'équation $2^x+2^x=2^6$ en écrivant $x+x=6$.`, false, "Une somme de puissances n'est pas une seule puissance : 2·2ˣ = 2ˣ⁺¹, donc x = 5."),
  tf(S`$\left(\tfrac14\right)^{x}=2^{-2x}$ pour toute valeur de $x$.`, true, "1/4 = 2⁻²."),
  fill(S`Résous $49^{x}=7^{x+6}$. $x=$ ____`, ["6"], "2x = x + 6."),
  mc("On a tracé les graphiques de y = 2ˣ⁺² et de y = 4·2ˣ. Que remarques-tu?", "c'est la même courbe", ["elles sont parallèles", "elles se coupent une fois", "elles ne se rencontrent jamais"], "2ˣ⁺² = 2ˣ·4.", planeDoc({ view: { xmin: -4, xmax: 2.5, ymin: -1, ymax: 20 }, curves: [{ f: (x) => 2 ** (x + 2), color: "violet" }], points: [{ x: 0, y: 4, label: "(0, 4)", color: "amber" }, { x: -2, y: 1, label: "(−2, 1)", color: "blue" }], step: { x: 1, y: 2 } })),
  mc("Le graphique montre y = 4ˣ et y = 8. Résous 4ˣ = 8 de façon exacte.", "x = 3/2", ["x = 2", "x = 4/3", "x = 1"], "2²ˣ = 2³.", planeDoc({ view: { xmin: -1, xmax: 2.5, ymin: -1, ymax: 20 }, lines: [{ m: 0, b: 8, color: "blue", dash: true }], curves: [{ f: (x) => 4 ** x, color: "violet" }], points: [{ x: 1.5, y: 8, label: "(1.5, 8)", color: "amber" }], step: { x: 0.5, y: 2 } })),
  num(S`Résous $3^{x^2}=3^{4}\cdot3^{x+2}$. Entre la plus grande racine.`, 3, "x² = x + 6, donc (x − 3)(x + 2) = 0."),
];
