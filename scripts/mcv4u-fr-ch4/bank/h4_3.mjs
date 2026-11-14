// 4.3 Règles de dérivation des fonctions sinusoïdales — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";
import { TITLE } from "../l4_3.mjs";

const S = String.raw;
const PI = Math.PI;
export const TOPIC = TITLE;
export const Q = [
  num("Le graphique de y = cos(2x) + 2 sin x sur [0, 2π] est représenté. Trouve sa valeur maximale.", 1.5, "y′ = 2 cos x (1 − 2 sin x) : maximum en x = π/6 et en 5π/6.", graph((x) => Math.cos(2 * x) + 2 * Math.sin(x), { xmin: 0, xmax: 2 * PI, ymin: -3.5, ymax: 2 }, [P(PI / 6, 1.5), P((5 * PI) / 6, 1.5), P(PI / 2, 1)], { a: 0, b: 2 * PI, step: { x: 0.5, y: 0.5 } }), 0.0001),
  num(S`Pour $y=\sin(\cos x)$, trouve $y'\left(\frac\pi2\right)$.`, -1, "cos(cos x) · (−sin x) : cos 0 · (−1)."),
  num(S`Combien de tangentes horizontales $y=\sin^2x$ a-t-elle sur $[0,2\pi)$ ?`, 4, "y′ = sin 2x = 0."),
  num(S`$y=A\cos(kx)$ ($A,k\gt0$) a une période de $4\pi$ et une plus grande pente de 3. Trouve $A$.`, 6, "k = ½, et Ak = 3."),
  mc(S`$\frac{d}{dx}\sin(\sin x)=$`, S`$\cos(\sin x)\cos x$`, [S`$\cos(\cos x)$`, S`$\cos(\sin x)$`, S`$-\sin(\sin x)\cos x$`], "Extérieure sin, intérieure sin x."),
  num("Le graphique de y = x² cos(2x) est représenté. Trouve sa pente en x = π/2 (4 décimales).", -3.1416, "2x cos 2x − 2x² sin 2x en π/2 : π(−1) − 0.", graph((x) => x * x * Math.cos(2 * x), { xmin: 0, xmax: 3, ymin: -6, ymax: 4 }, [P(PI / 2, -(PI * PI) / 4)], { step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`Pour $f(x)=\sin^4x-\cos^4x$, trouve $f'\left(\frac\pi4\right)$.`, 2, "f = (sin² − cos²)(sin² + cos²) = −cos 2x, donc f′ = 2 sin 2x."),
  tf(S`Pour $k\gt0$, plus $k$ est grand, plus $y=\sin(kx)$ est abrupte à l'origine.`, true, "La pente en 0 est k."),
  num(S`Pour $y=\sqrt{1+\sin^2x}$, trouve $y'\left(\frac\pi4\right)$ (4 décimales).`, 0.4082, "sin x cos x/√(1 + sin² x).", null, 0.0005),
  num("Le graphique de y = 3 sin(2x − π/3) + 1 est représenté. Quelle est sa pente en x = π/6 ?", 6, "6 cos 0 — le point le plus abrupt.", graph((x) => 3 * Math.sin(2 * x - PI / 3) + 1, { xmin: 0, xmax: 2 * PI, ymin: -2.5, ymax: 4.5 }, [P(PI / 6, 1)], { a: 0, b: 2 * PI, more: [{ f: (x) => 1 + 6 * (x - PI / 6), color: "green", a: 0, b: 1 }], step: { x: 0.5, y: 1 } })),
  num(S`Combien de tangentes horizontales $y=\sin x+\sin^2x$ a-t-elle sur $[0,2\pi)$ ?`, 4, "cos x (1 + 2 sin x) = 0."),
  mc(S`Si $y=\sin^2(5x)$, alors $y'=$`, S`$5\sin(10x)$`, [S`$10\sin(5x)$`, S`$2\sin(5x)$`, S`$\sin(10x)$`], "10 sin 5x cos 5x = 5 sin 10x."),
  num(S`Trouve le maximum de $y=\sin^2x\cos x$ sur $\left[0,\frac\pi2\right]$ (4 décimales).`, 0.3849, "sin x (2 cos² x − sin² x) = 0 : cos x = 1/√3.", null, 0.0005),
  num("Le graphique de y = cos² x − cos x sur [0, 2π] est représenté. Trouve sa valeur minimale.", -0.25, "y′ = sin x (1 − 2 cos x) : minimum en cos x = ½.", graph((x) => Math.cos(x) ** 2 - Math.cos(x), { xmin: 0, xmax: 2 * PI, ymin: -0.5, ymax: 2.2 }, [P(PI / 3, -0.25), P((5 * PI) / 3, -0.25)], { a: 0, b: 2 * PI, step: { x: 0.5, y: 0.5 } }), 0.0001),
  num(S`Pour $y=\tan\left(\frac x2\right)$, trouve $y'\left(\frac\pi2\right)$.`, 1, "½ sec²(π/4)."),
  tf(S`$\frac{d}{dx}\cos(-x)=-\sin x$.`, true, "cos(−x) = cos x."),
  num(S`Trouve l'ordonnée à l'origine de la tangente à $y=\sin^2x$ en $x=\frac\pi4$ (4 décimales).`, -0.2854, "Point (π/4, ½), pente sin(π/2) = 1.", null, 0.0005),
  num("Une particule a la position s(t) = 2 sin(πt/3) (graphique ci-contre). Quand sa vitesse devient-elle nulle pour la première fois (t > 0) ?", 1.5, "v = (2π/3) cos(πt/3) = 0 en t = 1.5.", graph((t) => 2 * Math.sin((PI * t) / 3), { xmin: 0, xmax: 6.5, ymin: -2.5, ymax: 2.5 }, [P(1.5, 2)], { a: 0, b: 6.5, step: { x: 0.5, y: 0.5 } }), 0.0001),
  num(S`Combien de valeurs de $x$ dans $[0,\pi)$ donnent à $y=\sin(2x)$ une pente de 1 ?`, 2, "2 cos 2x = 1 : x = π/6, 5π/6."),
  num(S`Pour $y=\frac{\sin x}{\cos(2x)}$, trouve $y'(0)$.`, 1, "(cos x cos 2x + 2 sin x sin 2x)/cos² 2x en 0."),
];
