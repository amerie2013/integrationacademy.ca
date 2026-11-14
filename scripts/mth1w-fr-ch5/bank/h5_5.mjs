import { FIG } from "../../mth1w-bank-figures/figs.mjs";
// 5.5 Modifier les dimensions : le périmètre — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc } from "./fig.mjs";

const arc = (cx, cy, r, a0, a1, n = 24) => Array.from({ length: n + 1 }, (_, i) => { const t = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });

export const TOPIC = "5.5 Modifier les dimensions : le périmètre";
export const Q = [
  num(`Un enclos rectangulaire de 200 m² est divisé en deux enclos égaux par une clôture parallèle à la largeur. Trouve la longueur totale minimale de clôture (au dixième de mètre près).`, 69.3, "3w + 2l avec lw = 200 : optimal quand 3w = 2l → w ≈ 11.55, l ≈ 17.32; clôture ≈ 69.3.", null, 0.06),
  num(`Le périmètre d'un rectangle est de 60 cm. On diminue sa longueur de 20 % et on augmente sa largeur de 20 %. Le rectangle initial mesurait 20 sur 10. Trouve le nouveau périmètre.`, 56, "16 sur 12."),
  num(`Trouve le périmètre de la figure : un carré de côté 8 dans lequel on a découpé un demi-cercle sur un côté (l'arc remplace ce côté), à 1 décimale près.`, 36.6, "3 × 8 + 4π ≈ 36.57.", figDoc({ w: 220, items: [{ poly: [[0, 0], [8, 0], [8, 8], ...arc(4, 8, 4, 0, -180).slice(1, -1), [0, 8]], fill: "blue", color: "blue" }, { text: "8", at: [4, -0.9], bold: true, color: "blue" }] }), 0.06),
  num(`Un cercle et un carré ont le même périmètre, 40 cm. De combien l'aire du cercle dépasse-t-elle celle du carré (au cm² près) ?`, 27, "Carré 100; cercle r = 20/π : aire 400/π ≈ 127.3.", null, 0.6),
  num(`L'échelle d'une carte est 1 : 25 000. La rive d'un lac mesure 36 cm sur la carte. Trouve la longueur réelle de la rive en km.`, 9, "36 × 25 000 = 900 000 cm = 9 km."),
  num(`Un agriculteur a besoin d'un champ rectangulaire de 1200 m² le long d'une rivière (pas de clôture du côté de la rivière). La clôture coûte 12 dollars/m. Trouve le coût minimal.`, 1176, "w = √600 ≈ 24.49, l ≈ 48.99; clôture ≈ 97.98 m × 12 ≈ 1175.8.", null, 1),
  num(`Le périmètre d'un rectangle est de 46 et sa diagonale mesure 17. Trouve son aire.`, 120, "l + w = 23 et l² + w² = 289 → 8 et 15."),
  num(`Une fenêtre normande est un rectangle de 1.2 m de largeur et de 1.5 m de hauteur surmonté d'un demi-cercle. Trouve la longueur de moulure qui en fait le tour (2 décimales).`, 6.08, "1.2 + 2(1.5) + 0.6π ≈ 6.085.", FIG.norman, 0.006),
  tf(`Si l'aire d'un rectangle est multipliée par 9 par un agrandissement, son périmètre est multiplié par 3.`, true, "k² = 9 → k = 3."),
  num(`Le périmètre d'un carré augmente de 20 cm quand on allonge chaque côté de la même longueur. De combien chaque côté a-t-il été allongé ?`, 5, "4x = 20."),
  ms(`Un rectangle a une aire de 36 m². Quels périmètres sont possibles avec des côtés entiers ? Sélectionne toutes les bonnes réponses.`, ["24", "26", "30", "40"], [0, 1, 2, 3], "6×6 : 24; 4×9 : 26; 3×12 : 30; 2×18 : 40."),
  num(`Un triangle équilatéral et un carré ont le même périmètre. Le côté du triangle mesure 12. Trouve le côté du carré.`, 9, "36 ÷ 4."),
  num(`Un rectangle est deux fois plus long que large. Les deux dimensions augmentent de 5 cm et le périmètre devient 70 cm. Trouve la largeur initiale.`, 25 / 3, "2(2w + 5 + w + 5) = 70 → 6w + 20 = 70 → w = 8.33.", null, 0.006),
  num(`Quel est le rayon d'un jardin circulaire dont la bordure (circonférence) est égale au périmètre d'un rectangle de 15 m sur 10 m (2 décimales) ?`, 7.96, "50 = 2πr → r ≈ 7.958.", null, 0.006),
  mc(`Une corde de 30 m entoure une région. Quelle forme donne la plus grande aire ?`, "un cercle", ["un carré", "un triangle équilatéral", "un rectangle de 10 × 5"], "Pour un périmètre fixe, le cercle entoure la plus grande aire."),
  num(`Un cadre de largeur uniforme x entoure une photo de 24 cm sur 18 cm. Son périmètre extérieur est de 108 cm. Trouve x.`, 3, "2(24 + 2x + 18 + 2x) = 108 → 84 + 8x = 108.", FIG.frame),
  num(`Trois cercles identiques de rayon 2 sont placés en ligne dans un rectangle qui les contient tout juste. Trouve le périmètre du rectangle.`, 32, "12 sur 4.", FIG.threeCircles),
  num(`Un terrain rectangulaire a un périmètre de 140 m. Sa longueur dépasse sa largeur de 10 m. Trouve son aire (m²).`, 1200, "4w + 20 = 140 → w = 30, l = 40."),
  num(`On modifie un rectangle de périmètre 36 pour que sa longueur double et que sa largeur soit divisée par deux. Le rectangle initial mesurait 12 sur 6. De combien le périmètre change-t-il ?`, 18, "24 sur 3 : 54 − 36."),
  num(`Un sentier fait le tour d'un étang circulaire de 20 m de rayon, à une distance constante de 3 m du bord. De combien le sentier est-il plus long que la rive (2 décimales) ?`, 18.85, "2π(23) − 2π(20) = 6π.", FIG.pond, 0.006),
];
