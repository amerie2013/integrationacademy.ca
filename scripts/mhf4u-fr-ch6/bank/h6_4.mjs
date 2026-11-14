// 6.4 La loi de la puissance des logarithmes — 20 questions difficiles (miroir de ../../mhf4u-ch6/bank/h6_4.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;
const EXP = (f, c, view, step = { x: 1, y: 10 }) => planeDoc({ view, lines: [{ m: 0, b: c, color: "blue", dash: true }], curves: [{ f, color: "violet" }], step });

export const TOPIC = "6.4 La loi de la puissance des logarithmes";
export const Q = [
  num(S`Résous $3^{2x-1}=40$ au millième près.`, (L(40) / L(3) + 1) / 2, "(2x − 1) log 3 = log 40.", null, 0.002),
  num(S`Résous $2^{x}=3^{x-2}$ au millième près.`, (2 * L(3)) / (L(3) - L(2)), "x log 2 = (x − 2) log 3 ⇒ x = 2 log 3 / (log 3 − log 2).", null, 0.002),
  num(S`Résous $5^{x+1}=2^{2x}$ au millième près.`, L(5) / (2 * L(2) - L(5)), "(x + 1) log 5 = 2x log 2 ⇒ x = log 5 / (2 log 2 − log 5).", null, 0.002),
  num(S`Combien de chiffres $2^{200}$ comporte-t-il?`, 61, "200 log 2 ≈ 60.2, donc 10⁶⁰ ≤ 2²⁰⁰ < 10⁶¹ : 61 chiffres."),
  num(S`Combien de chiffres $7^{40}$ comporte-t-il?`, 34, "40 log 7 ≈ 33.8."),
  num(S`Si $\log_2 3=p\approx1.585$, évalue $\log_4 27$ au millième près.`, (3 * L(3) / L(2)) / 2, "log₄ 27 = 3 log₂ 3 / 2.", null, 0.002),
  num(S`Une culture triple toutes les $5$ heures. Combien d'heures faut-il pour qu'elle devienne $100$ fois plus grande? (au centième près)`, 5 * (L(100) / L(3)), "3^(t/5) = 100 ⇒ t = 5 log 100 / log 3.", null, 0.01),
  num(S`Une voiture perd $15\%$ de sa valeur chaque année. Après combien d'années vaut-elle moins du quart de son prix? (en années entières)`, 9, "0.85ᵗ < 0.25 ⇒ t > log 0.25 / log 0.85 ≈ 8.53, donc 9 années."),
  num(S`La demi-vie est de $12$ ans. Quelle fraction reste-t-il après $30$ ans? (au millième près)`, 0.5 ** 2.5, "0.5^(30/12) = 0.5^2.5 ≈ 0.177.", null, 0.002),
  num(S`On pose $\left(\log_2x\right)\cdot\log_x 8=k$ (pour tout $x$ permis). Trouve $k$.`, 3, "log_x 8 = log₂ 8 / log₂ x = 3 / log₂ x, donc le produit vaut 3."),
  mc(S`Laquelle est égale à $\log_{b^3}x$?`, S`$\frac13\log_bx$`, [S`$3\log_bx$`, S`$\log_bx^3$`, S`$(\log_bx)^3$`], "log x / log b³ = log x / (3 log b)."),
  mc(S`Lequel est le plus grand, $3^{40}$ ou $4^{34}$?`, S`$4^{34}$`, [S`$3^{40}$`, "ils sont égaux", "on ne peut pas le dire"], "40 log 3 ≈ 19.08; 34 log 4 ≈ 20.47."),
  tf(S`$\log_ab\cdot\log_ba=1$ pour tous $a,b$ permis.`, true, "Changement de base : (log b / log a)(log a / log b) = 1."),
  tf(S`$\log_2 5^{\log_5 2}=\log_2 2$.`, true, "5^(log₅ 2) = 2."),
  ms(S`Choisis toutes les expressions égales à $\log_2 9$.`, [S`$2\log_23$`, S`$\dfrac{\log9}{\log2}$`, S`$\dfrac{2\log3}{\log2}$`, S`$\log_29\cdot\log_22$`, S`$\log_49\cdot2$`], [0, 1, 2, 3, 4], "Ce sont toutes des réécritures : log₄ 9 = log₂ 9 / 2."),
  mc(S`Résous $7^{x}=3$ de façon exacte.`, S`$\dfrac{\log3}{\log7}$`, [S`$\dfrac37$`, S`$\log\frac37$`, S`$\log3-\log7$`], "x log 7 = log 3."),
  mc("Le graphique montre y = 1.5ˣ et y = 50. Quelle est la solution exacte?", S`$\dfrac{\log50}{\log1.5}$`, [S`$\dfrac{50}{1.5}$`, S`$\log\dfrac{50}{1.5}$`, S`$50\log1.5$`], "x log 1.5 = log 50 ⇒ x ≈ 9.65.", EXP((x) => 1.5 ** x, 50, { xmin: -1, xmax: 12, ymin: -5, ymax: 70 })),
  mc("Le graphique montre y = 3ˣ et y = 2ˣ⁺¹. Où se rencontrent-elles? (au centième près)", "x ≈ 1.71", ["x ≈ 0.63", "x = 1", "x ≈ 2.71"], "x log 3 = (x + 1) log 2 ⇒ x = log 2 / (log 3 − log 2) ≈ 1.71.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 20 }, curves: [{ f: (x) => 3 ** x, color: "violet" }, { f: (x) => 2 ** (x + 1), color: "green" }], step: { x: 1, y: 2 } })),
  mc("Le graphique montre une courbe de décroissance y = 200(0.92)ᵗ et le niveau 50. Estime le temps.", "environ 16.6", ["environ 4", "environ 25", "environ 8.3"], "0.92ᵗ = 0.25 ⇒ t = log 0.25 / log 0.92 ≈ 16.6.", EXP((t) => 200 * 0.92 ** t, 50, { xmin: -1, xmax: 30, ymin: -10, ymax: 220 }, { x: 5, y: 20 })),
  mc("Le graphique est celui de y = log₅ x. Quelle valeur est log₅ 40, par changement de base?", "environ 2.29", ["environ 8", "environ 1.6", "environ 3.29"], "log 40 / log 5 ≈ 1.602 / 0.699.", planeDoc({ view: { xmin: -1, xmax: 45, ymin: -1, ymax: 3 }, curves: [{ f: (x) => L(x) / L(5), a: 0.05, color: "violet" }], points: [{ x: 25, y: 2, label: "(25, 2)", color: "blue" }, { x: 40, y: L(40) / L(5), label: "(40, ?)", color: "amber" }], step: { x: 5, y: 1 } })),
];
