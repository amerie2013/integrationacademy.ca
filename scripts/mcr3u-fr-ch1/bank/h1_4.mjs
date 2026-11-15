// 1.4 Domaine et image — 20 questions difficiles (miroir de ../../mcr3u-ch1/bank/h1_4.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

export const TOPIC = "1.4 Domaine et image";
export const Q = [
  num(String.raw`$f(x)=x^2-4x+7$ sur $0\le x\le5$. Quelle est la plus grande valeur de l'image?`, 12, "f(0) = 7, f(5) = 12, valeur au sommet 3.", graph((x) => x * x - 4 * x + 7, { xmin: -1, xmax: 6, ymin: 0, ymax: 14 }, [P(0, 7), P(2, 3), P(5, 12)], { a: 0, b: 5, step: { x: 1, y: 2 } })),
  num(String.raw`$f(x)=x^2-4x+7$ sur $0\le x\le5$. Quelle est la plus petite valeur de l'image?`, 3, "Le sommet (2, 3) est dans l'intervalle."),
  mc(String.raw`Quel est le domaine de $f(x)=\sqrt{x^2-9}$?`, String.raw`$x\le-3$ ou $x\ge3$`, [String.raw`$-3\le x\le3$`, String.raw`$x\ge3$`, String.raw`$x\ge9$`], "x² ≥ 9."),
  num(String.raw`Le domaine de $\sqrt{x+4}+\sqrt{6-x}$ est un intervalle. Quelle est sa longueur?`, 10, "−4 ≤ x ≤ 6."),
  num(String.raw`Quelle est la plus grande valeur de $\frac{8}{x^2+2}$?`, 4, "Maximale en x = 0."),
  mc(String.raw`Quelle est l'image de $f(x)=\frac{x^2+1}{x^2}$?`, String.raw`$y>1$`, [String.raw`$y\ge1$`, String.raw`$y>0$`, String.raw`$y\ne0$`], "f(x) = 1 + 1/x² avec 1/x² > 0."),
  num("Une agricultrice dispose de 100 m de clôture pour trois côtés d'un enclos appuyé contre une grange : A(w) = w(100 − 2w). Quelle est la plus grande aire possible (m²)?", 1250, "Zéros 0 et 50; sommet en w = 25 : 25 × 50."),
  num(String.raw`La hauteur d'une balle est $h(t)=-4.9t^2+24.5t$. Quelle est la longueur de l'intervalle du domaine (en s)?`, 5, "t(24.5 − 4.9t) = 0 → t = 5."),
  mc("Domaine et image de la fonction représentée?", String.raw`$x\le4$; $y\le2$`, [String.raw`$x\ge4$; $y\ge2$`, String.raw`$x\le4$; $y\ge2$`, String.raw`$x\ge-4$; $y\le2$`], "y = −√(4 − x) + 2 commence en (4, 2) et va vers la gauche et vers le bas.", graph((x) => -Math.sqrt(4 - x) + 2, { xmin: -8, xmax: 6, ymin: -6, ymax: 4 }, [P(4, 2)], { b: 4 })),
  num(String.raw`$f(x)=x^2$ de domaine $-3\le x\le1$. Quelle est la plus grande valeur de l'image?`, 9, "En x = −3."),
  num(String.raw`$f(x)=x^2$ de domaine $-3\le x\le1$. Quelle est la plus petite valeur de l'image?`, 0, "x = 0 appartient au domaine."),
  mc(String.raw`Quelle fonction a pour domaine $x\ne3$ et pour image $y\ne-2$?`, String.raw`$y=\frac1{x-3}-2$`, [String.raw`$y=\frac1{x+3}-2$`, String.raw`$y=\frac1{x-2}+3$`, String.raw`$y=\frac1{x+2}-3$`], "Asymptotes x = 3, y = −2."),
  ms(String.raw`Quelles fonctions ont pour image $y\ge0$? Choisis toutes les bonnes réponses.`, [String.raw`$|x-5|$`, String.raw`$\sqrt{x+3}$`, String.raw`$(x-1)^2$`, String.raw`$x^2-1$`, String.raw`$-|x|$`], [0, 1, 2], "x² − 1 ≥ −1; −|x| ≤ 0."),
  num(String.raw`Combien de valeurs de x sont exclues du domaine de $\frac1{x^3-4x}$?`, 3, "x(x − 2)(x + 2) = 0."),
  num("Un rectangle a sa base sur l'axe des x et ses sommets supérieurs sur y = 9 − x². Son aire est A(x) = 2x(9 − x²). Quel est le plus grand x du domaine?", 3, "Il faut 9 − x² > 0 et x > 0 : 0 < x < 3.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 9 - x * x, color: "violet" }], segs: [{ pts: [[-2, 0], [-2, 5], [2, 5], [2, 0]], color: "green" }], points: [P(2, 5, "(x, 9 − x²)")] })),
  mc(String.raw`Un réservoir contient $V(t)=600-40t$ litres jusqu'à ce qu'il soit vide. Domaine et image?`, String.raw`$0\le t\le15$; $0\le V\le600$`, [String.raw`$t\ge0$; $V\le600$`, String.raw`$0\le t\le600$; $0\le V\le15$`, String.raw`$t\in\mathbb R$; $V\in\mathbb R$`], "Vide lorsque 40t = 600."),
  num(String.raw`Quel est le plus petit entier de l'image de $f(x)=\sqrt{x-1}+2.5$?`, 3, "Image y ≥ 2.5."),
  tf("Si le domaine d'une fonction est l'ensemble des nombres réels, son image doit être l'ensemble des nombres réels.", false, "y = x² a pour domaine ℝ, mais pour image y ≥ 0."),
  num("La fonction représentée est formée de segments. Quelle est la différence entre la plus grande et la plus petite valeur de son image?", 7, "Image −2 ≤ y ≤ 5.", planeDoc({ view: { xmin: -6, xmax: 7, ymin: -4, ymax: 7 }, segs: [{ pts: [[-4, 1], [-1, 5], [2, -2], [5, 0]] }], points: [P(-4, 1), P(-1, 5), P(2, -2), P(5, 0)] })),
  mc(String.raw`Quelle fonction du second degré a pour image $y\ge-3$ et pour zéros $1$ et $5$?`, String.raw`$y=\tfrac34(x-3)^2-3$`, [String.raw`$y=(x-3)^2-3$`, String.raw`$y=-\tfrac34(x-3)^2-3$`, String.raw`$y=\tfrac34(x+3)^2-3$`], "Sommet (3, −3); 4a − 3 = 0 → a = 3/4."),
];
