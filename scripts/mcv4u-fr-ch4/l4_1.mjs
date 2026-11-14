// MCV4U-FR 4.1 — Taux de variation instantanés des fonctions sinusoïdales : estimer les pentes de sin et cos
// numériquement, le graphique des pentes, les deux limites clés sin h / h → 1 et (cos h − 1)/h → 0, taux dans des modèles
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "4.1 Taux de variation instantanés des fonctions sinusoïdales";
export const ID = lessonId(4, 1);

const S = String.raw;
const PI = Math.PI;
export const blocks = () => [
  intro({
    icon: "🌊",
    title: "Taux de variation instantanés des fonctions sinusoïdales",
    overview: S`Les marées, la durée du jour, les ondes sonores et les pendules qui oscillent suivent tous des courbes sinus et cosinus. Pour comprendre à quelle vitesse une telle quantité varie, il nous faut la pente de \(y=\sin x\) (en radians) en chaque point. À l'aide de quotients de différence avec un petit \(h\), on peut estimer ces pentes, les reporter sur un graphique et découvrir une surprise : les pentes de la courbe sinus se trouvent exactement sur la courbe cosinus. Deux limites rendent ce résultat exact : \(\dfrac{\sin h}{h}\to1\) et \(\dfrac{\cos h-1}{h}\to0\) lorsque \(h\to0\).`,
    goals: [
      "estimer les taux de variation instantanés de sin x et de cos x à l'aide de quotients de différence;",
      "esquisser le graphique des pentes de y = sin x et le reconnaître;",
      "évaluer numériquement les limites de sin h / h et de (cos h − 1)/h;",
      "expliquer pourquoi la mesure en radians est importante pour ces pentes;",
      "estimer des taux de variation dans des modèles sinusoïdaux.",
    ],
    curriculum: "A2.4 (déterminer, par une exploration, le graphique du taux de variation instantané d'une fonction sinusoïdale et le relier à la dérivée)",
    prior: [
      [S`Que vaut \(\sin\frac\pi6\) ?`, S`\(\frac12\).`],
      [S`Quel est le quotient de différence de \(f\) en \(a\) ?`, S`\(\frac{f(a+h)-f(a)}{h}\).`],
      [S`Où \(y=\sin x\) atteint-elle son maximum sur \([0,2\pi]\) ?`, S`En \(x=\frac\pi2\).`],
    ],
    words: [
      ["Radian", "l'angle qui intercepte un arc de même longueur que le rayon", "\\(\\pi\\) rad = 180°"],
      ["Fonction sinusoïdale", "une courbe sinus ou cosinus transformée", "\\(y=3\\sin(2x)+1\\)"],
      ["Quotient de différence", "\\(\\frac{f(a+h)-f(a)}{h}\\)", "pente d'une sécante"],
      ["Limite clé", "\\(\\lim_{h\\to0}\\frac{\\sin h}{h}=1\\)", "h en radians"],
    ],
  }),

  section("📌 Les pentes de la courbe sinus", S`
  ${table(["x", "0", "π/2", "π", "3π/2", "2π"], [
    ["\\(\\sin x\\)", "0", "1", "0", "−1", "0"],
    ["pente de \\(\\sin x\\)", "1", "0", "−1", "0", "1"],
    ["\\(\\cos x\\)", "1", "0", "−1", "0", "1"],
  ])}
  ${plane({ view: { xmin: -0.3, xmax: 6.6, ymin: -1.5, ymax: 1.5 }, curves: [{ f: Math.sin, a: 0, b: 2 * PI, color: "violet" }, { f: Math.cos, a: 0, b: 2 * PI, color: "blue" }], points: [{ x: 0, y: 1, color: "blue" }, { x: PI / 2, y: 0, color: "blue" }, { x: PI, y: -1, color: "blue" }, { x: 1.5 * PI, y: 0, color: "blue" }, { x: 2 * PI, y: 1, color: "blue" }], step: { x: 0.5, y: 0.5 } }, "y = sin x (violet) et ses pentes (points bleus), qui se trouvent sur y = cos x (bleu).")}
  ${keyIdea(S`Lorsque \(x\) est mesuré en radians, le taux de variation instantané de \(\sin x\) en tout \(x\) est égal à \(\cos x\). Il est le plus grand (1) là où la courbe sinus traverse son axe en montant, il vaut 0 à ses sommets et à ses creux, et \(-1\) là où elle traverse son axe en descendant.`)}`),

  section("📌 Explorer", S`<p>Fais glisser la tangente le long de \(y=\sin x\). Chaque fois, la pente est notée par un point bleu ayant la même abscisse \(x\). Avant d'arriver au bout, prédis la forme que dessineront les points bleus.</p>`),

  widget("sineSlopeLab", { init: { x: 0.5, trace: true } }),

  section("📌 Estimer à l'aide de quotients de différence", S`
  <p>Choisis un petit \(h\), par exemple 0.001, et calcule \(\frac{f(a+h)-f(a)}{h}\) avec la calculatrice en <strong>mode radians</strong>. Un quotient centré \(\frac{f(a+h)-f(a-h)}{2h}\) est encore plus précis.</p>
  ${watchOut([
    "Règle la calculatrice en radians : en degrés, les pentes obtenues sont environ 57 fois trop petites.",
    "Utilise un petit h, mais pas trop petit au point que l'arrondi efface les chiffres (0.001 convient bien).",
    "La pente de sin x n'est pas sin x : en x = 0, la courbe est à 0 mais elle monte avec une pente de 1.",
    "sin h / h → 1 seulement lorsque h est en radians.",
    "Un sommet ou un creux a une pente de 0, pas de 1.",
  ])}`),

  examples([
    ["Un quotient de différence", S`Estime le taux de variation instantané de \(y=\sin x\) en \(x=\frac\pi6\) avec \(h=0.001\).`,
      [S`\(\frac{\sin(\frac\pi6+0.001)-\sin\frac\pi6}{0.001}=\frac{0.5008658-0.5}{0.001}\).`, S`Comparaison : \(\cos\frac\pi6=\frac{\sqrt3}{2}\approx0.8660\).`],
      S`environ 0.8658, très proche de \(\cos\frac\pi6\approx0.8660\)`],
    ["La pente aux points clés", S`Utilise la forme de \(y=\sin x\) pour donner sa pente en \(x=0,\ \frac\pi2,\ \pi\).`,
      [S`En 0, la courbe traverse son axe en montant aussi abruptement que possible : pente 1.`, S`En \(\frac\pi2\), elle est à son sommet : pente 0. En \(\pi\), elle traverse son axe en descendant : pente \(-1\).`],
      S`\(1,\ 0,\ -1\) — les valeurs de \(\cos x\) en ces points`,
      plane({ view: { xmin: -0.5, xmax: 3.8, ymin: -1.6, ymax: 1.6 }, curves: [{ f: Math.sin, color: "violet" }, { f: (x) => x, a: -0.5, b: 1, color: "green" }, { f: () => 1, a: 0.8, b: 2.4, color: "green" }, { f: (x) => -(x - PI), a: 2.6, b: 3.8, color: "green" }], points: [{ x: 0, y: 0, label: "pente 1", color: "red" }, { x: PI / 2, y: 1, label: "pente 0", color: "red" }, { x: PI, y: 0, label: "pente −1", color: "red" }], step: { x: 0.5, y: 0.5 } })],
    ["La limite clé", S`Évalue \(\dfrac{\sin h}{h}\) pour \(h=0.1,\ 0.01,\ 0.001\) (en radians) et donne la limite.`,
      [S`\(0.998334\), \(0.999983\), \(0.9999998\).`, S`Près de 0, le graphique de \(y=\sin x\) se confond presque avec la droite \(y=x\).`],
      S`\(\lim_{h\to0}\frac{\sin h}{h}=1\)`,
      plane({ view: { xmin: -1.5, xmax: 1.5, ymin: -1.5, ymax: 1.5 }, curves: [{ f: Math.sin, color: "violet" }, { f: (x) => x, color: "green" }], step: { x: 0.5, y: 0.5 } })],
    ["La pente du cosinus", S`Estime la pente de \(y=\cos x\) en \(x=\frac\pi3\) avec \(h=0.001\), et compare-la avec \(\sin\frac\pi3\).`,
      [S`\(\frac{\cos(\frac\pi3+0.001)-0.5}{0.001}\approx\frac{0.4991337-0.5}{0.001}\approx-0.8663\).`, S`\(\sin\frac\pi3\approx0.8660\).`],
      S`environ \(-0.866=-\sin\frac\pi3\) : les pentes du cosinus suivent \(-\sin x\)`,
      plane({ view: { xmin: -0.3, xmax: 6.6, ymin: -1.5, ymax: 1.5 }, curves: [{ f: Math.cos, a: 0, b: 2 * PI, color: "violet" }, { f: (x) => -Math.sin(x), a: 0, b: 2 * PI, color: "blue" }, { f: (x) => 0.5 - 0.866 * (x - PI / 3), a: 0.4, b: 1.7, color: "green" }], points: [{ x: PI / 3, y: 0.5, label: "(π/3, 0.5)", color: "red" }], step: { x: 0.5, y: 0.5 } })],
    ["Une marée", S`La profondeur de l'eau dans un port est \(d(t)=3\sin\left(\frac{\pi}{6}t\right)+5\) m, \(t\) heures après minuit. Trouve le taux de variation moyen de \(t=0\) à \(t=3\), et estime le taux instantané en \(t=0\).`,
      [S`Moyen : \(\frac{d(3)-d(0)}{3}=\frac{8-5}{3}=1\) m/h.`, S`Instantané : \(\frac{d(0.001)-d(0)}{0.001}\approx\frac{5.0015708-5}{0.001}\approx1.571\) m/h.`],
      S`taux moyen de 1 m/h; à minuit, la marée monte à environ 1.57 m/h`,
      plane({ view: { xmin: 0, xmax: 24, ymin: 0, ymax: 9 }, curves: [{ f: (t) => 3 * Math.sin((PI / 6) * t) + 5, a: 0, b: 24, color: "violet" }, { f: (t) => 5 + t, a: 0, b: 3, color: "amber" }, { f: (t) => 5 + (PI / 2) * t, a: 0, b: 2.3, color: "green" }], points: [{ x: 0, y: 5, label: "(0, 5)", color: "red" }, { x: 3, y: 8, label: "(3, 8)", color: "amber" }], step: { x: 2, y: 1 } })],
  ]),

  practice([
    q("pente", S`Quelle est la pente de la tangente à \(y=\sin x\) en \(x=0\) ?`, num(1),
      "Point le plus abrupt, en montant.", [S`\(\cos0=1\).`], S`\(1\)`),
    q("pente", S`Quelle est la pente de la tangente à \(y=\sin x\) en \(x=\pi\) ?`, num(-1),
      "La courbe traverse son axe en descendant.", [S`\(\cos\pi=-1\).`], S`\(-1\)`),
    q("estimation", S`Estime la pente de \(y=\sin x\) en \(x=1\) (en radians), à 3 décimales près.`, num(0.54, 0.002),
      "Compare avec cos 1.", [S`\(\cos1\approx0.540\).`], S`\(0.540\)`),
    q("pente", S`Quelle est la pente de \(y=\cos x\) en \(x=0\) ?`, num(0),
      "La courbe cosinus atteint son sommet en 0.", [S`\(-\sin0=0\).`], S`\(0\)`),
    q("régularité", S`Les pentes de \(y=\sin x\) (en radians) se trouvent sur quelle courbe ?`, choice([S`\(y=\cos x\)`, S`\(y=-\cos x\)`, S`\(y=\sin x\)`, S`\(y=-\sin x\)`], 0),
      "Vérifie en x = 0 et en x = π/2.", ["Pente 1 en 0, pente 0 en π/2."], S`\(y=\cos x\)`),
  ]),

  ...hard([
    ["Pourquoi la pente est cos x", S`Utilise \(\sin(x+h)=\sin x\cos h+\cos x\sin h\) et les limites \(\frac{\sin h}{h}\to1\), \(\frac{\cos h-1}{h}\to0\) pour montrer que la pente de \(\sin x\) est \(\cos x\).`,
      [S`\(\frac{\sin(x+h)-\sin x}{h}=\frac{\sin x\cos h+\cos x\sin h-\sin x}{h}\).`, S`\(=\sin x\cdot\frac{\cos h-1}{h}+\cos x\cdot\frac{\sin h}{h}\).`, S`Lorsque \(h\to0\) : \(\sin x\cdot0+\cos x\cdot1=\cos x\).`],
      S`\(\displaystyle\lim_{h\to0}\frac{\sin(x+h)-\sin x}{h}=\cos x\)`,
      plane({ view: { xmin: -1, xmax: 1, ymin: -0.6, ymax: 0.6 }, curves: [{ f: (h) => (Math.abs(h) < 1e-6 ? 0 : (Math.cos(h) - 1) / h), color: "violet" }], points: [{ x: 0, y: 0, label: "→ 0", color: "red", open: true }], step: { x: 0.25, y: 0.2 } })],
    ["Où la pente vaut-elle ½ ?", S`Trouve toutes les valeurs de \(x\) dans \([0,2\pi]\) où la tangente à \(y=\sin x\) a une pente de \(\frac12\).`,
      [S`La pente est \(\cos x\); on résout donc \(\cos x=\frac12\).`, S`\(x=\frac\pi3\) ou \(x=\frac{5\pi}3\).`],
      S`\(x=\frac\pi3\approx1.05\) et \(x=\frac{5\pi}{3}\approx5.24\)`,
      plane({ view: { xmin: -0.3, xmax: 6.6, ymin: -1.5, ymax: 1.5 }, curves: [{ f: Math.sin, a: 0, b: 2 * PI, color: "violet" }, { f: (x) => Math.sin(PI / 3) + 0.5 * (x - PI / 3), a: 0.2, b: 1.9, color: "green" }, { f: (x) => Math.sin((5 * PI) / 3) + 0.5 * (x - (5 * PI) / 3), a: 4.4, b: 6.1, color: "green" }], points: [{ x: PI / 3, y: Math.sin(PI / 3), color: "red" }, { x: (5 * PI) / 3, y: Math.sin((5 * PI) / 3), color: "red" }], step: { x: 0.5, y: 0.5 } })],
  ], [
    q("difficile", S`Trouve le taux de variation moyen de \(y=\sin x\) sur \(\left[0,\frac\pi2\right]\) (4 décimales).`, num(0.6366, 0.0005),
      "(sin(π/2) − sin 0)/(π/2).", [S`\(\frac{1}{\pi/2}=\frac2\pi\).`], S`\(0.6366\)`),
    q("difficile", S`Estime la pente de \(y=2\sin x\) en \(x=0\).`, num(2),
      "Doubler les hauteurs double les pentes.", [S`\(2\cos0\).`], S`\(2\)`),
    q("difficile", S`Combien de points de \([0,2\pi)\) ont une tangente horizontale sur \(y=\sin x\) ?`, num(2),
      "cos x = 0.", [S`\(\frac\pi2\) et \(\frac{3\pi}2\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi x doit-il être en radians ?", "En radians, sin h ≈ h pour un petit h, ce qui rend la pente en 0 égale à 1. En degrés, la pente en 0 vaut π/180 ≈ 0.0175, et chaque formule hérite de ce facteur."],
      ["Quelle valeur de h choisir ?", "Assez petite pour être précise, mais pas au point que les erreurs d'arrondi dominent; 0.001 ou un quotient centré fonctionne bien."],
      ["Où une courbe sinus est-elle la plus abrupte ?", "Là où elle traverse son axe — à mi-chemin entre un sommet et un creux."],
      ["Pourquoi la pente est-elle 0 à un sommet ?", "La courbe cesse d'y monter et commence à descendre; la tangente y est horizontale."],
      ["Quelle est la suite ?", "La leçon 4.2 énonce les règles exactes : (sin x)′ = cos x et (cos x)′ = −sin x."],
    ],
    summary: [
      "Les pentes de sin x (en radians) se trouvent sur cos x.",
      "Les pentes de cos x se trouvent sur −sin x.",
      "sin h / h → 1 et (cos h − 1)/h → 0.",
      "La pente est maximale à l'axe et nulle aux sommets.",
    ],
    next: "En 4.2, on démontre et on utilise les dérivées du sinus et du cosinus.",
  }),
];
