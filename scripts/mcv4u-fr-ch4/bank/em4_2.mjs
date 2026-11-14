// 4.2 Dérivées des fonctions sinus et cosinus — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI;
export const E = [
  mx(S`Dérive $y=2\sin x$.`, "2*cos(x)", "(sin x)′ = cos x."),
  mx(S`Dérive $y=-\cos x$.`, "sin(x)", "−(−sin x)."),
  mx(S`Dérive $y=\sin x+x^3$.`, "cos(x)+3*x^2", "Terme par terme."),
  num(S`Quelle est la pente de $y=\cos x$ en $x=\frac\pi2$ ?`, -1, "−sin(π/2)."),
  mc(S`$\frac{d}{dx}\sin x=$`, S`$\cos x$`, [S`$-\cos x$`, S`$\sin x$`, S`$-\sin x$`], "En radians."),
  tf(S`$\frac{d}{dx}\cos x=\sin x$.`, false, "C'est −sin x."),
  num(S`Pour $f(x)=4\sin x$, trouve $f'(0)$.`, 4, "4 cos 0."),
  num(S`Pour $f(x)=\sin x-\cos x$, trouve $f'(0)$.`, 1, "cos x + sin x en 0."),
  fill(S`$\frac{d}{dx}\tan x=$ ___`, ["sec^2 x", "sec^2(x)", "sec²x", "sec² x", "1/cos^2 x"], "Par la règle du quotient."),
  num(S`Trouve la dérivée quatrième de $\sin x$ en $x=\frac\pi2$.`, 1, "La dérivée quatrième est sin x."),
  mx(S`Dérive $y=6\cos x$.`, "-6*sin(x)", "6 · (−sin x)."),
  num("Le graphique de y = 2.5 sin x est représenté. Quelle est sa pente en x = 0 ?", 2.5, "2.5 cos 0.", graph((x) => 2.5 * Math.sin(x), { xmin: -PI, xmax: PI, ymin: -2.5, ymax: 2.5 }, [P(0, 0)], { more: [{ f: (x) => 2.5 * x, color: "green", a: -0.9, b: 0.9 }], step: { x: 0.5, y: 0.5 } }), 0.0001),
  num(S`Pour $y=2x-\sin x$, trouve $y'(0)$.`, 1, "2 − cos 0."),
  mc(S`Quelle est la dérivée seconde de $\cos x$ ?`, S`$-\cos x$`, [S`$\cos x$`, S`$\sin x$`, S`$-\sin x$`], "cos → −sin → −cos."),
  num(S`Pour $f(x)=10\cos x$, trouve $f'(\pi)$.`, 0, "−10 sin π."),
  tf(S`$\tan x$ est croissante sur chaque intervalle de son domaine.`, true, "sec² x > 0."),
  num(S`Pour $f(x)=\sin x+\cos x$, trouve $f'\left(\frac\pi4\right)$.`, 0, "cos(π/4) − sin(π/4)."),
  num("Le graphique de y = cos x + 1 est représenté. Quelle est sa pente en x = 3π/2 ?", 1, "−sin(3π/2) = 1.", graph((x) => Math.cos(x) + 1, { xmin: 0, xmax: 2 * PI, ymin: -0.5, ymax: 2.5 }, [P(1.5 * PI, 1)], { more: [{ f: (x) => 1 + (x - 1.5 * PI), color: "green", a: 1.5 * PI - 0.9, b: 1.5 * PI + 0.9 }], step: { x: 0.5, y: 0.5 } })),
  mx(S`Dérive $y=\sin x-5x$.`, "cos(x)-5", "cos x − 5."),
  num(S`Trouve la dérivée troisième de $\cos x$ en $x=0$.`, 0, "La dérivée troisième est sin x."),
];

