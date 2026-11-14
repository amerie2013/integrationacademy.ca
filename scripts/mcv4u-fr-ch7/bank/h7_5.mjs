// 7.5 Le produit vectoriel et ses propriétés — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { vdoc, p3, axes3, merge } from "../../mcv4u-ch7/vecfig.mjs";

const S = String.raw;
const V3 = { view: { xmin: -3.8, xmax: 6, ymin: -2.8, ymax: 5.8 }, grid: false, axes: false };
export const TOPIC = "7.5 Le produit vectoriel et ses propriétés";
export const Q = [
  num(S`Trouve la composante en x du vecteur unitaire de même direction que $[1,2,-1]\times[3,0,1]$ (2 décimales).`, 0.27, "[2, −4, −6] ÷ √56.", null, 0.005),
  num("Trouve l'aire du triangle A(1, 0, 0), B(0, 2, 0), C(0, 0, 2) (2 décimales).", 2.45, "La moitié de |[4, 2, 2]|.", null, 0.01),
  num("Trouve l'aire du parallélogramme de sommets O, (2, 3, 0), (2, 4, 2) et (0, 1, 2) (illustré) (2 décimales).", 7.48, "|[2, 3, 0] × [0, 1, 2]| = |[6, −4, 2]| = √56.", vdoc(merge(V3, axes3(4.4), { polys: [{ pts: [p3(0, 0, 0), p3(2, 3, 0), p3(2, 4, 2), p3(0, 1, 2)], fill: "#ede9fe", stroke: "violet" }] })), 0.01),
  num(S`$|\vec a\times\vec b|=\vec a\cdot\vec b\ne0$. Trouve l'angle entre les vecteurs (en degrés).`, 45, "sin θ = cos θ."),
  num(S`Trouve $k\gt0$ tel que $|[k,0,0]\times[0,1,1]|=4\sqrt2$.`, 4, "[0, −k, k] a une norme de k√2."),
  tf(S`$\vec a\times(\vec b\times\vec c)$ est perpendiculaire à $\vec b\times\vec c$.`, true, "Tout produit vectoriel est perpendiculaire à ses deux facteurs."),
  num(S`Trouve $(\vec a\times\vec b)\cdot(\vec a\times\vec b)$ pour $\vec a=[1,0,0]$ et $\vec b=[1,1,0]$.`, 1, "a × b = [0, 0, 1]."),
  num("Trouve l'aire du triangle de sommets (2, 1, 1), (3, 2, 1) et (2, 2, 3).", 1.5, "La moitié de |[1, 1, 0] × [0, 1, 2]| = |[2, −2, 1]|.", null, 0.001),
  num("Trouve l'angle entre u = [1, 1, 0] et v = [0, 1, 1] (illustrés) à l'aide de l'un ou l'autre des produits (en degrés).", 60, "|u × v| = √3, u · v = 1, |u||v| = 2.", vdoc(merge(V3, axes3(4.4), { arrows: [{ from: [0, 0], to: p3(2.4, 2.4, 0), vl: "u", off: 16 }, { from: [0, 0], to: p3(0, 2.4, 2.4), vl: "v", color: "blue", off: -16 }] }))),
  mc(S`$\vec i\times(\vec i\times\vec j)=$`, S`$-\vec j$`, [S`$\vec 0$`, S`$\vec j$`, S`$\vec k$`], "i × k = −j."),
  num(S`Trouve $k$ pour que $[1,2,k]$ soit perpendiculaire à $[1,0,1]\times[0,1,0]$.`, 1, "[1, 0, 1] × [0, 1, 0] = [−1, 0, 1]."),
  num(S`$|\vec a\times\vec b|=2$. Trouve $|(2\vec a)\times(3\vec b)|$.`, 12, "6 × 2."),
  num(S`Trouve la composante en x de $[2,-1,3]\times[-4,2,-6]$.`, 0, "Les vecteurs sont colinéaires."),
  num("Un parallélogramme a pour diagonales [3, 1, 0] et [1, −1, 2]. Son aire vaut ½|d₁ × d₂|. Trouve-la (2 décimales).", 3.74, "d₁ × d₂ = [2, −6, −4].", null, 0.01),
  mc("Pour a = j et b = k (illustrés), dans quelle direction a × b pointe-t-il?", "l'axe des x positifs", ["l'axe des x négatifs", "l'axe des z positifs", "l'axe des y négatifs"], "j × k = i.", vdoc(merge(V3, axes3(4.4), { arrows: [{ from: [0, 0], to: p3(0, 2.6, 0), vl: "a", off: 16 }, { from: [0, 0], to: p3(0, 0, 2.6), vl: "b", color: "blue", off: -16 }] }))),
  num("Un vecteur de norme 3 est perpendiculaire à la fois à [1, 0, 0] et à [0, 1, 0], et sa composante en z est négative. Trouve cette composante.", -3, "C'est −3k."),
  tf(S`$|\vec a\times\vec b|\le|\vec a||\vec b|$ pour tous les vecteurs.`, true, "sin θ ≤ 1."),
  num(S`$|\vec a|=6$, $|\vec b|=7$ et $\vec a\cdot\vec b=21$. Trouve $|\vec a\times\vec b|$ (2 décimales).`, 36.37, "cos θ = ½, donc sin θ = √3/2.", null, 0.01),
  num(S`Trouve la composante en z de $(\vec i+\vec j)\times(\vec i-\vec j)$.`, -2, "−i × j + j × i = −2k."),
  num("Trouve l'aire du triangle de sommets O, B(3, 0, 0) et C(1, 2, 2) (illustré) (2 décimales).", 4.24, "La moitié de |[0, −6, 6]|.", vdoc(merge(V3, axes3(4.6), { polys: [{ pts: [p3(0, 0, 0), p3(3, 0, 0), p3(1, 2, 2)], fill: "#ede9fe", stroke: "violet" }], points: [{ x: p3(3, 0, 0)[0], y: p3(3, 0, 0)[1], label: "B", dx: -16, dy: 8 }, { x: p3(1, 2, 2)[0], y: p3(1, 2, 2)[1], label: "C", dx: 8, dy: -4 }] })), 0.01),
];
