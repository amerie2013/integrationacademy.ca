// MCR3U-FR chapitre 7 — questions à réponse construite (long_answer) pour les tests de chapitre imprimés (partie C),
// chacune avec une figure. Miroir de ../mcr3u-ch7/written-data.mjs (mêmes points, difficultés, figures et réponses).
import { dotsD, barsD, gridD, prow } from "./bank/fig.mjs";
import { TITLE as T1 } from "./l7_1.mjs";
import { TITLE as T2 } from "./l7_2.mjs";
import { TITLE as T3 } from "./l7_3.mjs";
import { TITLE as T4 } from "./l7_4.mjs";
import { TITLE as T5 } from "./l7_5.mjs";
import { TITLE as T6 } from "./l7_6.mjs";
import { TITLE as T7 } from "./l7_7.mjs";

const T = { 1: T1, 2: T2, 3: T3, 4: T4, 5: T5, 6: T6, 7: T7 };
const W = (t, difficulty, points, prompt, feedback, fig) => ({ topic: T[t], difficulty, points, prompt, feedback, kind: "long_answer", answer: null, choices: null, fig });
const S = String.raw;
const arr = (a, d, n) => Array.from({ length: n }, (_, i) => a + i * d);
const geo = (a, r, n) => Array.from({ length: n }, (_, i) => a * r ** i);
const two = (a, b, n) => { const v = [a, b]; while (v.length < n) v.push(v.at(-1) + v.at(-2)); return v; };

