// 4.3 Simplifier des expressions avec des exposants — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch4/bank/em4_3.mjs)
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const two = (f, g, pt, view) => planeDoc({ view, curves: [{ f, color: "violet" }, { f: g, color: "amber" }], points: [pt], step: { x: 0.5, y: 2 } });

export const E = [
  mx(String.raw`Simplifie $x^{1/3}\cdot x^{2/3}$.`, "x", "⅓ + ⅔ = 1."),
  mx(String.raw`Simplifie $(x^8)^{1/4}$.`, "x^2", "8 × ¼."),
  mx(String.raw`Simplifie $\dfrac{y^{3/2}}{y^{1/2}}$.`, "y", "3/2 − 1/2."),
  mx(String.raw`Simplifie $(9x^2)^{1/2}$ pour $x>0$.`, "3*x", "√9 · x."),
  mx(String.raw`Simplifie $x^{1/2}\cdot x^{1/2}$.`, "x", "½ + ½."),
  mc(String.raw`Quelle expression est égale à $8^x$?`, String.raw`$2^{3x}$`, [String.raw`$2^{x+3}$`, String.raw`$3^{2x}$`, String.raw`$4^{2x}$`], "8 = 2³."),
  mc(String.raw`Quelle expression est égale à $9^x$?`, String.raw`$3^{2x}$`, [String.raw`$3^{x+2}$`, String.raw`$3^{x/2}$`, String.raw`$2^{3x}$`], "9 = 3²."),
  num(String.raw`Évalue $(a^{1/2})^2$ à $a=6$.`, 6, "L'expression est égale à a."),
  mx(String.raw`Simplifie $x^{3/4}\cdot x^{1/4}$.`, "x", "¾ + ¼."),
  tf(String.raw`$(x^{1/2})^4=x^2$.`, true, "½ × 4 = 2."),
  mx(String.raw`Simplifie $(x^2y)^3$.`, "x^6*y^3", "Multiplie chaque exposant par 3."),
  mc(String.raw`Écris $\sqrt x\cdot x$ sous forme d'une seule puissance.`, String.raw`$x^{3/2}$`, [String.raw`$x^{1/2}$`, String.raw`$x^2$`, String.raw`$x^{2/3}$`], "½ + 1."),
  num(String.raw`Résous $4^x=16$.`, 2, "4² = 16."),
  num(String.raw`Résous $27^x=3$ (au dix-millième près).`, 1 / 3, "3^(3x) = 3¹.", null, 0.0005),
  mx(String.raw`Simplifie $(8x^3)^{1/3}$.`, "2*x", "∛8 · x."),
  tf(String.raw`$x^{1/2}+x^{1/2}=x$.`, false, "C'est 2x^(1/2)."),
  mc(String.raw`Écris $25^x$ comme une puissance de 5.`, String.raw`$5^{2x}$`, [String.raw`$5^{x+2}$`, String.raw`$5^{x/2}$`, String.raw`$5^{25x}$`], "25 = 5²."),
  num(String.raw`Évalue $x^{2/3}\cdot x^{1/3}$ à $x=11$.`, 11, "L'expression est égale à x."),
  num("Les courbes violette et orange (y = 4ˣ et y = 2^(2x)) coïncident. Trouve y à x = 1.5.", 8, "2³.", two((x) => 4 ** x, (x) => 2 ** (2 * x), P(1.5, 8), { xmin: -1, xmax: 2, ymin: -1, ymax: 16 })),
  num("y = 8ˣ et y = 2^(3x) sont la même courbe. Trouve y à x = ⅔.", 4, "8^(2/3) = 4.", two((x) => 8 ** x, (x) => 2 ** (3 * x), P(2 / 3, 4), { xmin: -1, xmax: 1.2, ymin: -1, ymax: 12 })),
];

