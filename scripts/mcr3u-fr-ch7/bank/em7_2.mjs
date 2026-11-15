// 7.2 Suites géométriques — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch7/bank/em7_2.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsD, rd } from "./fig.mjs";

const S = String.raw;
const geo = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i);

export const E = [
  num("Trouve la raison de 3, 15, 75, …", 5, "15 ÷ 3."),
  num("Trouve la raison de 80, 40, 20, …", 0.5, "40 ÷ 80.", null, 0.0001),
  num("Trouve la raison de 2, −8, 32, …", -4, "−8 ÷ 2."),
  num("Trouve le terme suivant de 1, 6, 36, …", 216, "× 6."),
  num(S`Trouve \(t_5\) pour \(4, 12, 36,\ldots\)`, 324, "4 · 3⁴."),
  num(S`Trouve \(t_6\) pour \(1, -2, 4,\ldots\)`, -32, "(−2)⁵."),
  num(S`Pour \(t_n=3(2)^{n-1}\), trouve \(t_4\).`, 24, "3 · 8."),
  num(S`Pour \(t_n=500(0.1)^{n-1}\), trouve \(t_3\).`, 5, "500 × 0.01."),
  mc("Quelle suite est géométrique?", "5, 20, 80, 320, …", ["5, 10, 15, 20, …", "5, 6, 8, 11, …", "5, 25, 50, 100, …"], "Raison constante 4."),
  mc(S`Quel est le terme général de \(7, 14, 28,\ldots\)?`, S`\(t_n=7(2)^{n-1}\)`, [S`\(t_n=2(7)^{n-1}\)`, S`\(t_n=7(2)^n\)`, S`\(t_n=7n\)`], "a = 7, r = 2."),
  tf("Dans une suite géométrique de raison négative, les termes alternent de signe.", true, "Chaque multiplication change le signe."),
  tf("Dans une suite géométrique, la différence entre deux termes consécutifs est constante.", false, "C'est le quotient qui est constant."),
  num(S`\(t_1=2\), \(t_n=3t_{n-1}\). Trouve \(t_4\).`, 54, "2, 6, 18, 54."),
  num(S`\(t_1=64\), \(t_n=0.5\,t_{n-1}\). Trouve \(t_5\).`, 4, "64, 32, 16, 8, 4."),
  num("Quel est le rang du terme 64 dans 1, 2, 4, 8, …?", 7, "2⁶ = 64."),
  num("Une population de 500 double chaque année. Quelle est-elle au début de l'année 4 (année 1 = 500)?", 4000, "500 · 2³."),
  num("Quelle raison modélise une augmentation de 6 % à chaque période?", 1.06, "1 + 0.06.", null, 0.0001),
  mc("Quelle raison modélise une diminution de 25 % à chaque période?", "0.75", ["0.25", "1.25", "−0.25"], "1 − 0.25."),
  num("Lis la raison sur le graphique.", 2, "Chaque point double.", dotsD(geo(1, 2, 6), { labels: true })),
  num("Lis t₅ sur le graphique.", 6.25, "100, 50, 25, 12.5, 6.25.", dotsD(geo(100, 0.5, 6), { labels: true }), 0.001),
];

export const M = [
  num(S`Quel est le rang du terme 10 935 dans \(5, 15, 45,\ldots\)?`, 8, "3ⁿ⁻¹ = 2187 = 3⁷."),
  num(S`Quel est le rang du terme 1 dans \(1024, 512, 256,\ldots\)?`, 11, "(½)ⁿ⁻¹ = 1/1024."),
  num(S`Une suite géométrique a \(t_2=15\) et \(t_4=135\), avec \(r>0\). Trouve \(r\).`, 3, "r² = 9."),
  num(S`Une suite géométrique a \(t_2=15\) et \(t_4=135\), avec \(r>0\). Trouve \(a\).`, 5, "15 ÷ 3."),
  num(S`Une suite géométrique a \(t_3=-12\) et \(t_6=96\). Trouve \(r\).`, -2, "r³ = −8."),
  num(S`Trouve \(t_8\) pour \(0.5, 1.5, 4.5,\ldots\)`, 1093.5, "0.5 · 3⁷.", null, 0.001),
  num(S`Trouve \(t_7\) pour \(729, -243, 81,\ldots\)`, 1, "729(−⅓)⁶."),
  num("Combien de termes compte la suite 2, 10, 50, …, 31 250?", 7, "5ⁿ⁻¹ = 15 625 = 5⁶."),
  tf("12 est un terme de 3, 6, 12, 24, …", true, "C'est t₃."),
  tf("100 est un terme de 2, 6, 18, 54, …", false, "2·3ⁿ⁻¹ = 100 exige 3ⁿ⁻¹ = 50."),
  mc(S`\(t_1=6\), \(t_n=-2t_{n-1}\). Quelle est la formule explicite?`, S`\(t_n=6(-2)^{n-1}\)`, [S`\(t_n=-2(6)^{n-1}\)`, S`\(t_n=6-2n\)`, S`\(t_n=-12(2)^{n-1}\)`], "a = 6, r = −2."),
  ms("Lesquelles sont géométriques? Choisis toutes les bonnes réponses.", ["3, −3, 3, −3", "2, 4, 6, 8", "0.1, 0.01, 0.001", "9, 9, 9, 9", "1, 4, 9, 16"], [0, 2, 3], "Raisons −1, 0.1, 1."),
  num("Une voiture qui vaut 28 000 dollars perd 20 % de sa valeur chaque année. Combien vaut-elle au début de l'année 4 (année 1 = 28 000)? Arrondis au dollar près.", 14336, "28 000(0.8)³."),
  num("Une balle qu'on laisse tomber de 9 m rebondit chaque fois aux 2/3 de sa hauteur. Quelle est la hauteur du 3e rebond (en m, au centième près)?", rd(9 * (2 / 3) ** 3), "9(⅔)³.", null, 0.01),
  num(S`\(x\), \(x+3\) et \(2x+6\) (avec \(x>0\)) sont des termes consécutifs d'une suite géométrique. Trouve x.`, 3, "(x + 3)² = x(2x + 6) = 2x(x + 3) ⇒ x + 3 = 2x."),
  num("Le nombre de virus triple toutes les 4 heures, à partir de 200. Quel est ce nombre après 1 jour?", 145800, "6 périodes de triplement : 200 · 3⁶."),
  num("Entre 3 et 192, insère deux nombres de façon que les quatre nombres forment une suite géométrique. Quel est le deuxième nombre?", 12, "r³ = 64 ⇒ r = 4."),
  num(S`Pour \(t_n=48\left(\frac12\right)^{n-1}\), quel est le rang du premier terme inférieur à 1?`, 7, "48, 24, 12, 6, 3, 1.5, 0.75."),
  num("Le graphique montre une suite géométrique. Trouve t₈.", 1458, "a = 2, r = 3 : 2 · 3⁷.", dotsD(geo(2, 3, 5), { labels: true })),
  num("Le graphique montre une suite géométrique. Trouve r.", -0.5, "Valeurs 32, −16, 8, −4 …", dotsD(geo(32, -0.5, 6), { labels: true }), 0.0001),
];
