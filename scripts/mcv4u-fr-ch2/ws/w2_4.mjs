// MCV4U-FR Fiche 2.4 — La règle de dérivation en chaîne (édition enseignant)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const EXAMPLES = [
  { title: "Une pente intérieure négative", q: S`Dérive $y=(5-2x)^6$.`,
    steps: [S`Extérieure $u^6$, intérieure $u=5-2x$, $u'=-2$.`, S`$y'=6(5-2x)^5(-2)$.`], ans: S`$y'=-12(5-2x)^5$` },
  { title: "Une cubique à l'intérieur", q: S`Dérive $y=(x^3+2x)^4$.`,
    steps: [S`$y'=4(x^3+2x)^3\cdot(3x^2+2)$.`], ans: S`$y'=4(3x^2+2)(x^3+2x)^3$` },
  { title: "Une racine cubique", q: S`Dérive $y=\sqrt[3]{4x-1}$.`,
    steps: [S`$y=(4x-1)^{1/3}\Rightarrow y'=\frac13(4x-1)^{-2/3}\cdot4$.`], ans: S`$y'=\frac{4}{3(4x-1)^{2/3}}$` },
  { title: "L'inverse d'une puissance", q: S`Dérive $y=\frac{3}{(2x+1)^2}$.`,
    steps: [S`$y=3(2x+1)^{-2}\Rightarrow y'=-6(2x+1)^{-3}\cdot2$.`], ans: S`$y'=-\frac{12}{(2x+1)^3}$` },
  { title: "Notation de Leibniz", q: S`$y=\sqrt u$ et $u=x^2+9$. Trouve $\frac{dy}{dx}$ en $x=4$.`,
    steps: [S`$\frac{dy}{du}=\frac1{2\sqrt u}$, $\frac{du}{dx}=2x$.`, S`$\frac{dy}{dx}=\frac{x}{\sqrt{x^2+9}}$; en 4 : $\frac45$.`], ans: S`$\frac45$` },
  { title: "L'ordre compte", q: S`$f(x)=\sqrt x$ et $g(x)=x^2-7$. Trouve $(f\circ g)'(4)$ et $(g\circ f)'(4)$.`,
    steps: [S`$(f\circ g)'(4)=f'(g(4))g'(4)=\frac1{2\sqrt9}\cdot8=\frac43$.`, S`$g\circ f=x-7$ (pour $x\ge0$), donc $(g\circ f)'=1$.`], ans: S`$\frac43$ et $1$` },
  { title: "Une tangente", q: S`Trouve la tangente à $y=\sqrt{x^2+16}$ en $x=3$.`,
    fig: F({ view: { xmin: -5, xmax: 6, ymin: 0, ymax: 8 }, curves: [{ f: (x) => Math.sqrt(x * x + 16) }, { f: (x) => 0.6 * x + 3.2, color: "green" }], points: [pt(3, 5)], step: { x: 1, y: 1 } }),
    steps: [S`$y(3)=5$; $y'=\frac{x}{\sqrt{x^2+16}}\Rightarrow y'(3)=\frac35$.`, S`$y-5=0.6(x-3)$.`], ans: S`$y=0.6x+3.2$` },
  { title: "Produit et chaîne", q: S`Trouve les tangentes horizontales de $y=x(2x-3)^3$.`,
    fig: F({ view: { xmin: -0.3, xmax: 2, ymin: -5, ymax: 2 }, curves: [{ f: (x) => x * (2 * x - 3) ** 3 }], points: [pt(0.375, 0.375 * (0.75 - 3) ** 3), pt(1.5, 0)], step: { x: 0.5, y: 1 } }),
    steps: [S`$y'=(2x-3)^3+x\cdot3(2x-3)^2\cdot2=(2x-3)^2(8x-3)$.`, S`$y'=0$ en $x=1.5$ et en $x=0.375$.`], ans: S`en $x=0.375$ ($y\approx-4.27$) et en $x=1.5$ ($y=0$)` },
  { title: "Maximum d'un inverse", q: S`Trouve la tangente horizontale de $y=\frac1{x^2-4x+5}$.`,
    fig: F({ view: { xmin: -1, xmax: 5, ymin: -0.2, ymax: 1.4 }, curves: [{ f: (x) => 1 / (x * x - 4 * x + 5) }], points: [pt(2, 1)], step: { x: 1, y: 0.2 } }),
    steps: [S`$y=(x^2-4x+5)^{-1}\Rightarrow y'=-\frac{2x-4}{(x^2-4x+5)^2}$.`, S`$y'=0$ en $x=2$; $y(2)=1$.`], ans: "(2, 1), le point le plus haut" },
];

