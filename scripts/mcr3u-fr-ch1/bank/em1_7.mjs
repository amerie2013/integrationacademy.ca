// 1.7 Étirements, compressions et réflexions horizontaux — 20 questions faciles + 20 moyennes
// (miroir de ../../mcr3u-ch1/bank/em1_7.mjs)
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P, PAR } from "./fig.mjs";

export const E = [
  mc(String.raw`Compare $y=\sqrt{5x}$ à $y=\sqrt x$.`, String.raw`compression horizontale de facteur $\tfrac15$`, ["étirement horizontal de facteur 5", "compression verticale de facteur 5", "translation de 5 vers la droite"], "k = 5 > 1 comprime."),
  mc(String.raw`Compare $y=|\tfrac13x|$ à $y=|x|$.`, "étirement horizontal de facteur 3", [String.raw`compression horizontale de facteur $\tfrac13$`, "étirement vertical de facteur 3", "translation de 3 vers la gauche"], "k = 1/3 étire par un facteur 3."),
  mc(String.raw`Compare $y=\sqrt{-x}$ à $y=\sqrt x$.`, "réflexion par rapport à l'axe des y", ["réflexion par rapport à l'axe des x", "translation vers la gauche", "aucun changement"], "k = −1."),
  num(String.raw`$(8,2)$ est sur $y=f(x)$. Quelle est l'abscisse de son image sur $y=f(2x)$?`, 4, "8 ÷ 2."),
  num(String.raw`$(3,7)$ est sur $y=f(x)$. Quelle est l'abscisse de son image sur $y=f(\tfrac12x)$?`, 6, "3 ÷ ½."),
  num(String.raw`$(-4,1)$ est sur $y=f(x)$. Quelle est l'abscisse de son image sur $y=f(-x)$?`, 4, "Le signe change."),
  num(String.raw`$(6,-5)$ est sur $y=f(x)$. Quelle est l'ordonnée de son image sur $y=f(3x)$?`, -5, "Les changements horizontaux conservent y."),
  tf(String.raw`$y=f(4x)$ étire le graphique horizontalement par un facteur 4.`, false, "Elle le comprime par un facteur ¼."),
  tf(String.raw`$y=f(-x)$ produit une réflexion du graphique par rapport à l'axe des y.`, true, "(x, y) → (−x, y)."),
  tf(String.raw`$y=-f(x)$ produit une réflexion du graphique par rapport à l'axe des y.`, false, "C'est par rapport à l'axe des x."),
  mx(String.raw`Simplifie $(2x)^2$.`, "4*x^2", "2² = 4."),
  mc(String.raw`Quel graphique est identique à $y=|-x|$?`, String.raw`$y=|x|$`, [String.raw`$y=-|x|$`, String.raw`$y=|x|-1$`, String.raw`$y=x$`], "|x| est symétrique par rapport à l'axe des y."),
  mc(String.raw`Quel est le domaine de $y=\sqrt{-x}$?`, String.raw`$x\le0$`, [String.raw`$x\ge0$`, String.raw`$x\in\mathbb R$`, String.raw`$x<0$`], "−x ≥ 0."),
  mc("Quel graphique représente y = √(−x)?", "le rouge", ["le bleu", "le vert", "aucun"], "Le rouge est l'image de √x par une réflexion par rapport à l'axe des y.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -4, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(-x), b: 0, color: "red" }, { f: (x) => -Math.sqrt(x), a: 0, color: "blue" }, { f: (x) => Math.sqrt(x), a: 0, color: "green" }] })),
  num(String.raw`$(9,3)$ de $y=\sqrt x$ correspond à quelle abscisse sur $y=\sqrt{3x}$?`, 3, "9 ÷ 3; vérifie : √9 = 3."),
  mc(String.raw`Dans $y=f(kx)$, quelle valeur de $k$ donne un étirement horizontal?`, String.raw`$k=0.25$`, [String.raw`$k=4$`, String.raw`$k=-4$`, String.raw`$k=1$`], "0 < k < 1 étire."),
  num(String.raw`$y=f(kx)$ envoie $(10,1)$ sur $(5,1)$. Trouve $k$.`, 2, "10 ÷ k = 5."),
  tf(String.raw`Une compression horizontale change l'image d'une fonction.`, false, "Seules les valeurs de x changent."),
  mc(String.raw`$f$ a un zéro en $x=6$. Où est le zéro de $y=f(3x)$?`, String.raw`$x=2$`, [String.raw`$x=18$`, String.raw`$x=6$`, String.raw`$x=-2$`], "6 ÷ 3."),
  mc("Quel graphique représente y = (2x)²? (le graphique gris est y = x²)", "le bleu", ["le rouge", "le gris", "aucun des deux"], "Plus étroit : (1, 4) au lieu de (2, 4).", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => 4 * x * x, color: "blue" }, { f: (x) => 0.25 * x * x, color: "red" }] })),
];

