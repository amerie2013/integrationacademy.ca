// 3.3 Concavité et test de la dérivée seconde — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  mc(S`Si $f''(x)\gt0$ sur un intervalle, le graphique est :`, "concave vers le haut", ["concave vers le bas", "décroissant", "linéaire"], "Les pentes augmentent : une coupe."),
  tf("Un point d'inflexion est un point où la concavité change.", true, "C'est la définition."),
  num(S`Pour quelle valeur de $x$ la fonction $f(x)=x^3-12x^2$ a-t-elle un point d'inflexion?`, 4, "f″ = 6x − 24."),
  num(S`Pour $f(x)=2x^4$, trouve $f''(1)$.`, 24, "f″ = 24x²."),
  mc(S`Décris la concavité de $f(x)=x^2$.`, "concave vers le haut partout", ["concave vers le bas partout", "elle change en 0", "aucune"], "f″ = 2."),
  mc(S`Décris la concavité de $f(x)=-3x^2+x$.`, "concave vers le bas partout", ["concave vers le haut partout", "elle change en x = 1/6", "aucune"], "f″ = −6."),
  num(S`$f''(x)=6x-18$. Pour quelle valeur de $x$ se trouve le point d'inflexion?`, 3, "f″ change de signe en 3."),
  tf(S`Si $f''(c)=0$, le graphique a un point d'inflexion en $c$.`, false, "x⁴ en 0 : aucun changement de signe."),
  fill(S`Classer un point critique selon le signe de $f''(c)$ s'appelle le ___ de la dérivée seconde.`, ["test", "critère"], "Le test de la dérivée seconde."),
  mc(S`$f'(2)=0$ et $f''(2)=5$. En $x=2$, $f$ a :`, "un minimum relatif", ["un maximum relatif", "un point d'inflexion", "aucune conclusion"], "Concave vers le haut à une tangente horizontale."),
  num(S`$f(x)=x^3+3x^2$ est concave vers le haut pour $x\gt a$. Trouve $a$.`, -1, "f″ = 6x + 6."),
  num("Voici le graphique de f(x) = (x − 1)³ + 1. Pour quelle valeur de x se trouve le point d'inflexion?", 1, "La concavité change en x = 1.", graph((x) => (x - 1) ** 3 + 1, { xmin: -1, xmax: 3, ymin: -3, ymax: 5 }, [P(1, 1)])),
  tf("Un graphique concave vers le bas est situé sous ses tangentes.", true, "Un « chapeau » est sous ses tangentes."),
  num(S`Pour $f(x)=x^3-9x^2+2x$, trouve $f''(0)$.`, -18, "f″ = 6x − 18."),
  mc(S`$f'(c)=0$ et $f''(c)=0$. Le test de la dérivée seconde :`, "ne permet aucune conclusion", ["montre un maximum", "montre un minimum", "montre un point d'inflexion"], "Utilise le test de la dérivée première."),
  num(S`Pour quelle valeur positive de $x$ la fonction $f(x)=x^4-54x^2$ a-t-elle un point d'inflexion?`, 3, "12x² − 108 = 0."),
  num(S`$f(x)=x^3+15x^2$ est concave vers le bas pour $x\lt a$. Trouve $a$.`, -5, "f″ = 6x + 30."),
  mc(S`Sur un intervalle où $f'$ est croissante, $f$ est :`, "concave vers le haut", ["concave vers le bas", "décroissante", "constante"], "f″ > 0."),
  num("Voici le graphique de f′(x) = x² − 2x. Pour quelle valeur de x la fonction f a-t-elle un point d'inflexion?", 1, "f′ atteint son minimum en x = 1; f″ y change donc de signe.", graph((x) => x * x - 2 * x, { xmin: -1.5, xmax: 3.5, ymin: -2, ymax: 4 }, [P(1, -1)])),
  tf(S`$f(x)=x+5$ a un point d'inflexion.`, false, "f″ = 0 partout : aucun changement de concavité."),
];

