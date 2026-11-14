// 2.1 Des mots aux expressions algébriques — 20 questions faciles + 20 moyennes (miroir de ../../mth1w-ch2/bank/em2_1.mjs)
import { mc, ms, num, fill, tf, mx } from "../../mth1w-ch2/bank/kit.mjs";
import { patternFig } from "../../mth1w-ch2/bank/svg2.mjs";

export const E = [
  num(String.raw`Évalue $4n-9$ lorsque $n=6$.`, 15, String.raw`$4(6)-9=24-9=15$.`),
  mc(String.raw`Quelle expression signifie « la somme d'un nombre et de $7$ »?`, "$n+7$", ["$7n$", "$n-7$", "$7-n$"], "« Somme » veut dire additionner."),
  mc(String.raw`Quelle expression signifie « $5$ de moins qu'un nombre »?`, "$n-5$", ["$5-n$", "$5n$", "$n+5$"], String.raw`On part de $n$ et on descend de $5$ : $n-5$.`),
  mc(String.raw`Quel est le coefficient de $x$ dans $3x^2-8x+1$?`, "$-8$", ["$8$", "$3$", "$1$"], "Le coefficient garde le signe placé devant le terme."),
  num(String.raw`Quel est le terme constant de $6y-11$?`, -11, String.raw`Le terme sans variable est $-11$.`),
  tf(String.raw`Dans $5a-2$, le coefficient de $a$ est $5$.`, true, String.raw`$5a$ signifie $5\times a$.`),
  num(String.raw`Combien de termes $2x^2-x+4-3y$ a-t-il?`, 4, String.raw`$2x^2$, $-x$, $4$, $-3y$.`),
  mx(String.raw`Écris une expression pour « le triple d'un nombre $m$ ».`, "3*m", String.raw`Le triple veut dire multiplier par $3$ : $3m$.`),
  num(String.raw`Évalue $2x+3y$ lorsque $x=4$ et $y=-1$.`, 5, String.raw`$8+3(-1)=5$.`),
  mc(String.raw`Laquelle est une expression (et non une équation)?`, "$3x-4$", ["$3x-4=8$", "$x=2$", "$y=3x$"], "Une expression n'a pas de signe d'égalité."),
  num(String.raw`Utilise $P=2l+2w$ pour trouver le périmètre lorsque $l=9$ et $w=4$.`, 26, String.raw`$18+8=26$.`),
  fill(String.raw`Dans $7-3k$, le coefficient de $k$ est ___.`, ["-3", "−3"], String.raw`Le terme est $-3k$.`),
  num(String.raw`Quel est le nombre suivant de la suite $6, 11, 16, 21,\dots$?`, 26, "La suite augmente de 5."),
  mc(String.raw`Quelle règle donne la suite $4, 8, 12, 16,\dots$ pour le terme $n$?`, "$4n$", ["$n+4$", "$4n+4$", "$2n+2$"], String.raw`Chaque terme est $4$ fois son rang : $4(1)=4$, $4(2)=8$.`),
  num(String.raw`Évalue $k^2$ lorsque $k=-5$.`, 25, String.raw`$(-5)^2=25$.`),
  tf(String.raw`« Le double d'un nombre, plus $3$ » s'écrit $2(n+3)$.`, false, String.raw`Cela s'écrit $2n+3$. $2(n+3)$ signifie le double de la somme de $n$ et de $3$.`),
  mx(String.raw`Écris une expression pour « un nombre $n$ divisé par $4$ ».`, "n/4", String.raw`$\frac n4$.`),
  num(String.raw`La figure $n$ de cette suite a $2n+1$ tuiles. Combien de tuiles la figure $3$ a-t-elle?`, 7, String.raw`$2(3)+1=7$.`, patternFig(2, 1)),
  mc(String.raw`Le mot « algèbre » vient du titre d'un ouvrage de quel mathématicien?`, "al-Khwārizmī", ["Euclide", "Descartes", "Pythagore"], "Le titre de son ouvrage contenait « al-jabr », qui veut dire « restaurer »."),
  num(String.raw`La location d'un vélo coûte $5+2h$ dollars pour $h$ heures. Trouve le coût pour $7$ heures.`, 19, String.raw`$5+14=19$.`),
];

