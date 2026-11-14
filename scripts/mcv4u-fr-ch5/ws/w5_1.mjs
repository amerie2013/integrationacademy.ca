// MCV4U-FR Fiche 5.1 — Taux de variation et le nombre e (édition de l'enseignant; miroir de ../../mcv4u-ch5/ws/w5_1.mjs)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const E = Math.E;
const EXAMPLES = [
  { title: "Pente de 4ˣ en 0", q: S`Estime la pente de $y=4^x$ en $x=0$ avec $h=0.001$.`,
    steps: [S`$\frac{4^{0.001}-1}{0.001}\approx1.3873$.`], ans: S`environ 1.387 (exactement $\ln4\approx1.3863$)` },
  { title: "Une exponentielle décroissante", q: S`Estime la pente de $y=\left(\frac12\right)^x$ en $x=0$.`,
    steps: [S`$\frac{0.5^{0.001}-1}{0.001}\approx-0.6929$.`], ans: "environ −0.693 : négative, parce que la fonction décroît" },
  { title: "Pente ÷ hauteur est constant", q: S`Pour $y=2^x$, compare le rapport pente ÷ hauteur en $x=1$ et en $x=2$.`,
    fig: F({ view: { xmin: -1, xmax: 3, ymin: -0.5, ymax: 7 }, curves: [{ f: (x) => 2 ** x }, { f: (x) => 2 + 1.386 * (x - 1), color: "green", a: 0.2, b: 1.8 }, { f: (x) => 4 + 2.773 * (x - 2), color: "green", a: 1.4, b: 2.6 }], points: [pt(1, 2), pt(2, 4)], step: { x: 0.5, y: 1 } }),
    steps: [S`Pentes $\approx1.386$ et $2.773$; hauteurs 2 et 4.`, S`Les deux rapports valent $\approx0.693$.`], ans: "le même rapport, 0.693, en chaque point" },
  { title: "S'approcher de e", q: S`Évalue $\left(1+\frac1n\right)^n$ pour $n=2,\ 5,\ 50$.`,
    steps: [S`$2.25$, $2.48832$, $2.69159$.`], ans: S`croissant vers $e\approx2.718$` },
  { title: "e à partir d'une somme", q: S`Évalue $1+1+\frac12+\frac16+\frac1{24}$ et compare avec $e$.`,
    steps: [S`$2+0.5+0.1667+0.0417\approx2.7083$.`], ans: "2.7083, déjà proche de 2.7183" },
  { title: "Deux tangentes à eˣ", q: S`Trouve les tangentes à $y=e^x$ en $x=0$ et en $x=-1$.`,
    fig: F({ view: { xmin: -3, xmax: 1.5, ymin: -0.5, ymax: 4 }, curves: [{ f: Math.exp }, { f: (x) => x + 1, color: "green", a: -1.5, b: 1.3 }, { f: (x) => (x + 2) / E, color: "green", a: -3, b: 0.5 }], points: [pt(0, 1), pt(-1, 1 / E)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`En 0 : pente 1 passant par $(0,1)$ : $y=x+1$.`, S`En $-1$ : pente $e^{-1}$ passant par $(-1,e^{-1})$ : $y=\frac1e(x+2)$.`], ans: S`$y=x+1$ et $y=\frac{x+2}{e}$` },
  { title: "eˣ comparée à xᵉ", q: S`Compare $e^3$ et $3^e$.`,
    steps: [S`$e^3\approx20.09$, $3^e\approx19.81$.`], ans: S`$e^3$ est légèrement plus grand — ce sont deux fonctions différentes` },
  { title: "Capitalisation continue", q: S`Un montant de 1000 dollars rapporte 100 % d'intérêt composé $n$ fois par année. De quelle valeur s'approche-t-il lorsque $n\to\infty$?`,
    steps: [S`$1000\left(1+\frac1n\right)^n\to1000e$.`], ans: "environ 2718.28 dollars" },
  { title: "Là où la pente vaut 2", q: S`En quel point $y=e^x$ a-t-elle une pente de 2?`,
    fig: F({ view: { xmin: -1.5, xmax: 2, ymin: -0.5, ymax: 6 }, curves: [{ f: Math.exp }, { f: (x) => 2 + 2 * (x - Math.log(2)), color: "green", a: -0.3, b: 1.6 }], points: [pt(Math.log(2), 2)], step: { x: 0.5, y: 1 } }),
    steps: [S`Pente $=e^x=2\Rightarrow x=\ln2\approx0.693$.`], ans: S`$(\ln2,2)\approx(0.693,2)$` },
];

const PROBLEMS = [
  { level: 1, q: S`Quelle est la pente de $y=e^x$ en $x=1$?`, recap: "(eˣ)′ = eˣ.", ans: S`$e\approx2.718$` },
  { level: 1, q: S`Vrai ou faux : sur $y=e^x$, la pente est toujours égale à la hauteur.`, recap: "Définition de e.", ans: "vrai" },
  { level: 1, q: S`Évalue $\left(1+\frac1{10}\right)^{10}$.`, recap: "On s'approche de e.", ans: "2.594" },
  { level: 2, q: S`Estime la pente de $y=5^x$ en $x=0$.`, recap: S`$\frac{5^h-1}{h}$ avec $h$ petit.`, ans: S`$\approx1.609$` },
  { level: 2, q: S`Utilise le rapport de $2^x$ pour estimer sa pente en $x=4$.`, recap: "0.693 × 16.", ans: S`$\approx11.09$` },
  { level: 2, q: S`Quelle est la pente de $y=e^x$ en $x=-2$?`, recap: S`Évalue $e^{-2}$.`, ans: S`$\approx0.135$` },
  { level: 2, q: S`Trouve la tangente à $y=e^x$ en $x=2$ et trace-la.`, recap: "Point (2, e²), pente e².", ans: S`$y=e^2(x-1)$`, fig: gridT({ xmin: -1, xmax: 3, ymin: -2, ymax: 12 }, { x: 0.5, y: 1 }) },
  { level: 2, q: S`Pour quelle base $b$ la pente de $y=b^x$ en $x=0$ est-elle égale à 2?`, recap: "La pente en 0 est ln b.", ans: S`$b=e^2\approx7.389$` },
  { level: 3, space: 5, q: S`Montre que la pente de $\left(\frac1b\right)^x$ en 0 est l'opposé de la pente de $b^x$ en 0.`, recap: S`$\left(\frac1b\right)^x=b^{-x}$.`, ans: S`$\frac{b^{-h}-1}{h}=-\frac{b^{h'}-1}{h'}$ avec $h'=-h$; les limites sont opposées` },
  { level: 3, space: 5, q: S`Montre que la tangente à $y=e^x$ en $x=a$ coupe l'axe des x en $x=a-1$.`, recap: "Pose y = 0 dans l'équation de la tangente.", ans: S`$y=e^a(x-a)+e^a=0\Rightarrow x=a-1$` },
  { level: 3, space: 5, q: S`Compare 500 dollars placés pendant 5 ans à 6 % composé de façon continue et composé mensuellement.`, recap: S`$500e^{0.3}$ et $500(1.005)^{60}$.`, ans: "674.93 dollars contre 674.43 dollars" },
  { level: 3, space: 5, q: S`Explique pourquoi $e^x\ge1+x$ pour tout $x$, à l'aide de la tangente en $x=0$. Esquisse les deux graphiques.`, recap: "eˣ est concave vers le haut, donc elle est au-dessus de ses tangentes.", ans: S`$y=1+x$ est la tangente en 0; la courbe s'en éloigne vers le haut des deux côtés`, fig: gridT({ xmin: -3, xmax: 2, ymin: -2, ymax: 6 }, { x: 0.5, y: 1 }) },
  { level: 3, space: 5, q: S`Une colonie double toutes les heures : $N(t)=50\cdot2^t$. Estime à quelle vitesse elle croît en $t=5$ h.`, recap: "Pente ≈ 0.693 × N.", ans: S`$\approx0.693\times1600\approx1109$ par heure` },
];

export const WS = {
  code: "5.1",
  title: "Taux de variation et le nombre e",
  bigideas: S`Pour toute base $b$, la pente de $y=b^x$ est proportionnelle à sa hauteur : $\frac{d}{dx}b^x=c_b\,b^x$, où $c_b$ est la pente en $x=0$. Le nombre $e\approx2.71828$ est la base pour laquelle $c_e=1$, donc $\frac{d}{dx}e^x=e^x$. Numériquement, $e=\lim_{n\to\infty}\left(1+\frac1n\right)^n$, le résultat d'une capitalisation continue.`,
  goals: ["Estimer des pentes d'exponentielles.", "Expliquer que la pente est proportionnelle à la hauteur.", "Décrire e de deux façons.", "Utiliser (eˣ)′ = eˣ."],
  curriculum: "A2.2, A2.3",
  vocab: [["$e$", "$\\approx2.71828$"], ["$(e^x)'$", "$e^x$"], ["Pente en 0", "$c_b$"]],
  hook: S`Une banque offre 100 % d'intérêt. Préfères-tu qu'il soit versé une fois par année, chaque mois ou chaque seconde? Que devient 1 dollar?`,
  concepts: [
    ["1. Trois exponentielles", S`$2^x$ (bleu), $e^x$ (violet), $3^x$ (ambre) passent par $(0,1)$; seule $e^x$ y a une pente de 1 :
${F({ view: { xmin: -2.5, xmax: 2, ymin: -0.5, ymax: 7 }, curves: [{ f: (x) => 2 ** x, color: "blue" }, { f: Math.exp }, { f: (x) => 3 ** x, color: "amber" }, { f: (x) => 1 + x, color: "green", a: -1, b: 1.5 }], points: [pt(0, 1)], step: { x: 0.5, y: 1 } })}`],
    ["2. Pourquoi proportionnelle", S`$b^{x+h}-b^x=b^x(b^h-1)$.`],
    ["3. Le nombre e", S`Pente 1 en 0; $\left(1+\frac1n\right)^n\to e$.`],
  ],
  tips: ["e est une constante.", "(eˣ)′ = eˣ, mais (2ˣ)′ ≠ 2ˣ.", "eˣ et xᵉ sont différentes.", "Utilise assez de chiffres pour e.", "Les exponentielles sont toujours positives."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
