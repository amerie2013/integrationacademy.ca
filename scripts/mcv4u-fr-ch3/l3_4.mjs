// MCV4U-FR 3.4 — Fonctions rationnelles simples : asymptotes verticales, horizontales et obliques, comportement près
// d'une asymptote verticale, intersections et symétrie, et utilisation de f′ et f″ pour situer les extremums, les
// intervalles et la concavité. Miroir de ../mcv4u-ch3/l3_4.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, rat } from "./lib.mjs";
import { chart } from "./csign.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "3.4 Fonctions rationnelles simples";
export const ID = lessonId(3, 4);

const S = String.raw;
const VA1 = { xmin: -8, xmax: 6, ymin: -6, ymax: 12 };
const VA2 = { xmin: -4, xmax: 4, ymin: -4, ymax: 5 };
const VA3 = { xmin: -4, xmax: 8, ymin: -6, ymax: 8 };
const VA4 = { xmin: -7, xmax: 5, ymin: -12, ymax: 10 };
const VA5 = { xmin: -4, xmax: 4, ymin: -6, ymax: 7 };
export const blocks = () => [
  intro({
    icon: "🪃",
    title: "Fonctions rationnelles simples",
    overview: S`Une fonction rationnelle \(f(x)=\dfrac{p(x)}{q(x)}\) est un quotient de polynômes. Son graphique peut se séparer en morceaux aux zéros du dénominateur et s'approcher de droites loin de l'origine. Pour l'esquisser, on combine l'algèbre et le calcul différentiel : les <strong>asymptotes</strong> viennent du dénominateur et de la comparaison des degrés; les <strong>intersections avec les axes et la symétrie</strong>, de l'équation; les <strong>intervalles de croissance et de décroissance</strong> et les extremums, de \(f'\); la <strong>concavité</strong>, de \(f''\). Près d'une asymptote verticale, les signes du numérateur et du dénominateur décident si le graphique monte en flèche ou plonge.`,
    goals: [
      "trouver les asymptotes verticales, horizontales et obliques;",
      "décrire le comportement de f de chaque côté d'une asymptote verticale;",
      "trouver les intersections avec les axes et reconnaître une symétrie;",
      "utiliser f′ pour trouver les intervalles de croissance et de décroissance et les extremums des fonctions rationnelles;",
      "esquisser une fonction rationnelle simple à partir de ses caractéristiques clés.",
    ],
    curriculum: "B1.5 (esquisser le graphique d'une fonction rationnelle à l'aide de ses caractéristiques clés : asymptotes, intersections avec les axes, intervalles de croissance et de décroissance, extremums, concavité)",
    prior: [
      [S`Où \(\dfrac{x+1}{x-2}\) n'est-elle pas définie?`, S`En \(x=2\).`],
      [S`De quelle valeur \(\dfrac{3x}{x}\) s'approche-t-elle pour de grandes valeurs de \(x\)?`, S`\(3\).`],
      [S`Dérive \(\dfrac1{x-2}\).`, S`\(-\dfrac1{(x-2)^2}\).`],
    ],
    words: [
      ["Asymptote verticale", "une droite \\(x=a\\) où \\(|f(x)|\\to\\infty\\) lorsque \\(x\\to a\\)", "zéro du dénominateur"],
      ["Asymptote horizontale", "une droite \\(y=L\\) telle que \\(f(x)\\to L\\) lorsque \\(x\\to\\pm\\infty\\)", "comparer les degrés"],
      ["Asymptote oblique", "une droite inclinée \\(y=mx+b\\) dont le graphique s'approche", "numérateur de degré supérieur de un"],
      ["Paire / impaire", "\\(f(-x)=f(x)\\) / \\(f(-x)=-f(x)\\)", "symétrie par rapport à l'axe des y / à l'origine"],
    ],
  }),

  section("📌 Trouver les asymptotes", S`
  ${table(["Comparer les degrés de p et de q", "Comportement aux extrémités", "Exemple"], [
    ["deg p < deg q", "asymptote horizontale \\(y=0\\)", "\\(\\frac{3}{x^2+1}\\)"],
    ["deg p = deg q", "\\(y=\\) rapport des coefficients dominants", "\\(\\frac{3x-1}{x+2}\\to3\\)"],
    ["deg p = deg q + 1", "asymptote oblique obtenue par division longue", "\\(\\frac{x^2+x+4}{x+1}=x+\\frac4{x+1}\\)"],
  ])}
  ${plane({ view: VA1, curves: rat((x) => (3 * x - 1) / (x + 2), [-2], VA1), vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 0, b: 3, color: "red", dash: true }], points: [{ x: 1 / 3, y: 0, label: "(⅓, 0)", color: "blue" }, { x: 0, y: -0.5, label: "(0, −½)", color: "blue" }], step: { x: 1, y: 2 } }, "f(x) = (3x − 1)/(x + 2) : asymptote verticale x = −2, asymptote horizontale y = 3.")}
  ${keyIdea(S`Asymptotes verticales : les zéros du dénominateur qui ne sont pas aussi des zéros du numérateur (vérifie les signes de chaque côté). Asymptote horizontale ou oblique : compare les degrés, ou divise. Utilise ensuite \(f'\) pour la croissance, la décroissance et les extremums, et \(f''\) pour la concavité, sans oublier de découper aussi la droite numérique aux asymptotes verticales.`)}`),

  section("📌 Explore", S`<p>Choisis une fonction rationnelle. Les droites rouges pointillées sont ses asymptotes et les points verts, ses points où elle change de direction. Approche le point rouge d'une asymptote verticale et observe \(f\) et \(f'\) croître sans borne; éloigne-le et observe \(f\) s'approcher de l'asymptote horizontale ou oblique.</p>`),

  widget("rationalSketch", { init: { fn: "c", x: 3 } }),

  section("📌 Comportement près d'une asymptote verticale", S`
  <p>Juste à gauche et juste à droite de \(x=a\), le dénominateur est un très petit nombre positif ou négatif. Combine son signe avec celui du numérateur pour décider entre \(+\infty\) et \(-\infty\) de chaque côté.</p>
  ${watchOut([
    "Un zéro du dénominateur qui annule aussi le numérateur peut être un trou, et non une asymptote.",
    "Le graphique peut couper une asymptote horizontale; il ne peut pas couper une asymptote verticale.",
    "Découpe le tableau de signes de f′ et de f″ à chaque asymptote verticale.",
    "Une asymptote oblique exige une division longue : le quotient est la droite, la fraction du reste tend vers 0.",
    "Un facteur au carré au dénominateur donne le même signe des deux côtés de l'asymptote.",
  ])}`),

  examples([
    ["Asymptotes et intersections avec les axes", S`Trouve les asymptotes et les intersections avec les axes de \(f(x)=\dfrac{3x-1}{x+2}\), et détermine où elle est croissante.`,
      [S`<b>Asymptote verticale.</b> Le dénominateur vaut 0 en \(x=-2\), et le numérateur y vaut \(3(-2)-1=-7\ne0\). Un nombre non nul divisé par une quantité qui tend vers 0 explose, donc \(x=-2\) est une asymptote verticale.`,
        S`<b>Asymptote horizontale.</b> Divise le numérateur et le dénominateur par \(x\) : \(f(x)=\dfrac{3-\frac1x}{1+\frac2x}\to\dfrac{3}{1}=3\) lorsque \(x\to\pm\infty\). Donc \(y=3\).`,
        S`<b>Intersections avec les axes.</b> Abscisse à l'origine : numérateur \(=0\), donc \(3x-1=0\) et \(x=\tfrac13\). Ordonnée à l'origine : \(f(0)=\dfrac{-1}{2}=-\tfrac12\).`,
        S`<b>Dérivée.</b> Règle du quotient : \(f'(x)=\dfrac{3(x+2)-(3x-1)(1)}{(x+2)^2}=\dfrac{7}{(x+2)^2}\).`,
        S`<b>Tableau de signes.</b> Découpe aussi à l'asymptote. ${chart({ cuts: [[-2, "-2"]], undef: [-2], d: ["f'(x)", (x) => 7 / (x + 2) ** 2] })}`,
        S`<b>Vérifie.</b> \(f(-3)=\dfrac{-10}{-1}=10\) (branche de gauche, au-dessus de 3) et \(f(-1)=\dfrac{-4}{1}=-4\) (branche de droite, sous 3). Les deux branches montent de gauche à droite, comme l'indique le tableau ✓`],
      S`asymptotes \(x=-2\), \(y=3\); intersections \(\left(\tfrac13,0\right)\), \(\left(0,-\tfrac12\right)\); croissante sur \((-\infty,-2)\) et sur \((-2,\infty)\)`,
      plane({ view: VA1, curves: rat((x) => (3 * x - 1) / (x + 2), [-2], VA1), vlines: [{ x: -2, color: "red", dash: true }], lines: [{ m: 0, b: 3, color: "red", dash: true }], points: [{ x: 1 / 3, y: 0, label: "(⅓, 0)", color: "blue" }, { x: 0, y: -0.5, label: "(0, −½)", color: "blue" }, { x: -3, y: 10, label: "(−3, 10)", color: "amber" }], step: { x: 1, y: 2 } }, "En rouge pointillé : les asymptotes x = −2 et y = 3.")],
    ["Deux asymptotes verticales", S`Analyse \(f(x)=\dfrac{x^2}{x^2-1}\).`,
      [S`<b>Asymptotes verticales.</b> \(x^2-1=(x-1)(x+1)=0\) en \(x=\pm1\), où le numérateur vaut \(1\ne0\). Donc \(x=-1\) et \(x=1\).`,
        S`<b>Asymptote horizontale et symétrie.</b> Degrés égaux, coefficients dominants 1 et 1 : \(y=1\). De plus, \(f(-x)=f(x)\), donc le graphique est symétrique par rapport à l'axe des y.`,
        S`<b>Dérivée.</b> \(f'(x)=\dfrac{2x(x^2-1)-x^2(2x)}{(x^2-1)^2}=\dfrac{-2x}{(x^2-1)^2}\). Elle vaut 0 en \(x=0\) et n'est pas définie en \(x=\pm1\).`,
        S`<b>Tableau de signes.</b> ${chart({ cuts: [[-1, "-1"], [0, "0"], [1, "1"]], undef: [-1, 1], d: ["f'(x)", (x) => (-2 * x) / (x * x - 1) ** 2], tests: [-2, -0.5, 0.5, 2] })}`,
        S`<b>Le point où la fonction change de direction.</b> \(f(0)=0\), donc \((0,0)\) est un maximum relatif sur la branche du milieu.`,
        S`<b>Vérifie les branches.</b> \(f(0.5)=\dfrac{0.25}{-0.75}=-\tfrac13\lt0\) : la branche du milieu est sous l'axe des x, sauf en \((0,0)\) ✓. \(f(2)=\tfrac43\gt1\) : les branches extérieures s'approchent de \(y=1\) par le haut ✓`],
      S`asymptotes \(x=\pm1\), \(y=1\); maximum relatif \((0,0)\); symétrique par rapport à l'axe des y`,
      plane({ view: VA2, curves: rat((x) => (x * x) / (x * x - 1), [-1, 1], VA2), vlines: [{ x: -1, color: "red", dash: true }, { x: 1, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [{ x: 0, y: 0, label: "max (0, 0)", color: "green" }, { x: 2, y: 4 / 3, label: "(2, 4/3)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["À gauche et à droite de l'asymptote", S`Décris \(f(x)=\dfrac{x+1}{x-2}\) près de \(x=2\).`,
      [S`<b>Pourquoi elle explose.</b> En \(x=2\), le dénominateur vaut 0 et le numérateur vaut 3. Près de \(x=2\), \(f(x)\approx\dfrac{3}{\text{très petit nombre}}\), ce qui est énorme. Le signe du très petit nombre décide entre \(+\infty\) et \(-\infty\).`,
        S`<b>Par la gauche.</b> Pour \(x\) un peu plus petit que 2, \(x-2\) est un très petit nombre négatif, donc \(f(x)\to-\infty\).`,
        S`<b>Par la droite.</b> Pour \(x\) un peu plus grand que 2, \(x-2\) est très petit et positif, donc \(f(x)\to+\infty\).`,
        S`<b>Vérifie avec une table de valeurs.</b> ${tv(["\\(x\\)", "1.9", "1.99", "2.01", "2.1"], ["\\(f(x)\\)", "\\(\\frac{2.9}{-0.1}=-29\\)", "\\(\\frac{2.99}{-0.01}=-299\\)", "\\(\\frac{3.01}{0.01}=301\\)", "\\(\\frac{3.1}{0.1}=31\\)"])}`,
        S`<b>Loin de l'asymptote.</b> Des degrés égaux donnent \(y=\tfrac11=1\). De plus, \(f'(x)=\dfrac{(x-2)-(x+1)}{(x-2)^2}=\dfrac{-3}{(x-2)^2}\lt0\), donc chaque branche descend : la branche de gauche descend de 1 vers \(-\infty\), et la branche de droite descend de \(+\infty\) vers 1 ✓`],
      S`\(\lim_{x\to2^-}f(x)=-\infty\), \(\lim_{x\to2^+}f(x)=+\infty\); asymptote horizontale \(y=1\)`,
      plane({ view: VA3, curves: rat((x) => (x + 1) / (x - 2), [2], VA3), vlines: [{ x: 2, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [{ x: -1, y: 0, label: "(−1, 0)", color: "blue" }, { x: 0, y: -0.5, label: "(0, −½)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Une asymptote oblique", S`Analyse \(f(x)=\dfrac{x^2+x+4}{x+1}\).`,
      [S`<b>Divise.</b> Le degré du numérateur dépasse de un celui du dénominateur; divise donc : \(x^2+x+4=x(x+1)+4\), ce qui donne \(f(x)=x+\dfrac{4}{x+1}\).`,
        S`<b>Asymptotes.</b> Lorsque \(x\to\pm\infty\), \(\dfrac{4}{x+1}\to0\), donc le graphique s'approche de la droite \(y=x\) (asymptote oblique). Le dénominateur vaut 0 en \(x=-1\), où le numérateur vaut \(4\ne0\) : asymptote verticale \(x=-1\).`,
        S`<b>Dérivée.</b> \(f'(x)=1-\dfrac{4}{(x+1)^2}=\dfrac{(x+1)^2-4}{(x+1)^2}=\dfrac{(x+3)(x-1)}{(x+1)^2}\). Zéros \(x=-3\) et \(x=1\); non définie en \(x=-1\).`,
        S`<b>Tableau de signes.</b> ${chart({ cuts: [[-3, "-3"], [-1, "-1"], [1, "1"]], undef: [-1], d: ["f'(x)", (x) => 1 - 4 / (x + 1) ** 2] })}`,
        S`<b>Points où la fonction change de direction.</b> \(f(-3)=-3+\dfrac{4}{-2}=-5\) (max. relatif) et \(f(1)=1+\dfrac42=3\) (min. relatif).`,
        S`<b>Vérifie.</b> Dérivée seconde \(f''(x)=\dfrac{8}{(x+1)^3}\) : \(f''(1)=1\gt0\) (tasse, min) et \(f''(-3)=-1\lt0\) (chapeau, max) ✓. Le max. relatif \(-5\) est aussi plus bas que le min. relatif 3 — c'est possible parce qu'ils sont sur des branches différentes ✓`],
      S`minimum relatif \((1,3)\), maximum relatif \((-3,-5)\); asymptotes \(x=-1\) et \(y=x\)`,
      plane({ view: VA4, curves: rat((x) => (x * x + x + 4) / (x + 1), [-1], VA4), vlines: [{ x: -1, color: "red", dash: true }], lines: [{ m: 1, b: 0, color: "red", dash: true }], points: [{ x: 1, y: 3, label: "min (1, 3)", color: "green" }, { x: -3, y: -5, label: "max (−3, −5)", color: "green" }], step: { x: 1, y: 2 } }, "En rouge pointillé : x = −1 et l'asymptote oblique y = x.")],
    ["Une esquisse complète", S`Esquisse \(f(x)=\dfrac{6x}{x^2+3}\) à l'aide de son asymptote, de sa symétrie, de ses extremums et de ses points d'inflexion.`,
      [S`<b>Asymptotes et symétrie.</b> \(x^2+3\gt0\), donc il n'y a aucune asymptote verticale. Le degré du numérateur est inférieur à celui du dénominateur, donc \(y=0\) est l'asymptote horizontale. \(f(-x)=-f(x)\) : impaire, symétrique par rapport à l'origine.`,
        S`<b>Dérivée première.</b> \(f'(x)=\dfrac{6(x^2+3)-6x(2x)}{(x^2+3)^2}=\dfrac{6(3-x^2)}{(x^2+3)^2}\), nulle en \(x=\pm\sqrt3\). ${chart({ cuts: [[-Math.sqrt(3), "-\\sqrt3"], [Math.sqrt(3), "\\sqrt3"]], d: ["f'(x)", (x) => (6 * (3 - x * x)) / (x * x + 3) ** 2] })}`,
        S`<b>Valeurs extrêmes.</b> \(f(\sqrt3)=\dfrac{6\sqrt3}{6}=\sqrt3\approx1.73\) (max) et, par symétrie, \(f(-\sqrt3)=-\sqrt3\) (min).`,
        S`<b>Dérivée seconde.</b> \(f''(x)=\dfrac{12x(x^2-9)}{(x^2+3)^3}\), nulle en \(x=0\) et \(x=\pm3\). ${chart({ kind: "conc", cuts: [[-3, "-3"], [0, "0"], [3, "3"]], d: ["f''(x)", (x) => (12 * x * (x * x - 9)) / (x * x + 3) ** 3] })}`,
        S`<b>Points d'inflexion.</b> \(f(0)=0\), \(f(3)=\tfrac{18}{12}=1.5\), \(f(-3)=-1.5\).`,
        S`<b>Vérifie.</b> Tout à droite, le graphique est au-dessus de 0 et concave vers le haut, donc il descend vers \(y=0\) par le haut — ce qui concorde avec \(f(10)=\tfrac{60}{103}\approx0.58\) ✓`],
      S`max \((\sqrt3,\sqrt3)\approx(1.73,1.73)\), min \((-1.73,-1.73)\); points d'inflexion \((0,0)\), \((\pm3,\pm1.5)\); tend vers 0 aux deux extrémités`,
      plane({ view: { xmin: -8, xmax: 8, ymin: -2.2, ymax: 2.2 }, curves: [{ f: (x) => (6 * x) / (x * x + 3), color: "violet" }], points: [{ x: Math.sqrt(3), y: Math.sqrt(3), label: "max", color: "green" }, { x: -Math.sqrt(3), y: -Math.sqrt(3), label: "min", color: "green" }, { x: 0, y: 0, color: "violet" }, { x: 3, y: 1.5, label: "inflexion", color: "violet" }, { x: -3, y: -1.5, label: "inflexion", color: "violet" }], step: { x: 1, y: 0.5 } })],
  ]),

  practice([
    q("verticale", S`Trouve l'asymptote verticale de \(f(x)=\dfrac{2x+5}{x-4}\) : \(x=\,?\)`, num(4),
      "Zéro du dénominateur.", [S`\(x-4=0\).`], S`\(4\)`),
    q("horizontale", S`Trouve l'asymptote horizontale de \(f(x)=\dfrac{6x-1}{3x+2}\) : \(y=\,?\)`, num(2),
      "Degrés égaux : rapport des coefficients dominants.", [S`\(\frac63\).`], S`\(2\)`),
    q("comportement", S`Comment \(f(x)=\dfrac{1}{(x-1)^2}\) se comporte-t-elle près de \(x=1\)?`, choice([S`\(f\to+\infty\) des deux côtés`, S`\(f\to-\infty\) des deux côtés`, S`\(+\infty\) à gauche, \(-\infty\) à droite`, S`\(f\to1\)`], 0),
      "Un carré n'est jamais négatif.", [S`Le dénominateur est un petit nombre positif des deux côtés.`], S`\(+\infty\) des deux côtés`),
    q("oblique", S`Laquelle est l'asymptote oblique de \(f(x)=\dfrac{x^2+2x+3}{x}\)?`, choice([S`\(y=x+2\)`, S`\(y=x\)`, S`\(y=x+3\)`, S`\(y=2x\)`], 0),
      "Divise chaque terme par x.", [S`\(x+2+\frac3x\).`], S`\(y=x+2\)`),
    q("compte", S`Combien d'asymptotes verticales \(f(x)=\dfrac{1}{x^2-5x+6}\) a-t-elle?`, num(2),
      "Factorise le dénominateur.", [S`\((x-2)(x-3)\).`], S`\(2\)`),
  ]),

  ...hard([
    ["Une analyse complète", S`Esquisse \(f(x)=\dfrac{x^2-4}{x^2-1}\) : asymptotes, intersections avec les axes, intervalles, extremums et concavité.`,
      [S`Écris \(f(x)=1-\dfrac{3}{x^2-1}\) : asymptotes verticales \(x=\pm1\), horizontale \(y=1\); abscisses à l'origine \(\pm2\), ordonnée à l'origine 4; paire.`, S`\(f'(x)=\dfrac{6x}{(x^2-1)^2}\) : décroissante pour \(x\lt0\), croissante pour \(x\gt0\) (en dehors de \(\pm1\)); minimum relatif \((0,4)\).`, S`\(f''(x)=\dfrac{-6(3x^2+1)}{(x^2-1)^3}\) : concave vers le haut sur \((-1,1)\), concave vers le bas pour \(|x|\gt1\); aucun point d'inflexion.`],
      S`asymptotes \(x=\pm1\), \(y=1\); minimum relatif \((0,4)\); concave vers le haut seulement entre les asymptotes`,
      plane({ view: VA5, curves: rat((x) => (x * x - 4) / (x * x - 1), [-1, 1], VA5), vlines: [{ x: -1, color: "red", dash: true }, { x: 1, color: "red", dash: true }], lines: [{ m: 0, b: 1, color: "red", dash: true }], points: [{ x: 0, y: 4, label: "min (0, 4)", color: "green" }, { x: 2, y: 0, label: "(2, 0)", color: "blue" }, { x: -2, y: 0, label: "(−2, 0)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Concevoir les asymptotes", S`Trouve \(a\) et \(b\) pour que \(f(x)=\dfrac{ax+1}{x+b}\) ait l'asymptote verticale \(x=4\) et l'asymptote horizontale \(y=\tfrac12\). \(f\) est-elle croissante ou décroissante?`,
      [S`Asymptote verticale en \(x=-b\) : \(b=-4\). Asymptote horizontale \(y=a\) : \(a=\tfrac12\).`, S`\(f'(x)=\dfrac{a\cdot b-1}{(x+b)^2}=\dfrac{-2-1}{(x-4)^2}=\dfrac{-3}{(x-4)^2}\lt0\).`],
      S`\(f(x)=\dfrac{0.5x+1}{x-4}\), décroissante sur chaque branche`,
      plane({ view: { xmin: -6, xmax: 12, ymin: -6, ymax: 6 }, curves: rat((x) => (0.5 * x + 1) / (x - 4), [4], { xmin: -6, xmax: 12 }), vlines: [{ x: 4, color: "red", dash: true }], lines: [{ m: 0, b: 0.5, color: "red", dash: true }], points: [{ x: -2, y: 0, label: "(−2, 0)", color: "blue" }, { x: 0, y: -0.25, label: "(0, −¼)", color: "blue" }], step: { x: 1, y: 1 } })],
  ], [
    q("difficile", S`Trouve la valeur minimale de \(f(x)=\dfrac{x^2-4}{x^2+4}\).`, num(-1),
      "f′ = 16x/(x² + 4)² : minimum en x = 0.", [S`\(f(0)=-1\).`], S`\(-1\)`),
    q("difficile", S`L'asymptote oblique de \(f(x)=\dfrac{2x^2+3x-1}{x+1}\) est \(y=mx+b\). Trouve \(b\).`, num(1),
      "Division longue.", [S`\(2x+1-\frac{2}{x+1}\).`], S`\(1\)`),
    q("difficile", S`En quelle valeur de \(x\) la fonction \(f(x)=\dfrac{x}{x^2+16}\) atteint-elle son maximum relatif?`, num(4),
      "Numérateur de f′ : 16 − x².", [S`\(x^2=16\), \(x\gt0\).`], S`\(4\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment savoir si un zéro du dénominateur est une asymptote?", "Si le numérateur n'y est pas nul, c'est une asymptote verticale. Si les deux sont nuls, simplifie : le facteur peut s'annuler et laisser un trou."],
      ["Le graphique peut-il couper une asymptote horizontale?", "Oui — l'asymptote ne décrit que les extrémités. 6x/(x² + 3) coupe y = 0 à l'origine."],
      ["Pourquoi découper le tableau de signes aux asymptotes?", "f et f′ n'y sont pas définies, et leurs signes peuvent changer de part et d'autre de l'asymptote sans passer par 0."],
      ["Quand y a-t-il une asymptote oblique?", "Quand le degré du numérateur dépasse exactement de un celui du dénominateur; le quotient de la division longue est la droite."],
      ["Dans quel ordre procéder pour esquisser?", "Domaine et asymptotes, intersections avec les axes et symétrie, f′ (intervalles, extremums), f″ (concavité, inflexion), puis place les points et relie-les."],
    ],
    summary: [
      "Asymptotes verticales : zéros du dénominateur.",
      "Compare les degrés pour le comportement aux extrémités.",
      "Les signes près de x = a décident de ±∞.",
      "Utilise f′ et f″, en découpant aux asymptotes.",
    ],
    next: "La section 3.5 réunit tous les outils pour des esquisses de courbes complètes.",
  }),
];
