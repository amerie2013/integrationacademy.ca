// 3.2 Maximums et minimums — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "3.2 Maximums et minimums";
export const Q = [
  num("Voici le graphique de f(x) = x⁴ − 6x² + 8. Trouve son minimum absolu sur [−2, 3].", -1, "f′ = 4x(x² − 3) : f(±√3) = −1; f(−2) = 0, f(0) = 8, f(3) = 35.", graph((x) => x ** 4 - 6 * x * x + 8, { xmin: -2.5, xmax: 3.2, ymin: -3, ymax: 12 }, [P(-Math.sqrt(3), -1), P(Math.sqrt(3), -1), P(0, 8)], { step: { x: 0.5, y: 2 } })),
  num(S`$f(x)=x^3+ax+b$ a un minimum relatif en $(1,2)$. Trouve $b$.`, 4, "f′(1) = 3 + a = 0 ⇒ a = −3; f(1) = 1 − 3 + b = 2."),
  num(S`Trouve le maximum absolu de $f(x)=x\sqrt{9-x^2}$ sur $[0,3]$.`, 4.5, "f′ = (9 − 2x²)/√(9 − x²) : x = 3/√2, f = 9/2.", null, 0.0001),
  num(S`Trouve le minimum absolu de $f(x)=x^2+\frac{16}{x}$ sur $[1,4]$.`, 12, "2x − 16/x² = 0 en x = 2 : 4 + 8."),
  num("Voici le graphique de f(x) = x³ − 9x² + 24x sur [0, 5]. Trouve son maximum absolu.", 20, "f(0) = 0, f(2) = 20, f(4) = 16, f(5) = 20 — atteint deux fois.", graph((x) => x ** 3 - 9 * x * x + 24 * x, { xmin: -0.3, xmax: 5.5, ymin: -2, ymax: 24 }, [P(2, 20), P(4, 16), P(5, 20)], { a: 0, b: 5, step: { x: 1, y: 4 } })),
  mc(S`Pour $f(x)=x^{4/5}$, le nombre critique $x=0$ est :`, "un minimum en un point de rebroussement (f′ n'existe pas)", ["un maximum", "un point d'inflexion à tangente horizontale", "pas un nombre critique"], "f′ = (4/5)x^(−1/5) : − puis +, et aucune valeur en 0."),
  num(S`Pour quelle valeur de $k$ la fonction $f(x)=x^3-3x+k$ a-t-elle un minimum relatif égal à 0?`, 2, "Minimum relatif en x = 1 : −2 + k = 0."),
  tf(S`Si $f$ n'a aucun nombre critique dans $[a,b]$, ses extremums absolus sur $[a,b]$ sont atteints aux extrémités.`, true, "Il ne reste que les extrémités comme candidats."),
  num(S`Trouve le maximum absolu de $f(x)=\frac{x+1}{x^2+8}$ sur $[0,5]$.`, 0.25, "Numérateur de f′ : −(x + 4)(x − 2); f(2) = 3/12.", null, 0.0001),
  num(S`Trouve le minimum absolu de $f(x)=x^{2/3}-2x^{1/3}$ sur $[-1,8]$.`, -1, "f′ = (2/3)x^(−2/3)(x^(1/3) − 1) : f(1) = −1; f(−1) = 3, f(0) = 0, f(8) = 0."),
  num("Le profit est P(x) = −x³ + 6x² + 15x sur [0, 8] (graphique ci-contre). Trouve le profit maximal.", 100, "P′ = −3(x − 5)(x + 1) : P(5) = 100.", graph((x) => -(x ** 3) + 6 * x * x + 15 * x, { xmin: 0, xmax: 8.5, ymin: -90, ymax: 120 }, [P(5, 100)], { a: 0, b: 8, step: { x: 1, y: 20 } })),
  num(S`Combien de nombres critiques $f(x)=|x^2-9|$ a-t-elle?`, 3, "Des points anguleux en ±3 et une tangente horizontale en 0."),
  num(S`Trouve le maximum absolu de $f(x)=x^2(x-3)^2$ sur $[0,4]$.`, 16, "f(1.5) ≈ 5.06, mais f(4) = 16."),
  mc(S`Quelle fonction a un maximum absolu sur $(0,\infty)$?`, S`$\frac{4x}{x^2+1}$`, [S`$\frac1x$`, S`$x^2$`, S`$x^3$`], "4x/(x² + 1) atteint son sommet en x = 1."),
  num(S`$f(x)=cx^2-x^3$ a un maximum relatif en $x=4$. Trouve $c$.`, 6, "f′(4) = 8c − 48 = 0."),
  num(S`Trouve le maximum absolu de $f(x)=x-x^3$ sur $[0,1]$ (4 décimales).`, 0.3849, "x = 1/√3.", null, 0.0005),
  num("Voici le graphique de f(x) = x³ − 3x² − 24x sur [−3, 6]. Trouve son minimum absolu.", -80, "f′ = 3(x − 4)(x + 2) : f(−3) = 18, f(−2) = 28, f(4) = −80, f(6) = −36.", graph((x) => x ** 3 - 3 * x * x - 24 * x, { xmin: -3.5, xmax: 6.5, ymin: -90, ymax: 40 }, [P(-2, 28), P(4, -80), P(-3, 18), P(6, -36)], { a: -3, b: 6, step: { x: 1, y: 10 } })),
  tf("Un maximum relatif peut être plus bas qu'un minimum relatif de la même fonction.", true, "x + 1/x : maximum relatif −2, minimum relatif 2."),
  num(S`$f(x)=x^3+ax^2+bx$ a les nombres critiques $-1$ et $3$. Trouve $a$.`, -3, "f′ = 3(x + 1)(x − 3) = 3x² − 6x − 9."),
  num(S`Trouve le minimum absolu de $f(x)=x^2-2|x|$ sur $[-2,2]$.`, -1, "En x = ±1."),
];
