// MTH1W-FR 4.1 — Relations (format autonome)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "./figs4.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "4.1 Relations";
export const ID = lessonId(4, 1);

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Relations",
    overview: String.raw`Une <strong>relation</strong> décrit comment une quantité dépend d'une autre : le coût d'une course en taxi dépend de la distance, la hauteur d'une plante dépend du nombre de jours. Dans cette leçon, tu vas identifier la variable <strong>indépendante</strong> et la variable <strong>dépendante</strong>, passer d'une représentation à l'autre (mots, table de valeurs, graphique, équation), décider si des données sont <strong>discrètes</strong> ou <strong>continues</strong> et lire des histoires dans des <strong>graphiques distance-temps</strong>. Toutes les leçons suivantes de ce chapitre s'appuient sur ces idées.`,
    goals: [
      "identifier la variable indépendante et la variable dépendante dans une situation;",
      "représenter une relation par des mots, une table de valeurs, un graphique et une équation, et passer de l'un à l'autre;",
      "décider si une relation est discrète (points séparés) ou continue (une droite ou une courbe continue);",
      "interpréter un graphique distance-temps : l'inclinaison est la vitesse, une partie horizontale signifie aucun mouvement, une partie descendante signifie un retour;",
      "utiliser un graphique pour interpoler (estimer entre les données) et extrapoler (prédire au-delà des données).",
    ],
    curriculum: "C3.1 (relations tirées de situations réelles; tables et graphiques), C4.1 (caractéristiques des graphiques)",
    prior: [
      [String.raw`Évalue \(12+3t\) pour \(t=0,1,2\).`, String.raw`\(12, 15, 18\).`],
      [String.raw`Place le point \((3,-2)\) : dans quelle direction te déplaces-tu d'abord?`, String.raw`De \(3\) vers la droite, puis de \(2\) vers le bas.`],
      [String.raw`Une voiture parcourt \(150\) km en \(2\) h. Quelle est sa vitesse moyenne?`, String.raw`\(75\) km/h.`],
    ],
    words: [
      ["Relation", "un lien entre deux variables", "le coût et le nombre de billets"],
      ["Variable indépendante", "la variable que tu choisis ou contrôles; placée sur l'axe horizontal", "le temps, le nombre d'articles"],
      ["Variable dépendante", "la variable qui réagit; placée sur l'axe vertical", "le coût, la distance, la hauteur"],
      ["Discrète", "seules des valeurs séparées ont du sens (des dénombrements); graphique en points", "le nombre de billets"],
      ["Continue", "toute valeur d'un intervalle a du sens (des mesures); graphique en droite ou en courbe", "le temps, le volume"],
      ["Interpoler / extrapoler", "estimer entre / au-delà des données connues", ""],
    ],
  }),

  section("📌 Variables et représentations", String.raw`
  <p>Les billets de concert coûtent \(15\) dollars chacun, plus des frais de service de \(5\) dollars. Le <strong>nombre de billets</strong> \(n\) est la variable indépendante (c'est toi qui le choisis); le <strong>coût</strong> \(C\) en dépend.</p>
  ${table(["Représentation", "Pour la relation des billets"], [
    ["Mots", "le coût est de 5 dollars plus 15 dollars par billet"],
    ["Équation", "\\(C=15n+5\\)"],
    ["Table", table(["\\(n\\)", "1", "2", "3", "4"], [["\\(C\\)", "20", "35", "50", "65"]])],
  ])}
  ${plane({ view: { xmin: 0, xmax: 6, ymin: 0, ymax: 100 }, points: [1, 2, 3, 4, 5].map((n) => ({ x: n, y: 15 * n + 5, color: "blue" })), xlabel: "billets n", ylabel: "coût C", step: { x: 1, y: 10 } }, "Les billets se comptent, donc le graphique est formé de points séparés (discret).")}
  ${keyIdea(String.raw`La variable indépendante va sur l'axe <strong>horizontal</strong>, la variable dépendante sur l'axe <strong>vertical</strong>. Demande-toi : « Quelle quantité dépend de laquelle? »`)}`),

  section("📌 Discrète ou continue?", String.raw`
  <p>Si seules des valeurs entières ont du sens (personnes, billets, figures d'une suite), la relation est <strong>discrète</strong> : place des points et ne les relie pas. Si toutes les valeurs intermédiaires ont du sens (temps, distance, masse, volume), elle est <strong>continue</strong> : relie les points par une droite ou une courbe lisse.</p>
  ${plane({ view: { xmin: 0, xmax: 10, ymin: 0, ymax: 500 }, lines: [{ m: 45, b: 50, color: "green", label: "V = 50 + 45t" }], xlabel: "temps t (min)", ylabel: "volume (L)", step: { x: 1, y: 50 } }, "Une baignoire contenant 50 L se remplit à 45 L/min : le temps est continu, donc le graphique est une droite pleine.")}
  ${watchOut([
    "Relier les points d'une relation discrète laisse croire que des valeurs comme 2.5 billets existent.",
    "Place la variable indépendante sur l'axe horizontal, même si la question nomme l'autre variable en premier.",
    "Identifie les deux axes avec la quantité et son unité.",
  ])}`),

  section("📌 Des graphiques qui racontent une histoire", String.raw`
  <p>Sur un <strong>graphique distance-temps</strong>, l'inclinaison d'un segment est la vitesse. Un segment horizontal signifie que la personne ne bouge pas; un segment qui descend signifie que la distance au point de départ diminue (elle revient).</p>
  <p>Déplace le curseur du temps et lis l'histoire : Maya marche jusqu'à un magasin, fait ses achats, puis rentre chez elle en courant.</p>`),

  widget("motionStory", {}),

  examples([
    ["Indépendante et dépendante", String.raw`La charge de la pile d'un téléphone est mesurée toutes les \(10\) minutes pendant qu'une vidéo joue. Nomme la variable indépendante et la variable dépendante, et dis si la relation est discrète ou continue.`,
      [String.raw`<b>Définitions.</b> La variable <b>indépendante</b> est celle qu'on choisit ou qui change d'elle-même (elle va sur l'axe horizontal); la variable <b>dépendante</b> réagit à celle-ci (axe vertical). Une relation est <b>continue</b> si les valeurs intermédiaires ont du sens, <b>discrète</b> si seules des valeurs séparées en ont.`, "Le temps est choisi ou contrôlé; la charge réagit au temps.", "Le temps et la charge peuvent prendre n'importe quelle valeur intermédiaire : la relation est continue.", String.raw`<b>Test :</b> « La charge dépend-elle du temps? » Oui. « Le temps dépend-il de la charge? » Non — donc le temps est la variable indépendante ✓`],
      String.raw`indépendante : le temps; dépendante : la charge de la pile; continue`],
    ["Des mots à la table, au graphique et à l'équation", String.raw`Un centre de conditionnement physique demande des frais d'adhésion de \(40\) dollars plus \(25\) dollars par mois. Construis une table de \(0\) à \(4\) mois, écris une équation et décris le graphique.`,
      [String.raw`<b>Modèle.</b> \[\text{total}=\text{montant fixe}+\text{taux}\times\text{nombre}\] donc \(C=40+25m\) : \(40\) est la valeur de départ (à \(m=0\)) et \(25\) est le taux de variation par mois.`, String.raw`\(C=40+25m\) : \(m=0,1,2,3,4\) donne \(C=40, 65, 90, 115, 140\).`, String.raw`Les mois se comptent (tu paies par mois complet) : place des points séparés.`, String.raw`Les points montent de \(25\) pour chaque mois et commencent à \(40\) sur l'axe vertical.`, String.raw`<b>Vérification :</b> chaque ligne augmente du taux : \(65-40=90-65=\dots=25\) ✓`],
      String.raw`\(C=40+25m\); points \((0,40), (1,65),\dots,(4,140)\)`,
      plane({ view: { xmin: 0, xmax: 5, ymin: 0, ymax: 160 }, points: [0, 1, 2, 3, 4].map((m) => ({ x: m, y: 40 + 25 * m, color: "blue" })), xlabel: "mois m", ylabel: "coût C", step: { x: 1, y: 20 } })],
    ["Lire une histoire", String.raw`Le graphique montre la distance entre Jon et sa maison pendant une randonnée à vélo. Décris chaque partie du trajet, avec les vitesses.`,
      [String.raw`<b>Lire un graphique distance-temps.</b> Montée = s'éloigne de la maison, horizontal = arrêté, descente = revient. L'inclinaison est la vitesse : \(\text{vitesse}=\dfrac{\text{variation de la distance}}{\text{variation du temps}}\).`, String.raw`De \(0\) à \(20\) min : de \(0\) à \(6\) km, vitesse \(6\div20=0.3\) km/min (\(18\) km/h).`, String.raw`De \(20\) à \(30\) min : horizontal à \(6\) km — arrêté pendant \(10\) min.`, String.raw`De \(30\) à \(40\) min : de \(6\) à \(0\) km — retour à la maison à \(0.6\) km/min (\(36\) km/h), deux fois plus vite.`, String.raw`<b>Vérification des unités :</b> \(0.3\) km/min \(\times60\) min/h \(=18\) km/h ✓; \(0.6\times60=36\) km/h ✓`],
      "aller à 18 km/h, arrêt de 10 min, retour à 36 km/h",
      plane({ view: { xmin: 0, xmax: 45, ymin: 0, ymax: 8 }, segs: [{ pts: [[0, 0], [20, 6], [30, 6], [40, 0]] }], xlabel: "temps (min)", ylabel: "distance (km)", step: { x: 5, y: 1 } })],
    ["Interpoler et extrapoler", String.raw`Un tournesol mesure \(12\) cm le jour \(5\), \(24\) cm le jour \(10\) et \(36\) cm le jour \(15\). Estime sa hauteur le jour \(8\) et prédis-la pour le jour \(25\). Quelle estimation est la moins fiable?`,
      [String.raw`<b>Définitions.</b> <b>Interpoler</b> = estimer à l'intérieur de l'étendue des données (jours \(5\) à \(15\)); <b>extrapoler</b> = prédire à l'extérieur, ce qui suppose que la tendance se maintient.`, String.raw`Il pousse de \(12\) cm tous les \(5\) jours, soit \(2.4\) cm/jour; hauteur \(=2.4d\).`, String.raw`Jour \(8\) (interpolation) : \(2.4(8)=19.2\) cm.`, String.raw`Jour \(25\) (extrapolation) : \(60\) cm — moins fiable : la croissance peut ralentir.`, String.raw`<b>Vérifie la règle avec les données :</b> \(2.4(5)=12\), \(2.4(10)=24\), \(2.4(15)=36\) ✓`],
      String.raw`\(19.2\) cm; \(60\) cm (extrapolation, moins fiable)`],
    ["Choisir le bon graphique", String.raw`Quel graphique correspond à : « Sara marche lentement jusqu'à l'arrêt d'autobus, attend, puis va rapidement à l'école en autobus »? (distance de la maison en fonction du temps)`,
      [String.raw`<b>Règle.</b> Sur un graphique distance-temps, la pente de chaque partie montre la vitesse : une montée plus abrupte signifie plus vite; une partie horizontale signifie aucun mouvement.`, String.raw`Marche lente : une montée douce. Attente : horizontal. Autobus : une montée abrupte (rapide, en s'éloignant toujours de la maison).`, "Donc le graphique monte doucement, reste horizontal, puis monte abruptement.", String.raw`<b>Vérifie chaque phrase :</b> marche « lentement » → douce; « attend » → horizontal; « rapidement » → abrupte; jamais de descente, car Sara ne retourne jamais vers la maison ✓`],
      "montée douce → horizontal → montée abrupte"],
  ]),

  practice([
    q("variables", "Le coût d'une pizza dépend du nombre de garnitures. Quelle est la variable indépendante?", choice(["le nombre de garnitures", "le coût", "les deux", "aucune des deux"], 0),
      "Laquelle choisis-tu?", ["Tu choisis les garnitures; le coût réagit."], "le nombre de garnitures"),
    q("discrète/continue", "Quelle relation est continue?", choice(["la température d'une tasse de thé au fil du temps", "le coût de n billets de cinéma", "le nombre d'élèves dans chaque classe", "les tuiles de la figure n d'une suite"], 0),
      "Toutes les valeurs intermédiaires peuvent-elles se produire?", ["Le temps et la température peuvent prendre n'importe quelle valeur intermédiaire; les autres sont des dénombrements."], "la température au fil du temps"),
    q("table", String.raw`Un taxi demande \(C=4+2.5d\) dollars pour \(d\) km. Quel est le coût d'une course de \(6\) km?`, num(19),
      String.raw`Remplace \(d\) par \(6\).`, [String.raw`\(4+2.5(6)=4+15=19\).`], String.raw`\(19\) dollars`),
    q("vitesse", String.raw`Sur un graphique distance-temps, une coureuse passe de \(400\) m à \(1000\) m entre \(t=2\) min et \(t=5\) min. Quelle est sa vitesse en m/min?`, num(200),
      "Variation de la distance ÷ variation du temps.", [String.raw`\(\dfrac{1000-400}{5-2}=\dfrac{600}{3}=200\).`], String.raw`\(200\) m/min`),
    q("histoire", "Un graphique distance-temps a un segment qui DESCEND. Qu'est-ce que cela signifie?", choice(["la personne revient vers le point de départ", "la personne ralentit en s'éloignant", "la personne s'est arrêtée", "le temps recule"], 0),
      "L'axe vertical est la distance au point de départ.", ["La distance au point de départ diminue, donc la personne revient."], "elle revient vers le point de départ"),
  ]),

  wrapUp({
    qas: [
      ["Comment savoir quelle variable est indépendante?", "Demande-toi « quelle quantité est-ce que je choisis ou contrôle, et laquelle réagit? » Celle que tu contrôles (le temps, le nombre d'articles, la distance parcourue) est indépendante et va sur l'axe horizontal."],
      ["Pourquoi ne pas relier les points pour les billets?", "Parce qu'on ne peut pas acheter 2.5 billets. Relier les points affirmerait que des valeurs existent entre eux. Les mesures comme le temps peuvent prendre n'importe quelle valeur, donc leurs points sont reliés."],
      ["Que signifie un segment plus abrupt sur un graphique distance-temps?", "Une vitesse plus grande : plus de distance dans le même temps. Un segment horizontal signifie une vitesse de 0."],
      ["L'extrapolation est-elle toujours fausse?", "Non, mais elle suppose que la tendance se maintient au-delà des données, ce qui n'est souvent pas vrai (la croissance ralentit, les prix changent). L'interpolation entre des données connues est habituellement plus fiable."],
      ["Quelle représentation est la meilleure?", "Chacune a son rôle : l'équation donne des valeurs exactes, la table organise les données, le graphique montre la tendance d'un coup d'œil et les mots font le lien avec la situation réelle. Les bonnes réponses passent de l'une à l'autre."],
    ],
    summary: [
      "Une relation relie une variable indépendante (axe horizontal) et une variable dépendante (axe vertical).",
      "On représente les relations par des mots, des tables, des graphiques et des équations.",
      "Données discrètes : des points; données continues : une droite ou une courbe continue.",
      "Graphiques distance-temps : inclinaison = vitesse; horizontal = arrêté; descente = retour.",
    ],
    next: "la leçon 4.2 classe les relations en linéaires et non linéaires à l'aide des premières et des deuxièmes différences.",
  }),
];
