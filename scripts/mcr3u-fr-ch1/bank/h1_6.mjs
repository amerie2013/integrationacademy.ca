// 1.6 Translations et étirements verticaux — 20 questions difficiles (miroir de ../../mcr3u-ch1/bank/h1_6.mjs)
// Notation française : y = af(k(x − c)) + d (c horizontal, d vertical) — lettres échangées, aucun nombre ne change.
import { mc, ms, num, tf, mx } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

const V8 = { xmin: -8, xmax: 8, ymin: -8, ymax: 8 };

export const TOPIC = "1.6 Translations et étirements verticaux";
export const Q = [
  num(String.raw`$y=a\sqrt{x-c}+d$ commence en $(-5,3)$ et passe par $(4,-6)$. Trouve $a$.`, -3, "−6 = 3a + 3."),
  mx(String.raw`Une parabole a pour sommet $(4,-2)$ et passe par $(6,10)$. Écris son équation.`, "3*(x-4)^2-2", "10 = 4a − 2 → a = 3."),
  num(String.raw`$y=\frac a{x-1}+2$ passe par $(3,-4)$. Trouve $a$.`, -12, "−4 = a/2 + 2."),
  num(String.raw`$y=\sqrt{k(x-3)}+1$ passe par $(5,5)$. Trouve $k$.`, 8, "√(2k) = 4 → 2k = 16."),
  mc("Quelle équation correspond à la parabole ouverte vers le bas illustrée?", String.raw`$y=-\tfrac12(x+2)^2+6$`, [String.raw`$y=-2(x+2)^2+6$`, String.raw`$y=\tfrac12(x+2)^2+6$`, String.raw`$y=-\tfrac12(x-2)^2+6$`], "Sommet (−2, 6); passe par (0, 4) : 4 = 4a + 6 → a = −½.", graph((x) => -0.5 * (x + 2) ** 2 + 6, V8, [P(-2, 6), P(0, 4)])),
  num(String.raw`$y=a|x-c|+d$ a pour sommet $(1,-6)$ et pour abscisses à l'origine $-2$ et $4$. Trouve $a$.`, 2, "0 = 3a − 6."),
  ms(String.raw`Pour $y=-2\sqrt{x+1}+6$, lesquels sont vrais? Choisis toutes les bonnes réponses.`, ["domaine x ≥ −1", "image y ≤ 6", "abscisse à l'origine 8", "ordonnée à l'origine 4"], [0, 1, 2, 3], "√(x + 1) = 3 → x = 8; en x = 0 : −2 + 6 = 4."),
  num("Le graphique bleu est y = √x. Le graphique rouge en est un étirement vertical suivi d'une translation. Trouve a dans y = a√(x − c) + d.", 3, "Le rouge commence en (−4, −2) et passe par (0, 4) : 4 = 2a − 2.", planeDoc({ view: { xmin: -6, xmax: 6, ymin: -4, ymax: 8 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "blue" }, { f: (x) => 3 * Math.sqrt(x + 4) - 2, a: -4, color: "red" }], points: [P(-4, -2), P(0, 4)] })),
  tf(String.raw`Les graphiques de $y=(x-3)^2$ et de $y=(3-x)^2$ sont identiques.`, true, "(3 − x)² = (x − 3)²."),
  num(String.raw`Trouve l'abscisse à l'origine de $y=-2\sqrt{-\tfrac12(x-6)}+4$.`, -2, "√(−½(x − 6)) = 2 → −½(x − 6) = 4 → x = −2."),
  num(String.raw`Une parabole $y=a(x-c)^2+d$ a pour zéros $-1$ et $7$ et pour valeur maximale $8$. Trouve $a$.`, -0.5, "Sommet (3, 8); 0 = 16a + 8.", null, 0.001),
  mc(String.raw`$f(x)=\sqrt x$ et $g(x)=-f(2x+8)+3$. Où $g$ commence-t-elle, et que devient le point $(16,4)$ de $f$?`, String.raw`$(-4,3)$; $(4,-1)$`, [String.raw`$(-4,3)$; $(28,-1)$`, String.raw`$(-8,3)$; $(0,-1)$`, String.raw`$(4,3)$; $(12,-1)$`], "2x + 8 = 2(x + 4) : (x, y) → (x/2 − 4, −y + 3); (0, 0) → (−4, 3), (16, 4) → (4, −1)."),
  num("Les deux paraboles sont des translations l'une de l'autre. De combien la parabole bleue a-t-elle été déplacée vers la droite pour donner la rouge?", 5, "Sommets (−3, 1) et (2, 1).", planeDoc({ view: V8, curves: [{ f: (x) => (x + 3) ** 2 + 1, color: "blue" }, { f: (x) => (x - 2) ** 2 + 1, color: "red" }], points: [P(-3, 1), P(2, 1)] })),
  ms(String.raw`Lesquels sont vrais pour $y=3\sqrt{-x+2}-1$? Choisis toutes les bonnes réponses.`, ["domaine x ≤ 2", "image y ≥ −1", "elle passe par (1, 2)", "elle subit une réflexion par rapport à l'axe des x"], [0, 1, 2], "−x + 2 = −(x − 2) : k = −1 produit une réflexion par rapport à l'axe des y (et non des x); en x = 1 : 3(1) − 1 = 2."),
  num(String.raw`$y=(k(x+1))^2-4$ avec $k>0$ a une abscisse à l'origine en $x=3$. Trouve $k$.`, 0.5, "(4k)² = 4 → 4k = 2.", null, 0.001),
  mx(String.raw`$y=|x|$ subit une compression horizontale de facteur $\tfrac13$, une réflexion par rapport à l'axe des x, puis un déplacement de 2 vers la droite et de 5 vers le haut. Écris l'équation.`, "-abs(3*(x-2))+5", "a = −1, k = 3, c = 2, d = 5."),
  num(String.raw`$f(x)=|x|$; $g(x)=-3f(x-2)+9$. Trouve la différence positive entre les abscisses à l'origine de $g$.`, 6, "3|x − 2| = 9 → x = 5 ou −1."),
  mc("Le graphique rouge est une transformation de y = 1/x. Quelle équation?", String.raw`$y=\frac{2}{x-3}-1$`, [String.raw`$y=\frac{2}{x+3}-1$`, String.raw`$y=\frac{1}{x-3}-1$`, String.raw`$y=\frac{-2}{x-3}-1$`], "Asymptotes x = 3, y = −1; passe par (4, 1) : a/1 − 1 = 1 → a = 2.", planeDoc({ view: V8, curves: [{ f: (x) => 2 / (x - 3) - 1, color: "red" }], vlines: [{ x: 3, color: "gray", dash: true }], lines: [{ m: 0, b: -1, color: "gray", dash: true }], points: [P(4, 1)] })),
  num(String.raw`$y=a(x-1)^2+d$ passe par $(0,5)$ et $(3,17)$. Trouve $d$.`, 1, "a + d = 5, 4a + d = 17 → a = 4, d = 1."),
  num("Le graphique violet est y = √(k(x − c)) et commence au premier point marqué. Trouve k.", 3, "Le départ (−2, 0) donne c = −2; passe par (1, 3) : √(3k) = 3 → k = 3.", planeDoc({ view: { xmin: -4, xmax: 6, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.sqrt(x), a: 0, color: "gray" }, { f: (x) => Math.sqrt(3 * (x + 2)), a: -2, color: "violet" }], points: [P(-2, 0), P(1, 3)] })),
];
