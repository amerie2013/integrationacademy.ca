// 6.1 La fonction exponentielle et son inverse — 20 questions difficiles (miroir de ../../mhf4u-ch6/bank/h6_1.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

const lg = (b) => (x) => Math.log(x) / Math.log(b);
const YX = { m: 1, b: 0, color: "gray", dash: true };

export const TOPIC = "6.1 La fonction exponentielle et son inverse";
export const Q = [
  num(String.raw`Trouve l'abscisse à l'origine de l'inverse de $f(x)=2\cdot4^x-8$.`, -6, "f(0) = 2 − 8 = −6, donc l'inverse passe par (−6, 0)."),
  num(String.raw`Trouve l'ordonnée à l'origine de l'inverse de $f(x)=2\cdot4^x-8$.`, 1, "f(x) = 0 → 4ˣ = 4 → x = 1, donc l'inverse passe par (0, 1)."),
  num(String.raw`Le domaine de l'inverse de $y=-5\cdot2^x+10$ est $x\lt c$. Trouve $c$.`, 10, "L'image de y = −5·2ˣ + 10 est y < 10."),
  num(String.raw`$y=b^x$ ($b>1$) rencontre son inverse en $(5,5)$. Trouve $b$ au millième près.`, 1.380, "b⁵ = 5 → b = 5^(1/5) ≈ 1.380.", null, 0.001),
  num(String.raw`Une population compte $P=500\cdot3^t$ individus ($t$ en années). Utilise l'inverse pour trouver $t$ lorsque $P=4500$.`, 2, "3ᵗ = 4500/500 = 9."),
  num(String.raw`$y=b^x$ passe par $(-3,8)$. Trouve la valeur de y sur son inverse lorsque $x=32$.`, -5, "b⁻³ = 8 → b = ½; (½)ʸ = 32 → y = −5."),
  num(String.raw`$g$ est l'inverse de $f(x)=4^x$. Trouve $g(64)$.`, 3, "g(64) est l'exposant tel que 4ʸ = 64."),
  num("Le graphique de f(x) = 3·2ˣ − 4 est illustré. Trouve l'abscisse à l'origine de son inverse.", -1, "f(0) = 3 − 4 = −1, donc l'inverse passe par (−1, 0).", planeDoc({ view: { xmin: -5, xmax: 3, ymin: -5, ymax: 8 }, curves: [{ f: (x) => 3 * 2 ** x - 4, color: "violet" }], lines: [{ m: 0, b: -4, color: "red", dash: true }], step: { x: 1, y: 1 } })),
  tf(String.raw`Les graphiques de $y=3^x$ et de son inverse ne se rencontrent jamais.`, true, "Tout point commun serait sur y = x, mais 3ˣ > x pour tout x."),
  mc(String.raw`Pour quelle base $y=b^x$ rencontre-t-elle son inverse?`, String.raw`$b=1.2$`, [String.raw`$b=2$`, String.raw`$b=3$`, String.raw`$b=10$`], "1.2¹ = 1.2 > 1, mais 1.2² = 1.44 < 2, donc 1.2ˣ croise y = x; les autres bases restent au-dessus de y = x."),
  num("Le graphique montre f(x) = 4ˣ (en bleu), son inverse (en violet) et un point indiqué sur f. Trouve la valeur de y sur l'inverse lorsque x = 8.", 1.5, "4^1.5 = 8, donc (1.5, 8) appartient à f et (8, 1.5) appartient à l'inverse.", planeDoc({ view: { xmin: -2, xmax: 9, ymin: -2, ymax: 9 }, lines: [YX], curves: [{ f: (x) => 4 ** x, color: "blue" }, { f: lg(4), a: 0.01, color: "violet" }], points: [P(1.5, 8)], step: { x: 1, y: 1 } }), 0.0001),
  num(String.raw`Trouve la valeur de y sur l'inverse de $f(x)=3^x+3^{x+1}$ lorsque $x=36$.`, 2, "3ˣ + 3·3ˣ = 4·3ˣ; 4·3ʸ = 36 → 3ʸ = 9."),
  num(String.raw`Trouve la valeur de y sur l'inverse de $y=2^{2x}$ lorsque $x=64$.`, 3, "2^(2y) = 4ʸ = 64."),
  ms("Choisis toutes les fonctions dont l'inverse est une fonction.", [String.raw`$y=2^x$`, String.raw`$y=x^2$`, String.raw`$y=0.3^x$`, String.raw`$y=1^x$`, String.raw`$y=-3^x$`], [0, 2, 4], "x² et 1ˣ échouent au test de la droite horizontale; les exponentielles (et leurs réflexions) le réussissent."),
  num(String.raw`$g$ est l'inverse de $f(x)=3^x-1$ et $g(a)=3$. Trouve $a$.`, 26, "g(a) = 3 signifie f(3) = a : 27 − 1."),
  num("Le graphique de f(x) = bˣ − 3 passe par le point indiqué. Trouve la valeur de y sur l'inverse de f lorsque x = 61.", 3, "b² − 3 = 13 → b = 4; 4ʸ − 3 = 61 → 4ʸ = 64.", graph((x) => 4 ** x - 3, { xmin: -3, xmax: 2.5, ymin: -4, ymax: 16 }, [P(2, 13)], { lines: [{ m: 0, b: -3, color: "red", dash: true }], step: { x: 0.5, y: 2 } })),
  mc(String.raw`$y=b^{x-2}$ est $y=b^x$ translatée de 2 vers la droite. Quel est le lien entre son inverse et l'inverse de $y=b^x$?`, "translatée de 2 vers le haut", ["translatée de 2 vers la droite", "translatée de 2 vers le bas", "translatée de 2 vers la gauche"], "Échange : x = b^(y − 2), donc y − 2 est l'ancienne inverse : une translation horizontale devient verticale."),
  num("Le graphique montre l'inverse de y = 2ˣ + k avec son asymptote verticale en pointillés. Trouve k.", 3, "L'asymptote verticale x = 3 de l'inverse provient de y = 3, donc k = 3.", planeDoc({ view: { xmin: -1, xmax: 12, ymin: -4, ymax: 5 }, vlines: [{ x: 3, color: "red", dash: true }], curves: [{ f: (x) => lg(2)(x - 3), a: 3.01, color: "violet" }], points: [P(4, 0), P(7, 2)], step: { x: 1, y: 1 } })),
  tf(String.raw`L'inverse de $y=\left(\tfrac12\right)^x$ est l'inverse de $y=2^x$ réfléchie dans l'axe des x.`, true, "x = (½)ʸ = 2^(−y), donc −y est l'inverse de 2ˣ : une réflexion dans l'axe des x."),
  mc("Le graphique montre y = 0.5ˣ, son inverse et la droite y = x. Combien de points les deux courbes ont-elles en commun?", "1", ["0", "2", "3"], "Les deux sont décroissantes et se croisent une seule fois, sur y = x.", planeDoc({ view: { xmin: -3, xmax: 5, ymin: -3, ymax: 5 }, lines: [YX], curves: [{ f: (x) => 0.5 ** x, color: "blue" }, { f: lg(0.5), a: 0.01, color: "violet" }], step: { x: 1, y: 1 } })),
];
