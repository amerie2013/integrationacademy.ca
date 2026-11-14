import { FIG } from "../../mth1w-bank-figures/figs.mjs";
// 5.5 Modifier les dimensions : le périmètre — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc, polygon } from "./fig.mjs";

const arc = (cx, cy, r, a0, a1, n = 24) => Array.from({ length: n + 1 }, (_, i) => { const t = ((a0 + ((a1 - a0) * i) / n) * Math.PI) / 180; return [cx + r * Math.cos(t), cy + r * Math.sin(t)]; });

export const E = [
  num(`Trouve le périmètre d'un rectangle de 7 cm sur 4 cm.`, 22, "2(7 + 4)."),
  num(`Trouve le périmètre d'un carré de 9 m de côté.`, 36, "4 × 9."),
  num(`Trouve la circonférence d'un cercle de 10 cm de diamètre, à 1 décimale près.`, 31.4, "10π.", null, 0.06),
  num(`Trouve la circonférence d'un cercle de 3 m de rayon, à 1 décimale près.`, 18.8, "6π.", null, 0.06),
  num(`Un triangle a des côtés de 5, 6 et 9. Trouve son périmètre.`, 20, "5 + 6 + 9."),
  num(`On double chaque côté d'une figure. Par quel facteur le périmètre est-il multiplié ?`, 2, "Le périmètre est multiplié par k."),
  num(`Le périmètre d'un rectangle est de 30 cm. On l'agrandit selon un facteur d'échelle de 3. Trouve le nouveau périmètre.`, 90, "30 × 3."),
  num(`On augmente de 2 la longueur d'un rectangle de 10 × 4. De combien le périmètre augmente-t-il ?`, 4, "Deux côtés s'allongent chacun de 2."),
  tf(`Si tu doubles le rayon d'un cercle, sa circonférence double.`, true, "C = 2πr."),
  mc(`Pour une aire fixe, quel rectangle a le plus petit périmètre ?`, "un carré", ["un rectangle long et mince", "n'importe lequel — ils sont tous égaux", "un rectangle deux fois plus long que large"], "Le rectangle le plus compact."),
  num(`Un hexagone régulier a des côtés de 4 cm. Trouve son périmètre.`, 24, "6 × 4."),
  num(`Un carré a un périmètre de 48 cm. Trouve son côté.`, 12, "48 ÷ 4."),
  num(`Un rectangle a une aire de 16 m². Quel est le plus petit périmètre possible ?`, 16, "Carré de 4 × 4."),
  num(`Le périmètre d'une figure est de 40 cm. On la réduit selon un facteur d'échelle de 0.5. Trouve le nouveau périmètre.`, 20, "40 × 0.5."),
  tf(`Ajouter 3 cm à la longueur d'un rectangle ajoute 3 cm à son périmètre.`, false, "Cela ajoute 6 cm (deux côtés)."),
  num(`Trouve le périmètre d'une région en demi-cercle de diamètre 4 (partie courbe plus le diamètre), à 2 décimales près.`, 10.28, "2π + 4.", null, 0.006),
  num(`Un périmètre passe de 15 cm à 45 cm après un agrandissement. Trouve le facteur d'échelle.`, 3, "45 ÷ 15."),
  mc(`Quel rectangle d'aire 24 a le plus petit périmètre ?`, "4 × 6", ["1 × 24", "2 × 12", "3 × 8"], "Le plus proche d'un carré : P = 20."),
  num(`Un triangle équilatéral a un périmètre de 27 cm. Trouve un côté.`, 9, "27 ÷ 3."),
  num(`Un rectangle de 6 m sur 3 m est agrandi selon un facteur de 4. Trouve la nouvelle longueur.`, 24, "6 × 4."),
];

