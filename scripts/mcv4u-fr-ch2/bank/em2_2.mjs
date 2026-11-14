// 2.2 La règle du produit — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  mc(S`Laquelle est la règle du produit?`, S`$(uv)'=u'v+uv'$`, [S`$(uv)'=u'v'$`, S`$(uv)'=u'v-uv'$`, S`$(uv)'=\frac{u'}{v'}$`], "Les deux bandes du modèle d'aire."),
  tf(S`$(uv)'=u'v'$ pour toutes fonctions dérivables $u$ et $v$.`, false, "Essaie u = v = x : (x²)′ = 2x, mais u′v′ = 1."),
  mx(S`Dérive $y=x(x+2)$ avec la règle du produit.`, "2*x+2", "(1)(x + 2) + x(1)."),
  mx(S`Dérive $y=x(x-6)$.`, "2*x-6", "(x − 6) + x."),
  num(S`Pour $f(x)=x(3x+1)$, trouve $f'(1)$.`, 7, "(3x + 1) + 3x en 1."),
  num(S`$f(2)=2$, $f'(2)=3$, $g(2)=1$, $g'(2)=5$. Trouve $(fg)'(2)$.`, 13, "3(1) + 2(5)."),
  mx(S`Dérive $y=(x+1)(x+2)$.`, "2*x+3", "(x + 2) + (x + 1)."),
  num(S`Pour $y=(x-1)(x+5)$, trouve $y'(0)$.`, 4, "(x + 5) + (x − 1) en 0."),
  fill(S`Règle du produit : $(uv)'=u'v+u\cdot$ ___`, ["v'", "v′"], "La dérivée du second facteur."),
  num(S`Pour $y=x^2\cdot x$, trouve $y'(2)$ avec la règle du produit.`, 12, "2x·x + x²·1 = 3x²."),
  num(S`Pour $y=(2x)(x^2)$, trouve $y'(1)$.`, 6, "2x² + 2x·2x = 6x²."),
  tf(S`Pour une constante $c$, la règle du produit donne $(cf)'=cf'$.`, true, "c′ = 0, donc c′f + cf′ = cf′."),
  num("Le graphique de y = (x + 3)(x − 3) est illustré. Trouve la pente de la tangente en x = 4.", 8, "(x − 3) + (x + 3) = 2x.", graph((x) => (x + 3) * (x - 3), { xmin: -5, xmax: 5, ymin: -10, ymax: 12 }, [P(4, 7)], { more: [{ f: (x) => 7 + 8 * (x - 4), color: "green" }], step: { x: 1, y: 2 } })),
  mx(S`Dérive $y=x^3(x+1)$.`, "4*x^3+3*x^2", "3x²(x + 1) + x³."),
  num("Le graphique de y = 5x(x − 2) est illustré. Trouve la pente de la tangente en x = 1.", 0, "5(x − 2) + 5x en 1 : −5 + 5.", graph((x) => 5 * x * (x - 2), { xmin: -1, xmax: 3, ymin: -6, ymax: 8 }, [P(1, -5)], { more: [{ f: () => -5, color: "green" }] })),
  mc(S`Pour $u=x^2$ et $v=x+7$, laquelle est $(uv)'$?`, S`$2x(x+7)+x^2$`, [S`$2x\cdot1$`, S`$2x(x+7)-x^2$`, S`$x^2(x+7)+2x$`], "u′v + uv′."),
  num(S`$f(1)=4$, $f'(1)=0$, $g(1)=3$, $g'(1)=2$. Trouve $(fg)'(1)$.`, 8, "0(3) + 4(2)."),
  num(S`Écris $(x+1)^2$ sous la forme $(x+1)(x+1)$ et utilise la règle du produit pour trouver sa dérivée en $x=2$.`, 6, "(x + 1) + (x + 1) = 2(x + 1)."),
  mx(S`Dérive $y=(2x+1)(x-1)$.`, "4*x-1", "2(x − 1) + (2x + 1)."),
  num("Un prix est de 10 dollars et augmente de 1 dollar par mois; les ventes sont de 50 unités et diminuent de 2 unités par mois. À quel rythme le revenu varie-t-il (dollars par mois)?", 30, "p′q + pq′ = 50 − 20."),
];

