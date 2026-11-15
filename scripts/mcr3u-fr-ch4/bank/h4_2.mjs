// 4.2 Exposants rationnels — 20 questions difficiles (miroir de ../../mcr3u-ch4/bank/h4_2.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

export const TOPIC = "4.2 Exposants rationnels";
export const Q = [
  num(String.raw`Évalue $16^{3/4}-8^{2/3}+81^{-1/4}$ (au millième près).`, 8 - 4 + 1 / 3, "8 − 4 + ⅓.", null, 0.0005),
  num(String.raw`Résous $x^{-2/3}=\frac19$ pour $x>0$.`, 27, "x^(2/3) = 9 → x = 9^(3/2).", planeDoc({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 0.6 }, curves: [{ f: (x) => x ** (-2 / 3), a: 0.5, color: "violet" }], lines: [{ m: 0, b: 1 / 9, color: "amber", dash: true }], points: [P(27, 1 / 9, "(27, 1/9)")], step: { x: 5, y: 0.1 } })),
  num(String.raw`Résous $(x-1)^{3/2}=8$.`, 5, "x − 1 = 8^(2/3) = 4."),
  num(String.raw`Évalue $4^{-3/2}\cdot8^{4/3}$.`, 2, "⅛ · 16."),
  mc(String.raw`Évalue $\left(\tfrac{27}{8}\right)^{-2/3}$.`, String.raw`$\frac49$`, [String.raw`$\frac94$`, String.raw`$-\frac94$`, String.raw`$\frac{8}{27}$`], "(8/27)^(2/3) = (2/3)²."),
  num(String.raw`Évalue $0.0016^{1/4}$.`, 0.2, "0.2⁴ = 0.0016.", null, 1e-9),
  num("Le graphique montre y = 16ˣ. Trouve y à x = −0.75 (sous forme décimale).", 0.125, "16^(−3/4) = 1/8.", planeDoc({ view: { xmin: -1.5, xmax: 1, ymin: -1, ymax: 17 }, curves: [{ f: (x) => 16 ** x, color: "violet" }], points: [P(-0.75, 0.125, "(−0.75, ?)")], step: { x: 0.25, y: 2 } }), 1e-9),
  tf(String.raw`$\left(a^2\right)^{1/2}=a$ pour tout nombre réel $a$.`, false, "Pour a = −3, on obtient 3 : l'expression est égale à |a|."),
  num("Un cube a un volume de 512 cm³. Utilise V^(2/3) pour trouver son aire totale 6V^(2/3) (en cm²).", 384, "512^(2/3) = 64; 6 × 64."),
  num(String.raw`La période de révolution d'une planète est $T=a^{3/2}$ années, où $a$ est en unités astronomiques. Trouve $T$ pour $a=4$.`, 8, "4^(3/2) = 2³."),
  num("Le graphique montre T = a^(3/2). Trouve T quand a = 9.", 27, "√9³.", planeDoc({ view: { xmin: 0, xmax: 12, ymin: 0, ymax: 40 }, curves: [{ f: (a) => a ** 1.5, a: 0, color: "violet" }], points: [P(9, 27)], step: { x: 1, y: 5 }, xlabel: "a (UA)", ylabel: "T (années)" })),
  num(String.raw`Résous $2^{x/2}=32$.`, 10, "x/2 = 5."),
  ms("Lesquels sont irrationnels? Choisis toutes les bonnes réponses.", [String.raw`$8^{1/2}$`, String.raw`$8^{1/3}$`, String.raw`$27^{2/3}$`, String.raw`$2^{3/2}$`, String.raw`$16^{3/4}$`], [0, 3], "√8 = 2√2 et 2^(3/2) = 2√2; les autres valent 2, 9 et 8."),
  num(String.raw`Évalue $\left(\sqrt2\right)^6$.`, 8, "2^(6/2)."),
  num(String.raw`Évalue $9^{0.5}+27^{1/3}\cdot4^{0.5}$.`, 9, "3 + 3 × 2."),
  num(String.raw`Trouve la solution positive de $x^{1/2}=\frac x4$.`, 16, "x = x²/16."),
  mc(String.raw`Lequel est le plus grand : $2^{1/2}$, $3^{1/3}$ ou $6^{1/6}$?`, String.raw`$3^{1/3}$`, [String.raw`$2^{1/2}$`, String.raw`$6^{1/6}$`, "ils sont égaux"], "Élève tout à la puissance 6 : 8, 9, 6."),
  num("Le graphique montre y = x^(2/3), qui est aussi définie pour les x négatifs. Trouve y à x = −8.", 4, "(∛−8)² = (−2)².", planeDoc({ view: { xmin: -10, xmax: 10, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.cbrt(x) ** 2, color: "violet" }], points: [P(-8, 4), P(8, 4)], step: { x: 2, y: 1 } })),
  num(String.raw`Évalue $\left(64^{1/3}\right)^{1/2}$.`, 2, "4^(1/2)."),
  num(String.raw`Le métabolisme de base d'un animal est modélisé par $M=70m^{3/4}$ (m en kg). Trouve $M$ pour un animal de 16 kg.`, 560, "16^(3/4) = 8."),
];
