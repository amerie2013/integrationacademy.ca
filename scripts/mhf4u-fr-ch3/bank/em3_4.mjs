// 3.4 Résolution d'équations et d'inéquations rationnelles — 20 questions faciles + 20 questions moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { RG, P, planeDoc, rat } from "./fig.mjs";
const S = String.raw;
const V = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const E = [
  num(S`Résous $\dfrac{12}{x}=3$.`, 4, "x = 12/3."),
  num(S`Résous $\dfrac{10}{x-1}=5$.`, 3, "x − 1 = 2."),
  num(S`Résous $\dfrac{7}{x+2}=1$.`, 5, "x + 2 = 7."),
  num(S`Résous $\dfrac{x}{4}=\dfrac{9}{12}$.`, 3, "x = 4 · 3/4."),
  num(S`Résous $\dfrac{x+1}{3}=\dfrac{8}{6}$.`, 3, "x + 1 = 4."),
  mc(S`Quelle est la restriction de $\dfrac5{x-8}=2$?`, S`$x\ne8$`, [S`$x\ne-8$`, S`$x\ne5$`, S`$x\ne2$`], "x − 8 ≠ 0."),
  mc(S`Quelles sont les restrictions de $\dfrac1x+\dfrac1{x+3}=1$?`, S`$x\ne0,\ x\ne-3$`, [S`$x\ne3$`, S`$x\ne0$`, S`$x\ne1$`], "Chaque dénominateur doit être non nul."),
  tf("Une valeur qui annule un dénominateur ne peut jamais être une solution.", true, "L'expression n'y est pas définie."),
  fill("Une solution de l'équation sans dénominateur qui ne vérifie pas l'équation initiale s'appelle une racine ___.", ["étrangère", "etrangere", "racine étrangère", "une racine étrangère", "extraneous"], "Elle ne respecte pas une restriction."),
  tf(S`Pour résoudre $\dfrac{x-1}{x+2}>0$, tu peux multiplier les deux membres par $x+2$ sans changer le sens de l'inégalité.`, false, "x + 2 peut être négatif."),
  mc(S`Quelles sont les valeurs critiques de $\dfrac{x-6}{x+1}$?`, S`$x=6,\ x=-1$`, [S`$x=-6,\ x=1$`, S`$x=6$ seulement`, S`$x=1,\ x=6$`], "Zéros du numérateur et du dénominateur."),
  tf(S`Dans $\dfrac{x-2}{x+5}\ge0$, la valeur $x=-5$ fait partie de la solution.`, false, "L'expression n'y est pas définie."),
  tf(S`Dans $\dfrac{x-2}{x+5}\ge0$, la valeur $x=2$ fait partie de la solution.`, true, "La fraction vaut 0."),
  mc(S`Résous $\dfrac1{x}>0$.`, S`$x>0$`, [S`$x\lt0$`, S`$x\ne0$`, "tout x réel"], "Une réciproque positive exige x positif."),
  mc(S`Résous $\dfrac{-2}{x-1}>0$.`, S`$x\lt1$`, [S`$x>1$`, S`$x\ne1$`, S`$x>-2$`], "Le dénominateur doit être négatif."),
  mc(S`Résous $\dfrac{x-3}{x+1}\lt0$.`, S`$-1\lt x\lt3$`, [S`$x\lt-1$ ou $x>3$`, S`$x>3$`, S`$-3\lt x\lt1$`], "Signes contraires."),
  mc("Lis la solution de f(x) = 1 sur le graphique.", S`$x=3$`, [S`$x=1$`, S`$x=-3$`, S`$x=2$`], "La courbe rencontre y = 1 en x = 3.", planeDoc({ view: V, curves: [...rat((x) => 2 / (x - 1), [1], V), { f: () => 1, color: "green" }], points: [P(3, 1)], step: { x: 1, y: 1 } })),
  mc("D'après le graphique, résous f(x) > 0.", S`$x>2$`, [S`$x\lt2$`, S`$x>0$`, S`$x\ne2$`], "Au-dessus de l'axe des x, à droite de l'asymptote.", RG((x) => 3 / (x - 2), [2], V, 0)),
  num(S`Résous $x+\dfrac1x=2$.`, 1, "(x − 1)² = 0."),
  mc(S`Laquelle est une solution de $\dfrac{x}{x-1}=2$?`, S`$x=2$`, [S`$x=1$`, S`$x=0$`, S`$x=-2$`], "x = 2x − 2."),
];

