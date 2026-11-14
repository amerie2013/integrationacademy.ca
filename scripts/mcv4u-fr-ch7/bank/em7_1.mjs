// 7.1 Vecteurs cartésiens — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc, pol } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
const easy = [
  num(S`Trouve $|[9,40]|$.`, 41, "√(81 + 1600)."),
  num(S`Trouve la composante en x de $\overrightarrow{AB}$ pour $A(2,3)$ et $B(7,1)$.`, 5, "7 − 2."),
  num(S`Trouve la composante en y de $\overrightarrow{AB}$ pour $A(2,3)$ et $B(7,1)$.`, -2, "1 − 3."),
  num(S`Trouve la composante en x de $[3,-1]+[-2,4]$.`, 1, "3 + (−2)."),
  num(S`Trouve la composante en y de $2[4,-3]$.`, -6, "2 × (−3)."),
  mc(S`$3\vec i-2\vec j=$`, S`$[3,-2]$`, [S`$[-2,3]$`, S`$[3,2]$`, S`$[1,0]$`], "Les coefficients de i et de j."),
  tf(S`$[2,3]$ et $(2,3)$ signifient la même chose.`, false, "[2, 3] est un vecteur; (2, 3) est un point."),
  num(S`Trouve $|[-8,15]|$.`, 17, "√(64 + 225)."),
  fill(S`Le vecteur unitaire dans le sens positif de l'axe des x s'écrit ___.`, ["i", "\\vec i", "[1,0]", "[1, 0]"], "i = [1, 0]."),
  num(S`Quel angle $[0,4]$ fait-il avec l'axe des x positifs (en degrés)?`, 90, "Il pointe droit vers le haut."),
  num("Le vecteur illustré va de (−1, 2) à (5, 10). Trouve sa norme.", 10, "Déplacement horizontal 6, vertical 8.", vdoc({ view: { xmin: -2, xmax: 6, ymin: 0, ymax: 11 }, step: 1, axes: false, arrows: [{ from: [-1, 2], to: [5, 10], vl: "v", off: -16 }], points: [{ x: -1, y: 2, label: "(−1, 2)", dx: 6, dy: 16 }, { x: 5, y: 10, label: "(5, 10)", dx: -50, dy: -4 }] })),
  num(S`Trouve la composante en y de $[6,-2]-[1,3]$.`, -5, "−2 − 3."),
  num(S`Trouve la composante en x du vecteur unitaire de même direction que $[3,4]$.`, 0.6, "3/5.", null, 0.001),
  tf(S`$|[a,b]|=|[-a,-b]|$.`, true, "L'élévation au carré fait disparaître les signes."),
  num(S`Quel angle $[-4,0]$ fait-il avec l'axe des x positifs (en degrés)?`, 180, "Il pointe droit vers la gauche."),
  mc(S`Quel vecteur est colinéaire à $[1,2]$?`, S`$[-3,-6]$`, [S`$[2,1]$`, S`$[1,-2]$`, S`$[3,5]$`], "−3 fois [1, 2]."),
  num(S`Trouve $|[1,1]|$ (2 décimales).`, 1.41, "√2.", null, 0.01),
  num("Le vecteur illustré a une norme de 10 et fait un angle de 30° avec l'axe des x positifs. Trouve sa composante en x (2 décimales).", 8.66, "10 cos 30°.", vdoc({ view: { xmin: -0.6, xmax: 9.6, ymin: -0.8, ymax: 5.8 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: pol(10, 30), vl: "v", label: "10", off: -16 }, { from: [0, 0], to: [8.66, 0], color: "blue", label: "?", off: 14 }], arcs: [{ at: [0, 0], r: 1.4, a: 0, b: 30, label: "30°" }] }), 0.01),
  num(S`Trouve $k$ si $[k,3]=[5,3]$.`, 5, "Composantes égales."),
  mc("Quel vecteur a une norme de 2 et pointe droit vers le haut?", S`$[0,2]$`, [S`$[2,0]$`, S`$[0,-2]$`, S`$[1,1]$`], "Aucune partie horizontale."),
];
const medium = [
  num(S`Trouve $|\overrightarrow{AB}|$ pour $A(-3,2)$ et $B(5,-4)$.`, 10, "[8, −6]."),
  num(S`Quel angle $[-6,6]$ fait-il avec l'axe des x positifs (en degrés)?`, 135, "Quadrant II, angle de référence 45°."),
  num("Un vecteur a une norme de 15 et fait un angle de 210° avec l'axe des x positifs. Trouve sa composante en x (2 décimales).", -12.99, "15 cos 210°.", null, 0.01),
  num("Un vecteur a une norme de 15 et fait un angle de 210° avec l'axe des x positifs. Trouve sa composante en y.", -7.5, "15 sin 210°.", null, 0.001),
  num(S`Trouve $k$ pour que $[4,k]$ soit parallèle à $[6,-9]$.`, -6, "[4, k] = (2/3)[6, −9]."),
  num(S`Trouve la composante en y du vecteur unitaire de même direction que $[-5,12]$ (2 décimales).`, 0.92, "12/13.", null, 0.005),
  num(S`Pour $\vec u=[1,2]$ et $\vec v=[-3,1]$, trouve $|2\vec u-\vec v|$ (2 décimales).`, 5.83, "[5, 3].", null, 0.01),
  num("Trouve l'abscisse du point milieu de (−4, 7) et de (10, −3).", 3, "(−4 + 10)/2."),
  tf(S`Si $[x,4]=[3,y]$, alors $x=3$ et $y=4$.`, true, "Des vecteurs égaux ont des composantes égales."),
  num(S`Sur le quadrillage, $\vec u=[2,3]$ et $\vec v=[3,-1]$ (illustrés). Trouve $|\vec u+\vec v|$ (2 décimales).`, 5.39, "[5, 2].", vdoc({ view: { xmin: -0.5, xmax: 5.5, ymin: -1.5, ymax: 3.5 }, step: 1, arrows: [{ from: [0, 0], to: [2, 3], vl: "u", off: -16 }, { from: [0, 0], to: [3, -1], vl: "v", color: "blue", off: 16 }] }), 0.01),
  mc("Quel vecteur a une norme de 1?", S`$[0.6,-0.8]$`, [S`$[1,1]$`, S`$[0.5,0.5]$`, S`$[1,-1]$`], "0.36 + 0.64 = 1."),
  num(S`Quel angle $[3,-3\sqrt3]$ fait-il avec l'axe des x positifs (en degrés)?`, 300, "Quadrant IV, angle de référence 60°."),
  num(S`Trouve la composante en x du vecteur de norme 26 de même direction que $[5,12]$.`, 10, "2[5, 12]."),
  num(S`Si $a[1,0]+b[0,1]=[-3,7]$, trouve $a$.`, -3, "Ce sont les composantes elles-mêmes."),
  num(S`$ABCD$ est un parallélogramme avec $A(0,0)$, $B(4,1)$ et $C(6,5)$. Trouve l'abscisse de $D$.`, 2, "D = A + BC = (2, 4)."),
  num(S`$|[a,a]|=6$ avec $a\gt0$. Trouve $a$ (2 décimales).`, 4.24, "a√2 = 6.", null, 0.01),
  mc(S`$\overrightarrow{AB}-\overrightarrow{AC}=$`, S`$\overrightarrow{CB}$`, [S`$\overrightarrow{BC}$`, S`$\overrightarrow{BA}$`, S`$\vec 0$`], "CA + AB."),
  num("Le vecteur illustré a une norme de 6 et fait un angle de 120°. Trouve sa composante en y (2 décimales).", 5.2, "6 sin 120°.", vdoc({ view: { xmin: -4, xmax: 1.5, ymin: -0.8, ymax: 6 }, grid: false, arrows: [{ from: [0, 0], to: pol(6, 120), vl: "v", label: "6", off: -16 }], arcs: [{ at: [0, 0], r: 0.8, a: 0, b: 120, label: "120°" }] }), 0.01),
  num(S`Trouve la distance entre les pointes de $[2,5]$ et de $[-1,1]$ tracés à partir de l'origine.`, 5, "|[3, 4]|."),
  tf(S`La direction de $[a,b]$ est toujours $\tan^{-1}\frac ba$.`, false, "tan⁻¹ ne tient pas compte du quadrant lorsque a < 0."),
];
export { easy as E, medium as M };
