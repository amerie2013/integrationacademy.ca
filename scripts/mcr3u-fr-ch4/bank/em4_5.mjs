// 4.5 Transformations des fonctions exponentielles — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch4/bank/em4_5.mjs)
// Notation française : y = a·b^(k(x − c)) + d (c horizontal, d vertical).
import { mc, ms, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const V = { xmin: -5, xmax: 5, ymin: -6, ymax: 10 };
const g = (f, c, pts) => planeDoc({ view: V, curves: [{ f, color: "violet" }], lines: [{ m: 0, b: c, color: "green", dash: true }], points: pts, step: { x: 1, y: 1 } });

export const E = [
  num(String.raw`Quelle est l'asymptote de $y=2^x+6$? Entre sa valeur de y.`, 6, "d = 6."),
  num(String.raw`Quelle est l'asymptote de $y=3^{x-2}$? Entre sa valeur de y.`, 0, "Une translation horizontale ne la déplace pas."),
  mc(String.raw`Comment $y=2^{x+5}$ se compare-t-elle à $y=2^x$?`, "5 unités vers la gauche", ["5 unités vers la droite", "5 unités vers le haut", "5 unités vers le bas"], "x + 5."),
  num(String.raw`Trouve l'ordonnée à l'origine de $y=3^x-4$.`, -3, "1 − 4."),
  mc(String.raw`Quelle est l'image de $y=2^x-1$?`, String.raw`$y>-1$`, [String.raw`$y>0$`, String.raw`$y<-1$`, String.raw`$y\ge-1$`], "Asymptote y = −1; la courbe est au-dessus."),
  mc(String.raw`Quelle est l'image de $y=-3^x$?`, String.raw`$y<0$`, [String.raw`$y>0$`, String.raw`$y>-3$`, String.raw`$y\in\mathbb R$`], "Réflexion sous y = 0."),
  tf(String.raw`$y=2^{x-3}$ a pour asymptote $y=-3$.`, false, "Son asymptote est y = 0."),
  num(String.raw`Le point $(0,1)$ de $y=2^x$ devient un point de quelle abscisse sur $y=2^{x-4}+1$?`, 4, "4 vers la droite."),
  num(String.raw`Le point $(1,2)$ de $y=2^x$ devient un point de quelle ordonnée sur $y=5(2)^x$?`, 10, "× 5."),
  mc(String.raw`Quelle fonction est la réflexion de $y=2^x$ par rapport à l'axe des x?`, String.raw`$y=-2^x$`, [String.raw`$y=2^{-x}$`, String.raw`$y=(-2)^x$`, String.raw`$y=\frac12\cdot2^x$`], "On change le signe de y."),
  mc(String.raw`Quelle fonction est la réflexion de $y=2^x$ par rapport à l'axe des y?`, String.raw`$y=2^{-x}$`, [String.raw`$y=-2^x$`, String.raw`$y=-2^{-x}$`, String.raw`$y=2^x-1$`], "On change le signe de x."),
  num(String.raw`Trouve l'ordonnée à l'origine de $y=4(3)^x+1$.`, 5, "4 + 1."),
  tf("Un étirement vertical déplace l'asymptote de y = bˣ.", false, "Seule une translation verticale la déplace."),
  num(String.raw`Quelle est l'asymptote de $y=-2(5)^x-3$? Entre sa valeur de y.`, -3, "d = −3."),
  mc(String.raw`Quelle expression est égale à $3^{2x}$?`, String.raw`$9^x$`, [String.raw`$6^x$`, String.raw`$3^{x+2}$`, String.raw`$9^{2x}$`], "(3²)ˣ."),
  num(String.raw`Trouve l'ordonnée à l'origine de $y=2^{x+3}$.`, 8, "2³."),
  mc(String.raw`Quel est le domaine de $y=2^{x-1}+7$?`, "tous les nombres réels", [String.raw`$x>1$`, String.raw`$x>7$`, String.raw`$x\ge0$`], "Les exponentielles acceptent toute valeur de x."),
  num(String.raw`Trouve l'abscisse à l'origine de $y=2^x-8$.`, 3, "2³ = 8."),
  num("Lis l'asymptote du graphique (entre sa valeur de y).", -3, "La droite pointillée y = −3.", g((x) => 2 ** x - 3, -3, [P(0, -2)])),
  num("Lis l'ordonnée à l'origine du graphique.", 3, "y = 2^(x+1) + 1 à x = 0.", g((x) => 2 ** (x + 1) + 1, 1, [P(0, 3)])),
];

export const M = [
  num(String.raw`Trouve l'ordonnée à l'origine de $y=3(2)^{x-1}+4$.`, 5.5, "3 × ½ + 4.", null, 1e-9),
  mc(String.raw`Quelle est l'image de $y=-2(3)^x+5$?`, String.raw`$y<5$`, [String.raw`$y>5$`, String.raw`$y<-2$`, String.raw`$y>3$`], "a < 0 : sous y = 5."),
  num(String.raw`Le point $(1,3)$ de $y=3^x$ devient un point de quelle ordonnée sur $y=2(3)^{x+2}-1$?`, 5, "2(3) − 1."),
  num(String.raw`Le point $(2,4)$ de $y=2^x$ devient un point de quelle abscisse sur $y=2^{x/2}$?`, 4, "x ÷ ½."),
  num(String.raw`Trouve l'abscisse à l'origine de $y=3^{x+1}-27$.`, 2, "3^(x+1) = 3³."),
  num(String.raw`$y=a(2)^x+1$ passe par $(2,13)$. Trouve $a$.`, 3, "4a + 1 = 13."),
  num(String.raw`$y=3^x+d$ passe par $(2,4)$. Trouve $d$.`, -5, "9 + d = 4."),
  mc("Quelle fonction est y = 2ˣ translatée de 3 vers la droite et de 1 vers le bas?", String.raw`$y=2^{x-3}-1$`, [String.raw`$y=2^{x+3}-1$`, String.raw`$y=2^{x-1}-3$`, String.raw`$y=2^{x-3}+1$`], "c = 3, d = −1."),
  num(String.raw`Évalue $y=\left(\tfrac12\right)^{x-2}+3$ à $x=0$.`, 7, "4 + 3."),
  ms(String.raw`Quels énoncés sont vrais pour $y=-2^x+4$? Choisis toutes les bonnes réponses.`, ["asymptote y = 4", "image y < 4", "ordonnée à l'origine 3", "abscisse à l'origine 2", "croissante"], [0, 1, 2, 3], "Elle est décroissante."),
  tf(String.raw`$y=4\cdot2^x$ a le même graphique que $y=2^{x+2}$.`, true, "4 = 2²."),
  num(String.raw`Trouve l'abscisse à l'origine de $y=-2^x+16$.`, 4, "2ˣ = 16."),
  mc("Laquelle a pour asymptote y = −2 et pour ordonnée à l'origine 1?", String.raw`$y=3(2)^x-2$`, [String.raw`$y=2^x-2$`, String.raw`$y=3(2)^x+1$`, String.raw`$y=-3(2)^x-2$`], "a − 2 = 1."),
  num(String.raw`Évalue $y=5^{x-1}$ à $x=3$.`, 25, "5²."),
  num("Le graphique est y = a(2)ˣ + d, avec l'asymptote y = 1 et l'ordonnée à l'origine 4. Trouve a.", 3, "a + 1 = 4.", g((x) => 3 * 2 ** x + 1, 1, [P(0, 4)])),
  num("Le graphique est y = 2^(x − c) et passe par (3, 1). Trouve c.", 3, "2^(3−c) = 1.", g((x) => 2 ** (x - 3), 0, [P(3, 1)])),
  num(String.raw`$y=2^{kx}$ passe par $(1,8)$. Trouve $k$.`, 3, "2^k = 8."),
  num(String.raw`Évalue $y=9^{x/2}$ à $x=3$.`, 27, "3³."),
  tf(String.raw`$y=2^{x+1}$ et $y=2\cdot2^x$ ont le même graphique.`, true, "2^(x+1) = 2·2ˣ."),
  num(String.raw`Quelle est l'asymptote de $y=3-2^x$? Entre sa valeur de y.`, 3, "−2ˣ + 3."),
];
