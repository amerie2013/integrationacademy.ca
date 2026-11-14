// Fiche 1.10 — Densité, infini et limite (édition de l'enseignant)
import { numberLine, pointsGraph, raw } from "./tikz.mjs";
import { PROBLEMS } from "./p1_10.mjs";

const ZOOM = raw(String.raw`\draw[thick,<->] (0,2) -- (12,2); \foreach \x/\l in {1/{0},6/{\frac12},11/{1}} {\draw (\x,1.9) -- (\x,2.1) node[above,font=\small] {$\l$};}
\draw[thick,<->] (0,0) -- (12,0); \foreach \x/\l in {1/{\frac12},3.5/{\frac{9}{16}},6/{\frac58},8.5/{\frac{11}{16}},11/{\frac34}} {\draw (\x,-0.1) -- (\x,0.1) node[below=4pt,font=\small] {$\l$};}
\fill[violet!80!black] (3.5,0) circle (2.5pt) (6,0) circle (2.5pt) (8.5,0) circle (2.5pt);
\draw[black!40,dashed] (6,1.9) -- (1,0.1); \draw[black!40,dashed] (8.5,1.9) -- (11,0.1); \draw[red!70!black,very thick] (6,2) -- (8.5,2);
\fill[red!70!black] (8.5,2) circle (2pt); \node[above,font=\small,red!70!black] at (8.5,2.1) {$\frac34$};`,
  "Zoom sur l'écart de $\\frac12$ à $\\frac34$ : des points milieux continuent d'apparaître, peu importe le grossissement.");

const SQUARES = raw(String.raw`\draw[thick] (0,0) rectangle (4,4);
\fill[blue!25] (0,0) rectangle (2,4); \node at (1,2) {$\frac12$};
\fill[green!25] (2,0) rectangle (4,2); \node at (3,1) {$\frac14$};
\fill[orange!30] (2,2) rectangle (3,4); \node at (2.5,3) {$\frac18$};
\fill[violet!25] (3,2) rectangle (4,3); \node[font=\small] at (3.5,2.5) {$\frac1{16}$};
\fill[red!25] (3,3) rectangle (3.5,4); \fill[yellow!40] (3.5,3) rectangle (4,3.5);
\draw (2,0) -- (2,4) (2,2) -- (4,2) (3,2) -- (3,4) (3,3) -- (4,3) (3.5,3) -- (3.5,4) (3.5,3.5) -- (4,3.5);`,
  "$\\frac12+\\frac14+\\frac18+\\frac1{16}+\\dots$ remplit tout le carré unité : la somme a pour limite $1$.");

