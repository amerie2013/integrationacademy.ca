// 4.8 Forme générale et forme fonctionnelle — 20 questions difficiles
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TITLE } from "../l4_8.mjs";

export const TOPIC = TITLE;
export const Q = [
  num(String.raw`La droite $kx+3y-12=0$ passe par $(2,6)$. Trouve k.`, -3, "2k + 18 − 12 = 0."),
  num(String.raw`La droite $2x+By+C=0$ a une abscisse à l'origine de $5$ et une ordonnée à l'origine de $-2$. Que vaut B?`, -5, "Abscisse à l'origine : 2(5) + C = 0 → C = −10; ordonnée à l'origine : −2B − 10 = 0 → B = −5."),
  mx(String.raw`Écris $\frac{x}{3}+\frac{y}{4}=1$ sous la forme fonctionnelle.`, "(-4/3)*x+4", "×12 : 4x + 3y = 12."),
  num(String.raw`Trouve l'aire du triangle formé par $4x-3y+24=0$ et les axes.`, 24, "Coordonnées à l'origine −6 et 8 : ½ × 6 × 8."),
  ms(String.raw`Quelles droites sont parallèles à $6x-3y+2=0$? Choisis toutes les bonnes réponses.`, [String.raw`$2x-y+7=0$`, String.raw`$y=2x-1$`, String.raw`$4x+2y-1=0$`, String.raw`$x-\frac12y=0$`, String.raw`$y=-2x$`], [0, 1, 3], "Pente 2."),
  num(`Les laissez-passer pour adultes coûtent 25 dollars et ceux pour jeunes 15 dollars; les ventes totales sont de 1400 dollars. Si on a vendu 3 fois plus de laissez-passer pour jeunes que pour adultes, combien de laissez-passer pour adultes a-t-on vendus?`, 20, "25a + 15(3a) = 1400 → 70a = 1400."),
  num(`Réécris 0.2x − 0.5y + 1.5 = 0 avec des coefficients entiers, A > 0 et sous forme irréductible : Ax + By + C = 0. Que vaut C?`, 15, "×10 : 2x − 5y + 15 = 0."),
  mc(`Quelle forme permet de trouver le plus rapidement les deux coordonnées à l'origine?`, "la forme générale Ax + By + C = 0", ["la forme fonctionnelle", "une table qui commence à x = 1", "une liste de pentes"], "On pose directement x = 0 ou y = 0."),
  num(String.raw`La droite $Ax-4y+8=0$ est parallèle à $y=\frac34x$. Trouve A.`, 3, "A/4 = 3/4."),
  num(String.raw`Pour quelle valeur de C la droite $3x+2y+C=0$ passe-t-elle par $(-2,5)$?`, -4, "−6 + 10 + C = 0."),
  tf(String.raw`Si $C=0$ dans $Ax+By+C=0$, la droite passe par l'origine.`, true, "(0, 0) donne 0 = 0."),
  num(String.raw`La droite $x-2y+k=0$ a une ordonnée à l'origine de $3$. Quelle est son abscisse à l'origine?`, -6, "x = 0 : −6 + k = 0 → k = 6; y = 0 : x = −6."),
  mx(String.raw`Écris sous la forme fonctionnelle la droite donnée sous la forme générale $5x+4y-2=0$.`, "-1.25*x+0.5", "4y = −5x + 2."),
  num(`Une boulangerie utilise 2 tasses de farine par pain et 1.5 tasse par fournée de muffins, et dispose de 60 tasses : 2l + 1.5m = 60. Quelle est la coordonnée à l'origine sur l'axe des m?`, 40, "1.5m = 60."),
  ms(`Le graphique montre une droite. Quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["sa forme générale est 3x + 2y − 12 = 0", "sa pente est −1.5", "elle passe par (2, 3)", "son abscisse à l'origine est 6"], [0, 1, 2], "Coordonnées à l'origine (4, 0) et (0, 6); abscisse à l'origine 4.", planeDoc({ view: { xmin: -2, xmax: 7, ymin: -2, ymax: 8 }, lines: [{ m: -1.5, b: 6 }], points: [{ x: 4, y: 0 }, { x: 0, y: 6 }], step: { x: 1, y: 1 } })),
  num(String.raw`Trouve la distance entre le point d'abscisse à l'origine et le point d'ordonnée à l'origine de $3x+4y-24=0$.`, 10, "(8, 0) et (0, 6) : √(64 + 36)."),
  mc(String.raw`Quelle équation ne peut pas s'écrire sous la forme $y=mx+b$?`, String.raw`$4x-12=0$`, [String.raw`$4y-12=0$`, String.raw`$x+y=0$`, String.raw`$2x-y+1=0$`], "x = 3 est verticale."),
  num(String.raw`Les droites $2x+y-7=0$ et $x-y-2=0$ se coupent. Quelle est l'abscisse du point d'intersection?`, 3, "Additionne : 3x − 9 = 0."),
  num(String.raw`Quelle est l'ordonnée du point d'intersection de $2x+y-7=0$ et de $x-y-2=0$?`, 1, "y = x − 2."),
  tf(String.raw`$y=-\frac{A}{B}x-\frac{C}{B}$ est la forme fonctionnelle de $Ax+By+C=0$ (B ≠ 0).`, true, "Isole y."),
];
