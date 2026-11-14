// MCV4U-FR Fiche 5.4 — Règles de dérivation des fonctions exponentielles (édition de l'enseignant; miroir de ../../mcv4u-ch5/ws/w5_4.mjs)
import { F, gridT, pt } from "./figT.mjs";

const S = String.raw;
const E = Math.E;
const EXAMPLES = [
  { title: "Une onde amortie", q: S`Dérive $y=e^{-x}\cos(3x)$.`,
    steps: [S`$-e^{-x}\cos3x+e^{-x}(-3\sin3x)$.`], ans: S`$y'=-e^{-x}(\cos3x+3\sin3x)$` },
  { title: "Dérivation logarithmique", q: S`Dérive $y=x^{2x}$ et trouve $y'(1)$.`,
    steps: [S`$\ln y=2x\ln x\Rightarrow\frac{y'}{y}=2\ln x+2$.`, S`$y'=x^{2x}(2\ln x+2)$; en 1 : $1\cdot2$.`], ans: S`$y'(1)=2$` },
  { title: "Un minimum", q: S`Trouve le minimum de $y=(x-1)e^{2x}$.`,
    fig: F({ view: { xmin: -3, xmax: 1.3, ymin: -1.6, ymax: 1.5 }, curves: [{ f: (x) => (x - 1) * Math.exp(2 * x) }], points: [pt(0.5, -E / 2)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`$y'=e^{2x}+2(x-1)e^{2x}=e^{2x}(2x-1)$.`, S`Nulle en $\frac12$ : $y=-\frac12e$.`], ans: S`minimum $\left(\frac12,-\frac e2\right)\approx(0.5,-1.359)$` },
  { title: "Le ln d'une exponentielle", q: S`Pour $y=\ln(1+e^x)$, trouve $y'$ et $y'(0)$.`,
    steps: [S`$y'=\frac{e^x}{1+e^x}$; en 0 : $\frac12$.`], ans: S`$\frac{e^x}{1+e^x}$; $\frac12$` },
  { title: "Jamais décroissante", q: S`Montre que $y=\frac{e^x}{1+x^2}$ n'est jamais décroissante.`,
    fig: F({ view: { xmin: -3, xmax: 3.5, ymin: -0.3, ymax: 3.5 }, curves: [{ f: (x) => Math.exp(x) / (1 + x * x) }], points: [pt(1, E / 2)], step: { x: 0.5, y: 0.5 } }),
    steps: [S`$y'=\frac{e^x(1+x^2)-e^x\cdot2x}{(1+x^2)^2}=\frac{e^x(x-1)^2}{(1+x^2)^2}\ge0$.`], ans: S`croissante partout, avec un point à tangente horizontale en $x=1$` },
  { title: "Une autre puissance variable", q: S`Pour $y=(x^2+1)^x$, trouve $y'(1)$.`,
    steps: [S`$\ln y=x\ln(x^2+1)\Rightarrow\frac{y'}{y}=\ln(x^2+1)+\frac{2x^2}{x^2+1}$.`, S`En 1 : $y=2$, donc $y'=2(\ln2+1)$.`], ans: S`$\approx3.386$` },
  { title: "Un point d'inflexion", q: S`Trouve le point d'inflexion de $y=xe^{-x}$.`,
    fig: F({ view: { xmin: -0.5, xmax: 6, ymin: -0.3, ymax: 0.5 }, curves: [{ f: (x) => x * Math.exp(-x), a: -0.3, b: 6 }], points: [pt(1, 1 / E), pt(2, 2 / E ** 2)], step: { x: 0.5, y: 0.1 } }),
    steps: [S`$y'=(1-x)e^{-x}$, $y''=(x-2)e^{-x}$.`, S`Changement de signe en $x=2$ : $y=\frac2{e^2}$.`], ans: S`$\left(2,\frac2{e^2}\right)\approx(2,0.271)$` },
  { title: "Combiner des bases", q: S`Dérive $y=2^x\cdot3^x$.`,
    steps: [S`$2^x3^x=6^x$, donc $y'=6^x\ln6$.`], ans: S`$6^x\ln6\approx1.792\cdot6^x$` },
  { title: "Exponentielle fois logarithme", q: S`Pour $y=e^{2x}\ln(x+1)$, trouve $y'(0)$.`,
    steps: [S`$2e^{2x}\ln(x+1)+\frac{e^{2x}}{x+1}$; en 0 : $0+1$.`], ans: "1" },
];

const PROBLEMS = [
  { level: 1, q: S`Dérive $y=xe^x$.`, recap: "Règle du produit.", ans: S`$(x+1)e^x$` },
  { level: 1, q: S`Dérive $y=e^x\sin x$.`, recap: "Règle du produit.", ans: S`$e^x(\sin x+\cos x)$` },
  { level: 1, q: S`Dérive $y=\ln(e^x)$.`, recap: "Simplifie d'abord.", ans: "1" },
  { level: 2, q: S`Pour $y=x^2e^{-x}$, trouve $y'(1)$.`, recap: S`$(2x-x^2)e^{-x}$.`, ans: S`$\frac1e\approx0.368$` },
  { level: 2, q: S`Pour $y=\frac{e^{3x}}{x}$, trouve $y'(1)$.`, recap: S`$\frac{e^{3x}(3x-1)}{x^2}$.`, ans: S`$2e^3\approx40.17$` },
  { level: 2, q: S`Pour $y=x^{3x}$, trouve $y'(1)$.`, recap: "Dérivation logarithmique.", ans: "3" },
  { level: 2, q: S`Pour $y=\frac{e^x+e^{-x}}{2}$, trouve $y'(\ln2)$.`, recap: S`$y'=\frac{e^x-e^{-x}}2$.`, ans: "0.75" },
  { level: 2, q: S`Trouve la tangente à $y=xe^x$ en $x=0$ et trace-la.`, recap: "Point (0, 0), pente 1.", ans: S`$y=x$`, fig: gridT({ xmin: -4, xmax: 1.5, ymin: -1, ymax: 4 }, { x: 0.5, y: 0.5 }) },
  { level: 3, space: 5, q: S`Pour $y=x^{\sin x}$, trouve $y'\left(\frac\pi2\right)$.`, recap: "ln y = sin x ln x.", ans: S`$\frac{y'}{y}=\cos x\ln x+\frac{\sin x}{x}$; $y'=\frac\pi2\cdot\frac2\pi=1$` },
  { level: 3, space: 5, q: S`Trouve les points d'inflexion de $y=x^2e^{-x}$.`, recap: S`$y''=(x^2-4x+2)e^{-x}$.`, ans: S`$x=2\pm\sqrt2\approx0.586,\ 3.414$` },
  { level: 3, space: 5, q: S`Trouve le maximum de $y=10xe^{-x/5}$ pour $x\ge0$.`, recap: "Règle du produit; mets l'exponentielle en évidence.", ans: S`en $x=5$ : $\frac{50}{e}\approx18.39$` },
  { level: 3, space: 5, q: S`Trouve et classe les points critiques de $y=e^{-x}(x^2-3)$.`, recap: S`$y'=-e^{-x}(x-3)(x+1)$.`, ans: S`min. $(-1,-2e)\approx(-1,-5.44)$; max. $\left(3,\frac6{e^3}\right)\approx(3,0.299)$` },
  { level: 3, space: 5, q: S`Esquisse $y=e^{-x}\sin x$ pour $0\le x\le2\pi$ entre les courbes $y=\pm e^{-x}$.`, recap: "Oscillation amortie.", ans: S`une onde dont les sommets rapetissent et qui touche les enveloppes $y=\pm e^{-x}$`, fig: gridT({ xmin: 0, xmax: 6.5, ymin: -0.5, ymax: 1 }, { x: 0.5, y: 0.25 }) },
];

export const WS = {
  code: "5.4",
  title: "Règles de dérivation des fonctions exponentielles",
  bigideas: S`Combine $(e^x)'=e^x$, $(\ln x)'=\frac1x$ et $(b^x)'=b^x\ln b$ avec les règles du produit, du quotient et de dérivation en chaîne, en choisissant d'abord la règle de la dernière opération. Pour des fonctions comme $x^x$, dont la variable est dans la base et dans l'exposant, utilise la dérivation logarithmique : prends le $\ln$ des deux membres, dérive, puis multiplie par $y$. Mets les exponentielles en évidence pour trouver les nombres critiques.`,
  goals: ["Combiner les règles avec les exponentielles et les logarithmes.", "Utiliser la dérivation logarithmique.", "Trouver des dérivées secondes.", "Situer les extremums et les points d'inflexion."],
  curriculum: "A3.4",
  vocab: [["Dérivation log.", "ln des deux membres"], ["$\\frac{d}{dx}\\ln y$", "$\\frac{y'}{y}$"], ["Onde amortie", "$e^{-kx}\\sin x$"]],
  hook: S`$x^x$ est-elle une fonction puissance ou une fonction exponentielle? Essaie la règle de la puissance et la règle des exponentielles en $x=2$, puis compare avec un quotient de différence.`,
  concepts: [
    ["1. Fonctions mixtes", S`$y=xe^{-x}$ monte jusqu'à un maximum en $x=1$ et change de concavité en $x=2$ :
${F({ view: { xmin: -0.5, xmax: 6, ymin: -0.3, ymax: 0.5 }, curves: [{ f: (x) => x * Math.exp(-x), a: -0.3, b: 6 }], points: [pt(1, 1 / E)], step: { x: 0.5, y: 0.1 } })}`],
    ["2. Dérivation logarithmique", S`$\ln y=g\ln f\Rightarrow y'=y\left(g'\ln f+\frac{gf'}{f}\right)$.`],
    ["3. Mettre en évidence", S`$e^{2x}(2x-1)=0\iff x=\frac12$.`],
  ],
  tips: ["xˣ demande la dérivation logarithmique.", "Remultiplie par y.", "Diviser par eˣ = multiplier par e exposant −x.", "Mets les exponentielles en évidence.", "Règle du produit encore pour les dérivées secondes."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