export const M = [
  mc(S`Résous $\dfrac{x+3}{x-1}=\dfrac{x-4}{x+2}$.`, S`$x=-\tfrac15$`, [S`$x=\tfrac15$`, S`$x=-1$`, "aucune solution"], "x² + 5x + 6 = x² − 5x + 4 donne 10x = −2."),
  mc(S`Résous $x-\dfrac{12}x=1$.`, S`$x=4$ ou $x=-3$`, [S`$x=-4$ ou $x=3$`, S`$x=4$`, S`$x=12$ ou $x=1$`], "x² − x − 12 = 0."),
  mc(S`Résous $x+\dfrac{10}x=7$.`, S`$x=2$ ou $x=5$`, [S`$x=-2$ ou $x=-5$`, S`$x=7$`, S`$x=1$ ou $x=10$`], "x² − 7x + 10 = 0."),
  mc(S`Résous $\dfrac{2}{x-1}=\dfrac{x}{x-1}$.`, S`$x=2$`, [S`$x=1$`, S`$x=2$ ou $x=1$`, "aucune solution"], "x = 2; 2 ≠ 1, donc elle est valable."),
  mc(S`Résous $\dfrac{x}{x+4}=\dfrac{-4}{x+4}$.`, "aucune solution", [S`$x=-4$`, S`$x=4$`, S`$x=0$`], "x = −4 ne respecte pas la restriction."),
  num(S`Résous $\dfrac3x+\dfrac2x=1$.`, 5, "5/x = 1."),
  mc(S`Résous $\dfrac1{x-2}+\dfrac1{x+2}=\dfrac{4}{x^2-4}$.`, "aucune solution", [S`$x=2$`, S`$x=-2$`, S`$x=4$`], "2x = 4 donne x = 2, une valeur interdite."),
  mc(S`Résous $\dfrac{x-6}{x+2}\le0$.`, S`$(-2,6]$`, [S`$[-2,6]$`, S`$(-\infty,-2)\cup[6,\infty)$`, S`$(-2,6)$`], "Exclus −2, inclus 6."),
  mc(S`Résous $\dfrac{x+4}{x-3}\ge0$.`, S`$(-\infty,-4]\cup(3,\infty)$`, [S`$[-4,3)$`, S`$(-\infty,-4)\cup(3,\infty)$`, S`$[-4,3]$`], "Inclus −4, exclus 3."),
  mc(S`Résous $\dfrac{x+1}{x-2}\lt3$.`, S`$x\lt2$ ou $x>3.5$`, [S`$2\lt x\lt3.5$`, S`$x>3.5$`, S`$x\lt3.5$`], "(7 − 2x)/(x − 2) < 0."),
  mc(S`Résous $\dfrac{5}{x+1}\ge1$.`, S`$(-1,4]$`, [S`$[-1,4]$`, S`$(-\infty,4]$`, S`$(-1,\infty)$`], "(4 − x)/(x + 1) ≥ 0."),
  mc(S`Résous $\dfrac{x^2-1}{x}>0$.`, S`$-1\lt x\lt0$ ou $x>1$`, [S`$x\lt-1$ ou $0\lt x\lt1$`, S`$x>1$`, S`$-1\lt x\lt1$`], "Signes −, +, −, +."),
  mc(S`Résous $\dfrac{x}{x^2+1}\le0$.`, S`$x\le0$`, [S`$x\lt0$`, S`$x\ge0$`, "tout x réel"], "x² + 1 > 0 toujours."),
  mc(S`Résous $\dfrac{(x-1)^2}{x+2}>0$.`, S`$x>-2,\ x\ne1$`, [S`$x>-2$`, S`$x\lt-2$`, S`$x>1$`], "Un carré est positif sauf en x = 1."),
  num(S`Combien d'entiers vérifient $\dfrac{x-4}{x+1}\lt0$?`, 4, "−1 < x < 4 : 0, 1, 2, 3."),
  num(S`Quel est le plus petit entier de la solution de $\dfrac{x+3}{x-5}\le0$?`, -3, "[−3, 5)."),
  mc("Utilise les graphiques pour résoudre 4/x > x.", S`$x\lt-2$ ou $0\lt x\lt2$`, [S`$-2\lt x\lt0$ ou $x>2$`, S`$0\lt x\lt2$`, S`$x\lt2$`], "L'hyperbole y est au-dessus de la droite.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, curves: [...rat((x) => 4 / x, [0], { xmin: -6, xmax: 6 }), { f: (x) => x, color: "green" }], points: [P(2, 2), P(-2, -2)], step: { x: 1, y: 1 } })),
  mc("Utilise le graphique pour résoudre f(x) ≤ 2.", S`$x\lt-1$ ou $x\ge1$`, [S`$-1\lt x\le1$`, S`$x\ge1$`, S`$x\le1$`], "La courbe y est sur la droite y = 2 ou au-dessous.", planeDoc({ view: V, curves: [...rat((x) => 4 / (x + 1), [-1], V), { f: () => 2, color: "green" }], points: [P(1, 2)], step: { x: 1, y: 1 } })),
  tf(S`$\dfrac{x-1}{x-1}=1$ est vraie pour tout nombre réel.`, false, "Pas en x = 1."),
  tf(S`L'équation $\dfrac{x+2}{x}=\dfrac{4}{x}+1$ n'a pas de solution.`, true, "x + 2 = 4 + x n'est jamais vraie."),
];
