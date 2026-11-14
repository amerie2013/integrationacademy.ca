// 7.2 Résolution d'équations exponentielles — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { planeDoc } from "./fig.mjs";
const S = String.raw;
const L = Math.log10;

export const E = [
  num(S`Résous $3^x=50$ au centième près.`, L(50) / L(3), "x = log 50 ÷ log 3.", null, 0.01),
  num(S`Résous $5^x=8$ au millième près.`, L(8) / L(5), "x = log 8 ÷ log 5.", null, 0.002),
  num(S`Résous $10^x=420$ au millième près.`, L(420), "x = log 420.", null, 0.002),
  num(S`Résous $2^x=0.3$ au centième près.`, L(0.3) / L(2), "x = log 0.3 ÷ log 2 (négatif, car 0.3 < 1).", null, 0.01),
  num(S`Résous $1.5^x=12$ au centième près.`, L(12) / L(1.5), "x = log 12 ÷ log 1.5.", null, 0.01),
  num(S`Résous $4\cdot3^x=36$.`, 2, "Isole : 3ˣ = 9."),
  num(S`Résous $2^x+7=39$.`, 5, "2ˣ = 32."),
  num(S`Résous $6^{x}=216$.`, 3, "216 = 6³ — une base commune fonctionne."),
  mc(S`Quelle est la première étape pour résoudre $5\cdot4^x-2=48$?`, S`ajouter $2$, puis diviser par $5$`, ["prendre le logarithme des deux membres", "diviser par 4", "soustraire 5"], "Isole la puissance : 4ˣ = 10."),
  mc(S`Quelle expression est égale à la solution de $7^x=30$?`, S`$\dfrac{\log30}{\log7}$`, [S`$\log\dfrac{30}{7}$`, S`$\log30-\log7$`, S`$\dfrac{30}{7}$`], "x log 7 = log 30."),
  mc(S`Entre quels deux nombres entiers se trouve la solution de $2^x=100$?`, "6 et 7", ["5 et 6", "7 et 8", "50 et 51"], "2⁶ = 64 < 100 < 128 = 2⁷."),
  tf(S`$3^x=-27$ n'a aucune solution réelle.`, true, "3ˣ > 0 pour toute valeur de x."),
  tf(S`La solution de $2^x=10$ est $x=5$.`, false, "2⁵ = 32; x = log 10 / log 2 ≈ 3.32."),
  tf(S`Prendre le logarithme des deux membres de $4^x=20$ donne $x\log4=\log20$.`, true, "Loi de la puissance."),
  fill(S`$x=\dfrac{\log 40}{\log\,\square}$ est la solution de $9^x=40$. Le nombre manquant est ____.`, ["9"], "x log 9 = log 40."),
  fill(S`$2^x=-5$ a ____ solution(s).`, ["0", "aucune", "zéro", "zero", "no", "none"], "Les puissances de 2 sont positives."),
  num(S`Résous $10^{x+1}=50$ au millième près.`, L(50) - 1, "x + 1 = log 50.", null, 0.002),
  num(S`Résous $3^{x}=1$.`, 0, "3⁰ = 1."),
  mc("Le graphique montre y = 3ˣ et y = 20. Estime la solution de 3ˣ = 20.", "environ 2.7", ["environ 6.7", "environ 2.0", "environ 3.3"], "log 20 / log 3 ≈ 2.73.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -2, ymax: 30 }, lines: [{ m: 0, b: 20, color: "blue", dash: true }], curves: [{ f: (x) => 3 ** x, color: "violet" }], step: { x: 0.5, y: 5 } })),
  mc("Le graphique montre y = 0.5ˣ et y = 6. Estime la solution de 0.5ˣ = 6.", "environ −2.6", ["environ 2.6", "environ −6", "environ 3"], "log 6 / log 0.5 ≈ −2.58.", planeDoc({ view: { xmin: -4, xmax: 2, ymin: -1, ymax: 10 }, lines: [{ m: 0, b: 6, color: "blue", dash: true }], curves: [{ f: (x) => 0.5 ** x, color: "violet" }], step: { x: 0.5, y: 1 } })),
];

export const M = [
  num(S`Résous $3\cdot2^{x}+1=64$ au centième près.`, L(21) / L(2), "2ˣ = 21.", null, 0.01),
  num(S`Résous $5^{x+2}=300$ au millième près.`, L(300) / L(5) - 2, "(x + 2) log 5 = log 300.", null, 0.002),
  num(S`Résous $4^{2x-1}=70$ au millième près.`, (L(70) / L(4) + 1) / 2, "2x − 1 = log 70 / log 4.", null, 0.002),
  num(S`Résous $2^{x}=3^{x-2}$ au centième près.`, (2 * L(3)) / (L(3) - L(2)), "x log 2 = (x − 2) log 3 ⇒ x = 2 log 3 / (log 3 − log 2).", null, 0.01),
  num(S`Résous $5^{x}=2^{x+3}$ au centième près.`, (3 * L(2)) / (L(5) - L(2)), "x log 5 = (x + 3) log 2.", null, 0.01),
  num(S`Résous $7^{x-1}=4^{x}$ au centième près.`, L(7) / (L(7) - L(4)), "(x − 1) log 7 = x log 4.", null, 0.01),
  num(S`Résous $3^{2x}=10^{x-1}$ au centième près.`, -1 / (2 * L(3) - 1), "2x log 3 = x − 1 ⇒ x(2 log 3 − 1) = −1.", null, 0.01),
  num(S`Résous $9^x-4\cdot3^x+3=0$. Entre la racine non nulle.`, 1, "u² − 4u + 3 = 0 ⇒ 3ˣ = 1 ou 3."),
  num(S`Résous $4^x-6\cdot2^x+8=0$. Entre la plus grande racine.`, 2, "(u − 2)(u − 4) = 0."),
  num(S`Résous $4^x+2^x-20=0$.`, 2, "(u + 5)(u − 4) = 0; rejette u = −5."),
  num(S`Résous $9^x+3^x-6=0$ au millième près.`, L(2) / L(3), "(u + 3)(u − 2) = 0 ⇒ 3ˣ = 2.", null, 0.002),
  mc(S`Combien de solutions réelles l'équation $4^x-3\cdot2^x-10=0$ a-t-elle?`, "une", ["aucune", "deux", "trois"], "(u − 5)(u + 2) = 0; seule u = 5 > 0 convient."),
  mc(S`Après avoir pris le logarithme des deux membres de $6^{x}=5^{x+1}$, quelle est la ligne suivante correcte?`, S`$x\log6=(x+1)\log5$`, [S`$x\log6=x+1\log5$`, S`$\log6x=\log5(x+1)$`, S`$6x=5(x+1)$`], "Fais descendre chaque exposant entier."),
  ms(S`Sélectionne toutes les équations qui n'ont aucune solution réelle.`, [S`$2^x=-4$`, S`$3^x+1=0$`, S`$5^x=0.2$`, S`$4^x+2^x+3=0$`], [0, 1, 3], "5ˣ = 0.2 a la solution x = −1."),
  tf(S`$\log(3\cdot2^x)=x\log6$.`, false, "log(3·2ˣ) = log 3 + x log 2."),
  tf(S`Toute équation $b^x=c$ avec $b>0$, $b\ne1$, $c>0$ a exactement une solution.`, true, "x = log c / log b."),
  fill(S`Dans $25^x-7\cdot5^x+10=0$, pose $u=$ ____.`, ["5^x", "5ˣ"], "25ˣ = (5ˣ)²."),
  mc("Les graphiques de y = 2ˣ et de y = 3ˣ⁻¹ se coupent une fois. Estime l'abscisse du point d'intersection.", "environ 2.7", ["environ 1.0", "environ 6.5", "environ 4.2"], "x = log 3 / (log 3 − log 2) ≈ 2.71.", planeDoc({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 15 }, curves: [{ f: (x) => 2 ** x, color: "violet" }, { f: (x) => 3 ** (x - 1), color: "blue" }], step: { x: 0.5, y: 1 } })),
  mc("Le graphique montre y = 4ˣ − 5·2ˣ + 4. Lis ses zéros.", "x = 0 et x = 2", ["x = 1 et x = 4", "x = 0 seulement", "x = −1 et x = 2"], "u = 1 ou 4.", planeDoc({ view: { xmin: -2, xmax: 3, ymin: -3, ymax: 6 }, curves: [{ f: (x) => 4 ** x - 5 * 2 ** x + 4, color: "violet" }], step: { x: 0.5, y: 1 } })),
  num(S`Résous $2(3)^{x-1}-5=49$.`, 4, "3ˣ⁻¹ = 27."),
];