export const M = [
  num(S`Trouve l'ordonnée du point d'inflexion de $f(x)=x^3-3x^2+4$.`, 2, "x = 1 : 1 − 3 + 4."),
  num(S`Combien de points d'inflexion $f(x)=x^4-4x^3+10$ a-t-elle?`, 2, "f″ = 12x(x − 2)."),
  num(S`Utilise le test de la dérivée seconde pour trouver la valeur du maximum relatif de $f(x)=x^3-12x^2+36x$.`, 32, "f′ = 3(x − 2)(x − 6); f″(2) = −12 : maximum f(2) = 32."),
  mc(S`$f(x)=x^{1/3}$ a-t-elle un point d'inflexion en 0?`, "oui : f″ y change de signe (tangente verticale)", ["non : f″ n'y existe pas", "non : f′ n'y existe pas", "oui : f″(0) = 0"], "f″ = −(2/9)x^(−5/3) change de signe."),
  mc(S`Décris la concavité de $f(x)=\frac1{x^2}$.`, "concave vers le haut des deux côtés de 0", ["concave vers le bas des deux côtés", "vers le haut pour x > 0 seulement", "elle change en 0"], "f″ = 6/x⁴ > 0."),
  num(S`$f(x)=x^4+x^3$ a des points d'inflexion en $0$ et en une valeur négative de $x$. Trouve-la.`, -0.5, "f″ = 6x(2x + 1).", null, 0.0001),
  num(S`Pour quelle valeur de $x$ la fonction $f(x)=(x-2)^5+1$ a-t-elle un point d'inflexion?`, 2, "f″ = 20(x − 2)³ change de signe."),
  num("Les ventes sont S(t) = −t³ + 6t² + 50 (graphique ci-contre). À quel moment augmentent-elles le plus rapidement?", 2, "S″ = −6t + 12 = 0.", graph((t) => -(t ** 3) + 6 * t * t + 50, { xmin: 0, xmax: 5, ymin: 40, ymax: 90 }, [P(2, 66)], { a: 0, b: 5, step: { x: 1, y: 10 } })),
  tf(S`Si $f''\gt0$ sur un intervalle, alors $f'$ y est croissante.`, true, "f″ est la dérivée de f′."),
  num(S`$f(x)=x^3+ax^2+2$ a un point d'inflexion en $x=1$. Trouve $a$.`, -3, "6 + 2a = 0."),
  num(S`Pour $f(x)=x^{3/2}$, trouve $f''(4)$.`, 0.375, "f″ = (3/4)x^(−1/2).", null, 0.0001),
  mc(S`$f'(x)=(x-1)(x-4)$. Où $f$ est-elle concave vers le haut?`, S`$x\gt2.5$`, [S`$x\lt2.5$`, S`$1\lt x\lt4$`, S`partout`], "f″ = 2x − 5."),
  num(S`$f(x)=x^5-5x^4$ a exactement un point d'inflexion. Pour quelle valeur de $x$?`, 3, "f″ = 20x²(x − 3) : aucun changement en 0."),
  num(S`Utilise le test de la dérivée seconde pour trouver la valeur du minimum relatif de $f(x)=x^3-75x$.`, -250, "f″(5) = 30 > 0; f(5) = 125 − 375."),
  num("Voici le graphique de f″(x) = x − 2. f est concave vers le haut pour x > a. Trouve a.", 2, "f″ > 0 à droite de 2.", graph((x) => x - 2, { xmin: -1, xmax: 5, ymin: -3, ymax: 3 }, [P(2, 0)])),
  num(S`Combien de points d'inflexion $f(x)=3x^5-10x^3$ a-t-elle?`, 3, "f″ = 60x(x² − 1)."),
  tf("Un graphique peut être concave vers le haut et décroissant sur le même intervalle.", true, "1/x pour x > 0."),
  num(S`Pour quelle valeur de $x$ la fonction $f(x)=x^2-\frac1x$ a-t-elle un point d'inflexion?`, 1, "f″ = 2 − 2/x³."),
  num(S`Pour quelle valeur positive de $x$ la fonction $f(x)=-x^4+6x^2$ a-t-elle un point d'inflexion?`, 1, "f″ = −12x² + 12."),
  mc("Le point de rendement décroissant d'une courbe de croissance est :", "son point d'inflexion, où le taux de croissance est le plus grand", ["son point maximum", "son ordonnée à l'origine", "le point où le taux de croissance est nul"], "Après ce point, la croissance ralentit."),
];
