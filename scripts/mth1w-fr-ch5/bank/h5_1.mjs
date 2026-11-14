// 5.1 La géométrie et la mesure à travers l'histoire — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { figDoc } from "./fig.mjs";

const reg = (n, R = 1, rot = 90) => Array.from({ length: n }, (_, i) => [R * Math.cos(((rot + (360 * i) / n) * Math.PI) / 180), R * Math.sin(((rot + (360 * i) / n) * Math.PI) / 180)]);

export const TOPIC = "5.1 La géométrie et la mesure à travers l'histoire";
export const Q = [
  num(`Convertis le nombre babylonien 1;24,51,10 en nombre décimal (6 décimales).`, 1.414213, "1 + 24/60 + 51/3600 + 10/216000.", null, 0.0000015),
  num(`Écris 3.14159 en base 60 sous la forme 3;a,b (deux positions). Que vaut a ?`, 8, "0.14159 × 60 = 8.495 → a = 8."),
  num(`En base 60, 3.14159 = 3;8,b. Trouve b au nombre entier près.`, 30, "0.495 × 60 ≈ 29.7 → 30."),
  num(`Deux villes situées à 1250 km l'une de l'autre sur un méridien ont des angles du Soleil à midi qui diffèrent de 11.25°. Estime la circonférence de la Terre (km).`, 40000, "360 ÷ 11.25 = 32; 32 × 1250."),
  num(`Avec C ≈ 40 000 km, à quelle distance (km) se trouvent deux endroits d'un même méridien dont les angles du Soleil à midi diffèrent de 1° ?`, 111.1, "40 000 ÷ 360.", null, 0.06),
  num(`Un polygone régulier à 12 côtés est tracé à l'intérieur d'un cercle de diamètre 1. Chaque côté mesure 0.258819. Quelle borne inférieure de π son périmètre donne-t-il (4 décimales) ?`, 3.1058, "12 × 0.258819 = 3.10583.", figDoc({ w: 220, items: [{ circle: [0, 0, 1], color: "ink" }, { poly: reg(12), fill: "none", color: "blue" }] }), 0.00006),
  num(`Le polygone à 12 côtés tracé autour d'un cercle de diamètre 1 a des côtés de 0.267949. Quelle borne supérieure de π donne-t-il (4 décimales) ?`, 3.2154, "12 × 0.267949 = 3.21539.", null, 0.00006),
  ms(`Lesquelles de ces bornes Archimède pouvait-il démontrer avec ses polygones à 96 côtés ? Sélectionne toutes les bonnes réponses.`, ["π > 3.1408", "π < 3.1429", "π > 3.1416", "π < 3.1410"], [0, 1], "3 10/71 ≈ 3.1408 < π < 3 1/7 ≈ 3.1429."),
  num(`La règle de l'aire du papyrus Rhind donne (8d/9)². Pour quelle valeur de π est-elle exacte ? Donne π à 4 décimales près.`, 3.1605, "(8/9)² d² = π d²/4 → π = 256/81.", null, 0.00006),
  num(`Pourcentage d'erreur de la valeur égyptienne 256/81 par rapport à π (2 décimales).`, 0.6, "(3.16049 − 3.14159)/3.14159 × 100 ≈ 0.60 %.", null, 0.006),
  num(`Une corde compte 56 espaces égaux. On la tend en un triangle rectangle dont les côtés sont un multiple de 7-24-25. Combien d'espaces le plus long côté compte-t-il ?`, 25, "7 + 24 + 25 = 56."),
  tf(`Une corde de 40 espaces égaux peut former un triangle rectangle dont les côtés sont des nombres entiers.`, true, "8 + 15 + 17 = 40, et 64 + 225 = 289 = 17²."),
  num(`La tablette Plimpton 322 énumère des triplets comme (65, 72, c). Trouve c.`, 97, "65² + 72² = 4225 + 5184 = 9409 = 97²."),
  num(`Un astronome mesure un angle de 12°34′. Écris-le en degrés décimaux (2 décimales).`, 12.57, "34/60 ≈ 0.567.", null, 0.006),
  num(`Convertis 47.85° en degrés et minutes : combien de minutes ?`, 51, "0.85 × 60 = 51."),
  mc(`La valeur 355/113 de Zu Chongzhi correspond à π jusqu'à combien de décimales ?`, "6", ["2", "4", "10"], "3.1415929 comparé à 3.1415926."),
  num(`Si le côté de la base de la Grande Pyramide mesure 440 coudées royales et sa hauteur 280 coudées, quel est le rapport périmètre ÷ hauteur (2 décimales) ? (Certains disent qu'il est proche de 2π.)`, 6.29, "1760 ÷ 280 ≈ 6.286.", null, 0.006),
  num(`Le rayon de la Terre est d'environ 6371 km. Avec C = 2πr, quelle est la circonférence (au km près) ?`, 40030, "2π(6371) ≈ 40 030.", null, 1),
  tf(`La méthode d'Ératosthène donnerait une mauvaise réponse si les deux villes n'étaient pas sur la même ligne nord–sud, parce que la différence d'angle ne correspondrait plus à l'arc qui les sépare.`, true, "L'angle mesure seulement l'arc nord–sud."),
  num(`Le navigateur d'un navire utilise 1 mille marin = 1 minute de latitude. Avec C = 40 000 km, combien de km un mille marin mesure-t-il (3 décimales) ?`, 1.852, "40 000 ÷ (360 × 60) ≈ 1.852.", null, 0.0006),
];
