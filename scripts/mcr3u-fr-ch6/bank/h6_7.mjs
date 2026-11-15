// 6.7 Résoudre des problèmes à l'aide de modèles sinusoïdaux — 20 questions difficiles (miroir de ../../mcr3u-ch6/bank/h6_7.mjs)
import { FIG } from "./fig.mjs";
import { mc, num, tf } from "./kit.mjs";
import { waveD, sin, cos, acos, rd } from "./fig.mjs";
import { TITLE } from "../l6_7.mjs";

const S = String.raw;
const days14 = (120 * 365) / 360;
const L = (t) => 4 * sin((360 / 365) * (t - 80)) + 12;
const below4 = (360 - 2 * acos(-0.4)) / 30;
const L18 = (t) => 3.2 * sin((360 / 365) * (t - 80)) + 12.1;

export const TOPIC = TITLE;
export const Q = [
  num(S`Une roue : rayon 14 m, moyeu à 16 m, 72 s par tour, embarquement en bas : \(h=-14\cos(5t)+16\). Pendant combien de temps, à chaque tour, une personne est-elle au-dessus de 23 m (s)?`, 24, "cos(5t) ≤ −0.5 : 5t de 120° à 240°.", FIG.w1416),
  num(S`Une roue : rayon 14 m, moyeu à 16 m, 72 s par tour, embarquement en bas : \(h=-14\cos(5t)+16\). Pendant combien de temps, à chaque tour, une personne est-elle au-dessous de 9 m (s)?`, 24, "cos(5t) > 0.5 : un intervalle de 120° autour de 0°.", FIG.w1416),
  num(S`Pour la marée \(D=3\cos(30(t-4))+5\), pendant combien d'heures par cycle la profondeur est-elle d'au moins 6.5 m?`, 4, "cos ≥ 0.5 : un intervalle de 120°; 120 ÷ 30."),
  num(S`Pour la marée \(D=3\cos(30(t-4))+5\), à quel moment après t = 4 la profondeur descend-elle à 3.5 m pour la première fois?`, 8, "cos = −0.5 : 30(t − 4) = 120°."),
  num(S`Durée du jour \(L=3\cos\left(\frac{360}{365}(t-172)\right)+12.5\). Pendant combien de jours par année y a-t-il au moins 14 h d'ensoleillement (2 décimales)?`, rd(days14), "cos ≥ 0.5 : un intervalle de 120°; 120 × 365/360.", null, 0.01),
  num(S`Un ressort : \(h=-4\cos(240t)+10\) (cm, s). Quand est-il à 12 cm de haut pour la première fois (2 décimales)?`, 0.5, "cos(240t) = −0.5 : 240t = 120°.", null, 0.001),
  num(S`Le déplacement d'un pendule est \(x=12\sin(200t)\) (cm, s). Quand est-il pour la première fois à 6 cm du centre (2 décimales)?`, 0.15, "sin(200t) = 0.5 : 200t = 30°.", null, 0.001),
  num("Une roue fait un tour en 3 min, avec une hauteur maximale de 40 m et minimale de 2 m, et on embarque en bas (t en secondes). À quelle hauteur est une personne en t = 45 s (m)?", 21, "h = −19 cos(2t) + 21 : 2t = 90°.", FIG.w402),
  num("Une roue fait un tour en 3 min, avec une hauteur maximale de 40 m et minimale de 2 m, et on embarque en bas (t en secondes). À quelle hauteur est une personne en t = 150 s (m)?", 11.5, "h = −19 cos(2t) + 21 : −19 cos 300° + 21.", FIG.w402, 0.001),
  tf("Un modèle où t est en jours et la période est de 365 jours a k ≈ 0.986.", true, "360 ÷ 365."),
  mc("Quel changement rend le graphique d'un modèle plus haut sans changer sa période?", "augmenter |a|", ["augmenter k", "augmenter c", "diminuer k"], "a détermine l'amplitude."),
  num(S`Pour \(T=12\cos\left(\frac{360}{365}(t-200)\right)+8\), quel jour (0 ≤ t ≤ 365) est le plus froid (1 décimale)?`, 17.5, "Une demi-année (182.5 jours) avant le jour 200.", null, 0.05),
  num(S`Pour \(T=12\cos\left(\frac{360}{365}(t-200)\right)+8\), quelle est la température la plus froide (°C)?`, -4, "8 − 12."),
  num(S`Pour \(L=4\sin\left(\frac{360}{365}(t-80)\right)+12\), combien d'heures d'ensoleillement de plus le jour 100 compte-t-il par rapport au jour 80 (2 décimales)?`, rd(L(100) - L(80)), "L(80) = 12; L(100) = 4 sin(19.73°) + 12.", null, 0.01),
  num(S`Un bateau a besoin de 4 m d'eau. Avec \(D=2.5\cos(30t)+5\), pendant combien d'heures par cycle l'eau est-elle trop peu profonde (2 décimales)?`, rd(below4), "cos(30t) < −0.4.", null, 0.01),
  num("Pendant combien de temps, à chaque tour, la personne est-elle au-dessus du niveau pointillé (2 décimales)?", rd(120 / 9), "h = −10 cos(9t) + 12 ≥ 17 : 9t de 120° à 240°.", waveD((t) => -10 * cos(9 * t) + 12, { xmin: 0, xmax: 80, ymin: 0, ymax: 24 }, { x: 5, y: 2 }, { xlabel: "t (s)", ylabel: "h (m)", lines: [{ m: 0, b: 17, color: "amber", dash: true }] }), 0.01),
  num("La marée est D = 3 cos(30(t − 2)) + 6. Quand descend-elle à 4.5 m pour la première fois après t = 2 (h)?", 6, "cos = −0.5 : 30(t − 2) = 120°.", waveD((t) => 3 * cos(30 * (t - 2)) + 6, { xmin: 0, xmax: 24, ymin: 0, ymax: 10 }, { x: 2, y: 1 }, { xlabel: "t (h)", ylabel: "D (m)", lines: [{ m: 0, b: 4.5, color: "amber", dash: true }] })),
  num("Le modèle est L = 3.2 sin((360/365)(t − 80)) + 12.1. Prédis la durée du jour le jour 172 (2 décimales).", rd(L18(172)), "Près du maximum.", waveD(L18, { xmin: 0, xmax: 365, ymin: 6, ymax: 18 }, { x: 30, y: 2 }, { xlabel: "jour", ylabel: "heures", pts: [[172, L18(172), "jour 172"]] }), 0.01),
  num("La hauteur du ressort est h = −5 cos(180t) + 15. Quand est-il à 17.5 cm de haut pour la première fois (2 décimales)?", rd(120 / 180), "cos(180t) = −0.5 : 180t = 120°.", waveD((t) => -5 * cos(180 * t) + 15, { xmin: 0, xmax: 4, ymin: 0, ymax: 22 }, { x: 0.5, y: 2 }, { xlabel: "t (s)", ylabel: "h (cm)", lines: [{ m: 0, b: 17.5, color: "amber", dash: true }] }), 0.01),
  num("Une grande roue fait un tour en 90 s. Si sa vitesse double, quelle est la nouvelle période (s)?", 45, "Deux fois plus vite : la moitié du temps."),
];
