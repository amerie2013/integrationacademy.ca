// 1.2 Caractéristiques des fonctions polynomiales — 20 questions faciles + 20 moyennes
import { mc, ms, num, tf, fill } from "./kit.mjs";
import { graph, planeDoc } from "./fig.mjs";

export const E = [
  num(String.raw`Quel est le degré de $f(x)=4x^3-x^5+2$?`, 5, "La plus grande puissance est x⁵."),
  num(String.raw`Quel est le coefficient dominant de $f(x)=4x^3-x^5+2$?`, -1, "Le coefficient de x⁵."),
  num(String.raw`Quelle est l'ordonnée à l'origine de $f(x)=2x^4-3x+9$?`, 9, "f(0) = 9."),
  num(String.raw`Quel est le plus grand nombre de points tournants d'un polynôme de degré 5?`, 4, "Au plus n − 1."),
  num(String.raw`Quel est le plus grand nombre de zéros d'un polynôme de degré 7?`, 7, "Au plus n."),
  num(String.raw`Quel est le plus petit nombre de zéros réels d'un polynôme de degré 3?`, 1, "Degré impair : les extrémités vont en sens opposés."),
  num(String.raw`Quel est le plus petit nombre de zéros réels d'un polynôme de degré 4?`, 0, "p. ex. x⁴ + 1 n'en a aucun."),
  tf(String.raw`Un polynôme de degré 4 peut avoir exactement 3 points tournants.`, true, "p. ex. une forme en W."),
  tf(String.raw`Un polynôme de degré 3 peut avoir exactement 3 points tournants.`, false, "Au plus 2."),
  mc(String.raw`Quelles différences constantes correspondent à une fonction cubique?`, "les troisièmes différences", ["les premières différences", "les deuxièmes différences", "les quatrièmes différences"], "Degré n ↔ n-ièmes différences constantes."),
  num(String.raw`Les deuxièmes différences d'une fonction quadratique valent toutes $-8$. Trouve le coefficient dominant.`, -4, "2a = −8."),
  mc(String.raw`Laquelle est une fonction impaire?`, String.raw`$f(x)=x^3-5x$`, [String.raw`$f(x)=x^3+1$`, String.raw`$f(x)=x^2-5x$`, String.raw`$f(x)=x^4-x^2$`], "Seulement des puissances impaires."),
  mc(String.raw`Laquelle est une fonction paire?`, String.raw`$f(x)=2x^4-x^2+7$`, [String.raw`$f(x)=x^4+x$`, String.raw`$f(x)=x^3$`, String.raw`$f(x)=(x+1)^2$`], "Seulement des puissances paires (7 = 7x⁰)."),
  fill(String.raw`Les fonctions paires sont symétriques par rapport à l'___.`, ["axe des y", "l'axe des y", "axe des ordonnées", "y-axis"], "f(−x) = f(x)."),
  mc("Combien de points tournants le graphique a-t-il?", "3", ["2", "4", "1"], "Compte les sommets et les creux.", graph((x) => 0.3 * (x * x - 1) * (x * x - 6), { xmin: -3, xmax: 3, ymin: -4, ymax: 4 })),
  mc("Combien d'abscisses à l'origine le graphique a-t-il?", "3", ["2", "4", "1"], "Compte les intersections avec l'axe des x.", graph((x) => 0.4 * (x + 2) * (x - 1) * (x - 3), { xmin: -3, xmax: 4, ymin: -5, ymax: 5 })),
  mc(String.raw`Comportement à l'infini de $f(x)=-3x^4+x$ :`, "descend aux deux extrémités", ["monte aux deux extrémités", "Q3 → Q1", "Q2 → Q4"], "Degré pair, coefficient dominant négatif."),
  tf(String.raw`Tout polynôme de degré impair a au moins une abscisse à l'origine.`, true, "Ses extrémités vont en sens opposés."),
  num(String.raw`Les troisièmes différences d'une fonction cubique valent toutes 12. Trouve le coefficient dominant.`, 2, "a·3! = 12."),
  mc(String.raw`Quel nombre de points tournants est possible pour une fonction cubique?`, "0 ou 2", ["1 ou 3", "exactement 1", "exactement 3"], "Degré impair : un nombre pair de points tournants, au plus 2."),
];

