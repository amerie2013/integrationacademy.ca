// 4.5 Tracer des droites particulières (droites particulières et inéquations linéaires) — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, FIG } from "./fig.mjs";

export const E = [
  mc(String.raw`Le graphique de $y=-3$ est…`, "une droite horizontale", ["une droite verticale", "une droite qui passe par l'origine", "une courbe"], "y vaut toujours −3."),
  mc(String.raw`Le graphique de $x=5$ est…`, "une droite verticale", ["une droite horizontale", "une droite de pente 5", "un point"], "x vaut toujours 5."),
  num(String.raw`Quelle est la pente de $y=8$?`, 0, "Horizontale : montée 0."),
  tf(String.raw`La pente de $x=-2$ n'est pas définie.`, true, "Verticale : course 0."),
  mc(`Quelle droite passe par l'origine?`, String.raw`$y=-4x$`, [String.raw`$y=x-4$`, String.raw`$y=4$`, String.raw`$x=4$`], "b = 0."),
  mc(String.raw`L'équation de la droite horizontale passant par $(2,7)$ est…`, String.raw`$y=7$`, [String.raw`$x=2$`, String.raw`$y=2$`, String.raw`$x=7$`], "Tous les points ont y = 7."),
  mc(String.raw`L'équation de la droite verticale passant par $(2,7)$ est…`, String.raw`$x=2$`, [String.raw`$y=7$`, String.raw`$y=2x$`, String.raw`$x=7$`], "Tous les points ont x = 2."),
  tf(String.raw`$(3,5)$ est une solution de $y>x+1$.`, true, "5 > 4."),
  tf(String.raw`$(3,4)$ est une solution de $y>x+1$.`, false, "4 > 4 est faux."),
  mc(String.raw`Pour $y<2x+1$, la droite frontière est…`, "pointillée", ["pleine", "non tracée", "verticale"], "Inégalité stricte."),
  mc(String.raw`Pour $y\ge2x+1$, la droite frontière est…`, "pleine", ["pointillée", "non tracée", "horizontale"], "Comprend l'égalité."),
  mc(String.raw`Pour $y>-x+3$, quel côté est ombré?`, "au-dessus de la droite", ["au-dessous de la droite", "sur la droite seulement", "à gauche seulement"], "y > … ombre au-dessus."),
  num(String.raw`$(0,0)$ est-il une solution de $y\le3x+2$? Tape 1 pour oui, 0 pour non.`, 1, "0 ≤ 2."),
  mc(`Un thermostat garde une pièce à 20 °C. Le graphique de la température en fonction du temps est…`, "une droite horizontale", ["une droite verticale", "une droite montante", "une courbe"], "T = 20."),
  num(`Les raisins coûtent 3.50 dollars le kg. Quel est le coût de 4 kg (dollars)?`, 14, "C = 3.5k : variation directe."),
  tf(`Une variation directe passe toujours par (0, 0).`, true, "b = 0."),
  mc(`Laquelle correspond au graphique?`, String.raw`$y>x$`, [String.raw`$y<x$`, String.raw`$y\ge x$`, String.raw`$y=x$`], "Droite pointillée y = x, ombrée au-dessus.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 1, b: 0, dash: true }], shade: { m: 1, b: 0, above: true } })),
  num(String.raw`Quelle est l'ordonnée à l'origine de $y=-6$?`, -6, "La droite coupe l'axe des y à −6."),
  tf(String.raw`$y=2$ et $x=2$ sont perpendiculaires.`, true, "Horizontale et verticale."),
  mc(String.raw`Quel point est sur la droite $x=-3$?`, String.raw`$(-3,10)$`, [String.raw`$(10,-3)$`, String.raw`$(3,-3)$`, String.raw`$(0,-3)$`], "x doit valoir −3."),
];

export const M = [
  mc(String.raw`Quelle inéquation décrit la région ombrée?`, String.raw`$y\le-2x+4$`, [String.raw`$y<-2x+4$`, String.raw`$y\ge-2x+4$`, String.raw`$y>-2x+4$`], "Droite pleine, ombrée au-dessous.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: -2, b: 4 }], shade: { m: -2, b: 4, above: false } })),
  ms(String.raw`Quels points vérifient $y\ge\frac12x-1$? Choisis toutes les bonnes réponses.`, ["(0, 0)", "(4, 1)", "(4, 0)", "(−2, −3)", "(6, 2)"], [0, 1, 4], "(4, 1) : 1 ≥ 1 ✓; (4, 0) : 0 ≥ 1 ✗; (−2, −3) : −3 ≥ −2 ✗; (6, 2) : 2 ≥ 2 ✓."),
  mc(String.raw`Réécris $2x+y<6$ sous la forme d'une inéquation en y.`, String.raw`$y<-2x+6$`, [String.raw`$y>-2x+6$`, String.raw`$y<2x+6$`, String.raw`$y<-2x-6$`], "Soustrais 2x."),
  mc(String.raw`Réécris $-y>3x-1$ sous la forme d'une inéquation en y.`, String.raw`$y<-3x+1$`, [String.raw`$y>-3x+1$`, String.raw`$y<3x-1$`, String.raw`$y>3x+1$`], "Multiplie par −1 et inverse le sens."),
  num(String.raw`Les billets coûtent 8 dollars et les collations 3 dollars; $8t+3s\le60$. Avec 6 billets, combien de collations au plus?`, 4, "48 + 3s ≤ 60 → s ≤ 4."),
  tf(String.raw`Les points d'une droite frontière pointillée sont des solutions de l'inéquation.`, false, "Pointillée signifie non incluse."),
  num(String.raw`La région $x>-1$ et $x<4$ contient combien de valeurs entières de x?`, 4, "0, 1, 2, 3."),
  mc(`Quelle équation décrit tous les points situés 3 unités sous l'axe des x?`, String.raw`$y=-3$`, [String.raw`$x=-3$`, String.raw`$y=3$`, String.raw`$y=-3x$`], "Tous les points ont y = −3."),
  num(String.raw`Les droites $x=4$, $x=-2$, $y=1$ et $y=6$ forment un rectangle. Quelle est son aire?`, 30, "6 × 5."),
  num(`Les droites $x=4$, $x=-2$, $y=1$ et $y=6$ forment un rectangle. Quel est son périmètre?`, 22, "2(6 + 5)."),
  ms(String.raw`Quelles descriptions conviennent à $y=-\frac25x$? Choisis toutes les bonnes réponses.`, ["variation directe", "passe par (5, −2)", "descend vers la droite", "horizontale", "ordonnée à l'origine 2"], [0, 1, 2], "b = 0, pente −2/5."),
  mc(String.raw`Un budget : $5x+2y\le40$. Laquelle n'est PAS possible?`, "x = 6, y = 6", ["x = 4, y = 10", "x = 0, y = 20", "x = 8, y = 0"], "30 + 12 = 42 > 40."),
  num(String.raw`Quelle est l'abscisse à l'origine de la frontière de $3x+4y\le24$?`, 8, "y = 0 : 3x = 24."),
  num(String.raw`Quelle est l'ordonnée à l'origine de la frontière de $3x+4y\le24$?`, 6, "x = 0 : 4y = 24."),
  tf(String.raw`On peut utiliser $(0,0)$ comme point test pour $y>3x$.`, false, "(0, 0) est sur la frontière; choisis un autre point."),
  mc(String.raw`Pour $y<-1$, la région ombrée est…`, "au-dessous de la droite horizontale y = −1", ["au-dessus de y = −1", "à gauche de x = −1", "à droite de x = −1"], "Au-dessous d'une droite horizontale pointillée."),
  num(`L'essence coûte 1.70 dollar le litre. Combien de litres peux-tu acheter avec 51 dollars?`, 30, "1.7L = 51."),
  mc(String.raw`Quelle inéquation a la frontière $y=x+2$ tracée pleine et la région au-dessus ombrée?`, String.raw`$y\ge x+2$`, [String.raw`$y>x+2$`, String.raw`$y\le x+2$`, String.raw`$y<x+2$`], "Pleine : ≥ ou ≤; au-dessus : ≥.", FIG.ineq),
  num(String.raw`Combien des points $(1,1)$, $(2,5)$, $(-1,0)$, $(3,4)$ vérifient $y>2x-1$?`, 2, "(1,1) : 1 > 1 ✗; (2,5) ✓; (−1,0) ✓; (3,4) : 4 > 5 ✗."),
  ms(`Quelles droites sont perpendiculaires à y = 4? Choisis toutes les bonnes réponses.`, ["x = −1", "x = 7", "y = −4", "y = 4x"], [0, 1], "Les droites verticales."),
];
