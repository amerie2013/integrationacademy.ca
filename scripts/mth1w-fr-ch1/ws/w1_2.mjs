// Fiche 1.2 — Additionner et soustraire des nombres entiers (édition de l'enseignant, un PDF avec corrigé)
import { numberLine, chips, thermometer, barChart } from "./tikz.mjs";
import { PROBLEMS } from "./p1_2.mjs";

export const WS = {
  code: "1.2",
  title: "Additionner et soustraire des nombres entiers",
  bigideas: String.raw`Les entiers décrivent une direction et une variation : monter/descendre, gain/perte, au-dessus/au-dessous de zéro. \textbf{Additionner} un positif déplace vers la droite sur la droite numérique et additionner un négatif déplace vers la gauche. \textbf{Soustraire revient à additionner l'opposé} : $a-b=a+(-b)$. Deux modèles --- la droite numérique et les paires nulles --- expliquent toutes les règles.`,
  goals: [
    "Trouver des opposés et des valeurs absolues, et ordonner des entiers sur une droite numérique.",
    "Additionner des entiers à l'aide d'une droite numérique, de jetons formant des paires nulles et des règles « même signe / signes contraires ».",
    String.raw`Soustraire des entiers en additionnant l'opposé, et expliquer pourquoi $a-(-b)=a+b$.`,
    "Évaluer des expressions comportant plusieurs termes entiers.",
    "Résoudre des problèmes de température, d'altitude, d'argent et de pointage, y compris des distances entre des valeurs.",
  ],
  curriculum: "B3.1",
  vocab: [
    ["Opposés", "nombres situés à la même distance de $0$, de part et d'autre; leur somme est $0$ ($7$ et $-7$)"],
    ["Valeur absolue", "distance par rapport à $0$, jamais négative : $|-7|=7$"],
    ["Paire nulle", "une unité positive et une unité négative; ensemble, elles valent $0$"],
    ["Somme / différence", "le résultat d'une addition / d'une soustraction"],
  ],
  hook: String.raw`Montre une prévision météo : « Ce soir $-12\,^\circ$C, demain après-midi $5\,^\circ$C. » Demande : \emph{De combien de degrés fera-t-il plus chaud demain après-midi?} Beaucoup d'élèves répondent $7$ (ils calculent $12-5$). Dessine un thermomètre vertical : de $-12$ à $0$, il y a $12$ degrés, et de $0$ à $5$, il y en a $5$ de plus; la hausse est donc de $17$. Écris ensuite $5-(-12)=17$. Le reste de la leçon explique pourquoi soustraire un négatif revient à additionner.`,
  concepts: [
    ["1. Les opposés et la valeur absolue", String.raw`Chaque entier a un \textbf{opposé} situé à la même distance de $0$. La \textbf{valeur absolue} est cette distance; elle n'est donc jamais négative.
${numberLine({ min: -8, max: 8, dots: [{ at: -5, label: "$-5$", color: "red" }, { at: 5, label: "$5$", color: "blue" }], arrows: [{ from: 0, to: -5, label: "5 unités", color: "red" }, { from: 0, to: 5, label: "5 unités", color: "blue" }], unit: 0.85, caption: "$|-5|=|5|=5$ : les deux sont à 5 unités de 0." })}
\textbf{Ordonner :} sur une droite numérique horizontale, le nombre le plus à \emph{droite} est le plus grand : $-2>-9$, même si $9>2$.`],
    ["2. Additionner des entiers : deux modèles et deux règles", String.raw`\textbf{Droite numérique.} Pars du premier nombre. Additionner un positif : déplace-toi vers la droite. Additionner un négatif : déplace-toi vers la gauche.
${numberLine({ min: -6, max: 6, arrows: [{ from: 0, to: 4, label: "départ à $4$", color: "gray", lane: 0 }, { from: 4, to: -3, label: "ajouter $-7$ : 7 vers la gauche", color: "red", lane: 1 }], dots: [{ at: -3, label: "$-3$", color: "green" }], unit: 0.95, caption: "$4+(-7)=-3$" })}
\textbf{Paires nulles.} Un jeton $+$ et un jeton $-$ s'annulent. Ce qui reste après l'annulation est la réponse.
${chips(4, 7, "$4+(-7)$ : quatre paires nulles s'annulent, il reste trois jetons négatifs; la somme est donc $-3$.")}
\textbf{Règles.} \emph{Même signe :} additionne les valeurs absolues et garde le signe, $(-8)+(-5)=-13$. \emph{Signes contraires :} soustrais les valeurs absolues et garde le signe du nombre le plus éloigné de $0$, $(-8)+5=-3$.`],
    ["3. Soustraire : additionner l'opposé", String.raw`Une régularité montre pourquoi soustraire un négatif donne une réponse plus grande :
\begin{center}\begin{tabular}{rcl}
$5-2$ & $=$ & $3$\\ $5-1$ & $=$ & $4$\\ $5-0$ & $=$ & $5$\\ $5-(-1)$ & $=$ & $6$\\ $5-(-2)$ & $=$ & $7$
\end{tabular}\qquad
\begin{minipage}{7.5cm}Chaque fois qu'on soustrait un de moins, la réponse augmente de un. Donc $5-(-2)=7=5+2$.\\[4pt]
\textbf{Règle :} $a-b=a+(-b)$. Change la soustraction en addition et change le signe du deuxième nombre.\\[4pt]
\textbf{Signification :} $a-b$ est la distance \emph{de $b$ jusqu'à $a$}.\end{minipage}\end{center}
${thermometer({ lo: -15, hi: 10, step: 5, marks: [{ at: 5, label: "demain $5^\\circ$", color: "red" }, { at: -12, label: "ce soir $-12^\\circ$", color: "blue" }], caption: "Hausse de $-12$ à $5$ : $5-(-12)=17$ degrés." })}`],
    ["4. Plusieurs termes", String.raw`Réécris chaque soustraction comme l'addition de l'opposé, puis regroupe : additionne tous les positifs, additionne tous les négatifs, et combine.
\[-4-9+15-(-6)=-4+(-9)+15+6=(-13)+21=8\]
Apprends aux élèves à \textbf{estimer d'abord le signe} : les positifs ou les négatifs sont-ils les plus « lourds »? Ici, $21>13$, donc la réponse est positive.`],
  ],
  tips: [
    String.raw`« Deux négatifs donnent un positif » est une règle de \emph{multiplication}, pas d'addition : $(-3)+(-4)=-7$.`,
    String.raw`Le signe moins a deux rôles (soustraire / négatif). Écrire $3-8$ sous la forme $3+(-8)$ les sépare.`,
    String.raw`L'ordre compte dans une soustraction : $2-9=-7$, mais $9-2=7$.`,
    String.raw`Pour la distance entre deux valeurs, calcule toujours \emph{valeur haute moins valeur basse}; la réponse est positive.`,
    String.raw`Laisse les élèves utiliser des jetons ou une droite numérique jusqu'à ce que les règles deviennent automatiques --- les modèles d'abord, les règles ensuite.`,
  ],
  examples: [
    { title: "Additionner sur une droite numérique", q: String.raw`Évalue $(-3)+8$.`,
      fig: numberLine({ min: -4, max: 6, arrows: [{ from: -3, to: 5, label: "$+8$", color: "blue" }], dots: [{ at: -3, label: "$-3$", color: "gray" }, { at: 5, label: "$5$", color: "green" }], unit: 1 }),
      steps: [String.raw`\textbf{Modèle :} additionner un nombre positif déplace vers la \emph{droite} sur la droite numérique; additionner un négatif déplace vers la \emph{gauche}.`,
        String.raw`\textbf{Pars} de $-3$. \textbf{Déplace-toi} de $8$ unités vers la droite : $3$ unités pour atteindre $0$, et $5$ de plus pour atteindre $5$.`,
        String.raw`\textbf{Vérification par la règle (signes contraires) :} $8-3=5$, et $8$ a la plus grande grandeur; la réponse est donc positive : $5$.`,
        String.raw`\textbf{Vérification :} $5-8=-3$ \checkmark`], ans: "$5$" },
    { title: "Même signe avec des jetons", q: String.raw`Évalue $(-5)+(-3)$.`, fig: chips(0, 8, "Cinq jetons négatifs et trois autres jetons négatifs : huit négatifs, aucune paire nulle."),
      steps: [String.raw`\textbf{Règle (même signe) :} additionne les valeurs absolues et garde le signe commun.`,
        String.raw`\textbf{Jetons :} $5$ jetons négatifs et $3$ jetons négatifs. Il n'y a aucun jeton positif, donc aucune paire nulle ne se forme.`,
        String.raw`\textbf{Compte :} $5+3=8$ jetons négatifs; la somme est donc $-8$.`,
        String.raw`\textbf{Vérification sur une droite numérique :} à partir de $-5$, déplace-toi de $3$ vers la gauche : $-6,-7,-8$ \checkmark`], ans: "$-8$" },
    { title: "Signes contraires avec des jetons", q: String.raw`Évalue $7+(-11)$.`, fig: chips(7, 11, "Sept paires nulles s'annulent; il reste quatre jetons négatifs."),
      steps: [String.raw`\textbf{Principe du zéro :} un jeton $+$ et un jeton $-$ forment une paire nulle, qui vaut $0$; on peut donc les retirer.`,
        String.raw`\textbf{Forme des paires :} les $7$ positifs s'associent à $7$ des négatifs; ces $7$ paires valent $0$.`,
        String.raw`\textbf{Ce qui reste :} $11-7=4$ jetons négatifs; la somme est donc $-4$.`,
        String.raw`\textbf{Vérification par la règle :} signes contraires, soustrais les grandeurs $11-7=4$; $|-11|>|7|$, donc négatif \checkmark`], ans: "$-4$" },
    { title: "Soustraire un positif", q: String.raw`Évalue $-2-9$.`,
      fig: numberLine({ min: -12, max: 1, arrows: [{ from: -2, to: -11, label: "$-9$", color: "red" }], dots: [{ at: -2, label: "$-2$", color: "gray" }, { at: -11, label: "$-11$", color: "green" }], unit: 0.75 }),
      steps: [String.raw`\textbf{Règle :} $a-b=a+(-b)$ : soustraire revient à additionner l'opposé.`,
        String.raw`\textbf{Réécris :} $-2-9=-2+(-9)$.`,
        String.raw`\textbf{Même signe :} $2+9=11$; garde le négatif : $-11$.`,
        String.raw`\textbf{Vérification :} $-11+9=-2$ \checkmark`], ans: "$-11$" },
    { title: "Soustraire un négatif", q: String.raw`Évalue $3-(-8)$ et explique à l'aide d'une droite numérique.`,
      fig: numberLine({ min: -9, max: 12, arrows: [{ from: -8, to: 3, label: "la distance de $-8$ à $3$ est $11$", color: "blue" }], dots: [{ at: -8, label: "$-8$", color: "gray" }, { at: 3, label: "$3$", color: "green" }], unit: 0.7 }),
      steps: [String.raw`\textbf{Règle :} $a-b=a+(-b)$. L'opposé de $-8$ est $+8$, donc $3-(-8)=3+8=11$.`,
        String.raw`\textbf{Signification :} $3-(-8)$ est la distance de $-8$ jusqu'à $3$ : $8$ unités pour atteindre $0$, puis $3$ de plus, $8+3=11$.`,
        String.raw`\textbf{Vérification :} $11+(-8)=3$ \checkmark`], ans: "$11$" },
    { title: "Négatif moins négatif", q: String.raw`Évalue $-10-(-4)$.`,
      steps: [String.raw`\textbf{Règle :} additionne l'opposé : $-10-(-4)=-10+4$.`,
        String.raw`\textbf{Signes contraires :} soustrais les grandeurs $10-4=6$.`,
        String.raw`\textbf{Signe :} $|-10|>|4|$, donc le résultat est négatif : $-6$.`,
        String.raw`\textbf{Vérification avec des jetons :} $10$ jetons négatifs, on en retire $4$ négatifs, il en reste $6$ négatifs \checkmark`], ans: "$-6$" },
    { title: "La température au fil de la journée", q: String.raw`À Winnipeg, il fait $-17\,^\circ$C à 7 h. À midi, la température a monté de $11$ degrés, et à 21 h, elle a baissé de $8$ degrés par rapport à celle de midi. Trouve la température à 21 h.`,
      fig: thermometer({ lo: -20, hi: 0, step: 5, marks: [{ at: -17, label: "7 h", color: "blue" }, { at: -6, label: "midi", color: "green" }, { at: -14, label: "21 h", color: "red" }] }),
      steps: [String.raw`\textbf{Modèle :} une hausse est $+$, une baisse est $-$.`,
        String.raw`\textbf{Midi :} $-17+11$ : signes contraires, $17-11=6$, signe de $-17$ : $-6\,^\circ$C.`,
        String.raw`\textbf{21 h :} $-6-8=-6+(-8)$ : même signe, $6+8=14$ : $-14\,^\circ$C.`,
        String.raw`\textbf{Vérifie avec la variation nette :} $+11-8=+3$, et $-17+3=-14$ \checkmark`], ans: String.raw`$-14\,^\circ$C` },
    { title: "Distance entre des altitudes", q: String.raw`Le point le plus bas d'Amérique du Nord (la vallée de la Mort) est à environ $-86$ m et le point le plus haut du Canada (le mont Logan) est à environ $5959$ m. Quelle est la distance verticale entre les deux?`,
      fig: numberLine({ min: -1000, max: 6000, step: 1000, unit: 1.1, dots: [{ at: -86, label: "$-86$", color: "red" }, { at: 5959, label: "$5959$", color: "blue" }] }),
      steps: [String.raw`\textbf{Règle :} la distance entre deux valeurs est valeur haute $-$ valeur basse (toujours positive).`,
        String.raw`\textbf{Substitue :} $5959-(-86)$.`,
        String.raw`\textbf{Additionne l'opposé :} $5959+86=6045$.`,
        String.raw`\textbf{Signification :} $86$ m pour monter de la vallée de la Mort jusqu'au niveau de la mer, puis $5959$ m de plus jusqu'au sommet : $86+5959=6045$ \checkmark`], ans: "environ $6045$ m" },
    { title: "Valeurs absolues et longues sommes", q: String.raw`a) Évalue $-|9-(-4)|-\left(-|-6+2|\right)+|-3-8|$. b) Trouve la somme des entiers de $-18$ à $15$.`,
      steps: [String.raw`\textbf{a) Règle :} les barres de valeur absolue agissent comme des parenthèses : calcule d'abord l'intérieur, puis prends la distance par rapport à $0$.`,
        String.raw`\textbf{Entre les barres :} $9-(-4)=13$, \ $-6+2=-4$, \ $-3-8=-11$.`,
        String.raw`\textbf{Valeurs absolues :} $|13|=13$, $|-4|=4$, $|-11|=11$. L'expression est $-13-(-4)+11$.`,
        String.raw`\textbf{Termine :} $-13+4+11=2$.`,
        String.raw`\textbf{b) Associe les opposés :} chaque entier de $-15$ à $15$ s'annule avec son opposé ($-15+15=0$, \dots), et $0$ n'ajoute rien.`,
        String.raw`\textbf{Ce qui reste :} $-18+(-17)+(-16)=-51$.`],
      ans: String.raw`a) $2$ b) $-51$` },
  ],
  problems: PROBLEMS,
};
