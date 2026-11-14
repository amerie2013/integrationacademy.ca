// 4.3 Règles de dérivation des fonctions sinusoïdales — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const PI = Math.PI;
export const E = [
  mx(S`Dérive $y=\sin(2x)$.`, "2*cos(2*x)", "Dérivée intérieure 2."),
  mx(S`Dérive $y=\cos(5x)$.`, "-5*sin(5*x)", "−sin(5x) · 5."),
  num(S`Pour $y=\sin(3x)$, trouve $y'(0)$.`, 3, "3 cos 0."),
  num(S`Pour $y=\cos(4x)$, trouve $y'(0)$.`, 0, "−4 sin 0."),
  mc(S`$\frac{d}{dx}\sin(kx)=$`, S`$k\cos(kx)$`, [S`$\cos(kx)$`, S`$-k\cos(kx)$`, S`$k\sin(kx)$`], "Règle de dérivation en chaîne."),
  tf(S`$\frac{d}{dx}\sin(2x)=\cos(2x)$.`, false, "Il manque le facteur 2."),
  mx(S`Dérive $y=\sin(x+1)$.`, "cos(x+1)", "Dérivée intérieure 1."),
  num(S`Quelle est la plus grande pente de $y=4\sin(3x)-2$ ?`, 12, "|Ak| = 4 · 3."),
  fill(S`$\sin^2x$ signifie (___)$^2$.`, ["sin x", "sin(x)", "sinx"], "Une puissance du sinus."),
  num(S`Pour $y=\sin\left(\frac x4\right)$, trouve $y'(0)$.`, 0.25, "¼ cos 0.", null, 0.0001),
  mx(S`Dérive $y=\sin(x^3)$.`, "3*x^2*cos(x^3)", "cos(x³) · 3x²."),
  num("Le graphique de y = sin(2x) est représenté. Quelle est sa pente en x = 0 ?", 2, "2 cos 0.", graph((x) => Math.sin(2 * x), { xmin: -PI, xmax: PI, ymin: -1.5, ymax: 1.5 }, [P(0, 0)], { more: [{ f: (x) => 2 * x, color: "green", a: -0.6, b: 0.6 }], step: { x: 0.5, y: 0.5 } })),
  num(S`Pour $y=\sin^2(5x)$, trouve $y'(0)$.`, 0, "10 sin 5x cos 5x en 0."),
  mc(S`$\frac{d}{dx}\cos^2x=$`, S`$-2\sin x\cos x$`, [S`$2\cos x$`, S`$-2\cos x$`, S`$2\sin x\cos x$`], "2 cos x · (−sin x)."),
  num(S`Pour $y=2\cos(3x)$, trouve $y'\left(\frac\pi6\right)$.`, -6, "−6 sin(π/2)."),
  tf("Une translation verticale d change la dérivée de A sin(kx) + d.", false, "La dérivée de d est 0."),
  num(S`Trouve la période de $y=\sin(4x)$ (4 décimales).`, 1.5708, "2π/4.", null, 0.0005),
  num("Le graphique de y = cos(2x) est représenté. Quelle est sa pente en x = π/4 ?", -2, "−2 sin(π/2).", graph((x) => Math.cos(2 * x), { xmin: 0, xmax: PI, ymin: -1.5, ymax: 1.5 }, [P(PI / 4, 0)], { more: [{ f: (x) => -2 * (x - PI / 4), color: "green", a: 0.3, b: 1.3 }], step: { x: 0.25, y: 0.5 } })),
  mx(S`Dérive $y=-\sin(6x)$.`, "-6*cos(6*x)", "−cos(6x) · 6."),
  num(S`Pour $y=\sin\left(\frac{\pi x}{2}\right)$, trouve $y'(0)$ (4 décimales).`, 1.5708, "(π/2) cos 0.", null, 0.0005),
];

