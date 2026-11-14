// MCV4U-FR 2.4 — La règle de dérivation en chaîne : fonctions composées, dy/dx = dy/du · du/dx, puissance d'une fonction,
// racines et inverses, tangentes, et combinaison de la règle de dérivation en chaîne avec la règle du produit
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "2.4 La règle de dérivation en chaîne";
export const ID = lessonId(2, 4);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "⛓️",
    title: "La règle de dérivation en chaîne",
    overview: S`Beaucoup de fonctions sont construites en plaçant une fonction à l'intérieur d'une autre : \(y=(3x^2-1)^4\) est « la quatrième puissance de \(3x^2-1\) ». Pour une telle <strong>fonction composée</strong> \(y=f(g(x))\), les taux se multiplient : si \(y\) varie 4 fois plus vite que \(u\), et \(u\) varie 6 fois plus vite que \(x\), alors \(y\) varie 24 fois plus vite que \(x\). C'est la <strong>règle de dérivation en chaîne</strong> : \(\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}\), ou \((f(g(x)))'=f'(g(x))\,g'(x)\) : dérive l'extérieur, garde l'intérieur, puis multiplie par la dérivée de l'intérieur.`,
    goals: [
      "reconnaître la fonction intérieure et la fonction extérieure d'une fonction composée;",
      "utiliser la règle de dérivation en chaîne en notation de Leibniz et en notation fonctionnelle;",
      "dériver des puissances, des racines et des inverses de fonctions;",
      "trouver des tangentes à des fonctions composées;",
      "combiner la règle de dérivation en chaîne avec la règle du produit.",
    ],
    curriculum: "A3.4 (vérifier la règle de dérivation en chaîne en dégageant des régularités et l'utiliser pour déterminer les dérivées de fonctions composées)",
    prior: [
      [S`Si \(f(x)=x^2\) et \(g(x)=3x-1\), que vaut \(f(g(x))\)?`, S`\((3x-1)^2\).`],
      [S`Écris \(\sqrt{x^2+1}\) sous forme de puissance.`, S`\((x^2+1)^{1/2}\).`],
      [S`Dérivée de \(u^4\) par rapport à \(u\)?`, S`\(4u^3\).`],
    ],
    words: [
      ["Fonction composée", "\\(f(g(x))\\) : g à l'intérieur, f à l'extérieur", ""],
      ["Fonction intérieure", "l'expression « intérieure » \\(u=g(x)\\)", ""],
      ["Règle de dérivation en chaîne", "\\(\\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}\\)", ""],
      ["Puissance d'une fonction", "\\(\\frac{d}{dx}[g(x)]^n=n[g(x)]^{n-1}g'(x)\\)", ""],
    ],
  }),

  section("📌 Extérieur, intérieur, multiplier", S`
  ${table(["Fonction", "Extérieure", "Intérieure u", "Dérivée"], [
    ["\\((3x^2-1)^4\\)", "\\(u^4\\)", "\\(3x^2-1\\)", "\\(4(3x^2-1)^3\\cdot6x\\)"],
    ["\\(\\sqrt{2x+5}\\)", "\\(u^{1/2}\\)", "\\(2x+5\\)", "\\(\\tfrac12(2x+5)^{-1/2}\\cdot2\\)"],
    ["\\(\\dfrac1{x^2+1}\\)", "\\(u^{-1}\\)", "\\(x^2+1\\)", "\\(-(x^2+1)^{-2}\\cdot2x\\)"],
  ])}
  ${plane({ view: { xmin: -1.8, xmax: 1.8, ymin: -1, ymax: 12 }, curves: [{ f: (x) => (x * x + 1) ** 2, color: "violet" }, { f: (x) => 4 * x * (x * x + 1), color: "blue" }], step: { x: 0.5, y: 2 } }, "y = (x² + 1)² (violet) et y′ = 2(x² + 1)·2x (bleu) : une seule tangente horizontale, en x = 0.")}
  ${keyIdea(S`\(\dfrac{d}{dx}f(g(x))=f'(g(x))\cdot g'(x)\). Le cas le plus fréquent est la puissance d'une fonction : \(\dfrac{d}{dx}[g(x)]^n=n[g(x)]^{n-1}\,g'(x)\).`)}`),

  section("📌 Explore", S`<p>Choisis la fonction intérieure et la puissance extérieure. Au \(x\) choisi, le taux extérieur \(\frac{dy}{du}\) et le taux intérieur \(\frac{du}{dx}\) se multiplient pour donner la pente de la tangente verte.</p>`),

  widget("chainRuleLab", { init: { inner: "lin", n: 2, x: 0.5 } }),

  section("📌 Éviter les erreurs habituelles", S`
  <p>Écris \(u\) pour l'expression intérieure. Après avoir dérivé l'extérieur, l'intérieur reste exactement tel quel; le facteur \(u'\) s'ajoute à la fin.</p>
  ${watchOut([
    "N'oublie pas la dérivée intérieure : d/dx (2x − 1)⁵ = 5(2x − 1)⁴ · 2, et non 5(2x − 1)⁴.",
    "Ne dérive pas l'intérieur à l'intérieur de la parenthèse : garde (3x² − 1) inchangé dans la dérivée extérieure.",
    "Réécris d'abord les racines et les inverses sous forme de puissances.",
    "Pour un produit de fonctions composées, utilise la règle du produit ET la règle de dérivation en chaîne.",
    "Mets en évidence les puissances communes en simplifiant : 2x(3x + 1)³[...].",
  ])}`),

  examples([
    ["Puissance d'un polynôme", S`Dérive \(y=(3x^2-1)^4\).`,
      [S`Extérieure \(u^4\), intérieure \(u=3x^2-1\), \(u'=6x\).`, S`\(y'=4(3x^2-1)^3\cdot6x\).`],
      S`\(y'=24x(3x^2-1)^3\)`],
    ["Une racine", S`Dérive \(y=\sqrt{2x+5}\).`,
      [S`\(y=(2x+5)^{1/2}\Rightarrow y'=\tfrac12(2x+5)^{-1/2}\cdot2\).`],
      S`\(y'=\dfrac1{\sqrt{2x+5}}\)`],
    ["Notation de Leibniz", S`\(y=u^3\) et \(u=2x+1\). Trouve \(\dfrac{dy}{dx}\).`,
      [S`\(\frac{dy}{du}=3u^2\), \(\frac{du}{dx}=2\).`, S`\(\frac{dy}{dx}=3u^2\cdot2=6(2x+1)^2\).`],
      S`\(6(2x+1)^2\)`],
    ["Notation fonctionnelle", S`\(f(x)=x^2+1\) et \(g(x)=3x-2\). Dérive \(h(x)=f(g(x))\).`,
      [S`\(f'(x)=2x\), \(g'(x)=3\).`, S`\(h'(x)=f'(g(x))\,g'(x)=2(3x-2)\cdot3\).`],
      S`\(h'(x)=6(3x-2)=18x-12\)`],
    ["Une tangente", S`Trouve la tangente à \(y=(x^2-3)^3\) en \(x=2\).`,
      [S`\(y(2)=1^3=1\).`, S`\(y'=3(x^2-3)^2\cdot2x\); \(y'(2)=3(1)(4)=12\).`, S`\(y-1=12(x-2)\).`],
      S`\(y=12x-23\)`,
      plane({ view: { xmin: -2.5, xmax: 2.5, ymin: -30, ymax: 20 }, curves: [{ f: (x) => (x * x - 3) ** 3, color: "violet" }, { f: (x) => 12 * x - 23, color: "green" }], points: [{ x: 2, y: 1, label: "(2, 1)", color: "red" }], step: { x: 0.5, y: 5 } })],
  ]),

  practice([
    q("évaluer", S`Pour \(y=(x+5)^3\), trouve \(y'\) en \(x=-4\).`, num(3),
      "3(x + 5)² · 1.", [S`\(3(1)^2\).`], S`\(3\)`),
    q("dériver", S`Trouve \(\dfrac{d}{dx}(2x-1)^5\).`, expr("10*(2*x-1)^4"),
      "N'oublie pas le 2 intérieur.", [S`\(5(2x-1)^4\cdot2\).`], S`\(10(2x-1)^4\)`),
    q("racine", S`Pour \(f(x)=\sqrt{x+5}\), trouve \(f'(4)\) (4 décimales).`, num(0.1667, 0.0005),
      "½(x + 5)^(−½).", [S`\(\frac1{2\cdot3}\).`], S`\(\tfrac16\)`),
    q("inverse", S`Pour \(y=\dfrac1{x^2+1}\), trouve \(y'(1)\).`, num(-0.5, 0.0001),
      "−(x² + 1)⁻² · 2x.", [S`\(-\frac{2}{4}\).`], S`\(-\tfrac12\)`),
    q("règle", S`Laquelle est la règle de dérivation en chaîne?`, choice([S`\((f(g(x)))'=f'(g(x))\,g'(x)\)`, S`\((f(g(x)))'=f'(x)\,g'(x)\)`, S`\((f(g(x)))'=f'(g'(x))\)`, S`\((f(g(x)))'=f(g'(x))\)`], 0),
      "La dérivée extérieure évaluée à l'intérieur, fois la dérivée de l'intérieur.", ["Dérivée extérieure évaluée en g(x)."], S`\(f'(g(x))g'(x)\)`),
  ]),

  ...hard([
    ["Produit et chaîne ensemble", S`Dérive \(y=x^2(3x+1)^4\) et factorise complètement.`,
      [S`Règle du produit : \(2x(3x+1)^4+x^2\cdot4(3x+1)^3\cdot3\).`, S`Mets \(2x(3x+1)^3\) en évidence : \(2x(3x+1)^3[(3x+1)+6x]\).`],
      S`\(y'=2x(3x+1)^3(9x+1)\)`,
      plane({ view: { xmin: -0.8, xmax: 0.4, ymin: -0.02, ymax: 0.1 }, curves: [{ f: (x) => x * x * (3 * x + 1) ** 4, color: "violet" }], points: [{ x: 0, y: 0, label: "x = 0", color: "red" }, { x: -1 / 3, y: 0, label: "x = −⅓", color: "red" }, { x: -1 / 9, y: (1 / 81) * (2 / 3) ** 4, label: "x = −1/9", color: "red" }], step: { x: 0.2, y: 0.02 } })],
    ["La règle de dérivation en chaîne à partir de tableaux, et un ballon", S`(a) \(f(2)=3\), \(f'(2)=5\), \(g(3)=1\), \(g'(3)=-2\). Trouve \((g\circ f)'(2)\). (b) Le rayon d'un ballon augmente selon \(r(t)=2+0.5t\) cm. Trouve \(\frac{dV}{dt}\) lorsque \(t=2\), où \(V=\frac43\pi r^3\).`,
      [S`(a) \(g'(f(2))\,f'(2)=g'(3)\cdot5=-10\).`, S`(b) \(\frac{dV}{dt}=4\pi r^2\cdot\frac{dr}{dt}\); à \(t=2\), \(r=3\) : \(4\pi(9)(0.5)=18\pi\approx56.55\) cm³/s.`],
      S`(a) \(-10\); (b) \(18\pi\approx56.55\) cm³ par seconde`],
  ], [
    q("difficile", S`Combien de tangentes horizontales \(y=(x^2+1)^3\) a-t-elle?`, num(1),
      "y′ = 6x(x² + 1)².", [S`Seulement \(x=0\).`], S`\(1\)`),
    q("difficile", S`Trouve \(\dfrac{d}{dx}\sqrt{x^3+1}\) en \(x=2\).`, num(2),
      "3x²/(2√(x³ + 1)).", [S`\(\frac{12}{2\cdot3}\).`], S`\(2\)`),
    q("difficile", S`\(g(1)=2\), \(g'(1)=3\), \(f'(2)=4\). Trouve \((f\circ g)'(1)\).`, num(12),
      "f′(g(1)) g′(1).", [S`\(4\cdot3\).`], S`\(12\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi les taux se multiplient-ils?", "Si y varie k fois plus vite que u, et u varie m fois plus vite que x, alors y varie km fois plus vite que x."],
      ["Comment repérer la fonction intérieure?", "Demande-toi ce que tu calculerais en premier : dans (3x² − 1)⁴, tu calcules d'abord 3x² − 1, donc c'est l'intérieur."],
      ["La règle de la puissance est-elle un cas particulier?", "Oui : avec u = x, du/dx = 1, donc d/dx uⁿ = nuⁿ⁻¹."],
      ["Et s'il y a trois couches?", "Continue de multiplier : d/dx f(g(h(x))) = f′(g(h(x))) · g′(h(x)) · h′(x)."],
      ["Pourquoi factoriser la réponse?", "Une dérivée factorisée permet de trouver facilement où y′ = 0 (tangentes horizontales)."],
    ],
    summary: [
      "dy/dx = dy/du · du/dx.",
      "[g(x)]ⁿ → n[g(x)]ⁿ⁻¹ g′(x).",
      "Racines, inverses → puissances d'abord.",
      "Produits de fonctions composées : produit + chaîne.",
    ],
    next: "La leçon 2.5 dérive les quotients.",
  }),
];
