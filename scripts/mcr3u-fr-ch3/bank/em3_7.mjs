// 3.7 Familles de fonctions du second degré — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { P, graph, planeDoc } from "./fig.mjs";

const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };
const fam = (r, s, as, view = V8) => planeDoc({ view, curves: as.map((a, i) => ({ f: (x) => a * (x - r) * (x - s), color: ["red", "amber", "blue", "green", "violet"][i % 5] })), points: [P(r, 0), P(s, 0)] });

export const E = [
  mc(String.raw`Tous les membres de $y=a(x-3)(x+5)$ ont en commun…`, "les zéros 3 et −5", ["le sommet", "l'ordonnée à l'origine", "la valeur maximale"], "Changer a ne déplace jamais les zéros."),
  num(String.raw`Quel est l'axe de symétrie de chaque membre de $y=a(x-3)(x+5)$?`, -1, "Moyenne de 3 et de −5."),
  num(String.raw`Trouve $a$ si $y=a(x-1)(x-5)$ passe par $(0,10)$.`, 2, "5a = 10."),
  num(String.raw`Trouve $a$ si $y=a(x+2)(x-2)$ passe par $(0,8)$.`, -2, "−4a = 8."),
  tf("Changer a dans y = a(x − r)(x − s) déplace les zéros.", false, "Les zéros restent en r et en s."),
  mc(String.raw`Les membres de $y=a(x-r)(x-s)$ pour lesquels $a<0$…`, "sont ouverts vers le bas", ["sont ouverts vers le haut", "n'ont aucun zéro", "passent par l'origine"], "a négatif."),
  num("Une parabole a le sommet (0, 3) et passe par (1, 5). Trouve a.", 2, "a + 3 = 5."),
  num("Une parabole a le sommet (2, 0) et passe par (4, 12). Trouve a.", 3, "4a = 12."),
  mx("Écris sous forme générale la fonction du second degré de zéros 0 et 4 avec a = 1.", "x^2-4*x", "x(x − 4)."),
  num(String.raw`Quel est le produit des zéros de $x^2-7x+10$?`, 10, "2 × 5."),
  num(String.raw`Quelle est la somme des zéros de $x^2-7x+10$?`, 7, "2 + 5."),
  mc(String.raw`Laquelle appartient à la famille $y=a(x-2)(x-6)$?`, String.raw`$y=-3(x-2)(x-6)$`, [String.raw`$y=(x+2)(x+6)$`, String.raw`$y=(x-2)(x-6)+1$`, String.raw`$y=(x-2)^2-6$`], "Seul a change."),
  num(String.raw`Trouve $a$ si $y=a(x-4)(x+1)$ passe par $(3,-8)$.`, 2, "a(−1)(4) = −8."),
  tf(String.raw`Chaque membre de $y=a(x+1)(x-7)$ passe par $(7,0)$.`, true, "7 est un zéro."),
  mc("Qu'ont en commun les paraboles du graphique?", "leurs zéros", ["leur sommet", "leur ordonnée à l'origine", "leur sens d'ouverture"], "Elles coupent toutes l'axe en −2 et en 4.", fam(-2, 4, [-1, -0.5, 0.5, 1])),
  num("La parabole violette y = ax(x − 4) a son sommet en (2, 6). Trouve a.", -1.5, "a(2)(−2) = 6.", planeDoc({ view: V8, curves: [{ f: (x) => -1.5 * x * (x - 4), color: "violet" }], points: [P(0, 0), P(4, 0), P(2, 6)] }), 0.001),
  num(String.raw`Quelle est l'ordonnée à l'origine de $y=2(x-3)(x+1)$?`, -6, "2(−3)(1)."),
  num(String.raw`Les zéros de $x^2-6x+c$ sont $3\pm\sqrt2$. Trouve $c$.`, 7, "(x − 3)² − 2."),
  tf(String.raw`Les racines $1\pm\sqrt3$ ont une somme de 2.`, true, "Les radicaux s'annulent."),
  num(String.raw`Quelle est l'abscisse du sommet de chaque membre de $y=a(x+4)(x-10)$?`, 3, "(−4 + 10)/2."),
];

