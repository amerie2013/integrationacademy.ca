// 7.7 Le triangle de Pascal et le développement du binôme — 20 questions difficiles
// (miroir de ../../mcr3u-ch7/bank/h7_7.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { pascalD, gridD, prow } from "./fig.mjs";
import { TITLE } from "../l7_7.mjs";

const S = String.raw;
const C = (n, k) => prow(n)[k];

export const TOPIC = TITLE;
export const Q = [
  num(S`Trouve le coefficient de \(x^5\) dans \((2x-1)^7\).`, C(7, 2) * 32, "21 · (2x)⁵ · (−1)²."),
  num(S`Trouve le coefficient de \(x^3\) dans \((1-3x)^6\).`, C(6, 3) * -27, "20 · (−3x)³."),
  num(S`Trouve le coefficient de \(x^2y^3\) dans \((2x+y)^5\).`, C(5, 3) * 4, "10 · (2x)² y³."),
  num(S`Trouve le coefficient de \(x^6\) dans \((x^2+2)^5\).`, C(5, 2) * 4, "Terme en (x²)³ : 10 · 2²."),
  num(S`Trouve le terme constant de \(\left(x+\frac1x\right)^6\).`, C(6, 3), "x³ · (1/x)³ : terme du milieu 20."),
  num(S`Trouve le coefficient de \(x^4\) dans \(\left(x^2-\frac2x\right)^5\).`, C(5, 2) * 4, "10 · (x²)³ · (−2/x)² = 10 · 4x⁴ = 40x⁴."),
  num(S`Utilise \((1+0.02)^4\) pour trouver \(1.02^4\) à 6 décimales près.`, Math.round(1.02 ** 4 * 1e6) / 1e6, "1 + 0.08 + 0.0024 + 0.000032 + …", null, 0.000001),
  num(S`La somme des coefficients de \((ax+1)^4\) est 81, avec \(a>0\). Trouve \(a\).`, 2, "(a + 1)⁴ = 81."),
  num(S`Dans \((x+k)^5\), le coefficient de \(x^3\) est 90, avec \(k>0\). Trouve \(k\).`, 3, "10k² = 90."),
  num("Combien de trajets les plus courts traversent un quadrillage de 6 pâtés sur 4 pâtés?", C(10, 4), "Rangée 10, position 4."),
  num("Sur un quadrillage de 4 pâtés sur 4 pâtés, combien de trajets les plus courts passent par le coin central (2, 2)?", C(4, 2) * C(4, 2), "6 × 6.", gridD(4, 4)),
  num("Quelle est la somme des éléments des rangées 0 à 10?", 2047, "2¹¹ − 1."),
  num("Quelle est la somme des éléments de la 3e diagonale (1, 3, 6, 10, …) de la rangée 2 à la rangée 8?", 1 + 3 + 6 + 10 + 15 + 21 + 28, "La régularité du bâton de hockey : elle est égale à l'élément situé en bas à droite, 84."),
  tf(S`\((x+y)^n\) compte toujours \(n+1\) termes.`, true, "Les puissances de y vont de 0 à n."),
  tf("Tous les éléments de la rangée 8, sauf les 1, sont pairs.", true, "8, 28, 56, 70, 56, 28, 8."),
  ms(S`Lesquels sont des termes de \((x-2)^5\)? Choisis toutes les bonnes réponses.`, [S`\(x^5\)`, S`\(-10x^4\)`, S`\(40x^3\)`, S`\(-80x^2\)`, S`\(-32\)`, S`\(32\)`], [0, 1, 2, 3, 4], "Coefficients 1, −10, 40, −80, 80, −32."),
  mc(S`Laquelle de ces expressions est égale à \((x^2-y)^4\)?`, S`\(x^8-4x^6y+6x^4y^2-4x^2y^3+y^4\)`, [S`\(x^8+4x^6y+6x^4y^2+4x^2y^3+y^4\)`, S`\(x^6-4x^4y+6x^3y^2-4xy^3+y^4\)`, S`\(x^8-4x^6y-6x^4y^2-4x^2y^3+y^4\)`], "Rangée 4 avec des signes alternés; (x²)⁴ = x⁸."),
  num("Quel nombre remplace le point d'interrogation (rangée 10)?", C(10, 4), "84 + 126.", pascalD(10, [[10, 4]])),
  num("Sur le quadrillage de 5 pâtés sur 4 pâtés, combien de trajets les plus courts mènent de A à B?", C(9, 4), "Rangée 9, position 4.", gridD(5, 4)),
  num("Le triangle montre les rangées 0 à 7. Quelle est la somme de la rangée qui contient le point d'interrogation?", 128, "Rangée 7 : 2⁷.", pascalD(7, [[7, 2]])),
];
