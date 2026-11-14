// 3.3 Concavité et test de la dérivée seconde — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "3.3 Concavité et test de la dérivée seconde";
export const Q = [
  num("Voici le graphique de f(x) = x⁴ + 2x³ − 12x². Trouve l'ordonnée du point d'inflexion tel que x > 0.", -9, "f″ = 12(x + 2)(x − 1) : x = 1, f(1) = 1 + 2 − 12.", graph((x) => x ** 4 + 2 * x ** 3 - 12 * x * x, { xmin: -4, xmax: 2.5, ymin: -70, ymax: 15 }, [P(1, -9), P(-2, -48)], { step: { x: 1, y: 10 } })),
  num(S`$f(x)=ax^3+bx^2+1$ a un point d'inflexion en $(1,3)$. Trouve $b$.`, 3, "6a + 2b = 0 et a + b + 1 = 3 : a = −1, b = 3."),
  num(S`Pour quelle valeur positive de $x$ la fonction $f(x)=\frac{1}{x^2+12}$ a-t-elle un point d'inflexion?`, 2, "f″ = (6x² − 24)/(x² + 12)³."),
  num(S`Quelle est la plus grande valeur de $c$ pour laquelle $f(x)=x^4+cx^3+24x^2$ n'a aucun point d'inflexion?`, 8, "f″ = 12x² + 6cx + 48 exige 36c² − 2304 ≤ 0."),
  tf("Toute fonction cubique a exactement un point d'inflexion.", true, "f″ est linéaire et change de signe une seule fois."),
  num("Une population est N(t) = −t³ + 18t² + 50 pour 0 ≤ t ≤ 12 (graphique ci-contre). Quel est le plus grand taux de croissance?", 108, "N″ = 0 en t = 6; N′(6) = −108 + 216.", graph((t) => -(t ** 3) + 18 * t * t + 50, { xmin: 0, xmax: 12.5, ymin: 0, ymax: 950 }, [P(6, 482)], { a: 0, b: 12, step: { x: 1, y: 100 } })),
  num(S`Pour quelle valeur de $x$ la fonction $f(x)=x^{5/3}-5x^{2/3}$ a-t-elle un point d'inflexion?`, -1, "f″ = (10/9)x^(−4/3)(x + 1) : change de signe seulement en −1."),
  mc(S`Si $f''(c)=0$ et $f'''(c)\ne0$, alors en $c$ :`, "f a un point d'inflexion", ["f a un maximum", "f a un minimum", "on ne peut rien conclure"], "f″ traverse zéro avec une pente non nulle; elle change donc de signe."),
  num(S`Utilise le test de la dérivée seconde pour trouver la valeur du maximum relatif de $f(x)=2x^3+3x^2-12x+1$.`, 21, "f′ = 6(x + 2)(x − 1); f″(−2) = −18 : f(−2) = 21."),
  num(S`Trouve l'ordonnée à l'origine de la tangente à $f(x)=x^3-3x^2+5$ en son point d'inflexion.`, 6, "Point d'inflexion (1, 3), pente −3 : y = −3x + 6."),
  num("Voici le graphique de f′(x) = 4x − x². f est concave vers le bas pour x > a. Trouve a.", 2, "f′ décroît après son maximum en x = 2.", graph((x) => 4 * x - x * x, { xmin: -1, xmax: 5, ymin: -3, ymax: 5 }, [P(2, 4)])),
  num(S`Combien d'extremums relatifs $f(x)=x^6-3x^4$ a-t-elle?`, 3, "f′ = 6x³(x² − 2) : minimums en ±√2; en 0, le test échoue, mais f′ passe de + à − : maximum."),
  num(S`Pour quelle valeur de $x$ la fonction $f(x)=x^2+\frac8x$ a-t-elle un point d'inflexion?`, -2, "f″ = 2 + 16/x³ = 0."),
  tf(S`Si $f''(x)\gt0$ pour tout $x$, alors $f$ a au plus un nombre critique.`, true, "f′ est strictement croissante; elle s'annule donc au plus une fois."),
  num(S`Le coût est $C(x)=0.01x^3-0.6x^2+15x$. Pour quelle production le coût marginal est-il le plus bas?`, 20, "C″ = 0.06x − 1.2 = 0."),
  num("Voici le graphique de f(x) = 2x³ − 9x² + 12x − 4. Trouve l'ordonnée de son point d'inflexion.", 0.5, "f″ = 12x − 18 : x = 1.5.", graph((x) => 2 * x ** 3 - 9 * x * x + 12 * x - 4, { xmin: -0.3, xmax: 3, ymin: -3, ymax: 3 }, [P(1.5, 0.5), P(1, 1), P(2, 0)], { step: { x: 0.5, y: 1 } }), 0.0001),
  mc("Un graphique est décroissant et concave vers le haut sur un intervalle. Sur cet intervalle :", S`$f'\lt0$ et $f''\gt0$`, [S`$f'\gt0$ et $f''\gt0$`, S`$f'\lt0$ et $f''\lt0$`, S`$f'\gt0$ et $f''\lt0$`], "Il descend, mais se courbe vers le haut."),
  num(S`Combien de points d'inflexion $f(x)=x^4-4x^3+6x^2$ a-t-elle?`, 0, "f″ = 12(x − 1)² ≥ 0."),
  num(S`$f(x)=x^3+bx^2+cx+d$ a son point d'inflexion en $x=-2$. Trouve $b$.`, 6, "f″ = 6x + 2b = 0 en −2."),
  num(S`Pour $f(x)=\frac{1}{1+x}$, trouve $f''(1)$.`, 0.25, "f″ = 2/(1 + x)³.", null, 0.0001),
];
