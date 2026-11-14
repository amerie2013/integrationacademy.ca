// 1.2 Taux de variation à partir d'équations — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "1.2 Taux de variation à partir d'équations";
export const Q = [
  num(String.raw`Trouve le taux de variation instantané de $f(x)=\frac1{x-1}$ en $x=3$.`, -0.25, "−1/((2 + h)(2)) → −¼.", null, 0.0001),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=\sqrt{x+3}$ en $x=1$.`, 0.25, "1/(√(4 + h) + 2) → ¼.", null, 0.0001),
  num(String.raw`Pour quelle valeur de x la tangente à $y=x^2-5x$ a-t-elle une pente de 3?`, 4, "2a − 5 = 3.", graph((x) => x * x - 5 * x, { xmin: -1, xmax: 6, ymin: -8, ymax: 6 }, [], { step: { x: 1, y: 2 } })),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=x^4$ en $x=-1$.`, -4, "4a³ en −1."),
  num(String.raw`$f(x)=x^2+bx$ a un taux instantané de 0 en $x=3$. Trouve $b$.`, -6, "6 + b = 0."),
  num(String.raw`Trouve l'ordonnée à l'origine de la tangente à $y=\frac1x$ en $x=2$.`, 1, "Pente −¼, passant par (2, ½) : y = −¼x + 1."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=\frac{x}{x+1}$ en $x=0$.`, 1, "f = 1 − 1/(x + 1); taux 1/(x + 1)²."),
  num("La tangente à y = x³ en x = 1 est tracée. Pour quelle autre valeur de x rencontre-t-elle la courbe?", -2, "y = 3x − 2; x³ − 3x + 2 = (x − 1)²(x + 2).", graph((x) => x ** 3, { xmin: -3, xmax: 2, ymin: -9, ymax: 5 }, [P(1, 1)], { more: [{ f: (x) => 3 * x - 2, color: "green" }] })),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=\frac3{x^2}$ en $x=1$.`, -6, "−6/x³ en 1."),
  tf(String.raw`Pour $f(x)=|x|$ et $h>0$, le quotient de différence en $a=0$ est égal à 1.`, true, "|h|/h = 1."),
  num(String.raw`Pour quelle valeur positive de $a$ les taux instantanés de $x^2$ et de $x^3$ sont-ils égaux? (4 décimales)`, 0.6667, "2a = 3a².", null, 0.0005),
  num(String.raw`La position d'un objet est $s(t)=t^3-12t$ m. À quel moment positif sa vitesse est-elle 0?`, 2, "3t² − 12 = 0."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=(2x+1)^2$ en $x=0$.`, 4, "4(2x + 1) en 0."),
  num(String.raw`Évalue le quotient de différence de $x^3$ en $a=1$ avec $h=0.01$ (4 décimales).`, 3.0301, "(1.030301 − 1) ÷ 0.01.", null, 0.0001),
  mc(String.raw`Pour $f(x)=\sqrt x$, le quotient de différence rationalisé est :`, String.raw`$\dfrac1{\sqrt{x+h}+\sqrt x}$`, [String.raw`$\dfrac1{\sqrt{x+h}-\sqrt x}$`, String.raw`$\sqrt{h}$`, String.raw`$\dfrac{h}{\sqrt x}$`], "(x + h − x)/(h(√(x + h) + √x))."),
  num(String.raw`Trouve le taux de variation instantané de $f(x)=x^2-4x+7$ en $x=2$.`, 0, "Le sommet.", graph((x) => x * x - 4 * x + 7, { xmin: -1, xmax: 5, ymin: 0, ymax: 10 }, [], { step: { x: 1, y: 1 } })),
  num("Le graphique de y = x³ − 3x est représenté. Pour quelle valeur positive de x la tangente est-elle horizontale?", 1, "Taux 3a² − 3 = 0.", graph((x) => x ** 3 - 3 * x, { xmin: -2.5, xmax: 2.5, ymin: -4, ymax: 4 })),
  num("Le côté d'un carré mesure x cm. Trouve le taux de variation instantané de son aire par rapport à x quand x = 5.", 10, "Le taux de x² est 2x."),
  num("L'arête d'un cube mesure x cm. Trouve le taux de variation instantané de son volume quand x = 2.", 12, "Le taux de x³ est 3x²."),
  num("La tangente à y = x² en (1, 1) est tracée. Où coupe-t-elle l'axe des x?", 0.5, "y = 2x − 1.", planeDoc({ view: { xmin: -1, xmax: 2.5, ymin: -2, ymax: 4 }, curves: [{ f: (x) => x * x, color: "violet" }, { f: (x) => 2 * x - 1, color: "green" }], points: [P(1, 1)], step: { x: 0.5, y: 1 } }), 0.0001),
];
