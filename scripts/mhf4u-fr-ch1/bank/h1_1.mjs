// 1.1 Fonctions puissance — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc, P, graph } from "./fig.mjs";

export const TOPIC = "1.1 Fonctions puissance";
export const Q = [
  num(String.raw`$y=ax^n$ passe par $(1,3)$ et $(2,96)$. Trouve $n$.`, 5, "a = 3, puis 3·2ⁿ = 96 → 2ⁿ = 32."),
  num(String.raw`$y=ax^n$ passe par $(-1,2)$ et $(3,-54)$. Trouve $n$.`, 3, "Un n pair exigerait a = 2 et 2·3ⁿ = −54, impossible. n impair : a = −2, donc −2·3ⁿ = −54 → 3ⁿ = 27 → n = 3."),
  num(String.raw`Pour combien de nombres entiers $n$ de 1 à 10 la courbe $y=x^n$ passe-t-elle par $(-1,-1)$?`, 5, "n impair : 1, 3, 5, 7, 9."),
  ms(String.raw`Où a-t-on $x^4>x^2$? Choisis toutes les bonnes réponses.`, [String.raw`$x<-1$`, String.raw`$-1<x<0$`, String.raw`$0<x<1$`, String.raw`$x>1$`], [0, 3], "x²(x² − 1) > 0 ⇔ |x| > 1.", planeDoc({ view: { xmin: -1.8, xmax: 1.8, ymin: -0.5, ymax: 3 }, curves: [{ f: (x) => x ** 4, color: "red" }, { f: (x) => x * x, color: "blue" }], points: [P(-1, 1), P(1, 1)], step: { x: 0.5, y: 0.5 } })),
  num(String.raw`Combien de solutions l'équation $x^3=x$ a-t-elle?`, 3, "x(x − 1)(x + 1) = 0."),
  num(String.raw`Combien de solutions réelles l'équation $x^4=-x^2-1$ a-t-elle?`, 0, "Le membre de gauche est ≥ 0 et celui de droite est ≤ −1."),
  mc("Les courbes sont y = x², y = x³ et y = x⁴. Laquelle est rouge?", String.raw`$y=x^4$`, [String.raw`$y=x^2$`, String.raw`$y=x^3$`, String.raw`$y=x^5$`], "Paire, et la plus plate près de 0 parmi les paires.", planeDoc({ view: { xmin: -1.6, xmax: 1.6, ymin: -2, ymax: 3 }, curves: [{ f: (x) => x * x, color: "blue" }, { f: (x) => x ** 3, color: "green" }, { f: (x) => x ** 4, color: "red" }], step: { x: 0.5, y: 0.5 } })),
  num(String.raw`Le volume d'une sphère est $V=\frac43\pi r^3$. Par quel facteur $V$ change-t-il quand $r$ est multiplié par 1.5? (2 décimales)`, 3.375, "1.5³.", null, 0.006),
  num(String.raw`$f(x)=ax^4$ et $f(2)-f(1)=45$. Trouve $a$.`, 3, "16a − a = 15a = 45."),
  tf(String.raw`Si $f$ et $g$ sont deux fonctions impaires, alors $f+g$ est impaire.`, true, "f(−x) + g(−x) = −f(x) − g(x)."),
  tf(String.raw`Le produit d'une fonction paire et d'une fonction impaire est une fonction paire.`, false, "f(−x)g(−x) = f(x)(−g(x)) : impaire."),
  num(String.raw`Trouve la somme de toutes les solutions réelles de $x^5=16x$.`, 0, "x(x⁴ − 16) = 0 : x = 0, ±2."),
  mc(String.raw`Quelle fonction a le comportement à l'infini Q2 → Q1 et passe par $(-1,-3)$?`, String.raw`$y=x^4-4$`, [String.raw`$y=-3x^4$`, String.raw`$y=3x^3$`, String.raw`$y=x^4+2$`], "Paire, coefficient dominant positif, et 1 − 4 = −3."),
  num(String.raw`Le graphique de $y=ax^n$ passe par $(1,0.5)$ et $(2,8)$. Trouve $n$.`, 4, "a = 0.5 d'après (1, 0.5); 0.5·2ⁿ = 8 → 2ⁿ = 16 → n = 4, pair, ce qui concorde avec le graphique symétrique.", graph((x) => 0.5 * x ** 4, { xmin: -2.5, xmax: 2.5, ymin: -1, ymax: 9 }, [P(1, 0.5), P(2, 8), P(-2, 8)], { step: { x: 0.5, y: 1 } })),
  num(String.raw`Trouve la solution négative de $\tfrac12x^4=40.5$.`, -3, "x⁴ = 81 → x = ±3."),
  ms(String.raw`Quels énoncés sont vrais pour toute fonction $y=ax^n$ avec $n$ impair et $a\ne0$? Choisis toutes les bonnes réponses.`, ["l'image est l'ensemble des nombres réels", "passe par l'origine", "symétrique par rapport à l'axe des y", "a au moins un point tournant"], [0, 1], "Puissances impaires : symétrie par rapport à l'origine et aucun point tournant (p. ex. y = x³)."),
  num(String.raw`L'aire d'un carré est $A=s^2$ et le volume d'un cube est $V=s^3$. Pour quelle valeur positive de $s$ sont-ils numériquement égaux?`, 1, "s² = s³ → s = 1."),
  mc("Quel énoncé compare correctement les graphiques de y = x³ et y = x⁵?", "ils se coupent en trois points", ["ils se coupent seulement à l'origine", "ils ne se coupent jamais", "ils se coupent en deux points"], "x⁵ = x³ → x³(x² − 1) = 0 : x = −1, 0, 1.", planeDoc({ view: { xmin: -1.6, xmax: 1.6, ymin: -2, ymax: 2 }, curves: [{ f: (x) => x ** 3, color: "blue" }, { f: (x) => x ** 5, color: "red" }], step: { x: 0.5, y: 0.5 } })),
  num(String.raw`Pour $f(x)=x^n$ avec $n$ pair, $f(2)=256$. Trouve $f(-\tfrac12)$.`, 0.00390625, "2ⁿ = 256 → n = 8; (1/2)⁸ = 1/256.", null, 0.00001),
  num(String.raw`La pression sur une voile est modélisée par $P=0.003v^2$. Si la vitesse du vent double, par quel facteur la pression augmente-t-elle?`, 4, "2² = 4."),
];
