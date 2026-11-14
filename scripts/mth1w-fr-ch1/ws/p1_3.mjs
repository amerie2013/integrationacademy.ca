// Fiche 1.3 — problèmes : 3 de connaissance, 5 de mise en application, 5 défis (à plusieurs parties).
export const PROBLEMS = [
  { level: 1, q: String.raw`Évalue a) $(-9)(4)$ \quad b) $(-8)(-11)$.`, recap: String.raw`$(-9)(4)$; $(-8)(-11)$.`, ans: "a) $-36$ b) $88$" },
  { level: 1, q: String.raw`Évalue a) $-63\div(-9)$ \quad b) $120\div(-8)$.`, recap: String.raw`$-63\div(-9)$; $120\div(-8)$.`, ans: "a) $7$ b) $-15$" },
  { level: 1, q: String.raw`Prédis le signe, puis évalue $(-2)(-3)(-4)(5)$.`, ans: "négatif; $-120$" },
  { level: 2, q: String.raw`Évalue $7-2(-6)^2\div(-3)$.`, ans: "$31$" },
  { level: 2, q: String.raw`Évalue $-36\div(-4)\times(-3)$.`, ans: "$-27$" },
  { level: 2, q: String.raw`Évalue $(-5)^2-3(-4)+(-10)\div2$.`, ans: "$32$" },
  { level: 2, q: String.raw`Évalue $4a-b^2$ lorsque $a=-2$ et $b=-3$.`, ans: "$-17$" },
  { level: 2, q: String.raw`Une plongeuse descend de $4$ m toutes les $30$ secondes à partir de la surface. Écris et évalue une expression qui donne sa position après $3$ minutes.`, recap: "Plongeuse : 4 m par 30 s pendant 3 min.", ans: String.raw`$6\times(-4)=-24$ m` },
  { level: 3, space: 5,
    q: String.raw`Évalue chaque expression lorsque $x=-2$ et $y=-3$.
a) $x^3-y^2$ \quad b) $(xy)^2$ \quad c) $-x^2y$ \quad d) $(x-y)(x+y)$
e) Quelle expression a la plus grande valeur? Laquelle a la plus petite?`,
    recap: String.raw`$x=-2,y=-3$ : $x^3-y^2$, $(xy)^2$, $-x^2y$, $(x-y)(x+y)$.`,
    ans: String.raw`a) $-17$ b) $36$ c) $12$ d) $-5$ e) la plus grande : b), la plus petite : a).` },
  { level: 3, space: 5,
    q: String.raw`Soit $b$ et $n$ des entiers positifs.
a) $(-b)^n$ est-il positif, négatif ou nul quand $n$ est impair? Quand $n$ est pair? Explique.
b) Compare $(-b)^n$ et $-b^n$ dans chaque cas.
c) Utilise tes règles pour donner le signe de $(-7)^{15}$, de $-7^{16}$ et de $(-7)^{16}$ sans calculer.`,
    recap: String.raw`Signes de $(-b)^n$ et de $-b^n$ pour $n$ impair et pair.`,
    ans: String.raw`a) impair : négatif; pair : positif (paires de négatifs) b) impair : égaux; pair : opposés c) négatif, négatif, positif.` },
  { level: 3, space: 5,
    q: String.raw`Trouve les entiers $\square$ et $\triangle$ pour chaque paire de conditions.
a) $\square\times\triangle=-24$ et $\square+\triangle=-2$
b) $\square\times\triangle=36$ et $\square+\triangle=-13$
c) Explique comment les signes du produit et de la somme t'ont indiqué les signes de $\square$ et de $\triangle$.`,
    recap: "Trouver deux entiers à partir de leur produit et de leur somme.",
    ans: String.raw`a) $4$ et $-6$ b) $-4$ et $-9$ c) produit négatif : signes contraires; produit positif et somme négative : les deux sont négatifs.` },
  { level: 3, space: 5,
    q: String.raw`Un concours de $30$ questions accorde $+5$ pour une bonne réponse, $-2$ pour une mauvaise réponse et $0$ pour une question sans réponse.
a) Jo a $18$ bonnes réponses et $8$ mauvaises. Quel est son pointage?
b) Max a répondu aux $30$ questions et a obtenu $66$. Combien de bonnes réponses a-t-il eues?
c) Un pointage de $149$ est-il possible? Explique.`,
    recap: "Concours +5 / −2 / 0 : pointage de Jo; bonnes réponses de Max; 149 est-il possible?",
    ans: String.raw`a) $74$ b) $5c-2(30-c)=66$, $c=18$ c) non : $30$ bonnes réponses donnent $150$; $29$ bonnes réponses donnent au plus $145$.` },
  { level: 3, space: 5.5,
    q: String.raw`Soit $x=-3$ et $y=2$.
a) Évalue $x^2-2xy+y^2$.
b) Évalue $(x-y)^2$. Que remarques-tu?
c) Évalue $x^3y^2\div(x+y)$.
d) Évalue $\left[(-1)^{x^2}+(xy)^2\right]\div(-5)$.`,
    ans: String.raw`a) $9+12+4=25$ b) $(-5)^2=25$, la même valeur c) $-108\div(-1)=108$ d) $(-1)^9=-1$ et $36$, donc $35\div(-5)=-7$.` },
];
