// 7.2 Résolution d'équations exponentielles — 20 questions difficiles
import { mc, ms, num, tf } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const TOPIC = "7.2 Résolution d'équations exponentielles";
export const Q = [
  num(S`Résous $3^{2x+1}=5^{x+2}$ au millième près.`, (2 * L(5) - L(3)) / (2 * L(3) - L(5)), "(2x + 1) log 3 = (x + 2) log 5 ⇒ x = (2 log 5 − log 3)/(2 log 3 − log 5).", null, 0.002),
  num(S`Résous $2^{x+1}\cdot3^{x}=60$ au millième près.`, L(30) / L(6), "2·6ˣ = 60 ⇒ 6ˣ = 30.", null, 0.002),
  num(S`Résous $\dfrac{5^{x}}{2^{x-1}}=40$ au millième près.`, L(20) / L(2.5), "5ˣ/2ˣ · 2 = 40 ⇒ 2.5ˣ = 20.", null, 0.002),
  num(S`Résous $2\cdot9^{x}-5\cdot3^{x}+2=0$. Entre la racine positive au millième près.`, L(2) / L(3), "(2u − 1)(u − 2) = 0 ⇒ 3ˣ = 2 ou 1/2.", null, 0.002),
  num(S`Résous $2\cdot9^{x}-5\cdot3^{x}+2=0$. Entre la racine négative au millième près.`, -L(2) / L(3), "3ˣ = 1/2 ⇒ x = −log 2 / log 3.", null, 0.002),
  num(S`Résous $4^{x}-3\cdot2^{x+1}+8=0$. Entre la plus grande racine.`, 2, "u² − 6u + 8 = 0 ⇒ u = 2 ou 4."),
  num(S`Résous $3^{x}+3^{2-x}=10$. Entre la plus grande racine.`, 2, "Multiplie par 3ˣ : u² − 10u + 9 = 0 ⇒ u = 1 ou 9."),
  num(S`Résous $2^{x}-2^{-x}=\frac{15}{4}$.`, 2, "u − 1/u = 15/4 ⇒ 4u² − 15u − 4 = 0 ⇒ u = 4."),
  num(S`Quand a-t-on $600(1.07)^t=900(1.03)^t$? (au centième près)`, L(1.5) / L(1.07 / 1.03), "(1.07/1.03)ᵗ = 1.5.", null, 0.01),
  num(S`Pour quelle valeur de $x$ l'expression $5\cdot2^x$ est-elle égale à $2\cdot5^x$?`, 1, "(5/2)ˣ⁻¹ = 1 ⇒ x = 1."),
  num(S`Combien de chiffres le nombre $7^{40}$ compte-t-il?`, 34, "40 log 7 ≈ 33.80, donc 34 chiffres."),
  mc(S`La solution de $a^x=b^{x+1}$ ($a\ne b$, tous deux $>1$) est…`, S`$\dfrac{\log b}{\log a-\log b}$`, [S`$\dfrac{\log a}{\log b-\log a}$`, S`$\dfrac{\log b}{\log a}$`, S`$\log\dfrac ba$`], "x log a = x log b + log b."),
  mc(S`$4^x-k\cdot2^x+9=0$ a exactement une solution réelle quand $k$ vaut…`, "6", ["3", "9", "−6"], "Il faut une racine double u = 3 > 0 : discriminant k² − 36 = 0 et k > 0."),
  ms(S`Sélectionne toutes les équations de forme quadratique.`, [S`$9^x-3^x-2=0$`, S`$4^{x}+2^{x+3}=20$`, S`$5^x+x=7$`, S`$16^x-4^{x}=6$`], [0, 1, 3], "5ˣ + x contient x à la fois dans un exposant et en dehors."),
  tf(S`On peut résoudre $2^x=x^2$ de façon exacte en prenant les logarithmes.`, false, "x log 2 = 2 log x contient encore x à deux endroits; utilise un graphique (x = 2, 4 et x ≈ −0.77)."),
  tf(S`Si $2^a=5$ et $5^b=8$, alors $ab=3$.`, true, "a = log 5/log 2, b = log 8/log 5 = 3 log 2/log 5, donc ab = 3."),
  mc("Le graphique montre y = 2ˣ et y = x + 2. Combien de solutions l'équation 2ˣ = x + 2 a-t-elle?", "deux", ["une", "aucune", "trois"], "La droite coupe la courbe près de x ≈ −1.69 et en x = 2.", planeDoc({ view: { xmin: -3, xmax: 3, ymin: -1, ymax: 7 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], lines: [{ m: 1, b: 2, color: "blue" }], step: { x: 1, y: 1 } })),
  mc("Le graphique montre les populations A = 600(1.07)ᵗ et B = 900(1.03)ᵗ. Vers quel moment A dépasse-t-elle B?", "vers l'année 10.5", ["vers l'année 3", "vers l'année 25", "jamais"], "t = log 1.5 / log(1.07/1.03) ≈ 10.64.", planeDoc({ view: { xmin: 0, xmax: 20, ymin: 400, ymax: 2600 }, curves: [{ f: (t) => 600 * 1.07 ** t, a: 0, color: "violet" }, { f: (t) => 900 * 1.03 ** t, a: 0, color: "blue" }], step: { x: 2, y: 200 } })),
  mc("Le graphique montre y = 3ˣ + 3²⁻ˣ et y = 10. Quelles sont les solutions de 3ˣ + 3²⁻ˣ = 10?", "x = 0 et x = 2", ["x = 1 seulement", "x = 2 seulement", "x = −2 et x = 2"], "u = 1 ou 9.", planeDoc({ view: { xmin: -1, xmax: 3, ymin: 0, ymax: 14 }, curves: [{ f: (x) => 3 ** x + 3 ** (2 - x), color: "violet" }], lines: [{ m: 0, b: 10, color: "blue", dash: true }], step: { x: 0.5, y: 2 } })),
  mc("Le graphique montre y = 5·2ˣ et y = 2·5ˣ. Où se coupent-ils?", "(1, 10)", ["(0, 5)", "(2, 20)", "(1, 5)"], "5·2ˣ = 2·5ˣ ⇒ x = 1, y = 10.", planeDoc({ view: { xmin: -1, xmax: 2.5, ymin: -2, ymax: 30 }, curves: [{ f: (x) => 5 * 2 ** x, color: "violet" }, { f: (x) => 2 * 5 ** x, color: "blue" }], step: { x: 0.5, y: 5 } })),
];
