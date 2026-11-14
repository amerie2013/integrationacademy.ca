// 7.3 Loi du produit et loi du quotient des logarithmes — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const E = [
  mc(S`Quelle égalité est la loi du produit des logarithmes?`, S`$\log_b(xy)=\log_bx+\log_by$`, [S`$\log_b(xy)=\log_bx\cdot\log_by$`, S`$\log_b(x+y)=\log_bx+\log_by$`, S`$\log_b(xy)=y\log_bx$`], "Multiplier des puissances additionne les exposants."),
  mc(S`Quelle égalité est la loi du quotient des logarithmes?`, S`$\log_b\frac xy=\log_bx-\log_by$`, [S`$\log_b\frac xy=\frac{\log_bx}{\log_by}$`, S`$\log_b\frac xy=\log_by-\log_bx$`, S`$\log_b(x-y)=\log_bx-\log_by$`], "Diviser des puissances soustrait les exposants."),
  num(S`Évalue $\log_2 4+\log_2 8$.`, 5, "log₂ 32 = 5."),
  num(S`Évalue $\log 25+\log 4$.`, 2, "log 100 = 2."),
  num(S`Évalue $\log_3 36-\log_3 4$.`, 2, "log₃ 9 = 2."),
  num(S`Évalue $\log_5 250-\log_5 2$.`, 3, "log₅ 125 = 3."),
  num(S`Évalue $\log_8 2+\log_8 4$.`, 1, "log₈ 8 = 1."),
  num(S`Évalue $\log_4 2+\log_4 32$.`, 3, "log₄ 64 = 3."),
  num(S`Évalue $\log 5000-\log 5$.`, 3, "log 1000 = 3."),
  num(S`Évalue $\log_6 2+\log_6 18$.`, 2, "log₆ 36 = 2."),
  tf(S`$\log(3x)=\log3+\log x$ pour $x>0$.`, true, "Loi du produit."),
  tf(S`$\log(x+3)=\log x+\log3$ pour $x>0$.`, false, "Il n'existe aucune loi pour le logarithme d'une somme."),
  tf(S`$\log_2 20-\log_2 5=\log_2 4$.`, true, "20 ÷ 5 = 4."),
  tf(S`$\dfrac{\log 8}{\log 2}=\log 4$.`, false, "log 8 / log 2 = log₂ 8 = 3, alors que log 4 ≈ 0.602."),
  fill(S`$\log_7 a+\log_7 b=\log_7(\ \_\_\_\ )$. Écris l'argument.`, ["ab", "a*b", "ba"], "Loi du produit."),
  fill(S`$\log m-\log n=\log(\ \_\_\_\ )$. Écris l'argument.`, ["m/n"], "Loi du quotient."),
  mc(S`Condense $\log x+\log y$.`, S`$\log(xy)$`, [S`$\log(x+y)$`, S`$\log x\cdot\log y$`, S`$2\log(x+y)$`], "Loi du produit."),
  mc(S`Développe $\log_2(8x)$.`, S`$3+\log_2x$`, [S`$8\log_2x$`, S`$3\log_2x$`, S`$\log_28\cdot\log_2x$`], "log₂ 8 = 3."),
  mc("Le graphique montre y = log x et y = log(100x). Quel lien existe-t-il entre eux?", "y = log(100x) est y = log x translaté de 2 vers le haut", ["translaté de 100 vers la gauche", "agrandi d'un facteur 100", "translaté de 100 vers le haut"], "log(100x) = 2 + log x.", planeDoc({ view: { xmin: -0.5, xmax: 10, ymin: -2, ymax: 3.5 }, curves: [{ f: (x) => L(x), a: 0.02, color: "gray" }, { f: (x) => L(100 * x), a: 0.002, color: "violet" }], step: { x: 1, y: 0.5 } })),
  mc("Le graphique montre y = log₂ x et deux points marqués. Utilise-les avec la loi du produit pour trouver log₂ 32.", "5", ["6", "10", "4"], "log₂ 4 + log₂ 8 = 2 + 3.", planeDoc({ view: { xmin: -1, xmax: 10, ymin: -2, ymax: 4 }, curves: [{ f: (x) => Math.log2(x), a: 0.05, color: "violet" }], points: [{ x: 4, y: 2, label: "(4, 2)", color: "amber" }, { x: 8, y: 3, label: "(8, 3)", color: "amber" }], step: { x: 1, y: 1 } })),
];