export const M = [
  mx(S`Dérive $y=(x^2+2)(x-3)$ et simplifie.`, "3*x^2-6*x+2", "2x(x − 3) + (x² + 2)."),
  num(S`Pour $y=(x^2-1)(2x+3)$, trouve $y'(1)$.`, 10, "2x(2x + 3) + 2(x² − 1) en 1."),
  num(S`Pour $y=\sqrt x\,(x-1)$, trouve $y'(4)$.`, 2.75, "(x − 1)/(2√x) + √x en 4 : ¾ + 2.", null, 0.0001),
  num("Le graphique de y = x²(x − 4) est illustré. Pour quelle valeur positive de x la tangente est-elle horizontale? (4 décimales)", 2.6667, "3x² − 8x = 0.", graph((x) => x * x * (x - 4), { xmin: -1, xmax: 5, ymin: -12, ymax: 6 }, [P(8 / 3, (64 / 9) * (8 / 3 - 4))], { step: { x: 1, y: 2 } }), 0.0005),
  num(S`Pour $y=(3x-1)(x+2)$, trouve la pente de la tangente en $x=0$.`, 5, "3(x + 2) + (3x − 1) en 0."),
  num(S`$f(2)=-1$, $f'(2)=2$, $g(2)=3$, $g'(2)=-4$. Trouve $(fg)'(2)$.`, 10, "2(3) + (−1)(−4)."),
  mx(S`Dérive $y=x(x+1)(x+2)$.`, "3*x^2+6*x+2", "Règle des trois facteurs, ou développe."),
  num(S`Pour $y=(x+1)(x-2)(x-3)$, trouve $y'(0)$.`, 1, "(−2)(−3) + (1)(−3) + (1)(−2)."),
  num("Le graphique de y = (4 − x)(x + 1) est illustré. Pour quelle valeur de x la tangente est-elle horizontale?", 1.5, "−(x + 1) + (4 − x) = 3 − 2x.", graph((x) => (4 - x) * (x + 1), { xmin: -2, xmax: 5, ymin: -4, ymax: 8 }, [P(1.5, 6.25)], { more: [{ f: () => 6.25, color: "green" }] }), 0.0001),
  mc(S`Laquelle est la dérivée de $x^4(x^2-1)$?`, S`$6x^5-4x^3$`, [S`$8x^4$`, S`$6x^5-4x^4$`, S`$4x^3\cdot2x$`], "4x³(x² − 1) + 2x·x⁴."),
  num("Un prix est de 12 dollars et diminue de 0.50 dollar par mois; les ventes sont de 400 et augmentent de 20 par mois. À quel rythme le revenu varie-t-il (dollars par mois)?", 40, "(−0.5)(400) + 12(20)."),
  tf(S`Si $f(a)=0$ et $g(a)=0$, alors $(fg)'(a)=0$.`, true, "f′(a)·0 + 0·g′(a) = 0."),
  num(S`Pour $y=x^{1/2}\cdot x^{3/2}$, trouve $y'(3)$.`, 6, "Le produit est x²."),
  num(S`Un rectangle a une longueur de $5+t$ cm et une largeur de $3+2t$ cm. Trouve le taux de variation de son aire à $t=1$ s.`, 17, "1(5) + 6(2)."),
  num(S`Pour $y=(x^2+x)(x-1)$, trouve $y'(-1)$.`, 2, "(2x + 1)(x − 1) + (x² + x) en −1."),
  mx(S`Dérive $y=(x^2+1)(x^2-1)$.`, "4*x^3", "2x(x² − 1) + 2x(x² + 1)."),
  num(S`Pour $y=x^3(2-x)$, trouve $y'(1)$.`, 2, "3x²(2 − x) − x³ en 1."),
  num(S`$f(x)=x\,g(x)$ avec $g(2)=5$ et $g'(2)=-1$. Trouve $f'(2)$.`, 3, "g(2) + 2g′(2)."),
  num(S`Pour $y=(x-2)(x^2+2x+4)$, trouve $y'(1)$.`, 3, "Le produit est x³ − 8."),
  num("La tangente à y = (x + 2)(x − 1) en x = 1 est tracée. Trouve son ordonnée à l'origine.", -3, "y(1) = 0, pente 2x + 1 = 3 : y = 3x − 3.", graph((x) => (x + 2) * (x - 1), { xmin: -3, xmax: 2.5, ymin: -5, ymax: 6 }, [P(1, 0)], { more: [{ f: (x) => 3 * x - 3, color: "green" }] })),
];
