// 1.3 Fonctions de base — 20 questions difficiles (miroir de ../../mcr3u-ch1/bank/h1_3.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P, PAR } from "./fig.mjs";

export const TOPIC = "1.3 Fonctions de base";
export const Q = [
  num(String.raw`Trouve la solution positive de $\sqrt x=\frac x3$.`, 9, "x = x²/9 → x(x − 9) = 0."),
  num(String.raw`Combien de solutions réelles l'équation $\frac1x=-x$ a-t-elle?`, 0, "x² = −1 n'a aucune solution réelle."),
  num(String.raw`Résous $|x|=2x-3$.`, 3, "x ≥ 0 : x = 3 ✓. x < 0 : −x = 2x − 3 → x = 1, qui n'est pas négatif."),
  ms(String.raw`Où a-t-on $x^2<x$? Choisis toutes les bonnes réponses.`, [String.raw`$x<0$`, String.raw`$0<x<1$`, String.raw`$x>1$`, String.raw`$x=1$`], [1], "Élever au carré rend plus petits les nombres compris entre 0 et 1."),
  num(String.raw`Pour combien d'entiers $n$ de 1 à 10 a-t-on $\sqrt n>\frac{n^2}{10}$?`, 4, "n = 1, 2, 3, 4 (en n = 5 : 2.24 < 2.5).", planeDoc({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 4 }, curves: [PAR.sqrt, { f: (x) => (x * x) / 10, color: "blue" }], step: { x: 1, y: 1 } })),
  num(String.raw`$f(x)=\frac1x$. Trouve $f(4)-f(5)$.`, 0.05, "1/4 − 1/5 = 1/20.", null, 0.0001),
  tf(String.raw`Pour tout $x>1$ : $\sqrt x<x<x^2$.`, true, "p. ex. x = 4 : 2 < 4 < 16."),
  num(String.raw`$y=\frac1x$ et $y=-x+\frac52$ se rencontrent deux fois. Trouve la somme des abscisses.`, 2.5, "x + 1/x = 5/2 → 2x² − 5x + 2 = 0 → x = 2, 0.5.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 4 }, curves: [PAR.recip], lines: [{ m: -1, b: 2.5, color: "violet" }], points: [P(2, 0.5), P(0.5, 2)] }), 0.001),
  mc(String.raw`À part $y=x$, quelle fonction de base est sa propre réciproque?`, String.raw`$\frac1x$`, [String.raw`$x^2$`, String.raw`$\sqrt x$`, String.raw`$|x|$`], "Échange x et y dans y = 1/x : x = 1/y → y = 1/x."),
  num(String.raw`Combien des cinq fonctions de base vérifient $f(f(x))=x$ pour tout $x$ de leur domaine?`, 2, "x et 1/x."),
  num(String.raw`Quel est le plus grand $x$ tel que $|x|\le\sqrt x$?`, 1, "Pour x ≥ 0 : x ≤ √x ⇔ 0 ≤ x ≤ 1."),
  num(String.raw`Trouve la solution positive de $x^2=8\sqrt x$.`, 4, "x⁴ = 64x → x³ = 64."),
  mc("Les points marqués sur y = 1/x sont symétriques par rapport à quelle droite?", String.raw`$y=x$`, [String.raw`$y=-x$`, "l'axe des x", "l'axe des y"], "(0.25, 4) et (4, 0.25) ont des coordonnées échangées.", planeDoc({ view: { xmin: -1, xmax: 5, ymin: -1, ymax: 5 }, curves: [PAR.recip], lines: [{ m: 1, b: 0, color: "gray", dash: true }], points: [P(0.25, 4), P(4, 0.25)] })),
  num(String.raw`Trouve le taux de variation moyen de $x^2$ de $x=1$ à $x=4$.`, 5, "(16 − 1) ÷ 3."),
  num(String.raw`Trouve le taux de variation moyen de $\sqrt x$ de $x=0$ à $x=9$.`, 0.3333, "3 ÷ 9.", null, 0.002),
  tf(String.raw`Pour $0<a<b$, le taux de variation moyen de $\frac1x$ de $a$ à $b$ est négatif.`, true, "1/b < 1/a."),
  ms("Quelles fonctions de base sont un à un? Choisis toutes les bonnes réponses.", [String.raw`$x$`, String.raw`$x^2$`, String.raw`$\sqrt x$`, String.raw`$\frac1x$`, String.raw`$|x|$`], [0, 2, 3], "x² et |x| envoient x et −x sur la même sortie."),
  num(String.raw`Trouve la distance entre $(4,2)$ et $(9,3)$ sur $y=\sqrt x$ (2 décimales).`, 5.099, "√(25 + 1).", null, 0.006),
  num("Un rectangle a un sommet à l'origine et le sommet opposé sur y = 1/x en x = 2.5. Quelle est son aire?", 1, "2.5 × 0.4 — tous ces rectangles ont une aire de 1.", planeDoc({ view: { xmin: -0.5, xmax: 4, ymin: -0.5, ymax: 4 }, curves: [PAR.recip], segs: [{ pts: [[0, 0], [2.5, 0], [2.5, 0.4], [0, 0.4], [0, 0]], color: "green" }], points: [P(2.5, 0.4)], step: { x: 0.5, y: 0.5 } })),
  mc(String.raw`Pour $x<0$, quel énoncé est vrai?`, String.raw`$\frac1x$ est négatif et $x^2$ est positif`, [String.raw`les deux sont négatifs`, String.raw`les deux sont positifs`, String.raw`$\frac1x$ est positif et $x^2$ est négatif`], "Diviser 1 par un nombre négatif donne un nombre négatif; les carrés sont positifs."),
];
