// 1.7 Étirements, compressions et réflexions horizontaux — 20 questions difficiles (miroir de ../../mcr3u-ch1/bank/h1_7.mjs)
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P } from "./fig.mjs";

export const TOPIC = "1.7 Étirements, compressions et réflexions horizontaux";
export const Q = [
  num(String.raw`$f(x)=x^2+6x$. Trouve l'abscisse du sommet de $y=f(-\tfrac13x)$.`, 9, "Sommet de f en x = −3 → −3 ÷ (−⅓)."),
  num(String.raw`$f$ a pour zéros $-4$ et $10$. Trouve $k$ pour que $y=f(kx)$ ait pour zéros $2$ et $-5$.`, -2, "−4/k = 2."),
  mx(String.raw`$f(x)=x^2-2x$. Écris $f(3x)$ sous forme développée.`, "9*x^2-6*x", "(3x)² − 2(3x)."),
  num(String.raw`$y=\sqrt{kx}$ passe par $(-8,4)$. Trouve $k$.`, -2, "−8k = 16."),
  ms(String.raw`Pour $f(x)=\sqrt x$, lesquelles sont égales à $y=\sqrt{16x}$? Choisis toutes les bonnes réponses.`, [String.raw`$4\sqrt x$`, String.raw`$f(16x)$`, String.raw`$16f(x)$`, String.raw`$4f(x)$`], [0, 1, 3], "√16 · √x = 4√x."),
  num("La courbe grise est y = f(x); la courbe rouge est y = f(kx). Trouve k.", 3, "(6, 2) devient (2, 2) : 6 ÷ k = 2.", planeDoc({ view: { xmin: -2, xmax: 9, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(2 * x / 3), a: 0, color: "gray" }, { f: (x) => Math.sqrt(2 * x), a: 0, color: "red" }], points: [P(6, 2, null, "gray"), P(2, 2, null, "red")] })),
  num(String.raw`$f$ a pour domaine $-6\le x\le9$. Quelle est la longueur de l'intervalle du domaine de $y=f(-\tfrac13x)$?`, 45, "Extrémités 18 et −27."),
  tf(String.raw`Pour toute fonction $f$, les graphiques de $y=f(-x)$ et de $y=-f(x)$ sont identiques.`, false, "Vrai seulement pour les fonctions impaires comme x ou 1/x."),
  num("Le graphique gris est y = f(x). Le graphique rouge est obtenu par une réflexion et un changement horizontal : y = f(kx). Trouve k.", -0.5, "(2, 3) devient (−4, 3) : 2 ÷ k = −4.", planeDoc({ view: { xmin: -7, xmax: 5, ymin: -1, ymax: 5 }, curves: [{ f: (x) => (x >= 0 ? 1.5 * x : NaN), a: 0, b: 3, color: "gray" }, { f: (x) => (x <= 0 ? -0.75 * x : NaN), a: -6, b: 0, color: "red" }], points: [P(2, 3, null, "gray"), P(-4, 3, null, "red")] }), 0.001),
  mc(String.raw`$f(x)=(x-2)(x+6)$. Quelle est la forme factorisée de $y=f(2x)$?`, String.raw`$(2x-2)(2x+6)=4(x-1)(x+3)$`, [String.raw`$2(x-2)(x+6)$`, String.raw`$(x-4)(x+12)$`, String.raw`$(x-1)(x+3)$`], "Remplace x par 2x; zéros 1 et −3."),
  num(String.raw`Le point $(a,b)$ de $y=\frac1x$ avec $a=3$ correspond à quelle ordonnée sur $y=\frac1{-3x}$?`, 0.3333, "x : 3 → −1; y reste 1/3.", null, 0.002),
  num(String.raw`$f(x)=|x-3|$. Trouve l'abscisse du sommet de $y=f(\tfrac14x)$.`, 12, "|x/4 − 3| = 0 → x = 12."),
  mc(String.raw`Quelle transformation de $y=\frac1x$ donne le même graphique que $y=\frac{2}{x}$?`, String.raw`étirement horizontal de facteur 2`, ["compression horizontale de facteur ½", "réflexion par rapport à l'axe des y", "translation de 2 vers le haut"], "f(½x) = 1/(x/2) = 2/x."),
  num(String.raw`$f$ a pour image $3\le y\le11$ et pour domaine $0\le x\le8$. Quelle est l'extrémité droite du domaine de $y=f(\tfrac23x)$?`, 12, "8 ÷ ⅔."),
  ms("La courbe grise est y = x² − 4. Quelles équations donnent la courbe rouge? Choisis toutes les bonnes réponses.", [String.raw`$y=(2x)^2-4$`, String.raw`$y=4x^2-4$`, String.raw`$y=2x^2-4$`, String.raw`$y=(-2x)^2-4$`], [0, 1, 3], "Zéros ±2 → ±1 : compression de facteur ½ (avec ou sans réflexion).", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -5, ymax: 6 }, curves: [{ f: (x) => x * x - 4, color: "gray" }, { f: (x) => 4 * x * x - 4, color: "red" }], points: [P(1, 0), P(-1, 0), P(2, 0, null, "gray")] })),
  num(String.raw`$y=\sqrt{a-x}$ a pour domaine $x\le7$. Trouve $a$.`, 7, "a − x ≥ 0 → x ≤ a."),
  tf(String.raw`$y=\sqrt{-x}$ et $y=-\sqrt x$ ont la même image.`, false, "y ≥ 0 contre y ≤ 0."),
  num(String.raw`$f$ a un maximum en $(-5,2)$. Trouve l'abscisse du maximum de $y=f(-\tfrac52x)$.`, 2, "−5 ÷ (−5/2)."),
  num(String.raw`$f(x)=x^2-10x+21$. Trouve le plus grand zéro de $y=f(-x)$.`, -3, "Zéros de f : 3, 7 → −3, −7."),
  mc("La courbe grise est y = 1/x. Quelle équation donne la courbe rouge?", String.raw`$y=\frac1{-3x}$`, [String.raw`$y=\frac{1}{3x}$`, String.raw`$y=\frac{-3}{x}$`, String.raw`$y=\frac1x-3$`], "La rouge passe par (−⅓, 1) : réflexion et compression de facteur ⅓.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 1 / x, color: "gray" }, { f: (x) => 1 / (-3 * x), color: "red" }], points: [P(-1 / 3, 1, false, "red"), P(1, 1, false, "gray")] })),
];
