// 2.2 La règle du produit — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const r1 = (-4 + Math.sqrt(124)) / 6;
export const TOPIC = "2.2 La règle du produit";
export const Q = [
  num("Le graphique de y = (x² − 9)(x + 2) est illustré. Pour quelle valeur positive de x la tangente est-elle horizontale? (4 décimales)", 1.1893, "y′ = 3x² + 4x − 9; x = (−4 + √124)/6.", graph((x) => (x * x - 9) * (x + 2), { xmin: -4, xmax: 4, ymin: -28, ymax: 16 }, [P(r1, (r1 * r1 - 9) * (r1 + 2))], { step: { x: 1, y: 4 } }), 0.0005),
  num(S`$h(x)=x^2g(x)$ avec $g(1)=3$ et $g'(1)=-2$. Trouve $h'(1)$.`, 4, "2(1)(3) + 1(−2)."),
  num(S`Pour $y=(x+1)\sqrt x$, trouve $y'(9)$ (4 décimales).`, 4.6667, "√x + (x + 1)/(2√x) en 9 : 3 + 10/6.", null, 0.0005),
  num("Le graphique de y = (x − 1)(x − 2)(x − 3) est illustré. Trouve la pente de la tangente en x = 2.", -1, "Seul le terme (x − 1)(1)(x − 3) subsiste : (1)(−1).", graph((x) => (x - 1) * (x - 2) * (x - 3), { xmin: 0, xmax: 4, ymin: -3, ymax: 3 }, [P(2, 0)], { more: [{ f: (x) => -(x - 2), color: "green" }] })),
  num("Un prix est de 25 dollars et augmente de 0.40 dollar par semaine; les ventes hebdomadaires sont de 600 et diminuent de 12 par semaine. À quel rythme le revenu varie-t-il (dollars par semaine)?", -60, "0.4(600) + 25(−12) = 240 − 300."),
  num(S`Trouve $k$ pour que la tangente à $y=(x+k)(x-1)$ en $x=1$ ait une pente de 5.`, 4, "(x − 1) + (x + k) en 1 = 1 + k."),
  tf(S`Pour toute fonction dérivable $f$, $\frac{d}{dx}\left[f(x)\right]^2=2f(x)f'(x)$.`, true, "Règle du produit sur f · f."),
  num(S`Utilise la règle du produit sur $(x^2+1)(x^2+1)$ pour trouver la dérivée en $x=1$.`, 8, "2 · 2x(x² + 1) en 1."),
  num("Un rectangle a une longueur de 12 − t cm et une largeur de 4 + 2t cm. À quel moment son aire cesse-t-elle d'augmenter?", 5, "A′ = −(4 + 2t) + 2(12 − t) = 20 − 4t.", graph((t) => (12 - t) * (4 + 2 * t), { xmin: 0, xmax: 12, ymin: 0, ymax: 110 }, [P(5, 98)], { a: 0, b: 12, step: { x: 1, y: 10 } })),
  num("Le graphique de y = x(x − 3)² est illustré. Trouve l'ordonnée de la tangente horizontale qui n'est pas sur l'axe des x.", 4, "y′ = (x − 3)(3x − 3) : x = 1 donne y = 4.", graph((x) => x * (x - 3) ** 2, { xmin: -0.5, xmax: 4.5, ymin: -2, ymax: 6 }, [P(1, 4), P(3, 0)])),
  mc(S`Laquelle est $(uvw)'$?`, S`$u'vw+uv'w+uvw'$`, [S`$u'v'w'$`, S`$u'vw+uvw'$`, S`$(u'v+uv')w'$`], "Dérive un facteur à la fois."),
  num(S`$f(3)=2$, $f'(3)=1$, $g(3)=-1$, $g'(3)=4$. Pour $h(x)=f(x)g(x)+x$, trouve $h'(3)$.`, 8, "(1)(−1) + (2)(4) + 1."),
  num(S`Trouve l'ordonnée à l'origine de la tangente à $y=(2x-1)(x^2+x)$ en $x=1$.`, -5, "y(1) = 2; y′(1) = 2(2) + (1)(3) = 7; y = 7x − 5."),
  num("Le graphique de y = x³(x − 4) est illustré. Trouve la plus grande valeur de x où la tangente est horizontale.", 3, "4x³ − 12x² = 4x²(x − 3).", graph((x) => x ** 3 * (x - 4), { xmin: -1, xmax: 4.5, ymin: -30, ymax: 10 }, [P(0, 0), P(3, -27)], { step: { x: 1, y: 5 } })),
  num("Une région compte 200 fermes, nombre qui augmente de 5 par année; chacune produit 40 t, quantité qui diminue de 0.5 t par année. À quel rythme la production totale varie-t-elle (t par année)?", 100, "5(40) + 200(−0.5)."),
  num(S`Pour $f(x)=x^2$ et $g(x)=x-6$, pour quelle valeur positive de $x$ a-t-on $(fg)'(x)=0$?`, 4, "2x(x − 6) + x² = 3x² − 12x."),
  num(S`Pour $y=(x+a)(x-a)$ avec $a\gt0$, la pente en $x=a$ est 8. Trouve $a$.`, 4, "y′ = 2x, donc 2a = 8."),
  tf("Le produit de deux fonctions croissantes est toujours croissant.", false, "x · x sur x < 0 est décroissant."),
  num(S`$f(x)=x^2g(x)$ avec $g(1)=2$ et $g'(1)=3$. Trouve $f'(1)$.`, 7, "2(1)(2) + 1(3)."),
  num("Le graphique de y = (x + 1)(x − 1)(x + 3) est illustré. Trouve la pente de la tangente en x = −1.", -4, "Seul (1)(x − 1)(x + 3) subsiste : (−2)(2).", graph((x) => (x + 1) * (x - 1) * (x + 3), { xmin: -4, xmax: 2, ymin: -6, ymax: 8 }, [P(-1, 0)], { more: [{ f: (x) => -4 * (x + 1), color: "green" }] })),
];
