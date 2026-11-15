// 7.1 Suites arithmétiques — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch7/bank/em7_1.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsD } from "./fig.mjs";

const S = String.raw;
const arr = (a, d, n) => Array.from({ length: n }, (_, i) => a + i * d);

export const E = [
  num("Trouve la raison de 4, 10, 16, 22, …", 6, "10 − 4."),
  num("Trouve la raison de 30, 23, 16, …", -7, "23 − 30."),
  num("Trouve le terme suivant de 8, 11, 14, 17, …", 20, "Additionne 3."),
  num(S`Trouve \(t_{10}\) pour \(2, 5, 8,\ldots\)`, 29, "2 + 9(3)."),
  num(S`Trouve \(t_8\) pour \(100, 95, 90,\ldots\)`, 65, "100 + 7(−5)."),
  num(S`Pour \(t_n=6n-4\), trouve \(t_5\).`, 26, "30 − 4."),
  num(S`Pour \(t_n=20-3n\), trouve \(t_4\).`, 8, "20 − 12."),
  num(S`Pour \(f(n)=2n+9\), trouve \(f(11)\).`, 31, "22 + 9."),
  mc("Quelle suite est arithmétique?", "12, 9, 6, 3, …", ["1, 3, 9, 27, …", "1, 2, 4, 7, …", "2, 4, 8, 14, …"], "Différence constante −3."),
  mc(S`Quel est le terme général de \(5, 9, 13,\ldots\)?`, S`\(t_n=4n+1\)`, [S`\(t_n=5n+4\)`, S`\(t_n=4n+5\)`, S`\(t_n=n+4\)`], "a = 5, d = 4 : 5 + 4(n − 1)."),
  tf("Une suite arithmétique peut avoir une raison négative.", true, "Les termes diminuent alors."),
  tf("Le graphique d'une suite arithmétique est une droite continue.", false, "Il est formé de points séparés : le domaine est formé de nombres entiers."),
  num(S`\(t_1=7\), \(t_n=t_{n-1}+5\). Trouve \(t_3\).`, 17, "7, 12, 17."),
  num(S`\(t_1=-2\), \(t_n=t_{n-1}-4\). Trouve \(t_4\).`, -14, "−2, −6, −10, −14."),
  num("Quel est le premier terme de la suite définie par t_n = 3n + 8?", 11, "n = 1."),
  num("Quel est le rang du terme 45 dans 3, 6, 9, …?", 15, "3n = 45."),
  num(S`Trouve \(t_{20}\) pour \(1.5, 2, 2.5,\ldots\)`, 11, "1.5 + 19(0.5)."),
  mc(S`Quelle est la raison de \(t_n=7-2n\)?`, S`\(-2\)`, [S`\(7\)`, S`\(2\)`, S`\(5\)`], "Le coefficient de n."),
  num("Lis la raison sur le graphique.", 3, "Chaque point est 3 unités plus haut.", dotsD(arr(2, 3, 6), { labels: true })),
  num("Lis t₆ sur le graphique.", -5, "Valeurs 10, 7, 4, 1, −2, −5.", dotsD(arr(10, -3, 6), { labels: true })),
];

export const M = [
  num(S`Trouve le terme général de \(13, 20, 27,\ldots\) et donne \(t_{50}\).`, 356, "tₙ = 7n + 6."),
  num(S`Quel est le rang du terme 166 dans \(5, 12, 19,\ldots\)?`, 24, "7n − 2 = 166."),
  num(S`Quel est le rang du terme 2 dans \(90, 86, 82,\ldots\)?`, 23, "94 − 4n = 2."),
  num(S`Une suite arithmétique a \(t_3=17\) et \(t_8=42\). Trouve \(d\).`, 5, "5d = 25."),
  num(S`Une suite arithmétique a \(t_3=17\) et \(t_8=42\). Trouve \(a\).`, 7, "17 − 2(5)."),
  num(S`Une suite arithmétique a \(t_2=-1\) et \(t_6=-21\). Trouve \(t_{10}\).`, -41, "d = −5; t₁₀ = t₆ + 4d."),
  num("Combien de termes compte la suite 12, 17, 22, …, 247?", 48, "(247 − 12)/5 + 1."),
  num("Combien de termes compte la suite 50, 47, 44, …, −16?", 23, "(50 − (−16))/3 + 1."),
  tf("75 est un terme de 4, 9, 14, 19, …", false, "5n − 1 = 75 donne n = 15.2."),
  tf("99 est un terme de 3, 7, 11, 15, …", true, "4n − 1 = 99 donne n = 25."),
  mc(S`\(t_1=8\), \(t_n=t_{n-1}-3\). Quelle est la formule explicite?`, S`\(t_n=11-3n\)`, [S`\(t_n=8-3n\)`, S`\(t_n=3n+8\)`, S`\(t_n=5-3n\)`], "8 + (n − 1)(−3)."),
  mc(S`Quelle formule de récurrence correspond à \(t_n=4n-9\)?`, S`\(t_1=-5,\ t_n=t_{n-1}+4\)`, [S`\(t_1=4,\ t_n=t_{n-1}-9\)`, S`\(t_1=-9,\ t_n=t_{n-1}+4\)`, S`\(t_1=-5,\ t_n=4t_{n-1}\)`], "t₁ = 4 − 9 = −5, d = 4."),
  ms("Lesquelles sont arithmétiques? Choisis toutes les bonnes réponses.", ["−3, 1, 5, 9", "0.5, 1, 1.5, 2", "2, 6, 18, 54", "7, 7, 7, 7", "1, 4, 9, 16"], [0, 1, 3], "Une suite constante a d = 0."),
  num("Un abonnement au gym coûte 60 dollars à l'inscription plus 25 dollars par mois. Quel est le total payé à la fin du mois 12?", 360, "60 + 25(12)."),
  num("Une plante mesure 14 cm et pousse de 1.5 cm par semaine. Pendant quelle semaine atteint-elle 41 cm pour la première fois (semaine 1 → 15.5 cm)?", 18, "14 + 1.5n ≥ 41."),
  num(S`\(x+1\), \(3x\) et \(4x+2\) sont des termes consécutifs d'une suite arithmétique. Trouve x.`, 3, "6x = 5x + 3."),
  num("Trouve le premier terme négatif de 47, 43, 39, …", -1, "51 − 4n < 0 ⇒ n = 13 : t₁₃ = −1."),
  num(S`Pour \(f(n)=-5n+32\), trouve la valeur de n pour laquelle \(f(n)=-18\).`, 10, "−5n = −50."),
  num("Le graphique montre une suite arithmétique. Trouve t₂₀.", 59, "a = 2, d = 3 : 2 + 19(3).", dotsD(arr(2, 3, 5), { labels: true })),
  num("Le graphique montre une suite arithmétique. Quel terme est égal à −40?", 16, "tₙ = 24 − 4n = −40.", dotsD(arr(20, -4, 6), { labels: true })),
];
