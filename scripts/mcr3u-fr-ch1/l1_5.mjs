// MCR3U-FR 1.5 — Réciproques : processus inverse, tables, réflexion par rapport à y = x, algèbre, réciproque d'une
// fonction du second degré. Miroir de ../mcr3u-ch1/l1_5.mjs.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr, hard, plane } from "./lib.mjs";
import { tv } from "../mcr3u-extables.mjs";
import { lessonId } from "../mcr3u-fr/common.mjs";
const S = String.raw;

export const TITLE = "1.5 Réciproques";
export const ID = lessonId(1, 5);

export const blocks = () => [
  intro({
    icon: "🔁",
    title: "Réciproques",
    overview: String.raw`La réciproque annule une fonction : si \(f\) envoie 4 sur 7, alors \(f^{-1}\) ramène 7 sur 4. Dans cette leçon, tu vas trouver des réciproques en inversant les étapes, en échangeant les colonnes d'une table, en réfléchissant un graphique par rapport à la droite \(y=x\) et par l'algèbre. Tu verras pourquoi la réciproque d'une fonction du second degré n'est pas une fonction à moins de restreindre le domaine, et comment le domaine et l'image échangent leurs rôles.`,
    goals: [
      "relier la réciproque à l'inversion d'un processus;",
      "trouver la réciproque d'une table, d'un graphique ou d'une équation;",
      "réfléchir un graphique par rapport à y = x pour tracer sa réciproque;",
      "déterminer si une réciproque est une fonction et restreindre le domaine au besoin;",
      "relier le domaine et l'image de f et de f⁻¹.",
    ],
    curriculum: "A1.4–A1.7 (la réciproque comme processus inverse; réciproques numériques, graphiques et algébriques de fonctions affines et du second degré; réflexion par rapport à y = x; domaine et image de la réciproque; déterminer si la réciproque est une fonction; g(x) = √x et h(x) = −√x)",
    prior: [
      [String.raw`Isole \(x\) dans \(y=3x-5\).`, String.raw`\(x=\frac{y+5}{3}\).`],
      [String.raw`Quelle est l'image de \((2,7)\) par une réflexion par rapport à la droite \(y=x\)?`, String.raw`\((7,2)\) : les coordonnées s'échangent.`],
      [String.raw`L'équation \(x^2=9\) a-t-elle une seule solution?`, String.raw`Non : \(x=3\) ou \(x=-3\).`],
    ],
    words: [
      ["Réciproque (d'une fonction)", "\\(f^{-1}\\) annule \\(f\\) : si \\(f(a)=b\\), alors \\(f^{-1}(b)=a\\)", ""],
      ["\\(f^{-1}\\)", "se lit « f moins un » ou « réciproque de f » — ce n'est pas \\(\\frac1f\\)", ""],
      ["Axe de réflexion", "la droite \\(y=x\\)", ""],
      ["Domaine restreint", "partie du domaine choisie pour que la réciproque soit une fonction", "\\(x\\ge0\\)"],
    ],
  }),

  section("📌 Annuler un processus", String.raw`
  <p>\(f(x)=3x-5\) dit : <em>multiplie par 3, puis soustrais 5</em>. Pour l'annuler, inverse les étapes <em>et</em> leur ordre : <em>additionne 5, puis divise par 3</em>. Donc \(f^{-1}(x)=\frac{x+5}{3}\).</p>
  ${table(["", "étape 1", "étape 2"], [["f", "× 3", "− 5"], ["f⁻¹", "+ 5", "÷ 3"]])}
  ${keyIdea(String.raw`Pour trouver une réciproque algébriquement : écris \(y=f(x)\), <strong>échange \(x\) et \(y\)</strong>, puis isole \(y\). Graphiquement, l'échange est une réflexion par rapport à \(y=x\). Le domaine de \(f^{-1}\) est l'image de \(f\), et l'image de \(f^{-1}\) est le domaine de \(f\).`)}`),

  section("📌 Explore", String.raw`<p>En bleu, \(f\); en rouge, sa réflexion. Chaque segment gris pointillé relie un point à son image miroir. Essaie la fonction du second degré : avec tous les x, la courbe rouge échoue au test de la droite verticale; restreins le domaine à un seul côté du sommet et elle le réussit.</p>`),

  widget("inverseLab", { start: "quad" }),

  section("📌 Réciproque d'une fonction du second degré", String.raw`
  <p>Pour \(f(x)=x^2\), l'échange donne \(x=y^2\), donc \(y=\pm\sqrt x\) : deux sorties pour chaque entrée positive — ce n'est pas une fonction. Garde seulement la moitié droite de la parabole (\(x\ge0\)) et la réciproque est \(y=\sqrt x\); garde la moitié gauche (\(x\le0\)) et c'est \(y=-\sqrt x\).</p>
  ${plane({ view: { xmin: -5, xmax: 5, ymin: -5, ymax: 5 }, curves: [{ f: (x) => x * x, a: 0, color: "blue" }, { f: (x) => x * x, b: 0, color: "blue", }, { f: (x) => Math.sqrt(x), a: 0, color: "red" }, { f: (x) => -Math.sqrt(x), a: 0, color: "amber" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], step: { x: 1, y: 1 } }, "y = x² (en bleu); sa réciproque y = ±√x : en rouge (√x) pour x ≥ 0, en ambre (−√x) pour x ≤ 0")}
  ${watchOut([
    "f⁻¹(x) N'est PAS 1/f(x). Le −1 est une étiquette, pas un exposant.",
    "Inverse l'ordre des étapes, pas seulement les opérations.",
    "Une fonction a une réciproque qui est une fonction seulement si elle est un à un (elle réussit le test de la droite horizontale).",
    "Après avoir restreint le domaine, indique quelle racine (+ ou −) la réciproque utilise.",
  ])}`),

  examples([
    ["Inverser les étapes", S`Trouve la réciproque de \(f(x)=3x-5\) et vérifie avec \(x=4\).`,
      [S`<b>Idée.</b> La réciproque annule \(f\) : elle ramène chaque sortie à son entrée. On inverse donc les étapes de \(f\), dans l'ordre inverse, chacune avec l'opération contraire.`,
        S`<b>Étapes de \(f\).</b> Multiplier par 3, puis soustraire 5.`,
        S`<b>Étapes de \(f^{-1}\).</b> Additionner 5, puis diviser par 3. On obtient \(f^{-1}(x)=\dfrac{x+5}3\).`,
        S`<b>Vérifie avec \(x=4\).</b> \(f(4)=12-5=7\), et \(f^{-1}(7)=\frac{12}3=4\). On revient à la valeur de départ ✓`,
        S`<b>Vérifie sur le graphique.</b> \((4,7)\) est sur \(f\) et \((7,4)\) est sur \(f^{-1}\). Les deux droites sont symétriques par rapport à \(y=x\) ✓`],
      S`\(f^{-1}(x)=\frac{x+5}{3}\)`,
      plane({ view: { xmin: -6, xmax: 9, ymin: -6, ymax: 9 }, lines: [{ m: 3, b: -5, color: "blue" }, { m: 1 / 3, b: 5 / 3, color: "red" }, { m: 1, b: 0, color: "gray", dash: true }], points: [{ x: 4, y: 7, label: "(4, 7)", color: "blue" }, { x: 7, y: 4, label: "(7, 4)", color: "red" }], step: { x: 1, y: 1 } }, "en bleu f, en rouge sa réciproque, en pointillé y = x")],
    ["À partir d'une table", S`\(f\) a les points \((-1,-7),(0,-4),(2,2),(5,11)\). Donne les points de \(f^{-1}\) et son domaine.`,
      [S`<b>Règle.</b> La réciproque échange les entrées et les sorties : si \(f(a)=b\), alors \(f^{-1}(b)=a\). Chaque point \((a,b)\) devient donc \((b,a)\).`,
        S`<b>Échange chaque couple.</b> ${tv(["\\(f\\) : \\(x\\)", "\\(-1\\)", "0", "2", "5"], ["\\(f\\) : \\(y\\)", "\\(-7\\)", "\\(-4\\)", "2", "11"], ["\\(f^{-1}\\) : \\(x\\)", "\\(-7\\)", "\\(-4\\)", "2", "11"], ["\\(f^{-1}\\) : \\(y\\)", "\\(-1\\)", "0", "2", "5"])}`,
        S`<b>Domaine.</b> Les entrées de \(f^{-1}\) sont les sorties de \(f\), donc le domaine de \(f^{-1}\) est l'image de \(f\) : \(\{-7,-4,2,11\}\).`,
        S`<b>Est-ce une fonction?</b> Les nouvelles entrées sont toutes différentes, donc oui.`,
        S`<b>Vérifie sur le graphique.</b> Chaque paire de points est symétrique par rapport à \(y=x\). Le point \((2,2)\) est sur l'axe de réflexion, donc il ne bouge pas ✓`],
      S`\(f^{-1}\) : \((-7,-1),(-4,0),(2,2),(11,5)\); domaine \(\{-7,-4,2,11\}\)`,
      plane({ view: { xmin: -8, xmax: 12, ymin: -8, ymax: 12 }, lines: [{ m: 1, b: 0, color: "gray", dash: true }], points: [{ x: -1, y: -7, color: "blue" }, { x: 0, y: -4, color: "blue" }, { x: 5, y: 11, label: "(5, 11)", color: "blue" }, { x: -7, y: -1, color: "red" }, { x: -4, y: 0, color: "red" }, { x: 11, y: 5, label: "(11, 5)", color: "red" }, { x: 2, y: 2, label: "(2, 2)", color: "amber" }], step: { x: 2, y: 2 } }, "en bleu les points de f, en rouge ceux de la réciproque")],
    ["Par l'algèbre", S`Trouve la réciproque de \(g(x)=\frac{2x+1}{4}\).`,
      [S`<b>Méthode.</b> Écris \(y=g(x)\), échange \(x\) et \(y\), puis isole le nouveau \(y\). L'échange est la version algébrique de l'échange des entrées et des sorties.`,
        S`<b>Échange.</b> \(y=\frac{2x+1}4\) devient \(x=\frac{2y+1}4\).`,
        S`<b>Élimine le dénominateur.</b> Multiplie les deux membres par 4 : \(4x=2y+1\).`,
        S`<b>Isole \(y\).</b> Soustrais 1 : \(4x-1=2y\). Divise par 2 : \(y=\frac{4x-1}2\).`,
        S`<b>Vérifie.</b> \(g(3)=\frac74\), et \(g^{-1}\left(\frac74\right)=\frac{7-1}2=3\) ✓. Les deux droites passent par des points symétriques.`],
      S`\(g^{-1}(x)=\frac{4x-1}{2}\)`,
      plane({ view: { xmin: -4, xmax: 6, ymin: -4, ymax: 6 }, lines: [{ m: 0.5, b: 0.25, color: "blue" }, { m: 2, b: -0.5, color: "red" }, { m: 1, b: 0, color: "gray", dash: true }], points: [{ x: 3, y: 1.75, label: "(3, 1.75)", color: "blue" }, { x: 1.75, y: 3, label: "(1.75, 3)", color: "red" }], step: { x: 1, y: 1 } }, "en bleu g, en rouge sa réciproque")],
    ["Réciproque d'une fonction du second degré", S`Trouve la réciproque de \(f(x)=(x-3)^2+1\). Restreins le domaine de \(f\) pour que la réciproque soit une fonction.`,
      [S`<b>Échange et résous.</b> \(x=(y-3)^2+1\). Soustrais 1 : \((y-3)^2=x-1\). Prends les deux racines : \(y=3\pm\sqrt{x-1}\).`,
        S`<b>Le problème.</b> Le \(\pm\) donne deux sorties pour chaque \(x>1\), donc cette réciproque n'est pas une fonction. La raison : \(f\) est plusieurs à un, puisque \(f(2)=f(4)=2\).`,
        S`<b>Restreins \(f\).</b> Garde un seul côté du sommet \((3,1)\). En prenant \(x\ge3\), \(f\) devient un à un, et la réciproque doit alors donner des sorties \(y\ge3\). On garde donc la racine \(+\).`,
        S`<b>Réciproque.</b> \(f^{-1}(x)=3+\sqrt{x-1}\). Son domaine \(x\ge1\) est l'image de \(f\). Son image \(y\ge3\) est le domaine restreint de \(f\).`,
        S`<b>Vérifie.</b> \(f(5)=4+1=5\), et \(f^{-1}(5)=3+\sqrt4=5\) ✓ (le point \((5,5)\) est sur l'axe de réflexion). Aussi, \(f(4)=2\) et \(f^{-1}(2)=3+1=4\) ✓`],
      S`\(f^{-1}(x)=3+\sqrt{x-1}\) pour \(f\) restreinte à \(x\ge3\)`,
      plane({ view: { xmin: -1, xmax: 9, ymin: -1, ymax: 9 }, curves: [{ f: (x) => (x - 3) ** 2 + 1, a: 3, color: "blue" }, { f: (x) => 3 + Math.sqrt(x - 1), a: 1, color: "red" }], lines: [{ m: 1, b: 0, color: "gray", dash: true }], points: [{ x: 3, y: 1, label: "(3, 1)", color: "blue" }, { x: 1, y: 3, label: "(1, 3)", color: "red" }, { x: 5, y: 5, label: "(5, 5)", color: "amber" }], step: { x: 1, y: 1 } })],
    ["En contexte", S`Les degrés Fahrenheit et Celsius sont liés par \(F=1.8C+32\). Trouve la réciproque et convertis 77 °F.`,
      [S`<b>Sens de la réciproque.</b> La règle donnée transforme des degrés Celsius en degrés Fahrenheit. La réciproque fait le chemin inverse. En contexte, on garde les lettres, car elles nomment les grandeurs.`,
        S`<b>Isole \(C\).</b> Soustrais 32 : \(F-32=1.8C\). Divise par 1.8 : \(C=\dfrac{F-32}{1.8}\).`,
        S`<b>Substitue</b> \(F=77\). \(C=\dfrac{77-32}{1.8}=\dfrac{45}{1.8}=25\).`,
        S`<b>Vérifie dans la règle de départ.</b> \(1.8(25)+32=45+32=77\) ✓`,
        S`<b>Vérifie avec des valeurs connues.</b> L'eau gèle à \(0\) °C, soit \(32\) °F : \(\frac{32-32}{1.8}=0\) ✓. Le graphique montre les deux valeurs sur la droite.`],
      "C = (F − 32)/1.8; 77 °F = 25 °C",
      plane({ view: { xmin: 0, xmax: 100, ymin: 0, ymax: 40 }, lines: [{ m: 1 / 1.8, b: -32 / 1.8, color: "violet" }], points: [{ x: 32, y: 0, label: "(32, 0)" }, { x: 77, y: 25, label: "(77, 25)", color: "amber" }], step: { x: 10, y: 5 }, xlabel: "F", ylabel: "C" })],
  ]),

  practice([
    q("évaluer la réciproque", String.raw`Pour \(f(x)=4x+9\), trouve \(f^{-1}(1)\).`, num(-2),
      "Résous 4x + 9 = 1, ou trouve d'abord f⁻¹.", [String.raw`\(f^{-1}(x)=\frac{x-9}{4}\); \(\frac{1-9}{4}\).`], String.raw`\(-2\)`),
    q("algèbre", String.raw`Trouve \(f^{-1}(x)\) pour \(f(x)=\frac{x-6}{2}\).`, expr("2*x+6"),
      "Inverse : multiplie par 2, puis additionne 6.", [String.raw`Échange : \(x=\frac{y-6}{2}\Rightarrow y=2x+6\).`], String.raw`\(f^{-1}(x)=2x+6\)`),
    q("sens", String.raw`Si \(f(3)=10\), que vaut \(f^{-1}(10)\)?`, num(3),
      "La réciproque ramène les sorties aux entrées.", [String.raw`\((3,10)\) sur \(f\) signifie \((10,3)\) sur \(f^{-1}\).`], String.raw`\(3\)`),
    q("second degré", String.raw`\(f(x)=(x+2)^2\) avec \(x\ge-2\). Trouve \(f^{-1}(16)\).`, num(2),
      "Quel x ≥ −2 donne 16?", [String.raw`\((x+2)^2=16\Rightarrow x+2=4\) (la racine positive, puisque \(x\ge-2\)).`], String.raw`\(2\)`),
    q("domaine", String.raw`\(f(x)=x^2+5\) avec \(x\ge0\). Quel est le domaine de \(f^{-1}\)?`, choice([String.raw`\(x\ge5\)`, String.raw`\(x\ge0\)`, String.raw`\(x\in\mathbb R\)`, String.raw`\(x\le5\)`], 0),
      "Domaine de la réciproque = image de f.", [String.raw`L'image de \(f\) est \(y\ge5\).`], String.raw`\(\{x\in\mathbb R\mid x\ge5\}\)`),
  ]),

  ...hard([
    ["Restreindre à la moitié gauche", String.raw`\(f(x)=2(x+1)^2-8\) avec \(x\le-1\). Trouve \(f^{-1}(x)\) et vérifie un point.`,
      [String.raw`Échange : \(x=2(y+1)^2-8\Rightarrow(y+1)^2=\frac{x+8}{2}\Rightarrow y=-1\pm\sqrt{\frac{x+8}{2}}\).`, String.raw`Les valeurs de \(x\) de départ sont \(\le-1\), donc les valeurs de \(y\) de la réciproque doivent être \(\le-1\) : on prend le signe moins.`, String.raw`Vérifie : \(f(-3)=2(4)-8=0\) et \(f^{-1}(0)=-1-\sqrt4=-3\) ✓.`],
      String.raw`\(f^{-1}(x)=-1-\sqrt{\frac{x+8}{2}}\), domaine \(x\ge-8\)`],
    ["Une fonction qui est sa propre réciproque", String.raw`\(f(x)=ax+b\) est sa propre réciproque et \(f(0)=6\). Trouve \(f\).`,
      [String.raw`\(f(0)=b=6\).`, String.raw`Être sa propre réciproque signifie \(f(f(x))=x\) : \(a(ax+6)+6=a^2x+6a+6=x\) pour tout \(x\).`, String.raw`Donc \(a^2=1\) et \(6a+6=0\Rightarrow a=-1\).`, String.raw`Vérifie : \(f(f(x))=-(-x+6)+6=x\) ✓. Son graphique est perpendiculaire à \(y=x\), donc la réflexion le laisse inchangé.`],
      String.raw`\(f(x)=-x+6\)`,
      plane({ view: { xmin: -2, xmax: 8, ymin: -2, ymax: 8 }, lines: [{ m: -1, b: 6, color: "violet" }, { m: 1, b: 0, color: "gray", dash: true }], points: [{ x: 1, y: 5, label: "(1, 5)" }, { x: 5, y: 1, label: "(5, 1)" }], step: { x: 1, y: 1 } })],
  ], [
    q("difficile", String.raw`\(f(x)=3(x-2)^2+1\) avec \(x\ge2\). Trouve \(f^{-1}(28)\).`, num(5),
      "Résous f(x) = 28 avec x ≥ 2.", [String.raw`\((x-2)^2=9\Rightarrow x-2=3\).`], String.raw`\(5\)`),
    q("difficile", String.raw`\(f(x)=mx+4\) et \(f^{-1}(10)=3\). Trouve \(m\).`, num(2),
      "f⁻¹(10) = 3 signifie f(3) = 10.", [String.raw`\(3m+4=10\).`], String.raw`\(2\)`),
    q("difficile", String.raw`En quelle valeur de x la fonction \(f(x)=2x-3\) rencontre-t-elle sa réciproque?`, num(3),
      "Une fonction et sa réciproque se rencontrent sur y = x (ici).", [String.raw`\(2x-3=x\).`], String.raw`\(3\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi une réflexion par rapport à y = x?", "Échanger x et y envoie (a, b) sur (b, a), ce qui est exactement l'image miroir par rapport à y = x."],
      ["Toute fonction a-t-elle une réciproque qui est une fonction?", "Seulement les fonctions un à un. Les autres (comme x²) exigent un domaine restreint."],
      ["f⁻¹(x) est-il la même chose que 1/f(x)?", "Non. Pour f(x) = 2x, f⁻¹(x) = x/2, mais 1/f(x) = 1/(2x)."],
      ["Que vaut f(f⁻¹(x))?", "x — faire puis défaire ramène à l'entrée."],
      ["Quel lien y a-t-il entre √x, −√x et x²?", "Ce sont les réciproques de la moitié droite et de la moitié gauche de y = x²."],
    ],
    summary: [
      "Une réciproque inverse les étapes dans l'ordre inverse.",
      "Échange x et y, puis isole y.",
      "Le graphique est réfléchi par rapport à y = x; le domaine et l'image s'échangent.",
      "Pour une fonction du second degré, il faut restreindre le domaine pour que la réciproque soit une fonction.",
    ],
    next: "La section 1.6 transforme les fonctions de base par des translations et des étirements verticaux.",
  }),
];