export const WS = {
  code: "1.10",
  title: "Densité, infini et limite",
  bigideas: String.raw`Entre deux nombres rationnels, il y en a toujours un autre (leur \textbf{point milieu} $\frac{a+b}{2}$); les rationnels sont donc \textbf{denses} et il n'existe pas de fraction « suivante ». Des ensembles de nombres comme $\mathbb{N}$ continuent sans fin --- ils sont \textbf{infinis}. Une suite peut s'approcher autant qu'on le veut d'une valeur sans nécessairement l'atteindre; cette valeur est sa \textbf{limite}.`,
  goals: [
    "Trouver des nombres rationnels entre deux rationnels donnés (points milieux, dénominateurs plus grands, décimales supplémentaires).",
    "Expliquer pourquoi les rationnels sont denses et les entiers ne le sont pas.",
    "Expliquer pourquoi il n'existe ni plus grand nombre ni plus petit nombre rationnel positif.",
    "Décrire la limite d'une suite à partir d'une table, d'un graphique ou d'un diagramme.",
    String.raw`Interpréter des décimaux périodiques comme $0.\overline{3}$ et $0.\overline{9}$ comme des limites.`,
  ],
  curriculum: "B1.3",
  vocab: [
    ["Dense", "entre deux éléments de l'ensemble, il y a un autre élément"],
    ["Point milieu", "le nombre à mi-chemin entre $a$ et $b$ : $\\frac{a+b}{2}$"],
    ["Infini", "sans fin; on ne peut pas l'énumérer au complet"],
    ["Suite", "une liste ordonnée de nombres : $1,\\frac12,\\frac14,\\dots$"],
    ["Limite", "la valeur dont les termes d'une suite s'approchent autant qu'on le veut"],
  ],
  hook: String.raw`Place-toi à deux mètres de la porte de la classe et annonce : « À chaque pas, je vais parcourir la moitié de la distance qui reste. » Fais quelques pas (1 m, 50 cm, 25 cm\ldots). Demande : « Est-ce que j'atteindrai un jour la porte? » Certains élèves disent jamais, d'autres disent oui. C'est le paradoxe de Zénon, de la Grèce antique. L'idée de \emph{limite} le résout : une infinité de pas peut donner une distance finie, $2$ m.`,
  concepts: [
    ["1. La densité : toujours un autre nombre entre deux", String.raw`Le point milieu de deux rationnels est rationnel; on peut donc toujours en trouver un autre. Recommence sans fin :
${ZOOM}
\textbf{Trois méthodes.} (1) Point milieu : $\frac{a+b}{2}$. (2) Dénominateur commun plus grand : entre $\frac25=\frac{20}{50}$ et $\frac35=\frac{30}{50}$ se trouvent $\frac{21}{50},\dots,\frac{29}{50}$. (3) Décimales supplémentaires : entre $0.6$ et $0.61$ se trouvent $0.601,0.602,\dots$\\
Les \textbf{entiers ne sont pas denses} : il n'y a aucun entier entre $3$ et $4$.`],
    ["2. L'infini", String.raw`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \textbf{Pas de plus grand nombre} : pour tout nombre $N$, $N+1$ est plus grand.
\item \textbf{Pas de plus petit rationnel positif} : pour tout $\frac{a}{b}>0$, $\frac{a}{2b}$ est plus petit et toujours positif.
\item \textbf{Une infinité de nombres dans tout intervalle} : entre $0$ et $\frac{1}{1000}$, il y a autant de rationnels qu'on le veut.
\end{itemize}
\textbf{Note à l'enseignant (approfondissement) :} associe chaque nombre naturel $n$ au nombre pair $2n$ : $1\leftrightarrow2$, $2\leftrightarrow4$, $3\leftrightarrow6,\dots$ Il ne reste rien d'un côté comme de l'autre; il y a donc « autant » de nombres pairs que de nombres naturels --- l'infini ne se comporte pas comme les nombres ordinaires.`],
    ["3. Les suites et les limites", String.raw`Les termes de $\frac{1}{n}$ : $1,\frac12,\frac13,\frac14,\dots$ s'approchent de $0$ autant qu'on le veut, mais restent toujours positifs. La limite est $0$.
${pointsGraph({ pts: [[1, 1], [2, 0.5], [3, 0.3333], [4, 0.25], [5, 0.2], [6, 0.1667], [7, 0.1429], [8, 0.125], [9, 0.1111], [10, 0.1]], xmin: 0, xmax: 10.5, ymin: 0, ymax: 1.1, xlabel: "$n$", ylabel: "$\\frac1n$", join: false, xtick: "1,2,...,10", ytick: "0,0.25,...,1", height: 4.8, caption: "Les points s'approchent de l'axe horizontal ($y=0$) sans jamais le toucher." })}
${SQUARES}`],
    ["4. Les décimaux périodiques sont des limites", String.raw`$0.\overline{3}$ est la limite de $0.3,\ 0.33,\ 0.333,\dots$ Les écarts avec $\frac13$ sont $\frac{1}{30},\frac{1}{300},\frac{1}{3000},\dots$, qui diminuent jusqu'à $0$; donc $0.\overline{3}=\frac13$ exactement. De la même façon, $0.\overline{9}$ est la limite de $0.9,0.99,0.999,\dots$, soit $1$.`],
  ],
  tips: [
    String.raw`Les élèves pensent que « $\frac12$ et $\frac34$ sont voisins », parce qu'ils imaginent des quarts. Réécris avec un dénominateur plus grand.`,
    String.raw`Une limite n'a pas besoin d'être atteinte : les termes de $\frac1n$ ne valent jamais $0$.`,
    String.raw`L'infini ($\infty$) n'est pas un nombre avec lequel on calcule; il décrit un processus qui ne se termine jamais.`,
    String.raw`$0.999\ldots$ (qui se répète sans fin) est égal à $1$; $0.999$ (trois neuf) ne l'est pas.`,
    String.raw`Utilise la marche vers la porte ou l'image du carré plié --- ces idées se ressentent avant de se définir.`,
  ],
  examples: [
    { title: "Un nombre entre deux fractions", q: String.raw`Trouve un nombre rationnel entre $\frac15$ et $\frac14$.`,
      fig: numberLine({ min: 0.2, max: 0.25, step: 0.0125, labelEvery: 4, unit: 2.5, labels: ["$\\frac15$", "", "", "", "$\\frac14$"], dots: [{ at: 0.225, label: "$\\frac{9}{40}$", color: "violet" }] }),
      steps: [String.raw`\textbf{Formule du point milieu :} $m=\dfrac{a+b}{2}$ se trouve toujours entre $a$ et $b$. Additionne d'abord : $\frac15+\frac14=\frac{4}{20}+\frac{5}{20}=\frac{9}{20}$.`, String.raw`Point milieu : $\frac{\frac15+\frac14}{2}=\frac{\frac{9}{20}}{2}=\frac{9}{40}$.`, String.raw`Vérification : $\frac15=\frac{8}{40}<\frac{9}{40}<\frac{10}{40}=\frac14$.`], ans: String.raw`$\frac{9}{40}$ (un parmi une infinité)` },
    { title: "Entre deux fractions négatives", q: String.raw`Trouve un nombre rationnel entre $-\frac23$ et $-\frac35$.`, steps: [String.raw`\textbf{Règle :} si aucun numérateur entier ne se glisse entre les deux, utilise une fraction équivalente avec un plus grand dénominateur (des morceaux plus petits).`, String.raw`PPCD $15$ : $-\frac{10}{15}$ et $-\frac{9}{15}$ --- aucun numérateur entier entre les deux.`, String.raw`Double : $-\frac{20}{30}$ et $-\frac{18}{30}$; prends $-\frac{19}{30}$.`, String.raw`\textbf{Vérification :} $-\frac{20}{30}<-\frac{19}{30}<-\frac{18}{30}$, et $-0.667<-0.633<-0.6$ \checkmark`], ans: String.raw`$-\frac{19}{30}$` },
    { title: "Les entiers ne sont pas denses", q: String.raw`Combien d'entiers se trouvent strictement entre $-3$ et $2$? Combien de nombres rationnels?`, steps: [String.raw`\textbf{Définition :} un ensemble est \emph{dense} si, entre deux de ses nombres, il y en a toujours un autre. « Strictement entre » exclut $-3$ et $2$ eux-mêmes.`, String.raw`Entiers : $-2,-1,0,1$ --- exactement quatre.`, String.raw`Rationnels : une infinité (chaque écart contient un autre point milieu).`], ans: "4 entiers; une infinité de rationnels" },
    { title: "Pas de plus petite fraction positive", q: String.raw`Rina affirme que $\frac{1}{1000}$ est la plus petite fraction positive. Montre qu'elle a tort, et explique pourquoi il n'en existe pas de plus petite.`, steps: [String.raw`\textbf{Logique :} une seule fraction positive plus petite réfute l'affirmation; une règle qui en produit toujours une plus petite prouve qu'aucune n'est la plus petite.`, String.raw`$\frac{1}{2000}$ est positive et plus petite.`, String.raw`Pour toute fraction positive $\frac{a}{b}$, $\frac{a}{2b}$ est deux fois plus petite et toujours positive; on peut donc toujours descendre plus bas.`], ans: "il n'existe pas de plus petite fraction positive" },
    { title: "Une limite à partir d'un graphique", q: String.raw`De quelle valeur les termes de $\frac{n}{n+1}$ s'approchent-ils?`,
      fig: pointsGraph({ pts: [[1, 0.5], [2, 0.6667], [3, 0.75], [4, 0.8], [5, 0.8333], [6, 0.8571], [7, 0.875], [8, 0.8889]], xmin: 0, xmax: 8.5, ymin: 0, ymax: 1.1, xlabel: "$n$", ylabel: "$\\frac{n}{n+1}$", join: false, xtick: "1,2,...,8", ytick: "0,0.25,...,1", height: 4.4 }),
      steps: [String.raw`\textbf{Idée :} la limite est la valeur dont les termes s'approchent autant qu'on le veut quand $n$ augmente.`, String.raw`Termes : $\frac12,\frac23,\frac34,\frac45,\dots$`, String.raw`L'écart avec $1$ est $\frac{1}{n+1}$, qui diminue vers $0$.`, String.raw`\textbf{Exemple :} pour $n=99$, $\frac{99}{100}=0.99$, et l'écart avec $1$ est $\frac1{100}$. La limite est donc $1$.`], ans: "la limite est $1$" },
    { title: "Des puissances qui diminuent", q: String.raw`De quoi $\left(\frac13\right)^n$ s'approche-t-il quand $n$ augmente?`, steps: [String.raw`\textbf{Règle :} si $0<r<1$, multiplier par $r$ encore et encore donne des nombres de plus en plus petits, de plus en plus près de $0$.`, String.raw`$\frac13,\frac19,\frac1{27},\frac1{81},\dots$`, String.raw`Chaque terme est le tiers du précédent; les termes s'approchent donc de $0$.`, String.raw`\textbf{Vérification :} $\left(\frac13\right)^{10}=\frac{1}{59\,049}\approx0.000017$, très près de $0$, mais toujours positif \checkmark`], ans: "$0$" },
    { title: "Additionner des moitiés de carré", q: String.raw`Trouve $\frac12+\frac14+\frac18+\frac1{16}$ et la limite de la somme si la régularité continue.`, fig: SQUARES,
      steps: [String.raw`\textbf{Règle :} additionne avec le dénominateur commun $16$. Image : chaque terme ombre la moitié de ce qui n'est pas encore ombré dans un carré unité.`, String.raw`$\frac{8}{16}+\frac{4}{16}+\frac{2}{16}+\frac{1}{16}=\frac{15}{16}$.`, String.raw`La partie non ombrée vaut $\frac1{16}$, puis $\frac1{32}$, \ldots\ et elle diminue jusqu'à $0$.`, String.raw`\textbf{Limite :} la somme vaut toujours $1$ moins la partie non ombrée, et la partie non ombrée s'approche de $0$; la somme s'approche donc de $1$.`], ans: String.raw`$\frac{15}{16}$; limite $1$` },
    { title: "Un décimal périodique comme limite", q: String.raw`Explique pourquoi $0.\overline{3}=\frac13$ exactement.`, steps: [String.raw`\textbf{Idée :} un décimal infini est défini comme la limite de ses troncatures finies.`, String.raw`$0.3,0.33,0.333,\dots$ se rapprochent de $\frac13$.`, String.raw`Les écarts sont $\frac1{30},\frac1{300},\frac1{3000},\dots$, qui s'approchent de $0$.`, String.raw`Le décimal infini désigne la limite, qui est $\frac13$.`, String.raw`\textbf{Vérification algébrique :} $x=0.\overline3$, $10x=3.\overline3$, donc $9x=3$ et $x=\frac13$ \checkmark`], ans: String.raw`$0.\overline{3}=\frac13$` },
    { title: "Assez proche, c'est combien?", q: String.raw`La suite $a_n=\dfrac{2n+5}{n}$. Trouve sa limite, et le premier $n$ pour lequel $a_n$ est à moins de $0.01$ de la limite.`, steps: [String.raw`\textbf{Plan :} sépare la fraction pour voir quelle partie diminue : $\dfrac{a+b}{n}=\dfrac an+\dfrac bn$.`, String.raw`Sépare la fraction : $\dfrac{2n+5}{n}=2+\dfrac5n$.`, String.raw`Quand $n$ augmente, $\dfrac5n$ s'approche de $0$; la limite est donc $2$.`, String.raw`L'écart est $\dfrac5n$. Il faut $\dfrac5n<0.01$, c'est-à-dire $n>500$.`, String.raw`Le premier nombre entier qui convient est $n=501$.`], ans: "limite $2$; $n=501$" },
  ],
  problems: PROBLEMS,
};
