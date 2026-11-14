// Fiche d'exercices 2.3 — Simplifier des expressions (édition de l'enseignant). Miroir de ../../mth1w-ch2/ws/w2_3.mjs
import { area, rectT, raw } from "../../mth1w-ch2/ws/tikz2.mjs";
import { PROBLEMS } from "./p2_3.mjs";

const SHADED = raw(String.raw`\filldraw[fill=blue!12,draw=blue!70!black,thick] (0,0) rectangle (5.2,3);
\filldraw[fill=white,draw=blue!70!black] (3.6,1.4) rectangle (4.8,2.6); \node[font=\scriptsize] at (4.2,2) {$x$ sur $x$};
\node[below] at (2.6,0) {$2x+5$}; \node[left] at (0,1.5) {$3x$};`, "Aire ombrée = rectangle moins le trou carré.");

export const WS = {
  code: "2.3",
  title: "Simplifier des expressions",
  bigideas: String.raw`La \textbf{distributivité} $a(b+c)=ab+ac$ fait disparaître les parenthèses : le facteur extérieur multiplie \emph{chaque} terme à l'intérieur --- un modèle d'aire le rend visible. Pour multiplier des monômes, multiplie les coefficients et \textbf{additionne les exposants} d'une même base. Pour \textbf{simplifier}, développe toutes les parenthèses, puis regroupe les termes semblables. \textbf{Mettre en évidence} le PGFC, c'est appliquer la distributivité à l'envers.`,
  goals: [
    "Représenter et expliquer la distributivité à l'aide d'un modèle d'aire.",
    "Multiplier des monômes (y compris des puissances de monômes) à l'aide des lois des exposants.",
    "Multiplier un polynôme par un monôme, avec les bons signes.",
    "Développer et simplifier des expressions avec plusieurs parenthèses; vérifier par substitution.",
    "Mettre en évidence le plus grand facteur commun; écrire des expressions d'aire et de périmètre.",
  ],
  curriculum: "C1.3, C1.4",
  vocab: [
    ["Distributivité", "$a(b+c)=ab+ac$"],
    ["Développer", "effectuer la multiplication pour enlever les parenthèses"],
    ["Simplifier", "développer, puis regrouper les termes semblables"],
    ["PGFC", "le plus grand monôme qui divise chaque terme"],
    ["Factoriser", "écrire sous forme de produit (l'inverse de développer)"],
  ],
  hook: String.raw`Demande à la classe de calculer mentalement $7\times98$ et de partager ses stratégies. Quelqu'un fera $7\times100-7\times2=686$. Écris $7(100-2)=7(100)-7(2)$ et demande : « Et si le $100$ était $x$? » C'est la distributivité --- les élèves l'utilisent déjà. Dessine ensuite un rectangle de $7$ sur $(x-2)$.`,
  concepts: [
    ["1. Le modèle d'aire", String.raw`${area("3", ["2x", "5"], ["6x", "15"], "3(2x + 5) = 6x + 15 : l'aire de deux morceaux.")}
Étends aux monômes avec des puissances et aux termes négatifs : le signe de chaque case suit les règles des nombres entiers.
${area("-2x^2", ["3x^2", "-x", "4"], ["-6x^4", "2x^3", "-8x^2"], "−2x²(3x² − x + 4) = −6x⁴ + 2x³ − 8x².")}`],
    ["2. Multiplier des monômes", String.raw`Multiplie les coefficients; additionne les exposants d'une même base; une puissance d'un monôme s'applique à chaque facteur :
\[(3x^2y)(-4xy^3)=-12x^3y^4,\qquad(-2a^3)^2=4a^6,\qquad(2m)^3\cdot m^2=8m^5.\]`],
    ["3. Développer et simplifier", String.raw`(1) Développe chaque parenthèse (un signe moins placé devant vaut $-1$). (2) Regroupe les termes semblables. (3) Vérifie par substitution.
\[2x(x-3)-(x^2-4x+1)=2x^2-6x-x^2+4x-1=x^2-2x-1.\]
Vérification pour $x=2$ : $2(2)(-1)-(4-8+1)=-4+3=-1$; $4-4-1=-1$ ✓.`],
    ["4. Mettre en évidence le PGFC", String.raw`PGFC = (PGFC des coefficients)$\times$(plus petite puissance de chaque variable commune). Divise chaque terme par ce PGFC :
\[10a^3b-15a^2b^2+5a^2b=5a^2b(2a-3b+1).\]
Vérifie en développant. Si le premier coefficient est négatif, mettre en évidence un PGFC négatif est aussi correct : $-4x^2+8x=-4x(x-2)$.`],
  ],
  tips: [
    String.raw`$4(x+3)\neq4x+3$ : dessine le modèle d'aire quand les élèves oublient le deuxième terme.`,
    String.raw`$-(x-5)=-x+5$; les élèves changent seulement le premier signe.`,
    String.raw`$15-3(x-2)$ : multiplie avant de soustraire; ne calcule jamais $15-3$ d'abord.`,
    String.raw`$x\cdot x^2=x^3$, mais $x+x^2$ ne se simplifie pas; $(x^2)^3=x^6$, et non $x^5$.`,
    "En factorisant, un terme égal au PGFC laisse 1 dans la parenthèse, et non 0.",
  ],
  examples: [
    { title: "Modèle d'aire", q: String.raw`Utilise un modèle d'aire pour développer $5(2x-3)$.`, fig: area("5", ["2x", "-3"], ["10x", "-15"], ""),
      steps: [String.raw`\textbf{Distributivité :} $a(b+c)=ab+ac$. Dans le modèle d'aire, le rectangle de $5$ sur $(2x-3)$ se divise en deux parties dont les aires sont les deux produits.`, String.raw`$5\times2x=10x$ et $5\times(-3)=-15$.`, String.raw`\textbf{Vérifie avec $x=4$ :} $5(8-3)=25$ et $40-15=25$ \checkmark`], ans: "$10x-15$" },
    { title: "Monôme fois monôme", q: String.raw`Simplifie $(-6m^2n)(\frac13mn^3)$.`,
      steps: [String.raw`\textbf{Règles :} multiplie les coefficients; pour chaque variable, utilise $b^m\cdot b^n=b^{m+n}$ (une variable sans exposant a l'exposant $1$).`, String.raw`Coefficients : $-6\times\frac13=-2$.`, String.raw`$m^{2+1}n^{1+3}$.`, String.raw`\textbf{Vérifie avec $m=n=1$ :} $(-6)(\frac13)=-2$ \checkmark`], ans: "$-2m^3n^4$" },
    { title: "Puissances de monômes", q: String.raw`Simplifie $(2a^3b)^2\cdot a$.`,
      steps: [String.raw`\textbf{Lois :} $(ab)^n=a^nb^n$ et $(a^m)^n=a^{mn}$ : élève au carré le $2$, le $a^3$ et le $b$.`, String.raw`$(2a^3b)^2=4a^6b^2$.`, String.raw`$4a^6b^2\cdot a=4a^7b^2$.`, String.raw`\textbf{Vérifie avec $a=2,\ b=1$ :} $(2\cdot8)^2\cdot2=512$ et $4\cdot2^7=512$ \checkmark`], ans: "$4a^7b^2$" },
    { title: "Monôme négatif fois trinôme", q: String.raw`Développe $-4y(2y^2-5y+3)$.`,
      steps: [String.raw`\textbf{Distributivité :} multiplie $-4y$ par chacun des trois termes; un négatif fois un négatif donne un positif.`, String.raw`$-4y\cdot2y^2=-8y^3$; $-4y\cdot(-5y)=20y^2$; $-4y\cdot3=-12y$.`, String.raw`\textbf{Vérifie avec $y=1$ :} $-4(2-5+3)=0$ et $-8+20-12=0$ \checkmark`], ans: "$-8y^3+20y^2-12y$" },
    { title: "Deux variables", q: String.raw`Développe $x^2y(3x-2y+xy)$.`,
      steps: [String.raw`\textbf{Distributivité avec les lois des exposants :} $x^2y\cdot3x=3x^3y$, \ $x^2y\cdot(-2y)=-2x^2y^2$, \ $x^2y\cdot xy=x^3y^2$.`, String.raw`$3x^3y-2x^2y^2+x^3y^2$.`, String.raw`\textbf{Vérifie avec $x=y=1$ :} $1(3-2+1)=2$ et $3-2+1=2$ \checkmark`], ans: "$3x^3y-2x^2y^2+x^3y^2$" },
    { title: "Développer et simplifier", q: String.raw`Simplifie $4(x-3)-2(3x-5)+x$.`,
      steps: [String.raw`\textbf{Plan :} distribue chaque nombre dans sa parenthèse (le $-2$ change les deux signes), puis regroupe les termes semblables.`, String.raw`$4x-12-6x+10+x$.`, String.raw`$x$ : $4-6+1=-1$; constantes $-2$.`, String.raw`\textbf{Vérifie avec $x=1$ :} $4(-2)-2(-2)+1=-3$ et $-1-2=-3$ \checkmark`], ans: "$-x-2$" },
    { title: "Développer et simplifier avec des puissances", q: String.raw`Simplifie $3a(a^2-2)-a(4a^2-a+6)$.`,
      steps: [String.raw`\textbf{Plan :} distribue $3a$ et $-a$ (chaque signe de la deuxième parenthèse change), puis regroupe les termes en $a^3$, en $a^2$ et en $a$.`, String.raw`$3a^3-6a-4a^3+a^2-6a$.`, String.raw`$-a^3+a^2-12a$.`, String.raw`\textbf{Vérifie avec $a=1$ :} $3(-1)-1(9)=-12$ et $-1+1-12=-12$ \checkmark`], ans: "$-a^3+a^2-12a$" },
    { title: "Mettre en évidence le PGFC", q: String.raw`Factorise $18x^2y-24xy^2+6xy$.`,
      steps: [String.raw`\textbf{Règle :} le PGFC est le PGFC des coefficients ($18,24,6\to6$) multiplié par chaque variable à sa plus petite puissance présente dans tous les termes ($x^1$, $y^1$).`, String.raw`PGFC $=6xy$.`, String.raw`$18x^2y\div6xy=3x$, $-24xy^2\div6xy=-4y$, $6xy\div6xy=1$.`, String.raw`\textbf{Vérifie en développant :} $6xy(3x)=18x^2y$, $6xy(-4y)=-24xy^2$, $6xy(1)=6xy$ \checkmark`], ans: "$6xy(3x-4y+1)$" },
    { title: "Aire d'une région ombrée", q: String.raw`Un rectangle de $3x$ sur $2x+5$ a un trou carré de $x$ sur $x$. Écris l'aire ombrée et évalue-la pour $x=4$.`, fig: SHADED,
      steps: [String.raw`\textbf{Modèle :} aire ombrée $=$ aire du rectangle $-$ aire du trou, avec $A=lw$ et l'aire d'un carré $=x^2$.`, String.raw`$3x(2x+5)-x^2=6x^2+15x-x^2=5x^2+15x$.`, String.raw`$x=4$ : $80+60=140$.`, String.raw`\textbf{Vérifie avec des nombres :} pour $x=4$, le rectangle mesure $12\times13=156$ et le trou $16$ : $156-16=140$ \checkmark`], ans: "$5x^2+15x$; $140$ unités carrées" },
  ],
  problems: PROBLEMS,
};
