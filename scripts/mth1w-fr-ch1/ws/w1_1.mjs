// Fiche 1.1 — Les ensembles de nombres et leurs sous-ensembles (édition de l'enseignant, un PDF avec corrigé)
import { numberSets, numberLine, raw } from "./tikz.mjs";
import { PROBLEMS } from "./p1_1.mjs";

const ROOTS = numberLine({ min: 0, max: 10, dots: [
  { at: Math.sqrt(2), label: "$\\sqrt2$", color: "red" }, { at: Math.sqrt(10), label: "$\\sqrt{10}$", color: "red" },
  { at: Math.sqrt(30), label: "$\\sqrt{30}$", color: "red" }, { at: 7, label: "$\\sqrt{49}$", color: "blue" }, { at: Math.sqrt(85), label: "$\\sqrt{85}$", color: "red" }], unit: 1.5,
  caption: "Les racines de carrés parfaits (en bleu) tombent sur des entiers; les autres (en rouge) se situent entre deux entiers." });

const TIMELINE = raw(String.raw`\draw[thick,->] (0,0) -- (15.5,0);
\foreach \x/\yr/\t/\c in {0.6/{v.\ 300 av.\ J.-C.}/{Babylone : une marque pour une position vide}/orange!85!black, 4.2/{v.\ 200 av.\ J.-C.--200 apr.\ J.-C.}/{Chine, \emph{Neuf chapitres} : baguettes rouges et noires pour les gains et les dettes}/red!75!black, 8.3/{v.\ IV\textsuperscript{e} siècle}/{Mayas : un coquillage comme symbole du zéro}/green!50!black, 11.6/{628}/{Inde, Brahmagupta : règles pour le zéro et les négatifs}/blue!70!black, 14.4/{années 1600}/{L'Europe accepte enfin les négatifs}/violet!80!black}
{\fill[\c] (\x,0) circle (3pt); \node[above,font=\scriptsize\bfseries,\c] at (\x,0.15) {\yr}; \node[below,font=\tiny,text width=2.9cm,align=center] at (\x,-0.15) {\t};}`,
  "Le zéro et les nombres négatifs sont venus de différentes cultures sur plus de deux mille ans.");

