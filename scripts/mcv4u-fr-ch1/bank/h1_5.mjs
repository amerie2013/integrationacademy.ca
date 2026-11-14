// 1.5 Introduction aux dérivées — 20 questions difficiles
import { mc, num, tf, mx } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "1.5 Introduction aux dérivées";
export const Q = [
  mx(String.raw`Trouve $f'(x)$ pour $f(x)=\frac1{x-2}$.`, "-1/(x-2)^2", "−1/((x + h − 2)(x − 2))."),
  mx(String.raw`Trouve $f'(x)$ pour $f(x)=\sqrt{x+4}$.`, "1/(2*sqrt(x+4))", "Rationalise."),
  num(String.raw`$f(x)=ax^2+bx$ est telle que $f'(0)=3$ et $f'(1)=7$. Trouve $a$.`, 2, "f′(x) = 2ax + b : b = 3, 2a + 3 = 7."),
  num(String.raw`Pour quelle valeur positive de $x$ la tangente à $y=x^3-27x$ est-elle horizontale?`, 3, "3x² − 27 = 0."),
  num(String.raw`Trouve l'ordonnée à l'origine de la tangente à $y=\sqrt x$ en $x=9$.`, 1.5, "Pente 1/6, passant par (9, 3).", null, 0.0001),
  mc("Le graphique de f est une fonction cubique qui monte, puis descend entre x = −1 et x = 2, puis monte. Qu'est-ce qui décrit f′?", "une parabole ouverte vers le haut avec des zéros en −1 et 2", ["une parabole ouverte vers le bas avec des zéros en −1 et 2", "une droite qui coupe zéro en 0.5", "une fonction cubique"], "f′ > 0, puis < 0, puis > 0.", graph((x) => (2 * x ** 3 - 3 * x * x - 12 * x) / 6, { xmin: -3, xmax: 4, ymin: -4, ymax: 4 })),
  tf(String.raw`$f(x)=\sqrt[3]{x}$ n'a pas de dérivée en $x=0$.`, true, "Une tangente verticale."),
  num(String.raw`Pour $f(x)=\frac1{x^2}$, trouve $f'(1)$.`, -2, "−2/x³."),
  mx(String.raw`Trouve $f'(x)$ pour $f(x)=x^4-2x^2$.`, "4*x^3-4*x", "Terme par terme, à partir de la définition."),
  num(String.raw`Pour quelle valeur de $x$ la tangente à $y=x^2$ est-elle parallèle à $y=6x+1$?`, 3, "2x = 6."),
  num(String.raw`La tangente à $y=x^3$ en $x=1$ rencontre de nouveau la courbe pour quelle valeur de $x$?`, -2, "x³ − 3x + 2 = (x − 1)²(x + 2).", planeDoc({ view: { xmin: -3, xmax: 2, ymin: -9, ymax: 5 }, curves: [{ f: (x) => x ** 3, color: "violet" }, { f: (x) => 3 * x - 2, color: "green" }], points: [P(1, 1)], step: { x: 1, y: 1 } })),
  num("La tangente en x = 2 est tracée sur le graphique. Lis f′(2) à partir de cette tangente.", 1.5, "Elle passe par (2, 1.5) et (4, 4.5) : 3 ÷ 2.", graph((x) => 0.375 * x * x, { xmin: -1, xmax: 5, ymin: -1, ymax: 8 }, [P(2, 1.5), P(4, 4.5)], { more: [{ f: (x) => 1.5 + 1.5 * (x - 2), color: "green" }] }), 0.001),
  num(String.raw`L'aire d'un cercle est $A=\pi r^2$. Trouve le taux de variation de l'aire par rapport au rayon à $r=3$ (2 décimales).`, 18.85, "2πr = 6π.", null, 0.01),
  mx(String.raw`Trouve $f'(x)$ pour $f(x)=x^3+3x^2+3x$.`, "3*x^2+6*x+3", "Terme par terme."),
  num(String.raw`Trouve $c$ pour que la tangente à $y=x^2+c$ en $x=1$ passe par l'origine.`, 1, "Tangente y − (1 + c) = 2(x − 1); en (0, 0) : c = 1."),
  num(String.raw`Pour $f(x)=\frac1{\sqrt x}$, trouve $f'(4)$ (4 décimales).`, -0.0625, "−1/(2x^{3/2}) = −1/16.", null, 0.0001),
  num("En combien de points la fonction représentée n'est-elle pas dérivable?", 2, "Des coins en x = ±1.", graph((x) => Math.abs(x * x - 1), { xmin: -2.5, xmax: 2.5, ymin: -1, ymax: 5 })),
  tf("Si f′(a) existe, alors f est continue en a.", true, "Dérivable entraîne continue."),
  num(String.raw`Pour $f(x)=x|x|$, trouve $f'(0)$.`, 0, "(h|h|)/h = |h| → 0."),
  num(String.raw`Pour quelle valeur positive de $x$ les tangentes à $y=x^2$ et à $y=x^4$ sont-elles parallèles? (4 décimales)`, 0.7071, "2x = 4x³ → x² = ½.", null, 0.0005),
];
