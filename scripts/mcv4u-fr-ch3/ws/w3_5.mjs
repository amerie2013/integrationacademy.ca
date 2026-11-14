// MCV4U-FR Fiche 3.5 — Synthèse : l'esquisse de courbes (édition enseignant). Miroir de ../../mcv4u-ch3/ws/w3_5.mjs.
import { F, gridT, pt } from "./figT.mjs";
import { chartT, pairT } from "../csign.mjs";
import { signTex, lin } from "../../mhf4u-fr-ch2/sign.mjs";
import { tvT } from "../../mcr3u-extables.mjs";
import { field, box, can, poster } from "../diagrams.mjs";

const S = String.raw;
const rat = (f, poles, v, color = "violet") => {
  const cuts = [v.xmin, ...poles, v.xmax];
  return cuts.slice(0, -1).map((a, i) => ({ f, a: i === 0 ? a : a + 0.004, b: i === cuts.length - 2 ? cuts[i + 1] : cuts[i + 1] - 0.004, color }));
};
const V3 = { xmin: -6, xmax: 6, ymin: -4, ymax: 6 };
const V4 = { xmin: -8, xmax: 4, ymin: -12, ymax: 6 };
const V9 = { xmin: -3, xmax: 7, ymin: -4, ymax: 6 };
const r1 = (-1 + Math.sqrt(7)) / 3, r2 = (-1 - Math.sqrt(7)) / 3;
const q4 = (x) => 3 * x ** 4 + 4 * x ** 3 - 12 * x * x;

