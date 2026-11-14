// MHF4U-FR 2.4 — Familles de fonctions polynomiales : y = k(x − r₁)(x − r₂)…, choix de k à partir d'un point, zéros
// d'ordre supérieur, zéros irrationnels sous forme de facteur du second degré, et équations à partir de graphiques
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "2.4 Familles de fonctions polynomiales";
export const ID = lessonId(2, 4);

const S = String.raw;
export const blocks = () => [
  intro({
    icon: "👪",
    title: "Familles de fonctions polynomiales",
    overview: S`Les polynômes qui ont les mêmes zéros forment une <strong>famille</strong> : \(y=k(x-r_1)(x-r_2)(x-r_3)\) donne une courbe différente pour chaque \(k\ne0\), mais toutes coupent l'axe des x aux mêmes endroits. La valeur de \(k\) étire le graphique et détermine son orientation. Pour choisir un membre de la famille, il te faut un renseignement de plus — habituellement un point par lequel passe le graphique.`,
    goals: [
      "écrire l'équation d'une famille de polynômes à partir de ses zéros;",
      "trouver le membre d'une famille qui passe par un point donné;",
      "tenir compte des zéros d'ordre supérieur;",
      "transformer des zéros irrationnels \\(a\\pm\\sqrt b\\) en un facteur du second degré;",
      "déterminer une équation à partir d'un graphique.",
    ],
    curriculum: "C1.7 (déterminer une équation d'une fonction polynomiale à partir de ses zéros et d'un point, en reconnaissant qu'elle appartient à une famille), C1.8 (déterminer l'équation d'une famille de fonctions polynomiales ayant des zéros donnés)",
    prior: [
      [S`Quels sont les zéros de \((x+2)(x-5)\)?`, S`\(-2\) et \(5\).`],
      [S`Développe \((x-(1+\sqrt3))(x-(1-\sqrt3))\).`, S`\((x-1)^2-3=x^2-2x-2\).`],
      [S`Quel est l'effet de \(k=-2\) sur \(y=x^2\)?`, S`Un étirement de facteur 2 et une réflexion par rapport à l'axe des x.`],
    ],
    words: [
      ["Famille de fonctions", "des fonctions qui ont une caractéristique commune, ici les mêmes zéros", ""],
      ["Paramètre k", "l'étirement ou la réflexion qui varie à l'intérieur de la famille", ""],
      ["Membre", "une fonction de la famille, fixée par une valeur de k", ""],
      ["Zéros conjugués", "\\(a+\\sqrt b\\) et \\(a-\\sqrt b\\), toujours ensemble lorsque les coefficients sont entiers", ""],
    ],
  }),

  section("📌 Un ensemble de zéros, plusieurs courbes", S`
  ${plane({ view: { xmin: -3, xmax: 4.5, ymin: -16, ymax: 16 }, curves: [{ f: (x) => (x + 1) * (x - 1) * (x - 3), color: "blue" }, { f: (x) => 2 * (x + 1) * (x - 1) * (x - 3), color: "violet" }, { f: (x) => -0.5 * (x + 1) * (x - 1) * (x - 3), color: "red" }, { f: (x) => -2 * (x + 1) * (x - 1) * (x - 3), color: "amber" }], points: [{ x: -1, y: 0, color: "green" }, { x: 1, y: 0, color: "green" }, { x: 3, y: 0, color: "green" }], step: { x: 1, y: 4 } }, "y = k(x + 1)(x − 1)(x − 3) pour k = 1 (bleu), 2 (violet), −½ (rouge), −2 (orange).")}
  ${table(["Renseignement", "Forme de l'équation", "Inconnues restantes"], [
    ["zéros \\(r_1, r_2, r_3\\)", "\\(y=k(x-r_1)(x-r_2)(x-r_3)\\)", "k"],
    ["un zéro d'ordre 2 en r", "inclure \\((x-r)^2\\)", "k"],
    ["zéros \\(a\\pm\\sqrt b\\)", "inclure \\((x-a)^2-b\\)", "k"],
    ["un point de plus (x₀, y₀)", "substituer, résoudre pour k", "aucune : un seul membre"],
  ])}
  ${keyIdea(S`Les zéros fixent la famille; un point supplémentaire fixe le membre. Substitue le point, résous pour \(k\) et écris l'équation finale avec la valeur de \(k\).`)}`),

  section("📌 Exploration", S`<p>Déplace les trois zéros : toutes les courbes grises les conservent. Passe au mode « passer par un point » et fais glisser le point — l'outil trouve \(k\) pour toi.</p>`),

  widget("polyFamily", { init: { zeros: [-3, 1, 2], k: 0.5 } }),

  section("📌 Zéros irrationnels et ordres", S`
  <p>Si \(2+\sqrt5\) est un zéro d'un polynôme à coefficients entiers, alors \(2-\sqrt5\) en est un aussi. Ensemble, ils donnent le facteur \((x-2)^2-5=x^2-4x-1\). Un zéro d'ordre 2 fournit son facteur deux fois.</p>
  ${watchOut([
    "Un zéro en −4 donne (x + 4).",
    "k multiplie tout le produit — ne développe qu'après avoir trouvé k (ou pas du tout).",
    "Un point SUR l'axe des x, à un zéro, ne peut pas déterminer k : tous les membres passent par ce point.",
    "Compte le degré : la somme des ordres lui est égale.",
    "Les zéros irrationnels vont par paires conjuguées; écris leur produit, et non deux facteurs compliqués.",
  ])}`),

  examples([
    ["Écrire une famille", S`Écris la famille de fonctions polynomiales de degré 3 ayant pour zéros \(-1\), \(2\) et \(4\), et donne deux membres.`,
      [S`<b>Facteurs.</b> Chaque zéro \(b\) donne un facteur \(x-b\) : \((x+1)(x-2)(x-4)\).`,
        S`<b>Famille.</b> Tout multiple non nul a les mêmes zéros : \(y=k(x+1)(x-2)(x-4)\), \(k\ne0\).`,
        S`<b>Membres.</b> \(k=2\) donne \(y=2(x+1)(x-2)(x-4)\). \(k=-1\) donne \(y=-(x+1)(x-2)(x-4)\).`,
        S`<b>Vérifie sur le graphique.</b> Les deux passent par les trois mêmes zéros. Le second est réfléchi, puisque \(k\lt0\) ✓`],
      S`\(y=k(x+1)(x-2)(x-4)\)`,
      plane({ view: { xmin: -2, xmax: 5, ymin: -20, ymax: 20 }, curves: [{ f: (x) => 2 * (x + 1) * (x - 2) * (x - 4), color: "violet" }, { f: (x) => -(x + 1) * (x - 2) * (x - 4), color: "red" }], points: [{ x: -1, y: 0, color: "green" }, { x: 2, y: 0, color: "green" }, { x: 4, y: 0, color: "green" }], step: { x: 1, y: 4 } })],
    ["Le membre qui passe par un point", S`Trouve le membre de \(y=k(x+1)(x-2)(x-4)\) qui passe par \((1,12)\).`,
      [S`<b>Idée.</b> Les zéros sont fixés, donc un point de plus détermine \(k\).`,
        S`<b>Substitue.</b> \(12=k(1+1)(1-2)(1-4)=k(2)(-1)(-3)\).`,
        S`<b>Résous.</b> \(12=6k\), donc \(k=2\).`,
        S`<b>Vérifie.</b> \(2(2)(-1)(-3)=12\) ✓`],
      S`\(y=2(x+1)(x-2)(x-4)\)`,
      plane({ view: { xmin: -2, xmax: 5, ymin: -20, ymax: 20 }, curves: [{ f: (x) => 2 * (x + 1) * (x - 2) * (x - 4), color: "violet" }], points: [{ x: 1, y: 12, label: "(1, 12)", color: "amber" }, { x: -1, y: 0, color: "green" }, { x: 2, y: 0, color: "green" }, { x: 4, y: 0, color: "green" }], step: { x: 1, y: 4 } })],
    ["Zéros irrationnels et zéro double", S`Une fonction polynomiale de degré 4 a pour zéros \(\pm\sqrt3\) et un zéro double en \(1\), et son ordonnée à l'origine est \(-6\). Trouve son équation.`,
      [S`<b>Combine les conjugués.</b> \((x-\sqrt3)(x+\sqrt3)=x^2-3\) : une différence de carrés fait disparaître la racine carrée.`,
        S`<b>Famille.</b> Un zéro double donne un facteur au carré : \(y=k(x^2-3)(x-1)^2\).`,
        S`<b>Utilise l'ordonnée à l'origine.</b> En \(x=0\) : \(k(-3)(1)=-3k=-6\), donc \(k=2\).`,
        S`<b>Vérifie.</b> Degré \(2+2=4\) ✓. Le graphique rebondit en 1 et coupe l'axe en \(\pm\sqrt3\) ✓`],
      S`\(y=2(x^2-3)(x-1)^2\)`,
      plane({ view: { xmin: -2.5, xmax: 2.5, ymin: -8, ymax: 6 }, curves: [{ f: (x) => 2 * (x * x - 3) * (x - 1) ** 2, color: "violet" }], points: [{ x: -Math.sqrt(3), y: 0, label: "−√3", color: "green" }, { x: 1, y: 0, label: "1", color: "amber" }, { x: Math.sqrt(3), y: 0, label: "√3", color: "green" }, { x: 0, y: -6, label: "(0, −6)", color: "blue" }], step: { x: 0.5, y: 2 } })],
    ["À partir d'un graphique", S`La fonction de degré 3 illustrée coupe l'axe des x en \(-3\), le touche en \(1\) et a une ordonnée à l'origine de \(-6\). Trouve son équation.`,
      [S`<b>Lis les ordres.</b> Couper l'axe signifie un ordre impair, donc \(-3\) est d'ordre 1. Toucher l'axe signifie un ordre pair, donc \(1\) est d'ordre 2. Leur somme est 3, comme il se doit pour un degré 3.`,
        S`<b>Famille.</b> \(y=k(x+3)(x-1)^2\).`,
        S`<b>Utilise l'ordonnée à l'origine.</b> \(k(3)(1)=3k=-6\), donc \(k=-2\).`,
        S`<b>Vérifie.</b> \(k\lt0\) signifie que le graphique va du 2e au 4e quadrant, comme on le voit ✓`],
      S`\(y=-2(x+3)(x-1)^2\)`,
      plane({ view: { xmin: -4, xmax: 2.5, ymin: -14, ymax: 14 }, curves: [{ f: (x) => -2 * (x + 3) * (x - 1) ** 2, color: "violet" }], points: [{ x: -3, y: 0, label: "−3", color: "green" }, { x: 1, y: 0, label: "1", color: "amber" }, { x: 0, y: -6, label: "(0, −6)", color: "blue" }], step: { x: 1, y: 2 } })],
    ["Zéros conjugués 2 ± √5", S`Une fonction de degré 3 a pour zéros \(-1\) et \(2\pm\sqrt5\) et passe par \((1,8)\). Trouve son équation.`,
      [S`<b>Combine les conjugués.</b> \((x-2-\sqrt5)(x-2+\sqrt5)=(x-2)^2-5=x^2-4x-1\).`,
        S`<b>Famille.</b> \(y=k(x+1)(x^2-4x-1)\).`,
        S`<b>Utilise le point.</b> En \(x=1\) : \(k(2)(1-4-1)=-8k=8\), donc \(k=-1\).`,
        S`<b>Vérifie.</b> \(-(2)(-4)=8\) ✓. La formule quadratique appliquée à \(x^2-4x-1\) redonne \(2\pm\sqrt5\) ✓`],
      S`\(y=-(x+1)(x^2-4x-1)\)`,
      plane({ view: { xmin: -2, xmax: 5, ymin: -12, ymax: 12 }, curves: [{ f: (x) => -(x + 1) * (x * x - 4 * x - 1), color: "violet" }], points: [{ x: -1, y: 0, color: "green" }, { x: 2 - Math.sqrt(5), y: 0, color: "green" }, { x: 2 + Math.sqrt(5), y: 0, color: "green" }, { x: 1, y: 8, label: "(1, 8)", color: "blue" }], step: { x: 1, y: 2 } })],
  ]),

  practice([
    q("trouve k", S`\(y=k(x-1)(x+2)(x-3)\) passe par \((2,8)\). Trouve \(k\).`, num(-2),
      "Substitue x = 2, y = 8.", [S`\(k(1)(4)(-1)=-4k=8\).`], S`\(-2\)`),
    q("ordonnée à l'origine", S`Trouve l'ordonnée à l'origine de \(y=3(x+1)(x-2)(x+4)\).`, num(-24),
      "Substitue x = 0.", [S`\(3(1)(-2)(4)\).`], S`\(-24\)`),
    q("appartenance", S`Quelle fonction n'appartient PAS à la famille \(y=k(x-1)(x+3)\)?`, choice([S`\(y=2x^2+4x-6\)`, S`\(y=-x^2-2x+3\)`, S`\(y=x^2-2x-3\)`, S`\(y=0.5x^2+x-1.5\)`], 2),
      "Factorise chacune.", [S`\(x^2-2x-3=(x-3)(x+1)\) : zéros différents.`], S`\(y=x^2-2x-3\)`),
    q("conjugués", S`Écris le facteur du second degré ayant pour zéros \(1\pm\sqrt2\).`, expr("x^2-2x-1"),
      "(x − 1)² − 2.", [S`\(x^2-2x+1-2\).`], S`\(x^2-2x-1\)`),
    q("trouve k", S`La fonction de degré 4 \(y=k(x^2-4)(x^2-1)\) a une ordonnée à l'origine de \(8\). Trouve \(k\).`, num(2),
      "f(0) = 4k.", [S`\(k(-4)(-1)=4k=8\).`], S`\(2\)`),
  ]),

  ...hard([
    ["Une fonction de degré 4 avec des zéros conjugués", S`Écris la famille de fonctions de degré 4 ayant un zéro double en \(-1\) et les zéros \(2\pm\sqrt3\). Trouve le membre qui passe par \((1,-8)\).`,
      [S`\((x-2)^2-3=x^2-4x+1\) : \(y=k(x+1)^2(x^2-4x+1)\).`, S`En \(x=1\) : \(k(4)(1-4+1)=-8k=-8\Rightarrow k=1\).`],
      S`\(y=(x+1)^2(x^2-4x+1)\)`,
      plane({ view: { xmin: -2, xmax: 4.5, ymin: -20, ymax: 10 }, curves: [{ f: (x) => (x + 1) ** 2 * (x * x - 4 * x + 1), color: "violet" }], points: [{ x: -1, y: 0, label: "−1", color: "amber" }, { x: 2 - Math.sqrt(3), y: 0, color: "green" }, { x: 2 + Math.sqrt(3), y: 0, color: "green" }, { x: 1, y: -8, label: "(1, −8)", color: "blue" }], step: { x: 1, y: 5 } })],
    ["Le même membre ou non?", S`Dans la famille \(y=k(x+1)(x-1)(x-3)\), un membre passe par \((0,6)\) et un autre par \((2,-6)\). S'agit-il de fonctions différentes?`,
      [S`\((0,6)\) : \(k(1)(-1)(-3)=3k=6\Rightarrow k=2\).`, S`\((2,-6)\) : \(k(3)(1)(-1)=-3k=-6\Rightarrow k=2\).`, S`Les deux donnent \(k=2\) : c'est la même fonction qui passe par les deux points.`],
      S`non — les deux sont \(y=2(x+1)(x-1)(x-3)\)`],
  ], [
    q("difficile", S`\(y=k(x-2)^2(x+1)\) passe par \((1,-4)\). Trouve \(k\).`, num(-2),
      "Substitue.", [S`\(k(1)(2)=2k=-4\).`], S`\(-2\)`),
    q("difficile", S`Le membre de \(y=k(x^2-5)(x+1)(x-2)\) qui passe par \((1,8)\) a quelle ordonnée à l'origine?`, num(10),
      "Trouve d'abord k.", [S`\(k(-4)(2)(-1)=8k=8\Rightarrow k=1\); \(f(0)=(-5)(1)(-2)=10\).`], S`\(10\)`),
    q("difficile", S`Trouve la somme des zéros de \(y=2(x^2-6x+7)(x+4)\).`, num(2),
      "Les zéros du trinôme sont 3 ± √2.", [S`\((3+\sqrt2)+(3-\sqrt2)+(-4)=2\).`], S`\(2\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi un ensemble de zéros ne suffit-il pas?", "Multiplier par n'importe quel k ≠ 0 conserve tous les zéros, donc une infinité de polynômes les partagent."],
      ["Quel point dois-je utiliser pour trouver k?", "N'importe quel point du graphique qui n'est pas un zéro — l'ordonnée à l'origine est souvent le plus simple."],
      ["Pourquoi les zéros irrationnels vont-ils par paires?", "Avec des coefficients entiers, la formule quadratique donne a ± √b ensemble; leur produit est un trinôme à coefficients entiers."],
      ["Une famille peut-elle contenir des degrés différents?", "Pas sous cette forme : la famille fixe les facteurs, donc le degré est fixé. Changer un ordre change la famille."],
      ["Comment lire les ordres sur un graphique?", "Coupe l'axe comme une droite : ordre 1; touche l'axe : ordre pair; coupe l'axe en s'aplatissant : ordre impair ≥ 3."],
    ],
    summary: [
      "y = k(x − r₁)(x − r₂)… : mêmes zéros, tout k ≠ 0.",
      "Un point (qui n'est pas un zéro) détermine k.",
      "a ± √b → (x − a)² − b.",
      "Ordres d'après le graphique : coupe, touche, s'aplatit.",
    ],
    next: "La leçon 2.5 lit les inéquations polynomiales sur des graphiques.",
  }),
];
