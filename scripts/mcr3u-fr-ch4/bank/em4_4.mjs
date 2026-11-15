// 4.4 Fonctions exponentielles et leurs propriétés — 20 questions faciles + 20 moyennes (miroir de ../../mcr3u-ch4/bank/em4_4.mjs)
import { mc, ms, num, tf } from "./kit.mjs";
import { P, planeDoc } from "./fig.mjs";

const ex = (a, b, pts, view = { xmin: -3, xmax: 4, ymin: -1, ymax: 20 }) => planeDoc({ view, curves: [{ f: (x) => a * b ** x, color: "violet" }], points: pts, step: { x: 1, y: 2 } });

export const E = [
  num(String.raw`Quelle est l'ordonnée à l'origine de $y=5(3)^x$?`, 5, "a."),
  mc(String.raw`$y=0.6^x$ représente-t-elle une croissance ou une décroissance?`, "décroissance", ["croissance", "ni l'une ni l'autre", "affine"], "0 < b < 1."),
  num(String.raw`Quelle est l'asymptote horizontale de $y=4^x$? Entre sa valeur de y.`, 0, "y = 0."),
  tf(String.raw`L'image de $y=2^x$ est $y\ge0$.`, false, "y > 0 : la fonction n'atteint jamais 0."),
  num(String.raw`Évalue $y=2^x$ à $x=5$.`, 32, "2⁵."),
  num(String.raw`Évalue $y=10\left(\tfrac12\right)^x$ à $x=2$.`, 2.5, "10/4.", null, 1e-9),
  mc("Une table a un rapport constant entre les valeurs de y consécutives. La relation est…", "exponentielle", ["affine", "du second degré", "pas une fonction"], "Rapport constant."),
  num(String.raw`Quel est le rapport de la table $y=3,6,12,24$?`, 2, "6 ÷ 3."),
  num(String.raw`Quel nombre vient ensuite : $100, 50, 25, \ldots$?`, 12.5, "× ½.", null, 1e-9),
  mc("Laquelle est une fonction exponentielle?", String.raw`$y=3(2)^x$`, [String.raw`$y=x^3$`, String.raw`$y=2x+3$`, String.raw`$y=x^2$`], "La variable est dans l'exposant."),
  tf(String.raw`$y=1^x$ est une fonction exponentielle.`, false, "C'est la droite y = 1."),
  num(String.raw`$y=ab^x$ passe par $(0,7)$. Trouve $a$.`, 7, "a est l'ordonnée à l'origine."),
  mc("Quelle base donne une décroissance?", String.raw`$0.9$`, [String.raw`$1.1$`, String.raw`$2$`, String.raw`$1$`], "0 < b < 1."),
  num(String.raw`Évalue $3^x$ à $x=-1$ (au dix-millième près).`, 1 / 3, "⅓.", null, 0.0005),
  tf("Le domaine d'une fonction exponentielle y = bˣ est l'ensemble des nombres réels.", true, "Tout exposant est permis."),
  num(String.raw`Évalue $y=2(5)^x$ à $x=2$.`, 50, "2 × 25."),
  mc(String.raw`La table $x$ : 0, 1, 2, 3; $y$ : 1, 4, 7, 10 est…`, "affine", ["exponentielle", "du second degré", "ni l'une ni l'autre"], "Différence première constante de 3."),
  num(String.raw`$y=4b^x$ passe par $(1,12)$. Trouve $b$.`, 3, "4b = 12."),
  num("Lis l'ordonnée à l'origine du graphique.", 6, "La courbe coupe l'axe des y à 6.", ex(6, 0.5, [P(0, 6), P(1, 3)], { xmin: -2, xmax: 4, ymin: -1, ymax: 20 })),
  num("Le graphique passe par (0, 2) et (1, 6). Trouve la base b.", 3, "6 ÷ 2.", ex(2, 3, [P(0, 2), P(1, 6)])),
];

