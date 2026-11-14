// Fiche 2.1 — problèmes : 3 de connaissance, 5 de mise en application, 5 défis (en plusieurs parties). Miroir de ../../mth1w-ch2/ws/p2_1.mjs
import { patternT, rectT } from "../../mth1w-ch2/ws/tikz2.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Écris une expression pour « $8$ de plus que le produit de $3$ et d'un nombre $n$ ».`, recap: String.raw`8 de plus que le produit de 3 et de $n$.`, ans: "$3n+8$" },
  { level: 1, q: String.raw`Pour $-2x^2+x-9$, donne le coefficient de chaque terme variable et le terme constant.`, recap: String.raw`Coefficients et constante de $-2x^2+x-9$.`, ans: String.raw`$-2$ (de $x^2$), $1$ (de $x$); constante $-9$` },
  { level: 1, q: String.raw`Évalue $5p-2q$ lorsque $p=-3$ et $q=4$.`, ans: "$-23$" },
  { level: 2, q: String.raw`Évalue $x^2-4xy+y^2$ lorsque $x=-1$ et $y=3$.`, ans: "$22$" },
  { level: 2, q: String.raw`Le plus petit de trois nombres entiers consécutifs est $n$. Écris et simplifie une expression pour leur somme, puis trouve la somme lorsque $n=-14$.`, recap: String.raw`Somme de 3 entiers consécutifs à partir de $n$; $n=-14$.`, ans: String.raw`$3n+3$; $-39$` },
  { level: 2, q: String.raw`Une suite compte $2, 9, 16, 23$ tuiles dans les figures $1$ à $4$. Écris une expression pour la figure $n$ et trouve le nombre de tuiles de la figure $20$.`, recap: "Suite 2, 9, 16, 23 : règle et figure 20.", ans: String.raw`$7n-5$; $135$` },
  { level: 2, q: String.raw`Évalue $\dfrac{2a-b}{a+b}$ lorsque $a=\frac12$ et $b=-3$. Donne une fraction.`, recap: String.raw`$\frac{2a-b}{a+b}$ pour $a=\frac12$, $b=-3$.`, ans: String.raw`$\frac{4}{-2.5}=-\frac85$` },
  { level: 2, q: String.raw`Un taxi demande $3.90$ dollars plus $1.95$ dollar par km. Écris une expression pour le prix de la course pour $d$ km, et trouve le prix pour $12.4$ km.`, recap: "Taxi 3.90 + 1.95/km; prix pour 12.4 km.", ans: String.raw`$3.90+1.95d$; $28.08$ dollars` },
  { level: 3, space: 5,
    q: String.raw`Dans un jeu vidéo, un joueur commence avec $500$ points, gagne $75$ points pour chaque niveau terminé et perd $120$ points pour chaque vie perdue.
a) Écris une expression pour le pointage après avoir terminé $L$ niveaux et perdu $D$ vies.
b) Trouve le pointage d'un joueur qui a terminé $9$ niveaux et perdu $3$ vies, et celui d'un joueur qui a terminé $12$ niveaux et perdu $6$ vies.
c) Un joueur qui a terminé $8$ niveaux peut-il avoir un pointage d'exactement $1000$? Explique.`,
    recap: "Jeu : départ 500, +75 par niveau, −120 par vie perdue.",
    ans: String.raw`a) $500+75L-120D$ b) $815$; $680$ c) Non : $1100-120D=1000$ exige $D=\frac{100}{120}$, qui n'est pas un nombre entier.` },
  { level: 3, space: 5,
    q: String.raw`Des hexagones faits de cure-dents sont placés en rangée et partagent un côté : $1$ hexagone utilise $6$ cure-dents, $2$ en utilisent $11$, $3$ en utilisent $16$.
a) Écris une expression pour le nombre de cure-dents nécessaires pour $n$ hexagones. Explique ce que représente chaque partie.
b) Combien de cure-dents faut-il pour $40$ hexagones?
c) Combien d'hexagones peut-on faire avec exactement $356$ cure-dents?
d) Une rangée peut-elle utiliser exactement $500$ cure-dents? Explique.`,
    recap: "Hexagones de cure-dents en rangée : 6, 11, 16, …",
    ans: String.raw`a) $5n+1$ : un cure-dent de départ plus $5$ nouveaux par hexagone b) $201$ c) $5n+1=356$, $n=71$ d) Non : $499$ n'est pas un multiple de $5$.` },
  { level: 3, space: 5,
    q: String.raw`La location d'auto A coûte $40$ dollars plus $0.25$ dollar par km. La location B coûte $25$ dollars plus $0.40$ dollar par km.
a) Écris une expression pour le coût de chaque location pour $d$ km.
b) Trouve chaque coût pour $80$ km et pour $150$ km.
c) Essaie des valeurs pour trouver la distance à laquelle les deux locations coûtent le même prix. Quelle location est la moins chère pour les longs trajets?`,
    recap: "Locations : A 40 + 0.25/km; B 25 + 0.40/km.",
    ans: String.raw`a) A : $40+0.25d$; B : $25+0.40d$ b) $80$ km : A $60$, B $57$; $150$ km : A $77.50$, B $85$ c) $100$ km (les deux $65$ dollars); A est moins chère au-delà de $100$ km.` },
  { level: 3, space: 5.5,
    q: String.raw`Une vieille énigme sur Diophante dit : son enfance a duré $\frac16$ de sa vie; sa barbe a poussé après $\frac1{12}$ de plus; il s'est marié après $\frac17$ de plus; son fils est né $5$ ans plus tard; le fils a vécu la moitié de l'âge de son père; Diophante est mort $4$ ans après son fils.
a) Soit $x$ son âge à sa mort. Écris une expression pour la somme de toutes les parties de sa vie.
b) Montre que $x=84$ rend la somme égale à $x$.
c) Quel âge avait Diophante à la naissance de son fils?`,
    recap: "L'énigme de l'âge de Diophante.",
    ans: String.raw`a) $\frac{x}6+\frac{x}{12}+\frac{x}7+5+\frac{x}2+4$ b) $14+7+12+5+42+4=84$ ✓ c) $14+7+12+5=38$ ans.` },
  { level: 3, space: 5,
    q: String.raw`Un rectangle mesure $2x+3$ unités de longueur et $x$ unités de largeur.
${rectT("2x+3", "x", "", { w: 5, h: 2 })}
a) Écris une expression simplifiée pour son périmètre.
b) Trouve le périmètre et l'aire lorsque $x=4$.
c) Essaie des valeurs pour trouver $x$ lorsque le périmètre est de $54$ unités.`,
    recap: String.raw`Rectangle de $2x+3$ sur $x$.`,
    ans: String.raw`a) $6x+6$ b) $30$; $44$ unités carrées c) $x=8$ ($6(8)+6=54$).` },
];
