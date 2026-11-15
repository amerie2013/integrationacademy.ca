// 7.5 Séries arithmétiques — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch7/bank/em7_5.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD } from "./fig.mjs";

const S = String.raw;
const Sa = (a, d, n) => (n * (2 * a + (n - 1) * d)) / 2;
const arr = (a, d, n) => Array.from({ length: n }, (_, i) => a + i * d);

export const E = [
  num("Trouve 1 + 2 + 3 + … + 50.", 1275, "25 paires de 51."),
  num("Trouve 1 + 2 + 3 + … + 80.", 3240, "40 × 81."),
  num(S`Trouve \(S_{10}\) pour \(3+7+11+\cdots\)`, Sa(3, 4, 10), "5(6 + 36)."),
  num(S`Trouve \(S_8\) pour \(10+15+20+\cdots\)`, Sa(10, 5, 8), "4(20 + 35)."),
  num(S`Trouve \(S_{12}\) pour \(2+4+6+\cdots\)`, Sa(2, 2, 12), "6(4 + 22)."),
  num("Une série compte 20 termes; le premier est 5 et le dernier est 62. Trouve sa somme.", 670, "10(5 + 62)."),
  num("Une série compte 15 termes; le premier est −4 et le dernier est 38. Trouve sa somme.", 255, "7.5(34)."),
  num(S`Trouve \(S_6\) pour \(40+35+30+\cdots\)`, Sa(40, -5, 6), "3(80 − 25)."),
  num("Trouve 1 + 3 + 5 + … + 39.", 400, "20 nombres impairs : 20²."),
  num("Trouve 5 + 10 + 15 + … + 100.", 1050, "20 termes : 10(105)."),
  mc("Quelle formule donne la somme d'une série arithmétique quand on connaît le premier et le dernier terme?", S`\(S_n=\frac n2(t_1+t_n)\)`, [S`\(S_n=n(t_1+t_n)\)`, S`\(S_n=\frac{t_1+t_n}{2}\)`, S`\(S_n=\frac{a(r^n-1)}{r-1}\)`], "Moyenne × nombre de termes."),
  mc("Quelle est la différence entre une suite et une série?", "une série est la somme des termes d'une suite", ["une suite est la somme d'une série", "c'est la même chose", "une série n'a pas de dernier terme"], "Série = somme."),
  tf(S`\(S_n\) désigne le n-ième terme d'une suite.`, false, "C'est la somme des n premiers termes."),
  tf("Dans 1 + 2 + … + 100, le premier et le dernier terme donnent le même total que le deuxième et l'avant-dernier.", true, "1 + 100 = 2 + 99 = 101."),
  num(S`Trouve \(S_4\) pour \(7+9+11+\cdots\) en additionnant directement.`, 7 + 9 + 11 + 13, "7 + 9 + 11 + 13."),
  num("Combien de termes compte 4 + 8 + 12 + … + 60?", 15, "60 ÷ 4."),
  num("Trouve 4 + 8 + 12 + … + 60.", 480, "7.5(64)."),
  num(S`Trouve \(S_{20}\) avec \(a=1\) et \(d=1\).`, 210, "10(2 + 19)."),
  num("Trouve le nombre total de blocs dans la pile illustrée.", arr(1, 1, 8).reduce((s, v) => s + v, 0), "1 + 2 + … + 8.", barsD(arr(1, 1, 8), { ylabel: "blocs" })),
  num("Trouve la somme des termes illustrés dans le diagramme à bandes.", arr(3, 2, 7).reduce((s, v) => s + v, 0), "3 + 5 + … + 15 : 3.5(18).", barsD(arr(3, 2, 7))),
];

export const M = [
  num("Trouve 6 + 13 + 20 + … + 202.", (29 * (6 + 202)) / 2, "29 termes."),
  num("Trouve 100 + 96 + 92 + … + 4.", (25 * 104) / 2, "25 termes."),
  num(S`Trouve \(S_{30}\) pour \(-15-11-7-\cdots\)`, Sa(-15, 4, 30), "15(−30 + 116)."),
  num(S`Trouve \(S_{25}\) pour \(2.5+3+3.5+\cdots\)`, Sa(2.5, 0.5, 25), "12.5(5 + 12).", null, 0.001),
  num("Trouve la somme des multiples de 4 de 4 à 400.", 20200, "100 termes : 50(404)."),
  num("Trouve la somme des nombres impairs de deux chiffres.", (45 * (11 + 99)) / 2, "De 11 à 99 : 45 termes."),
  num("Combien de termes de 1 + 5 + 9 + … donnent une somme de 231?", 11, "n(2n − 1) = 231."),
  num("Quel est le plus petit nombre de termes de 20 + 18 + 16 + … qui donnent une somme de 110?", 10, "n(21 − n) = 110 ⇒ n = 10 ou 11 (t₁₁ = 0); le plus petit est donc 10."),
  num("Une série arithmétique compte 10 termes; son premier terme est 4 et sa somme est 175. Trouve d.", 3, "5(8 + 9d) = 175."),
  num("Une série arithmétique a S₁₂ = 240 et d = 2. Trouve a.", 9, "6(2a + 22) = 240."),
  num(S`\(S_n=n^2+4n\). Trouve \(t_1\).`, 5, "S₁."),
  num(S`\(S_n=n^2+4n\). Trouve \(d\).`, 2, "t₂ = S₂ − S₁ = 12 − 5 = 7."),
  ms("Lesquelles sont égales à 1 + 2 + … + 20? Choisis toutes les bonnes réponses.", ["210", "20 × 21 ÷ 2", "10 × 21", "20²", "200"], [0, 1, 2], "n(n + 1)/2."),
  mc("Un théâtre compte 18 rangées : 20 sièges dans la rangée 1 et 2 de plus dans chaque rangée. Combien y a-t-il de sièges?", "666", ["546", "720", "378"], "9(40 + 34)."),
  tf("Si on augmente de 3 chaque terme d'une série arithmétique, la somme de 10 termes augmente de 30.", true, "10 termes × 3."),
  tf("Doubler le nombre de termes de 1 + 2 + 3 + … double la somme.", false, "Sₙ croît comme n²."),
  num("Une horloge sonne 1 coup à 1 h, 2 coups à 2 h, …, 12 coups à 12 h. Combien de coups sonne-t-elle en une journée complète (24 h)?", 156, "2 × 78."),
  num("Des bûches : 20 dans la rangée du bas, 19 au-dessus, …, 5 au sommet. Combien y a-t-il de bûches?", 200, "16 rangées : 8(25)."),
  num("Lis le diagramme : combien de sièges y a-t-il dans toutes les rangées illustrées?", arr(12, 3, 9).reduce((s, v) => s + v, 0), "9 rangées : 4.5(12 + 36).", barsD(arr(12, 3, 9), { xlabel: "rangée", ylabel: "sièges" })),
  num("Le diagramme montre la distance courue chaque jour. Quelle est la distance totale pour les 10 jours illustrés (en km)?", arr(2, 0.5, 10).reduce((s, v) => s + v, 0), "5(2 + 6.5).", barsD(arr(2, 0.5, 10), { xlabel: "jour", ylabel: "km" }), 0.001),
];
