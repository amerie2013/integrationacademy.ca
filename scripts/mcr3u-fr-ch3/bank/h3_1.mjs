// 3.1 Les trois formes d'une fonction du second degré — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { P, graph } from "./fig.mjs";
import { TITLE } from "../l3_1.mjs";

const S = String.raw;
const V10 = { xmin: -10, xmax: 10, ymin: -10, ymax: 10 };

export const TOPIC = TITLE;
export const Q = [
  num("Trouve l'aire du triangle formé par le sommet et les deux zéros de la parabole ci-contre.", 27, "Zéros 1, 7 (base 6); sommet (4, 9) (hauteur 9).", graph((x) => -(x - 1) * (x - 7), { xmin: -1, xmax: 9, ymin: -2, ymax: 10 }, [P(1, 0), P(7, 0), P(4, 9)], { segs: [{ pts: [[1, 0], [4, 9], [7, 0]], color: "green" }] })),
  ms(S`Pour $y=a(x+2)(x-6)$ avec $a<0$, lesquels sont vrais? Choisis toutes les bonnes réponses.`, ["l'axe est x = 2", "le sommet est un maximum", "l'ordonnée à l'origine est positive", "l'image est y ≥ 0"], [0, 1, 2], "y(0) = −12a > 0 lorsque a < 0."),
  num(S`$y=ax^2+bx+6$ a l'axe $x=2$ et passe par $(1,0)$. Trouve son autre zéro.`, 3, "Symétrique par rapport à x = 2."),
  num(S`Une parabole a le sommet $(-2,8)$ et $a=-2$. Quelle distance sépare ses zéros?`, 4, "−2(x + 2)² + 8 = 0 → (x + 2)² = 4 → x = 0 ou −4."),
  num(S`Pour $y=a(x+1)(x-7)$, la valeur maximale est 32. Trouve $a$.`, -2, "Axe x = 3 : a(4)(−4) = −16a = 32."),
  num(S`L'ordonnée à l'origine de $y=2(x-h)^2-18$ est 0 et $h>0$. Trouve $h$.`, 3, "2h² − 18 = 0."),
  tf("Une parabole dont le sommet est sous l'axe des x et qui est ouverte vers le bas n'a aucun zéro.", true, "Son point le plus haut est sous l'axe."),
  num(S`$y=(x-r)(x-6)$ a son sommet en $x=1$. Trouve sa valeur minimale.`, -25, "r = −4; y(1) = (5)(−5)."),
  ms(S`Pour $y=-(x-3)^2+k$ avec $k<0$, lesquels sont vrais? Choisis toutes les bonnes réponses.`, ["elle n'a aucun zéro", "son image est y ≤ k", "son axe est x = 3", "son ordonnée à l'origine est positive"], [0, 1, 2], "y(0) = −9 + k < 0."),
  num("La parabole ci-contre a le sommet (3, −4) et passe par (5, 0). Trouve son ordonnée à l'origine.", 5, "a(4) − 4 = 0 → a = 1; (0 − 3)² − 4.", graph((x) => (x - 3) ** 2 - 4, V10, [P(3, -4), P(5, 0)])),
  num(S`Le sommet de $y=-(x-1)(x-9)+c$ est au même point que le sommet de $y=(x-1)(x-9)$. Trouve $c$.`, -32, "Sommet de la deuxième : (5, −16). Première : −(4)(−4) + c = 16 + c = −16."),
  num("La parabole ci-contre est y = a(x − 2)² + k et passe par (0, −4). Trouve a.", 0.5, "Sommet (2, −6) : 4a − 6 = −4.", graph((x) => 0.5 * (x - 2) ** 2 - 6, V10, [P(2, -6), P(0, -4)]), 0.001),
  num(S`$y=a(x-4)^2+k$ passe par $(2,5)$ et $(7,15)$. Trouve $k$.`, -3, "4a + k = 5 et 9a + k = 15 : a = 2."),
  mc(S`Quelle parabole a l'image $y\le-2$?`, S`$y=-3(x+1)^2-2$`, [S`$y=3(x+1)^2-2$`, S`$y=-3(x+2)^2+1$`, S`$y=-(x-2)^2$`], "Ouverte vers le bas avec k = −2."),
  num(S`$y=a(x-2)(x-8)$ a l'ordonnée à l'origine $-32$. Trouve sa valeur maximale.`, 18, "16a = −32 → a = −2; axe 5 : −2(3)(−3)."),
  tf(S`Une fonction du second degré de zéros $-3$ et $5$ doit avoir son sommet en $x=1$.`, true, "L'axe est la moyenne des zéros."),
  num(S`La hauteur d'un plongeur est $h(t)=-5(t-0.4)^2+10.8$ m. De quelle hauteur a-t-il sauté?`, 10, "h(0) = −0.8 + 10.8.", null, 0.001),
  num("Trouve la longueur du segment horizontal qui relie les deux points de y = (x − 1)² − 4 situés à la hauteur 5 (ci-contre).", 6, "(x − 1)² = 9 → x = −2 et 4.", graph((x) => (x - 1) ** 2 - 4, V10, [P(-2, 5), P(4, 5)], { lines: [{ m: 0, b: 5, color: "green", dash: true }] })),
  num(S`Trouve la distance verticale entre les sommets de $y=2(x-1)(x-5)$ et de $y=-(x-1)(x-5)$.`, 12, "Sommets (3, −8) et (3, 4)."),
  num(S`Une parabole a les zéros 2 et 10 et passe par $(6,-8)$. Trouve son ordonnée à l'origine.`, 10, "a(4)(−4) = −8 → a = ½; ½(−2)(−10)."),
];
