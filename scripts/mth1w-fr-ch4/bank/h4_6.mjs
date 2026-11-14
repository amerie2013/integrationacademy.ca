// 4.6 Transformations de droites — 20 questions difficiles
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, FIG } from "./fig.mjs";
import { TITLE } from "../l4_6.mjs";

export const TOPIC = TITLE;
export const Q = [
  num(String.raw`On fait subir à la droite $y=2x+1$ une translation pour qu'elle passe par $(5,4)$. Quelle est la nouvelle ordonnée à l'origine?`, -6, "Garde m = 2 : 4 = 10 + b."),
  num(String.raw`On fait subir à $y=-x+4$ une réflexion par rapport à l'axe des y, puis une translation de 6 vers le bas. Quelle est l'abscisse à l'origine du résultat?`, 2, "Réflexion : y = x + 4; 6 vers le bas : y = x − 2 → x = 2."),
  mc(`La famille y = mx + 4 est tracée pour m = −2, −1, 0, 1, 2. Quel énoncé est vrai?`, "les cinq droites passent par (0, 4)", ["les cinq sont parallèles", "aucune ne coupe l'axe des x", "elles ont toutes une abscisse à l'origine de −4"], "Elles ont le même b = 4.", FIG.family),
  num(String.raw`Pour quelle pente m la droite $y=mx+4$ a-t-elle une abscisse à l'origine de $8$?`, -0.5, "0 = 8m + 4.", null, 0.001),
  ms(String.raw`À partir de $y=x$, quels changements produisent une droite qui passe par $(2,8)$? Choisis toutes les bonnes réponses.`, [String.raw`translation de 6 vers le haut`, String.raw`rotation jusqu'à une pente de 4`, String.raw`translation de 8 vers le haut`, String.raw`rotation jusqu'à une pente de 3 et translation de 2 vers le haut`, String.raw`réflexion`], [0, 1, 3], "y = x + 6, y = 4x et y = 3x + 2 passent toutes par (2, 8)."),
  num(`Les frais d'adhésion d'un centre passent de 30 à 45 dollars et son tarif mensuel baisse de 25 à 22 dollars. Après combien de mois le nouveau forfait est-il moins cher que l'ancien?`, 6, "45 + 22m < 30 + 25m → 15 < 3m → m > 5, donc à partir de 6 mois."),
  mx(String.raw`La droite $L$ est parallèle à $y=-\frac34x+1$ et passe par $(8,-2)$. Écris son équation.`, "-0.75*x+4", "−2 = −6 + b → b = 4."),
  num(String.raw`La distance verticale entre les droites parallèles $y=3x+7$ et $y=3x-5$ est de combien d'unités?`, 12, "7 − (−5)."),
  tf(String.raw`Faire pivoter une droite autour de son ordonnée à l'origine peut changer son abscisse à l'origine, mais jamais son ordonnée à l'origine.`, true, "L'ordonnée à l'origine est le pivot."),
  num(String.raw`$y=mx-3$ passe par $(-2,5)$. Quelle est la pente?`, -4, "5 = −2m − 3."),
  mc(`Quelle paire de transformations change y = 2x − 1 en y = −2x + 3?`, "réflexion par rapport à l'axe des y, puis translation de 4 vers le haut", ["seulement une translation de 4 vers le haut", "seulement une rotation jusqu'à une pente de −2", "réflexion, puis translation de 4 vers le bas"], "Réflexion : −2x − 1; 4 vers le haut : −2x + 3."),
  num(`Un taxi demande C = 2.2d + 4. Une nouvelle règle double le taux par km et réduit de moitié les frais de prise en charge. Pour combien de km l'ancien et le nouveau tarif sont-ils égaux?`, 0.9091, "2.2d + 4 = 4.4d + 2 → 2.2d = 2 → d ≈ 0.909.", null, 0.001),
  ms(`Le graphique montre les droites A, B, C. Quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["A et B sont parallèles", "B et C ont la même ordonnée à l'origine", "C est plus inclinée que A", "A est une translation de y = x"], [0, 1, 3], "A : y = x + 2; B : y = x − 1; C : y = −0.5x − 1. |−0.5| < 1, donc C n'est pas plus inclinée.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 1, b: 2, color: "blue", label: "A", lx: 2.5 }, { m: 1, b: -1, color: "red", label: "B", lx: 4 }, { m: -0.5, b: -1, color: "green", label: "C", lx: -5 }] })),
  num(String.raw`On fait subir à la droite $y=\frac25x+b$ une translation jusqu'à ce que son abscisse à l'origine soit $-10$. Que vaut b?`, 4, "0 = −4 + b."),
  mx(String.raw`On fait pivoter $y=3x-6$ autour de son abscisse à l'origine pour que sa pente devienne $-1$. Écris la nouvelle équation.`, "-x+2", "Abscisse à l'origine (2, 0) : y = −(x − 2)."),
  num(`Un forfait de téléphone C = 0.05t + 20 devient C = 0.08t + 14. En dessous de combien de textos le nouveau forfait est-il moins cher?`, 200, "0.08t + 14 < 0.05t + 20 → t < 200."),
  tf(`Toute droite y = mx + b avec m ≠ 0 peut être obtenue à partir de y = x par une rotation suivie d'une translation.`, true, "Rotation jusqu'à la pente m, translation jusqu'à l'ordonnée à l'origine b."),
  num(String.raw`$y=-2x+b$ forme avec les axes un triangle d'aire 25 (dans le premier quadrant). Trouve b.`, 10, "Coordonnées à l'origine b et b/2 : ½ · b · b/2 = 25 → b² = 100."),
  num(String.raw`De combien (verticalement) faut-il déplacer $y=\frac12x-3$ pour qu'elle passe par $(6,5)$?`, 5, "À x = 6, elle donne 0; 5 vers le haut."),
  mc(`Un graphique de coût C = 12n + 30 est retracé comme C = 12n + 30 après une hausse du prix par article. Quelle est l'erreur?`, "la pente (12) aurait dû augmenter", ["l'ordonnée à l'origine aurait dû diminuer", "aucune — le graphique est correct", "la droite devrait être horizontale"], "Un prix par article plus élevé signifie un m plus grand."),
];
