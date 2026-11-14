// 2.2 Expressions équivalentes — 20 questions faciles + 20 moyennes (miroir de ../../mth1w-ch2/bank/em2_2.mjs)
import { mc, ms, num, tf, mx } from "../../mth1w-ch2/bank/kit.mjs";
import { algTiles, rectFig } from "../../mth1w-ch2/bank/svg2.mjs";

export const E = [
  mc(String.raw`Quel terme est semblable à $4x$?`, "$-x$", ["$4x^2$", "$4y$", "$4$"], String.raw`Les termes semblables ont la même partie variable, $x$.`),
  num(String.raw`Quel est le degré de $7x^3$?`, 3, "L'exposant de x est 3."),
  mc(String.raw`Classe $5a-2b+1$.`, "trinôme", ["monôme", "binôme", "pas un polynôme"], "Trois termes."),
  mx(String.raw`Simplifie $6m+3m$.`, "9*m", String.raw`$6+3=9$ : $9m$.`),
  mx(String.raw`Simplifie $8y-11y$.`, "-3*y", String.raw`$8-11=-3$.`),
  tf(String.raw`$2x$ et $2x^2$ sont des termes semblables.`, false, "Les exposants de x sont différents."),
  mx(String.raw`Simplifie $4a+3-a+5$.`, "3*a+8", String.raw`Termes en $a$ : $4-1=3$; constantes : $8$.`),
  num(String.raw`Combien de termes reste-t-il après avoir simplifié $3x+2-3x+y$?`, 2, String.raw`$3x-3x=0$, il reste $2+y$.`),
  mc(String.raw`Quel polynôme ces tuiles représentent-elles?`, "$x^2+2x-3$", ["$x^2-2x+3$", "$x^2+2x+3$", "$2x^2+x-3$"], "Une tuile x², deux tuiles x positives, trois tuiles unités négatives.", algTiles([{ x2: 1, x: 2, c: -3 }])),
  mx(String.raw`Simplifie $(3x+4)+(2x-9)$.`, "5*x-5", String.raw`$5x-5$.`),
  mx(String.raw`Simplifie $(5n-2)-(2n+1)$.`, "3*n-3", String.raw`$5n-2-2n-1=3n-3$.`),
  num(String.raw`Quel est le degré de $3xy^2$?`, 3, String.raw`$1+2=3$.`),
  tf(String.raw`Le degré de la constante $6$ est $0$.`, true, String.raw`$6=6x^0$.`),
  mc(String.raw`Quel est l'opposé de $x^2-3x+2$?`, "$-x^2+3x-2$", ["$-x^2-3x+2$", "$x^2+3x-2$", "$-x^2-3x-2$"], "Change le signe de chaque terme."),
  mx(String.raw`Simplifie $2p^2+5p-p^2-2p$.`, "p^2+3*p", String.raw`$p^2+3p$.`),
  ms(String.raw`Lesquels sont des binômes? Choisis toutes les bonnes réponses.`, ["$x+1$", "$3x^2$", "$2a-b$", "$x^2+x+1$", "$7y-4$"], [0, 2, 4], "Un binôme a exactement deux termes."),
  tf(String.raw`$2x+5$ et $7x$ sont équivalentes parce que les deux valent $7$ lorsque $x=1$.`, false, String.raw`Pour $x=2$ : $9\ne14$. Une seule concordance ne prouve pas l'équivalence.`),
  num(String.raw`On réunit quatre tuiles unités positives et six tuiles unités négatives. Combien de paires nulles peut-on retirer?`, 4, "Chaque tuile positive forme une paire avec une tuile négative."),
  mx(String.raw`Simplifie $-3k+7+5k-10$.`, "2*k-3", String.raw`$2k-3$.`),
  mc(String.raw`Écris $4-x+2x^2$ dans l'ordre décroissant.`, "$2x^2-x+4$", ["$4-x+2x^2$", "$2x^2+x+4$", "$-x+2x^2+4$"], "La plus haute puissance d'abord."),
];