export const M = [
  mx(String.raw`Écris une expression pour « $8$ de moins que $5$ fois un nombre $x$ ».`, "5*x-8", String.raw`$5x$, puis on soustrait $8$ : $5x-8$.`),
  mx(String.raw`Écris une expression pour « le produit de $4$ et de la somme d'un nombre $y$ et de $3$ ».`, "4*(y+3)", String.raw`On calcule d'abord la somme $y+3$ : $4(y+3)$.`),
  num(String.raw`Évalue $3a^2-2a+1$ lorsque $a=-3$.`, 34, String.raw`$3(9)+6+1=34$.`),
  num(String.raw`Évalue $\dfrac{p-q}{p+q}$ lorsque $p=7$ et $q=-3$.`, 2.5, String.raw`$\frac{10}{4}=2.5$.`),
  mx(String.raw`Le plus petit de trois nombres entiers consécutifs est $n$. Écris une expression simplifiée pour leur somme.`, "3*n+3", String.raw`$n+(n+1)+(n+2)=3n+3$.`),
  mc(String.raw`Quelle phrase décrit $2(x-5)$?`, "le double de la différence entre un nombre et 5", ["5 de moins que le double d'un nombre", "le double d'un nombre, moins 5", "un nombre moins le double de 5"], String.raw`On calcule d'abord la parenthèse, puis on double. « $5$ de moins que le double d'un nombre » s'écrit $2x-5$.`),
  num(String.raw`Une suite est $3, 10, 17, 24,\dots$. Quel est le terme $15$?`, 101, String.raw`Règle $7n-4$; $7(15)-4=101$.`),
  mx(String.raw`Écris une règle pour le terme $n$ de $9, 14, 19, 24,\dots$`, "5*n+4", String.raw`Différence $5$; la valeur pour $n=0$ est $4$ : $5n+4$.`),
  num(String.raw`La figure $n$ de cette suite a $3n+2$ tuiles. Combien de tuiles la figure $10$ a-t-elle?`, 32, String.raw`$3(10)+2=32$.`, patternFig(3, 2)),
  ms(String.raw`Quelles expressions valent $12$ lorsque $x=-2$? Choisis toutes les bonnes réponses.`, ["$x^2+8$", "$-6x$", "$3x+18$", "$x^3+4$", "$10-x$"], [0, 1, 2, 4], String.raw`Valeurs : $12$, $12$, $12$, $-4$, $12$.`),
  num(String.raw`Le prix d'une course de taxi est de $4.25+1.75d$ dollars pour $d$ km. Trouve le prix pour $8$ km.`, 18.25, String.raw`$4.25+14=18.25$.`, null, 0.001),
  tf(String.raw`Pour tout nombre entier $n$, $2n+1$ est un nombre impair.`, true, String.raw`$2n$ est pair, donc $2n+1$ est un de plus qu'un nombre pair.`),
  mc(String.raw`Diophante écrivait des abréviations pour l'inconnue et ses puissances. De quelle étape de l'algèbre s'agit-il?`, "syncopée", ["rhétorique", "symbolique", "géométrique"], "Rhétorique = tout en mots; syncopée = abréviations; symbolique = lettres et signes modernes."),
  num(String.raw`Évalue $x^2-y^2$ lorsque $x=-4$ et $y=-6$.`, -20, String.raw`$16-36=-20$.`),
  fill(String.raw`Dans $-ab+3a$, le coefficient de $ab$ est ___.`, ["-1", "−1"], String.raw`$-ab=-1ab$.`),
  mx(String.raw`Écris une expression pour le coût de $t$ billets à $12$ dollars chacun plus des frais de réservation de $5$ dollars.`, "12*t+5", String.raw`$12t+5$.`),
  num(String.raw`Utilise $I=Prt$ pour trouver l'intérêt lorsque $P=800$, $r=0.04$ et $t=3$.`, 96, String.raw`$800(0.04)(3)=96$.`),
  mc(String.raw`La figure $n$ d'une suite a $4n-1$ tuiles. Quelle figure a $63$ tuiles?`, "la figure 16", ["la figure 15", "la figure 17", "la figure 64"], String.raw`$4(16)-1=63$.`),
  num(String.raw`Utilise $A=\frac12bh$ pour trouver l'aire d'un triangle où $b=9$ et $h=7$.`, 31.5, String.raw`$\frac12(63)=31.5$.`, null, 0.001),
  ms(String.raw`Quelles phrases décrivent $3n+6$? Choisis toutes les bonnes réponses.`, ["6 de plus que le triple d'un nombre", "le triple d'un nombre, augmenté de 6", "le triple de la somme d'un nombre et de 6", "la somme de 3 fois un nombre et de 6", "6 fois un nombre, plus 3"], [0, 1, 3], String.raw`« Le triple de la somme d'un nombre et de $6$ » s'écrit $3(n+6)$; « $6$ fois un nombre, plus $3$ » s'écrit $6n+3$.`),
];
