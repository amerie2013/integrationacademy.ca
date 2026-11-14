// MTH1W-FR 4.2 — Relations linéaires et non linéaires (format autonome)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "./figs4.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "4.2 Relations linéaires et non linéaires";
export const ID = lessonId(4, 2);

export const blocks = () => [
  intro({
    icon: "〰️",
    title: "Relations linéaires et non linéaires",
    overview: String.raw`Certaines relations changent de la même quantité à chaque étape — leurs graphiques sont des droites. D'autres accélèrent, ralentissent ou se stabilisent. Dans cette leçon, tu vas utiliser les <strong>premières différences</strong> (et le <strong>taux de variation</strong> quand les pas sont inégaux) pour reconnaître une relation linéaire à partir d'une table, reconnaître trois familles non linéaires importantes — <strong>quadratique</strong> (deuxièmes différences constantes), <strong>exponentielle</strong> (rapport constant) et <strong>variation inverse</strong> \(xy=k\) — et relier chacune à son graphique et à son équation.`,
    goals: [
      "utiliser les premières différences pour décider si une table dont les pas en x sont égaux est linéaire;",
      "utiliser le taux de variation \\(\\frac{\\Delta y}{\\Delta x}\\) quand les pas en x ne sont pas égaux;",
      "reconnaître les relations quadratiques (deuxièmes différences constantes) et exponentielles (rapport constant);",
      "reconnaître une variation inverse \\(xy=k\\) à partir d'une table, d'un graphique et d'une situation;",
      "décider à partir d'une équation si une relation est linéaire (la variable est de degré 1).",
    ],
    curriculum: "C3.2 (comparer des relations linéaires et non linéaires), C4.1 (caractéristiques des graphiques, des tables et des équations), C4.2 (xy = k)",
    prior: [
      [String.raw`Trouve les différences entre les termes consécutifs de \(4, 9, 14, 19\).`, String.raw`\(5, 5, 5\).`],
      [String.raw`Évalue \(2^x\) pour \(x=0,1,2,3\).`, String.raw`\(1, 2, 4, 8\).`],
      [String.raw`Si \(xy=24\) et \(x=6\), que vaut \(y\)?`, String.raw`\(4\).`],
    ],
    words: [
      ["Relation linéaire", "une relation dont le graphique est une droite", "\\(y=3x-2\\)"],
      ["Premières différences", "différences entre les valeurs de y consécutives quand x augmente par pas égaux", "\\(3, 3, 3\\)"],
      ["Taux de variation", "\\(\\dfrac{\\Delta y}{\\Delta x}\\) : variation de y par unité de variation de x", "\\(\\frac{12}{4}=3\\)"],
      ["Quadratique", "les deuxièmes différences sont constantes; le graphique est une parabole", "\\(y=x^2\\)"],
      ["Exponentielle", "chaque y est un multiple constant du précédent", "\\(y=2^x\\)"],
      ["Variation inverse", "le produit xy reste constant", "\\(xy=12\\)"],
    ],
  }),

  section("📌 Premières différences et taux de variation", String.raw`
  ${table(["x", "0", "1", "2", "3", "4"], [["y", "−2", "1", "4", "7", "10"], ["1res diff.", "", "3", "3", "3", "3"]])}
  <p>Quand \(x\) augmente par pas égaux de \(1\) et que les premières différences sont toutes égales, la relation est <strong>linéaire</strong>; la différence commune est le <strong>taux de variation</strong> (ici \(3\)). Si les pas en \(x\) ne sont pas égaux, compare plutôt \(\dfrac{\Delta y}{\Delta x}\) :</p>
  ${table(["x", "0", "2", "5", "6"], [["y", "1", "5", "11", "13"], ["\\(\\frac{\\Delta y}{\\Delta x}\\)", "", "\\(\\frac42=2\\)", "\\(\\frac63=2\\)", "\\(\\frac21=2\\)"]])}
  ${keyIdea(String.raw`<strong>Linéaire</strong> ⇔ taux de variation constant ⇔ graphique en ligne droite ⇔ équation de degré 1 (comme \(y=mx+b\)).`)}
  ${watchOut([
    "Les premières différences ne fonctionnent que si les valeurs de x augmentent par pas égaux. Sinon, divise chaque variation de y par la variation de x.",
    "Vérifie toutes les différences, pas seulement les deux premières.",
  ])}`),

  section("📌 Trois familles non linéaires", String.raw`
  ${table(["Famille", "Indice dans la table", "Graphique", "Exemple"], [
    ["Quadratique", "les premières différences changent; les <strong>deuxièmes</strong> différences sont constantes", "parabole (en forme de U)", "aire d'un carré \\(A=s^2\\)"],
    ["Exponentielle", "chaque y est le y précédent multiplié par un <strong>rapport</strong> constant", "monte (ou descend) de plus en plus vite", "bactéries qui doublent \\(N=50(2)^t\\)"],
    ["Variation inverse", "\\(x\\cdot y\\) est le même pour chaque paire", "hyperbole : ne touche jamais les axes", "vitesse et temps pour un trajet fixe \\(vt=120\\)"],
  ])}
  ${plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 40 }, curves: [{ f: (x) => x * x, color: "red" }, { f: (x) => 2 ** x, color: "green" }, { f: (x) => 24 / x, a: 0.6, color: "amber" }], lines: [{ m: 4, b: 2, color: "blue" }], xlabel: "x", ylabel: "y", step: { x: 1, y: 5 } }, "Bleu : linéaire y = 4x + 2. Rouge : quadratique y = x². Vert : exponentielle y = 2ˣ. Orange : inverse xy = 24.")}
  <p>Choisis chaque famille dans l'explorateur et observe les différences, le rapport ou le produit dans la table.</p>`),

  widget("relationTypes", {}),

  examples([
    ["Une table linéaire", String.raw`Cette relation est-elle linéaire? Si oui, donne le taux de variation et l'équation.
    ${table(["x", "0", "1", "2", "3", "4"], [["y", "5", "2", "−1", "−4", "−7"]])}`,
      [String.raw`<b>Test de linéarité.</b> Quand \(x\) augmente par pas égaux, la relation est linéaire exactement quand les <b>premières différences</b> (\(y_2-y_1\)) sont constantes. Alors \(y=mx+b\), avec \(m=\dfrac{\text{différence en }y}{\text{pas en }x}\) et \(b=\) la valeur de \(y\) à \(x=0\).`, String.raw`Premières différences : \(-3, -3, -3, -3\) — constantes, donc linéaire.`, String.raw`Taux de variation \(-3\); la valeur de y à \(x=0\) est \(5\).`, String.raw`<b>Vérification :</b> \(x=4\) : \(-3(4)+5=-7\) ✓`],
      String.raw`linéaire : \(y=-3x+5\)`],
    ["Des pas inégaux", String.raw`L'essence d'une voiture (L) est notée à différentes distances (km) : \((0, 48)\), \((50, 44)\), \((150, 36)\), \((175, 34)\). La relation est-elle linéaire?`,
      [String.raw`<b>Règle.</b> Quand les pas en \(x\) ne sont pas égaux, compare les <b>taux</b> plutôt que les différences : \[\text{taux}=\frac{\Delta y}{\Delta x}=\frac{y_2-y_1}{x_2-x_1}\] Linéaire signifie que le taux est le même entre chaque paire de points.`, String.raw`\(\frac{44-48}{50}=-0.08\), \(\frac{36-44}{100}=-0.08\), \(\frac{34-36}{25}=-0.08\).`, String.raw`Le taux est constant : \(-0.08\) L par km.`, String.raw`<b>Vérifie l'équation :</b> \(d=150\) : \(48-0.08(150)=48-12=36\) ✓`],
      String.raw`linéaire : \(F=48-0.08d\)`],
    ["Deuxièmes différences", String.raw`L'aire d'un carré de côté \(s\) est notée pour \(s=1\) à \(5\) : \(1, 4, 9, 16, 25\). Classe la relation.`,
      [String.raw`<b>Test.</b> Premières différences constantes → linéaire; premières différences qui changent mais <b>deuxièmes différences</b> (différences des différences) constantes → quadratique.`, String.raw`Premières différences : \(3, 5, 7, 9\) — non constantes.`, String.raw`Deuxièmes différences : \(2, 2, 2\) — constantes.`, String.raw`<b>Vérification :</b> \(5-3=7-5=9-7=2\) ✓, et \(A=s^2\) donne \(5^2=25\) ✓`],
      String.raw`quadratique (\(A=s^2\)) : une parabole`],
    ["Un rapport constant", String.raw`Le nombre de bactéries est \(50, 100, 200, 400, 800\) aux heures \(0\) à \(4\). Classe la relation et prédis l'heure \(6\).`,
      [String.raw`<b>Test.</b> Si chaque valeur de \(y\) est la précédente <b>multipliée</b> par le même nombre (rapport constant \(\tfrac{y_2}{y_1}\)), la relation est exponentielle : \(y=a(r)^t\), où \(a\) est la valeur de départ et \(r\) le rapport.`, String.raw`Les différences \(50, 100, 200, 400\) changent sans cesse; les rapports valent tous \(2\).`, String.raw`Exponentielle : \(N=50(2)^t\). Heure \(6\) : \(50(64)=3200\).`, String.raw`<b>Vérifie en prolongeant la table :</b> \(800\times2=1600\) à l'heure \(5\), \(1600\times2=3200\) à l'heure \(6\) ✓`],
      String.raw`exponentielle; \(3200\) à l'heure \(6\)`],
    ["Variation inverse", String.raw`Un trajet de \(120\) km : la vitesse \(v\) et le temps \(t\) vérifient \(vt=120\). Construis une table pour \(t=1,2,3,4,6\) et décris le graphique.`,
      [String.raw`<b>Formule.</b> \(\text{distance}=\text{vitesse}\times\text{temps}\), donc \(vt=120\) et \(v=\dfrac{120}{t}\). Dans une variation inverse, le <b>produit</b> des deux variables est constant.`, String.raw`\(v=\frac{120}{t}\) : \(120, 60, 40, 30, 20\).`, String.raw`Doubler le temps réduit la vitesse de moitié. Le produit vaut toujours \(120\).`, "Le graphique descend abruptement puis s'aplatit, en s'approchant des axes sans jamais les toucher.", String.raw`<b>Vérifie chaque ligne :</b> \(1(120)=2(60)=3(40)=4(30)=6(20)=120\) ✓`],
      String.raw`variation inverse, \(vt=120\)`,
      plane({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 140 }, curves: [{ f: (t) => 120 / t, a: 0.85, color: "amber" }], points: [1, 2, 3, 4, 6].map((t) => ({ x: t, y: 120 / t, color: "amber" })), xlabel: "temps t (h)", ylabel: "vitesse v (km/h)", step: { x: 1, y: 20 } })],
  ]),

  practice([
    q("tables linéaires", "Quelle table montre une relation linéaire? (x = 0, 1, 2, 3)", choice(["y : 7, 4, 1, −2", "y : 1, 2, 4, 8", "y : 0, 1, 4, 9", "y : 12, 6, 4, 3"], 0),
      "Cherche des premières différences constantes.", ["7, 4, 1, −2 change de −3 chaque fois; les autres sont exponentielle, quadratique et inverse."], "y : 7, 4, 1, −2"),
    q("taux de variation", String.raw`Quelle est la première différence de \(y=-3x+5\) pour des pas de \(1\) en x?`, num(-3),
      "Dans y = mx + b, la première différence est m.", [String.raw`Chaque pas de \(1\) en \(x\) change \(y\) de \(-3\).`], String.raw`\(-3\)`),
    q("équations", "Quelle équation est linéaire?", choice([String.raw`\(y=\tfrac{x}{4}-7\)`, String.raw`\(y=x^2+1\)`, String.raw`\(y=3^x\)`, String.raw`\(xy=10\)`], 0),
      "Linéaire : x apparaît seulement à la puissance 1, et pas au dénominateur.", [String.raw`\(\tfrac x4=\tfrac14x\) est de degré \(1\).`], String.raw`\(y=\tfrac x4-7\)`),
    q("deuxièmes différences", String.raw`Pour \(y=3x^2+1\) avec \(x=0,1,2,3,4\), quelles sont les deuxièmes différences (constantes)?`, num(6),
      "Construis la table, puis calcule les différences deux fois.", [String.raw`y : \(1, 4, 13, 28, 49\); premières : \(3, 9, 15, 21\); deuxièmes : \(6, 6, 6\).`], String.raw`\(6\)`),
    q("inverse", String.raw`\(y\) varie inversement à \(x\). Quand \(x=4\), \(y=9\). Trouve \(y\) quand \(x=6\).`, num(6),
      String.raw`Le produit \(xy\) reste le même.`, [String.raw`\(k=4\times9=36\).`, String.raw`\(y=\frac{36}{6}=6\).`], String.raw`\(6\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi les pas en x doivent-ils être égaux pour utiliser les premières différences?", String.raw`Une différence de \(6\) sur un pas et une différence de \(6\) sur deux pas sont des taux différents (\(6\) contre \(3\) par unité). Diviser par \(\Delta x\) règle le problème.`],
      ["Comment distinguer une relation quadratique d'une relation exponentielle?", "Quadratique : les deuxièmes différences sont constantes. Exponentielle : les rapports sont constants. Les graphiques exponentiels finissent par croître beaucoup plus vite que n'importe quelle parabole."],
      ["xy = 12 est-elle linéaire?", String.raw`Non. \(y=\frac{12}{x}\) a \(x\) au dénominateur; le graphique est une courbe (une hyperbole) et le taux de variation n'est pas constant.`],
      ["Que signifie un taux de variation constant dans une situation réelle?", "La même variation de la variable dépendante pour chaque variation égale de la variable indépendante : le même coût par kilomètre, le même nombre de mètres par seconde."],
      ["Un ensemble de données réelles peut-il être exactement linéaire?", "Les données mesurées sont habituellement un peu dispersées. Si les différences sont presque constantes, une droite est un bon modèle (droites les mieux ajustées au chapitre 6)."],
    ],
    summary: [
      "Linéaire : premières différences constantes (ou Δy/Δx constant); graphique en ligne droite; équation de degré 1.",
      "Quadratique : deuxièmes différences constantes; parabole.",
      "Exponentielle : rapport constant; courbe qui croît de plus en plus vite.",
      "Variation inverse : xy = k; hyperbole.",
    ],
    next: "la leçon 4.3 représente les relations linéaires par y = mx + b et relie la pente et l'ordonnée à l'origine à des situations réelles.",
  }),
];
