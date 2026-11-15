// MCR3U-FR 4.1 — Lois des exposants et exposants entiers : les lois, les exposants nuls et négatifs, les bases
// rationnelles. Miroir de ../mcr3u-ch4/l4_1.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, frac, choice, expr, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "4.1 Lois des exposants et exposants entiers";
export const ID = lessonId(4, 1);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🪜",
    title: "Lois des exposants et exposants entiers",
    overview: S`Les fonctions exponentielles sont construites à partir de puissances; ce chapitre commence donc par les règles pour les manipuler. Dans cette leçon, tu vas revoir les lois des exposants, voir pourquoi \(b^0=1\) et \(b^{-n}=\frac1{b^n}\) en découlent, puis évaluer et simplifier des expressions avec des exposants entiers, y compris avec des bases fractionnaires et négatives.`,
    goals: [
      "appliquer les lois du produit, du quotient et de la puissance;",
      "expliquer et utiliser les règles de l'exposant nul et de l'exposant négatif;",
      "évaluer des puissances à exposant négatif et à base rationnelle;",
      "simplifier des expressions algébriques pour que tous les exposants soient positifs;",
      "éviter les erreurs fréquentes de signe et d'inverse.",
    ],
    curriculum: "B1.2 (déterminer la valeur de puissances en observant des régularités et en interprétant les lois des exposants), B1.3 (simplifier des expressions algébriques contenant des exposants entiers; évaluer des expressions numériques à exposants entiers et à bases rationnelles)",
    prior: [
      [S`Simplifie \(x^3\cdot x^4\).`, S`\(x^7\).`],
      [S`Simplifie \(\frac{y^9}{y^3}\).`, S`\(y^6\).`],
      [S`Que vaut \((-2)^3\)?`, S`\(-8\).`],
    ],
    words: [
      ["Puissance", "\\(b^n\\) : base \\(b\\), exposant \\(n\\)", "\\(2^5=32\\)"],
      ["Exposant nul", "\\(b^0=1\\) pour \\(b\\ne0\\)", "\\(7^0=1\\)"],
      ["Exposant négatif", "\\(b^{-n}=\\frac1{b^n}\\)", "\\(2^{-3}=\\frac18\\)"],
      ["Inverse", "renverser une fraction", "\\((\\tfrac23)^{-1}=\\tfrac32\\)"],
    ],
  }),

  section("📌 Les lois", S`
  ${table(["Loi", "Règle", "Exemple"], [
    ["Produit", "\\(b^m\\cdot b^n=b^{m+n}\\)", "\\(x^3x^{-5}=x^{-2}\\)"],
    ["Quotient", "\\(\\frac{b^m}{b^n}=b^{m-n}\\)", "\\(\\frac{a^2}{a^6}=a^{-4}\\)"],
    ["Puissance d'une puissance", "\\((b^m)^n=b^{mn}\\)", "\\((y^{-2})^3=y^{-6}\\)"],
    ["Puissance d'un produit / d'un quotient", "\\((ab)^n=a^nb^n\\), \\((\\frac ab)^n=\\frac{a^n}{b^n}\\)", "\\((2x)^3=8x^3\\)"],
    ["Exposant nul", "\\(b^0=1\\)", "\\((-4)^0=1\\)"],
    ["Exposant négatif", "\\(b^{-n}=\\frac1{b^n}\\), \\((\\frac ab)^{-n}=(\\frac ba)^n\\)", "\\((\\tfrac23)^{-2}=\\tfrac94\\)"],
  ])}
  ${keyIdea(S`Les règles de l'exposant nul et de l'exposant négatif ne sont pas de nouvelles lois — elles sont imposées par la loi du quotient : \(\frac{b^3}{b^3}=b^0\) doit valoir 1, et \(\frac{b^2}{b^5}=b^{-3}\) doit valoir \(\frac1{b^3}\).`)}
  ${plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 9 }, curves: [{ f: (x) => 2 ** x, color: "violet" }], points: [[-3, 0.125], [-2, 0.25], [-1, 0.5], [0, 1], [1, 2], [2, 4], [3, 8]].map(([x, y]) => ({ x, y, label: x <= 0 && x >= -1 ? `(${x}, ${y})`.replace(/-/g, "−") : undefined })), step: { x: 1, y: 1 } }, "puissances de 2 sur y = 2ˣ : 2⁻³ = 0.125, 2⁻² = 0.25, 2⁻¹ = 0.5, 2⁰ = 1")}`),

  section("📌 Explore", S`<p>Descends l'échelle : chaque marche divise par la base. Observe ce qui se passe à l'exposant 0 et en dessous. Essaie la base \(\tfrac12\) et la base négative \(-2\).</p>`),

  widget("powerLadder", { start: 3 }),

  section("📌 Attention", watchOut([
    S`\(-3^2=-9\), mais \((-3)^2=9\) : l'exposant s'applique seulement à ce qu'il touche.`,
    S`Un exposant négatif ne rend jamais la valeur négative : \(2^{-3}=\frac18\).`,
    S`\((a+b)^{-1}\ne a^{-1}+b^{-1}\).`,
    "Écris les réponses finales avec des exposants positifs, sauf indication contraire.",
  ])),

  examples([
    ["Exposants nuls et négatifs", S`Évalue \(5^{-2}\), \((-4)^0\) et \(-4^0\).`,
      [S`<b>Règles nécessaires.</b> Pour \(b\ne0\) : \(b^0=1\) et \(b^{-n}=\dfrac1{b^n}\). Le tableau montre pourquoi. Chaque fois que l'exposant diminue de 1, on divise par \(5\); la régularité se poursuit donc au-delà de zéro. ${tv(["exposant", "\\(2\\)", "\\(1\\)", "\\(0\\)", "\\(-1\\)", "\\(-2\\)"], ["valeur de \\(5^x\\)", "\\(25\\)", "\\(5\\)", "\\(1\\)", "\\(\\frac15\\)", "\\(\\frac1{25}\\)"])}`,
        S`<b>Première puissance.</b> L'exposant négatif signifie un inverse, pas un nombre négatif : \(5^{-2}=\dfrac1{5^2}=\dfrac1{25}\).`,
        S`<b>Deuxième puissance.</b> Les parenthèses font de \(-4\) la base; l'exposant nul s'applique donc à tout : \((-4)^0=1\).`,
        S`<b>Troisième puissance.</b> Sans parenthèses, l'exposant s'applique seulement à \(4\), et le signe moins attend la fin : \(-4^0=-(4^0)=-(1)=-1\).`,
        S`<b>Vérification sur le graphique.</b> Le point \(\left(-2,\frac1{25}\right)\) est sur \(y=5^x\), juste au-dessus de l'axe des x. La valeur est petite et positive, comme prévu ✓`],
      S`\(5^{-2}=\frac1{25}\), \((-4)^0=1\), \(-4^0=-1\)`,
      plane({ view: { xmin: -3, xmax: 2, ymin: -1, ymax: 6 }, curves: [{ f: (x) => 5 ** x, color: "violet" }], points: [{ x: -2, y: 0.04, label: "(−2, 1/25)", color: "amber" }, { x: 0, y: 1, label: "(0, 1)" }, { x: 1, y: 5, label: "(1, 5)" }], step: { x: 1, y: 1 } })],
    ["Une base rationnelle", S`Évalue \(\left(\tfrac23\right)^{-3}\).`,
      [S`<b>Règle.</b> Un exposant négatif signifie « prendre l'inverse », et l'inverse d'une fraction est cette fraction renversée : \(\left(\tfrac ab\right)^{-n}=\left(\tfrac ba\right)^{n}\).`,
        S`<b>Renverse la base et change le signe de l'exposant.</b> \(\left(\tfrac23\right)^{-3}=\left(\tfrac32\right)^{3}\).`,
        S`<b>Applique le cube au numérateur et au dénominateur.</b> \(\left(\tfrac32\right)^3=\dfrac{3^3}{2^3}=\dfrac{27}{8}\).`,
        S`<b>Vérification par la définition.</b> \(\left(\tfrac23\right)^3=\frac8{27}\), et \(\frac1{8/27}=\frac{27}8\) ✓`,
        S`<b>Vérification sur le graphique.</b> La base est inférieure à 1, donc \(y=\left(\tfrac23\right)^x\) descend de gauche à droite. À \(x=-3\), la valeur doit être supérieure à 1, et \(\frac{27}8=3.375\) l'est ✓`],
      S`\(\left(\tfrac23\right)^{-3}=\frac{27}{8}\)`,
      plane({ view: { xmin: -4, xmax: 3, ymin: -1, ymax: 6 }, curves: [{ f: (x) => (2 / 3) ** x, color: "violet" }], points: [{ x: -3, y: 3.375, label: "(−3, 3.375)", color: "amber" }, { x: 0, y: 1, label: "(0, 1)" }], step: { x: 1, y: 1 } })],
    ["Simplifier", S`Simplifie \((x^3y^{-2})(x^{-5}y^4)\), pour \(x,y\ne0\). Écris la réponse avec des exposants positifs.`,
      [S`<b>Règle.</b> Pour multiplier des puissances de même base, on additionne les exposants : \(b^m\cdot b^n=b^{m+n}\). Cela fonctionne seulement pour des bases égales; on regroupe donc les puissances de \(x\) et celles de \(y\).`,
        S`<b>Regroupe par base.</b> La multiplication peut se faire dans n'importe quel ordre : \((x^3\cdot x^{-5})(y^{-2}\cdot y^4)\).`,
        S`<b>Additionne les exposants.</b> Pour \(x\) : \(3+(-5)=-2\). Pour \(y\) : \(-2+4=2\). On obtient \(x^{-2}y^2\).`,
        S`<b>Élimine l'exposant négatif.</b> \(x^{-2}=\dfrac1{x^2}\), donc l'expression est égale à \(\dfrac{y^2}{x^2}\).`,
        S`<b>Vérification avec des nombres</b> \(x=2,\ y=3\). Expression de départ : \(\left(8\cdot\frac19\right)\left(\frac1{32}\cdot81\right)=\frac89\cdot\frac{81}{32}=\frac94\). Expression simplifiée : \(\frac{3^2}{2^2}=\frac94\) ✓. Le graphique fixe \(y=3\), ce qui donne la courbe \(\frac9{x^2}\) qui passe par \(\left(2,\frac94\right)\).`],
      S`\(\dfrac{y^2}{x^2}\)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -1, ymax: 10 }, curves: [{ f: (x) => 9 / (x * x), a: 0.9, color: "violet" }, { f: (x) => 9 / (x * x), b: -0.9, color: "violet" }], points: [{ x: 2, y: 2.25, label: "(2, 9/4)", color: "amber" }], step: { x: 1, y: 1 } }, "Avec y = 3, l'expression vaut 9/x².")],
    ["Puissance d'un produit", S`Simplifie \((2a^{-3})^{-2}\), pour \(a\ne0\).`,
      [S`<b>Règles.</b> Un exposant à l'extérieur s'applique à chaque facteur entre parenthèses : \((pq)^n=p^nq^n\). Pour une puissance d'une puissance, on multiplie les exposants : \((b^m)^n=b^{mn}\).`,
        S`<b>Donne l'exposant à chaque facteur.</b> \((2a^{-3})^{-2}=2^{-2}\cdot(a^{-3})^{-2}\). Le \(2\) doit aussi recevoir l'exposant. L'oublier est l'erreur la plus fréquente.`,
        S`<b>Multiplie les exposants de \(a\).</b> \((-3)\times(-2)=6\), donc \((a^{-3})^{-2}=a^6\).`,
        S`<b>Évalue le nombre.</b> \(2^{-2}=\frac1{2^2}=\frac14\), donc l'expression vaut \(\dfrac14a^6=\dfrac{a^6}4\).`,
        S`<b>Vérification avec</b> \(a=2\). Entre parenthèses : \(2\cdot2^{-3}=\frac14\). Ensuite \(\left(\frac14\right)^{-2}=4^2=16\). La réponse donne \(\frac{2^6}{4}=\frac{64}4=16\) ✓. C'est le point \((2,16)\) du graphique.`],
      S`\(\dfrac{a^6}{4}\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -2, ymax: 20 }, curves: [{ f: (x) => x ** 6 / 4, color: "violet" }], points: [{ x: 2, y: 16, label: "(2, 16)", color: "amber" }, { x: 1, y: 0.25, label: "(1, 1/4)" }], step: { x: 1, y: 2 }, xlabel: "a" })],
    ["Une somme de puissances", S`Évalue \(3^{-2}+2^{-3}\).`,
      [S`<b>Plan.</b> Les lois des exposants ne s'appliquent pas ici, car les bases sont différentes et l'opération est une addition. On écrit chaque puissance sous forme de fraction, puis on additionne les fractions.`,
        S`<b>Chaque puissance sous forme de fraction.</b> \(3^{-2}=\dfrac1{3^2}=\dfrac19\) et \(2^{-3}=\dfrac1{2^3}=\dfrac18\).`,
        S`<b>Dénominateur commun.</b> Le plus petit commun multiple de \(9\) et \(8\) est \(72\) : \(\dfrac19=\dfrac8{72}\) et \(\dfrac18=\dfrac9{72}\).`,
        S`<b>Additionne.</b> \(\dfrac8{72}+\dfrac9{72}=\dfrac{17}{72}\). La fraction est irréductible, puisque \(17\) est premier.`,
        S`<b>Vérification avec des décimales.</b> \(\frac19\approx0.111\) et \(\frac18=0.125\) donnent une somme de \(0.236\), et \(\frac{17}{72}\approx0.236\) ✓. Le graphique montre les deux valeurs comme des hauteurs sur \(y=3^x\) et \(y=2^x\).`],
      S`\(\frac{17}{72}\)`,
      plane({ view: { xmin: -4, xmax: 2, ymin: -0.5, ymax: 4 }, curves: [{ f: (x) => 3 ** x, color: "violet" }, { f: (x) => 2 ** x, color: "blue" }], points: [{ x: -2, y: 1 / 9, label: "(−2, 1/9)", color: "amber" }, { x: -3, y: 1 / 8, label: "(−3, 1/8)", color: "red" }], step: { x: 1, y: 1 } }, "violet : y = 3ˣ, bleu : y = 2ˣ")],
  ]),

  practice([
    q("exposant négatif", S`Évalue \(4^{-3}\) sous forme de fraction.`, frac(1, 64),
      "L'inverse de 4³.", [S`\(\frac1{64}\).`], S`\(\frac1{64}\)`),
    q("base rationnelle", S`Évalue \(\left(\tfrac52\right)^{-2}\) sous forme de fraction.`, frac(4, 25),
      "Renverse, puis élève au carré.", [S`\(\left(\tfrac25\right)^2\).`], S`\(\frac4{25}\)`),
    q("somme", S`Évalue \(7^0+7^{-1}\) sous forme de fraction.`, frac(8, 7),
      "7⁰ = 1.", [S`\(1+\frac17\).`], S`\(\frac87\)`),
    q("simplifier", S`Simplifie \(x^5\cdot x^{-8}\) (exposants positifs).`, expr("1/x^3", false),
      "Additionne les exposants.", [S`\(x^{-3}\).`], S`\(\frac1{x^3}\)`),
    q("signe", S`Que vaut \(-3^{-2}\)?`, choice([S`\(-\frac19\)`, S`\(\frac19\)`, S`\(9\)`, S`\(-9\)`], 0),
      "Le signe moins est à l'extérieur de la puissance.", [S`\(-(3^{-2})=-\frac19\).`], S`\(-\frac19\)`),
  ]),

  ...hard([
    ["Des inverses dans des inverses", S`Évalue \(\left(2^{-1}+3^{-1}\right)^{-1}\).`,
      [S`\(\frac12+\frac13=\frac56\).`, S`\(\left(\frac56\right)^{-1}=\frac65\).`],
      S`\(\frac65\)`],
    ["Une simplification complète", S`Simplifie \(\dfrac{(4x^{-2}y^3)^{-2}}{(2xy^{-1})^3}\) avec des exposants positifs.`,
      [S`Numérateur : \(4^{-2}x^4y^{-6}=\frac{x^4}{16y^6}\). Dénominateur : \(8x^3y^{-3}\).`, S`\(\frac{x^4}{16y^6}\cdot\frac{y^3}{8x^3}=\frac{x}{128y^3}\).`],
      S`\(\frac{x}{128y^3}\)`],
  ], [
    q("difficile", S`Évalue \(\left(3^{-1}-6^{-1}\right)^{-2}\).`, num(36),
      "Soustrais d'abord les fractions.", [S`\(\frac13-\frac16=\frac16\); \(\left(\frac16\right)^{-2}=36\).`], S`\(36\)`),
    q("difficile", S`Résous \(2^x=\frac1{32}\).`, num(-5),
      "Écris 1/32 comme une puissance de 2.", [S`\(\frac1{32}=2^{-5}\).`], S`\(x=-5\)`),
    q("difficile", S`Évalue \(\left(\tfrac12\right)^{-4}\cdot2^{-3}\).`, num(2),
      "Écris les deux comme des puissances de 2.", [S`\(2^4\cdot2^{-3}=2^1\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi 0⁰ est-il laissé de côté?", "Les régularités se contredisent (0ⁿ = 0, mais b⁰ = 1); ce cours ne lui attribue donc pas de valeur."],
      ["2⁻³ est-il négatif?", "Non. C'est 1/8, un petit nombre positif."],
      ["Comment traiter une fraction à une puissance négative?", "Renverse la fraction et rends l'exposant positif."],
      ["Dois-je éliminer les exposants négatifs?", "Habituellement, les réponses finales utilisent des exposants positifs; les deux formes sont égales."],
      ["Pourquoi apprendre ceci avant les fonctions exponentielles?", "Pour évaluer y = bˣ à des valeurs négatives de x, il faut ces règles."],
    ],
    summary: [
      "Produit : on additionne; quotient : on soustrait; puissance : on multiplie.",
      "b⁰ = 1; b⁻ⁿ = 1/bⁿ; (a/b)⁻ⁿ = (b/a)ⁿ.",
      "Attention aux parenthèses avec les bases négatives.",
      "Donne les réponses avec des exposants positifs.",
    ],
    next: "La leçon 4.2 étend les exposants aux fractions : les exposants rationnels.",
  }),
];
