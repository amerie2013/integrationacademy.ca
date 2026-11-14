// 1.1 Fonctions puissance — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { graph } from "./fig.mjs";

const EB = ["Q3 → Q1", "Q2 → Q4", "Q2 → Q1", "Q3 → Q4"];
const eb = (i) => [EB[i], EB.filter((_, j) => j !== i)];

export const E = [
  mc(String.raw`Laquelle est une fonction puissance?`, String.raw`$y=-7x^4$`, [String.raw`$y=4^x$`, String.raw`$y=\frac{3}{x}$`, String.raw`$y=\sqrt x+1$`], "Une fonction puissance a un seul terme ax^n, où n est un nombre entier naturel."),
  num(String.raw`Quel est le degré de $y=3x^7$?`, 7, "L'exposant de x."),
  num(String.raw`Quel est le coefficient dominant de $y=-0.4x^3$?`, -0.4, "Le nombre qui multiplie la puissance.", null, 0.0001),
  mc(String.raw`Comportement à l'infini de $y=x^6$ :`, ...eb(2), "Degré pair, coefficient positif : monte aux deux extrémités."),
  mc(String.raw`Comportement à l'infini de $y=-x^3$ :`, ...eb(1), "Degré impair, coefficient négatif : monte à gauche, descend à droite."),
  mc(String.raw`Comportement à l'infini de $y=5x^5$ :`, ...eb(0), "Degré impair, coefficient positif."),
  mc(String.raw`Comportement à l'infini de $y=-2x^8$ :`, ...eb(3), "Degré pair, coefficient négatif : descend aux deux extrémités."),
  tf(String.raw`$y=x^4$ est symétrique par rapport à l'axe des y.`, true, "Puissances paires : f(−x) = f(x)."),
  tf(String.raw`$y=x^3$ est symétrique par rapport à l'axe des y.`, false, "Les puissances impaires sont symétriques par rapport à l'origine."),
  mc("Quelle équation correspond au graphique?", String.raw`$y=x^4$`, [String.raw`$y=x^3$`, String.raw`$y=-x^4$`, String.raw`$y=-x^3$`], "Monte aux deux extrémités et plat près de l'origine.", graph((x) => x ** 4, { xmin: -2, xmax: 2, ymin: -4, ymax: 4 })),
  mc("Quelle équation a ce graphique?", String.raw`$y=-x^5$`, [String.raw`$y=x^5$`, String.raw`$y=-x^4$`, String.raw`$y=x^2$`], "Q2 → Q4 avec une symétrie impaire.", graph((x) => -(x ** 5), { xmin: -2, xmax: 2, ymin: -4, ymax: 4 })),
  num(String.raw`Évalue $f(x)=2x^3$ en $x=-2$.`, -16, "2(−8)."),
  num(String.raw`Évalue $f(x)=-x^4$ en $x=2$.`, -16, "−(16)."),
  mc(String.raw`Image de $y=3x^4$ :`, String.raw`$y\ge0$`, [String.raw`$y\le0$`, String.raw`$y\in\mathbb R$`, String.raw`$y>0$`], "x⁴ ≥ 0, donc 3x⁴ ≥ 0."),
  mc(String.raw`Image de $y=-x^5$ :`, String.raw`$y\in\mathbb R$`, [String.raw`$y\ge0$`, String.raw`$y\le0$`, String.raw`$y>0$`], "Les puissances impaires prennent toutes les valeurs réelles."),
  fill(String.raw`Une fonction puissance de degré pair avec un coefficient dominant négatif est orientée vers le ___ aux deux extrémités (haut/bas).`, ["bas", "le bas", "vers le bas", "down"], "Comme y = −x²."),
  tf(String.raw`$y=6$ est une fonction puissance de degré 0.`, true, "6 = 6x⁰."),
  tf(String.raw`$y=2^x$ est une fonction puissance.`, false, "La variable est dans l'exposant : fonction exponentielle."),
  mc(String.raw`Quel point est sur $y=x^5$?`, String.raw`$(-1,-1)$`, [String.raw`$(-1,1)$`, String.raw`$(2,10)$`, String.raw`$(1,5)$`], "(−1)⁵ = −1."),
  num(String.raw`Par combien de quadrants passe le graphique de $y=x^2$ (sans compter les axes)?`, 2, "Les quadrants 1 et 2."),
];

