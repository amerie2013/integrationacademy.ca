// 5.3 Dérivées des fonctions exponentielles — 20 questions difficiles (miroir de ../../mcv4u-ch5/bank/h5_3.mjs)
import { mc, num, tf, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const E = Math.E;
export const TOPIC = "5.3 Dérivées des fonctions exponentielles";
export const Q = [
  num(S`$y=e^{kx}$ vérifie $y''-5y'+6y=0$. Trouve la plus grande valeur de $k$.`, 3, "k² − 5k + 6 = 0."),
  mx(S`Dérive $y=e^x\cdot e^{2x}\cdot e^{3x}$.`, "6*exp(6*x)", "Le produit vaut e^(6x)."),
  num("Une droite qui passe par l'origine est tangente à y = e^(3x) (graphique illustré). En quel x la touche-t-elle (4 décimales)?", 0.3333, "Tangente en a : y = e^(3a)(1 + 3(x − a)); en x = 0 : 1 − 3a = 0.", graph((x) => Math.exp(3 * x), { xmin: -1.5, xmax: 0.8, ymin: -0.5, ymax: 6 }, [P(1 / 3, E)], { more: [{ f: (x) => 3 * E * x, color: "green", a: -0.1, b: 0.7 }], step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`Trouve la dixième dérivée de $y=e^{2x}$ en $x=0$.`, 1024, "Chaque dérivée multiplie par 2 : 2¹⁰."),
  tf(S`$y=(x^2+1)e^{-x}$ n'est jamais croissante.`, true, "y′ = −e^(−x)(x − 1)² ≤ 0."),
  num("Le graphique de y = xeˣ est illustré. Trouve l'ordonnée de son point d'inflexion (4 décimales).", -0.2707, "y″ = (x + 2)eˣ change de signe en x = −2; y = −2/e².", graph((x) => x * Math.exp(x), { xmin: -6, xmax: 1, ymin: -0.6, ymax: 1.5 }, [P(-1, -1 / E, false), P(-2, -2 / E ** 2)], { step: { x: 0.5, y: 0.25 } }), 0.0005),
  mc(S`Quelle fonction vérifie $y'=-3y$?`, S`$y=5e^{-3x}$`, [S`$y=-3e^x$`, S`$y=e^{3x}$`, S`$y=-3x^2$`], "y = Ce^(−3x)."),
  num(S`Pour $y=\frac{e^x}{e^x+e^{-x}}$, trouve $y'(0)$.`, 0.5, "Divise par eˣ : 1/(1 + e^(−2x)); dérivée 2e^(−2x)/(1 + e^(−2x))².", null, 0.0001),
  num(S`En quel $x$ les fonctions $y=2^x$ et $y=3^x$ ont-elles des pentes égales (4 décimales)?`, -1.1359, "2ˣ ln 2 = 3ˣ ln 3 ⇒ x = ln(ln 3/ln 2)/ln(2/3).", null, 0.0005),
  tf(S`$\frac{d}{dx}\left(e^x\right)^x=2xe^{x^2}$.`, true, "(eˣ)ˣ = e^(x²)."),
  num("Les courbes y = eˣ et y = 4e^(−x) se coupent comme illustré. Quel est le produit de leurs pentes en ce point?", -4, "Elles se coupent en x = ln 2, où les deux valent 2; pentes 2 et −2.", graph(Math.exp, { xmin: -1.5, xmax: 2.5, ymin: -0.5, ymax: 7 }, [P(Math.log(2), 2)], { more: [{ f: (x) => 4 * Math.exp(-x), color: "blue" }], step: { x: 0.5, y: 1 } })),
  num(S`Trouve la valeur minimale de $y=e^{2x}-4e^x$.`, -4, "2e^(2x) − 4eˣ = 0 ⇒ eˣ = 2; 4 − 8."),
  mx(S`Dérive $y=e^{x\ln3}$.`, "3^x*ln(3)", "e^(x ln 3) = 3ˣ."),
  num(S`Évalue $\displaystyle\lim_{h\to0}\frac{e^{2+h}-e^2}{h}$ (3 décimales).`, 7.389, "La pente de eˣ en x = 2.", null, 0.002),
  num(S`Où la normale à $y=e^x$ en $x=0$ coupe-t-elle l'axe des x?`, 1, "Normale de pente −1 passant par (0, 1) : y = 1 − x."),
  num(S`Pour $y=5^x e^x$, trouve $y'(0)$ (4 décimales).`, 2.6094, "(5e)ˣ; la pente en 0 est ln(5e) = 1 + ln 5.", null, 0.0005),
  num(S`Pour $y=e^{\tan x}$, trouve $y'\left(\frac\pi4\right)$ (4 décimales).`, 5.4366, "sec²x · e^(tan x) = 2e.", null, 0.0005),
  num("Le graphique de y = 3ˣ − 2x est illustré. Trouve sa valeur minimale (4 décimales).", 0.7298, "3ˣ ln 3 = 2 en x ≈ 0.5453; valeur 2/ln 3 − 2x.", graph((x) => 3 ** x - 2 * x, { xmin: -2, xmax: 2, ymin: -0.5, ymax: 6 }, [P(0.5453, 0.7298)], { step: { x: 0.5, y: 1 } }), 0.0005),
  mc(S`Que vaut $\displaystyle\lim_{x\to\infty}\frac{e^x}{x^{100}}$?`, S`$\infty$`, ["0", "1", "100"], "Les exponentielles dépassent toutes les puissances."),
  num(S`$y=Ae^{kx}$ vérifie $y(0)=5$ et $y'(0)=-10$. Trouve $y(2)$ (4 décimales).`, 0.0916, "A = 5, k = −2 : 5e^(−4).", null, 0.0005),
];
