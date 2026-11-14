// 3.1 Fonction réciproque d'une fonction linéaire — 20 questions difficiles
// (c, b = constantes du dénominateur : aucune permutation c↔d.)
import { mc, num, tf } from "./kit.mjs";
import { RG, P, planeDoc, rat } from "./fig.mjs";
const S = String.raw;

export const TOPIC = "3.1 Fonction réciproque d'une fonction linéaire";
export const Q = [
  num(S`$y=\dfrac1{kx+c}$ passe par $\left(1,\tfrac12\right)$ et $\left(3,\tfrac14\right)$. Trouve $k$.`, 1, "k + c = 2 et 3k + c = 4, donc k = 1."),
  num(S`$y=\dfrac1{kx+c}$ passe par $\left(2,1\right)$ et $\left(5,-\tfrac12\right)$. Trouve la valeur de x de son asymptote verticale.`, 3, "2k + c = 1, 5k + c = −2 : k = −1, c = 3, donc −x + 3 = 0."),
  mc(S`Résous $\dfrac1{x-6}>2$.`, S`$6\lt x\lt6.5$`, [S`$x\lt6.5$`, S`$x>6.5$`, S`$x>6$`], "x − 6 doit être entre 0 et 1/2."),
  mc(S`Résous $\dfrac1{2x+4}\lt-1$.`, S`$-2.5\lt x\lt-2$`, [S`$x\lt-2.5$`, S`$x>-2$`, S`$x\lt-2$`], "2x + 4 doit être entre −1 et 0."),
  num(S`Le taux de variation instantané de $g(x)=\dfrac1{x+3}$ en $x=1$ est estimé à l'aide de $[1,1.001]$. Donne la valeur à 4 décimales près.`, -0.0625, "g′(1) ≈ −1/16.", null, 0.001),
  num(S`Trouve le rapport du taux de variation moyen de $y=\dfrac1x$ sur $[1,2]$ à celui sur $[2,4]$.`, 4, "−1/2 et −1/8."),
  tf(S`Si $f$ est une droite de pente positive, alors $g=\dfrac1f$ vérifie $g(a)>g(b)$ chaque fois que $a\lt b$.`, false, "Seulement sur une même branche : a et b peuvent être de part et d'autre de l'asymptote."),
  mc("Les droites en pointillés sont les asymptotes. Quelle équation convient, compte tenu du point marqué?", S`$y=\dfrac2{x-1}$`, [S`$y=\dfrac1{x-1}$`, S`$y=\dfrac2{x+1}$`, S`$y=\dfrac1{2x-1}$`], "AV x = 1; en x = 3, y = 1 exige un numérateur de 2.", RG((x) => 2 / (x - 1), [1], { xmin: -5, xmax: 7, ymin: -5, ymax: 5 }, 0, [P(3, 1)])),
  mc("Quelle droite a cette réciproque?", S`$f(x)=-2x+4$`, [S`$f(x)=2x-4$`, S`$f(x)=-2x-4$`, S`$f(x)=-x+2$`], "AV x = 2; g(0) = 1/4 signifie f(0) = 4.", RG((x) => 1 / (-2 * x + 4), [2], { xmin: -3, xmax: 7, ymin: -4, ymax: 4 }, 0, [P(0, 0.25, false)])),
  num(S`$g(x)=\dfrac a{x+b}$ a l'AV $x=-2$ et passe par $(1,3)$. Trouve $a$.`, 9, "a/(1 + 2) = 3."),
  num(S`Pour $g(x)=\dfrac a{x+b}$ ayant l'AV $x=4$ et $g(6)=5$, trouve $g(14)$.`, 1, "a = 10; g(14) = 10/10."),
  mc(S`Pour quelles valeurs de $x$ a-t-on $\dfrac1{x}\gt x$?`, S`$x\lt-1$ ou $0\lt x\lt1$`, [S`$-1\lt x\lt0$ ou $x>1$`, S`$0\lt x\lt1$`, S`$x\lt1$`], "1/x − x = (1 − x²)/x > 0.", planeDoc({ view: { xmin: -4, xmax: 4, ymin: -4, ymax: 4 }, curves: [...rat((x) => 1 / x, [0], { xmin: -4, xmax: 4 }), { f: (x) => x, color: "green" }], step: { x: 1, y: 1 } })),
  num(S`Combien de points $y=x-4$ et $y=\dfrac1{x-4}$ ont-elles en commun?`, 2, "x − 4 = ±1 : (5, 1) et (3, −1)."),
  num(S`La durée d'un trajet de 240 km à $v$ km/h est $t=\dfrac{240}v$. Trouve le taux de variation moyen de $t$ de $v=60$ à $v=80$, sous forme décimale.`, -0.05, "(3 − 4)/20.", null, 0.001),
  mc(S`La réciproque $g=\dfrac1f$ d'une droite vérifie $g(0)=-\tfrac12$ et a l'AV $x=-1$. Quelle est $f$?`, S`$f(x)=-2x-2$`, [S`$f(x)=2x+2$`, S`$f(x)=-2x+2$`, S`$f(x)=2x-2$`], "f(0) = −2 et f(−1) = 0."),
  tf(S`Un agrandissement vertical de $y=\dfrac1{x-1}$ peut changer la position de son asymptote verticale.`, false, "Un agrandissement vertical multiplie les valeurs de y et ne touche pas aux valeurs de x."),
  num(S`Pour $g(x)=\dfrac1{x-2}$, trouve la valeur $x>2$ telle que $g(x)=0.001$.`, 1002, "x − 2 = 1000."),
  mc("La droite (bleue) et une deuxième courbe sont représentées. Pourquoi la courbe n'est-elle pas la réciproque de la droite?", "elle ne passe pas par les points de la droite où y = ±1", ["son asymptote est au zéro de la droite", "elle n'a pas d'abscisse à l'origine", "elle a deux branches"], "La réciproque doit avoir (2, 1) et (0, −1) en commun avec la droite; cette courbe ne passe pas par ces points.", planeDoc({ view: { xmin: -5, xmax: 7, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x - 1, color: "blue" }, ...rat((x) => 3 / (x - 1), [1], { xmin: -5, xmax: 7 })], points: [P(2, 1), P(0, -1)], step: { x: 1, y: 1 } })),
  num(S`$g(x)=\dfrac1{x+1}$. Trouve la valeur positive de $x$ pour laquelle la tangente en $x$ a une pente d'environ $-\tfrac19$.`, 2, "Pente = −1/(x + 1)² : (x + 1)² = 9."),
  mc(S`Résous $\dfrac1{x-1}\le\dfrac12$.`, S`$x\lt1$ ou $x\ge3$`, [S`$1\lt x\le3$`, S`$x\ge3$`, S`$x\le3$`], "Réécris sous la forme (3 − x)/(2(x − 1)) ≤ 0."),
];
