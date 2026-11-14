// 5.1 Taux de variation et le nombre e — 20 questions difficiles (miroir de ../../mcv4u-ch5/bank/h5_1.mjs)
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const E = Math.E;
export const TOPIC = "5.1 Taux de variation et le nombre e";
export const Q = [
  num("Une tangente à y = eˣ passe par (2, 0) (graphique illustré). En quel x touche-t-elle la courbe?", 3, "Tangente en a : y = eᵃ(x − a + 1); elle passe par (2, 0) : 3 − a = 0.", graph(Math.exp, { xmin: -1, xmax: 3.5, ymin: -2, ymax: 25 }, [P(3, Math.exp(3)), P(2, 0)], { more: [{ f: (x) => Math.exp(3) * (x - 2), color: "green", a: 1.8, b: 3.4 }], step: { x: 0.5, y: 5 } })),
  num(S`Évalue $\displaystyle\lim_{h\to0}\frac{e^h-1}{h}$.`, 1, "La pente de eˣ en 0."),
  num(S`Évalue $\displaystyle\lim_{h\to0}\frac{2^h-1}{h}$ (4 décimales).`, 0.6931, "ln 2.", null, 0.0005),
  num(S`Évalue $\displaystyle\lim_{n\to\infty}\left(1+\frac2n\right)^n$ (3 décimales).`, 7.389, "e².", null, 0.002),
  mc("Quelle propriété utilise-t-on pour trouver la dérivée de eˣ à partir de la définition (premiers principes)?", S`$e^{x+h}=e^xe^h$`, [S`$e^{x+h}=e^x+e^h$`, S`$e^{xh}=e^xe^h$`, S`$(e^x)^h=e^{x+h}$`], "On met eˣ en évidence dans le quotient de différence."),
  num(S`Évalue $\displaystyle\lim_{n\to\infty}\left(1+\frac1n\right)^{3n}$ (4 décimales).`, 20.0855, "e³.", null, 0.0005),
  num(S`En quel $x$ la pente de $y=2^x$ vaut-elle 1 (4 décimales)?`, 0.5288, "2ˣ ln 2 = 1.", null, 0.0005),
  tf(S`$\frac{d}{dx}x^e=ex^{e-1}$.`, true, "xᵉ est une fonction puissance; e est un exposant constant."),
  num("Une droite qui passe par l'origine est tangente à y = eˣ (graphique illustré). Quelle est sa pente (4 décimales)?", 2.7183, "Elle touche la courbe en x = 1, où la pente vaut e.", graph(Math.exp, { xmin: -1.5, xmax: 2, ymin: -1, ymax: 6 }, [P(1, E)], { more: [{ f: (x) => E * x, color: "green", a: -0.3, b: 2 }], step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`Évalue $\displaystyle\lim_{h\to0}\frac{e^{2h}-1}{h}$.`, 2, "2 · (e^(2h) − 1)/(2h)."),
  num("À 6 % composé de façon continue, combien d'années faut-il pour qu'un montant double (4 décimales)?", 11.5525, "e^(0.06t) = 2.", null, 0.0005),
  mc(S`Pour quelle base la pente de $b^x$ en $x=0$ vaut-elle 2?`, S`$e^2$`, [S`$2$`, S`$\sqrt e$`, S`$2e$`], "La pente en 0 est ln b."),
  num("Le graphique de y = 0.2ˣ est illustré. Que vaut le rapport pente ÷ hauteur en chaque point (4 décimales)?", -1.6094, "ln 0.2.", graph((x) => 0.2 ** x, { xmin: -1.5, xmax: 1.5, ymin: -0.5, ymax: 12 }, [P(0, 1)], { more: [{ f: (x) => 1 - 1.6094 * x, color: "green", a: -1, b: 0.6 }], step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`En quel $x$ la tangente à $y=e^x$ est-elle parallèle à $y=3x+1$ (4 décimales)?`, 1.0986, "eˣ = 3.", null, 0.0005),
  tf(S`$e^x\gt1+x$ pour tout $x\ne0$.`, true, "La courbe est au-dessus de sa tangente en 0."),
  num(S`De combien $\left(1+\frac1{100}\right)^{100}$ est-il inférieur à $e$ (4 décimales)?`, 0.0135, "2.71828 − 2.70481.", null, 0.0005),
  num("La tangente à y = 2ˣ en x = 0 est tracée. Où coupe-t-elle l'axe des x (4 décimales)?", -1.4427, "y = 1 + x ln 2.", graph((x) => 2 ** x, { xmin: -2.5, xmax: 2, ymin: -0.5, ymax: 4 }, [P(0, 1)], { more: [{ f: (x) => 1 + Math.log(2) * x, color: "green", a: -2, b: 1.5 }], step: { x: 0.5, y: 0.5 } }), 0.0005),
  num(S`Évalue $1+1+\frac12+\frac16+\frac1{24}+\frac1{120}$ (4 décimales).`, 2.7167, "La série de e.", null, 0.0005),
  num(S`Quelle est la pente de $y=e^x$ en $x=\ln0.5$?`, 0.5, "Pente = hauteur.", null, 0.0001),
  num("Un montant de 100 dollars rapporte 100 % d'intérêt composé de façon continue pendant 2 ans. Que devient-il (2 décimales)?", 738.91, "100e².", null, 0.01),
];
