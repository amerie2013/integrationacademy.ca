// 3.8 Systèmes linéaires-quadratiques — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";
import { TITLE } from "../l3_8.mjs";

const V8 = { xmin: -6, xmax: 6, ymin: -8, ymax: 12 };

export const TOPIC = TITLE;
export const Q = [
  num(String.raw`Pour $k>0$, $y=kx-4$ est tangente à $y=x^2$. Trouve l'ordonnée du point de contact.`, 4, "x² − kx + 4 : k = 4, x = 2."),
  num(String.raw`Quelle droite de pente 3, $y=3x+k$, est tangente à $y=x^2+x+5$? Donne $k$.`, 4, "x² − 2x + 5 − k : 4 − 4(5 − k) = 0."),
  num(String.raw`Le réservoir A contient $4(t-10)^2$ L pour $0\le t\le10$ min; le réservoir B est vide au départ et se remplit à raison de 20 L/min. Quand contiennent-ils la même quantité (min)?`, 5, "4t² − 100t + 400 = 0 → t² − 25t + 100 = 0 → t = 5 (20 est hors du domaine)."),
  num(String.raw`Le réservoir A contient $4(t-10)^2$ L pour $0\le t\le10$ min; le réservoir B est vide au départ et se remplit à raison de 20 L/min. Combien de litres contient chacun lorsqu'ils contiennent la même quantité?`, 100, "Ils sont égaux en t = 5; 20 × 5."),
  num(String.raw`Trouve la distance entre les points où $y=x^2-4x$ rencontre $y=2x-5$ (au centième).`, Math.sqrt(80), "x = 1, 5 : (1, −3), (5, 5).", planeDoc({ view: { xmin: -1, xmax: 7, ymin: -6, ymax: 8 }, curves: [{ f: (x) => x * x - 4 * x, color: "violet" }], lines: [{ m: 2, b: -5, color: "blue" }], points: [P(1, -3), P(5, 5)] }), 0.01),
  num(String.raw`$y=x^2$ rencontre $y=x+2$ en deux points A et B. Trouve l'aire du triangle OAB (O est l'origine).`, 3, "A(2, 4), B(−1, 1) : ½|2·1 − (−1)·4|."),
  mc(String.raw`Pour quelle valeur de $b$ la droite $y=2x+b$ est-elle tangente à $y=-x^2+4x$?`, String.raw`$b=1$`, [String.raw`$b=-1$`, String.raw`$b=4$`, String.raw`$b=0$`], "−x² + 2x − b : 4 − 4b = 0."),
  num(String.raw`La hauteur d'une fusée est $h(t)=-5t^2+50t$ et celle d'un drone, $d(t)=10t+35$. Pendant combien de secondes la fusée est-elle au-dessus du drone?`, 6, "t² − 8t + 7 = 0 → 1 et 7."),
  num("Une droite de pente positive qui passe par (0, −5) est tangente à y = x². Trouve sa pente (au centième).", Math.sqrt(20), "x² − mx + 5 = 0 : m² = 20.", planeDoc({ view: V8, curves: [{ f: (x) => x * x, color: "violet" }], lines: [{ m: Math.sqrt(20), b: -5, color: "amber", dash: true }], points: [P(0, -5)] }), 0.01),
  tf("Une droite verticale peut être tangente à une parabole ouverte vers le haut.", false, "Elle la coupe exactement une fois, mais elle n'est pas tangente; la méthode des systèmes exige des droites non verticales."),
  num(String.raw`Pour quelle valeur de $c$ la parabole $y=x^2+c$ est-elle tangente à $y=6x$?`, 9, "x² − 6x + c : 36 − 4c = 0."),
  num(String.raw`$y=x^2-2x-3$ et $y=2x-3$ se rencontrent à l'ordonnée à l'origine et en un autre point. Trouve son abscisse.`, 4, "x² − 4x = 0."),
  num(String.raw`Pour combien d'entiers $m$ de $-10$ à $10$ la droite $y=mx+1$ ne rencontre-t-elle pas $y=x^2+2$?`, 3, "x² − mx + 1 : m² < 4 → m = −1, 0, 1."),
  num("Revenu R = −x² + 26x et coût C = 4x + 85 (en milliers). Quelle est la largeur de l'intervalle de x pour lequel il y a un profit?", 12, "x² − 22x + 85 = 0 → 5 et 17.", planeDoc({ view: { xmin: 0, xmax: 26, ymin: 0, ymax: 180 }, curves: [{ f: (x) => -x * x + 26 * x, color: "violet" }], lines: [{ m: 4, b: 85, color: "blue" }], points: [P(5, 105), P(17, 153)], step: { x: 2, y: 20 } })),
  num(String.raw`$y=x^2$ et $y=2x+3$ se rencontrent en A et en B. Trouve l'abscisse du point milieu de AB.`, 1, "x = −1 et 3."),
  mc(String.raw`Quelle parabole $y=x^2+bx+c$ est tangente à $y=2x+1$ en $x=1$?`, String.raw`$y=x^2+2$`, [String.raw`$y=x^2+1$`, String.raw`$y=x^2+2x$`, String.raw`$y=x^2-2x+4$`], "x² + (b − 2)x + c − 1 = (x − 1)² : b = 0, c = 2."),
  num(String.raw`La hauteur d'un ballon est $h(t)=-4.9t^2+24.5t$ et un ascenseur monte selon $p(t)=4.9t+9.8$. Quand le ballon dépasse-t-il l'ascenseur pour la première fois (au centième)?`, 2 - Math.sqrt(2), "t² − 4t + 2 = 0 → t = 2 ± √2.", null, 0.01),
  num("La droite horizontale y = k rencontre y = −(x − 2)² + 4 exactement une fois. Trouve k.", 4, "Au sommet.", planeDoc({ view: V8, curves: [{ f: (x) => -((x - 2) ** 2) + 4, color: "violet" }], lines: [{ m: 0, b: 4, color: "amber", dash: true }], points: [P(2, 4)] })),
  num("Deux droites qui passent par (1, −3) sont tangentes à y = x². Quelle est la somme de leurs pentes?", 4, "y = m(x − 1) − 3 : x² − mx + m + 3 = 0, D = m² − 4m − 12 = 0 → m = 6, −2."),
  num(String.raw`$y=x^2$ et $y=x+k$ se rencontrent en deux points dont les abscisses diffèrent de 5. Trouve $k$.`, 6, "x² − x − k : les racines diffèrent de √(1 + 4k) = 5."),
];
