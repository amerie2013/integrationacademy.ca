// Fiche d'exercices 2.6 — Transformer des formules (édition de l'enseignant). Miroir de ../../mth1w-ch2/ws/w2_6.mjs
import { flowT, polyT } from "../../mth1w-ch2/ws/tikz2.mjs";
import { PROBLEMS } from "./p2_6.mjs";

export const WS = {
  code: "2.6",
  title: "Transformer des formules",
  bigideas: String.raw`On peut \textbf{transformer} une formule pour isoler n'importe laquelle de ses variables, avec exactement les opérations inverses utilisées pour résoudre des équations : dresse la liste de ce qui est appliqué à la variable cible et annule-le dans l'\textbf{ordre inverse} des deux côtés. Transformer une seule fois est efficace quand on a besoin de la même inconnue plusieurs fois (tables, tableurs, code), et cela change une relation linéaire comme $Ax+By=C$ en $y=mx+b$.`,
  goals: [
    "Repérer, dans l'ordre, les opérations appliquées à une variable dans une formule.",
    "Isoler n'importe quelle variable d'une formule en annulant ces opérations dans l'ordre inverse.",
    String.raw`Transformer $Ax+By=C$ en $y=mx+b$ et interpréter la pente et l'ordonnée à l'origine.`,
    "Décider quand transformer d'abord et quand substituer d'abord.",
    "Utiliser des formules transformées en mesure, en sciences et en finances.",
  ],
  curriculum: "C1.5",
  vocab: [
    ["Variable isolée", String.raw`la variable seule d'un côté : $A$ dans $A=lw$`],
    ["Transformer", "isoler une autre variable"],
    ["Équation littérale", "une équation qui contient plusieurs lettres"],
    ["Forme générale", "$Ax+By=C$"],
    ["Forme fonctionnelle", "$y=mx+b$"],
  ],
  hook: String.raw`Donne à chaque paire une liste de dix températures en degrés Fahrenheit tirées d'un site météo américain et demande-leur de les convertir toutes en degrés Celsius avec $F=1.8C+32$. La plupart résoudront dix équations séparées. Après quelques minutes, demande : « Y a-t-il une façon plus rapide? » Quelqu'un proposera de retourner la formule une seule fois. Chronomètre les deux méthodes --- c'est tout l'intérêt de la leçon d'aujourd'hui.`,
  concepts: [
    ["1. Les mêmes gestes, avec des lettres au lieu de nombres", String.raw`\begin{tabular}{@{}ll@{}}\toprule Résoudre $5x-8=27$ & Résoudre $ax-b=c$ pour $x$\\\midrule $5x=27+8$ & $ax=c+b$\\ $x=\frac{35}{5}=7$ & $x=\frac{c+b}{a}$ \quad ($a\neq0$)\\\bottomrule\end{tabular}`],
    ["2. Annuler dans l'ordre inverse", String.raw`${flowT("C", [String.raw`\times1.8`, "+32"], "F", "", ["F", "-32", String.raw`\div1.8`, "C"])}
$F=1.8C+32\ \Rightarrow\ F-32=1.8C\ \Rightarrow\ C=\frac{F-32}{1.8}$.`],
    ["3. De la forme générale à la forme fonctionnelle", String.raw`$5x+2y=14\ \Rightarrow\ 2y=-5x+14\ \Rightarrow\ y=-\frac52x+7$ : pente $-\frac52$, ordonnée à l'origine $7$. Divise \textbf{chaque} terme par le coefficient de $y$.`],
    ["4. Substituer d'abord, ou transformer d'abord?", String.raw`Un seul calcul : les deux méthodes fonctionnent (substituer d'abord donne des calculs plus simples). Plusieurs calculs, une colonne de tableur ou un programme : transforme une seule fois. Vérifie toujours une formule transformée avec une série de nombres.`],
  ],
  tips: [
    String.raw`À partir de $2w=P-2l$, les élèves écrivent $w=P-l$ : ils ne divisent qu'un seul terme. Écris d'abord $w=\frac{P-2l}{2}$.`,
    String.raw`$h(a+b)$ : $h$ multiplie la parenthèse, donc on divise par $h$; on ne le soustrait jamais.`,
    String.raw`Garde les parenthèses qui regroupent : $\frac59(F-32)$ n'est pas $\frac59F-32$.`,
    "Un coefficient négatif garde son signe quand on divise par lui.",
    "Indique les restrictions quand tu divises par une variable (elle ne peut pas valoir 0).",
  ],
  examples: [
    { title: "Une étape", q: String.raw`Isole $l$ dans $A=lw$, puis trouve $l$ lorsque $A=84$ et $w=7$.`,
      steps: [String.raw`\textbf{Règle :} pour isoler une variable dans une formule, annule ce qui lui est appliqué, en faisant la même chose des deux côtés. Ici, $l$ est multiplié par $w$.`, String.raw`Divise les deux côtés par $w$ : $l=\frac Aw$.`, String.raw`$l=\frac{84}{7}=12$.`, String.raw`\textbf{Vérification :} $12\times7=84$ \checkmark`], ans: String.raw`$l=\frac Aw$; $12$` },
    { title: "Le rayon à partir de la circonférence", q: String.raw`Isole $r$ dans $C=2\pi r$ et trouve $r$ lorsque $C=50$ cm.`,
      steps: [String.raw`\textbf{Plan :} $r$ est multiplié par $2\pi$; divise donc les deux côtés par $2\pi$.`, String.raw`$r=\frac{C}{2\pi}$.`, String.raw`$r=\frac{50}{2\pi}\approx7.96$ cm.`, String.raw`\textbf{Vérification :} $2\pi(7.96)\approx50.0$ cm \checkmark`], ans: String.raw`$r=\frac{C}{2\pi}\approx7.96$ cm` },
    { title: "Une droite", q: String.raw`Isole $x$ dans $y=3x-7$.`,
      steps: [String.raw`\textbf{Plan :} $x$ est multiplié par $3$, puis on soustrait $7$. Annule dans l'ordre inverse : ajoute $7$, puis divise par $3$.`, String.raw`Ajoute $7$ : $y+7=3x$.`, String.raw`Divise par $3$ : $x=\frac{y+7}{3}$.`, String.raw`\textbf{Vérifie avec $x=2$ :} $y=3(2)-7=-1$, et $\frac{-1+7}{3}=2$ \checkmark`], ans: String.raw`$x=\frac{y+7}{3}$` },
    { title: "Le taux d'intérêt simple", q: String.raw`Isole $r$ dans $I=Prt$. Quel taux rapporte $90$ dollars sur $1500$ dollars en $2$ ans?`,
      steps: [String.raw`\textbf{Plan :} $r$ est multiplié par $P$ et par $t$; divise les deux côtés par $Pt$.`, String.raw`$r=\frac{I}{Pt}$.`, String.raw`$r=\frac{90}{3000}=0.03$.`, String.raw`\textbf{Convertis et vérifie :} $0.03=3\%$, et $1500(0.03)(2)=90$ \checkmark`], ans: String.raw`$r=\frac I{Pt}$; $3\%$` },
    { title: "Forme générale", q: String.raw`Écris $2x+5y=20$ sous la forme $y=mx+b$.`,
      steps: [String.raw`\textbf{But :} isoler $y$. Soustrais $2x$ des deux côtés, puis divise \emph{chaque} terme par $5$.`, String.raw`$5y=-2x+20$.`, String.raw`$y=-\frac25x+4$.`, String.raw`\textbf{Vérifie avec $x=5$ :} $2(5)+5y=20$ donne $y=2$, et $-\frac25(5)+4=2$ \checkmark`], ans: String.raw`$y=-\frac25x+4$` },
    { title: "Formule de température décimale", q: String.raw`Isole $C$ dans $F=1.8C+32$ et convertis $104\,^\circ$F.`,
      steps: [String.raw`\textbf{Plan :} $C$ est multiplié par $1.8$, puis on ajoute $32$. Annule dans l'ordre inverse : soustrais $32$, puis divise par $1.8$.`, String.raw`$C=\frac{F-32}{1.8}$.`, String.raw`$\frac{72}{1.8}=40$.`, String.raw`\textbf{Vérification :} $1.8(40)+32=72+32=104$ \checkmark`], ans: String.raw`$40\,^\circ$C` },
    { title: "La base d'un triangle", q: String.raw`Isole $b$ dans $A=\frac12bh$; trouve $b$ lorsque $A=36$ et $h=8$.`,
      fig: polyT([[0, 0], [4, 0], [1.2, 2.4]], ["b", "", ""], ""),
      steps: [String.raw`\textbf{Plan :} $b$ est multiplié par $\frac12$ et par $h$; annule $\times\frac12$ avec $\times2$, puis divise par $h$.`, String.raw`$\times2$ : $2A=bh$. $\div h$ : $b=\frac{2A}{h}$.`, String.raw`$b=\frac{72}{8}=9$.`, String.raw`\textbf{Vérification :} $\frac12(9)(8)=36$ \checkmark`], ans: String.raw`$b=\frac{2A}h$; $9$` },
    { title: "La hauteur d'un cône", q: String.raw`Isole $h$ dans $V=\frac13\pi r^2h$. Trouve $h$ lorsque $r=3$ et $V=60\pi$.`,
      steps: [String.raw`\textbf{Plan :} $h$ est multiplié par $\frac13$ et par $\pi r^2$; multiplie par $3$, puis divise par $\pi r^2$.`, String.raw`$\times3$ : $3V=\pi r^2h$. $\div\pi r^2$ : $h=\frac{3V}{\pi r^2}$.`, String.raw`$h=\frac{180\pi}{9\pi}=20$.`, String.raw`\textbf{Vérification :} $\frac13\pi(9)(20)=60\pi$ \checkmark`], ans: String.raw`$h=\frac{3V}{\pi r^2}$; $20$` },
    { title: "La note nécessaire", q: String.raw`La moyenne de trois tests est $A=\frac{a+b+c}{3}$. Isole $c$. Ali a obtenu $72$ et $85$; quelle note lui faut-il au troisième test pour avoir une moyenne de $80$?`,
      steps: [String.raw`\textbf{Plan :} annule le $\div3$ en multipliant par $3$; soustrais ensuite les deux notes connues.`, String.raw`$3A=a+b+c$, donc $c=3A-a-b$.`, String.raw`$c=240-72-85=83$.`, String.raw`\textbf{Vérification :} $\frac{72+85+83}{3}=\frac{240}{3}=80$ \checkmark`], ans: "$c=3A-a-b$; $83$" },
  ],
  problems: PROBLEMS,
};
