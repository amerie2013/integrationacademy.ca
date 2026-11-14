// MTH1W-FR 4.4 — Comparer des droites (format autonome) : taux, valeurs initiales, point d'intersection
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { plane } from "./figs4.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "4.4 Comparer des droites";
export const ID = lessonId(4, 4);

export const blocks = () => [
  intro({
    icon: "⚖️",
    title: "Comparer des droites",
    overview: String.raw`Deux forfaits de téléphone, deux centres de conditionnement physique, deux coureurs : les vraies décisions comparent souvent deux relations linéaires. Dans cette leçon, tu vas comparer leurs <strong>taux de variation</strong> et leurs <strong>valeurs initiales</strong>, trouver le <strong>point d'intersection</strong> — là où elles sont égales — à l'aide d'une table, d'un graphique et de l'algèbre, puis l'utiliser pour décider quelle option est la meilleure selon les valeurs.`,
    goals: [
      "comparer deux relations linéaires selon leurs pentes (taux) et leurs ordonnées à l'origine (valeurs initiales);",
      "trouver le point d'intersection à partir d'une table de valeurs;",
      "estimer le point d'intersection à partir d'un graphique;",
      "trouver le point d'intersection exactement par l'algèbre en posant les deux expressions égales;",
      "interpréter le point d'intersection et décider quelle option est la meilleure de chaque côté de celui-ci.",
    ],
    curriculum: "C4.1 (comparer des relations linéaires), C4.4 (résoudre des problèmes; point d'intersection)",
    prior: [
      [String.raw`Résous \(3x+5=x+13\).`, String.raw`\(2x=8\), \(x=4\).`],
      [String.raw`Quelle droite est la plus inclinée, celle de pente \(2\) ou celle de pente \(-5\)?`, String.raw`La pente \(-5\) (plus grande en grandeur).`],
      [String.raw`Évalue \(30+0.1m\) pour \(m=150\).`, String.raw`\(45\).`],
    ],
    words: [
      ["Point d'intersection", "le point où deux droites se rencontrent : même x, même y", "(150, 45)"],
      ["Système linéaire", "deux relations linéaires considérées ensemble", ""],
      ["Seuil de rentabilité", "la valeur où deux options coûtent la même chose", ""],
      ["Droites parallèles", "même pente, ordonnée à l'origine différente : elles ne se rencontrent jamais", "aucune solution"],
    ],
  }),

  section("📌 Comparer les taux et les valeurs de départ", String.raw`
  <p>Le forfait A coûte \(30\) dollars plus \(0.10\) dollar la minute; le forfait B coûte \(15\) dollars plus \(0.20\) dollar la minute.</p>
  ${table(["", "Forfait A : \\(C=0.10m+30\\)", "Forfait B : \\(C=0.20m+15\\)"], [["Valeur initiale", "30 (plus élevée)", "15 (plus basse)"], ["Taux de variation", "0.10 par min (plus lent)", "0.20 par min (plus rapide)"]])}
  <p>B commence moins cher mais augmente plus vite, donc les droites doivent se croiser. Avant le croisement, B est moins cher; après, A est moins cher.</p>
  ${plane({ view: { xmin: 0, xmax: 300, ymin: 0, ymax: 80 }, lines: [{ m: 0.1, b: 30, color: "blue", label: "A" , lx: 260 }, { m: 0.2, b: 15, color: "red", label: "B", lx: 250 }], points: [{ x: 150, y: 45, label: "(150, 45)", color: "green" }], xlabel: "minutes m", ylabel: "coût C", step: { x: 50, y: 10 } }, "Les forfaits coûtent la même chose à 150 minutes (45 dollars).")}
  ${keyIdea(String.raw`Au point d'intersection, les deux relations ont le <strong>même x et le même y</strong>. Pour le trouver par l'algèbre, pose les deux expressions égales et résous.`)}`),

  section("📌 Trois façons de trouver l'intersection", String.raw`
  ${table(["Méthode", "Comment", "Forfaits A et B"], [
    ["Table", "calcule les deux pour les mêmes valeurs de x; cherche des y égaux", "à 150 min, les deux valent 45"],
    ["Graphique", "lis où les droites se croisent (une estimation)", "environ (150, 45)"],
    ["Algèbre", "pose les expressions égales et résous", "\\(0.10m+30=0.20m+15\\Rightarrow15=0.10m\\Rightarrow m=150\\)"],
  ])}
  ${watchOut([
    "Après avoir trouvé x, remplace-le dans l'une des équations pour obtenir y — et vérifie dans l'autre.",
    "Des droites parallèles (même pente, ordonnées à l'origine différentes) ne se rencontrent jamais : aucun point d'intersection.",
    "Réponds à la question dans son contexte : « les forfaits coûtent la même chose, 45 dollars, à 150 minutes ».",
  ])}
  <p>Utilise l'explorateur : modifie les pentes et les ordonnées à l'origine et observe le point d'intersection se déplacer. Rends les pentes égales pour voir des droites parallèles.</p>`),

  widget("linePair", { init: [1, 2, -2, 8] }),

  examples([
    ["Comparer deux relations", String.raw`La coureuse A part avec \(100\) m d'avance et court à \(4\) m/s; le coureur B part de la ligne et court à \(6\) m/s. Écris les deux équations et compare-les.`,
      [String.raw`<b>Modèle.</b> distance \(=\) distance de départ \(+\) vitesse \(\times\) temps, c'est-à-dire \(d=mt+b\) : la vitesse est la pente \(m\), l'avance est l'ordonnée à l'origine \(b\).`, String.raw`A : \(d=4t+100\); B : \(d=6t\).`, "A a la plus grande valeur initiale; B a le plus grand taux (droite plus inclinée), donc B finit par rattraper A.", String.raw`<b>Pourquoi B rattrape A :</b> B gagne \(6-4=2\) m chaque seconde, et l'écart est de \(100\) m, donc il le comble en \(100\div2=50\) s.`],
      String.raw`A : \(d=4t+100\); B : \(d=6t\)`],
    ["L'intersection à partir d'une table", String.raw`Quand B rattrape-t-il A? Utilise une table.
    ${table(["t (s)", "0", "20", "40", "50", "60"], [["A : 4t + 100", "100", "180", "260", "300", "340"], ["B : 6t", "0", "120", "240", "300", "360"]])}`,
      [String.raw`<b>Sens.</b> Le point d'intersection est l'endroit où les deux relations ont le même \(t\) <b>et</b> le même \(d\) : cherche une colonne où les deux valeurs sont égales.`, String.raw`À \(t=50\), les deux sont à \(300\) m.`, String.raw`<b>Vérifie avec les équations :</b> \(4(50)+100=300\) et \(6(50)=300\) ✓`],
      String.raw`après \(50\) s, à \(300\) m du départ de B`],
    ["L'intersection par l'algèbre", String.raw`Trouve le point d'intersection de \(y=3x+1\) et de \(y=-x+9\).`,
      [String.raw`<b>Méthode.</b> À l'intersection, les deux équations donnent le même \(y\), donc pose les membres de droite égaux et résous pour \(x\); remplace ensuite pour trouver \(y\).`, String.raw`\(3x+1=-x+9\Rightarrow4x=8\Rightarrow x=2\).`, String.raw`\(y=3(2)+1=7\). Vérification : \(-2+9=7\) ✓`],
      String.raw`\((2, 7)\)`],
    ["Lire un graphique", String.raw`Estime le point d'intersection, puis confirme par l'algèbre.`,
      [String.raw`<b>Méthode.</b> Un graphique donne une estimation; poser les deux expressions égales (\(x+2=-0.5x+5\)) donne le point exact.`, String.raw`Les droites semblent se croiser vers \((2,4)\).`, String.raw`\(x+2=-0.5x+5\Rightarrow1.5x=3\Rightarrow x=2\); \(y=4\).`, String.raw`<b>Vérifie dans la deuxième droite :</b> \(-0.5(2)+5=4\) ✓`],
      String.raw`\((2,4)\)`,
      plane({ view: { xmin: -4, xmax: 8, ymin: -2, ymax: 8 }, lines: [{ m: 1, b: 2, color: "blue", label: "y = x + 2", lx: 4 }, { m: -0.5, b: 5, color: "red", label: "y = −0.5x + 5", lx: 5 }], points: [{ x: 2, y: 4, color: "green" }] })],
    ["Une décision", String.raw`Le centre A demande \(50\) dollars d'adhésion plus \(20\) dollars par mois. Le centre B demande \(110\) dollars d'adhésion plus \(10\) dollars par mois. Quel centre est le moins cher, et quand?`,
      [String.raw`<b>Modèle.</b> coût \(=\) frais d'adhésion \(+\) taux mensuel \(\times\) mois : A : \(C=50+20m\), B : \(C=110+10m\). Le centre le moins cher change à l'intersection.`, String.raw`Égaux quand \(50+20m=110+10m\Rightarrow10m=60\Rightarrow m=6\) (les deux à \(170\) dollars).`, String.raw`Avant \(6\) mois, A est moins cher (p. ex. \(3\) mois : A \(110\), B \(140\)).`, String.raw`Après \(6\) mois, B est moins cher (p. ex. \(12\) : A \(290\), B \(230\)).`, String.raw`<b>Raison :</b> A commence \(60\) dollars moins cher mais coûte \(10\) de plus chaque mois, donc les \(60\) sont épuisés après \(60\div10=6\) mois ✓`],
      "A pour moins de 6 mois, B pour plus de 6 mois; égaux à 6 mois"],
  ]),

  practice([
    q("inclinaison", String.raw`Quelle droite est la plus inclinée?`, choice([String.raw`\(y=-4x+1\)`, String.raw`\(y=3x-10\)`, String.raw`\(y=\tfrac12x+20\)`, String.raw`\(y=2x\)`], 0),
      "Compare la grandeur des pentes, sans tenir compte des signes.", [String.raw`\(|-4|=4\) est la plus grande.`], String.raw`\(y=-4x+1\)`),
    q("x de l'intersection", String.raw`Trouve l'abscisse du point d'intersection de \(y=3x-4\) et de \(y=x+6\).`, num(5),
      "Pose les membres de droite égaux.", [String.raw`\(3x-4=x+6\Rightarrow2x=10\Rightarrow x=5\).`], String.raw`\(x=5\)`),
    q("y de l'intersection", String.raw`Pour les mêmes deux droites, quelle est l'ordonnée du point d'intersection?`, num(11),
      "Remplace x par 5 dans l'une des équations.", [String.raw`\(5+6=11\); vérification \(3(5)-4=11\) ✓`], String.raw`\(y=11\)`),
    q("parallèles", String.raw`Combien de points \(y=2x+7\) et \(y=2x-4\) ont-elles en commun?`, choice(["aucun", "un", "deux", "une infinité"], 0),
      "Compare les pentes.", ["Même pente, ordonnées à l'origine différentes : des droites parallèles ne se rencontrent jamais."], "aucun"),
    q("seuil de rentabilité", String.raw`L'entreprise A demande \(C=40+25h\); l'entreprise B demande \(C=70+15h\). Pour combien d'heures \(h\) coûtent-elles la même chose?`, num(3),
      "Pose les coûts égaux.", [String.raw`\(40+25h=70+15h\Rightarrow10h=30\Rightarrow h=3\).`], String.raw`\(3\) heures`),
  ]),

  wrapUp({
    qas: [
      ["Que signifie le point d'intersection dans une histoire?", "La valeur de la variable indépendante où les deux options donnent le même résultat — le seuil de rentabilité. D'un côté, une option est meilleure; de l'autre côté, c'est l'autre."],
      ["Pourquoi un graphique ne peut-il qu'estimer l'intersection?", "Lire un point de croisement sur un quadrillage est limité par l'échelle. L'algèbre donne la valeur exacte; le graphique montre la vue d'ensemble et vérifie l'algèbre."],
      ["Et si les deux droites sont identiques?", "Tous les points sont communs : une infinité de solutions. Cela arrive quand les pentes et les ordonnées à l'origine sont toutes deux égales."],
      ["Comment savoir quelle option est la moins chère pour de grandes valeurs?", "Celle qui a le plus petit taux de variation (la moins inclinée) finit par l'emporter, peu importe où elle commence."],
      ["Ai-je toujours besoin d'une table?", "Non. Une table aide quand l'intersection tombe sur une valeur pratique; l'algèbre fonctionne à tout coup."],
    ],
    summary: [
      "On compare des droites selon la pente (taux) et l'ordonnée à l'origine (valeur initiale).",
      "Point d'intersection : même x et même y; on le trouve par une table, un graphique ou l'algèbre.",
      "Algèbre : pose les expressions égales, résous pour x, remplace pour trouver y, vérifie.",
      "Des droites parallèles (pentes égales) ne se rencontrent jamais.",
    ],
    next: "la leçon 4.5 trace des droites particulières — horizontales, verticales et passant par l'origine — et des inéquations linéaires.",
  }),
];
