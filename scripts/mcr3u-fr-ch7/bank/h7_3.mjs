// 7.3 Créer des règles pour les suites — 20 questions difficiles (miroir de ../../mcr3u-ch7/bank/h7_3.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsD } from "./fig.mjs";
import { TITLE } from "../l7_3.mjs";

const S = String.raw;
const rec = (a, g, n) => { const v = [a]; for (let i = 2; i <= n; i++) v.push(g(v[v.length - 1], i)); return v; };
const last = (a, g, n) => rec(a, g, n)[n - 1];

export const TOPIC = TITLE;
export const Q = [
  num("Trouve une règle explicite pour 5, 13, 25, 41, 61, … et donne t₂₀.", 2 * 400 + 2 * 20 + 1, "Différences secondes 4 : 2n² + bn + c; tₙ − 2n² = 3, 5, 7 = 2n + 1. Donc tₙ = 2n² + 2n + 1."),
  num("Trouve une règle explicite pour −1, 2, 7, 14, 23, … et donne t₁₅.", 15 * 15 - 2, "tₙ = n² − 2."),
  num("Trouve une règle explicite pour 1, 7, 17, 31, 49, … Quel est le rang du terme 199?", 10, "tₙ = 2n² − 1 = 199 ⇒ n² = 100."),
  num("La règle explicite de 4, 9, 16, 25, … est (n + 1)². Quel est le rang du terme 900?", 29, "n + 1 = 30."),
  num(S`\(t_1=1\), \(t_n=t_{n-1}+n^2\). Trouve \(t_5\).`, last(1, (p, n) => p + n * n, 5), "1, 5, 14, 30, 55."),
  num(S`\(t_1=2\), \(t_n=3t_{n-1}-2\). Trouve \(t_8\).`, last(2, (p) => 3 * p - 2, 8), "2, 4, 10, 28, 82, 244, 730, 2188."),
  num(S`Pour \(t_1=a\), \(t_n=2t_{n-1}+3\), on sait que \(t_3=29\). Trouve \(a\).`, 5, "t₂ = 2a + 3, donc t₃ = 2(2a + 3) + 3 = 4a + 9 = 29."),
  num(S`\(t_1=6\), \(t_n=t_{n-1}+(-1)^n\cdot n\). Trouve \(t_6\).`, last(6, (p, n) => p + (-1) ** n * n, 6), "6, 8, 5, 9, 4, 10."),
  mc("Quelle règle explicite correspond à t₁ = 3, tₙ = 2tₙ₋₁?", S`\(t_n=3\cdot2^{n-1}\)`, [S`\(t_n=2\cdot3^{n-1}\)`, S`\(t_n=3+2(n-1)\)`, S`\(t_n=3\cdot2^n\)`], "Suite géométrique avec a = 3, r = 2."),
  mc("Quelle règle explicite correspond à t₁ = 2, tₙ = tₙ₋₁ + 2n?", S`\(t_n=n^2+n\)`, [S`\(t_n=2n\)`, S`\(t_n=n^2+1\)`, S`\(t_n=2^n\)`], "2, 6, 12, 20 = n(n + 1)."),
  ms("Quelles suites ont des différences secondes constantes? Choisis toutes les bonnes réponses.", ["3, 5, 9, 15, 23", "1, 2, 4, 8, 16", "0, 3, 8, 15, 24", "5, 5, 5, 5, 5", "2, 3, 5, 8, 13"], [0, 2, 3], "1, 2, 4, 8 a des différences secondes 1, 2, 4; une suite de type Fibonacci non plus."),
  tf("Toute suite dont les différences premières sont constantes a aussi des différences secondes constantes.", true, "Les différences secondes valent toutes 0."),
  tf("Le casse-tête des disques exige plus de 1000 déplacements pour 10 disques.", true, "2¹⁰ − 1 = 1023."),
  num("Un motif d'escalier utilise 1, 3, 6, 10, … carrés. Combien de carrés le 40e escalier utilise-t-il?", 820, "n(n + 1)/2 = 40 · 41 / 2."),
  num("Les nombres hexagonaux sont 1, 6, 15, 28, 45, … Trouve le 20e.", 20 * (2 * 20 - 1), "tₙ = n(2n − 1)."),
  num(S`La règle \(t_n=pt_{n-1}+q\) donne 2, 7, 22, 67, … Trouve q.`, 1, "7 = 2p + q, 22 = 7p + q ⇒ p = 3, q = 1."),
  num("Le graphique montre une suite du second degré. Trouve t₁₂.", 12 * 12 + 12 - 1, "1, 5, 11, 19, 29 : différences secondes 2; tₙ = n² + n − 1.", dotsD([1, 5, 11, 19, 29], { labels: true })),
  num("Le graphique montre t₁ = 1, tₙ = 3tₙ₋₁ − 1. Trouve t₇.", last(1, (p) => 3 * p - 1, 7), "1, 2, 5, 14, 41, 122, 365.", dotsD(rec(1, (p) => 3 * p - 1, 5), { labels: true })),
  num("Le graphique montre le nombre de déplacements M pour n disques. Trouve M pour 12 disques.", 4095, "Mₙ = 2ⁿ − 1.", dotsD(rec(1, (p) => 2 * p + 1, 6), { labels: true, xlabel: "disques", ylabel: "déplacements" })),
  num("Le graphique montre une suite dont la règle explicite est tₙ = an² + c. Trouve a.", 3, "Différences secondes 6, donc a = 3 : les points 2, 11, 26, 47 correspondent à tₙ = 3n² − 1.", dotsD([2, 11, 26, 47], { labels: true })),
];
