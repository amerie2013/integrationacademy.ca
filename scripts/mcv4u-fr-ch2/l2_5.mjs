// MCV4U-FR 2.5 — Dérivées de quotients : la règle du quotient (u/v)′ = (u′v − uv′)/v², pourquoi elle découle des règles
// du produit et de dérivation en chaîne, tangentes horizontales des fonctions rationnelles, tangentes, optimisation d'un modèle rationnel
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane, rat } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "2.5 Dérivées de quotients";
export const ID = lessonId(2, 5);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "➗",
    title: "Dérivées de quotients",
    overview: S`Une fonction rationnelle comme \(h(x)=\dfrac{2x+1}{x-3}\) est le quotient de deux polynômes. En l'écrivant comme un produit, \(h=u\cdot v^{-1}\), et en utilisant les règles du produit et de dérivation en chaîne, on obtient la <strong>règle du quotient</strong> : \(\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}\). L'ordre au numérateur est important (il y a un signe moins), et on ne développe jamais le dénominateur : il est utile tel quel, car \(v^2\) est toujours positif.`,
    goals: [
      "établir la règle du quotient à partir des règles du produit et de dérivation en chaîne;",
      "dériver des fonctions rationnelles;",
      "trouver les tangentes et les tangentes horizontales de fonctions rationnelles;",
      "décider quand utiliser la règle du quotient et quand réécrire d'abord;",
      "utiliser la dérivée d'un modèle rationnel en contexte.",
    ],
    curriculum: "A3.3–A3.4 (déterminer les dérivées de fonctions rationnelles en combinant les règles)",
    prior: [
      [S`Écris \(\dfrac1{x-3}\) sous forme de puissance.`, S`\((x-3)^{-1}\).`],
      [S`Dérivée de \((x-3)^{-1}\)?`, S`\(-(x-3)^{-2}\).`],
      [S`Où \(\dfrac{2x+1}{x-3}\) n'est-elle pas définie?`, S`En \(x=3\).`],
    ],
    words: [
      ["Règle du quotient", "\\(\\left(\\frac uv\\right)'=\\frac{u'v-uv'}{v^2}\\)", ""],
      ["Fonction rationnelle", "le quotient de deux polynômes", "\\(\\frac{x^2}{x+1}\\)"],
      ["Tangente horizontale", "un point où \\(f'(x)=0\\)", "le numérateur de f′ est 0"],
      ["Restriction", "une valeur qui annule le dénominateur", "exclue du domaine"],
    ],
  }),

  section("📌 D'où vient la règle", S`
  ${table(["Étape", "Travail"], [
    ["Réécrire", "\\(\\frac uv=u\\,v^{-1}\\)"],
    ["Règle du produit", "\\(u'v^{-1}+u\\cdot(v^{-1})'\\)"],
    ["Règle de dérivation en chaîne", "\\((v^{-1})'=-v^{-2}v'\\)"],
    ["Dénominateur commun", "\\(\\frac{u'v}{v^2}-\\frac{uv'}{v^2}=\\frac{u'v-uv'}{v^2}\\)"],
  ])}
  ${plane({ view: { xmin: -3, xmax: 9, ymin: -10, ymax: 14 }, curves: [...rat((x) => (2 * x + 1) / (x - 3), [3], { xmin: -3, xmax: 9 }), ...rat((x) => -7 / (x - 3) ** 2, [3], { xmin: -3, xmax: 9 }, "blue")], vlines: [{ x: 3, color: "red", dash: true }], step: { x: 1, y: 2 } }, "h(x) = (2x + 1)/(x − 3) (violet) et h′(x) = −7/(x − 3)² (bleu) : h′ < 0 des deux côtés de x = 3, donc h décroît sur chaque branche.")}
  ${keyIdea(S`\(\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}\), où \(v\neq0\). Truc mnémotechnique : « le bas fois la dérivée du haut, moins le haut fois la dérivée du bas, sur le bas au carré ».`)}`),

  section("📌 Explore", S`<p>L'explorateur utilise \(y=\dfrac{ax+b}{x^2+1}\). Choisis \(a\) et \(b\), puis déplace le point : le panneau affiche \(u'v\), \(uv'\) et \(v^2\) en ce \(x\), et la pente de la tangente verte est \((u'v-uv')/v^2\). Trouve les deux endroits où la tangente est horizontale.</p>`),

  widget("quotientLab", { init: { a: 2, b: 1, x: 1 } }),

  section("📌 Bien utiliser la règle", S`
  <p>Nomme d'abord \(u\), \(u'\), \(v\), \(v'\). Pour trouver les tangentes horizontales, égale seulement le <em>numérateur</em> de la dérivée à zéro, puis vérifie que le dénominateur n'est pas nul à cet endroit.</p>
  ${watchOut([
    "L'ordre est u′v − uv′, et non uv′ − u′v : les inverser change le signe.",
    "Élève tout le dénominateur au carré : (x − 3)², et non x² − 3.",
    "Ne développe pas le dénominateur : il est plus facile à lire sous forme factorisée.",
    "Si le dénominateur est une constante (comme (x² + 4)/5), divise simplement : pas besoin de la règle du quotient.",
    "Un dénominateur monôme (comme (x² + 1)/x) peut être séparé : x + x⁻¹ est plus rapide.",
  ])}`),

  examples([
    ["Linéaire sur linéaire", S`Dérive \(h(x)=\dfrac{2x+1}{x-3}\).`,
      [S`\(u=2x+1\), \(u'=2\); \(v=x-3\), \(v'=1\).`, S`\(h'=\dfrac{2(x-3)-(2x+1)(1)}{(x-3)^2}=\dfrac{-7}{(x-3)^2}\).`],
      S`\(h'(x)=-\dfrac{7}{(x-3)^2}\)`],
    ["Quadratique sur linéaire", S`Dérive \(y=\dfrac{x^2}{x+1}\).`,
      [S`\(y'=\dfrac{2x(x+1)-x^2(1)}{(x+1)^2}=\dfrac{x^2+2x}{(x+1)^2}\).`],
      S`\(y'=\dfrac{x(x+2)}{(x+1)^2}\)`],
    ["Évaluer la pente", S`Trouve la pente de \(f(x)=\dfrac{x+2}{x-1}\) en \(x=2\).`,
      [S`\(f'(x)=\dfrac{(x-1)-(x+2)}{(x-1)^2}=\dfrac{-3}{(x-1)^2}\).`, S`\(f'(2)=-3\).`],
      S`pente \(-3\)`],
    ["Une tangente horizontale", S`Trouve la tangente à \(y=\dfrac{x}{x^2+1}\) en \(x=1\).`,
      [S`\(y'=\dfrac{(x^2+1)-x(2x)}{(x^2+1)^2}=\dfrac{1-x^2}{(x^2+1)^2}\).`, S`\(y'(1)=0\), \(y(1)=\tfrac12\).`],
      S`\(y=\tfrac12\) (horizontale)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -1, ymax: 1 }, curves: [{ f: (x) => x / (x * x + 1), color: "violet" }, { f: () => 0.5, color: "green" }], points: [{ x: 1, y: 0.5, label: "(1, ½)", color: "red" }], step: { x: 1, y: 0.25 } })],
    ["Toutes les tangentes horizontales", S`Trouve les points où \(y=\dfrac{x^2+3}{x-1}\) a une tangente horizontale.`,
      [S`\(y'=\dfrac{2x(x-1)-(x^2+3)}{(x-1)^2}=\dfrac{x^2-2x-3}{(x-1)^2}\).`, S`\(x^2-2x-3=(x-3)(x+1)=0\Rightarrow x=3,\,-1\).`, S`\(y(3)=6\), \(y(-1)=-2\).`],
      S`\((3,6)\) et \((-1,-2)\)`,
      plane({ view: { xmin: -5, xmax: 7, ymin: -12, ymax: 16 }, curves: rat((x) => (x * x + 3) / (x - 1), [1], { xmin: -5, xmax: 7 }), vlines: [{ x: 1, color: "red", dash: true }], points: [{ x: 3, y: 6, label: "(3, 6)", color: "red" }, { x: -1, y: -2, label: "(−1, −2)", color: "red" }], step: { x: 1, y: 4 } })],
  ]),

  practice([
    q("évaluer", S`Pour \(f(x)=\dfrac{x}{x+1}\), trouve \(f'(1)\).`, num(0.25, 0.0001),
      "f′ = 1/(x + 1)².", [S`\(\frac{(x+1)-x}{(x+1)^2}=\frac14\).`], S`\(0.25\)`),
    q("dériver", S`Trouve \(\dfrac{d}{dx}\,\dfrac{x+2}{x-1}\).`, expr("-3/(x-1)^2"),
      "Le bas fois la dérivée du haut, moins le haut fois la dérivée du bas.", [S`\(\frac{(x-1)-(x+2)}{(x-1)^2}\).`], S`\(-\dfrac3{(x-1)^2}\)`),
    q("évaluer", S`Pour \(y=\dfrac{3x+1}{x+1}\), trouve \(y'(1)\).`, num(0.5, 0.005),
      "u′v − uv′ = 3(x + 1) − (3x + 1).", [S`\(\frac{2}{(x+1)^2}=\frac24\).`], S`\(0.5\)`),
    q("règle", S`Laquelle est la règle du quotient?`, choice([S`\(\left(\frac uv\right)'=\frac{u'v-uv'}{v^2}\)`, S`\(\left(\frac uv\right)'=\frac{uv'-u'v}{v^2}\)`, S`\(\left(\frac uv\right)'=\frac{u'}{v'}\)`, S`\(\left(\frac uv\right)'=\frac{u'v+uv'}{v^2}\)`], 0),
      "Le bas fois la dérivée du haut, moins le haut fois la dérivée du bas.", ["Le terme u′v vient en premier."], S`\(\frac{u'v-uv'}{v^2}\)`),
    q("compter", S`Combien de tangentes horizontales \(y=\dfrac{x^2}{x-2}\) a-t-elle?`, num(2),
      "Le numérateur de y′ est x² − 4x.", [S`\(x(x-4)=0\) : \(x=0\) et \(x=4\).`], S`\(2\)`),
  ]),

  ...hard([
    ["Coût moyen minimal", S`Fabriquer \(x\) articles coûte \(C(x)=500+3x^2\) dollars, donc le coût moyen par article est \(A(x)=\dfrac{500+3x^2}{x}\). Trouve le niveau de production qui minimise le coût moyen.`,
      [S`\(A'(x)=\dfrac{6x\cdot x-(500+3x^2)}{x^2}=\dfrac{3x^2-500}{x^2}\).`, S`\(A'=0\Rightarrow x^2=\tfrac{500}3\Rightarrow x\approx12.91\).`, S`\(A(12.91)\approx\dfrac{500+500}{12.91}\approx77.46\).`],
      S`environ 12.91 articles, coût moyen minimal d'environ 77.46 $ par article`,
      plane({ view: { xmin: 0, xmax: 40, ymin: 0, ymax: 200 }, curves: [{ f: (x) => (500 + 3 * x * x) / x, color: "violet" }], points: [{ x: Math.sqrt(500 / 3), y: 2 * Math.sqrt(1500), label: "(12.91, 77.46)", color: "red" }], step: { x: 5, y: 25 } })],
    ["Concentration d'un médicament", S`La concentration d'un médicament dans le sang \(t\) heures après une dose est \(C(t)=\dfrac{10t}{t^2+9}\) mg/L. (a) Trouve \(C'(1)\). (b) Quand la concentration est-elle la plus élevée?`,
      [S`\(C'(t)=\dfrac{10(t^2+9)-10t(2t)}{(t^2+9)^2}=\dfrac{90-10t^2}{(t^2+9)^2}\).`, S`(a) \(C'(1)=\dfrac{80}{100}=0.8\) mg/L par h.`, S`(b) \(90-10t^2=0\Rightarrow t=3\); \(C(3)=\tfrac{30}{18}\approx1.67\) mg/L.`],
      S`(a) 0.8 mg/L par heure; (b) à \(t=3\) h, environ 1.67 mg/L`,
      plane({ view: { xmin: 0, xmax: 15, ymin: 0, ymax: 2 }, curves: [{ f: (t) => (10 * t) / (t * t + 9), color: "violet" }], points: [{ x: 3, y: 5 / 3, label: "(3, 1.67)", color: "red" }], step: { x: 1, y: 0.5 } })],
  ], [
    q("difficile", S`Pour \(f(x)=\dfrac{1-x}{x^2+3}\), trouve \(f'(2)\) (4 décimales).`, num(-0.0612, 0.0005),
      "u′v − uv′ = −(x² + 3) − (1 − x)(2x) = x² − 2x − 3.", [S`En 2 : numérateur \(4-4-3=-3\), dénominateur \(7^2=49\).`, S`\(f'(2)=-\frac{3}{49}\).`], S`\(-0.0612\)`),
    q("difficile", S`\(f(1)=2\), \(f'(1)=3\), \(g(1)=4\), \(g'(1)=-1\). Trouve \(\left(\dfrac fg\right)'(1)\).`, num(0.875, 0.0001),
      "(f′g − fg′)/g².", [S`\(\frac{12+2}{16}\).`], S`\(0.875\)`),
    q("difficile", S`Pour quelle valeur positive de \(x\) la tangente à \(y=\dfrac{x^2+36}{x}\) est-elle horizontale?`, num(6),
      "y′ = (x² − 36)/x².", [S`\(x^2=36\).`], S`\(6\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi y a-t-il un signe moins?", "Le quotient est u·v⁻¹; dériver v⁻¹ avec la règle de dérivation en chaîne donne −v⁻²v′, ce qui produit le signe moins."],
      ["L'ordre au numérateur a-t-il de l'importance?", "Oui. u′v − uv′ et uv′ − u′v diffèrent par le signe, ce qui inverse croissante et décroissante."],
      ["Dois-je développer v²?", "Non. En le laissant sous la forme (x − 3)², on voit d'un coup d'œil qu'il est positif et où il s'annule."],
      ["Quand puis-je éviter la règle du quotient?", "Quand le dénominateur est une constante ou une seule puissance de x : sépare la fraction ou réécris-la avec des exposants négatifs."],
      ["Comment trouver les tangentes horizontales?", "Égale le numérateur de f′ à zéro et assure-toi que le dénominateur n'est pas nul à cet endroit."],
    ],
    summary: [
      "(u/v)′ = (u′v − uv′)/v².",
      "Garde v² sous forme factorisée.",
      "Tangentes horizontales : numérateur de f′ = 0.",
      "Réécris d'abord quand le dénominateur est simple.",
    ],
    next: "La leçon 2.6 utilise les dérivées comme taux de variation en affaires et en sciences.",
  }),
];
