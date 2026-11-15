import { FIG } from "./figs.mjs";
// 5.2 Angles de 0° à 360° — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { armD, unitD, cos, acos, atan, rd } from "./fig.mjs";

const S = String.raw;

export const TOPIC = "5.2 Angles de 0° à 360°";
export const Q = [
  mc(S`Résous $2\sin^2\theta=1$ pour $0^\circ\le\theta\le360^\circ$.`, "45°, 135°, 225°, 315°", ["45°, 135°", "45°, 315°", "30°, 150°, 210°, 330°"], "sin θ = ±1/√2 : angle de référence 45° dans les quatre quadrants."),
  num(S`Combien de solutions l'équation $4\cos^2\theta=1$ a-t-elle pour $0^\circ\le\theta\le360^\circ$?`, 4, "cos θ = ±½ : 60°, 120°, 240°, 300°."),
  mc(S`Résous $2\sin^2\theta-\sin\theta-1=0$ pour $0^\circ\le\theta\le360^\circ$.`, "90°, 210°, 330°", ["90°, 150°, 210°", "30°, 150°, 270°", "30°, 90°, 150°"], "(2 sin θ + 1)(sin θ − 1) = 0."),
  num(S`$\tan\theta=3$ et $\sin\theta<0$. Trouve $\cos\theta$ (4 décimales).`, rd(-1 / Math.sqrt(10), 4), "Quadrant 3, point (−1, −3), r = √10.", null, 0.0001),
  num(S`$\sin\theta=-0.6$ et $\tan\theta>0$. Trouve $\cos\theta$.`, -0.8, "Quadrant 3 : x = −0.8 sur le cercle unité."),
  num("Le point (a, 2a), avec a < 0, est sur le côté terminal de θ. Trouve θ, au dixième près.", rd(180 + atan(2), 1), "Quadrant 3; angle de référence tan⁻¹ 2.", null, 0.05),
  num(S`Évalue $\sin135^\circ\cos315^\circ+\sin225^\circ\cos45^\circ$.`, 0, "½ − ½."),
  num(S`Trouve θ entre 0° et 360° tel que $\cos\theta=-\frac12$ et $\sin\theta<0$.`, 240, "Quadrant 3, angle de référence 60°."),
  num("Une grande roue de 12 m de rayon est centrée à l'origine. Un passager est à 210° en position standard. Trouve l'ordonnée du passager.", -6, "12 sin 210° = 12(−½).", FIG.ferris210),
  num("Une grande roue de 12 m de rayon est centrée à l'origine. Un passager est à 210° en position standard. Trouve l'abscisse du passager, au centième près.", rd(12 * cos(210)), "12 cos 210° = −6√3.", FIG.ferris210, 0.01),
  tf("Si 0° < θ < 180°, 0° < β < 180°, θ ≠ β et sin θ = sin β, alors θ + β = 180°.", true, "Les deux angles sont β et 180° − β."),
  num(S`Résous $\sin\theta=\cos\theta$ pour $0^\circ\le\theta\le360^\circ$. Entre la plus grande solution.`, 225, "tan θ = 1 : 45° et 225°."),
  ms("Quels angles ont un angle de référence de 35° et un cosinus négatif? Choisis toutes les bonnes réponses.", ["145°", "215°", "325°", "35°", "235°"], [0, 1], "Quadrants 2 et 3 : 180° ± 35°."),
  num(S`$\cos\theta=-0.25$ et θ est dans le quadrant 3. Trouve θ, au dixième près.`, rd(360 - acos(-0.25), 1), "360° − cos⁻¹(−0.25).", null, 0.05),
  num(S`$\tan\theta=-0.4$ et θ est dans le quadrant 2. Trouve θ, au dixième près.`, rd(180 - atan(0.4), 1), "180° − tan⁻¹ 0.4.", null, 0.05),
  num("Trouve sin θ + cos θ pour l'angle illustré (4 décimales).", rd(-23 / 17, 4), "r = 17 : (−15 − 8)/17.", armD(-8, -15, "(−8, −15)"), 0.0001),
  num(S`Les quatre côtés terminaux illustrés vérifient une même équation $\sin^2\theta=k$. Trouve $k$.`, 0.75, "sin 60° = √3/2, au carré.", unitD([[60, "60°"], [120, "120°"], [240, "240°"], [300, "300°"]])),
  num("Trouve θ pour le côté terminal illustré.", 135, "Angle de référence 45°, quadrant 2.", armD(-2, 2, "(−2, 2)")),
  num(S`Les côtés terminaux montrent les deux solutions de $\cos\theta=c$ : 70° et 290°. Trouve $c$ (4 décimales).`, rd(cos(70), 4), "c = cos 70°.", unitD([[70, "70°"], [290, "290°"]], { vlines: [{ x: cos(70), color: "amber", dash: true }] }), 0.0001),
  num(S`Combien de solutions l'équation $\tan\theta=5$ a-t-elle pour $0^\circ\le\theta\le720^\circ$?`, 4, "Deux par tour complet."),
];
