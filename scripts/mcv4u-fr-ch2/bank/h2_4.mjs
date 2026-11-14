// 2.4 La règle de dérivation en chaîne — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "2.4 La règle de dérivation en chaîne";
export const Q = [
  num("Le graphique de y = x²(x − 1)³ est illustré. Combien de tangentes horizontales a-t-il?", 3, "y′ = x(x − 1)²(5x − 2) : x = 0, 0.4, 1.", graph((x) => x * x * (x - 1) ** 3, { xmin: -0.6, xmax: 1.5, ymin: -0.15, ymax: 0.1 }, [P(0, 0), P(0.4, 0.16 * (-0.6) ** 3), P(1, 0)], { step: { x: 0.25, y: 0.05 } })),
  num("La tangente à y = √(25 − x²) en x = 3 est tracée. Trouve son ordonnée à l'origine.", 6.25, "Pente −x/√(25 − x²) = −¾, passant par (3, 4).", graph((x) => Math.sqrt(25 - x * x), { xmin: -6, xmax: 9, ymin: -1, ymax: 8 }, [P(3, 4)], { a: -5, b: 5, more: [{ f: (x) => 4 - 0.75 * (x - 3), color: "green" }] }), 0.0001),
  num(S`Pour $y=\left((2x+1)^2+1\right)^3$, trouve $y'(0)$.`, 48, "u = (2x + 1)² + 1 = 2, u′ = 4(2x + 1) = 4 : 3u²u′."),
  num(S`Pour $y=x(x^2+1)^{-1/2}$, trouve $y'(0)$.`, 1, "(x² + 1)^(−½) − x²(x² + 1)^(−3/2) en 0."),
  num("Une onde circulaire a un rayon r = 5t cm. À quel rythme son aire augmente-t-elle à t = 2 s? (cm² par s, 2 décimales)", 314.16, "2πr · 5 avec r = 10 : 100π.", null, 0.01),
  num("Le rayon d'une sphère est r = 3 + t cm. À quel rythme son volume augmente-t-il à t = 1 s? (cm³ par s, 2 décimales)", 201.06, "4πr² · 1 avec r = 4 : 64π.", null, 0.01),
  num(S`Combien de tangentes horizontales $y=(x^2-1)^4$ a-t-elle?`, 3, "8x(x² − 1)³ = 0."),
  mc(S`Laquelle est $\frac{d}{dx}f(3x)$?`, S`$3f'(3x)$`, [S`$f'(3x)$`, S`$3f'(x)$`, S`$f'(3)$`], "Dérivée intérieure 3."),
  num(S`$f'(x)=\frac1x$ et $g(x)=x^2+1$. Trouve $(f\circ g)'(1)$.`, 1, "f′(2) · g′(1) = ½ · 2."),
  num(S`Pour $y=(1-2x)^{-1/2}$, trouve $y'(-4)$ (4 décimales).`, 0.037, "−½(9)^(−3/2) · (−2) = 1/27.", null, 0.0005),
  num("Le graphique de y = √(x − 1) est illustré. Pour quelle valeur de x sa tangente a-t-elle une pente de ¼?", 5, "1/(2√(x − 1)) = ¼.", graph((x) => Math.sqrt(x - 1), { xmin: 0, xmax: 9, ymin: -1, ymax: 4 }, [P(5, 2)], { a: 1, b: 9, more: [{ f: (x) => 2 + 0.25 * (x - 5), color: "green" }] })),
  tf(S`$\frac{d}{dx}[f(x)]^2=2f(x)f'(x)$.`, true, "Extérieure u², intérieure f(x)."),
  num(S`Trouve l'ordonnée à l'origine de la tangente à $y=(x^3+x)^2$ en $x=1$.`, -12, "y = 4; y′ = 2(2)(4) = 16; y = 16x − 12."),
  num("Le graphique de y = x√(1 − x) est illustré. Pour quelle valeur de x sa tangente est-elle horizontale? (4 décimales)", 0.6667, "y′ = (2 − 3x)/(2√(1 − x)).", graph((x) => x * Math.sqrt(1 - x), { xmin: -1, xmax: 1.2, ymin: -1.6, ymax: 0.6 }, [P(2 / 3, (2 / 3) * Math.sqrt(1 / 3))], { a: -1, b: 1, step: { x: 0.25, y: 0.2 } }), 0.0005),
  num(S`Trouve $\frac{d^2}{dx^2}(2x+1)^3$ en $x=0$.`, 24, "y′ = 6(2x + 1)², y″ = 24(2x + 1)."),
  num(S`$h(x)=[g(x)]^3$ avec $g(2)=-1$ et $g'(2)=5$. Trouve $h'(2)$.`, 15, "3(−1)² · 5."),
  num(S`Une particule a pour position $s(t)=\sqrt{t^2+16}$ m. Trouve sa vitesse à $t=3$ s.`, 0.6, "t/√(t² + 16) en 3.", null, 0.0001),
  num("Le graphique de y = (x − 2)²(x + 1)² est illustré. Combien de tangentes horizontales a-t-il?", 3, "y′ = 2(x − 2)(x + 1)(2x − 1).", graph((x) => (x - 2) ** 2 * (x + 1) ** 2, { xmin: -2, xmax: 3, ymin: -1, ymax: 8 }, [P(-1, 0), P(0.5, 5.0625), P(2, 0)])),
  num("L'arête d'un cube est e = 2 + 0.5t cm. À quel rythme son volume varie-t-il à t = 2 s? (cm³ par s)", 13.5, "3e² · 0.5 avec e = 3.", null, 0.0001),
  num(S`Pour $y=\frac1{(x^2+1)^2}$, trouve $y'(1)$.`, -0.5, "−2(x² + 1)⁻³ · 2x en 1 : −4/8.", null, 0.0001),
];
