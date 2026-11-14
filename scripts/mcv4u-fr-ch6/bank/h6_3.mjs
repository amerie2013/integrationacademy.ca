// 6.3 Multiplication d'un vecteur par un scalaire — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { vdoc, pol } from "../../mcv4u-ch6/vecfig.mjs";
import { TITLE } from "../l6_3.mjs";

const S = String.raw;
const HEX = Array.from({ length: 6 }, (_, i) => pol(3, i * 60));
export const TOPIC = TITLE;
export const Q = [
  num(S`$|\vec u|=3$, $|\vec v|=4$, avec un angle de $60^\circ$ entre eux. Trouve $|\vec u+2\vec v|$ (au centième près).`, 9.85, "u et 2v forment un angle de 60° : √(9 + 64 + 24).", null, 0.01),
  num(S`$|\vec u|=2$, $|\vec v|=5$ et $\vec u\perp\vec v$. Trouve $|3\vec u-\vec v|$ (au centième près).`, 7.81, "√(6² + 5²).", null, 0.01),
  num(S`Pour $\vec u$, $\vec v$ non colinéaires, trouve $s$ pour que $s\vec u+2\vec v$ soit colinéaire à $3\vec u+6\vec v$.`, 1, "su + 2v = (1/3)(3u + 6v)."),
  num(S`$G$ est le centre de gravité de $\triangle OAB$. Écris $\overrightarrow{OG}=s\vec a+t\vec b$ avec $\vec a=\overrightarrow{OA}$, $\vec b=\overrightarrow{OB}$, et donne $s$ (au centième près).`, 0.33, "OG = (a + b)/3.", null, 0.005),
  num(S`Dans le trapèze illustré, $\overrightarrow{AB}=\vec u$, $\overrightarrow{AD}=\vec v$ et $\overrightarrow{DC}=3\vec u$. En écrivant $\overrightarrow{BC}=m\vec u+n\vec v$, trouve $m$.`, 2, "BC = BA + AD + DC = −u + v + 3u.", vdoc({ view: { xmin: -0.6, xmax: 8, ymin: -0.8, ymax: 3.2 }, grid: false, axes: false, segs: [{ pts: [[2, 0], [7.5, 2.5], [1, 2.5]], color: "gray" }], arrows: [{ from: [0, 0], to: [2, 0], vl: "u", off: 16 }, { from: [0, 0], to: [1, 2.5], vl: "v", color: "blue", off: -16 }, { from: [1, 2.5], to: [7, 2.5], color: "violet", label: "3u", off: -14 }], points: [{ x: 0, y: 0, label: "A", dx: -14, dy: 14 }, { x: 2, y: 0, label: "B", dx: 6, dy: 14 }, { x: 7, y: 2.5, label: "C", dx: 8, dy: -4 }, { x: 1, y: 2.5, label: "D", dx: -16, dy: -4 }] })),
  num(S`$P$ est sur la droite $AB$, au-delà de $B$, avec $\overrightarrow{AP}=3\overrightarrow{AB}$. En écrivant $\overrightarrow{OP}=s\vec a+t\vec b$, trouve $s$.`, -2, "OP = a + 3(b − a)."),
  mc(S`$\vec u$ et $\vec v$ ne sont pas colinéaires et $a\vec u+b\vec v=\vec 0$. Que peux-tu conclure?`, S`$a=b=0$`, [S`$a=-b$`, S`$a=b$`, "rien"], "Sinon, l'un serait un multiple de l'autre."),
  num(S`Trouve $k$ pour que $2\vec u+k\vec v$ soit colinéaire à $6\vec u-9\vec v$ ($\vec u$, $\vec v$ non colinéaires).`, -3, "Multiplie par 1/3."),
  num(S`Dans $\triangle ABC$, $M$ et $N$ sont les points milieux de $AB$ et de $AC$, et $BC=14$. Trouve $MN$.`, 7, "MN = ½BC."),
  num(S`Dans le parallélogramme $ABCD$ (illustré), $\overrightarrow{AB}=\vec u$, $\overrightarrow{AD}=\vec v$, et $E$ est le point milieu de $DC$. En écrivant $\overrightarrow{AE}=s\vec u+t\vec v$, trouve $s$.`, 0.5, "AE = v + ½u.", vdoc({ view: { xmin: -0.6, xmax: 7.4, ymin: -0.8, ymax: 3.6 }, grid: false, axes: false, segs: [{ pts: [[4.5, 0], [6.3, 3], [1.8, 3]], color: "gray" }], arrows: [{ from: [0, 0], to: [4.5, 0], vl: "u", off: 16 }, { from: [0, 0], to: [1.8, 3], vl: "v", color: "blue", off: -16 }, { from: [0, 0], to: [4.05, 3], color: "red", label: "AE", off: 14 }], points: [{ x: 4.05, y: 3, label: "E", dx: -4, dy: -8 }, { x: 0, y: 0, label: "A", dx: -14, dy: 14 }] }), 0.001),
  num(S`$|\vec u|=6$. Le vecteur de même direction et de norme 15 est $k\vec u$. Trouve $k$.`, 2.5, "15 ÷ 6.", null, 0.001),
  tf(S`Si $3(\vec u-\vec v)=2(\vec u+\vec v)$, alors $\vec u=5\vec v$.`, true, "3u − 3v = 2u + 2v."),
  num(S`$P$ divise $AB$ de sorte que $AP:PB=3:2$, et $\overrightarrow{OP}=s\vec a+t\vec b$. Trouve $s$.`, 0.4, "OP = (2/5)a + (3/5)b.", null, 0.001),
  num(S`$G$ est le centre de gravité de $\triangle ABC$. Trouve $|\overrightarrow{GA}+\overrightarrow{GB}+\overrightarrow{GC}|$.`, 0, "Les trois vecteurs s'annulent au centre de gravité."),
  num(S`$\vec u$ et $\vec v$ sont des vecteurs unitaires perpendiculaires. Trouve $|3\vec u+4\vec v|$.`, 5, "√(9 + 16)."),
  num(S`Sur le quadrillage, $\vec u$ va de 1 vers la droite et de 2 vers le haut, et $\vec v$ va de 2 vers la droite et de 1 vers le haut. Le vecteur $\vec w$ (5 vers la droite, 4 vers le haut) est égal à $a\vec u+b\vec v$. Trouve $b$.`, 2, "a + 2b = 5 et 2a + b = 4.", vdoc({ view: { xmin: -0.5, xmax: 5.5, ymin: -0.5, ymax: 4.5 }, axes: false, arrows: [{ from: [0, 0], to: [1, 2], vl: "u", off: -16 }, { from: [0, 0], to: [2, 1], vl: "v", color: "blue", off: 16 }, { from: [0, 0], to: [5, 4], vl: "w", color: "red", off: -16 }] })),
  num(S`$|\vec v|=4$. Trouve $k$ pour que $k\vec v$ ait une norme de 10 et pointe dans le sens opposé à $\vec v$.`, -2.5, "k = −10/4.", null, 0.001),
  mc(S`Les vecteurs $\vec u$, $2\vec u$ et $-\frac13\vec u$ sont :`, "tous colinéaires", ["tous égaux", "tous perpendiculaires à u", "tous unitaires"], "Ce sont tous des multiples de u."),
  num(S`$\overrightarrow{OP}=0.7\vec a+0.3\vec b$, avec $P$ sur le segment $AB$. Trouve $\frac{AP}{PB}$ (au centième près).`, 0.43, "AP vaut 0.3 de AB, PB en vaut 0.7.", null, 0.005),
  num(S`Dans l'hexagone régulier illustré, $O$ est le centre, $\overrightarrow{OA}=\vec a$ et $\overrightarrow{OB}=\vec b$. En écrivant $\overrightarrow{OC}=s\vec a+t\vec b$, trouve $s$.`, -1, "OC = OB + BC et BC = AO = −a.", vdoc({ view: { xmin: -3.8, xmax: 3.8, ymin: -3.3, ymax: 3.3 }, grid: false, axes: false, segs: [{ pts: [...HEX, HEX[0]], color: "gray" }], arrows: [{ from: [0, 0], to: HEX[0], vl: "a", off: 16 }, { from: [0, 0], to: HEX[1], vl: "b", color: "blue", off: -16 }, { from: [0, 0], to: HEX[2], color: "red", label: "OC", off: -14 }], points: ["A", "B", "C", "D", "E", "F"].map((t, i) => ({ x: HEX[i][0], y: HEX[i][1], label: t, dx: i === 0 ? 8 : i === 3 ? -16 : 2, dy: i < 3 ? -8 : 18 })) })),
];
