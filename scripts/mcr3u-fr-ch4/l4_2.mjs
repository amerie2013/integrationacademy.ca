// MCR3U-FR 4.2 — Exposants rationnels : b^(1/n) comme racine, b^(m/n), exposants rationnels négatifs, bases
// rationnelles, radicaux ↔ puissances. Miroir de ../mcr3u-ch4/l4_2.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, frac, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "4.2 Exposants rationnels";
export const ID = lessonId(4, 2);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "√",
    title: "Exposants rationnels",
    overview: S`Que pourrait signifier \(9^{1/2}\)? Les lois des exposants imposent la réponse : \(9^{1/2}\cdot9^{1/2}=9^1\), donc \(9^{1/2}\) est le nombre dont le carré est 9 — c'est-à-dire \(\sqrt9=3\). Dans cette leçon, tu vas interpréter les exposants fractionnaires comme des racines et des puissances, les évaluer de façon exacte (y compris les exposants négatifs et les bases fractionnaires), passer de la forme radicale à la forme exponentielle, et voir que ces valeurs complètent la courbe \(y=b^x\) entre les entiers.`,
    goals: [
      "expliquer pourquoi b^(1/n) = ⁿ√b à l'aide des lois des exposants;",
      "évaluer b^(m/n) comme (ⁿ√b)^m;",
      "évaluer des exposants rationnels négatifs et des bases rationnelles;",
      "passer de la forme radicale à la forme exponentielle, et inversement;",
      "résoudre des équations simples comme x^(3/2) = 27.",
    ],
    curriculum: "B1.2 (déterminer la valeur d'une puissance à exposant rationnel en observant des régularités et en utilisant les lois des exposants), B1.3 (évaluer des expressions numériques à exposants rationnels et à bases rationnelles)",
    prior: [
      [S`Que vaut \(\sqrt[3]{64}\)?`, S`\(4\), car \(4^3=64\).`],
      [S`Simplifie \((x^2)^3\).`, S`\(x^6\).`],
      [S`Évalue \(\left(\tfrac34\right)^{-2}\).`, S`\(\frac{16}{9}\).`],
    ],
    words: [
      ["Racine n-ième", "\\(\\sqrt[n]b\\) : le nombre dont la puissance n-ième est b", "\\(\\sqrt[4]{81}=3\\)"],
      ["Exposant rationnel", "un exposant qui est une fraction", "\\(8^{2/3}\\)"],
      ["Forme radicale", "écrite avec un symbole de racine", "\\(\\sqrt[3]{x^2}\\)"],
      ["Forme exponentielle", "écrite sous forme de puissance", "\\(x^{2/3}\\)"],
    ],
  }),

  section("📌 Pourquoi une fraction signifie une racine", S`
  <p>Si les lois restent vraies, \(\left(b^{1/n}\right)^n=b^{1}\). Donc \(b^{1/n}\) est le nombre dont la puissance n-ième est \(b\) : \(b^{1/n}=\sqrt[n]{b}\). Ensuite, \(b^{m/n}=\left(b^{1/n}\right)^m=\left(\sqrt[n]b\right)^m\).</p>
  ${table(["Forme exponentielle", "Forme radicale", "Valeur"], [["\\(16^{1/2}\\)", "\\(\\sqrt{16}\\)", "4"], ["\\(8^{1/3}\\)", "\\(\\sqrt[3]8\\)", "2"], ["\\(8^{2/3}\\)", "\\((\\sqrt[3]8)^2\\)", "4"], ["\\(8^{-2/3}\\)", "\\(\\frac1{(\\sqrt[3]8)^2}\\)", "\\(\\frac14\\)"]])}
  ${plane({ view: { xmin: -2, xmax: 2, ymin: -1, ymax: 17 }, curves: [{ f: (x) => 4 ** x, color: "violet" }], points: [{ x: -0.5, y: 0.5, label: "(−½, ½)" }, { x: 0.5, y: 2, label: "(½, 2)" }, { x: 1.5, y: 8, label: "(1.5, 8)" }, { x: 1, y: 4 }], step: { x: 0.5, y: 2 } }, "y = 4ˣ : les exposants rationnels complètent la courbe")}
  ${keyIdea(S`\(b^{m/n}=\left(\sqrt[n]b\right)^m=\sqrt[n]{b^m}\). Prends la racine d'abord — les nombres restent petits. Un signe négatif dans l'exposant signifie toujours un inverse.`)}`),

  section("📌 Explore", S`<p>Choisis une base, un numérateur \(m\) et un dénominateur \(n\). Le point \(\left(\frac mn,\ b^{m/n}\right)\) se trouve toujours sur la courbe \(y=b^x\).</p>`),

  widget("rationalPower", { init: [27, 2, 3] }),

  section("📌 Attention", watchOut([
    S`\(16^{1/2}\) vaut \(4\), pas \(8\) : l'exposant ½ signifie racine carrée, pas la moitié.`,
    S`\(8^{-1/3}=\frac12\) — le signe négatif donne un inverse, pas un nombre négatif.`,
    S`Pour une base fractionnaire, applique la racine au numérateur et au dénominateur.`,
    S`Une racine paire d'un nombre négatif n'est pas réelle : \((-16)^{1/2}\) est non défini dans les réels.`,
  ])),

  examples([
    ["Fractions unitaires", S`Évalue \(49^{1/2}\), \(125^{1/3}\) et \(16^{1/4}\).`,
      [S`<b>Règle.</b> \(b^{1/n}=\sqrt[n]{b}\). L'exposant \(\frac1n\) demande : quel nombre, utilisé \(n\) fois comme facteur, donne \(b\)? La raison est la loi de la puissance : \(\left(b^{1/n}\right)^n=b^{\frac1n\cdot n}=b^1=b\).`,
        S`<b>Première puissance.</b> \(49^{1/2}=\sqrt{49}=7\), car \(7\times7=49\).`,
        S`<b>Deuxième puissance.</b> \(125^{1/3}=\sqrt[3]{125}=5\), car \(5\times5\times5=125\).`,
        S`<b>Troisième puissance.</b> \(16^{1/4}=\sqrt[4]{16}=2\), car \(2\times2\times2\times2=16\).`,
        S`<b>Vérification sur le graphique.</b> Chaque réponse est un point de la courbe correspondante : \((49,7)\) sur \(y=x^{1/2}\), \((125,5)\) sur \(y=x^{1/3}\), \((16,2)\) sur \(y=x^{1/4}\) ✓`],
      S`\(7\), \(5\), \(2\)`,
      plane({ view: { xmin: 0, xmax: 130, ymin: 0, ymax: 12 }, curves: [{ f: (x) => x ** 0.5, a: 0, color: "violet" }, { f: (x) => x ** (1 / 3), a: 0, color: "blue" }, { f: (x) => x ** 0.25, a: 0, color: "green" }], points: [{ x: 49, y: 7, label: "(49, 7)", color: "amber" }, { x: 125, y: 5, label: "(125, 5)", color: "amber" }, { x: 16, y: 2, label: "(16, 2)", color: "amber" }], step: { x: 10, y: 1 } }, "violet : x^(1/2), bleu : x^(1/3), vert : x^(1/4)")],
    ["La racine, puis la puissance", S`Évalue \(27^{2/3}\).`,
      [S`<b>Règle.</b> Dans \(b^{m/n}\), le dénominateur \(n\) est la racine et le numérateur \(m\) est la puissance : \(b^{m/n}=\left(\sqrt[n]{b}\right)^m\). Cela vient de \(b^{m/n}=\left(b^{1/n}\right)^m\).`,
        S`<b>Prends d'abord la racine.</b> Le dénominateur est \(3\); on cherche donc la racine cubique : \(\sqrt[3]{27}=3\), car \(3^3=27\).`,
        S`<b>Ensuite, la puissance.</b> Le numérateur est \(2\); on élève donc au carré : \(3^2=9\).`,
        S`<b>Vérification dans l'autre ordre.</b> La puissance d'abord : \(27^2=729\). Ensuite la racine cubique : \(\sqrt[3]{729}=9\), puisque \(9^3=729\). La réponse est la même, mais prendre la racine d'abord garde les nombres petits ✓`],
      S`\(27^{2/3}=9\)`,
      plane({ view: { xmin: 0, xmax: 32, ymin: 0, ymax: 12 }, curves: [{ f: (x) => x ** (2 / 3), a: 0, color: "violet" }], points: [{ x: 8, y: 4, label: "(8, 4)" }, { x: 27, y: 9, label: "(27, 9)", color: "amber" }], step: { x: 4, y: 1 } }, "y = x^(2/3)")],
    ["Un exposant rationnel négatif", S`Évalue \(32^{-3/5}\).`,
      [S`<b>Lis l'exposant en trois parties.</b> Le signe moins signifie l'inverse, le dénominateur \(5\) signifie la racine cinquième et le numérateur \(3\) signifie le cube : \(32^{-3/5}=\dfrac1{32^{3/5}}=\dfrac1{\left(\sqrt[5]{32}\right)^3}\).`,
        S`<b>Racine cinquième.</b> \(\sqrt[5]{32}=2\), car \(2^5=32\).`,
        S`<b>Cube.</b> \(2^3=8\), donc \(32^{3/5}=8\).`,
        S`<b>Inverse.</b> \(32^{-3/5}=\dfrac18\). La réponse est positive : un exposant négatif ne change jamais le signe d'une base positive.`,
        S`<b>Vérification.</b> Des puissances aux exposants opposés doivent avoir un produit égal à 1 : \(32^{3/5}\cdot32^{-3/5}=8\cdot\frac18=1=32^0\) ✓`],
      S`\(32^{-3/5}=\frac18\)`,
      plane({ view: { xmin: 0, xmax: 40, ymin: -0.1, ymax: 1.4 }, curves: [{ f: (x) => x ** -0.6, a: 0.7, color: "violet" }], points: [{ x: 1, y: 1, label: "(1, 1)" }, { x: 32, y: 0.125, label: "(32, 1/8)", color: "amber" }], step: { x: 4, y: 0.2 } }, "y = x^(−3/5)")],
    ["Une base fractionnaire", S`Évalue \(\left(\tfrac{16}{81}\right)^{3/4}\).`,
      [S`<b>Règle.</b> Un exposant s'applique au numérateur et au dénominateur d'une fraction : \(\left(\tfrac ab\right)^{n}=\dfrac{a^n}{b^n}\). L'exposant \(\frac34\) signifie la racine quatrième, puis le cube.`,
        S`<b>Racines quatrièmes.</b> \(\sqrt[4]{16}=2\) puisque \(2^4=16\), et \(\sqrt[4]{81}=3\) puisque \(3^4=81\). Donc \(\left(\tfrac{16}{81}\right)^{1/4}=\tfrac23\).`,
        S`<b>Élève le résultat au cube.</b> \(\left(\tfrac23\right)^3=\dfrac{2^3}{3^3}=\dfrac8{27}\).`,
        S`<b>Vérifie l'ordre de grandeur.</b> \(\frac{16}{81}\approx0.198\) et \(\frac8{27}\approx0.296\). Pour une base entre 0 et 1, un exposant inférieur à 1 rend la valeur plus grande. À cet endroit, la courbe est au-dessus de la droite \(y=x\) ✓`],
      S`\(\frac{8}{27}\)`,
      plane({ view: { xmin: 0, xmax: 1.2, ymin: 0, ymax: 1.2 }, curves: [{ f: (x) => x ** 0.75, a: 0, color: "violet" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], points: [{ x: 16 / 81, y: 8 / 27, label: "(16/81, 8/27)", color: "amber" }, { x: 1, y: 1, label: "(1, 1)" }], step: { x: 0.2, y: 0.2 } }, "y = x^(3/4) avec la droite pointillée y = x")],
    ["Du radical à l'exposant", S`Écris \((\sqrt x)^5\) comme une puissance de \(x\) et évalue-la à \(x=4\).`,
      [S`<b>Règle.</b> Une racine carrée correspond à l'exposant \(\frac12\) : \(\sqrt x=x^{1/2}\), pour \(x\ge0\).`,
        S`<b>Réécris.</b> \((\sqrt x)^5=\left(x^{1/2}\right)^5\).`,
        S`<b>Puissance d'une puissance : on multiplie.</b> \(\frac12\times5=\frac52\), donc l'expression est égale à \(x^{5/2}\).`,
        S`<b>Évalue à \(x=4\).</b> Le dénominateur \(2\) signifie la racine carrée et le numérateur \(5\), la puissance cinquième : \(4^{5/2}=\left(\sqrt4\right)^5=2^5=32\).`,
        S`<b>Vérification dans l'expression de départ.</b> \(\sqrt4=2\), et \(2^5=32\) ✓. Le point \((4,32)\) est sur le graphique de \(y=x^{5/2}\).`],
      S`\(x^{5/2}\); valeur \(32\)`,
      plane({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 40 }, curves: [{ f: (x) => x ** 2.5, a: 0, color: "violet" }], points: [{ x: 1, y: 1, label: "(1, 1)" }, { x: 4, y: 32, label: "(4, 32)", color: "amber" }], step: { x: 1, y: 5 } }, "y = x^(5/2)")],
  ]),

  practice([
    q("racine cubique", S`Évalue \(64^{1/3}\).`, num(4),
      "Quel nombre au cube donne 64?", [S`\(4^3=64\).`], S`\(4\)`),
    q("racine, puis puissance", S`Évalue \(81^{3/4}\).`, num(27),
      "La racine quatrième d'abord.", [S`\(\sqrt[4]{81}=3\); \(3^3\).`], S`\(27\)`),
    q("négatif", S`Évalue \(25^{-1/2}\) sous forme de fraction.`, frac(1, 5),
      "Racine carrée, puis inverse.", [S`\(\frac1{\sqrt{25}}\).`], S`\(\frac15\)`),
    q("base fractionnaire", S`Évalue \(\left(\tfrac{8}{27}\right)^{2/3}\) sous forme de fraction.`, frac(4, 9),
      "Racine cubique du numérateur et du dénominateur, puis le carré.", [S`\(\left(\tfrac23\right)^2\).`], S`\(\frac49\)`),
    q("forme radicale", S`Quelle expression est égale à \(x^{3/5}\)?`, choice([S`\(\sqrt[5]{x^3}\)`, S`\(\sqrt[3]{x^5}\)`, S`\(\frac{x^3}{5}\)`, S`\(\frac35x\)`], 0),
      "Le dénominateur est la racine.", [S`\(x^{3/5}=\sqrt[5]{x^3}\).`], S`\(\sqrt[5]{x^3}\)`),
  ]),

  ...hard([
    ["Une expression mixte", S`Évalue \(9^{3/2}-16^{3/4}+8^{-2/3}\).`,
      [S`\(9^{3/2}=3^3=27\); \(16^{3/4}=2^3=8\); \(8^{-2/3}=\frac1{2^2}=\frac14\).`],
      S`\(27-8+\frac14=19.25\)`],
    ["Résoudre avec un exposant rationnel", S`Résous \(x^{3/2}=64\).`,
      [S`Élève les deux membres à la puissance inverse \(\frac23\) : \(x=64^{2/3}\).`, S`\(\sqrt[3]{64}=4\); \(4^2=16\). Vérification : \(16^{3/2}=4^3=64\) ✓.`],
      S`\(x=16\)`,
      plane({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 80 }, curves: [{ f: (x) => x ** 1.5, a: 0, color: "violet" }], lines: [{ m: 0, b: 64, color: "amber", dash: true }], points: [{ x: 16, y: 64, label: "(16, 64)" }], step: { x: 2, y: 10 } })],
  ], [
    q("difficile", S`Évalue \(0.04^{-1/2}\).`, num(5),
      "0.04 = 4/100.", [S`\(\sqrt{0.04}=0.2\); \(\frac1{0.2}\).`], S`\(5\)`),
    q("difficile", S`Résous \(x^{2/3}=9\) pour \(x>0\).`, num(27),
      "Élève les deux membres à la puissance 3/2.", [S`\(x=9^{3/2}=3^3\).`], S`\(27\)`),
    q("difficile", S`Évalue \(4^{2.5}\).`, num(32),
      "2.5 = 5/2.", [S`\((\sqrt4)^5=2^5\).`], S`\(32\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi la racine d'abord?", "La réponse est la même dans les deux ordres, mais la racine garde les nombres petits : 27^(2/3) = 3² au lieu de ∛729."],
      ["Et les exposants décimaux?", "Écris-les sous forme de fractions : 1.5 = 3/2, 0.25 = 1/4."],
      ["16^(1/2) = ±4?", "Non : la notation désigne la racine principale (positive), 4."],
      ["La base peut-elle être négative?", "Avec une racine impaire, oui : (−8)^(1/3) = −2. Avec une racine paire, le résultat n'est pas réel."],
      ["Quel est le lien entre les exposants rationnels et les graphiques?", "Ils donnent les points de y = bˣ entre les entiers; la courbe est donc continue et lisse."],
    ],
    summary: [
      "b^(1/n) = ⁿ√b; b^(m/n) = (ⁿ√b)^m.",
      "Exposant négatif → inverse.",
      "Base fractionnaire : racine du numérateur et du dénominateur.",
      "Pour résoudre x^(m/n) = k, élève à la puissance n/m.",
    ],
    next: "La leçon 4.3 simplifie des expressions algébriques avec des exposants entiers et rationnels.",
  }),
];
