// MCR3U-FR fiche 2.5 — Radicaux et expressions équivalentes (miroir de W25 / LEARN25 de ../../mcr3u-ch2/t2_5.mjs).
import { verify } from "../lib.mjs";
import { pgf, eqTableTex } from "../libtex.mjs";
import { s, same } from "../kit5.mjs";

const r = String.raw;
same("W-E1", s(200), 10 * s(2)); same("W-E2", s(63), 3 * s(7)); same("W-E2b", 7 * s(3), s(147));
same("W-E3", 5 * s(12) - 2 * s(27) + s(48), 8 * s(3)); same("W-E4", 3 * s(7) * 2 * s(14), 42 * s(2));
same("W-E5", s(3) * (s(12) + 2 * s(5)), 6 + 2 * s(15)); same("W-E6", (2 * s(3) + 1) * (s(3) - 4), 2 - 7 * s(3));
same("W-E7", (s(5) - 2 * s(3)) ** 2, 17 - 4 * s(15)); same("W-E8a", 12 / s(6), 2 * s(6)); same("W-E8b", 4 / (s(7) - s(3)), s(7) + s(3));
verify("W-E9", (a) => s(72 * a ** 5), (a) => 6 * a * a * s(2 * a)); same("W-E10", s((4 - -2) ** 2 + (5 - 1) ** 2), 2 * s(13));
same("W-Q14", s(9 + 4 * s(5)), 2 + s(5));
const sqrtEq = [{ tex: String.raw`\sqrt{x^2+9}`, f: (x) => s(x * x + 9) }, { tex: "x+3", f: (x) => x + 3 }];

