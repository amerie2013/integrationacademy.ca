// 5.4 Règles de dérivation des fonctions exponentielles — 20 questions difficiles (miroir de ../../mcv4u-ch5/bank/h5_4.mjs)
import { mc, num, tf, mx } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
const E = Math.E;
export const TOPIC = "5.4 Règles de dérivation des fonctions exponentielles";
export const Q = [
  num(S`Pour $y=x^{x^2}$, trouve $y'(2)$ (2 décimales).`, 76.36, "ln y = x² ln x; y′ = 16(4 ln 2 + 2).", null, 0.01),
  num("Le graphique de y = x³e^(−x/2) pour x ≥ 0 est illustré. Trouve sa valeur maximale (4 décimales).", 10.754, "y′ = e^(−x/2)(3x² − x³/2) = 0 en x = 6; 216e^(−3).", graph((x) => x ** 3 * Math.exp(-x / 2), { xmin: -0.5, xmax: 20, ymin: -1, ymax: 12 }, [P(6, 216 * Math.exp(-3))], { a: 0, step: { x: 2, y: 2 } }), 0.0005),
  mx(S`Utilise la dérivation logarithmique : $y=\frac{(x+1)^2(x-2)^3}{e^x}$.`, "(x+1)^2*(x-2)^3*exp(-x)*(2/(x+1)+3/(x-2)-1)", "ln y = 2 ln(x + 1) + 3 ln(x − 2) − x; multiplie y′/y par y."),
  num(S`Pour $y=(\sin x)^x$, $0\lt x\lt\pi$, trouve $y'\left(\frac\pi2\right)$.`, 0, "y′/y = ln sin x + x cot x = 0 + 0 en π/2."),
  num(S`Trouve la plus grande abscisse des points d'inflexion de $y=x^2e^{2x}$ (4 décimales).`, -0.2929, "y″ = (4x² + 8x + 2)e^(2x); x = −1 ± √2/2.", null, 0.0005),
  num("Le graphique de y = 4xe^(−x²) est illustré. Trouve sa valeur maximale (4 décimales).", 1.7155, "y′ = 4e^(−x²)(1 − 2x²) = 0 en x = 1/√2; valeur 2√2 e^(−½).", graph((x) => 4 * x * Math.exp(-x * x), { xmin: -3, xmax: 3, ymin: -2.2, ymax: 2.2 }, [P(Math.SQRT1_2, 1.7155), P(-Math.SQRT1_2, -1.7155)], { step: { x: 0.5, y: 0.5 } }), 0.0005),
  num(S`Pour $y=e^x(\sin x+\cos x)$, trouve $y'(0)$.`, 2, "y′ = 2eˣ cos x."),
  mc(S`Si $y=f(x)^{g(x)}$ avec $f\gt0$, alors $y'=$`, S`$f^g\left(g'\ln f+\frac{gf'}{f}\right)$`, [S`$g\,f^{g-1}f'$`, S`$f^g\ln f\cdot g'$`, S`$f^g\left(g'\ln f+gf'\right)$`], "Dérive ln y = g ln f, puis multiplie par y."),
  num(S`Pour $y=(1+x)^{1/x}$, trouve $y'(1)$ (4 décimales).`, -0.3863, "ln y = ln(1 + x)/x; y′/y = ½ − ln 2 et y = 2.", null, 0.0005),
  tf(S`$x^e\lt e^x$ pour tout $x\gt0$ sauf $x=e$.`, true, "Compare e ln x avec x : (ln x)/x atteint son maximum 1/e en x = e."),
  num("Une tangente à y = eˣ passe par (0, −1) (graphique illustré). En quel x touche-t-elle la courbe (4 décimales)?", 1.2785, "La tangente en a coupe x = 0 en eᵃ(1 − a) = −1; résous (a − 1)eᵃ = 1 numériquement.", graph(Math.exp, { xmin: -1.5, xmax: 2.2, ymin: -1.5, ymax: 7 }, [P(1.2785, 3.5911), P(0, -1)], { more: [{ f: (x) => -1 + 3.5911 * x, color: "green", a: -0.1, b: 2.1 }], step: { x: 0.5, y: 1 } }), 0.0005),
  num(S`La position d'un ressort est $s(t)=5e^{-0.5t}\sin t$ cm. Trouve sa vitesse en $t=0$.`, 5, "s′ = 5e^(−0.5t)(cos t − 0.5 sin t)."),
  mx(S`Dérive $y=\ln\frac{e^x}{1+e^x}$.`, "1/(1+exp(x))", "x − ln(1 + eˣ); puis 1 − eˣ/(1 + eˣ)."),
  num(S`En quel $x\gt0$ la fonction $y=\frac{e^x}{x^3}$ atteint-elle son minimum?`, 3, "y′ = eˣ(x − 3)/x⁴."),
  num(S`En quel $x$ la fonction $y=\frac{\ln x}{x^3}$ atteint-elle son maximum (4 décimales)?`, 1.3956, "y′ = (1 − 3 ln x)/x⁴ = 0 en x = e^(1/3).", null, 0.0005),
  tf(S`$y=\frac{e^{2x}}{x}$ est concave vers le haut pour tout $x\gt0$.`, true, "y″ = e^(2x)(4x² − 4x + 2)/x³ > 0."),
  num(S`Pour $y=(2x)^x$, trouve $y'\left(\frac12\right)$.`, 1, "ln y = x ln 2x; y′/y = ln 2x + 1 = 1 et y = 1."),
  num("Le graphique de y = (x − 1)²eˣ est illustré. Trouve sa valeur maximale relative (4 décimales).", 1.4715, "y′ = (x − 1)(x + 1)eˣ; maximum relatif en x = −1 : 4/e.", graph((x) => (x - 1) ** 2 * Math.exp(x), { xmin: -5, xmax: 1.8, ymin: -0.3, ymax: 2.5 }, [P(-1, 4 / E), P(1, 0)], { step: { x: 0.5, y: 0.5 } }), 0.0005),
  num(S`Pour $y=e^x\sin(2x)$, trouve $y''(0)$.`, 4, "y′ = eˣ(sin 2x + 2 cos 2x), y″ = eˣ(4 cos 2x − 3 sin 2x)."),
  mc(S`Que vaut $\displaystyle\lim_{x\to0^+}x^x$?`, "1", ["0", S`$e$`, "elle n'existe pas"], "x ln x → 0, donc xˣ → e⁰."),
];
