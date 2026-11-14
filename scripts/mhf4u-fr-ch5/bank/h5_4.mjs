// 5.4 Résolution d'équations trigonométriques — 20 questions difficiles
import { mc, num, tf, ms } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { TG, UC } from "../trigfig.mjs";
const S = String.raw;
const P = Math.PI;
const V = { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 2 };

export const TOPIC = "5.4 Résolution d'équations trigonométriques";
export const Q = [
  ms(S`Sélectionne toutes les solutions de $2\cos^2x-3\cos x+1=0$ dans $[0,2\pi]$.`, ["0", S`$\frac\pi3$`, S`$\frac{5\pi}3$`, S`$2\pi$`, S`$\frac{2\pi}3$`], [0, 1, 2, 3], "(2 cos x − 1)(cos x − 1) = 0 : cos x = 1/2 ou 1."),
  ms(S`Sélectionne toutes les solutions de $2\sin^2x=1-\cos x$ dans $[0,2\pi)$.`, ["0", S`$\frac{2\pi}3$`, S`$\pi$`, S`$\frac{4\pi}3$`, S`$\frac\pi3$`], [0, 1, 3], "2(1 − cos²x) = 1 − cos x ⇒ 2cos²x − cos x − 1 = 0 ⇒ (2cos x + 1)(cos x − 1) = 0. cos x = 1 donne 0; cos x = −1/2 donne 2π/3, 4π/3."),
  ms(S`Sélectionne toutes les solutions de $\sin2x=\cos x$ dans $[0,2\pi)$.`, [S`$\frac\pi6$`, S`$\frac\pi2$`, S`$\frac{5\pi}6$`, S`$\frac{3\pi}2$`, S`$\frac\pi3$`], [0, 1, 2, 3], "2 sin x cos x − cos x = cos x(2 sin x − 1) = 0."),
  ms(S`Sélectionne toutes les solutions de $\cos2x+\cos x=0$ dans $[0,2\pi)$.`, [S`$\frac\pi3$`, S`$\pi$`, S`$\frac{5\pi}3$`, S`$\frac{2\pi}3$`, "0"], [0, 1, 2], "2cos²x + cos x − 1 = (2cos x − 1)(cos x + 1) = 0."),
  num(S`Combien de solutions l'équation $\tan2x=1$ a-t-elle dans $[0,2\pi)$ ?`, 4, "2x = π/4 + nπ donne x = π/8 + nπ/2 : quatre valeurs inférieures à 2π."),
  num(S`Combien de solutions l'équation $\sin\frac x2=\frac12$ a-t-elle dans $[0,2\pi]$ ?`, 2, "x/2 parcourt [0, π]; sin = 1/2 en π/6 et en 5π/6, donc x = π/3 et 5π/3."),
  num(S`Trouve la plus petite solution positive de $\sqrt3\tan\left(x-\frac\pi6\right)=1$ (trois décimales).`, P / 3, "tan(x − π/6) = 1/√3, donc x − π/6 = π/6 et x = π/3 ≈ 1.047.", null, 0.002),
  num(S`Résous $3\sin^2x-\sin x=0$ pour $0<x<\frac\pi2$ (trois décimales).`, Math.asin(1 / 3), "sin x(3 sin x − 1) = 0; dans (0, π/2), seulement sin x = 1/3, x ≈ 0.340.", null, 0.002),
  num(S`Résous $2\cos^2x+5\cos x-3=0$ pour $0\le x\le\pi$ (trois décimales).`, P / 3, "(2cos x − 1)(cos x + 3) = 0; cos x = −3 est impossible, donc cos x = 1/2, x = π/3.", null, 0.002),
  mc(S`Quelle est la solution générale de $2\sin x+\sqrt3=0$ ?`, S`$x=\frac{4\pi}3+2n\pi$ ou $x=\frac{5\pi}3+2n\pi$`, [S`$x=\frac{4\pi}3+n\pi$`, S`$x=\pm\frac\pi3+2n\pi$`, S`$x=\frac\pi3+2n\pi$ ou $x=\frac{2\pi}3+2n\pi$`], "sin x = −√3/2 : angles des quadrants 3 et 4, période 2π."),
  mc(S`Quelle est la solution générale de $\cos2x=0$ ?`, S`$x=\frac\pi4+\frac{n\pi}2$`, [S`$x=\frac\pi4+n\pi$`, S`$x=\frac\pi2+n\pi$`, S`$x=\frac\pi4+2n\pi$`], "2x = π/2 + nπ, donc x = π/4 + nπ/2."),
  tf(S`$\sin x+\cos x=2$ n'a aucune solution réelle.`, true, "Chaque terme vaut au plus 1 et ils ne peuvent pas valoir 1 tous les deux pour la même valeur de x."),
  tf(S`$\sin^2x-\cos^2x=1$ a pour solutions $x=\frac\pi2$ et $x=\frac{3\pi}2$ dans $[0,2\pi)$.`, true, "Cela signifie −cos 2x = 1, donc cos 2x = −1, 2x = π ou 3π."),
  mc(S`Pour $0\le x\le2\pi$, résous $\sin x>\frac12$.`, S`$\frac\pi6<x<\frac{5\pi}6$`, [S`$0<x<\frac\pi6$`, S`$\frac{5\pi}6<x<2\pi$`, S`$\frac\pi6<x<\frac{11\pi}6$`], "Entre les deux solutions de sin x = 1/2, la courbe est au-dessus de la droite."),
  mc(S`Pour $0\le x\le2\pi$, résous $\cos x\le0$.`, S`$\frac\pi2\le x\le\frac{3\pi}2$`, [S`$0\le x\le\pi$`, S`$\pi\le x\le2\pi$`, S`$\frac\pi2\le x\le\pi$`], "Le point est sur l'axe des y ou à sa gauche."),
  mc("Le graphique montre y = cos 2x et y = −1. Quelles sont les solutions dans [0, 2π] ?", S`$\frac\pi2,\ \frac{3\pi}2$`, [S`$\pi$`, S`$\frac\pi4,\ \frac{3\pi}4$`, S`$0,\ \pi,\ 2\pi$`], "2x = π ou 3π.", planeDoc(TG([[(x) => Math.cos(2 * x), "green"], [() => -1, "blue"]], V))),
  mc("Le graphique montre y = sin x et y = cos x. Résous sin x ≥ cos x dans [0, 2π].", S`$\frac\pi4\le x\le\frac{5\pi}4$`, [S`$0\le x\le\frac\pi4$`, S`$\frac{5\pi}4\le x\le2\pi$`, S`$\frac\pi2\le x\le\pi$`], "La courbe violette est sur la verte ou au-dessus entre les croisements.", planeDoc(TG([[Math.sin, "violet"], [Math.cos, "green"]], V))),
  mc("Le graphique montre y = 2 sin x + 1 et y = 0. Où a-t-on 2 sin x + 1 < 0 dans [0, 2π] ?", S`$\frac{7\pi}6<x<\frac{11\pi}6$`, [S`$\frac\pi6<x<\frac{5\pi}6$`, S`$\pi<x<2\pi$`, S`$\frac{5\pi}6<x<\frac{7\pi}6$`], "sin x < −1/2 entre 7π/6 et 11π/6.", planeDoc(TG([[(x) => 2 * Math.sin(x) + 1, "violet"]], { xmin: -0.5, xmax: 6.8, ymin: -2, ymax: 4 }))),
  mc("Le cercle trigonométrique montre les deux angles tels que cos θ = −0.3. Quelle paire est correcte (deux décimales) ?", "1.88 et 4.41", ["1.27 et 5.02", "1.88 et 5.02", "0.30 et 2.84"], "cos⁻¹(−0.3) ≈ 1.875 (quadrant 2); l'angle du quadrant 3 est 2π − 1.875 ≈ 4.41.", planeDoc(UC(107.46, "θ", [{ x: -0.3, y: -Math.sqrt(0.91), label: "2π − θ", color: "blue" }]))),
  num(S`Trouve la somme de toutes les solutions de $\tan x=-3$ dans $[0,2\pi)$ (deux décimales).`, (P - Math.atan(3)) + (2 * P - Math.atan(3)), "Quadrant 2 : π − tan⁻¹3 ≈ 1.89; quadrant 4 : 2π − tan⁻¹3 ≈ 5.03; somme ≈ 6.93.", null, 0.02),
];
