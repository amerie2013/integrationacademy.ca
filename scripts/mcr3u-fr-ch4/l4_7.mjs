// MCR3U-FR 4.7 — Révision du chapitre 4 : exposants, fonctions exponentielles, transformations, modèles.
// Miroir de ../mcr3u-ch4/l4_7.mjs. Notation française : y = a·b^(k(x − c)) + d (c horizontal, d vertical).
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, frac, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";

export const TITLE = "4.7 Révision du chapitre 4";
export const ID = lessonId(4, 7);
const S = String.raw;

export const blocks = () => [
  intro({
    icon: "🧭",
    title: "Révision du chapitre 4",
    overview: S`Cette révision fait les liens dans tout le chapitre : les lois des exposants et les exposants rationnels, les propriétés et les transformations des fonctions exponentielles, et les modèles exponentiels. Les exemples combinent plusieurs habiletés; les exercices et les problèmes de niveau difficile sont du niveau d'un test de chapitre.`,
    goals: [
      "évaluer et simplifier des expressions à exposants entiers et rationnels;",
      "énoncer les propriétés de y = a·bˣ et reconnaître des données exponentielles;",
      "tracer le graphique de y = a·b^(k(x − c)) + d et énoncer son asymptote, son domaine et son image;",
      "écrire et utiliser des modèles de croissance, de décroissance, de demi-vie et d'intérêt;",
      "résoudre des problèmes exponentiels en plusieurs étapes.",
    ],
    curriculum: "B1–B3 (représenter des fonctions exponentielles, relier graphiques et équations, résoudre des problèmes)",
    prior: [
      [S`Évalue \(16^{-3/4}\).`, S`\(\frac18\).`],
      [S`Quelle est l'asymptote de \(y=3(2)^x-4\)?`, S`\(y=-4\).`],
      [S`Quel facteur modélise une diminution de 7 %?`, S`\(0.93\).`],
    ],
    words: [
      ["4.1–4.3", "lois des exposants, exposants rationnels, simplification", ""],
      ["4.4", "propriétés, rapport constant", ""],
      ["4.5", "transformations, asymptote y = d", ""],
      ["4.6", "modèles de croissance et de décroissance", ""],
    ],
  }),

  section("📌 Le chapitre sur une page", S`
  ${table(["Habileté", "Fait clé"], [
    ["Exposants", "\\(b^{-n}=\\frac1{b^n}\\), \\(b^{m/n}=(\\sqrt[n]b)^m\\)"],
    ["Reconnaître", "pas égaux en x, rapport constant"],
    ["Propriétés", "domaine \\(\\mathbb R\\), image \\(y>d\\) ou \\(y<d\\), asymptote \\(y=d\\)"],
    ["Transformer", "\\((x,y)\\to(\\frac xk+c,\\ ay+d)\\)"],
    ["Modéliser", "\\(A_0(1\\pm r)^t\\), \\(A_0(\\tfrac12)^{t/h}\\), \\(P(1+i)^n\\)"],
  ])}
  ${keyIdea("Écris les nombres avec une base commune chaque fois que c'est possible — cela facilite beaucoup l'évaluation, la simplification et la résolution.")}`),

  section("📌 Explore", S`<p>Utilise l'explorateur pour vérifier les graphiques transformés des exemples et des problèmes.</p>`),

  widget("expTransform", { base: 3, show: ["a", "k", "d", "c"], init: { a: 2, k: 1, d: 1, c: -4 } }),

  examples([
    ["Exposants", S`Évalue \(\left(\tfrac{27}{8}\right)^{-2/3}+4^{0}\).`,
      [S`<b>Ordre des opérations.</b> Évalue d'abord chaque puissance, puis additionne. La première puissance contient trois instructions : l'inverse (signe moins), la racine cubique (dénominateur 3) et le carré (numérateur 2).`,
        S`<b>Inverse.</b> Renverse la fraction et enlève le signe moins : \(\left(\tfrac{27}{8}\right)^{-2/3}=\left(\tfrac{8}{27}\right)^{2/3}\).`,
        S`<b>Racine cubique.</b> \(\sqrt[3]8=2\) et \(\sqrt[3]{27}=3\); la racine cubique de la fraction est donc \(\tfrac23\).`,
        S`<b>Carré.</b> \(\left(\tfrac23\right)^2=\tfrac49\).`,
        S`<b>Exposant nul et somme.</b> \(4^0=1\); le total est donc \(\tfrac49+1=\tfrac49+\tfrac99=\tfrac{13}9\).`,
        S`<b>Vérification sur le graphique.</b> Sur \(y=x^{-2/3}\), le point d'abscisse \(x=\frac{27}8=3.375\) a une hauteur de \(\frac49\approx0.44\) ✓`],
      S`\(\tfrac{13}9\)`,
      plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 3 }, curves: [{ f: (x) => x ** (-2 / 3), a: 0.25, color: "violet" }], points: [{ x: 1, y: 1, label: "(1, 1)" }, { x: 3.375, y: 4 / 9, label: "(3.375, 4/9)", color: "amber" }], step: { x: 1, y: 0.5 } }, "y = x^(−2/3)")],
    ["Simplifier", S`Simplifie \(\dfrac{(9x^4)^{1/2}}{(27x^6)^{1/3}}\), pour \(x\ne0\).`,
      [S`<b>Plan.</b> Applique chaque exposant extérieur à chaque facteur de sa parenthèse, puis divise.`,
        S`<b>Numérateur.</b> \(9^{1/2}=3\) et \((x^4)^{1/2}=x^{4\cdot\frac12}=x^2\); le numérateur est donc \(3x^2\).`,
        S`<b>Dénominateur.</b> \(27^{1/3}=3\) et \((x^6)^{1/3}=x^{6\cdot\frac13}=x^2\); le dénominateur est donc \(3x^2\).`,
        S`<b>Divise.</b> \(\dfrac{3x^2}{3x^2}=1\). Le numérateur et le dénominateur sont égaux pour tout \(x\ne0\).`,
        S`<b>Vérification avec</b> \(x=2\). Numérateur : \((9\times16)^{1/2}=\sqrt{144}=12\). Dénominateur : \((27\times64)^{1/3}=\sqrt[3]{1728}=12\). Le quotient vaut \(1\) ✓. Le graphique est donc la droite horizontale \(y=1\), avec un trou à \(x=0\).`],
      S`\(1\) (pour \(x\ne0\))`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -1, ymax: 3 }, lines: [{ m: 0, b: 1, color: "violet" }], points: [{ x: 2, y: 1, label: "(2, 1)", color: "amber" }, { x: 0, y: 1, label: "trou à x = 0", color: "red" }], step: { x: 1, y: 1 } })],
    ["À partir d'une table", S`\(x\) : \(0,1,2,3\); \(y\) : \(80,60,45,33.75\). Modélise les données et prédis \(y(5)\).`,
      [S`<b>Teste la régularité.</b> Les pas en x sont égaux. ${tv(["\\(x\\)", "\\(0\\)", "\\(1\\)", "\\(2\\)", "\\(3\\)"], ["\\(y\\)", "\\(80\\)", "\\(60\\)", "\\(45\\)", "\\(33.75\\)"], ["différence première", "", "\\(-20\\)", "\\(-15\\)", "\\(-11.25\\)"], ["rapport", "", "\\(0.75\\)", "\\(0.75\\)", "\\(0.75\\)"])} Les différences changent, mais le rapport est constant; les données sont donc exponentielles.`,
        S`<b>Lis \(a\) et \(b\).</b> La valeur à \(x=0\) donne \(a=80\). Le rapport donne \(b=0.75\), soit une décroissance : une perte de 25 % à chaque pas.`,
        S`<b>Modèle.</b> \(y=80(0.75)^x\). Vérification à \(x=3\) : \(80\times0.421875=33.75\) ✓`,
        S`<b>Prédis.</b> \((0.75)^5\approx0.2373\), donc \(y(5)\approx80\times0.2373\approx18.98\).`,
        S`<b>Vérification en prolongeant la table.</b> \(33.75\times0.75=25.3125\), puis \(25.3125\times0.75\approx18.98\) ✓`],
      S`\(y=80(0.75)^x\); \(y(5)\approx18.98\)`,
      plane({ view: { xmin: -1, xmax: 7, ymin: 0, ymax: 100 }, curves: [{ f: (x) => 80 * 0.75 ** x, color: "violet" }], points: [{ x: 0, y: 80, label: "(0, 80)" }, { x: 1, y: 60 }, { x: 2, y: 45 }, { x: 3, y: 33.75, label: "(3, 33.75)" }, { x: 5, y: 18.98, label: "(5, 18.98)", color: "amber" }], step: { x: 1, y: 10 } })],
    ["Transformation", S`Trace le graphique de \(y=2(3)^{x-1}-4\) : énonce l'asymptote, l'image et l'ordonnée à l'origine.`,
      [S`<b>Lis les transformations.</b> \(a=2\) est un étirement vertical de facteur 2, \(c=1\) est une translation de 1 vers la droite, et \(d=-4\) est une translation de 4 vers le bas. Donc \((x,y)\to(x+1,\ 2y-4)\).`,
        S`<b>Transforme les points clés de \(y=3^x\).</b> ${tv(["\\(y=3^x\\)", "\\((-1,\\frac13)\\)", "\\((0,1)\\)", "\\((1,3)\\)", "\\((2,9)\\)"], ["image", "\\((0,-\\frac{10}3)\\)", "\\((1,-2)\\)", "\\((2,2)\\)", "\\((3,14)\\)"])}`,
        S`<b>Asymptote et image.</b> \(y=0\) reste à 0 après l'étirement, puis descend en \(y=-4\). Il n'y a pas de réflexion; la courbe est donc au-dessus : l'image est \(y>-4\).`,
        S`<b>Ordonnée à l'origine.</b> \(y(0)=2(3)^{-1}-4=\frac23-4=-\frac{10}3\). Cela correspond au premier point image.`,
        S`<b>Vérification.</b> À \(x=2\) : \(2(3)^1-4=2\) ✓. La courbe croise \(y=0\) là où \(3^{x-1}=2\), entre \((1,-2)\) et \((2,2)\) ✓`],
      S`asymptote \(y=-4\); image \(y>-4\); ordonnée à l'origine \(-\tfrac{10}{3}\)`,
      plane({ view: { xmin: -4, xmax: 4, ymin: -6, ymax: 10 }, curves: [{ f: (x) => 2 * 3 ** (x - 1) - 4, color: "violet" }], lines: [{ m: 0, b: -4, color: "green", dash: true }], points: [{ x: 0, y: -10 / 3, label: "(0, −10/3)", color: "amber" }, { x: 1, y: -2, label: "(1, −2)" }, { x: 2, y: 2, label: "(2, 2)" }], step: { x: 1, y: 2 } })],
    ["Un modèle", S`Un échantillon de 120 g a une demi-vie de 9 jours. Quelle quantité reste-t-il après 27 jours, et après combien de demi-vies complètes reste-t-il moins de 5 g?`,
      [S`<b>Écris le modèle.</b> L'exposant compte les demi-vies : \(A(t)=120\left(\tfrac12\right)^{t/9}\), avec \(t\) en jours.`,
        S`<b>Après 27 jours.</b> \(\frac{27}9=3\) demi-vies, donc \(A=120\left(\tfrac12\right)^3=120\times\frac18=15\) g.`,
        S`<b>Sous 5 g.</b> Divise par deux jusqu'à ce que la quantité soit inférieure à 5. ${tv(["demi-vies", "0", "1", "2", "3", "4", "5"], ["jours", "0", "9", "18", "27", "36", "45"], ["masse (g)", "120", "60", "30", "15", "7.5", "3.75"])}`,
        S`<b>Lis la table.</b> Après 4 demi-vies, il reste encore 7.5 g, ce qui est supérieur à 5. Après 5 demi-vies, il reste 3.75 g, ce qui est inférieur à 5. Il faut donc 5 demi-vies complètes, soit 45 jours.`,
        S`<b>Vérification.</b> \(120\left(\tfrac12\right)^5=\frac{120}{32}=3.75\) ✓`],
      "15 g après 27 jours; moins de 5 g après 5 demi-vies (45 jours)",
      plane({ view: { xmin: 0, xmax: 54, ymin: 0, ymax: 130 }, curves: [{ f: (t) => 120 * 0.5 ** (t / 9), a: 0, color: "violet" }], lines: [{ m: 0, b: 5, color: "amber", dash: true }], points: [{ x: 27, y: 15, label: "(27, 15)" }, { x: 45, y: 3.75, label: "(45, 3.75)", color: "amber" }], step: { x: 9, y: 20 }, xlabel: "t (jours)", ylabel: "A (g)" })],
  ]),

  practice([
    q("exposants", S`Évalue \(32^{3/5}\).`, num(8),
      "La racine cinquième d'abord.", [S`\(2^3\).`], S`\(8\)`),
    q("négatif", S`Évalue \(\left(\tfrac49\right)^{-1/2}\) sous forme de fraction.`, frac(3, 2),
      "Renverse, puis prends la racine carrée.", [S`\(\left(\tfrac94\right)^{1/2}\).`], S`\(\tfrac32\)`),
    q("rapport", S`Une table exponentielle a \(y=48,12,3\). Quelle est la valeur suivante?`, num(0.75),
      "Rapport ¼.", [S`\(3\times\tfrac14\).`], S`\(0.75\)`),
    q("asymptote", S`Quelle est l'asymptote de \(y=-5(2)^{x+3}+7\)? Entre sa valeur de y.`, num(7),
      "d.", [S`\(y=7\).`], S`\(7\)`),
    q("modèle", "On place 800 dollars à 5 % composé annuellement. Quelle est la valeur après 3 ans (au centième près)?", num(926.1, 0.006),
      "800(1.05)³.", [S`\(800\times1.157625\).`], S`\(926.10\) dollars`),
  ]),

  ...hard([
    ["Deux points et une asymptote", S`Une exponentielle \(y=ab^x+d\) a pour asymptote \(y=2\) et passe par \((0,7)\) et \((1,4.5)\). Trouve-la, puis calcule \(y(3)\).`,
      [S`\(d=2\); \(a+2=7\Rightarrow a=5\).`, S`\(5b+2=4.5\Rightarrow b=0.5\).`, S`\(y(3)=5\cdot\tfrac18+2=2.625\).`],
      S`\(y=5(0.5)^x+2\); \(2.625\)`],
    ["Comparer deux placements", "Ana place 2000 dollars à 6 % composé annuellement. Ben place 2500 dollars à 4 % composé annuellement. Après combien d'années complètes le placement d'Ana vaut-il plus que celui de Ben?",
      [S`Compare \(2000(1.06)^n\) et \(2500(1.04)^n\).`, S`\(n=11\) : \(3797\) contre \(3849\); \(n=12\) : \(4024\) contre \(4003\).`],
      "après 12 ans",
      plane({ view: { xmin: 0, xmax: 16, ymin: 1500, ymax: 5500 }, curves: [{ f: (n) => 2000 * 1.06 ** n, a: 0, color: "blue" }, { f: (n) => 2500 * 1.04 ** n, a: 0, color: "red" }], step: { x: 2, y: 500 }, xlabel: "ans", ylabel: "valeur" })],
  ], [
    q("difficile", S`Résous \(27^{x}=9^{x+1}\).`, num(2),
      "Base 3.", [S`\(3^{3x}=3^{2x+2}\).`], S`\(x=2\)`),
    q("difficile", S`\(y=a(2)^x+d\) passe par \((0,1)\) et \((1,7)\). Trouve \(y(-1)\).`, num(-2),
      "a + d = 1, 2a + d = 7.", [S`\(a=6\), \(d=-5\); \(6\cdot\tfrac12-5\).`], S`\(-2\)`),
    q("difficile", "Un réservoir contient 900 L et perd 10 % de son eau chaque heure. Après combien d'heures complètes reste-t-il moins de la moitié?", num(7),
      "0.9ⁿ < 0.5.", [S`\(0.9^6\approx0.531\), \(0.9^7\approx0.478\).`], S`\(7\) h`),
  ]),

  wrapUp({
    qas: [
      ["Quelle est l'erreur la plus fréquente?", "Traiter un exposant négatif comme un nombre négatif, et utiliser r au lieu de 1 − r pour une décroissance."],
      ["Comment commencer un problème de modélisation?", "Trouve la quantité initiale, le facteur par période et le nombre de périodes."],
      ["Comment vérifier un graphique transformé?", "Trace d'abord l'asymptote et vérifie l'ordonnée à l'origine."],
      ["Comment résoudre quand les bases ne correspondent pas?", "Dans ce cours, utilise un graphique ou des essais successifs."],
      ["Comment devrais-je étudier?", "Refais les problèmes de niveau difficile de chaque leçon, puis vérifie avec les explorateurs."],
    ],
    summary: [
      "Les exposants rationnels sont des racines et des puissances.",
      "Exponentielle : rapport constant, asymptote, image au-dessus ou au-dessous de d.",
      "Transforme les points clés; d déplace l'asymptote.",
      "Modèles : croissance, décroissance, demi-vie, intérêt, refroidissement.",
    ],
    next: "Le chapitre 5 porte sur les rapports trigonométriques.",
  }),
];
