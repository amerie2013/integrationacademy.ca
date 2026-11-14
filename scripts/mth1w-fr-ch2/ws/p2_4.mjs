// Fiche 2.4 — problèmes : 3 de connaissance, 5 de mise en application, 5 défis. Miroir de ../../mth1w-ch2/ws/p2_4.mjs
import { lineT, polyT } from "../../mth1w-ch2/ws/tikz2.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Résous $n-14=-9$.`, ans: "$n=5$" },
  { level: 1, q: String.raw`Résous $-7x=56$.`, ans: "$x=-8$" },
  { level: 1, q: String.raw`Résous $4y+9=37$ et vérifie.`, ans: "$y=7$" },
  { level: 2, q: String.raw`Résous $15-2m=-7$.`, ans: "$m=11$" },
  { level: 2, q: String.raw`Résous $\dfrac{x}{6}-3=2$.`, recap: String.raw`Résous $\frac x6-3=2$.`, ans: "$x=30$" },
  { level: 2, q: String.raw`Résous $\dfrac{2c}{5}+1=-7$.`, recap: String.raw`Résous $\frac{2c}{5}+1=-7$.`, ans: "$c=-20$" },
  { level: 2, q: String.raw`Résous $0.6t-2.5=3.5$.`, ans: "$t=10$" },
  { level: 2, q: String.raw`Six de plus que le tiers d'un nombre donne $-1$. Écris et résous une équation pour trouver le nombre.`, recap: "Six de plus que le tiers d'un nombre donne −1.", ans: String.raw`$\frac n3+6=-1$; $n=-21$` },
  { level: 3, space: 5,
    q: String.raw`Une montgolfière est à $1200$ m au-dessus du sol et descend à une vitesse constante de $45$ m/min.
${lineT({ m: -45, b: 1200, xmax: 30, ymax: 1300, xlabel: "temps $t$ (min)", ylabel: "hauteur $h$ (m)", xtick: "0,5,...,30", ytick: "0,200,...,1200", width: 8.5, height: 5 }, "")}
a) Écris une relation pour la hauteur $h$ après $t$ minutes.
b) Écris et résous une équation pour trouver quand la montgolfière est à $300$ m de hauteur. Vérifie sur le graphique.
c) Quand atterrira-t-elle? Donne ta réponse au dixième de minute près.`,
    recap: "Montgolfière à 1200 m qui descend de 45 m/min.",
    ans: String.raw`a) $h=1200-45t$ b) $1200-45t=300$, $t=20$ min c) $1200-45t=0$, $t\approx26.7$ min` },
  { level: 3, space: 5,
    q: String.raw`Une salle de quilles demande $4.50$ dollars par personne pour les souliers plus $28$ dollars par allée par heure. Une seule allée est utilisée : $T=4.5p+28h$.
a) Un groupe a joué $2$ heures et a payé $101$ dollars. Combien de personnes y avait-il dans le groupe?
b) Un groupe de $6$ a payé $111$ dollars. Pendant combien d'heures a-t-il joué?
c) Un groupe de $7$ peut-il payer exactement $100$ dollars pour un nombre entier d'heures? Explique.`,
    recap: String.raw`Quilles $T=4.5p+28h$.`,
    ans: String.raw`a) $4.5p+56=101$, $p=10$ b) $27+28h=111$, $h=3$ c) Non : $28h=68.5$ donne $h\approx2.45$, qui n'est pas entier.` },
  { level: 3, space: 5,
    q: String.raw`La vitesse du son dans l'air est d'environ $v=331+0.6T$ mètres par seconde, où $T$ est la température en $^\circ$C.
a) Trouve la vitesse du son à $-20\,^\circ$C.
b) À quelle température la vitesse est-elle de $349$ m/s?
c) À $25\,^\circ$C, tu entends le tonnerre $4$ s après avoir vu l'éclair. À quelle distance l'éclair était-il?
d) À quelle température le son parcourrait-il $1.4$ km en $4$ s? Arrondis au dixième.`,
    recap: String.raw`Vitesse du son $v=331+0.6T$.`,
    ans: String.raw`a) $319$ m/s b) $T=30\,^\circ$C c) $346\times4=1384$ m d) $v=350$, $T\approx31.7\,^\circ$C` },
  { level: 3, space: 5,
    q: String.raw`Je pense à un nombre. Je soustrais $5$, je multiplie par $-3$, j'ajoute $12$ et je divise par $6$. Le résultat est $-2$.
a) Dessine un organigramme des opérations et l'organigramme inverse.
b) Raisonne à rebours pour trouver mon nombre.
c) Écris tout le processus sous la forme d'une seule équation et vérifie ta réponse dans cette équation.`,
    recap: "Énigme : −5, ×(−3), +12, ÷6 donne −2.",
    ans: String.raw`b) $-2\times6=-12$; $-12-12=-24$; $-24\div(-3)=8$; $8+5=13$ c) $\frac{-3(n-5)+12}{6}=-2$ : $\frac{-24+12}{6}=-2$ ✓` },
  { level: 3, space: 5,
    q: String.raw`Un triangle isocèle a deux côtés égaux de $(3x-4)$ cm et une base de $(x+2)$ cm.
${polyT([[0, 0], [3, 0], [1.5, 3.2]], ["x+2", "3x-4", "3x-4"], "")}
a) Écris une expression simplifiée pour le périmètre.
b) Le périmètre est de $43$ cm. Trouve $x$ et la longueur des côtés.
c) Trouve la longueur des côtés si le périmètre était plutôt de $50$ cm.`,
    recap: String.raw`Triangle isocèle : côtés $3x-4$, base $x+2$.`,
    ans: String.raw`a) $7x-6$ b) $x=7$ : $17, 17, 9$ cm c) $x=8$ : $20, 20, 10$ cm` },
];
