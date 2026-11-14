// 6.4 La loi de la puissance des logarithmes — 20 questions faciles + 20 moyennes (miroir de ../../mhf4u-ch6/bank/em6_4.mjs)
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const E = [
  mc(S`Laquelle est la loi de la puissance des logarithmes?`, S`$\log_b(x^n)=n\log_bx$`, [S`$\log_b(x^n)=(\log_bx)^n$`, S`$\log_b(nx)=n\log_bx$`, S`$\log_b(x^n)=\log_bn+\log_bx$`], "Elle découle de (bᵐ)ⁿ = bᵐⁿ."),
  num(S`Évalue $\log_2\left(2^9\right)$.`, 9, "Loi de la puissance : 9 log₂ 2 = 9."),
  num(S`Évalue $\log\left(100^3\right)$.`, 6, "3 log 100 = 3 × 2."),
  num(S`Évalue $\log_3\left(9^5\right)$.`, 10, "5 log₃ 9 = 5 × 2."),
  num(S`Évalue $\log_5\left(25^{-2}\right)$.`, -4, "−2 log₅ 25 = −2 × 2."),
  num(S`Évalue $\log\sqrt{10}$ (en décimale).`, 0.5, "½ log 10.", null, 0.001),
  num(S`Évalue $\log_2\sqrt[4]{16}$.`, 1, "¼ log₂ 16 = ¼ × 4."),
  mc(S`Quelle formule transforme $\log_bx$ en logarithmes décimaux?`, S`$\dfrac{\log x}{\log b}$`, [S`$\dfrac{\log b}{\log x}$`, S`$\log x-\log b$`, S`$\log(x-b)$`], "Changement de base : log_b x = log x / log b."),
  num(S`Évalue $\log_2 10$ au centième près.`, L(10) / L(2), "log 10 ÷ log 2 = 1 ÷ 0.3010.", null, 0.01),
  num(S`Évalue $\log_5 70$ au centième près.`, L(70) / L(5), "log 70 ÷ log 5.", null, 0.01),
  num(S`Résous $2^x=30$ au centième près.`, L(30) / L(2), "x = log 30 ÷ log 2.", null, 0.01),
  num(S`Résous $10^x=500$ au millième près.`, L(500), "x = log 500.", null, 0.002),
  tf(S`$\log(x^3)=3\log x$ pour $x>0$.`, true, "Loi de la puissance."),
  tf(S`$(\log x)^2=2\log x$ pour tout $x>0$.`, false, "La puissance est à l'extérieur du logarithme. En x = 1000 : (log x)² = 9, mais 2 log x = 6."),
  tf(S`$\log_3 20=\log20-\log3$.`, false, "C'est un quotient : log 20 ÷ log 3."),
  fill(S`$\log_b\left(x^5\right)=$ ____ $\log_bx$.`, ["5"], "L'exposant descend."),
  fill(S`Pour résoudre $7^x=20$, on prend le ____ des deux membres.`, ["log", "logarithme", "logarithmes", "logarithme décimal", "logarithm"], "Ensuite, on utilise la loi de la puissance."),
  mc(S`Entre quels entiers se trouve la solution de $3^x=50$?`, "3 et 4", ["2 et 3", "4 et 5", "16 et 17"], "3³ = 27 < 50 < 81 = 3⁴."),
  mc("Le graphique montre y = 2ˣ et y = 30. Estime la solution de 2ˣ = 30.", "environ 4.9", ["environ 15", "environ 4", "environ 5.9"], "2⁴ = 16 et 2⁵ = 32 : un peu moins que 5; exactement log 30/log 2 ≈ 4.91.", planeDoc({ view: { xmin: -1, xmax: 6, ymin: -5, ymax: 40 }, lines: [{ m: 0, b: 30, color: "blue", dash: true }], curves: [{ f: (x) => 2 ** x, color: "violet" }], step: { x: 1, y: 5 } })),
  mc("Le graphique est celui de y = log₃ x. Estime log₃ 20.", "environ 2.7", ["environ 6.7", "environ 1.3", "environ 3.7"], "9 < 20 < 27, donc entre 2 et 3; log 20/log 3 ≈ 2.73.", planeDoc({ view: { xmin: -1, xmax: 30, ymin: -1, ymax: 4 }, curves: [{ f: (x) => L(x) / L(3), a: 0.05, color: "violet" }], points: [{ x: 9, y: 2, label: "(9, 2)", color: "blue" }, { x: 27, y: 3, label: "(27, 3)", color: "blue" }], step: { x: 3, y: 1 } })),
];

