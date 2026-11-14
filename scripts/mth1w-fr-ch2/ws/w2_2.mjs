// Fiche d'exercices 2.2 — Expressions équivalentes (édition de l'enseignant). Miroir de ../../mth1w-ch2/ws/w2_2.mjs
import { tiles, polyT, raw } from "../../mth1w-ch2/ws/tikz2.mjs";
import { PROBLEMS } from "./p2_2.mjs";

const LEGEND = raw(String.raw`\filldraw[fill=blue!12,draw=blue!70!black,thick] (0,0) rectangle (1,1); \node[font=\scriptsize] at (0.5,0.5) {$x^2$}; \node[below,font=\scriptsize] at (0.5,0) {$x$ sur $x$};
\filldraw[fill=green!14,draw=green!50!black,thick] (2,0) rectangle (2.32,1); \node[below,font=\scriptsize] at (2.16,0) {$x$ sur $1$};
\filldraw[fill=orange!18,draw=orange!85!black,thick] (3.4,0) rectangle (3.72,0.32); \node[below,font=\scriptsize] at (3.56,0) {$1$ sur $1$};
\filldraw[fill=red!12,draw=red!75!black,thick] (4.8,0) rectangle (5.12,1); \filldraw[fill=red!12,draw=red!75!black,thick] (5.5,0) rectangle (5.82,0.32); \node[below,font=\scriptsize] at (5.3,0) {négatives};`,
  "Tuiles algébriques. Une tuile et son opposée (rouge) forment une paire nulle.");

