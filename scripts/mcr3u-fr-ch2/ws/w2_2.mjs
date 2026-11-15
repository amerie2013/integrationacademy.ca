// MCR3U-FR fiche 2.2 — Factorisation de polynômes (miroir de W22 / LEARN22 de ../../mcr3u-ch2/t2_2.mjs).
import assert from "node:assert";
import { P, psub, ppow, peval, ptex } from "../lib.mjs";
import { pgf } from "../libtex.mjs";
import { FX, V2, tt } from "../kit.mjs";

const r = String.raw;
const w2 = FX("10x^2 - x - 3", 1, "2x+1", "5x-3");
const w3 = FX("6x^3 + 9x^2 - 10x - 15", 1, "2x+3", "3x^2-5");
const w4 = FX("x^2 - 2x - 48", 1, "x-8", "x+6");
const w5 = FX("10x^2 - x - 21", 1, "5x+7", "2x-3");
const w6a = FX("64x^2 - 49", 1, "8x-7", "8x+7");
const w6b = FX("16x^2 + 40x + 25", 1, "4x+5", "4x+5");
const w7a = FX("5x^3 - 45x", 5, "x", "x-3", "x+3");
const w7b = FX("-3x^2 + 3x + 36", -3, "x-4", "x+3");
const w8 = FX("x^4 - 5x^2 + 4", 1, "x-1", "x+1", "x-2", "x+2");
const w9 = FX("-5x^2 + 15x + 20", -5, "x-4", "x+1");
const w10 = FX("x^2 - 2x - 15", 1, "x-5", "x+3");
V2("W-E1", (x, y) => 18 * x ** 3 * y - 24 * x * x * y * y + 6 * x * y, (x, y) => 6 * x * y * (3 * x * x - 4 * x * y + 1));
const q1 = FX("14x^2 - 21x", 7, "x", "2x-3");
const q3 = FX("x^3 + 5x^2 - 4x - 20", 1, "x+5", "x-2", "x+2");
const q4 = FX("x^2 + 11x + 28", 1, "x+4", "x+7");
const q5 = FX("x^2 - 3x - 40", 1, "x-8", "x+5");
const q6 = FX("6x^2 - 17x + 12", 1, "2x-3", "3x-4");
const q7 = FX("12x^2 + 5x - 2", 1, "4x-1", "3x+2");
const q8a = FX("81x^2 - 16", 1, "9x-4", "9x+4");
const q8b = FX("25x^2 + 30x + 9", 1, "5x+3", "5x+3");
const q9 = FX("2x^3 - 18x", 2, "x", "x-3", "x+3");
const q10 = FX("x^4 - 17x^2 + 16", 1, "x-1", "x+1", "x-4", "x+4");
const q11 = FX("x^2 - 4x - 32", 1, "x-8", "x+4");
assert.strictEqual(ptex(psub(ppow(P("x-2"), 2), [36])), "x^2 - 4x - 32");
const q12 = FX("-5x^2 + 10x + 15", -5, "x-3", "x+1");
const q14 = FX("x^4 + x^2 + 1", 1, "x^2+x+1", "x^2-x+1");
assert.strictEqual(peval(q12.poly, 1), 20);

