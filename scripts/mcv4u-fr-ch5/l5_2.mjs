// MCV4U-FR 5.2 — Le logarithme naturel et sa dérivée (miroir de ../mcv4u-ch5/l5_2.mjs) : ln x comme réciproque de e^x,
// ses propriétés, (ln x)′ = 1/x, la règle de dérivation en chaîne pour ln(g(x)), les logarithmes dans d'autres bases,
// tangentes et extremums de fonctions logarithmiques
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "5.2 Le logarithme naturel et sa dérivée";
export const ID = lessonId(5, 2);

const S = String.raw;
const E = Math.E;
export const blocks = () => [
  intro({
    icon: "🪵",
    title: "Le logarithme naturel et sa dérivée",
    overview: S`Le <strong>logarithme naturel</strong> \(\ln x\) est le logarithme de base \(e\) : \(y=\ln x\) signifie \(e^y=x\). Son graphique est la réflexion de \(y=e^x\) par rapport à la droite \(y=x\). La réflexion échange la montée et la course : là où \(e^x\) a une pente \(m\), \(\ln x\) a une pente \(\frac1m\). Au point \((x,\ln x)\), le point miroir sur \(e^x\) a une hauteur \(x\), donc une pente \(x\); ainsi \(\dfrac{d}{dx}\ln x=\dfrac1x\). Avec la règle de dérivation en chaîne, \(\dfrac{d}{dx}\ln g(x)=\dfrac{g'(x)}{g(x)}\), et les lois des logarithmes permettent souvent de simplifier une fonction avant de la dériver.`,
    goals: [
      "utiliser la définition et les propriétés de ln x;",
      "dériver ln x et ln(g(x));",
      "simplifier à l'aide des lois des logarithmes avant de dériver;",
      "dériver des logarithmes dans d'autres bases;",
      "trouver des tangentes et des extremums faisant intervenir ln x.",
    ],
    curriculum: "A2.3 (déterminer la dérivée de f(x) = ln x et la relier à la réciproque de e^x), A3.4 (appliquer la règle de dérivation en chaîne aux fonctions logarithmiques)",
    prior: [
      [S`Résous \(e^x=1\).`, S`\(x=0\).`],
      [S`\(\log(ab)=\,?\)`, S`\(\log a+\log b\).`],
      [S`\((e^x)'\)?`, S`\(e^x\).`],
    ],
    words: [
      ["Logarithme naturel", "\\(\\ln x=\\log_e x\\)", "\\(\\ln e=1\\)"],
      ["Fonctions réciproques", "\\(e^{\\ln x}=x\\) et \\(\\ln(e^x)=x\\)", ""],
      ["Dérivée de ln", "\\(\\frac{d}{dx}\\ln x=\\frac1x\\)", "\\(x\\gt0\\)"],
      ["Changement de base", "\\(\\log_bx=\\frac{\\ln x}{\\ln b}\\)", ""],
    ],
  }),

  section("📌 ln x et ses propriétés", S`
  ${table(["Propriété", "Exemple"], [
    ["\\(\\ln(ab)=\\ln a+\\ln b\\)", "\\(\\ln(3x)=\\ln3+\\ln x\\)"],
    ["\\(\\ln\\frac ab=\\ln a-\\ln b\\)", "\\(\\ln\\frac{x}{2}=\\ln x-\\ln2\\)"],
    ["\\(\\ln a^n=n\\ln a\\)", "\\(\\ln x^5=5\\ln x\\)"],
    ["\\(\\ln1=0\\), \\(\\ln e=1\\)", "\\(\\ln e^4=4\\)"],
  ])}
  ${plane({ view: { xmin: -3, xmax: 6, ymin: -3, ymax: 6 }, curves: [{ f: Math.exp, color: "gray" }, { f: Math.log, a: 0.03, b: 6, color: "violet" }, { f: (x) => x, color: "gray" }], points: [{ x: 1, y: 0, label: "(1, 0)", color: "red" }, { x: 0, y: 1, label: "(0, 1)", color: "blue" }, { x: E, y: 1, label: "(e, 1)", color: "red" }], step: { x: 1, y: 1 } }, "y = ln x (violet) est la réflexion de y = eˣ (gris) par rapport à y = x.")}
  ${keyIdea(S`\(\dfrac{d}{dx}\ln x=\dfrac1x\) (\(x\gt0\)) et, plus généralement, \(\dfrac{d}{dx}\ln|x|=\dfrac1x\). Règle de dérivation en chaîne : \(\dfrac{d}{dx}\ln g(x)=\dfrac{g'(x)}{g(x)}\). Pour les autres bases, \(\dfrac{d}{dx}\log_bx=\dfrac{1}{x\ln b}\).`)}`),

  section("📌 Explore", S`<p>Déplace le point le long de \(y=\ln x\). La pente de sa tangente est \(\frac1x\). Active la vue miroir : le point réfléchi sur \(y=e^x\) a une pente qui est l'inverse — la réflexion échange la montée et la course.</p>`),

  widget("lnLab", { init: { x: 2, mirror: true } }),

  section("📌 Simplifier d'abord", S`
  <p>Les lois des logarithmes transforment les produits en sommes et les puissances en multiples, qui sont plus faciles à dériver. Vérifie toujours le domaine : \(\ln x\) exige \(x\gt0\).</p>
  ${watchOut([
    "ln(x + 2) ≠ ln x + ln 2 : les lois des logarithmes s'appliquent aux produits, pas aux sommes.",
    "(ln 5)′ = 0 : ln 5 est une constante.",
    "(ln g)′ = g′/g — n'oublie pas g′.",
    "ln(3x) a la même dérivée que ln x, parce que ln 3 est une constante.",
    "Le domaine de ln x est x > 0; ln |x| l'étend à x ≠ 0.",
  ])}`),

  examples([
    ["Résoudre avec ln", S`Résous \(e^{2x}=7\).`,
      [S`Prends le ln des deux membres : \(2x=\ln7\).`],
      S`\(x=\frac{\ln7}{2}\approx0.973\)`],
    ["Deux dérivées", S`Dérive \(y=\ln(3x)\) et \(y=\ln(x^2+1)\).`,
      [S`\(\ln(3x)=\ln3+\ln x\Rightarrow y'=\frac1x\).`, S`Règle de dérivation en chaîne : \(\frac{2x}{x^2+1}\).`],
      S`\(\frac1x\) et \(\frac{2x}{x^2+1}\)`],
    ["Une tangente qui passe par l'origine", S`Trouve la tangente à \(y=\ln x\) en \(x=e\).`,
      [S`Point \((e,1)\); pente \(\frac1e\).`, S`\(y-1=\frac1e(x-e)\Rightarrow y=\frac xe\).`],
      S`\(y=\frac{x}{e}\), qui passe par l'origine`,
      plane({ view: { xmin: -0.5, xmax: 7, ymin: -2, ymax: 3 }, curves: [{ f: Math.log, a: 0.05, b: 7, color: "violet" }, { f: (x) => x / E, color: "green", a: 0, b: 7 }], points: [{ x: E, y: 1, label: "(e, 1)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Un minimum", S`Trouve le minimum de \(f(x)=x\ln x\), \(x\gt0\).`,
      [S`\(f'=\ln x+x\cdot\frac1x=\ln x+1=0\Rightarrow x=e^{-1}\).`, S`\(f(e^{-1})=-e^{-1}\); \(f'\) passe de \(-\) à \(+\).`],
      S`minimum \(\left(\frac1e,-\frac1e\right)\approx(0.368,-0.368)\)`,
      plane({ view: { xmin: -0.2, xmax: 2.5, ymin: -0.6, ymax: 2.2 }, curves: [{ f: (x) => x * Math.log(x), a: 0.005, b: 2.5, color: "violet" }], points: [{ x: 1 / E, y: -1 / E, label: "min (1/e, −1/e)", color: "red" }, { x: 1, y: 0, label: "(1, 0)", color: "blue" }], step: { x: 0.5, y: 0.5 } })],
    ["Un logarithme de base 10", S`Trouve la pente de \(y=\log x\) (base 10) en \(x=10\).`,
      [S`\(\log x=\frac{\ln x}{\ln10}\Rightarrow y'=\frac{1}{x\ln10}\).`, S`En 10 : \(\frac{1}{10\ln10}\).`],
      S`environ 0.0434`],
  ]),

  practice([
    q("dérivée", S`Quelle est la pente de \(y=\ln x\) en \(x=4\)?`, num(0.25, 0.0001),
      "1/x.", [S`\(\frac14\).`], S`\(0.25\)`),
    q("propriété", S`Pour \(y=\ln(5x)\), trouve \(y'(2)\).`, num(0.5, 0.0001),
      "ln 5 + ln x.", [S`\(\frac12\).`], S`\(0.5\)`),
    q("puissance", S`Pour \(y=\ln(x^2)\), trouve \(y'(3)\) (4 décimales).`, num(0.6667, 0.0005),
      "2 ln x.", [S`\(\frac23\).`], S`\(0.6667\)`),
    q("résoudre", S`Résous \(e^x=10\) (4 décimales).`, num(2.3026, 0.0005),
      "x = ln 10.", [S`\(\ln10\).`], S`\(2.3026\)`),
    q("règle", S`Laquelle est \(\frac{d}{dx}\ln g(x)\)?`, choice([S`\(\frac{g'(x)}{g(x)}\)`, S`\(\frac1{g(x)}\)`, S`\(\ln g'(x)\)`, S`\(\frac{g(x)}{g'(x)}\)`], 0),
      "Règle de dérivation en chaîne.", ["Fonction extérieure 1/u, fonction intérieure g."], S`\(\frac{g'}{g}\)`),
  ]),

  ...hard([
    ["Simplifier, puis dériver", S`Dérive \(y=\ln\dfrac{x+1}{x-1}\) pour \(x\gt1\), et trouve la pente en \(x=3\).`,
      [S`\(y=\ln(x+1)-\ln(x-1)\).`, S`\(y'=\frac1{x+1}-\frac1{x-1}=\frac{-2}{x^2-1}\).`, S`En 3 : \(-\frac28\).`],
      S`\(y'=-\frac{2}{x^2-1}\); pente \(-0.25\) en \(x=3\)`,
      plane({ view: { xmin: 0, xmax: 7, ymin: -0.5, ymax: 3.5 }, curves: [{ f: (x) => Math.log((x + 1) / (x - 1)), a: 1.02, b: 7, color: "violet" }, { f: (x) => Math.log(2) - 0.25 * (x - 3), color: "green", a: 1.8, b: 4.6 }], vlines: [{ x: 1, color: "red", dash: true }], points: [{ x: 3, y: Math.log(2), label: "(3, ln 2)", color: "red" }], step: { x: 1, y: 0.5 } })],
    ["Le sommet de ln x ÷ x", S`Trouve le maximum de \(f(x)=\dfrac{\ln x}{x}\), \(x\gt0\).`,
      [S`\(f'=\frac{\frac1x\cdot x-\ln x}{x^2}=\frac{1-\ln x}{x^2}=0\Rightarrow x=e\).`, S`\(f(e)=\frac1e\).`],
      S`maximum \(\left(e,\frac1e\right)\approx(2.718,0.368)\)`,
      plane({ view: { xmin: -0.2, xmax: 12, ymin: -1, ymax: 0.6 }, curves: [{ f: (x) => Math.log(x) / x, a: 0.4, b: 12, color: "violet" }], points: [{ x: E, y: 1 / E, label: "max (e, 1/e)", color: "red" }], step: { x: 1, y: 0.2 } })],
  ], [
    q("difficile", S`Pour \(y=\ln(\sin x)\), trouve \(y'\left(\frac\pi4\right)\).`, num(1),
      "cos x / sin x.", [S`\(\cot\frac\pi4\).`], S`\(1\)`),
    q("difficile", S`Pour \(y=\ln\sqrt{x^2+9}\), trouve \(y'(4)\).`, num(0.16, 0.0001),
      "½ ln(x² + 9).", [S`\(\frac{x}{x^2+9}=\frac4{25}\).`], S`\(0.16\)`),
    q("difficile", S`Pour \(y=\log_2x\), trouve \(y'(8)\) (4 décimales).`, num(0.1803, 0.0005),
      "1/(x ln 2).", [S`\(\frac1{8\ln2}\).`], S`\(0.1803\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi (ln x)′ = 1/x?", "ln x est la réflexion de eˣ. Au point (x, ln x), le point miroir sur eˣ a une pente x, et la réflexion transforme une pente m en 1/m."],
      ["Pourquoi ln(3x) a-t-elle la même dérivée que ln x?", "ln(3x) = ln 3 + ln x, et ln 3 n'est qu'une translation constante."],
      ["Et pour les x négatifs?", "ln |x| est définie pour x ≠ 0 et sa dérivée est encore 1/x."],
      ["Comment dériver log₁₀ x?", "Change de base : log x = ln x / ln 10, donc la dérivée est 1/(x ln 10)."],
      ["Quand dois-je utiliser d'abord les lois des logarithmes?", "Chaque fois que l'intérieur est un produit, un quotient ou une puissance — une dérivée difficile devient plusieurs dérivées faciles."],
    ],
    summary: [
      "y = ln x ⇔ eʸ = x.",
      "(ln x)′ = 1/x.",
      "(ln g)′ = g′/g.",
      "(log_b x)′ = 1/(x ln b).",
    ],
    next: "La leçon 5.3 dérive les fonctions exponentielles.",
  }),
];
