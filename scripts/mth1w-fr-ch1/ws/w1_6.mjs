// Fiche 1.6 — Puissances : exposants nuls et négatifs (édition de l'enseignant)
import { pointsGraph, raw } from "./tikz.mjs";
import { PROBLEMS } from "./p1_6.mjs";

const SQUARE_CUBE = raw(String.raw`\draw[blue!70!black,very thick] (0,0) -- (1.8,0) node[midway,below,font=\small] {longueur $x$};
\draw[blue!70!black,thick,fill=blue!10] (3,0) rectangle (4.8,1.8); \node at (3.9,0.9) {$x^2$}; \node[below,font=\small] at (3.9,0) {aire $(x)(x)$};
\draw[violet!80!black,thick,fill=violet!10] (6.2,0) rectangle (7.8,1.6); \draw[violet!80!black,thick,fill=violet!20] (6.2,1.6) -- (6.8,2.1) -- (8.4,2.1) -- (7.8,1.6) -- cycle; \draw[violet!80!black,thick,fill=violet!30] (7.8,0) -- (8.4,0.5) -- (8.4,2.1) -- (7.8,1.6) -- cycle;
\node at (7,0.8) {$x^3$}; \node[below,font=\small] at (7.3,0) {volume $(x)(x)(x)$};`, "Une, deux et trois dimensions : $x$, $x^2$ (au carré), $x^3$ (au cube).");

