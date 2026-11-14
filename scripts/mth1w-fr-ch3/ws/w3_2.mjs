// Fiche 3.2 — Construire du code à partir d'étapes (édition de l'enseignant)
import { codeT, ct, out } from "./codekit.mjs";
import { raw } from "../../mth1w-ch2/ws/tikz2.mjs";
import { PROBLEMS } from "./p3_2.mjs";

const FLOW = raw(String.raw`\tikzset{b/.style={draw,rounded corners,minimum height=0.7cm,inner sep=4pt,font=\small},d/.style={draw,diamond,aspect=2.4,inner sep=1pt,font=\small}}
\node[b,fill=violet!8] (s) at (0,0) {Début};
\node[b,fill=blue!8] (i) at (0,-1.1) {pop = 5000, annees = 0};
\node[d,fill=orange!12] (q) at (0,-2.5) {pop $\le$ 8000?};
\node[b,fill=blue!8] (u) at (4.6,-2.5) {pop $\times$ 1.04, annees + 1};
\node[b,fill=green!10] (o) at (0,-3.9) {print(annees)};
\draw[->] (s) -- (i); \draw[->] (i) -- (q); \draw[->] (q) -- node[above,font=\scriptsize]{oui} (u); \draw[->] (u) |- (0,-1.7) -- (q.north); \draw[->] (q) -- node[right,font=\scriptsize]{non} (o);`,
  "Organigramme de l'exemple 7 : le losange de décision et la flèche qui remonte forment une boucle while.");

const E1 = `notes = [72, 85, 64, 90]
total = 0
for m in notes:
    total = total + m
print(total / len(notes))`;
const E2 = `for k in range(5, 30, 5):
    print(k, end=" ")`;
const E3 = `for t in range(10, 0, -3):
    print(t, end=" ")`;
const E4 = `def billet(age):
    if age < 12:
        return 8
    elif age >= 65:
        return 10
    else:
        return 15

print(billet(9), billet(40), billet(70))`;
const E5 = `p = 1
for k in range(1, 7):
    p = p * k
print(p)`;
const E6 = `compteur = 0
for n in range(1, 201):
    if n % 7 == 0 and n % 2 == 1:
        compteur = compteur + 1
print(compteur)`;
const E7 = `pop = 5000
annees = 0
while pop <= 8000:
    pop = pop * 1.04
    annees = annees + 1
print(annees)`;
const E8 = `dose = 400
heures = 0
while dose >= 20:
    dose = dose / 2
    heures = heures + 6
print(heures, dose)`;
const E9 = `n = 1
while n * n <= 2000:
    n = n + 1
print(n)`;