export const M = [
  num(String.raw`Une parabole a les zéros $-3$ et $5$ et passe par $(1,32)$. Trouve $a$.`, -2, "a(4)(−4) = 32."),
  num(String.raw`Une parabole a les zéros $2\pm\sqrt3$ et passe par $(0,3)$. Trouve $a$.`, 3, "a(x² − 4x + 1); a(1) = 3."),
  num(String.raw`Une parabole a les zéros $1\pm\sqrt2$ et passe par $(2,4)$. Trouve $a$.`, -4, "a(x² − 2x − 1) : a(−1) = 4."),
  num("Une parabole a le sommet (−3, 4) et passe par (−1, 0). Trouve a.", -1, "4a + 4 = 0."),
  num(String.raw`$x^2+bx+c$ a les zéros $-2\pm\sqrt5$. Trouve $c$.`, -1, "(x + 2)² − 5 = x² + 4x − 1."),
  num(String.raw`$x^2+bx+c$ a les zéros $-2\pm\sqrt5$. Trouve $b$.`, 4, "(x + 2)² − 5."),
  mx("Écris l'équation de la parabole de zéros 3 et −2 qui passe par (1, 12).", "-2*(x-3)*(x+2)", "a(−2)(3) = 12 → a = −2."),
  num("Une arche parabolique mesure 20 m de largeur et 8 m de hauteur. Quelle est sa hauteur à 5 m d'une extrémité?", 6, "y = ax(x − 20), a = −0.08; −0.08(5)(−15)."),
  num(String.raw`Le membre de $y=a(x-1)(x-5)$ qui passe par $(0,-10)$ a quelle valeur maximale?`, 8, "a = −2; en x = 3 : −2(2)(−2)."),
  tf("Deux membres différents d'une même famille y = a(x − r)(x − s) peuvent se rencontrer en un point autre que les zéros.", false, "a₁f(x) = a₂f(x) seulement là où f(x) = 0."),
  num(String.raw`Une parabole a les zéros 4 et $-2$, et l'ordonnée de son sommet est $-18$. Trouve $a$.`, 2, "En x = 1 : a(−3)(3) = −18."),
  mc(String.raw`Quelle parabole a les zéros $\pm\sqrt7$ et l'ordonnée à l'origine $-14$?`, String.raw`$y=2x^2-14$`, [String.raw`$y=x^2-7$`, String.raw`$y=-2x^2+14$`, String.raw`$y=2x^2-7$`], "a(x² − 7) avec −7a = −14."),
  num("La parabole a les zéros −1 et 3 et passe par (1, −6). Trouve a.", 1.5, "a(2)(−2) = −6.", graph((x) => 1.5 * (x + 1) * (x - 3), V8, [P(-1, 0), P(3, 0), P(1, -6)]), 0.001),
  num(String.raw`Une parabole a les zéros $2\pm\sqrt6$ et passe par $(2,12)$. Trouve son ordonnée à l'origine.`, 4, "a[(x − 2)² − 6] : −6a = 12 → a = −2; y(0) = −2(4 − 6)."),
  ms(String.raw`Pour les membres de $y=a(x^2-2x-3)$ avec $a>0$, lesquels sont vrais? Choisis toutes les bonnes réponses.`, ["zéros 3 et −1", "axe x = 1", "le sommet est un minimum", "l'ordonnée à l'origine est négative", "le sommet est (1, 4a)"], [0, 1, 2, 3], "Le sommet est (1, −4a)."),
  num("Une parabole a le sommet (5, −2) et passe par (3, 6). Trouve a.", 2, "4a − 2 = 6."),
  num("L'arche d'un tunnel mesure 12 m de largeur et 9 m de hauteur. Quelle est sa hauteur à 2 m d'un côté?", 5, "a(6)(−6) = 9 → a = −0.25; −0.25(2)(−10)."),
  num(String.raw`Quelle est la somme des zéros de $3x^2-12x+2$?`, 4, "Axe x = 2; la moyenne des zéros est donc 2."),
  num("Deux membres de y = a(x + 1)(x − 3) passent par (1, 8) et par (1, −4). Quelle est la différence entre leurs valeurs de a?", 3, "a(2)(−2) : −4a = 8 → −2; −4a = −4 → 1.", fam(-1, 3, [-2, 1])),
  tf(String.raw`Les zéros $5\pm\sqrt3$ peuvent provenir d'une fonction du second degré à coefficients entiers.`, true, "(x − 5)² − 3 = x² − 10x + 22."),
];
