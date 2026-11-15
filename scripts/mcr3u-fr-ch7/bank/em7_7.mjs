// 7.7 Le triangle de Pascal et le développement du binôme — 20 questions faciles + 20 moyennes
// (miroir de ../../mcr3u-ch7/bank/em7_7.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { pascalD, gridD, prow } from "./fig.mjs";

const S = String.raw;
const C = (n, k) => prow(n)[k];

export const E = [
  num("Quel est le deuxième élément de la rangée 9 (1, ?, …)?", 9, "La rangée n commence par 1, n."),
  num("Quel est le troisième élément de la rangée 5?", 10, "1, 5, 10, …"),
  num("Quel est l'élément du milieu de la rangée 4?", 6, "1, 4, 6, 4, 1."),
  num("Quelle est la somme de la rangée 6?", 64, "2⁶."),
  num("Quelle est la somme de la rangée 0?", 1, "2⁰."),
  num("Combien d'éléments la rangée 12 compte-t-elle?", 13, "n + 1."),
  num(S`Combien de termes \((x+y)^7\) compte-t-il?`, 8, "n + 1."),
  num(S`Quel est le coefficient de \(x^4y\) dans \((x+y)^5\)?`, 5, "Rangée 5 : 1, 5, …"),
  num(S`Quel est le coefficient de \(x^2\) dans \((x+1)^4\)?`, 6, "Rangée 4."),
  num(S`Quel est le dernier terme de \((x+2)^4\)?`, 16, "2⁴."),
  mc(S`Laquelle de ces expressions est égale à \((a+b)^3\)?`, S`\(a^3+3a^2b+3ab^2+b^3\)`, [S`\(a^3+b^3\)`, S`\(a^3+2a^2b+2ab^2+b^3\)`, S`\(a^3+3ab+b^3\)`], "Rangée 3 : 1, 3, 3, 1."),
  mc("Comment trouve-t-on chaque élément du triangle de Pascal (autre que les 1)?", "on additionne les deux éléments situés au-dessus", ["on multiplie les deux éléments situés au-dessus", "on double l'élément situé au-dessus", "on additionne toute la rangée au-dessus"], "La règle de Pascal."),
  tf("Chaque rangée du triangle de Pascal se lit de la même façon dans les deux sens.", true, "Les rangées sont symétriques."),
  tf(S`\((x+y)^2=x^2+y^2\).`, false, "C'est x² + 2xy + y²."),
  num(S`Quel est le coefficient de \(x\) dans \((x-1)^3\)?`, 3, "x³ − 3x² + 3x − 1."),
  num(S`Quel est le terme constant de \((x-1)^5\)?`, -1, "(−1)⁵."),
  num(S`Dans \((x+y)^6\), quelle est la somme des exposants de chaque terme?`, 6, "Toujours n."),
  num("Les rangées 0 à 6 sont illustrées. Quel nombre remplace le point d'interrogation dans la rangée 6?", C(6, 3), "10 + 10.", pascalD(6, [[6, 3]])),
  num("Les rangées 0 à 5 sont illustrées. Quel nombre remplace le point d'interrogation dans la rangée 5?", C(5, 2), "4 + 6.", pascalD(5, [[5, 2]])),
  num("Sur le quadrillage de 2 pâtés sur 2 pâtés, compte les trajets les plus courts de A à B (seulement vers la droite et vers le haut).", C(4, 2), "6 trajets : rangée 4, milieu.", gridD(2, 2)),
];

export const M = [
  num(S`Trouve le coefficient de \(x^3\) dans \((x+2)^5\).`, C(5, 2) * 4, "10 · 2²."),
  num(S`Trouve le coefficient de \(x^2\) dans \((x-3)^4\).`, C(4, 2) * 9, "6 · (−3)²."),
  num(S`Trouve le coefficient de \(x^3\) dans \((2x+1)^4\).`, C(4, 1) * 8, "4 · (2x)³."),
  num(S`Trouve le coefficient de \(x\) dans \((3x-2)^3\).`, C(3, 2) * 3 * 4, "3 · 3x · (−2)² = 36x."),
  num(S`Trouve le terme constant de \((2x+3)^4\).`, 81, "3⁴."),
  num(S`Trouve le coefficient de \(x^4\) dans \((x+1)^{10}\).`, C(10, 6), "Rangée 10 : 1, 10, 45, 120, 210, …"),
  num(S`Trouve la somme des coefficients de \((x+1)^7\).`, 128, "Remplace x par 1 : 2⁷."),
  num(S`Trouve la somme des coefficients de \((2x-1)^5\).`, 1, "Remplace x par 1 : 1⁵."),
  mc(S`Laquelle de ces expressions est égale à \((x-2)^3\)?`, S`\(x^3-6x^2+12x-8\)`, [S`\(x^3-6x^2-12x-8\)`, S`\(x^3-8\)`, S`\(x^3+6x^2+12x+8\)`], "Rangée 3 avec b = −2."),
  mc(S`Laquelle de ces expressions est égale à \((2a+b)^3\)?`, S`\(8a^3+12a^2b+6ab^2+b^3\)`, [S`\(2a^3+6a^2b+6ab^2+b^3\)`, S`\(8a^3+3a^2b+3ab^2+b^3\)`, S`\(6a^3+12a^2b+6ab^2+b^3\)`], "(2a)³ = 8a³, 3(2a)²b = 12a²b, …"),
  ms("Quelles régularités trouve-t-on dans le triangle de Pascal? Choisis toutes les bonnes réponses.", ["les sommes des rangées sont des puissances de 2", "la deuxième diagonale est 1, 2, 3, 4, …", "la troisième diagonale est formée des nombres triangulaires", "tous les éléments sont impairs", "les rangées sont symétriques"], [0, 1, 2, 4], "Beaucoup d'éléments sont pairs (p. ex. 2, 6)."),
  tf("Les éléments de la rangée 7, autres que les 1, sont tous divisibles par 7.", true, "7, 21, 35, 35, 21, 7."),
  tf(S`Tous les coefficients du développement de \((x-y)^4\) sont positifs.`, false, "Les signes alternent."),
  num("Combien de trajets les plus courts traversent un quadrillage de 4 pâtés sur 3 pâtés (seulement vers la droite et vers le haut)?", C(7, 3), "Rangée 7, position 3."),
  num("Combien de trajets les plus courts traversent un quadrillage de 5 pâtés sur 5 pâtés?", C(10, 5), "Rangée 10, milieu."),
  num("Quelle est la somme des rangées 0 à 6 du triangle de Pascal?", 127, "1 + 2 + … + 64."),
  num(S`Dans \((x+y)^8\), quel est le rang (1er, 2e, …) du terme qui contient \(x^5y^3\)?`, 4, "Les puissances de y sont 0, 1, 2, 3."),
  num(S`Trouve le coefficient du terme du milieu de \((x+1)^6\).`, 20, "Rangée 6 : 1, 6, 15, 20, …"),
  num("Les rangées 0 à 8 sont illustrées. Trouve l'élément caché de la rangée 8.", C(8, 3), "21 + 35.", pascalD(8, [[8, 3]])),
  num("Sur le quadrillage de 3 pâtés sur 2 pâtés, combien de trajets les plus courts mènent de A à B?", C(5, 2), "Rangée 5, position 2.", gridD(3, 2)),
];
