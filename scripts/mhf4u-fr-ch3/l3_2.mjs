// MHF4U-FR 3.2 — Fonction réciproque d'une fonction quadratique : y = 1/f(x) lorsque f a deux, un ou aucun zéro;
// asymptotes verticales, point tournant à partir du sommet, domaine et image, esquisse à partir de la parabole.
// (h, k désignent ici le sommet de la parabole; aucune permutation c↔d.)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, rat } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "3.2 Fonction réciproque d'une fonction quadratique";
export const ID = lessonId(3, 2);

const S = String.raw;
const V = { xmin: -5, xmax: 5, ymin: -3, ymax: 3 };
export const blocks = () => [
  intro({
    icon: "🌉",
    title: "Fonction réciproque d'une fonction quadratique",
    overview: S`Une parabole peut couper l'axe des x deux fois, le toucher une fois ou ne pas l'atteindre. Sa réciproque \(y=\dfrac1{f(x)}\) change de forme dans chaque cas : chaque zéro de \(f\) devient une asymptote verticale, et le sommet de la parabole devient un point tournant de la réciproque dont la valeur de y est \(\frac1{k}\). Loin des zéros, la parabole est énorme, donc sa réciproque s'approche de l'asymptote horizontale \(y=0\).`,
    goals: [
      "trouver les asymptotes verticales à partir des zéros d'une fonction quadratique;",
      "trouver le point tournant de \\(\\frac1{f(x)}\\) à partir du sommet de \\(f\\);",
      "reconnaître les trois formes : deux, une ou aucune asymptote verticale;",
      "donner le domaine, l'image et les intervalles de croissance et de décroissance;",
      "esquisser \\(\\frac1{f(x)}\\) à partir du graphique de \\(f\\).",
    ],
    curriculum: "C2.1 (caractéristiques clés des fonctions réciproques de fonctions quadratiques), C2.3 (esquisser le graphique de la fonction réciproque d'une fonction quadratique à l'aide de la fonction initiale)",
    prior: [
      [S`Zéros de \(x^2-x-6\)?`, S`\((x-3)(x+2)\) : \(3\) et \(-2\).`],
      [S`Sommet de \(y=(x-1)^2-4\)?`, S`\((1,-4)\).`],
      [S`Discriminant de \(x^2+2x+5\)?`, S`\(-16\) : aucun zéro réel.`],
    ],
    words: [
      ["Point tournant", "un maximum ou un minimum local", "à partir du sommet de f"],
      ["Zéro double", "un zéro d'ordre 2 : une seule asymptote, branches du même côté", "\\(\\frac1{(x-1)^2}\\)"],
      ["Bornée", "image limitée vers le haut et vers le bas", "\\(0\\lt y\\le1\\)"],
      ["Symétrie", "1/f a le même axe de symétrie que la parabole", ""],
    ],
  }),

  section("📌 Trois formes", S`
  ${table(["Zéros de f", "Asymptotes verticales", "Forme de 1/f", "Exemple"], [
    ["deux", "deux", "trois branches; celle du milieu a un max ou un min", "\\(\\frac1{x^2-4}\\)"],
    ["un (double)", "une", "deux branches du même côté de y = 0", "\\(\\frac1{(x-1)^2}\\)"],
    ["aucun", "aucune", "une seule bosse lisse, bornée", "\\(\\frac1{x^2+1}\\)"],
  ])}
  ${plane({ view: V, curves: [{ f: (x) => x * x - 1, color: "blue" }, ...rat((x) => 1 / (x * x - 1), [-1, 1], V)], vlines: [{ x: -1, color: "red", dash: true }, { x: 1, color: "red", dash: true }], points: [{ x: 0, y: -1, label: "(0, −1) : sommet et point tournant", color: "amber" }], step: { x: 1, y: 1 } }, "f(x) = x² − 1 (bleu) et 1/f (violet) : asymptotes x = ±1; le sommet (0, −1) est invariant.")}
  ${keyIdea(S`Si le sommet de \(f\) est \((h,k)\) avec \(k\ne0\), alors \(\frac1f\) a un point tournant en \(\left(h,\tfrac1k\right)\) — un maximum là où \(f\) a un minimum (et inversement). L'asymptote horizontale est toujours \(y=0\).`)}`),

  section("📌 Explore", S`<p>Déplace le sommet de la parabole vers le haut et vers le bas. Observe le nombre d'asymptotes verticales passer de deux à une, puis à aucune, et suis le point tournant ambre.</p>`),

  widget("reciprocalQuadratic", { init: { a: 1, h: 1, k: -2 } }),

  section("📌 Croissance et décroissance", S`
  <p>Là où \(f\) est croissante, \(\frac1f\) est décroissante, et inversement — intervalle par intervalle, les asymptotes et le sommet servant de bornes.</p>
  ${watchOut([
    "Factorise d'abord : les asymptotes sont les zéros de la fonction quadratique, pas ses coefficients.",
    "La valeur de y du point tournant est 1/k, pas k.",
    "Aucun zéro ne veut pas dire aucun graphique : 1/(x² + 1) est une seule bosse.",
    "Avec un zéro double, les deux branches sont du même côté de l'axe des x.",
    "L'image de 1/(x² + c) pour c > 0 est 0 < y ≤ 1/c — inclus le maximum.",
  ])}`),

  examples([
    ["Deux asymptotes verticales", S`Esquisse \(g(x)=\dfrac1{x^2-4}\).`,
      [S`<b>Asymptotes.</b> \(x^2-4=(x-2)(x+2)\), qui vaut 0 en \(x=\pm2\). L'AH est \(y=0\).`,
        S`<b>Point tournant.</b> La parabole \(y=x^2-4\) a pour sommet \((0,-4)\). Sa réciproque donne \(\left(0,-\tfrac14\right)\).`,
        S`<b>Pourquoi un maximum?</b> Sur la branche du milieu, la plus petite valeur de la parabole, \(-4\), donne la réciproque la plus proche de 0, donc la valeur \(-\tfrac14\) y est la plus élevée.`,
        S`<b>Signes.</b> ${tv(["intervalle", "\\(x\\lt-2\\)", "\\(-2\\lt x\\lt2\\)", "\\(x>2\\)"], ["\\(x^2-4\\)", "+", "−", "+"], ["\\(g\\)", "+", "−", "+"])}`,
        S`<b>Vérification.</b> \(g(3)=\frac15>0\) ✓ et \(g(1)=-\frac13\lt0\) ✓`],
      S`trois branches; max local \(\left(0,-\tfrac14\right)\)`,
      plane({ view: V, curves: rat((x) => 1 / (x * x - 4), [-2, 2], V), vlines: [{ x: -2, color: "red", dash: true }, { x: 2, color: "red", dash: true }], points: [{ x: 0, y: -0.25, label: "(0, −¼)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Aucune asymptote verticale", S`Décris \(g(x)=\dfrac1{x^2+1}\).`,
      [S`<b>Asymptotes.</b> \(x^2+1\ge1\) n'est jamais égal à 0, donc il n'y a pas d'AV, et le domaine est \(\mathbb R\). Quand \(|x|\) augmente, \(g\to0\), donc l'AH est \(y=0\).`,
        S`<b>Maximum.</b> Le dénominateur est le plus petit en \(x=0\), où il vaut 1. Donc \(g\) y est la plus grande : \((0,1)\).`,
        S`<b>Image.</b> \(g\) est toujours positive, atteint 1 et s'approche de 0 sans l'atteindre : \(0\lt y\le1\).`,
        S`<b>Vérification.</b> \(g(1)=\frac12\) et \(g(-1)=\frac12\) : symétrique ✓`],
      S`domaine \(\mathbb R\), image \(0\lt y\le1\)`,
      plane({ view: { xmin: -5, xmax: 5, ymin: -0.5, ymax: 1.5 }, curves: [{ f: (x) => 1 / (x * x + 1), color: "violet" }], points: [{ x: 0, y: 1, label: "(0, 1)", color: "amber" }], step: { x: 1, y: 0.5 } })],
    ["Un zéro double", S`Décris \(g(x)=\dfrac1{(x-1)^2}\).`,
      [S`<b>Asymptotes.</b> Le dénominateur vaut 0 seulement en \(x=1\), donc il y a une seule AV. L'AH est \(y=0\).`,
        S`<b>Signe.</b> Un carré est positif pour \(x\ne1\), donc \(g>0\) partout, et les deux côtés de l'AV montent.`,
        S`<b>Sens de variation.</b> Pour \(x\lt1\), le dénominateur rapetisse quand \(x\) s'approche de 1, donc \(g\) est croissante. Pour \(x>1\), elle est décroissante.`,
        S`<b>Vérification.</b> \(g(0)=1\), \(g(2)=1\), \(g(3)=\frac14\) ✓`],
      S`AV \(x=1\), AH \(y=0\); image \(y>0\)`,
      plane({ view: { xmin: -3, xmax: 5, ymin: -1, ymax: 5 }, curves: rat((x) => 1 / (x - 1) ** 2, [1], { xmin: -3, xmax: 5 }), vlines: [{ x: 1, color: "red", dash: true }], step: { x: 1, y: 1 } })],
    ["Factoriser, puis trouver le point tournant", S`Trouve les asymptotes et le point tournant de \(g(x)=\dfrac1{x^2-2x-3}\).`,
      [S`<b>Factorise.</b> \(x^2-2x-3=(x-3)(x+1)\). Les AV sont donc \(x=-1\) et \(x=3\).`,
        S`<b>Sommet du dénominateur.</b> L'axe est à mi-chemin entre les zéros : \(x=1\). Alors \(f(1)=1-2-3=-4\).`,
        S`<b>Point tournant.</b> La réciproque de \(-4\) est \(-\frac14\). C'est un maximum local sur la branche du milieu.`,
        S`<b>Vérification.</b> \(g(0)=-\frac13\) et \(g(2)=-\frac13\) sont tous deux sous \(-\frac14\) ✓`],
      S`AV \(x=-1, 3\); max local \(\left(1,-\tfrac14\right)\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -3, ymax: 3 }, curves: rat((x) => 1 / ((x - 3) * (x + 1)), [-1, 3], { xmin: -4, xmax: 6 }), vlines: [{ x: -1, color: "red", dash: true }, { x: 3, color: "red", dash: true }], points: [{ x: 1, y: -0.25, label: "(1, −¼)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Une réciproque négative", S`Donne l'image de \(g(x)=-\dfrac1{x^2+4}\).`,
      [S`<b>Départ.</b> \(x^2\ge0\), donc \(x^2+4\ge4\).`,
        S`<b>Réciproque.</b> Prendre la réciproque de nombres positifs inverse l'ordre : \(0\lt\frac1{x^2+4}\le\frac14\).`,
        S`<b>Négatif.</b> Multiplier par \(-1\) inverse l'ordre de nouveau : \(-\frac14\le g(x)\lt0\).`,
        S`<b>Vérification.</b> \(g(0)=-\frac14\), le minimum. \(g(10)\approx-0.0096\), proche de 0 ✓`],
      S`\(-\tfrac14\le y\lt0\); minimum \(\left(0,-\tfrac14\right)\)`,
      plane({ view: { xmin: -6, xmax: 6, ymin: -0.4, ymax: 0.1 }, curves: [{ f: (x) => -1 / (x * x + 4), color: "violet" }], points: [{ x: 0, y: -0.25, label: "(0, −1/4)", color: "amber" }], step: { x: 1, y: 0.05 } })],
  ]),

  practice([
    q("asymptotes", S`Combien d'asymptotes verticales \(y=\dfrac1{x^2-9}\) a-t-elle?`, num(2),
      "Zéros de x² − 9.", [S`\(x=\pm3\).`], S`\(2\)`),
    q("maximum", S`Quelle est la valeur maximale de \(y=\dfrac1{x^2+2}\)?`, num(0.5, 0.0001),
      "Le plus petit dénominateur est 2.", [S`\(\frac12\) en \(x=0\).`], S`\(0.5\)`),
    q("ordonnée à l'origine", S`Trouve l'ordonnée à l'origine de \(y=\dfrac1{x^2-x-6}\) (4 décimales).`, num(-0.1667, 0.0005),
      "Remplace x par 0.", [S`\(\frac1{-6}\).`], S`\(-0.1667\)`),
    q("forme", S`Laquelle décrit le graphique de \(y=\dfrac1{x^2+5}\)?`, choice(["aucune asymptote verticale; une seule bosse", "deux asymptotes verticales", "une asymptote verticale", "une asymptote verticale en x = −5"], 0),
      "x² + 5 n'est jamais égal à 0.", ["Toujours positif."], "aucune asymptote verticale"),
    q("point tournant", S`Pour quelle valeur de x se trouve le point tournant de \(y=\dfrac1{x^2-6x+5}\)?`, num(3),
      "Même x que le sommet de la parabole.", [S`\(x=-\frac{b}{2a}=3\).`], S`\(3\)`),
  ]),

  ...hard([
    ["Construire à partir des asymptotes", S`\(g(x)=\dfrac1{x^2+bx+c}\) a les asymptotes verticales \(x=-1\) et \(x=4\). Trouve \(b\), \(c\) et le point tournant.`,
      [S`\((x+1)(x-4)=x^2-3x-4\) : \(b=-3\), \(c=-4\).`, S`Sommet de \(f\) en \(x=1.5\) : \(f(1.5)=2.25-4.5-4=-6.25\).`, S`Point tournant \(\left(1.5,\ \frac1{-6.25}\right)=(1.5,-0.16)\), un maximum local.`],
      S`\(b=-3\), \(c=-4\); max local \((1.5,-0.16)\)`,
      plane({ view: { xmin: -3, xmax: 6, ymin: -2, ymax: 2 }, curves: rat((x) => 1 / (x * x - 3 * x - 4), [-1, 4], { xmin: -3, xmax: 6 }), vlines: [{ x: -1, color: "red", dash: true }, { x: 4, color: "red", dash: true }], points: [{ x: 1.5, y: -0.16, label: "(1.5, −0.16)", color: "amber" }], step: { x: 1, y: 0.5 } })],
    ["Combien d'asymptotes?", S`Pour quelles valeurs de \(k\) la fonction \(y=\dfrac1{x^2+k}\) a-t-elle aucune, une ou deux asymptotes verticales? Donne l'image quand \(k=4\).`,
      [S`\(x^2=-k\) : aucune solution pour \(k>0\), une (\(x=0\)) pour \(k=0\), deux pour \(k\lt0\).`, S`\(k=4\) : \(x^2+4\ge4\), donc \(0\lt y\le\frac14\).`],
      S`aucune pour \(k>0\); une pour \(k=0\); deux pour \(k\lt0\); image \(0\lt y\le\tfrac14\)`],
  ], [
    q("difficile", S`Quelle est la valeur maximale de \(y=\dfrac1{x^2-4x+8}\)?`, num(0.25, 0.0001),
      "Complète le carré.", [S`\((x-2)^2+4\ge4\).`], S`\(0.25\)`),
    q("difficile", S`Combien d'asymptotes verticales \(y=\dfrac1{x^2+6x+9}\) a-t-elle?`, num(1),
      "Carré parfait.", [S`\((x+3)^2\) : une seule, en \(x=-3\).`], S`\(1\)`),
    q("difficile", S`Trouve la valeur de y du point tournant de \(y=\dfrac1{2x^2-8x+3}\).`, num(-0.2, 0.0001),
      "Sommet de la parabole en x = 2.", [S`\(f(2)=8-16+3=-5\Rightarrow\frac1{-5}\).`], S`\(-0.2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi le sommet devient-il un point tournant?", "Là où f atteint sa plus petite valeur positive (ou sa plus grande valeur négative), 1/f atteint sa plus grande (ou sa plus petite) valeur — l'extremum s'inverse."],
      ["Pourquoi les deux branches de 1/(x − 1)² sont-elles positives?", "Un carré n'est jamais négatif, donc la réciproque est positive partout où elle est définie."],
      ["La réciproque d'une fonction quadratique peut-elle couper l'axe des x?", "Non : 1/f n'est jamais égale à 0."],
      ["Comment trouver l'image?", "Utilise la valeur k du sommet : la valeur au point tournant de la réciproque est 1/k, et y = 0 n'est jamais atteint."],
      ["Qu'est-ce qui reste pareil que pour la réciproque d'une fonction linéaire?", "Zéros → asymptotes, f = ±1 → points invariants, même signe, sens de variation opposé."],
    ],
    summary: [
      "Zéros de f → asymptotes verticales (0, 1 ou 2).",
      "Sommet (h, k) → point tournant (h, 1/k).",
      "y = 0 est l'asymptote horizontale.",
      "Même axe de symétrie que la parabole.",
    ],
    next: "La section 3.3 étudie les fonctions rationnelles y = (ax + b)/(cx + d).",
  }),
];
