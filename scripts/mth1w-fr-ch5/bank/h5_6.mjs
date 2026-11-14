import { FIG } from "../../mth1w-bank-figures/figs.mjs";
// 5.6 Modifier les dimensions : l'aire — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, rect } from "./fig.mjs";

const arc = (cx, cy, r, a0, a1, n = 24) => Array.from({ length: n + 1 }, (_, i) => { const t = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });

export const TOPIC = "5.6 Modifier les dimensions : l'aire";
export const Q = [
  num(`Un agriculteur a 300 m de clôture pour faire deux enclos rectangulaires égaux côte à côte (une séparation parallèle à la largeur). Trouve la plus grande aire totale (m²).`, 3750, "3w + 2l = 300; optimal w = 50, l = 75."),
  num(`Avec 120 m de clôture, l'agriculteur construit un enclos rectangulaire contre le mur d'une grange. Trouve la plus grande aire.`, 1800, "w = 30, l = 60."),
  num(`Trouve l'aire ombrée : un carré de 10 sur 10 dont on a retiré un quart de cercle de rayon 10 (2 décimales).`, 21.46, "100 − 25π ≈ 21.46.", figDoc({ w: 220, items: [...rect(10, 10, { lw: "10", lh: "10", fill: "green" }), { poly: [[0, 0], ...arc(0, 0, 10, 0, 90)], fill: "#fff", color: "green" }] }), 0.006),
  num(`Un cercle a le même périmètre qu'un carré de 9 cm de côté. Trouve l'aire du cercle (1 décimale).`, 103.1, "36 = 2πr → r ≈ 5.73; πr² ≈ 103.1.", null, 0.06),
  num(`Une voile triangulaire a une base de 4 m et une hauteur de 7 m. Une maquette de cette voile a une aire de 0.56 m². Quel est le facteur d'échelle k de la maquette ?`, 0.2, "14 → 0.56 : k² = 0.04."),
  num(`On augmente de 20 % la longueur d'un rectangle et on diminue sa largeur de 20 %. De quel pourcentage l'aire change-t-elle ? (Entre un nombre négatif pour une diminution.)`, -4, "1.2 × 0.8 = 0.96."),
  num(`Un triangle isocèle a des côtés égaux de 13 cm et une base de 24 cm. Trouve son aire.`, 60, "Hauteur √(169 − 144) = 5; ½ × 24 × 5.", FIG.isos1324),
  num(`Une piste de course entoure un rectangle de 100 m sur 60 m avec des extrémités en demi-cercle de 60 m de diamètre. Trouve l'aire à l'intérieur de la piste (au m² près).`, 8827, "6000 + 900π ≈ 8827.4.", FIG.track, 0.6),
  tf(`Pour un périmètre fixe de 40 m, un cercle entoure environ 27 % plus d'aire que le meilleur rectangle.`, true, "Carré 100 m²; cercle 400/π ≈ 127.3 m²."),
  num(`Un rectangle de périmètre 34 a une diagonale de 13. Trouve son aire.`, 60, "l + w = 17, l² + w² = 169 → 5 × 12."),
  ms(`On agrandit une figure selon un facteur k. Quels énoncés sont vrais ? Sélectionne toutes les bonnes réponses.`, ["si k = 3, l'aire est × 9", "si l'aire est × 25, alors k = 5", "si k = 0.1, l'aire est × 0.01", "si le périmètre double, l'aire double"], [0, 1, 2], "Aire × k²; périmètre × k."),
  num(`Une allée de 2 m de largeur fait le tour d'une piscine de 20 m sur 12 m. Le pavage coûte 45 dollars le m². Trouve le coût de l'allée.`, 6480, "(24 × 16) − 240 = 144 m².", FIG.pool),
  num(`Un carré a une diagonale de 12 cm. Trouve son aire.`, 72, "d²/2."),
  num(`Un losange a des diagonales de 10 et 24. Trouve son aire.`, 120, "½ × 10 × 24.", FIG.rhomb1024),
  num(`La plus grande aire d'un rectangle de périmètre P est de 169 m². Trouve P.`, 52, "Carré de côté 13."),
  num(`Un triangle équilatéral a des côtés de 6. Trouve son aire (2 décimales).`, 15.59, "Hauteur √27 ≈ 5.196; ½ × 6 × 5.196.", null, 0.006),
  num(`Une carte est à l'échelle 1 : 20 000. Un champ sur la carte a une aire de 4.5 cm². Trouve l'aire réelle en hectares (1 ha = 10 000 m²).`, 18, "4.5 × 4 × 10⁸ cm² = 1.8 × 10⁹ cm² = 180 000 m²."),
  mc(`Un rectangle est trois fois plus long que large. Pour doubler son aire tout en gardant sa forme, il faut multiplier chaque côté par…`, "√2 ≈ 1.41", ["2", "4", "1.5"], "k² = 2."),
  num(`Deux cercles ont des rayons de 3 et 4. Un troisième cercle a une aire égale à la somme de leurs aires. Trouve son rayon.`, 5, "9π + 16π = 25π."),
  num(`Un jardin est formé d'un demi-cercle posé sur un rectangle de 10 m sur 6 m (le diamètre du demi-cercle est le côté de 10 m). Trouve l'aire totale (1 décimale).`, 99.3, "60 + 12.5π ≈ 99.27.", FIG.garden, 0.06),
];
