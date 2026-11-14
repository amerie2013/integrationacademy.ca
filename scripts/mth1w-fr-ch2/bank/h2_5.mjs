// 2.5 Résoudre des équations à plusieurs étapes — 20 questions difficiles (miroir de ../../mth1w-ch2/bank/h2_5.mjs)
import { mc, ms, num, tf } from "../../mth1w-ch2/bank/kit.mjs";
import { angleFig, rectFig } from "../../mth1w-ch2/bank/svg2.mjs";

export const TOPIC = "2.5 Résoudre des équations à plusieurs étapes";
export const Q = [
  num(String.raw`Résous $\dfrac{2x-1}{3}-\dfrac{x-2}{4}=2$. Donne un nombre décimal.`, 4.4, String.raw`$\times12$ : $4(2x-1)-3(x-2)=24$; $8x-4-3x+6=24$; $5x=22$.`, null, 0.001),
  num(String.raw`Le tiers d'un nombre, diminué de $2$, est égal au quart du nombre, augmenté de $1$. Trouve le nombre.`, 36, String.raw`$\frac x3-2=\frac x4+1$; $\times12$ : $4x-24=3x+12$.`),
  num(String.raw`Éli peut peindre une pièce en $5$ h et Mia en $4$ h. Combien d'heures prennent-ils en travaillant ensemble? Donne deux décimales.`, 20 / 9, String.raw`$\frac t5+\frac t4=1$; $4t+5t=20$; $t=\frac{20}{9}\approx2.22$.`, null, 0.006),
  num(String.raw`Deux autos quittent en même temps deux villes à $360$ km l'une de l'autre et roulent l'une vers l'autre. L'une roule $20$ km/h plus vite. Elles se rencontrent après $2$ h. Quelle est la vitesse de l'auto la plus lente, en km/h?`, 80, String.raw`$2s+2(s+20)=360$; $4s+40=360$.`),
  num(String.raw`Les billets de concert coûtent $35$ dollars pour les adultes et $20$ dollars pour les élèves. On a vendu $140$ billets pour $3850$ dollars. Combien de billets pour adultes a-t-on vendus?`, 70, String.raw`$35a+20(140-a)=3850$; $15a=1050$.`),
  num(String.raw`Un père a $3$ fois l'âge de son fils. Il y a douze ans, il avait $7$ fois son âge. Quel âge le fils a-t-il maintenant?`, 18, String.raw`$3s-12=7(s-12)$; $3s-12=7s-84$; $s=18$.`),
  num(String.raw`Les trois angles sont sur une droite. Quel est le plus grand angle, en degrés?`, 70, String.raw`$6x+30=180$, $x=25$ : angles de $70^\circ$, $60^\circ$, $50^\circ$.`, angleFig(["(3x − 5)°", "(2x + 10)°", "(x + 25)°"])),
  num(String.raw`Un carré a des côtés de $(2x-1)$ cm et un triangle équilatéral a des côtés de $(x+5)$ cm. Ils ont le même périmètre. Trouve $x$.`, 3.8, String.raw`$4(2x-1)=3(x+5)$; $8x-4=3x+15$; $5x=19$.`, null, 0.001),
  tf(String.raw`$3(2x-4)=6(x-2)$ n'a aucune solution.`, false, String.raw`Les deux membres valent $6x-12$ : tout nombre est une solution.`),
  num(String.raw`Pour quelle valeur de $k$ l'équation $2(x+k)=2x+10$ est-elle vraie pour tout $x$?`, 5, String.raw`$2x+2k=2x+10$ exige $2k=10$.`),
  mc(String.raw`Pour quelle valeur de $a$ l'équation $ax+3=2x+7$ n'a-t-elle aucune solution?`, "$a=2$", ["$a=4$", "$a=-2$", "$a=0$"], String.raw`Si $a=2$, les termes en $x$ s'annulent et il reste $3=7$.`),
  num(String.raw`Résous $0.25(8x-4)=0.5(3x+6)$.`, 8, String.raw`$2x-1=1.5x+3$; $0.5x=4$.`),
  num(String.raw`La moyenne de Sara à quatre tests est de $78$. Quelle note doit-elle obtenir au cinquième test pour faire monter sa moyenne à $81$?`, 93, String.raw`$\frac{4(78)+s}{5}=81$; $312+s=405$.`),
  num(String.raw`Pour trois nombres entiers pairs consécutifs, le plus petit plus le double du plus grand donne $68$. Quel est le plus grand?`, 24, String.raw`$n+2(n+4)=68$; $3n=60$; $n=20$, le plus grand est $24$.`),
  ms(String.raw`Quelles équations ont exactement une solution? Choisis toutes les bonnes réponses.`, ["$2(x+1)=2x+2$", "$3x=0$", "$x+4=x-4$", "$5x-1=4x+1$", "$2(3-x)=-2x+6$"], [1, 3], String.raw`La première et la dernière sont des identités; $x+4=x-4$ n'en a aucune; $3x=0$ donne $0$; $5x-1=4x+1$ donne $2$.`),
  mc(String.raw`Un rectangle mesure $(3x-2)$ sur $(x+4)$. Un carré a un côté de $(2x-1)$. Pour quelle valeur de $x$ leurs périmètres sont-ils égaux?`, "aucune valeur de x", ["x = 1", "x = 2", "toutes les valeurs de x"], String.raw`$2(4x+2)=4(2x-1)$ donne $8x+4=8x-4$ : faux pour tout $x$.`, rectFig("3x − 2", "x + 4")),
  num(String.raw`Ana part à midi en marchant à $5$ km/h. Ben part du même endroit à 12 h 40 à vélo, à $15$ km/h, sur le même sentier. Combien de minutes après son départ Ben rattrape-t-il Ana?`, 20, String.raw`$5\left(t+\frac23\right)=15t$; $10t=\frac{10}{3}$; $t=\frac13$ h.`),
  num(String.raw`Résous $\dfrac{x+1}{2}+\dfrac{x+2}{3}+\dfrac{x+3}{4}=16$.`, 13, String.raw`$\times12$ : $6x+6+4x+8+3x+9=192$; $13x=169$.`),
  num(String.raw`La pompe A remplit un réservoir en $3$ h et la pompe B en $6$ h. Un drain vide un réservoir plein en $4$ h. Si les trois sont ouverts, combien d'heures faut-il pour remplir le réservoir?`, 4, String.raw`$\frac t3+\frac t6-\frac t4=1$; $\times12$ : $4t+2t-3t=12$.`),
  num(String.raw`Résous $5(2x-3)-2(4x-1)=3(x+2)-13$.`, -6, String.raw`$2x-13=3x-7$; $x=-6$.`),
];
