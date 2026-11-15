// MCR3U-FR fiche 2.4 — Addition et soustraction d'expressions rationnelles (miroir de W24 / LEARN24 de ../../mcr3u-ch2/t2_4.mjs).
import { verify } from "../lib.mjs";
import { pgf, eqTableTex } from "../libtex.mjs";
import { RE, minus, eqv, t } from "../kit4.mjs";

const r = String.raw;
const w1 = RE("6x+9", ["2x-1"]); eqv("W-E1", minus(t("9x+4", "2x-1"), t("3x-5", "2x-1")), w1);
const w2 = RE("14x^2+15", ["20", "x", "x", "x"]); verify("W-E2", (x) => 7 / (10 * x) + 3 / (4 * x ** 3), w2.f);
const w3 = RE("7x-18", ["x+1", "x-4"]); verify("W-E3", (x) => 5 / (x + 1) + 2 / (x - 4), w3.f);
const w4 = RE("x+15", ["x-6", "x+1"]); verify("W-E4", (x) => 3 / (x - 6) - 2 / (x + 1), w4.f);
const w5 = RE("5x+6", ["x-2", "x+2", "x+1"]); verify("W-E5", (x) => 4 / (x * x - 4) + 1 / (x * x - x - 2), w5.f);
const eqSum = [{ tex: String.raw`\frac1x+\frac13`, f: (x) => 1 / x + 1 / 3 }, { tex: String.raw`\frac{2}{x+3}`, f: (x) => 2 / (x + 3) }, { tex: String.raw`\frac{x+3}{3x}`, f: (x) => (x + 3) / (3 * x) }];
const q1 = RE("6x-6", ["3x-2"]); eqv("W-Q1", minus(t("8x+1", "3x-2"), t("2x+7", "3x-2")), q1);
const q2 = RE("6x+5", ["8", "x", "x"]); verify("W-Q2", (x) => 5 / (8 * x * x) + 3 / (4 * x), q2.f);
const q3 = RE("7x-16", ["x+2", "x-3"]); verify("W-Q3", (x) => 6 / (x + 2) + 1 / (x - 3), q3.f);
const q4 = RE("-3x+13", ["x-1", "x+4"]); verify("W-Q4", (x) => 2 / (x - 1) - 5 / (x + 4), q4.f);
const q5 = RE("5x-17", ["x-4", "x+4", "x-3"]); verify("W-Q5", (x) => 3 / (x * x - 16) + 2 / (x * x + x - 12), q5.f);
const q12 = RE("2x+1", ["x", "x-1", "x+1"]); verify("W-Q12", (x) => 1 / (x * x - x) + 1 / (x * x - 1), q12.f);

