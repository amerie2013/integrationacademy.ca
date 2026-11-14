// 6.2 Logarithmes — 20 questions difficiles (miroir de ../../mhf4u-ch6/bank/h6_2.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
const G = (curves, pts, view) => planeDoc({ view, curves, points: pts, step: { x: 1, y: 1 } });

export const TOPIC = "6.2 Logarithmes";
export const Q = [
  num(S`Évalue $\log_{1/3}81$.`, -4, "(1/3)^y = 81 ⇒ 3^(−y) = 3⁴ ⇒ y = −4."),
  num(S`Évalue $\log_{\sqrt3}27$.`, 6, "3^(y/2) = 3³ ⇒ y = 6."),
  num(S`Évalue $\log_{32}16$ (en décimale).`, 0.8, "2^(5y) = 2⁴ ⇒ y = 4/5.", null, 0.001),
  num(S`Évalue $\log_8\frac1{4}$ (au millième près).`, -2 / 3, "2^(3y) = 2⁻² ⇒ y = −2/3.", null, 0.002),
  num(S`Évalue $\log_2\left(\log_3 81\right)$.`, 2, "À l'intérieur : log₃ 81 = 4; ensuite log₂ 4 = 2."),
  num(S`Évalue $\log_5\left(\log_2\left(\log_3 3^{32}\right)\right)$.`, 1, "Travaille de l'intérieur : log₃ 3³² = 32; log₂ 32 = 5; log₅ 5 = 1."),
  num(S`Trouve $x$ si $\log_x\frac1{16}=-\frac43$.`, 8, "x^(−4/3) = 1/16 ⇒ x^(4/3) = 16 ⇒ x = 16^(3/4) = 8."),
  num(S`Trouve $x$ si $\log_3(2x-1)=2$.`, 5, "2x − 1 = 3² = 9 ⇒ x = 5."),
  num(S`Trouve $x$ si $\log_2(\log_3 x)=1$.`, 9, "log₃ x = 2¹ = 2 ⇒ x = 3² = 9."),
  num(S`Évalue $2^{3\log_2 5}$ à l'aide de $b^{\log_b x}=x$ (indice : $3\log_25$ est un exposant).`, 125, "2^(3 log₂ 5) = (2^(log₂ 5))³ = 5³ = 125."),
  mc(S`Pour quelles valeurs de $x$ l'expression $\log_2(x-4)$ est-elle définie?`, S`$x>4$`, [S`$x\ge4$`, S`$x>0$`, S`$x<4$`], "L'argument x − 4 doit être positif."),
  mc(S`Lequel est le plus grand : $\log_2 10$ ou $\log_3 30$?`, S`$\log_2 10$`, [S`$\log_3 30$`, "ils sont égaux", "on ne peut pas le déterminer"], "log₂ 10 ≈ 3.32 (entre 3 et 4); log₃ 30 ≈ 3.10 (entre 3 et 4, mais 30 est beaucoup plus près de 27)."),
  tf(S`Si $0<x<1$ et $b>1$, alors $\log_bx<0$.`, true, "Pour rendre b plus petit que 1, il faut un exposant négatif."),
  tf(S`$\log_b b^b=b$ pour toute base $b$ permise.`, true, "log_b bˣ = x avec x = b."),
  ms(S`Choisis tous les énoncés vrais pour $b>1$.`, [S`$\log_b b^2=2$`, S`$\log_b\frac1b=-1$`, S`$\log_b0=0$`, S`$\log_b\sqrt b=\frac12$`], [0, 1, 3], "log_b 0 n'est pas défini : aucune puissance de b ne vaut 0."),
  num(S`Un nombre entier $N$ a $\log N\approx5.62$. Combien de chiffres $N$ a-t-il?`, 6, "10⁵ ≤ N < 10⁶, donc N a 6 chiffres."),
  mc("Le graphique montre y = log_b x qui passe par (1/9, −2). Trouve b.", "3", ["9", "1/3", "−3"], "b⁻² = 1/9 ⇒ b² = 9 ⇒ b = 3.", G([{ f: lg(3), a: 0.005, color: "violet" }], [{ x: 1 / 9, y: -2, label: "(1/9, −2)", color: "blue" }], { xmin: -1, xmax: 10, ymin: -4, ymax: 3 })),
  mc("Le graphique montre y = log₂ x et y = log₄ x. Où se rencontrent-elles?", "seulement en (1, 0)", ["en (2, 1) et en (4, 2)", "seulement en (4, 1)", "elles ne se rencontrent jamais"], "Tout graphique logarithmique passe par (1, 0); ailleurs, log₄ x = ½ log₂ x ≠ log₂ x.", G([{ f: lg(2), a: 0.01, color: "violet" }, { f: lg(4), a: 0.01, color: "green" }], [{ x: 1, y: 0, label: "(1, 0)", color: "amber" }], { xmin: -1, xmax: 17, ymin: -3, ymax: 5 })),
  mc("Lis le graphique de y = log x. Quelle valeur de x donne y = 2.5 (au nombre entier près)?", "316", ["250", "25", "1000"], "x = 10^2.5 ≈ 316.", planeDoc({ view: { xmin: -20, xmax: 1100, ymin: -1, ymax: 3.5 }, curves: [{ f: Math.log10, a: 0.5, color: "violet" }], points: [{ x: 316, y: 2.5, label: "(?, 2.5)", color: "amber" }], step: { x: 100, y: 0.5 } })),
  mc("Le graphique montre y = log_{1/2} x. Quel énoncé est vrai?", "elle est décroissante et passe par (2, −1)", ["elle est croissante et passe par (2, 1)", "elle passe par (0, 1)", "son domaine est l'ensemble des réels"], "(1/2)⁻¹ = 2.", G([{ f: lg(0.5), a: 0.01, color: "violet" }], [{ x: 2, y: -1, label: "(2, −1)", color: "blue" }], { xmin: -1, xmax: 9, ymin: -4, ymax: 4 })),
];