export const WS = {
  code: "1.1",
  title: "Les ensembles de nombres et leurs sous-ensembles",
  bigideas: String.raw`Les nombres sont organisés en familles emboîtées les unes dans les autres : $\mathbb{N}\subset\mathbb{W}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$. Un nombre est \textbf{rationnel} quand il peut s'écrire $\frac{a}{b}$, où $a,b$ sont des entiers ($b\neq0$) --- ce sont exactement les nombres dont le développement décimal est fini ou périodique. Tout autre nombre réel est \textbf{irrationnel}. Il faut toujours \emph{simplifier avant de classer}.`,
  goals: [
    String.raw`Nommer et décrire les nombres naturels, entiers non négatifs, entiers, rationnels, irrationnels et réels, et utiliser les symboles $\mathbb{N},\mathbb{W},\mathbb{Z},\mathbb{Q},\mathbb{R}$.`,
    "Classer n'importe quel nombre dans tous les ensembles auxquels il appartient (en le simplifiant d'abord au besoin).",
    "Convertir des décimaux finis et périodiques en fractions pour prouver qu'ils sont rationnels.",
    "Situer et estimer sur une droite numérique la racine carrée d'un nombre qui n'est pas un carré parfait.",
    "Utiliser des contre-exemples pour vérifier des énoncés sur les ensembles de nombres, et raconter l'histoire du zéro et des nombres négatifs (B1.1).",
  ],
  curriculum: "B1.1, B1.2",
  vocab: [
    ["Naturels $\\mathbb{N}$", "les nombres qui servent à compter $1,2,3,\\dots$"],
    ["Entiers non négatifs $\\mathbb{W}$", "les nombres naturels et $0$"],
    ["Entiers $\\mathbb{Z}$", "les entiers non négatifs et leurs opposés $\\dots,-2,-1,0,1,2,\\dots$"],
    ["Rationnels $\\mathbb{Q}$", "tout nombre qui peut s'écrire $\\frac{a}{b}$, $a,b$ entiers, $b\\neq0$; son développement décimal est fini ou périodique"],
    ["Irrationnels", "un nombre réel qui n'est pas rationnel; son développement décimal ne se termine jamais et ne se répète jamais"],
    ["Sous-ensemble $\\subset$", "chaque élément du premier ensemble appartient aussi au deuxième"],
    ["Contre-exemple", "un seul exemple qui montre qu'un énoncé général est faux"],
  ],
  hook: String.raw`Écris quatre questions au tableau et demande quelle sorte de nombre peut répondre à chacune : \emph{Combien y a-t-il d'élèves dans cette classe?} \quad \emph{Quelle est la température à Thunder Bay en janvier?} \quad \emph{Quelle partie de la pizza reste-t-il?} \quad \emph{Quelle est la longueur de la diagonale d'une tuile carrée de $1$ m de côté?} Les élèves remarqueront qu'il leur faut de plus en plus de sortes de nombres --- les nombres pour compter, les négatifs, les fractions et enfin $\sqrt2\approx1.414\ldots$, qui n'est pas du tout une fraction. Toute la leçon tient dans ces quatre questions.`,
  concepts: [
    ["1. La famille des nombres", String.raw`Chaque ensemble est construit à partir du précédent en y ajoutant une nouvelle sorte de nombre.
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item \textbf{Naturels} $\mathbb{N}=\{1,2,3,\dots\}$ --- pour compter.
\item \textbf{Entiers non négatifs} $\mathbb{W}=\{0,1,2,\dots\}$ --- on ajoute zéro.
\item \textbf{Entiers} $\mathbb{Z}=\{\dots,-2,-1,0,1,2,\dots\}$ --- on ajoute les opposés.
\item \textbf{Rationnels} $\mathbb{Q}$ --- tous les quotients $\frac{a}{b}$ d'entiers ($b\neq0$). Tout entier est rationnel : $-6=\frac{-6}{1}$.
\item \textbf{Irrationnels} --- les nombres réels qui \emph{ne sont pas} rationnels, comme $\sqrt2$, $\sqrt{13}$, $\pi$.
\item \textbf{Réels} $\mathbb{R}$ --- les rationnels et les irrationnels réunis : tous les points de la droite numérique.
\end{itemize}
${numberSets([{ set: "N", label: "$1$" }, { set: "N", label: "$58$" }, { set: "W", label: "$0$" }, { set: "Z", label: "$-3$" }, { set: "Z", label: "$-41$" }, { set: "Q", label: "$\\frac{2}{9}$" }, { set: "Q", label: "$-0.5$" }, { set: "Q", label: "$0.\\overline{3}$" }, { set: "I", label: "$\\sqrt{2}$" }, { set: "I", label: "$\\pi$" }, { set: "I", label: "$\\sqrt{17}$" }], "Un nombre appartient à sa propre boîte et à toutes les boîtes qui l'entourent. Rationnels et irrationnels ne se chevauchent jamais.")}
\textbf{Note à l'enseignant.} Demande : « Quelle est la plus petite boîte qui contient $-3$? » (les entiers). Puis : « Dans quelles autres boîtes se trouve-t-il? » (rationnels, réels). Les élèves doivent nommer \emph{tous} les ensembles, et pas seulement un.`],
    ["2. Le développement décimal indique la famille", String.raw`\begin{center}\begin{tabular}{lll}\toprule
\textbf{Type de décimal} & \textbf{Exemple} & \textbf{Rationnel?}\\\midrule
fini & $0.375=\frac{375}{1000}=\frac38$ & oui\\
périodique & $0.\overline{6}=0.666\ldots=\frac23$ & oui\\
infini et non périodique & $\sqrt3=1.7320508\ldots$ & non --- irrationnel\\\bottomrule\end{tabular}\end{center}
\textbf{Décimal fini $\to$ fraction :} la valeur de position du dernier chiffre donne le dénominateur : $0.48=\frac{48}{100}=\frac{12}{25}$.\\
\textbf{Décimal périodique $\to$ fraction :} appelle le nombre $x$. Si $n$ chiffres se répètent, multiplie par $10^n$ pour aligner les parties qui se répètent, puis soustrais :
\[x=0.\overline{72},\quad 100x=72.\overline{72},\quad 100x-x=72,\quad 99x=72,\quad x=\tfrac{72}{99}=\tfrac{8}{11}.\]
\textbf{Raccourci à expliquer :} un bloc de $n$ chiffres qui se répètent se place sur $n$ neuf : $0.\overline{5}=\frac59$, $0.\overline{123}=\frac{123}{999}$.`],
    ["3. Racines carrées : carré parfait ou non?", String.raw`$\sqrt{n}$ est rationnel \emph{seulement} si $n$ est un carré parfait ($1,4,9,16,25,36,49,64,81,100,\dots$). Sinon, il est irrationnel --- mais on peut quand même le situer entre deux entiers consécutifs en trouvant les carrés parfaits de part et d'autre : $25<30<36$, donc $5<\sqrt{30}<6$, et puisque $30$ est plus près de $25$, $\sqrt{30}$ est un peu inférieur à $5.5$ (il vaut $5.477\ldots$).
${ROOTS}`],
    ["4. Sous-ensembles, énoncés « tous » et contre-exemples", String.raw`Un énoncé comme « tout entier non négatif est un entier » est \textbf{vrai}, car $\mathbb{W}\subset\mathbb{Z}$. Un énoncé comme « tout nombre rationnel est un entier » est \textbf{faux} : un seul contre-exemple, $\frac12$, suffit. Les élèves doivent apprendre les deux démarches :
\begin{itemize}[leftmargin=*,itemsep=1pt]
\item pour montrer qu'un énoncé est \textbf{vrai}, expliquer pourquoi il est vrai dans \emph{tous} les cas (à l'aide des définitions ou du diagramme emboîté);
\item pour montrer qu'il est \textbf{faux}, donner \emph{un} exemple précis où il échoue.
\end{itemize}`],
    ["5. L'histoire du zéro et des nombres négatifs (B1.1)", String.raw`${TIMELINE}
Les nombres négatifs et le zéro n'étaient pas « évidents ». Les mathématiciens chinois équilibraient les dettes et les gains avec des baguettes de couleur; le mathématicien indien Brahmagupta a écrit les premières règles de calcul avec le zéro et les négatifs (par exemple, « une dette moins zéro est une dette »). \textbf{Aujourd'hui :} les négatifs décrivent les températures, les altitudes et les soldes bancaires; le zéro fait fonctionner la valeur de position ($205$ et $25$); les ordinateurs stockent tout avec des $0$ et des $1$. \emph{Tâche en classe :} demande à chaque élève de trouver une utilisation actuelle d'un nombre négatif ou du zéro et de l'expliquer en deux phrases.`],
  ],
  tips: [
    String.raw`Les élèves oublient de \textbf{simplifier d'abord} : $\sqrt{64}$, $\frac{-15}{5}$ et $4.0$ sont tous des entiers.`,
    String.raw`« Zéro est un nombre naturel » --- non : dans ce cours, $\mathbb{N}$ commence à $1$; $0$ est le premier entier non négatif.`,
    String.raw`Un long affichage de calculatrice ne prouve pas qu'un nombre est irrationnel. $\frac{1}{7}=0.142857142857\ldots$ semble aléatoire, mais il se répète tous les 6 chiffres.`,
    String.raw`$\frac{22}{7}$ et $3.14$ sont des \emph{approximations} rationnelles de $\pi$; $\pi$ lui-même est irrationnel.`,
    String.raw`Les fractions négatives sont rationnelles : $-\frac34=\frac{-3}{4}$. Rationnel ne veut pas dire positif.`,
  ],
  examples: [
    { title: "Tableau d'appartenance", q: String.raw`Donne tous les ensembles auxquels appartiennent $15$, $-9$ et $0$.`,
      fig: numberSets([{ set: "N", label: "$15$" }, { set: "W", label: "$0$" }, { set: "Z", label: "$-9$" }]),
      steps: [String.raw`\textbf{Définitions :} $\mathbb{N}=\{1,2,3,\dots\}$, $\mathbb{W}=\{0,1,2,\dots\}$, $\mathbb{Z}=\{\dots,-1,0,1,\dots\}$, $\mathbb{Q}=$ quotients $\frac ab$ d'entiers ($b\ne0$), et $\mathbb{N}\subset\mathbb{W}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}$.`,
        String.raw`\textbf{$15$ :} un nombre qui sert à compter, donc $15\in\mathbb{N}$. Tout ensemble qui contient $\mathbb{N}$ contient aussi $15$ : entiers non négatifs, entiers, rationnels, réels.`,
        String.raw`\textbf{$-9$ :} négatif, donc ni dans $\mathbb{N}$ ni dans $\mathbb{W}$. C'est un entier, et $-9=\frac{-9}{1}$; il est donc rationnel et réel.`,
        String.raw`\textbf{$0$ :} ne sert pas à compter, donc il n'est pas naturel; c'est le premier entier non négatif, donc il est dans $\mathbb{W}$ et dans tous les ensembles plus grands.`,
        String.raw`\textbf{Vérification :} chaque nombre se trouve dans son plus petit ensemble du diagramme et dans chaque anneau qui l'entoure \checkmark`],
      ans: String.raw`$15$ : $\mathbb{N},\mathbb{W},\mathbb{Z},\mathbb{Q},\mathbb{R}$; \ $-9$ : $\mathbb{Z},\mathbb{Q},\mathbb{R}$; \ $0$ : $\mathbb{W},\mathbb{Z},\mathbb{Q},\mathbb{R}$` },
    { title: "Simplifier avant de classer", q: String.raw`Classe $\dfrac{\sqrt{81}}{3}$, \ $-\sqrt{49}$ \ et \ $\dfrac{28}{7}$.`,
      steps: [String.raw`\textbf{Règle :} on classe un nombre selon sa \emph{valeur}; il faut donc simplifier d'abord. La racine carrée d'un carré parfait est un entier non négatif.`,
        String.raw`\textbf{Premier :} $81=9^2$, donc $\sqrt{81}=9$ et $\frac{\sqrt{81}}{3}=\frac93=3$. Naturel (donc aussi entier non négatif, entier, rationnel, réel).`,
        String.raw`\textbf{Deuxième :} $49=7^2$, donc $-\sqrt{49}=-7$. Négatif, donc ni naturel ni entier non négatif : entier, rationnel, réel.`,
        String.raw`\textbf{Troisième :} $\frac{28}{7}=4$, car $4\times7=28$. Naturel, entier non négatif, entier, rationnel, réel.`,
        String.raw`\textbf{Vérification :} aucun des trois n'est irrationnel, car chaque racine était celle d'un carré parfait \checkmark`],
      ans: String.raw`les trois sont rationnels; $3$ et $4$ sont naturels, $-7$ est un entier` },
    { title: "Décimaux finis en fractions", q: String.raw`Écris $0.625$ et $-1.35$ sous forme de fractions irréductibles.`,
      steps: [String.raw`\textbf{Règle :} la dernière position décimale donne le dénominateur : dixièmes $\to10$, centièmes $\to100$, millièmes $\to1000$. Divise ensuite le haut et le bas par le PGCD.`,
        String.raw`\textbf{$0.625$ :} le dernier chiffre est à la position des millièmes, donc $0.625=\frac{625}{1000}$.`,
        String.raw`\textbf{Réduis :} le PGCD de $625$ et de $1000$ est $125$ : $\frac{625\div125}{1000\div125}=\frac58$.`,
        String.raw`\textbf{$-1.35$ :} centièmes, donc $-\frac{135}{100}$. Le PGCD de $135$ et de $100$ est $5$ : $-\frac{27}{20}$.`,
        String.raw`\textbf{Vérification :} $5\div8=0.625$ \checkmark \ et \ $27\div20=1.35$ \checkmark`],
      ans: String.raw`$0.625=\frac58$, \ $-1.35=-\frac{27}{20}$` },
    { title: "Un seul chiffre qui se répète", q: String.raw`Écris $0.\overline{4}$ et $2.\overline{3}$ sous forme de fractions.`,
      steps: [String.raw`\textbf{Méthode :} appelle le nombre $x$. Si un seul chiffre se répète, $10x$ a la \emph{même} queue périodique; $10x-x$ la fait donc disparaître.`,
        String.raw`\textbf{$0.\overline4$ :} $x=0.444\ldots$ et $10x=4.444\ldots$. Soustrais : $9x=4$, donc $x=\frac49$.`,
        String.raw`\textbf{$2.\overline3$ :} $y=2.333\ldots$ et $10y=23.333\ldots$. Soustrais : $9y=21$, donc $y=\frac{21}{9}=\frac73$ (divise par $3$).`,
        String.raw`\textbf{Vérification :} $4\div9=0.444\ldots$ \checkmark \ et \ $7\div3=2.333\ldots$ \checkmark`],
      ans: String.raw`$\frac49$ et $\frac73$` },
    { title: "Deux chiffres qui se répètent", q: String.raw`Montre que $0.\overline{18}$ est rationnel.`,
      steps: [String.raw`\textbf{But :} rationnel signifie qu'il peut s'écrire $\frac ab$ avec des entiers $a,b$. On cherche cette fraction.`,
        String.raw`\textbf{Décale d'un bloc complet :} le bloc « 18 » a $2$ chiffres; multiplie donc par $10^2=100$ : $x=0.1818\ldots$, \ $100x=18.1818\ldots$`,
        String.raw`\textbf{Soustrais :} les queues sont identiques, donc $100x-x=18$, c.-à-d.\ $99x=18$.`,
        String.raw`\textbf{Résous et réduis :} $x=\frac{18}{99}$; PGCD $=9$, donc $x=\frac{2}{11}$.`,
        String.raw`\textbf{Vérification :} $2\div11=0.1818\ldots$ \checkmark`],
      ans: String.raw`$0.\overline{18}=\frac{2}{11}$, un quotient d'entiers, donc il est rationnel` },
    { title: "Une période qui commence plus loin (approfondissement)", q: String.raw`Écris $0.1\overline{6}=0.1666\ldots$ sous forme de fraction.`,
      steps: [String.raw`\textbf{Idée :} forme deux nombres dont les parties décimales sont \emph{identiques}, puis soustrais. Ici, la période commence une position plus loin.`,
        String.raw`\textbf{Amène la période juste après la virgule :} $10x=1.666\ldots$`,
        String.raw`\textbf{Décale d'une période de plus :} $100x=16.666\ldots$`,
        String.raw`\textbf{Soustrais :} $100x-10x=16-1=15$, donc $90x=15$ et $x=\frac{15}{90}=\frac16$.`,
        String.raw`\textbf{Vérification :} $1\div6=0.1666\ldots$ \checkmark`],
      ans: String.raw`$0.1\overline{6}=\frac16$` },
    { title: "Situer une racine irrationnelle", q: String.raw`Entre quels deux entiers consécutifs se trouve $\sqrt{50}$? Estime-la au dixième près.`,
      fig: numberLine({ min: 6, max: 9, step: 0.5, labelEvery: 2, unit: 1.6, dots: [{ at: 7, label: "$\\sqrt{49}$", color: "blue" }, { at: Math.sqrt(50), label: "$\\sqrt{50}$", color: "red", raise: 0.42 }, { at: 8, label: "$\\sqrt{64}$", color: "blue" }] }),
      steps: [String.raw`\textbf{Règle :} si $a<n<b$, alors $\sqrt a<\sqrt n<\sqrt b$. Encadre $50$ entre des carrés parfaits.`,
        String.raw`\textbf{Carrés parfaits :} $7^2=49$ et $8^2=64$, et $49<50<64$, donc $7<\sqrt{50}<8$.`,
        String.raw`\textbf{Estime :} $50$ dépasse $49$ de seulement $1$, mais il est $14$ sous $64$; $\sqrt{50}$ est donc juste au-dessus de $7$.`,
        String.raw`\textbf{Teste au dixième :} $7.1^2=50.41$ (trop grand), $7.0^2=49$ (trop petit). $50$ est beaucoup plus près de $50.41$, donc $\sqrt{50}\approx7.1$.`],
      ans: String.raw`$7<\sqrt{50}<8$; \ $\sqrt{50}\approx7.1$` },
    { title: "Placer des nombres dans le diagramme", q: String.raw`Place $\ 6,\ -2,\ 0,\ \frac{7}{3},\ -1.4,\ \sqrt{5},\ \sqrt{100},\ 0.\overline{9}\ $ dans le diagramme emboîté.`,
      fig: numberSets([{ set: "N", label: "$6$" }, { set: "N", label: "$\\sqrt{100}$" }, { set: "N", label: "$0.\\overline{9}$" }, { set: "W", label: "$0$" }, { set: "Z", label: "$-2$" }, { set: "Q", label: "$\\frac73$" }, { set: "Q", label: "$-1.4$" }, { set: "I", label: "$\\sqrt5$" }]),
      steps: [String.raw`\textbf{Règle :} place chaque nombre dans le \emph{plus petit} ensemble auquel il appartient; il se trouve alors automatiquement dans chaque ensemble qui l'entoure.`,
        String.raw`\textbf{Simplifie :} $\sqrt{100}=10$. Et $0.\overline9=1$ : si $x=0.999\ldots$, alors $10x-x=9$, donc $x=1$.`,
        String.raw`\textbf{Naturels :} $6,\ 10,\ 1$. \textbf{Entier non négatif seulement :} $0$. \textbf{Entier seulement :} $-2$.`,
        String.raw`\textbf{Rationnels non entiers :} $\frac73$ et $-1.4=-\frac{7}{5}$. \textbf{Irrationnel :} $\sqrt5$, car $4<5<9$ et $5$ n'est pas un carré parfait.`],
      ans: "voir le diagramme" },
    { title: "Raisonner sur les ensembles", q: String.raw`a) $\sqrt3\times\sqrt{12}$ est-il rationnel? b) Explique pourquoi $5+\sqrt7$ est irrationnel. c) Trouve un nombre rationnel et un nombre irrationnel entre $\sqrt5$ et $\sqrt6$.`,
      steps: [String.raw`\textbf{a) Règle} $\sqrt a\times\sqrt b=\sqrt{ab}$ : $\sqrt{3\times12}=\sqrt{36}=6$. Rationnel, même si les deux facteurs sont irrationnels.`,
        String.raw`\textbf{b) Preuve par l'absurde :} supposons que $5+\sqrt7=r$, avec $r$ rationnel. Alors $\sqrt7=r-5$, un rationnel moins un rationnel, ce qui est rationnel. Mais $\sqrt7$ est irrationnel ($7$ n'est pas un carré parfait). La supposition est impossible; $5+\sqrt7$ est donc irrationnel.`,
        String.raw`\textbf{c) Situe les bornes :} $\sqrt5\approx2.236$ et $\sqrt6\approx2.449$.`,
        String.raw`\textbf{Rationnel :} $2.3$ (décimal fini). Vérification : $2.3^2=5.29$, entre $5$ et $6$ \checkmark`,
        String.raw`\textbf{Irrationnel :} $2.3010010001\ldots$ (un zéro de plus chaque fois) ne se termine jamais et ne se répète jamais, et il est entre $2.236$ et $2.449$ \checkmark`],
      ans: String.raw`a) oui, $6$ b) voir les étapes c) p.\ ex.\ $2.3$ et $2.3010010001\ldots$` },
  ],
  problems: PROBLEMS,
};
