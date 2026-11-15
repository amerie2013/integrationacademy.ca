// MCR3U-FR fiche 2.1 — Addition et multiplication de polynômes (miroir de W21 / LEARN21 de ../../mcr3u-ch2/t2_1.mjs).
import assert from "node:assert";
import { P, padd, psub, pmul, ppow, peval, ptex, verify } from "../lib.mjs";
import { pgf, eqTableTex } from "../libtex.mjs";
import { X, S } from "../kit.mjs";

const r = String.raw;
const w1 = S("W-E1", "5x^3 + 5x^2 - 5x - 2", "4x^3-2x+7", "x^3+5x^2-3x-9");
const w2 = padd(padd(psub(P("6x-3"), P("4x-20")), P("2x^2+6x")), [0]); assert.strictEqual(ptex(w2), "2x^2 + 8x + 17");
verify("W-E2", (x) => 3 * (2 * x - 1) - 4 * (x - 5) + 2 * x * (x + 3), (x) => peval(w2, x));
const w3 = X("W-E3", "2x^2 + 13x + 6", "2x+1", "x+6");
const w4 = X("W-E4", "8x^2 + 2x - 15", "4x-5", "2x+3");
const w5a = X("W-E5a", "36x^2 - 12x + 1", "6x-1", "6x-1");
const w5b = X("W-E5b", "4x^2 - 81", "2x+9", "2x-9");
const w6 = X("W-E6", "2x^3 - 5x^2 - 7x + 12", "2x^2+x-4", "x-3");
const w7 = X("W-E7", "x^4 + 4x^3 + 6x^2 + 4x + 1", "x+1", "x+1", "x+1", "x+1");
const w8 = psub(pmul(P("2x+30"), P("2x+20")), [600]); assert.strictEqual(ptex(w8), "4x^2 + 100x");
const q1 = S("W-Q1", "4x^2 - 2x - 8", "7x^2-3x+4", "3x^2-x+12", -1);
const q2 = X("W-Q2", "-15x^3 + 6x^2 + 3x", "-3x", "5x^2-2x-1");
const q3 = X("W-Q3", "10x^2 + 29x - 21", "5x-3", "2x+7");
const q4 = X("W-Q4", "49x^2 + 56x + 16", "7x+4", "7x+4");
const q5 = X("W-Q5", "25x^2 - 36", "5x+6", "5x-6");
const q6 = X("W-Q6", "3x^3 - 14x^2 + 2x + 24", "3x^2-2x-6", "x-4");
const q7 = X("W-Q7", "x^3 - 12x^2 + 48x - 64", "x-4", "x-4", "x-4");
const q8 = psub(ppow(P("x+9"), 2), ppow(P("x-3"), 2)); assert.strictEqual(ptex(q8), "24x + 72");
const q9 = X("W-Q9", "x^3 + 3x^2 - 10x - 24", "x+2", "x-3", "x+4");
const q10 = X("W-Q10", "2x^3 - 7x^2 - 10x + 24", "2x-3", "x^2-2x-8");
const q12 = psub(ppow(P("2x+1"), 2), pmul(P("x-3"), P("x+3"))); assert.strictEqual(ptex(q12), "3x^2 + 4x + 10");
const q13 = X("W-Q13", "4x^3 - 84x^2 + 432x", "x", "24-2x", "18-2x");
const evalPow = [-2, -1, 0, 1, 2];
const eqEx = [{ tex: "(x+2)^2-(x-2)^2", f: (x) => (x + 2) ** 2 - (x - 2) ** 2 }, { tex: "8x", f: (x) => 8 * x }];
const eqQ = [{ tex: "(x-3)^2", f: (x) => (x - 3) ** 2 }, { tex: "x^2-9", f: (x) => x * x - 9 }, { tex: "x^2-6x+9", f: (x) => x * x - 6 * x + 9 }];

