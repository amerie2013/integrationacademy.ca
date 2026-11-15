// MCR3U-FR Fiche 6.5 — Tracer des fonctions sinusoïdales à l'aide de transformations (édition enseignant)
// Notation française : y = a sin(k(x − c)) + d, règle (x, y) → (x/k + c, ay + d).
import { waveT, gridW, sin, cos } from "./sinT.mjs";
import { TITLE } from "../l6_5.mjs";

const S = String.raw;
const SIN = [[0, 0], [90, 1], [180, 0], [270, -1], [360, 0]], COS = [[0, 1], [90, 0], [180, -1], [270, 0], [360, 1]];
// map(base, a, k, déphasage, axe)
const map = (base, a, k, d, c) => base.map(([x, y]) => [Math.round((x / k + d) * 100) / 100, Math.round((a * y + c) * 100) / 100 + 0]);
const list = (pts) => pts.map(([x, y]) => `(${x}°, ${y})`).join(", ").replace(/-/g, "−");

const EXAMPLES = [
  { title: "2 vers le bas", q: S`Trouve les points clés de $y=\sin x-2$.`,
    fig: waveT((x) => sin(x) - 2, { xmin: -30, xmax: 390, ymin: -4, ymax: 1 }, { x: 45, y: 1 }, { axis: -2, pts: map(SIN, 1, 1, 0, -2) }),
    steps: [S`\textbf{Règle :} $(x,y)\to(x,\ y-2)$; seules les hauteurs changent.`,
      S`\textbf{Appliquer :} à $0,1,0,-1,0$, soustrais $2$ : $-2,-1,-2,-3,-2$.`,
      S`\textbf{Vérification :} $\sin90^\circ-2=-1$ \checkmark`],
    ans: list(map(SIN, 1, 1, 0, -2)) },
  { title: "Étirement vertical", q: S`Trouve les points clés de $y=3\cos x$.`,
    fig: waveT((x) => 3 * cos(x), { xmin: -30, xmax: 390, ymin: -4, ymax: 4 }, { x: 45, y: 1 }, { pts: map(COS, 3, 1, 0, 0) }),
    steps: [S`\textbf{Règle :} $(x,y)\to(x,\ 3y)$.`,
      S`\textbf{Appliquer :} multiplie $1,0,-1,0,1$ par $3$ : $3,0,-3,0,3$.`,
      S`\textbf{Vérification :} les zéros ne bougent pas, car $3\times0=0$ \checkmark`],
    ans: list(map(COS, 3, 1, 0, 0)) },
  { title: "Compression", q: S`Trouve les points clés de $y=\sin4x$.`,
    fig: waveT((x) => sin(4 * x), { xmin: -15, xmax: 105, ymin: -1.5, ymax: 1.5 }, { x: 15, y: 0.5 }, { pts: map(SIN, 1, 4, 0, 0) }),
    steps: [S`\textbf{Règle :} $k=4$ : $(x,y)\to\left(\frac x4,\ y\right)$.`,
      S`\textbf{Appliquer :} $0,90,180,270,360$ divisés par $4$ : $0,22.5,45,67.5,90$.`,
      S`\textbf{Vérification :} $\sin4(22.5^\circ)=\sin90^\circ=1$ \checkmark`],
    ans: list(map(SIN, 1, 4, 0, 0)) },
  { title: "Déphasage", q: S`Trouve les points clés de $y=\cos(x-45^\circ)$.`,
    fig: waveT((x) => cos(x - 45), { xmin: 0, xmax: 450, ymin: -1.5, ymax: 1.5 }, { x: 45, y: 0.5 }, { pts: map(COS, 1, 1, 45, 0) }),
    steps: [S`\textbf{Règle :} $c=45^\circ$ : $(x,y)\to(x+45^\circ,\ y)$.`,
      S`\textbf{Appliquer :} ajoute $45$ : $45,135,225,315,405$.`,
      S`\textbf{Vérification :} $\cos(45^\circ-45^\circ)=1$, le premier maximum \checkmark`],
    ans: list(map(COS, 1, 1, 45, 0)) },
  { title: "Réflexion et translation vers le haut", q: S`Trouve les points clés de $y=-\sin x+1$.`,
    fig: waveT((x) => -sin(x) + 1, { xmin: -30, xmax: 390, ymin: -1, ymax: 3 }, { x: 45, y: 1 }, { axis: 1, pts: map(SIN, -1, 1, 0, 1) }),
    steps: [S`\textbf{Règle :} $(x,y)\to(x,\ -y+1)$. Applique d'abord la réflexion, puis la translation vers le haut.`,
      S`\textbf{Appliquer :} à partir de $0,1,0,-1,0$ : $1,0,1,2,1$.`,
      S`\textbf{Vérification :} $-\sin270^\circ+1=2$ \checkmark`],
    ans: list(map(SIN, -1, 1, 0, 1)) },
  { title: "Étirer et translater", q: S`Trace un cycle de $y=2\sin(0.5x)-1$.`,
    fig: waveT((x) => 2 * sin(0.5 * x) - 1, { xmin: 0, xmax: 720, ymin: -4, ymax: 2 }, { x: 90, y: 1 }, { axis: -1, pts: map(SIN, 2, 0.5, 0, -1) }),
    steps: [S`\textbf{Valeurs de x :} $\frac x{0.5}=2x$ : $0,180,360,540,720$.`,
      S`\textbf{Valeurs de y :} $2y-1$ : $-1,1,-1,-3,-1$.`,
      S`\textbf{Propriétés :} période $720^\circ$, axe $y=-1$, amplitude $2$.`,
      S`\textbf{Vérification :} $x=180^\circ$ : $2\sin90^\circ-1=1$ \checkmark`],
    ans: list(map(SIN, 2, 0.5, 0, -1)) },
  { title: "Les quatre paramètres, avec cosinus", q: S`Trace un cycle de $y=4\cos(3(x+20^\circ))+2$.`,
    fig: waveT((x) => 4 * cos(3 * (x + 20)) + 2, { xmin: -30, xmax: 120, ymin: -3, ymax: 7 }, { x: 15, y: 1 }, { axis: 2, pts: map(COS, 4, 3, -20, 2) }),
    steps: [S`\textbf{Valeurs de x :} $\frac x3-20$ : $-20,10,40,70,100$.`,
      S`\textbf{Valeurs de y :} $4y+2$ : $6,2,-2,2,6$.`,
      S`\textbf{Propriétés :} période $120^\circ$, axe $y=2$, amplitude $4$.`,
      S`\textbf{Vérification :} $x=40^\circ$ : $4\cos180^\circ+2=-2$ \checkmark`],
    ans: list(map(COS, 4, 3, -20, 2)) },
  { title: "Un sinus avec réflexion", q: S`Trouve les points clés de $y=-2\sin(2(x-30^\circ))+3$.`,
    fig: waveT((x) => -2 * sin(2 * (x - 30)) + 3, { xmin: 0, xmax: 240, ymin: 0, ymax: 6 }, { x: 15, y: 1 }, { axis: 3, pts: map(SIN, -2, 2, 30, 3) }),
    steps: [S`\textbf{Valeurs de x :} $\frac x2+30$ : $30,75,120,165,210$.`,
      S`\textbf{Valeurs de y :} $-2y+3$ : $3,1,3,5,3$.`,
      S`\textbf{Effet du signe moins :} la courbe commence par descendre à partir de l'axe.`,
      S`\textbf{Vérification :} $x=75^\circ$ : $-2\sin90^\circ+3=1$ \checkmark`],
    ans: list(map(SIN, -2, 2, 30, 3)) },
  { title: "Image et ordonnée à l'origine", q: S`Donne l'image et l'ordonnée à l'origine de $y=2\cos2x+3$.`,
    fig: waveT((x) => 2 * cos(2 * x) + 3, { xmin: -30, xmax: 390, ymin: 0, ymax: 6 }, { x: 45, y: 1 }, { axis: 3, pts: [[0, 5, "(0°, 5)"], [90, 1, "(90°, 1)"]] }),
    steps: [S`\textbf{Image :} axe $3$, amplitude $2$ : $3-2\le y\le3+2$.`,
      S`\textbf{Ordonnée à l'origine :} en $x=0$ : $2\cos0^\circ+3=2(1)+3=5$.`,
      S`\textbf{Vérification :} l'ordonnée à l'origine est un maximum, puisque le cosinus commence à un maximum \checkmark`],
    ans: S`$1\le y\le5$; ordonnée à l'origine 5` },
];

