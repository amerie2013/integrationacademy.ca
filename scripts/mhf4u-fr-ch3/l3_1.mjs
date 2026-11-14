// MHF4U-FR 3.1 — Fonction réciproque d'une fonction linéaire : y = 1/(kx + c), asymptotes verticale et horizontale,
// domaine et image, points invariants, croissance/décroissance, comportement près des asymptotes, taux de variation.
// (Ici c est l'ordonnée à l'origine de la droite kx + c, pas un paramètre de transformation : aucune permutation c↔d.)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, rat } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "3.1 Fonction réciproque d'une fonction linéaire";
export const ID = lessonId(3, 1);

const S = String.raw;
const V8 = { xmin: -6, xmax: 6, ymin: -6, ymax: 6 };
export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Fonction réciproque d'une fonction linéaire",
    overview: S`La fonction réciproque de \(f(x)\) est \(y=\dfrac1{f(x)}\). Quand \(f\) est linéaire, sa réciproque est une <strong>fonction rationnelle</strong> dont le graphique a deux branches. Là où \(f(x)=0\), la réciproque n'est pas définie et le graphique a une <strong>asymptote verticale</strong>; quand \(|x|\) augmente, \(f(x)\) devient grand, donc la réciproque s'approche de 0 — une <strong>asymptote horizontale</strong> en \(y=0\). Les points où \(f(x)=\pm1\) sont sur les deux graphiques. Avec ces faits, tu peux esquisser \(y=\dfrac1{kx+c}\) directement à partir de la droite \(y=kx+c\).`,
    goals: [
      "trouver les asymptotes verticale et horizontale de \\(y=\\frac1{kx+c}\\);",
      "donner le domaine et l'image;",
      "utiliser les points invariants et la droite \\(y=f(x)\\) pour esquisser la réciproque;",
      "décrire le comportement près des asymptotes et les intervalles de croissance et de décroissance;",
      "comparer des taux de variation moyens sur différents intervalles.",
    ],
    curriculum: "C2.1 (déterminer les caractéristiques clés des graphiques des fonctions réciproques de fonctions linéaires : domaine, image, coordonnées à l'origine, asymptotes, intervalles de croissance et de décroissance), C2.3 (esquisser le graphique de la fonction réciproque d'une fonction linéaire à l'aide du graphique de la fonction initiale)",
    prior: [
      [S`Zéro de \(f(x)=2x-6\)?`, S`\(x=3\).`],
      [S`Combien vaut \(\frac1{0.01}\)? \(\frac1{-0.01}\)?`, S`\(100\) et \(-100\).`],
      [S`Esquisse \(y=\frac1x\).`, S`Deux branches dans les quadrants 1 et 3; les asymptotes sont les axes.`],
    ],
    words: [
      ["Fonction réciproque", "\\(y=\\frac1{f(x)}\\)", ""],
      ["Asymptote verticale", "une droite \\(x=a\\) dont le graphique s'approche sans jamais l'atteindre", "là où \\(f(a)=0\\)"],
      ["Asymptote horizontale", "une droite \\(y=b\\) dont le graphique s'approche quand \\(|x|\\to\\infty\\)", "\\(y=0\\) ici"],
      ["Point invariant", "un point situé à la fois sur \\(y=f(x)\\) et sur \\(y=\\frac1{f(x)}\\)", "là où \\(f=\\pm1\\)"],
    ],
  }),

  section("📌 De la droite à sa réciproque", S`
  ${plane({ view: V8, curves: [{ f: (x) => x - 2, color: "blue" }, ...rat((x) => 1 / (x - 2), [2], V8)], vlines: [{ x: 2, color: "red", dash: true }], points: [{ x: 3, y: 1, label: "(3, 1)", color: "green" }, { x: 1, y: -1, label: "(1, −1)", color: "green" }], step: { x: 1, y: 1 } }, "y = x − 2 (bleu) et y = 1/(x − 2) (violet) : asymptote x = 2, points invariants (3, 1) et (1, −1).")}
  ${table(["Caractéristique de f(x) = kx + c", "Effet sur y = 1/f(x)"], [
    ["zéro en x = −c/k", "asymptote verticale x = −c/k"],
    ["|f| grand loin du zéro", "y → 0 : asymptote horizontale y = 0"],
    ["f = 1 ou f = −1", "points invariants (même valeur de y)"],
    ["f positive / négative", "1/f a le même signe"],
    ["f croissante (k > 0)", "1/f décroissante sur chaque branche"],
  ])}
  ${keyIdea(S`Pour \(y=\dfrac1{kx+c}\) : asymptote verticale \(x=-\dfrac ck\), asymptote horizontale \(y=0\), domaine \(\{x\in\mathbb R\mid x\ne-\tfrac ck\}\), image \(\{y\in\mathbb R\mid y\ne0\}\). L'ordonnée à l'origine est \(\tfrac1c\) (si \(c\ne0\)); il n'y a jamais d'abscisse à l'origine.`)}`),

  section("📌 Explore", S`<p>Modifie la pente et l'ordonnée à l'origine de la droite. Observe l'asymptote suivre le zéro de la droite, les points invariants verts rester sur les deux graphiques et le tableau montrer des valeurs qui explosent près de l'asymptote.</p>`),

  widget("reciprocalLinear", { init: { k: -1, c: 3 } }),

  section("📌 Comportement près des asymptotes", S`
  <p>Près de l'asymptote verticale, \(f(x)\) est un nombre minuscule, donc \(\frac1{f(x)}\) est énorme — positif d'un côté et négatif de l'autre. Loin de celle-ci, \(f(x)\) est énorme, donc \(\frac1{f(x)}\) est minuscule.</p>
  ${watchOut([
    "L'asymptote se trouve au zéro du DÉNOMINATEUR : 1/(2x + 6) a x = −3, pas x = 6.",
    "La réciproque d'une fonction linéaire ne coupe jamais y = 0 — elle n'a pas d'abscisse à l'origine.",
    "Les points invariants viennent de f(x) = 1 et f(x) = −1, pas de f(x) = 0.",
    "Si f est croissante, 1/f est décroissante (sur chaque branche séparément) — mais elle n'est pas décroissante « partout » de part et d'autre de l'asymptote.",
    "Trace les asymptotes en pointillés; elles ne font pas partie du graphique.",
  ])}`),

  examples([
    ["Esquisser à partir de la droite", S`Esquisse \(f(x)=x-3\) et \(g(x)=\dfrac1{x-3}\).`,
      [S`<b>Idée.</b> Chaque valeur de y de \(g\) est la réciproque de la valeur de y de \(f\). On peut donc lire \(g\) à partir de la droite.`,
        S`<b>Asymptote verticale.</b> \(f(3)=0\), et \(\frac10\) n'a pas de valeur. Donc \(g\) a une AV en \(x=3\).`,
        S`<b>Asymptote horizontale.</b> Quand \(|x|\) augmente, \(|f(x)|\) augmente, donc \(\frac1{f(x)}\) s'approche de 0 : \(y=0\).`,
        S`<b>Points invariants.</b> \(1\) et \(-1\) sont leurs propres réciproques. \(x-3=1\) donne \((4,1)\); \(x-3=-1\) donne \((2,-1)\).`,
        S`<b>Signes.</b> Une réciproque garde le signe, donc \(g\lt0\) pour \(x\lt3\) et \(g>0\) pour \(x>3\).`,
        S`<b>Vérification.</b> \(g(5)=\frac12\) et \(f(5)=2\) : réciproques ✓`],
      S`branches dans les régions \(x\lt3,\ y\lt0\) et \(x>3,\ y>0\)`,
      plane({ view: { xmin: -2, xmax: 8, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x - 3, color: "blue" }, ...rat((x) => 1 / (x - 3), [3], { xmin: -2, xmax: 8 })], vlines: [{ x: 3, color: "red", dash: true }], points: [{ x: 4, y: 1, label: "(4, 1)", color: "green" }, { x: 2, y: -1, label: "(2, −1)", color: "green" }], step: { x: 1, y: 1 } })],
    ["Caractéristiques clés", S`Donne les asymptotes, le domaine, l'image et les coordonnées à l'origine de \(g(x)=\dfrac1{2x+5}\).`,
      [S`<b>Asymptote verticale.</b> \(2x+5=0\) donne \(x=-2.5\). C'est la seule valeur exclue.`,
        S`<b>Asymptote horizontale.</b> Quand \(|x|\) augmente, la fraction s'approche de 0, donc \(y=0\).`,
        S`<b>Domaine et image.</b> \(x\ne-2.5\). Une fraction de numérateur 1 n'est jamais égale à 0, donc \(y\ne0\).`,
        S`<b>Coordonnées à l'origine.</b> \(g(0)=\frac15=0.2\). Il n'y a pas d'abscisse à l'origine, puisque \(g\) n'est jamais nulle.`,
        S`<b>Vérification.</b> \(g(-2)=1\), un point invariant de \(y=2x+5\) ✓`],
      S`AV \(x=-2.5\), AH \(y=0\); \(D : x\ne-2.5\), \(I : y\ne0\); ordonnée à l'origine \(0.2\)`,
      plane({ view: V8, curves: rat((x) => 1 / (2 * x + 5), [-2.5], V8), vlines: [{ x: -2.5, color: "red", dash: true }], points: [{ x: 0, y: 0.2, label: "(0, 0.2)", color: "blue" }], step: { x: 1, y: 1 } })],
    ["Près de l'asymptote", S`Décris \(g(x)=\dfrac1{x+1}\) quand \(x\) s'approche de \(-1\).`,
      [S`<b>Méthode.</b> Prends des valeurs de x de plus en plus proches de \(-1\) de chaque côté.`,
        S`<b>Tableau.</b> ${tv(["\\(x\\)", "\\(-1.1\\)", "\\(-1.01\\)", "\\(-0.99\\)", "\\(-0.9\\)"], ["\\(x+1\\)", "\\(-0.1\\)", "\\(-0.01\\)", "\\(0.01\\)", "\\(0.1\\)"], ["\\(g(x)\\)", "\\(-10\\)", "\\(-100\\)", "\\(100\\)", "\\(10\\)"])}`,
        S`<b>Côté gauche.</b> Le dénominateur est un nombre négatif minuscule, donc \(g\) est grande et négative.`,
        S`<b>Côté droit.</b> Le dénominateur est un nombre positif minuscule, donc \(g\) est grande et positive.`,
        S`<b>Vérification sur le graphique.</b> Les branches partent vers des extrémités opposées le long de \(x=-1\) ✓`],
      S`\(y\to-\infty\) quand \(x\to-1^-\); \(y\to+\infty\) quand \(x\to-1^+\)`,
      plane({ view: { xmin: -5, xmax: 3, ymin: -8, ymax: 8 }, curves: rat((x) => 1 / (x + 1), [-1], { xmin: -5, xmax: 3 }), vlines: [{ x: -1, color: "red", dash: true }], points: [{ x: -0.9, y: 8, label: "monte", color: "amber" }, { x: -1.1, y: -8, label: "descend", color: "amber" }], step: { x: 1, y: 2 } })],
    ["Une droite décroissante", S`Esquisse \(g(x)=\dfrac1{-x+2}\) et décris où elle est croissante.`,
      [S`<b>Asymptote.</b> \(-x+2=0\) donne \(x=2\).`,
        S`<b>Points invariants.</b> \(-x+2=1\) donne \((1,1)\). \(-x+2=-1\) donne \((3,-1)\).`,
        S`<b>Sens de variation.</b> \(f\) décroît. Si une quantité positive diminue, sa réciproque augmente. Donc \(g\) croît partout où \(f\) décroît.`,
        S`<b>Intervalles.</b> L'asymptote sépare le graphique, donc \(g\) est croissante sur chaque branche séparément.`,
        S`<b>Vérification.</b> \(g(0)=\frac12\) et \(g(1)=1\) : croissante ✓`],
      S`AV \(x=2\); croissante sur \((-\infty,2)\) et sur \((2,\infty)\)`,
      plane({ view: V8, curves: [{ f: (x) => -x + 2, color: "blue" }, ...rat((x) => 1 / (2 - x), [2], V8)], vlines: [{ x: 2, color: "red", dash: true }], points: [{ x: 1, y: 1, label: "(1, 1)", color: "green" }, { x: 3, y: -1, label: "(3, −1)", color: "green" }], step: { x: 1, y: 1 } })],
    ["L'équation à partir d'un graphique", S`Un graphique de la forme \(y=\dfrac1{kx+c}\) a son asymptote verticale en \(x=-3\) et passe par \((-1,\tfrac14)\). Trouve l'équation.`,
      [S`<b>Utilise l'asymptote.</b> Le dénominateur vaut 0 en \(x=-3\), donc il a le facteur \(x+3\) : \(kx+c=k(x+3)\).`,
        S`<b>Utilise le point.</b> \(\dfrac1{k(-1+3)}=\dfrac14\), donc \(\dfrac1{2k}=\dfrac14\).`,
        S`<b>Résous.</b> \(2k=4\), donc \(k=2\). Le dénominateur est \(2(x+3)=2x+6\).`,
        S`<b>Vérification.</b> \(\frac1{-2+6}=\frac14\) ✓`],
      S`\(y=\dfrac1{2x+6}\)`,
      plane({ view: V8, curves: rat((x) => 1 / (2 * x + 6), [-3], V8), vlines: [{ x: -3, color: "red", dash: true }], points: [{ x: -1, y: 0.25, label: "(−1, ¼)", color: "blue" }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("asymptote", S`Trouve l'asymptote verticale de \(y=\dfrac1{x+7}\). Donne la valeur de x.`, num(-7),
      "Pose le dénominateur égal à 0.", [S`\(x+7=0\).`], S`\(x=-7\)`),
    q("ordonnée à l'origine", S`Trouve l'ordonnée à l'origine de \(y=\dfrac1{4x-8}\).`, num(-0.125, 0.0001),
      "Remplace x par 0.", [S`\(\frac1{-8}\).`], S`\(-0.125\)`),
    q("point invariant", S`Pour quelle valeur de x a-t-on \(\dfrac1{x-5}=1\)?`, num(6),
      "x − 5 = 1.", [S`\(x=6\).`], S`\(6\)`),
    q("image", S`Quelle est l'image de \(y=\dfrac1{3x+1}\)?`, choice([S`\(\{y\in\mathbb R\mid y\ne0\}\)`, S`\(\{y\in\mathbb R\mid y\ne-\tfrac13\}\)`, S`\(\{y\in\mathbb R\mid y>0\}\)`, S`tous les nombres réels`], 0),
      "La réciproque n'est jamais égale à 0.", ["Asymptote horizontale y = 0."], S`\(y\ne0\)`),
    q("évaluer", S`Évalue \(g(2)\) pour \(g(x)=\dfrac1{3x-4}\).`, num(0.5, 0.0001),
      "Remplace x par 2.", [S`\(\frac1{2}\).`], S`\(0.5\)`),
  ]),

  ...hard([
    ["Trouver la fonction, puis résoudre", S`\(g(x)=\dfrac1{kx+c}\) a son asymptote verticale en \(x=-1\) et passe par \(\left(1,\tfrac12\right)\). Trouve \(g\), puis trouve où \(g(x)=4\).`,
      [S`Zéro en \(-1\) : \(kx+c=k(x+1)\). En \(x=1\) : \(\frac1{2k}=\frac12\Rightarrow k=1\) : \(g(x)=\frac1{x+1}\).`, S`\(\frac1{x+1}=4\Rightarrow x+1=\frac14\Rightarrow x=-\frac34\).`],
      S`\(g(x)=\dfrac1{x+1}\); \(x=-0.75\)`,
      plane({ view: V8, curves: [...rat((x) => 1 / (x + 1), [-1], V8), { f: () => 4, color: "green" }], vlines: [{ x: -1, color: "red", dash: true }], points: [{ x: 1, y: 0.5, label: "(1, ½)", color: "blue" }, { x: -0.75, y: 4, label: "(−0.75, 4)", color: "red" }], step: { x: 1, y: 1 } })],
    ["Taux de variation de 1/x", S`Pour \(g(x)=\dfrac1x\), compare les taux de variation moyens sur \([1,2]\) et \([2,3]\), et montre que le taux de variation instantané en \(x=a\) est \(-\dfrac1{a^2}\).`,
      [S`\([1,2]\) : \(\frac{0.5-1}{1}=-0.5\). \([2,3]\) : \(\frac{\frac13-\frac12}{1}=-\frac16\) : le graphique s'aplatit.`, S`\(\dfrac{\frac1{a+h}-\frac1a}{h}=\dfrac{a-(a+h)}{ha(a+h)}=-\dfrac1{a(a+h)}\to-\dfrac1{a^2}\) quand \(h\to0\).`],
      S`\(-0.5\), \(-\tfrac16\); taux instantané \(-\tfrac1{a^2}\)`],
  ], [
    q("difficile", S`Résous \(\dfrac1{2x-3}=-1\).`, num(1),
      "2x − 3 = −1.", [S`\(2x=2\).`], S`\(1\)`),
    q("difficile", S`Combien de points invariants \(y=x+2\) et \(y=\dfrac1{x+2}\) ont-elles en commun?`, num(2),
      "x + 2 = ±1.", [S`\((-1,1)\) et \((-3,-1)\).`], S`\(2\)`),
    q("difficile", S`Trouve \(k\) pour que \(y=\dfrac1{kx-6}\) ait son asymptote verticale en \(x=3\).`, num(2),
      "3k − 6 = 0.", [S`\(k=2\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi y a-t-il une asymptote verticale au zéro de f?", "La division par 0 n'est pas définie, et près de cette valeur de x, f est minuscule, donc 1/f est énorme — le graphique monte ou descend en flèche le long de la droite."],
      ["Pourquoi y = 0 est-elle l'asymptote horizontale?", "Loin du zéro, |f(x)| est très grand, donc 1/f(x) est très proche de 0, sans jamais lui être égal."],
      ["Pourquoi les points où y = ±1 sont-ils invariants?", "1 et −1 sont leurs propres réciproques : si f(x) = 1, alors 1/f(x) = 1 aussi."],
      ["1/x est-elle décroissante?", "Sur chaque branche, oui. Mais elle n'est pas décroissante sur tout son domaine : g(−1) = −1 < g(1) = 1."],
      ["Comment esquisser rapidement?", "Trace la droite, les asymptotes en pointillés, les points invariants; puis garde le signe de la droite et courbe le graphique vers les asymptotes."],
    ],
    summary: [
      "Zéro de f → asymptote verticale de 1/f.",
      "y = 0 est l'asymptote horizontale.",
      "f = ±1 → points invariants.",
      "Même signe que f; sens de variation opposé (croissante ↔ décroissante).",
    ],
    next: "La section 3.2 étudie la fonction réciproque d'une fonction quadratique.",
  }),
];
