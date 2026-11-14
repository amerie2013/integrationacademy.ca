// 4.4 Formules d'addition (angles composés) — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { ARM, TG } from "../trigfig.mjs";
const S = String.raw;

export const TOPIC = "4.4 Formules d'addition (angles composés)";
export const Q = [
  mc(S`$\sin a=\frac8{17}$ dans le quadrant 2 et $\cos b=-\frac35$ dans le quadrant 3. Que vaut $\sin(a+b)$?`, S`$\frac{36}{85}$`, [S`$-\frac{36}{85}$`, S`$\frac{84}{85}$`, S`$-\frac{84}{85}$`], "(8/17)(−3/5) + (−15/17)(−4/5) = (−24 + 60)/85."),
  mc(S`$\cos a=\frac{12}{13}$ dans le quadrant 4 et $\sin b=\frac45$ dans le quadrant 2. Que vaut $\cos(a+b)$?`, S`$-\frac{16}{65}$`, [S`$\frac{16}{65}$`, S`$-\frac{56}{65}$`, S`$\frac{56}{65}$`], "(12/13)(−3/5) − (−5/13)(4/5) = (−36 + 20)/65."),
  mc(S`$\sin a=-\frac35$ dans le quadrant 3 et $\tan b=\frac{5}{12}$ dans le quadrant 1. Que vaut $\sin(a-b)$?`, S`$-\frac{16}{65}$`, [S`$\frac{16}{65}$`, S`$-\frac{56}{65}$`, S`$\frac{56}{65}$`], "(−3/5)(12/13) − (−4/5)(5/13) = (−36 + 20)/65."),
  num(S`$\tan a=\frac13$, $\tan b=\frac12$, deux angles aigus. Trouve $a+b$ en radians (4 décimales).`, 0.7854, "tan(a + b) = 1.", null, 0.001),
  num(S`$\tan a=2$, $\tan b=3$, deux angles aigus. Trouve $a+b$ en radians (4 décimales).`, 2.3562, "tan(a + b) = −1 et a + b est dans le quadrant 2 : 3π/4.", null, 0.001),
  num(S`$\tan(a+b)=5$ et $\tan a=2$. Trouve $\tan b$ (4 décimales).`, 0.2727, "(2 + t)/(1 − 2t) = 5 donne t = 3/11.", null, 0.001),
  mc(S`Récris $\sin x+\sqrt3\cos x$ sous la forme $R\sin(x+\alpha)$, $R>0$.`, S`$2\sin\left(x+\frac\pi3\right)$`, [S`$2\sin\left(x+\frac\pi6\right)$`, S`$4\sin\left(x+\frac\pi3\right)$`, S`$\sqrt3\sin\left(x+\frac\pi3\right)$`], "R = 2; cos α = 1/2, sin α = √3/2."),
  num(S`Quelle est la valeur maximale de $3\sin x+4\cos x$?`, 5, "R = √(9 + 16)."),
  num(S`Quelle est la valeur minimale de $5\sin x-12\cos x$?`, -13, "R = 13."),
  mc("Le graphique représente y = R sin(x + α). Quelle paire correspond à sin x + cos x?", S`$R=\sqrt2,\ \alpha=\frac\pi4$`, [S`$R=2,\ \alpha=\frac\pi4$`, S`$R=\sqrt2,\ \alpha=\frac\pi2$`, S`$R=1,\ \alpha=\frac\pi4$`], "R = √(1 + 1).", planeDoc(TG([[(x) => Math.sin(x) + Math.cos(x), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("La courbe violette est y = cos x cos 1 − sin x sin 1. De quel rapport unique s'agit-il?", S`$\cos(x+1)$`, [S`$\cos(x-1)$`, S`$\sin(x+1)$`, S`$\cos x$`], "cos(a + b).", planeDoc(TG([[(x) => Math.cos(x + 1), "violet"]], { xmin: -6.5, xmax: 6.5, ymin: -2, ymax: 2 }))),
  mc("Les côtés terminaux de a et de b passent respectivement par (3, 4) et (−4, 3). Que vaut cos(a − b)?", "0", ["1", S`$\frac{24}{25}$`, S`$-\frac{7}{25}$`], "(3/5)(−4/5) + (4/5)(3/5) = 0 : les côtés sont perpendiculaires.", planeDoc({ ...ARM(3, 4, "a"), points: [{ x: 3, y: 4, label: "a", color: "red" }, { x: -4, y: 3, label: "b", color: "blue" }] })),
  mc("Le côté terminal passe par (−7, 24). Que vaut sin(θ + π/2)?", S`$-\frac7{25}$`, [S`$\frac7{25}$`, S`$\frac{24}{25}$`, S`$-\frac{24}{25}$`], "sin(θ + π/2) = cos θ.", planeDoc(ARM(-7, 24, "(−7, 24)"))),
  mc(S`Simplifie $\sin(x+y)\cos y-\cos(x+y)\sin y$.`, S`$\sin x$`, [S`$\cos x$`, S`$\sin(x+2y)$`, S`$\sin y$`], "sin((x + y) − y)."),
  mc(S`Simplifie $\cos(x-y)\cos y-\sin(x-y)\sin y$.`, S`$\cos x$`, [S`$\sin x$`, S`$\cos(x-2y)$`, S`$\cos y$`], "cos((x − y) + y)."),
  mc(S`Laquelle est égale à $\dfrac{\sin(x+y)}{\cos x\cos y}$?`, S`$\tan x+\tan y$`, [S`$\tan(x+y)$`, S`$\tan x\tan y$`, "1"], "Divise chaque terme."),
  mc(S`Laquelle est égale à $\cos(x+y)\cos(x-y)$?`, S`$\cos^2x-\sin^2y$`, [S`$\cos^2x+\sin^2y$`, S`$\cos2x$`, S`$\sin^2x-\cos^2y$`], "Différence de carrés, puis identité de Pythagore."),
  tf(S`$\sin(x+y)\sin(x-y)=\sin^2x-\sin^2y$ pour toutes les valeurs de $x$ et de $y$.`, true, "Différence de carrés, puis identité de Pythagore."),
  tf(S`Si $a+b=\frac\pi2$, alors $\sin a\cos b+\cos a\sin b=1$.`, true, "C'est sin(a + b)."),
  num(S`Dans un triangle, $\tan A=1$ et $\tan B=2$. Trouve $\tan C$.`, 3, "C = π − (A + B), donc tan C = −tan(A + B) = −(3/(1 − 2))."),
];
