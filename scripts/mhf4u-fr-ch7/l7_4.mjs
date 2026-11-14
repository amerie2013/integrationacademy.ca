// MHF4U-FR 7.4 — Résolution d'équations logarithmiques : log = nombre (forme exponentielle), log = log
// (égaler les arguments), condenser avec les lois du produit, du quotient et de la puissance, rejeter les racines étrangères.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, hard, plane, roots } from "./lib.mjs";
import { lessonId } from "../mhf4u-fr/common.mjs";

export const TITLE = "7.4 Résolution d'équations logarithmiques";
export const ID = lessonId(7, 4);

const S = String.raw;
const L = Math.log10;
const lg = (b) => (x) => Math.log(x) / Math.log(b);
export const blocks = () => [
  intro({
    icon: "🔍",
    title: "Résolution d'équations logarithmiques",
    overview: S`Dans une équation logarithmique, l'inconnue se trouve dans un logarithme, comme dans \(\log_3(2x+1)=4\) ou \(\log x+\log(x-3)=1\). Deux démarches permettent de résoudre presque toutes ces équations : condenser chaque membre en un seul logarithme à l'aide des lois de 7.3, puis soit réécrire sous forme exponentielle, soit égaler les arguments. Comme un logarithme n'accepte que des arguments positifs, l'algèbre peut produire des réponses qui ne conviennent pas; chaque solution doit donc être vérifiée dans l'équation de départ.`,
    goals: [
      "résoudre \\(\\log_b(\\text{expression})=c\\) en réécrivant sous forme exponentielle;",
      "résoudre \\(\\log_bA=\\log_bB\\) en posant \\(A=B\\);",
      "condenser des sommes et des différences de logarithmes avant de résoudre;",
      "repérer et rejeter les racines étrangères;",
      "résoudre des équations du second degré en \\(\\log x\\).",
    ],
    curriculum: "A3.3 (résoudre algébriquement des équations logarithmiques simples à une variable, y compris des problèmes tirés de situations réelles)",
    prior: [
      [S`Réécris \(\log_2 x=5\) sous forme exponentielle.`, S`\(x=2^5=32\).`],
      [S`Condense \(\log x+\log(x+1)\).`, S`\(\log\big(x(x+1)\big)\).`],
      [S`Pour quelles valeurs de \(x\) l'expression \(\log(x-4)\) est-elle définie?`, S`\(x>4\).`],
    ],
    words: [
      ["Équation logarithmique", "une équation dont l'inconnue se trouve dans un logarithme", "\\(\\log_5(x-1)=2\\)"],
      ["Forme exponentielle", "\\(\\log_bA=c\\iff A=b^c\\)", "\\(\\log_3A=4\\iff A=81\\)"],
      ["Égaler les arguments", "\\(\\log_bA=\\log_bB\\iff A=B\\) (avec \\(A,B>0\\))", "\\(\\log(x+4)=\\log9\\Rightarrow x=5\\)"],
      ["Racine étrangère", "une solution obtenue par l'algèbre qui ne vérifie pas l'équation de départ", "\\(x=-2\\) dans \\(\\log x+\\log(x-3)=1\\)"],
    ],
  }),

  section("📌 Deux types d'équations logarithmiques", S`
  ${table(["Forme", "Méthode", "Exemple"], [
    ["\\(\\log_bA=c\\) (un nombre)", "réécrire sous la forme \\(A=b^c\\)", "\\(\\log_2(x+3)=5\\Rightarrow x+3=32\\)"],
    ["\\(\\log_bA=\\log_bB\\)", "poser \\(A=B\\)", "\\(\\log_7(2x)=\\log_7(x+6)\\Rightarrow2x=x+6\\)"],
    ["plusieurs logarithmes dans un membre", "condenser d'abord (7.3), puis appliquer l'une des méthodes ci-dessus", "\\(\\log x+\\log(x-3)=\\log\\big(x(x-3)\\big)\\)"],
  ])}
  ${keyIdea(S`\(\log_bA\) existe seulement si \(A>0\). Condenser peut <b>élargir</b> le domaine (par exemple, \(\log x+\log(x-3)\) exige \(x>3\), mais \(\log\big(x(x-3)\big)\) accepte aussi \(x<0\)); une racine de l'équation condensée peut donc être <b>étrangère</b>. Substitue toujours chaque réponse dans l'équation de <b>départ</b>.`)}`),

  widget("ibLogGraph", { init: [2, 0, 0] }),

  section("📌 Voir une racine étrangère", S`
  <p>Résous \(\log x+\log(x-3)=1\) graphiquement : le membre de gauche est défini seulement pour \(x>3\), et son graphique coupe \(y=1\) une seule fois, en \(x=5\). L'équation condensée \(x(x-3)=10\) donne aussi \(x=-2\), mais aucune partie du graphique de départ n'existe à cet endroit.</p>
  ${plane({ view: { xmin: -4, xmax: 10, ymin: -2, ymax: 2.5 }, curves: [{ f: (x) => L(x) + L(x - 3), a: 3.001, color: "violet" }, { f: (x) => L(x * (x - 3)), b: -0.0001, color: "gray" }], lines: [{ m: 0, b: 1, color: "blue", dash: true }], points: [{ x: 5, y: 1, label: "(5, 1)", color: "amber" }, { x: -2, y: 1, label: "(−2, 1) étrangère", color: "red" }], step: { x: 1, y: 0.5 } }, "Violet : log x + log(x − 3) (seulement pour x > 3). Gris : la branche supplémentaire de log(x(x − 3)) pour x < 0.")}
  ${watchOut([
    "log(x + 2) = 3 ne signifie pas x + 2 = 3 : réécris plutôt x + 2 = 10³.",
    "Ne « simplifie » pas les « log » : log A = log B donne A = B seulement si chaque membre est un seul logarithme de même base.",
    "log x + log(x − 3) est égal à log(x(x − 3)), et non à log(2x − 3).",
    "Vérifie chaque racine dans l'équation de départ; rejette celles qui rendent un argument nul ou négatif.",
    "Une réponse négative n'est pas automatiquement fausse : elle convient si chaque argument reste positif.",
  ])}`),

  examples([
    ["Un logarithme égal à un nombre", S`Résous \(\log_3(2x+1)=4\).`,
      [S`<b>Objectif et règle.</b> L'inconnue est dans un logarithme. Un logarithme est un exposant, donc \(\log_bA=c\) signifie exactement \(A=b^c\). Réécrire sous cette forme fait disparaître le logarithme.`,
        S`<b>Domaine.</b> L'argument doit être positif : \(2x+1>0\), donc \(x>-\frac12\).`,
        S`<b>Forme exponentielle.</b> La base est \(3\), l'exposant est \(4\) et l'argument est \(2x+1\) : \(2x+1=3^4=81\).`,
        S`<b>Résoudre l'équation du premier degré.</b> Soustrais \(1\) : \(2x=80\). Divise par \(2\) : \(x=40\).`,
        S`<b>Vérifier le domaine.</b> \(40>-\frac12\) ✓`,
        S`<b>Vérification par substitution.</b> \(\log_3(2(40)+1)=\log_381=4\), car \(3^4=81\) ✓. La courbe croissante coupe \(y=4\) une seule fois, en \((40,\,4)\).`],
      S`\(x=40\)`,
      plane({ view: { xmin: -4, xmax: 60, ymin: -2, ymax: 5.5 }, curves: [{ f: (x) => Math.log(2 * x + 1) / Math.log(3), a: -0.49, color: "violet" }], lines: [{ m: 0, b: 4, color: "blue", dash: true }], points: [{ x: 40, y: 4, label: "(40, 4)", color: "amber" }], step: { x: 10, y: 1 } })],
    ["Un logarithme égal à un logarithme", S`Résous \(\log(x+4)=\log(3x-6)\).`,
      [S`<b>Objectif et règle.</b> Chaque membre est un seul logarithme de même base. Comme \(y=\log x\) est biunivoque, des logarithmes égaux doivent avoir des arguments égaux.`,
        S`<b>Domaine.</b> \(x+4>0\) donne \(x>-4\), et \(3x-6>0\) donne \(x>2\). Les deux conditions doivent être respectées, donc \(x>2\).`,
        S`<b>Égaler les arguments.</b> \(x+4=3x-6\).`,
        S`<b>Résoudre.</b> Soustrais \(x\) : \(4=2x-6\). Ajoute \(6\) : \(10=2x\). Donc \(x=5\).`,
        S`<b>Vérifier le domaine.</b> \(5>2\) ✓`,
        S`<b>Vérification par substitution.</b> Membre de gauche : \(\log(5+4)=\log9\). Membre de droite : \(\log(15-6)=\log9\) ✓. Le graphique montre les courbes qui se coupent en \((5,\,0.95)\), et \(\log9\approx0.95\) ✓`],
      S`\(x=5\)`,
      plane({ view: { xmin: -1, xmax: 10, ymin: -1, ymax: 2 }, curves: [{ f: (x) => L(x + 4), a: -3.9, color: "violet" }, { f: (x) => L(3 * x - 6), a: 2.02, color: "blue" }], points: [{ x: 5, y: L(9), label: "(5, 0.95)", color: "amber" }], step: { x: 1, y: 0.5 } })],
    ["Condenser, puis rejeter une racine", S`Résous \(\log x+\log(x-3)=1\).`,
      [S`<b>D'abord le domaine.</b> Les deux logarithmes doivent exister : \(x>0\) et \(x-3>0\). Ensemble, \(x>3\). Toute réponse doit respecter cette condition.`,
        S`<b>Pourquoi condenser?</b> La règle de réécriture exige un seul logarithme. La loi du produit le fournit : \(\log x+\log(x-3)=\log\big(x(x-3)\big)\), donc \(\log\big(x(x-3)\big)=1\).`,
        S`<b>Forme exponentielle.</b> La base est \(10\) : \(x(x-3)=10^1=10\).`,
        S`<b>Résoudre l'équation du second degré.</b> \(x^2-3x-10=0\). Deux nombres dont le produit est \(-10\) et la somme \(-3\) sont \(-5\) et \(2\) : \((x-5)(x+2)=0\), donc \(x=5\) ou \(x=-2\).`,
        S`<b>Tester chaque racine selon le domaine.</b> \(5>3\) ✓. \(x=-2\) ne convient pas : l'équation de départ exigerait \(\log(-2)\), qui n'existe pas (aucune puissance de 10 n'est négative); cette racine est donc étrangère.`,
        S`<b>Vérifier \(x=5\).</b> \(\log5+\log2=\log10=1\) ✓. Le graphique n'existe que pour \(x>3\) et coupe \(y=1\) une seule fois ✓`],
      S`\(x=5\) (rejeter \(x=-2\))`,
      plane({ view: { xmin: 2, xmax: 9, ymin: -1, ymax: 2 }, curves: [{ f: (x) => L(x) + L(x - 3), a: 3.001, color: "violet" }], lines: [{ m: 0, b: 1, color: "blue", dash: true }], vlines: [{ x: 3, color: "red", dash: true }], points: [{ x: 5, y: 1, label: "(5, 1)", color: "amber" }], step: { x: 1, y: 0.5 } })],
    ["Un quotient", S`Résous \(\log_2(x+1)-\log_2(x-2)=2\).`,
      [S`<b>Domaine.</b> \(x+1>0\) et \(x-2>0\). Ensemble, \(x>2\).`,
        S`<b>Loi du quotient.</b> Une différence de logarithmes de même base est le logarithme d'un quotient : \(\log_2\dfrac{x+1}{x-2}=2\).`,
        S`<b>Forme exponentielle.</b> \(\dfrac{x+1}{x-2}=2^2=4\).`,
        S`<b>Éliminer la fraction.</b> Comme \(x-2\ne0\) dans le domaine, multiplie les deux membres par cette expression : \(x+1=4(x-2)=4x-8\).`,
        S`<b>Résoudre.</b> Soustrais \(x\) : \(1=3x-8\). Ajoute \(8\) : \(9=3x\). Donc \(x=3\).`,
        S`<b>Vérification.</b> \(3>2\) ✓. Membre de gauche : \(\log_24-\log_21=2-0=2\) ✓. La courbe descend à partir de son asymptote en \(x=2\) et coupe \(y=2\) une seule fois ✓`],
      S`\(x=3\)`,
      plane({ view: { xmin: 1.5, xmax: 9, ymin: -1, ymax: 6 }, curves: [{ f: (x) => Math.log2(x + 1) - Math.log2(x - 2), a: 2.01, color: "violet" }], lines: [{ m: 0, b: 2, color: "blue", dash: true }], vlines: [{ x: 2, color: "red", dash: true }], points: [{ x: 3, y: 2, label: "(3, 2)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["Une équation avec la loi de la puissance et deux réponses", S`Résous \(2\log x=\log(5x-4)\).`,
      [S`<b>Domaine.</b> \(x>0\) et \(5x-4>0\). La deuxième condition est la plus forte : \(x>0.8\).`,
        S`<b>Pourquoi utiliser la loi de la puissance?</b> Pour égaler les arguments, chaque membre doit être un seul logarithme de coefficient \(1\) : \(2\log x=\log x^2\). Donc \(\log x^2=\log(5x-4)\).`,
        S`<b>Égaler les arguments.</b> \(x^2=5x-4\).`,
        S`<b>Résoudre.</b> \(x^2-5x+4=0\). Deux nombres dont le produit est \(4\) et la somme \(-5\) sont \(-1\) et \(-4\) : \((x-1)(x-4)=0\), donc \(x=1\) ou \(x=4\).`,
        S`<b>Tester le domaine.</b> \(1>0.8\) et \(4>0.8\), donc aucune racine n'est étrangère. Une équation du second degré ne produit pas toujours une racine à rejeter.`,
        S`<b>Vérification.</b> \(x=1\) : \(2\log1=0\) et \(\log1=0\) ✓. \(x=4\) : \(2\log4=\log16\) et \(\log(20-4)=\log16\) ✓. Le graphique montre deux points d'intersection.`],
      S`\(x=1\) ou \(x=4\)`,
      plane({ view: { xmin: 0, xmax: 6.5, ymin: -2, ymax: 2 }, curves: [{ f: (x) => 2 * L(x), a: 0.1, color: "violet" }, { f: (x) => L(5 * x - 4), a: 0.81, color: "blue" }], points: [{ x: 1, y: 0, label: "(1, 0)", color: "amber" }, { x: 4, y: L(16), label: "(4, 1.20)", color: "amber" }], step: { x: 1, y: 0.5 } })],
  ]),

  practice([
    q("forme exponentielle", S`Résous \(\log_5(x-2)=2\).`, num(27), "x − 2 = 5².", [S`\(x-2=25\Rightarrow x=27\).`], S`\(27\)`),
    q("forme exponentielle", S`Résous \(\log_2(3x+2)=5\).`, num(10), "3x + 2 = 32.", [S`\(3x=30\Rightarrow x=10\).`], S`\(10\)`),
    q("condenser", S`Résous \(\log_6x+\log_6(x-5)=2\).`, num(9), "x(x − 5) = 36.", [S`\(x^2-5x-36=(x-9)(x+4)=0\); rejette \(-4\).`], S`\(9\)`),
    q("quotient", S`Résous \(\log(x+6)-\log(x-3)=1\).`, num(4), "(x + 6)/(x − 3) = 10.", [S`\(x+6=10x-30\Rightarrow9x=36\Rightarrow x=4\).`], S`\(4\)`),
    q("racine étrangère", S`La résolution de \(\log_2x+\log_2(x+2)=3\) donne \(x^2+2x-8=0\). Quel est l'ensemble solution de l'équation de départ?`, choice(["{2}", "{2, −4}", "{−4}", "{4, −2}"], 0), "Teste chaque racine dans l'équation de départ.", [S`\((x-2)(x+4)=0\); \(x=-4\) exigerait \(\log_2(-4)\), qui n'existe pas.`], S`\(\{2\}\)`),
  ]),

  ...hard([
    ["Une équation du second degré en log x", S`Résous \((\log x)^2-3\log x+2=0\).`,
      [S`<b>Substituer</b> \(u=\log x\) : \(u^2-3u+2=0\Rightarrow(u-1)(u-2)=0\).`,
        S`<b>Donc</b> \(\log x=1\) ou \(\log x=2\).`,
        S`<b>Forme exponentielle :</b> \(x=10\) ou \(x=100\).`,
        S`<b>Vérifier \(x=10\) :</b> \(1-3+2=0\) ✓. <b>Vérifier \(x=100\) :</b> \(4-6+2=0\) ✓`],
      S`\(x=10\) ou \(x=100\)`,
      plane({ view: { xmin: -5, xmax: 120, ymin: -1, ymax: 3 }, curves: [{ f: (x) => L(x) ** 2 - 3 * L(x) + 2, a: 1, color: "violet" }], points: [{ x: 10, y: 0, label: "(10, 0)", color: "amber" }, { x: 100, y: 0, label: "(100, 0)", color: "amber" }], step: { x: 10, y: 0.5 } })],
    ["Deux bases différentes", S`Résous \(\log_2x+\log_4x=6\).`,
      [S`<b>Passer à une seule base :</b> \(\log_4x=\dfrac{\log_2x}{\log_24}=\dfrac{\log_2x}{2}\).`,
        S`<b>Combiner :</b> \(\log_2x+\tfrac12\log_2x=\tfrac32\log_2x=6\), donc \(\log_2x=4\).`,
        S`<b>Forme exponentielle :</b> \(x=2^4=16\).`,
        S`<b>Vérification :</b> \(\log_216+\log_416=4+2=6\) ✓`],
      S`\(x=16\)`],
  ], [
    q("difficile", S`Résous \((\log_3x)^2-\log_3x-6=0\). Entre les deux racines.`, roots(27, 1 / 9), "Pose u = log₃ x.", [S`\((u-3)(u+2)=0\Rightarrow x=3^3\) ou \(x=3^{-2}\).`], S`\(x=27,\ \frac19\)`),
    q("difficile", S`Résous \(\log_3x+\log_9x=6\).`, num(81), "log₉ x = ½ log₃ x.", [S`\(\frac32\log_3x=6\Rightarrow\log_3x=4\).`], S`\(81\)`),
    q("difficile", S`Résous \(\log(x+2)+\log(x-1)=1\).`, num(3), "(x + 2)(x − 1) = 10.", [S`\(x^2+x-12=(x+4)(x-3)=0\); rejette \(-4\).`], S`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment résoudre log_b A = c?", "Réécris l'équation sous la forme A = b^c, puis résous."],
      ["Comment résoudre log_b A = log_b B?", "Pose A = B (un seul logarithme de chaque côté, même base), puis vérifie que A, B > 0."],
      ["Que faire s'il y a plusieurs logarithmes dans un membre?", "Condense-les d'abord avec les lois du produit, du quotient et de la puissance."],
      ["Pourquoi une racine peut-elle être étrangère?", "Condenser admet des valeurs pour lesquelles un argument de départ est négatif; ces valeurs ne vérifient pas l'équation de départ."],
      ["Comment traiter (log x)² − 3 log x + 2 = 0?", "Pose u = log x, résous l'équation du second degré, puis x = 10ᵘ."],
    ],
    summary: [
      "Trouve d'abord le domaine.",
      "Condense jusqu'à obtenir un seul logarithme de chaque côté.",
      "log_b A = c ⇒ A = b^c; log_b A = log_b B ⇒ A = B.",
      "Vérifie chaque racine dans l'équation de départ.",
    ],
    next: "En 7.5, tu utiliseras des équations exponentielles et logarithmiques pour répondre à des questions sur des situations réelles de croissance et de décroissance.",
  }),
];
