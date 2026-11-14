// 6.3 Transformations des fonctions logarithmiques — 20 questions difficiles (miroir de ../../mhf4u-ch6/bank/h6_3.mjs)
// NOTATION FRANÇAISE : y = a log_b(k(x − c)) + d (c horizontale, d verticale).
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const va = (x) => ({ x, color: "red", dash: true });
const G = (curves, d, pts, view) => planeDoc({ view, vlines: [va(d)], curves, points: pts, step: { x: 1, y: 1 } });

export const TOPIC = "6.3 Transformations des fonctions logarithmiques";
export const Q = [
  num(S`Trouve l'abscisse à l'origine de $y=-3\log_2(x-1)+6$.`, 5, "log₂(x − 1) = 2 ⇒ x − 1 = 4."),
  num(S`Trouve l'ordonnée à l'origine de $y=2\log_3(9-x)-1$.`, 3, "x = 0 : 2 log₃ 9 − 1 = 4 − 1."),
  num(S`Trouve l'abscisse à l'origine de $y=\log(5x+20)-2$.`, 16, "5x + 20 = 100 ⇒ x = 16."),
  num(S`Le point $(16,4)$ appartient à $y=\log_2x$. Trouve la coordonnée x de son image sur $y=\log_2\big(4(x-3)\big)$.`, 7, "x → 16/4 + 3 = 7."),
  num(S`Le point $(16,4)$ appartient à $y=\log_2x$. Trouve la coordonnée y de son image sur $y=-\frac12\log_2(x+1)+3$.`, 1, "y → −½(4) + 3 = 1."),
  num(S`$y=a\log x+d$ passe par $(10,4)$ et $(1000,10)$. Trouve $a$.`, 3, "a + d = 4 et 3a + d = 10 ⇒ 2a = 6."),
  num(S`$y=a\log x+d$ passe par $(10,4)$ et $(1000,10)$. Trouve $d$.`, 1, "a = 3, donc d = 4 − 3."),
  num(S`$y=\log_b(x-2)$ passe par $(11,2)$. Trouve $b$.`, 3, "b² = 9 avec b > 0."),
  mc(S`Quel est le domaine de $y=\log_2(-3x+12)+1$?`, S`$x<4$`, [S`$x>4$`, S`$x<-4$`, S`$x>-4$`], "−3x + 12 > 0 ⇒ x < 4 (diviser par −3 inverse le sens de l'inégalité)."),
  mc(S`Quelle est l'inverse de $y=3\log_2(x+1)$?`, S`$y=2^{x/3}-1$`, [S`$y=3\cdot2^{x}-1$`, S`$y=2^{3x}-1$`, S`$y=2^{x/3}+1$`], "Échange : x = 3 log₂(y + 1) ⇒ y + 1 = 2^(x/3)."),
  mc(S`Quel graphique est identique à celui de $y=\log_3(9x)$?`, S`$y=\log_3x+2$`, [S`$y=9\log_3x$`, S`$y=\log_3(x+9)$`, S`$y=\log_3x+9$`], "Points testés : x = 1 donne 2; x = 3 donne 3; x = 9 donne 4 — toujours 2 de plus que log₃ x."),
  tf(S`Tout graphique $y=\log_b\big(k(x-c)\big)$ avec $k>0$ coupe l'axe des x en $x=c+\frac1k$.`, true, "k(x − c) = 1 ⇒ x = c + 1/k."),
  tf(S`$y=\log_2x^2$ et $y=2\log_2x$ ont le même graphique.`, false, "log₂ x² est aussi défini pour x < 0; 2 log₂ x ne l'est pas. Ils coïncident seulement pour x > 0."),
  ms(S`Choisis toutes les équations dont le graphique se trouve entièrement à gauche de son asymptote.`, [S`$y=\log(-x)$`, S`$y=\log(3-x)$`, S`$y=-\log x$`, S`$y=\log_2(-2x-4)$`], [0, 1, 3], "Un k négatif donne un domaine x < c."),
  mc(S`$y=\log_2x$ subit un étirement vertical de facteur 3, une réflexion dans l'axe des x, puis une translation de 4 vers la gauche. Quelle équation obtient-on?`, S`$y=-3\log_2(x+4)$`, [S`$y=-3\log_2(x-4)$`, S`$y=3\log_2(-x+4)$`, S`$y=-\log_2(3x+4)$`], "a = −3, c = −4."),
  mc("Le graphique est celui de y = a log₂ x + d, qui passe par (1, 2) et (4, −2). Trouve a et d.", S`$a=-2,\ d=2$`, [S`$a=2,\ d=-2$`, S`$a=-4,\ d=2$`, S`$a=-2,\ d=-2$`], "x = 1 donne d = 2; x = 4 donne 2a + 2 = −2.", G([{ f: (x) => -2 * lg(2)(x) + 2, a: 0.01, color: "violet" }], 0, [{ x: 1, y: 2, label: "(1, 2)", color: "blue" }, { x: 4, y: -2, label: "(4, −2)", color: "blue" }], { xmin: -1, xmax: 9, ymin: -5, ymax: 6 })),
  mc("Quelle équation correspond au graphique (asymptote en pointillés)?", S`$y=\log_3(x-1)-1$`, [S`$y=\log_3(x+1)-1$`, S`$y=\log_3(x-1)+1$`, S`$y=-\log_3(x-1)-1$`], "Asymptote x = 1; le graphique passe par (4, 0), puisque log₃ 3 − 1 = 0.", G([{ f: (x) => lg(3)(x - 1) - 1, a: 1.003, color: "violet" }], 1, [{ x: 4, y: 0, label: "(4, 0)", color: "blue" }, { x: 2, y: -1, label: "(2, −1)", color: "blue" }], { xmin: -1, xmax: 11, ymin: -4, ymax: 2 })),
  mc("La courbe violette est y = log₂ x. La courbe verte en est une transformation. Laquelle?", S`$y=\log_2(x+3)-2$`, [S`$y=\log_2(x-3)-2$`, S`$y=\log_2(x+3)+2$`, S`$y=\log_2(x-2)-3$`], "Son asymptote est x = −3, et (1, 0) s'est déplacé en (−2, −2).", planeDoc({ view: { xmin: -5, xmax: 9, ymin: -5, ymax: 4 }, vlines: [va(-3)], curves: [{ f: lg(2), a: 0.01, color: "violet" }, { f: (x) => lg(2)(x + 3) - 2, a: -2.995, color: "green" }], points: [{ x: -2, y: -2, label: "(−2, −2)", color: "green" }], step: { x: 1, y: 1 } })),
  mc("À l'aide du graphique de y = log(x − 2) + 1, estime où y = 2.", "x = 12", ["x = 10", "x = 3", "x = 102"], "log(x − 2) = 1 ⇒ x − 2 = 10.", G([{ f: (x) => Math.log10(x - 2) + 1, a: 2.002, color: "violet" }], 2, [{ x: 12, y: 2, label: "(12, 2)", color: "amber" }], { xmin: -1, xmax: 15, ymin: -2, ymax: 3 })),
  num(S`Pour $y=\log_2(x+a)$, l'abscisse à l'origine est $5$. Trouve $a$.`, -4, "5 + a = 1."),
];
