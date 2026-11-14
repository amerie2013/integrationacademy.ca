// MCV4U-FR Fiche 3.4 — Fonctions rationnelles simples (édition enseignant). Miroir de ../../mcv4u-ch3/ws/w3_4.mjs.
import { F, gridT, pt, ho } from "./figT.mjs";
import { chartT } from "../csign.mjs";
import { tvT } from "../../mcr3u-extables.mjs";
import { field, box, can, poster } from "../diagrams.mjs";

const S = String.raw;
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const V2 = { xmin: -7, xmax: 7, ymin: -3, ymax: 3 };
const V4 = { xmin: -5, xmax: 7, ymin: -10, ymax: 12 };
const V5 = { xmin: -5, xmax: 5, ymin: -5, ymax: 7 };
const V6 = { xmin: -5, xmax: 3, ymin: -1, ymax: 6 };
const V0 = { xmin: -7, xmax: 7, ymin: -4, ymax: 8 };

const EXAMPLES = [
  { title: "Asymptotes et intersections avec les axes", q: S`Trouve les asymptotes et les intersections avec les axes de $f(x)=\frac{2x-3}{x+1}$, et détermine où elle est croissante.`,
    fig: F({ view: V0, curves: rat((x) => (2 * x - 3) / (x + 1), [-1], V0), vlines: [{ x: -1, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [pt(1.5, 0), pt(0, -3)], step: { x: 1, y: 1 } }),
    steps: [S`\textbf{Verticale :} dénominateur nul en $x=-1$, numérateur $-5\ne0$ : asymptote $x=-1$.`,
      S`\textbf{Horizontale :} degrés égaux, donc $y=\frac21=2$.`,
      S`\textbf{Intersections :} $2x-3=0\Rightarrow\left(\frac32,0\right)$; $f(0)=-3$.`,
      S`\textbf{Dérivée :} $f'(x)=\frac{2(x+1)-(2x-3)}{(x+1)^2}=\frac{5}{(x+1)^2}>0$ sur chaque branche (tableau ci-dessous).`],
    tab: chartT({ cuts: [[-1, "-1"]], undef: [-1], d: ["f'(x)", (x) => 5 / (x + 1) ** 2] }),
    ans: S`asymptotes $x=-1$, $y=2$; intersections $\left(\frac32,0\right)$, $(0,-3)$; croissante sur chaque branche` },
  { title: "Une fonction impaire", q: S`Analyse $f(x)=\frac{x}{x^2-9}$.`,
    fig: F({ view: V2, curves: rat((x) => x / (x * x - 9), [-3, 3], V2), vlines: [{ x: -3, color: "red", dash: true }, { x: 3, color: "red", dash: true }], points: [pt(0, 0)], step: { x: 1, y: 1 } }),
    steps: [S`\textbf{Asymptotes :} $x^2-9=0$ en $x=\pm3$ (numérateur $\pm3\ne0$); degré du numérateur plus petit : $y=0$.`,
      S`\textbf{Symétrie :} $f(-x)=\frac{-x}{x^2-9}=-f(x)$ : impaire.`,
      S`\textbf{Dérivée :} $f'(x)=\frac{(x^2-9)-x(2x)}{(x^2-9)^2}=\frac{-(x^2+9)}{(x^2-9)^2}$. Le numérateur n'est jamais $0$ et est toujours négatif.`,
      S`\textbf{Vérifie :} $f(4)=\frac47\approx0.57$, $f(6)=\frac{6}{27}\approx0.22$ : la fonction descend \checkmark`],
    tab: chartT({ cuts: [[-3, "-3"], [3, "3"]], undef: [-3, 3], d: ["f'(x)", (x) => -(x * x + 9) / (x * x - 9) ** 2] }),
    ans: S`décroissante sur chaque morceau; aucun extremum; passe par $(0,0)$` },
  { title: "Près d'une asymptote verticale", q: S`Décris $f(x)=\frac{x-3}{x+2}$ près de $x=-2$.`,
    fig: F({ view: { xmin: -8, xmax: 5, ymin: -8, ymax: 10 }, curves: rat((x) => (x - 3) / (x + 2), [-2], { xmin: -8, xmax: 5 }), vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [pt(3, 0), pt(0, -1.5)], step: { x: 1, y: 2 } }),
    steps: [S`\textbf{Pourquoi elle explose :} près de $x=-2$, le numérateur vaut environ $-5$ et le dénominateur est minuscule.`,
      S`\textbf{À gauche :} $x<-2$ rend $x+2$ minuscule et négatif : $\frac{-5}{0^-}\to+\infty$.`,
      S`\textbf{À droite :} $x+2$ minuscule et positif : $\frac{-5}{0^+}\to-\infty$.`,
      S`\textbf{Vérifie :} le tableau ci-dessous concorde; loin de l'asymptote, $f\to\frac11=1$.`],
    tab: S`\begin{center}${tvT(["$x$", "$-2.1$", "$-2.01$", "$-1.99$", "$-1.9$"], ["$f(x)$", "$\\frac{-5.1}{-0.1}=51$", "$\\frac{-5.01}{-0.01}=501$", "$\\frac{-4.99}{0.01}=-499$", "$\\frac{-4.9}{0.1}=-49$"])}\end{center}`,
    ans: S`$+\infty$ à gauche, $-\infty$ à droite; asymptote horizontale $y=1$` },
  { title: "Une asymptote oblique", q: S`Analyse $f(x)=\frac{x^2-2x+5}{x-1}$.`,
    fig: F({ view: V4, curves: rat((x) => (x * x - 2 * x + 5) / (x - 1), [1], V4), vlines: [{ x: 1, color: "red", dash: true }], lines: [{ m: 1, b: -1, color: "red", dash: true }], points: [pt(3, 4), pt(-1, -4)], step: { x: 1, y: 2 } }),
    steps: [S`\textbf{Réécris :} $x^2-2x+5=(x-1)^2+4$, donc $f(x)=(x-1)+\frac{4}{x-1}$.`,
      S`\textbf{Asymptotes :} $\frac{4}{x-1}\to0$ loin de l'origine, donc $y=x-1$; verticale $x=1$.`,
      S`\textbf{Dérivée :} $f'(x)=1-\frac{4}{(x-1)^2}=\frac{(x-1)^2-4}{(x-1)^2}=\frac{(x-3)(x+1)}{(x-1)^2}$.`,
      S`\textbf{Valeurs :} $f(3)=2+2=4$ (min), $f(-1)=-2-2=-4$ (max).`],
    tab: chartT({ cuts: [[-1, "-1"], [1, "1"], [3, "3"]], undef: [1], d: ["f'(x)", (x) => 1 - 4 / (x - 1) ** 2] }),
    ans: S`minimum relatif $(3,4)$, maximum relatif $(-1,-4)$; asymptotes $x=1$ et $y=x-1$` },
  { title: "Trou ou asymptote?", q: S`Compare $f(x)=\frac{x+2}{x^2-4}$ en $x=-2$ et en $x=2$.`,
    fig: F({ view: V5, curves: rat((x) => 1 / (x - 2), [2], V5), vlines: [{ x: 2, color: "red", dash: true }], points: [ho(-2, -0.25)], step: { x: 1, y: 1 } }),
    steps: [S`\textbf{Factorise :} $f(x)=\frac{x+2}{(x+2)(x-2)}$.`,
      S`\textbf{En $x=-2$ :} le facteur s'annule, donc $f(x)=\frac{1}{x-2}$ pour $x\ne-2$. Le graphique a un trou en $\left(-2,\frac{1}{-4}\right)$.`,
      S`\textbf{En $x=2$ :} le numérateur vaut $4\ne0$ et le dénominateur vaut $0$ : asymptote verticale.`,
      S`\textbf{Vérifie} (tableau ci-dessous) : près de $-2$, les valeurs se stabilisent à $-0.25$; près de $2$, elles explosent.`],
    tab: S`\begin{center}${tvT(["$x$", "$-2.01$", "$-1.99$", "$1.99$", "$2.01$"], ["$f(x)$", "$-0.2494$", "$-0.2506$", "$-100$", "$100$"])}\end{center}`,
    ans: S`trou en $\left(-2,-\frac14\right)$; asymptote verticale $x=2$` },
  { title: "Un dénominateur au carré", q: S`Analyse $f(x)=\frac{1}{(x+1)^2}$.`,
    fig: F({ view: V6, curves: rat((x) => 1 / (x + 1) ** 2, [-1], V6), vlines: [{ x: -1, color: "red", dash: true }], points: [pt(0, 1)], step: { x: 1, y: 1 } }),
    steps: [S`\textbf{Signe de $f$ :} un carré au dénominateur est positif, donc $f>0$ partout : $f\to+\infty$ des \emph{deux} côtés de $x=-1$.`,
      S`\textbf{Horizontale :} $y=0$, approchée par le haut.`,
      S`\textbf{Dérivée :} $f(x)=(x+1)^{-2}$, $f'(x)=-2(x+1)^{-3}=\frac{-2}{(x+1)^3}$.`,
      S`\textbf{Vérifie :} $f(0)=1>f(1)=\frac14$ : la fonction descend à droite \checkmark`],
    tab: chartT({ cuts: [[-1, "-1"]], undef: [-1], d: ["f'(x)", (x) => -2 / (x + 1) ** 3] }),
    ans: S`croissante sur $(-\infty,-1)$, décroissante sur $(-1,\infty)$; toujours positive` },
  { title: "Couper l'asymptote horizontale", q: S`Trouve les extremums de $f(x)=\frac{x+2}{x^2+5}$.`,
    fig: F({ view: { xmin: -12, xmax: 8, ymin: -0.3, ymax: 0.7 }, curves: [{ f: (x) => (x + 2) / (x * x + 5) }], points: [pt(-5, -0.1), pt(1, 0.5), pt(-2, 0)], step: { x: 2, y: 0.1 } }),
    steps: [S`\textbf{Numérateur de la règle du quotient :} $(x^2+5)-2x(x+2)=-x^2-4x+5=-(x+5)(x-1)$.`,
      S`\textbf{Donc} $f'(x)=\frac{-(x+5)(x-1)}{(x^2+5)^2}$; le dénominateur est positif.`,
      S`\textbf{Valeurs :} $f(-5)=\frac{-3}{30}=-0.1$ (min), $f(1)=\frac36=0.5$ (max).`,
      S`\textbf{Asymptote $y=0$ :} le graphique la coupe en $x=-2$, puis s'en approche par le bas à gauche \checkmark`],
    tab: chartT({ cuts: [[-5, "-5"], [1, "1"]], d: ["f'(x)", (x) => (-(x + 5) * (x - 1)) / (x * x + 5) ** 2] }),
    ans: S`minimum $(-5,-0.1)$, maximum $(1,0.5)$` },
  { title: "Concavité d'une fonction rationnelle", q: S`Trouve les points d'inflexion de $f(x)=\frac{1}{x^2+3}$.`,
    fig: F({ view: { xmin: -5, xmax: 5, ymin: -0.1, ymax: 0.45 }, curves: [{ f: (x) => 1 / (x * x + 3) }], points: [pt(1, 0.25), pt(-1, 0.25), pt(0, 1 / 3)], step: { x: 1, y: 0.05 } }),
    steps: [S`\textbf{Dérivée première :} $f(x)=(x^2+3)^{-1}$, donc $f'(x)=-2x(x^2+3)^{-2}$.`,
      S`\textbf{Dérivée seconde (règle du produit) :} $f''=-2(x^2+3)^{-2}+8x^2(x^2+3)^{-3}=\frac{6x^2-6}{(x^2+3)^3}$.`,
      S`\textbf{Zéros :} $6(x^2-1)=0$ en $x=\pm1$; le signe change aux deux (tableau ci-dessous).`,
      S`\textbf{Points :} $f(\pm1)=\frac14$. Max en $\left(0,\frac13\right)$, puisque $f'$ passe de $+$ à $-$.`],
    tab: chartT({ kind: "conc", cuts: [[-1, "-1"], [1, "1"]], d: ["f''(x)", (x) => (6 * x * x - 6) / (x * x + 3) ** 3] }),
    ans: S`points d'inflexion $\left(\pm1,\frac14\right)$; maximum $\left(0,\frac13\right)$` },
  { title: "Coût moyen", q: S`Produire $x$ articles coûte $500+8x$ dollars. Décris le coût moyen $A(x)=\frac{500+8x}{x}$.`,
    fig: F({ view: { xmin: 0, xmax: 200, ymin: 0, ymax: 60 }, curves: [{ f: (x) => 8 + 500 / x, a: 9, b: 200 }], lines: [{ m: 0, b: 8, color: "red", dash: true }], points: [pt(50, 18), pt(100, 13)], step: { x: 20, y: 10 } }),
    steps: [S`\textbf{Sépare :} $A(x)=\frac{500}{x}+\frac{8x}{x}=8+\frac{500}{x}$.`,
      S`\textbf{Asymptote :} $\frac{500}{x}\to0$, donc $A\to8$ : le coût par article s'approche du coût du matériel de 8 dollars.`,
      S`\textbf{Dérivée :} $A'(x)=-\frac{500}{x^2}<0$ : toujours décroissante.`,
      S`\textbf{Vérifie} (tableau ci-dessous) : répartir les 500 dollars fixes sur plus d'articles fait baisser $A$.`],
    tab: S`\begin{center}${tvT(["$x$", "10", "50", "100", "500"], ["$A(x)$", "58", "18", "13", "9"])}\end{center}`,
    ans: "décroissant vers 8 dollars par article à mesure que la production augmente" },
];


const PROBLEMS = [
  { level: 1, q: S`Trouve l'asymptote verticale de $f(x)=\frac{x+7}{2x-6}$.`, recap: "Dénominateur = 0.", ans: S`$x=3$` },
  { level: 1, q: S`Trouve l'asymptote horizontale de $f(x)=\frac{4x+1}{2x-5}$.`, recap: "Coefficients dominants.", ans: S`$y=2$` },
  { level: 1, q: S`Trouve l'ordonnée à l'origine de $f(x)=\frac{x-6}{x+3}$.`, recap: "f(0).", ans: S`$-2$` },
  { level: 2, q: S`Trouve les asymptotes et les intersections avec les axes de $f(x)=\frac{x+4}{x-1}$.`, recap: "Dénominateur, degrés, zéros.", ans: S`$x=1$, $y=1$; $(-4,0)$, $(0,-4)$` },
  { level: 2, q: S`Analyse $f(x)=\frac{x^2}{x^2+9}$ : asymptote, symétrie et extremums.`, recap: "f′ = 18x/(x² + 9)².", ans: S`$y=1$; paire; minimum $(0,0)$` },
  { level: 2, q: S`Décris $f(x)=\frac{2x}{x-5}$ de chaque côté de $x=5$.`, recap: "Numérateur près de 10.", ans: S`$-\infty$ à gauche, $+\infty$ à droite` },
  { level: 2, q: S`Trouve l'asymptote oblique de $f(x)=\frac{3x^2-x+2}{x}$.`, recap: "Divise chaque terme par x.", ans: S`$y=3x-1$` },
  { level: 2, q: S`Esquisse $f(x)=\frac{-2}{x+3}$ avec ses asymptotes.`, recap: "Réflexion de 2/(x + 3).", ans: S`asymptotes $x=-3$, $y=0$; croissante sur chaque branche`, fig: gridT({ xmin: -8, xmax: 3, ymin: -5, ymax: 5 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Analyse $f(x)=\frac{x^2+2}{x^2-4}$ : asymptotes, intervalles, extremums. Esquisse-la.`, recap: "f = 1 + 6/(x² − 4).", ans: S`$x=\pm2$, $y=1$; $f'=\frac{-12x}{(x^2-4)^2}$ : maximum relatif $\left(0,-\frac12\right)$`, fig: gridT({ xmin: -6, xmax: 6, ymin: -5, ymax: 6 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Analyse $f(x)=\frac{x^2}{x-4}$ : asymptotes et extremums.`, recap: "Divise : x + 4 + 16/(x − 4).", ans: S`$x=4$, $y=x+4$; max $(0,0)$, min $(8,16)$` },
  { level: 3, space: 5, q: S`Trouve $a$ et $b$ pour que $f(x)=\frac{ax+b}{x-2}$ ait l'asymptote horizontale $y=3$ et passe par $(0,1)$.`, recap: "a est l'asymptote; f(0) = b/(−2).", ans: S`$a=3$, $b=-2$` },
  { level: 3, space: 5, q: S`Explique pourquoi $f(x)=\frac{x-1}{x^2-1}$ n'a qu'une seule asymptote verticale, et situe son trou.`, recap: "Factorise et simplifie.", ans: S`$f=\frac1{x+1}$ ($x\ne1$) : asymptote $x=-1$; trou $\left(1,\frac12\right)$` },
  { level: 3, space: 5, q: S`Une population est $P(t)=\frac{400t+200}{t+4}$. Trouve sa valeur à long terme et $P'(3)$.`, recap: "Asymptote horizontale; règle du quotient.", ans: S`elle s'approche de 400; $P'(t)=\frac{1400}{(t+4)^2}$, $P'(3)\approx28.6$` },
];

export const WS = {
  code: "3.4",
  title: "Fonctions rationnelles simples",
  bigideas: S`Pour $f(x)=\frac{p(x)}{q(x)}$ : les asymptotes verticales se trouvent aux zéros de $q$ qui ne s'annulent pas avec $p$ (un facteur simplifié laisse un trou). Comportement aux extrémités : si le degré de $p$ est inférieur à celui de $q$, on obtient $y=0$; des degrés égaux donnent le rapport des coefficients dominants; un degré de plus donne une asymptote oblique obtenue par division longue. Près de $x=a$, les signes de $p$ et de $q$ décident de $\pm\infty$. Ensuite, $f'$ donne les intervalles et les extremums, et $f''$ la concavité — en découpant la droite numérique aux asymptotes.`,
  goals: ["Trouver les asymptotes verticales, horizontales et obliques.", "Décrire le comportement près des asymptotes verticales.", "Distinguer les trous des asymptotes.", "Utiliser f′ et f″ pour esquisser."],
  curriculum: "B1.5",
  vocab: [["Asymptote verticale", "$x=a$ où $|f|\\to\\infty$"], ["Asymptote horizontale", "$y=L$ lorsque $x\\to\\pm\\infty$"], ["Trou", "une discontinuité non essentielle (amovible)"]],
  hook: S`Évalue $\frac{1}{x-2}$ en $x=1.9$, $1.99$, $2.01$, $2.1$ et en $x=1000$. De quelles deux droites le graphique s'approche-t-il?`,
  concepts: [
    ["1. Les asymptotes encadrent le graphique", S`$f(x)=\frac{2x-3}{x+1}$ avec $x=-1$ et $y=2$ :
${F({ view: V0, curves: rat((x) => (2 * x - 3) / (x + 1), [-1], V0), vlines: [{ x: -1, color: "red", dash: true }], lines: [{ m: 0, b: 2, color: "red", dash: true }], points: [pt(1.5, 0), pt(0, -3)], step: { x: 1, y: 1 } })}`],
    ["2. Les degrés", S`$\deg p\lt\deg q$ : $y=0$; égaux : rapport; un de plus : divise.`],
    ["3. Le calcul différentiel", S`Les tableaux de signes de $f'$ et de $f''$ sont découpés aux asymptotes aussi bien qu'à leurs zéros.`],
  ],
  tips: ["Simplifie d'abord les facteurs communs : les trous ne sont pas des asymptotes.", "Les graphiques peuvent couper les asymptotes horizontales.", "Facteurs au carré : même signe des deux côtés.", "Découpe les tableaux de signes aux asymptotes.", "Nomme les asymptotes par leur équation."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
