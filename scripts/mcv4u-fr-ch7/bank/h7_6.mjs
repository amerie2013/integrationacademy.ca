// 7.6 Applications du produit scalaire et du produit vectoriel — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { vdoc, pol, p3, axes3, merge } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
const add3 = (...v) => v.reduce((s, a) => [s[0] + a[0], s[1] + a[1], s[2] + a[2]], [0, 0, 0]);
const ppd = (a, b, c) => {
  const k = [[0, 0, 0], a, b, c, add3(a, b), add3(a, c), add3(b, c), add3(a, b, c)];
  return [[0, 1], [0, 2], [0, 3], [1, 4], [1, 5], [2, 4], [2, 6], [3, 5], [3, 6], [4, 7], [5, 7], [6, 7]].map(([i, j]) => ({ pts: [p3(...k[i]), p3(...k[j])], color: "gray", w: 1.3 }));
};
export const TOPIC = "7.6 Applications du produit scalaire et du produit vectoriel";
export const Q = [
  num("Un boulon exige un moment de force de 30 N·m. Quelle est la plus petite force qui peut le produire avec une clé de 0.3 m (N)?", 100, "Tirer à 90° : 30 ÷ 0.3."),
  num("Un boulon exige un moment de force de 30 N·m avec une clé de 0.3 m, la force formant un angle de 40° avec le manche. Quelle force faut-il (N, 2 décimales)?", 155.57, "30 ÷ (0.3 sin 40°).", null, 0.01),
  num("Trouve le volume du parallélépipède engendré par a = [2, 1, 0], b = [0, 2, 1], c = [1, 0, 2] (illustré).", 9, "b × c = [4, 1, −2]; a · = 9.", vdoc(merge(V3, axes3(4.6), { segs: ppd([2, 1, 0], [0, 2, 1], [1, 0, 2]) }))),
  num("Pour le parallélépipède engendré par a = [2, 1, 0], b = [0, 2, 1], c = [1, 0, 2], trouve sa hauteur au-dessus de la face engendrée par b et c (2 décimales).", 1.96, "9 ÷ |b × c| = 9 ÷ √21.", null, 0.01),
  num(S`Trouve $k\gt0$ pour que la boîte engendrée par $[1,0,0]$, $[0,2,0]$, $[0,0,k]$ ait un volume de 10.`, 5, "2k = 10."),
  num(S`Utilise $|\overrightarrow{OP}\times\vec i|$ pour trouver la distance de $P(2,3,4)$ à l'axe des x.`, 5, "|[0, 4, −3]|."),
  mc(S`Si $\vec a\cdot(\vec b\times\vec c)=0$ pour des vecteurs non nuls, alors :`, "a, b et c sont coplanaires", ["a, b et c sont perpendiculaires deux à deux", "a = b = c", "b et c sont perpendiculaires"], "La boîte n'a aucun volume."),
  num("Une force constante déplace un objet le long d'un trajet fermé qui le ramène à son point de départ. Trouve le travail total qu'elle effectue.", 0, "Le déplacement total est nul."),
  num("Trouve la norme de τ = r × F pour r = [0.3, 0.4, 0] m et F = [0, 0, 50] N (illustré) (N·m).", 25, "[20, −15, 0].", vdoc(merge(V3, axes3(4.4), { arrows: [{ from: [0, 0], to: p3(1.8, 2.4, 0), vl: "r", off: 16 }, { from: p3(1.8, 2.4, 0), to: p3(1.8, 2.4, 2.4), vl: "F", color: "red", off: -16 }] }))),
  tf(S`$\vec a\cdot(\vec b\times\vec c)=\vec b\cdot(\vec c\times\vec a)$.`, true, "Une permutation circulaire donne le même volume et le même signe."),
  num("Trouve l'aire du triangle de sommets (1, 1, 1), (3, 1, 2), (1, 4, 1) (2 décimales).", 3.35, "La moitié de |[2, 0, 1] × [0, 3, 0]| = |[−3, 0, 6]|.", null, 0.01),
  num(S`Trouve la composante en z de $\overrightarrow{AB}\times\overrightarrow{AC}$ pour $A(0,0,0)$, $B(1,2,0)$, $C(2,0,1)$, un vecteur perpendiculaire à leur plan.`, -4, "[1, 2, 0] × [2, 0, 1] = [2, −1, −4]."),
  num("Trouve le volume du tétraèdre de sommets O, (1, 0, 0), (0, 2, 0), (0, 0, 3).", 1, "Le sixième de 1 × 2 × 3."),
  num("Une force de 40 N agit à 60° d'un déplacement de 5 m. Trouve le travail (J).", 100, "40 × 5 × ½."),
  num("Trouve le volume du parallélépipède engendré par a = [3, 0, 0], b = [1, 2, 0], c = [1, 1, 2] (illustré).", 12, "b × c = [4, −2, −1]; a · = 12.", vdoc(merge(V3, axes3(4.6), { segs: ppd([3, 0, 0], [1, 2, 0], [1, 1, 2]) }))),
  num("Selon quel angle aigu par rapport au manche une force donne-t-elle la moitié de son plus grand moment de force possible (degrés)?", 30, "sin θ = ½."),
  tf(S`$\vec r\times\vec F=\vec F\times\vec r$.`, false, "Inverser l'ordre inverse le sens du vecteur moment de force."),
  num(S`Trouve $k$ pour que $[k,1,0]$, $[0,1,1]$ et $[1,0,1]$ soient coplanaires.`, -1, "[0, 1, 1] × [1, 0, 1] = [1, 1, −1]; k + 1 = 0."),
  mc("Pour une force fixe, le moment de force sur une clé est le plus grand lorsque la force est appliquée :", "le plus loin possible du boulon, perpendiculairement au manche", ["près du boulon, le long du manche", "n'importe où, à 45°", "sur le boulon lui-même"], "|τ| = |r||F| sin θ."),
  num("Trouve l'aire du triangle O, B(4, 0, 0), C(4, 3, 5) (illustré) (2 décimales).", 11.66, "La moitié de |[0, −20, 12]|.", vdoc(merge(V3, axes3(4.8), { polys: [{ pts: [p3(0, 0, 0), p3(4, 0, 0), p3(4, 3, 5)], fill: "#ede9fe", stroke: "violet" }], points: [{ x: p3(4, 0, 0)[0], y: p3(4, 0, 0)[1], label: "B", dx: -16, dy: 8 }, { x: p3(4, 3, 5)[0], y: p3(4, 3, 5)[1], label: "C", dx: 8, dy: -4 }] }, { view: { xmin: -4, xmax: 6, ymin: -2.8, ymax: 6 } })), 0.01),
];
