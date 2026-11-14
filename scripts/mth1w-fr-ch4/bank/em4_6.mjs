// 4.6 Transformations de droites — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";

export const E = [
  mc(String.raw`Quel est le lien entre $y=x+6$ et $y=x$?`, "translation de 6 vers le haut", ["translation de 6 vers le bas", "rotation, plus inclinée", "réflexion"], "b : 0 → 6."),
  mc(String.raw`Quel est le lien entre $y=x-4$ et $y=x$?`, "translation de 4 vers le bas", ["translation de 4 vers le haut", "rotation", "réflexion"], "b : 0 → −4."),
  mc(String.raw`Quel est le lien entre $y=3x$ et $y=x$?`, "plus inclinée (rotation autour de l'origine)", ["translation de 3 vers le haut", "moins inclinée", "réflexion"], "m : 1 → 3."),
  mc(String.raw`Quel est le lien entre $y=-x$ et $y=x$?`, "réflexion par rapport à l'axe des y", ["translation vers le bas", "plus inclinée", "la même droite"], "Le signe de m change."),
  tf(`Changer b dans y = mx + b change la pente.`, false, "Seule l'ordonnée à l'origine change."),
  tf(`Changer m garde la même ordonnée à l'origine.`, true, "La droite pivote autour de (0, b)."),
  mx(String.raw`Fais subir à $y=2x+1$ une translation de $5$ vers le haut. Écris la nouvelle équation.`, "2*x+6", "b : 1 → 6."),
  mx(String.raw`Fais subir à $y=-3x+2$ une translation de $7$ vers le bas. Écris la nouvelle équation.`, "-3*x-5", "b : 2 → −5."),
  num(String.raw`On fait subir à $y=4x-1$ une translation de 3 vers le haut. Quelle est la nouvelle ordonnée à l'origine?`, 2, "−1 + 3."),
  mc(`Quelle droite est parallèle à y = 5x − 2?`, String.raw`$y=5x+9$`, [String.raw`$y=-5x-2$`, String.raw`$y=2x+5$`, String.raw`$y=\tfrac15x$`], "Même pente."),
  mc(`Quel changement rend y = 2x + 3 moins inclinée?`, "changer 2 en 0.5", ["changer 2 en 4", "changer 3 en 0", "changer 2 en −2"], "Un |m| plus petit."),
  tf(String.raw`$y=-6x$ est plus inclinée que $y=4x$.`, true, "|−6| > |4|."),
  mx(String.raw`Fais subir à $y=3x+1$ une réflexion par rapport à l'axe des y.`, "-3*x+1", "m → −m."),
  num(String.raw`On fait pivoter une droite $y=mx$ autour de l'origine pour qu'elle passe par $(2,10)$. Quel est le nouveau m?`, 5, "10 ÷ 2."),
  mc(`Deux droites ont la même ordonnée à l'origine, 4. Elles diffèrent par…`, "la pente", ["l'ordonnée à l'origine", "rien", "les deux"], "Même b, m différent."),
  mc(String.raw`Quelle droite est une translation de $y=-2x$?`, String.raw`$y=-2x+3$`, [String.raw`$y=2x$`, String.raw`$y=-3x$`, String.raw`$y=-2$`], "Même pente."),
  num(String.raw`$y=x$ devient $y=x+b$ et passe par $(3,7)$. Trouve b.`, 4, "7 = 3 + b."),
  tf(`Une hausse des frais fixes fait monter le graphique d'un coût.`, true, "b augmente."),
  tf(`Un prix plus élevé par article rend le graphique d'un coût moins incliné.`, false, "Un taux plus grand le rend plus incliné."),
  mc(`La pente d'une droite passe de 2 à −2. La droite subit…`, "une réflexion", ["une translation", "aucun changement", "un passage à l'horizontale"], "Changement de signe."),
];

