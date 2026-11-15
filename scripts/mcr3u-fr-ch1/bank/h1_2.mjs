// 1.2 Notation fonctionnelle — 20 questions difficiles (miroir de ../../mcr3u-ch1/bank/h1_2.mjs)
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

const V6 = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };

export const TOPIC = "1.2 Notation fonctionnelle";
export const Q = [
  mx(String.raw`$f(x)=x^2+2x$. Simplifie $f(x+3)-f(x)$.`, "6*x+15", "x² + 6x + 9 + 2x + 6 − x² − 2x."),
  num(String.raw`$f(x)=ax^2+bx$ avec $f(1)=1$ et $f(2)=8$. Trouve $f(3)$.`, 21, "a + b = 1, 4a + 2b = 8 → a = 3, b = −2; 27 − 6."),
  num(String.raw`$f(x)=x^2-10x+c$ a une valeur minimale de 4. Trouve $c$.`, 29, "(x − 5)² + c − 25 : c − 25 = 4."),
  num(String.raw`$f(x)=2x-1$. Résous $f(f(x))=9$.`, 3, "f(f(x)) = 4x − 3."),
  num(String.raw`$f(x)=x^2$, $g(x)=x+k$ avec $k>0$, et $f(g(2))=49$. Trouve $k$.`, 5, "(2 + k)² = 49."),
  num("Le graphique représente y = f(x). Trouve f(f(0)).", 0, "f(0) = 1, puis f(1) = 0.", graph((x) => Math.abs(x - 2) - 1, V6, [P(0, 1), P(1, 0)])),
  num("Le graphique montre y = x² − 2 et y = x. Quelle est la plus grande solution de f(x) = x?", 2, "x² − x − 2 = 0 → x = 2 ou −1.", graph((x) => x * x - 2, V6, [P(2, 2), P(-1, -1)], { lines: [{ m: 1, b: 0, color: "gray", dash: true }] })),
  tf(String.raw`Si $f(x)=3x+2$, alors $f(x+h)-f(x)=3h$ pour tout $h$.`, true, "3(x + h) + 2 − 3x − 2."),
  num(String.raw`$f(x)=x^2-4x+1$. Trouve $f(2+h)-f(2-h)$.`, 0, "La parabole est symétrique par rapport à x = 2."),
  num(String.raw`$f(n)=n^2+n$. Trouve $n>0$ tel que $f(n)=132$.`, 11, "n² + n − 132 = (n + 12)(n − 11)."),
  ms("Le graphique représente f(x) = (x + 1)(x − 3). Lesquelles sont vraies? Choisis toutes les bonnes réponses.", [String.raw`$f(-1)=0$`, String.raw`$f(1)=-4$`, String.raw`$f(x)=5$ a deux solutions`, String.raw`$f(0)=3$`], [0, 1, 2], "f(0) = −3; f(x) = 5 → x² − 2x − 8 = 0.", graph((x) => (x + 1) * (x - 3), { xmin: -3, xmax: 5, ymin: -5, ymax: 7 }, [P(-1, 0), P(3, 0), P(1, -4)])),
  num(String.raw`Le prix d'une course de taxi est $C(d)=a+bd$ avec $C(4)=13$ et $C(10)=25$. Trouve $C(18)$.`, 41, "b = 2, a = 5."),
  num(String.raw`$f(x)=x^2-6x$. Une solution de $f(x)=f(1)$ est $x=1$. Trouve l'autre.`, 5, "x² − 6x + 5 = 0."),
  num(String.raw`Combien de réels x vérifient $f(x)=1$ pour $f(x)=(x-3)^2+2$?`, 0, "La valeur minimale est 2."),
  mc(String.raw`Pour $f(x)=x^2$, quelle expression est égale à $f(x+h)-f(x)$?`, String.raw`$2xh+h^2$`, [String.raw`$h^2$`, String.raw`$2x+h$`, String.raw`$x^2+h^2$`], "(x + h)² − x²."),
  num(String.raw`$f(x)=\frac{x}{x+1}$. Trouve $f(3)$.`, 0.75, "3 ÷ 4.", null, 0.001),
  num("La hauteur d'une balle (graphique) est h(t) = −5t² + 15t + 2 m. Trouve h(1.5).", 13.25, "−11.25 + 22.5 + 2.", graph((t) => -5 * t * t + 15 * t + 2, { xmin: 0, xmax: 4, ymin: 0, ymax: 16 }, [P(1.5, 13.25)], { a: 0, step: { x: 0.5, y: 2 } }), 0.001),
  num(String.raw`$f(x)=x^2+bx+5$ et $f(2)=f(4)$. Trouve $b$.`, -6, "Des sorties égales sont symétriques par rapport à l'axe x = 3 = −b/2."),
  mx(String.raw`$f(x)=x^2-1$. Simplifie $\frac{f(x)}{x-1}$ pour $x\ne1$.`, "x+1", "(x − 1)(x + 1)/(x − 1)."),
  num("La droite passe par (−2, 1) et (4, 4). Résous f(x) = 5.", 6, "f(x) = x/2 + 2.", planeDoc({ view: { xmin: -4, xmax: 8, ymin: -2, ymax: 7 }, lines: [{ m: 0.5, b: 2, color: "violet" }], points: [P(-2, 1), P(4, 4)] })),
];