export const M = [
  mx(String.raw`Simplifie $4x^2-3x+7-6x^2+8x-2$.`, "-2*x^2+5*x+5", String.raw`$x^2$ : $-2$; $x$ : $5$; constantes : $5$.`),
  mx(String.raw`Simplifie $(2a^2-5a+3)+(a^2+4a-8)$.`, "3*a^2-a-5", String.raw`$3a^2-a-5$.`),
  mx(String.raw`Simplifie $(6y^2+y-4)-(2y^2-3y+5)$.`, "4*y^2+4*y-9", String.raw`$6y^2+y-4-2y^2+3y-5$.`),
  mx(String.raw`Simplifie $3xy-2x^2+5xy+4x^2$.`, "2*x^2+8*x*y", String.raw`$x^2$ : $2$; $xy$ : $8$.`),
  num(String.raw`Quel est le degré de $2a^3b^2-7ab^4+a^5b$?`, 6, String.raw`Degrés des termes : $5$, $5$, $6$.`),
  mc(String.raw`On additionne les deux rangées de tuiles. Quelle est la somme simplifiée?`, "$x^2+2x-3$", ["$5x^2+4x+5$", "$x^2-2x+3$", "$-x^2+2x-3$"], String.raw`$x^2$ : $-2+3=1$; $x$ : $3-1=2$; unités : $1-4=-3$.`, algTiles([{ x2: -2, x: 3, c: 1 }, { x2: 3, x: -1, c: -4 }])),
  mx(String.raw`Simplifie $\frac13m+\frac12m$.`, "(5/6)*m", String.raw`$\frac26m+\frac36m=\frac56m$.`),
  mx(String.raw`Simplifie $0.7k-1.2-2.5k+3.4$.`, "-1.8*k+2.2", String.raw`$-1.8k+2.2$.`),
  ms(String.raw`Lesquelles sont équivalentes à $5-(2x-3)$? Choisis toutes les bonnes réponses.`, ["$8-2x$", "$-2x+8$", "$2-2x$", "$8+2x$", "$2(4-x)$"], [0, 1, 4], String.raw`$5-2x+3=8-2x$.`),
  tf(String.raw`$(x^2+3x)-(x^2-3x)=0$`, false, String.raw`$x^2+3x-x^2+3x=6x$.`),
  num(String.raw`Un triangle a des côtés de $2x+3$, $3x-1$ et $x+4$. Trouve son périmètre lorsque $x=5$.`, 36, String.raw`$6x+6$; $30+6=36$.`),
  mc(String.raw`Quel choix montre que $x^2+1$ et $2x$ ne sont pas équivalentes?`, "x = 3 (10 contre 6)", ["x = 1 (2 contre 2)", "elles sont équivalentes", "aucune valeur ne peut le montrer"], "Une valeur qui donne des résultats différents est un contre-exemple."),
  mx(String.raw`Que faut-il additionner à $2x-5$ pour obtenir $7x+1$?`, "5*x+6", String.raw`$(7x+1)-(2x-5)=5x+6$.`),
  num(String.raw`Combien de termes la forme simplifiée de $(4x^2-2x)+(-3x^2+2x)$ a-t-elle?`, 1, String.raw`$x^2$ — un seul terme.`),
  mx(String.raw`Simplifie $(3m-2n)-(-m+4n)$.`, "4*m-6*n", String.raw`$3m-2n+m-4n$.`),
  mc(String.raw`Simplifie $(x^2+2x)+(x^2-2x+1)$ et classe le résultat.`, "$2x^2+1$, un binôme de degré 2", ["$2x^2+4x+1$, un trinôme", "$2x^2+1$, un trinôme", "$x^2+1$, un binôme de degré 2"], String.raw`Les termes en $x$ s'annulent.`),
  num(String.raw`Simplifie $(2x^2-3x)-(x^2+x)$, puis évalue pour $x=-2$.`, 12, String.raw`$x^2-4x$; $4+8=12$.`),
  ms(String.raw`Lesquels sont des termes semblables à $-2a^2b$? Choisis toutes les bonnes réponses.`, ["$5a^2b$", "$ba^2$", "$-2ab^2$", "$a^2b^2$", "$7a^2b$"], [0, 1, 4], String.raw`La partie variable doit être $a^2b$.`),
  mx(String.raw`Écris une expression simplifiée pour le périmètre du rectangle.`, "8*x+4", String.raw`$2(3x+2)+2x=8x+4$.`, rectFig("3x + 2", "x")),
  tf(String.raw`La somme de deux trinômes est toujours un trinôme.`, false, String.raw`$(x^2+x+1)+(-x^2-x+1)=2$, un monôme.`),
];
