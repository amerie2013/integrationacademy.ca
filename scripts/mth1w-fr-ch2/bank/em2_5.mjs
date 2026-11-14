// 2.5 Résoudre des équations à plusieurs étapes — 20 questions faciles + 20 moyennes (miroir de ../../mth1w-ch2/bank/em2_5.mjs)
import { mc, ms, num, tf } from "../../mth1w-ch2/bank/kit.mjs";
import { balanceFig } from "../../mth1w-ch2/bank/svg2.mjs";

export const E = [
  num(String.raw`Résous $2(x+3)=14$.`, 4, String.raw`$2x+6=14$, $x=4$.`),
  num(String.raw`Résous $5y-2=3y+8$.`, 5, String.raw`$2y=10$.`),
  num(String.raw`Résous $4(n-1)=20$.`, 6, String.raw`$4n-4=20$.`),
  num(String.raw`Résous $\frac x2+\frac x2=7$.`, 7, String.raw`$\frac x2+\frac x2=x$.`),
  num(String.raw`Résous $3a+4=a+10$.`, 3, String.raw`$2a=6$.`),
  num(String.raw`Résous $6-(x-2)=3$.`, 5, String.raw`$8-x=3$.`),
  tf(String.raw`$x=2$ est une solution de $3x+1=x+5$.`, true, String.raw`$7=7$ ✓`),
  mc(String.raw`Quelle est une bonne première étape pour résoudre $7x-3=4x+9$?`, "soustraire 4x des deux côtés", ["diviser les deux côtés par 7", "ajouter 7x des deux côtés", "multiplier les deux côtés par 4"], "Regroupe les termes en x d'un même côté."),
  num(String.raw`Résous $-2(k+1)=8$.`, -5, String.raw`$-2k-2=8$, $-2k=10$.`),
  num(String.raw`Résous $2x+5=x-1$.`, -6, String.raw`$x=-6$.`),
  mc(String.raw`Quel est le PPCD qui permet d'éliminer les fractions dans $\frac x6+\frac x4=5$?`, "12", ["24", "10", "2"], "Le plus petit commun multiple de 6 et de 4."),
  num(String.raw`Résous $3(2m-1)=15$.`, 3, String.raw`$6m-3=15$.`),
  mc(String.raw`Quelle équation n'a aucune solution?`, "$x+3=x+5$", ["$2x=x$", "$x+3=3$", "$2x+1=7$"], String.raw`En soustrayant $x$, il reste $3=5$, ce qui est faux.`),
  num(String.raw`Deux angles sur une droite mesurent $x^\circ$ et $2x^\circ$. Trouve $x$.`, 60, String.raw`$3x=180$.`),
  num(String.raw`Résous $9-y=2y$.`, 3, String.raw`$9=3y$.`),
  tf(String.raw`$2(x+4)=2x+8$ est vraie pour toute valeur de $x$.`, true, "Les deux membres sont identiques après le développement : c'est une identité."),
  num(String.raw`La somme de deux nombres entiers consécutifs est $51$. Quel est le plus petit?`, 25, String.raw`$2n+1=51$.`),
  num(String.raw`Résous $5(x-2)-3x=4$.`, 7, String.raw`$2x-10=4$.`),
  num(String.raw`Résous $\frac x2+3=8$.`, 10, String.raw`$\frac x2=5$.`),
  num(String.raw`La longueur d'un rectangle est de $4$ cm de plus que sa largeur. Son périmètre est de $28$ cm. Trouve la largeur.`, 5, String.raw`$2(w+w+4)=28$, $4w+8=28$.`),
];