const G = gridW({ xmin: -90, xmax: 450, ymin: -5, ymax: 5 }, { x: 45, y: 1 });
const PROBLEMS = [
  { level: 1, q: S`Trouve l'image de $(90^\circ,1)$ selon $y=\sin x+5$.`, recap: "Un point.", ans: "(90°, 6)" },
  { level: 1, q: S`Trouve l'image du point du cosinus $(180^\circ,-1)$ selon $y=4\cos x$.`, recap: "Un point.", ans: "(180°, −4)" },
  { level: 1, q: S`Donne la période de $y=\cos5x$.`, recap: "Période.", ans: "72°" },
  { level: 2, q: S`Trouve les points clés de $y=3\sin x-1$ et esquisse un cycle.`, recap: "Esquisser.", ans: list(map(SIN, 3, 1, 0, -1)), fig: G },
  { level: 2, q: S`Trouve les points clés de $y=\cos2x+1$.`, recap: "Points clés.", ans: list(map(COS, 1, 2, 0, 1)) },
  { level: 2, q: S`Trouve les points clés de $y=\sin(x-60^\circ)$.`, recap: "Points clés.", ans: list(map(SIN, 1, 1, 60, 0)) },
  { level: 2, q: S`Trouve les points clés de $y=-\cos x+2$.`, recap: "Points clés.", ans: list(map(COS, -1, 1, 0, 2)) },
  { level: 2, q: S`Donne l'image et l'ordonnée à l'origine de $y=5\sin(x+30^\circ)-2$.`, recap: "Image, ordonnée à l'origine.", ans: S`$-7\le y\le3$; $5\sin30^\circ-2=0.5$` },
  { level: 3, space: 5, q: S`Trouve les points clés de $y=3\cos(2(x-30^\circ))-1$ et esquisse un cycle.`, recap: "Esquisser.", ans: list(map(COS, 3, 2, 30, -1)), fig: G },
  { level: 3, space: 4, q: S`Trouve les points clés de $y=-2\sin\left(\frac12(x+60^\circ)\right)+4$.`, recap: "Étirement et translation.", ans: list(map(SIN, -2, 0.5, -60, 4)) },
  { level: 3, space: 4, q: S`Trouve les abscisses à l'origine de $y=2\sin x-1$ pour $0^\circ\le x\le360^\circ$.`, recap: "Abscisses à l'origine.", ans: "30°, 150°" },
  { level: 3, space: 4, q: S`Trouve les abscisses à l'origine de $y=4\cos2x+2$ pour $0^\circ\le x\le360^\circ$.`, recap: "Abscisses à l'origine.", ans: S`$\cos2x=-\frac12$ : 60°, 120°, 240°, 300°` },
  { level: 3, space: 4, q: S`Un ou une élève a tracé $y=\sin(2x+60^\circ)$ en translatant $y=\sin2x$ de 60° vers la gauche. Explique l'erreur et donne la bonne translation.`, recap: "Analyse d'erreur.", ans: S`$2x+60^\circ=2(x+30^\circ)$ : translation de 30° vers la gauche` },
];

