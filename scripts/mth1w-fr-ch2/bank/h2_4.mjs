// 2.4 Créer et résoudre des équations — 20 questions difficiles (miroir de ../../mth1w-ch2/bank/h2_4.mjs)
import { mc, ms, num, tf } from "../../mth1w-ch2/bank/kit.mjs";
import { flowFig, lineFig } from "../../mth1w-ch2/bank/svg2.mjs";

export const TOPIC = "2.4 Créer et résoudre des équations";
export const Q = [
  num(String.raw`Un drone à $840$ m descend à un rythme constant, comme le montre le graphique. Après combien de secondes est-il à $315$ m?`, 15, String.raw`Il perd $35$ m par seconde : $840-35t=315$, $35t=525$, $t=15$.`, lineFig({ m: -35, b: 840, c: 315, xMax: 26, yMax: 900, xStep: 2, yStep: 100, xLabel: "temps t (s)", yLabel: "hauteur (m)", mark: false })),
  num(String.raw`Résous $-\frac35k+7=16$.`, -15, String.raw`$-\frac35k=9$, donc $k=9\times\left(-\frac53\right)=-15$.`),
  num(String.raw`Résous $\dfrac{4-3x}{2}=11$.`, -6, String.raw`$4-3x=22$, $-3x=18$, $x=-6$.`),
  num(String.raw`Un nombre passe dans l'organigramme et le résultat est $-11$. Quel était le nombre de départ?`, 8, String.raw`À rebours : $-11\times(-2)=22$; $22-10=12$; $12\div3=4$; $4+4=8$.`, flowFig("n", ["− 4", "× 3", "+ 10", "÷ (−2)"], "−11")),
  num(String.raw`Utilise $F=1.8C+32$ pour trouver la température en degrés Celsius égale à $-4\,^\circ$F.`, -20, String.raw`$1.8C=-36$, $C=-20$.`),
  num(String.raw`Quelle est l'abscisse à l'origine de $y=3x-12$? (Pose $y=0$.)`, 4, String.raw`$0=3x-12$, $x=4$.`),
  num(String.raw`Le stationnement coûte $2.50$ dollars pour la première heure et $1.75$ dollar pour chaque heure supplémentaire. Mo a payé $13$ dollars. Combien d'heures est-il resté?`, 7, String.raw`$2.50+1.75(h-1)=13$; $1.75(h-1)=10.50$; $h-1=6$; $h=7$.`),
  ms(String.raw`Quelles équations sont équivalentes à $2x-6=10$ (même solution)? Choisis toutes les bonnes réponses.`, ["$2x=16$", "$x-3=5$", "$x=8$", "$2x=4$", "$x-6=5$"], [0, 1, 2], String.raw`Les trois ont la solution $8$; $2x=4$ donne $2$ et $x-6=5$ donne $11$.`),
  num(String.raw`Un plongeur à $-42$ m remonte à $0.75$ m/s jusqu'à un palier de sécurité à $-6$ m. Combien de secondes cela prend-il?`, 48, String.raw`$-42+0.75t=-6$, $0.75t=36$, $t=48$.`),
  num(String.raw`Les billets de musée coûtent $18$ dollars par adulte et $12$ dollars par enfant. Quatre adultes et des enfants ont payé $168$ dollars. Combien y avait-il d'enfants?`, 8, String.raw`$72+12c=168$, $c=8$.`),
  mc(String.raw`Pour quelle valeur de $x$ l'expression $3(x-2)+4$ vaut-elle $19$?`, "$7$", ["$5$", "$\\frac{23}{3}$", "$9$"], String.raw`$3x-2=19$, $3x=21$.`),
  num(String.raw`Résous $0.35n+12=40$.`, 80, String.raw`$0.35n=28$, $n=80$.`),
  num(String.raw`Quelle est l'abscisse à l'origine de $2x+5y=30$?`, 15, String.raw`$y=0$ : $2x=30$.`),
  num(String.raw`La moyenne de $84$, $77$, $91$ et $x$ est $85$. Trouve $x$.`, 88, String.raw`$\frac{252+x}{4}=85$, $252+x=340$.`),
  tf(String.raw`$\frac x4+3=5$ et $x+12=20$ sont des équations équivalentes.`, true, String.raw`Les deux ont la solution $x=8$ (la deuxième est la première multipliée par $4$).`),
  num(String.raw`La valeur d'une auto est $V=24\,000-2400t$ dollars après $t$ années. Après combien d'années vaut-elle $9600$ dollars?`, 6, String.raw`$2400t=14\,400$, $t=6$.`),
  num(String.raw`Résous $\frac56x-\frac13=3$.`, 4, String.raw`$\frac56x=\frac{10}3$, $x=\frac{10}{3}\times\frac65=4$.`),
  mc(String.raw`Pour $y=-2x+7$, quelle valeur de $x$ donne $y=-13$?`, "$10$", ["$-10$", "$3$", "$-3$"], String.raw`$-2x+7=-13$, $-2x=-20$.`),
  num(String.raw`Deux angles forment ensemble un angle droit. L'un mesure $x^\circ$ et l'autre $(3x-14)^\circ$. Trouve $x$.`, 26, String.raw`$4x-14=90$, $x=26$.`),
  num(String.raw`Lis la solution de $2.5x+10=45$ sur le graphique, puis confirme-la par l'algèbre.`, 14, String.raw`$2.5x=35$, $x=14$.`, lineFig({ m: 2.5, b: 10, c: 45, xMax: 18, yMax: 60, xStep: 2, yStep: 10, xLabel: "x", yLabel: "y", mark: false })),
];