export const M = [
  num(S`Évalue $\log_2 24+\log_2 \tfrac{2}{3}$.`, 4, "24 × 2/3 = 16."),
  num(S`Évalue $\log_3 45-\log_3 5+\log_3 3$.`, 3, "45 ÷ 5 × 3 = 27."),
  num(S`Évalue $2\log 5+\log 4$.`, 2, "log 25 + log 4 = log 100."),
  num(S`Évalue $\log_4 48-\log_4 3$.`, 2, "log₄ 16 = 2."),
  num(S`Évalue $3\log_2 6-3\log_2 3$.`, 3, "3 log₂ 2 = 3."),
  num(S`Évalue $\log_9 3+\log_9 27$.`, 2, "log₉ 81 = 2."),
  num(S`Sachant que $\log2\approx0.3010$ et $\log3\approx0.4771$, estime $\log 54$.`, 0.3010 + 3 * 0.4771, "54 = 2 × 3³.", null, 0.0015),
  num(S`Sachant que $\log2\approx0.3010$, estime $\log 0.25$.`, -2 * 0.3010, "0.25 = 1/2².", null, 0.0015),
  num(S`Sachant que $\log2\approx0.3010$ et $\log3\approx0.4771$, estime $\log 1.2$.`, 2 * 0.3010 + 0.4771 - 1, "1.2 = 2² × 3 / 10.", null, 0.0015),
  mc(S`Développe $\log\dfrac{x^2}{y}$.`, S`$2\log x-\log y$`, [S`$\log 2x-\log y$`, S`$\dfrac{2\log x}{\log y}$`, S`$2\log x+\log y$`], "Loi du quotient, puis loi de la puissance."),
  mc(S`Développe $\log_3(9\sqrt x)$.`, S`$2+\tfrac12\log_3x$`, [S`$9+\tfrac12\log_3x$`, S`$2\log_3x$`, S`$\tfrac12(2+\log_3x)$`], "log₃ 9 = 2, √x = x^(1/2)."),
  mc(S`Condense $\log a-2\log b$.`, S`$\log\dfrac{a}{b^2}$`, [S`$\log\dfrac{a}{2b}$`, S`$\log(a-b^2)$`, S`$\dfrac{\log a}{\log b^2}$`], "Loi de la puissance, puis loi du quotient."),
  mc(S`Condense $3\log_2x+\log_2y-\log_2z$.`, S`$\log_2\dfrac{x^3y}{z}$`, [S`$\log_2\dfrac{3xy}{z}$`, S`$\log_2(x^3+y-z)$`, S`$3\log_2\dfrac{xy}{z}$`], "Les coefficients deviennent d'abord des exposants."),
  ms(S`Sélectionne toutes les expressions égales à $\log 12$.`, [S`$\log3+\log4$`, S`$2\log2+\log3$`, S`$\log24-\log2$`, S`$\log6\cdot\log2$`], [0, 1, 2], "Un produit de logarithmes ne correspond à aucune loi."),
  tf(S`$\log_5(xy^3)=\log_5x+3\log_5y$.`, true, "Loi du produit, puis loi de la puissance."),
  tf(S`$\log\dfrac{1}{x}=-\log x$ pour $x>0$.`, true, "log 1 − log x = 0 − log x."),
  fill(S`Si $\log_b x=4$ et $\log_b y=1.5$, alors $\log_b(xy)=$ ____.`, ["5.5"], "4 + 1.5."),
  fill(S`Si $\log_b x=4$ et $\log_b y=1.5$, alors $\log_b\frac{x}{y^2}=$ ____.`, ["1"], "4 − 2(1.5)."),
  mc("Le graphique montre y = log₃ x avec les points (3, 1) et (27, 3). Quelle valeur découle de la loi du quotient?", "log₃ 9 = 2", ["log₃ 9 = 3", "log₃ 24 = 2", "log₃ 30 = 4"], "log₃ 27 − log₃ 3 = log₃ 9.", planeDoc({ view: { xmin: -1, xmax: 30, ymin: -1, ymax: 4 }, curves: [{ f: (x) => Math.log(x) / Math.log(3), a: 0.05, color: "violet" }], points: [{ x: 3, y: 1, label: "(3, 1)", color: "blue" }, { x: 27, y: 3, label: "(27, 3)", color: "blue" }], step: { x: 3, y: 1 } })),
  mc("Le graphique montre y = log(x/10) et y = log x. Quel énoncé est vrai?", "log(x/10) = log x − 1", ["log(x/10) = log x ÷ 10", "log(x/10) = log x − 10", "log(x/10) = 10 log x"], "Loi du quotient : log 10 = 1.", planeDoc({ view: { xmin: -1, xmax: 25, ymin: -2.5, ymax: 2 }, curves: [{ f: (x) => L(x), a: 0.02, color: "gray" }, { f: (x) => L(x / 10), a: 0.05, color: "violet" }], step: { x: 2, y: 0.5 } })),
];
