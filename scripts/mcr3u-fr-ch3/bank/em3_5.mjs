// 3.5 Résoudre des équations du second degré — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { P, graph } from "./fig.mjs";

const V8 = { xmin: -8, xmax: 8, ymin: -10, ymax: 8 };

export const E = [
  num(String.raw`Trouve la plus grande racine de $x^2-9x+20=0$.`, 5, "(x − 4)(x − 5)."),
  num(String.raw`Trouve la plus petite racine de $x^2+x-12=0$.`, -4, "(x + 4)(x − 3)."),
  num(String.raw`Trouve la racine positive de $x^2=49$.`, 7, "±7."),
  num(String.raw`Résous $(x-6)^2=0$.`, 6, "Une racine double."),
  num(String.raw`Trouve la racine positive de $3x^2=75$.`, 5, "x² = 25."),
  mc("Quelle est la formule quadratique?", String.raw`$x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$`, [String.raw`$x=\frac{b\pm\sqrt{b^2-4ac}}{2a}$`, String.raw`$x=\frac{-b\pm\sqrt{b^2+4ac}}{2a}$`, String.raw`$x=-b\pm\frac{\sqrt{b^2-4ac}}{2a}$`], "Tout le numérateur est divisé par 2a."),
  num(String.raw`Pour $x^2-5x+3=0$, quelle est la valeur de $b^2-4ac$?`, 13, "25 − 12."),
  num(String.raw`Trouve la racine positive de $x^2-2x-15=0$.`, 5, "(x − 5)(x + 3)."),
  num(String.raw`Trouve la plus grande racine de $2x^2-7x+3=0$.`, 3, "(2x − 1)(x − 3)."),
  tf(String.raw`$x^2+4=0$ a des racines réelles.`, false, "x² = −4."),
  num(String.raw`La hauteur d'une pierre est $h(t)=-5t^2+45$. Quand touche-t-elle le sol?`, 3, "t² = 9."),
  num("Un carré a une aire de 81 m². Quelle est la longueur de son côté?", 9, "√81."),
  num(String.raw`Trouve la plus grande racine de $x(x-8)=0$.`, 8, "x = 0 ou 8."),
  mc(String.raw`Écris $x^2=3x+10$ sous forme générale.`, String.raw`$x^2-3x-10=0$`, [String.raw`$x^2+3x+10=0$`, String.raw`$x^2-3x+10=0$`, String.raw`$x^2+3x-10=0$`], "Déplace tous les termes à gauche."),
  num("Un rectangle mesure 2 m de plus en longueur qu'en largeur et a une aire de 48 m². Quelle est sa largeur?", 6, "w(w + 2) = 48."),
  num(String.raw`Trouve la racine positive de $x^2+5x-14=0$.`, 2, "(x + 7)(x − 2)."),
  num(String.raw`Résous $4x^2-12x+9=0$.`, 1.5, "(2x − 3)².", null, 0.001),
  tf("Dans un problème portant sur le temps, une racine négative est rejetée.", true, "Le temps après le lancer n'est pas négatif."),
  num("Lis le graphique : quelle est la plus grande solution de x² − 2x − 8 = 0?", 4, "Elle coupe l'axe en −2 et en 4.", graph((x) => x * x - 2 * x - 8, { xmin: -5, xmax: 7, ymin: -10, ymax: 8 }, [P(-2, 0), P(4, 0)])),
  num("Le graphique montre h(t) = −5t² + 10t + 15. Quand l'objet touche-t-il le sol?", 3, "t² − 2t − 3 = 0.", graph((t) => -5 * t * t + 10 * t + 15, { xmin: 0, xmax: 4, ymin: 0, ymax: 22 }, [P(3, 0)], { a: 0, step: { x: 0.5, y: 2 } })),
];