export const M = [
  num(String.raw`$y=ax^3$ passe par $(2,-24)$. Trouve $a$.`, -3, "8a = −24."),
  num(String.raw`$y=ax^4$ passe par $(-1,5)$. Trouve $a$.`, 5, "(−1)⁴ = 1."),
  mc(String.raw`Comportement à l'infini de $f(x)=4x^2-x^5+3$ :`, ...eb(1), "Terme dominant −x⁵ : impair, négatif."),
  mc(String.raw`Comportement à l'infini de $f(x)=7-2x+0.1x^6$ :`, ...eb(2), "Terme dominant 0.1x⁶ : pair, positif."),
  ms(String.raw`Lesquelles sont des fonctions polynomiales? Choisis toutes les bonnes réponses.`, [String.raw`$y=3x^2-x$`, String.raw`$y=x^{1/2}$`, String.raw`$y=-5$`, String.raw`$y=\frac{x}{2}+1$`, String.raw`$y=x^{-2}$`], [0, 2, 3], "Seulement des exposants entiers naturels; x/2 = (1/2)x convient."),
  ms(String.raw`Lesquelles sont des fonctions paires? Choisis toutes les bonnes réponses.`, [String.raw`$y=x^4$`, String.raw`$y=-3x^2$`, String.raw`$y=x^3$`, String.raw`$y=x^6+1$`], [0, 1, 3], "Seulement des puissances paires (les constantes comptent)."),
  mc(String.raw`Pour $0<x<1$, laquelle est la plus grande?`, String.raw`$x^2$`, [String.raw`$x^3$`, String.raw`$x^4$`, String.raw`$x^5$`], "Les puissances plus élevées d'un nombre entre 0 et 1 sont plus petites."),
  mc(String.raw`Pour $x>1$, laquelle est la plus grande?`, String.raw`$x^5$`, [String.raw`$x^2$`, String.raw`$x^3$`, String.raw`$x^4$`], "Les puissances plus élevées d'un nombre supérieur à 1 sont plus grandes."),
  num(String.raw`$f(x)=-2x^4$. Trouve $f(3)-f(-3)$.`, 0, "Fonction paire : f(3) = f(−3)."),
  num(String.raw`$g(x)=4x^3$. Trouve $g(2)+g(-2)$.`, 0, "Fonction impaire : g(−2) = −g(2)."),
  mc("Le graphique montre une fonction puissance qui passe par (1, −2). Quelle équation?", String.raw`$y=-2x^4$`, [String.raw`$y=-2x^3$`, String.raw`$y=2x^4$`, String.raw`$y=-x^4$`], "Descend aux deux extrémités (pair, négatif) et f(1) = −2.", graph((x) => -2 * x ** 4, { xmin: -2, xmax: 2, ymin: -6, ymax: 2 }, [{ x: 1, y: -2, label: "(1, −2)", color: "blue" }])),
  mc("Quelle description correspond au graphique?", "degré impair, a > 0", ["degré impair, a < 0", "degré pair, a > 0", "degré pair, a < 0"], "Q3 → Q1.", graph((x) => 0.5 * x ** 3, { xmin: -3, xmax: 3, ymin: -6, ymax: 6 })),
  tf(String.raw`Toute fonction polynomiale de degré impair a pour image $\mathbb R$.`, true, "Les extrémités vont vers −∞ et +∞ et le graphique est continu."),
  tf(String.raw`Toute fonction polynomiale de degré pair a l'axe des y comme axe de symétrie.`, false, "p. ex. x⁴ + x est de degré pair, mais n'est pas symétrique."),
  num(String.raw`Résous $x^3=-125$.`, -5, "(−5)³ = −125."),
  num(String.raw`Trouve la solution positive de $2x^4=162$.`, 3, "x⁴ = 81."),
  mc(String.raw`Une table donne $x=0,1,2,3$ et $y=0,2,16,54$. Quelle fonction convient?`, String.raw`$y=2x^3$`, [String.raw`$y=2x^2$`, String.raw`$y=2^x$`, String.raw`$y=x^4$`], "2·27 = 54."),
  mc(String.raw`Quelle fonction n'est ni une fonction puissance ni un polynôme?`, String.raw`$y=3(2)^x$`, [String.raw`$y=x^5$`, String.raw`$y=x^2-1$`, String.raw`$y=-x$`], "Exponentielle."),
  num(String.raw`Par quel facteur $y=x^4$ augmente-t-elle quand $x$ triple?`, 81, "3⁴ = 81."),
  fill(String.raw`$y=-x^7$ est symétrique par rapport à l'___.`, ["origine", "l'origine", "origin"], "Puissance impaire : symétrie centrale par rapport à (0, 0)."),
];