export const WS = {
  code: "2.5", unit: "2 : Expressions algébriques équivalentes", title: "Radicaux et expressions équivalentes",
  intro: r`Un radical comme $\sqrt{72}$ est un nombre \textbf{exact}; le $8.485\ldots$ de la calculatrice n'en est qu'une approximation. On simplifie les radicaux pour que des nombres égaux s'écrivent de la même façon, et on vérifie toujours une réécriture à la calculatrice : \emph{la valeur ne doit pas changer}. Les deux règles clés sont $\sqrt a\sqrt b=\sqrt{ab}$ et $\dfrac{\sqrt a}{\sqrt b}=\sqrt{\dfrac ab}$. Il n'existe \textbf{aucune} règle $\sqrt{a+b}=\sqrt a+\sqrt b$.`,
  ideas: [
    r`\textbf{Simplifier :} sors le \emph{plus grand carré parfait} : $\sqrt{72}=\sqrt{36\cdot2}=6\sqrt2$. Carrés parfaits : $4,9,16,25,36,49,64,81,100,121,144,\ldots$`,
    r`\textbf{Additionne ou soustrais} seulement des radicaux \emph{semblables}, après avoir simplifié chacun : $3\sqrt5+7\sqrt5=10\sqrt5$, mais $\sqrt2+\sqrt3$ reste tel quel.`,
    r`\textbf{Multiplier :} $(a\sqrt b)(c\sqrt d)=ac\sqrt{bd}$; utilise la méthode PEID pour des binômes et souviens-toi que $(\sqrt a)^2=a$.`,
    r`\textbf{Conjugués :} $(a+\sqrt b)(a-\sqrt b)=a^2-b$ est rationnel. Pour rationaliser un dénominateur binôme, multiplie le haut et le bas par le conjugué.`,
    r`\textbf{Variables :} $\sqrt{x^2}=|x|$; on suppose les variables positives ou nulles pour écrire $\sqrt{18x^3}=3x\sqrt{2x}$.`,
  ],
  examples: [
    { t: "Simplifier un radical", body: String.raw`Simplifie $\sqrt{200}$.\soln Le plus grand carré parfait qui divise $200$ est $100$ : $\sqrt{200}=\sqrt{100\cdot2}=10\sqrt2$. \\ Vérification : $\sqrt{200}=14.142$ et $10\sqrt2=14.142$ \checkmark.` +
      pgf({ curves: [{ f: "sqrt(x)" }], bounds: [0, 220, 0, 16], dots: [[200, 14.14, "(200,14.14)"]], xt: 50, yt: 4 }) },
    { t: "Radicaux composés et entiers", body: String.raw`a) Simplifie $\sqrt{63}$. b) Écris $7\sqrt3$ sous forme de radical entier.\soln a) $\sqrt{63}=\sqrt{9\cdot7}=3\sqrt7$. \\ b) Élève le coefficient au carré et fais-le entrer sous le radical : $7\sqrt3=\sqrt{49\cdot3}=\sqrt{147}$. \\ \textbf{Vérification :} a) $\sqrt{63}\approx7.94$ et $3\sqrt7\approx7.94$; b) $\sqrt{147}\approx12.12$ et $7\sqrt3\approx12.12$ \checkmark` +
      pgf({ curves: [{ f: "sqrt(x)" }], bounds: [0, 160, 0, 14], dots: [[63, 7.94, "(63,7.94)"], [147, 12.12, "(147,12.12)"]], xt: 40, yt: 2 }) },
    { t: "Additionner et soustraire", body: String.raw`Simplifie $5\sqrt{12}-2\sqrt{27}+\sqrt{48}$.\soln Simplifie d'abord : $\sqrt{12}=2\sqrt3$, $\sqrt{27}=3\sqrt3$, $\sqrt{48}=4\sqrt3$. \\ $10\sqrt3-6\sqrt3+4\sqrt3=8\sqrt3$. \\ \textbf{Vérification :} $5(3.464)-2(5.196)+6.928\approx13.86$, et $8(1.732)\approx13.86$ \checkmark` +
      pgf({ curves: [{ f: "1.732*x" }], bounds: [0, 10, 0, 18], dots: [[8, 13.86, "(8,13.86)"]], xt: 1, yt: 2, note: "Les radicaux semblables se comportent comme des termes semblables : $x$ fois $\\sqrt3$." }) },
    { t: "Multiplier", body: String.raw`Simplifie $(3\sqrt7)(2\sqrt{14})$.\soln $6\sqrt{98}=6\cdot7\sqrt2=42\sqrt2$. \\ Vérification : $3(2.646)\cdot2(3.742)=59.40$ et $42(1.4142)=59.40$ \checkmark.` +
      pgf({ curves: [{ f: "6*sqrt(x)" }], bounds: [0, 110, 0, 70], dots: [[98, 59.4, "(98,59.4)"]], xt: 20, yt: 10 }) },
    { t: "Distribuer", body: String.raw`Simplifie $\sqrt3\left(\sqrt{12}+2\sqrt5\right)$.\soln $\sqrt{36}+2\sqrt{15}=6+2\sqrt{15}$. \\ Les termes $6$ et $2\sqrt{15}$ ne sont pas semblables, donc c'est la réponse finale. \\ \textbf{Vérification :} $1.732(3.464+4.472)\approx13.75$, et $6+2(3.873)\approx13.75$ \checkmark` +
      pgf({ curves: [{ f: "sqrt(x)" }], bounds: [0, 40, 0, 7], dots: [[36, 6, "(36,6)"], [15, 3.873, "(15,3.87)"]], xt: 5, yt: 1 }) },
    { t: "PEID avec des radicaux", body: String.raw`Développe $(2\sqrt3+1)(\sqrt3-4)$.\soln Premiers $2\cdot3=6$; Extérieurs $-8\sqrt3$; Intérieurs $\sqrt3$; Derniers $-4$. \\ $6-4=2$ et $-8\sqrt3+\sqrt3=-7\sqrt3$ : $2-7\sqrt3$. \\ \textbf{Vérification :} $(4.464)(-2.268)\approx-10.12$, et $2-7(1.732)\approx-10.12$ \checkmark` +
      pgf({ curves: [{ f: "(2*x+1)*(x-4)" }], bounds: [-1, 5, -12, 8], dots: [[1.732, -10.12, "(1.73,-10.12)"]], xt: 1, yt: 2 }) },
    { t: "Élever un binôme au carré", body: String.raw`Développe $\left(\sqrt5-2\sqrt3\right)^2$.\soln $a^2-2ab+b^2$ avec $a=\sqrt5$, $b=2\sqrt3$ : $5-2(\sqrt5)(2\sqrt3)+4\cdot3=5-4\sqrt{15}+12$. \\ $=17-4\sqrt{15}$. \\ \textbf{Vérification :} $(2.236-3.464)^2\approx1.51$, et $17-4(3.873)\approx1.51$ \checkmark` +
      pgf({ curves: [{ f: "(x-3.464)^2" }], bounds: [0, 6, 0, 13], dots: [[2.236, 1.51, "(2.24,1.51)"]], xt: 1, yt: 2 }) },
    { t: "Rationaliser des dénominateurs", body: String.raw`Rationalise a) $\dfrac{12}{\sqrt6}$ \quad b) $\dfrac{4}{\sqrt7-\sqrt3}$.\soln a) Multiplie par $\dfrac{\sqrt6}{\sqrt6}$ : $\dfrac{12\sqrt6}{6}=2\sqrt6$. \\ b) Multiplie par le conjugué $\dfrac{\sqrt7+\sqrt3}{\sqrt7+\sqrt3}$ : le dénominateur vaut $7-3=4$, donc $\dfrac{4(\sqrt7+\sqrt3)}{4}=\sqrt7+\sqrt3$.` +
      pgf({ curves: [{ f: "12/sqrt(x)" }], bounds: [1, 16, 0, 13], dots: [[6, 4.899, "(6,4.90)"]], xt: 1, yt: 2 }) },
    { t: "Des radicaux avec des variables", body: String.raw`Simplifie $\sqrt{72a^5}$ où $a\ge0$.\soln $72=36\cdot2$ et $a^5=a^4\cdot a$, donc $\sqrt{36\cdot a^4\cdot2a}=6a^2\sqrt{2a}$. \\ \textbf{Vérification :} pour $a=2$ : $\sqrt{72\cdot32}=48$, et $6(4)\sqrt4=48$ \checkmark` +
      pgf({ curves: [{ f: "sqrt(72*x^5)" }], bounds: [0, 3, 0, 110], dots: [[2, 48, "(2,48)"]], xt: 1, yt: 10 }) },
    { t: "Application : la distance entre deux points", body: String.raw`Trouve la distance exacte entre $A(-2,1)$ et $B(4,5)$.\soln $d=\sqrt{(4-(-2))^2+(5-1)^2}=\sqrt{36+16}=\sqrt{52}$. \\ $\sqrt{52}=\sqrt{4\cdot13}=2\sqrt{13}\approx7.21$ unités.` +
      pgf({ curves: [{ f: "2*x/3+7/3" }], bounds: [-3, 5, 0, 6], dots: [[-2, 1, "A"], [4, 5, "B"]], xt: 1, yt: 1, note: "La distance est la longueur du segment oblique entre $A$ et $B$." }) },
    { t: "Vérifie avant de faire confiance", body: String.raw`Un élève affirme que $\sqrt{x^2+9}=x+3$. Vérifie-le.
${eqTableTex(sqrtEq, [0, 1, 2, 4], { check: true })}
\soln Les deux membres ne concordent que pour $x=0$. Une seule différence suffit pour prouver que l'affirmation est fausse : il n'y a pas de règle de la somme $\sqrt{a+b}=\sqrt a+\sqrt b$ (ici $\sqrt{x^2+9}\ne\sqrt{x^2}+\sqrt9$).` },
  ],
  questions: [
    { ask: String.raw`Simplifie $\sqrt{120}$.`, ws: "1.8cm" },
    { ask: String.raw`Simplifie $\sqrt{675}$.`, ws: "2cm" },
    { ask: String.raw`Écris $4\sqrt7$ sous forme de radical entier et vérifie les deux formes à la calculatrice.`, ws: "2.2cm" },
    { ask: String.raw`Simplifie $4\sqrt8+3\sqrt{18}-\sqrt{50}$.`, ws: "2.8cm" },
    { ask: String.raw`Simplifie $(5\sqrt2)(3\sqrt6)$.`, ws: "2.2cm" },
    { ask: String.raw`Développe et simplifie $\sqrt5\left(4\sqrt{10}-3\right)$.`, ws: "2.6cm" },
    { ask: String.raw`Développe et simplifie $\left(3\sqrt2-4\right)\left(2\sqrt2+5\right)$.`, ws: "3cm" },
    { ask: String.raw`Développe a) $\left(\sqrt{11}+\sqrt5\right)\left(\sqrt{11}-\sqrt5\right)$ \quad b) $\left(2\sqrt3+\sqrt7\right)^2$.`, ws: "3.2cm" },
    { ask: String.raw`Rationalise le dénominateur de $\dfrac{9}{2\sqrt3}$.`, ws: "2.6cm" },
    { ask: String.raw`Rationalise le dénominateur de $\dfrac{6}{4-\sqrt{10}}$ et simplifie.`, ws: "3.2cm" },
    { ask: String.raw`Simplifie $\sqrt{98x^4y^3}$, où $x,y\ge0$.`, ws: "2.6cm" },
    { ask: String.raw`Une boîte mesure $3$ m sur $4$ m sur $5$ m. Trouve la longueur exacte de sa plus longue diagonale, $\sqrt{l^2+w^2+h^2}$, et une valeur approchée à $2$ décimales.`, ws: "3cm" },
    { ask: String.raw`Un élève écrit $\sqrt{a^2-b^2}=a-b$. Vérifie l'affirmation avec $a=5,\ b=3$, puis explique quelle règle l'élève a mal utilisée.`, ws: "3.2cm" },
    { ask: String.raw`Montre que $\sqrt{9+4\sqrt5}=2+\sqrt5$ en élevant le membre de droite au carré, puis vérifie les deux membres à la calculatrice.`, ws: "4cm", challenge: true },
  ],
  answers: [
    String.raw`$\sqrt{120}=\sqrt{4\cdot30}=2\sqrt{30}$.`,
    String.raw`$675=225\cdot3$, donc $15\sqrt3$.`,
    String.raw`$4\sqrt7=\sqrt{16\cdot7}=\sqrt{112}$. Les deux valent $10.583$.`,
    String.raw`$8\sqrt2+9\sqrt2-5\sqrt2=12\sqrt2$.`,
    String.raw`$15\sqrt{12}=15\cdot2\sqrt3=30\sqrt3$.`,
    String.raw`$4\sqrt{50}-3\sqrt5=20\sqrt2-3\sqrt5$.`,
    String.raw`$12+15\sqrt2-8\sqrt2-20=-8+7\sqrt2$.`,
    String.raw`a) $11-5=6$. \quad b) $12+4\sqrt{21}+7=19+4\sqrt{21}$.`,
    String.raw`$\dfrac{9\sqrt3}{2\cdot3}=\dfrac{3\sqrt3}{2}$.`,
    String.raw`Multiplie par $\dfrac{4+\sqrt{10}}{4+\sqrt{10}}$ : dénominateur $16-10=6$; $\dfrac{6(4+\sqrt{10})}{6}=4+\sqrt{10}$.`,
    String.raw`$\sqrt{49\cdot2\cdot x^4\cdot y^2\cdot y}=7x^2y\sqrt{2y}$.`,
    String.raw`$\sqrt{9+16+25}=\sqrt{50}=5\sqrt2\approx7.07$ m.`,
    String.raw`Avec $a=5,\ b=3$ : $\sqrt{25-9}=4$ mais $5-3=2$. L'élève a traité la racine comme si elle se distribuait sur une soustraction; les règles des racines ne s'appliquent qu'aux \emph{produits et quotients}. ($\sqrt{a^2-b^2}=\sqrt{(a-b)(a+b)}$.)`,
    String.raw`$(2+\sqrt5)^2=4+4\sqrt5+5=9+4\sqrt5$ et $2+\sqrt5>0$, donc $\sqrt{9+4\sqrt5}=2+\sqrt5$. Calculatrice : $\sqrt{17.944}=4.236$ et $2+2.236=4.236$ \checkmark.`,
  ],
  learn: [
    ["Simplifier des radicaux", r`Sors le plus grand facteur \textbf{carré parfait} : $\sqrt{72}=6\sqrt2$. N'additionne ou ne soustrais que des \textbf{radicaux semblables}, après avoir simplifié chacun. Multiplie les radicandes : $(a\sqrt b)(c\sqrt d)=ac\sqrt{bd}$, et $(\sqrt a)^2=a$.`],
    ["Conjugués et rationalisation", r`$(a+\sqrt b)(a-\sqrt b)=a^2-b$ est rationnel. Pour éliminer un radical d'un dénominateur, multiplie le haut et le bas par $\sqrt b$ (monôme) ou par le \textbf{conjugué} (binôme).`],
    ["Vérifier", r`Il n'y a pas de règle de la somme : $\sqrt{a+b}\ne\sqrt a+\sqrt b$. Vérifie toute réécriture à la calculatrice --- des formes exactes équivalentes ont la même valeur décimale.`],
  ],
};
