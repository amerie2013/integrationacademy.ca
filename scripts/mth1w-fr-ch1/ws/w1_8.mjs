// Fiche 1.8 — Travailler avec des rapports et des proportions (édition de l'enseignant)
import { tape, doubleLine, mapScale } from "./tikz.mjs";
import { PROBLEMS } from "./p1_8.mjs";

export const WS = {
  code: "1.8",
  title: "Travailler avec des rapports et des proportions",
  bigideas: String.raw`Un \textbf{rapport} compare des quantités exprimées dans la \emph{même} unité; l'ordre compte. Multiplier ou diviser chaque terme par le même nombre donne un \textbf{rapport équivalent} --- la « recette » reste la même. Une égalité entre deux rapports est une \textbf{proportion}; on la résout à l'aide d'un facteur d'échelle, d'une valeur unitaire ou du produit croisé.`,
  goals: [
    "Écrire des rapports sous trois formes et distinguer partie à partie et partie au tout.",
    "Simplifier des rapports, y compris des rapports à trois termes et des rapports de décimaux ou de fractions.",
    "Utiliser des tables de rapports et des doubles droites numériques pour trouver des rapports équivalents.",
    "Résoudre des proportions à l'aide d'un facteur d'échelle, d'une valeur unitaire et du produit croisé.",
    "Partager des quantités selon un rapport donné et résoudre des problèmes de cartes et de dessins à l'échelle.",
  ],
  curriculum: "B3.5",
  vocab: [
    ["Rapport", "une comparaison de quantités dans la même unité : $a:b$, $a$ pour $b$, $\\frac ab$"],
    ["Partie à partie / partie au tout", "compare deux parties / compare une partie au total"],
    ["Rapports équivalents", "rapports qui comparent de la même façon : $3:4=9:12$"],
    ["Proportion", "une égalité de deux rapports : $\\frac{x}{15}=\\frac{2}{5}$"],
    ["Échelle", "le rapport d'une longueur du dessin à la longueur réelle, p.\\ ex.\\ $1:50\\,000$"],
  ],
  hook: String.raw`Prépare deux verres de boisson à l'orange devant la classe : le verre A avec $2$ mesures de poudre dans $3$ tasses d'eau, le verre B avec $3$ mesures dans $5$ tasses. Demande : « Lequel est le plus fort? » Les élèves débattent : « B a plus de poudre! » « A a moins d'eau! » Réécris les deux en mesures par tasse ($0.67$ contre $0.6$) ou avec un terme commun ($10:15$ contre $9:15$). Comparer des rapports exige des rapports équivalents --- c'est la leçon d'aujourd'hui.`,
  concepts: [
    ["1. Écrire des rapports", String.raw`${tape([{ n: 3, label: "3 rouges", color: "red" }, { n: 5, label: "5 bleues", color: "blue" }], { unit: 0.9, total: "8 billes au total" })}
\textbf{Partie à partie :} rouges : bleues $=3:5$. \quad \textbf{Partie au tout :} rouges : total $=3:8$; donc $\frac38$ des billes sont rouges.\\
L'ordre compte : bleues : rouges donne $5:3$. Les unités doivent être les mêmes : $40$ cm pour $2$ m donne $40:200=1:5$.`],
    ["2. Rapports équivalents et forme la plus simple", String.raw`Multiplie ou divise \emph{chaque} terme par le même nombre non nul.
\[24:36:60=2:3:5\ (\div12)\qquad 1.5:0.6=15:6=5:2\ (\times10,\ \div3)\qquad \tfrac12:\tfrac23=3:4\ (\times6)\]
Un rapport est sous sa forme la plus simple quand ses termes sont des nombres entiers sans facteur commun autre que $1$.`],
    ["3. Tables de rapports et doubles droites numériques", String.raw`Une couleur de peinture se mélange avec $3$ pots de bleu pour $4$ pots de blanc.
\begin{center}\begin{tabular}{c|cccccc}bleu & 3 & 6 & 9 & 12 & 15 & 18\\\hline blanc & 4 & 8 & 12 & 16 & 20 & 24\end{tabular}\end{center}
${doubleLine(3, 4, 6, { top: "pots de bleu", bottom: "pots de blanc", mark: 4, caption: "Les graduations correspondantes s'alignent : 12 pots de bleu vont avec 16 pots de blanc." })}`],
    ["4. Résoudre des proportions", String.raw`Pour résoudre $\frac{x}{14}=\frac{9}{21}$ :
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \textbf{Simplifier puis mettre à l'échelle :} $\frac{9}{21}=\frac37$, et $7\times2=14$, donc $x=3\times2=6$.
\item \textbf{Produit croisé :} $21x=9\times14=126$, donc $x=6$. Fonctionne toujours, même avec des décimaux.
\item \textbf{Valeur unitaire :} trouve la valeur pour $1$ partie, puis multiplie.
\end{itemize}
Vérifie en substituant : $\frac{6}{14}=\frac37$ \checkmark`],
    ["5. Partager selon un rapport", String.raw`Pour partager une quantité selon le rapport $a:b$ : trouve le nombre total de parties, la valeur d'une partie, puis chaque part.
${tape([{ n: 2, label: "Ali : 2 parties", color: "blue" }, { n: 5, label: "Bea : 5 parties", color: "amber" }], { unit: 1.1, total: "$140$ dollars $\\div7$ parties $=20$ dollars par partie" })}
Ali reçoit $2\times20=40$ dollars et Bea reçoit $5\times20=100$ dollars.`],
    ["6. Dessins à l'échelle et cartes", String.raw`Une échelle de $1:200\,000$ signifie que $1$ cm sur la carte représente $200\,000$ cm $=2$ km dans la réalité.
${mapScale({ cm: 7, scaleText: "$1:200\\,000$", from: "Ville A", to: "Ville B", caption: "7 cm sur la carte $\\times200\\,000=1\\,400\\,000$ cm $=14$ km." })}`],
  ],
  tips: [
    String.raw`Garde le même ordre dans une proportion : si le premier rapport est garçons/filles, le second l'est aussi.`,
    String.raw`Dans les problèmes de partage, le total est la \emph{somme} des parties ($2+5=7$), et non la différence.`,
    String.raw`Les rapports relèvent de la multiplication, pas de l'addition : $2:3$ et $4:5$ « diffèrent tous deux de $1$ », mais ne sont pas équivalents.`,
    String.raw`Convertis dans la même unité avant d'écrire un rapport; le rapport lui-même n'a alors pas d'unité.`,
    String.raw`Pour les échelles de cartes, convertis les centimètres en kilomètres à la fin ($100\,000$ cm $=1$ km).`,
  ],
  examples: [
    { title: "Partie à partie et partie au tout", q: String.raw`Un sac contient $9$ bonbons verts et $15$ bonbons jaunes. Écris verts : jaunes et verts : total sous leur forme la plus simple.`,
      fig: tape([{ n: 3, label: "verts : 3 groupes de 3", color: "green" }, { n: 5, label: "jaunes : 5 groupes de 3", color: "amber" }], { unit: 0.9 }),
      steps: [String.raw`\textbf{Définitions :} partie à partie compare deux groupes; partie au tout compare un groupe au total. Simplifie en divisant chaque terme par le PGCD.`, String.raw`$9:15$, divise par $3$ : $3:5$.`, String.raw`Total $24$; $9:24=3:8$.`, String.raw`\textbf{Vérification :} les parties $3+5$ donnent le tout $8$ \checkmark`], ans: String.raw`$3:5$ et $3:8$` },
    { title: "Rapport à trois termes", q: String.raw`Simplifie $48:36:60$.`, steps: [String.raw`\textbf{Règle :} divise \emph{chaque} terme par le même nombre. $48=2^4\cdot3$, $36=2^2\cdot3^2$, $60=2^2\cdot3\cdot5$; le facteur commun est $2^2\cdot3$.`, String.raw`Le PGCD de $48,36,60$ est $12$.`, String.raw`$4:3:5$.`, String.raw`\textbf{Vérification :} $4\times12=48$, $3\times12=36$, $5\times12=60$, et $4,3,5$ n'ont aucun facteur commun \checkmark`], ans: "$4:3:5$" },
    { title: "Décimaux et fractions", q: String.raw`Simplifie $0.6:1.5$ et $\frac34:\frac16$.`, steps: [String.raw`\textbf{Règle :} $a:b=ka:kb$. Multiplie par $10$ pour éliminer une décimale, ou par le PPCD pour éliminer les fractions.`, String.raw`$\times10$ : $6:15=2:5$.`, String.raw`$\times12$ (PPCD) : $9:2$.`, String.raw`\textbf{Vérification :} $\frac{0.6}{1.5}=0.4=\frac25$ \checkmark \ et \ $\frac34\div\frac16=\frac34\times6=\frac92$ \checkmark`], ans: String.raw`$2:5$ et $9:2$` },
    { title: "Utiliser une double droite numérique", q: String.raw`La peinture se mélange avec $3$ pots de bleu pour $4$ pots de blanc. Combien de pots de blanc vont avec $12$ pots de bleu?`,
      fig: doubleLine(3, 4, 5, { top: "bleu", bottom: "blanc", mark: 4 }), steps: [String.raw`\textbf{Règle :} des rapports équivalents multiplient les deux termes par le même facteur d'échelle : $3:4=3k:4k$.`, String.raw`$12=3\times4$; le facteur d'échelle est donc $4$.`, String.raw`Blanc : $4\times4=16$.`, String.raw`\textbf{Vérification :} $12:16$ divisé par $4$ donne $3:4$ \checkmark`], ans: "$16$ pots" },
    { title: "Proportion à l'aide d'un facteur d'échelle", q: String.raw`Résous $\dfrac{7}{x}=\dfrac{21}{30}$.`, steps: [String.raw`\textbf{Règle :} dans des rapports égaux, le haut et le bas sont multipliés par le même facteur. Trouve ce facteur à partir de la paire connue.`, String.raw`$7\times3=21$, donc $x\times3=30$.`, String.raw`$x=10$. Vérifie : $\frac{7}{10}=\frac{21}{30}$.`], ans: "$x=10$" },
    { title: "Proportion à l'aide du produit croisé", q: String.raw`Résous $5:8=x:20$.`, steps: [String.raw`\textbf{Règle :} $\dfrac ab=\dfrac cd\Rightarrow ad=bc$ (multiplie les deux membres par $bd$).`, String.raw`$\frac58=\frac{x}{20}$, donc $8x=100$.`, String.raw`$x=12.5$.`, String.raw`\textbf{Vérification :} $\frac{12.5}{20}=0.625=\frac58$ \checkmark`], ans: "$x=12.5$" },
    { title: "Partager de l'argent", q: String.raw`Partage $168$ dollars selon le rapport $2:5$.`, fig: tape([{ n: 2, label: "2 parties", color: "blue" }, { n: 5, label: "5 parties", color: "amber" }], { unit: 1, total: "$168$ dollars" }),
      steps: [String.raw`\textbf{Méthode :} un rapport $2:5$ divise le total en $2+5$ parties égales; trouve d'abord une partie.`, String.raw`$7$ parties; une partie $=168\div7=24$.`, String.raw`$2\times24=48$ et $5\times24=120$. Vérification : $48+120=168$.`], ans: "$48$ dollars et $120$ dollars" },
    { title: "Distance sur une carte", q: String.raw`Sur une carte à l'échelle $1:250\,000$, deux lacs sont à $6.4$ cm l'un de l'autre. Quelle est la distance qui les sépare, en km?`, fig: mapScale({ cm: 6.4, scaleText: "$1:250\\,000$", from: "Lac 1", to: "Lac 2" }),
      steps: [String.raw`\textbf{Signification :} $1:250\,000$ signifie que $1$ cm sur la carte représente $250\,000$ cm sur le terrain. De plus, $1$ km $=1000$ m $=100\,000$ cm.`, String.raw`$6.4\times250\,000=1\,600\,000$ cm.`, String.raw`$\div100\,000$ : $16$ km.`, String.raw`\textbf{Vérification :} $1$ cm $=2.5$ km, donc $6.4$ cm $=6.4\times2.5=16$ km \checkmark`], ans: "$16$ km" },
    { title: "Quand un rapport change", q: String.raw`Deux groupes sont dans le rapport $7:4$. Après l'arrivée de $9$ personnes dans le deuxième groupe, les deux groupes sont égaux. Combien de personnes chaque groupe compte-t-il au départ?`, steps: [String.raw`\textbf{Méthode :} un rapport $7:4$ signifie que les groupes comptent $7k$ et $4k$ personnes pour un certain nombre $k$ (la taille d'une partie).`, String.raw`Écris les groupes sous la forme $7k$ et $4k$.`, String.raw`Après le changement, ils sont égaux : $7k=4k+9$.`, String.raw`Soustrais $4k$ des deux membres : $3k=9$, donc $k=3$.`, String.raw`Au départ, les groupes comptent $21$ et $12$ personnes. Vérification : $12+9=21$.`], ans: "$21$ et $12$" },
  ],
  problems: PROBLEMS,
};