export const M = [
  num(String.raw`Résous $3(2x-5)=2(x+4)+1$.`, 6, String.raw`$6x-15=2x+9$, $4x=24$.`),
  num(String.raw`Résous $8-3(y+2)=2y-13$.`, 3, String.raw`$2-3y=2y-13$, $15=5y$.`),
  num(String.raw`Résous $\frac x3+\frac x6=9$.`, 18, String.raw`$\times6$ : $2x+x=54$.`),
  num(String.raw`Résous $\dfrac{a+3}{2}=\dfrac{a-1}{3}$.`, -11, String.raw`$3(a+3)=2(a-1)$, $3a+9=2a-2$.`),
  num(String.raw`Résous $0.4(x-5)=0.3x+1$.`, 30, String.raw`$0.4x-2=0.3x+1$, $0.1x=3$.`),
  mc(String.raw`Développe d'abord. Laquelle de ces équations n'a aucune solution?`, "$3(x-1)=3x+1$", ["$3(x-1)=3x-3$", "$3x-1=x+1$", "$3(x+1)=0$"], String.raw`$3x-3=3x+1$ donne $-3=1$.`),
  num(String.raw`Trois nombres entiers impairs consécutifs ont une somme de $105$. Quel est le plus petit?`, 33, String.raw`$3n+6=105$, $n=33$.`),
  num(String.raw`Ravi a $5$ ans de plus que Tia. La somme de leurs âges est $41$. Quel âge Tia a-t-elle?`, 18, String.raw`$t+t+5=41$.`),
  num(String.raw`Les angles d'un triangle mesurent $x^\circ$, $2x^\circ$ et $3x^\circ$. Trouve le plus petit angle.`, 30, String.raw`$6x=180$.`),
  num(String.raw`Un porte-monnaie contient $20$ pièces, toutes des pièces de 5 cents et de 10 cents, d'une valeur de $1.55$ dollar. Combien y a-t-il de pièces de 5 cents?`, 9, String.raw`$5n+10(20-n)=155$, $200-5n=155$.`),
  num(String.raw`Résous $\frac{2x}{5}-1=\frac x2-3$.`, 20, String.raw`$\times10$ : $4x-10=5x-30$.`),
  ms(String.raw`Quelles équations ont la solution $x=4$? Choisis toutes les bonnes réponses.`, ["$2(x-1)=6$", "$3x-5=x+3$", "$\\frac x2+1=3$", "$5-x=x+1$", "$4(x+1)=20$"], [0, 1, 2, 4], String.raw`$5-x=x+1$ donne $x=2$.`),
  tf(String.raw`$4(x+2)-2x=2(x+4)$ est vraie pour toute valeur de $x$.`, true, String.raw`Les deux membres se simplifient en $2x+8$.`),
  num(String.raw`Deux trains à $420$ km l'un de l'autre roulent l'un vers l'autre à $80$ km/h et à $60$ km/h. Après combien d'heures se rencontrent-ils?`, 3, String.raw`$140t=420$.`),
  num(String.raw`La longueur d'un rectangle est de $3$ cm de plus que le double de sa largeur. Le périmètre est de $54$ cm. Trouve la largeur.`, 8, String.raw`$2(w+2w+3)=54$, $6w+6=54$.`),
  num(String.raw`Les angles $(2x+30)^\circ$ et $(x+15)^\circ$ sont supplémentaires. Trouve $x$.`, 45, String.raw`$3x+45=180$.`),
  num(String.raw`Résous $5-2(3-x)=4(x-1)-1$.`, 2, String.raw`$-1+2x=4x-5$, $4=2x$.`),
  num(String.raw`Résous $\dfrac{x-4}{2}+1=\dfrac{x+2}{4}$.`, 6, String.raw`$\times4$ : $2x-8+4=x+2$.`),
  num(String.raw`La balance est en équilibre. Trouve $x$.`, 4, String.raw`$4x+1=x+13$ : $3x=12$.`, balanceFig("4x + 1", "x + 13")),
  mc(String.raw`Kai a résolu $3(x-2)=x+4$ et a écrit $3x-2=x+4$ comme première étape. Quelle était son erreur?`, "Il n'a pas multiplié le −2 par 3.", ["Il aurait dû diviser par 3 d'abord.", "Il aurait dû soustraire x d'abord.", "Il n'y a pas d'erreur."], String.raw`$3(x-2)=3x-6$. Ensuite $2x=10$, $x=5$.`),
];