export const WS = {
  code: "2.1", unit: "2 : Expressions algébriques équivalentes", title: "Addition et multiplication de polynômes",
  intro: r`Deux expressions sont \textbf{équivalentes} lorsqu'elles ont la même valeur pour chaque $x$ --- elles tracent donc le \emph{même graphique}. Regrouper les termes semblables et développer des produits, c'est ainsi qu'on passe d'une forme à une autre sans changer la valeur. Chaque réécriture ci-dessous est vérifiée : en substituant des nombres et en comparant les graphiques.`,
  ideas: [
    r`Les \textbf{termes semblables} (même partie variable) se combinent; un signe moins devant une parenthèse change \emph{chaque} signe à l'intérieur.`,
    r`\textbf{Distribuer :} chaque terme d'un facteur rencontre chaque terme de l'autre. Le \textbf{modèle d'aire} tient le compte; la méthode PEID en est le raccourci pour deux binômes.`,
    r`\textbf{Produits remarquables :} $(a\pm b)^2=a^2\pm2ab+b^2$ et $(a+b)(a-b)=a^2-b^2$.`,
    r`\textbf{Degrés :} le degré d'un produit est la \emph{somme} des degrés; le degré d'une somme est au plus le plus grand des deux.`,
    r`\textbf{Vérifie :} une seule différence prouve que deux expressions ne sont \emph{pas} équivalentes; une concordance pour chaque valeur testée (ou un seul graphique superposé) appuie l'équivalence --- et l'algèbre la prouve.`,
  ],
  examples: [
    { t: "Additionner des polynômes", body: String.raw`Simplifie $(4x^3-2x+7)+(x^3+5x^2-3x-9)$.\soln \textbf{Règle :} l'addition conserve tous les signes; on regroupe les termes de même puissance. \\ Regroupe les termes semblables par degré : $(4x^3+x^3)+5x^2+(-2x-3x)+(7-9)$. \\ $=${ptex(w1)}$. \\ \textbf{Vérification :} pour $x=1$ : $(4-2+7)+(1+5-3-9)=9-6=3$, et la réponse $5+5-5-2=3$ \checkmark` +
      pgf({ curves: [{ f: "(4*x^3-2*x+7)+(x^3+5*x^2-3*x-9)" }], bounds: [-3, 3, -40, 40], xt: 1, yt: 10 }) },
    { t: "Distribuer, puis regrouper", body: String.raw`Simplifie $3(2x-1)-4(x-5)+2x(x+3)$.\soln \textbf{Règle :} distribue chaque facteur extérieur en gardant son signe. \\ Distribue : $6x-3-4x+20+2x^2+6x$. \\ Remarque que le $-4$ multiplie \emph{les deux} termes : $-4\cdot(-5)=+20$. \\ Regroupe : $${ptex(w2)}$. \\ \textbf{Vérification :} pour $x=1$ : $3(1)-4(-4)+2(4)=3+16+8=27$, et la forme regroupée donne $2+8+17=27$ \checkmark` +
      pgf({ curves: [{ f: "2*x^2+8*x+17" }], bounds: [-5, 3, 0, 30], dots: [[1, 27, "(1,27)"]], xt: 1, yt: 5 }) },
    { t: "Modèle d'aire", body: String.raw`Développe $(2x+1)(x+6)$.\soln \textbf{Règle :} chaque terme de la première parenthèse rencontre chaque terme de la seconde. \\ Les cases sont $2x\cdot x=2x^2$, $2x\cdot6=12x$, $1\cdot x=x$, $1\cdot6=6$. \\ Les deux cases en $x$ sont des termes semblables : $12x+x=13x$. \\ $=${ptex(w3)}$. \\ \textbf{Vérification :} pour $x=1$ : $(3)(7)=21$, et $2+13+6=21$ \checkmark` +
      pgf({ curves: [{ f: "(2*x+1)*(x+6)" }], bounds: [-8, 3, -16, 30], dots: [[-6, 0, "(-6,0)"], [-0.5, 0, "(-0.5,0)"]], xt: 1, yt: 5 }) },
    { t: "PEID avec un négatif", body: String.raw`Développe $(4x-5)(2x+3)$.\soln \textbf{Règle :} PEID donne les quatre produits; garde les signes. \\ Premiers $8x^2$; Extérieurs $12x$; Intérieurs $-10x$; Derniers $-15$. \\ Milieu : $12x-10x=2x$. \\ $=${ptex(w4)}$. \\ \textbf{Vérification :} pour $x=1$ : $(-1)(5)=-5$, et $8+2-15=-5$ \checkmark` +
      pgf({ curves: [{ f: "(4*x-5)*(2*x+3)" }], bounds: [-4, 4, -20, 30], dots: [[1.25, 0, "(1.25,0)"], [-1.5, 0, "(-1.5,0)"]], xt: 1, yt: 5 }) },
    { t: "Produits remarquables", body: String.raw`Développe a) $(6x-1)^2$ et b) $(2x+9)(2x-9)$.\soln \textbf{Régularités :} $(a-b)^2=a^2-2ab+b^2$ et $(a+b)(a-b)=a^2-b^2$. \\ a) $(6x)^2-2(6x)(1)+1^2=${ptex(w5a)}$. \\ b) Les termes du milieu $\pm18x$ s'annulent : $(2x)^2-9^2=${ptex(w5b)}$. \\ \textbf{Vérification :} pour $x=1$ : a) $25=36-12+1$; b) $(11)(-7)=-77=4-81$ \checkmark` +
      pgf({ curves: [{ f: "(6*x-1)^2" }, { f: "(2*x+9)*(2*x-9)", color: "red!75!black" }], bounds: [-6, 6, -90, 60], xt: 1, yt: 20 }) },
    { t: "Trinôme fois binôme", body: String.raw`Développe $(2x^2+x-4)(x-3)$.\soln \textbf{Plan :} trois termes fois deux termes donnent six produits. \\ Six produits partiels : $2x^3-6x^2+x^2-3x-4x+12$. \\ Regroupe : $${ptex(w6)}$. \\ Vérifie le degré ($2+1=3$) et le terme constant ($-4\cdot-3=12$). \\ \textbf{Vérification :} pour $x=1$ : $(-1)(-2)=2$, et la forme regroupée donne aussi $2$ \checkmark` +
      pgf({ curves: [{ f: "(2*x^2+x-4)*(x-3)" }], bounds: [-3, 5, -30, 30], dots: [[3, 0, "(3,0)"]], xt: 1, yt: 10 }) },
    { t: "Une puissance d'un binôme", body: String.raw`Développe $(x+1)^4$.\soln \textbf{Méthode :} utilise la rangée de Pascal pour l'exposant $4$. \\ Les coefficients sont la rangée de Pascal $1,4,6,4,1$ et chaque puissance de $1$ vaut $1$. \\ $=${ptex(w7)}$. \\ Vérification pour $x=1$ : $2^4=16$ et $1+4+6+4+1=16$.` +
      pgf({ curves: [{ f: "(x+1)^4" }], bounds: [-4, 2, -2, 20], dots: [[1, 16, "(1,16)"], [-1, 0, "(-1,0)"]], xt: 1, yt: 4 }) },
    { t: "Application : un cadre photo", body: String.raw`Une photo mesure $30$ cm sur $20$ cm. Un cadre de largeur $x$ l'entoure complètement. Écris l'aire du cadre seul.\soln \textbf{Modèle :} le rectangle extérieur gagne $x$ de chaque côté, donc $2x$ par dimension. \\ Rectangle extérieur : $(30+2x)(20+2x)$. Soustrais la photo, $600$. \\ $(30+2x)(20+2x)-600=600+100x+4x^2-600=${ptex(w8)}$. \\ Pour un cadre de $2$ cm : $4(4)+100(2)=216$ cm$^2$.` +
      pgf({ curves: [{ f: "4*x^2+100*x" }], bounds: [0, 6, 0, 800], dots: [[2, 216, "(2,216)"]], xt: 1, yt: 100 }) },
    { t: "Sont-elles équivalentes?", body: String.raw`Vérifie si $(x+2)^2-(x-2)^2$ et $8x$ sont équivalentes.
${eqTableTex(eqEx, evalPow, { check: true })}
\soln Les valeurs concordent aux cinq points. Pour le \emph{prouver}, développe : $(x^2+4x+4)-(x^2-4x+4)=8x$ --- les $x^2$ et les constantes s'annulent.` +
      pgf({ curves: [{ f: "(x+2)^2-(x-2)^2", color: "exblue" }, { f: "8*x", dash: true }], bounds: [-3, 3, -26, 26], xt: 1, yt: 8, note: "Les deux expressions tracent la même droite : le graphique pointillé est exactement sur le graphique plein." }) },
  ],
  questions: [
    { ask: String.raw`Simplifie $(7x^2-3x+4)-(3x^2-x+12)$. Vérifie ensuite ta réponse pour $x=2$.`, ws: "2.6cm" },
    { ask: String.raw`Développe $-3x(5x^2-2x-1)$.`, ws: "2.2cm" },
    { ask: String.raw`Développe et simplifie $(5x-3)(2x+7)$ à l'aide d'un modèle d'aire.`, ws: "3.6cm" },
    { ask: String.raw`Développe a) $(7x+4)^2$ \quad b) $(5x+6)(5x-6)$. Explique pourquoi b) n'a pas de terme en $x$.`, ws: "3.6cm" },
    { ask: String.raw`Développe $(3x^2-2x-6)(x-4)$.`, ws: "3.8cm" },
    { ask: String.raw`Développe $(x-4)^3$ en utilisant $(x-4)^3=(x-4)(x-4)^2$. Vérifie ta réponse pour $x=5$.`, ws: "3.8cm" },
    { ask: String.raw`Simplifie $(x+9)^2-(x-3)^2$. Quel produit remarquable donne un chemin plus rapide?`, ws: "3.2cm" },
    { ask: String.raw`Développe et simplifie $(x+2)(x-3)(x+4)$.`, ws: "4.2cm" },
    { ask: String.raw`Développe $(2x-3)(x^2-2x-8)$ et donne le degré et le terme constant \emph{avant} de multiplier. Concordent-ils avec ton résultat?`, ws: "4cm" },
    { ask: String.raw`Remplis le tableau pour décider si $(x-3)^2$ est équivalente à a) $x^2-9$ ou à b) $x^2-6x+9$. Développe ensuite pour confirmer.
${eqTableTex(eqQ, [-1, 0, 1, 2, 3], { blank: true, check: true })}`, ws: "2.2cm" },
    { ask: String.raw`Un élève écrit $(2x+1)^2-(x-3)(x+3)=3x^2+4x-8$. Trouve l'erreur et donne la bonne réponse simplifiée.`, ws: "3.4cm" },
    { ask: String.raw`On découpe des carrés de côté $x$ à chaque coin d'une feuille de $24$ cm sur $18$ cm, puis on replie les côtés pour former une boîte ouverte. Écris le volume sous forme de polynôme développé et trouve $V$ lorsque $x=3$.`, ws: "4cm" },
    { ask: String.raw`Explique en une ou deux phrases pourquoi le degré de $(x^3+x)+(-x^3+2x^2)$ est plus petit que le degré de chacune des parenthèses. Donne ton propre exemple d'une somme de deux polynômes du troisième degré qui est du second degré.`, ws: "3cm" },
    { ask: String.raw`Montre que $n^2+(n+1)^2$ est toujours impair, pour tout entier $n$. Montre ensuite que $(n+1)^2-n^2$ est égal à la somme des deux nombres $n$ et $n+1$.`, ws: "4.2cm", challenge: true },
  ],
  answers: [
    String.raw`$${ptex(q1)}$. Pour $x=2$ : expression de départ $(28-6+4)-(12-2+12)=26-22=4$; réponse $16-4-8=4$.`,
    String.raw`$${ptex(q2)}$.`,
    String.raw`$${ptex(q3)}$ (cases $10x^2,\ 35x,\ -6x,\ -21$).`,
    String.raw`a) $${ptex(q4)}$ \quad b) $${ptex(q5)}$. Les deux termes du milieu $\pm30x$ sont opposés et s'annulent.`,
    String.raw`$${ptex(q6)}$.`,
    String.raw`$${ptex(q7)}$. Pour $x=5$ : $(1)^3=1$ et $125-300+240-64=1$.`,
    String.raw`$${ptex(q8)}$. Différence de carrés avec $a=x+9,\ b=x-3$ : $(a-b)(a+b)=12(2x+6)=24x+72$.`,
    String.raw`$${ptex(q9)}$.`,
    String.raw`Degré $1+2=3$, terme constant $(-3)(-8)=24$. Résultat $${ptex(q10)}$ \quad \checkmark.`,
    String.raw`Valeurs des lignes : $(x-3)^2$ : $16,9,4,1,0$; $x^2-9$ : $-8,-9,-8,-5,0$; $x^2-6x+9$ : $16,9,4,1,0$. Donc b) est équivalente, a) ne l'est pas. Développer $(x-3)(x-3)$ donne $x^2-6x+9$.`,
    String.raw`$(2x+1)^2=4x^2+4x+1$ et $(x-3)(x+3)=x^2-9$, donc la soustraction donne $4x^2+4x+1-x^2+9$. L'élève a écrit $-8$ au lieu de $+10$ (il a oublié que le moins change $-9$ en $+9$). Bonne réponse : $${ptex(q12)}$.`,
    String.raw`$V=x(30-2x)(20-2x)=${ptex(q13)}$. Pour $x=3$ : $3\cdot18\cdot12=648$ cm$^3$; vérification $108-756+1296=648$.`,
    String.raw`Les termes en $x^3$ s'annulent ($x^3-x^3$), il reste $2x^2+x$. Une somme peut avoir un degré plus petit que ses parties. Exemple : $(x^3+4x)+(-x^3+x^2)=x^2+4x$.`,
    String.raw`$n^2+(n+1)^2=2n^2+2n+1=2(n^2+n)+1$, soit $2\times$ un entier plus $1$ : impair. Et $(n+1)^2-n^2=2n+1=n+(n+1)$.`,
  ],
  learn: [
    ["Équivalent veut dire même graphique", r`Deux expressions sont équivalentes si elles donnent le même résultat pour chaque $x$. Réécrire (regrouper les termes semblables, développer) ne doit jamais changer la valeur : \textbf{vérifie} une réécriture en substituant des nombres --- une seule différence prouve qu'elle est fausse.`],
    ["Développer", r`Chaque terme d'un facteur multiplie chaque terme de l'autre. Un \textbf{modèle d'aire} place les produits partiels dans une grille; on regroupe ensuite les \textbf{termes semblables} (même couleur). Les degrés \emph{s'additionnent} quand on multiplie.`],
    ["Produits remarquables", r`$(a+b)^2=a^2+2ab+b^2$, $(a-b)^2=a^2-2ab+b^2$, $(a+b)(a-b)=a^2-b^2$. Ce sont des raccourcis que tu utiliseras \emph{à l'envers} pour factoriser en 2.2.`],
  ],
};
