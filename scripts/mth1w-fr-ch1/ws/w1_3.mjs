// Fiche 1.3 — Multiplier et diviser des nombres entiers (édition de l'enseignant, un PDF avec corrigé)
import { numberLine, pointsGraph, raw } from "./tikz.mjs";
import { PROBLEMS } from "./p1_3.mjs";

const jumps = (n, size, extra = {}) => numberLine({
  min: Math.min(0, n * size) - 1, max: Math.max(0, n * size) + 1, unit: extra.unit ?? 0.8,
  arrows: Array.from({ length: n }, (_, i) => ({ from: i * size, to: (i + 1) * size, label: `$${size}$`.replace("$-", "$-"), color: size < 0 ? "red" : "blue", lane: i % 2 })),
  dots: [{ at: n * size, label: `$${n * size}$`, color: "green" }], caption: extra.caption,
});

const SIGNS = raw(String.raw`\node[draw,thick,minimum width=2.4cm,minimum height=0.8cm,fill=black!5] at (0,0) {$\times$ ou $\div$};
\node[draw,minimum width=2.4cm,minimum height=0.8cm,fill=blue!8] at (2.6,0) {\bfseries positif};
\node[draw,minimum width=2.4cm,minimum height=0.8cm,fill=red!8] at (5.2,0) {\bfseries négatif};
\node[draw,minimum width=2.4cm,minimum height=0.8cm,fill=blue!8] at (0,-0.9) {\bfseries positif};
\node[draw,minimum width=2.4cm,minimum height=0.8cm] at (2.6,-0.9) {\Large $+$};
\node[draw,minimum width=2.4cm,minimum height=0.8cm] at (5.2,-0.9) {\Large $-$};
\node[draw,minimum width=2.4cm,minimum height=0.8cm,fill=red!8] at (0,-1.8) {\bfseries négatif};
\node[draw,minimum width=2.4cm,minimum height=0.8cm] at (2.6,-1.8) {\Large $-$};
\node[draw,minimum width=2.4cm,minimum height=0.8cm] at (5.2,-1.8) {\Large $+$};`, "Un même signe donne un résultat positif; des signes contraires donnent un résultat négatif.");

