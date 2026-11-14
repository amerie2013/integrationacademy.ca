// Fiche 1.5 — Fractions : multiplication, division et inverses (édition de l'enseignant)
import { areaModel, tape, fracBar, raw } from "./tikz.mjs";
import { PROBLEMS } from "./p1_5.mjs";

/** « Combien de fois ça entre » : une barre de `wholes` unités coupée en morceaux de 1/d, regroupés par g morceaux. */
const fitBar = (wholes, d, g, caption) => {
  const n = wholes * d, w = Math.min(0.75, 13 / n);
  let s = "";
  for (let i = 0; i < n; i++) s += String.raw`\draw[blue!70!black,fill=blue!${Math.floor(i / g) % 2 ? 22 : 8}] (${(i * w).toFixed(2)},0) rectangle (${((i + 1) * w).toFixed(2)},0.6);`;
  for (let k = 1; k <= wholes; k++) s += String.raw`\draw[very thick] (${(k * d * w).toFixed(2)},-0.1) -- (${(k * d * w).toFixed(2)},0.7);`;
  const groups = Math.floor(n / g);
  for (let k = 0; k < groups; k++) s += String.raw`\draw[decorate,decoration={brace,amplitude=4pt},orange!85!black] (${(k * g * w).toFixed(2)},0.75) -- (${((k + 1) * g * w).toFixed(2)},0.75) node[midway,above=3pt,font=\scriptsize] {${k + 1}};`;
  return raw(s, caption);
};

