import { FIG } from "../../mhf4u-bank-figures/figs.mjs";
// 4.1 Mesure en radians — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
import { UC, SECTOR } from "../trigfig.mjs";
const S = String.raw;

export const TOPIC = "4.1 Mesure en radians";
export const Q = [
  num(S`La grande aiguille d'une horloge mesure 18 cm. Quelle distance, en cm, sa pointe parcourt-elle en 20 minutes (au centième près)?`, 37.7, "θ = 2π/3; s = 12π.", null, 0.01),
  num(S`La petite aiguille d'une horloge mesure 9 cm. Quelle distance, en cm, sa pointe parcourt-elle en 4 heures (au centième près)?`, 18.85, "θ = 2π/3; s = 6π.", null, 0.01),
  num(S`Trouve l'angle entre les aiguilles d'une horloge à 4 h 00, en radians (au centième près).`, 2.09, "2π/3.", null, 0.01),
  num(S`Trouve l'angle entre les aiguilles d'une horloge à 2 h 30, en radians (au centième près).`, 1.83, "Les aiguilles sont séparées de 105°.", null, 0.01),
  num(S`Une courroie relie deux poulies de rayons 4 cm et 10 cm. La grande poulie tourne de 2 rad. De combien de radians la petite poulie tourne-t-elle?`, 5, "Arcs égaux : 20 = 4θ."),
  num(S`Une courroie relie deux poulies de rayons 3 cm et 12 cm. La petite poulie fait 8 tours. Combien de tours la grande fait-elle?`, 2, "Le nombre de tours est inversement proportionnel au rayon."),
  num(S`Un secteur a un périmètre de 24 cm et un rayon de 8 cm. Trouve son aire en cm².`, 32, "Arc de 8, θ = 1; A = ½(64)(1).", FIG.sP),
  num(S`Un secteur a une aire de $24\pi$ et un angle de $\frac{3\pi}4$. Trouve son rayon (au centième près).`, 8, "½r²(3π/4) = 24π donne r² = 64.", FIG.sA),
  num(S`Le pneu d'une voiture a un rayon de 0.3 m et tourne à 40 rad/s. Trouve la vitesse de la voiture en km/h (au dixième près).`, 43.2, "12 m/s × 3.6.", null, 0.1),
  num(S`Une voiture roule à 90 km/h sur des pneus de rayon 0.35 m. Trouve la vitesse angulaire en rad/s (au dixième près).`, 71.4, "25 m/s ÷ 0.35.", null, 0.1),
  num(S`Un satellite décrit une orbite de rayon 8000 km et fait un tour complet en 2 h. Trouve sa vitesse en km/h, à l'unité près.`, 25133, "2π(8000)/2.", null, 1),
  num(S`Deux villes situées sur le même méridien sont séparées par un angle au centre de $0.35$ rad, sur une sphère de rayon 6400 km. Trouve la distance qui les sépare, en km, le long de la surface.`, 2240, "s = rθ.", FIG.earth),
  mc(S`Un pendule de 60 cm de longueur décrit un arc de 25 cm. Quel est l'angle d'oscillation?`, S`environ $23.9^\circ$`, [S`environ $41.7^\circ$`, S`environ $0.42^\circ$`, S`environ $12^\circ$`], "25/60 rad × 180/π.", FIG.pend),
  mc("Le secteur ombré a un angle de 2π/3 et une aire de 12π. Quel est son rayon?", "6", ["4", "12", "18"], "½r²(2π/3) = 12π donne r² = 36.", planeDoc(SECTOR(6, (2 * Math.PI) / 3))),
  mc("Un point part de (1, 0) et se déplace dans le sens contraire des aiguilles d'une montre sur le cercle trigonométrique, le long d'un arc de longueur 7π/6. Où se trouve-t-il?", "au point indiqué", ["en (0, 1)", "en (−1, 0)", "en (1, 0)"], "Sur un cercle trigonométrique, la longueur d'arc est égale à l'angle : 210°.", planeDoc(UC(210, "?"))),
  mc("Le point indiqué correspond à l'angle θ. Lequel de ces angles a le même côté terminal que θ?", S`$\frac{17\pi}6$`, [S`$\frac{7\pi}6$`, S`$\frac{11\pi}6$`, S`$\frac{5\pi}3$`], "θ = 5π/6; ajoute 2π.", planeDoc(UC(150, "θ"))),
  mc("Sur ce cercle trigonométrique, quelle est la longueur d'arc de (1, 0) au point indiqué, dans le sens contraire des aiguilles d'une montre?", S`$\frac{5\pi}4$`, [S`$\frac\pi4$`, S`$\frac{3\pi}4$`, S`$\frac{7\pi}4$`], "225° en radians.", planeDoc(UC(225, "P"))),
  mc("Quel secteur a la même aire qu'un secteur de rayon 4 et d'angle 2?", S`rayon 8, angle $\frac12$`, ["rayon 8, angle 1", "rayon 2, angle 4", "rayon 2, angle 2"], "A = 16 dans les deux cas.", planeDoc(SECTOR(4, 2))),
  tf(S`Les angles $\frac{\pi}{3}$ et $-\frac{5\pi}{3}$ ont le même côté terminal.`, true, "Ils diffèrent de 2π."),
  tf(S`À vitesse angulaire donnée, un point deux fois plus éloigné du centre se déplace deux fois plus vite.`, true, "v = rω."),
];
