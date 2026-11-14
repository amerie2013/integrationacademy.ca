// 4.8 Forme générale et forme fonctionnelle — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  mc(`Quelle équation est sous la forme générale?`, String.raw`$2x-y+5=0$`, [String.raw`$y=2x+5$`, String.raw`$y-5=2x$`, String.raw`$2x=y-5$`], "Ax + By + C = 0."),
  mx(String.raw`Écris $x+y-6=0$ sous la forme fonctionnelle.`, "-x+6", "y = −x + 6."),
  num(String.raw`Quelle est la pente de $x+y-6=0$?`, -1, "y = −x + 6."),
  num(String.raw`Quelle est l'ordonnée à l'origine de $3x+y-4=0$?`, 4, "y = −3x + 4."),
  num(String.raw`Quelle est l'abscisse à l'origine de $2x+y-8=0$?`, 4, "y = 0 : 2x = 8."),
  num(String.raw`Quelle est l'ordonnée à l'origine de $2x+y-8=0$?`, 8, "x = 0 : y = 8."),
  mc(String.raw`Laquelle est $y=4x-3$ sous la forme générale?`, String.raw`$4x-y-3=0$`, [String.raw`$4x+y-3=0$`, String.raw`$-4x+y+3=0$`, String.raw`$4x-y+3=0$`], "Amène tous les termes d'un côté; A positif."),
  tf(String.raw`Dans la forme générale, A devrait être positif.`, true, "Convention : A ≥ 0."),
  num(String.raw`Quelle est l'abscisse à l'origine de $x-3y+6=0$?`, -6, "y = 0 : x = −6."),
  num(String.raw`Quelle est l'ordonnée à l'origine de $x-3y+6=0$?`, 2, "x = 0 : −3y = −6."),
  mx(String.raw`Écris $4x+2y-10=0$ sous la forme fonctionnelle.`, "-2*x+5", "2y = −4x + 10."),
  mc(`Pour trouver l'abscisse à l'origine d'une droite, on pose…`, "y = 0", ["x = 0", "y = x", "la pente égale à 0"], "L'axe des x est y = 0."),
  num(String.raw`Quelle est la pente de $6x-2y+1=0$?`, 3, "−A/B = −6/(−2)."),
  tf(String.raw`$y=2x+1$ et $2x-y+1=0$ sont la même droite.`, true, "Réarrange la deuxième : y = 2x + 1."),
  mc(String.raw`Laquelle est $y=\frac12x+3$ sous la forme générale?`, String.raw`$x-2y+6=0$`, [String.raw`$x+2y-6=0$`, String.raw`$2x-y+3=0$`, String.raw`$x-2y-6=0$`], "×2 : 2y = x + 6."),
  num(String.raw`Trouve l'abscisse à l'origine de $5x-10=0$ (une droite verticale).`, 2, "x = 2."),
  mc(String.raw`La droite $x-7=0$ est…`, "verticale", ["horizontale", "passe par l'origine", "de pente 7"], "x = 7."),
  num(`Une école vend des billets pour adultes à 10 dollars et pour enfants à 5 dollars afin d'amasser 400 dollars : 10a + 5c = 400. Si on ne vend aucun billet pour enfants, combien de billets pour adultes faut-il?`, 40, "10a = 400."),
  num(`Une école amasse 400 dollars avec des billets pour adultes (10 dollars) et pour enfants (5 dollars) : 10a + 5c = 400. Combien de billets pour enfants faut-il si on ne vend aucun billet pour adultes?`, 80, "5c = 400."),
  tf(String.raw`Toute droite peut s'écrire sous la forme fonctionnelle.`, false, "Les droites verticales ne le peuvent pas."),
];

