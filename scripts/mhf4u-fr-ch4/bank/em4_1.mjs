// Les figures de secteurs (FIG) ne portent que des nombres, « r = … », « ? » et « arc … » : identiques en français.
import { FIG } from "../../mhf4u-bank-figures/figs.mjs";
// 4.1 Mesure en radians — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { UC, SECTOR } from "../trigfig.mjs";
const S = String.raw;

export const E = [
  mc(S`Combien de radians y a-t-il dans $180^\circ$?`, S`$\pi$`, [S`$2\pi$`, S`$\frac\pi2$`, "180"], "π rad = 180°."),
  mc(S`Combien de radians y a-t-il dans un cercle complet?`, S`$2\pi$`, [S`$\pi$`, S`$360\pi$`, "1"], "Circonférence ÷ rayon."),
  mc(S`Convertis $90^\circ$ en radians.`, S`$\frac\pi2$`, [S`$\pi$`, S`$\frac\pi4$`, S`$2\pi$`], "Le quart de 2π."),
  mc(S`Convertis $60^\circ$ en radians.`, S`$\frac\pi3$`, [S`$\frac\pi6$`, S`$\frac\pi4$`, S`$\frac{2\pi}3$`], "60/180 = 1/3."),
  mc(S`Convertis $45^\circ$ en radians.`, S`$\frac\pi4$`, [S`$\frac\pi6$`, S`$\frac\pi3$`, S`$\frac\pi8$`], "45/180 = 1/4."),
  mc(S`Convertis $270^\circ$ en radians.`, S`$\frac{3\pi}2$`, [S`$\frac{2\pi}3$`, S`$\frac{5\pi}4$`, S`$3\pi$`], "270/180 = 3/2."),
  num(S`Convertis $\frac\pi6$ en degrés.`, 30, "180/6."),
  num(S`Convertis $\frac{2\pi}3$ en degrés.`, 120, "2 × 60."),
  num(S`Convertis $\frac{5\pi}4$ en degrés.`, 225, "5 × 45."),
  num(S`Convertis $\frac{5\pi}3$ en degrés.`, 300, "5 × 60."),
  num(S`Un cercle a un rayon de 3. Trouve la longueur d'arc pour $\theta=2$ rad.`, 6, "s = rθ.", FIG.s32),
  num(S`Un cercle a un rayon de 7. Trouve la longueur d'arc pour $\theta=1$ rad.`, 7, "s = r quand θ = 1.", FIG.s71),
  num(S`Un arc de longueur 12 est situé sur un cercle de rayon 4. Trouve l'angle en radians.`, 3, "θ = s/r.", FIG.a124),
  tf(S`Un radian est le rapport de deux longueurs, donc il n'a pas d'unité.`, true, "Longueur d'arc ÷ rayon."),
  tf(S`Un radian vaut exactement $60^\circ$.`, false, "Un radian vaut environ 57.3°."),
  tf(S`$\sin2$ désigne le sinus de 2 radians.`, true, "Sans symbole de degré, l'angle est en radians."),
  fill("Un radian est l'angle dont l'arc a la même longueur que le ___.", ["rayon", "le rayon", "radius"], "Définition du radian."),
  mc("Quel angle est indiqué sur le cercle trigonométrique?", S`$\frac{3\pi}4$`, [S`$\frac\pi4$`, S`$\frac{5\pi}4$`, S`$\frac{2\pi}3$`], "135° dans le quadrant 2.", planeDoc(UC(135, "θ"))),
  mc("Quel angle ce côté terminal représente-t-il?", S`$\frac{5\pi}3$`, [S`$\frac{4\pi}3$`, S`$\frac{7\pi}6$`, S`$\frac\pi3$`], "300° dans le quadrant 4.", planeDoc(UC(300, "θ"))),
  num(S`Au centième près, combien vaut $\pi$ radians divisé par 2?`, 1.57, "π/2 ≈ 1.57.", null, 0.01),
];

export const M = [
  mc(S`Convertis $330^\circ$ en radians.`, S`$\frac{11\pi}6$`, [S`$\frac{5\pi}3$`, S`$\frac{7\pi}4$`, S`$\frac{13\pi}6$`], "330/180 = 11/6."),
  mc(S`Convertis $135^\circ$ en radians.`, S`$\frac{3\pi}4$`, [S`$\frac{2\pi}3$`, S`$\frac{5\pi}6$`, S`$\frac{3\pi}2$`], "135/180 = 3/4."),
  mc(S`Convertis $-120^\circ$ en radians.`, S`$-\frac{2\pi}3$`, [S`$\frac{2\pi}3$`, S`$-\frac{3\pi}2$`, S`$-\frac\pi3$`], "Garde le signe."),
  num(S`Convertis $40^\circ$ en radians (au centième près).`, 0.7, "40π/180 ≈ 0.70.", null, 0.01),
  num(S`Convertis $200^\circ$ en radians (au centième près).`, 3.49, "200π/180 ≈ 3.49.", null, 0.01),
  num(S`Convertis $1$ rad en degrés (au dixième près).`, 57.3, "180/π.", null, 0.1),
  num(S`Convertis $2.2$ rad en degrés (au dixième près).`, 126.1, "2.2 × 180/π.", null, 0.1),
  num(S`Convertis $\frac{7\pi}9$ en degrés.`, 140, "7 × 20."),
  num(S`Trouve la longueur d'arc pour $r=12$ et $\theta=\frac{5\pi}6$ (au centième près).`, 31.42, "10π.", FIG.s12, 0.01),
  num(S`Trouve la longueur d'arc pour $r=15$ cm et un angle de $72^\circ$ (au centième près).`, 18.85, "72° = 2π/5, donc s = 6π.", FIG.s15, 0.01),
  num(S`Un arc de 9 cm est situé sur un cercle de rayon 6 cm. Trouve l'angle en degrés (au dixième près).`, 85.9, "1.5 rad.", FIG.a96, 0.1),
  num(S`Un arc de longueur $4\pi$ est intercepté par un angle de $\frac{2\pi}3$. Trouve le rayon.`, 6, "r = s/θ.", FIG.a4pi),
  num(S`Trouve l'aire d'un secteur avec $r=6$ et $\theta=\frac\pi3$ (au centième près).`, 18.85, "½(36)(π/3) = 6π.", FIG.s6, 0.01),
  num(S`Trouve l'aire d'un secteur avec $r=10$ et $\theta=1.5$.`, 75, "½(100)(1.5).", FIG.s10),
  num(S`Une roue tourne à 60 tours par minute. Trouve sa vitesse angulaire en rad/s (au centième près).`, 6.28, "2π rad/s.", null, 0.01),
  num(S`Un disque tourne à $4\pi$ rad/s. Combien de tours fait-il par seconde?`, 2, "4π ÷ 2π."),
  num(S`Un point situé à 0.5 m d'un centre tourne à 8 rad/s. Trouve sa vitesse en m/s.`, 4, "v = rω."),
  mc("Le secteur a un rayon de 5. Quel est le périmètre de la région ombrée si θ = 2?", "20", ["10", "15", "25"], "5 + 5 + 10.", planeDoc(SECTOR(5, 2))),
  mc("En une heure, de quel angle tourne la grande aiguille d'une horloge?", S`$2\pi$`, [S`$\pi$`, S`$\frac\pi6$`, S`$60\pi$`], "Un tour complet."),
  tf(S`Doubler le rayon d'un secteur d'angle fixe double son aire.`, false, "A = ½r²θ : l'aire devient 4 fois plus grande.", planeDoc(SECTOR(3, 1.5))),
];
