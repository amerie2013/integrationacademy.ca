// 7.1 Vecteurs cartésiens — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { vdoc } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
export const TOPIC = "7.1 Vecteurs cartésiens";
export const Q = [
  num(S`$a[2,1]+b[1,-3]=[7,-7]$. Trouve $b$.`, 3, "2a + b = 7 et a − 3b = −7."),
  num(S`$a[2,1]+b[1,-3]=[7,-7]$. Trouve $a$.`, 2, "Remplace b par 3."),
  num("P est situé au quart du chemin de A(−2, 0) à B(6, 8) (illustré). Trouve l'ordonnée de P.", 2, "OP = OA + ¼AB.", vdoc({ view: { xmin: -3, xmax: 7, ymin: -1, ymax: 9 }, step: 1, segs: [{ pts: [[-2, 0], [6, 8]], color: "gray" }], points: [{ x: -2, y: 0, label: "A", dx: -14, dy: 14 }, { x: 6, y: 8, label: "B", dx: 8, dy: 0 }, { x: 0, y: 2, label: "P", dx: 8, dy: 4, color: "red" }] })),
  num(S`Trouve $k\gt0$ tel que $|[k,2k]|=\sqrt{45}$.`, 3, "5k² = 45."),
  num("Trouve la longueur du côté AC du triangle où A(0, 0), B(6, 0) et C(3, 5) (2 décimales).", 5.83, "√34.", null, 0.01),
  num("A(1, 2), B(4, 6) et C(10, 14) sont illustrés. AC = k·AB. Trouve k.", 3, "AB = [3, 4], AC = [9, 12].", vdoc({ view: { xmin: 0, xmax: 11, ymin: 1, ymax: 15 }, step: 1, axes: false, arrows: [{ from: [1, 2], to: [4, 6], vl: "AB", off: -16 }, { from: [4, 6], to: [10, 14], color: "blue", off: -14 }], points: [{ x: 1, y: 2, label: "A", dx: -14, dy: 6 }, { x: 4, y: 6, label: "B", dx: 8, dy: 6 }, { x: 10, y: 14, label: "C", dx: 8, dy: 0 }] })),
  num(S`Trouve la direction (par rapport à l'axe des x positifs) de $\overrightarrow{AB}$ pour $A(5,-1)$ et $B(1,2)$ (en degrés, 2 décimales).`, 143.13, "[−4, 3] est dans le quadrant II.", null, 0.01),
  mc(S`$[2,-3]$ et $[-4,6]$ sont :`, "colinéaires, de sens opposés", ["égaux", "colinéaires, de même sens", "non colinéaires"], "[−4, 6] = −2[2, −3]."),
  num(S`Trouve la norme de la résultante de $[3,4]$, $[-1,2]$ et $[5,-3]$ (2 décimales).`, 7.62, "[7, 3].", null, 0.01),
  num(S`Trouve la composante en y de l'équilibrante de $[3,4]$, $[-1,2]$ et $[5,-3]$.`, -3, "L'opposé de [7, 3]."),
  num("Les forces [40, 0] N et [0, 30] N agissent ensemble (illustrées). Quel angle la résultante fait-elle avec l'axe des x positifs (en degrés, 2 décimales)?", 36.87, "tan⁻¹(30/40).", vdoc({ view: { xmin: -2, xmax: 4.6, ymin: -0.6, ymax: 3.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 0], label: "[40, 0]", off: 14 }, { from: [0, 0], to: [0, 3], label: "[0, 30]", color: "blue", off: -26 }, { from: [0, 0], to: [4, 3], color: "red", label: "R", off: -14 }] }), 0.01),
  num("Un avion vole à 300 km/h selon un cap de 060°. Trouve la composante est de sa vitesse (km/h, 2 décimales).", 259.81, "300 sin 60°.", null, 0.01),
  num("Un avion vole à 300 km/h selon un cap de 060°. Trouve la composante nord de sa vitesse (km/h).", 150, "300 cos 60°."),
  tf(S`$[a,b]+[c,d]=[c,d]+[a,b]$.`, true, "L'addition des composantes est commutative."),
  num(S`Trouve $x\gt1$ tel que $|[x,3]-[1,-1]|=5$.`, 4, "[x − 1, 4] a une norme de 5."),
  num(S`$[m\cos\theta,\ m\sin\theta]=[-5,\ 5\sqrt3]$ avec $m\gt0$. Trouve $m$.`, 10, "√(25 + 75)."),
  num(S`$[m\cos\theta,\ m\sin\theta]=[-5,\ 5\sqrt3]$ avec $0^\circ\le\theta\lt360^\circ$. Trouve $\theta$ (en degrés).`, 120, "Quadrant II, angle de référence 60°."),
  num("Le carré ABCD (illustré, dans le sens antihoraire) a A(0, 0) et B(3, 1). Trouve l'ordonnée de C.", 4, "AD est AB tourné de 90° : [−1, 3]; C = B + AD = (2, 4).", vdoc({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 5 }, step: 1, segs: [{ pts: [[0, 0], [3, 1], [2, 4], [-1, 3], [0, 0]], color: "gray" }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 3, y: 1, label: "B", dx: 6, dy: 14 }, { x: 2, y: 4, label: "C", dx: 6, dy: -6 }, { x: -1, y: 3, label: "D", dx: -16, dy: -4 }] })),
  mc(S`Quel est le vecteur unitaire de même direction que $\overrightarrow{AB}$ pour $A(1,1)$ et $B(4,5)$?`, S`$[0.6,0.8]$`, [S`$[3,4]$`, S`$[0.8,0.6]$`, S`$[0.75,1]$`], "[3, 4] ÷ 5."),
  num("Trouve l'abscisse du centre de gravité du triangle de sommets (0, 0), (6, 0) et (0, 9).", 2, "La moyenne des abscisses."),
];
