// MHF4U-FR 8.2 — Produits et quotients de fonctions (miroir français de ../mhf4u-ch8/l8_2.mjs).
import { intro, section, keyIdea, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, mg } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "8.2 Produits et quotients de fonctions";
export const ID = lessonId(8, 2);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Produits et quotients de fonctions",
    overview: S`En multipliant ou en divisant deux fonctions, on construit plusieurs des fonctions de ce cours : un polynôme est un produit de facteurs linéaires, \(\tan x\) est le quotient \(\frac{\sin x}{\cos x}\), et un ressort qui vibre et s'arrête lentement est une exponentielle multipliée par un cosinus. Dans cette leçon, tu détermines des produits et des quotients, leurs domaines, leurs zéros et leurs signes, et tu lis leurs graphiques à partir des graphiques des deux parties.`,
    goals: [
      "déterminer \\((fg)(x)\\) et \\(\\left(\\frac fg\\right)(x)\\) à partir d'équations, de tables et de graphiques;",
      "donner le domaine d'un quotient en excluant les zéros du dénominateur;",
      "prédire les zéros et les signes d'un produit à partir de ses facteurs;",
      "reconnaître les asymptotes verticales et les trous d'un quotient;",
      "modéliser des oscillations amorties à l'aide d'un produit.",
    ],
    curriculum: "D2.1 (déterminer les caractéristiques des graphiques de fonctions obtenues par la multiplication ou la division de fonctions), D2.2 (reconnaître des applications concrètes de combinaisons de fonctions, comme les oscillations amorties)",
    prior: [
      [S`Développe \((x-3)(x+2)\).`, S`\(x^2-x-6\).`],
      [S`Quand \(\frac{1}{x-5}\) n'est-elle pas définie?`, S`À \(x=5\).`],
      [S`Simplifie \(\frac{x^2-9}{x-3}\) pour \(x\ne3\).`, S`\(x+3\).`],
    ],
    words: [
      ["Produit de fonctions", "\\((fg)(x)=f(x)\\cdot g(x)\\)", "\\((x+1)\\cdot2^x\\)"],
      ["Quotient de fonctions", "\\(\\left(\\frac fg\\right)(x)=\\frac{f(x)}{g(x)},\\ g(x)\\ne0\\)", "\\(\\tan x=\\frac{\\sin x}{\\cos x}\\)"],
      ["Trou (point de discontinuité)", "un seul point manquant, là où un facteur commun se simplifie", "\\(\\frac{x^2-4}{x-2}\\) à \\(x=2\\)"],
      ["Oscillation amortie", "une onde dont l'amplitude diminue", "\\(5(0.7)^t\\cos(2\\pi t)\\)"],
    ],
  }),

  section("📌 Lire un produit ou un quotient", S`
  ${table(["Caractéristique", "Produit f·g", "Quotient f/g"], [
    ["Domaine", "là où les deux existent", "là où les deux existent ET \\(g(x)\\ne0\\)"],
    ["Zéros", "zéros de \\(f\\) ou de \\(g\\)", "zéros de \\(f\\) (là où \\(g\\ne0\\))"],
    ["Signe", "mêmes signes ⇒ positif; signes contraires ⇒ négatif", "même règle que pour le produit"],
    ["Points particuliers", "\\(|f|\\le1\\) ⇒ \\(|fg|\\le|g|\\)", "\\(g\\to0\\), \\(f\\ne0\\) : asymptote verticale; les deux valent \\(0\\) : trou possible"],
  ])}
  ${keyIdea(S`\[(fg)(x)=f(x)\,g(x),\qquad \left(\frac fg\right)(x)=\frac{f(x)}{g(x)}\ \ (g(x)\ne0).\] Multiplie ou divise les <b>valeurs</b> à chaque \(x\).`)}`),

  mg([{ expr: "5*a^x", label: "enveloppe 5aˣ", color: "#64748b" }, { expr: "-5*a^x", label: "−5aˣ", color: "#64748b" }, { expr: "5*a^x*cos(2*pi*x)", label: "d = 5aˣ cos(2πx)", color: "#7c3aed" }], { param: "a", paramMin: 0.3, paramMax: 1, paramInit: 0.7, xMin: 0, xMax: 6, yMin: -6, yMax: 6, caption: "Fais glisser a (le facteur d'amortissement). Le produit d'une exponentielle et d'un cosinus reste entre les enveloppes ±5aˣ; a = 1 ne donne aucun amortissement." }),

  section("📌 Les produits à partir de leurs facteurs", S`
  <p>Pour \(y=(x+1)\cdot2^x\) : le facteur \(x+1\) est négatif pour \(x<-1\) et positif ensuite; \(2^x\) est toujours positif. Le produit est donc négatif pour \(x<-1\), nul à \(x=-1\) et positif ensuite. Quand \(x\to-\infty\), \(2^x\) diminue plus vite que \(x+1\) ne grandit; le produit s'approche donc de \(0\).</p>
  ${plane({ view: { xmin: -6, xmax: 2, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x + 1, color: "gray" }, { f: (x) => 2 ** x, color: "blue" }, { f: (x) => (x + 1) * 2 ** x, color: "violet" }], points: [{ x: -1, y: 0, label: "(−1, 0)", color: "amber" }, { x: -2, y: -0.25, label: "(−2, −0.25)", color: "red" }], step: { x: 1, y: 1 } }, "En gris y = x + 1, en bleu y = 2ˣ, en violet le produit (x + 1)2ˣ.")}
  ${watchOut([
    "(fg)(x) veut dire multiplier les valeurs, et non composer : (fg)(2) = f(2)·g(2).",
    "Simplifier un facteur commun ne change pas le domaine : (x² − 4)/(x − 2) exclut toujours x = 2.",
    "Un zéro du dénominateur n'appartient jamais au domaine d'un quotient.",
    "Le produit de deux fonctions croissantes n'est pas forcément croissant (essaie x·x pour des x négatifs).",
    "Pour une onde amortie, l'amplitude est l'enveloppe a·bᵗ, et non le produit au complet.",
  ])}`),

  examples([
    ["Multiplier deux fonctions", S`Pour \(f(x)=x-3\) et \(g(x)=x+2\), détermine \((fg)(x)\) et ses zéros.`,
      [S`<b>Règle.</b> \((fg)(x)=f(x)\cdot g(x)\) : à chaque \(x\), multiplie les deux valeurs.`,
        S`<b>Développe.</b> \((x-3)(x+2)=x^2+2x-3x-6=x^2-x-6\).`,
        S`<b>Zéros.</b> Un produit est nul exactement quand un des facteurs est nul : \(x-3=0\) ou \(x+2=0\), donc \(x=3\) ou \(x=-2\).`,
        S`<b>Signe.</b> Pour \(x>3\), les deux facteurs sont positifs; le produit est donc positif. Pour \(-2<x<3\), les signes diffèrent; il est donc négatif. Pour \(x<-2\), les deux sont négatifs; il est donc positif.`,
        S`<b>Vérifie à \(x=4\).</b> \(f(4)g(4)=1\cdot6=6\), et \(16-4-6=6\) ✓. Multiplier deux droites donne une parabole qui a les mêmes zéros que les droites ✓`],
      S`\(x^2-x-6\); zéros \(3\) et \(-2\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -8, ymax: 10 }, curves: [{ f: (x) => (x - 3) * (x + 2), color: "violet" }], lines: [{ m: 1, b: -3, color: "blue" }, { m: 1, b: 2, color: "gray" }], points: [{ x: -2, y: 0, label: "(−2, 0)", color: "amber" }, { x: 3, y: 0, label: "(3, 0)", color: "amber" }, { x: 4, y: 6, label: "(4, 6)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Un quotient avec un trou", S`Pour \(f(x)=x^2-4\) et \(g(x)=x-2\), détermine \(\left(\frac fg\right)(x)\) et son domaine, puis décris le graphique.`,
      [S`<b>D'abord le domaine.</b> Un quotient exige \(g(x)\ne0\). Ici \(x-2=0\) à \(x=2\), donc \(x\ne2\). Il faut le décider avant de simplifier.`,
        S`<b>Factorise.</b> \(x^2-4\) est une différence de carrés : \(\dfrac{(x-2)(x+2)}{x-2}\).`,
        S`<b>Simplifie.</b> Pour \(x\ne2\), \(\dfrac{x-2}{x-2}=1\); le quotient est donc égal à \(x+2\).`,
        S`<b>Trou ou asymptote?</b> À \(x=2\), le numérateur et le dénominateur valent tous deux \(0\), et le facteur se simplifie; il n'y a donc pas d'asymptote. Le graphique est la droite \(y=x+2\) à laquelle il manque un point : \((2,\,4)\).`,
        S`<b>Vérifie à \(x=3\).</b> \(\frac{9-4}{3-2}=5\), et \(3+2=5\) ✓. Vérifie près du trou, à \(x=2.01\) : \(\frac{0.0401}{0.01}=4.01\), ce qui est proche de \(4\) ✓`],
      S`\(x+2\), \(x\ne2\); une droite avec un trou en \((2,4)\)`,
      plane({ view: { xmin: -4, xmax: 5, ymin: -2, ymax: 7 }, curves: [{ f: (x) => x + 2, color: "violet" }], points: [{ x: 2, y: 4, label: "trou (2, 4)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Signe d'un produit", S`Décris \(y=(x+1)2^x\) : son zéro, où elle est négative et ses valeurs à \(x=-3,-2,0,1\).`,
      [S`<b>Signe de chaque facteur.</b> \(2^x>0\) pour tout \(x\); il ne change donc jamais le signe. \(x+1\) est négatif pour \(x<-1\) et positif pour \(x>-1\).`,
        S`<b>Signe du produit.</b> Il a le même signe que \(x+1\) : négatif pour \(x<-1\), nul à \(x=-1\), positif pour \(x>-1\).`,
        S`<b>Valeurs.</b> \(y(-3)=-2\cdot\frac18=-0.25\); \(y(-2)=-1\cdot\frac14=-0.25\); \(y(0)=1\cdot1=1\); \(y(1)=2\cdot2=4\).`,
        S`<b>Extrémité gauche.</b> Quand \(x\to-\infty\), \(2^x\) est divisé par deux à chaque pas vers la gauche, alors que \(x+1\) ne change que de \(1\). Le produit s'approche donc de \(0\) par en dessous : \(y(-6)=-\frac5{64}\approx-0.08\).`,
        S`<b>Extrémité droite.</b> Les deux facteurs croissent; le produit croît donc rapidement. Le graphique confirme chacun des énoncés ci-dessus ✓`],
      S`zéro à \(-1\); négative pour \(x<-1\); \(-0.25,\ -0.25,\ 1,\ 4\)`,
      plane({ view: { xmin: -6, xmax: 2, ymin: -1, ymax: 6 }, curves: [{ f: (x) => x + 1, color: "gray" }, { f: (x) => 2 ** x, color: "blue" }, { f: (x) => (x + 1) * 2 ** x, color: "violet" }], points: [{ x: -1, y: 0, label: "(−1, 0)", color: "amber" }, { x: 1, y: 4, label: "(1, 4)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Un ressort amorti", S`Le déplacement d'un ressort est \(d(t)=5(0.7)^t\cos(2\pi t)\) cm. Détermine \(d(1)\), \(d(2)\) et le moment où le déplacement maximal devient pour la première fois inférieur à \(1\) cm.`,
      [S`<b>Lis les deux facteurs.</b> L'enveloppe \(5(0.7)^t\) est la taille de l'oscillation; elle perd \(30\%\) chaque seconde. Le facteur \(\cos(2\pi t)\) a une période de \(\frac{2\pi}{2\pi}=1\) s et oscille entre \(-1\) et \(1\).`,
        S`<b>Valeurs.</b> \(\cos(2\pi)=\cos(4\pi)=1\), donc \(d(1)=5(0.7)=3.5\) et \(d(2)=5(0.49)=2.45\). Aux secondes entières, la courbe touche l'enveloppe.`,
        S`<b>Pourquoi utiliser l'enveloppe?</b> Le plus grand déplacement possible au temps \(t\) est l'enveloppe; la condition est donc \(5(0.7)^t<1\).`,
        S`<b>Résous.</b> \(0.7^t<0.2\). Prends le logarithme : \(t\log0.7<\log0.2\). Diviser par \(\log0.7\), qui est négatif, inverse le sens de l'inégalité : \(t>\dfrac{\log0.2}{\log0.7}\approx4.51\) s.`,
        S`<b>Vérifie.</b> \(5(0.7)^{4.51}\approx1.00\) ✓. Le graphique reste entre les courbes grises \(\pm5(0.7)^t\) ✓`],
      S`\(3.5\) cm, \(2.45\) cm; après environ \(4.5\) s`,
      plane({ view: { xmin: -0.2, xmax: 6, ymin: -5.5, ymax: 5.5 }, curves: [{ f: (t) => 5 * 0.7 ** t, a: 0, color: "gray" }, { f: (t) => -5 * 0.7 ** t, a: 0, color: "gray" }, { f: (t) => 5 * 0.7 ** t * Math.cos(2 * Math.PI * t), a: 0, color: "violet" }], points: [{ x: 1, y: 3.5, label: "(1, 3.5)", color: "amber" }, { x: 2, y: 2.45, label: "(2, 2.45)", color: "amber" }], step: { x: 0.5, y: 1 } })],
    ["tan x comme quotient", S`Utilise \(\tan x=\dfrac{\sin x}{\cos x}\) pour déterminer les zéros, les asymptotes et \(\tan\frac\pi4\) sur \(0\le x\le2\pi\).`,
      [S`<b>Zéros.</b> Un quotient est nul là où son numérateur est nul et son dénominateur ne l'est pas : \(\sin x=0\) à \(x=0,\ \pi,\ 2\pi\), et \(\cos x=\pm1\) à ces endroits.`,
        S`<b>Valeurs exclues.</b> Le dénominateur est nul là où \(\cos x=0\) : \(x=\frac\pi2,\ \frac{3\pi}2\).`,
        S`<b>Asymptote ou trou?</b> À ces valeurs, le numérateur vaut \(\pm1\), et non \(0\). Un nombre non nul divisé par une quantité proche de \(0\) devient très grand; ce sont donc des asymptotes verticales.`,
        S`<b>Valeur.</b> \(\tan\frac\pi4=\dfrac{\sqrt2/2}{\sqrt2/2}=1\).`,
        S`<b>Vérifie les signes.</b> Dans le quadrant II, \(\sin x>0\) et \(\cos x<0\), donc \(\tan x<0\). Dans le quadrant III, les deux sont négatifs, donc \(\tan x>0\). Le graphique est d'accord ✓`],
      S`zéros \(0,\pi,2\pi\); asymptotes \(x=\frac\pi2,\frac{3\pi}2\); \(\tan\frac\pi4=1\)`,
      plane({ view: { xmin: -0.3, xmax: 6.6, ymin: -5, ymax: 5 }, curves: [{ f: Math.tan, a: 0, b: Math.PI / 2 - 0.1, color: "violet" }, { f: Math.tan, a: Math.PI / 2 + 0.1, b: 1.5 * Math.PI - 0.1, color: "violet" }, { f: Math.tan, a: 1.5 * Math.PI + 0.1, b: 2 * Math.PI, color: "violet" }], vlines: [{ x: Math.PI / 2, color: "red", dash: true }, { x: 1.5 * Math.PI, color: "red", dash: true }], points: [{ x: Math.PI / 4, y: 1, label: "(π/4, 1)", color: "amber" }, { x: Math.PI, y: 0, label: "(π, 0)", color: "blue" }], step: { x: 0.5, y: 1 } })],
  ]),

  practice([
    q("produit", S`\(f(x)=2x+1\), \(g(x)=x-3\). Détermine \((fg)(2)\).`, num(-5), "f(2)·g(2).", [S`\(5\cdot(-1)=-5\).`], S`\(-5\)`),
    q("domaine", S`Quel est le domaine de \(\dfrac{x+5}{x^2-9}\)?`, choice(["x ≠ 3 et x ≠ −3", "x ≠ −5", "x ≠ 9", "tous les x réels"], 0), "Le dénominateur ne peut pas être nul.", [S`\(x^2-9=0\Rightarrow x=\pm3\).`], S`\(x\ne\pm3\)`),
    q("zéros", S`Combien de zéros \(y=x(x^2-1)\) a-t-elle?`, num(3), "Les zéros de chaque facteur.", [S`\(x=0,\ 1,\ -1\).`], S`\(3\)`),
    q("quotient", S`\(f(x)=x^2+1\), \(g(x)=2x-3\). Détermine \(\left(\frac fg\right)(4)\).`, num(3.4, 0.0001), "17 ÷ 5.", [S`\(\frac{17}5=3.4\).`], S`\(3.4\)`),
    q("amortie", S`\(A(t)=6(0.5)^t\) est l'enveloppe d'une onde amortie. Détermine \(A(3)\).`, num(0.75, 0.0001), "6 × 1/8.", [S`\(6(0.125)=0.75\).`], S`\(0.75\)`),
  ]),

  ...hard([
    ["Symétrie d'un produit", S`Montre que \(y=x^2\sin x\) est impaire, et explique ce que cela dit de son graphique.`,
      [S`<b>Facteurs :</b> \(x^2\) est paire (\((-x)^2=x^2\)); \(\sin x\) est impaire (\(\sin(-x)=-\sin x\)).`,
        S`<b>Test :</b> \(y(-x)=(-x)^2\sin(-x)=x^2(-\sin x)=-y(x)\); \(y\) est donc impaire.`,
        S`<b>Règle :</b> paire × impaire donne impaire (et paire × paire, impaire × impaire donnent paire).`,
        S`<b>Graphique :</b> symétrique par rapport à l'origine, p. ex. \(y\left(\frac\pi2\right)=\frac{\pi^2}4\approx2.47\) et \(y\left(-\frac\pi2\right)\approx-2.47\) ✓`],
      S`impaire : symétrie centrale par rapport à l'origine`,
      plane({ view: { xmin: -7, xmax: 7, ymin: -25, ymax: 25 }, curves: [{ f: (x) => x * x * Math.sin(x), color: "violet" }], points: [{ x: Math.PI / 2, y: 2.47, label: "(π/2, 2.47)", color: "amber" }], step: { x: 1, y: 5 } })],
    ["Tableau de signes pour un quotient", S`Détermine où \(y=\dfrac{x^2-1}{x-2}\) est positive.`,
      [S`<b>Valeurs critiques :</b> les zéros du numérateur \(x=\pm1\); le zéro du dénominateur \(x=2\) (exclu, asymptote).`,
        S`<b>Signes sur chaque intervalle :</b> \(x<-1\) : \((+)/(-)<0\); \(-1<x<1\) : \((-)/(-)>0\); \(1<x<2\) : \((+)/(-)<0\); \(x>2\) : \((+)/(+)>0\).`,
        S`<b>Réponse :</b> positive pour \(-1<x<1\) ou \(x>2\).`,
        S`<b>Vérifie \(x=0\) :</b> \(\frac{-1}{-2}=0.5>0\) ✓; \(x=1.5\) : \(\frac{1.25}{-0.5}=-2.5<0\) ✓`],
      S`\(-1<x<1\) ou \(x>2\)`],
  ], [
    q("difficile", S`L'enveloppe d'une onde est \(8(0.6)^t\). Quand devient-elle pour la première fois inférieure à \(1\)? (au centième près)`, num(Math.log10(1 / 8) / Math.log10(0.6), 0.01), "0.6ᵗ = 1/8.", [S`\(t=\frac{\log(1/8)}{\log0.6}\approx4.07\).`], S`\(\approx4.07\)`),
    q("difficile", S`\(f(x)=x+2\), \(g(x)=x^2-2x+4\). Détermine \((fg)(2)\).`, num(16), "fg = x³ + 8.", [S`\(4\cdot4=16\) (et \(2^3+8=16\)).`], S`\(16\)`),
    q("difficile", S`Combien de zéros distincts \(y=x\sin x\) a-t-elle sur \(-2\pi\le x\le2\pi\)?`, num(5), "x = 0 ou sin x = 0.", [S`\(-2\pi,-\pi,0,\pi,2\pi\).`], S`\(5\)`),
  ]),

  wrapUp({
    qas: [
      ["Qu'est-ce que (fg)(x)?", "f(x)·g(x) : on multiplie les valeurs."],
      ["Quel est le domaine de f/g?", "Là où les deux existent, en excluant tous les x tels que g(x) = 0."],
      ["Où sont les zéros d'un produit?", "Là où l'un ou l'autre des facteurs est nul."],
      ["Quand un quotient a-t-il un trou plutôt qu'une asymptote?", "Quand un facteur commun au numérateur et au dénominateur se simplifie."],
      ["Pourquoi une onde amortie est-elle un produit?", "Une enveloppe exponentielle multiplie une sinusoïde et réduit son amplitude."],
    ],
    summary: [
      "(fg)(x) = f(x)g(x); (f/g)(x) = f(x)/g(x), g ≠ 0.",
      "Zéros de fg : les zéros de f ou de g.",
      "Les signes se multiplient : mêmes signes ⇒ +, signes contraires ⇒ −.",
      "Onde amortie : a·bᵗ × sinusoïde.",
    ],
    next: "En 8.3, tu composes des fonctions : la valeur d'une fonction devient l'entrée d'une autre.",
  }),
];
