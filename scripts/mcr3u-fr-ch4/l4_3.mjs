// MCR3U-FR 4.3 — Simplifier des expressions avec des exposants : les lois avec des exposants rationnels, les radicaux
// comme puissances, le changement de base (8^x = 2^(3x)), simplifier puis évaluer. Miroir de ../mcr3u-ch4/l4_3.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "4.3 Simplifier des expressions avec des exposants";
export const ID = lessonId(4, 3);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Simplifier des expressions avec des exposants",
    overview: S`Les lois des exposants fonctionnent pour tous les exposants rationnels; les expressions avec des racines et des puissances fractionnaires se simplifient donc de la même façon que \(x^3\cdot x^4\). Dans cette leçon, tu vas simplifier des expressions à exposants entiers et rationnels, réécrire des radicaux sous forme de puissances, exprimer des puissances de 4, 8, 9 ou 27 avec une base commune, et simplifier avant d'évaluer pour garder les calculs simples.`,
    goals: [
      "appliquer les lois des exposants aux exposants rationnels;",
      "réécrire des produits et des quotients de radicaux sous forme d'une seule puissance;",
      "écrire des puissances avec une base commune, p. ex. 8ˣ = 2^(3x);",
      "simplifier complètement avant de substituer des valeurs;",
      "résoudre des équations exponentielles simples en égalant les bases.",
    ],
    curriculum: "B1.3 (simplifier des expressions algébriques contenant des exposants entiers et rationnels), B2.4 (une fonction exponentielle peut s'exprimer à l'aide de différentes bases, p. ex. 9ˣ = 3^(2x))",
    prior: [
      [S`Additionne \(\tfrac12+\tfrac13\).`, S`\(\tfrac56\).`],
      [S`Écris \(\sqrt[3]{x}\) sous forme de puissance.`, S`\(x^{1/3}\).`],
      [S`Écris 27 comme une puissance de 3.`, S`\(3^3\).`],
    ],
    words: [
      ["Forme simplifiée", "chaque base une seule fois, exposants positifs", "\\(\\frac{x^2}{y^3}\\)"],
      ["Base commune", "réécrire des bases différentes comme des puissances d'un même nombre", "\\(4=2^2\\), \\(8=2^3\\)"],
      ["Coefficient", "le nombre devant, traité avec son propre exposant", "\\((8a^6)^{2/3}=4a^4\\)"],
    ],
  }),

  section("📌 Les mêmes lois, des exposants fractionnaires", S`
  ${table(["Exemple", "Loi", "Résultat"], [
    ["\\(x^{1/2}\\cdot x^{3/2}\\)", "additionner", "\\(x^{2}\\)"],
    ["\\(\\frac{y^{5/3}}{y^{2/3}}\\)", "soustraire", "\\(y\\)"],
    ["\\((a^{3/4})^{8}\\)", "multiplier", "\\(a^{6}\\)"],
    ["\\(\\sqrt x\\cdot\\sqrt[3]x\\)", "réécrire, puis additionner", "\\(x^{5/6}\\)"],
  ])}
  ${keyIdea(S`Écris chaque racine sous forme de puissance, applique les lois, puis simplifie le coefficient séparément : \((8a^6)^{2/3}=8^{2/3}a^{4}=4a^4\).`)}
  ${plane({ view: { xmin: 0, xmax: 4, ymin: 0, ymax: 4 }, curves: [{ f: (x) => Math.sqrt(x) * Math.cbrt(x), a: 0, color: "violet" }, { f: (x) => x ** (5 / 6), a: 0, color: "amber" }], step: { x: 0.5, y: 0.5 } }, "y = √x·∛x et y = x^(5/6) sont la même courbe")}`),

  section("📌 Explore", S`<p>Utilise l'explorateur pour vérifier des puissances rationnelles numériquement — par exemple, confirme que \(8^{2/3}\) et \(4^{1}\) donnent la même valeur.</p>`),

  widget("rationalPower", { init: [8, 2, 3] }),

  section("📌 Attention", watchOut([
    S`Élève aussi le coefficient : \((8a^6)^{2/3}\) vaut \(4a^4\), pas \(8a^4\).`,
    S`Additionne des exposants fractionnaires avec un dénominateur commun : \(\tfrac12+\tfrac13=\tfrac56\), pas \(\tfrac25\).`,
    S`\(\sqrt{x^2+9}\ne x+3\) : les lois s'appliquent aux produits, pas aux sommes.`,
    "Simplifie d'abord, puis substitue — les nombres restent faciles à manipuler.",
  ])),

  examples([
    ["Additionner des exposants rationnels", S`Simplifie \(x^{1/2}\cdot x^{3/2}\), pour \(x\ge0\).`,
      [S`<b>Règle.</b> Les lois des exposants entiers s'appliquent aussi aux exposants rationnels. Même base, multiplication : on additionne les exposants.`,
        S`<b>Additionne.</b> Les dénominateurs sont déjà égaux : \(\frac12+\frac32=\frac42=2\).`,
        S`<b>Résultat.</b> \(x^{1/2}\cdot x^{3/2}=x^2\).`,
        S`<b>Vérification avec</b> \(x=4\). \(4^{1/2}=2\) et \(4^{3/2}=8\), donc le produit est \(16\). La réponse donne \(4^2=16\) ✓. C'est le point \((4,16)\) du graphique.`],
      S`\(x^2\)`,
      plane({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 20 }, curves: [{ f: (x) => x * x, a: 0, color: "violet" }], points: [{ x: 1, y: 1, label: "(1, 1)" }, { x: 4, y: 16, label: "(4, 16)", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Un coefficient et une puissance", S`Simplifie \((8a^6)^{2/3}\).`,
      [S`<b>Règle.</b> L'exposant extérieur s'applique à chaque facteur : \((8a^6)^{2/3}=8^{2/3}\cdot(a^6)^{2/3}\).`,
        S`<b>Le nombre.</b> Le dénominateur \(3\) signifie la racine cubique et le numérateur \(2\), le carré : \(8^{2/3}=\left(\sqrt[3]8\right)^2=2^2=4\). Ne calcule pas \(8\times\frac23\).`,
        S`<b>La variable.</b> Puissance d'une puissance : on multiplie. \(6\times\frac23=4\), donc \((a^6)^{2/3}=a^4\).`,
        S`<b>Combine.</b> \(4a^4\).`,
        S`<b>Vérification avec</b> \(a=2\). Expression de départ : \((8\cdot64)^{2/3}=512^{2/3}=\left(\sqrt[3]{512}\right)^2=8^2=64\). Expression simplifiée : \(4\cdot2^4=64\) ✓`],
      S`\(4a^4\)`,
      plane({ view: { xmin: -3, xmax: 3, ymin: -5, ymax: 75 }, curves: [{ f: (x) => 4 * x ** 4, color: "violet" }], points: [{ x: 2, y: 64, label: "(2, 64)", color: "amber" }, { x: 1, y: 4, label: "(1, 4)" }], step: { x: 1, y: 10 }, xlabel: "a" })],
    ["Un quotient", S`Simplifie \(\dfrac{(x^{3/4}y^{-1/2})^4}{x^2y^{-3}}\), pour \(x,y>0\).`,
      [S`<b>Plan.</b> Élimine d'abord l'exposant extérieur au numérateur. Ensuite, divise les puissances de même base en soustrayant les exposants.`,
        S`<b>Numérateur.</b> Multiplie chaque exposant par \(4\) : \(\frac34\times4=3\) et \(-\frac12\times4=-2\). Le numérateur est \(x^3y^{-2}\).`,
        S`<b>Divise les puissances de \(x\).</b> \(\dfrac{x^3}{x^2}=x^{3-2}=x\).`,
        S`<b>Divise les puissances de \(y\).</b> \(\dfrac{y^{-2}}{y^{-3}}=y^{-2-(-3)}=y^{1}\). Soustraire un exposant négatif revient à additionner.`,
        S`<b>Vérification avec</b> \(x=16,\ y=4\). \(16^{3/4}=8\) et \(4^{-1/2}=\frac12\), donc la parenthèse vaut \(4\) et sa puissance quatrième, \(256\). Le dénominateur vaut \(256\cdot4^{-3}=4\). La valeur est donc \(\frac{256}4=64\), et \(xy=16\times4=64\) ✓`],
      S`\(xy\)`,
      plane({ view: { xmin: 0, xmax: 20, ymin: 0, ymax: 80 }, lines: [{ m: 4, b: 0, color: "violet" }], points: [{ x: 16, y: 64, label: "(16, 64)", color: "amber" }], step: { x: 2, y: 10 } }, "Avec y = 4 fixé, toute l'expression est la droite 4x.")],
    ["Des radicaux sous forme de puissances", S`Écris \(\sqrt x\cdot\sqrt[3]x\) sous forme d'une seule puissance de \(x\), pour \(x\ge0\).`,
      [S`<b>Plan.</b> On ne peut pas multiplier directement des radicaux d'indices différents, mais on peut multiplier des puissances de même base. On réécrit donc chaque radical sous forme de puissance.`,
        S`<b>Réécris.</b> \(\sqrt x=x^{1/2}\) et \(\sqrt[3]x=x^{1/3}\).`,
        S`<b>Additionne les exposants.</b> Utilise le dénominateur commun \(6\) : \(\frac12+\frac13=\frac36+\frac26=\frac56\).`,
        S`<b>Résultat.</b> \(\sqrt x\cdot\sqrt[3]x=x^{5/6}\).`,
        S`<b>Vérification avec</b> \(x=64\), qui a une racine carrée et une racine cubique entières. \(\sqrt{64}\cdot\sqrt[3]{64}=8\cdot4=32\), et \(64^{5/6}=\left(\sqrt[6]{64}\right)^5=2^5=32\) ✓`],
      S`\(x^{5/6}\)`,
      plane({ view: { xmin: 0, xmax: 70, ymin: 0, ymax: 40 }, curves: [{ f: (x) => x ** (5 / 6), a: 0, color: "violet" }], points: [{ x: 1, y: 1, label: "(1, 1)" }, { x: 64, y: 32, label: "(64, 32)", color: "amber" }], step: { x: 10, y: 5 } }, "y = x^(5/6)")],
    ["Simplifier, puis évaluer", S`Évalue \((a^{2/3}b^{-1})^3\div(ab^{-2})\) pour \(a=5\), \(b=3\).`,
      [S`<b>Plan.</b> Simplifier d'abord évite des racines peu commodes comme \(5^{2/3}\). On substitue seulement à la fin.`,
        S`<b>Élimine l'exposant extérieur.</b> \(\frac23\times3=2\) et \(-1\times3=-3\), donc la première parenthèse devient \(a^2b^{-3}\).`,
        S`<b>Divise.</b> Soustrais les exposants base par base : \(a^{2-1}=a\) et \(b^{-3-(-2)}=b^{-1}\). L'expression est \(ab^{-1}=\dfrac ab\).`,
        S`<b>Substitue.</b> \(\dfrac ab=\dfrac53\).`,
        S`<b>Vérification par un calcul direct à partir de</b> \(a^2b^{-3}\div ab^{-2}\). \(\frac{25}{27}\div\frac59=\frac{25}{27}\times\frac95=\frac53\) ✓`],
      S`\(\frac53\)`,
      plane({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 3 }, lines: [{ m: 1 / 3, b: 0, color: "violet" }], points: [{ x: 5, y: 5 / 3, label: "(5, 5/3)", color: "amber" }], step: { x: 1, y: 0.5 }, xlabel: "a" }, "Avec b = 3, l'expression se simplifie en la droite a/3.")],
  ]),

  practice([
    q("additionner", S`Simplifie \(x^{2/3}\cdot x^{1/3}\).`, expr("x"),
      "Additionne les exposants.", [S`\(x^{3/3}\).`], S`\(x\)`),
    q("coefficient", S`Simplifie \((27x^3)^{1/3}\).`, expr("3*x"),
      "La racine cubique de chaque facteur.", [S`\(27^{1/3}x^{1}\).`], S`\(3x\)`),
    q("négatif", S`Simplifie \((x^4)^{-1/2}\) avec un exposant positif.`, expr("1/x^2", false),
      "Multiplie les exposants.", [S`\(x^{-2}\).`], S`\(\frac1{x^2}\)`),
    q("simplifier, puis évaluer", S`Évalue \(\dfrac{(x^{1/2})^6}{x^2}\) à \(x=5\).`, num(5),
      "Simplifie d'abord.", [S`\(\frac{x^3}{x^2}=x\).`], S`\(5\)`),
    q("base commune", S`Quelle expression est égale à \(4^x\)?`, choice([S`\(2^{2x}\)`, S`\(2^{x+2}\)`, S`\(2^{x^2}\)`, S`\(8^{x/2}\cdot2\)`], 0),
      "4 = 2².", [S`\((2^2)^x=2^{2x}\).`], S`\(2^{2x}\)`),
  ]),

  ...hard([
    ["Tout à la fois", S`Simplifie \(\left(16x^{-4}y^{2/3}\right)^{3/4}\) et écris le résultat avec des exposants positifs.`,
      [S`\(16^{3/4}=(\sqrt[4]{16})^3=8\); \(x^{-4\cdot3/4}=x^{-3}\); \(y^{2/3\cdot3/4}=y^{1/2}\).`],
      S`\(\frac{8\sqrt y}{x^3}\)`],
    ["Une base commune", S`Écris \(\dfrac{8^{x+1}}{4^{x}}\) sous forme d'une seule puissance de 2 et évalue-la à \(x=-1\).`,
      [S`\(8^{x+1}=2^{3x+3}\), \(4^x=2^{2x}\).`, S`\(2^{3x+3-2x}=2^{x+3}\); à \(x=-1\) : \(2^2\).`],
      S`\(2^{x+3}\); \(4\)`],
  ], [
    q("difficile", S`Évalue \(\left(\dfrac{x^{5/6}}{x^{1/3}}\right)^4\) à \(x=7\).`, num(49),
      "Soustrais, puis multiplie les exposants.", [S`\((x^{1/2})^4=x^2\).`], S`\(49\)`),
    q("difficile", S`Résous \(9^x=27\).`, num(1.5),
      "Écris les deux membres comme des puissances de 3.", [S`\(3^{2x}=3^3\Rightarrow2x=3\).`], S`\(x=1.5\)`),
    q("difficile", S`Évalue \(\sqrt{a^3}\cdot a^{-1/2}\) à \(a=6\).`, num(6),
      "Additionne 3/2 et −1/2.", [S`\(a^{1}\).`], S`\(6\)`),
  ]),

  wrapUp({
    qas: [
      ["Les lois sont-elles vraiment valables pour les fractions?", "Oui — les exposants rationnels ont été définis justement pour qu'elles le soient."],
      ["Pourquoi utiliser une base commune?", "Des puissances de même base peuvent être comparées ou combinées; cela permet aussi de résoudre 9ˣ = 27."],
      ["Les réponses doivent-elles être en forme radicale ou exponentielle?", "Les deux sont correctes, sauf indication contraire; on attend des exposants positifs."],
      ["Et si la base pouvait être négative?", "Les racines paires exigent des bases non négatives; on suppose habituellement que les variables sont positives."],
      ["Pourquoi simplifier avant d'évaluer?", "Moins d'opérations et des nombres plus petits — donc moins de risques d'erreur."],
    ],
    summary: [
      "Les mêmes lois pour les exposants rationnels.",
      "Racines → puissances; applique les lois; simplifie le coefficient.",
      "Bases communes : 4 = 2², 8 = 2³, 9 = 3², 27 = 3³.",
      "Simplifie d'abord, puis substitue.",
    ],
    next: "La leçon 4.4 trace le graphique de fonctions exponentielles et les compare aux fonctions affines et du second degré.",
  }),
];
