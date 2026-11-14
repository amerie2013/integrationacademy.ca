// 4.2 Dérivées des fonctions sinus et cosinus — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";
import { TITLE } from "../l4_2.mjs";

const S = String.raw;
const PI = Math.PI;
export const TOPIC = TITLE;
export const Q = [
  num("Le graphique de y = x + 2 sin x sur [0, 2π] est représenté. Trouve sa valeur maximale relative (4 décimales).", 3.8264, "1 + 2 cos x = 0 en 2π/3 : 2π/3 + √3.", graph((x) => x + 2 * Math.sin(x), { xmin: 0, xmax: 2 * PI, ymin: -0.5, ymax: 7 }, [P((2 * PI) / 3, (2 * PI) / 3 + Math.sqrt(3)), P((4 * PI) / 3, (4 * PI) / 3 - Math.sqrt(3))], { a: 0, b: 2 * PI, step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`Trouve l'ordonnée à l'origine de la tangente à $y=x\cos x$ en $x=\pi$.`, 0, "y(π) = −π; pente cos π − π sin π = −1; y = −x."),
  num(S`Pour $f(x)=\frac{\sin x}{1-\cos x}$, trouve $f'\left(\frac\pi2\right)$.`, -1, "f′ se simplifie en −1/(1 − cos x)."),
  mc(S`$\frac{d}{dx}\csc x=$`, S`$-\csc x\cot x$`, [S`$\csc x\cot x$`, S`$-\csc^2x$`, S`$\sec x\tan x$`], "Règle du quotient sur 1/sin x."),
  num(S`Trouve la valeur maximale de $y=5\sin x+12\cos x$.`, 13, "5 cos x = 12 sin x : tan x = 5/12, ce qui donne 25/13 + 144/13."),
  num("Le graphique de y = sin x − cos x est représenté. En quelle valeur de x dans [0, 2π] est-il le plus grand ? (4 décimales)", 2.3562, "cos x + sin x = 0 : x = 3π/4.", graph((x) => Math.sin(x) - Math.cos(x), { xmin: 0, xmax: 2 * PI, ymin: -1.7, ymax: 1.7 }, [P((3 * PI) / 4, Math.SQRT2)], { a: 0, b: 2 * PI, step: { x: 0.5, y: 0.5 } }), 0.0005),
  tf(S`$\frac{d}{dx}\tan x=1+\tan^2x$.`, true, "sec² x = 1 + tan² x."),
  num(S`Trouve la 100e dérivée de $\cos x$ en $x=0$.`, 1, "100 est un multiple de 4."),
  num(S`Pour $f(x)=x\sin(2x)$, trouve $f''(0)$.`, 4, "f″ = 4 cos 2x − 4x sin 2x."),
  num("On a tracé la tangente à y = tan x en x = π/4. Trouve son ordonnée à l'origine (4 décimales).", -0.5708, "Pente sec²(π/4) = 2, passant par (π/4, 1).", graph(Math.tan, { xmin: -1.4, xmax: 1.4, ymin: -3, ymax: 3 }, [P(PI / 4, 1)], { a: -1.35, b: 1.35, more: [{ f: (x) => 1 + 2 * (x - PI / 4), color: "green", a: -0.3, b: 1.4 }], step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`Combien de tangentes horizontales $y=\frac x2+\sin x$ a-t-elle sur $[0,2\pi]$ ?`, 2, "½ + cos x = 0."),
  mc(S`La dérivée de $\sin x\cos x$ est égale à :`, S`$\cos2x$`, [S`$\sin2x$`, S`$-\sin2x$`, S`$2\cos x$`], "cos² x − sin² x."),
  num(S`Pour $f(x)=\sec x+\tan x$, trouve $f'(0)$.`, 1, "sec x tan x + sec² x en 0."),
  num("Le graphique de f(x) = cos x/(2 + sin x) est représenté. Trouve sa valeur maximale (4 décimales).", 0.5774, "Numérateur de f′ : −(2 sin x + 1); maximum en x = 11π/6.", graph((x) => Math.cos(x) / (2 + Math.sin(x)), { xmin: 0, xmax: 2 * PI, ymin: -0.8, ymax: 0.8 }, [P((11 * PI) / 6, 1 / Math.sqrt(3)), P((7 * PI) / 6, -1 / Math.sqrt(3))], { a: 0, b: 2 * PI, step: { x: 0.5, y: 0.2 } }), 0.0005),
  num(S`La tangente à $y=\sin x$ en $x=a$, avec $\pi\lt a\lt\frac{3\pi}2$, passe par l'origine. Trouve $a$ (4 décimales).`, 4.4934, "sin a = a cos a ⇒ tan a = a.", null, 0.001),
  tf(S`Si $f''=-f$, $f(0)=0$ et $f'(0)=1$, alors $f(x)=\sin x$ satisfait les trois conditions.`, true, "sin″ = −sin, sin 0 = 0, cos 0 = 1."),
  num(S`Pour $f(x)=(x^2+1)\sin x$, trouve $f'(0)$.`, 1, "2x sin x + (x² + 1) cos x en 0."),
  num(S`Pour $f(x)=\cos x\cdot\cos x$, trouve $f'\left(\frac\pi4\right)$.`, -1, "−2 cos x sin x."),
  num("Le graphique de y = x cos x sur [0, π/2] est représenté. En quelle valeur de x est-il le plus grand ? (4 décimales)", 0.8603, "cos x − x sin x = 0.", graph((x) => x * Math.cos(x), { xmin: 0, xmax: 1.7, ymin: -0.1, ymax: 0.7 }, [P(0.8603, 0.8603 * Math.cos(0.8603))], { a: 0, b: PI / 2, step: { x: 0.25, y: 0.1 } }), 0.0005),
  num(S`Quelle est la dérivée de $\sec^2x-\tan^2x$ ?`, 0, "L'expression vaut 1 partout où elle est définie."),
];
