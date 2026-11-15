// 7.5 Séries arithmétiques — 20 questions difficiles (miroir de ../../mcr3u-ch7/bank/h7_5.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { barsD } from "./fig.mjs";
import { TITLE } from "../l7_5.mjs";

const S = String.raw;
const Sa = (a, d, n) => (n * (2 * a + (n - 1) * d)) / 2;
const arr = (a, d, n) => Array.from({ length: n }, (_, i) => a + i * d);
/** plus petit n tel que Sₙ ≥ cible (ou > si strict) */
const firstN = (a, d, target, strict = false) => { let n = 1; while (strict ? Sa(a, d, n) <= target : Sa(a, d, n) < target) n++; return n; };

export const TOPIC = TITLE;
export const Q = [
  num("Trouve la somme de tous les nombres entiers de 1 à 500 qui sont des multiples de 3 ou de 5.", (() => { let s = 0; for (let i = 1; i <= 500; i++) if (i % 3 === 0 || i % 5 === 0) s += i; return s; })(), "Multiples de 3 + multiples de 5 − multiples de 15."),
  num("Trouve la somme des nombres entiers de 1 à 200 qui ne sont PAS des multiples de 4.", 20100 - 5100, "20 100 − (4 + 8 + … + 200 = 5100)."),
  num("Combien de termes de 3 + 7 + 11 + … faut-il pour que la somme dépasse 2000?", firstN(3, 4, 2000, true), "n(2n + 1) > 2000."),
  num("Combien de termes de 50 + 47 + 44 + … donnent la plus grande somme possible?", 17, "Additionne les termes tant qu'ils sont positifs : t₁₇ = 2, t₁₈ = −1."),
  num(S`Pour \(S_n=3n^2-5n\), trouve \(t_{20}\).`, 3 * 400 - 100 - (3 * 361 - 95), "S₂₀ − S₁₉."),
  num(S`Pour \(S_n=\frac{n}{2}(7n+1)\), trouve la raison.`, 7, "t₁ = 4, t₂ = S₂ − S₁ = 15 − 4 = 11."),
  num("La somme des 8 premiers termes d'une série arithmétique est 100 et la somme des 16 premiers termes est 392. Trouve a.", 2, "2a + 7d = 25 et 2a + 15d = 49 ⇒ 8d = 24, d = 3, a = 2."),
  num("Un auditorium compte 25 rangées. La première rangée a 16 sièges et chaque rangée en a k de plus que la précédente. Il y a 1000 sièges en tout. Trouve k.", 2, "12.5(32 + 24k) = 1000."),
  num("Une élève économise 5 dollars la semaine 1, 7 dollars la semaine 2, 9 dollars la semaine 3, et ainsi de suite. Pendant quelle semaine le total atteint-il 500 dollars pour la première fois?", firstN(5, 2, 500), "n(n + 4) ≥ 500."),
  num("Trouve la somme de tous les termes de 7, 10, 13, … compris entre 100 et 300.", (() => { let s = 0; for (let t = 7; t <= 300; t += 3) if (t > 100 && t < 300) s += t; return s; })(), "De 103 à 298 : 66 termes."),
  tf("La somme des n premiers nombres impairs est toujours un carré parfait.", true, "n(1 + 2n − 1)/2 = n²."),
  tf("Toute série arithmétique de raison négative finit par avoir une somme négative.", true, "Les termes deviennent très négatifs; donc Sₙ → −∞."),
  ms(S`Pour \(5+9+13+\cdots\), quels énoncés sont vrais? Choisis toutes les bonnes réponses.`, ["S₁₀ = 230", "t₁₀ = 41", "S₂₀ = 860", "la somme de 15 termes est 495", "S₅ = 65"], [0, 1, 2, 3, 4], "Ils sont tous vrais : Sₙ = n(2n + 3)."),
  mc("Quelle expression donne 1 + 2 + … + n?", S`\(\frac{n(n+1)}2\)`, [S`\(\frac{n^2}2\)`, S`\(n(n+1)\)`, S`\(\frac{n(n-1)}2\)`], "n/2 (1 + n)."),
  num("Une pile de tuyaux compte 24 tuyaux dans la couche du bas et 1 de moins dans chaque couche au-dessus. Combien de couches donnent exactement 234 tuyaux?", 13, "n/2[48 − (n − 1)] = 234 ⇒ n² − 49n + 468 = 0 ⇒ n = 13 (36 est impossible : seulement 24 couches sont possibles)."),
  num("Entre 20 et 80, insère 9 nombres de façon que les 11 nombres forment une suite arithmétique. Quelle est la somme des 9 nombres insérés?", 450, "Somme des 11 nombres = 5.5(100) = 550; moins 100."),
  num("Trouve le nombre total de sièges illustrés (les rangées suivent la régularité jusqu'à 20 rangées).", Sa(14, 2, 20), "a = 14, d = 2, n = 20.", barsD(arr(14, 2, 6), { xlabel: "rangée", ylabel: "sièges" })),
  num("Le diagramme montre les 5 premières rangées d'un étalage triangulaire de boîtes de conserve (1 boîte au sommet). Combien de boîtes un étalage de 30 rangées compte-t-il?", 465, "30 · 31 / 2.", barsD(arr(1, 1, 5), { ylabel: "boîtes" })),
  num("Le diagramme montre des économies hebdomadaires. Après combien de semaines le total dépasse-t-il 1000 dollars pour la première fois?", firstN(10, 5, 1000, true), "Sₙ = n/2[20 + 5(n − 1)] > 1000.", barsD(arr(10, 5, 6), { xlabel: "semaine", ylabel: "dollars" })),
  num("Le diagramme montre les termes d'une série arithmétique. Trouve S₄₀.", Sa(50, -3, 40), "a = 50, d = −3 : 20(100 − 117).", barsD(arr(50, -3, 6))),
];
