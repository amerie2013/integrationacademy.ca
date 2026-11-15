// 4.5 Transformations des fonctions exponentielles — 20 questions difficiles (miroir de ../../mcr3u-ch4/bank/h4_5.mjs)
// Notation française : y = a·b^(k(x − c)) + d (c horizontal, d vertical).
import { mc, ms, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const V = { xmin: -5, xmax: 6, ymin: -6, ymax: 16 };

export const TOPIC = "4.5 Transformations des fonctions exponentielles";
export const Q = [
  num(String.raw`$y=a(2)^x+d$ passe par $(0,5)$ et $(2,11)$. Quelle est l'asymptote? Entre sa valeur de y.`, 3, "3a = 6 → a = 2, d = 3."),
  num(String.raw`$y=a(3)^x+d$ a pour asymptote $y=-4$ et passe par $(1,2)$. Trouve son ordonnée à l'origine.`, -2, "3a − 4 = 2 → a = 2; 2 − 4."),
  num(String.raw`Trouve l'abscisse à l'origine de $y=2(3)^{x-1}-18$.`, 3, "3^(x−1) = 9."),
  num(String.raw`Trouve l'abscisse à l'origine de $y=-3(2)^{-(x-2)}+12$.`, 0, "2^(−(x−2)) = 4 → −(x − 2) = 2."),
  mc(String.raw`Quelle description de $y=-\tfrac12(2)^{3(x+1)}+4$ comme transformation de $y=2^x$ est correcte?`, "compression horizontale de facteur ⅓, compression verticale de facteur ½, réflexion par rapport à l'axe des x, 1 vers la gauche, 4 vers le haut", ["étirement horizontal de facteur 3, compression verticale de facteur ½, réflexion, 1 vers la droite, 4 vers le haut", "compression horizontale de facteur ⅓, étirement vertical de facteur 2, 1 vers la gauche, 4 vers le haut", "réflexion par rapport à l'axe des y, 1 vers la gauche, 4 vers le bas"], "a = −½, k = 3, c = −1, d = 4."),
  num("La courbe a pour asymptote y = 2 et passe par (0, 5) et (1, 8). Trouve y(2).", 14, "a = 3; 3b + 2 = 8 → b = 2; 3(4) + 2.", planeDoc({ view: V, curves: [{ f: (x) => 3 * 2 ** x + 2, color: "violet" }], lines: [{ m: 0, b: 2, color: "green", dash: true }], points: [P(0, 5), P(1, 8)], step: { x: 1, y: 2 } })),
  num(String.raw`$y=2^x+d$ passe par $(3,5)$. Trouve son abscisse à l'origine (au millième près).`, Math.log2(3), "d = −3; 2ˣ = 3.", null, 0.002),
  tf("Un étirement horizontal de y = 4ˣ de facteur 2 donne y = 2ˣ.", true, "4^(x/2) = 2ˣ."),
  num(String.raw`Le point $(-1,\tfrac13)$ de $y=3^x$ devient un point de quelle abscisse sur $y=3^{-x+2}+1$?`, 3, "k = −1, c = 2 : x → −x + 2."),
  num("y = 2ˣ et y = 2^(x − 3) + 7 se rencontrent une seule fois. Trouve x.", 3, "2ˣ − 2ˣ/8 = 7 → 2ˣ = 8.", planeDoc({ view: V, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => 2 ** (x - 3) + 7, color: "amber" }], points: [P(3, 8)], step: { x: 1, y: 2 } })),
  ms(String.raw`Quels énoncés sont vrais pour $y=2\left(\tfrac12\right)^{x+1}-3$? Choisis toutes les bonnes réponses.`, ["asymptote y = −3", "elle est décroissante", "ordonnée à l'origine −2", "image y > −3", "elle passe par (0, 1)"], [0, 1, 2, 3], "y(0) = 2·½ − 3 = −2."),
  num(String.raw`$y=ab^x+d$ a pour asymptote $y=1$ et passe par $(0,3)$ et $(1,7)$. Trouve $y(2)$.`, 19, "a = 2, b = 3; 2(9) + 1."),
  num("Le graphique est y = −2(3)ˣ + 6. Trouve son abscisse à l'origine.", 1, "3ˣ = 3.", planeDoc({ view: V, curves: [{ f: (x) => -2 * 3 ** x + 6, color: "violet" }], lines: [{ m: 0, b: 6, color: "green", dash: true }], points: [P(0, 4), P(1, 0)], step: { x: 1, y: 2 } })),
  mc(String.raw`Quelle expression est égale à $8^{x/3}$?`, String.raw`$2^x$`, [String.raw`$2^{x/3}$`, String.raw`$8^{3x}$`, String.raw`$4^x$`], "(2³)^(x/3)."),
  num(String.raw`De combien d'unités vers la droite faut-il translater $y=3^x$ pour qu'elle passe par $(5,9)$?`, 3, "3^(5−c) = 9 → c = 3."),
  num(String.raw`L'image de $y=4^{x-1}-2.5$ est $y>m$. Trouve $m$.`, -2.5, "d = −2.5.", null, 1e-9),
  tf(String.raw`$y=-2^x$ et $y=(-2)^x$ sont la même fonction.`, false, "(−2)ˣ n'est même pas définie pour la plupart des valeurs de x."),
  num("Le graphique est y = 2^(x/2) + 1. Trouve y à x = 4.", 5, "2² + 1.", planeDoc({ view: V, curves: [{ f: (x) => 2 ** (x / 2) + 1, color: "violet" }], lines: [{ m: 0, b: 1, color: "green", dash: true }], points: [P(4, 5)], step: { x: 1, y: 2 } })),
  num(String.raw`$y=a(2)^{x-1}+d$ passe par $(1,3)$ et $(3,9)$. Quelle est l'asymptote? Entre sa valeur de y.`, 1, "a + d = 3, 4a + d = 9 → a = 2, d = 1."),
  num(String.raw`Trouve le taux de variation moyen de $y=3(2)^x-1$ de $x=0$ à $x=2$.`, 4.5, "(11 − 2) ÷ 2.", null, 1e-9),
];
