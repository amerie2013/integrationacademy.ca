// 3.5 Synthèse : l'esquisse de courbes — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc, graph, P } from "./fig.mjs";

const S = String.raw;
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const VM = { xmin: -5, xmax: 3, ymin: -9, ymax: 5 };

export const E = [
  num(S`Trouve l'ordonnée à l'origine de $f(x)=x^3-5x+7$.`, 7, "f(0)."),
  mc(S`Décris le comportement de $f(x)=x^4$ aux extrémités.`, "monte aux deux extrémités", ["descend aux deux extrémités", "descend à gauche, monte à droite", "monte à gauche, descend à droite"], "Degré pair, coefficient positif."),
  mc(S`Quelle symétrie $f(x)=x^4+x^2$ possède-t-elle?`, "paire (axe des y)", ["impaire (origine)", "les deux", "aucune"], "f(−x) = f(x)."),
  num(S`Combien d'abscisses à l'origine $f(x)=x^2-9$ a-t-elle?`, 2, "±3."),
  tf("À un extremum relatif d'un graphique lisse, la tangente est horizontale.", true, "f′ = 0 en ce point."),
  num(S`Trouve la valeur minimale de $f(x)=(x-3)^2+2$.`, 2, "Sommet (3, 2)."),
  mc(S`Un polynôme de degré impair dont le coefficient dominant est positif :`, "descend à gauche et monte à droite", ["monte aux deux extrémités", "descend aux deux extrémités", "monte à gauche et descend à droite"], "Comme x³."),
  tf(S`$f(x)=x^3$ a une tangente horizontale en un point d'inflexion.`, true, "f′(0) = 0 et f″ change de signe."),
  num(S`Combien d'abscisses à l'origine $f(x)=x(x-2)(x+5)$ a-t-elle?`, 3, "0, 2, −5."),
  fill(S`Une fonction telle que $f(-x)=-f(x)$ pour tout $x$ est dite ___.`, ["impaire", "odd"], "Symétrique par rapport à l'origine."),
  num("Voici le graphique de f(x) = x⁴ − 5x² + 4. Combien de points tournants a-t-il?", 3, "f′ = 2x(2x² − 5) : trois nombres critiques avec changement de signe.", graph((x) => x ** 4 - 5 * x * x + 4, { xmin: -2.8, xmax: 2.8, ymin: -3, ymax: 6 }, [P(0, 4)], { step: { x: 0.5, y: 1 } })),
  num(S`Trouve l'ordonnée à l'origine de $f(x)=\frac{x+6}{x-2}$.`, -3, "6/(−2)."),
  tf("Le graphique d'un polynôme n'a aucune asymptote.", true, "Les polynômes sont définis partout et croissent sans borne."),
  num("Quel est le plus grand nombre de points tournants que peut avoir un polynôme de degré 4?", 3, "f′ est une cubique : au plus 3 zéros."),
  mc(S`Sur un intervalle où $f'\gt0$ et $f''\lt0$, le graphique est :`, "croissant et concave vers le bas", ["croissant et concave vers le haut", "décroissant et concave vers le bas", "décroissant et concave vers le haut"], "Il monte en se courbant comme un chapeau."),
  num(S`Combien de points d'inflexion $f(x)=x^4-6x^3$ a-t-elle?`, 2, "f″ = 12x² − 36x = 12x(x − 3)."),
  num("Voici le graphique de f′(x) = (x − 1)². Combien d'extremums relatifs f a-t-elle?", 0, "f′ ne change jamais de signe.", graph((x) => (x - 1) ** 2, { xmin: -1, xmax: 3, ymin: -1, ymax: 4 }, [P(1, 0)])),
  mc(S`$f'$ est $+$, puis $-$, puis $+$, avec des zéros en $-1$ et en $2$. Alors $f$ a :`, S`un maximum relatif en $-1$ et un minimum relatif en $2$`, [S`un minimum relatif en $-1$ et un maximum relatif en $2$`, "deux maximums relatifs", "aucun extremum"], "Test de la dérivée première."),
  mc(S`Lorsque $x\to\infty$, $f(x)=-3x^3+x$ :`, S`$\to-\infty$`, [S`$\to+\infty$`, S`$\to0$`, S`$\to-3$`], "Terme dominant −3x³."),
  tf("Le graphique d'une fonction paire est symétrique par rapport à l'origine.", false, "Paire : axe des y. Impaire : origine."),
];