export const M = [
  mx(String.raw`Écris la droite qui a la même pente que $y=-\frac12x+4$ et une ordonnée à l'origine de $-1$.`, "-0.5*x-1", "Garde m, change b."),
  mc(String.raw`Décris $y=-2x+3$ par rapport à $y=x$.`, "plus inclinée, réfléchie et translation de 3 vers le haut", ["moins inclinée et translation de 3 vers le haut", "plus inclinée et translation de 3 vers le bas", "seulement une translation de 3 vers le haut"], "|m| 1 → 2, le signe change, b 0 → 3."),
  num(String.raw`La droite $y=mx+2$ passe par $(4,-6)$. Trouve m.`, -2, "−6 = 4m + 2."),
  ms(String.raw`Quelles droites font partie de la même famille que $y=3x-4$ (parallèles)? Choisis toutes les bonnes réponses.`, [String.raw`$y=3x$`, String.raw`$6x-2y=1$`, String.raw`$y=-3x-4$`, String.raw`$y=3x+10$`, String.raw`$y=\tfrac13x-4$`], [0, 1, 3], "Pente 3 (la deuxième est y = 3x − 0.5)."),
  ms(String.raw`Quelles droites ont la même ordonnée à l'origine que $y=2x-5$? Choisis toutes les bonnes réponses.`, [String.raw`$y=-x-5$`, String.raw`$y=7x-5$`, String.raw`$y=2x+5$`, String.raw`$y=-5$`], [0, 1, 3], "b = −5."),
  num(String.raw`Un tarif de taxi passe de $C=2d+4$ à $C=2d+6$. Combien de plus coûte une course de 9 km (dollars)?`, 2, "Seuls les frais ont changé."),
  num(String.raw`Un tarif passe de $C=2d+4$ à $C=2.5d+4$. Combien de plus coûte une course de 9 km (dollars)?`, 4.5, "0.5 × 9.", null, 0.001),
  mc(`Le graphique montre y = x (gris) et une autre droite. Quelle est l'équation de l'autre droite?`, String.raw`$y=x-3$`, [String.raw`$y=x+3$`, String.raw`$y=3x$`, String.raw`$y=-x-3$`], "Parallèle, coupe l'axe des y à −3.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 1, b: 0, color: "gray" }, { m: 1, b: -3, color: "blue" }] })),
  tf(String.raw`Une translation de $y=2x+1$ de 4 vers le haut donne la même droite qu'une translation de 2 vers la gauche.`, true, "y = 2(x + 2) + 1 = 2x + 5."),
  num(String.raw`On fait subir à $y=-x+8$ une translation vers le bas jusqu'à ce qu'elle passe par l'origine. De combien d'unités?`, 8, "b : 8 → 0."),
  num(String.raw`La droite $y=\frac12x+b$ passe par $(-4,3)$. Trouve b.`, 5, "3 = −2 + b."),
  mc(`Les frais mensuels d'un forfait de téléphone baissent, mais le prix par minute ne change pas. Le graphique…`, "descend (reste parallèle)", ["devient plus incliné", "devient moins incliné", "subit une réflexion"], "Seul b change."),
  num(String.raw`Quelle est l'abscisse à l'origine de $y=2x-6$ après une translation de 4 vers le haut?`, 1, "y = 2x − 2 → x = 1."),
  mx(String.raw`Fais pivoter $y=x+3$ autour de son ordonnée à l'origine pour que sa pente devienne $-4$.`, "-4*x+3", "Garde b = 3."),
  mc(`Quelle paire est formée de droites images l'une de l'autre par réflexion par rapport à l'axe des y?`, String.raw`$y=\frac23x+1$ et $y=-\frac23x+1$`, [String.raw`$y=\frac23x+1$ et $y=\frac23x-1$`, String.raw`$y=\frac23x$ et $y=\frac32x$`, String.raw`$y=x$ et $y=x+1$`], "Pentes opposées, même ordonnée à l'origine."),
  num(String.raw`Un modèle de coût $C=15n+40$ devient $C=15n+55$. Pour 10 articles, quel est le nouveau coût (dollars)?`, 205, "150 + 55."),
  ms(`La pente d'une droite double et son ordonnée à l'origine ne change pas. Quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["elle est plus inclinée", "elle coupe toujours l'axe des y au même point", "elle est parallèle à l'originale", "son abscisse à l'origine se déplace (si b ≠ 0)"], [0, 1, 3], "Doubler m change la direction, donc elle n'est pas parallèle."),
  num(String.raw`On fait pivoter la droite $y=-3x+6$ autour de son ordonnée à l'origine pour qu'elle passe par $(2,10)$. Quelle est la nouvelle pente?`, 2, "(10 − 6) ÷ 2."),
  tf(`Deux droites parallèles peuvent avoir des ordonnées à l'origine différentes.`, true, "Même pente, b différent."),
  num(String.raw`$y=4x+b$ est parallèle à $y=4x-2$ et située 7 unités au-dessus. Trouve b.`, 5, "−2 + 7."),
];
