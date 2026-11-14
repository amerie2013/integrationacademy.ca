// MCV4U-FR Fiche 5.3 — Dérivées des fonctions exponentielles (édition de l'enseignant; miroir de ../../mcv4u-ch5/ws/w5_3.mjs)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const E = Math.E;
const EXAMPLES = [
  { title: "Une somme d'exponentielles", q: S`Dérive $y=7e^x-e^{-x}$.`,
    steps: [S`$7e^x-(-e^{-x})$.`], ans: S`$y'=7e^x+e^{-x}$` },
  { title: "Un exposant du second degré", q: S`Dérive $y=e^{3x^2-x}$.`,
    steps: [S`$g=3x^2-x$, $g'=6x-1$.`], ans: S`$y'=(6x-1)e^{3x^2-x}$` },
  { title: "Base 4", q: S`Trouve la pente de $y=4^x$ en $x=\frac12$.`,
    steps: [S`$y'=4^x\ln4$; en $\frac12$ : $2\ln4$.`], ans: "environ 2.773" },
  { title: "Extremums de x²eˣ", q: S`Trouve les extremums relatifs de $y=x^2e^x$.`,
    fig: F({ view: { xmin: -5, xmax: 1, ymin: -0.3, ymax: 2 }, curves: [{ f: (x) => x * x * Math.exp(x) }], points: [pt(-2, 4 / E ** 2), pt(0, 0)], step: { x: 0.5, y: 0.25 } }),
    steps: [S`$y'=(x^2+2x)e^x=x(x+2)e^x$ : signes $+,-,+$.`, S`$y(-2)=\frac4{e^2}$, $y(0)=0$.`], ans: S`max. relatif $\left(-2,\frac4{e^2}\right)\approx(-2,0.541)$; min. relatif $(0,0)$` },
  { title: "Un quotient", q: S`Trouve le minimum de $y=\frac{e^x}{x}$, $x\gt0$.`,
    fig: F({ view: { xmin: 0, xmax: 3.5, ymin: 0, ymax: 10 }, curves: [{ f: (x) => Math.exp(x) / x, a: 0.15, b: 3.5 }], points: [pt(1, E)], step: { x: 0.5, y: 1 } }),
    steps: [S`$y'=\frac{xe^x-e^x}{x^2}=\frac{e^x(x-1)}{x^2}$.`, S`Nulle en $x=1$; $y(1)=e$.`], ans: S`minimum $(1,e)$` },
  { title: "Une tangente", q: S`Trouve la tangente à $y=e^{2x}$ en $x=0$.`,
    fig: F({ view: { xmin: -2, xmax: 1, ymin: -1, ymax: 5 }, curves: [{ f: (x) => Math.exp(2 * x) }, { f: (x) => 2 * x + 1, color: "green", a: -1.2, b: 0.9 }], points: [pt(0, 1)], step: { x: 0.5, y: 1 } }),
    steps: [S`Point $(0,1)$; pente $2e^0=2$.`], ans: S`$y=2x+1$` },
  { title: "Un produit avec une exponentielle décroissante", q: S`Trouve l'extremum de $y=(x+1)e^{-x}$.`,
    steps: [S`$y'=e^{-x}-(x+1)e^{-x}=-xe^{-x}$.`, S`Nulle en 0, $+$ puis $-$ : maximum $y(0)=1$.`], ans: S`maximum $(0,1)$` },
  { title: "Vérifier (2ˣ)′", q: S`Utilise la règle pour trouver la pente de $y=2^x$ en $x=3$ et compare avec $0.693\times2^3$.`,
    steps: [S`$2^3\ln2\approx5.545$; $0.693\times8\approx5.544$.`], ans: "elles concordent : la constante 0.693 est ln 2" },
  { title: "Une racine dans l'exposant", q: S`Pour $y=e^{\sqrt x}$, trouve $y'(4)$.`,
    steps: [S`$y'=\frac{e^{\sqrt x}}{2\sqrt x}$; en 4 : $\frac{e^2}{4}$.`], ans: "environ 1.847" },
];