export const WS = {
  code: "3.2",
  title: "Construire du code à partir d'étapes",
  bigideas: String.raw`Un \textbf{algorithme} est une liste ordonnée d'étapes. Pour en écrire un, \textbf{décompose} le problème en entrée, traitement et sortie, planifie-le avec des mots ou un organigramme, puis code-le avec trois structures : la \textbf{séquence}, la \textbf{sélection} (${ct("if/elif/else")}) et la \textbf{répétition} (${ct("for")}, ${ct("while")}). Les accumulateurs et les compteurs transforment les boucles en totaux et en dénombrements; les boucles while répondent aux questions « combien de temps avant que\ldots? »; et les boucles peuvent chercher des solutions.`,
  goals: [
    "Décomposer un problème en entrée, traitement et sortie; tracer un organigramme.",
    String.raw`Utiliser ${ct("if/elif/else")} pour des règles qui changent (règles définies par parties).`,
    String.raw`Utiliser ${ct("for")} avec ${ct("range(debut, fin, pas)")} et des boucles ${ct("while")}.`,
    "Utiliser des accumulateurs (totaux cumulatifs, produits) et des compteurs.",
    "Modéliser des situations de croissance, de décroissance et d'épargne, et chercher des solutions avec des boucles.",
  ],
  curriculum: "C2.2",
  vocab: [
    ["Algorithme", "des étapes ordonnées qui résolvent un problème"],
    ["Sélection", "choisir un chemin à l'aide d'une condition"],
    ["Répétition", "une boucle : for (nombre fixe de fois) ou while (jusqu'à ce qu'une condition devienne fausse)"],
    ["Accumulateur", String.raw`variable mise à jour à chaque passage : ${ct("total = total + k")}`],
    ["Compteur", String.raw`variable qui compte des événements : ${ct("compteur = compteur + 1")}`],
  ],
  hook: String.raw`Demande à un ou une volontaire de donner des « instructions de robot » pour faire une rôtie, pendant qu'un autre élève les suit \emph{à la lettre}. Le pain se retrouve dans le grille-pain, encore dans son sac. Discutez : un ordinateur fait exactement ce qu'on lui dit, exactement dans cet ordre. Ensuite, faites ensemble la liste des entrées, des étapes et des sorties d'un vrai problème : « Combien de semaines avant de pouvoir me payer un téléphone de 600 \$ si j'ai 150 \$ et que j'épargne 35 \$ par semaine? »`,
  concepts: [
    ["1. Décomposer et planifier", String.raw`\begin{center}\begin{tabular}{lll}\toprule Partie & En mots & En code\\\midrule Entrée & montant de départ, épargne hebdomadaire, objectif & ${ct("argent = 150")}\\ Traitement & ajouter une semaine jusqu'à ce que l'objectif soit atteint & ${ct("while argent < 600:")}\\ Sortie & le nombre de semaines & ${ct("print(semaines)")}\\\bottomrule\end{tabular}\end{center}
${FLOW}`],
    ["2. La répétition", String.raw`\begin{center}\begin{tabular}{lll}\toprule Boucle & Valeurs / sens & À utiliser quand\\\midrule ${ct("range(1, 6)")} & $1,2,3,4,5$ & un nombre connu de fois\\ ${ct("range(0, 20, 5)")} & $0,5,10,15$ & compter par bonds\\ ${ct("range(9, 0, -3)")} & $9,6,3$ & compter à rebours\\ ${ct("while cond:")} & se répète tant que cond est vraie & questions « jusqu'à ce que \ldots »\\\bottomrule\end{tabular}\end{center}
La valeur de fin d'un range n'est jamais incluse. Une boucle while doit changer une variable de sa condition.`],
    ["3. La sélection", String.raw`Python vérifie les conditions à partir du haut et exécute \textbf{seulement la première} branche vraie. Une règle définie par parties, comme les prix d'entrée (enfant, adulte, aîné), a besoin de ${ct("if")}, ${ct("elif")}, ${ct("else")}. Les conditions peuvent être combinées avec ${ct("and")} (et), ${ct("or")} (ou), ${ct("not")} (non).`],
    ["4. Accumulateurs, compteurs et recherche", String.raw`Un accumulateur commence à $0$ (somme) ou à $1$ (produit) et est mis à jour à chaque passage. Un compteur ajoute $1$ quand une condition est vraie. Une boucle de recherche teste des valeurs jusqu'à ce que l'une d'elles convienne; elle trouve seulement les valeurs qu'elle teste.`],
  ],
  tips: [
    String.raw`Demande aux élèves de faire la liste des valeurs d'un range \emph{avant} d'exécuter le code; les erreurs de décalage de un sont les erreurs les plus fréquentes.`,
    "Boucles infinies : demande « qu'est-ce qui change la variable de la condition? »",
    String.raw`Dans les chaînes ${ct("if/elif")}, l'ordre compte : teste ${ct("age >= 65")} avant ${ct("age >= 12")}, et non après.`,
    "Associe chaque réponse obtenue avec une boucle à une vérification algébrique (une inéquation ou une formule).",
    "Les organigrammes valent le temps qu'on y met : les erreurs dans le plan coûtent moins cher à corriger que les erreurs dans le code.",
  ],
  examples: [
    { title: "La moyenne d'une liste", q: String.raw`Qu'affiche ce programme?${codeT(E1)}`,
      steps: [String.raw`\textbf{Formule :} moyenne $=\dfrac{\text{somme des valeurs}}{\text{nombre de valeurs}}$; le programme additionne la liste et divise par sa longueur.`, String.raw`Total $72+85+64+90=311$.`, String.raw`$311\div4=77.75$.`, String.raw`\textbf{Vraisemblance :} $77.75$ se situe entre la note la plus basse ($64$) et la plus haute ($90$) \checkmark`], ans: ct(out(E1)) },
    { title: "Compter par bonds", q: String.raw`Qu'affiche ce programme?${codeT(E2)}`,
      steps: [String.raw`\textbf{Règle :} ${ct("range(debut, fin, pas)")} commence à debut, ajoute pas à chaque fois et s'arrête \emph{avant} d'atteindre fin.`, String.raw`On commence à $5$, on ajoute $5$, on s'arrête avant $30$.`, String.raw`\textbf{Vérification :} $30$ n'est pas affiché, parce que le range s'arrête avant $30$ \checkmark`], ans: ct(out(E2).trim()) },
    { title: "Compter à rebours", q: String.raw`Qu'affiche ce programme?${codeT(E3)}`,
      steps: [String.raw`\textbf{Règle :} un pas négatif compte à rebours; le range s'arrête quand même \emph{avant} la valeur de fin.`, String.raw`On commence à $10$, on soustrait $3$, on s'arrête avant $0$.`, String.raw`\textbf{Vérification :} $10,7,4,1$; la valeur suivante serait $-2$, qui dépasse $0$ \checkmark`], ans: ct(out(E3).trim()) },
    { title: "Une sélection à trois branches", q: String.raw`Qu'affiche ce programme?${codeT(E4)}`,
      steps: [String.raw`\textbf{Règle :} ${ct("if/elif/else")} teste les conditions dans l'ordre et exécute seulement la première qui est vraie.`, String.raw`$9<12$ : $8$. $40$ : aucune des deux conditions, donc $15$. $70\ge65$ : $10$.`], ans: ct(out(E4)) },
    { title: "Un accumulateur de produit", q: String.raw`Qu'affiche ce programme? Que calcule-t-il?${codeT(E5)}`,
      steps: [String.raw`\textbf{Modèle :} on commence le produit à $1$ (multiplier par $1$ ne change rien), puis on multiplie par chaque valeur à tour de rôle.`, String.raw`$p=1\times2\times3\times4\times5\times6$.`, String.raw`C'est $6!$ (« factorielle 6 »).`, String.raw`\textbf{Valeur :} $1\cdot2\cdot3\cdot4\cdot5\cdot6=720$ \checkmark`], ans: ct(out(E5)) },
    { title: "Un compteur avec deux conditions", q: String.raw`Combien y a-t-il de multiples impairs de $7$ de $1$ à $200$?${codeT(E6)}`,
      steps: [String.raw`\textbf{Logique :} ${ct("and")} exige les deux conditions : un multiple de $7$ \emph{et} impair.`, String.raw`Multiples de $7$ jusqu'à $200$ : $28$ ($7\times28=196$).`, String.raw`Un sur deux est impair : $7, 21, 35,\dots$ : $14$.`, String.raw`\textbf{Pourquoi la moitié :} les multiples de $7$ alternent impair, pair, impair, \dots, et les $28$ se partagent en $14$ impairs et $14$ pairs \checkmark`], ans: ct(out(E6)) },
    { title: "La croissance d'une population", q: String.raw`Une ville de $5000$ habitants croît de $4\%$ par année. Combien d'années faut-il pour qu'elle dépasse $8000$ habitants?${codeT(E7)}`,
      steps: [String.raw`\textbf{Modèle :} croître de $4\%$ garde $100\%$ et ajoute $4\%$, donc chaque année multiplie par $1.04$ : $P=5000(1.04)^n$.`, String.raw`La boucle multiplie par $1.04$ chaque année tant que la population est d'au plus $8000$.`, String.raw`$1.04^{12}\approx1.60$, donc après $12$ ans, $5000\times1.601\approx8005$.`, String.raw`\textbf{Vérifie l'année précédente :} $5000(1.04)^{11}\approx7697\le8000$, donc $11$ ans ne suffisent pas \checkmark`], ans: String.raw`${ct(out(E7))} ans` },
    { title: "Diviser par deux", q: String.raw`Une dose de $400$ mg diminue de moitié toutes les $6$ heures. Combien de temps faut-il pour qu'il reste moins de $20$ mg?${codeT(E8)}`,
      steps: [String.raw`\textbf{Modèle :} toutes les $6$ heures, la quantité est multipliée par $\frac12$; la boucle compte les divisions par deux jusqu'à ce que la dose soit inférieure à $20$ mg.`, String.raw`$400\to200\to100\to50\to25\to12.5$.`, String.raw`Cinq divisions par deux, $5\times6=30$ heures.`, String.raw`\textbf{Vérification :} après $4$ divisions, $25\ge20$; après $5$ divisions, $12.5<20$ \checkmark`], ans: ct(out(E8)) },
    { title: "Chercher une limite", q: String.raw`Trouve le plus petit nombre naturel $n$ tel que $n^2>2000$.${codeT(E9)}`,
      steps: [String.raw`\textbf{Méthode :} la boucle essaie $n=1,2,3,\dots$ et s'arrête au premier $n$ tel que $n^2>2000$. Estime d'abord : $\sqrt{2000}\approx44.7$.`, String.raw`$44^2=1936$, $45^2=2025$.`, String.raw`\textbf{Conclusion :} $44^2\le2000<45^2$, donc le plus petit $n$ qui convient est $45$ \checkmark`], ans: ct(out(E9)) },
  ],
  problems: PROBLEMS,
};