export const M = [
  mx(S`Dérive $y=\cos^2(3x)$.`, "-6*cos(3*x)*sin(3*x)", "2 cos(3x) · (−sin(3x)) · 3."),
  mx(S`Dérive $y=x\sin(2x)$.`, "sin(2*x)+2*x*cos(2*x)", "Produit et chaîne."),
  num(S`Pour $y=\sin(2x)\cos(2x)$, trouve $y'(0)$.`, 2, "Elle vaut ½ sin(4x); dérivée 2 cos(4x)."),
  num(S`Pour $y=\sqrt{1+\sin x}$, trouve $y'(0)$.`, 0.5, "cos x/(2√(1 + sin x)).", null, 0.0001),
  num(S`Pour $y=\sin(2x^2)$, trouve $y'\left(\sqrt{\pi/2}\right)$ (4 décimales).`, -5.0133, "4x cos(2x²) en √(π/2) : 4√(π/2) cos π.", null, 0.0005),
  mc(S`$\frac{d}{dx}\tan(3x)=$`, S`$3\sec^2(3x)$`, [S`$\sec^2(3x)$`, S`$3\tan^2(3x)$`, S`$\sec^2(x)$`], "Dérivée intérieure 3."),
  num(S`Trouve l'ordonnée à l'origine de la tangente à $y=\cos(2x)$ en $x=\frac\pi4$ (4 décimales).`, 1.5708, "Point (π/4, 0), pente −2 : y = −2x + π/2.", null, 0.0005),
  num(S`Pour $y=5\cos\left(\frac{\pi x}2\right)+1$, trouve $y'(1)$ (3 décimales).`, -7.854, "−(5π/2) sin(π/2).", null, 0.002),
  num(S`Pour $y=\cos^3x$, trouve $y'\left(\frac\pi3\right)$ (4 décimales).`, -0.6495, "−3 cos² x sin x.", null, 0.0005),
  num("Le graphique de y = 2 sin(x/2) est représenté. Quelle est sa pente en x = 0 ?", 1, "2 · ½ cos 0.", graph((x) => 2 * Math.sin(x / 2), { xmin: -2 * PI, xmax: 2 * PI, ymin: -2.5, ymax: 2.5 }, [P(0, 0)], { more: [{ f: (x) => x, color: "green", a: -1.2, b: 1.2 }], step: { x: 1, y: 0.5 } })),
  tf(S`$\sin^2x$ et $\sin(x^2)$ ont la même dérivée.`, false, "2 sin x cos x contre 2x cos(x²)."),
  num(S`Quelle est la plus grande pente de $y=-3\cos(4x)+7$ ?`, 12, "|Ak| = 3 · 4."),
  num(S`Pour $y=\tan(\sin x)$, trouve $y'(0)$.`, 1, "sec²(sin x) cos x en 0."),
  num(S`Pour $y=\sin(3x+\pi)$, trouve $y'(0)$.`, -3, "3 cos π."),
  mc(S`La plus grande pente de $y=A\sin(kx)$ est :`, S`$|Ak|$`, [S`$|A|$`, S`$|k|$`, S`$|A|+|k|$`], "Dérivée Ak cos(kx)."),
  num(S`Pour $y=\sec(2x)$, trouve $y'\left(\frac\pi8\right)$ (4 décimales).`, 2.8284, "2 sec(2x) tan(2x) en π/8.", null, 0.0005),
  num("Le graphique de y = sin x + sin(2x) est représenté. Quelle est sa pente en x = 0 ?", 3, "cos x + 2 cos(2x) en 0.", graph((x) => Math.sin(x) + Math.sin(2 * x), { xmin: -PI, xmax: PI, ymin: -2.2, ymax: 2.2 }, [P(0, 0)], { more: [{ f: (x) => 3 * x, color: "green", a: -0.5, b: 0.5 }], step: { x: 0.5, y: 0.5 } })),
  num(S`Pour $y=\tan^2x$, trouve $y'\left(\frac\pi4\right)$.`, 4, "2 tan x sec² x."),
  mx(S`Dérive $y=\frac{\sin(4x)}{4}$.`, "cos(4*x)", "¼ · 4 cos(4x)."),
  num(S`Pour $y=\sin x\cos(3x)$, trouve $y'(0)$.`, 1, "cos x cos 3x − 3 sin x sin 3x en 0."),
];
