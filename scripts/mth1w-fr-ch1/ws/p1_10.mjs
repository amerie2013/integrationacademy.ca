// Fiche 1.10 — problèmes : 3 de connaissance, 5 de mise en application, 5 défis (à plusieurs parties).
export const PROBLEMS = [
  { level: 1, q: String.raw`Trouve le point milieu de $\frac38$ et de $\frac12$.`, ans: String.raw`$\frac{7}{16}$` },
  { level: 1, q: String.raw`Trouve un nombre entre $1.4$ et $1.5$.`, ans: "p. ex. $1.45$" },
  { level: 1, q: String.raw`Combien d'entiers se trouvent strictement entre $-4$ et $3$?`, ans: "$6$" },
  { level: 2, q: String.raw`Trouve le point milieu de $-\frac34$ et de $\frac12$.`, ans: String.raw`$-\frac18$` },
  { level: 2, q: String.raw`Trouve trois fractions entre $\frac59$ et $\frac23$.`, ans: String.raw`p.\ ex.\ $\frac{21}{36},\frac{22}{36},\frac{23}{36}$` },
  { level: 2, q: String.raw`Quelle est la limite de $\dfrac{6n-1}{2n}$ quand $n$ augmente?`, ans: "$3$" },
  { level: 2, q: String.raw`De quel nombre $3,\ 3.3,\ 3.33,\ 3.333,\dots$ s'approche-t-il? Donne une fraction.`, ans: String.raw`$\frac{10}{3}$` },
  { level: 2, q: String.raw`Trouve $\frac12+\frac14+\frac18+\frac1{16}+\frac1{32}+\frac1{64}$. À quelle distance est-ce de $1$?`, recap: String.raw`$\frac12+\dots+\frac1{64}$; distance par rapport à $1$.`, ans: String.raw`$\frac{63}{64}$; $\frac1{64}$` },
  { level: 3, space: 5,
    q: String.raw`a) Trouve cinq nombres rationnels entre $\frac{1}{101}$ et $\frac{1}{100}$.
b) Explique ta méthode.
c) Trouve un nombre entre $0.99$ et $1$, et explique pourquoi $0.\overline{9}$ n'est pas entre les deux.`,
    recap: String.raw`Cinq nombres entre $\frac1{101}$ et $\frac1{100}$; entre $0.99$ et $1$.`,
    ans: String.raw`a) $\frac{601}{60600},\dots,\frac{605}{60600}$ b) dénominateur commun $10100$, puis $\times6$ c) p.\ ex.\ $0.995$; $0.\overline9=1$ exactement.` },
  { level: 3, space: 5,
    q: String.raw`La suite $a_n=\dfrac{n}{2n+1}$ commence par $\frac13,\ \frac25,\ \frac37,\dots$
a) Écris les trois termes suivants.
b) De quelle valeur la suite s'approche-t-elle? Explique.
c) Montre que l'écart avec cette valeur est $\frac{1}{2(2n+1)}$.
d) Pour quel premier $n$ l'écart est-il inférieur à $0.01$?`,
    recap: String.raw`$a_n=\frac{n}{2n+1}$ : termes, limite, écart, écart $<0.01$.`,
    ans: String.raw`a) $\frac49,\frac5{11},\frac6{13}$ b) $\frac12$ c) $\frac12-\frac{n}{2n+1}=\frac{1}{2(2n+1)}$ d) $n=25$.` },
  { level: 3, space: 5,
    q: String.raw`a) Associe chaque nombre naturel $n$ au nombre pair $2n$. Explique pourquoi cela suggère qu'il y a « autant » de nombres pairs que de nombres naturels.
b) Trouve une façon d'associer les nombres naturels $1,2,3,\dots$ à tous les entiers $\dots,-2,-1,0,1,2,\dots$ sans en oublier aucun.`,
    recap: "Associer les naturels aux nombres pairs, puis aux entiers.",
    ans: String.raw`a) $1\leftrightarrow2$, $2\leftrightarrow4$, … : chaque nombre a exactement un partenaire b) p.\ ex.\ $1\to0$, $2\to1$, $3\to-1$, $4\to2$, $5\to-2$, …` },
  { level: 3, space: 5,
    q: String.raw`On laisse tomber une balle de $12$ m, et chaque rebond atteint les $\frac34$ de la hauteur précédente.
a) Trouve les hauteurs des quatre premiers rebonds.
b) Après combien de rebonds la hauteur est-elle pour la première fois inférieure à $1$ m?
c) De quelle valeur les hauteurs s'approchent-elles? La balle s'arrête-t-elle un jour dans ce modèle?`,
    recap: String.raw`Balle lâchée de $12$ m, rebonds aux $\frac34$ de la hauteur.`,
    ans: String.raw`a) $9,\ 6.75,\ 5.0625,\ 3.796875$ m b) $9$ rebonds c) $0$; dans le modèle, elle n'atteint jamais $0$.` },
  { level: 3, space: 5.5,
    q: String.raw`a) La suite $a_n=\dfrac{3n+1}{n}$. Trouve sa limite, et le premier $n$ pour lequel elle est à moins de $0.002$ de la limite.
b) La somme de $n$ termes de $\dfrac12+\dfrac14+\dfrac18+\cdots$ est $1-\dfrac{1}{2^n}$. Trouve le premier $n$ pour lequel la somme est à moins de $0.001$ de $1$.
c) Montre que $0.\overline{36}+0.\overline{63}=1$ à l'aide de fractions.`,
    ans: String.raw`a) limite $3$; l'écart $\dfrac1n<0.002$ donne $n=501$ b) $2^n>1000$ donne $n=10$ c) $\dfrac{36}{99}+\dfrac{63}{99}=1$.` },
];
