// Fiche 1.6 — problèmes : 3 de connaissance, 5 de mise en application, 5 défis (à plusieurs parties).
export const PROBLEMS = [
  { level: 1, q: String.raw`Évalue $6^3$ et $2^{-4}$.`, ans: String.raw`$216$; $\frac1{16}$` },
  { level: 1, q: String.raw`Évalue $(-2)^4$ et $-2^4$. Explique pourquoi ils sont différents.`, recap: String.raw`$(-2)^4$ et $-2^4$.`, ans: String.raw`$16$ et $-16$ (base $-2$ et base $2$)` },
  { level: 1, q: String.raw`Évalue $9^0$, $(-9)^0$ et $-9^0$.`, ans: "$1,\\ 1,\\ -1$" },
  { level: 2, q: String.raw`Évalue $\left(\dfrac23\right)^{-2}-\left(-\dfrac12\right)^{-3}$.`, ans: String.raw`$\dfrac{41}{4}$` },
  { level: 2, q: String.raw`Évalue $\dfrac{3^2+3^{-1}\times6}{2^{-2}}$.`, ans: "$44$" },
  { level: 2, q: String.raw`Résous $x^2=196$, et évalue $\sqrt[3]{-125}+\sqrt{1.21}$.`, recap: String.raw`$x^2=196$; $\sqrt[3]{-125}+\sqrt{1.21}$.`, ans: String.raw`$x=\pm14$; $-3.9$` },
  { level: 2, q: String.raw`Écris $10^{-3}$ sous forme de fraction et sous forme décimale.`, ans: String.raw`$\frac{1}{1000}=0.001$` },
  { level: 2, q: String.raw`Trouve l'aire d'un carré de $1.2$ m de côté et le volume d'un cube de $0.5$ m d'arête.`, recap: "Carré de 1.2 m de côté (aire); cube de 0.5 m d'arête (volume).", ans: String.raw`$1.44$ m$^2$; $0.125$ m$^3$` },
  { level: 3, space: 5,
    q: String.raw`L'argent d'un compte d'épargne croît selon la formule $A=P(1+i)^n$, où $P$ est le montant investi, $i$ le taux d'intérêt par période et $n$ le nombre de périodes. Rob investit $100$ dollars à $5\%$ par année pendant $10$ ans. Sharon investit $100$ dollars à $10\%$ par année pendant $5$ ans.
a) Prédis quel placement vaudra le plus. Explique.
b) Calcule la valeur de chaque placement (au cent près).
c) Ta prédiction était-elle juste? Pourquoi la durée plus longue l'emporte-t-elle ici?`,
    recap: String.raw`Rob $100(1.05)^{10}$ et Sharon $100(1.10)^{5}$.`,
    ans: String.raw`b) Rob $162.89$; Sharon $161.05$ dollars c) Rob obtient un peu plus : les intérêts produisent des intérêts pendant plus de périodes.` },
  { level: 3, space: 5,
    q: String.raw`Diego investit $2000$ dollars. La banque ajoute $3\%$ d'intérêt tous les six mois; après $5$ ans, son montant est donc $2000(1.03)^{10}$.
a) Explique pourquoi l'exposant est $10$, et non $5$.
b) Trouve le montant après $5$ ans, au cent près.
c) Écris une expression pour le montant après $8$ ans, et évalue-la.`,
    recap: String.raw`Diego : $2000(1.03)^{10}$; pourquoi 10; après 8 ans.`,
    ans: String.raw`a) deux périodes par année $\times5$ ans b) $2687.83$ dollars c) $2000(1.03)^{16}\approx3209.41$ dollars.` },
  { level: 3, space: 5,
    q: String.raw`Un échantillon radioactif a une masse de $640$ g. Sa demi-vie est de $3$ jours; après $t$ jours, sa masse est donc de $640\left(\frac12\right)^{t/3}$ g.
a) Trouve la masse après $9$ jours.
b) Après combien de jours la masse est-elle de $20$ g?
c) Utilise la formule avec $t=-6$. Que signifie la réponse?`,
    recap: String.raw`Demi-vie de 3 jours à partir de 640 g : après 9 jours; quand 20 g; $t=-6$.`,
    ans: String.raw`a) $80$ g b) $5$ demi-vies $=15$ jours c) $640\times4=2560$ g : la masse $6$ jours plus tôt.` },
  { level: 3, space: 5,
    q: String.raw`Trouve la valeur de $\square$ qui rend chaque équation vraie. Explique comment tu le sais.
a) $(-3)^{\square}=-\dfrac{1}{27}$ \quad b) $\left(\dfrac34\right)^{\square}=\dfrac{16}{9}$ \quad c) $0.2^{\square}=25$ \quad d) $10^{\square}=0.0001$
e) Évalue $\left(2^{-2}-3^{-1}\right)^{-1}$.`,
    ans: String.raw`a) $-3$ b) $-2$ c) $-2$, car $0.2=\dfrac15$ d) $-4$ e) $\dfrac14-\dfrac13=-\dfrac{1}{12}$, donc la valeur est $-12$.` },
  { level: 3, space: 5,
    q: String.raw`a) Évalue $(-1)^n$ pour $n=1,2,3,4,5,6$. Décris la régularité et utilise-la pour trouver $(-1)^{99}$ et $(-1)^{100}$.
b) Évalue $2^{-3}+2^{-3}$ et écris la réponse sous forme de puissance de $2$. Fais de même pour $2^{-5}+2^{-5}$.
c) Explique pourquoi $2^{-n}+2^{-n}=2^{-(n-1)}$.`,
    recap: String.raw`Régularités : $(-1)^n$; $2^{-n}+2^{-n}$.`,
    ans: String.raw`a) $-1,1,-1,\dots$; $-1$ et $1$ b) $\frac14=2^{-2}$; $\frac1{16}=2^{-4}$ c) on additionne deux moitiés égales : $2\times2^{-n}=2^{1-n}$.` },
];
