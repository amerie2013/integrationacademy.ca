// 1.8 Combiner des transformations — 20 questions difficiles (miroir de ../../mcr3u-ch1/bank/h1_8.mjs)
// Notation française : y = af(k(x − c)) + d (c horizontal, d vertical) — lettres échangées, aucun nombre ne change.
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const TOPIC = "1.8 Combiner des transformations";
export const Q = [
  num(String.raw`$(4,-2)$ de $y=f(x)$ devient $(-1,9)$ par $y=af(-2(x-c))+3$. Trouve $a$.`, -3, "−2a + 3 = 9."),
  num(String.raw`$(4,-2)$ de $y=f(x)$ devient $(-1,9)$ par $y=af(-2(x-c))+3$. Trouve $c$.`, 1, "4 ÷ (−2) + c = −1."),
  mx(String.raw`Une fonction $\sqrt x$ transformée commence en $(5,-2)$, s'étend vers la gauche et passe par $(1,4)$. Écris son équation.`, "3*sqrt(5-x)-2", "y = a√(−(x − 5)) − 2; 4 = a·2 − 2 → a = 3."),
  num(String.raw`$f$ : domaine $-4\le x\le2$, image $0\le y\le5$. Pour $g(x)=-2f(\tfrac12(x-3))+1$, trouve la longueur de l'intervalle du domaine.`, 12, "x → 2x + 3 : de −5 à 7."),
  num(String.raw`$f$ : domaine $-4\le x\le2$, image $0\le y\le5$. Pour $g(x)=-2f(\tfrac12(x-3))+1$, trouve la plus petite valeur de l'image de $g$.`, -9, "y → −2y + 1 : 1 et −9."),
  mc("Quelle équation donne la courbe rouge, une transformation de y = √x (en gris)?", String.raw`$y=2\sqrt{-(x-1)}-3$`, [String.raw`$y=2\sqrt{x-1}-3$`, String.raw`$y=-2\sqrt{-(x-1)}-3$`, String.raw`$y=2\sqrt{-(x+1)}-3$`], "Commence en (1, −3), va vers la gauche et monte; passe par (−3, 1) : 2√4 − 3.", planeDoc({ view: V8, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => 2 * Math.sqrt(1 - x) - 3, b: 1, color: "red" }], points: [P(1, -3), P(-3, 1)] })),
  num(String.raw`$y=-\left(2(x+1)\right)^2+8$. Trouve la plus grande abscisse à l'origine.`, 0.4142, "(2(x + 1))² = 8 → x + 1 = ±√2."
    , null, 0.002),
  ms(String.raw`Pour $y=-3|2x-4|+6$, lesquels sont vrais? Choisis toutes les bonnes réponses.`, ["sommet (2, 6)", "abscisses à l'origine 1 et 3", "image y ≤ 6", "c'est un étirement horizontal de |x|"], [0, 1, 2], "|2(x − 2)| : compression; 3·2|x − 2| = 6 → |x − 2| = 1.", graph((x) => -3 * Math.abs(2 * x - 4) + 6, V8, [P(2, 6)])),
  num(String.raw`$y=\frac{a}{k(x-c)}+d$ a pour asymptotes $x=2$, $y=-1$ et passe par $(3,5)$ avec $k=3$. Trouve $a$.`, 18, "5 = a/3 − 1."),
  tf(String.raw`$y=f(-(x-4))$ est l'image de $y=f(x)$ par une réflexion par rapport à la droite verticale $x=2$.`, true, "(x, y) → (4 − x, y) : miroir par rapport à x = 2."),
  num("La courbe grise est y = x². Trouve a dans la courbe rouge y = a(k(x − c))² + d avec k = 2 (lis le sommet et un point).", -0.5, "Sommet (3, 5); (4, 3) : 3 = a·4 + 5.", planeDoc({ view: V8, curves: [{ f: (x) => x * x, color: "gray" }, { f: (x) => -0.5 * (2 * (x - 3)) ** 2 + 5, color: "red" }], points: [P(3, 5), P(4, 3)] }), 0.001),
  num(String.raw`$g(x)=f(3x+12)$. Si $f$ a un zéro en $x=-6$, trouve le zéro correspondant de $g$.`, -6, "f(3(x + 4)) : −6 ÷ 3 − 4."),
  mc(String.raw`Quelle suite de transformations change $y=x^2$ en $y=-(3x-6)^2+2$?`, String.raw`compression horizontale de facteur ⅓, réflexion par rapport à l'axe des x, 2 vers la droite, 2 vers le haut`, [String.raw`compression de facteur ⅓, réflexion, 6 vers la droite, 2 vers le haut`, String.raw`étirement de facteur 3, réflexion, 2 vers la droite, 2 vers le haut`, String.raw`compression de facteur ⅓, réflexion, 2 vers la gauche, 2 vers le haut`], "−(3(x − 2))² + 2."),
  num(String.raw`$h(t)=-5(t-3)^2+45$ modélise une balle. On la réfléchit et on la translate pour obtenir $g(t)=5(t-3)^2+10$. Quel est le minimum de $g$?`, 10, "Sommet (3, 10), ouverte vers le haut."),
  num("Le graphique de y = f(x) est le segment bleu de (−2, 0) à (4, 6). Son image par y = −f(2x) + 3 est un segment. Trouve l'ordonnée de son extrémité gauche.", 3, "(−2, 0) → (−1, 3); (4, 6) → (2, −3).", planeDoc({ view: V8, segs: [{ pts: [[-2, 0], [4, 6]], color: "blue" }, { pts: [[-1, 3], [2, -3]], color: "red" }], points: [P(-2, 0, null, "blue"), P(4, 6, null, "blue")] })),
  mx(String.raw`$\frac1x$ subit un étirement vertical de facteur 4, une compression horizontale de facteur ½, une réflexion par rapport à l'axe des y, puis un déplacement de 3 vers la droite. Écris l'équation.`, "4/(-2*(x-3))", "a = 4, k = −2, c = 3."),
  num(String.raw`Pour $y=a\sqrt{k(x-c)}+d$ avec $a=1$, $d=0$, $c=2$ : le point $(8,\sqrt{8})$ de $\sqrt x$ devient $(6,\sqrt8)$. Trouve $k$.`, 2, "8/k + 2 = 6."),
  tf(String.raw`$y=2f(3x)$ et $y=3f(2x)$ ont toujours les mêmes zéros.`, false, "Les zéros de f(3x) sont divisés par 3, ceux de f(2x) par 2."),
  num(String.raw`Une rampe suit $y=\sqrt x$ (m). Une nouvelle rampe est deux fois plus haute, trois fois moins longue et commence en $(2,0)$. Quelle est sa hauteur en $x=5$? (2 décimales)`, 6, "y = 2√(3(x − 2)); 2√9 = 6."),
  num(String.raw`$f(x)=x^2-6x+5$. Trouve l'ordonnée à l'origine de $y=2f(-x)-1$.`, 9, "2f(0) − 1 = 2(5) − 1."),
];