export const M = [
  num(String.raw`$y=ab^x$ passe par $(0,3)$ et $(2,48)$. Trouve $b$.`, 4, "3b² = 48."),
  num(String.raw`$y=ab^x$ passe par $(1,10)$ et $(2,50)$. Trouve $a$.`, 2, "b = 5; 5a = 10."),
  num(String.raw`$y=ab^x$ passe par $(2,4)$ et $(4,1)$. Trouve l'ordonnée à l'origine.`, 16, "b² = ¼ → b = ½; a·¼ = 4."),
  ms(String.raw`Quels énoncés sont vrais pour $y=2(3)^x$? Choisis toutes les bonnes réponses.`, ["domaine : tous les nombres réels", "image : y > 0", "ordonnée à l'origine : 2", "croissante", "asymptote : y = 2"], [0, 1, 2, 3], "L'asymptote est y = 0."),
  num(String.raw`Une table exponentielle a $y=5,\ 7.5,\ 11.25$. Quel nombre vient ensuite (au millième près)?`, 16.875, "Rapport de 1.5.", null, 0.0005),
  mc(String.raw`La table $x$ : 0, 1, 2, 3; $y$ : 1, 3, 6, 10 est…`, "du second degré", ["exponentielle", "affine", "ni l'une ni l'autre"], "Différences secondes 1, 1."),
  num(String.raw`$y=a(2)^x$ passe par $(3,40)$. Trouve $a$.`, 5, "8a = 40."),
  num(String.raw`Pour quelle valeur de $x$ a-t-on $2^x=64$?`, 6, "2⁶."),
  mc("Quelle fonction est décroissante et a une ordonnée à l'origine de 3?", String.raw`$y=3(0.4)^x$`, [String.raw`$y=0.4(3)^x$`, String.raw`$y=3(4)^x$`, String.raw`$y=-3(0.4)^x$`], "a = 3, b < 1."),
  tf("Pour b > 1, une fonction exponentielle finit par dépasser n'importe quelle fonction du second degré.", true, "La croissance exponentielle dépasse la croissance polynomiale."),
  num(String.raw`Quel est le plus petit nombre entier $x$ tel que $2^x>1000$?`, 10, "2¹⁰ = 1024."),
  num(String.raw`Évalue $y=5(1.2)^x$ à $x=2$.`, 7.2, "5 × 1.44.", null, 1e-9),
  mc(String.raw`Quelle expression est égale à $\left(\tfrac12\right)^x$?`, String.raw`$2^{-x}$`, [String.raw`$-2^x$`, String.raw`$2^{x/2}$`, String.raw`$\frac{x}{2}$`], "½ = 2⁻¹."),
  num(String.raw`Pour $y=2^x$, quelle est la différence première de $x=3$ à $x=4$?`, 8, "16 − 8."),
  num(String.raw`Pour $y=2(3)^x$, que vaut $y(5)\div y(3)$?`, 9, "3²."),
  num("La courbe passe par (1, 6) et (2, 18). Quelle est son ordonnée à l'origine?", 2, "b = 3; 6 ÷ 3.", ex(2, 3, [P(1, 6), P(2, 18)])),
  num("Une courbe de décroissance passe par (0, 40) et (1, 10). Trouve b.", 0.25, "10/40.", ex(40, 0.25, [P(0, 40), P(1, 10)], { xmin: -1, xmax: 4, ymin: -2, ymax: 45 }), 1e-9),
  tf("Les tables exponentielles ont des différences secondes constantes.", false, "Elles ont un rapport constant."),
  num(String.raw`Où $y=4^x$ rencontre-t-elle $y=2^x+2$? Entre x.`, 1, "Pose u = 2ˣ : u² − u − 2 = 0 → u = 2."),
  num(String.raw`Pour $y=8\left(\tfrac12\right)^x$, trouve $x$ quand $y=0.5$.`, 4, "(½)ˣ = 1/16."),
];
