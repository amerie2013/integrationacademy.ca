// 7.4 Suites définies par les deux termes précédents — 20 questions faciles + 20 moyennes
// (miroir de ../../mcr3u-ch7/bank/em7_4.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsD, rd } from "./fig.mjs";

const S = String.raw;
/** t₁ = a, t₂ = b, tₙ = g(tₙ₋₁, tₙ₋₂) — renvoie n termes */
const two = (a, b, n, g = (p, q) => p + q) => { const v = [a, b]; while (v.length < n) v.push(g(v[v.length - 1], v[v.length - 2])); return v; };
const T = (a, b, n, g) => two(a, b, n, g)[n - 1];
const F = two(1, 1, 20);

export const E = [
  num("Trouve le 9e nombre de Fibonacci (1, 1, 2, 3, …).", F[8], "1, 1, 2, 3, 5, 8, 13, 21, 34."),
  num("Trouve le 11e nombre de Fibonacci.", F[10], "…, 34, 55, 89."),
  num("Quel nombre de Fibonacci vient après 144?", 233, "89 + 144."),
  num(S`\(t_1=2\), \(t_2=3\), \(t_n=t_{n-1}+t_{n-2}\). Trouve \(t_5\).`, T(2, 3, 5), "2, 3, 5, 8, 13."),
  num(S`\(t_1=1\), \(t_2=5\), \(t_n=t_{n-1}+t_{n-2}\). Trouve \(t_6\).`, T(1, 5, 6), "1, 5, 6, 11, 17, 28."),
  num(S`\(t_1=4\), \(t_2=4\), \(t_n=t_{n-1}+t_{n-2}\). Trouve \(t_5\).`, T(4, 4, 5), "4, 4, 8, 12, 20."),
  num(S`\(t_1=1\), \(t_2=2\), \(t_n=t_{n-1}-t_{n-2}\). Trouve \(t_4\).`, T(1, 2, 4, (p, q) => p - q), "1, 2, 1, −1."),
  num(S`\(t_1=1\), \(t_2=1\), \(t_n=t_{n-1}+2t_{n-2}\). Trouve \(t_5\).`, T(1, 1, 5, (p, q) => p + 2 * q), "1, 1, 3, 5, 11."),
  num(S`\(t_1=3\), \(t_2=2\), \(t_n=t_{n-1}\cdot t_{n-2}\). Trouve \(t_5\).`, T(3, 2, 5, (p, q) => p * q), "3, 2, 6, 12, 72."),
  num("Combien de termes de départ faut-il donner pour tₙ = tₙ₋₁ + tₙ₋₂?", 2, "Chaque terme a besoin des deux termes qui le précèdent."),
  mc("De quelle valeur les quotients de nombres de Fibonacci consécutifs se rapprochent-ils?", "environ 1.618", ["exactement 2", "environ 1.414", "environ 3.14"], "Le nombre d'or."),
  mc(S`Laquelle de ces descriptions correspond à \(t_n=t_{n-1}+t_{n-2}\) avec \(t_1=t_2=1\)?`, "la suite de Fibonacci", ["une suite arithmétique", "une suite géométrique", "les nombres triangulaires"], "1, 1, 2, 3, 5, …"),
  tf("La suite de Fibonacci est géométrique.", false, "Ses quotients changent : 1, 2, 1.5, 1.67, …"),
  tf(S`Pour \(t_n=t_{n-1}+t_{n-2}\), on a \(t_{n-2}=t_n-t_{n-1}\).`, true, "Réarrange la règle."),
  num(S`Pour \(t_n=t_{n-1}+t_{n-2}\), \(t_4=10\) et \(t_5=16\). Trouve \(t_3\).`, 6, "16 − 10."),
  num(S`Pour \(t_n=t_{n-1}+t_{n-2}\), \(t_6=29\) et \(t_7=47\). Trouve \(t_5\).`, 18, "47 − 29."),
  num("Calcule 21 ÷ 13 au millième près.", rd(21 / 13, 3), "Un quotient de Fibonacci.", null, 0.001),
  num("De combien de façons peut-on monter 4 marches, une ou deux marches à la fois?", 5, "W : 1, 2, 3, 5."),
  num("Lis t₇ sur le graphique de la suite de type Fibonacci.", T(2, 1, 7), "2, 1, 3, 4, 7, 11, 18.", dotsD(two(2, 1, 7), { labels: true })),
  num("Le graphique montre une suite à deux termes. Combien vaut t₆ + t₇ (qui est égal à t₈)?", T(1, 3, 8), "Additionne les deux derniers termes représentés.", dotsD(two(1, 3, 7), { labels: true })),
];

