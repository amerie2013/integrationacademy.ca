// 3.2 Fonction réciproque d'une fonction quadratique — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { RG, P, planeDoc } from "./fig.mjs";
const S = String.raw;

export const TOPIC = "3.2 Fonction réciproque d'une fonction quadratique";
export const Q = [
  mc(S`$y=\dfrac1{x^2+bx+c}$ a les AV $x=-2$ et $x=8$. Quel est son point tournant?`, S`$\left(3,-\tfrac1{25}\right)$`, [S`$(3,-25)$`, S`$\left(-3,\tfrac1{25}\right)$`, S`$\left(5,-\tfrac1{16}\right)$`], "(x + 2)(x − 8) a pour sommet (3, −25)."),
  mc(S`Pour quelles valeurs de $k$ la fonction $y=\dfrac1{x^2-2x+k}$ a-t-elle deux asymptotes verticales?`, S`$k\lt1$`, [S`$k>1$`, S`$k=1$`, S`$k\gt0$`], "Discriminant 4 − 4k > 0."),
  mc(S`Quelle est l'image de $y=\dfrac1{2x^2+4x+5}$?`, S`$0\lt y\le\tfrac13$`, [S`$0\lt y\le\tfrac15$`, S`$y>0$`, S`$y\ge\tfrac13$`], "2(x + 1)² + 3 a pour minimum 3."),
  mc(S`Quelle est l'image de $y=-\dfrac1{x^2+2}$?`, S`$-\tfrac12\le y\lt0$`, [S`$0\lt y\le\tfrac12$`, S`$y\le-\tfrac12$`, S`$y\lt0$`], "La réflexion d'une bosse de hauteur 1/2."),
  mc(S`Résous $\dfrac1{x^2-4}\ge\dfrac15$.`, S`$[-3,-2)\cup(2,3]$`, [S`$[-3,3]$`, S`$(-2,2)$`, S`$(-\infty,-3]\cup[3,\infty)$`], "0 < x² − 4 ≤ 5."),
  mc(S`Résous $\dfrac1{x^2+1}\gt\dfrac12$.`, S`$-1\lt x\lt1$`, [S`$x\lt-1$ ou $x>1$`, S`$x>1$`, "tout x réel"], "x² + 1 < 2."),
  num(S`$y=\dfrac a{x^2+4}$ a un maximum de 3. Trouve $a$.`, 12, "a/4 = 3."),
  mc(S`$y=\dfrac a{(x-1)(x-5)}$ a un maximum local en $(3,-2)$. Trouve $a$.`, S`$a=8$`, [S`$a=-8$`, S`$a=4$`, S`$a=2$`], "f(3) = −4, donc a/(−4) = −2."),
  num(S`Quelle est la valeur approximative du taux de variation instantané de $y=\dfrac1{x^2+1}$ en $x=1$? (Utilise un petit intervalle; 1 décimale.)`, -0.5, "−2x/(x² + 1)² en x = 1.", null, 0.02),
  num(S`Quel est le taux de variation instantané de $y=\dfrac1{x^2+5}$ en $x=0$?`, 0, "Un point tournant a une tangente horizontale."),
  tf(S`Toute réciproque d'une fonction quadratique a un point tournant.`, false, "Avec un zéro double, 1/(x − a)² n'en a pas."),
  tf(S`Si une parabole est ouverte vers le bas et n'a aucun zéro réel, sa réciproque est toujours négative.`, true, "La parabole est toujours négative."),
  mc("Quelle équation correspond au graphique (point tournant marqué)?", S`$y=\dfrac4{x^2-4}$`, [S`$y=\dfrac1{x^2-4}$`, S`$y=\dfrac4{x^2+4}$`, S`$y=\dfrac1{x^2-1}$`], "AV x = ±2 et y(0) = −1.", RG((x) => 4 / (x * x - 4), [-2, 2], { xmin: -6, xmax: 6, ymin: -4, ymax: 4 }, 0, [P(0, -1)])),
  mc("Le graphique montre une réciproque ayant un zéro double. Quelle équation convient?", S`$y=\dfrac4{(x-2)^2}$`, [S`$y=\dfrac1{(x-2)^2}$`, S`$y=\dfrac4{(x+2)^2}$`, S`$y=\dfrac4{x^2-4}$`], "AV x = 2; passe par (0, 1).", RG((x) => 4 / (x - 2) ** 2, [2], { xmin: -4, xmax: 8, ymin: -1, ymax: 6 }, 0, [P(0, 1)])),
  mc("Le sommet de la bosse est au point marqué. De quelle fonction s'agit-il?", S`$y=\dfrac1{(x-1)^2+2}$`, [S`$y=\dfrac1{(x+1)^2+2}$`, S`$y=\dfrac1{(x-1)^2+\frac12}$`, S`$y=(x-1)^2+2$`], "Un max de 1/2 en x = 1 signifie un sommet en (1, 2).", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -0.25, ymax: 1 }, curves: [{ f: (x) => 1 / ((x - 1) ** 2 + 2), color: "violet" }], points: [P(1, 0.5)], step: { x: 1, y: 0.25 } })),
  mc("D'après le graphique, sur quel ensemble la fonction est-elle décroissante?", S`$(1,3)$ et $(3,\infty)$`, [S`$(-\infty,-1)$ et $(-1,1)$`, S`$(-1,3)$`, S`$(1,\infty)$`], "À droite du point tournant, sur chaque branche.", RG((x) => 1 / ((x + 1) * (x - 3)), [-1, 3], { xmin: -4, xmax: 6, ymin: -2, ymax: 2 }, 0, [P(1, -0.25, false)], { step: { x: 1, y: 0.5 } })),
  num(S`Combien de solutions $\dfrac1{x^2-1}=-2$ a-t-elle?`, 2, "x² − 1 = −1/2 : x² = 1/2."),
  num(S`Combien de solutions $\dfrac1{x^2-1}=-\dfrac12$ a-t-elle?`, 0, "x² − 1 = −2 exige x² = −1. La branche du milieu n'atteint que y ≤ −1, donc −1/2 n'est jamais atteint."),
  mc(S`Combien de solutions réelles $\dfrac1{x^2-4x+3}=-2$ a-t-elle?`, "2", ["0", "1", "4"], "La valeur au point tournant est −1, donc y = −2 coupe la branche du milieu deux fois."),
  num(S`L'intensité d'un signal est $S(d)=\dfrac{100}{d^2+1}$. Trouve le taux de variation moyen de $S$ de $d=1$ à $d=3$.`, -20, "(10 − 50)/2."),
];
