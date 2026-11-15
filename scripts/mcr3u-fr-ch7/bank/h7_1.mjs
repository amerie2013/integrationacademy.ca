// 7.1 Suites arithmétiques — 20 questions difficiles (miroir de ../../mcr3u-ch7/bank/h7_1.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { dotsD } from "./fig.mjs";
import { TITLE } from "../l7_1.mjs";

const S = String.raw;
const arr = (a, d, n) => Array.from({ length: n }, (_, i) => a + i * d);

export const TOPIC = TITLE;
export const Q = [
  num(S`Une suite arithmétique a \(t_7=-4\) et \(t_{19}=44\). Trouve \(t_{50}\).`, 168, "12d = 48 ⇒ d = 4; t₅₀ = t₁₉ + 31(4)."),
  num(S`Une suite arithmétique a \(t_4=31\) et \(t_{13}=-5\). Trouve le premier terme négatif.`, -1, "d = −4, a = 43 : 47 − 4n < 0 ⇒ n = 12."),
  num(S`\(k+2\), \(2k+1\) et \(4k-4\) sont des termes consécutifs d'une suite arithmétique. Trouve k.`, 4, "2(2k + 1) = (k + 2) + (4k − 4) ⇒ 4k + 2 = 5k − 2."),
  num("Combien de multiples de 6 se trouvent entre 100 et 1000?", 150, "102, 108, …, 996 : (996 − 102)/6 + 1."),
  num("Combien de nombres de trois chiffres donnent un reste de 2 quand on les divise par 9?", 100, "101, 110, …, 992 : (992 − 101)/9 + 1."),
  num("Le 5e terme d'une suite arithmétique est le triple du 1er terme, et le 10e terme est 55. Trouve le premier terme.", 10, "a + 4d = 3a ⇒ d = a/2; a + 9(a/2) = 5.5a = 55."),
  num("Une tour de cubes mesure 12 cm avec 1 cube, et chaque cube de plus ajoute 4.5 cm. Avec combien de cubes la tour dépasse-t-elle 2 m pour la première fois?", 43, "12 + 4.5(n − 1) > 200 ⇒ n > 42.8."),
  num(S`Le terme général d'une suite arithmétique est \(t_n=an+b\). Si \(t_2=1\) et \(t_7=26\), trouve \(b\).`, -9, "5a = 25 ⇒ a = 5; 10 + b = 1."),
  tf("Si on double chaque terme d'une suite arithmétique, on obtient encore une suite arithmétique.", true, "La raison double elle aussi."),
  tf("Si on élève au carré chaque terme d'une suite arithmétique, on obtient encore une suite arithmétique.", false, "1, 2, 3 → 1, 4, 9."),
  ms("Une suite a tₙ = 8 − 3n. Quels énoncés sont vrais? Choisis toutes les bonnes réponses.", ["d = −3", "t₁ = 5", "−22 est un terme", "le 4e terme est −4", "le graphique monte"], [0, 1, 2, 3], "−22 : n = 10. Le graphique descend."),
  mc("Deux suites arithmétiques, 5, 12, 19, … et 2, 11, 20, …, ont un premier terme commun. Quel est-il?", "47", ["33", "29", "56"], "Énumère les deux : 5, 12, 19, 26, 33, 40, 47 et 2, 11, 20, 29, 38, 47."),
  num("Insère quatre nombres entre 9 et 44 de façon que les six nombres forment une suite arithmétique. Quel est le troisième nombre de la suite?", 23, "5d = 35 ⇒ d = 7 : 9, 16, 23, …"),
  num("Un taxi demande un tarif de base plus un montant fixe par km. Une course de 6 km coûte 15.40 dollars et une course de 14 km coûte 30.60 dollars. Quel est le tarif de base (en dollars)?", 4, "Par km : 15.20/8 = 1.90; 15.40 − 6(1.90).", null, 0.001),
  num(S`Pour quelle valeur de n le terme \(t_n=3n-7\) devient-il pour la première fois plus grand que \(t_n=200-2n\)?`, 42, "5n > 207 ⇒ n > 41.4."),
  num(S`\(t_1=a\), \(t_n=t_{n-1}+d\), \(t_6=0\) et \(t_{11}=-30\). Trouve \(a\).`, 30, "5d = −30 ⇒ d = −6; a + 5d = 0."),
  num("Trouve t₁₀₀ pour la suite représentée.", 304, "a = 7, d = 3 : 7 + 99(3).", dotsD(arr(7, 3, 6), { labels: true })),
  num("La suite représentée se poursuit. Quel est le rang du terme −95?", 31, "tₙ = 29 − 4n = −95.", dotsD(arr(25, -4, 6), { labels: true })),
  num("Le graphique montre t₁ à t₆ d'une suite arithmétique. Pour quelle valeur de n a-t-on tₙ = 100?", 17, "a = 4, d = 6 : 6n − 2 = 100.", dotsD(arr(4, 6, 6), { labels: true })),
  num("Lis le graphique : quelle est la somme de t₄ et de t₅?", 17.5, "9.5 + 8.", dotsD(arr(14, -1.5, 6), { labels: true }), 0.001),
];
