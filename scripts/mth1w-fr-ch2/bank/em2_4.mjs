// 2.4 Créer et résoudre des équations — 20 questions faciles + 20 moyennes (miroir de ../../mth1w-ch2/bank/em2_4.mjs)
import { mc, ms, num, tf } from "../../mth1w-ch2/bank/kit.mjs";
import { balanceFig, flowFig, lineFig } from "../../mth1w-ch2/bank/svg2.mjs";

export const E = [
  num(String.raw`Résous $x+9=4$.`, -5, String.raw`Soustrais $9$ : $x=-5$.`),
  num(String.raw`Résous $y-6=-2$.`, 4, String.raw`Ajoute $6$ : $y=4$.`),
  num(String.raw`Résous $7n=-42$.`, -6, String.raw`Divise par $7$.`),
  num(String.raw`Résous $\frac m3=5$.`, 15, String.raw`Multiplie par $3$.`),
  num(String.raw`Résous $2x+3=11$.`, 4, String.raw`$2x=8$, $x=4$.`),
  num(String.raw`Résous $5k-4=21$.`, 5, String.raw`$5k=25$.`),
  tf(String.raw`$x=3$ est une solution de $4x-5=7$.`, true, String.raw`$12-5=7$ ✓`),
  mc(String.raw`Quelle est la meilleure première étape pour résoudre $3x+8=20$?`, "soustraire 8 des deux côtés", ["diviser les deux côtés par 3", "ajouter 8 des deux côtés", "multiplier les deux côtés par 3"], "Annule d'abord la dernière opération (+8)."),
  num(String.raw`Résous $-4p=28$.`, -7, String.raw`Divise par $-4$.`),
  num(String.raw`Résous $10-x=3$.`, 7, String.raw`$-x=-7$, $x=7$.`),
  num(String.raw`Résous $\frac x2+1=6$.`, 10, String.raw`$\frac x2=5$.`),
  mc(String.raw`Quelle équation signifie « un nombre augmenté de $9$ donne $15$ »?`, "$n+9=15$", ["$9n=15$", "$n-9=15$", "$n=9+15$"], "« Augmenté de » veut dire additionner."),
  num(String.raw`La balance est en équilibre. Quelle est la valeur de $x$?`, 4, String.raw`$3x+2=14$ : $3x=12$, $x=4$.`, balanceFig("3x + 2", "14")),
  num(String.raw`Résous $0.5t=4$.`, 8, String.raw`$t=4\div0.5=8$.`),
  num(String.raw`Résous $6=2y-8$.`, 7, String.raw`$14=2y$.`),
  tf(String.raw`Pour résoudre $2x=10$, on soustrait $2$ des deux côtés.`, false, String.raw`$x$ est multiplié par $2$, donc on divise par $2$.`),
  num(String.raw`Un coût est $C=10+4h$. Trouve $h$ lorsque $C=30$.`, 5, String.raw`$4h=20$.`),
  num(String.raw`Résous $-x=9$.`, -9, String.raw`Multiplie les deux côtés par $-1$.`),
  num(String.raw`Le triple d'un nombre, moins $4$, donne $17$. Trouve le nombre.`, 7, String.raw`$3n-4=17$, $3n=21$.`),
  num(String.raw`Résous $x+2.5=7.1$.`, 4.6, String.raw`$x=4.6$.`, null, 0.001),
];

export const M = [
  num(String.raw`Résous $9-4x=-11$.`, 5, String.raw`$-4x=-20$.`),
  num(String.raw`Résous $\frac34w=18$.`, 24, String.raw`Multiplie par $\frac43$.`),
  num(String.raw`Résous $\dfrac{x-7}{3}=4$.`, 19, String.raw`$x-7=12$.`),
  num(String.raw`Résous $-2.5y+4=-6$.`, 4, String.raw`$-2.5y=-10$.`),
  num(String.raw`Résous $\frac23m-5=7$.`, 18, String.raw`$\frac23m=12$, $m=18$.`),
  num(String.raw`Résous $\dfrac{x}{-4}+3=9$.`, -24, String.raw`$\frac{x}{-4}=6$, $x=-24$.`),
  num(String.raw`Remonte l'organigramme à rebours pour trouver $n$.`, 7, String.raw`$33+2=35$; $35\div5=7$.`, flowFig("n", ["× 5", "− 2"], "33")),
  num(String.raw`Un taxi demande $3.50+1.25d$ dollars pour $d$ km. Une course a coûté $23.50$ dollars. Quelle distance a été parcourue?`, 16, String.raw`$1.25d=20$, $d=16$ km.`),
  num(String.raw`Le graphique représente $C=20+15h$. Pour combien d'heures le coût est-il de $80$ dollars?`, 4, String.raw`$15h=60$, $h=4$.`, lineFig({ m: 15, b: 20, c: 80, xMax: 8, yMax: 140, xStep: 1, yStep: 20, xLabel: "heures h", yLabel: "coût C (dollars)", mark: false })),
  ms(String.raw`Quelles équations ont la solution $x=-3$? Choisis toutes les bonnes réponses.`, ["$2x+9=3$", "$-x+4=1$", "$\\frac x3=-1$", "$5-x=8$", "$4x=12$"], [0, 2, 3], String.raw`$-x+4=1$ et $4x=12$ ont la solution $3$.`),
  num(String.raw`Je pense à un nombre, je le double et je soustrais $9$. Le résultat est $-15$. Quel est mon nombre?`, -3, String.raw`$2n-9=-15$, $2n=-6$.`),
  tf(String.raw`La solution de $5-3x=20$ est $x=5$.`, false, String.raw`$-3x=15$, $x=-5$.`),
  num(String.raw`Résous $1.2p-0.6=3$.`, 3, String.raw`$1.2p=3.6$.`),
  num(String.raw`Un forfait de téléphone coûte $15+0.2m$ dollars pour $m$ minutes. Une facture était de $27$ dollars. Combien de minutes ont été utilisées?`, 60, String.raw`$0.2m=12$.`),
  num(String.raw`Un triangle isocèle a deux côtés de longueur $x$ et une base de $10$ cm. Son périmètre est de $36$ cm. Trouve $x$.`, 13, String.raw`$2x+10=36$.`),
  mc(String.raw`Quelle équation représente « $12$ de moins que $3$ fois un nombre donne $30$ »?`, "$3n-12=30$", ["$12-3n=30$", "$3(n-12)=30$", "$3n+12=30$"], String.raw`Commence par $3n$, puis soustrais $12$.`),
  num(String.raw`Un réservoir contient $900$ L et se vide à raison de $60$ L/min : $V=900-60t$. Quand contiendra-t-il $300$ L?`, 10, String.raw`$60t=600$.`),
  num(String.raw`Résous $\frac x5-2=-2$.`, 0, String.raw`$\frac x5=0$, donc $x=0$.`),
  num(String.raw`Résous $4=\dfrac{n+10}{3}$.`, 2, String.raw`$12=n+10$.`),
  num(String.raw`La température est de $12\,^\circ$C et baisse de $3$ degrés par heure. Après combien d'heures sera-t-elle de $-9\,^\circ$C?`, 7, String.raw`$12-3h=-9$, $h=7$.`),
];
