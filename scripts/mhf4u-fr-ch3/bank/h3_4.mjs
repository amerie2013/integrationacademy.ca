// 3.4 Résolution d'équations et d'inéquations rationnelles — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { RG, P, planeDoc, rat } from "./fig.mjs";
const S = String.raw;
const V = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const TOPIC = "3.4 Résolution d'équations et d'inéquations rationnelles";
export const Q = [
  mc(S`Résous $\dfrac1{x-2}+\dfrac3{x+2}=1$.`, S`$x=0$ ou $x=4$`, [S`$x=2$ ou $x=-2$`, S`$x=4$ seulement`, "aucune solution"], "x + 2 + 3x − 6 = x² − 4 donne x² − 4x = 0."),
  mc(S`Résous $\dfrac{2x}{x-1}-\dfrac{3}{x+1}=2$.`, S`$x=5$`, [S`$x=-5$`, S`$x=1$`, "aucune solution"], "2x(x + 1) − 3(x − 1) = 2(x² − 1) donne −x + 3 = −2."),
  num(S`Trouve la solution positive de $\dfrac3{x}+\dfrac2{x+1}=2$ (2 décimales).`, 2.19, "2x² − 3x − 3 = 0 donne (3 + √33)/4 ≈ 2.19.", null, 0.01),
  mc(S`Résous $\dfrac{x^2-2x-8}{x+1}\ge0$.`, S`$[-2,-1)\cup[4,\infty)$`, [S`$(-\infty,-2]\cup(-1,4]$`, S`$[-2,4]$`, S`$[4,\infty)$`], "(x − 4)(x + 2)/(x + 1) : signes −, +, −, +."),
  mc(S`Résous $\dfrac{x+2}{x^2-9}\lt0$.`, S`$(-\infty,-3)\cup(-2,3)$`, [S`$(-3,-2)\cup(3,\infty)$`, S`$(-2,3)$`, S`$(-3,3)$`], "Valeurs critiques −3, −2, 3 : signes −, +, −, +."),
  mc(S`Résous $\dfrac1{x+1}\gt\dfrac1{x-2}$.`, S`$-1\lt x\lt2$`, [S`$x\lt-1$ ou $x>2$`, S`$x>2$`, "tout x réel"], "La différence vaut −3/((x + 1)(x − 2)), qui est positive quand (x + 1)(x − 2) < 0."),
  mc(S`Résous $\dfrac{x}{x-2}\ge\dfrac{3}{x-2}$.`, S`$x\lt2$ ou $x\ge3$`, [S`$2\lt x\le3$`, S`$x\ge3$`, S`$x\gt2$`], "(x − 3)/(x − 2) ≥ 0."),
  mc(S`Résous $\dfrac{x-1}{x+1}\le\dfrac{x+1}{x-1}$.`, S`$-1\lt x\le0$ ou $x>1$`, [S`$x\lt-1$ ou $0\le x\lt1$`, S`$x\le0$`, S`$-1\lt x\lt1$`], "La différence vaut −4x/((x + 1)(x − 1)) ≤ 0, donc x/((x + 1)(x − 1)) ≥ 0 : signes −, +, −, +."),
  num(S`Combien de solutions réelles $\dfrac1{x-1}=x-1$ a-t-elle?`, 2, "(x − 1)² = 1."),
  num(S`Combien de solutions réelles $\dfrac1{x^2+1}=x^2+1$ a-t-elle?`, 1, "(x² + 1)² = 1 donne seulement x = 0."),
  num(S`Pour quelle valeur de $k$ l'équation $\dfrac{x+k}{x-3}=2$ n'a-t-elle aucune solution?`, -3, "x + k = 2x − 6 donne x = k + 6; x = 3 quand k = −3."),
  mc(S`Pour quelle valeur de $k$ l'équation $x+\dfrac kx=4$ a-t-elle exactement une solution réelle?`, S`$k=4$`, [S`$k=2$`, S`$k=-4$`, S`$k=16$`], "x² − 4x + k = 0, discriminant 16 − 4k = 0."),
  mc("À partir des graphiques de y = 6/x et de y = x + 1, résous 6/x ≤ x + 1.", S`$-3\le x\lt0$ ou $x\ge2$`, [S`$x\le-3$ ou $0\lt x\le2$`, S`$x\ge2$`, S`$-3\le x\le2$`], "Ils se rencontrent en (2, 3) et en (−3, −2).", planeDoc({ view: V, curves: [...rat((x) => 6 / x, [0], V), { f: (x) => x + 1, color: "green" }], points: [P(2, 3), P(-3, -2)], step: { x: 1, y: 1 } })),
  mc("Utilise le graphique pour résoudre f(x) > 3.", S`$1\lt x\lt2$`, [S`$x>2$`, S`$x\lt1$`, S`$x\lt2$`], "La branche de droite est au-dessus de y = 3 jusqu'à x = 2.", planeDoc({ view: V, curves: [...rat((x) => 3 / (x - 1), [1], V), { f: () => 3, color: "green" }], points: [P(2, 3)], step: { x: 1, y: 1 } })),
  mc("Le graphique représente y = (x + 1)(x − 3)/(x − 1). Résous y ≤ 0.", S`$(-\infty,-1]\cup(1,3]$`, [S`$[-1,1)\cup[3,\infty)$`, S`$[-1,3]$`, S`$(1,3]$`], "Sous l'axe à gauche de −1 et entre 1 et 3.", RG((x) => (x + 1) * (x - 3) / (x - 1), [1], { xmin: -5, xmax: 7, ymin: -8, ymax: 8 }, null, [P(-1, 0), P(3, 0)])),
  mc("Le graphique a l'abscisse à l'origine −2 et l'asymptote x = 4. Quelle inéquation a la solution [−2, 4)?", S`$\dfrac{x+2}{x-4}\le0$`, [S`$\dfrac{x+2}{x-4}\ge0$`, S`$\dfrac{x-2}{x+4}\le0$`, S`$\dfrac{x+2}{x-4}\lt0$`], "[−2, 4) : sous l'axe, zéro inclus, asymptote exclue.", RG((x) => (x + 2) / (x - 4), [4], { xmin: -8, xmax: 10, ymin: -8, ymax: 8 }, 1, [P(-2, 0)])),
  tf(S`Multiplier $\dfrac1x\lt1$ par $x$ donne la bonne solution, $x>1$.`, false, "La solution complète comprend aussi x < 0."),
  num(S`Trouve la somme de toutes les solutions de $\dfrac{x}{x-3}=\dfrac{9}{x(x-3)}$.`, -3, "x² = 9; x = 3 est rejetée, il reste x = −3."),
  num(S`Combien d'entiers vérifient $\dfrac{x^2-16}{x^2+1}\lt0$?`, 7, "|x| < 4 : de −3 à 3."),
  mc(S`Résous $\dfrac{x^2+x+1}{x-2}>0$.`, S`$x>2$`, [S`$x\lt2$`, S`$x\ne2$`, "tout x réel"], "Le numérateur est toujours positif."),
];
