// MHF4U-FR Fiche d'exercices 2.6 — Résolution algébrique d'inéquations polynomiales factorisables (édition enseignant)
import { F, gridT, pt } from "./figT.mjs";
import { signTex, lin, k } from "../sign.mjs";
const S = String.raw;

// L'exemple 8 utilise des valeurs test au lieu d'un tableau de signes : une valeur de x par intervalle, puis le signe du produit
const TEST_TABLE = String.raw`\par\smallskip\begin{center}\small\begin{tabular}{|l|c|c|c|}\hline
Intervalle & $x<-1$ & $-1<x<3$ & $x>3$ \\ \hline
Valeur test & $-2$ & $0$ & $4$ \\ \hline
$(x-3)^3(x+1)$ & $(-5)^3(-1)=125$ & $(-3)^3(1)=-27$ & $(1)^3(5)=5$ \\ \hline
\textbf{signe} & \colorbox{iagreen!22}{$+$} & $-$ & \colorbox{iagreen!22}{$+$} \\ \hline
\end{tabular}\\[2pt]{\footnotesize Zone ombrée : là où le produit est $\ge0$. Les zéros $-1$ et $3$ sont inclus.}\end{center}`;

const EXAMPLES = [
  { title: "Tableau de signes", q: S`Résous $(x+4)(x-1)(x-3)>0$.`,
    fig: F({ view: { xmin: -5, xmax: 5, ymin: -40, ymax: 40 }, curves: [{ f: (x) => (x + 4) * (x - 1) * (x - 3) }], points: [pt(-4, 0), pt(1, 0), pt(3, 0)], step: { x: 1, y: 10 } }),
    steps: [S`\textbf{Pourquoi :} un produit ne change de signe qu'à ses zéros.`,
      S`\textbf{Valeurs critiques :} $-4,1,3$.`,
      S`\textbf{Signes du produit :} $-,+,-,+$, comme le montre le tableau.`,
      S`\textbf{Vérification :} $x=0$ : $(4)(-1)(-3)=12>0$ \checkmark`],
    ans: S`$(-4,1)\cup(3,\infty)$`, tab: signTex([lin(1, 4), lin(1, -1), lin(1, -3)], ">") },
  { title: "Un facteur négatif", q: S`Résous $-x(x-2)(x+5)\ge0$.`,
    fig: F({ view: { xmin: -6, xmax: 3, ymin: -20, ymax: 30 }, curves: [{ f: (x) => -x * (x - 2) * (x + 5), color: "red" }], points: [pt(-5, 0), pt(0, 0), pt(2, 0)], step: { x: 1, y: 5 } }),
    steps: [S`\textbf{Valeurs critiques :} $-5,0,2$.`,
      S`\textbf{Inclus la constante :} le $-1$ inverse tous les signes : $+,-,+,-$.`,
      S`\textbf{Lis :} $\ge$ retient les intervalles $+$ avec les zéros.`,
      S`\textbf{Vérification :} $x=1$ : $-(1)(-1)(6)=6\ge0$ \checkmark`],
    ans: S`$(-\infty,-5]\cup[0,2]$`, tab: signTex([k(-1), lin(1, 0), lin(1, -2), lin(1, 5)], ">=") },
  { title: "Factoriser d'abord", q: S`Résous $x^3-2x^2-15x\lt0$.`,
    fig: F({ view: { xmin: -4, xmax: 6, ymin: -40, ymax: 40 }, curves: [{ f: (x) => x ** 3 - 2 * x * x - 15 * x }], points: [pt(-3, 0), pt(0, 0), pt(5, 0)], step: { x: 1, y: 10 } }),
    steps: [S`\textbf{Factorise :} $x(x^2-2x-15)=x(x-5)(x+3)$.`,
      S`\textbf{Signes :} $-,+,-,+$.`,
      S`\textbf{Lis :} les intervalles négatifs, zéros exclus.`,
      S`\textbf{Vérification :} $x=1$ : $1-2-15=-16<0$ \checkmark`],
    ans: S`$(-\infty,-3)\cup(0,5)$`, tab: signTex([lin(1, 0), lin(1, -5), lin(1, 3)], "<") },
  { title: "Théorème des facteurs", q: S`Résous $x^3-3x^2-6x+8\ge0$.`,
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -20, ymax: 14 }, curves: [{ f: (x) => x ** 3 - 3 * x * x - 6 * x + 8 }], points: [pt(-2, 0), pt(1, 0), pt(4, 0)], step: { x: 1, y: 2 } }),
    steps: [S`\textbf{Trouve un zéro :} $P(1)=1-3-6+8=0$.`,
      S`\textbf{Divise :} $x^2-2x-8=(x-4)(x+2)$.`,
      S`\textbf{Signes de $(x-1)(x-4)(x+2)$ :} $-,+,-,+$.`,
      S`\textbf{Vérification :} $x=0$ : $8\ge0$ \checkmark`],
    ans: S`$[-2,1]\cup[4,\infty)$`, tab: signTex([lin(1, -1), lin(1, -4), lin(1, 2)], ">=") },
  { title: "Un zéro double", q: S`Résous $(x+2)^2(x-1)(x-4)\le0$.`,
    fig: F({ view: { xmin: -3.5, xmax: 5, ymin: -40, ymax: 40 }, curves: [{ f: (x) => (x + 2) ** 2 * (x - 1) * (x - 4) }], points: [pt(-2, 0, null, "amber"), pt(1, 0), pt(4, 0)], step: { x: 1, y: 10 } }),
    steps: [S`\textbf{Extrémités :} degré $4$, $a>0$ : positif tout à droite.`,
      S`\textbf{Signes à partir de la droite :} $x>4$ : $+$; $(1,4)$ : $-$; $(-2,1)$ : $+$; $x<-2$ : $+$, sans changement au zéro double.`,
      S`\textbf{Inclus les zéros :} $\le$ inclut aussi la valeur isolée $x=-2$.`,
      S`\textbf{Vérification :} $x=2$ : $16(1)(-2)=-32$ \checkmark`],
    ans: S`$\{-2\}\cup[1,4]$`, tab: signTex([lin(1, 2, 2), lin(1, -1), lin(1, -4)], "<=") },
  { title: "Forme quadratique", q: S`Résous $x^4-17x^2+16\le0$.`,
    fig: F({ view: { xmin: -5, xmax: 5, ymin: -60, ymax: 40 }, curves: [{ f: (x) => x ** 4 - 17 * x * x + 16 }], points: [pt(-4, 0), pt(-1, 0), pt(1, 0), pt(4, 0)], step: { x: 1, y: 10 } }),
    steps: [S`\textbf{Substitue :} $u=x^2$ : $(u-1)(u-16)$.`,
      S`\textbf{Factorise complètement :} $(x-1)(x+1)(x-4)(x+4)$.`,
      S`\textbf{Signes :} $+,-,+,-,+$.`,
      S`\textbf{Vérification :} $x=2$ : $16-68+16=-36\le0$ \checkmark`],
    ans: S`$[-4,-1]\cup[1,4]$`, tab: signTex([lin(1, -1), lin(1, 1), lin(1, -4), lin(1, 4)], "<=") },
  { title: "Réarranger et grouper", q: S`Résous $3x^3+x^2>12x+4$.`,
    fig: F({ view: { xmin: -3, xmax: 3, ymin: -14, ymax: 10 }, curves: [{ f: (x) => 3 * x ** 3 + x * x - 12 * x - 4 }], points: [pt(-2, 0), { x: -1 / 3, y: 0, label: "(−1/3, 0)" }, pt(2, 0)], step: { x: 1, y: 2 } }),
    steps: [S`\textbf{Un seul membre :} $3x^3+x^2-12x-4>0$.`,
      S`\textbf{Groupe :} $x^2(3x+1)-4(3x+1)=(3x+1)(x-2)(x+2)$.`,
      S`\textbf{Signes :} valeurs critiques $-2,-\tfrac13,2$; signes $-,+,-,+$.`,
      S`\textbf{Vérification :} $x=-1$ : membre de gauche $-2$; membre de droite $-8$; $-2>-8$ \checkmark`],
    ans: S`$\left(-2,-\tfrac13\right)\cup(2,\infty)$`, tab: signTex([lin(3, 1), lin(1, -2), lin(1, 2)], ">") },
  { title: "Valeurs test", q: S`Résous $(x-3)^3(x+1)\ge0$ à l'aide de valeurs test.`,
    fig: F({ view: { xmin: -2.5, xmax: 4.5, ymin: -40, ymax: 30 }, curves: [{ f: (x) => (x - 3) ** 3 * (x + 1) }], points: [pt(-1, 0), pt(3, 0)], step: { x: 1, y: 10 } }),
    steps: [S`\textbf{Valeurs critiques :} $-1,3$. L'ordre $3$ est impair, donc le signe change en $3$.`,
      S`\textbf{Teste $-2$ :} $(-125)(-1)>0$.`,
      S`\textbf{Teste $0$ :} $(-27)(1)<0$.`,
      S`\textbf{Teste $4$ :} $(1)(5)>0$.`],
    ans: S`$(-\infty,-1]\cup[3,\infty)$`, tab: TEST_TABLE },
  { title: "Un problème écrit", q: S`Pour quels nombres le produit du nombre et du carré du nombre diminué de 2 est-il au plus égal à 9 fois le nombre?`,
    fig: F({ view: { xmin: -3, xmax: 7, ymin: -25, ymax: 40 }, curves: [{ f: (x) => x * (x - 2) ** 2 }], lines: [{ m: 9, b: 0, color: "green" }], points: [pt(-1, -9), pt(0, 0)], step: { x: 1, y: 5 } }),
    steps: [S`\textbf{Traduis :} $x(x-2)^2\le9x$.`,
      S`\textbf{Un seul membre :} ne divise pas par $x$ : $x\left[(x-2)^2-9\right]\le0$.`,
      S`\textbf{Factorise :} une différence de carrés : $x(x-5)(x+1)\le0$.`,
      S`\textbf{Vérification :} $x=1$ : $1\le9$ \checkmark. $x=6$ : $96\le54$ est faux \checkmark`],
    ans: S`$(-\infty,-1]\cup[0,5]$`, tab: signTex([lin(1, 0), lin(1, -5), lin(1, 1)], "<=") },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Résous $(x-1)(x+2)>0$.`, recap: "Tableau de signes.", ans: String.raw`$(-\infty,-2)\cup(1,\infty)$` },
  { level: 1, q: String.raw`Dresse la liste des valeurs critiques de $x(x-3)(x+4)\ge0$.`, recap: "Valeurs critiques.", ans: String.raw`$-4, 0, 3$` },
  { level: 1, q: String.raw`Quel est le signe de $(x+1)(x-2)(x-5)$ en $x=3$?`, recap: "Valeur test.", ans: "négatif" },
  { level: 2, q: String.raw`Résous $(x+3)(x-2)(x-6)\le0$.`, recap: "Tableau de signes.", ans: String.raw`$(-\infty,-3]\cup[2,6]$` },
  { level: 2, q: String.raw`Résous $x^3-7x^2+10x\ge0$.`, recap: "Factoriser d'abord.", ans: String.raw`$[0,2]\cup[5,\infty)$` },
  { level: 2, q: String.raw`Résous $-(x+1)(x-4)^2\lt0$.`, recap: "Coefficient négatif + zéro double.", ans: String.raw`$(-1,4)\cup(4,\infty)$` },
  { level: 2, q: String.raw`Résous $x^3+x^2-9x-9>0$.`, recap: "Groupement.", ans: String.raw`$(-3,-1)\cup(3,\infty)$` },
  { level: 2, q: String.raw`Résous $x^4-x^2\le0$ et vérifie à l'aide du graphique.`, recap: "Zéro double en 0.", ans: String.raw`$[-1,1]$`,
    fig: F({ view: { xmin: -1.6, xmax: 1.6, ymin: -0.5, ymax: 1.5 }, curves: [{ f: (x) => x ** 4 - x * x }], step: { x: 0.5, y: 0.5 } }) },
  { level: 3, space: 5, q: String.raw`Résous $2x^3-3x^2-11x+6\ge0$.`, recap: "Théorème des facteurs.", ans: String.raw`$(x-3)(2x-1)(x+2)$ : $\left[-2,\tfrac12\right]\cup[3,\infty)$` },
  { level: 3, space: 5, q: String.raw`Résous $x^4-2x^3-8x^2\ge0$.`, recap: "Point isolé.", ans: String.raw`$(-\infty,-2]\cup\{0\}\cup[4,\infty)$` },
  { level: 3, space: 5, q: String.raw`Résous $x^3\ge6x^2-9x$.`, recap: "Facteur carré parfait.", ans: String.raw`$x(x-3)^2\ge0$ : $x\ge0$` },
  { level: 3, space: 5, q: String.raw`Une boîte a pour dimensions $x$, $x-2$ et $x+4$. Pour quelles valeurs de $x$ son volume est-il inférieur à $16x$?`, recap: "Le contexte restreint.", ans: String.raw`$x(x+6)(x-4)\lt0$ avec $x>2$ : $2\lt x\lt4$`, fig: gridT({ xmin: 0, xmax: 6, ymin: 0, ymax: 120 }, { x: 1, y: 20 }) },
  { level: 3, space: 5, q: String.raw`Pour $a>b$, utilise un tableau de signes pour expliquer pourquoi $(x-a)^2(x-b)\le0$ a pour solution $x\le b$ ou $x=a$.`, recap: "Cas général.", ans: "(x − a)² ≥ 0, donc le signe est celui de x − b, sauf que le produit vaut 0 en x = a" },
];

