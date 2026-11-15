// 3.5 Résoudre des équations du second degré — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { P, graph, planeDoc } from "./fig.mjs";
import { TITLE } from "../l3_5.mjs";

export const TOPIC = TITLE;
export const Q = [
  num("Une image de 30 cm sur 20 cm a un cadre de largeur uniforme. L'image et le cadre couvrent ensemble 816 cm². Quelle est la largeur du cadre (cm)?", 2, "(30 + 2x)(20 + 2x) = 816 → x² + 25x − 54 = 0."),
  num(String.raw`Trouve la plus grande racine de $3x^2-6x-2=0$ (au millième).`, 1 + Math.sqrt(15) / 3, "(3 ± √15)/3.", null, 0.002),
  num(String.raw`$h(t)=-4.9t^2+29.4t+1$. Pendant combien de temps l'objet est-il au-dessus de 30 m (au centième)?`, Math.sqrt(29.4 ** 2 - 4 * 4.9 * 29) / 4.9, "−4.9t² + 29.4t − 29 = 0 : les racines diffèrent de √D/4.9.", graph((t) => -4.9 * t * t + 29.4 * t + 1, { xmin: 0, xmax: 6.5, ymin: 0, ymax: 50 }, [], { a: 0, lines: [{ m: 0, b: 30, color: "amber", dash: true }], step: { x: 0.5, y: 5 } }), 0.01),
  num(String.raw`Le profit est $P(x)=-x^2+14x-18$. Quelle est la largeur de l'intervalle de $x$ pour lequel le profit est d'au moins 22?`, 6, "x² − 14x + 40 ≤ 0 → 4 ≤ x ≤ 10."),
  num("Deux entiers pairs positifs consécutifs ont des carrés dont la somme est 340. Quel est le plus petit?", 12, "x² + (x + 2)² = 340."),
  num("Un rectangle a un périmètre de 34 cm et une diagonale de 13 cm. Quelle est son aire?", 60, "l + w = 17, l² + w² = 169 → 5 et 12."),
  num(String.raw`Un polygone à $n$ côtés a $\frac{n(n-3)}{2}$ diagonales. Quel polygone en a 54?`, 12, "n² − 3n − 108 = 0."),
  num(String.raw`Résous $x=\sqrt{x+6}$.`, 3, "x² − x − 6 = 0; x = −2 est une solution étrangère."),
  num(String.raw`Trouve la plus grande racine de $x^4-13x^2+36=0$.`, 3, "Pose u = x² : u = 4 ou 9."),
  num("Une piscine de 10 m sur 6 m est entourée d'une allée de largeur uniforme dont l'aire est égale à celle de la piscine. Quelle est la largeur de l'allée (au centième)?", -4 + Math.sqrt(31), "(10 + 2x)(6 + 2x) = 120 → x² + 8x − 15 = 0.", planeDoc({ view: { xmin: -1, xmax: 14, ymin: -1, ymax: 10 }, segs: [{ pts: [[0, 0], [13.1, 0], [13.1, 9.1], [0, 9.1], [0, 0]], color: "amber" }, { pts: [[1.57, 1.57], [11.57, 1.57], [11.57, 7.57], [1.57, 7.57], [1.57, 1.57]], color: "blue" }], step: { x: 1, y: 1 } }), 0.01),
  mc(String.raw`Quelle équation a les racines $2\pm\sqrt3$?`, String.raw`$x^2-4x+1=0$`, [String.raw`$x^2+4x+1=0$`, String.raw`$x^2-4x-1=0$`, String.raw`$x^2-2x+3=0$`], "(x − 2)² − 3."),
  num(String.raw`Une racine de $x^2+kx-12=0$ est 3. Trouve l'autre racine.`, -4, "Produit des racines −12."),
  num("Un trajet de 120 km prendrait 1 heure de moins à une vitesse supérieure de 10 km/h. Quelle est la vitesse initiale (km/h)?", 30, "120/v − 120/(v + 10) = 1 → v² + 10v − 1200 = 0."),
  tf(String.raw`$x^2-2x+5=0$ a deux racines réelles.`, false, "D = 4 − 20 < 0."),
  num("Le câble d'un pont suit y = 0.01x² + 1 (en mètres). À quelle distance du centre le câble est-il à 9 m de hauteur (au centième)?", Math.sqrt(800), "x² = 800.", graph((x) => 0.01 * x * x + 1, { xmin: -35, xmax: 35, ymin: 0, ymax: 14 }, [P(Math.sqrt(800), 9, false)], { lines: [{ m: 0, b: 9, color: "amber", dash: true }], step: { x: 5, y: 2 } }), 0.01),
  num(String.raw`Trouve la plus grande racine de $(x-1)(x-2)=12$.`, 5, "x² − 3x − 10 = 0."),
  num("Un nombre plus son inverse donne 2.9. Quel est le plus grand de ces nombres?", 2.5, "x² − 2.9x + 1 = 0 → 2.5, 0.4.", null, 0.001),
  num(String.raw`$h(t)=-4.9t^2+12t+1.5$. Quand le ballon touche-t-il le sol (au centième)?`, (12 + Math.sqrt(144 + 29.4)) / 9.8, "(12 + √173.4)/9.8.", graph((t) => -4.9 * t * t + 12 * t + 1.5, { xmin: 0, xmax: 3, ymin: 0, ymax: 10 }, [], { a: 0, step: { x: 0.5, y: 1 } }), 0.01),
  num("Un jardin rectangulaire a une aire de 120 m² et est entouré de 46 m de clôture. Quelle est la longueur du plus petit côté (m)?", 8, "l + w = 23 → w² − 23w + 120 = 0."),
  num(String.raw`Pour quelle valeur positive de $k$ le nombre $x=2$ est-il une racine de $kx^2-kx+k^2-18=0$?`, 3, "4k − 2k + k² − 18 = 0 → k² + 2k − 15 = 0 → (k + 5)(k − 3)."),
];
