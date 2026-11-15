// 7.6 Séries géométriques — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch7/bank/em7_6.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, rd } from "./fig.mjs";

const S = String.raw;
const Sg = (a, r, n) => (r === 1 ? a * n : (a * (r ** n - 1)) / (r - 1));
const geo = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i);

export const E = [
  num(S`Trouve \(S_5\) pour \(1+2+4+\cdots\)`, Sg(1, 2, 5), "2⁵ − 1."),
  num(S`Trouve \(S_4\) pour \(3+9+27+\cdots\)`, Sg(3, 3, 4), "3 + 9 + 27 + 81."),
  num(S`Trouve \(S_6\) pour \(5+10+20+\cdots\)`, Sg(5, 2, 6), "5(2⁶ − 1)."),
  num(S`Trouve \(S_5\) pour \(2+10+50+\cdots\)`, Sg(2, 5, 5), "2(3125 − 1)/4."),
  num(S`Trouve \(S_4\) pour \(64+32+16+\cdots\)`, Sg(64, 0.5, 4), "64 + 32 + 16 + 8."),
  num(S`Trouve \(S_5\) pour \(1-3+9-\cdots\)`, Sg(1, -3, 5), "1 − 3 + 9 − 27 + 81."),
  num(S`Trouve \(S_3\) pour \(100+10+1\).`, 111, "Additionne."),
  num("Trouve 1 + 2 + 4 + … + 128.", 255, "2⁸ − 1."),
  num("Trouve 1 + 3 + 9 + … + 243.", 364, "(3⁶ − 1)/2."),
  num(S`Trouve \(S_7\) pour \(1+1+1+\cdots\) (r = 1).`, 7, "n × a."),
  mc("Quelle formule donne la somme d'une série géométrique (r ≠ 1)?", S`\(S_n=\frac{a(r^n-1)}{r-1}\)`, [S`\(S_n=\frac n2(a+t_n)\)`, S`\(S_n=ar^{n-1}\)`, S`\(S_n=\frac{a(r-1)}{r^n-1}\)`], "Multiplie par r et soustrais."),
  mc("Pourquoi ne peut-on pas utiliser la formule quand r = 1?", "on diviserait par zéro", ["les termes alternent", "la somme est toujours 0", "elle donne une somme négative"], "r − 1 = 0."),
  tf("Les sommes partielles de 8 + 4 + 2 + 1 + … se rapprochent de plus en plus de 16.", true, "a/(1 − r) = 8/0.5."),
  tf("Les sommes partielles de 1 + 2 + 4 + 8 + … se rapprochent d'un nombre fixe.", false, "Avec r > 1, elles croissent sans limite."),
  num(S`Quelle est la raison \(r\) de la série \(6+18+54+\cdots\)?`, 3, "18 ÷ 6."),
  num("Combien de termes compte 2 + 4 + 8 + … + 256?", 8, "2ⁿ = 256."),
  num("Une chaîne téléphonique : 1 personne en appelle 2, chacune d'elles en appelle 2 autres, et ainsi de suite. Combien de personnes une chaîne de 5 niveaux compte-t-elle (la première personne est au niveau 1)?", 31, "1 + 2 + 4 + 8 + 16."),
  num(S`Trouve \(S_6\) pour \(1-1+1-1+\cdots\)`, 0, "Les paires s'annulent."),
  num("Les bandes montrent 1, 3, 9, 27, 81. Trouve leur total.", geo(1, 3, 5).reduce((s, v) => s + v, 0), "1 + 3 + 9 + 27 + 81.", barsD(geo(1, 3, 5))),
  num("Les bandes diminuent de moitié chaque fois, à partir de 32. Trouve le total des six bandes.", geo(32, 0.5, 6).reduce((s, v) => s + v, 0), "32 + 16 + 8 + 4 + 2 + 1.", barsD(geo(32, 0.5, 6))),
];

