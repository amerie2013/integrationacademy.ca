// 1.10 Densité, infini et limite — 20 questions faciles + 20 moyennes
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { numberLine, graph } from "./svg.mjs";

export const E = [
  mc(String.raw`Quel nombre se trouve entre $0.3$ et $0.4$?`, "$0.35$", ["$0.29$", "$0.41$", "$0.5$"], String.raw`$0.30<0.35<0.40$.`),
  mc(String.raw`Quel nombre se trouve entre $\frac12$ et $1$?`, String.raw`$\frac34$`, [String.raw`$\frac14$`, String.raw`$\frac13$`, String.raw`$\frac54$`], String.raw`$0.5<0.75<1$.`),
  num(String.raw`Trouve le point milieu de $2$ et de $3$.`, 2.5, String.raw`$\frac{2+3}{2}$.`, undefined, 0.000001),
  num(String.raw`Trouve le point milieu de $-4$ et de $6$.`, 1, String.raw`$\frac{-4+6}{2}=1$.`),
  tf("Il y a un entier entre 5 et 6.", false, "Les entiers ont des écarts : il n'y a rien entre 5 et 6."),
  tf("Il y a une fraction entre deux fractions différentes quelconques.", true, "Les nombres rationnels sont denses."),
  num(String.raw`Combien d'entiers se trouvent strictement entre $-2$ et $3$?`, 4, String.raw`$-1,0,1,2$.`),
  mc(String.raw`De quelle valeur $1,\ \frac12,\ \frac13,\ \frac14,\dots$ se rapprochent-ils?`, "$0$", ["$1$", String.raw`$\frac12$`, String.raw`Ils grandissent`], "Les termes diminuent vers 0."),
  fill(String.raw`Écris le terme suivant : $\frac12,\ \frac14,\ \frac18,\ \_\_\_$`, ["1/16"], "Chaque terme est la moitié du précédent."),
  tf("Il existe un plus grand nombre naturel.", false, "Ajoute 1 à n'importe quel nombre naturel pour en obtenir un plus grand."),
  mc(String.raw`$0.999\ldots$ (des neuf sans fin) est égal à`, "$1$", ["$0.9$", "$0.99$", "un nombre juste en dessous de 1"], String.raw`$0.\overline9=1$.`),
  num(String.raw`De quelle valeur $0.9,\ 0.99,\ 0.999,\dots$ s'approchent-ils?`, 1, "L'écart avec 1 diminue vers 0."),
  mc("Quel point est à mi-chemin entre 0 et 1?", "B", ["A", "C", "D"], String.raw`Le milieu est $0.5$.`, numberLine({ min: 0, max: 1, step: 0.1, labelEvery: 5, letters: [{ at: 0.25, label: "A" }, { at: 0.5, label: "B" }, { at: 0.7, label: "C" }, { at: 0.9, label: "D" }] })),
  fill(String.raw`Trouve le point milieu de $\frac14$ et de $\frac34$ : ___`, ["1/2", "0.5"], String.raw`$\frac{1}{2}$.`),
  num(String.raw`Trouve un nombre à mi-chemin entre $1.2$ et $1.3$.`, 1.25, "Fais leur moyenne.", undefined, 0.000001),
  ms(String.raw`Quels nombres se trouvent entre $\frac13$ et $\frac23$? Sélectionne-les tous.`, [String.raw`$\frac12$`, "$0.4$", String.raw`$\frac34$`, "$0.6$", String.raw`$\frac14$`], [0, 1, 3], String.raw`$\frac13\approx0.33$ et $\frac23\approx0.67$.`),
  tf(String.raw`Les termes de $\frac{1}{n}$ finissent par être égaux à $0$.`, false, "Ils s'approchent de 0 autant qu'on le veut, mais restent positifs."),
  mc("Combien y a-t-il de nombres rationnels entre 0 et 1?", "une infinité", ["aucun", "9", "100"], "Entre deux d'entre eux, il y en a toujours un autre."),
  num(String.raw`De quelle valeur $2.1,\ 2.01,\ 2.001,\dots$ s'approchent-ils?`, 2, "La partie en trop diminue vers 0."),
  mc("Le graphique montre une suite. De quelle valeur les termes s'approchent-ils?", "$3$", ["$0$", "$1$", "$6$"], "Les points se stabilisent à 3.", graph({ series: [{ pts: [1, 2, 3, 4, 5, 6].map((n) => [n, +(3 + 3 / (n + 1)).toFixed(3)]), join: false }], xmin: 0, xmax: 7, ymin: 0, ymax: 5, xstep: 1, ystep: 1, xlabel: "n", ylabel: "terme" })),
];

