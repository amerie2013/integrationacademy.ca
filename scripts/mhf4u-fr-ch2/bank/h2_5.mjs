// 2.5 Résolution graphique d'inéquations polynomiales — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "2.5 Résolution graphique d'inéquations polynomiales";
export const Q = [
  mc(String.raw`Résous $x^3-3x^2\ge-4$.`, String.raw`$x\ge-1$`, [String.raw`$x\le-1$`, String.raw`$-1\le x\le2$`, String.raw`$x\ge2$`], "x³ − 3x² + 4 = (x + 1)(x − 2)² ≥ 0 : le graphique touche l'axe en 2.", graph((x) => x ** 3 - 3 * x * x + 4, { xmin: -2, xmax: 3.5, ymin: -6, ymax: 8 }, [P(-1, 0), P(2, 0)])),
  num(String.raw`Combien d'entiers vérifient $x^4-10x^2+9\lt0$?`, 2, "1 < x² < 9 : x = ±2."),
  num(String.raw`Trouve la plus petite borne positive de $x^3-6x+2>0$ (2 décimales).`, 0.34, "Technologie : zéros ≈ −2.60, 0.34, 2.26.", null, 0.01),
  mc(String.raw`Résous $x^3\ge4x^2$.`, String.raw`$\{0\}\cup[4,\infty)$`, [String.raw`$[4,\infty)$`, String.raw`$[0,4]$`, String.raw`$(-\infty,0]\cup[4,\infty)$`], "x²(x − 4) ≥ 0."),
  num("Une boîte sans couvercle fabriquée à partir d'une feuille de 12 sur 12 a un volume V = x(12 − 2x)². Pour combien de valeurs de x dans 0 < x < 6 a-t-on V ≥ 128?", 1, "V − 128 = 4(x − 2)²(x − 8) ≥ 0 seulement en x = 2 dans le domaine (le volume maximal).", graph((x) => x * (12 - 2 * x) ** 2, { xmin: 0, xmax: 6.2, ymin: 0, ymax: 150 }, [P(2, 128)], { a: 0, b: 6, more: [{ f: () => 128, color: "green" }], step: { x: 1, y: 20 } })),
  tf(String.raw`La solution de $(x-1)^2(x-2)^2>0$ est l'ensemble des nombres réels sauf 1 et 2.`, true, "Un produit de carrés est positif, sauf à ses zéros."),
  num(String.raw`Quel est le plus petit entier qui vérifie $x^3-x^2-2x>0$?`, 3, "x(x − 2)(x + 1) > 0 : −1 < x < 0 (aucun entier) ou x > 2."),
  mc("Utilise les graphiques de y = x³ et de y = 2x² + 3x pour résoudre x³ ≤ 2x² + 3x.", String.raw`$(-\infty,-1]\cup[0,3]$`, [String.raw`$[-1,0]\cup[3,\infty)$`, String.raw`$[-1,3]$`, String.raw`$(-\infty,0]$`], "x(x − 3)(x + 1) ≤ 0.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -10, ymax: 40 }, curves: [{ f: (x) => x ** 3, color: "violet" }, { f: (x) => 2 * x * x + 3 * x, color: "green" }], step: { x: 1, y: 5 } })),
  num(String.raw`Trouve la longueur de l'intervalle borné dans la solution de $(x-1)(x-4)(x-6)\lt0$.`, 2, "x < 1 ou 4 < x < 6."),
  mc(String.raw`Pour quelles valeurs de $k$ a-t-on $x^2+k>0$ pour tout réel $x$?`, String.raw`$k>0$`, [String.raw`$k\ge0$`, String.raw`$k\lt0$`, "toute valeur de k"], "La valeur minimale est k, en x = 0."),
  num("Quel est le plus grand nombre d'intervalles séparés qui peuvent former la solution d'une inéquation de degré 4 f(x) > 0?", 3, "Quatre zéros partagent la droite en 5 intervalles; au plus 3 sont positifs, en alternance."),
  tf("Toute inéquation de degré 3 f(x) > 0 a au moins une solution.", true, "Une des extrémités du graphique tend vers +∞."),
  num("Pour la fonction de degré 3 illustrée (a > 0), combien d'entiers de [−5, 5] vérifient P(x) ≤ 0?", 7, "P ≤ 0 pour x ≤ −3 ou −1 ≤ x ≤ 2 : −5, −4, −3, −1, 0, 1, 2.", graph((x) => 0.25 * (x + 3) * (x + 1) * (x - 2), { xmin: -5, xmax: 4, ymin: -6, ymax: 6 }, [P(-3, 0), P(-1, 0), P(2, 0)])),
  mc(String.raw`Résous $(x^2-4)(x^2+1)\ge0$.`, String.raw`$(-\infty,-2]\cup[2,\infty)$`, [String.raw`$[-2,2]$`, String.raw`tout réel x`, String.raw`$[2,\infty)$`], "x² + 1 > 0, donc le signe est celui de x² − 4."),
  num(String.raw`Trouve la plus grande borne de $x^3-6x+2\lt0$ (2 décimales).`, 2.26, "Technologie : zéros ≈ −2.60, 0.34, 2.26.", null, 0.01),
  mc(String.raw`Pour $x>0$, résous $x^3-9x\lt0$.`, String.raw`$0\lt x\lt3$`, [String.raw`$x>3$`, String.raw`$-3\lt x\lt3$`, String.raw`$x\lt3$`], "x(x − 3)(x + 3) < 0 avec x > 0."),
  num(String.raw`Pour $x\ge0$, combien d'entiers vérifient $(x-1)^2(x-5)\lt0$?`, 4, "x < 5 avec x ≠ 1 : 0, 2, 3, 4."),
  mc(String.raw`Quelle inéquation a pour solution $[-2,1]\cup[3,\infty)$?`, String.raw`$(x+2)(x-1)(x-3)\ge0$`, [String.raw`$(x+2)(x-1)(x-3)\le0$`, String.raw`$(x-2)(x+1)(x+3)\ge0$`, String.raw`$(x+2)(x-1)(x-3)>0$`], "Degré 3 avec a > 0 : −, +, −, + avec les bornes incluses."),
  num(String.raw`Quel est le plus grand entier tel que $-x^3+8>0$?`, 1, "x³ < 8 ⇔ x < 2."),
  num(String.raw`Trouve la somme des solutions entières de $x^2(x-3)(x+3)\le0$.`, 0, "[−3, 3] : les entiers s'annulent deux à deux."),
];