export const M = [
  num("Trouve le 16e nombre de Fibonacci.", F[15], "…, 377, 610, 987."),
  num(S`\(t_1=3\), \(t_2=-1\), \(t_n=t_{n-1}+t_{n-2}\). Trouve \(t_8\).`, T(3, -1, 8), "3, −1, 2, 1, 3, 4, 7, 11."),
  num(S`\(t_1=2\), \(t_2=1\), \(t_n=2t_{n-1}+t_{n-2}\). Trouve \(t_6\).`, T(2, 1, 6, (p, q) => 2 * p + q), "2, 1, 4, 9, 22, 53."),
  num(S`\(t_1=1\), \(t_2=4\), \(t_n=t_{n-1}-t_{n-2}\). Trouve \(t_9\).`, T(1, 4, 9, (p, q) => p - q), "Période 6 : 1, 4, 3, −1, −4, −3, 1, 4, 3."),
  num(S`Pour \(t_n=t_{n-1}+t_{n-2}\), \(t_5=21\) et \(t_6=34\). Trouve \(t_1\).`, 3, "13, 8, 5, 3 en remontant : t₄ = 13, t₃ = 8, t₂ = 5, t₁ = 3."),
  num("Trouve la somme des 10 premiers nombres de Fibonacci.", F.slice(0, 10).reduce((s, v) => s + v, 0), "t₁₂ − 1 = 143."),
  num("Calcule 55 ÷ 34 au dix-millième près.", rd(55 / 34, 4), "Très proche de φ.", null, 0.0001),
  num(S`Évalue \(\frac{1+\sqrt5}{2}\) au millième près.`, rd((1 + Math.sqrt(5)) / 2, 3), "Le nombre d'or.", null, 0.001),
  num("De combien de façons peut-on monter 7 marches, une ou deux marches à la fois?", T(1, 2, 7), "1, 2, 3, 5, 8, 13, 21."),
  num("Une allée de 2 × n est pavée avec des tuiles de 1 × 2. Combien y a-t-il de pavages pour n = 6?", T(1, 2, 6), "1, 2, 3, 5, 8, 13."),
  mc(S`De quelle valeur les quotients \(\frac{t_n}{t_{n-1}}\) se rapprochent-ils pour \(t_1=t_2=1\), \(t_n=t_{n-1}+2t_{n-2}\)?`, "2", ["1.618", "3", "1.5"], "1, 1, 3, 5, 11, 21, 43 : les quotients se rapprochent de 2."),
  mc("Lequel n'est PAS un nombre de Fibonacci?", "50", ["34", "89", "144"], "…, 34, 55, 89, 144."),
  ms("Quels énoncés sont vrais pour la suite de Fibonacci? Choisis toutes les bonnes réponses.", ["un terme sur trois est pair", "t₅ = 5", "deux termes consécutifs n'ont aucun facteur commun > 1", "tous les termes sont impairs", "les quotients se rapprochent de 1.618"], [0, 1, 2, 4], "1, 1, 2, 3, 5, 8 : 2 et 8 sont pairs."),
  tf(S`Quels que soient les termes de départ, \(t_n=t_{n-1}+t_{n-2}\) finit par produire un nombre de Fibonacci.`, false, "Le départ 2, 2 donne 2, 2, 4, 6, 10, … — jamais 1, 3, 5 …"),
  tf(S`Si \(t_1=t_2=2\) et \(t_n=t_{n-1}+t_{n-2}\), chaque terme est le double d'un nombre de Fibonacci.`, true, "La règle est linéaire : doubler le départ double chaque terme."),
  num(S`Une suite a \(t_1=5\) et \(t_n=t_{n-1}+t_{n-2}\). Si \(t_4=21\), trouve \(t_2\).`, 8, "t₃ = 5 + t₂, t₄ = 5 + 2t₂ = 21."),
  num(S`Une suite suit \(t_n=t_{n-1}+t_{n-2}\). Si \(t_1=a\) et \(t_2=b\), quel est le coefficient de b dans \(t_6\)?`, 5, "t₆ = 3a + 5b."),
  num("Calcule t₆ × t₈ − t₇² pour la suite de Fibonacci.", F[5] * F[7] - F[6] ** 2, "8 · 21 − 169."),
  num("Le graphique montre les quotients de termes consécutifs d'une suite de type Fibonacci. Vers quelle valeur se stabilisent-ils (au millième près)?", rd((1 + Math.sqrt(5)) / 2, 3), "Le nombre d'or.", dotsD(two(3, 1, 10).slice(1).map((v, i, a) => rd(v / two(3, 1, 10)[i], 3)), { start: 2, labels: false, ylabel: "quotient", lines: [{ m: 0, b: 1.618, color: "amber", dash: true }] }), 0.001),
  num("Le graphique montre le nombre W de façons de monter n marches (une ou deux à la fois). Trouve W pour 9 marches.", T(1, 2, 9), "Continue 1, 2, 3, 5, 8, 13 : 21, 34, 55.", dotsD(two(1, 2, 6), { labels: true, xlabel: "marches", ylabel: "façons" })),
];
