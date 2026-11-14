// MTH1W-FR 4.10 — Révision du chapitre 4 (placée après 4.9)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice, expr } from "./lib.mjs";
import { plane } from "./figs4.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "4.10 Révision du chapitre 4";
export const ID = lessonId(4, 10);

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 4 — Relations linéaires et non linéaires",
    overview: String.raw`Cette page rassemble le chapitre avant le test : l'idée clé de chaque leçon sur un seul écran, des questions où tu dois choisir la méthode, des exemples variés du niveau du test, de la pratique mixte et une liste de vérification. Fais-la après les leçons 4.1 à 4.9 et retourne à toute leçon où tu bloques.`,
    goals: [
      "te rappeler l'idée clé, un exemple typique et l'erreur fréquente de chaque leçon;",
      "choisir la bonne représentation et la bonne méthode pour un problème portant sur des relations;",
      "résoudre des problèmes à plusieurs étapes qui combinent pente, coordonnées à l'origine, équations, intersections et inéquations;",
      "vérifier si tu es prêt ou prête pour le test du chapitre.",
    ],
    curriculum: "C3.1–C3.2, C4.1–C4.4 (tout le chapitre)",
    prior: [
      [String.raw`Pente de la droite passant par \((-1,3)\) et \((3,-5)\)?`, String.raw`\(\frac{-8}{4}=-2\).`],
      [String.raw`\(y=x^2+1\) est-elle linéaire?`, "Non : elle a un terme en x² (quadratique)."],
      [String.raw`Coordonnées à l'origine de \(2x+5y-20=0\)?`, String.raw`\((10,0)\) et \((0,4)\).`],
    ],
    words: [
      ["Taux de variation / pente", "Δy ÷ Δx; constant pour une relation linéaire", "\\(m=-2\\)"],
      ["Valeur initiale", "y quand x = 0", "\\(b=5\\)"],
      ["Point d'intersection", "là où deux relations sont égales", "\\((150, 45)\\)"],
      ["Inéquation linéaire", "une région limitée par une droite", "\\(y\\le-x+4\\)"],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple typique", "Attention"], [
    ["4.1 Relations", "indépendante (horizontal) ou dépendante; discrète ou continue; les graphiques racontent des histoires", "distance-temps : horizontal = arrêté", "ne relie pas des points discrets"],
    ["4.2 Linéaire ou non linéaire", "Δy/Δx constant ⇔ linéaire; 2es différences, rapports, xy = k", "1, 4, 9, 16 : quadratique", "pas en x inégaux : divise par Δx"],
    ["4.3 y = mx + b", "m = taux, b = valeur initiale; directe ou partielle", "C = 60h + 75", "b est la valeur à x = 0"],
    ["4.4 Comparer des droites", "intersection : pose égal et résous", "\\(50+20m=110+10m\\Rightarrow m=6\\)", "réponds dans le contexte"],
    ["4.5 Droites particulières, inéquations", "y = k, x = k, y = mx; frontière, point test, ombrage", "\\(y\\le-x+4\\)", "pointillée pour < >"],
    ["4.6 Transformations", "b fait une translation, m fait pivoter, −m donne une réflexion", "\\(y=x\\to y=3x+2\\)", "l'inclinaison est |m|"],
    ["4.7 Équation d'une droite", "m à partir de deux points, puis b = y − mx", "\\((2,1),(6,9)\\Rightarrow y=2x-3\\)", "même ordre dans la formule de la pente"],
    ["4.8 Forme générale", "Ax + By + C = 0; m = −A/B; coordonnées à l'origine", "\\(4x+2y-10=0\\)", "divise chaque terme par B"],
    ["4.9 Parallèles, perpendiculaires", "pentes égales; produit −1", "\\(2\\) et \\(-\\tfrac12\\)", "renverse ET change le signe"],
  ])),

  section("📌 Quelle méthode?", String.raw`${keyIdea(String.raw`<strong>Est-ce linéaire?</strong> vérifie Δy/Δx. <strong>Besoin de l'équation?</strong> trouve m, puis b. <strong>Où deux options sont-elles égales?</strong> pose-les égales. <strong>Quelles combinaisons conviennent?</strong> une région d'inéquation. <strong>Même direction ou non?</strong> compare les pentes.`)}`),

  practice([
    q("méthode", "Un centre de conditionnement physique et une piscine ont des frais d'adhésion et des coûts mensuels différents. Pour trouver quand ils coûtent la même chose, tu dois…", choice(["poser les deux expressions de coût égales et résoudre", "comparer seulement les frais d'adhésion", "comparer seulement les coûts mensuels", "trouver les abscisses à l'origine"], 0),
      "Coûts égaux = point d'intersection.", ["Résous une expression = l'autre."], "les poser égales"),
    q("méthode", String.raw`Une table a \(x=0, 3, 4, 9\). Pour vérifier si elle est linéaire, tu dois…`, choice(["calculer Δy/Δx pour chaque paire", "calculer les premières différences de y", "calculer les deuxièmes différences", "vérifier les rapports des y"], 0),
      "Les pas en x sont inégaux.", ["Les premières différences ne fonctionnent que pour des pas égaux."], "Δy/Δx"),
    q("méthode", "Quelle représentation montre la valeur initiale et le taux de variation d'un coup d'œil?", choice(["y = mx + b", "Ax + By + C = 0", "une liste de points", "un nuage de points"], 0),
      "Quelle forme affiche m et b?", ["La forme fonctionnelle."], "y = mx + b"),
    q("méthode", "Pour trouver l'abscisse à l'origine d'une droite sous la forme générale, tu…", choice(["poses y = 0 et résous pour x", "poses x = 0 et résous pour y", "calcules −A/B", "calcules −C/A pour y"], 0),
      "L'axe des x est là où y = 0.", [String.raw`Par exemple \(2x-5y-10=0\) : \(2x=10\), \(x=5\).`], "poser y = 0"),
    q("méthode", "Pour montrer que deux côtés d'un quadrilatère sont perpendiculaires, tu…", choice(["montres que le produit de leurs pentes est −1", "montres que leurs pentes sont égales", "montres qu'ils ont la même longueur", "montres qu'ils ont la même ordonnée à l'origine"], 0),
      "Des pentes perpendiculaires sont opposées et inverses.", ["Produit −1."], "le produit des pentes est −1"),
  ]),

  examples([
    ["Linéaire ou non, puis modéliser", String.raw`Un ressort s'allonge quand on ajoute des masses : \((0\ \text{g},\ 12\ \text{cm})\), \((50,\ 14.5)\), \((150,\ 19.5)\), \((200,\ 22)\). La relation est-elle linéaire? Écris une équation et trouve la longueur pour \(320\) g.`,
      [String.raw`<b>Test.</b> Avec des pas inégaux en masse, compare les taux \(\dfrac{\Delta L}{\Delta m}\) : \(\tfrac{14.5-12}{50}\), \(\tfrac{19.5-14.5}{100}\), \(\tfrac{22-19.5}{50}\). Taux égaux → linéaire, \(L=(\text{taux})m+(\text{longueur à }0)\).`, String.raw`\(\frac{2.5}{50}=\frac{5}{100}=\frac{2.5}{50}=0.05\) cm/g : linéaire.`, String.raw`\(L=0.05m+12\). \(m=320\) : \(16+12=28\) cm.`, String.raw`<b>Vérifie une donnée :</b> \(0.05(150)+12=7.5+12=19.5\) ✓`],
      String.raw`\(L=0.05m+12\); \(28\) cm`],
    ["Deux points, puis une décision", String.raw`L'entreprise A demande \(C=0.45d+30\). L'entreprise B a demandé \(66\) dollars pour \(60\) km et \(102\) dollars pour \(150\) km. Trouve l'équation de B et la distance où les entreprises coûtent la même chose.`,
      [String.raw`<b>Plan.</b> (1) La pente à partir des deux points de B; (2) \(b\) en remplaçant un point; (3) « coûtent la même chose » signifie que les deux équations sont égales, donc pose-les égales et résous.`, String.raw`B : \(m=\frac{102-66}{150-60}=0.4\); \(66=0.4(60)+b\Rightarrow b=42\) : \(C=0.4d+42\).`, String.raw`\(0.45d+30=0.4d+42\Rightarrow0.05d=12\Rightarrow d=240\) km (les deux à \(138\) dollars).`, String.raw`<b>Vérification :</b> A : \(0.45(240)+30=138\); B : \(0.4(240)+42=138\) ✓`],
      String.raw`B : \(C=0.4d+42\); égales à \(240\) km`],
    ["Forme générale et coordonnées à l'origine", String.raw`Réécris \(3x-4y+24=0\) sous la forme fonctionnelle, donne les deux coordonnées à l'origine et trouve la droite qui lui est perpendiculaire et qui passe par l'origine.`,
      [String.raw`<b>Outils.</b> Isole \(y\) pour la forme fonctionnelle; pose \(y=0\) pour l'abscisse à l'origine (\(3x+24=0\Rightarrow x=-8\)); une pente perpendiculaire est l'opposé de l'inverse.`, String.raw`\(y=\tfrac34x+6\) : \(m=\tfrac34\), ordonnée à l'origine \(6\); abscisse à l'origine \(-8\).`, String.raw`Pente perpendiculaire \(-\tfrac43\) passant par \((0,0)\) : \(y=-\tfrac43x\).`, String.raw`<b>Vérification :</b> \(\tfrac34\times\left(-\tfrac43\right)=-1\) ✓`],
      String.raw`\(y=\tfrac34x+6\); \((-8,0)\), \((0,6)\); \(y=-\tfrac43x\)`],
    ["Un modèle d'inéquation", String.raw`Une boulangerie dispose de \(30\) h de temps de four. Le pain prend \(1.5\) h par fournée et les gâteaux \(2\) h par fournée. Écris une inéquation, trouve les coordonnées à l'origine et décide si \(8\) fournées de pain et \(9\) fournées de gâteaux sont possibles.`,
      [String.raw`<b>Modèle.</b> temps de four utilisé \(=1.5\times\)(fournées de pain) \(+2\times\)(fournées de gâteaux), qui doit être d'au plus \(30\) h, donc utilise \(\le\). Coordonnées à l'origine : \(c=0\Rightarrow b=30\div1.5\); \(b=0\Rightarrow c=30\div2\).`, String.raw`\(1.5b+2c\le30\). Coordonnées à l'origine : \(b=20\), \(c=15\).`, String.raw`\((8,9)\) : \(12+18=30\le30\) ✓ — utilise exactement tout le temps (sur la frontière).`],
      String.raw`\(1.5b+2c\le30\); oui`,
      plane({ view: { xmin: 0, xmax: 22, ymin: 0, ymax: 17 }, lines: [{ m: -0.75, b: 15, label: "1.5b + 2c = 30", lx: 12 }], shade: { m: -0.75, b: 15, above: false }, points: [{ x: 8, y: 9, label: "(8, 9)", color: "green" }], xlabel: "pain b", ylabel: "gâteaux c", step: { x: 2, y: 3 } })],
    ["Une relation non linéaire", String.raw`Le prix d'un billet \(p\) et le nombre de billets vendus \(n\) sont liés par \(pn=6000\) (le total reste fixe). Complète la table pour \(p=10, 20, 30, 50\), classe la relation et décris le graphique.`,
      [String.raw`<b>Test.</b> Si le produit des deux variables est constant (\(pn=6000\)), la relation est une variation inverse, et non linéaire : \(n=\dfrac{6000}{p}\).`, String.raw`\(n=\frac{6000}{p}\) : \(600, 300, 200, 120\).`, String.raw`Le produit est constant : variation inverse. Doubler le prix réduit de moitié le nombre de billets vendus.`, String.raw`<b>Vérifie chaque ligne :</b> \(10(600)=20(300)=30(200)=50(120)=6000\) ✓. Les premières différences \(-300,-100,-80\) ne sont pas constantes, donc ce n'est pas linéaire.`],
      "variation inverse; une courbe qui s'approche des axes"],
  ]),

  section("📌 Révision mixte", String.raw`<p>Chaque question utilise plus d'une leçon.</p>`),

  practice([
    q("pente + ordonnée à l'origine", String.raw`Trouve l'équation de la droite passant par \((-2,9)\) et \((3,-1)\).`, expr("-2x+5"), "La pente, puis b.", [String.raw`\(m=\frac{-10}{5}=-2\); \(9=4+b\Rightarrow b=5\).`], String.raw`\(y=-2x+5\)`, { placeholder: "y = …" }),
    q("intersection", String.raw`Où \(y=-2x+5\) et \(y=x-4\) se rencontrent-elles? Donne l'abscisse.`, num(3), "Pose-les égales.", [String.raw`\(-2x+5=x-4\Rightarrow3x=9\).`], String.raw`\(x=3\)`),
    q("forme générale", String.raw`Quelle est l'ordonnée à l'origine de \(4x-3y+18=0\)?`, num(6), "Pose x = 0.", [String.raw`\(-3y=-18\Rightarrow y=6\).`], String.raw`\(6\)`),
    q("non linéaire", String.raw`Quelle relation a des deuxièmes différences constantes : \(y=4x-1\), \(y=x^2-3x\), \(y=3^x\) ou \(xy=8\)?`, choice([String.raw`\(y=x^2-3x\)`, String.raw`\(y=4x-1\)`, String.raw`\(y=3^x\)`, String.raw`\(xy=8\)`], 0), "Les relations quadratiques.", ["Elle est quadratique."], String.raw`\(y=x^2-3x\)`),
    q("perpendiculaire", String.raw`Écris la droite perpendiculaire à \(y=\tfrac13x+2\) qui passe par \((1,4)\).`, expr("-3x+7"), "Pente −3, puis b.", [String.raw`\(4=-3(1)+b\Rightarrow b=7\).`], String.raw`\(y=-3x+7\)`, { placeholder: "y = …" }),
  ]),

  section("📌 Suis-je prêt ou prête pour le test?", String.raw`<ul style="list-style:none;padding-left:0;">
    ${[
      ["4.1", "Je peux identifier les variables, choisir un graphique discret ou continu et raconter l'histoire d'un graphique distance-temps."],
      ["4.2", "Je peux décider si une relation est linéaire et reconnaître les relations quadratiques, exponentielles et inverses (xy = k)."],
      ["4.3", "Je peux trouver m et b à partir de mots, de tables, de graphiques et d'équations, et distinguer une variation directe d'une variation partielle."],
      ["4.4", "Je peux trouver et interpréter le point d'intersection de deux droites."],
      ["4.5", "Je peux tracer des droites horizontales, verticales et de variation directe, ainsi que des inéquations linéaires."],
      ["4.6", "Je peux décrire l'effet d'un changement de m et de b."],
      ["4.7", "Je peux trouver l'équation d'une droite à partir d'un graphique, de deux points, ou d'un point et d'une pente."],
      ["4.8", "Je peux passer de la forme générale à la forme fonctionnelle et inversement, et utiliser les coordonnées à l'origine."],
      ["4.9", "Je peux tester et construire des droites parallèles et perpendiculaires."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  widget("inequalityRegion", { initM: -0.5, initB: 3 }),

  wrapUp({
    qas: [
      ["Comment devrais-je étudier pour ce test?", "Fais la révision mixte sans tes notes. Pour chaque erreur, retourne à l'explorateur et à la série d'exercices de cette leçon. Essaie ensuite les problèmes de niveau 3 des fiches d'exercices de tes deux leçons les plus faibles."],
      ["Quelles sont les erreurs les plus fréquentes?", "Mélanger l'ordre dans la formule de la pente, oublier de diviser chaque terme par B, confondre x = k et y = k, prendre l'inverse sans changer le signe, et utiliser les premières différences avec des pas inégaux."],
      ["Comment vérifier une équation que j'ai trouvée?", "Remplace les deux points donnés (ou une ligne de la table); les deux doivent la vérifier."],
      ["Quand un graphique suffit-il?", "Pour des estimations et pour décrire des tendances. Pour des intersections ou des prédictions exactes, utilise l'équation."],
      ["Quel est le lien entre ce chapitre et la suite?", "Les relations linéaires modélisent des données (chapitre 6), l'argent (chapitre 7) et tout le travail de 10e année en géométrie analytique et en systèmes d'équations."],
    ],
    summary: [
      "Relations linéaires : taux de variation constant; y = mx + b ou Ax + By + C = 0.",
      "On trouve des équations à partir de deux points; on compare des droites avec les intersections; des régions avec les inéquations.",
      "Non linéaires : quadratique (2es différences), exponentielle (rapport), inverse (xy = k).",
    ],
    next: "fais le test du chapitre 4. Le chapitre 5 porte sur la géométrie et la mesure.",
  }),
];
