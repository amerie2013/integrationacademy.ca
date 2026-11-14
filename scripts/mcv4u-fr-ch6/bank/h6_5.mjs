// 6.5 Décomposition de vecteurs en composantes rectangulaires — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { vdoc, pol } from "../../mcv4u-ch6/vecfig.mjs";
import { TITLE } from "../l6_5.mjs";

const S = String.raw;
const RAD = Math.PI / 180;
export const TOPIC = TITLE;
export const Q = [
  num("Trouve la grandeur de la résultante de 12 N à 15°, de 18 N à 75° et de 9 N à 200° (N, 2 décimales).", 19.08, "x ≈ 7.79, y ≈ 17.41.", null, 0.01),
  num("Trouve la direction (dans le sens antihoraire à partir de l'est) de la résultante de 12 N à 15°, de 18 N à 75° et de 9 N à 200° (degrés, 1 décimale).", 65.9, "tan⁻¹(17.41/7.79).", null, 0.05),
  num("Une boîte de 200 N repose sur une rampe inclinée à 28° (illustré). Trouve la composante de son poids perpendiculaire à la rampe (N, 2 décimales).", 176.59, "200 cos 28°.", vdoc({ view: { xmin: -0.5, xmax: 8.5, ymin: -2.4, ymax: 4.6 }, grid: false, axes: false, polys: [{ pts: [[0, 0], [8.2, 0], [8.2, 8.2 * Math.tan(28 * RAD)]], fill: "#f1f5f9", stroke: "gray" }], arrows: [{ from: [4.8, 2.9], to: [4.8, -1.1], vl: "W", label: "200 N", off: -16 }], arcs: [{ at: [0, 0], r: 1.6, a: 0, b: 28, label: "28°" }] }), 0.01),
  num("La corde d'un traîneau, à 35° du sol, soulève avec une composante verticale de 60 N. Trouve la composante horizontale (N, 2 décimales).", 85.69, "T = 60/sin 35°; composante horizontale T cos 35° = 60/tan 35°.", null, 0.01),
  num("Un avion vole à 400 km/h selon un cap de 070°; un vent ajoute 50 km/h vers 160°. Trouve le cap de la vitesse résultante (degrés, 1 décimale).", 77.1, "Est 375.88 + 17.10; nord 136.81 − 46.98.", null, 0.05),
  num("Un avion vole à 400 km/h selon un cap de 070°; un vent ajoute 50 km/h vers 160°. Trouve la vitesse résultante (km/h, 2 décimales).", 403.11, "√(392.98² + 89.83²).", null, 0.01),
  num("Un anneau est maintenu immobile par trois cordes : 25 N à 10°, 35 N à 100°, et une troisième corde (illustré). Trouve la tension dans la troisième corde (N, 2 décimales).", 43.01, "Elle équilibre la somme (18.54, 38.81).", vdoc({ view: { xmin: -2.4, xmax: 3.2, ymin: -4.4, ymax: 3.8 }, grid: false, arrows: [{ from: [0, 0], to: pol(2.5, 10), label: "25 N", off: 14 }, { from: [0, 0], to: pol(3.5, 100), label: "35 N", color: "blue", off: -18 }, { from: [0, 0], to: pol(4.3, 244.46), color: "green", label: "?", off: 16 }] }), 0.01),
  num("Trouve la composante d'une force de 70 N le long d'une droite qui forme un angle de 35° avec la force (N, 2 décimales).", 57.34, "70 cos 35°.", null, 0.01),
  num("Trouve la composante d'une force de 70 N perpendiculaire à une droite qui forme un angle de 35° avec la force (N, 2 décimales).", 40.15, "70 sin 35°.", null, 0.01),
  tf("Une fois deux axes perpendiculaires choisis, les composantes d'un vecteur selon ces axes sont uniques.", true, "Chacune est la projection sur son axe."),
  num("Un chariot est maintenu immobile sur une rampe inclinée à 18° par une force de 50 N parallèle à la rampe. Trouve le poids du chariot (N, 2 décimales).", 161.8, "W sin 18° = 50.", null, 0.01),
  num("Un vecteur à 40° au-dessus de l'horizontale a une composante horizontale de 15. Trouve sa composante verticale (2 décimales).", 12.59, "15 tan 40°.", null, 0.01),
  num("Une poussée horizontale de 100 N agit sur un bloc posé sur une rampe inclinée à 30°, en le poussant vers la rampe. Trouve la composante de la poussée le long de la rampe (vers le haut) (N, 2 décimales).", 86.6, "La poussée forme un angle de 30° avec la surface de la rampe.", null, 0.01),
  num("Une poussée horizontale de 100 N agit sur un bloc posé sur une rampe inclinée à 30°, en le poussant vers la rampe. Trouve la composante de la poussée perpendiculaire à la rampe (N).", 50, "100 sin 30°."),
  num("Trouve la grandeur de la résultante de 30 N à 0°, de 40 N à 60° et de 50 N à 210° (illustré) (N, 2 décimales).", 11.74, "x ≈ 6.70, y ≈ 9.64.", vdoc({ view: { xmin: -5, xmax: 3.6, ymin: -3, ymax: 4 }, grid: false, arrows: [{ from: [0, 0], to: [3, 0], label: "30 N", off: 14 }, { from: [0, 0], to: pol(4, 60), label: "40 N", color: "blue", off: -18 }, { from: [0, 0], to: pol(5, 210), label: "50 N", color: "green", off: 16 }] }), 0.01),
  num("Trouve la direction (dans le sens antihoraire à partir de l'est) de la résultante de 30 N à 0°, de 40 N à 60° et de 50 N à 210° (degrés, 1 décimale).", 55.2, "tan⁻¹(9.64/6.70).", null, 0.05),
  num("La corde d'un cerf-volant mesure 120 m et forme un angle de 52° avec le sol. À quelle hauteur se trouve le cerf-volant (m, 2 décimales)?", 94.56, "120 sin 52°.", vdoc({ view: { xmin: -0.8, xmax: 8.6, ymin: -0.8, ymax: 10.4 }, grid: false, axes: false, segs: [{ pts: [[-0.8, 0], [8.6, 0]], color: "gray" }, { pts: [[pol(9.6, 52)[0], 0], pol(9.6, 52)], dash: true }], arrows: [{ from: [0, 0], to: pol(9.6, 52), label: "120 m", off: -14 }], arcs: [{ at: [0, 0], r: 1.4, a: 0, b: 52, label: "52°" }], texts: [{ x: 6.6, y: 3.8, t: "hauteur?", color: "red" }] }), 0.01),
  num("Un vent de 25 km/h souffle du 330°. Trouve sa composante vers le sud (km/h, 2 décimales).", 21.65, "Il souffle vers 150° : 25 cos 150° = −21.65 vers le nord.", null, 0.01),
  tf(S`$(W\sin\alpha)^2+(W\cos\alpha)^2=W^2$ pour tout angle de rampe $\alpha$.`, true, "sin² + cos² = 1."),
  num("Par rapport à la rive, un bateau se déplace de 6 km/h vers l'est et de 8 km/h vers le nord. Le courant s'écoule à 3 km/h vers l'est. Trouve la vitesse du bateau par rapport à l'eau (km/h, 2 décimales).", 8.54, "Soustrais le courant : (3, 8).", null, 0.01),
];
