// 6.1 La fonction exponentielle et son inverse — 20 questions faciles + 20 moyennes (miroir de ../../mhf4u-ch6/bank/em6_1.mjs)
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { graph, planeDoc, P } from "./fig.mjs";

const lg = (b) => (x) => Math.log(x) / Math.log(b);

export const E = [
  num(String.raw`Quelle est l'ordonnée à l'origine de $y=11^x$?`, 1, "Toute base non nulle élevée à la puissance 0 donne 1."),
  mc(String.raw`Quelle est l'image de $y=12^x$?`, String.raw`$y>0$`, [String.raw`tous les nombres réels`, String.raw`$y\ge1$`, String.raw`$y>1$`], "Une base positive élevée à n'importe quelle puissance est positive, et chaque valeur positive est atteinte."),
  tf(String.raw`$y=\left(\tfrac14\right)^x$ est une fonction croissante.`, false, "La base est entre 0 et 1, donc la fonction est décroissante."),
  num(String.raw`L'inverse de $y=2^x$ passe par $(32,\ ?)$. Trouve la valeur de y manquante.`, 5, "2⁵ = 32, donc (5, 32) appartient à y = 2ˣ et (32, 5) appartient à l'inverse."),
  mc(String.raw`Le graphique de l'inverse de $y=b^x$ est la réflexion de $y=b^x$ par rapport à`, "la droite y = x", ["l'axe des x", "l'axe des y", "l'origine"], "Échanger x et y produit une réflexion dans y = x."),
  num(String.raw`Trouve l'abscisse à l'origine de l'inverse de $y=0.8^x$.`, 1, "y = 0.8ˣ a pour ordonnée à l'origine 1; échange-la."),
  mc(String.raw`Quelle est l'asymptote de l'inverse de $y=9^x$?`, "x = 0", ["y = 0", "x = 1", "y = 1"], "L'asymptote horizontale y = 0 se réfléchit en x = 0."),
  fill(String.raw`$\left(-2,\tfrac1{16}\right)$ appartient à $y=4^x$. Le point correspondant sur l'inverse est $\left(\tfrac1{16},\ \_\_\_\right)$.`, ["-2", "−2"], "Échange les coordonnées."),
  tf(String.raw`L'inverse de $y=2^x$ est $y=\dfrac1{2^x}$.`, false, "1/2ˣ est la réciproque, une autre exponentielle; l'inverse échange x et y."),
  num("Le graphique montre y = bˣ qui passe par le point indiqué. Trouve b.", 6, "En x = 1, y = b¹ = b.", graph((x) => 6 ** x, { xmin: -2, xmax: 1.6, ymin: -1, ymax: 10 }, [P(1, 6), P(0, 1)], { step: { x: 0.5, y: 1 } })),
  mc(String.raw`Quel est le domaine de l'inverse de $y=\left(\tfrac23\right)^x$?`, String.raw`$x>0$`, [String.raw`tous les nombres réels`, String.raw`$x\lt0$`, String.raw`$x>1$`], "Le domaine de l'inverse est l'image de l'exponentielle."),
  num(String.raw`Trouve la valeur de y sur l'inverse de $y=10^x$ lorsque $x=1000$.`, 3, "10³ = 1000."),
  tf("L'inverse d'une fonction exponentielle y = bˣ (b > 0, b ≠ 1) est aussi une fonction.", true, "y = bˣ réussit le test de la droite horizontale."),
  num(String.raw`Trouve la valeur de y sur l'inverse de $y=3^x$ lorsque $x=81$.`, 4, "3⁴ = 81."),
  mc(String.raw`Quel point appartient à l'inverse de $y=2^x$?`, String.raw`$(8,3)$`, [String.raw`$(3,8)$`, String.raw`$(-8,-3)$`, String.raw`$\left(\tfrac18,3\right)$`], "(3, 8) appartient à y = 2ˣ; échange ses coordonnées."),
  num(String.raw`Trouve la valeur de y sur l'inverse de $y=\left(\tfrac12\right)^x$ lorsque $x=16$.`, -4, "(½)⁻⁴ = 2⁴ = 16."),
  mc(String.raw`Pour $b>1$, l'inverse de $y=b^x$ est`, "croissante", ["décroissante", "constante", "croissante, puis décroissante"], "La réflexion d'une courbe croissante dans y = x reste croissante."),
  fill(String.raw`Échanger $x$ et $y$ dans $y=7^x$ donne l'inverse $x=7^{\_\_\_}$.`, ["y"], "x et y échangent leurs places."),
  num(String.raw`Trouve la valeur de y sur l'inverse de $y=2^x$ lorsque $x=\tfrac12$.`, -1, "2⁻¹ = ½."),
  num("Le graphique montre l'inverse de y = 2ˣ. Lis la valeur de y du point indiqué.", 2, "2² = 4, donc l'inverse passe par (4, 2).", graph(lg(2), { xmin: -1, xmax: 9, ymin: -3, ymax: 4 }, [P(4, 2, false)], { a: 0.02 })),
];