export const WS = {
  code: "2.6",
  title: "Résolution algébrique d'inéquations polynomiales factorisables",
  bigideas: String.raw`Place tous les termes du même côté, factorise complètement et marque les valeurs critiques sur une droite numérique. Un tableau de signes ou une valeur test par intervalle donne le signe du produit sur chaque intervalle. Les zéros d'ordre impair changent le signe; les zéros d'ordre pair ne le changent pas. Inclus les valeurs critiques pour $\le$ et $\ge$, exclus-les pour $\lt$ et $>$, et limite-toi au domaine dans les problèmes appliqués.`,
  goals: ["Réarranger et factoriser.", "Construire un tableau de signes.", "Utiliser des valeurs test.", "Traiter les zéros doubles et le contexte."],
  curriculum: "C4.3",
  vocab: [["Valeur critique", "un zéro du polynôme factorisé"], ["Tableau de signes", "les signes des facteurs sur les intervalles"], ["Valeur test", "une valeur de x par intervalle"]],
  hook: String.raw`Sans graphique, détermine si $(x-2)(x+1)$ est positif ou négatif en $x=10$, $x=0$ et $x=-10$. Quelle régularité observes-tu?`,
  concepts: [
    ["1. Les signes entre les zéros", String.raw`Le signe est constant entre les valeurs critiques.
${F({ view: { xmin: -4, xmax: 4, ymin: -10, ymax: 10 }, curves: [{ f: (x) => (x + 3) * (x - 1) * (x - 2.5) }], points: [pt(-3, 0, false), pt(1, 0, false), pt(2.5, 0, false)], step: { x: 1, y: 2 } })}`],
    ["2. Tableau de signes", String.raw`Une ligne par facteur, une colonne par intervalle; multiplie les signes.`],
    ["3. Ordres pairs", String.raw`$(x-r)^2\ge0$ : aucun changement de signe en $r$.`],
  ],
  tips: ["Ne divise jamais par x.", "Tiens compte du signe de a.", "≤, ≥ : inclus les zéros.", "Vérifie avec une valeur test.", "Attention aux points isolés."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
