// 7.4 Suites définies par les deux termes précédents — 20 questions difficiles (miroir de ../../mcr3u-ch7/bank/h7_4.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsD, rd } from "./fig.mjs";
import { TITLE } from "../l7_4.mjs";

const S = String.raw;
const two = (a, b, n, g = (p, q) => p + q) => { const v = [a, b]; while (v.length < n) v.push(g(v[v.length - 1], v[v.length - 2])); return v; };
const T = (a, b, n, g) => two(a, b, n, g)[n - 1];
const F = two(1, 1, 30);
/** monter avec des pas de 1, 2 ou 3 marches */
const tri = (n) => { const w = [1, 2, 4]; while (w.length < n) w.push(w.at(-1) + w.at(-2) + w.at(-3)); return w[n - 1]; };

export const TOPIC = TITLE;
export const Q = [
  num("De combien de façons peut-on monter 12 marches, une ou deux marches à la fois?", T(1, 2, 12), "W₁ = 1, W₂ = 2, puis additionne les deux précédents."),
  num("De combien de façons peut-on monter 7 marches, une, deux ou trois marches à la fois?", tri(7), "Wₙ = Wₙ₋₁ + Wₙ₋₂ + Wₙ₋₃ avec 1, 2, 4."),
  num(S`Pour \(t_n=t_{n-1}+t_{n-2}\), \(t_3=9\) et \(t_7=63\). Trouve \(t_4\).`, 15, "t₅ = 9 + t₄, t₆ = 9 + 2t₄, t₇ = 18 + 3t₄ = 63."),
  num(S`Pour \(t_n=t_{n-1}+t_{n-2}\), \(t_1=3\) et \(t_6=44\). Trouve \(t_2\).`, 7, "t₆ = 3t₁ + 5t₂ = 9 + 5t₂ = 44."),
  num("Trouve la somme des 15 premiers nombres de Fibonacci.", F.slice(0, 15).reduce((s, v) => s + v, 0), "t₁₇ − 1."),
  num("Trouve la somme des carrés des 8 premiers nombres de Fibonacci.", F.slice(0, 8).reduce((s, v) => s + v * v, 0), "Elle est égale à t₈ × t₉ = 21 × 34."),
  num(S`\(t_1=1\), \(t_2=3\), \(t_n=t_{n-1}+t_{n-2}\). Calcule \(t_{10}\div t_9\) au dix-millième près.`, rd(T(1, 3, 10) / T(1, 3, 9), 4), "1, 3, 4, 7, 11, 18, 29, 47, 76, 123.", null, 0.0001),
  num(S`Pour \(t_n=t_{n-1}+3t_{n-2}\), les quotients se rapprochent de \(\frac{1+\sqrt{13}}2\). Évalue ce nombre au millième près.`, rd((1 + Math.sqrt(13)) / 2, 3), "x² = x + 3.", null, 0.001),
  num(S`\(t_1=2\), \(t_2=5\), \(t_n=t_{n-1}-t_{n-2}\). Trouve \(t_{50}\).`, T(2, 5, 50, (p, q) => p - q), "Période 6 : 2, 5, 3, −2, −5, −3; 50 = 8·6 + 2."),
  num(S`\(t_1=1\), \(t_2=1\), \(t_n=t_{n-1}+t_{n-2}+1\). Trouve \(t_7\).`, T(1, 1, 7, (p, q) => p + q + 1), "1, 1, 3, 5, 9, 15, 25."),
  tf("Un nombre de Fibonacci sur quatre est divisible par 3.", true, "t₄ = 3, t₈ = 21, t₁₂ = 144."),
  tf("La somme de 10 nombres de Fibonacci consécutifs quelconques est divisible par 11.", true, "Elle est égale à 11 fois le 7e des dix nombres."),
  ms("Quels énoncés sont vrais pour t₁ = t₂ = 1, tₙ = tₙ₋₁ + tₙ₋₂? Choisis toutes les bonnes réponses.", ["t₁₀ = 55", "t₁₂ = 144", "t₂₀ > 10 000", "t₆ est premier", "t₅ est premier"], [0, 1, 4], "t₂₀ = 6765; t₆ = 8."),
  mc("Un modèle de couples de lapins : chaque couple adulte produit un nouveau couple chaque mois, et les nouveaux couples deviennent adultes après un mois. En commençant avec un nouveau couple, combien y a-t-il de couples après 10 mois?", String(F[9]), ["34", "89", "100"], "Le nombre de couples suit les nombres de Fibonacci."),
  num("À l'aide de φ ≈ 1.618, estime le nombre de Fibonacci qui suit 610 (au nombre entier près), puis compare-le avec la valeur exacte 987. Quelle est l'estimation?", Math.round(610 * 1.618), "610 × 1.618 ≈ 987."),
  num(S`Pour \(t_n=t_{n-1}+t_{n-2}\), si \(t_{10}=a\) et \(t_{11}=b\), alors \(t_{13}=pa+qb\). Trouve \(p+q\).`, 3, "t₁₂ = a + b, t₁₃ = a + 2b : p + q = 3."),
  num("Le graphique montre les quotients tₙ/tₙ₋₁ de la suite 2, 5, 7, 12, … Lis la valeur dont ils se rapprochent (au millième près).", rd((1 + Math.sqrt(5)) / 2, 3), "Tout départ positif donne φ.", dotsD(two(2, 5, 10).slice(1).map((v, i) => rd(v / two(2, 5, 10)[i], 3)), { start: 2, lines: [{ m: 0, b: 1.618, color: "amber", dash: true }], ylabel: "quotient" }), 0.001),
  num("Le graphique montre tₙ = tₙ₋₁ − tₙ₋₂ à partir de 3, 5. Trouve t₁₀₀.", T(3, 5, 100, (p, q) => p - q), "Période 6; 100 = 16·6 + 4.", dotsD(two(3, 5, 8, (p, q) => p - q), { labels: true })),
  num("Le graphique montre Wₙ, le nombre de façons de paver une allée de 2 × n. Trouve W₁₅.", T(1, 2, 15), "Wₙ = Wₙ₋₁ + Wₙ₋₂.", dotsD(two(1, 2, 7), { labels: true, xlabel: "n", ylabel: "pavages" })),
  num("Le graphique montre tₙ = tₙ₋₁ + 2tₙ₋₂ à partir de 1, 1. Trouve t₁₀.", T(1, 1, 10, (p, q) => p + 2 * q), "1, 1, 3, 5, 11, 21, 43, 85, 171, 341.", dotsD(two(1, 1, 7, (p, q) => p + 2 * q), { labels: true })),
];
