// 1.4 Limites et continuité — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { planeDoc, graph, P, H } from "./fig.mjs";

export const TOPIC = "1.4 Limites et continuité";
export const Q = [
  num(String.raw`$f(x)=ax+3$ pour $x\lt1$, $x^2+b$ pour $1\le x\le3$, $2x+6$ pour $x>3$ est continue. Trouve $a$.`, 1, "En 3 : 9 + b = 12 → b = 3; en 1 : a + 3 = 4."),
  num(String.raw`$f(x)=2x$ pour $x\lt2$, $x^2+b$ pour $x\ge2$ est continue. Trouve $b$.`, 0, "4 + b = 4."),
  num(String.raw`$f(x)=\frac{x^3-1}{x-1}$ pour $x\ne1$ et $f(1)=k$. Trouve $k$ pour que la fonction soit continue.`, 3, "x² + x + 1 → 3."),
  num("Combien de discontinuités la fonction représentée a-t-elle?", 2, "Un trou en x = −1 et un saut en x = 2.", planeDoc({ view: { xmin: -4, xmax: 5, ymin: -2, ymax: 5 }, curves: [{ f: (x) => 0.5 * x + 2, a: -4, b: -1.05, color: "violet" }, { f: (x) => 0.5 * x + 2, a: -0.95, b: 1.97, color: "violet" }, { f: (x) => x - 3, a: 2, b: 5, color: "violet" }], points: [H(-1, 1.5), H(2, 3), P(2, -1, false)], step: { x: 1, y: 1 } })),
  num(String.raw`Évalue $\lim_{x\to0}\frac{\sqrt{x+36}-6}{x}$ (4 décimales).`, 0.0833, "1/(√(x + 36) + 6) → 1/12.", null, 0.0005),
  num(String.raw`Combien de zéros $x^3-3x+1$ a-t-elle dans $[0,2]$? (Utilise f(0), f(1), f(2).)`, 2, "Signes +, −, +.", graph((x) => x ** 3 - 3 * x + 1, { xmin: -0.5, xmax: 2.3, ymin: -2, ymax: 4 }, [P(0, 1), P(1, -1), P(2, 3)])),
  tf(String.raw`Puisque $\frac1x$ vaut $-1$ en $x=-1$ et $1$ en $x=1$, elle doit valoir 0 quelque part entre les deux.`, false, "1/x n'est pas continue sur [−1, 1]."),
  num(String.raw`Trouve $m$ pour que $f(x)=x^2+m$ pour $x\lt2$ et $f(x)=mx+1$ pour $x\ge2$ soit continue.`, 3, "4 + m = 2m + 1."),
  num("La fonction représentée est (x² + x − 2)/(x − 1). Quelle valeur en x = 1 élimine la discontinuité?", 3, "x + 2 → 3.", planeDoc({ view: { xmin: -3, xmax: 4, ymin: -2, ymax: 7 }, curves: [{ f: (x) => x + 2, a: -3, b: 0.96, color: "violet" }, { f: (x) => x + 2, a: 1.04, b: 4, color: "violet" }], points: [H(1, 3)], step: { x: 1, y: 1 } })),
  num(String.raw`Évalue $\lim_{x\to2}\frac{x^4-16}{x^2-4}$.`, 8, "x² + 4."),
  num(String.raw`Trouve $c$ pour que $f(x)=cx$ pour $x\le3$ et $f(x)=x^2-c$ pour $x>3$ soit continue.`, 2.25, "3c = 9 − c.", null, 0.0001),
  tf("Une fonction peut être continue partout et pourtant ne pas être dérivable en un point.", true, "p. ex. |x| en 0."),
  num(String.raw`En combien de valeurs de x $\frac1{x^2-4x+3}$ est-elle discontinue?`, 2, "x = 1 et x = 3."),
  num(String.raw`Quelle est la grandeur du saut de $f(x)=x+2$ pour $x\lt0$, $f(x)=x-1$ pour $x\ge0$ en 0?`, 3, "|2 − (−1)|."),
  num(String.raw`Évalue $\lim_{x\to0}\frac{x^2+4x}{x^2-2x}$.`, -2, "(x + 4)/(x − 2)."),
  num(String.raw`Pour la valeur de $k$ qui fait exister $\lim_{x\to1}\frac{x^2+kx+3}{x-1}$, trouve la limite.`, -2, "k = −4; (x − 3) → −2."),
  num("Combien de discontinuités f(x) = (x + 1)/((x + 1)(x − 2)²) a-t-elle (graphique représenté)?", 2, "Non essentielle en −1, infinie en 2.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -1, ymax: 8 }, curves: [{ f: (x) => 1 / (x - 2) ** 2, a: -3, b: -1.05, color: "violet" }, { f: (x) => 1 / (x - 2) ** 2, a: -0.95, b: 1.62, color: "violet" }, { f: (x) => 1 / (x - 2) ** 2, a: 2.38, b: 5, color: "violet" }], vlines: [{ x: 2, color: "red", dash: true }], points: [H(-1, 1 / 9)], step: { x: 1, y: 1 } })),
  num(String.raw`Évalue $\lim_{x\to-1}\frac{x^3+1}{x^2-1}$.`, -1.5, "(x² − x + 1)/(x − 1) → 3/(−2).", null, 0.0001),
  num(String.raw`$x^3-5$ est continue et change de signe entre deux nombres entiers consécutifs. Quel est le plus petit des deux?`, 1, "f(1) = −4, f(2) = 3."),
  mc("Quelle fonction est continue pour tous les nombres réels?", String.raw`$x^2+1$`, [String.raw`$\frac1{x-1}$`, String.raw`$\sqrt x$`, String.raw`$\frac{|x|}x$`], "√x n'est pas définie pour x < 0."),
];
