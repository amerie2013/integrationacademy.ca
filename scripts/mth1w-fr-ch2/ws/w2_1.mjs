// Fiche d'exercices 2.1 — Des mots aux expressions algébriques (édition de l'enseignant). Miroir de ../../mth1w-ch2/ws/w2_1.mjs
import { patternT, rectT, raw } from "../../mth1w-ch2/ws/tikz2.mjs";
import { PROBLEMS } from "./p2_1.mjs";

const TIMELINE = raw(String.raw`\draw[thick] (0,0) -- (15,0);
\foreach \x/\y/\n/\p in {0.8/v.\,250/Diophante/Alexandrie,4.1/628/Brahmagupta/Inde,7.4/v.\,820/al-Khw\={a}rizm\={\i}/Bagdad,10.7/1591/Vi\`{e}te/France,14/1637/Descartes/France}
{\fill[violet!80!black] (\x,0) circle (3pt); \node[above,font=\scriptsize\bfseries,violet!80!black] at (\x,0.1) {\y}; \node[below,font=\scriptsize] at (\x,-0.1) {\n}; \node[below,font=\tiny,black!60] at (\x,-0.45) {\p};}`,
  "De l'algèbre rhétorique (en mots) à l'algèbre syncopée (abréviations), puis à l'algèbre symbolique.");

