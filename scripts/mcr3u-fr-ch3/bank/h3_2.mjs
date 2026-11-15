// 3.2 Passer d'une forme à l'autre — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { P, graph, planeDoc } from "./fig.mjs";
import { TITLE } from "../l3_2.mjs";

const S = String.raw;
const V10 = { xmin: -10, xmax: 10, ymin: -10, ymax: 10 };

export const TOPIC = TITLE;
export const Q = [
  num(S`Une parabole a les zéros $-4$ et $8$ et une valeur maximale de 18. Trouve son ordonnée à l'origine.`, 16, "Axe 2 : a(6)(−6) = 18 → a = −½; y(0) = −½(4)(−8)."),
  num(S`$f(x)=x^2+bx+c$ a le sommet $(-3,2)$. Trouve $f(1)$.`, 18, "(x + 3)² + 2 = x² + 6x + 11."),
  mc("La parabole ci-contre a les zéros 0 et 4 et le sommet (2, −8). Quelle est son équation?", S`$y=2x^2-8x$`, [S`$y=x^2-4x$`, S`$y=-2x^2+8x$`, S`$y=2x^2+8x$`], "2x(x − 4).", graph((x) => 2 * x * x - 8 * x, V10, [P(0, 0), P(4, 0), P(2, -8)])),
  num(S`Une parabole passe par $(1,0)$, $(5,0)$ et $(3,-6)$. Trouve $a$.`, 1.5, "a(2)(−2) = −6.", null, 0.001),
  num(S`Quelle distance sépare les sommets de $y=x^2-4x+7$ et de $y=-x^2+4x-1$?`, 0, "Les deux sommets sont (2, 3)."),
  num(S`$y=x^2+bx+16$ a son sommet sur l'axe des x et $b>0$. Trouve $b$.`, 8, "(x + 4)²."),
  num(S`La hauteur d'un ballon est $h(t)=-5t^2+20t+2$ m. Trouve sa hauteur maximale.`, 22, "t = 2 : −20 + 40 + 2."),
  num(S`$f(x)=-2x^2+bx-7$ atteint son maximum en $x=3$. Trouve la valeur maximale.`, 11, "b = 12; −18 + 36 − 7."),
  num(S`Une parabole a le sommet $(2,-3)$ et un zéro en $x=5$. Trouve son ordonnée à l'origine (au millième).`, -1.667, "9a − 3 = 0 → a = ⅓; ⅓(4) − 3.", null, 0.002),
  mc(S`Quelle fonction du second degré a les zéros 2 et 8 et passe par $(5,18)$?`, S`$y=-2(x-2)(x-8)$`, [S`$y=2(x-2)(x-8)$`, S`$y=-2(x+2)(x+8)$`, S`$y=-(x-2)(x-8)$`], "a(3)(−3) = 18."),
  num("La parabole passe par (−2, 0), (4, 0) et (0, −4). Trouve l'ordonnée de son sommet.", -4.5, "a(2)(−4) = −4 → a = ½; sommet en x = 1 : ½(3)(−3).", graph((x) => 0.5 * (x + 2) * (x - 4), V10, [P(-2, 0), P(4, 0), P(0, -4)]), 0.001),
  tf("Deux fonctions du second degré différentes peuvent avoir le même sommet et la même ordonnée à l'origine.", false, "La forme canonique et un point de plus fixent a."),
  num("Quelle distance sépare les zéros de y = 2x² − 4x − 6?", 4, "2(x − 3)(x + 1).", planeDoc({ view: V10, curves: [{ f: (x) => 2 * x * x - 4 * x - 6, color: "violet" }], points: [P(-1, 0), P(3, 0)] })),
  num(S`$y=ax^2+bx+c$ a le sommet $(1,-8)$ et passe par $(3,0)$. Trouve $c$.`, -6, "4a − 8 = 0 → a = 2; 2(x − 1)² − 8 = 2x² − 4x − 6."),
  num(S`$y=-x^2+bx+c$ a les zéros $-1$ et $5$. Trouve $b+c$.`, 9, "−(x + 1)(x − 5) = −x² + 4x + 5."),
  num("La parabole ci-contre passe par (−3, 0), (1, 0) et (−1, 8). Écris-la sous forme générale. Quelle est la valeur de c?", 6, "a(2)(−2) = 8 → a = −2; −2(x² + 2x − 3).", graph((x) => -2 * (x + 3) * (x - 1), V10, [P(-3, 0), P(1, 0), P(-1, 8)])),
  ms(S`Quelles expressions sont égales à $x^2-6x+5$? Choisis toutes les bonnes réponses.`, ["(x − 1)(x − 5)", "(x − 3)² − 4", "(x − 3)² + 5", "(x + 1)(x + 5)"], [0, 1], "(x − 3)² − 4 = x² − 6x + 9 − 4."),
  num(S`Pour $y=kx^2-8x+3$, l'axe est $x=2$. Trouve $k$.`, 2, "8/(2k) = 2."),
  num(S`Les paraboles $y=x^2-6x+c$ et $y=-(x-3)^2+5$ ont le même sommet. Trouve $c$.`, 14, "Sommet de la première : (3, c − 9) = (3, 5)."),
  num("La parabole ci-contre a les zéros −1 et 5 et l'ordonnée à l'origine 2.5. Sous forme canonique y = a(x − h)² + k, quelle est la valeur de k?", 4.5, "a(1)(−5) = 2.5 → a = −½; axe 2 : −½(3)(−3).", graph((x) => -0.5 * (x + 1) * (x - 5), V10, [P(-1, 0), P(5, 0), P(0, 2.5)]), 0.001),
];
