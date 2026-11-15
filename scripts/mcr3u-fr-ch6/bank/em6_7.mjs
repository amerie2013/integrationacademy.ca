// 6.7 Résoudre des problèmes à l'aide de modèles sinusoïdaux — 20 questions faciles + 20 moyennes
// (miroir de ../../mcr3u-ch6/bank/em6_7.mjs; notation française y = a cos(k(t − c)) + d)
import { FIG } from "./fig.mjs";
import { mc, ms, num, tf } from "./kit.mjs";
import { waveD, sin, cos, rd } from "./fig.mjs";

const S = String.raw;
const k3 = 360 / 12.4, tide = (t) => 2.8 * cos(k3 * (t - 2)) + 4;
const day = (t) => 3.5 * cos((360 / 365) * (t - 172)) + 12;

export const E = [
  num(S`Quel est le maximum de \(y=4\sin(15t)+10\)?`, 14, "10 + 4."),
  num(S`Quelle est la période de \(y=4\sin(15t)+10\)?`, 24, "360 ÷ 15."),
  num(S`Évalue \(y=4\sin(15t)+10\) en \(t=6\).`, 14, "4 sin 90° + 10."),
  num(S`Évalue \(h=-8\cos(9t)+10\) en \(t=0\).`, 2, "−8 + 10."),
  num("Un modèle a une période de 45 s. Que vaut k?", 8, "360 ÷ 45."),
  num("Un modèle a une période de 365 jours. Que vaut k (4 décimales)?", rd(360 / 365, 4), "360 ÷ 365.", null, 0.0001),
  mc("On embarque au bas d'une grande roue. Quelle forme de modèle convient?", S`\(h=-r\cos(kt)+d\)`, [S`\(h=r\cos(kt)+d\)`, S`\(h=r\sin(kt)+d\)`, S`\(h=r\cos(kt)\)`], "−cos commence à son minimum."),
  mc("Une marée est à son plus haut en t = 0. Quelle fonction est la plus facile à utiliser?", "un cosinus avec a > 0", ["un sinus avec a > 0", "un cosinus avec a < 0", "une fonction affine"], "Le cosinus commence à un maximum."),
  num(S`Évalue \(h=-10\cos(12t)+12\) en \(t=15\).`, 22, "−10 cos 180° + 12."),
  num(S`Évalue \(h=-10\cos(12t)+12\) en \(t=7.5\).`, 12, "−10 cos 90° + 12."),
  num("Le moyeu d'une roue est à 25 m de haut. Que vaut d dans son modèle de hauteur?", 25, "d est la hauteur du moyeu."),
  tf("Relever toute une grande roue change d dans son modèle.", true, "L'axe monte."),
  tf("Faire tourner une grande roue plus vite change a dans son modèle.", false, "La vitesse change k; a est le rayon."),
  num("Une roue a un rayon de 16 m. Que vaut |a| dans son modèle de hauteur?", 16, "Le rayon."),
  num("Une roue fait un tour en 75 s. Combien de tours fait-elle en 10 min?", 8, "600 ÷ 75."),
  num(S`Quelle est la profondeur minimale pour \(D=2\cos(30t)+5\)?`, 3, "5 − 2."),
  num(S`Quand se produit le premier minimum de \(D=2\cos(30t)+5\) (t en heures)?`, 6, "30t = 180°."),
  mc("Quel paramètre change lorsque le rayon d'une roue change?", "a", ["k", "c", "seulement d"], "Amplitude = rayon."),
  num("Lis la hauteur en t = 18 s.", 14, "h = −6 cos(10t) + 8 en t = 18 : −6 cos 180° + 8.", waveD((t) => -6 * cos(10 * t) + 8, { xmin: 0, xmax: 72, ymin: 0, ymax: 16 }, { x: 6, y: 2 }, { xlabel: "t (s)", ylabel: "h (m)", pts: [[18, 14, "t = 18"]] })),
  num("Quand se produit la première marée basse (en heures)?", 6, "D = 2.5 cos(30t) + 4 : 30t = 180°.", waveD((t) => 2.5 * cos(30 * t) + 4, { xmin: 0, xmax: 24, ymin: 0, ymax: 8 }, { x: 2, y: 1 }, { xlabel: "t (h)", ylabel: "D (m)" })),
];

