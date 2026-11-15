// 7.6 Séries géométriques — 20 questions difficiles (miroir de ../../mcr3u-ch7/bank/h7_6.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD, dotsD, rd } from "./fig.mjs";
import { TITLE } from "../l7_6.mjs";

const S = String.raw;
const Sg = (a, r, n) => (r === 1 ? a * n : (a * (r ** n - 1)) / (r - 1));
const geo = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i);
const firstN = (a, r, target) => { let n = 1; while (Sg(a, r, n) <= target) n++; return n; };

export const TOPIC = TITLE;
export const Q = [
  num("Combien de termes de 2 + 6 + 18 + … faut-il pour que la somme dépasse 50 000?", firstN(2, 3, 50000), "3ⁿ − 1 > 50 000."),
  num("Combien de termes de 1 + 1.5 + 2.25 + … faut-il pour que la somme dépasse 100?", firstN(1, 1.5, 100), "2(1.5ⁿ − 1) > 100 ⇒ 1.5ⁿ > 51."),
  num(S`Une série géométrique a \(t_1=5\), \(r>0\) et \(S_3=155\). Trouve \(r\).`, 5, "1 + r + r² = 31."),
  num(S`Une série géométrique a \(r=2\) et \(S_8=765\). Trouve \(a\).`, 3, "a(255) = 765."),
  num(S`Une série géométrique a \(S_2=12\) et \(S_4=60\) (r > 0). Trouve \(r\).`, 2, "S₄ − S₂ = r²·S₂ ⇒ 48 = 12r²."),
  num("Une balle qu'on laisse tomber de 16 m rebondit aux 3/4 de sa hauteur. Trouve la distance totale parcourue quand elle touche le sol pour la 10e fois (au centième près).", rd(16 + 2 * Sg(12, 0.75, 9), 2), "16 + 2(12 + 9 + … , 9 rebonds).", null, 0.01),
  num("Le profit d'une entreprise est de 50 000 dollars l'année 1 et augmente de 8 % par année. Pendant quelle année le profit total dépasse-t-il 1 000 000 dollars pour la première fois?", firstN(50000, 1.08, 1000000), "50 000(1.08ⁿ − 1)/0.08 > 10⁶."),
  num("Chaque niveau d'un arbre fractal compte 3 fois plus de branches que le précédent; le niveau 1 compte 1 branche. Combien de branches y a-t-il dans les niveaux 1 à 8?", Sg(1, 3, 8), "(3⁸ − 1)/2."),
  num(S`Trouve \(\displaystyle\sum_{k=1}^{6}3\cdot2^{k}\) (la somme de \(3\cdot2^k\) pour k = 1 à 6).`, Sg(6, 2, 6), "6 + 12 + … + 192."),
  num(S`Trouve \(x\) si \(1+x+x^2+x^3=40\) et que \(x\) est un nombre entier positif.`, 3, "1 + 3 + 9 + 27."),
  tf("Si |r| < 1, les sommes partielles d'une série géométrique se rapprochent de a/(1 − r).", true, "rⁿ → 0."),
  tf(S`Les sommes partielles de la série \(2-2+2-2+\cdots\) se rapprochent de 1.`, false, "Elles alternent : 2, 0, 2, 0."),
  ms("Pour 4 + 12 + 36 + …, quels énoncés sont vrais? Choisis toutes les bonnes réponses.", ["S₅ = 484", "t₆ = 972", "S₆ = 1456", "r = 3", "S₄ = 160"], [0, 1, 2, 3, 4], "Ils sont tous vrais : Sₙ = 2(3ⁿ − 1)."),
  mc("Un grain de riz sur la case 1 d'un échiquier, 2 sur la case 2, 4 sur la case 3, … Combien de grains y a-t-il sur les 64 cases?", S`\(2^{64}-1\)`, [S`\(2^{64}\)`, S`\(2^{63}\)`, S`\(64^2\)`], "1 + 2 + … + 2⁶³."),
  num(S`La somme d'une série géométrique infinie est 30 et \(a=12\). Trouve \(r\).`, 0.6, "12/(1 − r) = 30.", null, 0.0001),
  num("Une série géométrique a t₂ = 12 et t₅ = 96. Trouve S₆.", Sg(6, 2, 6), "r = 2, a = 6 : 6(64 − 1)."),
  num("Les bandes montrent des dépôts qui augmentent de 25 % chaque mois. Trouve le total des dépôts sur 8 mois (au centième près).", rd(Sg(100, 1.25, 8), 2), "100(1.25⁸ − 1)/0.25.", barsD(geo(100, 1.25, 5), { xlabel: "mois", ylabel: "dollars" }), 0.01),
  num("Le graphique montre les sommes partielles S₁, S₂, … d'une série avec |r| < 1. De quelle valeur se rapprochent-elles?", 20, "a = 10, r = ½ : 10 ÷ ½.", dotsD(Array.from({ length: 7 }, (_, i) => rd(Sg(10, 0.5, i + 1), 3)), { lines: [{ m: 0, b: 20, color: "amber", dash: true }], ylabel: "Sₙ" })),
  num("Les bandes montrent une série géométrique alternée. Trouve S₉.", Sg(3, -2, 9), "3((−2)⁹ − 1)/(−3).", barsD(geo(3, -2, 5).map(Math.abs), { ylabel: "|tₙ|" })),
  num("Le graphique montre Sₙ pour une série géométrique avec a = 1. Trouve r.", 4, "S₂ = 5 = 1 + r.", dotsD([1, 5, 21, 85], { labels: true, ylabel: "Sₙ" })),
];
