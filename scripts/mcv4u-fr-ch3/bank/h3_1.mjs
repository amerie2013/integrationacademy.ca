// 3.1 Fonctions croissantes et décroissantes — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "3.1 Fonctions croissantes et décroissantes";
export const Q = [
  num("Voici le graphique de f(x) = x⁴ − 4x³ + 4x². Sur combien d'intervalles distincts f est-elle croissante?", 2, "f′ = 4x(x − 1)(x − 2) : (0, 1) et (2, ∞).", graph((x) => x ** 4 - 4 * x ** 3 + 4 * x * x, { xmin: -0.8, xmax: 2.8, ymin: -0.5, ymax: 3 }, [P(0, 0), P(1, 1), P(2, 0)], { step: { x: 0.5, y: 0.5 } })),
  num(S`$f(x)=\frac{x}{x^2+25}$ est croissante sur $(-a,a)$. Trouve $a$.`, 5, "Numérateur de f′ : 25 − x²."),
  num(S`$f(x)=\frac{x^2}{x-5}$ est décroissante sur $(0,5)$ et sur $(5,b)$. Trouve $b$.`, 10, "f′ = x(x − 10)/(x − 5)²."),
  num(S`$f(x)=x^{2/3}(5-x)$ est croissante sur $(0,b)$. Trouve $b$.`, 2, "f′ = (5/3)x^(−1/3)(2 − x)."),
  mc(S`Pour quelles valeurs de $k$ la fonction $f(x)=x^3+kx^2+12x$ est-elle croissante pour tout $x$?`, S`$-6\le k\le6$`, [S`$k\ge6$`, S`$k\le-6$`, S`$-12\le k\le12$`], "3x² + 2kx + 12 ≥ 0 : 4k² − 144 ≤ 0."),
  num(S`$f(x)=x-4\sqrt x$ est décroissante sur $(0,b)$. Trouve $b$.`, 4, "1 − 2/√x < 0 ⇔ √x < 2."),
  num("Voici le graphique de f′(x) = −(x − 1)²(x + 3). f est croissante pour x < a. Trouve a.", -3, "f′ > 0 seulement à gauche de −3; la racine double en 1 ne change pas le signe.", graph((x) => -((x - 1) ** 2) * (x + 3), { xmin: -4.5, xmax: 2.5, ymin: -10, ymax: 12 }, [P(-3, 0), P(1, 0)], { step: { x: 0.5, y: 2 } })),
  num(S`$f(x)=x^4+8x^3$ est décroissante pour $x\lt a$. Trouve $a$.`, -6, "f′ = 4x²(x + 6)."),
  tf("Si f et g sont toutes deux croissantes sur un intervalle, f + g l'est aussi.", true, "(f + g)′ = f′ + g′ > 0."),
  tf(S`Si $f$ est croissante, alors $f^2$ est croissante.`, false, "f(x) = x sur (−2, 0) : x² décroît."),
  num(S`$f(x)=x^3+bx^2+cx$ est décroissante exactement sur $(1,5)$. Trouve $b$.`, -9, "f′ = 3(x − 1)(x − 5) = 3x² − 18x + 15, donc 2b = −18."),
  num("Les ventes sont de S(t) = 300t/(t² + 36) milliers après t semaines (graphique ci-contre). Pendant combien de semaines augmentent-elles?", 6, "Numérateur de S′ : 300(36 − t²).", graph((t) => (300 * t) / (t * t + 36), { xmin: 0, xmax: 30, ymin: 0, ymax: 30 }, [P(6, 25)], { a: 0, b: 30, step: { x: 5, y: 5 } })),
  num(S`$f(x)=\frac{x+1}{x^2+3}$ est croissante sur $(-3,b)$. Trouve $b$.`, 1, "Numérateur de f′ : −(x + 3)(x − 1)."),
  num(S`$f(x)=x\sqrt{8-x^2}$ est croissante sur $(-a,a)$. Trouve $a$.`, 2, "f′ = (8 − 2x²)/√(8 − x²)."),
  mc(S`$f'(x)=x^2(x-1)^3(x+2)$. Où $f$ est-elle décroissante?`, S`seulement sur $(-2,1)$`, [S`sur $(-\infty,-2)$ et $(0,1)$`, S`sur $(-2,0)$ seulement`, S`sur $(1,\infty)$`], "x² ne change jamais de signe; étudie (x − 1)³(x + 2)."),
  num(S`$f(x)=3x^5-5x^3$ est décroissante sur $(-a,a)$. Trouve $a$.`, 1, "f′ = 15x²(x² − 1)."),
  num(S`Un modèle de profit est $P(t)=t^3-12t^2+45t$. Pendant combien de temps (en unités de $t$) le profit diminue-t-il?`, 2, "P′ = 3(t − 3)(t − 5) : il diminue sur (3, 5)."),
  num("Voici le graphique de f(x) = (x² − 4)². Sur combien d'intervalles distincts f est-elle décroissante?", 2, "f′ = 4x(x² − 4) : (−∞, −2) et (0, 2).", graph((x) => (x * x - 4) ** 2, { xmin: -3, xmax: 3, ymin: -2, ymax: 20 }, [P(-2, 0), P(0, 16), P(2, 0)], { step: { x: 1, y: 4 } })),
  num(S`Quelle est la plus grande valeur de $a$ pour laquelle $f(x)=x^3+ax^2+27x$ est croissante pour tout $x$?`, 9, "4a² − 324 ≤ 0."),
  num(S`$f(x)=\frac{x}{(x-1)^2}$ est croissante sur $(a,1)$. Trouve $a$.`, -1, "f′ = −(x + 1)/(x − 1)³."),
];