export const M = [
  num("Une roue a un rayon de 15 m, un moyeu à 17 m et fait un tour toutes les 60 s; on embarque au bas de la roue. Trouve la hauteur en t = 10 s (m).", 9.5, "−15 cos 60° + 17.", FIG.w1517, 0.001),
  num("Une roue a un rayon de 15 m, un moyeu à 17 m et fait un tour toutes les 60 s; on embarque au bas de la roue. Trouve la hauteur en t = 20 s (m).", 24.5, "−15 cos 120° + 17.", FIG.w1517, 0.001),
  num("La marée haute est de 6.8 m à 2 h 00 et la marée basse suivante est de 1.2 m à 8 h 12. Quelle est l'amplitude (m)?", 2.8, "(6.8 − 1.2)/2.", FIG.tide68, 0.001),
  num("La marée haute est de 6.8 m à 2 h 00 et la marée basse suivante est de 1.2 m à 8 h 12. Dans un modèle de la profondeur, que vaut d (m)?", 4, "(6.8 + 1.2)/2.", FIG.tide68),
  num("La marée haute est de 6.8 m à 2 h 00 et la marée basse suivante est de 1.2 m à 8 h 12. Dans un modèle de la profondeur, que vaut k (2 décimales)?", rd(k3), "Demi-période de 6.2 h, donc période de 12.4 h.", FIG.tide68, 0.01),
  num(S`La profondeur de la marée est \(D=2.8\cos(${rd(k3)}(t-2))+4\). Trouve la profondeur à 5 h 06 (t = 5.1), à 2 décimales près.`, rd(tide(5.1)), "Un quart de période après la marée haute : environ le niveau moyen.", null, 0.02),
  num(S`La durée du jour est modélisée par \(L=3.5\cos\left(\frac{360}{365}(t-172)\right)+12\). Combien d'heures le jour 172 compte-t-il?`, 15.5, "Le maximum.", null, 0.001),
  num(S`La durée du jour est modélisée par \(L=3.5\cos\left(\frac{360}{365}(t-172)\right)+12\). Combien d'heures d'ensoleillement le jour 263 compte-t-il (2 décimales)?`, rd(day(263)), "91 jours après le max : près de l'axe.", null, 0.01),
  mc("On fait tourner une grande roue deux fois plus vite. Qu'arrive-t-il à k?", "il double", ["il est divisé par deux", "il reste le même", "il devient négatif"], "La période est divisée par deux, donc k = 360/période double."),
  mc("On relève de 1 m la plateforme d'embarquement et le moyeu. Que se passe-t-il dans le modèle?", "d augmente de 1", ["a augmente de 1", "k augmente de 1", "c augmente de 1"], "Une translation verticale."),
  tf("Si la période d'une marée augmente, k diminue.", true, "k = 360 ÷ période."),
  num(S`Évalue \(h=5\cos(180t)+12\) en \(t=0.5\).`, 12, "5 cos 90° + 12."),
  num(S`Évalue \(h=5\cos(180t)+12\) en \(t=1\).`, 7, "5 cos 180° + 12."),
  num(S`Pour \(T=10\cos(15(t-15))+18\) (t en heures), à quel moment la température est-elle la plus élevée?`, 15, "Le cosinus vaut 1 lorsque t = 15."),
  num(S`Pour \(T=10\cos(15(t-15))+18\), quelle est la température la plus basse?`, 8, "18 − 10."),
  num(S`Pour \(T=10\cos(15(t-15))+18\), à quel moment (0 ≤ t < 24) la température est-elle la plus basse?`, 3, "Une demi-période (12 h) avant 15."),
  ms(S`Lesquels sont vrais pour \(D=3\cos(30(t-2))+7\)? Choisis toutes les bonnes réponses.`, ["marée haute en t = 2", "marée basse en t = 8", "période de 12 h", "profondeur maximale de 7", "marée haute de nouveau en t = 14"], [0, 1, 2, 4], "Le maximum est 10; 7 est le niveau moyen."),
  num(S`Pendant combien de temps, à chaque tour, \(h=-10\cos(6t)+12\) est-elle au-dessus de 12 m (s)?`, 30, "La moitié de la période de 60 s."),
  num("Trouve la hauteur en t = 16 s.", 15.5, "h = −9 cos(7.5t) + 11 en t = 16 : −9 cos 120° + 11.", waveD((t) => -9 * cos(7.5 * t) + 11, { xmin: 0, xmax: 96, ymin: 0, ymax: 22 }, { x: 8, y: 2 }, { xlabel: "t (s)", ylabel: "h (m)", pts: [[16, 15.5, "t = 16"]] }), 0.001),
  num("Lis la durée maximale du jour (en heures).", 15, "Axe 12, amplitude 3.", waveD((t) => 3 * cos((360 / 365) * (t - 172)) + 12, { xmin: 0, xmax: 365, ymin: 6, ymax: 18 }, { x: 30, y: 2 }, { xlabel: "jour", ylabel: "heures" })),
];
