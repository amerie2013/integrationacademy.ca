// Fiche 1.4 — problèmes : 3 de connaissance, 5 de mise en application, 5 défis (à plusieurs parties).
export const PROBLEMS = [
  { level: 1, q: String.raw`Écris $\frac{45}{105}$ sous forme de fraction irréductible.`, ans: String.raw`$\frac37$` },
  { level: 1, q: String.raw`Complète : $\frac49=\frac{\square}{63}$.`, ans: "$28$" },
  { level: 1, q: String.raw`Écris $\frac{41}{8}$ sous forme de nombre fractionnaire et $3\frac29$ sous forme de fraction impropre.`, recap: String.raw`$\frac{41}{8}$ en nombre fractionnaire; $3\frac29$ en fraction impropre.`, ans: String.raw`$5\frac18$; $\frac{29}{9}$` },
  { level: 2, q: String.raw`Évalue $\dfrac38+\dfrac56-1\dfrac{7}{12}$.`, ans: String.raw`$-\dfrac38$` },
  { level: 2, q: String.raw`Évalue $-\dfrac23+\dfrac14-\left(-\dfrac56\right)$.`, ans: String.raw`$\dfrac{5}{12}$` },
  { level: 2, q: String.raw`Évalue $\frac45-\left(-\frac16\right)$.`, ans: String.raw`$\frac{29}{30}$` },
  { level: 2, q: String.raw`Évalue $2\frac34+3\frac58$.`, ans: String.raw`$6\frac38$` },
  { level: 2, q: String.raw`Leah marche $1\frac12$ km jusqu'à l'école, $\frac34$ km jusqu'à la bibliothèque et $2\frac13$ km pour rentrer chez elle. Quelle distance parcourt-elle au total?`, recap: String.raw`Leah : $1\frac12+\frac34+2\frac13$ km.`, ans: String.raw`$4\frac{7}{12}$ km` },
  { level: 3, space: 5,
    q: String.raw`Alexis est partie de chez elle à 19 h 45 pour magasiner et elle est revenue à 22 h 30.
a) Exprime la durée de son absence sous forme de nombre fractionnaire d'heures.
b) Elle a passé $1\frac56$ h à magasiner des vêtements. Combien de temps a-t-elle consacré à d'autres activités? Donne la réponse en heures et en minutes.
c) Quelle fraction de son absence a-t-elle consacrée au magasinage de vêtements?`,
    recap: "Alexis absente de 19 h 45 à 22 h 30; temps hors magasinage; fraction consacrée au magasinage.",
    ans: String.raw`a) $2\frac34$ h b) $\frac{33}{12}-\frac{22}{12}=\frac{11}{12}$ h $=55$ min c) $\frac{22}{12}\div\frac{33}{12}=\frac23$.` },
  { level: 3, space: 5,
    q: String.raw`Le journal d'entraînement de John pour une journée : course $1\frac14$ tour, marche $\frac12$ tour, course $2\frac23$ tours, marche $\frac34$ tour, course $1\frac12$ tour.
a) Combien de tours a-t-il courus?
b) Combien de tours a-t-il marchés?
c) Combien de tours a-t-il courus de plus qu'il n'en a marchés?
d) Un tour mesure $400$ m. Quelle distance totale a-t-il parcourue, au mètre près?`,
    recap: "Tours de John : course, marche, différence, distance totale.",
    ans: String.raw`a) $5\frac{5}{12}$ b) $1\frac14$ c) $4\frac16$ d) $6\frac23$ tours $\approx2667$ m.` },
  { level: 3, space: 5.5,
    q: String.raw`a) Montre que $\dfrac1n-\dfrac{1}{n+1}=\dfrac{1}{n(n+1)}$ lorsque $n=3$ et lorsque $n=5$.
b) Utilise ce résultat pour évaluer $\dfrac{1}{3\times4}+\dfrac{1}{4\times5}+\cdots+\dfrac{1}{9\times10}$.
c) Écris une règle pour la somme de $\dfrac{1}{a(a+1)}$ jusqu'à $\dfrac{1}{b(b+1)}$.`,
    ans: String.raw`a) $\dfrac13-\dfrac14=\dfrac{1}{12}$; $\dfrac15-\dfrac16=\dfrac{1}{30}$ b) $\dfrac13-\dfrac{1}{10}=\dfrac{7}{30}$ c) $\dfrac1a-\dfrac{1}{b+1}$.` },
  { level: 3, space: 5,
    q: String.raw`Jane pose une moulure de bois autour d'une porte : deux côtés de $6\frac58$ pi et une pièce du haut de $3\frac14$ pi.
a) Combien de pieds de moulure lui faut-il?
b) La moulure est vendue en planches de $8$ pi, et chaque pièce doit être coupée dans une seule planche. Combien de planches lui faut-il?
c) Combien de pieds de moulure restera-t-il?`,
    recap: String.raw`Moulure de porte : $2\times6\frac58+3\frac14$ pi; planches de 8 pi.`,
    ans: String.raw`a) $16\frac12$ pi b) $3$ planches (chaque côté demande sa propre planche; les restes de $1\frac38$ pi sont trop courts pour le haut) c) $24-16\frac12=7\frac12$ pi.` },
  { level: 3, space: 5.5,
    q: String.raw`Un réservoir est d'abord rempli aux $\dfrac34$. On vide une quantité égale à $\dfrac13$ de sa capacité. On ajoute ensuite $22$ L, et le réservoir est rempli aux $\dfrac35$.
a) Quelle fraction du réservoir représentent $22$ L?
b) Trouve la capacité du réservoir.
c) Combien de litres contenait-il au départ?
d) Combien de litres de plus faut-il pour le remplir à la fin?`,
    ans: String.raw`a) $\dfrac35-\left(\dfrac34-\dfrac13\right)=\dfrac{11}{60}$ b) $120$ L c) $90$ L d) $48$ L.` },
];
