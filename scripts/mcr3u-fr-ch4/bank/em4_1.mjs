// 4.1 Lois des exposants et exposants entiers — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch4/bank/em4_1.mjs)
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const pow = (b, pts) => planeDoc({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 10 }, curves: [{ f: (x) => b ** x, color: "violet" }], points: pts, step: { x: 1, y: 1 } });

export const E = [
  num(String.raw`Évalue $7^0$.`, 1, "Toute base non nulle à l'exposant 0 vaut 1."),
  mc(String.raw`Évalue $3^{-2}$.`, String.raw`$\frac19$`, [String.raw`$-9$`, String.raw`$-6$`, String.raw`$\frac16$`], "1/3²."),
  mc(String.raw`Évalue $2^{-4}$.`, String.raw`$\frac1{16}$`, [String.raw`$-16$`, String.raw`$-8$`, String.raw`$\frac18$`], "1/2⁴."),
  num(String.raw`Évalue $\left(\tfrac12\right)^{-3}$.`, 8, "Renverse : 2³."),
  num(String.raw`Évalue $10^{-2}$ sous forme décimale.`, 0.01, "1/100.", null, 1e-9),
  mx(String.raw`Simplifie $x^3\cdot x^5$.`, "x^8", "Additionne les exposants."),
  mx(String.raw`Simplifie $\dfrac{y^9}{y^4}$.`, "y^5", "Soustrais les exposants."),
  mx(String.raw`Simplifie $(a^3)^4$.`, "a^12", "Multiplie les exposants."),
  tf(String.raw`$5^{-1}$ est un nombre négatif.`, false, "C'est 1/5."),
  num(String.raw`Évalue $(-2)^4$.`, 16, "Puissance paire d'un nombre négatif."),
  num(String.raw`Évalue $-2^4$.`, -16, "Seul 2 est élevé à la puissance."),
  num(String.raw`Évalue $4^{-1}$ sous forme décimale.`, 0.25, "1/4.", null, 1e-9),
  mx(String.raw`Simplifie $x^{-2}\cdot x^{6}$.`, "x^4", "−2 + 6."),
  tf(String.raw`$b^0=1$ pour tout $b$ non nul.`, true, "Vient de b^m/b^m."),
  num(String.raw`Évalue $(-9)^0$.`, 1, "Exposant nul."),
  mc(String.raw`Quelle expression est égale à $\frac{1}{x^5}$?`, String.raw`$x^{-5}$`, [String.raw`$-x^5$`, String.raw`$x^{1/5}$`, String.raw`$5x$`], "Définition d'un exposant négatif."),
  num(String.raw`Évalue $\left(\tfrac23\right)^{0}+1$.`, 2, "1 + 1."),
  num("Lis le graphique de y = 2ˣ : que vaut y quand x = −1 (sous forme décimale)?", 0.5, "2⁻¹ = ½.", pow(2, [P(-1, 0.5), P(0, 1), P(1, 2)]), 1e-9),
  num("Lis le graphique de y = 3ˣ : que vaut y à x = 2?", 9, "3².", pow(3, [P(2, 9), P(0, 1)])),
  mx(String.raw`Simplifie $(2x)^3$.`, "8*x^3", "2³x³."),
];

export const M = [
  mc(String.raw`Évalue $\left(\tfrac35\right)^{-2}$.`, String.raw`$\frac{25}9$`, [String.raw`$\frac9{25}$`, String.raw`$-\frac9{25}$`, String.raw`$\frac{10}{6}$`], "Renverse, puis élève au carré."),
  mc(String.raw`Évalue $3^{-1}+3^{-2}$.`, String.raw`$\frac49$`, [String.raw`$\frac29$`, String.raw`$3^{-3}$`, String.raw`$\frac1{27}$`], "⅓ + 1/9."),
  mx(String.raw`Simplifie $(x^{-3})^{-2}$.`, "x^6", "Multiplie les exposants."),
  mx(String.raw`Simplifie $\dfrac{a^2}{a^{-3}}$.`, "a^5", "2 − (−3)."),
  mx(String.raw`Simplifie $(3x^{-1})^{-2}$ (toute forme équivalente).`, "x^2/9", "3⁻²x²."),
  num(String.raw`Évalue $2^{-3}\cdot2^{5}$.`, 4, "2²."),
  num(String.raw`Évalue $\dfrac{5^{-2}}{5^{-4}}$.`, 25, "5²."),
  num(String.raw`Résous $2^x=\frac18$.`, -3, "1/8 = 2⁻³."),
  num(String.raw`Résous $10^x=0.001$.`, -3, "10⁻³."),
  tf(String.raw`$(a+b)^{-1}=a^{-1}+b^{-1}$ pour tous $a$, $b$ positifs.`, false, "p. ex. a = b = 1 : ½ ≠ 2."),
  ms(String.raw`Lesquelles sont égales à $\frac1{16}$? Choisis toutes les bonnes réponses.`, [String.raw`$4^{-2}$`, String.raw`$2^{-4}$`, String.raw`$16^{-1}$`, String.raw`$-16$`, String.raw`$\left(\tfrac12\right)^{4}$`], [0, 1, 2, 4], "Toutes sauf −16."),
  mx(String.raw`Simplifie $x^4y^{-2}\cdot x^{-1}y^{5}$ (toute forme équivalente).`, "x^3*y^3", "Additionne les exposants de chaque base."),
  num(String.raw`Évalue $\left(\tfrac14\right)^{-2}\cdot2^{-3}$.`, 2, "16 · 1/8."),
  mc(String.raw`Simplifie $\dfrac{6x^{-2}}{2x^{3}}$.`, String.raw`$\frac{3}{x^5}$`, [String.raw`$3x$`, String.raw`$\frac{3}{x}$`, String.raw`$3x^5$`], "x^(−2−3)."),
  num(String.raw`Évalue $(-3)^{-3}$ (au millième près).`, -1 / 27, "−1/27.", null, 0.0005),
  tf(String.raw`$-4^{-2}=-\frac1{16}$.`, true, "−(4⁻²)."),
  num(String.raw`Évalue $\left(2^{-1}\right)^{-3}$.`, 8, "2³."),
  mx(String.raw`Simplifie $(m^2n^{-1})^3(mn^2)$ (toute forme équivalente).`, "m^7*n^(-1)", "m⁶n⁻³·mn² = m⁷n⁻¹."),
  num("Le graphique montre y = (½)ˣ. Que vaut y à x = −3?", 8, "(½)⁻³ = 8.", pow(0.5, [P(-3, 8), P(0, 1), P(1, 0.5)])),
  num("Le graphique montre y = 2ˣ. Pour quelle valeur de x a-t-on y = 1/4?", -2, "2⁻² = ¼.", pow(2, [P(-2, 0.25), P(0, 1)])),
];