export const M = [
  mc(String.raw`Écris $y=-\frac23x+4$ sous la forme générale.`, String.raw`$2x+3y-12=0$`, [String.raw`$2x-3y+12=0$`, String.raw`$-2x+3y-12=0$`, String.raw`$2x+3y+12=0$`], "×3 : 3y = −2x + 12."),
  num(String.raw`Quelle est la pente de $3x+4y-12=0$? (nombre décimal)`, -0.75, "−3/4.", null, 0.001),
  num(String.raw`Quelle est l'ordonnée à l'origine de $3x+4y-12=0$?`, 3, "−C/B = 12/4."),
  ms(String.raw`Lesquelles sont la même droite que $y=3x-2$? Choisis toutes les bonnes réponses.`, [String.raw`$3x-y-2=0$`, String.raw`$6x-2y-4=0$`, String.raw`$3x+y-2=0$`, String.raw`$-3x+y+2=0$`], [0, 1, 3], "Multiplier par une constante donne la même droite."),
  num(String.raw`Pour $5x-2y+20=0$, quelle est l'abscisse à l'origine?`, -4, "5x = −20."),
  num(String.raw`Pour $5x-2y+20=0$, quelle est l'ordonnée à l'origine?`, 10, "−2y = −20."),
  mx(String.raw`Écris $5x-2y+20=0$ sous la forme fonctionnelle.`, "2.5*x+10", "y = 2.5x + 10."),
  mc(`Le graphique montre une droite. Quelle est son équation?`, String.raw`$x+2y-4=0$`, [String.raw`$2x+y-4=0$`, String.raw`$x-2y-4=0$`, String.raw`$x+2y+4=0$`], "Coordonnées à l'origine (4, 0) et (0, 2).", planeDoc({ view: { xmin: -2, xmax: 6, ymin: -2, ymax: 6 }, lines: [{ m: -0.5, b: 2 }], points: [{ x: 4, y: 0 }, { x: 0, y: 2 }], step: { x: 1, y: 1 } })),
  num(String.raw`$kx+2y-8=0$ a une pente de $-3$. Trouve k.`, 6, "−k/2 = −3."),
  num(String.raw`$3x+By-6=0$ a une ordonnée à l'origine de $-2$. Trouve B.`, -3, "−C/B = 6/B = −2."),
  tf(String.raw`L'abscisse à l'origine de $Ax+By+C=0$ est $-\frac{C}{A}$ (pour A ≠ 0).`, true, "y = 0 : Ax = −C."),
  num(`Un club vend des hot-dogs (3 dollars) et des boissons (2 dollars) pour exactement 240 dollars : 3h + 2d = 240. Avec 50 hot-dogs, combien de boissons?`, 45, "150 + 2d = 240."),
  mc(String.raw`Quelle droite a une ordonnée à l'origine mais pas d'abscisse à l'origine?`, String.raw`$y-5=0$`, [String.raw`$x-5=0$`, String.raw`$x+y-5=0$`, String.raw`$x-y=0$`], "y = 5 est horizontale (pas sur l'axe)."),
  num(String.raw`Écris $y=0.4x-1.2$ sous la forme générale avec des entiers : $Ax+By+C=0$, $A=2$. Que vaut C?`, -6, "×5 : 5y = 2x − 6 → 2x − 5y − 6 = 0."),
  ms(String.raw`Pour $4x-6y+18=0$, quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["pente 2/3", "ordonnée à l'origine 3", "abscisse à l'origine −4.5", "elle passe par (0, −3)"], [0, 1, 2], "y = (2/3)x + 3."),
  num(String.raw`Trouve l'aire du triangle formé par $3x+5y-30=0$ et les axes.`, 30, "Coordonnées à l'origine 10 et 6 : ½ × 10 × 6."),
  mx(String.raw`Écris la droite passant par $(0,4)$ et $(6,0)$ sous la forme fonctionnelle.`, "(-2/3)*x+4", "m = −4/6."),
  mc(`Écris la droite passant par (0, 4) et (6, 0) sous la forme générale.`, String.raw`$2x+3y-12=0$`, [String.raw`$3x+2y-12=0$`, String.raw`$2x-3y+12=0$`, String.raw`$2x+3y+12=0$`], "m = −2/3, donc y = −(2/3)x + 4; ×3 : 3y = −2x + 12."),
  tf(String.raw`$2x-4y+8=0$ et $x-2y+4=0$ représentent la même droite.`, true, "La première est 2 × la deuxième."),
  num(String.raw`Quelle est l'abscisse à l'origine de $7x-21=0$?`, 3, "x = 3."),
];