export const M = [
  num(`Trouve le périmètre de la figure : un rectangle de 10 sur 6 avec un demi-cercle sur un des côtés de 6 (la partie courbe remplace ce côté), à 1 décimale près.`, 35.4, "10 + 6 + 10 + 3π.", figDoc({ w: 280, items: [{ poly: [[0, 0], [10, 0], ...arc(10, 3, 3, -90, 90).slice(1, -1), [10, 6], [0, 6]], fill: "green", color: "green" }, { text: "10", at: [5, -0.8], bold: true, color: "blue" }, { text: "6", at: [-0.6, 3], bold: true, color: "blue" }] }), 0.06),
  num(`Un rectangle a une aire de 81 m². Trouve le plus petit périmètre possible.`, 36, "9 × 9."),
  num(`Un rectangle de 50 m² est clôturé sur trois côtés (un côté est un mur). Trouve la clôture minimale nécessaire.`, 20, "w = 5, l = 10 : 5 + 10 + 5."),
  num(`On augmente de 3 cm la longueur et la largeur d'un rectangle de 8 cm sur 5 cm. Trouve le nouveau périmètre.`, 38, "2(11 + 8)."),
  num(`Un cercle a une circonférence de 31.4 cm. On triple son rayon. Trouve la nouvelle circonférence (1 décimale).`, 94.2, "× 3.", null, 0.06),
  num(`Trouve le périmètre de la figure en L.`, 34, "Le même que celui du rectangle de 10 × 7 qui l'entoure.", figDoc({ w: 260, items: polygon([[0, 0], [10, 0], [10, 3], [4, 3], [4, 7], [0, 7]], { sides: ["10", "3", "6", "4", "4", "7"], fill: "blue" }) })),
  num(`Une piste de course a des lignes droites de 85 m et des extrémités en demi-cercle de 36 m de rayon. Trouve la longueur d'un tour (au mètre près).`, 396, "170 + 72π ≈ 396.2.", null, 0.6),
  num(`Une roue de 70 cm de diamètre fait 100 tours. Quelle distance parcourt-elle (au mètre près) ?`, 220, "100 × 70π cm ≈ 21 991 cm.", null, 0.6),
  tf(`Un carré et un cercle ont la même aire. Le cercle a le plus petit périmètre.`, true, "Le cercle a le plus petit périmètre pour son aire."),
  num(`Deux triangles semblables ont des périmètres de 18 cm et 63 cm. Quel est le facteur d'échelle ?`, 3.5, "63 ÷ 18."),
  ms(`Quels changements doublent le périmètre d'un rectangle ? Sélectionne toutes les bonnes réponses.`, ["doubler la longueur et la largeur", "doubler seulement la longueur", "agrandir selon k = 2", "ajouter 2 à chaque côté"], [0, 2], "Seulement multiplier chaque longueur par 2."),
  num(`La longueur d'un rectangle est le triple de sa largeur et son aire est de 48 m². Trouve son périmètre.`, 32, "w = 4, l = 12."),
  num(`L'aire d'un carré est de 100 cm². On multiplie ses côtés par 1.5. Trouve le nouveau périmètre.`, 60, "Côté 10 → 15; 4 × 15."),
  num(`Un jardin de 98 m² contre un mur : quelle est la clôture minimale (3 côtés) ?`, 28, "w = 7, l = 14."),
  num(`Trouve le périmètre d'une région en quart de cercle de rayon 8 (arc plus deux rayons), à 1 décimale près.`, 28.6, "4π + 16 ≈ 28.57.", null, 0.06),
  num(`On diminue de 4 la longueur d'un rectangle de 12 × 5 et on augmente sa largeur de 4. Trouve la variation du périmètre.`, 0, "−8 + 8."),
  mc(`Le périmètre d'une figure réduite selon k = 0.25 est…`, "le quart du périmètre initial", ["le seizième du périmètre initial", "quatre fois le périmètre initial", "inchangé"], "Périmètre × k."),
  num(`La clôture coûte 18 dollars le mètre. Combien coûte la clôture du meilleur rectangle d'aire 64 m² ?`, 576, "Carré de 8 × 8 : 32 m × 18."),
  num(`Un rectangle a un périmètre de 50 cm et une longueur de 15 cm. Trouve sa largeur.`, 10, "2(15 + w) = 50."),
  num(`Un carré est inscrit dans un cercle de 10 cm de diamètre. Trouve le périmètre du carré à 1 décimale près.`, 28.3, "Côté 10/√2 ≈ 7.07; × 4.", FIG.sqD10, 0.06),
];