export const M = [
  mc(String.raw`Décris $y=\sqrt{-\tfrac12x}$.`, "réflexion par rapport à l'axe des y et étirement horizontal de facteur 2", ["réflexion par rapport à l'axe des x et étirement de facteur 2", "réflexion par rapport à l'axe des y et compression de facteur ½", "translation de 2 vers la gauche"], "k = −½."),
  num(String.raw`$(4,2)$ de $y=\sqrt x$ correspond à quelle abscisse sur $y=\sqrt{-2x}$?`, -2, "4 ÷ (−2)."),
  ms(String.raw`$f$ contient $(-6,2),(0,4),(3,-1)$. Quels points sont sur $y=f(3x)$? Choisis toutes les bonnes réponses.`, [String.raw`$(-2,2)$`, String.raw`$(0,4)$`, String.raw`$(1,-1)$`, String.raw`$(9,-1)$`], [0, 1, 2], "Divise x par 3."),
  mx(String.raw`Simplifie $\left(\tfrac12x\right)^2$.`, "x^2/4", "¼x²."),
  tf(String.raw`Pour $f(x)=\sqrt x$, $f(9x)=3f(x)$.`, true, "√(9x) = 3√x."),
  num(String.raw`$f$ a pour domaine $-2\le x\le10$. Quelle est l'extrémité droite du domaine de $y=f(2x)$?`, 5, "10 ÷ 2."),
  num(String.raw`$f$ a pour domaine $-2\le x\le10$. Quelle est l'extrémité gauche du domaine de $y=f(-x)$?`, -10, "Les extrémités deviennent 2 et −10."),
  mc(String.raw`Laquelle est équivalente à $y=\frac1{3x}$?`, String.raw`$y=\tfrac13\cdot\frac1x$`, [String.raw`$y=3\cdot\frac1x$`, String.raw`$y=\frac1x+3$`, String.raw`$y=\frac1{x+3}$`], "1/(3x) = (1/3)(1/x)."),
  num(String.raw`$f$ a pour zéros $-9$ et $3$. Quel est le plus grand zéro de $y=f(-3x)$?`, 3, "−9 ÷ −3 = 3; 3 ÷ −3 = −1."),
  mc("La courbe grise est y = f(x). Quelle équation donne la courbe rouge?", String.raw`$y=f(\tfrac12x)$`, [String.raw`$y=f(2x)$`, String.raw`$y=2f(x)$`, String.raw`$y=\tfrac12f(x)$`], "La rouge atteint chaque hauteur au double de la valeur de x.", planeDoc({ view: { xmin: -1, xmax: 10, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(x / 2), a: 0, color: "red" }], points: [P(4, 2, null, "gray"), P(8, 2, null, "red")] })),
  num(String.raw`$y=\sqrt{kx}$ passe par $(2,6)$. Trouve $k$.`, 18, "2k = 36."),
  mc(String.raw`Le sommet de $f$ est $(4,-3)$. Où est le sommet de $y=f(-2x)$?`, String.raw`$(-2,-3)$`, [String.raw`$(-8,-3)$`, String.raw`$(2,-3)$`, String.raw`$(4,3)$`], "4 ÷ (−2)."),
  tf(String.raw`$y=f(kx)$ ne déplace jamais l'ordonnée à l'origine.`, true, "En x = 0, f(k·0) = f(0)."),
  num(String.raw`Le point $(\tfrac12,2)$ de $y=\frac1x$ correspond à quelle abscisse sur $y=\frac1{4x}$?`, 0.125, "½ ÷ 4.", null, 0.0001),
  mc(String.raw`Quelle paire de graphiques est identique?`, String.raw`$y=|5x|$ et $y=5|x|$`, [String.raw`$y=\sqrt{5x}$ et $y=5\sqrt x$`, String.raw`$y=(5x)^2$ et $y=5x^2$`, String.raw`$y=\frac1{5x}$ et $y=\frac5x$`], "|5x| = |5||x|."),
  num(String.raw`$(-3,8)$ est sur $y=f(x)$. Trouve l'abscisse de son image sur $y=f(-\tfrac13x)$.`, 9, "−3 ÷ (−⅓)."),
  mc("Quel graphique représente y = √(4x)? (en gris : y = √x)", "le bleu", ["le rouge", "le gris", "aucun des deux"], "√(4x) = 2√x : passe par (1, 2).", planeDoc({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => 2 * Math.sqrt(x), a: 0, color: "blue" }, { f: (x) => Math.sqrt(x / 4), a: 0, color: "red" }], points: [P(1, 2)] })),
  num(String.raw`$f(x)=x^2-4x$. Quelle est l'abscisse du sommet de $y=f(2x)$?`, 1, "Sommet de f en x = 2 → 2 ÷ 2."),
  mc(String.raw`$f$ a pour image $-1\le y\le6$. Quelle est l'image de $y=f(5x)$?`, String.raw`$-1\le y\le6$`, [String.raw`$-5\le y\le30$`, String.raw`$-\tfrac15\le y\le\tfrac65$`, String.raw`$y\in\mathbb R$`], "Les changements horizontaux conservent l'image."),
  num(String.raw`$y=f(kx)$ envoie le zéro $x=12$ sur $x=-3$. Trouve $k$.`, -4, "12 ÷ k = −3."),
];