export const M = [
  num(String.raw`Trouve la plus grande racine de $x^2-4x-1=0$ (au millième).`, 2 + Math.sqrt(5), "2 ± √5.", null, 0.002),
  num(String.raw`Trouve la plus petite racine de $2x^2+3x-2=0$.`, -2, "(2x − 1)(x + 2)."),
  num(String.raw`Trouve la plus grande racine de $3x^2-5x-1=0$ (au millième).`, (5 + Math.sqrt(37)) / 6, "(5 ± √37)/6.", null, 0.002),
  num(String.raw`Trouve la racine positive de $x(x-5)=14$.`, 7, "x² − 5x − 14 = 0."),
  num(String.raw`$h(t)=-4.9t^2+19.6t+24.5$. Quand le ballon touche-t-il le sol?`, 5, "−4.9(t² − 4t − 5)."),
  num("La longueur d'un rectangle mesure 6 m de plus que sa largeur et son aire est de 72 m². Trouve la largeur.", 6, "w(w + 6) = 72."),
  num(String.raw`Le profit est $P(x)=-x^2+12x-20$. Trouve le plus grand seuil de rentabilité.`, 10, "(x − 2)(x − 10)."),
  mc(String.raw`Quelles sont les racines exactes de $x^2-6x+7=0$?`, String.raw`$3\pm\sqrt2$`, [String.raw`$3\pm\sqrt7$`, String.raw`$6\pm\sqrt2$`, String.raw`$-3\pm\sqrt2$`], "(x − 3)² = 2."),
  num("Deux entiers positifs consécutifs ont un produit de 156. Quel est le plus petit?", 12, "n(n + 1) = 156."),
  num("Un triangle rectangle a des côtés de l'angle droit x et x + 2 et une hypoténuse de 10. Trouve x.", 6, "x² + 2x − 48 = 0."),
  num(String.raw`Trouve la racine positive de $(x+1)^2=2x+10$.`, 3, "x² = 9."),
  num(String.raw`Trouve la racine positive de $0.5x^2+x-4=0$.`, 2, "×2 : x² + 2x − 8 = 0."),
  tf(String.raw`À partir de $(x-3)(x+2)=6$, on peut conclure que $x-3=6$ ou $x+2=6$.`, false, "La propriété du produit nul exige 0 dans le membre de droite."),
  num(String.raw`$h(t)=-5t^2+25t$. Pendant combien de secondes le ballon est-il au-dessus de 20 m?`, 3, "t² − 5t + 4 = 0 → 1 et 4."),
  ms("Quelles équations ont x = 3 comme racine? Choisis toutes les bonnes réponses.", [String.raw`$x^2-9=0$`, String.raw`$x^2-6x+9=0$`, String.raw`$x^2+3x=0$`, String.raw`$2x^2-5x-3=0$`], [0, 1, 3], "Substitue 3."),
  num(String.raw`Quelle est la somme des racines de $x^2-11x+24=0$?`, 11, "3 + 8."),
  num(String.raw`Trouve la plus grande racine de $5x^2-2x-3=0$.`, 1, "(5x + 3)(x − 1)."),
  num(String.raw`Trouve la plus grande racine de $2x^2-x-4=0$ (au millième).`, (1 + Math.sqrt(33)) / 4, "(1 ± √33)/4.", null, 0.002),
  num("Lis le graphique de y = x² + 2x − 4 : estime le zéro positif (au centième).", -1 + Math.sqrt(5), "x = −1 ± √5.", graph((x) => x * x + 2 * x - 4, V8, [P(-1 + Math.sqrt(5), 0, false)]), 0.01),
  num("Le graphique montre h(t) = −4.9t² + 9.8t + 14.7. Quand touche-t-il le sol?", 3, "t² − 2t − 3 = 0.", graph((t) => -4.9 * t * t + 9.8 * t + 14.7, { xmin: 0, xmax: 3.5, ymin: 0, ymax: 22 }, [P(3, 0)], { a: 0, step: { x: 0.5, y: 2 } })),
];