export const WS = {
  code: "6.5",
  title: TITLE.slice(4),
  bigideas: S`Pour tracer $y=a\sin(k(x-c))+d$, transforme les cinq points clés d'un cycle de base à l'aide de $(x,y)\to\left(\frac xk+c,\ ay+d\right)$, trace l'axe $y=d$, relie les points par une courbe lisse et répète à chaque période $\frac{360^\circ}{k}$.`,
  goals: ["Énumérer les points clés de base.", "Appliquer la règle de transformation.", "Esquisser un ou plusieurs cycles.", "Trouver l'image et les coordonnées à l'origine."],
  curriculum: "D2.7",
  vocab: [["Points clés", "les points d'un cycle espacés d'un quart de période"], ["Règle de transformation", "$(x,y)\\to(\\frac xk+c,\\ ay+d)$"]],
  hook: "Remets aux élèves les cinq points de base sur des cartes. Demande-leur de déplacer chaque carte pour tracer y = sin x + 2, puis y = 2 sin x.",
  concepts: [
    ["1. Les points clés de base", S`${waveT([(x) => sin(x), (x) => cos(x)], { xmin: 0, xmax: 360, ymin: -1.5, ymax: 1.5 }, { x: 90, y: 0.5 }, { width: 5.5, pts: SIN.map(([x, y]) => [x, y, false]) })}Sinus : ${list(SIN)}.`],
    ["2. La règle de transformation", "x : diviser par k, puis ajouter c. y : multiplier par a, puis ajouter d."],
    ["3. Vérifier", "Substitue un point image dans l'équation."],
  ],
  tips: ["Mets k en évidence d'abord.", "Divise par k (ne multiplie pas).", "Trace l'axe d'abord.", "Espacement d'un quart de période.", "Des courbes lisses."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
