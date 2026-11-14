// Fiche 1.5 — problèmes : 3 de connaissance, 5 de mise en application, 5 défis (à plusieurs parties).
export const PROBLEMS = [
  { level: 1, q: String.raw`Évalue $\frac34\times\frac27$.`, ans: String.raw`$\frac{3}{14}$` },
  { level: 1, q: String.raw`Trouve les $\frac56$ de $42$.`, ans: "$35$" },
  { level: 1, q: String.raw`Écris l'inverse de $-\frac{3}{11}$ et celui de $2\frac12$.`, recap: String.raw`Inverses de $-\frac3{11}$ et de $2\frac12$.`, ans: String.raw`$-\frac{11}{3}$; $\frac25$` },
  { level: 2, q: String.raw`Évalue $-\dfrac{7}{12}\times\dfrac{18}{35}\div\left(-\dfrac{9}{10}\right)$.`, ans: String.raw`$\dfrac13$` },
  { level: 2, q: String.raw`Évalue $3\frac13\times1\frac45$.`, ans: "$6$" },
  { level: 2, q: String.raw`Évalue $-0.75\times1\frac13-(-2.5)$. Estime d'abord.`, ans: "$1.5$" },
  { level: 2, q: String.raw`Évalue $4\dfrac12\div1\dfrac18-2\dfrac23\times\dfrac34$.`, ans: "$2$" },
  { level: 2, q: String.raw`Une recette demande $\frac34$ de tasse de sucre par fournée. Quelle quantité de sucre faut-il pour $2\frac13$ fournées?`, recap: String.raw`Sucre : $\frac34$ de tasse $\times2\frac13$ fournées.`, ans: String.raw`$1\frac34$ tasse` },
  { level: 3, space: 5,
    q: String.raw`Une agricultrice construit un poulailler carré dont les côtés mesurent $6\frac12$ m.
a) Trouve le périmètre du poulailler.
b) Trouve son aire.
c) La clôture coûte $12.50$ dollars le mètre. Combien coûte la clôture?
d) L'agricultrice veut au moins $1\frac34$ m$^2$ par poule. Combien de poules le poulailler peut-il accueillir?`,
    recap: String.raw`Poulailler carré de côté $6\frac12$ m : périmètre, aire, coût de la clôture, poules.`,
    ans: String.raw`a) $26$ m b) $42\frac14$ m$^2$ c) $325$ dollars d) $42\frac14\div1\frac34=24\frac17$, donc $24$ poules.` },
  { level: 3, space: 5,
    q: String.raw`Le patio rectangulaire de Gavin est fait de blocs carrés de $1\frac12$ pi sur $1\frac12$ pi. Le patio a une aire de $175\frac12$ pi$^2$ et une longueur de $19\frac12$ pi.
a) Trouve la largeur du patio.
b) Combien de blocs a-t-il utilisés?
c) Les blocs coûtent $4.25$ dollars chacun. Trouve le coût total.`,
    recap: String.raw`Patio de $175\frac12$ pi$^2$, longueur $19\frac12$ pi, blocs de $1\frac12$ pi.`,
    ans: String.raw`a) $9$ pi b) $13\times6=78$ c) $331.50$ dollars.` },
  { level: 3, space: 5.5,
    q: String.raw`Maya dépense le $\dfrac13$ de son argent pour un jeu, puis les $\dfrac35$ de ce qui reste pour des chaussures, puis le $\dfrac14$ de ce qui reste ensuite pour son dîner. Il lui reste $18$ dollars.
a) Quelle fraction de son argent de départ lui reste-t-il?
b) Combien avait-elle au départ?
c) Combien a-t-elle dépensé pour chaque article?
d) Quelle fraction de son argent de départ a servi aux chaussures?`,
    ans: String.raw`a) $\dfrac23\times\dfrac25\times\dfrac34=\dfrac15$ b) $90$ dollars c) jeu $30$, chaussures $36$, dîner $6$ d) $\dfrac25$.` },
  { level: 3, space: 5,
    q: String.raw`a) Montre que diviser $6$ par $\frac45$ donne la même réponse que multiplier $6$ par $\frac54$. Explique pourquoi à l'aide de « combien de fois ça entre ».
b) Explique pourquoi diviser n'importe quel nombre par $\frac12$ le double.
c) Trouve tous les nombres qui sont égaux à leur inverse.`,
    recap: String.raw`Diviser par $\frac45$ ou multiplier par $\frac54$; diviser par $\frac12$; nombres égaux à leur inverse.`,
    ans: String.raw`a) les deux donnent $7\frac12$ : chaque unité contient $\frac54$ groupe de $\frac45$ b) chaque unité contient deux demis c) $1$ et $-1$.` },
  { level: 3, space: 6,
    q: String.raw`Une suite commence par $a_1=2$. Chaque terme suivant est $1+\dfrac{1}{\text{terme précédent}}$.
a) Trouve $a_2$, $a_3$, $a_4$ et $a_5$ sous forme de fractions.
b) Décris la régularité des numérateurs et des dénominateurs.
c) Utilise la régularité pour écrire $a_6$, puis vérifie-le avec la règle.
d) Écris $a_6$ sous forme décimale au millième près.`,
    ans: String.raw`a) $\dfrac32,\ \dfrac53,\ \dfrac85,\ \dfrac{13}{8}$ b) chaque nombre est la somme des deux précédents c) $\dfrac{21}{13}$; $1+\dfrac{8}{13}=\dfrac{21}{13}$ d) $1.615$.` },
];