export const WS = {
  code: "1.3",
  title: "Multiplier et diviser des nombres entiers",
  bigideas: String.raw`La multiplication est une addition répétée, et un multiplicateur négatif signifie « l'opposé de ». On obtient ainsi les règles des signes : \textbf{même signe $\Rightarrow$ positif, signes contraires $\Rightarrow$ négatif}, pour la multiplication comme pour la division. La division annule la multiplication; chaque quotient peut donc être vérifié en remultipliant. Avec plusieurs opérations, suis \textbf{PEDMAS}.`,
  goals: [
    "Multiplier et diviser des entiers en prédisant le signe avant de calculer.",
    "Expliquer les règles des signes à l'aide de sauts répétés sur une droite numérique et de régularités.",
    "Trouver le signe d'un produit de plusieurs facteurs en comptant les facteurs négatifs.",
    String.raw`Expliquer pourquoi la division par $0$ n'est pas définie.`,
    "Évaluer des expressions avec des entiers comportant des parenthèses, des puissances et les quatre opérations, et substituer des valeurs négatives dans des formules.",
  ],
  curriculum: "B3.1, B3.3, B3.4",
  vocab: [
    ["Produit / quotient", "le résultat d'une multiplication / d'une division"],
    ["Facteur", "un nombre que l'on multiplie"],
    ["Non défini", "n'a pas de valeur : aucun nombre ne convient"],
    ["PEDMAS", "Parenthèses, Exposants, Division et Multiplication (de gauche à droite), Addition et Soustraction (de gauche à droite)"],
  ],
  hook: String.raw`Un congélateur part de $0\,^\circ$C et sa température \emph{baisse} de $3$ degrés chaque heure. Demande : « Quelle est la température après $4$ heures? » ($4\times(-3)=-12$). « Quelle était-elle $2$ heures \emph{avant} d'atteindre $0$? » Remonter dans le temps correspond à un nombre négatif d'heures : $(-2)\times(-3)=+6$ --- il faisait plus chaud. Les élèves découvrent « négatif fois négatif donne positif » comme une évidence avant de le voir comme une règle.`,
  concepts: [
    ["1. La multiplication comme sauts répétés", String.raw`$4\times(-3)$ signifie quatre sauts de $-3$, à partir de $0$ :
${jumps(4, -3, { caption: "$4\\times(-3)=-12$ : chaque saut va vers la gauche." })}
Un \textbf{multiplicateur négatif} inverse la direction : $(-4)\times(-3)$ est l'opposé de $4\times(-3)$; il vaut donc $+12$.`],
    ["2. La régularité qui impose les règles", String.raw`Garde un facteur fixe et fais diminuer l'autre. Les produits changent de la même quantité à chaque étape; la régularité doit donc continuer au-delà de zéro :
\begin{center}\begin{tabular}{rr@{\qquad\qquad}rr}
$3\times(-4)=$ & $-12$ & $3\times4=$ & $12$\\
$2\times(-4)=$ & $-8$ & $2\times4=$ & $8$\\
$1\times(-4)=$ & $-4$ & $1\times4=$ & $4$\\
$0\times(-4)=$ & $0$ & $0\times4=$ & $0$\\
$-1\times(-4)=$ & $\mathbf{4}$ & $-1\times4=$ & $\mathbf{-4}$\\
$-2\times(-4)=$ & $\mathbf{8}$ & $-2\times4=$ & $\mathbf{-8}$
\end{tabular}\end{center}
Colonne de gauche : les produits \emph{augmentent} de $4$ à chaque rangée; après $0$, ils sont donc positifs. Colonne de droite : ils \emph{diminuent} de $4$; après $0$, ils sont donc négatifs.
${SIGNS}`],
    ["3. Plusieurs facteurs, la division et le zéro", String.raw`\textbf{Plusieurs facteurs.} Les facteurs négatifs s'annulent deux par deux. Un nombre \emph{pair} de facteurs négatifs donne un produit positif; un nombre \emph{impair} donne un produit négatif : $(-1)^{10}=1$, $(-1)^{11}=-1$.\\[3pt]
\textbf{La division} suit les mêmes règles des signes, car $a\div b=q$ signifie $q\times b=a$. Vérification : $-48\div(-6)=8$, car $8\times(-6)=-48$.\\[3pt]
\textbf{Le zéro.} $0\div(-5)=0$ (puisque $0\times(-5)=0$), mais $-5\div0$ n'est \textbf{pas défini} : aucun nombre multiplié par $0$ ne donne $-5$.`],
    ["4. La priorité des opérations et la substitution", String.raw`\textbf{P}arenthèses $\to$ \textbf{E}xposants $\to$ \textbf{D}iviser/\textbf{M}ultiplier de gauche à droite $\to$ \textbf{A}dditionner/\textbf{S}oustraire de gauche à droite.
\begin{center}$\begin{aligned}
-20\div(3-8)\times2-(-3)^2 &= -20\div(-5)\times2-9 && \text{parenthèses, exposant}\\
&= 4\times2-9 && \text{diviser (de gauche à droite)}\\
&= 8-9=-1
\end{aligned}$\end{center}
\textbf{Les parenthèses déterminent la base :} $(-3)^2=9$, mais $-3^2=-9$. Quand tu substitues une valeur négative, mets-la \emph{toujours} entre parenthèses : si $x=-4$, alors $x^2=(-4)^2=16$.`],
  ],
  tips: [
    String.raw`Les élèves confondent la règle de l'addition et celle de la multiplication. Demande : « Est-ce une addition ou une multiplication? » avant qu'ils décident du signe.`,
    String.raw`La division et la multiplication ont la même priorité : $12\div(-2)\times3=(-6)\times3=-18$, et non $12\div(-6)$.`,
    String.raw`Oublier les parenthèses autour d'un négatif substitué est l'erreur la plus fréquente : avec $x=-2$, $-x^2=-(-2)^2=-4$.`,
    String.raw`Fais d'abord \emph{prédire le signe} aux élèves, puis calculer la grandeur. La plupart des erreurs sont des erreurs de signe.`,
    String.raw`Non défini n'est pas la même chose que zéro : $0\div7=0$, mais $7\div0$ n'a pas de réponse.`,
  ],
  examples: [
    { title: "Des sauts répétés", q: String.raw`Utilise des sauts sur une droite numérique pour évaluer $5\times(-2)$.`, fig: jumps(5, -2, { unit: 0.9 }),
      steps: [String.raw`\textbf{Signification :} $5\times(-2)$ signifie cinq groupes de $-2$, c'est-à-dire cinq sauts de $-2$ à partir de $0$.`,
        String.raw`\textbf{Saute :} $0\to-2\to-4\to-6\to-8\to-10$.`,
        String.raw`\textbf{Vérification par la règle des signes :} positif $\times$ négatif $=$ négatif, et $5\times2=10$, donc $-10$ \checkmark`], ans: "$-10$" },
    { title: "Négatif fois négatif", q: String.raw`Évalue $(-6)(-7)$ et utilise une régularité pour justifier le signe.`,
      steps: [String.raw`\textbf{Règle à justifier :} $(-)(-)=(+)$.`,
        String.raw`\textbf{Régularité :} $2(-7)=-14$, \ $1(-7)=-7$, \ $0(-7)=0$. Chaque fois que le premier facteur diminue de $1$, le produit \emph{augmente} de $7$.`,
        String.raw`\textbf{Prolonge la régularité :} $(-1)(-7)=7$, \ $(-2)(-7)=14$, \dots, \ $(-6)(-7)=42$.`,
        String.raw`\textbf{Vérification par la règle :} même signe $\Rightarrow$ positif, $6\times7=42$ \checkmark`], ans: "$42$" },
    { title: "Cinq facteurs négatifs", q: String.raw`Évalue $(-1)(-2)(-3)(-4)(-5)$.`,
      steps: [String.raw`\textbf{Règle :} un nombre pair de facteurs négatifs donne un produit positif, un nombre impair donne un produit négatif (les négatifs s'annulent deux par deux).`,
        String.raw`\textbf{Compte :} cinq facteurs négatifs --- un nombre impair --- donc le produit est négatif.`,
        String.raw`\textbf{Grandeur :} $1\times2\times3\times4\times5=120$.`,
        String.raw`\textbf{Vérifie deux à la fois :} $(-1)(-2)=2$, \ $2(-3)=-6$, \ $(-6)(-4)=24$, \ $24(-5)=-120$ \checkmark`], ans: "$-120$" },
    { title: "Diviser et vérifier", q: String.raw`Évalue $-54\div6$ et $-54\div(-6)$. Vérifie chaque réponse en multipliant.`,
      steps: [String.raw`\textbf{Règle :} $a\div b=q$ signifie $q\times b=a$; la division suit donc les mêmes règles des signes que la multiplication.`,
        String.raw`\textbf{$-54\div6$ :} signes contraires $\Rightarrow$ négatif; $54\div6=9$, donc $-9$. Vérification : $-9\times6=-54$ \checkmark`,
        String.raw`\textbf{$-54\div(-6)$ :} même signe $\Rightarrow$ positif : $9$. Vérification : $9\times(-6)=-54$ \checkmark`], ans: "$-9$ et $9$" },
    { title: "Le zéro dans une division", q: String.raw`Évalue, ou explique pourquoi c'est impossible : a) $0\div(-8)$ \quad b) $-8\div0$.`,
      steps: [String.raw`\textbf{Règle :} $a\div b=q$ exactement quand $q\times b=a$. Utilise-la pour tester chaque cas.`,
        String.raw`\textbf{a)} Il faut $q\times(-8)=0$. Cela fonctionne pour $q=0$, donc $0\div(-8)=0$.`,
        String.raw`\textbf{b)} Il faut $q\times0=-8$. Mais tout nombre multiplié par $0$ donne $0$, jamais $-8$; aucun $q$ n'existe donc.`,
        String.raw`\textbf{Conclusion :} diviser zéro, c'est possible; diviser \emph{par} zéro n'est pas défini.`], ans: "a) $0$ \\quad b) non défini" },
    { title: "La multiplication avant l'addition", q: String.raw`Évalue $-3+4(-5)$.`,
      steps: [String.raw`\textbf{Ordre (PEDMAS) :} la multiplication vient avant l'addition.`,
        String.raw`\textbf{Multiplie :} $4(-5)=-20$ (signes contraires).`,
        String.raw`\textbf{Additionne :} $-3+(-20)=-23$ (même signe : $3+20$, garde $-$).`,
        String.raw`\textbf{Vérifie le mauvais ordre :} $(-3+4)(-5)=-5$ donne une autre réponse; l'ordre compte donc.`], ans: "$-23$" },
    { title: "Parenthèses et exposants", q: String.raw`Évalue $(-12+4)\div(-2)-3^2$.`,
      steps: [String.raw`\textbf{Ordre :} Parenthèses, Exposants, Division/Multiplication, Addition/Soustraction.`,
        String.raw`\textbf{Parenthèses :} $-12+4=-8$.`,
        String.raw`\textbf{Exposant :} $3^2=9$.`,
        String.raw`\textbf{Divise :} $-8\div(-2)=4$ (même signe).`,
        String.raw`\textbf{Soustrais :} $4-9=-5$.`], ans: "$-5$" },
    { title: "Substituer un négatif", q: String.raw`Évalue $-2x^2+5x-1$ lorsque $x=-3$.`,
      steps: [String.raw`\textbf{Règle :} substitue entre parenthèses, pour que l'exposant agisse sur $-3$, et non seulement sur $3$.`,
        String.raw`\textbf{Substitue :} $-2(-3)^2+5(-3)-1$.`,
        String.raw`\textbf{Exposant :} $(-3)^2=9$, donc le premier terme vaut $-2(9)=-18$.`,
        String.raw`\textbf{Deuxième terme :} $5(-3)=-15$.`,
        String.raw`\textbf{Combine :} $-18+(-15)-1=-34$.`], ans: "$-34$" },
    { title: "Remonter à partir d'un pointage de concours", q: String.raw`Un concours accorde $+6$ pour une bonne réponse et $-2$ pour une mauvaise. Ali a répondu aux $18$ questions et a obtenu $60$. Combien de bonnes réponses Ali a-t-il eues?`,
      steps: [String.raw`\textbf{Pars d'un cas connu :} tout bon donne $18\times6=108$.`,
        String.raw`\textbf{Effet d'une mauvaise réponse :} changer une réponse de bonne à mauvaise fait passer de $+6$ à $-2$, une variation de $-2-6=-8$.`,
        String.raw`\textbf{Écart avec le pointage parfait :} $108-60=48$; le nombre de mauvaises réponses est donc $48\div8=6$.`,
        String.raw`\textbf{Bonnes réponses :} $18-6=12$.`,
        String.raw`\textbf{Vérification :} $12(6)+6(-2)=72-12=60$ \checkmark`], ans: "$12$ bonnes réponses" },
  ],
  problems: PROBLEMS,
};