export const WS = {
  code: "2.1",
  title: "Des mots aux expressions algébriques",
  bigideas: String.raw`L'algèbre utilise des lettres (des \textbf{variables}) pour décrire des nombres qui changent ou qui sont inconnus. Une \textbf{expression algébrique} combine des nombres, des variables et des opérations, sans signe d'égalité. Les expressions permettent de traduire des situations en symboles, d'\textbf{évaluer} par substitution et de décrire chaque figure d'une suite croissante avec une seule règle. La notation elle-même a mis environ 1400 ans à se développer.`,
  goals: [
    "Décrire le développement de la notation algébrique (rhétorique, syncopée, symbolique) et nommer des contributeurs importants.",
    "Reconnaître les termes, les coefficients, les parties variables et les termes constants.",
    String.raw`Traduire des mots en expressions et inversement, y compris « de moins que », les produits de sommes et les nombres entiers consécutifs.`,
    "Évaluer des expressions et des formules en substituant des nombres entiers, des fractions et des nombres décimaux.",
    String.raw`Écrire une expression pour la $n$e figure d'une suite linéaire et pour une situation réelle (coût fixe + taux).`,
  ],
  curriculum: "C1.1, C1.2, C1.3",
  vocab: [
    ["Variable", "une lettre qui représente un nombre qui peut varier ou qui est inconnu"],
    ["Terme", String.raw`une partie d'une expression séparée par $+$ ou $-$, signe compris`],
    ["Coefficient", String.raw`le facteur numérique d'un terme ($-1$ dans $-x$)`],
    ["Terme constant", "un terme sans variable"],
    ["Évaluer", "substituer des valeurs aux variables et calculer"],
  ],
  hook: String.raw`Écris au tableau : « Une quantité et son septième, additionnés, font $19$. » (Papyrus Rhind, Égypte, vers 1650 av. J.-C.) Demande aux élèves de résoudre le problème, puis de l'\emph{écrire} de la façon la plus courte possible. Compare leurs versions avec $x+\frac{x}{7}=19$. Demande : « Pourquoi a-t-il fallu environ 3000 ans aux mathématiciens pour s'entendre sur cette façon d'écrire? » Cela mène à l'histoire et à la puissance des symboles.`,
  concepts: [
    ["1. Une brève histoire de la notation algébrique (C1.1)", String.raw`${TIMELINE}
\textbf{Rhétorique} (Babylone, Égypte) : problèmes et solutions écrits entièrement en mots. \textbf{Syncopée} (Diophante, \emph{Arithmetica}) : abréviations pour l'inconnue et ses puissances. Brahmagupta (Inde, 628) a donné des règles pour le zéro et les nombres négatifs et a résolu des équations à plusieurs inconnues. \textbf{al-jabr} (« restaurer »), dans le titre de l'ouvrage d'al-Khw\={a}rizm\={\i}, nous a donné le mot \emph{algèbre}; son nom nous a donné \emph{algorithme}. \textbf{Symbolique} : Vi\`{e}te utilisait des lettres pour les inconnues et pour les quantités connues; Descartes a choisi $x, y, z$ pour les inconnues.\\
\textbf{Note pour l'enseignant.} Demande aux élèves de faire une recherche sur un contributeur (culture, problème résolu, notation utilisée) --- cela répond à C1.1 et rejoint l'enseignement culturellement adapté.`],
    ["2. Les parties d'une expression", String.raw`Dans $4x^2-x+7$ : termes $4x^2$, $-x$, $7$; coefficients $4$ et $-1$; terme constant $7$. Un terme porte le signe placé devant lui. On omet les signes de multiplication ($4x^2=4\times x\times x$), et une barre de fraction regroupe ($\frac{n+1}{2}=(n+1)\div2$).`],
    ["3. Traduire entre les mots et les symboles", String.raw`\begin{tabular}{@{}lll@{}}\toprule Mots & Expression & Remarque\\\midrule
$6$ de plus que $n$ & $n+6$ & l'ordre n'a pas d'importance\\ $6$ de moins que $n$ & $n-6$ & l'ordre \textbf{s'inverse}\\ $6$ diminué de $n$ & $6-n$ & \\ le triple de la somme de $n$ et de $4$ & $3(n+4)$ & les parenthèses regroupent la somme\\ le triple de $n$, plus $4$ & $3n+4$ & \\ entiers consécutifs & $n, n+1, n+2$ & pairs/impairs : $n, n+2, n+4$\\\bottomrule\end{tabular}`],
    ["4. Évaluer par substitution", String.raw`Remplace chaque variable par sa valeur \textbf{entre parenthèses}, puis respecte la priorité des opérations. Avec $a=-2$ : $3a^2=3(-2)^2=12$, alors que taper $3\times-2^2$ donne $-12$. Une formule est une expression qui porte un nom : $P=2l+2w$, $A=\frac12bh$, $I=Prt$.`],
    ["5. Suites croissantes", String.raw`${patternT(3, 2, "La figure n a 3n + 2 tuiles : 3 nouvelles tuiles par figure, 2 fixes.")}
\textbf{Règle :} (différence constante)$\times n$ + (valeur pour $n=0$). Vérifie avec deux figures connues. La règle répond aux questions sur des figures éloignées (figure $100$ : $302$ tuiles) et aux questions inverses (quelle figure a $47$ tuiles? $3n+2=47$, $n=15$).`],
  ],
  tips: [
    String.raw`« De moins que » inverse l'ordre : « $5$ de moins que $x$ » s'écrit $x-5$. Teste avec un nombre.`,
    String.raw`Les élèves écrivent souvent $2n+5$ pour « le double de la somme de $n$ et de $5$ ». Demande : qu'est-ce qu'on additionne en premier?`,
    String.raw`Mets toujours entre parenthèses les nombres négatifs et les fractions substitués : $x^2$ pour $x=-3$ donne $(-3)^2=9$.`,
    String.raw`Pour les suites, le coefficient est la \emph{différence}, pas le premier terme : $5, 8, 11$ donne $3n+2$, et non $5n+3$.`,
    "L'histoire fait partie du curriculum (C1.1) : même cinq minutes sur al-Khwārizmī ou Brahmagupta comptent.",
  ],
  examples: [
    { title: "Traduire des phrases", q: String.raw`Écris une expression pour a) la somme d'un nombre et de $12$; b) $4$ de moins que le carré d'un nombre; c) le quotient d'un nombre par $7$, diminué de $2$; d) le double de la différence entre un nombre et $9$.`,
      steps: [String.raw`\textbf{Mots clés :} somme $\to+$, de moins que $\to$ soustraire \emph{de} (l'ordre s'inverse), quotient $\to\div$, le double $\to\times2$, \textquotedblleft{}la différence entre\textquotedblright{} $\to$ des parenthèses, parce qu'on la calcule avant tout le reste.`, String.raw`a) $n+12$ \quad b) $n^2-4$`, String.raw`c) $\frac{n}{7}-2$ \quad d) $2(n-9)$ --- la différence est calculée en premier, donc il faut des parenthèses.`, String.raw`\textbf{Vérifie d) avec $n=10$ :} le double de la différence entre $10$ et $9$ est $2\times1=2$, et $2(10-9)=2$; sans parenthèses, $2(10)-9=11$ est faux \checkmark`], ans: String.raw`$n+12$, $n^2-4$, $\frac n7-2$, $2(n-9)$` },
    { title: "Les parties d'une expression", q: String.raw`Pour $6a^3-a^2+5a-8$, énumère les termes, les coefficients et le terme constant.`,
      steps: [String.raw`\textbf{Définitions :} les termes sont séparés par $+$ et $-$ (le signe appartient au terme); un coefficient est le nombre qui multiplie la partie variable; la constante n'a pas de variable.`, String.raw`Termes : $6a^3,\ -a^2,\ 5a,\ -8$ (quatre termes).`, String.raw`Coefficients : $6,\ -1,\ 5$. Constante : $-8$.`, String.raw`\textbf{Remarque :} $-a^2$ signifie $-1\cdot a^2$, donc son coefficient est $-1$.`], ans: String.raw`coefficients $6,-1,5$; constante $-8$` },
    { title: "Des expressions aux mots", q: String.raw`Décris $3(x+5)$ et $3x+5$ en mots, et montre qu'elles sont différentes en évaluant les deux pour $x=2$.`,
      steps: [String.raw`\textbf{La priorité des opérations décide du sens :} dans $3(x+5)$, la parenthèse est calculée en premier, donc la somme est triplée; dans $3x+5$, seul $x$ est triplé.`, String.raw`$3(x+5)$ : le triple de la somme d'un nombre et de cinq. $3x+5$ : cinq de plus que le triple d'un nombre.`, String.raw`Pour $x=2$ : $3(7)=21$ et $6+5=11$.`], ans: "expressions différentes ($21\\ne11$)" },
    { title: "Évaluer avec un nombre négatif", q: String.raw`Évalue $4m^2-3m+1$ lorsque $m=-2$.`,
      steps: [String.raw`\textbf{Règle :} substitue entre parenthèses, puis respecte la priorité des opérations : l'exposant avant la multiplication. $(-2)^2=4$ (puissance paire), et $-3(-2)=+6$.`, String.raw`$4(-2)^2-3(-2)+1$.`, String.raw`$=4(4)+6+1=23$.`, String.raw`\textbf{Vérifie le piège :} écrire $-2^2=-4$ donnerait $4(-4)+6+1=-9$, ce qui est faux --- les parenthèses comptent.`], ans: "$23$" },
    { title: "Une expression fractionnaire", q: String.raw`Évalue $\dfrac{a+b}{a-b}$ lorsque $a=-3$ et $b=5$.`,
      steps: [String.raw`\textbf{Règle :} la barre de fraction regroupe le haut et le bas; évalue chacun complètement, puis divise.`, String.raw`Numérateur : $-3+5=2$. Dénominateur : $-3-5=-8$.`, String.raw`$\frac{2}{-8}=-\frac14$.`, String.raw`\textbf{Vérification du signe :} positif $\div$ négatif $=$ négatif \checkmark`], ans: String.raw`$-\frac14$` },
    { title: "Utiliser une formule", q: String.raw`L'intérêt simple est $I=Prt$. Trouve l'intérêt sur $1200$ dollars à $3.5\%$ par année pendant $4$ ans.`,
      steps: [String.raw`\textbf{Formule :} $I=Prt$, où $P$ est le capital, $r$ le taux annuel en nombre décimal ($3.5\%=3.5\div100=0.035$) et $t$ le temps en années.`, String.raw`$P=1200$, $r=0.035$, $t=4$.`, String.raw`$I=1200(0.035)(4)=168$.`, String.raw`\textbf{Vérification :} l'intérêt d'une année est $1200\times0.035=42$, et $4\times42=168$ \checkmark`], ans: "$168$ dollars" },
    { title: "Une suite de nombres", q: String.raw`Trouve une règle pour $3, 7, 11, 15,\dots$ et le $50$e terme.`,
      steps: [String.raw`\textbf{Règle d'une suite linéaire :} $t_n=d\cdot n+t_0$, où $d$ est la différence constante et $t_0$ le terme qui précède le premier ($n=0$).`, String.raw`Différence $4$; valeur pour $n=0$ : $3-4=-1$. Règle $4n-1$.`, String.raw`Vérifie $n=4$ : $15$ ✓. $n=50$ : $199$.`], ans: String.raw`$4n-1$; $199$` },
    { title: "Des carrés en rangée", q: String.raw`Des carrés faits de cure-dents sont joints en rangée. $1$ carré utilise $4$ cure-dents, $2$ en utilisent $7$, $3$ en utilisent $10$. Écris une règle et trouve le nombre de cure-dents pour $25$ carrés.`,
      fig: patternT(3, 1, "Chaque nouveau carré ajoute 3 cure-dents; 1 est là dès le départ (représentés par des tuiles)."),
      steps: [String.raw`\textbf{Pourquoi $3$ par carré :} chaque nouveau carré partage un côté avec le précédent, il n'a donc besoin que de $3$ nouveaux cure-dents; le premier carré en demande un de plus.`, String.raw`Différence $3$, valeur pour $n=0$ : $1$. Règle $T=3n+1$.`, String.raw`$T=3(25)+1=76$.`, String.raw`\textbf{Vérification :} $n=3$ donne $3(3)+1=10$, ce qui correspond aux données \checkmark`], ans: "$3n+1$; $76$" },
    { title: "Coût fixe plus taux", q: String.raw`Un centre de conditionnement physique demande des frais d'inscription de $45$ dollars et $32$ dollars par mois. Écris une expression pour le coût de $m$ mois et trouve le coût d'une année.`,
      steps: [String.raw`\textbf{Modèle :} coût $=$ frais fixes $+$ (taux)$\times$(nombre de mois). Les frais sont payés une fois; le taux mensuel est multiplié par $m$.`, String.raw`Coût $=45+32m$.`, String.raw`$m=12$ : $45+384=429$.`, String.raw`\textbf{Vérification :} $12$ mois donnent $12\times32=384$, plus les frais de $45$ : $429$ \checkmark`], ans: "$45+32m$; $429$ dollars" },
  ],
  problems: PROBLEMS,
};
