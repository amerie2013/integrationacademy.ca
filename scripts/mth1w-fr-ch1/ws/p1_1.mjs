// Fiche 1.1 — problèmes : 3 de connaissance, 5 de mise en application, 5 défis (à plusieurs parties).
import { numberLine } from "./tikz.mjs";

export const PROBLEMS = [
  { level: 1, q: String.raw`Donne tous les ensembles auxquels appartiennent $23$, $-23$ et $0$.`, recap: String.raw`Ensembles de $23$, $-23$, $0$.`, space: 2.6,
    ans: String.raw`$23$ : $\mathbb{N},\mathbb{W},\mathbb{Z},\mathbb{Q},\mathbb{R}$; $-23$ : $\mathbb{Z},\mathbb{Q},\mathbb{R}$; $0$ : $\mathbb{W},\mathbb{Z},\mathbb{Q},\mathbb{R}$.` },
  { level: 1, q: String.raw`Écris $0.875$ sous forme de fraction irréductible.`, recap: String.raw`$0.875$ en fraction.`, space: 2.4, ans: String.raw`$\frac{875}{1000}=\frac78$.` },
  { level: 1, q: String.raw`Lesquels sont irrationnels? \ $\sqrt{50}$, \ $\sqrt{49}$, \ $1.010010001\ldots$ (un zéro de plus chaque fois), \ $0.\overline{5}$`, recap: String.raw`Irrationnels : $\sqrt{50},\sqrt{49},1.0100\ldots,0.\overline5$?`, space: 2.6,
    ans: String.raw`$\sqrt{50}$ et $1.010010001\ldots$ ($\sqrt{49}=7$, $0.\overline5=\frac59$).` },
  { level: 2, q: String.raw`Simplifie, puis classe dans le plus petit ensemble : a) $\frac{14}{2}$ \ b) $-\frac{24}{6}$ \ c) $\sqrt{121}$ \ d) $-\sqrt{\frac94}$`, recap: String.raw`Classe $\frac{14}{2},-\frac{24}{6},\sqrt{121},-\sqrt{\frac94}$.`, space: 3,
    ans: String.raw`a) $7$, naturel b) $-4$, entier c) $11$, naturel d) $-\frac32$, rationnel.` },
  { level: 2, q: String.raw`Écris $0.\overline{54}$ sous forme de fraction irréductible. Montre l'algèbre.`, recap: String.raw`$0.\overline{54}$ en fraction.`, space: 3, ans: String.raw`$99x=54$, $x=\frac{6}{11}$.` },
  { level: 2, q: String.raw`Écris $2.\overline{18}$ sous forme de fraction impropre irréductible.`, recap: String.raw`$2.\overline{18}$ en fraction.`, space: 3, ans: String.raw`$99x=216$, $x=\dfrac{24}{11}$.` },
  { level: 2, q: String.raw`Entre quels deux entiers consécutifs se trouve $\sqrt{90}$? Estime-la au dixième près et place-la sur la droite numérique.`, recap: String.raw`Situe et estime $\sqrt{90}$.`,
    fig: numberLine({ min: 8, max: 11, step: 0.5, labelEvery: 2, unit: 1.6 }), space: 2.4, ans: String.raw`$9<\sqrt{90}<10$; $\sqrt{90}\approx9.5$.` },
  { level: 2, q: String.raw`Place dans l'ordre croissant et montre-les sur la droite numérique : \ $\sqrt{15}$, \ $3.9$, \ $4$, \ $\frac{15}{4}$.`, recap: String.raw`Ordonne $\sqrt{15},3.9,4,\frac{15}{4}$.`,
    fig: numberLine({ min: 3.5, max: 4.25, step: 0.05, labelEvery: 5, unit: 0.9 }), space: 2.4, ans: String.raw`$\frac{15}{4}<\sqrt{15}<3.9<4$.` },
  { level: 3, space: 5,
    q: String.raw`Pour écrire $0.8\overline{3}=0.8333\ldots$ sous forme de fraction, Rhys s'est dit : « $0.8\overline{3}$, c'est $\frac{8}{10}$ plus un tiers d'un dixième. »
a) Utilise l'idée de Rhys pour montrer que $0.8\overline{3}=\frac56$.
b) Utilise la même idée pour écrire $0.4\overline{3}$ et $0.2\overline{5}$ sous forme de fractions irréductibles.
c) Vérifie une de tes réponses en b) avec la méthode algébrique ($10x$, $100x$).`,
    recap: String.raw`Méthode de Rhys : $0.8\overline3$, $0.4\overline3$, $0.2\overline5$ en fractions.`,
    ans: String.raw`a) $\frac{8}{10}+\frac{1}{30}=\frac{25}{30}=\frac56$ b) $\frac{13}{30}$; $\frac{23}{90}$ c) p.\ ex.\ $100x-10x=39$ donne $\frac{39}{90}=\frac{13}{30}$.` },
  { level: 3, space: 5.5,
    q: String.raw`Vrai ou faux? Prouve en mots chaque énoncé vrai, et donne un contre-exemple pour chaque énoncé faux.
a) Le produit de deux nombres irrationnels est toujours irrationnel.
b) La somme d'un nombre rationnel et d'un nombre irrationnel est toujours irrationnelle.
c) Le quotient de deux nombres rationnels non nuls est toujours rationnel.
d) La somme de deux nombres irrationnels est toujours irrationnelle.`,
    ans: String.raw`a) faux : $\sqrt2\times\sqrt8=4$ b) vrai : si $r+x=q$ était rationnel, alors $x=q-r$ serait rationnel c) vrai : $\frac ab\div\frac cd=\frac{ad}{bc}$ est un quotient d'entiers d) faux : $\sqrt2+(-\sqrt2)=0$.` },
  { level: 3, space: 4.5,
    q: String.raw`Soit $a$ et $b$ deux nombres positifs tels que $a<b$.
a) Compare $\frac1a$ et $\frac1b$ pour $a=2,\ b=5$ et pour $a=\frac14,\ b=\frac12$.
b) Formule un énoncé général sur $\frac1a$ et $\frac1b$, et explique pourquoi il est vrai.
c) L'énoncé est-il encore vrai si $a$ et $b$ sont tous deux négatifs? Teste $a=-5$, $b=-2$.`,
    recap: String.raw`Compare $\frac1a$ et $\frac1b$ quand $a<b$.`,
    ans: String.raw`a) $\frac12>\frac15$; $4>2$ b) $\frac1a>\frac1b$ : partager $1$ en plus de parties (ou en parties plus grandes) donne des parties plus petites c) oui : $-\frac15>-\frac12$.` },
  { level: 3, space: 5,
    q: String.raw`a) Dessine un diagramme de régions emboîtées pour $\mathbb{N}$, $\mathbb{W}$, $\mathbb{Z}$ et $\mathbb{Q}$, à l'intérieur de $\mathbb{R}$, avec une région séparée pour les irrationnels.
b) Place chaque nombre dans la bonne région : $-7,\ 0,\ 13,\ -\frac25,\ 0.\overline6,\ \sqrt{36},\ -\sqrt4,\ 4.25,\ \sqrt{8},\ \pi$.
c) Quelle région contient exactement un de ces nombres? Pourquoi cette région est-elle si « petite »?`,
    recap: "Diagramme emboîté; place dix nombres.",
    ans: String.raw`$\mathbb{N}$ : $13,\sqrt{36}$; $\mathbb{W}$ seulement : $0$; $\mathbb{Z}$ seulement : $-7,-\sqrt4$; $\mathbb{Q}$ seulement : $-\frac25,0.\overline6,4.25$; irrationnels : $\sqrt8,\pi$. c) la région « entier non négatif, mais pas naturel » ne contient que $0$.` },
  { level: 3, space: 5.5,
    q: String.raw`a) Écris $3.1\overline{45}$ sous forme de fraction irréductible.
b) Montre que $19\div6=3.1\overline{6}$.
c) Place dans l'ordre croissant : $\sqrt{10}$, $\ 3.1\overline{6}$, $\ \pi$, $\ 3.1\overline{45}$.
d) Lesquels des nombres en c) sont irrationnels? Explique comment le savoir sans calculatrice.`,
    ans: String.raw`a) $990x=3114$, $x=\dfrac{173}{55}$ b) division longue : le reste $4$ se répète, ce qui donne $3.1666\ldots$ c) $\pi<3.1\overline{45}<\sqrt{10}<3.1\overline6$ d) $\sqrt{10}$ et $\pi$ : $10$ n'est pas un carré parfait, et $\pi$ est un irrationnel connu. Les deux autres sont périodiques.` },
];
