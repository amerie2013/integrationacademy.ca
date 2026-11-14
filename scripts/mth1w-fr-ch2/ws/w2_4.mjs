// Fiche d'exercices 2.4 — Créer et résoudre des équations (édition de l'enseignant). Miroir de ../../mth1w-ch2/ws/w2_4.mjs
import { balance, flowT, lineT } from "../../mth1w-ch2/ws/tikz2.mjs";
import { PROBLEMS } from "./p2_4.mjs";

export const WS = {
  code: "2.4",
  title: "Créer et résoudre des équations",
  bigideas: String.raw`Une \textbf{équation} affirme que deux expressions sont égales; sa \textbf{solution} est la valeur qui la rend vraie. Comme une balance, une équation reste vraie quand on fait la même chose des deux côtés. Pour isoler la variable, \textbf{annule les opérations dans l'ordre inverse} (opérations inverses). Les équations modélisent des situations réelles : à partir de mots, d'une formule ou d'une relation linéaire, où résoudre revient à lire un point sur son graphique.`,
  goals: [
    "Distinguer les expressions des équations et vérifier une solution par substitution.",
    "Résoudre des équations à une et à deux étapes avec des coefficients entiers, fractionnaires et décimaux.",
    "Expliquer chaque étape avec le modèle de la balance et les opérations inverses; résoudre en raisonnant à rebours.",
    "Écrire et résoudre des équations pour des problèmes écrits et des relations linéaires; répondre en contexte.",
    "Estimer des solutions à partir d'un graphique ou d'une table et les confirmer par l'algèbre.",
  ],
  curriculum: "C1.5 (avec un lien à C3, relations linéaires)",
  vocab: [
    ["Équation", "deux expressions reliées par $=$"],
    ["Solution / racine", "une valeur de la variable qui rend l'équation vraie"],
    ["Opérations inverses", String.raw`des opérations qui s'annulent : $+$/$-$, $\times$/$\div$`],
    ["Isoler", "laisser la variable seule d'un côté"],
    ["Vérifier", "substituer la solution dans l'équation de départ"],
  ],
  hook: String.raw`Apporte (ou dessine) une balance à plateaux. Mets $3$ sacs mystères identiques et $4$ cubes à gauche, $19$ cubes à droite. « Combien de cubes y a-t-il dans chaque sac? » Les élèves enlèveront $4$ cubes de chaque côté, puis partageront $15$ entre $3$ sacs. Écris chaque geste sous forme d'équation : $3x+4=19\to3x=15\to x=5$. Ils viennent de résoudre une équation comme al-Khwārizmī l'a décrit.`,
  concepts: [
    ["1. Équations et solutions", String.raw`$4x-3$ est une expression; $4x-3=17$ est une équation. Une solution doit être \textbf{vérifiée dans l'équation de départ} : $x=5$ donne $4(5)-3=17$ ✓. La méthode essais et erreurs fonctionne pour des réponses entières faciles, mais elle est lente et échoue pour des réponses comme $x=-\frac72$.`],
    ["2. La balance et les opérations inverses", String.raw`${balance("2x+7", "-5", "Soustrais 7 des deux plateaux, puis prends la moitié de chaque côté : x = −6.")}
${flowT("x", [String.raw`\times2`, "+7"], "-5", "Construire 2x + 7 à partir de x (en haut) et l'annuler (en bas).", ["-5", "-7", String.raw`\div2`, "x=-6"])}
Annule d'abord l'addition ou la soustraction, puis la multiplication ou la division --- l'inverse de la priorité des opérations. Chaque ligne est une \textbf{équation équivalente}.`],
    ["3. Fractions et nombres décimaux", String.raw`\begin{itemize}[leftmargin=*,itemsep=1pt]
\item $\frac{x}{3}=-4$ : multiplie les deux côtés par $3$ : $x=-12$.
\item $\frac34w=15$ : multiplie par l'inverse $\frac43$ : $w=20$.
\item $\frac{x+4}{2}=7$ : multiplie d'abord par $2$ ($x+4=14$), puis soustrais : $x=10$.
\item $0.5k-1.2=2.3$ : $0.5k=3.5$, $k=7$ (ou multiplie d'abord chaque terme par $10$).
\end{itemize}`],
    ["4. Modéliser avec des équations", String.raw`(1) Définis la variable (« Soit $n$ \ldots »). (2) Écris l'équation à partir des mots. (3) Résous. (4) Vérifie \emph{dans la situation}. (5) Réponds par une phrase avec les unités. Structures fréquentes : montant fixe + taux$\times$quantité $=$ total; périmètre; nombres consécutifs; raisonnement à rebours sur une chaîne d'opérations.`],
    ["5. Équations, tables et graphiques", String.raw`Pour la relation $C=20+15h$ (des frais de déplacement de $20$ dollars plus $15$ dollars l'heure), l'équation $20+15h=110$ demande « où la droite atteint-elle $C=110$? »
${lineT({ m: 15, b: 20, c: 110, xmax: 8, ymax: 140, xlabel: "heures $h$", ylabel: "coût $C$", xtick: "0,1,...,8", ytick: "0,20,...,140", width: 8, height: 5 }, "Horizontalement à partir de 110, puis vers le bas jusqu'à h = 6. Algèbre : 15h = 90, h = 6.")}`],
  ],
  tips: [
    String.raw`Les élèves divisent d'abord dans $3x+4=19$; demande ce qui a été fait en \emph{dernier} à $x$.`,
    String.raw`Garde le signe avec le terme : $11-3k=26$ signifie $-3k=15$, $k=-5$.`,
    String.raw`Avec $\frac{x+4}{2}$, tout le numérateur est divisé; multiplie par $2$ avant de soustraire.`,
    "Exige la vérification dans l'équation de départ, écrite comme une ligne de travail.",
    "Problèmes écrits : la réponse est une phrase avec les unités, pas seulement « x = 7 ».",
  ],
  examples: [
    { title: "Vérifier une solution", q: String.raw`Est-ce que $y=4$ est une solution de $3y-7=2y-3$?`,
      steps: [String.raw`\textbf{Définition :} $y=4$ est une solution si, une fois substitué, il rend les deux membres égaux. Évalue chaque membre séparément.`, String.raw`Gauche : $3(4)-7=5$. Droite : $2(4)-3=5$.`, String.raw`\textbf{Conclusion :} les deux membres valent $5$, donc l'équation est vraie pour $y=4$ \checkmark`], ans: "oui" },
    { title: "Équations à une étape", q: String.raw`Résous a) $-8+n=-3$ b) $-6w=42$.`,
      steps: [String.raw`\textbf{Règle :} annule l'opération appliquée à la variable par son inverse, en faisant la même chose des deux côtés : $-8$ s'annule avec $+8$; $\times(-6)$ s'annule avec $\div(-6)$.`, String.raw`a) Ajoute $8$ : $n=5$.`, String.raw`b) Divise par $-6$ : $w=-7$.`, String.raw`\textbf{Vérifie :} $-8+5=-3$ \checkmark \ et \ $-6(-7)=42$ \checkmark`], ans: String.raw`$n=5$; $w=-7$` },
    { title: "Deux étapes avec une balance", q: String.raw`Résous $5x-12=18$.`, fig: balance("5x-12", "18", ""),
      steps: [String.raw`\textbf{Règle :} garde la balance en équilibre en faisant la même chose des deux côtés; annule dans l'ordre inverse --- d'abord le $-12$, puis le $\times5$.`, String.raw`Ajoute $12$ : $5x=30$.`, String.raw`Divise par $5$ : $x=6$. Vérifie : $30-12=18$ ✓`], ans: "$x=6$" },
    { title: "Coefficient négatif", q: String.raw`Résous $11-3k=26$.`,
      steps: [String.raw`\textbf{Plan :} isole d'abord le terme en $k$ (soustrais $11$ des deux côtés), puis divise par le coefficient $-3$, signe compris.`, String.raw`Soustrais $11$ : $-3k=15$.`, String.raw`Divise par $-3$ : $k=-5$. Vérifie : $11+15=26$ ✓`], ans: "$k=-5$" },
    { title: "Coefficient fractionnaire", q: String.raw`Résous $\frac{3a}{4}-2=7$.`,
      steps: [String.raw`\textbf{Plan :} annule d'abord $-2$, puis annule $\times\frac34$ en multipliant par l'inverse $\frac43$ (car $\frac43\cdot\frac34=1$).`, String.raw`Ajoute $2$ : $\frac{3a}{4}=9$.`, String.raw`Multiplie par $\frac43$ : $a=12$.`, String.raw`\textbf{Vérifie :} $\frac{3(12)}{4}-2=9-2=7$ \checkmark`], ans: "$a=12$" },
    { title: "Tout un numérateur", q: String.raw`Résous $\frac{x+6}{5}=-2$.`,
      steps: [String.raw`\textbf{Plan :} tout le numérateur $x+6$ est divisé par $5$; multiplie donc d'abord les deux côtés par $5$, puis annule le $+6$.`, String.raw`Multiplie par $5$ : $x+6=-10$.`, String.raw`Soustrais $6$ : $x=-16$.`, String.raw`\textbf{Vérifie :} $\frac{-16+6}{5}=\frac{-10}{5}=-2$ \checkmark`], ans: "$x=-16$" },
    { title: "Nombres décimaux", q: String.raw`Résous $2.4p+1.3=8.5$.`,
      steps: [String.raw`\textbf{Plan :} les deux mêmes étapes qu'avec des nombres entiers : annule $+1.3$, puis annule $\times2.4$.`, String.raw`Soustrais $1.3$ : $2.4p=7.2$.`, String.raw`Divise : $p=3$.`, String.raw`\textbf{Vérifie :} $2.4(3)+1.3=7.2+1.3=8.5$ \checkmark`], ans: "$p=3$" },
    { title: "Raisonner à rebours", q: String.raw`Un nombre est divisé par $4$, puis on ajoute $9$. Le résultat est $2$. Trouve le nombre.`,
      fig: flowT("n", [String.raw`\div4`, "+9"], "2", "", ["2", "-9", String.raw`\times4`, "n=-28"]),
      steps: [String.raw`\textbf{Méthode :} annule les opérations par leurs inverses dans l'ordre inverse : annule $+9$ avec $-9$, puis annule $\div4$ avec $\times4$.`, String.raw`$\frac n4+9=2$.`, String.raw`$\frac n4=-7$, donc $n=-28$.`, String.raw`\textbf{Vérifie vers l'avant :} $-28\div4=-7$, et $-7+9=2$ \checkmark`], ans: "$-28$" },
    { title: "Une relation linéaire", q: String.raw`Un réservoir contient $600$ L et se vide à raison de $45$ L/min : $V=600-45t$. Quand contiendra-t-il $150$ L?`,
      fig: lineT({ m: -45, b: 600, c: 150, xmax: 14, ymax: 650, xlabel: "temps $t$ (min)", ylabel: "volume $V$ (L)", xtick: "0,2,...,14", ytick: "0,100,...,600", width: 8, height: 4.8 }, ""),
      steps: [String.raw`\textbf{Modèle :} $V=600-45t$ donne le volume après $t$ minutes; \textquotedblleft{}contiendra $150$ L\textquotedblright{} signifie poser $V=150$ et résoudre pour $t$.`, String.raw`$600-45t=150$.`, String.raw`$-45t=-450$, donc $t=10$.`, String.raw`\textbf{Vérifie :} $600-45(10)=600-450=150$ \checkmark`], ans: "après $10$ min" },
  ],
  problems: PROBLEMS,
};
