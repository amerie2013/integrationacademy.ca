// 3.7 Familles de fonctions du second degré — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";
import { TITLE } from "../l3_7.mjs";

export const TOPIC = TITLE;
export const Q = [
  num("L'arche d'un tunnel mesure 16 m de largeur; à 3 m d'un côté, elle a une hauteur de 6 m. Un camion de 4 m de largeur roule au milieu. Quelle est la hauteur de l'arche au-dessus des bords du camion (au centième)?", (6 / 39) * 6 * 10, "y = ax(x − 16) : a(3)(−13) = 6 → a = −6/39; y(6) = (6/39)(6)(10).", planeDoc({ view: { xmin: -1, xmax: 17, ymin: -1, ymax: 11 }, curves: [{ f: (x) => (-6 / 39) * x * (x - 16), a: 0, b: 16, color: "violet" }], segs: [{ pts: [[6, 0], [6, 5.5], [10, 5.5], [10, 0]], color: "blue" }], points: [P(3, 6)], step: { x: 1, y: 1 } }), 0.01),
  num(String.raw`Une parabole a les zéros $2\pm\sqrt5$ et l'ordonnée à l'origine 3. Quelle est sa valeur maximale?`, 15, "a[(x − 2)² − 5] : −a = 3 → a = −3; valeur au sommet −3(−5)."),
  num("Une parabole a les zéros 0 et 8, et son sommet est sur y = x + 2. Trouve a.", -0.375, "Sommet (4, 6) : a(4)(−4) = 6.", null, 0.001),
  num(String.raw`Quel membre de $y=a(x-1)(x-5)$ a son sommet sur la droite $y=6$? Donne $a$.`, -1.5, "Sommet (3, −4a) : −4a = 6.", null, 0.001),
  num(String.raw`Une parabole a les zéros $-3\pm\sqrt2$ et l'ordonnée à l'origine 14. Trouve sa valeur minimale.`, -4, "a(x² + 6x + 7) : 7a = 14 → a = 2; valeur au sommet 2(−2)."),
  num("Les deux paraboles ont les zéros 0 et 6. La bleue passe par (3, 9). La rouge passe par (3, −4.5). Trouve a pour la rouge.", 0.5, "a(3)(−3) = −4.5.", planeDoc({ view: { xmin: -1, xmax: 7, ymin: -6, ymax: 10 }, curves: [{ f: (x) => -x * (x - 6), color: "blue" }, { f: (x) => 0.5 * x * (x - 6), color: "red" }], points: [P(3, 9), P(3, -4.5)] }), 0.001),
  num("Un câble de suspension est tendu entre deux tours de 30 m distantes de 100 m; son point le plus bas est à 5 m au-dessus de la route, au centre. Quelle est sa hauteur à 20 m d'une tour?", 14, "y = a(x − 50)² + 5, 2500a + 5 = 30 → a = 0.01; en x = 20 : 9 + 5.", planeDoc({ view: { xmin: -5, xmax: 105, ymin: 0, ymax: 35 }, curves: [{ f: (x) => 0.01 * (x - 50) ** 2 + 5, a: 0, b: 100, color: "violet" }], points: [P(0, 30), P(100, 30), P(50, 5)], step: { x: 10, y: 5 } })),
  mc(String.raw`Quel point appartient à chaque membre de $y=a(x^2-4x)+3$?`, String.raw`$(4,3)$`, [String.raw`$(4,0)$`, String.raw`$(2,3)$`, String.raw`$(3,4)$`], "En x = 0 et en x = 4, la parenthèse vaut 0; donc y = 3."),
  num(String.raw`$y=a(x-2)^2-4a$ est une famille dont les membres partagent les zéros. Quel est le plus grand zéro?`, 4, "a[(x − 2)² − 4] = a·x(x − 4)."),
  tf(String.raw`Les membres de la famille $y=(x-1)(x-5)+k$ partagent leurs zéros.`, false, "Changer k produit une translation verticale — les zéros bougent; l'axe est commun."),
  num("L'arche a les zéros −6 et 6 et passe par (4, 5). Quelle est sa hauteur au centre?", 9, "a(10)(−2) = 5 → a = −¼; −¼(6)(−6).", planeDoc({ view: { xmin: -7, xmax: 7, ymin: -1, ymax: 10 }, curves: [{ f: (x) => -0.25 * (x + 6) * (x - 6), a: -6, b: 6, color: "violet" }], points: [P(4, 5), P(-6, 0), P(6, 0)] })),
  num(String.raw`Une parabole a les zéros $1\pm\sqrt3$ et passe par $(3,8)$. Trouve l'ordonnée de son sommet.`, -24, "a[(x − 1)² − 3] : a(1) = 8; valeur au sommet 8(−3)."),
  num(String.raw`Deux membres de $y=a(x-2)(x-8)$ sont symétriques l'un de l'autre par rapport à l'axe des x; l'un a le sommet $(5,18)$. Trouve $a$ pour l'autre.`, 2, "a(3)(−3) = 18 → a = −2; la réflexion a a = 2."),
  num("Une parabole a des zéros distants de 6 unités, l'axe x = 1, et passe par (0, −16). Trouve l'ordonnée de son sommet.", -18, "Zéros −2 et 4 : −8a = −16 → a = 2; 2(3)(−3)."),
  mc("Les courbes rouge, bleue et verte sont des membres de y = a(x + 2)(x − 2). Quelle valeur de a correspond à la courbe rouge?", String.raw`$a=-2$`, [String.raw`$a=-\tfrac12$`, String.raw`$a=1$`, String.raw`$a=2$`], "La rouge est ouverte vers le bas et c'est la plus étroite : ordonnée à l'origine 8.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -6, ymax: 9 }, curves: [{ f: (x) => -2 * (x + 2) * (x - 2), color: "red" }, { f: (x) => -0.5 * (x + 2) * (x - 2), color: "blue" }, { f: (x) => 1 * (x + 2) * (x - 2), color: "green" }], points: [P(0, 8)] })),
  num("Un dôme parabolique mesure 50 m de largeur et 20 m de hauteur. Quelle est sa hauteur à 10 m de son bord?", 12.8, "a(25)(−25) = 20 → a = −0.032; 0.032(10)(40).", null, 0.001),
  num(String.raw`$y=k(x^2-9)$ passe par $(1,16)$. Trouve $k$.`, -2, "−8k = 16."),
  num(String.raw`Quelle distance sépare les sommets des membres $a=1$ et $a=-1$ de $y=a(x+2)(x-4)$?`, 18, "(1, −9) et (1, 9)."),
  num("Les deux courbes sont y = (x − 1)(x − 3) et y = 3(x − 1)(x − 3). Quelle est la distance verticale entre elles en x = 2?", 2, "−1 contre −3.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => (x - 1) * (x - 3), color: "blue" }, { f: (x) => 3 * (x - 1) * (x - 3), color: "red" }], points: [P(2, -1), P(2, -3)] })),
  num(String.raw`Trouve la somme de toutes les valeurs de $a$ pour lesquelles le sommet de $y=a(x-1)(x-4)$ est à 9 unités de l'axe des x.`, 0, "Valeur au sommet −2.25a : |2.25a| = 9 → a = ±4."),
];
