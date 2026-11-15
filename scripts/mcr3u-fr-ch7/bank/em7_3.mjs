// 7.3 Créer des règles pour les suites — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch7/bank/em7_3.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsD } from "./fig.mjs";

const S = String.raw;
/** termes de t₁ = a, tₙ = g(tₙ₋₁, n) */
const rec = (a, g, n) => { const v = [a]; for (let i = 2; i <= n; i++) v.push(g(v[v.length - 1], i)); return v; };
const last = (a, g, n) => rec(a, g, n)[n - 1];

export const E = [
  num(S`\(t_1=3\), \(t_n=t_{n-1}+4\). Trouve \(t_5\).`, last(3, (p) => p + 4, 5), "Additionne 4 quatre fois."),
  num(S`\(t_1=2\), \(t_n=4t_{n-1}\). Trouve \(t_4\).`, last(2, (p) => 4 * p, 4), "2, 8, 32, 128."),
  num(S`\(t_1=1\), \(t_n=3t_{n-1}+1\). Trouve \(t_4\).`, last(1, (p) => 3 * p + 1, 4), "1, 4, 13, 40."),
  num(S`\(t_1=10\), \(t_n=t_{n-1}-n\). Trouve \(t_4\).`, last(10, (p, n) => p - n, 4), "10, 8, 5, 1."),
  num(S`\(t_1=0\), \(t_n=2t_{n-1}+2\). Trouve \(t_5\).`, last(0, (p) => 2 * p + 2, 5), "0, 2, 6, 14, 30."),
  num(S`Pour \(f(n)=n^2-4\), trouve \(f(6)\).`, 32, "36 − 4."),
  num(S`Pour \(f(n)=2^n+1\), trouve \(f(5)\).`, 33, "32 + 1."),
  num(S`Pour \(t_n=n(n-1)\), trouve \(t_7\).`, 42, "7 × 6."),
  num("Trouve le terme suivant : 2, 5, 10, 17, 26, …", 37, "Différences 3, 5, 7, 9, 11."),
  num("Trouve le terme suivant : 1, 3, 7, 15, 31, …", 63, "Double, puis additionne 1."),
  num("Quelles sont les différences secondes de 1, 4, 9, 16, 25?", 2, "Différences premières 3, 5, 7, 9."),
  mc("Classe la suite 3, 9, 27, 81, …", "géométrique", ["arithmétique", "ni l'une ni l'autre", "du second degré"], "Raison 3."),
  mc("Classe la suite 2, 6, 12, 20, 30, …", "ni arithmétique ni géométrique", ["arithmétique", "géométrique", "constante"], "Différences 4, 6, 8, 10."),
  mc(S`Quelle formule de récurrence donne \(5, 8, 11, 14,\ldots\)?`, S`\(t_1=5,\ t_n=t_{n-1}+3\)`, [S`\(t_1=5,\ t_n=3t_{n-1}\)`, S`\(t_1=3,\ t_n=t_{n-1}+5\)`, S`\(t_n=t_{n-1}+3\)`], "Départ et pas."),
  tf("Une formule de récurrence a besoin d'au moins un terme de départ donné.", true, "Sinon, la suite n'est pas déterminée."),
  tf("Si les différences secondes d'une suite sont constantes, sa règle explicite est linéaire.", false, "Elle est du second degré."),
  num(S`\(t_1=5\), \(t_n=t_{n-1}+2n\). Trouve \(t_3\).`, last(5, (p, n) => p + 2 * n, 3), "5, 9, 15."),
  num("Quel est le nombre minimal de déplacements pour transférer 5 disques dans le casse-tête des disques?", 31, "2⁵ − 1."),
  num("Lis t₆ sur le graphique de t₁ = 1, tₙ = tₙ₋₁ + n.", 21, "1, 3, 6, 10, 15, 21.", dotsD(rec(1, (p, n) => p + n, 6), { labels: true })),
  num("Le graphique montre t₁ = 2, tₙ = 2tₙ₋₁ − 1. Lis t₅.", 17, "2, 3, 5, 9, 17.", dotsD(rec(2, (p) => 2 * p - 1, 5), { labels: true })),
];