const EXAMPLES = [
  { title: "Une cubique complète", q: S`Esquisse $f(x)=-x^3+3x^2+9x-2$.`,
    fig: F({ view: { xmin: -3, xmax: 5, ymin: -12, ymax: 30 }, curves: [{ f: (x) => -(x ** 3) + 3 * x * x + 9 * x - 2 }], points: [pt(-1, -7), pt(3, 25), pt(1, 9, null, "violet"), pt(0, -2, null, "amber")], step: { x: 1, y: 5 } }),
    steps: [S`\textbf{Ordonnée à l'origine et extrémités :} $f(0)=-2$; le terme dominant $-x^3$ donne $f\to+\infty$ à gauche et $-\infty$ à droite.`,
      S`\textbf{$f'$ :} $-3x^2+6x+9=-3(x-3)(x+1)$. Valeurs : $f(-1)=1+3-9-2=-7$, $f(3)=-27+27+27-2=25$.`,
      S`\textbf{$f''$ :} $-6x+6$, nulle en $x=1$; $f(1)=-1+3+9-2=9$.`,
      S`\textbf{Vérification :} le point d'inflexion est à mi-chemin entre les points tournants : $\frac{-1+3}{2}=1$ \checkmark`],
    tab: pairT(chartT({ cuts: [[-1, "-1"], [3, "3"]], d: ["f'(x)", (x) => -3 * x * x + 6 * x + 9] }), chartT({ kind: "conc", cuts: [[1, "1"]], d: ["f''(x)", (x) => -6 * x + 6] })),
    ans: S`min $(-1,-7)$, max $(3,25)$, point d'inflexion $(1,9)$` },
  { title: "Une quartique à trois points tournants", q: S`Esquisse $f(x)=3x^4+4x^3-12x^2$.`,
    fig: F({ view: { xmin: -3, xmax: 2, ymin: -36, ymax: 12 }, curves: [{ f: q4 }], points: [pt(-2, -32), pt(0, 0), pt(1, -5), { x: r1, y: q4(r1), color: "violet" }, { x: r2, y: q4(r2), color: "violet" }], step: { x: 0.5, y: 4 } }),
    steps: [S`\textbf{$f'$ :} $12x^3+12x^2-24x=12x(x^2+x-2)=12x(x+2)(x-1)$.`,
      S`\textbf{Points tournants :} $f(-2)=48-32-48=-32$, $f(0)=0$, $f(1)=3+4-12=-5$.`,
      S`\textbf{$f''$ :} $36x^2+24x-24=12(3x^2+2x-2)$; formule quadratique : $x=\frac{-2\pm\sqrt{4+24}}{6}=\frac{-1\pm\sqrt7}{3}\approx-1.22,\ 0.55$.`,
      S`\textbf{Vérification :} chaque point d'inflexion se trouve entre un minimum et le maximum \checkmark`],
    tab: pairT(chartT({ cuts: [[-2, "-2"], [0, "0"], [1, "1"]], d: ["f'(x)", (x) => 12 * x * (x + 2) * (x - 1)] }), chartT({ kind: "conc", cuts: [[r2, "-1.22"], [r1, "0.55"]], d: ["f''(x)", (x) => 12 * (3 * x * x + 2 * x - 2)] })),
    ans: S`minimums $(-2,-32)$ et $(1,-5)$, maximum $(0,0)$; points d'inflexion en $x\approx-1.22$, $0.55$` },
  { title: "Une fonction rationnelle", q: S`Esquisse $f(x)=\frac{x^2-9}{x^2-4}$.`,
    fig: F({ view: V3, curves: rat((x) => (x * x - 9) / (x * x - 4), [-2, 2], V3), vlines: [{ x: -2, color: "red", dash: true }, { x: 2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [pt(0, 2.25), pt(3, 0), pt(-3, 0)], step: { x: 1, y: 1 } }),
    steps: [S`\textbf{Récris :} $f=\frac{(x^2-4)-5}{x^2-4}=1-\frac{5}{x^2-4}$ : asymptotes $x=\pm2$, $y=1$; fonction paire.`,
      S`\textbf{Intersections avec les axes :} $(\pm3,0)$ et $f(0)=\frac{-9}{-4}=\frac94$.`,
      S`\textbf{$f'$ :} $\frac{10x}{(x^2-4)^2}$ : minimum $\left(0,\frac94\right)$.`,
      S`\textbf{$f''$ :} $\frac{-10(3x^2+4)}{(x^2-4)^3}$ : son signe est l'opposé de celui de $(x^2-4)^3$.`],
    tab: pairT(chartT({ cuts: [[-2, "-2"], [0, "0"], [2, "2"]], undef: [-2, 2], d: ["f'(x)", (x) => (10 * x) / (x * x - 4) ** 2], tests: [-3, -1, 1, 3] }), chartT({ kind: "conc", cuts: [[-2, "-2"], [2, "2"]], undef: [-2, 2], d: ["f''(x)", (x) => (-10 * (3 * x * x + 4)) / (x * x - 4) ** 3] })),
    ans: S`minimum $(0,2.25)$; concave vers le haut entre les asymptotes, vers le bas à l'extérieur` },
  { title: "Une asymptote oblique", q: S`Esquisse $f(x)=\frac{x^2-3}{x+2}$.`,
    fig: F({ view: V4, curves: rat((x) => (x * x - 3) / (x + 2), [-2], V4), vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 1, b: -2, color: "red", dash: true }], points: [pt(-1, -2), pt(-3, -6)], step: { x: 1, y: 2 } }),
    steps: [S`\textbf{Divise :} $x^2-3=(x+2)(x-2)+1$, donc $f(x)=x-2+\frac{1}{x+2}$.`,
      S`\textbf{Asymptotes :} $x=-2$ et la droite $y=x-2$.`,
      S`\textbf{$f'$ :} $1-\frac{1}{(x+2)^2}=\frac{(x+2)^2-1}{(x+2)^2}=\frac{(x+1)(x+3)}{(x+2)^2}$.`,
      S`\textbf{Valeurs :} $f(-1)=\frac{-2}{1}=-2$, $f(-3)=\frac{6}{-1}=-6$.`],
    tab: chartT({ cuts: [[-3, "-3"], [-2, "-2"], [-1, "-1"]], undef: [-2], d: ["f'(x)", (x) => 1 - 1 / (x + 2) ** 2], tests: [-4, -2.5, -1.5, 0] }),
    ans: S`minimum relatif $(-1,-2)$, maximum relatif $(-3,-6)$` },
  { title: "Une quintique impaire", q: S`Esquisse $f(x)=x^5-5x$.`,
    fig: F({ view: { xmin: -2, xmax: 2, ymin: -7, ymax: 7 }, curves: [{ f: (x) => x ** 5 - 5 * x }], points: [pt(-1, 4), pt(1, -4), pt(0, 0)], step: { x: 0.5, y: 1 } }),
    steps: [S`\textbf{Symétrie :} $f(-x)=-f(x)$ : impaire; le graphique est donc symétrique par rapport à l'origine (demi-tour).`,
      S`\textbf{$f'$ :} $5x^4-5=5(x^2+1)(x-1)(x+1)$ : max $f(-1)=4$, min $f(1)=-4$.`,
      S`\textbf{$f''$ :} $20x^3$ change de signe en $0$ : point d'inflexion $(0,0)$.`,
      S`\textbf{Zéros :} $x(x^4-5)=0$ : $x=0,\ \pm\sqrt[4]5\approx\pm1.50$.`],
    tab: pairT(chartT({ cuts: [[-1, "-1"], [1, "1"]], d: ["f'(x)", (x) => 5 * x ** 4 - 5] }), chartT({ kind: "conc", cuts: [[0, "0"]], d: ["f''(x)", (x) => 20 * x ** 3] })),
    ans: S`max $(-1,4)$, min $(1,-4)$, point d'inflexion $(0,0)$` },
  { title: "Une fonction racine", q: S`Esquisse $f(x)=x\sqrt{x+3}$.`,
    fig: F({ view: { xmin: -3.5, xmax: 2, ymin: -3, ymax: 5 }, curves: [{ f: (x) => x * Math.sqrt(x + 3), a: -3, b: 2 }], points: [pt(-3, 0), pt(-2, -2), pt(0, 0)], step: { x: 0.5, y: 1 } }),
    steps: [S`\textbf{Domaine :} $x+3\ge0$, donc $x\ge-3$; intersections avec les axes $(-3,0)$ et $(0,0)$.`,
      S`\textbf{$f'$ :} $\sqrt{x+3}+\frac{x}{2\sqrt{x+3}}=\frac{2(x+3)+x}{2\sqrt{x+3}}=\frac{3x+6}{2\sqrt{x+3}}$ : nulle en $x=-2$, $f(-2)=-2$.`,
      S`\textbf{$f''$ :} $\frac{3x+12}{4(x+3)^{3/2}}>0$ pour $x>-3$ : concave vers le haut partout.`,
      S`\textbf{Vérification :} $f(-2.5)\approx-1.77$ et $f(-1)\approx-1.41$, tous deux au-dessus de $-2$ \checkmark`],
    tab: pairT(chartT({ from: [-3, "-3"], cuts: [[-2, "-2"]], d: ["f'(x)", (x) => (3 * x + 6) / (2 * Math.sqrt(x + 3))] }), chartT({ kind: "conc", from: [-3, "-3"], cuts: [], d: ["f''(x)", (x) => (3 * x + 12) / (4 * (x + 3) ** 1.5)] })),
    ans: S`minimum $(-2,-2)$; commence en $(-3,0)$; concave vers le haut` },
  { title: "Associer f, f′ et f″", q: S`Pour $f(x)=-x^3+3x^2$, quel graphique est lequel?`,
    fig: F({ view: { xmin: -1.5, xmax: 3.5, ymin: -5, ymax: 6 }, curves: [{ f: (x) => -(x ** 3) + 3 * x * x }, { f: (x) => -3 * x * x + 6 * x, color: "blue" }, { f: (x) => -6 * x + 6, color: "amber" }], vlines: [{ x: 0, color: "gray", dash: true }, { x: 2, color: "gray", dash: true }], step: { x: 0.5, y: 1 } }),
    steps: [S`\textbf{Formules :} $f'(x)=-3x^2+6x=-3x(x-2)$, une parabole; $f''(x)=-6x+6$, une droite.`,
      S`\textbf{Violet $\to$ bleu :} le graphique violet a des tangentes horizontales en $x=0$ et en $x=2$, exactement là où le bleu vaut $0$ (droites grises).`,
      S`\textbf{Bleu $\to$ ambre :} le sommet du graphique bleu est en $x=1$, là où l'ambre vaut $0$.`,
      S`\textbf{Vérification :} le violet monte sur $(0,2)$, là où le bleu est au-dessus de l'axe \checkmark`],
    ans: S`violet $f$, bleu $f'$, ambre $f''$` },
  { title: "Intersections et comportement aux extrémités", q: S`Esquisse $f(x)=x(x-3)^2(x+2)$ à l'aide seulement des intersections avec les axes et du comportement aux extrémités.`,
    fig: F({ view: { xmin: -3, xmax: 4.5, ymin: -12, ymax: 25 }, curves: [{ f: (x) => x * (x - 3) ** 2 * (x + 2) }], points: [pt(-2, 0), pt(0, 0), pt(3, 0)], step: { x: 1, y: 5 } }),
    steps: [S`\textbf{Extrémités :} degré $1+2+1=4$, coefficient dominant $+1$ : monte aux deux extrémités.`,
      S`\textbf{Zéros :} simples en $-2$ et en $0$ (le graphique traverse l'axe); double en $3$ (il touche l'axe et rebrousse chemin).`,
      S`\textbf{Signes de $f$} entre les zéros (tableau ci-dessous) : $+,-,+,+$.`,
      S`\textbf{Vérification :} $f(-1)=-1\cdot16\cdot1=-16<0$ \checkmark`],
    tab: signTex([lin(1, 2), lin(1, 0), lin(1, -3, 2)], ">"),
    ans: "monte aux deux extrémités; traverse l'axe en −2 et en 0, le touche en 3" },
  { title: "Construire à partir de conditions", q: S`Esquisse une fonction ayant l'asymptote verticale $x=2$, l'asymptote horizontale $y=1$, $f'\lt0$ partout où elle est définie, $f''\lt0$ pour $x\lt2$ et $f''\gt0$ pour $x\gt2$.`,
    fig: F({ view: V9, curves: rat((x) => (x - 1) / (x - 2), [2], V9), vlines: [{ x: 2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], step: { x: 1, y: 1 } }),
    steps: [S`\textbf{Lis les conditions :} les deux branches descendent; celle de gauche se courbe vers le bas (chapeau), celle de droite vers le haut (coupe).`,
      S`\textbf{Essaie} $f(x)=1+\frac{1}{x-2}=\frac{x-1}{x-2}$ : asymptotes $x=2$, $y=1$.`,
      S`\textbf{Vérifie :} $f'(x)=\frac{-1}{(x-2)^2}<0$ et $f''(x)=\frac{2}{(x-2)^3}$ (tableaux ci-dessous) \checkmark`],
    tab: pairT(chartT({ cuts: [[2, "2"]], undef: [2], d: ["f'(x)", (x) => -1 / (x - 2) ** 2] }), chartT({ kind: "conc", cuts: [[2, "2"]], undef: [2], d: ["f''(x)", (x) => 2 / (x - 2) ** 3] })),
    ans: S`par exemple $f(x)=\frac{x-1}{x-2}$` },
];


const PROBLEMS = [
  { level: 1, q: S`Trouve les abscisses à l'origine de $f(x)=x^3-4x$.`, recap: "Factorise.", ans: S`$0$, $\pm2$` },
  { level: 1, q: S`Décris le comportement de $f(x)=-x^4+3x$ aux extrémités.`, recap: "Terme dominant.", ans: "descend aux deux extrémités" },
  { level: 1, q: S`Quelle symétrie $f(x)=x^3-5x$ possède-t-elle?`, recap: "f(−x).", ans: "impaire : symétrique par rapport à l'origine" },
  { level: 2, q: S`Esquisse $f(x)=x^3-3x+2$, en indiquant les extremums et le point d'inflexion.`, recap: "f′ = 3(x² − 1).", ans: S`max $(-1,4)$, min $(1,0)$, point d'inflexion $(0,2)$`, fig: gridT({ xmin: -3, xmax: 3, ymin: -2, ymax: 6 }, { x: 1, y: 1 }) },
  { level: 2, q: S`Trouve les points clés de $f(x)=x^4-2x^2-8$.`, recap: "Factorise (x² − 4)(x² + 2).", ans: S`intersections $(\pm2,0)$, $(0,-8)$; minimums $(\pm1,-9)$; maximum $(0,-8)$; points d'inflexion en $x=\pm\frac1{\sqrt3}$` },
  { level: 2, q: S`Trouve les asymptotes et l'extremum de $f(x)=\frac{x+1}{(x-1)^2}$.`, recap: "f′ = −(x + 3)/(x − 1)³.", ans: S`$x=1$ (vers le haut des deux côtés), $y=0$; minimum $\left(-3,-\frac18\right)$` },
  { level: 2, q: S`Trouve et classe les points critiques de $f(x)=x-3x^{1/3}$.`, recap: "Écris f′ avec une racine cubique; elle n'existe pas en 0.", ans: S`max $(-1,2)$, min $(1,-2)$; tangente verticale en $(0,0)$` },
  { level: 2, q: S`Esquisse le graphique de $y=f'(x)$ pour $f(x)=x^3-6x^2+9x+1$.`, recap: "f′ = 3(x − 1)(x − 3).", ans: "une parabole ouverte vers le haut, de zéros 1 et 3, de sommet (2, −3)", fig: gridT({ xmin: -1, xmax: 5, ymin: -4, ymax: 10 }, { x: 1, y: 1 }) },
  { level: 3, space: 5, q: S`Esquisse $f(x)=\frac{x^2-1}{x^2}$ avec toutes ses caractéristiques clés.`, recap: "f = 1 − 1/x².", ans: S`asymptotes $x=0$ (vers le bas des deux côtés), $y=1$; intersections $(\pm1,0)$; décroissante pour $x\lt0$, croissante pour $x\gt0$; concave vers le bas partout` },
  { level: 3, space: 5, q: S`Trouve et classe les points critiques de $f(x)=x^3(x-5)^2$, puis esquisse le graphique.`, recap: "f′ = x²(x − 5)(5x − 15).", ans: S`max $(3,108)$; min $(5,0)$; point à tangente horizontale (sans extremum) en $(0,0)$`, fig: gridT({ xmin: -1, xmax: 6, ymin: -20, ymax: 120 }, { x: 1, y: 20 }) },
  { level: 3, space: 5, q: S`Esquisse une fonction telle que $f(0)=0$, $f'(2)=0$, $f'(x)\gt0$ pour tous les autres $x$, $f''\lt0$ pour $x\lt2$ et $f''\gt0$ pour $x\gt2$. Donne un exemple d'équation.`, recap: "Un point d'inflexion à tangente horizontale en x = 2.", ans: S`par exemple $f(x)=(x-2)^3+8$` },
  { level: 3, space: 5, q: S`Trouve la cubique $f(x)=ax^3+bx+c$ qui a un maximum relatif en $(-1,6)$ et un minimum relatif en $(1,2)$.`, recap: "f′ = k(x² − 1).", ans: S`$f(x)=x^3-3x+4$` },
  { level: 3, space: 5, q: S`Esquisse $f(x)=\frac{x^2+x-2}{x-3}$ : asymptotes et extremums (2 décimales).`, recap: "Divise : x + 4 + 10/(x − 3).", ans: S`$x=3$, $y=x+4$; max $(-0.16,0.68)$, min $(6.16,13.32)$` },
];

export const WS = {
  code: "3.5",
  title: "Synthèse : l'esquisse de courbes",
  bigideas: S`Une esquisse de courbe complète suit un ordre fixe : domaine et asymptotes verticales; intersections avec les axes et symétrie; comportement aux extrémités (terme dominant, asymptote horizontale ou oblique); nombres critiques, intervalles de croissance et de décroissance et extremums à l'aide de $f'$; concavité et points d'inflexion à l'aide de $f''$. Résume les signes dans un seul tableau, place les points clés, puis relie-les en suivant le tableau. Les graphiques de $f$, de $f'$ et de $f''$ sont liés : les zéros de $f'$ correspondent aux tangentes horizontales de $f$, et les zéros de $f''$ à ses points d'inflexion.`,
  goals: ["Suivre l'algorithme complet d'esquisse de courbes.", "Organiser les renseignements sur les signes dans un tableau.", "Esquisser des fonctions polynomiales, rationnelles et racines.", "Associer f, f′ et f″."],
  curriculum: "B1.1, B1.5",
  vocab: [["Tableau récapitulatif", "signes de $f'$ et de $f''$ par intervalle"], ["Comportement aux extrémités", "$x\\to\\pm\\infty$"], ["Point d'inflexion à tangente horizontale", "$f'=0$ et la concavité change"]],
  hook: S`Une camarade place 20 points de $y=x^4-2x^2$ de $x=-5$ à $x=5$, par bonds de 0.5. Son tracé montrera-t-il les deux creux? Pourquoi pourrait-il manquer certaines caractéristiques?`,
  concepts: [
    ["1. Un tableau, une esquisse", S`$f(x)=-x^3+3x^2+9x-2$ avec ses extremums et son point d'inflexion :
${F({ view: { xmin: -3, xmax: 5, ymin: -12, ymax: 30 }, curves: [{ f: (x) => -(x ** 3) + 3 * x * x + 9 * x - 2 }], points: [pt(-1, -7), pt(3, 25), pt(1, 9), pt(0, -2)], step: { x: 1, y: 5 } })}`],
    ["2. L'ordre", S`Domaine $\to$ intersections avec les axes $\to$ comportement aux extrémités $\to f'\to f''\to$ esquisse.`],
    ["3. Des graphiques liés", S`Zéros de $f'$ $\leftrightarrow$ points tournants de $f$; zéros de $f''$ $\leftrightarrow$ points d'inflexion.`],
  ],
  tips: ["Nomme chaque point clé.", "Trace les asymptotes en pointillé.", "Des tournants arrondis aux extremums; des points anguleux seulement là où f′ n'existe pas.", "Vérifie le comportement aux extrémités.", "Une racine double touche l'axe."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
