// 2.3 Équations polynomiales — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "2.3 Équations polynomiales";
export const Q = [
  num(String.raw`Trouve la plus grande racine de $x^4-x^3-11x^2+9x+18=0$.`, 3, "P(−1) = 0 → x³ − 2x² − 9x + 18 = (x − 2)(x² − 9)."),
  num(String.raw`Combien de racines réelles $x^4+x^2-12=0$ a-t-elle?`, 2, "(x² + 4)(x² − 3)."),
  num(String.raw`Trouve la plus petite racine de $2x^3-x^2-5x-2=0$.`, -1, "P(2) = 0; quotient (2x + 1)(x + 1)."),
  num("Pour y = x³ − 12x, trouve la valeur positive de k pour laquelle x³ − 12x = k a exactement deux solutions réelles.", 16, "La droite doit passer par un point tournant : (−2, 16).", graph((x) => x ** 3 - 12 * x, { xmin: -4.5, xmax: 4.5, ymin: -24, ymax: 24 }, [P(-2, 16), P(2, -16)], { step: { x: 1, y: 4 } })),
  num(String.raw`$x=-2$ est une racine de $x^3+kx^2-x-10=0$. Trouve la plus grande des deux autres racines (2 décimales).`, 1.4495, "k = 4; quotient x² + 2x − 5 : x = −1 ± √6.", null, 0.006),
  num("Augmenter chaque arête d'un cube de 2 cm augmente son volume de 56 cm³. Trouve l'arête initiale.", 2, "(x + 2)³ − x³ = 6x² + 12x + 8 = 56 → x² + 2x − 8 = 0."),
  mc(String.raw`Résous $x^3+3x^2+3x+1=0$.`, String.raw`$x=-1$ (une racine triple)`, [String.raw`$x=1$`, String.raw`$x=\pm1$`, String.raw`$x=-1, -3$`], "(x + 1)³ = 0."),
  num(String.raw`Combien de solutions réelles $x^4-4x^3+4x^2=1$ a-t-elle?`, 3, "(x² − 2x)² = 1 : x² − 2x − 1 = 0 (deux racines) ou (x − 1)² = 0."),
  num(String.raw`Trouve la somme des carrés des racines de $x^4-5x^2+4=0$.`, 10, "Racines ±1, ±2 : 1 + 1 + 4 + 4.", graph((x) => x ** 4 - 5 * x * x + 4, { xmin: -2.7, xmax: 2.7, ymin: -3, ymax: 6 }, [], { step: { x: 0.5, y: 1 } })),
  tf("Une équation polynomiale de degré 4 peut avoir exactement 3 racines réelles distinctes.", true, "p. ex. x²(x − 1)(x + 1) = 0 a 0 (double), ±1."),
  num(String.raw`Trouve la solution positive de $x^3+x^2=12x$.`, 3, "x(x + 4)(x − 3) = 0."),
  mc(String.raw`Trouve la racine réelle de $8x^3+1=0$.`, String.raw`$x=-\tfrac12$`, [String.raw`$x=\tfrac12$`, String.raw`$x=-\tfrac18$`, String.raw`$x=-2$`], "(2x + 1)(4x² − 2x + 1)."),
  num("La somme d'un nombre et de son cube est 10. Trouve le nombre.", 2, "x³ + x − 10 = (x − 2)(x² + 2x + 5)."),
  num("Une boîte sans couvercle fabriquée à partir d'une feuille de 10 sur 8 (en découpant des carrés de côté x) a un volume de 48. Trouve la plus grande valeur possible de x.", 2, "x³ − 9x² + 20x − 12 = (x − 1)(x − 2)(x − 6); x < 4.", graph((x) => x * (10 - 2 * x) * (8 - 2 * x), { xmin: 0, xmax: 4.2, ymin: 0, ymax: 60 }, [], { a: 0, b: 4, more: [{ f: () => 48, color: "green" }], step: { x: 0.5, y: 10 } })),
  num(String.raw`Trouve le produit des racines réelles de $x^4-3x^2-4=0$.`, -4, "(x² − 4)(x² + 1) : 2 · (−2)."),
  num(String.raw`Trouve la somme des racines de $(x^2-x)^2-8(x^2-x)+12=0$.`, 2, "x² − x = 2 ou 6 : racines 2, −1, 3, −2."),
  mc(String.raw`Que t'apprend le test des zéros rationnels au sujet de $3x^3+x-1=0$?`, "elle n'a aucune racine rationnelle", ["ses racines sont ±1 et ±⅓", "elle a trois racines rationnelles", "elle n'a aucune racine réelle"], "Aucun de ±1, ±⅓ ne fonctionne; sa seule racine réelle est irrationnelle."),
  num(String.raw`Trouve la racine réelle de $x^3-3x^2+3x-9=0$.`, 3, "x²(x − 3) + 3(x − 3)."),
  num(String.raw`$x=1$ est une racine de $x^3-8x^2+kx-12=0$. Trouve $k$.`, 19, "1 − 8 + k − 12 = 0."),
  num("Combien de points les graphiques de y = x³ et de y = x + 2 ont-ils en commun?", 1, "x³ − x − 2 = 0 a une seule racine réelle (≈ 1.52).", planeDoc({ view: { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x ** 3, color: "violet" }, { f: (x) => x + 2, color: "green" }], step: { x: 0.5, y: 1 } })),
];