export const M = [
  mx(String.raw`Simplifie $(16x^4)^{3/4}$ pour $x>0$.`, "8*x^3", "16^(3/4) = 8."),
  mx(String.raw`Simplifie $\left(x^{2/3}y^{-1/3}\right)^3$.`, "x^2/y", "x²y⁻¹."),
  mx(String.raw`Simplifie $\dfrac{x^{5/6}}{x^{1/3}}$.`, "sqrt(x)", "5/6 − 2/6 = 1/2 : √x."),
  mx(String.raw`Simplifie $(27a^6)^{-1/3}$.`, "1/(3*a^2)", "1/(3a²)."),
  mc(String.raw`Écris $\sqrt x\cdot\sqrt[3]x$ sous forme d'une seule puissance.`, String.raw`$x^{5/6}$`, [String.raw`$x^{1/6}$`, String.raw`$x^{2/5}$`, String.raw`$x^{1/5}$`], "½ + ⅓ = 5/6."),
  num(String.raw`Résous $8^x=4$ (au dix-millième près).`, 2 / 3, "2^(3x) = 2².", null, 0.0005),
  num(String.raw`Résous $9^{x-1}=27$.`, 2.5, "3^(2x−2) = 3³."),
  mc(String.raw`Simplifie $\dfrac{4^{x+1}}{2^x}$.`, String.raw`$2^{x+2}$`, [String.raw`$2^{x+1}$`, String.raw`$2^{2x}$`, String.raw`$2^{3x+2}$`], "2^(2x+2−x)."),
  num(String.raw`Évalue $\dfrac{(x^{3/4})^4}{x^2}$ à $x=5$.`, 5, "x³/x² = x."),
  mx(String.raw`Simplifie $\left(a^{-1/2}\right)^{-4}$.`, "a^2", "(−½)(−4) = 2."),
  ms(String.raw`Lesquelles sont égales à $2^{6x}$? Choisis toutes les bonnes réponses.`, [String.raw`$4^{3x}$`, String.raw`$8^{2x}$`, String.raw`$64^x$`, String.raw`$16^{2x}$`, String.raw`$(2^x)^6$`], [0, 1, 2, 4], "16^(2x) = 2^(8x)."),
  tf(String.raw`$\left(x^{1/2}y^{1/2}\right)^2=xy$.`, true, "Chaque exposant double."),
  mx(String.raw`Simplifie $(x^{1/3})^{-6}$.`, "1/x^2", "x⁻²."),
  num(String.raw`Résous $32^x=2$.`, 0.2, "2^(5x) = 2¹.", null, 1e-9),
  mx(String.raw`Simplifie $\left(4x^{-2}\right)^{-1/2}$ pour $x>0$.`, "x/2", "4^(−½)x¹."),
  num(String.raw`Évalue $\left(b^{2/5}\right)^{5/2}$ à $b=13$.`, 13, "L'expression est égale à b."),
  mc(String.raw`Développe $\left(x^{1/2}+1\right)\left(x^{1/2}-1\right)$.`, String.raw`$x-1$`, [String.raw`$x+1$`, String.raw`$x^{1/4}-1$`, String.raw`$x-2x^{1/2}+1$`], "Différence de carrés."),
  num(String.raw`Résous $2^x\cdot4^x=64$.`, 2, "2^(3x) = 2⁶."),
  num("Les courbes y = (√2)^(2x) et y = 2ˣ coïncident. Trouve y à x = 5.", 32, "2⁵.", two((x) => Math.SQRT2 ** (2 * x), (x) => 2 ** x, P(5, 32), { xmin: -1, xmax: 6, ymin: -2, ymax: 40 })),
  num("Le graphique de y = 27^(x/3) est tracé avec celui de y = 3ˣ. Trouve y à x = 3.", 27, "27^1.", two((x) => 27 ** (x / 3), (x) => 3 ** x, P(3, 27), { xmin: -1, xmax: 4, ymin: -2, ymax: 40 })),
];