const PROBLEMS = [
  { level: 1, q: S`Dérive $y=(x+7)^4$.`, recap: "Dérivée intérieure 1.", ans: S`$4(x+7)^3$` },
  { level: 1, q: S`Dérive $y=(3x-4)^2$.`, recap: "Dérivée intérieure 3.", ans: S`$6(3x-4)$` },
  { level: 1, q: S`Dérive $y=(1-x)^3$.`, recap: "Dérivée intérieure −1.", ans: S`$-3(1-x)^2$` },
  { level: 2, q: S`Pour $y=(x^2-5)^4$, trouve $y'(2)$.`, recap: "4(x² − 5)³ · 2x.", ans: "−16" },
  { level: 2, q: S`Pour $y=\sqrt{6x+1}$, trouve $y'(4)$.`, recap: "3/√(6x + 1).", ans: "0.6" },
  { level: 2, q: S`Dérive $y=\frac{2}{(x+3)^3}$.`, recap: "Réécris sous forme de puissance négative.", ans: S`$-\frac{6}{(x+3)^4}$` },
  { level: 2, q: S`$g(2)=3$, $g'(2)=4$ et $f'(3)=-2$. Trouve $(f\circ g)'(2)$.`, recap: "f′(g(2)) g′(2).", ans: "−8" },
  { level: 2, q: S`Trouve la tangente à $y=(2x-3)^4$ en $x=1$ et trace-la.`, recap: "Point (1, 1).", ans: S`$y=-8x+9$`, fig: gridT({ xmin: -1, xmax: 3, ymin: -2, ymax: 10 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Trouve tous les points où $y=(x^2-1)^3$ a une tangente horizontale, et esquisse la courbe.`, recap: "y′ = 6x(x² − 1)².", ans: S`$(0,-1)$, $(1,0)$, $(-1,0)$`, fig: gridT({ xmin: -2, xmax: 2, ymin: -2, ymax: 3 }, { x: 0.5, y: 0.5 }) },
  { level: 3, space: 5, q: S`Pour $y=x^2\sqrt{1-x}$, $x\lt1$, trouve $y'$ sous la forme d'une seule fraction et les valeurs de x des tangentes horizontales.`, recap: "Produit + chaîne, dénominateur commun.", ans: S`$y'=\frac{x(4-5x)}{2\sqrt{1-x}}$; $x=0$ et $x=0.8$` },
  { level: 3, space: 5, q: S`Trouve $y'(0)$ pour $y=\left(1+(3x-1)^2\right)^3$.`, recap: "Deux couches de la règle de dérivation en chaîne.", ans: S`$3(2)^2\cdot6(-1)=-72$` },
  { level: 3, space: 5, q: S`Une onde circulaire a un rayon $r=4t$ cm après $t$ s. À quel rythme son aire augmente-t-elle à $t=3$?`, recap: "dA/dt = 2πr · dr/dt.", ans: S`$96\pi\approx301.6$ cm² par s` },
  { level: 3, space: 5, q: S`Utilise la règle de dérivation en chaîne sur $g(x)^{-1}$ pour montrer que $\left(\frac1g\right)'=-\frac{g'}{g^2}$. Applique ce résultat à $g(x)=x^2+x$ en $x=1$.`, recap: "Extérieure u⁻¹.", ans: S`$-\frac{3}{4}$` },
];

export const WS = {
  code: "2.4",
  title: "La règle de dérivation en chaîne",
  bigideas: S`Une fonction composée $f(g(x))$ a une fonction extérieure $f$ et une fonction intérieure $g$. Son taux de variation est le produit des deux taux : $\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}$, ou $(f(g(x)))'=f'(g(x))\,g'(x)$. Le cas le plus fréquent est la puissance d'une fonction, $\frac{d}{dx}[g(x)]^n=n[g(x)]^{n-1}g'(x)$. Réécris d'abord les racines et les inverses sous forme de puissances, et combine avec la règle du produit quand des fonctions composées sont multipliées.`,
  goals: ["Reconnaître les fonctions intérieure et extérieure.", "Utiliser la règle de dérivation en chaîne dans les deux notations.", "Dériver des puissances, des racines et des inverses de fonctions.", "Combiner la règle de dérivation en chaîne et la règle du produit."],
  curriculum: "A3.4, A3.5",
  vocab: [["Fonction composée", "$f(g(x))$"], ["Règle de dérivation en chaîne", "$\\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}$"], ["Fonction intérieure", "$u=g(x)$"]],
  hook: S`L'engrenage A fait 3 tours pour chaque tour de l'engrenage B, et B fait 2 tours pour chaque tour de l'engrenage C. Combien de tours A fait-il pour chaque tour de C?`,
  concepts: [
    ["1. Les taux se multiplient", S`$y=u^2$ avec $u=3x-1$ : $\frac{dy}{du}=2u$ et $\frac{du}{dx}=3$, donc $\frac{dy}{dx}=6(3x-1)$. La courbe $y=(3x-1)^2$ et sa dérivée :
${F({ view: { xmin: -1, xmax: 1.6, ymin: -7, ymax: 10 }, curves: [{ f: (x) => (3 * x - 1) ** 2 }, { f: (x) => 6 * (3 * x - 1), color: "blue" }], points: [pt(1 / 3, 0)], step: { x: 0.5, y: 2 } })}`],
    ["2. Extérieur, intérieur", S`Dérive la fonction extérieure, garde l'intérieur inchangé, multiplie par la dérivée intérieure.`],
    ["3. Combiner", S`$x^2(3x+1)^4$ : la règle du produit d'abord, la règle de dérivation en chaîne à l'intérieur.`],
  ],
  tips: ["N'oublie jamais la dérivée intérieure.", "Ne modifie pas l'intérieur en dérivant l'extérieur.", "Réécris les racines et les inverses sous forme de puissances.", "Mets en évidence les puissances communes dans la réponse.", "f(g(x)) et g(f(x)) ont habituellement des dérivées différentes."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
