// Fiche 1.2 — problèmes : 3 de connaissance, 5 de mise en application, 5 défis (à plusieurs parties).
import { barChart } from "./tikz.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Évalue a) $-8+3$ \quad b) $-4+(-12)$.`, recap: String.raw`$-8+3$; $-4+(-12)$.`, ans: "a) $-5$ b) $-16$" },
  { level: 1, q: String.raw`Évalue a) $9-15$ \quad b) $-7-(-7)$.`, recap: String.raw`$9-15$; $-7-(-7)$.`, ans: "a) $-6$ b) $0$" },
  { level: 1, q: String.raw`Écris l'opposé de $-14$, et évalue $|-14|+|6|$.`, recap: String.raw`Opposé de $-14$; $|-14|+|6|$.`, ans: "$14$; $20$" },
  { level: 2, q: String.raw`Évalue $-|-11+6|-(-9)+|3-8|$.`, ans: "$9$" },
  { level: 2, q: String.raw`Évalue $15-(-3)+(-22)-|-4-(-9)|$.`, ans: "$-9$" },
  { level: 2, q: String.raw`Maya a $60$ dollars dans son compte. Elle dépense $85$ dollars, puis dépose $40$ dollars. Quel est son solde?`, recap: "Solde de Maya : 60, −85, +40.", ans: "$15$ dollars" },
  { level: 2, q: String.raw`Le diagramme montre la variation quotidienne de la température à midi. Dimanche, la température était de $-1\,^\circ$C. Quelle était-elle vendredi?`, recap: String.raw`Température du vendredi d'après le diagramme (départ $-1\,^\circ$C).`,
    fig: barChart([["Lun", 3], ["Mar", -5], ["Mer", -2], ["Jeu", 6], ["Ven", -4]], { ylabel: "variation ($^\\circ$C)", ymin: -6, ymax: 7 }), space: 2.6, ans: String.raw`$-3\,^\circ$C` },
  { level: 2, q: String.raw`Un ascenseur part de l'étage $4$, descend de $9$ étages, puis monte de $2$ étages. À quel étage s'arrête-t-il? (Rez-de-chaussée $=0$.)`, recap: "Ascenseur : 4, descend de 9, monte de 2.", ans: "étage $-3$" },
  { level: 3, space: 5,
    q: String.raw`Les variations quotidiennes du prix d'une action pendant une semaine ont été de $+2.78,\ -5.45,\ -0.38,\ +1.38$ et $-2.12$ dollars. Le prix était de $58.22$ dollars au début de la semaine.
a) Quel était le prix à la fin de la semaine?
b) Quelle a été la variation quotidienne moyenne?
c) Quel jour le prix de clôture a-t-il été le plus bas? Donne le prix après chaque jour.`,
    recap: "Prix d'une action : 58.22 avec cinq variations quotidiennes; prix final, variation moyenne, jour le plus bas.",
    ans: String.raw`a) $54.43$ dollars b) $-3.79\div5\approx-0.76$ dollar c) $61.00,\ 55.55,\ 55.17,\ 56.55,\ 54.43$ : le plus bas au jour 5.` },
  { level: 3, space: 5,
    q: String.raw`La température à 5 h le 25 décembre à Moosonee, en Ontario, sur six ans, a été de $-21.4,\ -17.7,\ -30.3,\ -24.5,\ -8.0,\ -26.9$ ($^\circ$C).
a) Trouve l'étendue (la plus haute moins la plus basse).
b) Trouve la température moyenne, au dixième près.
c) Combien d'années a-t-il fait plus chaud que la moyenne?`,
    recap: "Températures de Moosonee : étendue, moyenne, années plus chaudes que la moyenne.",
    ans: String.raw`a) $-8.0-(-30.3)=22.3$ b) $-128.8\div6\approx-21.5\,^\circ$C c) $3$ années ($-21.4,\ -17.7,\ -8.0$).` },
  { level: 3, space: 5,
    q: String.raw`Place les entiers $-4,-3,-2,-1,0,1,2,3,4$ dans une grille $3\times3$ de sorte que chaque rangée, chaque colonne et chaque diagonale ait la même somme.
a) Quelle doit être cette somme? Explique.
b) Quel nombre doit aller au centre? Explique.
c) Complète le carré si la rangée du haut est $-3,\ 2,\ 1$.`,
    recap: String.raw`Carré magique avec $-4$ à $4$.`,
    ans: String.raw`a) $0$ (le total $0$ est partagé entre $3$ rangées) b) $0$ c) rangées : $-3,2,1$ / $4,0,-4$ / $-1,-2,3$.` },
  { level: 3, space: 5.5,
    q: String.raw`a) Trouve la somme des entiers de $-30$ à $27$.
b) Pour un entier positif $n$, explique pourquoi la somme des entiers de $-n$ à $n+3$ est $3n+6$.
c) Pour quel $n$ cette somme est-elle égale à $21$? Vérifie en énumérant les nombres qui ne s'annulent pas.`,
    ans: String.raw`a) $-30-29-28=-87$ b) de $-n$ à $n$, tout s'annule; il reste $(n+1)+(n+2)+(n+3)=3n+6$ c) $n=5$ : de $-5$ à $8$, $6+7+8=21$.` },
  { level: 3, space: 5,
    q: String.raw`Un hélicoptère fait du surplace à $120$ m au-dessus du niveau de la mer. Une plongeuse est à $-35$ m et un sous-marin à $-250$ m.
a) À quelle distance l'hélicoptère est-il de chacun d'eux?
b) Le sous-marin monte de $40$ m chaque minute. Après combien de minutes entières est-il plus près de l'hélicoptère que la plongeuse?
c) Quelle est alors la position du sous-marin?`,
    recap: "Hélicoptère à 120 m, plongeuse à −35 m, sous-marin à −250 m qui monte de 40 m/min.",
    ans: String.raw`a) $155$ m et $370$ m b) il doit dépasser $-35$, c.-à-d.\ monter de plus de $215$ m : $6$ minutes c) $-250+240=-10$ m.` },
];