export const M = [
  mc("Un polynôme a ces caractéristiques : degré 4, a > 0, 1 point tournant. Quelle forme de graphique convient?", "une forme en U avec un minimum", ["une forme en W", "une forme en S", "un U à l'envers"], "Un seul point tournant, monte aux deux extrémités."),
  num(String.raw`Pour $x=0,1,2,3,4$, un polynôme prend les valeurs $2, 3, 10, 29, 66$. Trouve son degré.`, 3, "Différences 1, 7, 19, 37; 6, 12, 18; 6, 6."),
  num(String.raw`Pour $x=0,1,2,3,4$, un polynôme prend les valeurs $2, 3, 10, 29, 66$. Trouve son coefficient dominant.`, 1, "Troisièmes différences 6 = a·6."),
  num(String.raw`Que valent les quatrièmes différences de $y=3x^4+x^2$ (pas de 1)?`, 72, "3·4! = 72."),
  num(String.raw`Que valent les cinquièmes différences de $y=-x^5+2x$ (pas de 1)?`, -120, "−1·5! = −120."),
  ms(String.raw`Quels nombres de points tournants sont possibles pour un polynôme de degré 6? Choisis toutes les bonnes réponses.`, ["1", "2", "3", "5"], [0, 2, 3], "Degré pair : un nombre impair, au plus 5."),
  ms(String.raw`Quels nombres de zéros réels sont possibles pour un polynôme de degré 5? Choisis toutes les bonnes réponses.`, ["0", "1", "3", "5"], [1, 2, 3], "Au moins 1, au plus 5."),
  mc("Le graphique a 2 points tournants et descend vers la droite. Que peux-tu affirmer?", "degré impair ≥ 3, a < 0", ["degré pair ≥ 4, a < 0", "degré impair ≥ 3, a > 0", "degré 2, a < 0"], "Extrémités opposées (Q2 → Q4), au moins 3 pour deux points tournants.", graph((x) => -0.5 * x * (x - 2) * (x + 2), { xmin: -3, xmax: 3, ymin: -4, ymax: 4 })),
  mc("Quel est le plus petit degré possible du polynôme illustré?", "5", ["4", "3", "6"], "4 points tournants exigent un degré ≥ 5; les extrémités opposées confirment un degré impair.", graph((x) => 0.15 * x * (x * x - 4) * (x * x - 9), { xmin: -3.5, xmax: 3.5, ymin: -4, ymax: 4 })),
  tf(String.raw`$f(x)=x^5-3x^3+x$ est une fonction impaire.`, true, "Toutes les puissances sont impaires."),
  tf(String.raw`$f(x)=(x-1)^2$ est une fonction paire.`, false, "x² − 2x + 1 contient une puissance impaire : ni l'une ni l'autre."),
  mc(String.raw`Classe $f(x)=x^3+x^2$.`, "ni paire ni impaire", ["paire", "impaire", "les deux"], "Puissances mélangées."),
  num(String.raw`Une fonction quartique a $a=-2$. Ses quatrièmes différences (pas de 1) valent :`, -48, "−2·24."),
  mc(String.raw`Les quatrièmes différences d'un polynôme sont constantes et valent 12. Lequel pourrait-ce être?`, String.raw`$y=\tfrac12x^4-x$`, [String.raw`$y=12x^4$`, String.raw`$y=3x^4$`, String.raw`$y=2x^3$`], "a·24 = 12 → a = 1/2."),
  num(String.raw`Une fonction paire vérifie $f(3)=-7$. Trouve $f(-3)$.`, -7, "f(−3) = f(3)."),
  num(String.raw`Une fonction impaire vérifie $f(2)=5$. Trouve $f(-2)$.`, -5, "f(−2) = −f(2)."),
  mc("Un polynôme de degré 4 a a < 0 et f(0) = 5. Qu'est-ce qui est certain?", "il a au moins deux abscisses à l'origine", ["il n'a aucune abscisse à l'origine", "il a exactement une abscisse à l'origine", "il a quatre abscisses à l'origine"], "Les deux extrémités descendent, mais le graphique est au-dessus de l'axe en x = 0."),
  mc("Quel énoncé sur le graphique est vrai?", "ce pourrait être y = x⁴ − 3x² + 2 (degré 4, a > 0)", ["c'est une fonction cubique", "son coefficient dominant est négatif", "il a 4 points tournants"], "Forme en W : 3 points tournants, monte aux deux extrémités.", planeDoc({ view: { xmin: -2.5, xmax: 2.5, ymin: -1, ymax: 4 }, curves: [{ f: (x) => x ** 4 - 3 * x * x + 2, color: "violet" }], step: { x: 1, y: 1 } })),
  num(String.raw`Pour des valeurs de x également espacées avec un pas de 2, la fonction cubique $y=x^3$ a des troisièmes différences constantes égales à :`, 48, "a·n!·(pas)ⁿ = 1·6·8."),
  fill(String.raw`Si les premières différences d'une table sont constantes, le polynôme est de degré ___.`, ["1", "un"], "Une fonction linéaire."),
];