export const WS = {
  code: "1.5",
  title: "Fractions : multiplication, division et inverses",
  bigideas: String.raw`Pour multiplier des fractions, multiplie les numérateurs et multiplie les dénominateurs --- le modèle d'aire montre pourquoi, et aucun dénominateur commun n'est nécessaire. Deux nombres sont \textbf{inverses} l'un de l'autre si leur produit est $1$. Diviser revient à demander « combien de groupes du diviseur entrent? », et c'est la même chose que \textbf{multiplier par l'inverse} : $\frac ab\div\frac cd=\frac ab\times\frac dc$.`,
  goals: [
    "Trouver une fraction d'une quantité et multiplier des fractions et des nombres fractionnaires, en simplifiant d'abord.",
    "Expliquer la multiplication à l'aide d'un modèle d'aire et la division à l'aide d'un modèle « combien de fois ça entre ».",
    String.raw`Trouver l'inverse de fractions, d'entiers, de nombres fractionnaires et de décimaux; expliquer pourquoi $0$ n'en a pas.`,
    "Diviser des fractions et des nombres fractionnaires, y compris négatifs, et simplifier des fractions complexes.",
    "Choisir correctement la multiplication ou la division dans des problèmes écrits (recettes, longueurs, taux).",
  ],
  curriculum: "B3.3, B3.4",
  vocab: [
    ["« de »", "dans les problèmes de fractions, « de » signifie multiplier : les $\\frac34$ de $20$ valent $\\frac34\\times20=15$"],
    ["Inverse", "le nombre par lequel on multiplie pour obtenir $1$; on renverse la fraction : $\\frac25\\to\\frac52$"],
    ["Simplification croisée", "diviser un numérateur et un autre dénominateur par un facteur commun avant de multiplier"],
    ["Fraction complexe", "une fraction dont le numérateur ou le dénominateur contient des fractions"],
  ],
  hook: String.raw`Montre une tasse à mesurer. « Une recette demande $\frac34$ de tasse de lait, mais je veux en faire seulement la moitié. Combien de lait me faut-il? » (la moitié de $\frac34$, c'est $\frac38$ --- une multiplication). Puis : « J'ai $3$ tasses de lait. Combien de portions de $\frac34$ de tasse puis-je verser? » Remplis la tasse quatre fois --- $3\div\frac34=4$. Les élèves voient que diviser par un nombre inférieur à $1$ donne une réponse \emph{plus grande}.`,
  concepts: [
    ["1. Multiplier : le modèle d'aire", String.raw`$\frac23\times\frac45$ signifie $\frac23$ \emph{de} $\frac45$. Ombre $\frac23$ d'un carré en colonnes et $\frac45$ en rangées; la partie commune compte $2\times4=8$ petits rectangles sur $3\times5=15$.
${areaModel(2, 3, 4, 5, "$\\frac23\\times\\frac45=\\frac{2\\times4}{3\\times5}=\\frac{8}{15}$")}
\textbf{Règle :} $\frac ab\times\frac cd=\frac{a\times c}{b\times d}$. Multiplier par une fraction inférieure à $1$ donne un résultat \emph{plus petit}.`],
    ["2. Simplifier d'abord; les nombres fractionnaires", String.raw`Divise n'importe quel numérateur et n'importe quel dénominateur par un facteur commun \emph{avant} de multiplier --- de plus petits nombres, la même réponse :
\[\frac{9}{14}\times\frac{7}{12}=\frac{\cancel{9}^{\,3}}{\cancel{14}_{\,2}}\times\frac{\cancel{7}^{\,1}}{\cancel{12}_{\,4}}=\frac{3}{8}\]
\textbf{Les nombres fractionnaires doivent d'abord devenir des fractions impropres} : $1\frac12\times2\frac23=\frac32\times\frac83=4$. (Multiplier séparément les entiers et les parties donne la mauvaise réponse $2\frac13$.)`],
    ["3. Les inverses", String.raw`\begin{center}\begin{tabular}{lllll}\toprule
Nombre & $\frac{3}{7}$ & $-5$ & $2\frac14$ & $0.2$\\ En fraction & $\frac37$ & $\frac{-5}{1}$ & $\frac94$ & $\frac15$\\ Inverse & $\frac73$ & $-\frac15$ & $\frac49$ & $5$\\\bottomrule\end{tabular}\end{center}
Un inverse garde le même signe (le produit doit être $+1$). \textbf{Zéro n'a pas d'inverse} : $0\times$ n'importe quoi $=0\neq1$.`],
    ["4. Diviser : combien de fois ça entre?", String.raw`$2\div\frac25$ demande « combien de $\frac25$ entrent dans $2$? ». Coupe chaque unité en cinquièmes ($10$ cinquièmes) et regroupe-les deux par deux :
${fitBar(2, 5, 2, "Cinq groupes de $\\frac25$ entrent dans $2$ : $2\\div\\frac25=5$.")}
Le raccourci donne la même réponse : $2\div\frac25=2\times\frac52=5$. \textbf{Garde} le premier nombre, \textbf{change} $\div$ en $\times$, \textbf{renverse} le diviseur. Les signes suivent les règles des entiers.`],
    ["5. La priorité des opérations et les fractions complexes", String.raw`PEDMAS s'applique aussi aux fractions. Une fraction complexe est une division :
\[\frac{\ \frac56\ }{\ \frac{10}{9}\ }=\frac56\div\frac{10}{9}=\frac56\times\frac{9}{10}=\frac34.\]
Apprends aux élèves à \textbf{estimer d'abord} : $\frac56\approx1$ et $\frac{10}{9}\approx1$; la réponse devrait donc être près de $1$.`],
    ["6. Tous les nombres rationnels : décimaux et fractions ensemble", String.raw`Les entiers, les fractions, les nombres fractionnaires et les décimaux sont tous rationnels; les \textbf{mêmes règles des signes et PEDMAS} s'appliquent donc quand ils sont mélangés.
\begin{center}\begin{tabular}{llll}\toprule Expression & Signe & Grandeur & Réponse\\\midrule
$-1.8\times2.5$ & contraires $\Rightarrow-$ & $4.5$ & $-4.5$\\ $-0.9\div\left(-\frac35\right)$ & même $\Rightarrow+$ & $0.9\times\frac53=1.5$ & $1.5$\\ $-2.25-\left(-\frac34\right)$ & additionner l'opposé & $-2.25+0.75$ & $-1.5$\\\bottomrule\end{tabular}\end{center}
\textbf{Choisis la forme la plus simple :} utilise les décimaux quand les fractions se convertissent facilement ($\frac34=0.75$); utilise les fractions quand un décimal serait périodique ($0.2\times\frac13=\frac15\times\frac13=\frac{1}{15}$, exact).\\
\textbf{Note à l'enseignant.} Exige d'abord une estimation : $-1.8\times2.5\approx-2\times2.5=-5$; $-4.5$ est donc raisonnable, mais pas $+4.5$ ni $-45$. C'est l'attente B3.3 du curriculum.`],
  ],
  tips: [
    String.raw`Renverse le \emph{diviseur} (le deuxième nombre), jamais le premier.`,
    String.raw`Convertis les nombres fractionnaires en fractions impropres \emph{avant} de chercher l'inverse : l'inverse de $2\frac13$ est $\frac37$.`,
    String.raw`La simplification croisée n'est permise que dans une multiplication (ou après avoir réécrit une division en multiplication) --- jamais dans une addition.`,
    String.raw`Problèmes écrits : « de / une partie de » $\to$ multiplier; « combien de fois ça entre / combien de morceaux » $\to$ diviser.`,
    String.raw`Vérifie si c'est raisonnable : diviser par un nombre inférieur à $1$ doit donner une réponse plus grande.`,
  ],
  examples: [
    { title: "Une fraction d'une fraction", q: String.raw`Utilise un modèle d'aire pour trouver les $\frac23$ de $\frac45$.`, fig: areaModel(2, 3, 4, 5),
      steps: [String.raw`\textbf{Règle :} « de » signifie multiplier : $\frac ab\times\frac cd=\frac{a\times c}{b\times d}$. Le modèle d'aire montre pourquoi : le tout est coupé en $3\times5=15$ rectangles égaux.`, String.raw`Colonnes : des tiers, on en ombre $2$. Rangées : des cinquièmes, on en ombre $4$.`, String.raw`Partie commune : $8$ des $15$ rectangles.`, String.raw`\textbf{Vérification par la règle :} $\frac23\times\frac45=\frac{2\times4}{3\times5}=\frac{8}{15}$ \checkmark`], ans: String.raw`$\frac{8}{15}$` },
    { title: "Une fraction d'une quantité", q: String.raw`Un sac contient $35$ kg de sable. Que valent les $\frac35$ du sac?`,
      fig: tape([{ n: 3, label: "$\\frac35$", color: "amber" }, { n: 2, label: "", color: "blue" }], { unit: 1.4, total: "35 kg : chaque cinquième vaut 7 kg" }),
      steps: [String.raw`\textbf{Règle :} les $\frac ab$ d'une quantité : divise par $b$ pour obtenir une part, multiplie par $a$ pour prendre $a$ parts.`, String.raw`Un cinquième : $35\div5=7$ kg.`, String.raw`Trois cinquièmes : $3\times7=21$ kg. (Ou $\frac35\times35=21$.)`, String.raw`\textbf{Vérification :} les $\frac25$ restants valent $2\times7=14$ kg, et $21+14=35$ kg \checkmark`], ans: "$21$ kg" },
    { title: "Simplifier avant de multiplier", q: String.raw`Évalue $\frac{8}{15}\times\frac{25}{12}$.`,
      steps: [String.raw`\textbf{Règle :} n'importe quel numérateur peut se simplifier avec n'importe quel dénominateur avant de multiplier, car le produit est $\frac{8\times25}{15\times12}$ et on peut diviser son haut et son bas par un facteur commun.`, String.raw`$8$ et $12$ ont $4$ en commun : $\frac{2}{15}\times\frac{25}{3}$.`, String.raw`$25$ et $15$ ont $5$ en commun : $\frac23\times\frac53$.`, String.raw`$=\frac{10}{9}=1\frac19$.`, String.raw`\textbf{Vérifie sans simplifier :} $\frac{8\times25}{15\times12}=\frac{200}{180}=\frac{10}{9}$ \checkmark`], ans: String.raw`$1\frac19$` },
    { title: "Multiplier des nombres fractionnaires", q: String.raw`Évalue $1\frac23\times2\frac14$.`,
      steps: [String.raw`\textbf{Règle :} convertis d'abord les nombres fractionnaires en fractions impropres : $1\frac23=\frac{3+2}{3}$, $2\frac14=\frac{8+1}{4}$. (Multiplier séparément les entiers et les fractions est une erreur.)`, String.raw`Fractions impropres : $\frac53\times\frac94$.`, String.raw`Simplifie $9$ avec $3$ : $\frac51\times\frac34=\frac{15}{4}$.`, String.raw`$=3\frac34$.`, String.raw`\textbf{Vérifie avec des décimaux :} $1.667\times2.25\approx3.75$ \checkmark`], ans: String.raw`$3\frac34$` },
    { title: "Les inverses", q: String.raw`Trouve l'inverse de $\frac59$, de $-8$, de $1\frac16$ et de $0.4$.`,
      steps: [String.raw`\textbf{Définition :} l'inverse de $x$ est le nombre $y$ tel que $x\times y=1$. Pour $\frac ab$, c'est $\frac ba$; le signe ne change pas.`, String.raw`$\frac59\to\frac95$; \ $-8=\frac{-8}{1}\to-\frac18$.`, String.raw`$1\frac16=\frac76\to\frac67$; \ $0.4=\frac25\to\frac52$.`, String.raw`\textbf{Vérification :} $\frac59\cdot\frac95=1$, \ $(-8)(-\frac18)=1$, \ $\frac76\cdot\frac67=1$, \ $0.4\times2.5=1$ \checkmark`], ans: String.raw`$\frac95,\ -\frac18,\ \frac67,\ \frac52$` },
    { title: "Combien de fois ça entre?", q: String.raw`Utilise un diagramme pour évaluer $3\div\frac34$.`, fig: fitBar(3, 4, 3),
      steps: [String.raw`\textbf{Signification :} $3\div\frac34$ demande « combien de morceaux de $\frac34$ entrent dans $3$? ». \textbf{Règle :} diviser par $\frac ab$ revient à multiplier par $\frac ba$.`, String.raw`Trois unités font $12$ quarts.`, String.raw`Groupes de $3$ quarts : $12\div3=4$ groupes.`, String.raw`Vérification : $3\times\frac43=4$.`], ans: "$4$" },
    { title: "Des quarts de tasse", q: String.raw`Combien de mesures de $\frac14$ de tasse y a-t-il dans $\frac78$ de tasse?`,
      steps: [String.raw`« Combien de fois ça entre » $\Rightarrow$ divise : $\frac78\div\frac14$.`, String.raw`$=\frac78\times\frac41=\frac{28}{8}=\frac72$.`, String.raw`\textbf{Vérification :} $3\frac12$ mesures de $\frac14$ de tasse donnent $\frac72\times\frac14=\frac78$ de tasse \checkmark`], ans: String.raw`$3\frac12$ mesures` },
    { title: "La priorité des opérations", q: String.raw`Évalue $\frac12+\frac23\times\left(-\frac34\right)$.`,
      steps: [String.raw`\textbf{Ordre (PEDMAS) :} la multiplication vient avant l'addition, même avec des fractions.`, String.raw`Multiplie d'abord : $\frac23\times\left(-\frac34\right)=-\frac{6}{12}=-\frac12$.`, String.raw`$\frac12+\left(-\frac12\right)=0$.`, String.raw`\textbf{Vérifie le signe :} positif $\times$ négatif donne négatif; le produit $-\frac12$ annule donc exactement le $\frac12$ \checkmark`], ans: "$0$" },
    { title: "Remonter à travers les restes", q: String.raw`Omar dépense les $\frac25$ de son argent, puis la $\frac12$ de ce qui reste, puis le $\frac13$ de ce qui reste ensuite. Il lui reste $40$ dollars. Combien avait-il au départ?`, steps: [String.raw`\textbf{Idée clé :} « $\frac25$ dépensé » laisse $1-\frac25=\frac35$; chaque achat multiplie ce qui reste par une fraction.`, String.raw`Après chaque achat, la fraction qui reste est $\frac35$, puis la $\frac12$ de cela, puis les $\frac23$ de cela.`, String.raw`Multiplie : $\dfrac35\times\dfrac12\times\dfrac23=\dfrac15$.`, String.raw`Donc $\frac15$ de son argent vaut $40$ dollars, et le total est $5\times40=200$ dollars.`, String.raw`Vérification : il dépense $80$, il reste $120$; il dépense $60$, il reste $60$; il dépense $20$, il reste $40$.`], ans: "$200$ dollars" },
  ],
  problems: PROBLEMS,
};
