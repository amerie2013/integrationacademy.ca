import { FIG } from "../../mhf4u-bank-figures/figs.mjs";
// 2.4 Familles de fonctions polynomiales — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

export const TOPIC = "2.4 Familles de fonctions polynomiales";
export const Q = [
  num(String.raw`Une fonction de degré 4 a pour zéros $\pm2$ et un zéro double en 1, et passe par $(3,20)$. Trouve son ordonnée à l'origine.`, -4, "k(x² − 4)(x − 1)² : k(5)(4) = 20 → k = 1; f(0) = (−4)(1)."),
  num(String.raw`Trouve $k$ pour que $y=k(x^2-2x-2)(x-3)$ passe par $(1,6)$.`, 1, "k(−3)(−2) = 6k."),
  num("La fonction de degré 4 illustrée touche l'axe des x en −1 et en 2 et a une ordonnée à l'origine de 8. Trouve f(3).", 32, "k(x + 1)²(x − 2)² : 4k = 8 → k = 2; f(3) = 2(16)(1).", graph((x) => 2 * (x + 1) ** 2 * (x - 2) ** 2, { xmin: -2, xmax: 3, ymin: -2, ymax: 14 }, [P(0, 8)], { step: { x: 0.5, y: 2 } })),
  num(String.raw`Le membre de $y=k(x-2)(x+1)(x-4)$ qui passe par $(0,8)$ passe aussi par $(3,y_0)$. Trouve $y_0$.`, -4, "8k = 8 → k = 1; f(3) = (1)(4)(−1)."),
  mc(String.raw`Quelle fonction de degré 3 a pour zéros $1$ et $1\pm\sqrt2$ et une ordonnée à l'origine de 1?`, String.raw`$y=(x-1)(x^2-2x-1)$`, [String.raw`$y=-(x-1)(x^2-2x-1)$`, String.raw`$y=(x+1)(x^2+2x-1)$`, String.raw`$y=(x-1)(x^2-2x+1)$`], "(x − 1)² − 2 = x² − 2x − 1; f(0) = k(−1)(−1) = k."),
  num(String.raw`Trouve $k$ pour que le membre de $y=k(x-1)(x+2)(x-3)$ vérifie $f(-1)=-16$.`, -2, "k(−2)(1)(−4) = 8k."),
  num("La fonction de degré 3 illustrée s'aplatit en coupant l'axe en x = 1 et passe par (2, 3). Trouve son ordonnée à l'origine.", -3, "k(x − 1)³ avec k = 3; f(0) = −3.", graph((x) => 3 * (x - 1) ** 3, { xmin: -0.5, xmax: 2.5, ymin: -6, ymax: 6 }, [P(1, 0), P(2, 3)], { step: { x: 0.5, y: 1 } })),
  tf("Il existe exactement une fonction de degré 3 ayant pour zéros 1, 2, 3 et une ordonnée à l'origine de 0.", false, "Chaque membre a f(0) = −6k ≠ 0, donc il n'y en a aucune."),
  num(String.raw`Quel est le plus petit entier positif $k$ pour lequel $y=k(x+3)(x-1)(x-2)$ a une ordonnée à l'origine supérieure à 20?`, 4, "f(0) = 6k > 20."),
  num(String.raw`Des membres de $y=k(x-1)(x+1)$ passent par $(2,3)$ et par $(2,-3)$. Trouve la somme des deux valeurs de $k$.`, 0, "3k = ±3."),
  mc("La fonction de degré 3 illustrée passe par (1, 6). Quelle est son équation?", String.raw`$y=-x(x+2)(x-3)$`, [String.raw`$y=x(x+2)(x-3)$`, String.raw`$y=-x(x-2)(x+3)$`, String.raw`$y=-2x(x+2)(x-3)$`], "Zéros −2, 0, 3; en (1, 6) : k(1)(3)(−2) = 6 → k = −1.", graph((x) => -x * (x + 2) * (x - 3), { xmin: -3, xmax: 4, ymin: -12, ymax: 14 }, [P(1, 6)], { step: { x: 1, y: 2 } })),
  num(String.raw`Une fonction de degré 4 a un zéro double en 0 et les zéros $\pm3$, et passe par $(1,-16)$. Trouve $f(2)$.`, -40, "kx²(x² − 9) : k(1)(−8) = −16 → k = 2; f(2) = 2(4)(−5)."),
  num(String.raw`Trouve le plus grand zéro du facteur $x^2-4x+1$ (2 décimales).`, 3.732, "2 + √3.", null, 0.006),
  mc(String.raw`Quelle est la famille de fonctions de degré 4 ayant pour zéros $1\pm\sqrt3$ et $\pm1$?`, String.raw`$y=k(x^2-2x-2)(x^2-1)$`, [String.raw`$y=k(x^2-2x+2)(x^2-1)$`, String.raw`$y=k(x^2+2x-2)(x^2+1)$`, String.raw`$y=k(x^2-3)(x^2-1)$`], "(x − 1)² − 3 = x² − 2x − 2."),
  num(String.raw`Une parabole a pour zéros 1 et 5 et pour sommet $(3,-8)$. Trouve son coefficient dominant.`, 2, "k(2)(−2) = −8.", FIG.par15),
  num(String.raw`Le membre de $y=k(x-1)(x-2)(x-3)$ qui passe par $(4,6)$ a quelle ordonnée à l'origine?`, -6, "6k = 6 → k = 1; f(0) = −6."),
  tf("Si une fonction de degré 4 n'a des zéros réels qu'en 2 et en 3, et que ses quatre zéros sont réels, au moins l'un d'eux est répété.", true, "Quatre zéros comptés selon leur ordre, mais seulement deux valeurs distinctes."),
  num(String.raw`Le membre de $y=k(x+2)(x-1)^2$ qui passe par $(2,8)$ a quelle ordonnée à l'origine?`, 4, "k(4)(1) = 8 → k = 2; f(0) = 2(2)(1)."),
  num("La courbe verte appartient à y = k(x + 1)(x − 2)(x − 3) et passe par (1, −4). Trouve k.", -1, "k(2)(−1)(−2) = 4k = −4.", planeDoc({ view: { xmin: -2, xmax: 4, ymin: -8, ymax: 8 }, curves: [{ f: (x) => (x + 1) * (x - 2) * (x - 3), color: "gray" }, { f: (x) => -(x + 1) * (x - 2) * (x - 3), color: "green" }], points: [P(1, -4)], step: { x: 1, y: 2 } })),
  num(String.raw`Trouve $k$ pour que $y=k(x^2+1)(x-2)(x+2)$ ait une ordonnée à l'origine de 8.`, -2, "k(1)(−4) = 8."),
];