export const M = [
  num(S`Simplifie $6\log_2x-\log_2x^4$ sous la forme $n\log_2x$. Trouve $n$.`, 2, "6 log₂ x − 4 log₂ x."),
  num(S`Évalue $\log_4\left(8^2\right)$.`, 3, "2 log₄ 8 = 2 × 3/2."),
  num(S`Évalue $\log_9\sqrt{27}$ (en décimale).`, 0.75, "½ log₉ 27 = ½ × 3/2.", null, 0.001),
  num(S`Résous $5\cdot3^x=200$ au centième près.`, L(40) / L(3), "Isole : 3ˣ = 40; x = log 40 ÷ log 3.", null, 0.01),
  num(S`Résous $4^{x+1}=90$ au centième près.`, L(90) / L(4) - 1, "(x + 1) log 4 = log 90.", null, 0.01),
  num(S`Résous $6^{2x}=500$ au millième près.`, L(500) / (2 * L(6)), "2x log 6 = log 500.", null, 0.002),
  num(S`Résous $0.5^x=0.1$ au millième près.`, L(0.1) / L(0.5), "x = log 0.1 ÷ log 0.5 = −1 ÷ −0.3010.", null, 0.002),
  num(S`Combien d'années faut-il pour qu'un montant double à $4\%$ par année? (au centième près)`, L(2) / L(1.04), "1.04ᵗ = 2.", planeDoc({ view: { xmin: -1, xmax: 25, ymin: -0.2, ymax: 3 }, lines: [{ m: 0, b: 2, color: "blue", dash: true }], curves: [{ f: (t) => 1.04 ** t, color: "violet" }], step: { x: 2, y: 0.5 } }), 0.01),
  num(S`Une substance se désintègre de $10\%$ par heure. Trouve sa demi-vie en heures (au centième près).`, L(0.5) / L(0.9), "0.9ᵗ = 0.5.", null, 0.01),
  num(S`Évalue $\log_{0.2}25$.`, -2, "log 25 ÷ log 0.2 = 1.398 ÷ (−0.699) = −2 (puisque 0.2⁻² = 25)."),
  mc(S`Laquelle est égale à $\log_2 7$?`, S`$\dfrac{\log 7}{\log 2}$`, [S`$\dfrac{\log2}{\log7}$`, S`$\log\frac72$`, S`$7\log2$`], "Changement de base."),
  mc(S`Quelle est la première étape pour résoudre $3\cdot2^{x}=48$?`, S`diviser les deux membres par $3$`, ["prendre immédiatement le log des deux membres", "soustraire 3", "multiplier par 2"], "Isole d'abord la puissance : 2ˣ = 16, x = 4."),
  ms(S`Choisis toutes les expressions égales à $3\log x$ pour $x>0$.`, [S`$\log x^3$`, S`$\log x+\log x+\log x$`, S`$(\log x)^3$`, S`$\log 3x$`], [0, 1], "x³ = x·x·x, et chaque facteur ajoute log x."),
  tf(S`$x=\dfrac{\log 9}{\log 3}$ est la solution de $3^x=9$, et elle vaut $2$.`, true, "log 9 = 2 log 3."),
  tf(S`La solution de $1.05^t=2$ ne dépend pas du montant de départ.`, true, "Le montant de départ s'annule lorsqu'on divise."),
  mc(S`$\log2\approx0.301$. Estime $\log 8$.`, "0.903", ["2.408", "0.602", "1.301"], "log 8 = 3 log 2."),
  mc(S`$\log3\approx0.477$. Estime $\log 81$.`, "1.908", ["0.954", "4.77", "2.43"], "log 81 = 4 log 3."),
  mc("Le graphique montre la courbe de décroissance y = 0.8ᵗ et y = 0.5. Estime la demi-vie.", "environ 3.1", ["environ 0.5", "environ 6", "environ 1.6"], "t = log 0.5 / log 0.8 ≈ 3.11.", planeDoc({ view: { xmin: -0.5, xmax: 10, ymin: -0.1, ymax: 1.1 }, lines: [{ m: 0, b: 0.5, color: "blue", dash: true }], curves: [{ f: (t) => 0.8 ** t, color: "violet" }], step: { x: 1, y: 0.1 } })),
  fill(S`$\log_b x^{1/2}=$ ____ $\log_bx$ (une fraction comme 1/2).`, ["1/2", "0.5", "½"], "Les racines sont des puissances fractionnaires."),
  num(S`Résous $2^x=5^{x-2}$ au centième près.`, (2 * L(5)) / (L(5) - L(2)), "x log 2 = (x − 2) log 5 ⇒ x = 2 log 5 / (log 5 − log 2).", null, 0.01),
];
