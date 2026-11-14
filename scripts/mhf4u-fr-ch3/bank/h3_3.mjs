// 3.3 Fonctions rationnelles de la forme (ax + b)/(cx + d) — 20 questions difficiles
// IMPORTANT : a, b, c, d sont les COEFFICIENTS de (ax + b)/(cx + d) — aucune permutation c↔d.
import { mc, num, tf } from "./kit.mjs";
import { RG, P } from "./fig.mjs";
const S = String.raw;
const V = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const TOPIC = "3.3 Fonctions rationnelles de la forme (ax + b)/(cx + d)";
export const Q = [
  mc(S`$f(x)=\dfrac{ax+b}{x+d}$ a l'AV $x=3$, l'AH $y=2$ et passe par $(4,5)$. Trouve $b$.`, S`$b=-3$`, [S`$b=3$`, S`$b=5$`, S`$b=-5$`], "a = 2, d = −3; (8 + b)/1 = 5."),
  mc(S`$f(x)=\dfrac{ax+b}{x+d}$ a l'AV $x=-2$, l'AH $y=-1$ et l'ordonnée à l'origine $3$. Trouve son abscisse à l'origine.`, S`$x=6$`, [S`$x=-6$`, S`$x=3$`, S`$x=-3$`], "a = −1, d = 2, b/2 = 3 donc b = 6; −x + 6 = 0."),
  mc(S`Quelle est la fonction inverse de $f(x)=\dfrac{3x-1}{x+2}$?`, S`$f^{-1}(x)=\dfrac{-2x-1}{x-3}$`, [S`$f^{-1}(x)=\dfrac{x+2}{3x-1}$`, S`$f^{-1}(x)=\dfrac{2x+1}{x-3}$`, S`$f^{-1}(x)=\dfrac{-2x+1}{x+3}$`], "y(x + 2) = 3x − 1 donne x(y − 3) = −2y − 1."),
  num(S`La fonction inverse de $f(x)=\dfrac{2x+5}{x-4}$ a son asymptote verticale en $x=$?`, 2, "Les asymptotes sont échangées : l'AH y = 2 de f devient l'AV x = 2."),
  tf(S`Une fonction de la forme $\dfrac{ax+b}{cx+d}$ avec $a=-d$ et $ad\ne bc$ est sa propre fonction inverse.`, true, "Ses asymptotes sont alors x = a/c et y = a/c : symétriques par rapport à y = x."),
  num(S`Pour $f(x)=\dfrac{x+3}{x-1}$, trouve $f(f(2))$.`, 2, "f(2) = 5; f(5) = 8/4 = 2."),
  mc(S`Pour quelles valeurs de $k$ la fonction $f(x)=\dfrac{x+k}{x+3}$ est-elle croissante sur chaque branche?`, S`$k\lt3$`, [S`$k>3$`, S`$k\ne3$`, S`$k\gt-3$`], "ad − bc = 3 − k > 0."),
  num(S`Trouve le point où les asymptotes de $y=\dfrac{4x-1}{x+5}$ se croisent; donne la somme de ses coordonnées.`, -1, "(−5, 4)."),
  num(S`$\dfrac{ax+1}{2x-3}$ passe par $(2,5)$. Trouve $a$.`, 2, "(2a + 1)/1 = 5."),
  mc(S`Résous $\dfrac{x+1}{x-3}=x-1$ (la droite coupe l'hyperbole).`, S`$x=\dfrac{5\pm\sqrt{17}}2$`, [S`$x=1,\ x=4$`, S`$x=\dfrac{-5\pm\sqrt{17}}2$`, "aucune solution"], "x + 1 = x² − 4x + 3 donne x² − 5x + 2 = 0."),
  mc(S`Quel est le taux de variation instantané de $f(x)=\dfrac{x+1}{x-1}$ en $x=3$?`, S`$-\tfrac12$`, [S`$\tfrac12$`, S`$-2$`, S`$-\tfrac14$`], "f = 1 + 2/(x − 1), pente −2/(x − 1)² = −1/2."),
  num(S`Trouve le taux de variation moyen de $f(x)=\dfrac{2x-1}{x+1}$ sur $[0,2]$.`, 1, "f(0) = −1, f(2) = 1; 2/2."),
  mc("Trouve l'équation du graphique.", S`$y=\dfrac{-2x+4}{x+1}$`, [S`$y=\dfrac{2x-4}{x+1}$`, S`$y=\dfrac{-2x-4}{x+1}$`, S`$y=\dfrac{-2x+4}{x-1}$`], "AV x = −1, AH y = −2, abscisse à l'origine 2.", RG((x) => (-2 * x + 4) / (x + 1), [-1], V, -2, [P(2, 0), P(0, 4)])),
  mc("Quelle transformation de y = 1/x donne ce graphique?", "réflexion par rapport à l'axe des x, agrandissement de facteur 4, 2 vers la droite, 1 vers le haut", ["agrandissement de facteur 4, 2 vers la droite, 1 vers le haut", "réflexion par rapport à l'axe des x, agrandissement de facteur 4, 2 vers la gauche, 1 vers le haut", "réflexion par rapport à l'axe des y, agrandissement de facteur 1, 2 vers la droite, 4 vers le haut"], "y = 1 − 4/(x − 2).", RG((x) => 1 - 4 / (x - 2), [2], V, 1, [P(-2, 2), P(6, 0)])),
  mc("Le graphique est de la forme y = (ax + b)/(x + d). Quelle est son ordonnée à l'origine?", S`$\tfrac32$`, [S`$-\tfrac32$`, S`$3$`, S`$2$`], "y = (3x + 3)/(x + 2) : AV x = −2, AH y = 3, abscisse à l'origine −1.", RG((x) => (3 * x + 3) / (x + 2), [-2], V, 3, [P(-1, 0)])),
  mc("Pour ce graphique, résous f(x) ≤ 0.", S`$-1\lt x\le2$`, [S`$-1\le x\le2$`, S`$x\lt-1$ ou $x\ge2$`, S`$x\le2$`], "Sous l'axe entre l'asymptote et le zéro; l'asymptote est exclue.", RG((x) => (x - 2) / (x + 1), [-1], V, 1, [P(2, 0)])),
  tf(S`Le graphique de $y=\dfrac{2x+1}{x-3}$ rencontre la droite $y=2$.`, false, "2x + 1 = 2x − 6 n'a pas de solution : y = 2 est l'asymptote."),
  mc(S`Quelle est l'image de $f(x)=\dfrac{2x-6}{x-3}$?`, S`$\{2\}$`, [S`$y\ne2$`, S`$y\ne3$`, "tous les nombres réels"], "f(x) = 2 pour tout x de son domaine."),
  num(S`Combien de points $y=\dfrac{x+2}{x-2}$ et $y=x$ ont-elles en commun?`, 2, "x² − 3x − 2 = 0 a un discriminant de 17 > 0."),
  mc(S`$f(x)=\dfrac{ax+b}{cx+d}$, avec $c\ne0$, a l'asymptote horizontale $y=0$ seulement quand…`, S`$a=0$`, [S`$b=0$`, S`$d=0$`, S`$ad=bc$`], "AH y = a/c."),
];
