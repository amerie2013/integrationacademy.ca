// MCV4U-FR 4.3 — Règles de dérivation des fonctions sinusoïdales : la règle de dérivation en chaîne pour sin(kx + c),
// cos(g(x)) et les puissances comme sin²x, les sinusoïdes transformées A·sin(kx + c) + d, produits, tangentes et extremums
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "4.3 Règles de dérivation des fonctions sinusoïdales";
export const ID = lessonId(4, 3);

const S = String.raw;
const PI = Math.PI;
export const blocks = () => [
  intro({
    icon: "🎛️",
    title: "Règles de dérivation des fonctions sinusoïdales",
    overview: S`Les vrais modèles sinusoïdaux sont transformés : \(y=A\sin(kx+c)+d\). La règle de dérivation en chaîne s'en charge. La fonction extérieure est le sinus, la fonction intérieure est \(kx+c\), de dérivée \(k\); donc \(\dfrac{d}{dx}\left[A\sin(kx+c)+d\right]=Ak\cos(kx+c)\). L'amplitude \(A\) et la « vitesse » \(k\) multiplient la pente; le déphasage \(c\) et la translation verticale \(d\) ne changent pas l'inclinaison de la courbe. La même idée permet de dériver \(\sin(x^2)\), \(\cos^3x\) et \(\sqrt{\sin x}\).`,
    goals: [
      "dériver sin(g(x)) et cos(g(x)) à l'aide de la règle de dérivation en chaîne;",
      "dériver des puissances de fonctions trigonométriques comme sin²x;",
      "dériver des sinusoïdes transformées A sin(kx + c) + d;",
      "combiner la règle de dérivation en chaîne avec les règles du produit et du quotient;",
      "trouver les tangentes et les extremums de fonctions sinusoïdales.",
    ],
    curriculum: "A3.4 (vérifier la règle de dérivation en chaîne et l'utiliser pour déterminer les dérivées de fonctions composées comportant des fonctions sinusoïdales)",
    prior: [
      [S`\(\frac{d}{dx}(3x-1)^5\) ?`, S`\(15(3x-1)^4\).`],
      [S`\(\frac{d}{dx}\sin x\) ?`, S`\(\cos x\).`],
      [S`Période de \(y=\sin(2x)\) ?`, S`\(\pi\).`],
    ],
    words: [
      ["Règle de dérivation en chaîne", "\\(\\frac{d}{dx}f(g(x))=f'(g(x))\\,g'(x)\\)", ""],
      ["sin(g(x))", "\\(\\cos(g(x))\\cdot g'(x)\\)", "\\((\\sin3x)'=3\\cos3x\\)"],
      ["sinⁿx", "\\(n\\sin^{n-1}x\\cdot\\cos x\\)", "\\((\\sin^2x)'=2\\sin x\\cos x\\)"],
      ["Sinusoïde transformée", "\\(A\\sin(kx+c)+d\\)", "dérivée \\(Ak\\cos(kx+c)\\)"],
    ],
  }),

  section("📌 La règle de dérivation en chaîne pour les fonctions trigonométriques", S`
  ${table(["Fonction", "Extérieure", "Intérieure", "Dérivée"], [
    ["\\(\\sin(3x)\\)", "\\(\\sin u\\)", "\\(3x\\)", "\\(3\\cos(3x)\\)"],
    ["\\(\\cos(x^2)\\)", "\\(\\cos u\\)", "\\(x^2\\)", "\\(-2x\\sin(x^2)\\)"],
    ["\\(\\sin^2x\\)", "\\(u^2\\)", "\\(\\sin x\\)", "\\(2\\sin x\\cos x\\)"],
    ["\\(A\\sin(kx+c)+d\\)", "\\(A\\sin u+d\\)", "\\(kx+c\\)", "\\(Ak\\cos(kx+c)\\)"],
  ])}
  ${plane({ view: { xmin: -0.2, xmax: 2 * PI + 0.2, ymin: -7, ymax: 7 }, curves: [{ f: (x) => 3 * Math.sin(2 * x), a: 0, b: 2 * PI, color: "violet" }, { f: (x) => 6 * Math.cos(2 * x), a: 0, b: 2 * PI, color: "blue" }], step: { x: 0.5, y: 1 } }, "y = 3 sin(2x) (violet) et sa dérivée 6 cos(2x) (bleu) : l'amplitude 3 fois la vitesse 2 donne des pentes allant jusqu'à 6.")}
  ${keyIdea(S`\(\dfrac{d}{dx}\sin(g(x))=\cos(g(x))\,g'(x)\), \(\dfrac{d}{dx}\cos(g(x))=-\sin(g(x))\,g'(x)\) et \(\dfrac{d}{dx}[\sin x]^n=n\sin^{n-1}x\cos x\). Pour une sinusoïde, la plus grande pente est \(|Ak|\).`)}`),

  section("📌 Explorer", S`<p>Modifie \(A\), \(k\), \(c\) et \(d\). Observe la dérivée en pointillé : sa hauteur (la plus grande pente) suit \(|Ak|\), tandis que \(c\) ne fait que glisser les deux graphiques horizontalement et que \(d\) ne fait que soulever la courbe de départ. Trouve des réglages pour lesquels la pente en \(x=0\) vaut exactement 0.</p>`),

  widget("sinusoidRuleLab", { init: { A: 2, k: 1, c: 0, d: 0, x: 0.5, fn: "sin" } }),

  section("📌 Lire la notation", S`
  <p>\(\sin^2x\) signifie \((\sin x)^2\) — une puissance d'une fonction — tandis que \(\sin(x^2)\) est le sinus de \(x^2\). Leurs dérivées sont différentes.</p>
  ${watchOut([
    "N'oublie pas la dérivée intérieure : (sin 3x)′ = 3 cos 3x, et non cos 3x.",
    "sin² x = (sin x)² : d'abord la puissance extérieure, puis la dérivée de sin x.",
    "sin(x²) ≠ sin² x : (sin x²)′ = 2x cos x², (sin² x)′ = 2 sin x cos x.",
    "La translation verticale d disparaît; le déphasage c reste à l'intérieur des parenthèses.",
    "Garde le signe moins lorsque la fonction extérieure est le cosinus.",
  ])}`),

  examples([
    ["Un angle multiple", S`Dérive \(y=4\cos(3x)\).`,
      [S`Extérieure \(4\cos u\), intérieure \(u=3x\), \(u'=3\).`, S`\(y'=4(-\sin3x)\cdot3\).`],
      S`\(y'=-12\sin(3x)\)`],
    ["Un polynôme à l'intérieur", S`Dérive \(y=\sin(x^2)\).`,
      [S`\(y'=\cos(x^2)\cdot2x\).`],
      S`\(y'=2x\cos(x^2)\)`],
    ["Une puissance du sinus", S`Dérive \(y=\sin^2x\) et simplifie.`,
      [S`\(y=(\sin x)^2\Rightarrow y'=2\sin x\cdot\cos x\).`, S`Identité : \(2\sin x\cos x=\sin2x\).`],
      S`\(y'=2\sin x\cos x=\sin(2x)\)`,
      plane({ view: { xmin: -0.2, xmax: 2 * PI + 0.2, ymin: -1.3, ymax: 1.3 }, curves: [{ f: (x) => Math.sin(x) ** 2, a: 0, b: 2 * PI, color: "violet" }, { f: (x) => Math.sin(2 * x), a: 0, b: 2 * PI, color: "blue" }], step: { x: 0.5, y: 0.5 } })],
    ["Une sinusoïde transformée", S`Trouve la pente de \(y=2\sin\left(\frac\pi4x+1\right)+5\) en \(x=0\).`,
      [S`\(y'=2\cdot\frac\pi4\cos\left(\frac\pi4x+1\right)\).`, S`\(y'(0)=\frac\pi2\cos1\approx1.5708\times0.5403\).`],
      S`environ \(0.849\)`],
    ["Produit et chaîne", S`Trouve la tangente à \(y=x\cos(2x)\) en \(x=\frac\pi4\).`,
      [S`\(y\left(\frac\pi4\right)=\frac\pi4\cos\frac\pi2=0\).`, S`\(y'=\cos(2x)-2x\sin(2x)\); \(y'\left(\frac\pi4\right)=0-\frac\pi2\cdot1=-\frac\pi2\).`, S`\(y=-\frac\pi2\left(x-\frac\pi4\right)\).`],
      S`\(y=-\frac{\pi}{2}x+\frac{\pi^2}{8}\approx-1.571x+1.234\)`,
      plane({ view: { xmin: -0.2, xmax: 2.5, ymin: -2.5, ymax: 1.5 }, curves: [{ f: (x) => x * Math.cos(2 * x), a: -0.2, b: 2.5, color: "violet" }, { f: (x) => -(PI / 2) * (x - PI / 4), a: 0.2, b: 1.4, color: "green" }], points: [{ x: PI / 4, y: 0, label: "(π/4, 0)", color: "red" }], step: { x: 0.5, y: 0.5 } })],
  ]),

  practice([
    q("chaîne", S`Pour \(f(x)=\sin(5x)\), trouve \(f'(0)\).`, num(5),
      "5 cos(5x).", [S`\(5\cos0\).`], S`\(5\)`),
    q("chaîne", S`Pour \(y=\cos\left(\frac x2\right)\), trouve \(y'(\pi)\).`, num(-0.5, 0.0001),
      "−½ sin(x/2).", [S`\(-\frac12\sin\frac\pi2\).`], S`\(-0.5\)`),
    q("puissance", S`Pour \(y=\sin^2x\), trouve \(y'\!\left(\frac\pi4\right)\).`, num(1),
      "2 sin x cos x.", [S`\(2\cdot\frac{\sqrt2}2\cdot\frac{\sqrt2}2\).`], S`\(1\)`),
    q("sinusoïde", S`Quelle est la plus grande pente de \(y=3\sin(2x)+1\) ?`, num(6),
      "|Ak|.", [S`\(3\times2\).`], S`\(6\)`),
    q("règle", S`Laquelle est \(\frac{d}{dx}\cos(x^2)\) ?`, choice([S`\(-2x\sin(x^2)\)`, S`\(-\sin(x^2)\)`, S`\(2x\sin(x^2)\)`, S`\(-2\sin x\cos x\)`], 0),
      "Extérieure cos, intérieure x².", ["−sin(x²) · 2x."], S`\(-2x\sin(x^2)\)`),
  ]),

  ...hard([
    ["Extremums d'une somme", S`Trouve le maximum et le minimum de \(y=\sin x+\cos x\) sur \([0,2\pi]\).`,
      [S`\(y'=\cos x-\sin x=0\Rightarrow\tan x=1\Rightarrow x=\frac\pi4,\ \frac{5\pi}4\).`, S`\(y\left(\frac\pi4\right)=\sqrt2\), \(y\left(\frac{5\pi}4\right)=-\sqrt2\); les bornes donnent 1.`],
      S`maximum \(\sqrt2\approx1.414\) en \(\frac\pi4\); minimum \(-\sqrt2\) en \(\frac{5\pi}4\)`,
      plane({ view: { xmin: -0.2, xmax: 6.5, ymin: -1.7, ymax: 1.7 }, curves: [{ f: (x) => Math.sin(x) + Math.cos(x), a: 0, b: 2 * PI, color: "violet" }], points: [{ x: PI / 4, y: Math.SQRT2, label: "max (π/4, √2)", color: "red" }, { x: (5 * PI) / 4, y: -Math.SQRT2, label: "min (5π/4, −√2)", color: "blue" }], step: { x: 0.5, y: 0.5 } })],
    ["Tangente et simplification", S`(a) Trouve la pente de \(y=\tan(2x)\) en \(x=\frac\pi8\). (b) Dérive \(y=\cos^2x-\sin^2x\) de deux façons.`,
      [S`(a) \(y'=2\sec^2(2x)\); en \(\frac\pi8\) : \(2\sec^2\frac\pi4=2\cdot2=4\).`, S`(b) Règle de dérivation en chaîne : \(-2\cos x\sin x-2\sin x\cos x=-4\sin x\cos x\).`, S`Ou simplifier d'abord : \(y=\cos2x\Rightarrow y'=-2\sin2x=-4\sin x\cos x\) ✓.`],
      S`(a) 4; (b) \(-2\sin(2x)\)`,
      plane({ view: { xmin: -0.7, xmax: 0.7, ymin: -4, ymax: 4 }, curves: [{ f: (x) => Math.tan(2 * x), a: -0.7, b: 0.7, color: "violet" }, { f: (x) => 1 + 4 * (x - PI / 8), a: 0.05, b: 0.65, color: "green" }], points: [{ x: PI / 8, y: 1, label: "(π/8, 1)", color: "red" }], step: { x: 0.25, y: 1 } })],
  ], [
    q("difficile", S`Pour \(f(x)=\sin(\pi x)\), trouve \(f'\!\left(\frac13\right)\) (4 décimales).`, num(1.5708, 0.0005),
      "π cos(πx).", [S`\(\pi\cos\frac\pi3=\frac\pi2\).`], S`\(1.5708\)`),
    q("difficile", S`Pour \(f(x)=\sqrt{\sin x}\), trouve \(f'\!\left(\frac\pi2\right)\).`, num(0),
      "cos x / (2√(sin x)).", [S`\(\cos\frac\pi2=0\).`], S`\(0\)`),
    q("difficile", S`Pour \(y=\sin(2x)\cos x\), trouve \(y'(0)\).`, num(2),
      "2cos(2x)cos x − sin(2x) sin x.", [S`\(2\cdot1\cdot1-0\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi k multiplie-t-il la pente ?", "Comprimer le graphique horizontalement par un facteur k le fait monter et descendre k fois plus vite — c'est la dérivée intérieure de la règle de dérivation en chaîne."],
      ["Pourquoi d disparaît-il ?", "Soulever un graphique ne change pas ses pentes; la dérivée d'une constante est 0."],
      ["Comment distinguer sin²x de sin(x²) ?", "sin²x est (sin x)², une puissance du sinus; sin(x²) est le sinus de x². Écris les parenthèses en cas de doute."],
      ["Quelle est la plus grande pente de A sin(kx + c) + d ?", "|Ak|, atteinte là où la courbe traverse son axe."],
      ["Où trouve-t-on ces modèles ?", "Partout où une quantité se répète : marées, pendules, courant alternatif, durée du jour — voir 4.4."],
    ],
    summary: [
      "(sin g)′ = cos g · g′; (cos g)′ = −sin g · g′.",
      "(sinⁿx)′ = n sinⁿ⁻¹x cos x.",
      "(A sin(kx + c) + d)′ = Ak cos(kx + c).",
      "Plus grande pente : |Ak|.",
    ],
    next: "En 4.4, on applique ces dérivées à des modèles périodiques.",
  }),
];
