// MCR3U-FR fiche 2.3 — Simplification d'expressions rationnelles (miroir de W23 / LEARN23 de ../../mcr3u-ch2/t2_3.mjs).
import { verify } from "../lib.mjs";
import { pgf, eqTableTex } from "../libtex.mjs";
import { R, times, divide, eqv, neTex, ptex, assert } from "../kit3.mjs";

const r = String.raw;
const W1 = R(["x+5"], ["x-5", "x+2"]); assert.strictEqual(ptex(W1.D), "x^2 - 3x - 10");
const W3o = R(["x-4", "x+4"], ["x-4", "x+3"]), W3s = R(["x+4"], ["x+3"]); eqv("W-E3", W3o, W3s);
const W4o = R(["2x-3", "2x+3"], ["2x-3", "x+2"]), W4s = R(["2x+3"], ["x+2"]); eqv("W-E4", W4o, W4s);
verify("W-E5b", (x) => (3 - x) / (x * x - 9), (x) => -1 / (x + 3));
const W6a = R(["x+5", "x-3"], ["x-3", "x+3"]), W6b = R(["x+3"], ["x+5"]); eqv("W-E6", times(W6a, W6b), { f: () => 1 });
const W7a = R(["2", "x-2", "x+2"], ["x+3", "x+3"]), W7b = R(["x-2"], ["x+3"]), W7s = R(["2", "x+2"], ["x+3"]); eqv("W-E7", divide(W7a, W7b), W7s);
const Q1 = R(["2x-1"], ["x-4", "x+3"]);
const Q3o = R(["x-5", "x+4"], ["x-5", "x+5"]), Q3s = R(["x+4"], ["x+5"]); eqv("W-Q3", Q3o, Q3s);
const Q4o = R(["3x-2", "x+1"], ["3x-2", "x-1"]), Q4s = R(["x+1"], ["x-1"]); eqv("W-Q4", Q4o, Q4s);
const Q6a = R(["x-1", "x+1"], ["x+1", "x+2"]), Q6b = R(["x+2"], ["x-1"]); eqv("W-Q6", times(Q6a, Q6b), { f: () => 1 });
const Q7a = R(["x-3", "x-3"], ["x-2", "x+2"]), Q7b = R(["x-3"], ["x+2"]), Q7s = R(["x-3"], ["x-2"]); eqv("W-Q7", divide(Q7a, Q7b), Q7s);
const Q8o = R(["2", "x", "x-2", "x+2"], ["x", "x-2"]), Q8s = R(["2", "x+2"], ["1"]); eqv("W-Q8", Q8o, Q8s);
const Q14o = R(["x-1", "x+1", "x-2", "x+2"], ["x-1", "x-2", "x+2"]), Q14s = R(["x+1"], ["1"]); eqv("W-Q14", Q14o, Q14s);
const eqTrap = [{ tex: String.raw`\dfrac{x^2+9}{x+3}`, f: (x) => (x * x + 9) / (x + 3) }, { tex: "x+3", f: (x) => x + 3 }];

