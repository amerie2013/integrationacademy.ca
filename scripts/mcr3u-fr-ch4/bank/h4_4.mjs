// 4.4 Fonctions exponentielles et leurs propriétés — 20 questions difficiles (miroir de ../../mcr3u-ch4/bank/h4_4.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

export const TOPIC = "4.4 Fonctions exponentielles et leurs propriétés";
export const Q = [
  num(String.raw`$y=ab^x$ passe par $(-1,2)$ et $(2,54)$. Trouve $y(1)$.`, 18, "b³ = 27 → b = 3, a = 6."),
  num(String.raw`$y=ab^x$ passe par $(1,12)$ et $(3,27)$. Trouve $y(4)$ (au centième près).`, 40.5, "b² = 2.25 → b = 1.5, a = 8; 8(1.5)⁴.", null, 0.006),
  num("y = 2ˣ et y = x² se croisent à x = 2 et à une valeur de x plus grande. Trouve-la.", 4, "2⁴ = 16 = 4².", planeDoc({ view: { xmin: -2, xmax: 5, ymin: -1, ymax: 20 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => x * x, color: "amber" }], points: [P(2, 4), P(4, 16)], step: { x: 1, y: 2 } })),
  num("Combien de solutions réelles l'équation 2ˣ = x² a-t-elle?", 3, "x ≈ −0.77, 2 et 4.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -1, ymax: 18 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => x * x, color: "amber" }], step: { x: 1, y: 2 } })),
  num(String.raw`Quel est le plus petit entier positif $x$ tel que $3^x>5x^2$?`, 4, "3⁴ = 81 > 80; 3³ = 27 < 45."),
  mc(String.raw`Une table a $x=0,2,4$ et $y=5,20,80$. Quel modèle convient?`, String.raw`$y=5(2)^x$`, [String.raw`$y=5(4)^x$`, String.raw`$y=5x^2+5$`, String.raw`$y=15x+5$`], "×4 tous les 2 pas → ×2 à chaque pas."),
  num(String.raw`Une table a $x=1,3,5$ et $y=6,54,486$. Trouve l'ordonnée à l'origine du modèle exponentiel.`, 2, "b² = 9 → b = 3; a = 6/3."),
  tf(String.raw`$y=(-2)^x$ est une fonction exponentielle.`, false, "La base doit être positive."),
  ms(String.raw`Quels énoncés sont vrais pour $y=0.5(4)^x$? Choisis toutes les bonnes réponses.`, ["ordonnée à l'origine 0.5", "passe par (1, 2)", "passe par (−1, 0.125)", "elle est décroissante"], [0, 1, 2], "b = 4 > 1 : croissante."),
  num("y = 2ˣ et y = 3(½)ˣ se rencontrent une seule fois. Trouve x (au millième près).", Math.log(3) / Math.log(4), "2ˣ·2ˣ = 3 → 4ˣ = 3.", planeDoc({ view: { xmin: -2, xmax: 3, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => 3 * 0.5 ** x, color: "red" }], step: { x: 1, y: 1 } }), 0.002),
  num("Un cent double chaque jour. Combien de dollars cela fait-il après 20 jours (au centième près)?", 0.01 * 2 ** 20, "0.01 × 2²⁰.", null, 0.006),
  num(String.raw`Le plan A croît selon $100(1.1)^x$ et le plan B selon $100+30x$. Quel est le plus petit nombre entier $x>0$ pour lequel A est supérieur à B?`, 21, "x = 20 : 672.7 contre 700; x = 21 : 740.0 contre 730."),
  num("La courbe passe par (0, 1.5) et (2, 13.5). Trouve y(3).", 40.5, "b² = 9 → b = 3; 1.5 × 27.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 45 }, curves: [{ f: (x) => 1.5 * 3 ** x, color: "violet" }], points: [P(0, 1.5), P(2, 13.5)], step: { x: 1, y: 5 } }), 0.006),
  mc(String.raw`Quelle expression est égale à $16^x$?`, String.raw`$4^{2x}$`, [String.raw`$4^{x+2}$`, String.raw`$2^{8x}$`, String.raw`$8^{2x}$`], "16 = 4²."),
  num(String.raw`Une exponentielle a $\frac{y(2)}{y(0)}=9$ et $y(1)=6$. Trouve $y(3)$.`, 54, "b = 3, a = 2."),
  tf(String.raw`Les graphiques de $y=3^x$ et de $y=\left(\tfrac13\right)^x$ sont des réflexions l'un de l'autre par rapport à l'axe des y.`, true, "(⅓)ˣ = 3⁻ˣ."),
  num(String.raw`Trouve le taux de variation moyen de $y=2^x$ de $x=0$ à $x=3$ (au millième près).`, 7 / 3, "(8 − 1) ÷ 3.", null, 0.0005),
  num(String.raw`Les différences premières de $y=2^x$ pour $x=0..4$ forment une régularité. Quel est leur rapport constant?`, 2, "1, 2, 4, 8."),
  num("Le graphique montre y = 5(0.8)ˣ. Quel est le plus petit nombre entier x tel que y < 2?", 5, "0.8⁴ ≈ 0.41, 0.8⁵ ≈ 0.33.", planeDoc({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 6 }, curves: [{ f: (x) => 5 * 0.8 ** x, color: "violet" }], lines: [{ m: 0, b: 2, color: "amber", dash: true }], step: { x: 1, y: 1 } })),
  num(String.raw`$y=ab^x$ passe par $(2,3)$ et $(5,81)$. Trouve son ordonnée à l'origine (au dix-millième près).`, 1 / 3, "b³ = 27 → b = 3; a = 3/9.", null, 0.0005),
];