export const M = [
  num(S`Trouve la valeur du maximum relatif de $f(x)=x^3+6x^2-36x$.`, 216, "f′ = 3(x + 6)(x − 2) : maximum en −6."),
  num(S`Pour quelle valeur de $x$ se trouve le point d'inflexion de $f(x)=x^3+6x^2-36x$?`, -2, "f″ = 6x + 12."),
  num(S`Combien d'abscisses à l'origine $f(x)=x^4-8x^2+7$ a-t-elle?`, 4, "x² = 1 ou 7."),
  mc(S`Quelle symétrie $f(x)=x^4-8x^2+7$ possède-t-elle?`, "paire", ["impaire", "aucune", "les deux"], "Seulement des puissances paires."),
  num(S`Combien d'asymptotes verticales $f(x)=\frac{x^2}{x^2-16}$ a-t-elle?`, 2, "x = ±4."),
  num(S`Trouve la valeur minimale de $f(x)=x^4-8x^2+7$.`, -9, "x² = 4 : 16 − 32 + 7."),
  num("Voici le graphique de f(x) = −x⁴ + 4x². Quelle est sa valeur maximale?", 4, "f′ = −4x(x² − 2) : maximum en x = ±√2.", graph((x) => -(x ** 4) + 4 * x * x, { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 6 }, [P(Math.SQRT2, 4), P(-Math.SQRT2, 4)])),
  tf(S`Si $f'(c)=0$ et $f''(c)=0$, alors $(c,f(c))$ est forcément un point d'inflexion.`, false, "x⁴ en 0 est un minimum."),
  num(S`Pour quelle valeur de $x$ la fonction $f(x)=x+\frac{1}{x^2}$ atteint-elle son minimum relatif? (4 décimales)`, 1.2599, "f′ = 1 − 2/x³ = 0 : x = ∛2.", null, 0.0005),
  mc(S`$f'$ est une parabole ouverte vers le haut dont les zéros sont 1 et 4. Alors $f$ a :`, S`un maximum relatif en 1 et un minimum relatif en 4`, [S`un minimum relatif en 1 et un maximum relatif en 4`, S`des points d'inflexion en 1 et en 4`, "aucun extremum"], "f′ : +, −, +."),
  num(S`Combien d'extremums relatifs $f(x)=3x^4-16x^3+18x^2$ a-t-elle?`, 3, "f′ = 12x(x − 1)(x − 3)."),
  num(S`Trouve la valeur du maximum relatif de $f(x)=-x^4+2x^3$ (4 décimales).`, 1.6875, "f′ = 2x²(3 − 2x) : maximum en 1.5.", null, 0.0005),
  num(S`Trouve l'asymptote horizontale de $f(x)=\frac{2x^2+1}{x^2-1}$ : $y=\,?$`, 2, "Degrés égaux."),
  num("Voici le graphique de f(x) = x²/(x + 1). Quelle est la valeur de son maximum relatif?", -4, "f = x − 1 + 1/(x + 1); maximum en x = −2.", planeDoc({ view: VM, curves: rat((x) => (x * x) / (x + 1), [-1], VM), vlines: [{ x: -1, color: "red", dash: true }], lines: [{ m: 1, b: -1, color: "red", dash: true }], points: [P(-2, -4), P(0, 0)], step: { x: 1, y: 1 } })),
  tf(S`$f(x)=x^5$ n'a aucun extremum relatif.`, true, "f′ = 5x⁴ ≥ 0."),
  num(S`Trouve la valeur minimale de $f(x)=x\sqrt{x+6}$ (3 décimales).`, -5.657, "f′ = (3x + 12)/(2√(x + 6)) : minimum en −4, f = −4√2.", null, 0.001),
  mc("Une fonction impaire a un maximum relatif en (2, 5). Elle doit aussi avoir :", "un minimum relatif en (−2, −5)", ["un maximum relatif en (−2, 5)", "un minimum relatif en (2, −5)", "un point d'inflexion en (−2, 5)"], "Symétrie par rapport à l'origine."),
  num(S`Combien d'extremums relatifs $f(x)=x^4+32x$ a-t-elle?`, 1, "f′ = 4x³ + 32 : un seul zéro, x = −2."),
  num(S`Combien de points d'inflexion $f(x)=x^5-10x^3$ a-t-elle?`, 3, "f″ = 20x(x² − 3)."),
  mc(S`Laquelle de ces descriptions correspond à $f(x)=\frac{x}{x^2-1}$?`, "asymptotes x = ±1 et y = 0; impaire; décroissante sur chaque partie", ["asymptote x = 1 seulement; paire", "aucune asymptote; croissante", "asymptotes x = ±1 et y = 1"], "f′ = −(x² + 1)/(x² − 1)²."),
];