export const WS = {
  code: "2.3", unit: "2 : Expressions algébriques équivalentes", title: "Simplification d'expressions rationnelles",
  intro: r`Une \textbf{expression rationnelle} est un quotient de polynômes. On la simplifie en \textbf{factorisant} et en \textbf{éliminant les facteurs communs} --- jamais des termes --- et on note toujours les \textbf{restrictions} : les valeurs de $x$ qui annulent un dénominateur \emph{de départ}. Une expression simplifiée n'est équivalente à l'expression de départ que pour les valeurs permises de $x$; là où un facteur éliminé vaut zéro, le graphique a un \textbf{trou}.`,
  ideas: [
    r`\textbf{Étapes :} (1) factorise complètement; (2) écris les restrictions à partir des dénominateurs \emph{de départ}; (3) élimine les facteurs communs; (4) garde les restrictions.`,
    r`\textbf{Élimine des facteurs, pas des termes :} $\dfrac{x+6}{6}\ne x+1$ parce que le $6$ est \emph{additionné}.`,
    r`\textbf{Opposés :} $\dfrac{a-b}{b-a}=-1$. Réécris $b-a=-(a-b)$ avant de simplifier.`,
    r`\textbf{Diviser}, c'est multiplier par l'inverse --- et le \emph{numérateur} du diviseur devient aussi une restriction.`,
    r`\textbf{Trou ou asymptote :} une restriction dont le facteur s'élimine est un trou; une restriction qui reste au dénominateur est une asymptote verticale. Trouve l'ordonnée du trou en substituant dans la forme simplifiée.`,
  ],
  examples: [
    { t: "Restrictions", body: String.raw`Énonce les restrictions de $${W1.exp}$.\soln Factorise le dénominateur : $x^2-3x-10=(x-5)(x+2)$. Annule chaque facteur. \\ $${neTex(W1.d)}$. Le numérateur ne crée jamais de restriction. \\ \textbf{Vérification :} pour $x=5$ : $25-15-10=0$ \checkmark. Pour $x=-2$ : $4+6-10=0$ \checkmark` +
      pgf({ curves: [{ f: "x^2-3*x-10" }], bounds: [-4, 7, -14, 10], dots: [[5, 0, "(5,0)"], [-2, 0, "(-2,0)"]], xt: 1, yt: 2, note: "Le dénominateur sous forme de graphique : ses zéros sont les restrictions." }) },
    { t: "Monômes", body: String.raw`Simplifie $\dfrac{20m^4n^2}{35mn^6}$.\soln Nombres : $\dfrac{20}{35}=\dfrac47$. Variables : $m^{4-1}=m^3$ reste en haut; $n^{2-6}=n^{-4}$, donc $n^4$ va en bas. \\ $=\dfrac{4m^3}{7n^4}$, avec $m\ne0,\ n\ne0$. \\ \textbf{Vérification :} pour $m=n=1$ : $\frac{20}{35}=\frac47$ \checkmark` +
      pgf({ curves: [{ f: "4*x^3/7" }], bounds: [-2, 2, -5, 5], dots: [[1, 0.57, "(1,4/7)"]], xt: 1, yt: 1, note: "Avec $n=1$, l'expression est $\\frac{4m^3}{7}$." }) },
    { t: "Trinôme et différence de carrés", body: String.raw`Simplifie $${W3o.exp}$.\soln $\dfrac{(x-4)(x+4)}{(x-4)(x+3)}$; restrictions $${neTex(W3o.d)}$. Élimine $(x-4)$. \\ $=${W3s.tex}$, $${neTex(W3o.d)}$. \\ \textbf{Vérification :} pour $x=0$ : l'expression de départ et la forme simplifiée valent toutes deux $\frac43$ \checkmark` +
      pgf({ curves: [{ f: "(x+4)/(x+3)" }], bounds: [-2, 8, 0, 4], holes: [[4, 1.143]], xt: 1, yt: 1, note: "La courbe simplifiée, avec un trou en $x=4$." }) },
    { t: "Trinôme complexe", body: String.raw`Simplifie $${W4o.exp}$.\soln $4x^2-9=(2x-3)(2x+3)$ et $2x^2+x-6=(2x-3)(x+2)$. \\ Restrictions : $x\ne\tfrac32,\ -2$. Élimine $(2x-3)$. \\ $=${W4s.tex}$. \\ \textbf{Vérification :} pour $x=0$ : $\frac{-9}{-6}=\frac32$, et $\frac{3}{2}$ \checkmark` +
      pgf({ curves: [{ f: "(2*x+3)/(x+2)" }], bounds: [-1, 6, 0, 3], holes: [[1.5, 1.714]], xt: 1, yt: 1, note: "La courbe simplifiée, avec un trou en $x=\\frac32$." }) },
    { t: "Facteurs opposés", body: String.raw`Simplifie $\dfrac{3-x}{x^2-9}$.\soln $3-x=-(x-3)$ et $x^2-9=(x-3)(x+3)$. \\ $\dfrac{-(x-3)}{(x-3)(x+3)}=-\dfrac{1}{x+3}$, avec $x\ne\pm3$. \\ \textbf{Vérification :} pour $x=0$ : $\frac{3}{-9}=-\frac13$, et $-\frac13$ \checkmark` +
      pgf({ curves: [{ f: "-1/(x+3)" }], bounds: [-2, 7, -1.2, 0.2], holes: [[3, -0.167]], xt: 1, yt: 0.2, note: "La courbe simplifiée, avec un trou en $x=3$." }) },
    { t: "Multiplier", body: String.raw`Simplifie $${W6a.exp}\times${W6b.exp}$.\soln Factorise : $\dfrac{(x+5)(x-3)}{(x-3)(x+3)}\times\dfrac{x+3}{x+5}$. Restrictions : $${neTex(W6a.d, W6b.d)}$. \\ Tout s'élimine : $=1$, $${neTex(W6a.d, W6b.d)}$ --- la réponse est $1$ \emph{sauf} en trois points manquants. \\ \textbf{Vérification :} pour $x=0$ : $\frac{-15}{-9}\times\frac35=1$ \checkmark` +
      pgf({ curves: [{ f: "1+0*x" }], bounds: [-6, 5, -1, 3], holes: [[3, 1], [-3, 1], [-5, 1]], xt: 1, yt: 1, note: "La droite $y=1$ avec trois points manquants." }) },
    { t: "Diviser", body: String.raw`Simplifie $${W7a.exp}\div${W7b.exp}$.\soln Factorise et inverse la deuxième fraction : $\dfrac{2(x-2)(x+2)}{(x+3)^2}\times\dfrac{x+3}{x-2}$. \\ Élimine $(x-2)$ et un $(x+3)$ : $=${W7s.tex}$. \\ Restrictions : $x\ne-3$ (dénominateurs) et $x\ne2$ (on a divisé par $\frac{x-2}{x+3}$). Donc $${neTex(W7a.d, W7b.d, W7b.n)}$.` +
      pgf({ curves: [{ f: "2*(x+2)/(x+3)" }], bounds: [-2, 8, 0, 3], holes: [[2, 1.6]], xt: 1, yt: 1, note: "La courbe simplifiée, avec un trou en $x=2$." }) },
    { t: "Application : la masse volumique", body: String.raw`Un bloc a une masse de $(15x^2-4x-4)$ g et un volume de $(3x-2)$ cm$^3$. Écris sa masse volumique sous forme d'expression simplifiée et évalue-la pour $x=2$.\soln Masse volumique $=\dfrac{\text{masse}}{\text{volume}}=\dfrac{(5x+2)(3x-2)}{3x-2}=5x+2$ g/cm$^3$, $x\ne\tfrac23$. \\ Pour $x=2$ : $12$ g/cm$^3$. Vérification : $\dfrac{60-8-4}{4}=12$ \checkmark.` +
      pgf({ curves: [{ f: "5*x+2" }], bounds: [0, 3, 0, 18], dots: [[2, 12, "(2,12)"]], xt: 1, yt: 2 }) },
    { t: "Trouver un trou", body: String.raw`Simplifie $y=\dfrac{x^2-x-6}{x-3}$ et trouve les coordonnées du trou.\soln $\dfrac{(x-3)(x+2)}{x-3}=x+2$, $x\ne3$. \\ En $x=3$, la droite donne $y=5$, donc le trou est en $(3,5)$.` +
      pgf({ curves: [{ f: "x+2" }], bounds: [-4, 6, -3, 9], holes: [[3, 5]], xt: 1, yt: 2, note: "Le graphique est la droite $y=x+2$ privée d'un point." }) },
    { t: "Vérifie avant de faire confiance", body: String.raw`Un élève affirme que $\dfrac{x^2+9}{x+3}=x+3$. Vérifie l'affirmation.
${eqTableTex(eqTrap, [0, 1, 2, 3], { check: true })}
\soln Les valeurs concordent pour $x=0$ et $x=3$, mais pas pour $x=1$ ni pour $x=2$. Une seule différence suffit pour prouver que les expressions ne sont \emph{pas} équivalentes. $x^2+9$ est une somme de carrés et ne se factorise pas, donc rien ne s'élimine : l'affirmation confond un \emph{terme} et un \emph{facteur}.` },
  ],
  questions: [
    { ask: String.raw`Énonce les restrictions de $${Q1.exp}$.`, ws: "1.8cm" },
    { ask: String.raw`Simplifie $\dfrac{36a^2b^5}{48a^4b^2}$.`, ws: "2cm" },
    { ask: String.raw`Simplifie $${Q3o.exp}$ et énonce les restrictions.`, ws: "3cm" },
    { ask: String.raw`Simplifie $${Q4o.exp}$ et énonce les restrictions.`, ws: "3.4cm" },
    { ask: String.raw`Simplifie $\dfrac{2-x}{x^2-4x+4}$. (Cherche des opposés.)`, ws: "3cm" },
    { ask: String.raw`Simplifie $${Q6a.exp}\times${Q6b.exp}$. Énonce toutes les restrictions.`, ws: "3.6cm" },
    { ask: String.raw`Simplifie $${Q7a.exp}\div${Q7b.exp}$. Énonce toutes les restrictions.`, ws: "3.8cm" },
    { ask: String.raw`Simplifie $${Q8o.exp}$ et énonce les restrictions.`, ws: "3.2cm" },
    { ask: String.raw`Le graphique de $y=\dfrac{x^2+x-12}{x^2-9}$ a un trou et une asymptote verticale. Trouve les coordonnées du trou et l'équation de l'asymptote.`, ws: "3.8cm" },
    { ask: String.raw`Une barre de métal a une masse de $(10x^2-x-3)$ g et un volume de $(2x+1)$ cm$^3$. Trouve sa masse volumique sous sa forme la plus simple, puis sa valeur lorsque $x=4$.`, ws: "3.2cm" },
    { ask: String.raw`Un élève écrit $\dfrac{x^2+x-6}{x^2-9}=\dfrac{x-6}{-9}$, \emph{en éliminant les termes en $x^2$}. Vérifie l'affirmation pour $x=4$, explique l'erreur et simplifie correctement.`, ws: "3.8cm" },
    { ask: String.raw`Explique pourquoi $\dfrac{x+4}{4}$ n'est pas égale à $x+1$. Utilise la valeur $x=4$ et les mots \emph{terme} et \emph{facteur}.`, ws: "3cm" },
    { ask: String.raw`Simplifie $\dfrac{x^2-4}{x+2}$, puis esquisse son graphique en indiquant le trou.`, grid: true },
    { ask: String.raw`Simplifie $${Q14o.exp}$ et donne toutes les restrictions. (Factorise le dénominateur par groupement.)`, ws: "4.4cm", challenge: true },
  ],
  answers: [
    String.raw`$x^2-x-12=(x-4)(x+3)$, donc $${neTex(Q1.d)}$.`,
    String.raw`$\dfrac{3b^3}{4a^2}$, avec $a\ne0,\ b\ne0$.`,
    String.raw`$\dfrac{(x-5)(x+4)}{(x-5)(x+5)}=${Q3s.tex}$, $${neTex(Q3o.d)}$.`,
    String.raw`$\dfrac{(3x-2)(x+1)}{(3x-2)(x-1)}=${Q4s.tex}$, $${neTex(Q4o.d)}$.`,
    String.raw`$\dfrac{-(x-2)}{(x-2)^2}=-\dfrac{1}{x-2}$, $x\ne2$.`,
    String.raw`$\dfrac{(x-1)(x+1)}{(x+1)(x+2)}\times\dfrac{x+2}{x-1}=1$, $${neTex(Q6a.d, Q6b.d)}$.`,
    String.raw`$\dfrac{(x-3)^2}{(x-2)(x+2)}\times\dfrac{x+2}{x-3}=${Q7s.tex}$, $${neTex(Q7a.d, Q7b.d, Q7b.n)}$.`,
    String.raw`$\dfrac{2x(x-2)(x+2)}{x(x-2)}=2(x+2)$, $${neTex(Q8o.d)}$.`,
    String.raw`$\dfrac{(x+4)(x-3)}{(x-3)(x+3)}=\dfrac{x+4}{x+3}$. Trou : $x=3$, $y=\tfrac76$, donc en $(3,\tfrac76)$. Le facteur $(x+3)$ reste, donc l'asymptote verticale est $x=-3$.`,
    String.raw`$\dfrac{(5x-3)(2x+1)}{2x+1}=5x-3$ g/cm$^3$, $x\ne-\tfrac12$. Pour $x=4$ : $17$ g/cm$^3$.`,
    String.raw`Pour $x=4$ : $\dfrac{16+4-6}{16-9}=2$ mais $\dfrac{4-6}{-9}=\tfrac29$. L'élève a éliminé $x^2$, qui est un \emph{terme} de chaque partie. Bonne réponse : $\dfrac{(x-2)(x+3)}{(x-3)(x+3)}=\dfrac{x-2}{x-3}$, $x\ne\pm3$ (pour $x=4$, cela donne $2$ \checkmark).`,
    String.raw`Pour $x=4$ : $\dfrac{8}{4}=2$ mais $x+1=5$. Le $4$ du numérateur est \emph{additionné} à $x$ (un terme), donc il ne peut pas être éliminé; seul un \emph{facteur} qui multiplie tout le numérateur et tout le dénominateur peut l'être.`,
    String.raw`$\dfrac{(x-2)(x+2)}{x+2}=x-2$, $x\ne-2$. Le graphique est la droite $y=x-2$ avec un trou en $(-2,-4)$.`,
    String.raw`Dénominateur : $x^2(x-1)-4(x-1)=(x-1)(x-2)(x+2)$. Numérateur : $(x^2-1)(x^2-4)=(x-1)(x+1)(x-2)(x+2)$. Résultat $${Q14s.tex}$, $${neTex(Q14o.d)}$.`,
  ],
  learn: [
    ["Élimine des facteurs, pas des termes", r`On simplifie une expression rationnelle en factorisant le numérateur et le dénominateur, puis en éliminant les \textbf{facteurs} communs. Dans $\dfrac{x+6}{6}$, on ne peut rien éliminer : le $6$ est un \emph{terme}. $\dfrac{a-b}{b-a}=-1$.`],
    ["Restrictions", r`Chaque valeur qui annule un dénominateur \emph{de départ} est exclue --- et le reste après la simplification. Quand on divise, on exclut aussi les valeurs qui annulent le numérateur du diviseur.`],
    ["Trous et asymptotes", r`Un facteur éliminé laisse un \textbf{trou} : substitue la valeur exclue de $x$ dans l'expression simplifiée pour trouver son ordonnée. Un facteur qui reste au dénominateur donne une \textbf{asymptote} verticale.`],
  ],
};
