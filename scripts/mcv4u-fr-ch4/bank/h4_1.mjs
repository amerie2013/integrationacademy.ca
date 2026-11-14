// 4.1 Taux de variation instantanés des fonctions sinusoïdales — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";
import { TITLE } from "../l4_1.mjs";

const S = String.raw;
const PI = Math.PI;
export const TOPIC = TITLE;
export const Q = [
  num("Le graphique de y = sin x est représenté. En quelle valeur de x dans (0, π) la pente de la tangente vaut-elle −√3/2 ? (4 décimales)", 2.618, "cos x = −√3/2 : x = 5π/6.", graph(Math.sin, { xmin: 0, xmax: 2 * PI, ymin: -1.6, ymax: 1.6 }, [P((5 * PI) / 6, 0.5)], { more: [{ f: (x) => 0.5 - (Math.sqrt(3) / 2) * (x - (5 * PI) / 6), color: "green", a: 1.7, b: 3.5 }], step: { x: 0.5, y: 0.5 } }), 0.0005),
  num(S`Évalue $\displaystyle\lim_{h\to0}\frac{\sin3h}{h}$.`, 3, "3 · sin(3h)/(3h)."),
  num(S`Évalue $\displaystyle\lim_{h\to0}\frac{\sin h}{2h}$.`, 0.5, "½ · sin h / h.", null, 0.0001),
  num(S`Évalue $\displaystyle\lim_{h\to0}\frac{1-\cos h}{h}$.`, 0, "L'opposé de (cos h − 1)/h."),
  mc("Quelle identité permet de démontrer que la pente de sin x est cos x ?", S`$\sin(x+h)=\sin x\cos h+\cos x\sin h$`, [S`$\sin^2x+\cos^2x=1$`, S`$\sin2x=2\sin x\cos x$`, S`$\cos(x+h)=\cos x+\cos h$`], "Développe sin(x + h) dans le quotient de différence."),
  num(S`Trouve l'ordonnée à l'origine de la tangente à $y=\sin x$ en $x=\frac\pi6$ (4 décimales).`, 0.0466, "y = ½ + (√3/2)(x − π/6); en 0 : ½ − √3π/12.", null, 0.0005),
  num(S`La hauteur d'un passager d'une grande roue est $h(t)=10-8\cos\left(\frac{\pi}{15}t\right)$ m. Estime la vitesse verticale à $t=7.5$ s (4 décimales).`, 1.6755, "8 · π/15 · sin(π/2).", null, 0.0005),
  tf(S`Pour tout $x$, la pente de $y=\sin x$ est égale à la hauteur de $y=\cos x$.`, true, "(sin x)′ = cos x."),
  num("La sécante à y = sin x de 0 à h est tracée pour h = 0.5. Quelle est sa pente ? (4 décimales)", 0.9589, "sin(0.5)/0.5.", graph(Math.sin, { xmin: -0.3, xmax: 2, ymin: -0.3, ymax: 1.2 }, [P(0, 0), P(0.5, Math.sin(0.5))], { more: [{ f: (x) => (Math.sin(0.5) / 0.5) * x, color: "amber", a: -0.2, b: 1.2 }, { f: (x) => x, color: "green", a: -0.2, b: 1.1 }], step: { x: 0.25, y: 0.25 } }), 0.0005),
  num(S`Évalue $\displaystyle\lim_{h\to0}\frac{\sin5h}{\sin2h}$.`, 2.5, "≈ 5h / 2h.", null, 0.0001),
  num(S`Évalue $\displaystyle\lim_{h\to0}\frac{\tan h}{h}$.`, 1, "(sin h / h)(1/cos h)."),
  mc(S`Les pentes de $y=-\sin x$ se trouvent sur quelle courbe ?`, S`$y=-\cos x$`, [S`$y=\cos x$`, S`$y=\sin x$`, S`$y=-\sin x$`], "Réfléchis sin x et ses pentes."),
  num("La durée du jour est D(t) = 12 + 2.5 sin(2πt/365) heures (graphique ci-contre). Estime son taux de variation en t = 0, en heures par jour (4 décimales).", 0.043, "2.5 · 2π/365.", graph((t) => 12 + 2.5 * Math.sin((2 * PI * t) / 365), { xmin: 0, xmax: 370, ymin: 8, ymax: 16 }, [P(0, 12)], { a: 0, b: 365, step: { x: 30, y: 1 } }), 0.0005),
  num(S`En combien de valeurs de $x$ dans $[0,2\pi)$ les pentes de $\sin x$ et de $\cos x$ sont-elles égales ?`, 2, "cos x = −sin x : tan x = −1."),
  num(S`Évalue $\displaystyle\lim_{h\to0}\frac{\cos h-1}{h^2}$.`, -0.5, "Multiplie par (cos h + 1) : −(sin h/h)²/(cos h + 1).", null, 0.0001),
  tf(S`$\sin x\le x$ pour tout $x\ge0$.`, true, "Mêmes pentes en 0, et sin x croît ensuite plus lentement."),
  num("On a tracé la tangente à y = sin x en x = π. Où coupe-t-elle l'axe des y ? (4 décimales)", 3.1416, "y = −(x − π).", graph(Math.sin, { xmin: -0.3, xmax: 4.5, ymin: -1.5, ymax: 3.5 }, [P(PI, 0), P(0, PI)], { more: [{ f: (x) => -(x - PI), color: "green", a: 0, b: 4.3 }], step: { x: 0.5, y: 0.5 } }), 0.0005),
  num(S`En mode degrés, quelle est la pente de $y=\sin x$ en $x=90$ ?`, 0, "Un sommet, quelles que soient les unités."),
  num(S`Trouve le taux de variation moyen de $y=\cos x$ sur $\left[\frac\pi2,\pi\right]$ (4 décimales).`, -0.6366, "(−1 − 0)/(π/2).", null, 0.0005),
  num(S`Évalue $\displaystyle\lim_{h\to0}\frac{\sin^2h}{h}$.`, 0, "(sin h / h) · sin h → 1 · 0."),
];
