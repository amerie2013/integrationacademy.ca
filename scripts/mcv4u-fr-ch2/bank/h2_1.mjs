// 2.1 Dérivée d'une fonction polynomiale — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "2.1 Dérivée d'une fonction polynomiale";
export const Q = [
  num("La tangente à y = x³ − x en x = −1 est tracée. Quelle est son ordonnée à l'origine?", 2, "Pente 3 − 1 = 2, passant par (−1, 0) : y = 2x + 2.", graph((x) => x ** 3 - x, { xmin: -2, xmax: 2, ymin: -3, ymax: 4 }, [P(-1, 0)], { more: [{ f: (x) => 2 * x + 2, color: "green" }] })),
  num(S`$y=x^2+bx+4$ a une tangente de pente 1 en $x=2$. Trouve $b$.`, -3, "4 + b = 1."),
  num("Le graphique de y = x³ − 6x² + 9x est illustré. Pour quelle valeur de x, la plus grande, la tangente est-elle horizontale?", 3, "3x² − 12x + 9 = 3(x − 1)(x − 3).", graph((x) => x ** 3 - 6 * x * x + 9 * x, { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 6 }, [P(1, 4), P(3, 0)])),
  num(S`En quel point la tangente à $y=x^2$ est-elle parallèle à $y=6x-1$? Donne l'ordonnée.`, 9, "2x = 6 : point (3, 9)."),
  num(S`Trouve l'ordonnée à l'origine de la normale à $y=x^3$ en $x=1$ (4 décimales).`, 1.3333, "Pente de la normale −⅓, passant par (1, 1) : y = −⅓x + 4/3.", null, 0.0005),
  mc(S`Quelles droites passant par $(1,-3)$ sont tangentes à $y=x^2$?`, S`$y=6x-9$ et $y=-2x-1$`, [S`$y=2x-5$ et $y=-6x+3$`, S`$y=6x-9$ seulement`, S`$y=4x-7$ et $y=-4x+1$`], "Tangente en a : y = 2ax − a²; −3 = 2a − a² donne a = 3 ou −1."),
  num(S`$y=ax^3$ a une tangente de pente 12 en $x=-2$. Trouve $a$.`, 1, "3a(4) = 12."),
  num(S`Combien de tangentes à $y=x^3$ ont une pente de 3?`, 2, "3x² = 3 : x = ±1."),
  num("Le graphique de y = x³ − 6x² + 15x est illustré. Quelle est la plus petite pente d'une tangente?", 3, "y′ = 3x² − 12x + 15 a son minimum en x = 2 : 12 − 24 + 15.", graph((x) => x ** 3 - 6 * x * x + 15 * x, { xmin: -0.5, xmax: 4.5, ymin: -5, ymax: 30 }, [P(2, 14)], { more: [{ f: (x) => 14 + 3 * (x - 2), color: "green" }], step: { x: 1, y: 5 } })),
  num(S`Pour $f(x)=x^{-3}$, trouve $f'(-1)$.`, -3, "−3x⁻⁴ en −1."),
  num(S`La tangente à $y=\sqrt x$ en $x=1$ coupe l'axe des x en quelle valeur de $x$?`, -1, "Pente ½, passant par (1, 1) : y = ½x + ½."),
  num("La tangente à y = x² − 4x en x = 3 est tracée. Où coupe-t-elle l'axe des y?", -9, "Pente 2, passant par (3, −3) : y = 2x − 9.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -10, ymax: 6 }, curves: [{ f: (x) => x * x - 4 * x, color: "violet" }, { f: (x) => 2 * x - 9, color: "green" }], points: [P(3, -3)], step: { x: 1, y: 2 } })),
  tf(S`La règle de la puissance donne $\frac{d}{dx}x^{\pi}=\pi x^{\pi-1}$.`, true, "Elle est vraie pour tout exposant réel."),
  num("Un carré a un côté de s cm. Trouve le taux de variation de son aire par rapport à s lorsque s = 7.", 14, "dA/ds = 2s."),
  num("Un cube a une arête de e cm. Trouve le taux de variation de son volume par rapport à e lorsque e = 4.", 48, "3e²."),
  num("Combien de tangentes horizontales y = x⁴ − 8x² a-t-elle?", 3, "4x³ − 16x = 4x(x − 2)(x + 2).", graph((x) => x ** 4 - 8 * x * x, { xmin: -3.2, xmax: 3.2, ymin: -18, ymax: 10 }, [P(-2, -16), P(0, 0), P(2, -16)], { step: { x: 1, y: 2 } })),
  num(S`$y=ax^2+bx$ a une tangente de pente 8 en $(1,5)$. Trouve $a$.`, 3, "a + b = 5 et 2a + b = 8."),
  num(S`Les tangentes à $y=x^3-3x$ en deux points sont parallèles à $y=9x$. Trouve l'ordonnée du point dont l'abscisse $x$ est positive.`, 2, "3x² − 3 = 9 : x = 2, y = 8 − 6."),
  num(S`Pour $y=\frac{x^2+1}{\sqrt x}$, trouve $y'(4)$ en réécrivant d'abord sous forme de puissances (4 décimales).`, 2.9375, "y = x^(3/2) + x^(−1/2); y′ = 1.5x^(1/2) − 0.5x^(−3/2) = 3 − 1/16.", null, 0.0005),
  num("La tangente à y = x² en x = a (a > 0) passe par (0, −16). Trouve a.", 4, "y = 2ax − a² coupe l'axe des y en −a² = −16.", graph((x) => x * x, { xmin: -2, xmax: 6, ymin: -18, ymax: 26 }, [P(4, 16), P(0, -16)], { more: [{ f: (x) => 8 * x - 16, color: "green" }], step: { x: 1, y: 4 } })),
];