const PROBLEMS = [
  { level: 1, q: S`Dérive $y=e^{6x}$.`, recap: "Dérivée intérieure 6.", ans: S`$6e^{6x}$` },
  { level: 1, q: S`Dérive $y=3e^x$.`, recap: "Multiple constant.", ans: S`$3e^x$` },
  { level: 1, q: S`Dérive $y=e^{-4x}$.`, recap: "Dérivée intérieure −4.", ans: S`$-4e^{-4x}$` },
  { level: 2, q: S`Pour $y=e^{x^2}$, trouve $y'(1)$.`, recap: S`$2xe^{x^2}$.`, ans: S`$2e\approx5.437$` },
  { level: 2, q: S`Pour $y=5^x$, trouve $y'(0)$.`, recap: "ln 5.", ans: S`$\approx1.609$` },
  { level: 2, q: S`Pour $y=xe^{-x}$, trouve $y'(0)$.`, recap: "Règle du produit.", ans: "1" },
  { level: 2, q: S`Trouve la valeur minimale de $y=e^x+e^{-x}$.`, recap: "y′ = 0 en x = 0.", ans: "2" },
  { level: 2, q: S`Trouve la tangente à $y=e^x-1$ en $x=0$ et trace-la.`, recap: "Point (0, 0), pente 1.", ans: S`$y=x$`, fig: gridT({ xmin: -3, xmax: 2, ymin: -2, ymax: 5 }, { x: 0.5, y: 1 }) },
  { level: 3, space: 5, q: S`Pour $y=\frac{e^x}{e^x+2}$, trouve où la pente est la plus grande et sa valeur.`, recap: S`$y'=\frac{2e^x}{(e^x+2)^2}$.`, ans: S`en $x=\ln2$ : pente $\frac14$` },
  { level: 3, space: 5, q: S`Trouve le maximum de $y=xe^{-x^2/2}$ pour $x\gt0$.`, recap: S`$y'=(1-x^2)e^{-x^2/2}$.`, ans: S`en $x=1$ : $e^{-1/2}\approx0.607$` },
  { level: 3, space: 5, q: S`Démontre que $\frac{d}{dx}b^x=b^x\ln b$ en écrivant $b^x=e^{x\ln b}$.`, recap: "Dérivation en chaîne avec la fonction intérieure x ln b.", ans: S`$\frac{d}{dx}e^{x\ln b}=\ln b\cdot e^{x\ln b}=b^x\ln b$` },
  { level: 3, space: 5, q: S`Montre que $y=3^{-x}$ est décroissante et trouve sa pente en $x=0$.`, recap: "Dérivée de b exposant −x.", ans: S`$y'=-3^{-x}\ln3\lt0$; pente $-\ln3\approx-1.099$` },
  { level: 3, space: 5, q: S`Esquisse $y=e^x-x$ en montrant son minimum et son comportement aux extrémités.`, recap: "y′ = eˣ − 1.", ans: S`minimum $(0,1)$; tend vers $\infty$ des deux côtés (comme $-x$ à gauche)`, fig: gridT({ xmin: -3, xmax: 2.5, ymin: -0.5, ymax: 6 }, { x: 0.5, y: 1 }) },
];

export const WS = {
  code: "5.3",
  title: "Dérivées des fonctions exponentielles",
  bigideas: S`$\frac{d}{dx}e^x=e^x$; avec la règle de dérivation en chaîne, $\frac{d}{dx}e^{g(x)}=g'(x)e^{g(x)}$. Pour toute base, $b^x=e^{x\ln b}$, donc $\frac{d}{dx}b^x=b^x\ln b$. Une exponentielle n'est jamais nulle : mets-la en évidence pour résoudre $f'(x)=0$.`,
  goals: ["Dériver eˣ et les exponentielles de fonctions.", "Dériver bˣ.", "Utiliser les règles du produit et du quotient.", "Trouver des tangentes et des extremums."],
  curriculum: "A2.3, A3.4",
  vocab: [["$(e^g)'$", "$g'e^g$"], ["$(b^x)'$", "$b^x\\ln b$"], ["$e^x\\gt0$", "jamais nulle"]],
  hook: S`La pente de $2^x$ en 0 était d'environ 0.693 et celle de $3^x$ d'environ 1.099. Calcule $\ln2$ et $\ln3$. Que remarques-tu?`,
  concepts: [
    ["1. Sa propre dérivée", S`$y=e^x$ (violet) et $y=e^{2x}$ avec sa dérivée $2e^{2x}$ (bleu) :
${F({ view: { xmin: -2, xmax: 1.5, ymin: -0.5, ymax: 8 }, curves: [{ f: Math.exp }, { f: (x) => Math.exp(2 * x), color: "blue" }, { f: (x) => 2 * Math.exp(2 * x), color: "amber" }], step: { x: 0.5, y: 1 } })}`],
    ["2. Dérivation en chaîne", S`Dérive l'exposant, puis multiplie par l'exponentielle inchangée.`],
    ["3. Autres bases", S`Convertis en base $e$ : $b^x=e^{x\ln b}$.`],
  ],
  tips: ["Pas de règle de la puissance pour eˣ.", "Garde l'exponentielle inchangée.", "Inclus ln b pour bˣ.", "Mets les exponentielles en évidence.", "Une exponentielle dont le coefficient de l'exposant est négatif décroît."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