export const M = [
  fill(String.raw`Trouve le point milieu de $\frac25$ et de $\frac12$ sous forme de fraction : ___`, ["9/20"], String.raw`$\frac{4}{10}+\frac{5}{10}=\frac{9}{10}$; la moitié est $\frac{9}{20}$.`),
  num(String.raw`Trouve le point milieu de $-1.6$ et de $-1.5$.`, -1.55, "Fais leur moyenne.", undefined, 0.000001),
  mc(String.raw`Quel nombre se trouve entre $\frac58$ et $\frac23$?`, String.raw`$\frac{31}{48}$`, [String.raw`$\frac12$`, String.raw`$\frac34$`, String.raw`$\frac{29}{48}$`], String.raw`$\frac58=\frac{30}{48}$ et $\frac23=\frac{32}{48}$.`),
  num(String.raw`Quelle est la limite de $\frac{n+2}{n}$ quand $n$ augmente?`, 1, String.raw`$1+\frac2n\to1$.`),
  num(String.raw`Quelle est la limite de $5+\left(\frac12\right)^n$?`, 5, String.raw`$\left(\frac12\right)^n\to0$.`),
  tf("Les entiers sont denses.", false, "Il n'y a aucun entier entre 3 et 4."),
  fill(String.raw`Écris le terme suivant : $\frac23,\ \frac34,\ \frac45,\ \_\_\_$`, ["5/6"], "Le numérateur et le dénominateur augmentent chacun de 1."),
  mc(String.raw`De quelle valeur $\frac23,\frac34,\frac45,\dots$ s'approchent-ils?`, "$1$", ["$0$", String.raw`$\frac12$`, "la suite continue de grandir"], String.raw`L'écart $\frac1{n+1}$ diminue jusqu'à 0.`),
  num(String.raw`La somme $\frac12+\frac14+\frac18+\frac1{16}$ est égale à quel décimal?`, 0.9375, String.raw`$\frac{15}{16}=0.9375$.`, undefined, 0.000001),
  ms("Quels énoncés sont vrais? Sélectionne-les tous.", ["Il n'existe pas de plus petite fraction positive.", String.raw`$0.\overline{9}=1$`, "Il existe un plus grand entier.", "Entre 0.1 et 0.2, il y a une infinité de nombres."], [0, 1, 3], "Les entiers continuent sans fin."),
  num(String.raw`Tu parcours à répétition la moitié de la distance qui te sépare d'un mur situé à $16$ m. À quelle distance du mur es-tu après $4$ pas, en mètres?`, 1, String.raw`$16\times\left(\frac12\right)^4=1$.`),
  fill(String.raw`Trouve une fraction exactement à mi-chemin entre $\frac13$ et $\frac14$ : ___`, ["7/24"], String.raw`$\frac{8}{24}$ et $\frac{6}{24}$; le milieu est $\frac{7}{24}$.`),
  mc("Quel point pourrait être 0.255?", "C", ["A", "B", "D"], String.raw`À mi-chemin entre $0.25$ et $0.26$.`, numberLine({ min: 0.24, max: 0.27, step: 0.005, labelEvery: 2, letters: [{ at: 0.242, label: "A" }, { at: 0.25, label: "B" }, { at: 0.255, label: "C" }, { at: 0.265, label: "D" }] })),
  num(String.raw`À quel nombre $3.\overline{9}=3.999\ldots$ est-il égal?`, 4, String.raw`$3+0.\overline9=4$.`),
  tf(String.raw`La suite $1,\ -\frac12,\ \frac14,\ -\frac18,\dots$ s'approche de $0$.`, true, "Les termes changent de signe, mais diminuent vers 0."),
  num(String.raw`Quel est le plus petit entier $n$ tel que $\frac1n<0.05$?`, 21, String.raw`$\frac1{20}=0.05$, donc $n=21$.`),
  mc("Le graphique montre une suite décroissante. Quelle est sa limite?", "$2$", ["$0$", "$4$", "$1$"], "Les termes se stabilisent à 2.", graph({ series: [{ pts: [1, 2, 3, 4, 5, 6, 7].map((n) => [n, +(2 + 4 / n).toFixed(3)]), join: false }], xmin: 0, xmax: 8, ymin: 0, ymax: 7, xstep: 1, ystep: 1, xlabel: "n", ylabel: "terme" })),
  num(String.raw`Combien de fractions de dénominateur $10$ se trouvent strictement entre $\frac15$ et $\frac45$?`, 5, String.raw`$\frac{3}{10},\dots,\frac{7}{10}$.`),
  fill(String.raw`Écris $0.\overline{3}$ sous forme de fraction : ___`, ["1/3"], String.raw`C'est la limite de $0.3,0.33,0.333,\dots$, soit $\frac13$.`),
  num(String.raw`Une balle rebondit à la $\frac12$ de sa hauteur précédente. Lâchée de $8$ m, à quelle hauteur monte-t-elle au troisième rebond, en mètres?`, 1, String.raw`$8\times\left(\frac12\right)^3=1$.`),
];
