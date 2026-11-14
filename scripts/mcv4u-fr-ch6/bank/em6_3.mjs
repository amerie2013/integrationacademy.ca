// 6.3 Multiplication d'un vecteur par un scalaire — 20 questions faciles + 20 moyennes
import { mc, num, tf, fill } from "./kit.mjs";
import { vdoc } from "../../mcv4u-ch6/vecfig.mjs";

const S = String.raw;
const easy = [
  num(S`$|\vec v|=1.2$. Trouve $|5\vec v|$.`, 6, "5 × 1.2.", null, 0.001),
  num(S`$|\vec v|=7$. Trouve $|-2\vec v|$.`, 14, "|−2| × 7."),
  mc(S`Comment $-3\vec v$ se compare-t-il à $\vec v$?`, "trois fois plus long, direction opposée", ["trois fois plus long, même direction", "trois fois plus court, direction opposée", "même longueur, direction opposée"], "k = −3."),
  tf(S`$2\vec v$ et $5\vec v$ sont colinéaires.`, true, "Les deux sont des multiples de v."),
  num(S`$|\vec v|=4$. Quel scalaire $k\gt0$ fait de $k\vec v$ un vecteur unitaire?`, 0.25, "1/4.", null, 0.001),
  mc(S`Simplifie $3\vec u+2\vec u$.`, S`$5\vec u$`, [S`$6\vec u$`, S`$5\vec u^2$`, S`$\vec u$`], "Regroupe les vecteurs semblables."),
  num(S`$\vec v$ a un relèvement de $060^\circ$. Donne le relèvement de $-4\vec v$.`, 240, "Scalaire négatif : ajoute 180°."),
  num(S`Dans $2(\vec u+\vec v)+3\vec u$, quel est le coefficient de $\vec u$?`, 5, "2 + 3."),
  fill("Des vecteurs qui sont des multiples scalaires l'un de l'autre sont dits ___.", ["colinéaires", "parallèles", "Colinéaires", "Parallèles", "colineaires", "paralleles", "collinear"], "Ils sont situés sur une même droite."),
  tf(S`$0\cdot\vec v=\vec 0$.`, true, "Longueur nulle."),
  num("Dans la figure, w est un multiple scalaire de v. Quel est ce scalaire?", 3, "w va de 3 vers la droite et de 3 vers le haut; v va de 1 et de 1.", vdoc({ view: { xmin: -0.5, xmax: 4, ymin: -0.5, ymax: 4 }, axes: false, arrows: [{ from: [0, 0], to: [1, 1], vl: "v", off: -16 }, { from: [0.6, -0.2], to: [3.6, 2.8], vl: "w", color: "red", off: 16 }] })),
  num(S`$|\vec v|=9$. Trouve $|0.5\vec v|$.`, 4.5, "La moitié de 9.", null, 0.001),
  mc(S`Lequel est un vecteur unitaire dans la direction de $\vec v$?`, S`$\frac{\vec v}{|\vec v|}$`, [S`$|\vec v|\vec v$`, S`$\vec v-1$`, S`$\frac{|\vec v|}{\vec v}$`], "Divise par la longueur."),
  num(S`Dans $4\vec u-6\vec u$, quel est le coefficient de $\vec u$?`, -2, "4 − 6."),
  tf(S`$|k\vec v|=k|\vec v|$ pour tout réel $k$.`, false, "C'est |k||v|; un k négatif donnerait une longueur négative."),
  num(S`Si $2\vec x=6\vec u$, alors $\vec x=k\vec u$. Trouve $k$.`, 3, "Divise par 2."),
  mc(S`$-(\vec u-\vec v)=$`, S`$\vec v-\vec u$`, [S`$\vec u+\vec v$`, S`$-\vec u-\vec v$`, S`$\vec u-\vec v$`], "Distribue le signe moins."),
  num(S`$|\vec v|=3.5$. Trouve $|-\vec v|$.`, 3.5, "Même longueur.", null, 0.001),
  num("Dans la figure, w = kv. Trouve k.", -0.5, "Deux fois plus court, direction opposée.", vdoc({ view: { xmin: -2.5, xmax: 4.5, ymin: -1.5, ymax: 2.6 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [4, 2], vl: "v", off: -16 }, { from: [0, -0.6], to: [-2, -1.6], vl: "w", color: "red", off: 16 }] }), 0.001),
  num(S`Dans $3(\vec u-2\vec v)$, quel est le coefficient de $\vec v$?`, -6, "3 × (−2)."),
];
const medium = [
  mc(S`Simplifie $2(3\vec u-\vec v)-(\vec u+4\vec v)$.`, S`$5\vec u-6\vec v$`, [S`$5\vec u-2\vec v$`, S`$7\vec u-6\vec v$`, S`$5\vec u+2\vec v$`], "6u − 2v − u − 4v."),
  num(S`Résous $4\vec x-\vec u=2\vec x+7\vec u$; la réponse est $\vec x=k\vec u$. Trouve $k$.`, 4, "2x = 8u."),
  num(S`$|\vec v|=2.4$. Trouve $|3\vec v|$.`, 7.2, "3 × 2.4.", null, 0.001),
  mc("Quelle paire de vecteurs est colinéaire?", S`$3\vec a-2\vec b$ et $-6\vec a+4\vec b$`, [S`$3\vec a-2\vec b$ et $6\vec a+4\vec b$`, S`$\vec a+\vec b$ et $\vec a-\vec b$`, S`$2\vec a$ et $2\vec b$`], "La première paire : k = −2."),
  num(S`$|\vec u|=0.25$. Trouve $k\gt0$ pour que $k\vec u$ soit un vecteur unitaire.`, 4, "1 ÷ 0.25."),
  num(S`$M$ est le point milieu de $AB$; $\overrightarrow{OM}=s\vec a+t\vec b$, où $\vec a=\overrightarrow{OA}$ et $\vec b=\overrightarrow{OB}$. Trouve $s$.`, 0.5, "OM = ½(a + b).", null, 0.001),
  num(S`$P$ est sur $AB$, avec $AP:PB=2:3$, et $\overrightarrow{OP}=s\vec a+t\vec b$. Trouve $t$.`, 0.4, "OP = (3/5)a + (2/5)b.", null, 0.001),
  tf(S`Si $\vec u=k\vec v$ avec $k\lt0$, alors $\vec u$ et $\vec v$ pointent dans des sens opposés.`, true, "Les scalaires négatifs inversent le sens."),
  num(S`$\vec u$ et $\vec v$ pointent dans le même sens, $|\vec u|=3$, $|\vec v|=4$. Trouve $|2\vec u+\vec v|$.`, 10, "6 + 4."),
  num(S`$\vec u$ et $\vec v$ pointent dans des sens opposés, $|\vec u|=2$, $|\vec v|=1$. Trouve $|\vec u-3\vec v|$.`, 5, "u et −3v pointent dans le même sens : 2 + 3."),
  num(S`Sur le quadrillage, $\vec u$ va de 2 vers la droite et de 1 vers le haut, et $\vec v$ va de 2 vers le haut. Trouve $|\vec u+0.5\vec v|$ (au centième près).`, 2.83, "u + 0.5v = (2, 2).", vdoc({ view: { xmin: -0.5, xmax: 3, ymin: -0.5, ymax: 3 }, axes: false, arrows: [{ from: [0, 0], to: [2, 1], vl: "u", off: 16 }, { from: [0, 0], to: [0, 2], vl: "v", color: "blue", off: -16 }] }), 0.01),
  mc(S`$2(\vec u+\vec v)-2\vec u=$`, S`$2\vec v$`, [S`$2\vec u+2\vec v$`, S`$\vec v$`, S`$4\vec u+2\vec v$`], "Les termes en u s'annulent."),
  num(S`Trouve $t$ si $(t-1)\vec u=3\vec u$ pour un vecteur $\vec u$ non nul.`, 4, "t − 1 = 3."),
  num(S`Pour $\vec u$, $\vec v$ non colinéaires : $s(\vec u+\vec v)=5\vec u+5\vec v$. Trouve $s$.`, 5, "Associe les coefficients."),
  num(S`$\overrightarrow{AB}=2\vec a-\vec b$ et $\overrightarrow{BC}=6\vec a-3\vec b$. Alors $\overrightarrow{BC}=k\overrightarrow{AB}$. Trouve $k$.`, 3, "6a − 3b = 3(2a − b)."),
  mc(S`Les points $A$, $B$, $C$ sont colinéaires exactement lorsque :`, S`$\overrightarrow{AB}=k\overrightarrow{AC}$ pour un certain scalaire $k$`, [S`$|\overrightarrow{AB}|=|\overrightarrow{AC}|$`, S`$\overrightarrow{AB}+\overrightarrow{AC}=\vec 0$`, S`$\overrightarrow{AB}\perp\overrightarrow{AC}$`], "Des vecteurs parallèles passant par A."),
  num(S`$|\vec v|=18$. Trouve $|-0.25\vec v|$.`, 4.5, "0.25 × 18.", null, 0.001),
  num("A, B et C sont sur une droite avec AB : BC = 1 : 2 (illustré). AC = k·AB. Trouve k.", 3, "AC = AB + BC = 3AB.", vdoc({ view: { xmin: -0.5, xmax: 9.5, ymin: -0.8, ymax: 1.4 }, grid: false, axes: false, arrows: [{ from: [0, 0], to: [3, 0], vl: "AB", off: -16 }, { from: [3, 0], to: [9, 0], color: "blue", label: "BC = 2AB", off: -14 }], points: [{ x: 0, y: 0, label: "A", dx: -4, dy: 18 }, { x: 3, y: 0, label: "B", dx: -4, dy: 18 }, { x: 9, y: 0, label: "C", dx: -4, dy: 18 }] })),
  num(S`$\vec u\perp\vec v$, $|\vec u|=5$, $|\vec v|=2$. Trouve $|2\vec u-3\vec v|$ (au centième près).`, 11.66, "√(10² + 6²).", null, 0.01),
  tf(S`$\vec u+\vec u+\vec u=3\vec u$.`, true, "Addition répétée."),
];
export { easy as E, medium as M };
