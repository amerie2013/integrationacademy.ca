// Fiche 1.8 — problèmes : 3 de connaissance, 5 de mise en application, 5 défis (à plusieurs parties).
export const PROBLEMS = [
  { level: 1, q: String.raw`Simplifie $42:56$.`, ans: "$3:4$" },
  { level: 1, q: String.raw`Une équipe a gagné $10$ matchs et en a perdu $6$. Écris victoires : défaites et victoires : matchs joués sous leur forme la plus simple.`, recap: "10 victoires, 6 défaites : deux rapports.", ans: "$5:3$ et $5:8$" },
  { level: 1, q: String.raw`Résous $x:18=5:6$.`, ans: "$x=15$" },
  { level: 2, q: String.raw`Résous $(x+2):12=5:6$.`, ans: "$x=8$" },
  { level: 2, q: String.raw`La limonade contient $2$ parties de concentré pour $7$ parties d'eau. Quelle quantité de concentré va avec $3.5$ L d'eau?`, recap: "Concentré pour 3.5 L d'eau à 2:7.", ans: "$1$ L" },
  { level: 2, q: String.raw`Partage $350$ dollars selon le rapport $3:4$.`, ans: "$150$ et $200$ dollars" },
  { level: 2, q: String.raw`Sur une carte à l'échelle $1:50\,000$, un sentier mesure $7.2$ cm. Quelle est la longueur réelle du sentier, en km?`, recap: "Carte 1:50 000, 7.2 cm.", ans: "$3.6$ km" },
  { level: 2, q: String.raw`La farine, le sucre et le beurre sont mélangés selon le rapport $5:2:3$ en masse. Combien de grammes de chacun y a-t-il dans $1.5$ kg du mélange?`, ans: "$750$ g, $300$ g, $450$ g" },
  { level: 3, space: 5,
    q: String.raw`Le plateau avant d'un vélo a $48$ dents et le pignon arrière en a $16$.
a) Écris le rapport de démultiplication avant : arrière sous sa forme la plus simple.
b) Si le cycliste pédale à $60$ tours par minute, combien de tours par minute la roue arrière fait-elle?
c) La roue parcourt $2.1$ m par tour. Quelle est la vitesse du vélo en km/h?`,
    recap: "Engrenages 48 : 16; pédalage à 60 tr/min; roue de 2.1 m par tour.",
    ans: String.raw`a) $3:1$ b) $180$ c) $180\times2.1=378$ m/min $=22.68$ km/h.` },
  { level: 3, space: 5,
    q: String.raw`Dans une classe, le rapport des garçons aux filles est $3:4$. Ensuite, $3$ garçons partent et $2$ filles arrivent, et le rapport devient $1:2$.
a) Pose que la classe compte $3k$ garçons et $4k$ filles. Écris une équation pour le nouveau rapport.
b) Résous-la et trouve combien d'élèves la classe comptait au départ.
c) Vérifie ta réponse.`,
    recap: "Garçons : filles 3 : 4 devient 1 : 2 après les changements.",
    ans: String.raw`a) $\frac{3k-3}{4k+2}=\frac12$ b) $k=4$ : $12$ garçons, $16$ filles, $28$ élèves c) $9:18=1:2$ \checkmark` },
  { level: 3, space: 5.5,
    q: String.raw`Un réservoir de $30$ L contient du concentré et de l'eau selon le rapport $2:3$.
a) Combien de litres de chacun contient-il?
b) Tu retires $10$ L du mélange et tu remplis le réservoir avec de l'eau. Quel est le nouveau rapport, sous sa forme la plus simple?
c) Combien de litres de concentré faudrait-il ajouter à ce mélange pour obtenir le rapport $1:2$?`,
    ans: String.raw`a) $12$ L et $18$ L b) les $10$ L retirés contiennent $4$ L et $6$ L; on a maintenant $8:22=4:11$ c) $22$ L d'eau exigent $11$ L de concentré; il faut donc ajouter $3$ L.` },
  { level: 3, space: 5.5,
    q: String.raw`La maquette d'un édifice est construite à l'échelle $1:150$.
a) La maquette mesure $42$ cm de haut. Quelle est la hauteur réelle de l'édifice, en mètres?
b) L'édifice réel mesure $27$ m de large. Quelle est la largeur de la maquette?
c) Le plancher de la maquette a une aire de $360$ cm$^2$. Trouve l'aire réelle du plancher, en m$^2$.
d) Explique pourquoi l'aire n'est pas simplement multipliée par $150$.`,
    ans: String.raw`a) $63$ m b) $18$ cm c) $360\times150^2=8\,100\,000$ cm$^2=810$ m$^2$ d) la longueur et la largeur sont toutes deux multipliées par $150$; l'aire est donc multipliée par $150^2$.` },
  { level: 3, space: 5,
    q: String.raw`Ana, Ben et Cal se partagent $540$ dollars. Ana reçoit deux fois plus que Ben, et Cal reçoit $60$ dollars de plus que Ben.
a) Combien chaque personne reçoit-elle?
b) Écris le rapport Ana : Ben : Cal sous sa forme la plus simple.
c) Explique pourquoi on ne pouvait pas simplement partager l'argent selon un rapport au départ.`,
    recap: "540 dollars : Ana = 2 × Ben, Cal = Ben + 60.",
    ans: String.raw`a) Ben $120$, Ana $240$, Cal $180$ b) $4:2:3$ c) un montant fixe ajouté n'est pas un multiple de la part de Ben; le rapport n'est donc connu qu'après la résolution.` },
];
