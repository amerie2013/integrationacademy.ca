// 4.2 Rapports trigonométriques et angles remarquables — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { UC, ARM } from "../trigfig.mjs";
const S = String.raw;

export const TOPIC = "4.2 Rapports trigonométriques et angles remarquables";
export const Q = [
  num(S`Évalue $\sec^2\frac{5\pi}6-\tan^2\frac{5\pi}6$.`, 1, "4/3 − 1/3."),
  num(S`Évalue $\csc^2\frac{3\pi}4+\cot\frac{5\pi}4$.`, 3, "2 + 1."),
  num(S`Évalue $\sin\frac{4\pi}3\cos\frac{5\pi}6+\cos\frac{4\pi}3\sin\frac{5\pi}6$ (au centième près).`, 0.5, "(−√3/2)(−√3/2) + (−1/2)(1/2) = 3/4 − 1/4.", null, 0.001),
  num(S`Évalue $\frac{\tan\frac{7\pi}4}{\sec\frac{2\pi}3}$.`, 0.5, "(−1)/(−2).", null, 0.001),
  mc(S`$\tan\theta=-\frac{8}{15}$ et $\sin\theta>0$. Que vaut $\sec\theta$?`, S`$-\frac{17}{15}$`, [S`$\frac{17}{15}$`, S`$-\frac{17}8$`, S`$\frac{15}{17}$`], "Quadrant 2 : x = −15, y = 8, r = 17."),
  mc(S`$\csc\theta=-\frac{25}{7}$ et $\cos\theta>0$. Que vaut $\cot\theta$?`, S`$-\frac{24}7$`, [S`$\frac{24}7$`, S`$-\frac7{24}$`, S`$\frac{24}{25}$`], "Quadrant 4 : y = −7, r = 25, x = 24."),
  mc(S`$\sec\theta=\sqrt5$ et $\sin\theta\lt0$. Que vaut $\tan\theta$?`, "−2", ["2", S`$-\frac12$`, S`$\frac12$`], "Quadrant 4 : x = 1, r = √5, y = −2."),
  mc(S`Trouve toutes les valeurs de $\theta$ dans $[0,2\pi)$ telles que $2\sin\theta+\sqrt3=0$.`, S`$\frac{4\pi}3,\ \frac{5\pi}3$`, [S`$\frac\pi3,\ \frac{2\pi}3$`, S`$\frac{7\pi}6,\ \frac{11\pi}6$`, S`$\frac{5\pi}6,\ \frac{7\pi}6$`], "sin θ = −√3/2."),
  mc(S`Trouve toutes les valeurs de $\theta$ dans $[0,2\pi)$ telles que $\sec\theta=2$.`, S`$\frac\pi3,\ \frac{5\pi}3$`, [S`$\frac\pi6,\ \frac{11\pi}6$`, S`$\frac{2\pi}3,\ \frac{4\pi}3$`, S`$\frac\pi3$`], "cos θ = 1/2."),
  mc(S`Trouve toutes les valeurs de $\theta$ dans $[0,2\pi)$ telles que $\cot\theta=\sqrt3$.`, S`$\frac\pi6,\ \frac{7\pi}6$`, [S`$\frac\pi3,\ \frac{4\pi}3$`, S`$\frac\pi6,\ \frac{5\pi}6$`, S`$\frac{5\pi}6,\ \frac{11\pi}6$`], "tan θ = √3/3."),
  num(S`Combien de valeurs de $\theta$ dans $[0,4\pi)$ vérifient $\sin\theta=\frac{\sqrt2}2$?`, 4, "Deux par tour."),
  num(S`Que vaut $\tan\frac{37\pi}4$?`, 1, "37π/4 − 8π = 5π/4."),
  num(S`Que vaut $\cos\frac{41\pi}6$, à 4 décimales?`, -0.866, "41π/6 − 6π = 5π/6.", null, 0.001),
  mc("Le côté terminal passe par le point indiqué. Trouve csc θ + cot θ.", "−2", [S`$-\frac12$`, S`$\frac12$`, "2"], "r = 5 : csc θ = −5/4 et cot θ = −3/4.", planeDoc(ARM(3, -4, "(3, −4)"))),
  mc("Le point indiqué a une ordonnée de −1/2 sur le cercle trigonométrique, dans le quadrant 3. Que vaut tan θ?", S`$\frac{\sqrt3}3$`, [S`$-\frac{\sqrt3}3$`, S`$\sqrt3$`, "1"], "θ = 7π/6.", planeDoc(UC(210, "θ"))),
  mc("Deux points du cercle trigonométrique sont indiqués. Quelle est la somme de leurs angles dans [0, 2π)?", S`$2\pi$`, [S`$\pi$`, S`$\frac{3\pi}2$`, S`$3\pi$`], "π/3 et 5π/3.", planeDoc(UC(60, "A", [{ x: 0.5, y: -Math.sqrt(3) / 2, label: "B", color: "blue" }]))),
  mc("Une roue de rayon 2 m a un point indiqué sur sa jante, à un angle de π/6 au-dessus du niveau du centre. À quelle hauteur au-dessus du centre se trouve-t-il?", "1 m", ["2 m", S`$\sqrt3$ m`, "0.5 m"], "2 sin(π/6).", planeDoc({ ...ARM(Math.sqrt(3), 1, "P") })),
  tf(S`Si $\sin\theta=\cos\theta$, alors $\theta$ doit être égal à $\frac\pi4$.`, false, "5π/4 fonctionne aussi."),
  tf(S`Pour tout angle où les deux sont définis, $\sin\theta\csc\theta=1$.`, true, "Le produit de deux réciproques vaut 1."),
  num(S`$\sin\theta=-\frac{\sqrt3}2$ et $\tan\theta\lt0$. Que vaut $\cos\theta$, sous forme décimale?`, 0.5, "Quadrant 4 : cos θ = 1/2.", null, 0.001),
];
