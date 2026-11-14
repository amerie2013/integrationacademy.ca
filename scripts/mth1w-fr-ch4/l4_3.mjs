// MTH1W-FR 4.3 — Représenter des relations linéaires et non linéaires (format autonome; accent : y = mx + b)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice, expr } from "./lib.mjs";
import { plane } from "./figs4.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "4.3 Représenter des relations linéaires et non linéaires";
export const ID = lessonId(4, 3);

export const blocks = () => [
  intro({
    icon: "📐",
    title: "Représenter des relations linéaires : y = mx + b",
    overview: String.raw`Toute relation linéaire peut s'écrire \(y=mx+b\). Le nombre \(b\) est la <strong>valeur initiale</strong> (l'ordonnée à l'origine, là où le graphique commence) et \(m\) est le <strong>taux de variation</strong> (la pente, de combien \(y\) change par unité de \(x\)). Dans cette leçon, tu vas lire \(m\) et \(b\) à partir de mots, de tables, de graphiques et d'équations, distinguer la variation <strong>directe</strong> (\(b=0\)) de la variation <strong>partielle</strong>, tracer une droite à partir de son équation à l'aide de l'ordonnée à l'origine et de la pente, et écrire l'équation d'une situation.`,
    goals: [
      "identifier la valeur initiale \\(b\\) et le taux de variation \\(m\\) dans une situation, une table, un graphique ou une équation;",
      "calculer la pente comme \\(\\frac{\\text{montée}}{\\text{course}}\\) à partir d'un graphique;",
      "distinguer la variation directe \\(y=mx\\) de la variation partielle \\(y=mx+b\\);",
      "tracer \\(y=mx+b\\) en plaçant \\(b\\) puis en avançant selon la pente;",
      "écrire \\(y=mx+b\\) pour une situation réelle et l'utiliser pour répondre à des questions.",
    ],
    curriculum: "C4.2 (représenter des relations linéaires), C4.3 (valeur initiale et taux de variation)",
    prior: [
      [String.raw`Évalue \(3x-4\) quand \(x=-2\).`, String.raw`\(-10\).`],
      [String.raw`Une table donne \(4, 7, 10, 13\) pour \(x=0,1,2,3\). Quelle est la première différence?`, String.raw`\(3\).`],
      [String.raw`Simplifie \(\dfrac{-6}{4}\).`, String.raw`\(-\tfrac32\).`],
    ],
    words: [
      ["Pente (m)", "taux de variation; montée ÷ course entre deux points de la droite", "\\(m=\\frac{2}{3}\\)"],
      ["Ordonnée à l'origine (b)", "la valeur de y quand x = 0; la valeur initiale", "\\(b=-1\\)"],
      ["Variation directe", "y = mx : commence à 0 et est proportionnelle", "un salaire de 16.50/h"],
      ["Variation partielle", "y = mx + b avec b ≠ 0 : une partie fixe plus une partie variable", "75 + 60h"],
      ["Constante de variation", "le m d'une variation directe", "16.5"],
    ],
  }),

  section("📌 Le sens de m et de b", String.raw`
  <p>Un plombier demande des frais de déplacement de \(75\) dollars plus \(60\) dollars l'heure : \(C=60h+75\).</p>
  ${table(["Partie", "Dans l'équation", "Dans la table", "Sur le graphique", "Dans l'histoire"], [
    ["\\(b\\)", "\\(75\\)", "valeur à \\(h=0\\)", "ordonnée à l'origine", "frais fixes"],
    ["\\(m\\)", "\\(60\\)", "première différence", "pente (montée/course)", "coût par heure"],
  ])}
  ${keyIdea(String.raw`\(y=mx+b\) : <strong>b</strong> est ton point de départ; <strong>m</strong> est la vitesse à laquelle tu changes. Une relation avec \(b=0\) est une <strong>variation directe</strong> (son graphique passe par l'origine); avec \(b\neq0\), c'est une <strong>variation partielle</strong>.`)}`),

  section("📌 La pente : la montée sur la course", String.raw`
  ${plane({ view: { xmin: -6, xmax: 6, ymin: -6, ymax: 6 }, lines: [{ m: 2 / 3, b: -1, label: "y = (2/3)x − 1" }], tri: { x: 0, y: -1, run: 3, rise: 2 }, points: [{ x: 0, y: -1, label: "(0, −1)", color: "green" }, { x: 3, y: 1, label: "(3, 1)" }] }, "À partir de (0, −1), avance de 3 vers la droite et monte de 2 pour atteindre (3, 1) : pente 2/3.")}
  <p>Pour <strong>tracer</strong> \(y=mx+b\) : place \((0,b)\), puis utilise la pente comme un pas (vers la droite de la course, vers le haut de la montée; vers le bas si la pente est négative), place un deuxième point et trace la droite. Modifie la montée, la course et \(b\) dans l'explorateur.</p>`),

  widget("slopeExplorer", { initRise: 2, initRun: 3, initB: -1 }),

  section("📌 De n'importe quelle représentation à y = mx + b", String.raw`
  ${watchOut([
    String.raw`L'ordonnée à l'origine est la valeur à \(x=0\) — pas la première valeur d'une table qui commence à \(x=1\). Recule d'un pas.`,
    String.raw`Dans \(y=5-2x\), la pente est \(-2\) et l'ordonnée à l'origine est \(5\) : l'ordre des termes n'a pas d'importance.`,
    String.raw`Une pente négative signifie que la droite descend vers la droite; descends au lieu de monter.`,
    String.raw`Pour une pente comme \(\frac{-3}{4}\), tu peux aller de \(4\) vers la droite et de \(3\) vers le bas — ou de \(4\) vers la gauche et de \(3\) vers le haut.`,
  ])}`),

  examples([
    ["Variation directe", String.raw`Ava gagne \(16.50\) dollars l'heure. Écris une équation de son salaire \(E\) pour \(h\) heures, trouve sa paie pour \(7.5\) h et décris le graphique.`,
      [String.raw`<b>Forme.</b> Une relation linéaire s'écrit \(y=mx+b\) : \(m\) est le taux de variation, \(b\) la valeur de départ. Une <b>variation directe</b> a \(b=0\) (\(y=mx\)); une <b>variation partielle</b> a \(b\ne0\).`, String.raw`Aucun montant fixe, donc \(b=0\) : \(E=16.5h\).`, String.raw`\(E=16.5(7.5)=123.75\) dollars.`, "Une droite qui passe par l'origine, de pente 16.5 : variation directe.", String.raw`<b>Vérification :</b> \(7\) h rapportent \(115.50\) et la demi-heure de plus rapporte \(8.25\) : \(115.50+8.25=123.75\) ✓`],
      String.raw`\(E=16.5h\); \(123.75\) dollars`],
    ["Variation partielle à partir d'une table", String.raw`Écris l'équation de la relation.
    ${table(["x", "1", "2", "3", "4"], [["y", "7.5", "11", "14.5", "18"]])}`,
      [String.raw`<b>Méthode.</b> Dans \(y=mx+b\), \(m\) est la première différence constante (quand \(x\) augmente de \(1\)), et \(b\) est la valeur à \(x=0\), trouvée en reculant d'un pas à partir de \(x=1\).`, String.raw`Premières différences : \(3.5\) chacune, donc \(m=3.5\).`, String.raw`Recule jusqu'à \(x=0\) : \(7.5-3.5=4\), donc \(b=4\).`, String.raw`Vérifie \(x=4\) : \(3.5(4)+4=18\) ✓`],
      String.raw`\(y=3.5x+4\)`],
    ["Tracer à partir de l'équation", String.raw`Trace \(y=-\tfrac23x+4\).`,
      [String.raw`<b>Forme fonctionnelle.</b> Dans \(y=mx+b\), \(b\) est l'ordonnée à l'origine (point de départ \((0,b)\)) et \(m=\dfrac{\text{montée}}{\text{course}}\) indique comment aller au point suivant. Ici \(b=4\) et \(m=-\tfrac23\) : course \(3\), montée \(-2\).`, String.raw`Commence à \((0,4)\).`, String.raw`Pente \(-\frac23\) : \(3\) vers la droite, \(2\) vers le bas jusqu'à \((3,2)\); recommence jusqu'à \((6,0)\).`, "Trace la droite qui passe par les points; elle descend vers la droite.", String.raw`<b>Vérifie un point :</b> \(x=6\) : \(-\tfrac23(6)+4=-4+4=0\), donc \((6,0)\) est sur la droite ✓`],
      "droite passant par (0, 4), (3, 2), (6, 0)",
      plane({ view: { xmin: -4, xmax: 8, ymin: -4, ymax: 8 }, lines: [{ m: -2 / 3, b: 4, label: "y = −(2/3)x + 4" }], tri: { x: 0, y: 4, run: 3, rise: -2 }, points: [{ x: 0, y: 4, color: "green" }, { x: 3, y: 2 }, { x: 6, y: 0 }] })],
    ["Lire un graphique", String.raw`Le graphique montre le coût de location d'un canot. Trouve \(m\) et \(b\), écris l'équation et explique chaque nombre.`,
      [String.raw`<b>Méthode.</b> \(b\) est l'endroit où la droite coupe l'axe vertical; \(m=\dfrac{y_2-y_1}{x_2-x_1}\) à partir de deux points bien lisibles de la droite.`, String.raw`La droite commence à \((0,20)\) : \(b=20\).`, String.raw`Elle passe par \((4,50)\) : \(m=\frac{50-20}{4-0}=7.5\).`, String.raw`\(C=7.5h+20\) : un dépôt de \(20\) dollars plus \(7.50\) dollars l'heure.`, String.raw`<b>Vérifie un autre point :</b> \(h=2\) : \(7.5(2)+20=35\), qui devrait être sur le graphique à mi-chemin entre \(20\) et \(50\) ✓`],
      String.raw`\(C=7.5h+20\)`,
      plane({ view: { xmin: 0, xmax: 8, ymin: 0, ymax: 80 }, lines: [{ m: 7.5, b: 20, color: "blue" }], points: [{ x: 0, y: 20, label: "(0, 20)", color: "green" }, { x: 4, y: 50, label: "(4, 50)" }], xlabel: "heures h", ylabel: "coût C", step: { x: 1, y: 10 } })],
    ["Interpréter et utiliser une équation", String.raw`La location d'une voiture coûte \(C=0.35d+12\) dollars pour \(d\) km. a) Explique \(0.35\) et \(12\). b) Combien coûtent \(80\) km? c) Quelle distance peux-tu parcourir pour \(54\) dollars?`,
      [String.raw`<b>Sens des parties.</b> Dans \(C=md+b\), \(b\) est le coût quand \(d=0\) (frais fixes) et \(m\) est le coût supplémentaire pour chaque km. b) demande d'<i>évaluer</i>; c) demande de <i>résoudre</i>.`, String.raw`a) \(12\) dollars sont les frais fixes par jour (\(b\)); \(0.35\) dollar est le coût par km (\(m\)).`, String.raw`b) \(0.35(80)+12=40\) dollars.`, String.raw`c) \(0.35d+12=54\Rightarrow0.35d=42\Rightarrow d=120\) km.`, String.raw`<b>Vérifie c) :</b> \(0.35(120)+12=42+12=54\) ✓`],
      String.raw`b) \(40\) dollars c) \(120\) km`],
  ]),

  practice([
    q("pente à partir de l'équation", String.raw`Quelle est la pente de \(y=5-2x\)?`, num(-2), "La pente est le coefficient de x, avec son signe.", [String.raw`\(y=-2x+5\) : \(m=-2\).`], String.raw`\(-2\)`),
    q("ordonnée à l'origine à partir d'une table", String.raw`Une table linéaire donne \(y=13, 17, 21\) à \(x=2, 3, 4\). Quelle est l'ordonnée à l'origine?`, num(5),
      "Trouve la première différence, puis recule jusqu'à x = 0.", [String.raw`Différence \(4\); à partir de \(x=2\), recule de deux pas : \(13-8=5\).`], String.raw`\(5\)`),
    q("directe ou partielle", "Un plombier demande 90 dollars l'heure, sans frais de déplacement. La relation est…", choice(["une variation directe", "une variation partielle", "non linéaire", "pas une relation"], 0),
      "Y a-t-il une partie fixe (b)?", ["b = 0, donc C = 90h est une variation directe."], "variation directe"),
    q("équation à partir de mots", String.raw`Une piscine contient \(2000\) L d'eau et se vide à raison de \(150\) L/min. Écris \(V\) en fonction de \(t\) minutes.`, expr("2000-150t"),
      "Valeur de départ plus (taux × temps); se vider signifie un taux négatif.", [String.raw`\(b=2000\), \(m=-150\).`], String.raw`\(V=2000-150t\)`, { placeholder: "V = …" }),
    q("montée sur course", String.raw`Une droite passe par \((-1,4)\) et \((3,-2)\). Quelle est sa pente? (Donne un nombre décimal.)`, num(-1.5),
      "montée ÷ course du premier point au deuxième.", [String.raw`montée \(-2-4=-6\); course \(3-(-1)=4\).`, String.raw`\(\frac{-6}{4}=-1.5\).`], String.raw`\(-1.5\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi appelle-t-on b la valeur initiale?", "C'est la valeur de y quand x = 0 — au départ (temps 0, distance 0, aucun article). Dans une histoire, c'est la partie fixe : des frais, un montant de départ."],
      ["Comment distinguer une variation directe d'une variation partielle sur un graphique?", "Une variation directe passe par l'origine; une variation partielle coupe l'axe des y ailleurs."],
      [String.raw`Est-ce important d'écrire \(y=5-2x\) ou \(y=-2x+5\)?`, "Non — c'est la même relation. Beaucoup de gens la réécrivent avec le terme en x en premier pour lire m et b rapidement."],
      ["Que signifie une pente de 0?", "y ne change pas : la droite est horizontale. Dans une histoire, rien ne s'ajoute par unité (seulement des frais fixes)."],
      ["Pourquoi utiliser montée/course à partir de deux points quelconques?", "Sur une droite, le rapport est le même pour chaque paire de points (triangles semblables), donc deux points pratiques suffisent pour trouver la pente."],
    ],
    summary: [
      "y = mx + b : m est le taux de variation (la pente), b est la valeur initiale (l'ordonnée à l'origine).",
      "Pente = montée ÷ course entre deux points quelconques de la droite.",
      "Variation directe : b = 0 (passe par l'origine); variation partielle : b ≠ 0.",
      "Trace à partir de (0, b) en utilisant la pente comme un pas.",
    ],
    next: "la leçon 4.4 compare deux relations linéaires et trouve où elles se croisent.",
  }),
];
