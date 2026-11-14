import { FIG } from "../../mhf4u-bank-figures/figs.mjs";
// 2.3 Équations polynomiales — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const E = [
  num(String.raw`Résous $x^3=64$.`, 4, "4³ = 64."),
  num(String.raw`Trouve la plus grande racine de $x(x-3)(x+7)=0$.`, 3, "Racines 0, 3, −7."),
  num(String.raw`Trouve la plus petite racine de $(x+2)(x-5)(x-1)=0$.`, -2, "Racines −2, 5, 1."),
  mc(String.raw`Résous $x^2(x-4)=0$.`, String.raw`$x=0$ ou $x=4$`, [String.raw`$x=4$ seulement`, String.raw`$x=-4$ ou $x=0$`, String.raw`$x=2$ ou $x=4$`], "x² = 0 donne 0."),
  num(String.raw`Trouve la racine réelle de $x^3+125=0$.`, -5, "(−5)³ = −125."),
  tf(String.raw`$x^3-x=0$ a trois racines réelles.`, true, "x(x − 1)(x + 1) : 0, ±1."),
  num(String.raw`Combien de racines réelles $x^2+9=0$ a-t-elle?`, 0, "x² = −9 n'en a aucune."),
  num(String.raw`Combien de racines réelles $(x-1)(x^2+4)=0$ a-t-elle?`, 1, "Seulement x = 1."),
  mc(String.raw`Résous $2x^3=18x$.`, String.raw`$x=0, \pm3$`, [String.raw`$x=\pm3$`, String.raw`$x=3$`, String.raw`$x=0, 9$`], "2x(x² − 9) = 0 — ne divise pas par x."),
  num(String.raw`Trouve la racine positive de $x^4=81$.`, 3, "3⁴ = 81."),
  mc("Quelles sont les racines réelles de P(x) = 0 pour le graphique illustré?", "−2, 1, 3", ["−3, −1, 2", "−2, 3", "0, 1, 3"], "Lis les abscisses à l'origine.", graph((x) => 0.5 * (x + 2) * (x - 1) * (x - 3), { xmin: -3, xmax: 4, ymin: -6, ymax: 6 })),
  tf("Les racines réelles de P(x) = 0 sont les abscisses à l'origine de y = P(x).", true, "Là où P(x) = 0."),
  num(String.raw`Trouve la racine réelle de $8x^3=1$.`, 0.5, "x³ = ⅛.", null, 0.001),
  mc(String.raw`Quelle est la première étape pour résoudre $x^3=5x$?`, String.raw`Réécrire sous la forme $x^3-5x=0$`, ["Diviser les deux membres par x", "Prendre la racine cubique des deux membres", "Élever les deux membres au carré"], "Obtiens 0 d'un côté, puis factorise."),
  num(String.raw`Trouve la somme des racines de $(x-4)(x+1)(x-2)=0$.`, 5, "4 − 1 + 2."),
  num(String.raw`Combien de racines distinctes $(x-3)^2(x+1)=0$ a-t-elle?`, 2, "3 et −1."),
  mc(String.raw`Quelle équation a la racine $x=2$?`, String.raw`$x^3-8=0$`, [String.raw`$x^3+8=0$`, String.raw`$x^2+4=0$`, String.raw`$x^3-2x^2-1=0$`], "2³ − 8 = 0."),
  num(String.raw`Trouve la racine positive de $x^3-4x=0$.`, 2, "x(x − 2)(x + 2)."),
  num("Combien de racines réelles distinctes l'équation P(x) = 0 illustrée par le graphique a-t-elle?", 2, "Le graphique touche l'axe en un point et le coupe en un autre.", graph((x) => 0.5 * (x - 1) ** 2 * (x + 2), { xmin: -3, xmax: 2.5, ymin: -4, ymax: 4 })),
  fill(String.raw`Complète : $a^3-b^3=(a-b)($___$)$.`, ["a^2+ab+b^2", "a²+ab+b²", "a^2+ba+b^2", "b^2+ab+a^2"], "Même signe, signe opposé, toujours positif."),
];