export const M = [
  num(S`\(t_1=4\), \(t_n=2t_{n-1}-3\). Trouve \(t_6\).`, last(4, (p) => 2 * p - 3, 6), "4, 5, 7, 11, 19, 35."),
  num(S`\(t_1=-1\), \(t_n=-2t_{n-1}+1\). Trouve \(t_5\).`, last(-1, (p) => -2 * p + 1, 5), "−1, 3, −5, 11, −21."),
  num(S`\(t_1=1\), \(t_n=n\,t_{n-1}\). Trouve \(t_6\).`, last(1, (p, n) => n * p, 6), "1, 2, 6, 24, 120, 720."),
  num("Trouve une règle explicite pour 4, 7, 12, 19, 28, … et donne t₁₀.", 103, "tₙ = n² + 3."),
  num("Trouve une règle explicite pour 2, 8, 18, 32, 50, … et donne t₉.", 162, "tₙ = 2n²."),
  num("Trouve une règle explicite pour 0, 2, 6, 12, 20, … et donne t₁₁.", 110, "tₙ = n(n − 1)."),
  num("Pour 6, 11, 18, 27, 38, …, quel est le coefficient de n² dans la règle explicite?", 1, "Différences secondes 2 ⇒ coefficient dominant 1."),
  num("Pour 3, 11, 25, 45, 71, …, quel est le coefficient de n² dans la règle explicite?", 3, "Différences secondes 6."),
  mc("Quelle formule de récurrence donne 3, 7, 15, 31, …?", S`\(t_1=3,\ t_n=2t_{n-1}+1\)`, [S`\(t_1=3,\ t_n=t_{n-1}+4\)`, S`\(t_1=3,\ t_n=2t_{n-1}\)`, S`\(t_1=3,\ t_n=3t_{n-1}-2\)`], "7 = 2(3) + 1, 15 = 2(7) + 1."),
  mc(S`Quelle formule de récurrence correspond à \(t_n=3n+4\)?`, S`\(t_1=7,\ t_n=t_{n-1}+3\)`, [S`\(t_1=4,\ t_n=t_{n-1}+3\)`, S`\(t_1=7,\ t_n=3t_{n-1}\)`, S`\(t_1=3,\ t_n=t_{n-1}+4\)`], "t₁ = 7, pas de 3."),
  ms("Quelles suites ne sont ni arithmétiques ni géométriques? Choisis toutes les bonnes réponses.", ["1, 4, 9, 16", "2, 4, 8, 16", "1, 1, 2, 3, 5", "10, 7, 4, 1", "1, 3, 6, 10"], [0, 2, 4], "Les carrés, la suite de Fibonacci et les nombres triangulaires."),
  tf(S`La suite \(t_1=5,\ t_n=t_{n-1}\cdot1+0\) est à la fois arithmétique et géométrique.`, true, "Elle est constante : d = 0 et r = 1."),
  num("Des carrés de cure-dents en rangée : 1 carré utilise 4 cure-dents, 2 carrés en utilisent 7, 3 en utilisent 10. Combien de cure-dents faut-il pour 25 carrés?", 76, "tₙ = 3n + 1."),
  num("Un motif de points compte 1, 5, 12, 22, 35, … points (nombres pentagonaux). Trouve le terme suivant.", 51, "Différences 4, 7, 10, 13, 16."),
  num(S`\(t_1=3\), \(t_n=t_{n-1}^2-t_{n-1}\). Trouve \(t_4\).`, last(3, (p) => p * p - p, 4), "3, 6, 30, 870."),
  num("Combien de déplacements faut-il pour 8 disques dans le casse-tête des disques?", 255, "2⁸ − 1."),
  num(S`La suite \(t_n=2^n-1\) vérifie \(t_n=2t_{n-1}+c\). Trouve c.`, 1, "2(2ⁿ⁻¹ − 1) + c = 2ⁿ − 1 ⇒ c = 1."),
  num("Les nombres rectangulaires 2, 6, 12, 20, … vérifient tₙ = tₙ₋₁ + kn. Trouve k.", 2, "Différences 4, 6, 8 = 2n."),
  num("Le graphique montre une suite du second degré. Trouve t₈.", 120, "Différences secondes 4 : tₙ = 2n² − n; t₈ = 128 − 8.", dotsD([1, 6, 15, 28, 45], { labels: true })),
  num("Le graphique montre t₁ = 3, tₙ = tₙ₋₁ + 2n − 1. Trouve t₁₀ à l'aide d'une règle explicite.", 102, "3, 6, 11, 18, 27 : tₙ = n² + 2.", dotsD(rec(3, (p, n) => p + 2 * n - 1, 5), { labels: true })),
];