export const WS = {
  code: "2.4", unit: "2 : Expressions algébriques équivalentes", title: "Addition et soustraction d'expressions rationnelles",
  intro: r`On ne peut additionner des fractions que si elles comptent des parts de même taille; on les réécrit donc sur un \textbf{plus petit dénominateur commun (PPDC)} trouvé en \emph{factorisant} les dénominateurs. Après avoir combiné, factorise le numérateur, simplifie et garde les restrictions de \emph{chaque} dénominateur de départ.`,
  ideas: [
    r`\textbf{PPDC :} factorise chaque dénominateur; prends chaque facteur différent à sa \emph{plus grande puissance}, en comptant une seule fois les facteurs communs.`,
    r`\textbf{Construis des fractions équivalentes :} multiplie le haut et le bas par les facteurs qui manquent à la fraction.`,
    r`\textbf{Soustraire :} mets tout le deuxième numérateur entre parenthèses --- le signe moins change \emph{chaque} terme à l'intérieur.`,
    r`\textbf{Opposés :} $\dfrac{a}{x-4}$ et $\dfrac{b}{4-x}$ ont un dénominateur commun une fois qu'on écrit $4-x=-(x-4)$.`,
    r`\textbf{Taux de travail et circuits en parallèle :} les taux et les inverses s'additionnent : $\dfrac1x+\dfrac1y=\dfrac{x+y}{xy}$.`,
  ],
  examples: [
    { t: "Même dénominateur", body: String.raw`Simplifie $\dfrac{9x+4}{2x-1}-\dfrac{3x-5}{2x-1}$.\soln \textbf{Règle :} même dénominateur : combine les numérateurs, avec des parenthèses. \\ $\dfrac{(9x+4)-(3x-5)}{2x-1}=\dfrac{9x+4-3x+5}{2x-1}$. \\ $=${w1.tex}=\dfrac{3(2x+3)}{2x-1}$, $x\ne\tfrac12$. \\ \textbf{Vérification :} pour $x=1$ : $13-(-2)=15$, et $\frac{6+9}{1}=15$ \checkmark` +
      pgf({ curves: [{ f: "(6*x+9)/(2*x-1)" }], bounds: [1, 6, 0, 20], dots: [[1, 15, "(1,15)"]], xt: 1, yt: 5 }) },
    { t: "Dénominateurs monômes", body: String.raw`Simplifie $\dfrac{7}{10x}+\dfrac{3}{4x^3}$.\soln \textbf{Règle :} construis le PPDC avec la plus grande puissance de chaque facteur. \\ $10x=2\cdot5\cdot x$ et $4x^3=2^2\cdot x^3$, donc PPDC $=2^2\cdot5\cdot x^3=20x^3$. \\ $\dfrac{7\cdot2x^2}{20x^3}+\dfrac{3\cdot5}{20x^3}=${w2.tex}$, $x\ne0$. \\ \textbf{Vérification :} pour $x=1$ : $\frac7{10}+\frac34=\frac{29}{20}$, et $\frac{14+15}{20}=\frac{29}{20}$ \checkmark` +
      pgf({ curves: [{ f: "(14*x^2+15)/(20*x^3)" }], bounds: [0.5, 4, 0, 4], dots: [[1, 1.45, "(1,29/20)"]], xt: 0.5, yt: 1 }) },
    { t: "Deux dénominateurs binômes", body: String.raw`Simplifie $\dfrac{5}{x+1}+\dfrac{2}{x-4}$.\soln PPDC $(x+1)(x-4)$. \\ $\dfrac{5(x-4)+2(x+1)}{(x+1)(x-4)}=\dfrac{5x-20+2x+2}{(x+1)(x-4)}=${w3.tex}$, $x\ne-1,4$. \\ \textbf{Vérification :} pour $x=0$ : $5-\frac12=\frac92$, et $\frac{-18}{-4}=\frac92$ \checkmark` +
      pgf({ curves: [{ f: "(7*x-18)/((x+1)*(x-4))" }], bounds: [-0.5, 3, 0, 12], dots: [[0, 4.5, "(0,4.5)"]], xt: 0.5, yt: 2 }) },
    { t: "Soustraire", body: String.raw`Simplifie $\dfrac{3}{x-6}-\dfrac{2}{x+1}$.\soln $\dfrac{3(x+1)-2(x-6)}{(x-6)(x+1)}$. Mets le deuxième produit entre parenthèses! \\ $3x+3-2x+12=x+15$ : $${w4.tex}$, $x\ne6,-1$. \\ \textbf{Vérification :} pour $x=0$ : $-\frac12-2=-\frac52$, et $\frac{15}{-6}=-\frac52$ \checkmark` +
      pgf({ curves: [{ f: "(x+15)/((x-6)*(x+1))" }], bounds: [-0.5, 5, -6, 0], dots: [[0, -2.5, "(0,-2.5)"]], xt: 1, yt: 1 }) },
    { t: "Factorise d'abord les dénominateurs", body: String.raw`Simplifie $\dfrac{4}{x^2-4}+\dfrac{1}{x^2-x-2}$.\soln $x^2-4=(x-2)(x+2)$; $x^2-x-2=(x-2)(x+1)$. PPDC $(x-2)(x+2)(x+1)$ --- $(x-2)$ n'est compté qu'une fois. \\ Numérateur : $4(x+1)+1(x+2)=5x+6$. \\ $${w5.tex}$, $x\ne2,-2,-1$. \\ \textbf{Vérification :} pour $x=0$ : $-1-\frac12=-\frac32$, et $\frac{6}{(-2)(2)(1)}=-\frac32$ \checkmark` +
      pgf({ curves: [{ f: "(5*x+6)/((x-2)*(x+2)*(x+1))" }], bounds: [-0.5, 1.5, -6, 0], dots: [[0, -1.5, "(0,-1.5)"]], xt: 0.5, yt: 1 }) },
    { t: "Dénominateurs opposés", body: String.raw`Simplifie $\dfrac{7}{x-5}-\dfrac{2}{5-x}$.\soln $\dfrac{2}{5-x}=-\dfrac{2}{x-5}$, donc $\dfrac{7}{x-5}+\dfrac{2}{x-5}=\dfrac{9}{x-5}$, $x\ne5$. \\ \textbf{Vérification :} pour $x=6$ : $7-\frac2{-1}=9$, et $\frac91=9$ \checkmark` +
      pgf({ curves: [{ f: "9/(x-5)" }], bounds: [5.5, 12, 0, 20], dots: [[6, 9, "(6,9)"]], xt: 1, yt: 5 }) },
    { t: "Combiner, puis simplifier", body: String.raw`Simplifie $\dfrac{x}{x-5}-\dfrac{25}{x^2-5x}$.\soln $x^2-5x=x(x-5)$; PPDC $x(x-5)$. \\ $\dfrac{x\cdot x-25}{x(x-5)}=\dfrac{(x-5)(x+5)}{x(x-5)}=\dfrac{x+5}{x}$, $x\ne0,5$. \\ \textbf{Vérification :} pour $x=1$ : $-\frac14+\frac{25}4=6$, et $\frac61=6$ \checkmark` +
      pgf({ curves: [{ f: "(x+5)/x" }], bounds: [0.5, 8, 0, 12], dots: [[1, 6, "(1,6)"]], holes: [[5, 2]], xt: 1, yt: 2 }) },
    { t: "Trois termes", body: String.raw`Simplifie $\dfrac2x+\dfrac{3}{x+2}-\dfrac{4}{x(x+2)}$.\soln PPDC $x(x+2)$ : $\dfrac{2(x+2)+3x-4}{x(x+2)}=\dfrac{5x}{x(x+2)}=\dfrac{5}{x+2}$, $x\ne0,-2$. \\ \textbf{Vérification :} pour $x=1$ : $2+1-\frac43=\frac53$, et $\frac53$ \checkmark` +
      pgf({ curves: [{ f: "5/(x+2)" }], bounds: [-1, 6, 0, 6], dots: [[1, 1.667, "(1,5/3)"]], holes: [[0, 2.5]], xt: 1, yt: 1 }) },
    { t: "Une fraction composée", body: String.raw`Simplifie $\dfrac{x-\frac4x}{1-\frac2x}$.\soln Haut : $\dfrac{x^2-4}{x}$. Bas : $\dfrac{x-2}{x}$. Divise : $\dfrac{x^2-4}{x}\times\dfrac{x}{x-2}=\dfrac{(x-2)(x+2)}{x-2}=x+2$, avec $x\ne0,2$. \\ \textbf{Vérification :} pour $x=1$ : $\frac{1-4}{1-2}=3$, et $1+2=3$ \checkmark` +
      pgf({ curves: [{ f: "x+2" }], bounds: [-3, 5, -2, 8], dots: [[1, 3, "(1,3)"]], holes: [[2, 4], [0, 2]], xt: 1, yt: 2 }) },
    { t: "Application : travailler ensemble", body: String.raw`Alex tond une pelouse en $x$ heures et Béa prend $(x+4)$ heures. Écris le temps qu'ils prennent ensemble, puis trouve-le lorsqu'Alex prend $6$ heures.\soln Les taux s'additionnent : $\dfrac1x+\dfrac1{x+4}=\dfrac{2x+4}{x(x+4)}$. Temps $=\dfrac{x(x+4)}{2x+4}$. \\ Pour $x=6$ : $\dfrac{60}{16}=3.75$ h. Vérification : $\tfrac16+\tfrac1{10}=\tfrac{16}{60}$ et $\tfrac{60}{16}=3.75$ \checkmark.` +
      pgf({ curves: [{ f: "x*(x+4)/(2*x+4)" }], bounds: [0, 12, 0, 7], dots: [[6, 3.75, "(6,3.75)"]], xt: 2, yt: 1 }) },
    { t: "Vérifie le raccourci", body: String.raw`A-t-on $\dfrac1x+\dfrac13=\dfrac{2}{x+3}$? Compare avec $\dfrac{x+3}{3x}$.
${eqTableTex(eqSum, [1, 2, 3, 6], { check: true })}
\soln La deuxième ligne diffère de la première pour chaque valeur testée, donc $\frac{2}{x+3}$ n'est \emph{pas} équivalente : on n'additionne jamais les dénominateurs. La troisième ligne, construite sur le PPDC $3x$, concorde avec la première dans chaque colonne.` },
  ],
  questions: [
    { ask: String.raw`Simplifie $\dfrac{8x+1}{3x-2}-\dfrac{2x+7}{3x-2}$ et énonce la restriction.`, ws: "2.4cm" },
    { ask: String.raw`Simplifie $\dfrac{5}{8x^2}+\dfrac{3}{4x}$.`, ws: "2.6cm" },
    { ask: String.raw`Simplifie $\dfrac{6}{x+2}+\dfrac{1}{x-3}$ et énonce les restrictions.`, ws: "3cm" },
    { ask: String.raw`Simplifie $\dfrac{2}{x-1}-\dfrac{5}{x+4}$ et énonce les restrictions.`, ws: "3cm" },
    { ask: String.raw`Simplifie $\dfrac{3}{x^2-16}+\dfrac{2}{x^2+x-12}$. Donne d'abord le PPDC.`, ws: "3.8cm" },
    { ask: String.raw`Simplifie $\dfrac{x-1}{x-6}+\dfrac{x+8}{6-x}$.`, ws: "3cm" },
    { ask: String.raw`Simplifie $\dfrac{x}{x+3}-\dfrac{9}{x^2+3x}$. Factorise le numérateur final.`, ws: "3.4cm" },
    { ask: String.raw`Montre que $\dfrac{1}{x-2}-\dfrac{1}{x+2}-\dfrac{4}{x^2-4}$ est égale à $0$ pour chaque valeur permise de $x$. Énonce les restrictions.`, ws: "3.8cm" },
    { ask: String.raw`Simplifie la fraction composée $\dfrac{1+\frac3x}{1-\frac9{x^2}}$ et énonce les restrictions.`, ws: "3.8cm" },
    { ask: String.raw`Le tuyau A remplit une piscine en $x$ heures et le tuyau B en $(x+6)$ heures. Écris le temps avec les deux tuyaux ouverts sous forme d'une seule fraction, puis évalue-le lorsque $x=6$.`, ws: "3.4cm" },
    { ask: String.raw`Un élève écrit $\dfrac2x+\dfrac34=\dfrac{5}{x+4}$. Vérifie l'affirmation pour $x=4$, explique l'erreur et donne la bonne somme.`, ws: "3.2cm" },
    { ask: String.raw`Trouve le PPDC de $x^2-x$ et de $x^2-1$, puis simplifie $\dfrac{1}{x^2-x}+\dfrac{1}{x^2-1}$.`, ws: "3.8cm" },
    { ask: String.raw`Deux résistances de $x$ et de $3x$ ohms sont en parallèle : $\dfrac1R=\dfrac1x+\dfrac1{3x}$. Trouve $R$ en fonction de $x$, puis sa valeur pour $x=8$.`, ws: "3cm" },
    { ask: String.raw`Montre que $\dfrac1n-\dfrac1{n+1}=\dfrac{1}{n(n+1)}$. Utilise ce résultat pour évaluer $\dfrac1{2\cdot3}+\dfrac1{3\cdot4}+\cdots+\dfrac1{19\cdot20}$.`, ws: "4.4cm", challenge: true },
  ],
  answers: [
    String.raw`$\dfrac{(8x+1)-(2x+7)}{3x-2}=${q1.tex}=\dfrac{6(x-1)}{3x-2}$, $x\ne\tfrac23$.`,
    String.raw`PPDC $8x^2$ : $\dfrac{5+3\cdot2x}{8x^2}=${q2.tex}$, $x\ne0$.`,
    String.raw`$\dfrac{6(x-3)+(x+2)}{(x+2)(x-3)}=${q3.tex}$, $x\ne-2,3$.`,
    String.raw`$\dfrac{2(x+4)-5(x-1)}{(x-1)(x+4)}=${q4.tex}$, $x\ne1,-4$.`,
    String.raw`PPDC $(x-4)(x+4)(x-3)$. Numérateur $3(x-3)+2(x-4)=5x-17$. $${q5.tex}$, $x\ne4,-4,3$.`,
    String.raw`$\dfrac{x-1}{x-6}-\dfrac{x+8}{x-6}=\dfrac{-9}{x-6}$, $x\ne6$.`,
    String.raw`PPDC $x(x+3)$ : $\dfrac{x^2-9}{x(x+3)}=\dfrac{(x-3)(x+3)}{x(x+3)}=\dfrac{x-3}{x}$, $x\ne0,-3$.`,
    String.raw`PPDC $(x-2)(x+2)$ : $\dfrac{(x+2)-(x-2)-4}{(x-2)(x+2)}=\dfrac{0}{(x-2)(x+2)}=0$, $x\ne\pm2$.`,
    String.raw`$\dfrac{x+3}{x}\times\dfrac{x^2}{(x-3)(x+3)}=\dfrac{x}{x-3}$, $x\ne0,3,-3$.`,
    String.raw`$\dfrac1x+\dfrac1{x+6}=\dfrac{2x+6}{x(x+6)}$, donc temps $=\dfrac{x(x+6)}{2x+6}$. Pour $x=6$ : $\dfrac{72}{18}=4$ heures.`,
    String.raw`Pour $x=4$ : $\tfrac24+\tfrac34=\tfrac54$ mais on obtient $\tfrac{5}{8}$. On n'additionne jamais les dénominateurs; utilise le PPDC $4x$ : $\dfrac2x+\dfrac34=\dfrac{8+3x}{4x}$.`,
    String.raw`$x(x-1)$ et $(x-1)(x+1)$ : PPDC $x(x-1)(x+1)$. $\dfrac{(x+1)+x}{x(x-1)(x+1)}=${q12.tex}$, $x\ne0,1,-1$.`,
    String.raw`$\dfrac1R=\dfrac{3+1}{3x}=\dfrac{4}{3x}$, donc $R=\dfrac{3x}{4}$. Pour $x=8$ : $6$ ohms.`,
    String.raw`$\dfrac1n-\dfrac1{n+1}=\dfrac{(n+1)-n}{n(n+1)}=\dfrac1{n(n+1)}$. La somme est $(\tfrac12-\tfrac13)+(\tfrac13-\tfrac14)+\cdots+(\tfrac1{19}-\tfrac1{20})=\tfrac12-\tfrac1{20}=\tfrac{9}{20}$.`,
  ],
  learn: [
    ["Le plus petit dénominateur commun", r`Factorise chaque dénominateur. Le PPDC contient chaque facteur différent à sa \textbf{plus grande puissance}; un facteur commun à deux dénominateurs n'est compté \emph{qu'une fois}. Multiplie le haut et le bas de chaque fraction par ce qui lui manque.`],
    ["Soustraire sans erreur", r`Mets tout le deuxième numérateur entre parenthèses : $\dfrac{a}{D}-\dfrac{b+c}{D}=\dfrac{a-(b+c)}{D}$. Après avoir combiné, \textbf{factorise le numérateur} et simplifie; garde les restrictions de chaque dénominateur de départ.`],
    ["Opposés et fractions composées", r`$4-x=-(x-4)$ transforme des dénominateurs opposés en dénominateurs égaux. Pour une fraction dans une fraction, combine le haut et le bas séparément, puis multiplie par l'inverse.`],
  ],
};