export const M = [
  num(String.raw`Trouve la plus grande racine de $x^3-4x^2-4x+16=0$.`, 4, "x²(x − 4) − 4(x − 4) = (x − 4)(x − 2)(x + 2)."),
  num(String.raw`Trouve la plus petite racine de $x^3+5x^2-x-5=0$.`, -5, "x²(x + 5) − (x + 5)."),
  mc(String.raw`Résous $x^3-13x-12=0$.`, String.raw`$x=-1, 4, -3$`, [String.raw`$x=1, -4, 3$`, String.raw`$x=-1, 3, 4$`, String.raw`$x=1, 12$`], "P(−1) = 0; quotient x² − x − 12."),
  num(String.raw`Trouve la plus grande racine de $x^4-20x^2+64=0$.`, 4, "(x² − 4)(x² − 16)."),
  num(String.raw`Trouve la racine réelle de $27x^3-64=0$ (2 décimales).`, 1.3333, "(3x − 4)(9x² + 12x + 16).", null, 0.006),
  mc(String.raw`Résous $x^3-2x^2-2x+4=0$.`, String.raw`$x=2, \pm\sqrt2$`, [String.raw`$x=-2, \pm\sqrt2$`, String.raw`$x=2, \pm2$`, String.raw`$x=\pm\sqrt2$`], "x²(x − 2) − 2(x − 2)."),
  num(String.raw`Combien de racines réelles $x^3+x^2+4x+4=0$ a-t-elle?`, 1, "(x + 1)(x² + 4)."),
  num(String.raw`Trouve la plus grande racine de $x^3-6x^2+5x+12=0$.`, 4, "P(−1) = 0; quotient (x − 3)(x − 4)."),
  mc("Pour quelles valeurs de k l'équation x³ − 3x = k a-t-elle trois solutions réelles?", String.raw`$-2<k<2$`, [String.raw`$k>2$`, String.raw`$k<-2$`, String.raw`$k=0$ seulement`], "La droite y = k doit passer entre les valeurs aux points tournants, 2 et −2.", planeDoc({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x ** 3 - 3 * x, color: "violet" }], points: [P(-1, 2), P(1, -2)], step: { x: 0.5, y: 1 } })),
  num(String.raw`Trouve la racine positive de $2x^3+3x^2-2x=0$.`, 0.5, "x(2x − 1)(x + 2).", null, 0.001),
  num(String.raw`Trouve le produit des racines de $(2x-1)(x+3)(x-4)=0$.`, -6, "½ · (−3) · 4."),
  mc(String.raw`Trouve les racines réelles de $x^4-16=0$.`, String.raw`$x=\pm2$`, [String.raw`$x=2$`, String.raw`$x=\pm4$`, String.raw`$x=\pm2, \pm4$`], "(x² − 4)(x² + 4)."),
  num(String.raw`Une boîte mesure $x$ sur $x$ sur $x+3$ et a un volume de 20. Trouve $x$.`, 2, "x³ + 3x² − 20 = 0; x = 2 convient.", FIG.boxX3),
  num(String.raw`Combien de racines distinctes $x^3+x^2-x-1=0$ a-t-elle?`, 2, "(x + 1)²(x − 1)."),
  num(String.raw`$x=1$ est une racine de $2x^3+kx^2-x+1=0$. Trouve $k$.`, -2, "2 + k − 1 + 1 = 0."),
  num(String.raw`Trouve la plus petite racine positive de $x^3-2x^2-3x+6=0$ (2 décimales).`, 1.732, "(x − 2)(x² − 3) : √3 ≈ 1.73.", null, 0.006),
  mc("Utilise le graphique pour résoudre P(x) = 2.", String.raw`$x=-1$ ou $x=2$`, [String.raw`$x=1$ ou $x=-2$`, String.raw`$x=2$ seulement`, String.raw`$x=-1, 0, 2$`], "La droite y = 2 touche la courbe en −1 et la coupe en 2.", planeDoc({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, curves: [{ f: (x) => x ** 3 - 3 * x, color: "violet" }, { f: () => 2, color: "green" }], step: { x: 0.5, y: 1 } })),
  num("Le produit de trois entiers positifs consécutifs est 120. Trouve le plus petit.", 4, "4 · 5 · 6 = 120."),
  tf(String.raw`On peut résoudre correctement $x^3=4x$ en divisant les deux membres par $x$.`, false, "On perdrait la racine x = 0."),
  num(String.raw`Trouve la somme des racines réelles de $x^4-5x^2+6=0$.`, 0, "±√2, ±√3."),
];