export const WRITTEN = [
  W(1, "medium", 4, S`Le graphique montre les premiers termes d'une suite. (a) Explique pourquoi elle est arithmétique et indique $a$ et $d$. (b) Écris le terme général et une formule de récurrence. (c) Quel est le rang du terme $-101$?`,
    S`(a) Les valeurs 7, 3, −1, −5, … diminuent de la même quantité chaque fois : $d=-4$, $a=7$. (b) $t_n=11-4n$; $t_1=7$, $t_n=t_{n-1}-4$. (c) $11-4n=-101\Rightarrow n=28$. [1, 2, 1.]`,
    dotsD(arr(7, -4, 6), { labels: true })),
  W(1, "hard", 5, S`Une suite arithmétique a $t_4=17$ et $t_{11}=52$. (a) Trouve $a$ et $d$. (b) 300 est-il un terme? Justifie. (c) Une deuxième suite arithmétique commence à 100 et diminue de 3. Trouve le premier rang pour lequel le terme de la première suite est plus grand que celui de la deuxième.`,
    S`(a) $7d=35$ : $d=5$, $a=2$; $t_n=5n-3$. (b) $5n-3=300\Rightarrow n=60.6$ : non. (c) $5n-3>103-3n\Rightarrow n>13.25$ : le 14e terme. [2, 1, 2.]`,
    dotsD(arr(2, 5, 12), { labels: false })),
  W(2, "medium", 4, S`Une tablette achetée 900 dollars perd 30 % de sa valeur chaque année. (a) Écris la valeur au début de l'année $n$ sous forme de suite géométrique. (b) Trouve sa valeur au début de l'année 5. (c) Pendant quelle année vaut-elle moins de 100 dollars pour la première fois?`,
    S`(a) $t_n=900(0.7)^{n-1}$. (b) $900(0.7)^4\approx216.09$ dollars. (c) $0.7^{n-1}<\frac19$ : $0.7^6\approx0.118$, $0.7^7\approx0.082$, donc l'année 8. [1, 1, 2.]`,
    dotsD(geo(900, 0.7, 8).map((v) => Math.round(v)), { labels: true, xlabel: "année", ylabel: "valeur" })),
  W(2, "hard", 5, S`Une suite géométrique a $t_3=-18$ et $t_6=486$. (a) Trouve $r$ et $a$. (b) Écris le terme général. (c) Quel est le rang du terme $-13122$? (d) Explique pourquoi les termes alternent de signe.`,
    S`(a) $r^3=-27$ : $r=-3$, $a=-2$. (b) $t_n=-2(-3)^{n-1}$. (c) $(-3)^{n-1}=6561=(-3)^8$ : $n=9$. (d) Multiplier par une raison négative change le signe à chaque étape. [2, 1, 1, 1.]`,
    dotsD(geo(-2, -3, 5), { labels: true })),
  W(3, "medium", 4, S`(a) Énumère les cinq premiers termes de $t_1=3$, $t_n=2t_{n-1}-1$. (b) Trouve les différences premières et secondes, et classe la suite. (c) Montre que $t_n=2^n+1$ donne les mêmes termes.`,
    S`(a) 3, 5, 9, 17, 33. (b) Différences premières 2, 4, 8, 16; différences secondes 2, 4, 8 — ni arithmétique ni géométrique. (c) $2^1+1=3$, $2^2+1=5$, $2^3+1=9$, … [1, 2, 1.]`,
    dotsD([3, 5, 9, 17, 33], { labels: true })),
  W(3, "hard", 5, S`On forme des carrés de plus en plus grands avec des cure-dents : un quadrillage de 1 × 1 utilise 4 cure-dents, un quadrillage de 2 × 2 en utilise 12, un quadrillage de 3 × 3 en utilise 24. (a) Trouve les deux termes suivants. (b) Utilise les différences secondes pour trouver une règle explicite. (c) Écris une règle de récurrence. (d) Combien de cure-dents faut-il pour un quadrillage de 20 × 20?`,
    S`(a) 40, 60. (b) Différences 8, 12, 16, 20; différences secondes 4 : $t_n=2n^2+2n$. (c) $t_1=4$, $t_n=t_{n-1}+4n$. (d) $2(400)+40=840$. [1, 2, 1, 1.]`,
    dotsD([4, 12, 24, 40, 60], { labels: true, xlabel: "taille du quadrillage", ylabel: "cure-dents" })),
  W(4, "medium", 4, S`(a) À partir de $t_1=2$, $t_2=1$, utilise $t_n=t_{n-1}+t_{n-2}$ pour énumérer dix termes. (b) Calcule $t_{10}\div t_9$ et compare le résultat avec $\frac{1+\sqrt5}2$. (c) Explique pourquoi deux termes de départ sont nécessaires.`,
    S`(a) 2, 1, 3, 4, 7, 11, 18, 29, 47, 76. (b) $\frac{76}{47}\approx1.617$, très proche de 1.618. (c) Chaque terme utilise les deux termes qui le précèdent; on ne peut donc pas calculer $t_1$ et $t_2$. [1, 2, 1.]`,
    dotsD(two(2, 1, 10), { labels: true })),
  W(4, "hard", 5, S`Une allée de 1 m de largeur et de $n$ m de longueur est recouverte de tuiles de 1 m × 1 m et de 1 m × 2 m. Soit $W_n$ le nombre de façons de le faire. (a) Trouve $W_1$, $W_2$, $W_3$ à l'aide de dessins. (b) Explique pourquoi $W_n=W_{n-1}+W_{n-2}$. (c) Trouve $W_{10}$.`,
    S`(a) 1, 2, 3. (b) La dernière tuile est un carré (il reste $n-1$ m) ou une tuile longue (il reste $n-2$ m). (c) 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 : $W_{10}=89$. [2, 2, 1.]`,
    dotsD(two(1, 2, 8), { labels: true, xlabel: "longueur", ylabel: "façons" })),
  W(5, "medium", 4, S`Un amphithéâtre compte 30 rangées; la première rangée a 24 sièges et chaque rangée en a 3 de plus que celle qui la précède. (a) Combien de sièges la dernière rangée compte-t-elle? (b) Combien de sièges y a-t-il en tout? (c) Combien de rangées faut-il pour asseoir au moins 900 personnes?`,
    S`(a) $24+29(3)=111$. (b) $15(24+111)=2025$. (c) $\frac n2[48+3(n-1)]\ge900\Rightarrow n^2+15n-600\ge0$ : $n\ge18.1$, donc 19 rangées. [1, 1, 2.]`,
    barsD(arr(24, 3, 10), { xlabel: "rangée", ylabel: "sièges" })),
  W(5, "hard", 5, S`(a) Montre, à l'aide des paires, que $1+2+\cdots+n=\frac{n(n+1)}2$. (b) Trouve la somme de tous les multiples de 7 qui ont trois chiffres. (c) La somme des $n$ premiers termes d'une série arithmétique est $S_n=2n^2+3n$. Trouve $t_1$, $d$ et $t_{25}$.`,
    S`(a) Écris la somme dans l'ordre et à rebours : $n$ paires valant chacune $n+1$. (b) De 105 à 994 : 128 termes, $64(105+994)=70336$. (c) $t_1=5$, $t_2=S_2-S_1=9$, $d=4$, $t_{25}=101$. [1, 2, 2.]`,
    barsD(arr(1, 1, 8))),
  W(6, "medium", 4, S`Les dons faits à un organisme de bienfaisance commencent à 500 dollars le mois 1 et augmentent de 20 % chaque mois. (a) Écris le don du mois $n$. (b) Trouve le total des dons des 12 premiers mois. (c) Explique pourquoi la formule $S_n=\frac{a(r^n-1)}{r-1}$ fonctionne en écrivant $S$ et $rS$.`,
    S`(a) $500(1.2)^{n-1}$. (b) $\frac{500(1.2^{12}-1)}{0.2}\approx19790.25$ dollars. (c) $rS-S=ar^n-a$, parce que tous les termes du milieu s'annulent. [1, 2, 1.]`,
    barsD(geo(500, 1.2, 8).map((v) => Math.round(v)), { xlabel: "mois", ylabel: "dollars" })),
  W(6, "hard", 5, S`On laisse tomber une balle d'une hauteur de 18 m, et chaque rebond atteint les $\frac23$ de la hauteur précédente. (a) Trouve la hauteur du 4e rebond. (b) Trouve la distance totale parcourue quand la balle touche le sol pour la 8e fois. (c) Explique pourquoi la distance totale ne peut jamais dépasser 90 m.`,
    S`(a) $18(\frac23)^4\approx3.56$ m. (b) $18+2\cdot\frac{12(1-(2/3)^7)}{1/3}\approx18+2(33.89)=85.79$ m. (c) Les distances de montée et de descente forment une série de raison $r=\frac23$; leur total se rapproche de $18+2\cdot\frac{12}{1/3}=90$. [1, 2, 2.]`,
    dotsD(geo(18, 2 / 3, 8).map((v) => Math.round(v * 100) / 100), { labels: false, xlabel: "rebond", ylabel: "hauteur (m)" })),
  W(7, "hard", 5, S`(a) Utilise le triangle de Pascal pour développer $(2x-3)^4$. (b) Trouve le coefficient de $x^3$ dans $(x+2)^8$. (c) Le quadrillage représente une zone de 4 pâtés sur 3 pâtés. Explique pourquoi la règle de Pascal permet de compter les trajets les plus courts de A à B, et trouve le nombre de trajets.`,
    S`(a) $16x^4-96x^3+216x^2-216x+81$. (b) $56\cdot2^5=1792$. (c) On ne peut atteindre chaque coin qu'à partir de la gauche ou d'en dessous; son nombre est donc la somme de ces deux nombres — la règle de Pascal. Le coin B reçoit ${prow(7)[3]} trajets. [2, 1, 2.]`,
    gridD(4, 3)),
];