export const M = [
  num(String.raw`L'inverse de $y=4^x+3$ a l'asymptote verticale $x=c$. Trouve $c$.`, 3, "y = 4ˣ + 3 a l'asymptote horizontale y = 3; elle se réfléchit en x = 3."),
  num(String.raw`Trouve la valeur de y sur l'inverse de $y=2^x+1$ lorsque $x=9$.`, 3, "9 = 2ʸ + 1 → 2ʸ = 8."),
  mc(String.raw`Quel est le domaine de l'inverse de $y=3^x-7$?`, String.raw`$x>-7$`, [String.raw`$x>7$`, String.raw`$x>0$`, String.raw`tous les nombres réels`], "Échange : 3ʸ = x + 7 > 0."),
  num(String.raw`$y=b^x$ passe par $(2,\ 0.36)$. Trouve $b$.`, 0.6, "b² = 0.36 avec b > 0.", null, 0.0001),
  num(String.raw`$y=b^x$ passe par $(3,64)$. Trouve la valeur de y sur son inverse lorsque $x=\tfrac1{16}$.`, -2, "b = 4; 4ʸ = 1/16 → y = −2."),
  mc(String.raw`Quelle est l'inverse de $y=6^x-1$?`, String.raw`$x=6^y-1$`, [String.raw`$y=6^x+1$`, String.raw`$x=6^y+1$`, String.raw`$y=\dfrac1{6^x-1}$`], "Échange x et y; rien d'autre ne change."),
  num(String.raw`Trouve l'abscisse à l'origine de l'inverse de $y=3^x-9$.`, -8, "La fonction initiale a pour ordonnée à l'origine 1 − 9 = −8, donc l'inverse a pour abscisse à l'origine −8."),
  num(String.raw`Trouve l'ordonnée à l'origine de l'inverse de $y=3^x-9$.`, 2, "La fonction initiale a pour abscisse à l'origine 2 (3² = 9), donc l'inverse a pour ordonnée à l'origine 2."),
  tf(String.raw`L'inverse de $y=5^x+2$ est définie en $x=1$.`, false, "Son domaine est x > 2."),
  ms(String.raw`Choisis toutes les caractéristiques de l'inverse de $y=\left(\tfrac16\right)^x$.`, ["domaine x > 0", "abscisse à l'origine 1", "croissante", "asymptote verticale x = 0", "image y > 0"], [0, 1, 3], "Le domaine et l'image s'échangent; l'inverse d'une fonction décroissante est décroissante; son image est l'ensemble des nombres réels."),
  num("L'exponentielle illustrée a l'asymptote horizontale en pointillés. Son inverse a l'asymptote verticale x = c. Trouve c.", -2, "y = k devient x = k.", planeDoc({ view: { xmin: -5, xmax: 5, ymin: -4, ymax: 6 }, curves: [{ f: (x) => 1.5 ** x - 2, color: "violet" }], lines: [{ m: 0, b: -2, color: "red", dash: true }], step: { x: 1, y: 1 } })),
  num(String.raw`Estime l'exposant $y$ tel que $2^y=12$, au centième près.`, 3.58, "2³ = 8 et 2⁴ = 16; 2^3.58 ≈ 11.96.", null, 0.011),
  mc(String.raw`Quelle est l'inverse de $y=2\cdot5^x$, avec la puissance isolée?`, String.raw`$5^y=\dfrac x2$`, [String.raw`$5^y=2x$`, String.raw`$5^y=x-2$`, String.raw`$y=5^{x/2}$`], "Échange, puis divise par 2."),
  num(String.raw`Trouve l'abscisse à l'origine de l'inverse de $y=4\cdot3^x$.`, 4, "La fonction initiale a pour ordonnée à l'origine 4."),
  num("Le graphique montre l'inverse de y = 1.5ˣ. Le point indiqué a pour valeur de y 2. Trouve sa coordonnée x.", 2.25, "1.5² = 2.25.", graph(lg(1.5), { xmin: -1, xmax: 6, ymin: -3, ymax: 4 }, [P(2.25, 2, false)], { a: 0.02 }), 0.0001),
  tf(String.raw`Si $(5,2)$ appartient à l'inverse de $y=b^x$, alors $b=\sqrt5$.`, true, "(2, 5) appartient à y = bˣ, donc b² = 5."),
  num(String.raw`Trouve la valeur de y sur l'inverse de $y=2^{x+3}$ lorsque $x=1$.`, -3, "1 = 2^(y + 3) → y + 3 = 0."),
  mc(String.raw`Quelle exponentielle a une inverse de domaine $x>4$?`, String.raw`$y=2^x+4$`, [String.raw`$y=2^x-4$`, String.raw`$y=2^{x-4}$`, String.raw`$y=4\cdot2^x$`], "L'image y > 4 devient le domaine x > 4."),
  num(String.raw`Trouve la valeur de y sur l'inverse de $y=10^x$ lorsque $x=0.001$.`, -3, "10⁻³ = 0.001."),
  num("Le graphique montre l'inverse de y = bˣ qui passe par le point indiqué. Trouve b.", 5, "(25, 2) sur l'inverse signifie b² = 25.", graph(lg(5), { xmin: -2, xmax: 30, ymin: -2, ymax: 3 }, [P(25, 2)], { a: 0.02, step: { x: 5, y: 1 } })),
];
