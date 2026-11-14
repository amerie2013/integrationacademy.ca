// MCV4U-FR 1.4 — Limites et continuité : les trois conditions de continuité, discontinuités non essentielles / par saut /
// infinies, lois des limites, limites par factorisation et rationalisation, et choix de paramètres pour assurer la continuité
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane } from "./lib.mjs";
import { lessonId } from "../mcv4u-fr/common.mjs";

export const TITLE = "1.4 Limites et continuité";
export const ID = lessonId(1, 4);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "🔗",
    title: "Limites et continuité",
    overview: S`Une fonction est <strong>continue</strong> en \(x=a\) si tu peux tracer son graphique en passant par ce point sans lever ton crayon. Plus précisément : \(f(a)\) existe, \(\displaystyle\lim_{x\to a}f(x)\) existe, et les deux sont égales. Si l'une de ces conditions n'est pas respectée, le graphique présente une <strong>discontinuité</strong> — un trou, un saut ou une asymptote verticale. En chemin, les <strong>lois des limites</strong> te permettent d'évaluer des limites morceau par morceau, et la factorisation ou la rationalisation règlent les cas \(\frac00\).`,
    goals: [
      "énoncer les trois conditions de continuité en un point;",
      "classer les discontinuités : non essentielles (trous), par saut ou infinies;",
      "utiliser les lois des limites pour évaluer des limites;",
      "évaluer des limites de la forme 0/0 en factorisant ou en rationalisant;",
      "choisir des paramètres pour qu'une fonction définie par parties soit continue.",
    ],
    curriculum: "A1.4 (exemples graphiques et numériques de limites, y compris aux endroits où une fonction n'est pas continue), A1.5 (les limites comme fondement du taux de variation instantané)",
    prior: [
      [S`\(\displaystyle\lim_{x\to2}\frac{x^2-4}{x-2}\)?`, S`\(4\).`],
      [S`Factorise \(x^3-1\).`, S`\((x-1)(x^2+x+1)\).`],
      [S`Asymptote de \(\frac1{x-5}\)?`, S`\(x=5\).`],
    ],
    words: [
      ["Continue en a", "f(a) existe, la limite existe, et elles sont égales", ""],
      ["Discontinuité non essentielle", "un trou : la limite existe mais ≠ f(a) (ou f(a) n'est pas définie)", ""],
      ["Discontinuité par saut", "les limites à gauche et à droite sont différentes", ""],
      ["Discontinuité infinie", "une asymptote verticale", ""],
    ],
  }),

  section("📌 Trois types de discontinuités", S`
  ${table(["Type", "Limite en a", "Peut-on la corriger en redéfinissant f(a)?", "Exemple"], [
    ["non essentielle", "existe", "oui", "\\(\\frac{x^2-1}{x-1}\\) en 1"],
    ["par saut", "n'existe pas (gauche ≠ droite)", "non", "une fonction en escalier définie par parties"],
    ["infinie", "n'existe pas (±∞)", "non", "\\(\\frac1{x-3}\\) en 3"],
  ])}
  ${plane({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 6 }, curves: [{ f: (x) => x + 1, a: -4, b: -1.03, color: "violet" }, { f: (x) => x + 1, a: -0.97, b: 0.98, color: "violet" }, { f: (x) => 3, a: 1, b: 2.85, color: "violet" }, { f: (x) => 1 / (x - 3), a: 3.15, b: 6, color: "violet" }], vlines: [{ x: 3, color: "red", dash: true }], points: [{ x: -1, y: 0, label: "trou", color: "amber", open: true }, { x: 1, y: 2, label: "saut", color: "amber", open: true }, { x: 1, y: 3, color: "violet" }], step: { x: 1, y: 1 } }, "Un trou en x = −1, un saut en x = 1 et une discontinuité infinie en x = 3.")}
  ${keyIdea(S`<strong>Lois des limites.</strong> Si \(\lim f\) et \(\lim g\) existent : la limite d'une somme, d'une différence, d'un produit ou d'un multiple constant est la somme, la différence, le produit ou le multiple des limites; la limite d'un quotient est le quotient des limites si la limite du dénominateur n'est pas 0; et \(\lim[f(x)]^n=[\lim f(x)]^n\). On peut donc évaluer les polynômes (et les fonctions rationnelles là où le dénominateur ≠ 0) par substitution.`)}`),

  section("📌 Explore", S`<p>Ajuste \(k\) et \(m\) jusqu'à ce que les deux parties se rejoignent en \(x=1\). La table vérifie les trois conditions de continuité.</p>`),

  widget("continuityLab", { init: { k: 2, m: 1 } }),

  section("📌 Rendre une fonction continue", S`
  <p>Pour une fonction définie par parties, pose les limites à gauche et à droite égales à chaque point de jonction, et assure-toi que la valeur de la fonction en ce point concorde. Chaque point de jonction donne une équation.</p>
  ${watchOut([
    "Une fonction peut avoir une limite en a et quand même être discontinue en a (cas non essentiel).",
    "Vérifie les trois conditions; il ne suffit pas que f(a) existe.",
    "La loi du quotient ne s'applique pas quand la limite du dénominateur est 0 — simplifie d'abord.",
    "À un point de jonction, utilise la partie qui inclut l'extrémité pour trouver f(a).",
    "Les polynômes sont continus partout; les fonctions rationnelles sont continues partout où le dénominateur ≠ 0.",
  ])}`),

  examples([
    ["Une discontinuité non essentielle", S`La fonction \(f(x)=\dfrac{x^2-1}{x-1}\) est-elle continue en \(x=1\)? Comment peut-on la rendre continue?`,
      [S`\(f(1)\) n'est pas définie, donc la fonction n'est pas continue.`, S`\(\lim_{x\to1}\frac{(x-1)(x+1)}{x-1}=\lim_{x\to1}(x+1)=2\).`, S`En définissant \(f(1)=2\), on bouche le trou.`],
      S`non essentielle; définir \(f(1)=2\)`,
      plane({ view: { xmin: -2, xmax: 4, ymin: -1, ymax: 5 }, curves: [{ f: (x) => x + 1, a: -2, b: 0.97, color: "violet" }, { f: (x) => x + 1, a: 1.03, b: 4, color: "violet" }], points: [{ x: 1, y: 2, label: "(1, 2) trou", color: "amber", open: true }], step: { x: 1, y: 1 } })],
    ["Choisir k pour la continuité", S`Trouve \(k\) pour que \(f(x)=2x+1\) pour \(x\le2\) et \(f(x)=x^2+k\) pour \(x>2\) soit continue.`,
      [S`Limite à gauche et \(f(2)\) : \(2(2)+1=5\). Limite à droite : \(4+k\).`, S`\(4+k=5\Rightarrow k=1\).`],
      S`\(k=1\)`,
      plane({ view: { xmin: -1, xmax: 4, ymin: -1, ymax: 18 }, curves: [{ f: (x) => 2 * x + 1, a: -1, b: 2, color: "violet" }, { f: (x) => x * x + 1, a: 2, b: 4, color: "green" }], points: [{ x: 2, y: 5, label: "(2, 5)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Lois des limites", S`Évalue \(\displaystyle\lim_{x\to2}\dfrac{x^3+1}{x+2}\) et nomme les lois utilisées.`,
      [S`La limite du dénominateur est \(4\ne0\), donc la loi du quotient s'applique.`, S`Lois de la somme et de la puissance : \(\lim(x^3+1)=8+1=9\); \(\lim(x+2)=4\).`],
      S`\(\tfrac94=2.25\)`],
    ["Factoriser un polynôme du troisième degré", S`Évalue \(\displaystyle\lim_{x\to-2}\dfrac{x^3+8}{x+2}\).`,
      [S`Somme de cubes : \(x^3+8=(x+2)(x^2-2x+4)\).`, S`\(\lim_{x\to-2}(x^2-2x+4)=4+4+4\).`],
      S`\(12\)`],
    ["Classer chaque discontinuité", S`Classe les discontinuités de \(f(x)=\dfrac{x-2}{x^2-4}\).`,
      [S`\(f(x)=\frac{x-2}{(x-2)(x+2)}=\frac1{x+2}\) pour \(x\ne2\).`, S`En \(x=2\) : la limite \(\frac14\) existe, \(f(2)\) n'est pas définie → non essentielle. En \(x=-2\) : \(\frac1{x+2}\to\pm\infty\) → infinie.`],
      S`non essentielle en 2 (trou en \((2,\tfrac14)\)); infinie en \(-2\)`,
      plane({ view: { xmin: -6, xmax: 4, ymin: -4, ymax: 4 }, curves: [{ f: (x) => 1 / (x + 2), a: -6, b: -2.25, color: "violet" }, { f: (x) => 1 / (x + 2), a: -1.75, b: 1.97, color: "violet" }, { f: (x) => 1 / (x + 2), a: 2.03, b: 4, color: "violet" }], vlines: [{ x: -2, color: "red", dash: true }], points: [{ x: 2, y: 0.25, label: "trou (2, ¼)", color: "amber", open: true }], step: { x: 1, y: 1 } })],
  ]),

  practice([
    q("factoriser", S`Évalue \(\displaystyle\lim_{x\to3}\dfrac{x^2-2x-3}{x-3}\).`, num(4),
      "Factorise le numérateur.", [S`\((x-3)(x+1)\Rightarrow x+1\to4\).`], S`\(4\)`),
    q("continuité", S`Trouve \(k\) pour que \(f(x)=kx+1\) pour \(x\lt2\) et \(f(x)=x^2-1\) pour \(x\ge2\) soit continue.`, num(1),
      "Fais concorder les valeurs en x = 2.", [S`\(2k+1=3\).`], S`\(1\)`),
    q("classer", S`Quel type de discontinuité \(y=\dfrac1{x-5}\) a-t-elle en \(x=5\)?`, choice(["infinie", "non essentielle", "par saut", "aucune"], 0),
      "Que se passe-t-il près de x = 5?", ["Une asymptote verticale."], "infinie"),
    q("cubique", S`Évalue \(\displaystyle\lim_{x\to1}\dfrac{x^3-1}{x-1}\).`, num(3),
      "Différence de cubes.", [S`\(x^2+x+1\to3\).`], S`\(3\)`),
    q("valeur absolue", S`La fonction \(f(x)=|x|\) est-elle continue en \(x=0\)?`, choice(["oui", "non"], 0),
      "Vérifie les trois conditions.", [S`\(f(0)=0\) et les deux limites (à gauche et à droite) valent 0.`], "oui"),
  ]),

  ...hard([
    ["Deux points de jonction", S`Trouve \(a\) et \(b\) pour que \(f(x)=ax+1\) pour \(x\lt1\), \(f(x)=x^2+b\) pour \(1\le x\lt3\) et \(f(x)=2x+5\) pour \(x\ge3\) soit continue partout.`,
      [S`En \(x=3\) : \(9+b=2(3)+5=11\Rightarrow b=2\).`, S`En \(x=1\) : \(a+1=1+b=3\Rightarrow a=2\).`],
      S`\(a=2\), \(b=2\)`,
      plane({ view: { xmin: -2, xmax: 5, ymin: -3, ymax: 16 }, curves: [{ f: (x) => 2 * x + 1, a: -2, b: 1, color: "violet" }, { f: (x) => x * x + 2, a: 1, b: 3, color: "green" }, { f: (x) => 2 * x + 5, a: 3, b: 5, color: "blue" }], points: [{ x: 1, y: 3, label: "(1, 3)", color: "red" }, { x: 3, y: 11, label: "(3, 11)", color: "red" }], step: { x: 1, y: 2 } })],
    ["Rationaliser, puis réparer", S`Évalue \(\displaystyle\lim_{x\to0}\dfrac{\sqrt{x+4}-2}{x}\), et définis \(g(0)\) pour que \(g(x)=\dfrac{\sqrt{x+4}-2}{x}\) soit continue en 0.`,
      [S`Multiplie par \(\frac{\sqrt{x+4}+2}{\sqrt{x+4}+2}\) : \(\frac{x}{x(\sqrt{x+4}+2)}=\frac1{\sqrt{x+4}+2}\to\frac14\).`, S`Définis \(g(0)=\frac14\).`],
      S`limite \(\tfrac14\); poser \(g(0)=\tfrac14\)`],
  ], [
    q("difficile", S`Évalue \(\displaystyle\lim_{x\to2}\dfrac{x^4-16}{x-2}\).`, num(32),
      "x⁴ − 16 = (x − 2)(x + 2)(x² + 4).", [S`\((4)(8)\).`], S`\(32\)`),
    q("difficile", S`\(f(x)=\dfrac{x^2-9}{x-3}\) pour \(x\ne3\) et \(f(3)=b\). Trouve \(b\) pour que la fonction soit continue.`, num(6),
      "La limite en 3.", [S`\(x+3\to6\).`], S`\(6\)`),
    q("difficile", S`Évalue \(\displaystyle\lim_{x\to0}\dfrac{(x+1)^2-1}{x}\).`, num(2),
      "Développe.", [S`\(\frac{x^2+2x}{x}=x+2\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Quelles sont les trois conditions de continuité en a?", "f(a) est définie, lim x→a f(x) existe, et lim x→a f(x) = f(a)."],
      ["Quelles discontinuités peut-on éliminer?", "Seulement les trous, où la limite existe : on redéfinit f(a) comme étant la limite."],
      ["Quand puis-je simplement substituer pour trouver une limite?", "Quand la fonction est continue en a — toujours pour les polynômes, et pour les fonctions rationnelles quand le dénominateur n'est pas 0."],
      ["Pourquoi les lois des limites ne s'appliquent-elles pas à 0/0?", "La loi du quotient exige que la limite du dénominateur soit non nulle; 0/0 doit d'abord être simplifié."],
      ["Pourquoi la continuité est-elle importante pour les dérivées?", "Une fonction doit être continue en un point pour y avoir une tangente; la leçon 1.5 montre que la continuité seule ne suffit pas."],
    ],
    summary: [
      "Continue : f(a) = lim x→a f(x).",
      "Discontinuités non essentielles, par saut, infinies.",
      "Les lois des limites permettent de substituer là où la fonction est continue.",
      "Fonction définie par parties : fais concorder les valeurs à chaque jonction.",
    ],
    next: "la leçon 1.5 définit la dérivée.",
  }),
];