export const WS = {
  code: "2.2",
  title: "Expressions équivalentes",
  bigideas: String.raw`Des expressions sont \textbf{équivalentes} lorsqu'elles ont la même valeur pour toutes les valeurs des variables. Seuls les \textbf{termes semblables} --- mêmes variables, mêmes exposants --- peuvent être regroupés, en additionnant leurs coefficients. On additionne des polynômes en regroupant les termes semblables et on les \textbf{soustrait en additionnant l'opposé} de chaque terme. Un seul contre-exemple montre que deux expressions ne sont pas équivalentes; la simplification prouve qu'elles le sont.`,
  goals: [
    "Classer des polynômes (monôme, binôme, trinôme) et trouver le degré d'un terme et d'un polynôme.",
    "Reconnaître des termes semblables, y compris des termes à deux variables.",
    "Représenter des polynômes avec des tuiles algébriques et simplifier avec le principe du zéro.",
    "Additionner et soustraire des polynômes à coefficients entiers, fractionnaires et décimaux.",
    "Vérifier l'équivalence d'expressions par substitution et par simplification.",
  ],
  curriculum: "C1.3, C1.4",
  vocab: [
    ["Polynôme", "un terme, ou une somme de termes, dont les variables ont des exposants entiers positifs ou nuls"],
    ["Degré", "d'un terme : somme des exposants de ses variables; d'un polynôme : le plus haut degré de ses termes"],
    ["Termes semblables", String.raw`parties variables identiques : $3x^2y$ et $-x^2y$`],
    ["Principe du zéro", "une quantité plus son opposé donne zéro"],
    ["Équivalentes", "égales pour toutes les valeurs de la ou des variables"],
  ],
  hook: String.raw`Présente deux « recettes » : la recette A, c'est $3$ pommes $+\,2$ bananes $+\,4$ pommes; la recette B, c'est $7$ pommes $+\,2$ bananes. Même quantité de fruits? Écris ensuite $3a+2b+4a$ et $7a+2b$. Demande : « Puis-je simplifier $7a+2b$ davantage? » (Non --- les pommes et les bananes ne se regroupent pas.) Puis : « Et $x^2$ et $x$? » Distribue des tuiles algébriques et laisse les élèves découvrir que les formes ne correspondent pas.`,
  concepts: [
    ["1. Le vocabulaire des polynômes", String.raw`\begin{tabular}{@{}llll@{}}\toprule Polynôme & Termes & Nom & Degré\\\midrule $9$ & 1 & monôme (constante) & 0\\ $-5x^3$ & 1 & monôme & 3\\ $2ab-7$ & 2 & binôme & 2\\ $x^2y+3xy^2-y$ & 3 & trinôme & 3\\ $a^4-a^2b^3+ab-1$ & 4 & polynôme & 5\\\bottomrule\end{tabular}\\
$\frac{x}{3}$ est un terme d'un polynôme (coefficient $\frac13$); $\frac{3}{x}$ et $\sqrt{x}$ n'en sont pas.`],
    ["2. Les tuiles algébriques et le principe du zéro", String.raw`${LEGEND}
${tiles([{ label: "premier", x2: 2, x: 3, c: -4 }, { label: "second", x2: -1, x: -1, c: 6 }], "(2x² + 3x − 4) + (−x² − x + 6) : une paire de x², une paire de x et quatre paires d'unités s'annulent; il reste x² + 2x + 2.", [{ row: 0, kind: "x2", n: 1 }, { row: 1, kind: "x2", n: 1 }, { row: 0, kind: "x", n: 1 }, { row: 1, kind: "x", n: 1 }, { row: 0, kind: "c", n: 4 }, { row: 1, kind: "c", n: 4 }])}`],
    ["3. Regrouper les termes semblables", String.raw`Regroupe selon la partie variable, additionne les coefficients, garde la partie variable : $5xy^2-2x^2y-8xy^2+x^2y=-3xy^2-x^2y$. Les exposants ne changent jamais quand on additionne. Écris la réponse selon les puissances décroissantes d'une variable.`],
    ["4. Additionner et soustraire des polynômes", String.raw`\textbf{Additionner :} enlève les parenthèses, regroupe. \textbf{Soustraire :} additionne l'opposé --- change le signe de \emph{chaque} terme de la parenthèse soustraite :
\[(3x^2-x+5)-(x^2-4x-2)=3x^2-x+5-x^2+4x+2=2x^2+3x+7.\]
\textbf{Vérifie par substitution :} pour $x=1$, $(7)-(-5)=12$ et $2+3+7=12$ ✓. L'addition verticale (en colonnes), avec les termes semblables alignés, est une bonne solution de rechange pour les longs polynômes.`],
    ["5. Vérifier l'équivalence", String.raw`Substitue la même valeur dans les deux. Valeurs différentes $\Rightarrow$ \textbf{non} équivalentes (un contre-exemple). Des valeurs égales ne sont qu'un indice : $x^2$ et $3x-2$ concordent pour $x=1$ et $x=2$, mais pas pour $x=3$. Évite de tester seulement avec $0$ et $1$. Preuve = simplifier l'une jusqu'à obtenir l'autre.`],
  ],
  tips: [
    String.raw`$3x^2+2x\neq5x^3$ : des tuiles différentes; et additionner ne change jamais les exposants.`,
    String.raw`En soustrayant, les élèves changent seulement le premier signe : $-(x^2-4x-2)$ donne $-x^2+4x+2$.`,
    String.raw`$xy$ et $yx$ sont des termes semblables (la multiplication est commutative); $x^2y$ et $xy^2$ ne le sont pas.`,
    String.raw`Le coefficient $1$ est invisible : $x-3x=-2x$, et non $-3x$.`,
    "Demande aux élèves de vérifier chaque simplification par une substitution --- cela détecte la plupart des erreurs de signe.",
  ],
  examples: [
    { title: "Classer", q: String.raw`Classe $-3x^4+2x^2y-7$ et donne son degré.`,
      steps: [String.raw`\textbf{Définitions :} monôme/binôme/trinôme $=1/2/3$ termes. Le degré d'un terme est la somme de ses exposants; le degré du polynôme est le plus grand degré de ses termes.`, String.raw`Trois termes : trinôme.`, String.raw`Degrés $4$, $2+1=3$, $0$; le plus haut est $4$.`], ans: "trinôme de degré $4$" },
    { title: "Repérer les termes semblables", q: String.raw`Parmi $5ab,\ -2a^2b,\ 7ba,\ ab^2,\ -ab$, lesquels sont des termes semblables? Simplifie leur somme.`,
      steps: [String.raw`\textbf{Règle :} les termes semblables ont exactement les mêmes variables avec les mêmes exposants; l'ordre des lettres n'a pas d'importance ($ba=ab$).`, String.raw`$5ab$, $7ba$ et $-ab$ ont tous la partie variable $ab$.`, String.raw`$5+7-1=11$, donc $11ab$.`, String.raw`\textbf{Non semblables :} $-2a^2b$ ($a$ au carré) et $ab^2$ ($b$ au carré) ont des parties variables différentes; ils restent donc séparés.`], ans: "$11ab$" },
    { title: "Additionner avec des tuiles", q: String.raw`Utilise des tuiles pour additionner $2x^2-3x+1$ et $-x^2+4x-3$.`,
      fig: tiles([{ label: "", x2: 2, x: -3, c: 1 }, { label: "", x2: -1, x: 4, c: -3 }], "", [{ row: 0, kind: "x2", n: 1 }, { row: 1, kind: "x2", n: 1 }, { row: 0, kind: "x", n: 3 }, { row: 1, kind: "x", n: 3 }, { row: 0, kind: "c", n: 1 }, { row: 1, kind: "c", n: 1 }]),
      steps: [String.raw`\textbf{Règle :} une tuile positive et une tuile négative de même forme forment une paire nulle; en retirant les paires nulles, il reste la somme. En algèbre : additionne les coefficients des termes semblables.`, String.raw`Paires nulles : une de $x^2$, trois de $x$, une d'unités.`, String.raw`Il reste : une tuile $x^2$, une tuile $x$, deux unités négatives.`, String.raw`\textbf{Vérifie avec les coefficients :} $(2-1)x^2+(-3+4)x+(1-3)=x^2+x-2$ \checkmark`], ans: "$x^2+x-2$" },
    { title: "Deux variables", q: String.raw`Simplifie $4x-3y+2-x+5y-6$.`,
      steps: [String.raw`\textbf{Règle :} regroupe les termes semblables (le signe placé devant reste avec son terme), puis additionne les coefficients.`, String.raw`$x$ : $4-1=3$; $y$ : $-3+5=2$; constantes : $2-6=-4$.`, String.raw`\textbf{Vérifie avec $x=1,\ y=1$ :} $4-3+2-1+5-6=1$ et $3+2-4=1$ \checkmark`], ans: "$3x+2y-4$" },
    { title: "Coefficients décimaux", q: String.raw`Simplifie $1.5m^2-0.4m+2.3m^2-1.1m$.`,
      steps: [String.raw`\textbf{Règle :} les termes en $m^2$ et les termes en $m$ ne sont pas semblables; regroupe donc chaque type séparément.`, String.raw`$m^2$ : $1.5+2.3=3.8$. $m$ : $-0.4-1.1=-1.5$.`, String.raw`\textbf{Vérifie avec $m=1$ :} $1.5-0.4+2.3-1.1=2.3$ et $3.8-1.5=2.3$ \checkmark`], ans: "$3.8m^2-1.5m$" },
    { title: "Additionner des polynômes", q: String.raw`Simplifie $(3a^2-2ab+b^2)+(-a^2+5ab-4b^2)$.`,
      steps: [String.raw`\textbf{Règle :} on peut simplement enlever les parenthèses précédées d'un signe $+$; regroupe ensuite les termes semblables.`, String.raw`$a^2$ : $3-1=2$; $ab$ : $-2+5=3$; $b^2$ : $1-4=-3$.`, String.raw`\textbf{Vérifie avec $a=b=1$ :} $(3-2+1)+(-1+5-4)=2$ et $2+3-3=2$ \checkmark`], ans: "$2a^2+3ab-3b^2$" },
    { title: "Soustraire des polynômes", q: String.raw`Simplifie $(5x^2-x+3)-(2x^2-4x-6)$ et vérifie avec $x=2$.`,
      steps: [String.raw`\textbf{Règle :} soustraire une parenthèse soustrait \emph{chacun} de ses termes : distribue $-1$, donc $-(2x^2-4x-6)=-2x^2+4x+6$.`, String.raw`$5x^2-x+3-2x^2+4x+6=3x^2+3x+9$.`, String.raw`Vérification : $(20-2+3)-(8-8-6)=21+6=27$; $12+6+9=27$ ✓`], ans: "$3x^2+3x+9$" },
    { title: "Équivalentes ou non?", q: String.raw`a) $2x-(3-x)$ est-elle équivalente à $3x-3$? b) $x^2+x$ est-elle équivalente à $x^3$?`,
      steps: [String.raw`\textbf{Logique :} pour prouver que deux expressions sont équivalentes, simplifie l'une jusqu'à obtenir l'autre; pour prouver qu'elles ne le sont \emph{pas}, une seule valeur de $x$ où elles diffèrent suffit.`, String.raw`a) $2x-3+x=3x-3$ : équivalentes (prouvé par simplification).`, String.raw`b) Pour $x=2$ : $6$ et $8$ --- non équivalentes.`], ans: "a) oui b) non" },
    { title: "Périmètre d'un quadrilatère", q: String.raw`Un quadrilatère a des côtés de $2x+1$, $x+4$, $3x-2$ et $x+5$. Écris son périmètre et évalue-le pour $x=3$.`,
      fig: polyT([[0, 0], [4.2, 0], [4.8, 2.4], [0.6, 2.6]], ["2x+1", "x+4", "3x-2", "x+5"], ""),
      steps: [String.raw`\textbf{Formule :} périmètre $=$ somme des quatre côtés. Regroupe séparément les termes en $x$ et les constantes.`, String.raw`$x$ : $2+1+3+1=7$; constantes : $1+4-2+5=8$.`, String.raw`$7(3)+8=29$.`, String.raw`\textbf{Vérifie côté par côté pour $x=3$ :} $7+7+7+8=29$ \checkmark`], ans: "$7x+8$; $29$" },
  ],
  problems: PROBLEMS,
};
