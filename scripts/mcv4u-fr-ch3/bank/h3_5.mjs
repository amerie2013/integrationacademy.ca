// 3.5 Synthèse : l'esquisse de courbes — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { planeDoc, graph, P } from "./fig.mjs";

const S = String.raw;
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const VC = { xmin: -6, xmax: 6, ymin: -10, ymax: 10 };
const VD = { xmin: -5, xmax: 8, ymin: -8, ymax: 16 };
export const TOPIC = "3.5 Synthèse : l'esquisse de courbes";
export const Q = [
  num("Voici le graphique de f(x) = x⁴ − 4x³ − 8x². Trouve la valeur de son minimum absolu.", -128, "f′ = 4x(x − 4)(x + 1) : f(4) = −128, f(−1) = −3.", graph((x) => x ** 4 - 4 * x ** 3 - 8 * x * x, { xmin: -2, xmax: 5.5, ymin: -140, ymax: 30 }, [P(4, -128), P(-1, -3), P(0, 0)], { step: { x: 1, y: 20 } })),
  num(S`Trouve la valeur minimale de $f(x)=x^{1/3}(x+3)$ (3 décimales).`, -2.044, "f′ = x^(−2/3)(4x + 3)/3 : minimum en x = −0.75.", null, 0.005),
  num(S`Trouve la valeur du minimum relatif de $f(x)=\frac{x^2-3x}{x+1}$.`, -1, "f = x − 4 + 4/(x + 1) : minimum en x = 1."),
  mc(S`Sur un intervalle où $f'\gt0$ et $f''\gt0$, le graphique est :`, "croissant et se courbe vers le haut", ["croissant et se courbe vers le bas", "décroissant et se courbe vers le haut", "décroissant et se courbe vers le bas"], "Croissant et concave vers le haut."),
  num(S`Une cubique a son point d'inflexion en $(1,2)$, une pente de $-3$ en ce point et un coefficient dominant de 1. Trouve $f(0)$.`, 4, "f = (x − 1)³ − 3(x − 1) + 2."),
  num("Voici le graphique de f(x) = x(x − 2)³. Quelle est sa valeur minimale? (4 décimales)", -1.6875, "f′ = (x − 2)²(4x − 2) : minimum en x = 0.5.", graph((x) => x * (x - 2) ** 3, { xmin: -0.8, xmax: 3, ymin: -3, ymax: 4 }, [P(0.5, -1.6875), P(2, 0), P(0, 0)], { step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`Combien de points d'inflexion $f(x)=x(x-2)^3$ a-t-elle?`, 2, "f″ = 12(x − 2)(x − 1)."),
  tf(S`Un polynôme de degré $n\ge2$ a au plus $n-2$ points d'inflexion.`, true, "f″ est de degré n − 2."),
  num(S`Combien d'asymptotes (verticales et horizontales) $f(x)=\frac{x^2+2}{x^2-2}$ a-t-elle?`, 3, "x = ±√2 et y = 1."),
  num("Voici le graphique de f(x) = x³/(x² − 3). Trouve la valeur du minimum relatif.", 4.5, "f′ = x²(x² − 9)/(x² − 3)² : minimum en x = 3, f = 27/6.", planeDoc({ view: VC, curves: rat((x) => x ** 3 / (x * x - 3), [-Math.sqrt(3), Math.sqrt(3)], VC), vlines: [{ x: -Math.sqrt(3), color: "red", dash: true }, { x: Math.sqrt(3), color: "red", dash: true }], lines: [{ m: 1, b: 0, color: "red", dash: true }], points: [P(3, 4.5), P(-3, -4.5)], step: { x: 1, y: 2 } }), 0.0001),
  num(S`Combien de nombres critiques $f(x)=\frac{x^3}{x^2-3}$ a-t-elle?`, 3, "x²(x² − 9) = 0 : 0, ±3."),
  mc(S`$f'(x)=(x+2)(x-1)^2(x-4)$. Classe les nombres critiques.`, S`maximum en $-2$, minimum en $4$, ni l'un ni l'autre en $1$`, [S`minimum en $-2$, maximum en $4$, maximum en $1$`, S`maximum en $-2$, minimum en $1$, maximum en $4$`, S`ni l'un ni l'autre en $-2$, minimum en $4$, maximum en $1$`], "Signes : +, −, −, +."),
  num(S`Une cubique a un maximum relatif en $(0,6)$ et un minimum relatif en $(2,2)$. Trouve $f(-1)$.`, 2, "f = x³ − 3x² + 6."),
  tf("Le graphique d'une fonction rationnelle peut traverser son asymptote oblique.", true, "La fraction qui reste peut s'annuler pour certaines valeurs de x."),
  num(S`Pour quelle valeur positive de $x$ la fonction $f(x)=\frac{x}{x^2+12}$ a-t-elle un point d'inflexion?`, 6, "f″ ∝ x(x² − 36)."),
  num("Voici le graphique de f(x) = (x + 1)²/(x − 1). Trouve la valeur de son minimum relatif.", 8, "f = x + 3 + 4/(x − 1) : minimum en x = 3.", planeDoc({ view: VD, curves: rat((x) => (x + 1) ** 2 / (x - 1), [1], VD), vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 1, b: 3, color: "red", dash: true }], points: [P(3, 8), P(-1, 0)], step: { x: 1, y: 2 } })),
  num(S`Trouve le minimum absolu de $f(x)=x^4-6x^2+5$.`, -4, "x² = 3 : 9 − 18 + 5."),
  mc(S`$f(2)=0$, $f'(2)=0$ et $f''(2)\gt0$. Près de $x=2$, le graphique :`, "touche l'axe des x par le haut en un minimum", ["traverse l'axe des x en un point d'inflexion", "a un maximum sur l'axe des x", "a une asymptote verticale"], "Minimum relatif de valeur 0."),
  num(S`Trouve l'asymptote horizontale de $f(x)=\frac{3x^3}{x^3+1}$ : $y=\,?$`, 3, "Degrés égaux."),
  num(S`Trouve la valeur minimale de $f(x)=x-\sqrt x$.`, -0.25, "f′ = 1 − 1/(2√x) : minimum en x = 1/4.", null, 0.0001),
];
