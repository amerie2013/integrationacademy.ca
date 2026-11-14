// 2.1 Dérivée d'une fonction polynomiale — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const E = [
  mx(S`Dérive $y=x^7$.`, "7*x^6", "Abaisse le 7 devant, puis soustrais 1."),
  mx(S`Dérive $y=5x^3$.`, "15*x^2", "5 · 3x²."),
  num(S`Que vaut $\frac{d}{dx}(-8)$?`, 0, "Une constante ne varie pas."),
  mx(S`Dérive $y=x^2+9x$.`, "2*x+9", "Terme par terme."),
  num(S`Pour $f(x)=x^3$, trouve $f'(2)$.`, 12, "3(2)²."),
  mc(S`Laquelle est la règle de la puissance?`, S`$\frac{d}{dx}x^n=nx^{n-1}$`, [S`$\frac{d}{dx}x^n=x^{n-1}$`, S`$\frac{d}{dx}x^n=nx^{n+1}$`, S`$\frac{d}{dx}x^n=(n-1)x^n$`], "Abaisse l'exposant devant, puis soustrais 1."),
  tf("La dérivée d'une fonction constante est 0.", true, "Son graphique est horizontal."),
  mx(S`Dérive $y=4x-1$.`, "4", "La pente de la droite."),
  num(S`Pour $f(x)=x^4$, trouve $f'(1)$.`, 4, "4(1)³."),
  mx(S`Dérive $y=x^{-2}$.`, "-2*x^(-3)", "L'exposant −2 devient −3."),
  num(S`Trouve la pente de la tangente à $y=x^2-5x$ en $x=3$.`, 1, "2(3) − 5.", graph((x) => x * x - 5 * x, { xmin: -1, xmax: 6, ymin: -8, ymax: 4 }, [P(3, -6)], { more: [{ f: (x) => x - 9, color: "green" }], step: { x: 1, y: 2 } })),
  mc(S`Quelle puissance est égale à $\sqrt x$?`, S`$x^{1/2}$`, [S`$x^2$`, S`$x^{-1/2}$`, S`$x^{-2}$`], "Racine carrée = puissance ½."),
  num(S`Pour $y=6x^2$, trouve $y'$ en $x=-1$.`, -12, "12x en −1."),
  fill(S`Règle du multiple constant : $\frac{d}{dx}\left(c\,f(x)\right)=c\cdot$ ___`, ["f'(x)", "f′(x)", "f'", "f′"], "Garde la constante."),
  mx(S`Dérive $y=3x^4-x$.`, "12*x^3-1", "Terme par terme."),
  tf(S`$\frac{d}{dx}(x^3+x^2)=3x^2+2x$.`, true, "Règle de la somme."),
  num(S`Pour $y=\frac1x$, trouve $y'(1)$.`, -1, "−1/x²."),
  num("La tangente à y = x³ en x = −1 est tracée. Quelle est sa pente?", 3, "3(−1)².", graph((x) => x ** 3, { xmin: -2, xmax: 2, ymin: -4, ymax: 4 }, [P(-1, -1)], { more: [{ f: (x) => 3 * x + 2, color: "green" }] })),
  mx(S`Dérive $y=x^5-2x^3$.`, "5*x^4-6*x^2", "Terme par terme."),
  num(S`Pour $y=10x$, que vaut $y'$ pour tout $x$?`, 10, "Pente constante."),
];

export const M = [
  mx(S`Dérive $y=2x^5-4x^3+7$.`, "10*x^4-12*x^2", "Le 7 disparaît."),
  num(S`Pour $f(x)=x^3-2x^2+x$, trouve $f'(2)$.`, 5, "3(4) − 4(2) + 1."),
  mx(S`Dérive $y=8\sqrt x$.`, "4/sqrt(x)", "8 · ½x^(−½)."),
  mx(S`Dérive $y=\frac3x$.`, "-3/x^2", "3x⁻¹ → −3x⁻²."),
  num(S`Pour $y=x^{3/2}$, trouve $y'(4)$.`, 3, "1.5 · 4^(½)."),
  num(S`Pour $y=(x+2)(x-2)$, trouve $y'(5)$ en développant.`, 10, "x² − 4 → 2x."),
  num(S`Pour $y=\frac{x^3+x}{x}$ ($x\ne0$), trouve $y'(3)$.`, 6, "Divise : x² + 1."),
  num("Le graphique de y = x⁴ − 8x est illustré. Trouve la pente de la tangente en x = 1.", -4, "4 − 8.", graph((x) => x ** 4 - 8 * x, { xmin: -1.5, xmax: 2.5, ymin: -10, ymax: 10 }, [P(1, -7)], { step: { x: 0.5, y: 2 } })),
  num(S`Pour quelle valeur de $x$ la tangente à $y=x^2-14x$ est-elle horizontale?`, 7, "2x − 14 = 0."),
  num(S`Trouve l'ordonnée à l'origine de la tangente à $y=x^3$ en $x=2$.`, -16, "y = 12x − 16."),
  mc(S`Quelle droite est tangente à $y=x^2+1$ en $x=1$?`, S`$y=2x$`, [S`$y=2x+1$`, S`$y=x+1$`, S`$y=2x-2$`], "Pente 2, passant par (1, 2)."),
  num(S`Pour $y=5x^{-1}+x^2$, trouve $y'(1)$.`, -3, "−5 + 2."),
  num(S`Pour $f(x)=\sqrt[3]{x}$, trouve $f'(8)$ (4 décimales).`, 0.0833, "⅓ · 8^(−⅔) = 1/12.", null, 0.0005),
  tf(S`$\frac{d}{dx}(x^2\cdot x^3)=2x\cdot3x^2$.`, false, "x⁵ → 5x⁴, et non 6x³."),
  num(S`Pour quelle valeur positive de $x$ la courbe $y=x^3$ a-t-elle une tangente de pente 27?`, 3, "3x² = 27."),
  num(S`Pour $y=x^{4/3}$, trouve $y'(8)$ (4 décimales).`, 2.6667, "(4/3)x^(1/3) = (4/3)(2).", null, 0.0005),
  num(S`Trouve la pente de la normale à $y=x^2$ en $x=2$.`, -0.25, "Pente de la tangente 4, normale −¼.", null, 0.0001),
  num("Combien de tangentes horizontales le graphique de y = x³ − 3x a-t-il?", 2, "3x² − 3 = 0 : x = ±1.", graph((x) => x ** 3 - 3 * x, { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 }, [P(-1, 2), P(1, -2)])),
  num(S`Pour $y=0.5x^4$, trouve $y'(2)$.`, 16, "2x³ en 2."),
  num(S`La position d'un objet est $s(t)=4t^2-t$ m. Trouve sa vitesse à $t=2$ s.`, 15, "8t − 1."),
];