export const M = [
  num(S`Trouve \(S_8\) pour \(3+6+12+\cdots\)`, Sg(3, 2, 8), "3(2⁸ − 1)."),
  num(S`Trouve \(S_6\) pour \(4-8+16-\cdots\)`, Sg(4, -2, 6), "4((−2)⁶ − 1)/(−3)."),
  num(S`Trouve \(S_7\) pour \(2-6+18-\cdots\)`, Sg(2, -3, 7), "2((−3)⁷ − 1)/(−4)."),
  num(S`Trouve \(S_6\) pour \(486+162+54+\cdots\)`, Sg(486, 1 / 3, 6), "486(1 − (⅓)⁶)/(⅔).", null, 0.001),
  num("Trouve 5 + 20 + 80 + … + 20 480.", Sg(5, 4, 7), "7 termes : 5(4⁷ − 1)/3."),
  num("Trouve 7 + 14 + 28 + … + 7168.", Sg(7, 2, 11), "11 termes : 7(2¹¹ − 1)."),
  num(S`Trouve \(S_{10}\) pour \(1000+100+10+\cdots\) (au centième près).`, rd(Sg(1000, 0.1, 10), 4), "1111.111111…", null, 0.001),
  num(S`Trouve \(S_5\) pour \(0.5+1.5+4.5+\cdots\)`, Sg(0.5, 3, 5), "0.5(243 − 1)/2.", null, 0.001),
  num("Combien de termes de 1 + 2 + 4 + … donnent une somme de 2047?", 11, "2ⁿ − 1 = 2047."),
  num("Combien de termes de 5 + 15 + 45 + … donnent une somme de 1820?", 6, "5(3ⁿ − 1)/2 = 1820 ⇒ 3ⁿ = 729."),
  num(S`Une série géométrique a \(a=4\), \(r=3\) et un dernier terme de 972. Trouve la somme.`, Sg(4, 3, 6), "(3 · 972 − 4)/2."),
  num("Une lettre en chaîne est envoyée à 5 personnes, chacune l'envoie à 5 autres, et ainsi de suite. Combien de lettres sont envoyées pendant les 5 premières étapes?", Sg(5, 5, 5), "5 + 25 + 125 + 625 + 3125."),
  ms(S`Lesquelles sont égales à \(1+2+4+\cdots+2^9\)? Choisis toutes les bonnes réponses.`, ["1023", S`\(2^{10}-1\)`, "1024", S`\(\frac{1(2^{10}-1)}{2-1}\)`, "512"], [0, 1, 3], "10 termes."),
  mc(S`De quelle valeur les sommes partielles de \(12+6+3+\cdots\) se rapprochent-elles?`, "24", ["12", "18", "elles croissent sans limite"], "12 ÷ (1 − ½)."),
  tf(S`\(S_n=\frac{a(1-r^n)}{1-r}\) et \(S_n=\frac{a(r^n-1)}{r-1}\) donnent toujours la même réponse.`, true, "Multiplie le numérateur et le dénominateur par −1."),
  tf("Pour une série géométrique alternée, les sommes partielles peuvent être négatives.", true, "Par exemple, 1 − 3 = −2."),
  num("Un salaire commence à 40 000 dollars et augmente de 3 % chaque année. Quels sont les gains totaux sur 10 ans (au dollar près)?", Math.round(Sg(40000, 1.03, 10)), "40 000(1.03¹⁰ − 1)/0.03."),
  num("Une balle qu'on laisse tomber de 8 m rebondit chaque fois à la moitié de sa hauteur. Quelle distance a-t-elle parcourue quand elle touche le sol pour la 5e fois?", 8 + 2 * Sg(4, 0.5, 4), "8 + 2(4 + 2 + 1 + 0.5)."),
  num("Les bandes montrent les premiers termes d'une série géométrique. Trouve S₁₀.", Sg(2, 2, 10), "2(2¹⁰ − 1).", barsD(geo(2, 2, 5))),
  num("Les bandes montrent une série géométrique. Trouve S₈ (au centième près).", rd(Sg(81, 2 / 3, 8), 2), "81(1 − (⅔)⁸)/(⅓).", barsD(geo(81, 2 / 3, 6)), 0.01),
];