export const WS = {
  code: "2.2", unit: "2 : Expressions algébriques équivalentes", title: "Factorisation de polynômes",
  intro: r`\textbf{Factoriser, c'est développer à l'envers} : on transforme une somme de termes en produit. Les facteurs sont utiles parce que chaque facteur $(x-a)$ donne une abscisse à l'origine du graphique en $x=a$, et parce qu'ils permettent de simplifier des fractions. \textbf{Toute factorisation peut être vérifiée en la développant.}`,
  ideas: [
    r`\textbf{Ordre d'attaque :} (1) le PGFC d'abord; (2) compte les termes --- 2 : différence de carrés; 3 : trinôme; 4 : groupement; (3) factorise \textbf{complètement}; (4) vérifie en développant.`,
    r`\textbf{Trinôme simple} $x^2+bx+c$ : deux nombres de produit $c$ et de somme $b$. \textbf{Trinôme complexe} $ax^2+bx+c$ : produit $ac$, somme $b$; décompose le terme du milieu et groupe.`,
    r`\textbf{Régularités :} $a^2-b^2=(a-b)(a+b)$ et $a^2\pm2ab+b^2=(a\pm b)^2$. Une \emph{somme} de carrés $a^2+b^2$ ne se factorise pas dans les entiers.`,
    r`\textbf{Forme quadratique :} $x^4-13x^2+36$ est un trinôme en $u=x^2$; factorise-le, puis factorise encore.`,
    r`\textbf{Lien avec le graphique :} la forme factorisée montre les abscisses à l'origine d'un coup d'œil : $y=(x-5)(x+3)$ coupe l'axe en $5$ et en $-3$.`,
  ],
  examples: [
    { t: "Plus grand facteur commun (deux variables)", body: String.raw`Factorise $18x^3y-24x^2y^2+6xy$.\soln Nombres : $\text{PGCD}(18,24,6)=6$; variables : $xy$ est dans chaque terme. PGFC $=6xy$. \\ Divise chaque terme : $3x^2,\ -4xy,\ 1$. \\ $=6xy(3x^2-4xy+1)$ --- remarque que le dernier terme laisse \emph{1}, et non rien. \\ \textbf{Vérification :} pour $x=y=1$ : $18-24+6=0$, et $6(3-4+1)=0$ \checkmark` +
      pgf({ curves: [{ f: "18*x^3-24*x^2+6*x" }], bounds: [-1, 2, -20, 40], xt: 1, yt: 10, note: "Avec $y=1$." }) },
    { t: "Binôme comme facteur commun", body: String.raw`Factorise $5x(2x+1)-3(2x+1)$.\soln La parenthèse $(2x+1)$ apparaît dans les deux termes : mets-la en évidence. \\ $=${w2.tex}$ \quad (forme développée : $${ptex(w2.poly)}$). \\ \textbf{Vérification :} pour $x=0$ : $0-3=-3$, et $(1)(-3)=-3$ \checkmark` +
      pgf({ curves: [{ f: "(2*x+1)*(5*x-3)" }], bounds: [-3, 3, -10, 30], dots: [[-0.5, 0, "(-0.5,0)"], [0.6, 0, "(0.6,0)"]], xt: 1, yt: 5 }) },
    { t: "Groupement", body: String.raw`Factorise $6x^3+9x^2-10x-15$.\soln Associe les termes : $(6x^3+9x^2)+(-10x-15)=3x^2(2x+3)-5(2x+3)$. \\ Les parenthèses sont identiques, donc mets $(2x+3)$ en évidence : $${w3.tex}$. \\ Remarque le $-5$ : mettre $-5$ en évidence dans $-10x-15$ garde les parenthèses identiques. \\ \textbf{Vérification :} pour $x=1$ : $6+9-10-15=-10$, et $(5)(3-5)=-10$ \checkmark` +
      pgf({ curves: [{ f: "6*x^3+9*x^2-10*x-15" }], bounds: [-3, 3, -30, 30], dots: [[-1.5, 0, "(-1.5,0)"]], xt: 1, yt: 10 }) },
    { t: "Trinôme simple", body: String.raw`Factorise $x^2-2x-48$.\soln Produit $-48$, somme $-2$. Signes contraires; le plus grand nombre est négatif : $-8$ et $6$. \\ $=${w4.tex}$. Vérification : $x^2+6x-8x-48$ \checkmark.` },
    { t: "Trinôme complexe par décomposition", body: String.raw`Factorise $10x^2-x-21$.\soln $ac=-210$; il faut un produit de $-210$ et une somme de $-1$ : $14$ et $-15$. \\ $10x^2+14x-15x-21=2x(5x+7)-3(5x+7)$. \\ $=${w5.tex}$. \\ \textbf{Vérification :} pour $x=1$ : $10-1-21=-12$, et $(12)(-1)=-12$ \checkmark` +
      pgf({ curves: [{ f: "10*x^2-x-21" }], bounds: [-3, 3, -24, 20], dots: [[-1.4, 0, "(-1.4,0)"], [1.5, 0, "(1.5,0)"]], xt: 1, yt: 4 }) },
    { t: "Différence de carrés et carrés parfaits", body: String.raw`Factorise a) $64x^2-49$ \quad b) $16x^2+40x+25$.\soln a) $(8x)^2-7^2=${w6a.tex}$. \\ b) $(4x)^2$, $5^2$ et $2(4x)(5)=40x$ \checkmark, donc $=${w6b.tex}$. \\ \textbf{Vérification :} pour $x=1$ : a) $15=(1)(15)$; b) $81=9^2$ \checkmark` +
      pgf({ curves: [{ f: "64*x^2-49" }, { f: "(4*x+5)^2", color: "red!75!black" }], bounds: [-3, 3, -50, 60], xt: 1, yt: 10 }) },
    { t: "Factoriser complètement", body: String.raw`Factorise a) $5x^3-45x$ \quad b) $-3x^2+3x+36$.\soln a) $5x(x^2-9)=${w7a.tex}$. \\ b) Mets $-3$ en évidence : $-3(x^2-x-12)$; produit $-12$, somme $-1$ : $-4,3$. $=${w7b.tex}$. \\ \textbf{Vérification :} pour $x=1$ : a) $-40=5(1)(-2)(4)$; b) $36=-3(-3)(4)$ \checkmark` +
      pgf({ curves: [{ f: "5*x^3-45*x" }, { f: "-3*x^2+3*x+36", color: "red!75!black" }], bounds: [-5, 5, -80, 80], xt: 1, yt: 20 }) },
    { t: "Forme quadratique", body: String.raw`Factorise $x^4-5x^2+4$.\soln Pose $u=x^2$ : $u^2-5u+4=(u-1)(u-4)$. \\ Remplace $u$ : $(x^2-1)(x^2-4)=${w8.tex}$. \\ \textbf{Vérification :} pour $x=0$ : $4$, et $(-1)(1)(-2)(2)=4$ \checkmark` +
      pgf({ curves: [{ f: "x^4-5*x^2+4" }], bounds: [-3, 3, -4, 10], dots: [[1, 0, "1"], [-1, 0, "-1"], [2, 0, "2"], [-2, 0, "-2"]], xt: 1, yt: 2 }) },
    { t: "Application : quand la balle touche-t-elle le sol?", body: String.raw`La hauteur d'une balle est $h=-5t^2+15t+20$ (en mètres, $t$ en secondes). Quand touche-t-elle le sol?\soln Factorise : $h=${tt(w9.tex)}$. \\ $h=0$ lorsque $t-4=0$ ou $t+1=0$ : $t=4$ ou $t=-1$. Le temps ne peut pas être négatif, donc la balle touche le sol à $t=4$ s. \\ Les zéros $-1$ et $4$ sont symétriques par rapport à $t=1.5$, donc le maximum est atteint à $t=1.5$ s.` +
      pgf({ curves: [{ f: "-5*x^2+15*x+20" }], bounds: [0, 5, 0, 35], dots: [[4, 0, "(4,0)"], [0, 20, "(0,20)"]], xt: 1, yt: 5 }) },
    { t: "Lire un graphique à partir de la forme factorisée", body: String.raw`Factorise $y=x^2-2x-15$ et décris son graphique.\soln $y=${w10.tex}$ : abscisses à l'origine $5$ et $-3$; ordonnée à l'origine $-15$; ouverte vers le haut. Le sommet se trouve à mi-chemin entre les abscisses à l'origine, en $x=1$, où $y=-16$.` +
      pgf({ curves: [{ f: "x^2-2*x-15" }], bounds: [-5, 7, -18, 10], dots: [[5, 0, "(5,0)"], [-3, 0, "(-3,0)"], [0, -15, "(0,-15)"], [1, -16, "(1,-16)"]], xt: 1, yt: 4, note: "Les facteurs donnent les points d'intersection; la symétrie donne le sommet." }) },
  ],
  questions: [
    { ask: String.raw`Factorise $14x^2-21x$.`, ws: "1.6cm" },
    { ask: String.raw`Factorise $12a^2b^3-18ab^2+6ab$.`, ws: "2.2cm" },
    { ask: String.raw`Factorise complètement $x^3+5x^2-4x-20$ (utilise le groupement, puis regarde de nouveau).`, ws: "3cm" },
    { ask: String.raw`Factorise a) $x^2+11x+28$ \quad b) $x^2-3x-40$. Explique pourquoi les signes sont contraires en b).`, ws: "2.8cm" },
    { ask: String.raw`Factorise $6x^2-17x+12$ par décomposition. Montre la décomposition du terme du milieu.`, ws: "3.4cm" },
    { ask: String.raw`Factorise $12x^2+5x-2$ et vérifie en développant.`, ws: "3.4cm" },
    { ask: String.raw`Factorise a) $81x^2-16$ \quad b) $25x^2+30x+9$.`, ws: "2.6cm" },
    { ask: String.raw`Factorise complètement a) $2x^3-18x$ \quad b) $x^4-17x^2+16$.`, ws: "3.4cm" },
    { ask: String.raw`Factorise $(x-2)^2-36$ et simplifie. Vérifie ensuite en développant l'expression de départ.`, ws: "3cm" },
    { ask: String.raw`La hauteur d'une balle est $h=-5t^2+10t+15$. Factorise, trouve quand elle touche le sol, puis trouve sa hauteur maximale. (Le maximum est à mi-chemin entre les zéros.)`, ws: "4cm" },
    { ask: String.raw`Un rectangle a une aire de $x^2+14x+48$ et une largeur de $x+6$. Trouve sa longueur, puis son périmètre lorsque $x=3$.`, ws: "3.4cm" },
    { ask: String.raw`Un élève affirme que $x^2+16=(x+4)(x-4)$. Teste l'affirmation avec $x=1$, puis explique pourquoi $x^2+16$ ne peut pas s'écrire $(x+a)(x+b)$ avec des entiers $a,b$.`, ws: "3.6cm" },
    { ask: String.raw`Esquisse $y=(x+2)(x-1)(x-4)$ en trouvant ses abscisses à l'origine et son ordonnée à l'origine. Le graphique monte-t-il ou descend-il à l'extrême droite? À l'extrême gauche?`, grid: true },
    { ask: String.raw`Montre que $x^4+x^2+1=(x^2+x+1)(x^2-x+1)$. (Indice : écris $x^4+x^2+1=(x^2+1)^2-x^2$.)`, ws: "3.6cm", challenge: true },
  ],
  answers: [
    String.raw`$${q1.tex}$.`,
    String.raw`$6ab(2ab^2-3b+1)$. Vérification : $6ab\cdot2ab^2=12a^2b^3$ \checkmark.`,
    String.raw`$x^2(x+5)-4(x+5)=(x+5)(x^2-4)=${q3.tex}$.`,
    String.raw`a) $${q4.tex}$ \quad b) $${q5.tex}$. En b), le produit $-40$ est négatif, donc un nombre est positif et l'autre négatif; leur somme est $-3$, donc le plus grand en valeur absolue ($-8$) est négatif.`,
    String.raw`$ac=72$, somme $-17$ : $-8$ et $-9$. $6x^2-8x-9x+12=2x(3x-4)-3(3x-4)=${q6.tex}$.`,
    String.raw`$ac=-24$, somme $5$ : $8$ et $-3$. $12x^2+8x-3x-2=4x(3x+2)-1(3x+2)=${q7.tex}$.`,
    String.raw`a) $${q8a.tex}$ \quad b) $${q8b.tex}$.`,
    String.raw`a) $${q9.tex}$ \quad b) $${q10.tex}$.`,
    String.raw`$(x-2-6)(x-2+6)=${q11.tex}$. En développant : $x^2-4x+4-36=x^2-4x-32$ \checkmark.`,
    String.raw`$h=${tt(q12.tex)}$. Elle touche le sol à $t=3$ s (l'autre zéro, $-1$, est rejeté). Zéros $-1$ et $3$, donc le maximum est à $t=1$ : $h(1)=-5+10+15=20$ m.`,
    String.raw`$x^2+14x+48=(x+6)(x+8)$ : la longueur est $x+8$. Pour $x=3$ : $9$ sur $11$, périmètre $2(9+11)=40$.`,
    String.raw`Pour $x=1$ : $1+16=17$ mais $(1+4)(1-4)=-15$, donc l'affirmation est fausse. Pour avoir $(x+a)(x+b)=x^2+(a+b)x+ab$, il faudrait $a+b=0$ et $ab=16$; mais $a+b=0$ signifie $b=-a$, donc $ab=-a^2\le0$, jamais $16$.`,
    String.raw`Abscisses à l'origine : $x=-2,\ 1,\ 4$; ordonnée à l'origine : $(2)(-1)(-4)=8$. Le terme dominant est $x^3$, donc l'extrémité droite \emph{monte} et l'extrémité gauche \emph{descend}.`,
    String.raw`$(x^2+1)^2-x^2=x^4+2x^2+1-x^2=x^4+x^2+1$, et c'est une différence de carrés : $(x^2+1-x)(x^2+1+x)=${q14.tex}$.`,
  ],
  learn: [
    ["Factoriser annule le développement", r`Factoriser, c'est écrire une somme sous forme de produit. \textbf{Vérifie toujours en développant}. Commence par le \textbf{PGFC}, puis compte les termes : 2 termes $\to$ différence de carrés; 3 termes $\to$ trinôme; 4 termes $\to$ groupement. Continue jusqu'à ce qu'aucun facteur ne puisse être factorisé de nouveau.`],
    ["Trinômes", r`$x^2+bx+c$ : trouve deux nombres de produit $c$ et de somme $b$. $ax^2+bx+c$ : trouve deux nombres de produit $ac$ et de somme $b$, décompose le terme du milieu et groupe. Si aucune paire ne convient, le trinôme est premier.`],
    ["Pourquoi les facteurs comptent", r`Chaque facteur $(x-a)$ signifie que le graphique coupe l'axe des $x$ en $a$. Les facteurs permettent aussi de simplifier des expressions rationnelles (2.3) et de résoudre des équations (la propriété du produit nul).`],
  ],
};
