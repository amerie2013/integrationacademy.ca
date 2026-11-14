// MCV4U-FR Fiche 3.1 — Fonctions croissantes et décroissantes (édition enseignant). Miroir de ../../mcv4u-ch3/ws/w3_1.mjs.
import { F, gridT, pt } from "./figT.mjs";
import { chartT } from "../csign.mjs";
import { tvT } from "../../mcr3u-extables.mjs";
import { field, box, can, poster } from "../diagrams.mjs";

const S = String.raw;
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const VR = { xmin: -4, xmax: 11, ymin: -6, ymax: 30 };

const EXAMPLES = [
  { title: "Une fonction cubique", q: S`Trouve les intervalles de croissance et de décroissance de $f(x)=x^3+6x^2-15x$.`,
    fig: F({ view: { xmin: -8, xmax: 4, ymin: -30, ymax: 110 }, curves: [{ f: (x) => x ** 3 + 6 * x * x - 15 * x }], points: [pt(-5, 100), pt(1, -8)], step: { x: 1, y: 20 } }),
    steps: [S`\textbf{Règle :} $f$ monte là où $f'>0$ et descend là où $f'<0$; une dérivée polynomiale $f'$ ne change de signe qu'à ses zéros.`,
      S`\textbf{Factorise :} $f'(x)=3x^2+12x-15=3(x^2+4x-5)=3(x+5)(x-1)$.`,
      S`\textbf{Nombres critiques :} $x=-5$ et $x=1$. Teste une valeur dans chaque intervalle (tableau ci-dessous).`,
      S`\textbf{Vérifie :} $f(-5)=-125+150+75=100$ et $f(1)=1+6-15=-8$ : le graphique atteint un sommet en $(-5,100)$ et un creux en $(1,-8)$ \checkmark`],
    tab: chartT({ cuts: [[-5, "-5"], [1, "1"]], factors: [["x+5", (x) => x + 5], ["x-1", (x) => x - 1]], d: ["f'(x)", (x) => 3 * x * x + 12 * x - 15] }),
    ans: S`croissante sur $(-\infty,-5)$ et $(1,\infty)$; décroissante sur $(-5,1)$` },
  { title: "Un facteur répété", q: S`Trouve les intervalles de croissance et de décroissance de $f(x)=x^4-2x^3$.`,
    fig: F({ view: { xmin: -1, xmax: 2.5, ymin: -2, ymax: 3 }, curves: [{ f: (x) => x ** 4 - 2 * x ** 3 }], points: [pt(1.5, 1.5 ** 4 - 2 * 1.5 ** 3), pt(0, 0)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`\textbf{Factorise :} $f'(x)=4x^3-6x^2=2x^2(2x-3)$. Zéros $x=0$ et $x=\tfrac32$.`,
      S`\textbf{Idée clé :} $2x^2\ge0$ des deux côtés de $0$, donc il ne change pas le signe. Le signe de $f'$ est celui de $2x-3$.`,
      S`\textbf{Lis le tableau :} $x=0$ est un nombre critique avec une tangente horizontale, mais sans changement de direction.`,
      S`\textbf{Vérifie :} $f(1.5)=5.0625-6.75=-1.6875$, plus bas que $f(1)=-1$ et $f(2)=0$ \checkmark`],
    tab: chartT({ cuts: [[0, "0"], [1.5, "\\tfrac32"]], factors: [["2x^2", (x) => 2 * x * x], ["2x-3", (x) => 2 * x - 3]], d: ["f'(x)", (x) => 4 * x ** 3 - 6 * x * x] }),
    ans: S`décroissante sur $(-\infty,1.5)$; croissante sur $(1.5,\infty)$` },
  { title: "Une fonction quadratique", q: S`Où $f(x)=5-4x-x^2$ est-elle croissante?`,
    fig: F({ view: { xmin: -6, xmax: 2, ymin: -3, ymax: 10 }, curves: [{ f: (x) => 5 - 4 * x - x * x }], points: [pt(-2, 9)], step: { x: 1, y: 1 } }),
    steps: [S`\textbf{Dérivée :} $f'(x)=-4-2x$.`,
      S`\textbf{Résous $f'>0$ :} $-4-2x>0\iff-2x>4\iff x<-2$ (diviser par $-2$ inverse le sens de l'inégalité).`,
      S`\textbf{Signification :} la parabole est ouverte vers le bas, donc elle monte jusqu'à son sommet en $x=-2$ et descend ensuite.`,
      S`\textbf{Vérifie :} sommet $x=-\tfrac{b}{2a}=-\tfrac{-4}{2(-1)}=-2$, $f(-2)=9$ \checkmark`],
    tab: chartT({ cuts: [[-2, "-2"]], d: ["f'(x)", (x) => -4 - 2 * x] }),
    ans: S`sur $(-\infty,-2)$` },
  { title: "À partir d'une dérivée factorisée", q: S`$f'(x)=x(x-2)^2(x+3)$. Trouve les intervalles de croissance et de décroissance de $f$.`,
    fig: F({ view: { xmin: -4, xmax: 3.5, ymin: -12, ymax: 12 }, curves: [{ f: (x) => x * (x - 2) ** 2 * (x + 3), color: "blue" }], points: [pt(-3, 0), pt(0, 0), pt(2, 0)], step: { x: 1, y: 2 } }, 6.5, "le graphique de $f'$"),
    steps: [S`\textbf{Zéros de $f'$ :} $x=-3$, $0$ et $2$.`,
      S`\textbf{Signes des facteurs :} $x$ et $x+3$ changent de signe à leurs zéros; $(x-2)^2$ jamais.`,
      S`\textbf{Multiplie les signes} dans chaque intervalle (tableau ci-dessous).`,
      S`\textbf{Vérifie :} $f'(1)=1\cdot1\cdot4=4>0$ et $f'(3)=3\cdot1\cdot6=18>0$ : la fonction monte des deux côtés de $2$ \checkmark`],
    tab: chartT({ cuts: [[-3, "-3"], [0, "0"], [2, "2"]], factors: [["x+3", (x) => x + 3], ["x", (x) => x], ["(x-2)^2", (x) => (x - 2) ** 2]], d: ["f'(x)", (x) => x * (x - 2) ** 2 * (x + 3)] }),
    ans: S`croissante sur $(-\infty,-3)$ et $(0,\infty)$; décroissante sur $(-3,0)$` },
  { title: "Une fonction rationnelle", q: S`Trouve les intervalles de croissance et de décroissance de $f(x)=\frac{x^2}{x-3}$.`,
    fig: F({ view: VR, curves: rat((x) => (x * x) / (x - 3), [3], VR), vlines: [{ x: 3, color: "red", dash: true }], points: [pt(0, 0), pt(6, 12)], step: { x: 1, y: 4 } }),
    steps: [S`\textbf{Règle du quotient :} $f'(x)=\frac{2x(x-3)-x^2}{(x-3)^2}=\frac{x^2-6x}{(x-3)^2}=\frac{x(x-6)}{(x-3)^2}$.`,
      S`\textbf{Points de découpage :} les zéros $0$ et $6$, et l'asymptote $x=3$ (où $f$ n'est pas définie).`,
      S`\textbf{Signe :} $(x-3)^2>0$, donc le signe est celui de $x(x-6)$.`,
      S`\textbf{Valeurs :} $f(0)=0$ (max), $f(6)=\frac{36}{3}=12$ (min).`],
    tab: chartT({ cuts: [[0, "0"], [3, "3"], [6, "6"]], undef: [3], d: ["f'(x)", (x) => (x * (x - 6)) / (x - 3) ** 2] }),
    ans: S`croissante sur $(-\infty,0)$ et $(6,\infty)$; décroissante sur $(0,3)$ et $(3,6)$` },
  { title: "Une fonction racine", q: S`Trouve les intervalles de croissance et de décroissance de $f(x)=\sqrt x\,(5-x)$, $x\ge0$.`,
    fig: F({ view: { xmin: 0, xmax: 6, ymin: -4, ymax: 5.5 }, curves: [{ f: (x) => Math.sqrt(x) * (5 - x), a: 0, b: 6 }], points: [pt(5 / 3, Math.sqrt(5 / 3) * (10 / 3))], step: { x: 1, y: 1 } }),
    steps: [S`\textbf{Réécris :} $f(x)=5x^{1/2}-x^{3/2}$.`,
      S`\textbf{Dérivée :} $f'(x)=\tfrac52x^{-1/2}-\tfrac32x^{1/2}=\frac{5-3x}{2\sqrt x}$ (dénominateur commun $2\sqrt x$).`,
      S`\textbf{Signe :} $2\sqrt x>0$ pour $x>0$, donc le signe est celui de $5-3x$ : zéro en $x=\tfrac53$.`,
      S`\textbf{Vérifie :} $f\!\left(\tfrac53\right)=\sqrt{\tfrac53}\cdot\tfrac{10}{3}\approx4.30$, au-dessus de $f(1)=4$ et de $f(3)\approx3.46$ \checkmark`],
    tab: chartT({ from: [0, "0"], cuts: [[5 / 3, "\\tfrac53"]], d: ["f'(x)", (x) => (5 - 3 * x) / (2 * Math.sqrt(x))] }),
    ans: S`croissante sur $\left(0,\frac53\right)$; décroissante sur $\left(\frac53,\infty\right)$` },
  { title: "Lire le graphique de f′", q: S`Le graphique de $f'(x)=4-x^2$ est illustré. Où $f$ est-elle croissante, et où a-t-elle un maximum relatif?`,
    fig: F({ view: { xmin: -3.5, xmax: 3.5, ymin: -5, ymax: 5 }, curves: [{ f: (x) => 4 - x * x, color: "blue" }], points: [pt(-2, 0), pt(2, 0)], step: { x: 1, y: 1 } }, 6.5, "le graphique de $f'$"),
    steps: [S`\textbf{Lis les hauteurs comme des pentes :} au-dessus de l'axe, $f'>0$, donc $f$ monte.`,
      S`\textbf{Zéros :} le graphique coupe l'axe en $x=\pm2$.`,
      S`\textbf{Changements de signe :} en $x=2$, $f'$ passe de $+$ à $-$ : max. relatif. En $x=-2$, de $-$ à $+$ : min. relatif.`,
      S`\textbf{Vérifie :} $f(x)=4x-\tfrac13x^3$ a cette dérivée et atteint un sommet en $x=2$ \checkmark`],
    tab: chartT({ cuts: [[-2, "-2"], [2, "2"]], d: ["f'(x)", (x) => 4 - x * x] }),
    ans: S`croissante sur $(-2,2)$; maximum relatif en $x=2$` },
  { title: "Un modèle de température", q: S`Une température est $T(t)=t^3-15t^2+63t+10$ °C pour $0\le t\le10$ h. Quand augmente-t-elle?`,
    fig: F({ view: { xmin: 0, xmax: 10.5, ymin: 0, ymax: 150 }, curves: [{ f: (t) => t ** 3 - 15 * t * t + 63 * t + 10, a: 0, b: 10 }], points: [pt(3, 91), pt(7, 59), pt(10, 140)], step: { x: 1, y: 20 } }),
    steps: [S`\textbf{Signification :} $T'(t)$ est le taux de variation en °C par heure; augmenter signifie $T'(t)>0$.`,
      S`\textbf{Factorise :} $T'(t)=3t^2-30t+63=3(t^2-10t+21)=3(t-3)(t-7)$.`,
      S`\textbf{Les deux zéros} $3$ et $7$ sont dans $[0,10]$.`,
      S`\textbf{Vérifie :} $T(0)=10$, $T(3)=91$, $T(7)=59$, $T(10)=140$ : monte, descend, monte \checkmark`],
    tab: chartT({ v: "t", f: "T", from: [0, "0"], to: [10, "10"], cuts: [[3, "3"], [7, "7"]], d: ["T'(t)", (t) => 3 * t * t - 30 * t + 63] }),
    ans: S`elle augmente pour $0\le t\lt3$ et $7\lt t\le10$; elle diminue sur $(3,7)$` },
  { title: "Un paramètre", q: S`Pour quelles valeurs de $k$ la fonction $f(x)=x^3-3x^2+kx$ est-elle croissante pour tout $x$?`,
    fig: F({ view: { xmin: -1, xmax: 3, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x ** 3 - 3 * x * x + 3 * x, color: "violet" }, { f: (x) => x ** 3 - 3 * x * x, color: "amber" }], points: [pt(1, 1)], step: { x: 1, y: 1 } }, 6.5, "violet : $k=3$; ambre : $k=0$ (creux)"),
    steps: [S`\textbf{Condition :} il faut $f'(x)=3x^2-6x+k\ge0$ pour tout $x$.`,
      S`\textbf{Complète le carré :} $f'(x)=3(x-1)^2+(k-3)$. Sa plus petite valeur est $k-3$, en $x=1$.`,
      S`\textbf{Résous :} $k-3\ge0$, donc $k\ge3$.`,
      S`\textbf{Vérifie à l'aide du discriminant :} $36-12k\le0\iff k\ge3$ \checkmark. Pour $k=3$, le graphique ne fait que s'aplatir en $(1,1)$.`],
    ans: S`$k\ge3$` },
];


const PROBLEMS = [
  { level: 1, q: S`Où $f(x)=x^2-8x+1$ est-elle croissante?`, recap: "f′ = 2x − 8.", ans: S`$x\gt4$` },
  { level: 1, q: S`$f'(x)\lt0$ sur $(1,5)$. Que fait $f$ sur cet intervalle?`, recap: "Signe de f′.", ans: "elle décroît" },
  { level: 1, q: S`Trouve les nombres critiques de $f(x)=x^3-48x$.`, recap: "Résous f′ = 0.", ans: S`$x=\pm4$` },
  { level: 2, q: S`Trouve les intervalles de croissance et de décroissance de $f(x)=2x^3+3x^2-12x$.`, recap: "Factorise f′.", ans: S`croissante sur $(-\infty,-2)$, $(1,\infty)$; décroissante sur $(-2,1)$` },
  { level: 2, q: S`Trouve les intervalles de croissance et de décroissance de $f(x)=x^4-32x$.`, recap: "f′ = 4(x − 2)(x² + 2x + 4).", ans: S`décroissante pour $x\lt2$; croissante pour $x\gt2$` },
  { level: 2, q: S`Trouve les intervalles de croissance et de décroissance de $f(x)=\frac{x}{(x+1)^2}$.`, recap: "Découpe aussi à l'asymptote.", ans: S`$f'=\frac{1-x}{(x+1)^3}$ : décroissante sur $(-\infty,-1)$ et $(1,\infty)$; croissante sur $(-1,1)$` },
  { level: 2, q: S`Trouve les intervalles de croissance et de décroissance de $f(x)=x-2\sqrt x$.`, recap: "f′ = 1 − 1/√x.", ans: S`décroissante sur $(0,1)$; croissante sur $(1,\infty)$` },
  { level: 2, q: S`Dresse un tableau de signes de $f'$ pour $f(x)=-x^3+3x$, puis esquisse $f$.`, recap: "f′ = 3(1 − x²).", ans: S`croissante sur $(-1,1)$; décroissante ailleurs`, fig: gridT({ xmin: -3, xmax: 3, ymin: -4, ymax: 4 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`$f(x)=x^3+bx^2+cx$ est décroissante exactement sur $(-1,3)$. Trouve $b$ et $c$.`, recap: "f′ = 3(x + 1)(x − 3).", ans: S`$b=-3$, $c=-9$` },
  { level: 3, space: 5, q: S`Montre que $f(x)=x^5+x^3+x$ est croissante partout, et explique pourquoi l'équation $f(x)=0$ a exactement une solution réelle.`, recap: "Signe de f′; une fonction croissante coupe 0 au plus une fois.", ans: S`$f'=5x^4+3x^2+1\gt0$; $f$ est croissante et prend des valeurs négatives et positives, donc elle coupe 0 une seule fois (en $x=0$)` },
  { level: 3, space: 5, q: S`Trouve les intervalles de croissance et de décroissance de $f(x)=x^{2/3}(x-5)$.`, recap: "Mets en évidence la plus petite puissance de x.", ans: S`$f'=\frac53x^{-1/3}(x-2)$ : croissante sur $(-\infty,0)$ et $(2,\infty)$; décroissante sur $(0,2)$` },
  { level: 3, space: 5, q: S`Les ventes mensuelles d'un nouveau jeu sont de $S(t)=\frac{200t}{t^2+100}$ milliers d'unités, $t$ mois après le lancement. Quand les ventes augmentent-elles, et quand diminuent-elles?`, recap: "Règle du quotient; t ≥ 0.", ans: S`$S'=\frac{200(100-t^2)}{(t^2+100)^2}$ : elles augmentent pour $0\le t\lt10$ et diminuent pour $t\gt10$` },
  { level: 3, space: 5, q: S`Esquisse une fonction telle que $f(-1)=4$, $f(2)=-1$, $f'\gt0$ pour $x\lt-1$ et $x\gt2$, et $f'\lt0$ sur $(-1,2)$.`, recap: "Monte, descend, monte.", ans: "maximum relatif (−1, 4), minimum relatif (2, −1); monte, descend, monte", fig: gridT({ xmin: -4, xmax: 5, ymin: -4, ymax: 7 }, { x: 1, y: 1 }) },
];

export const WS = {
  code: "3.1",
  title: "Fonctions croissantes et décroissantes",
  bigideas: S`Une fonction est croissante là où $f'(x)\gt0$ et décroissante là où $f'(x)\lt0$. Sa dérivée ne peut changer de signe qu'aux nombres critiques — là où $f'(x)=0$ ou $f'(x)$ n'existe pas — et, pour les fonctions rationnelles, aux asymptotes verticales. Factorise $f'$, marque ces nombres sur une droite et teste une valeur dans chaque intervalle pour construire un tableau de signes. Un facteur répété (au carré) ne change pas le signe.`,
  goals: ["Relier le signe de f′ à la croissance et à la décroissance.", "Trouver les nombres critiques.", "Construire des tableaux de signes, y compris pour des fonctions rationnelles.", "Décrire f à partir du graphique de f′."],
  curriculum: "B1.1, B1.2",
  vocab: [["Croissante", "$x_1\\lt x_2\\Rightarrow f(x_1)\\lt f(x_2)$"], ["Nombre critique", "$f'(c)=0$ ou n'existe pas"], ["Tableau de signes", "signes de $f'$ sur des intervalles"]],
  hook: S`Suis du doigt la courbe $y=x^3-3x$ de gauche à droite. Où ton doigt monte-t-il? Où les tangentes sont-elles horizontales?`,
  concepts: [
    ["1. Signe de f′, direction de f", S`$f(x)=x^3+6x^2-15x$ (violet) avec $f'(x)=3(x+5)(x-1)$ (bleu) :
${F({ view: { xmin: -8, xmax: 4, ymin: -40, ymax: 110 }, curves: [{ f: (x) => x ** 3 + 6 * x * x - 15 * x }, { f: (x) => 3 * x * x + 12 * x - 15, color: "blue" }], points: [pt(-5, 100), pt(1, -8)], step: { x: 1, y: 20 } })}`],
    ["2. La méthode", S`Factorise $f'$ $\to$ nombres critiques $\to$ teste chaque intervalle.`],
    ["3. Surveille les facteurs", S`Les puissances paires comme $(x-2)^2$ ne changent jamais de signe.`],
  ],
  tips: ["Teste f′, pas f.", "Découpe aux asymptotes pour les fonctions rationnelles.", "Un facteur au carré ne change pas le signe.", "Utilise des intervalles ouverts.", "Vérifie le domaine (les racines exigent x ≥ 0)."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