export const M = [
  mx(S`Dérive $y=x\sin x$.`, "sin(x)+x*cos(x)", "Règle du produit."),
  mx(S`Dérive $y=x^4\sin x$.`, "4*x^3*sin(x)+x^4*cos(x)", "Règle du produit."),
  num(S`Pour $f(x)=\frac{x}{\sin x}$, trouve $f'\left(\frac\pi2\right)$.`, 1, "(sin x − x cos x)/sin² x en π/2 : (1 − 0)/1."),
  num(S`Trouve l'ordonnée à l'origine de la tangente à $y=\cos x$ en $x=0$.`, 1, "Tangente horizontale y = 1."),
  num(S`Trouve l'ordonnée à l'origine de la tangente à $y=2\sin x$ en $x=\frac\pi2$.`, 2, "Tangente horizontale y = 2."),
  mc(S`$\frac{d}{dx}\sec x=$`, S`$\sec x\tan x$`, [S`$\sec^2x$`, S`$-\sec x\tan x$`, S`$\tan^2x$`], "Règle du quotient sur 1/cos x."),
  num(S`Pour $f(x)=\tan x$, trouve $f'\left(\frac\pi3\right)$.`, 4, "sec²(π/3) = 2² ."),
  num(S`Pour $f(x)=\sin x\cos x$, trouve $f'(0)$.`, 1, "cos² x − sin² x en 0."),
  mx(S`Dérive $y=\frac{\sin x}{x^2}$.`, "(x*cos(x)-2*sin(x))/x^3", "(x² cos x − 2x sin x)/x⁴."),
  num("Le graphique de y = x − sin x est représenté. Quelle est sa pente en x = π ?", 2, "1 − cos π.", graph((x) => x - Math.sin(x), { xmin: 0, xmax: 2 * PI, ymin: -0.5, ymax: 7 }, [P(PI, PI)], { more: [{ f: (x) => PI + 2 * (x - PI), color: "green", a: PI - 1, b: PI + 1 }], step: { x: 0.5, y: 1 } })),
  num(S`Trouve la 15e dérivée de $\sin x$ en $x=0$.`, -1, "15 = 4 · 3 + 3 : −cos x."),
  tf(S`$(\sin x+\cos x)''=-(\sin x+\cos x)$.`, true, "La dérivée seconde de chaque terme est son opposé."),
  num(S`Combien de tangentes horizontales $f(x)=x^2+2\cos x$ a-t-elle sur $[-\pi,\pi]$ ?`, 1, "f′ = 2(x − sin x) = 0 seulement en x = 0."),
  num(S`Quelle est la pente de $y=\sec x$ en $x=0$ ?`, 0, "sec 0 tan 0."),
  num(S`Pour $f(x)=\sin x\cdot\sin x$, trouve $f'\left(\frac\pi6\right)$ (4 décimales).`, 0.866, "2 sin x cos x.", null, 0.0005),
  num("Le graphique de f(x) = x sin x est représenté. Trouve f′(π) (4 décimales).", -3.1416, "sin π + π cos π.", graph((x) => x * Math.sin(x), { xmin: 0, xmax: 2 * PI, ymin: -5, ymax: 3 }, [P(PI, 0)], { step: { x: 0.5, y: 1 } }), 0.0005),
  mc(S`Où, sur $[0,2\pi]$, $y=x+2\sin x$ a-t-elle des tangentes horizontales ?`, S`$x=\frac{2\pi}3,\ \frac{4\pi}3$`, [S`$x=\frac\pi3,\ \frac{5\pi}3$`, S`$x=\frac\pi2,\ \frac{3\pi}2$`, S`$x=\pi$ seulement`], "1 + 2 cos x = 0."),
  num(S`Pour $f(x)=\cot x$, trouve $f'\left(\frac\pi4\right)$.`, -2, "−csc²(π/4)."),
  num(S`Pour $f(x)=x^2\cos x$, trouve $f''(0)$.`, 2, "f″ = 2 cos x − 4x sin x − x² cos x."),
  mx(S`Dérive $y=\sin x\cos x$ à l'aide de la règle du produit.`, "cos(x)^2-sin(x)^2", "cos x · cos x + sin x · (−sin x)."),
];
