// Fiche d'exercices 2.5 — Résoudre des équations à plusieurs étapes (édition de l'enseignant). Miroir de ../../mth1w-ch2/ws/w2_5.mjs
import { balance, angleLine, rectT } from "../../mth1w-ch2/ws/tikz2.mjs";
import { PROBLEMS } from "./p2_5.mjs";

export const WS = {
  code: "2.5",
  title: "Résoudre des équations à plusieurs étapes",
  bigideas: String.raw`Toute équation du premier degré se résout avec le même plan : \textbf{développer} les parenthèses, \textbf{éliminer les fractions} en multipliant chaque terme par le PPCD, \textbf{regrouper} les termes variables d'un côté et les constantes de l'autre, puis \textbf{diviser}. Si la variable disparaît et qu'il reste un énoncé faux, il n'y a \textbf{aucune solution}; s'il reste un énoncé vrai, \textbf{tout} nombre est une solution. Les équations à plusieurs étapes modélisent des problèmes de périmètre, d'angles, d'âges, de pièces de monnaie et de taux.`,
  goals: [
    "Résoudre des équations avec des parenthèses, y compris un facteur négatif devant une parenthèse.",
    "Résoudre des équations avec la variable des deux côtés.",
    "Éliminer les fractions à l'aide du PPCD, y compris avec des numérateurs binômes.",
    "Reconnaître les équations sans solution et les identités.",
    "Modéliser et résoudre des problèmes de géométrie, de nombres consécutifs, d'âges, de pièces de monnaie et de taux; vérifier dans le contexte.",
  ],
  curriculum: "C1.5",
  vocab: [
    ["PPCD", "plus petit commun dénominateur de toutes les fractions de l'équation"],
    ["Regrouper", "placer des termes d'un même côté en additionnant ou en soustrayant des deux côtés"],
    ["Aucune solution", String.raw`la variable s'annule et il reste un énoncé faux ($0=5$)`],
    ["Identité", String.raw`la variable s'annule et il reste un énoncé vrai ($-6=-6$); toute valeur convient`],
    ["Supplémentaires", String.raw`deux angles dont la somme est $180^\circ$`],
  ],
  hook: String.raw`Propose : « Je pense à un nombre. Le triple du nombre, moins $8$, donne la même réponse que le nombre plus $12$. » Laisse les élèves procéder par essais et erreurs ($10$ fonctionne). Demande ensuite : « Et si les nombres étaient $3x-8=x+13$? » Deviner devient difficile ($x=10.5$). Modélise la balance avec des sacs $x$ sur les deux plateaux : enlève d'abord un sac de chaque côté. C'est le nouveau geste clé d'aujourd'hui.`,
  concepts: [
    ["1. Un plan pour toute équation du premier degré", String.raw`\begin{enumerate}[leftmargin=*,itemsep=1pt]
\item Développe les parenthèses; multiplie chaque terme par le PPCD pour éliminer les fractions.
\item Simplifie chaque membre.
\item Regroupe les termes variables du côté où le coefficient est le plus grand (il reste positif).
\item Regroupe les constantes de l'autre côté, puis divise.
\item Vérifie dans l'équation \emph{de départ}.
\end{enumerate}`],
    ["2. Des variables des deux côtés", String.raw`${balance("4x-3", "x+9", "Enlève x des deux plateaux : 3x − 3 = 9, donc 3x = 12 et x = 4.")}`],
    ["3. Éliminer les fractions", String.raw`Multiplie \textbf{chaque terme} des deux côtés par le PPCD. Mets entre parenthèses les numérateurs à deux termes :
\[\frac{x-2}{3}-\frac{x}{4}=1\ \xrightarrow{\times12}\ 4(x-2)-3x=12\ \Rightarrow\ 4x-8-3x=12\ \Rightarrow\ x=20.\]
Vérification : $\frac{18}{3}-\frac{20}{4}=6-5=1$ ✓.`],
    ["4. Aucune solution et identités", String.raw`\begin{tabular}{@{}lll@{}}\toprule Équation & Se simplifie en & Signification\\\midrule $5(x+1)=5x+2$ & $5=2$ & aucune solution\\ $2(x-3)+x=3x-6$ & $-6=-6$ & tout nombre convient\\ $7x+1=x+1$ & $6x=0$ & une solution, $x=0$\\\bottomrule\end{tabular}`],
    ["5. Modéliser", String.raw`\textbf{Angles :} sur une droite $180^\circ$; dans un triangle $180^\circ$; autour d'un point $360^\circ$.
${angleLine(["(4x+5)^\\circ", "(x+15)^\\circ", "(2x-2)^\\circ"], "7x + 18 = 180 donne x = 162/7 ≈ 23.1 — les réponses ne sont pas forcément des nombres entiers.")}
\textbf{Âges :} ajoute le même nombre d'années à chaque personne. \textbf{Pièces :} nombre $\times$ valeur. \textbf{Taux :} distance $=$ vitesse $\times$ temps; pour des objets qui se dirigent l'un vers l'autre, les distances s'additionnent. \textbf{Travail :} une tâche faite en $6$ h signifie $\frac16$ de la tâche par heure.`],
  ],
  tips: [
    String.raw`$-2(x-3)=-2x+6$ : l'erreur la plus fréquente de cette leçon. Demande aux élèves d'encercler le signe placé devant chaque parenthèse.`,
    String.raw`Quand on élimine les fractions, chaque terme est multiplié --- y compris les nombres entiers de chaque côté.`,
    String.raw`« Déplacer » un terme change son signe seulement parce qu'on soustrait le même terme des deux côtés; dis-le de cette façon.`,
    String.raw`$x=0$ est une solution, et non « aucune solution ».`,
    "Pour les problèmes écrits, exige un énoncé « Soit … » et une vérification dans la situation, pas seulement dans l'équation.",
  ],
  examples: [
    { title: "Les parenthèses d'abord", q: String.raw`Résous $2(4x-1)+3=25$.`,
      steps: [String.raw`\textbf{Plan :} développe avec $a(b+c)=ab+ac$, regroupe les termes semblables, puis annule $+/-$ avant $\times/\div$.`, String.raw`$8x-2+3=25$, donc $8x+1=25$.`, String.raw`$8x=24$, $x=3$.`, String.raw`\textbf{Vérifie :} $2(12-1)+3=22+3=25$ \checkmark`], ans: "$x=3$" },
    { title: "Un nombre négatif devant une parenthèse", q: String.raw`Résous $7-3(2-y)=16$.`,
      steps: [String.raw`\textbf{Règle :} le $-3$ multiplie \emph{les deux} termes de la parenthèse : $-3(2-y)=-6+3y$.`, String.raw`$7-6+3y=16$.`, String.raw`$1+3y=16$, donc $3y=15$, $y=5$.`, String.raw`\textbf{Vérifie :} $7-3(2-5)=7-3(-3)=7+9=16$ \checkmark`], ans: "$y=5$" },
    { title: "Des variables des deux côtés", q: String.raw`Résous $9k+4=5k-12$.`,
      steps: [String.raw`\textbf{Plan :} soustrais le plus petit terme en $k$ ($5k$) des deux côtés pour que la variable soit d'un seul côté, puis résous l'équation à deux étapes.`, String.raw`Soustrais $5k$ : $4k+4=-12$.`, String.raw`$4k=-16$, $k=-4$. Vérifie : $-32$ et $-32$ ✓`], ans: "$k=-4$" },
    { title: "Des parenthèses des deux côtés", q: String.raw`Résous $3(2a+1)=4(a-2)+5$.`,
      steps: [String.raw`\textbf{Plan :} développe les deux membres : $6a+3=4a-8+5=4a-3$; rassemble ensuite les termes en $a$ à gauche et les nombres à droite.`, String.raw`$6a+3=4a-3$.`, String.raw`$2a=-6$, $a=-3$.`, String.raw`\textbf{Vérifie :} $3(-5)=-15$ et $4(-5)+5=-15$ \checkmark`], ans: "$a=-3$" },
    { title: "Éliminer les fractions", q: String.raw`Résous $\frac x2+\frac x3=15$.`,
      steps: [String.raw`\textbf{Règle :} multiplie chaque terme par le PPCD de $2$ et de $3$, qui est $6$ : $6\cdot\frac x2=3x$ et $6\cdot\frac x3=2x$.`, String.raw`$\times6$ : $3x+2x=90$.`, String.raw`$5x=90$, $x=18$.`, String.raw`\textbf{Vérifie :} $\frac{18}{2}+\frac{18}{3}=9+6=15$ \checkmark`], ans: "$x=18$" },
    { title: "Numérateurs binômes", q: String.raw`Résous $\dfrac{2x-1}{3}=\dfrac{x+4}{2}$.`,
      steps: [String.raw`\textbf{Règle :} multiplie les deux côtés par le PPCD $6$; garde chaque numérateur entre parenthèses pour que tout le numérateur soit multiplié.`, String.raw`$\times6$ : $2(2x-1)=3(x+4)$.`, String.raw`$4x-2=3x+12$, $x=14$.`, String.raw`Vérification : $\frac{27}{3}=9$, $\frac{18}{2}=9$ ✓`], ans: "$x=14$" },
    { title: "Aucune solution ou tous les nombres?", q: String.raw`Résous a) $4(x-2)=4x-3$; b) $2(3x+1)-x=5x+2$.`,
      steps: [String.raw`\textbf{Logique :} si la résolution fait disparaître la variable et laisse un énoncé \emph{faux}, aucun nombre ne convient; si elle laisse un énoncé \emph{toujours vrai}, tout nombre convient.`, String.raw`a) $4x-8=4x-3$ donne $-8=-3$ : faux.`, String.raw`b) $5x+2=5x+2$ : toujours vrai.`, String.raw`\textbf{Teste b) avec $x=0$ et $x=1$ :} $2-0=2$ et $8-1=7=5+2$, les deux sont vrais \checkmark`], ans: "a) aucune solution b) tout nombre" },
    { title: "Nombres entiers pairs consécutifs", q: String.raw`Trois nombres entiers pairs consécutifs ont une somme de $78$. Trouve-les.`,
      steps: [String.raw`\textbf{Modèle :} les nombres pairs sont à $2$ d'écart; si le plus petit est $n$, les autres sont $n+2$ et $n+4$.`, String.raw`$n+(n+2)+(n+4)=78$, donc $3n+6=78$.`, String.raw`$n=24$.`, String.raw`\textbf{Vérification :} $24+26+28=78$ \checkmark`], ans: "$24, 26, 28$" },
    { title: "Angles supplémentaires", q: String.raw`Les angles $(3x+12)^\circ$ et $(5x-4)^\circ$ sont supplémentaires. Trouve chaque angle.`,
      fig: angleLine(["(3x+12)^\\circ", "(5x-4)^\\circ"], ""),
      steps: [String.raw`\textbf{Définition :} des angles supplémentaires ont une somme de $180^\circ$, donc $(3x+12)+(5x-4)=180$. Regroupe : $8x+8=180$, puis $8x=172$.`, String.raw`$8x+8=180$, donc $x=21.5$.`, String.raw`$3(21.5)+12=76.5$ et $5(21.5)-4=103.5$; somme $180$ ✓`], ans: String.raw`$76.5^\circ$ et $103.5^\circ$` },
  ],
  problems: PROBLEMS,
};