export const WS = {
  code: "1.6",
  title: "Puissances : exposants nuls et négatifs",
  bigideas: String.raw`Une puissance $a^n$ est une multiplication répétée : la \textbf{base} $a$ est utilisée $n$ fois comme facteur. Les parenthèses déterminent la base : $(-3)^2=9$, mais $-3^2=-9$. La régularité « chaque cran vers le bas divise par la base » impose $a^0=1$ et $a^{-n}=\frac{1}{a^n}$ (pour $a\neq0$). Un exposant négatif signifie \textbf{inverse}, et non négatif.`,
  goals: [
    "Identifier la base et l'exposant; évaluer des puissances dont la base est un entier, une fraction ou un décimal.",
    String.raw`Expliquer la différence entre $(-a)^n$ et $-a^n$, et prédire le signe d'une puissance.`,
    String.raw`Relier $x^2$ et $x^3$ à l'aire et au volume.`,
    String.raw`Utiliser des régularités pour justifier $a^0=1$ et $a^{-n}=\frac{1}{a^n}$; évaluer des puissances à exposant nul ou négatif.`,
    "Évaluer des expressions comportant des puissances dans le bon ordre et résoudre des problèmes de croissance et de décroissance.",
  ],
  curriculum: "B2.1",
  vocab: [
    ["Puissance", "une expression $a^n$ (base $a$, exposant $n$)"],
    ["Base", "le facteur qui se répète"],
    ["Exposant", "le nombre de fois que la base est un facteur"],
    ["Au carré / au cube", "exposant $2$ (aire) / exposant $3$ (volume)"],
    ["Inverse", "$\\frac1x$; pour une fraction, on la renverse"],
  ],
  hook: String.raw`Prends une feuille de papier ($0.1$ mm d'épaisseur) et plie-la en deux encore et encore. Après $1$ pli, elle mesure $0.2$ mm, après $2$ plis $0.4$ mm, après $3$ plis $0.8$ mm\ldots\ Demande aux élèves de prédire l'épaisseur après $7$ plis ($12.8$ mm) et après $42$ plis (plus que la distance jusqu'à la Lune!). Inverse ensuite la question : déplier divise l'épaisseur par deux chaque fois --- c'est ce que décrivent les exposants négatifs.`,
  concepts: [
    ["1. Les puissances comme multiplications répétées", String.raw`$5^3=5\times5\times5=125$ : base $5$, exposant $3$. Le carré et le cube viennent de la géométrie :
${SQUARE_CUBE}`],
    ["2. Racines carrées et racines cubiques : annuler une puissance", String.raw`Élever au carré et extraire une racine carrée sont des \textbf{opérations inverses} : $\sqrt{81}=9$, car $9^2=81$; un carré d'aire $81$ cm$^2$ a donc un côté de $9$ cm.
\begin{center}\begin{tabular}{llll}\toprule Départ & Au carré & Racine carrée & Retour à\\\midrule
$\frac35$ & $\frac{9}{25}$ & $\sqrt{\frac{9}{25}}$ & $\frac35$\\ $0.7$ & $0.49$ & $\sqrt{0.49}$ & $0.7$\\ $-9$ & $81$ & $\sqrt{81}$ & $9$ (et non $-9$)\\\bottomrule\end{tabular}\end{center}
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item $\sqrt{\ }$ désigne la racine \textbf{non négative}, mais l'équation $x^2=81$ a \textbf{deux} solutions, $x=\pm9$.
\item $\sqrt{-81}$ n'est pas un nombre réel (aucun nombre réel au carré n'est négatif); mais $\sqrt[3]{-8}=-2$, car $(-2)^3=-8$.
\item Les \textbf{racines cubiques} annulent un cube : un cube de volume $64$ cm$^3$ a une arête de $\sqrt[3]{64}=4$ cm.
\item Dans PEDMAS, les racines se calculent avec les exposants : $2+\sqrt{25}\times3=17$.
\end{itemize}
\textbf{Note à l'enseignant.} C'est l'habileté dont le théorème de Pythagore a besoin au chapitre 5 ($c=\sqrt{a^2+b^2}$); exerce-la jusqu'à ce qu'elle devienne automatique.`],
    ["3. Bases négatives et parenthèses", String.raw`\begin{center}\begin{tabular}{llll}\toprule Expression & Base & Signification & Valeur\\\midrule
$(-2)^4$ & $-2$ & $(-2)(-2)(-2)(-2)$ & $16$\\ $-2^4$ & $2$ & $-(2\cdot2\cdot2\cdot2)$ & $-16$\\ $(-2)^5$ & $-2$ & cinq facteurs négatifs & $-32$\\\bottomrule\end{tabular}\end{center}
Une base négative avec un exposant \textbf{pair} donne un résultat positif; avec un exposant \textbf{impair}, un résultat négatif.`],
    ["4. Les exposants nuls et négatifs à partir d'une régularité", String.raw`Chaque cran vers le bas du tableau divise par $3$. La régularité continue au-delà de $3^1$ :
\begin{center}\begin{tabular}{c|ccccccc}
puissance & $3^3$ & $3^2$ & $3^1$ & $3^0$ & $3^{-1}$ & $3^{-2}$ & $3^{-3}$\\\hline
valeur & $27$ & $9$ & $3$ & $\mathbf{1}$ & $\mathbf{\frac13}$ & $\mathbf{\frac19}$ & $\mathbf{\frac1{27}}$
\end{tabular}\end{center}
Donc $a^0=1$ et $a^{-n}=\dfrac{1}{a^n}$ pour tout $a\neq0$. Le graphique de $2^n$ montre les valeurs qui diminuent vers $0$ sans jamais l'atteindre :
${pointsGraph({ pts: [[-3, 0.125], [-2, 0.25], [-1, 0.5], [0, 1], [1, 2], [2, 4], [3, 8]], xmin: -3.5, xmax: 3.5, ymin: 0, ymax: 8.5, xlabel: "$n$", ylabel: "$2^n$", xtick: "-3,-2,...,3", ytick: "0,1,...,8", height: 5 })}`],
    ["5. Les bases fractionnaires", String.raw`$\left(\frac{a}{b}\right)^n=\frac{a^n}{b^n}$, donc $\left(\frac25\right)^3=\frac{8}{125}$. Un exposant négatif renverse la fraction : $\left(\frac{a}{b}\right)^{-n}=\left(\frac{b}{a}\right)^{n}$, p.\ ex.\ $\left(\frac34\right)^{-3}=\left(\frac43\right)^3=\frac{64}{27}$.`],
    ["6. Les puissances dans la priorité des opérations", String.raw`Les exposants viennent tout de suite après les parenthèses : $3+2\times5^2=3+2\times25=53$. Apprends aux élèves à souligner chaque puissance et à l'évaluer d'abord, puis à suivre PEDMAS.`],
  ],
  tips: [
    String.raw`$a^n$ n'est pas $a\times n$ : $4^3=64$, et non $12$.`,
    String.raw`$a^0=1$, et non $0$ --- mais $-7^0=-1$, car seul $7$ est la base.`,
    String.raw`Un exposant négatif ne rend jamais la valeur négative : $2^{-3}=\frac18$.`,
    String.raw`Calculatrices : entre $(-3)^2$ avec les parenthèses; beaucoup lisent \texttt{-3\^{}2} comme $-9$.`,
    String.raw`Reviens au tableau de régularité chaque fois que les élèves doutent que $a^0=1$ --- c'est plus convaincant qu'une règle.`,
  ],
  examples: [
    { title: "Base et exposant", q: String.raw`Identifie la base et l'exposant, puis évalue : a) $2^5$ \quad b) $(-4)^3$.`, steps: [String.raw`\textbf{Définition :} $b^n=b\times b\times\cdots\times b$ ($n$ facteurs). La base est ce qui est écrit juste sous l'exposant, parenthèses comprises.`, String.raw`a) Base $2$, exposant $5$ : $2\cdot2\cdot2\cdot2\cdot2=32$.`, String.raw`b) Base $-4$, exposant $3$ : trois facteurs négatifs, $-64$.`, String.raw`\textbf{Vérifie b) par étapes :} $(-4)(-4)=16$, puis $16(-4)=-64$ \checkmark`], ans: "a) $32$ b) $-64$" },
    { title: "Les puissances de $-1$", q: String.raw`Évalue $(-1)^{20}$, $(-1)^{21}$ et $-1^{20}$.`, steps: [String.raw`\textbf{Règle :} les facteurs négatifs s'annulent deux par deux; une base négative à une puissance paire est donc positive, et à une puissance impaire, négative.`, String.raw`Nombre pair de facteurs $-1$ : $(-1)^{20}=1$.`, String.raw`Impair : $(-1)^{21}=-1$.`, String.raw`$-1^{20}=-(1^{20})=-1$.`, String.raw`\textbf{Pourquoi le troisième est différent :} dans $-1^{20}$, la base est $1$, et non $-1$; le signe moins s'applique après la puissance.`], ans: "$1,\\ -1,\\ -1$" },
    { title: "Bases fractionnaires", q: String.raw`Évalue $\left(\frac34\right)^2$ et $\left(-\frac25\right)^3$.`, steps: [String.raw`\textbf{Règle :} $\left(\frac ab\right)^n=\frac{a^n}{b^n}$; le signe suit la règle pair/impair.`, String.raw`$\frac{3^2}{4^2}=\frac{9}{16}$.`, String.raw`Exposant impair, base négative : $-\frac{2^3}{5^3}=-\frac{8}{125}$.`, String.raw`\textbf{Vérification :} $0.75^2=0.5625=\frac{9}{16}$ \checkmark \ et \ $(-0.4)^3=-0.064=-\frac{8}{125}$ \checkmark`], ans: String.raw`$\frac{9}{16}$ et $-\frac{8}{125}$` },
    { title: "Annuler des puissances avec des racines", q: String.raw`Évalue $\sqrt{0.81}$ et $\sqrt{\frac{25}{64}}$, puis résous $x^2=144$ et trouve $\sqrt[3]{-27}$.`, steps: [String.raw`\textbf{Définitions :} $\sqrt a$ est le nombre non négatif dont le carré est $a$; $\sqrt[3]a$ est le nombre dont le cube est $a$. Une équation $x^2=a$ ($a>0$) a deux solutions, $\pm\sqrt a$.`, String.raw`$0.9^2=0.81$, donc $\sqrt{0.81}=0.9$; \ $\left(\frac58\right)^2=\frac{25}{64}$, donc la racine est $\frac58$.`, String.raw`$12^2=144$ et $(-12)^2=144$, donc $x=\pm12$.`, String.raw`$(-3)^3=-27$, donc $\sqrt[3]{-27}=-3$.`], ans: String.raw`$0.9$, $\frac58$, $x=\pm12$, $-3$` },
    { title: "L'exposant nul", q: String.raw`Utilise une régularité de puissances de $4$ pour expliquer pourquoi $4^0=1$. Évalue ensuite $12^0$.`, steps: [String.raw`$4^3=64$, $4^2=16$, $4^1=4$ : chaque cran divise par $4$.`, String.raw`Un cran de plus : $4\div4=1$, donc $4^0=1$. De la même façon, $12^0=1$.`, String.raw`\textbf{Même résultat avec la loi du quotient :} $\frac{4^3}{4^3}=4^{3-3}=4^0$, et $\frac{64}{64}=1$ \checkmark`], ans: "$1$ et $1$" },
    { title: "Exposants négatifs", q: String.raw`Évalue $4^{-3}$, $(-3)^{-2}$ et $-3^{-2}$.`, steps: [String.raw`\textbf{Règle :} $b^{-n}=\frac{1}{b^n}$, car $b^{-n}\times b^n=b^0=1$. Les parenthèses déterminent la base : $(-3)^{-2}$ a pour base $-3$; $-3^{-2}$ a pour base $3$.`, String.raw`$4^{-3}=\frac{1}{64}$.`, String.raw`$(-3)^{-2}=\frac{1}{(-3)^2}=\frac19$.`, String.raw`$-3^{-2}=-\frac{1}{3^2}=-\frac19$.`, String.raw`\textbf{Vérification :} $4^{-3}\times4^3=\frac{1}{64}\times64=1$ \checkmark`], ans: String.raw`$\frac{1}{64},\ \frac19,\ -\frac19$` },
    { title: "Exposant négatif, base fractionnaire", q: String.raw`Évalue $\left(\frac32\right)^{-3}$ et $\left(-\frac14\right)^{-2}$.`, steps: [String.raw`\textbf{Règle :} $\left(\frac ab\right)^{-n}=\left(\frac ba\right)^{n}$ : renverse la base; l'exposant devient positif. Remarque que $-\frac14$ renversé donne $\frac{-4}{1}=-4$.`, String.raw`Renverse : $\left(\frac23\right)^3=\frac{8}{27}$.`, String.raw`Renverse : $(-4)^2=16$.`, String.raw`\textbf{Vérification :} $\left(\frac32\right)^3=\frac{27}{8}$ et $\frac{27}{8}\times\frac{8}{27}=1$ \checkmark`], ans: String.raw`$\frac{8}{27}$ et $16$` },
    { title: "La priorité des opérations", q: String.raw`Évalue $2^3-3^2\times2^{-1}+(-2)^0$.`, steps: [String.raw`\textbf{Ordre :} les puissances d'abord, puis la multiplication, puis l'addition et la soustraction de gauche à droite. Remarque que $(-2)^0=1$.`, String.raw`Puissances : $8$, $9$, $\frac12$, $1$.`, String.raw`Multiplie : $9\times\frac12=4.5$.`, String.raw`$8-4.5+1=4.5$.`, String.raw`\textbf{Vérifie avec des fractions :} $8-\frac92+1=\frac{16-9+2}{2}=\frac92=4.5$ \checkmark`], ans: "$4.5$" },
    { title: "Des exposants négatifs à l'intérieur et à l'extérieur", q: String.raw`Évalue $\left(4^{-1}+2^{-1}\right)^{-2}+\left(-\dfrac13\right)^{-2}$.`, steps: [String.raw`\textbf{Plan :} calcule d'abord l'intérieur des parenthèses (PEDMAS); utilise $b^{-1}=\frac1b$ et $\left(\frac ab\right)^{-n}=\left(\frac ba\right)^n$.`, String.raw`Dans la première parenthèse : $\dfrac14+\dfrac12=\dfrac34$.`, String.raw`Renverse et élève au carré : $\left(\dfrac34\right)^{-2}=\left(\dfrac43\right)^2=\dfrac{16}{9}$.`, String.raw`Renverse la deuxième base et élève au carré : $(-3)^2=9$.`, String.raw`Additionne : $\dfrac{16}{9}+9=\dfrac{16}{9}+\dfrac{81}{9}=\dfrac{97}{9}$.`, String.raw`\textbf{Vérifie avec des décimaux :} $(0.25+0.5)^{-2}=0.75^{-2}\approx1.778$, plus $9$, $\approx10.778$, et $\frac{97}{9}\approx10.778$ \checkmark`], ans: String.raw`$\dfrac{97}{9}$` },
  ],
  problems: PROBLEMS,
};
