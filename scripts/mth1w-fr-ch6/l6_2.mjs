// MTH1W-FR 6.2 — Données à une variable et statistiques (miroir de ../mth1w-ch6/l6_2.mjs) : moyenne, médiane,
// mode, étendue, quartiles, écart interquartile, diagrammes de quartiles, valeurs aberrantes, tableaux de fréquences
// et histogrammes
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { boxPlot, dotPlot, histogram, barChart } from "./figs6.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "6.2 Données à une variable et statistiques";
export const ID = lessonId(6, 2);

export const blocks = () => [
  intro({
    icon: "📊",
    title: "Données à une variable et statistiques",
    overview: String.raw`Une liste de nombres devient utile quand tu peux la décrire en quelques mots : où se trouve le milieu, à quel point elle est dispersée et si quelque chose est inhabituel. Dans cette leçon, tu vas trouver la moyenne, la médiane et le mode, mesurer la dispersion avec l'étendue et l'écart interquartile, tracer des diagrammes de quartiles, repérer les valeurs aberrantes et lire des histogrammes — puis décider quel résumé raconte l'histoire la plus fidèle.`,
    goals: [
      "trouver la moyenne, la médiane et le mode, et choisir la meilleure mesure de tendance centrale;",
      "trouver l'étendue, les quartiles et l'écart interquartile (EI);",
      "tracer et interpréter un diagramme de quartiles à partir d'un résumé en cinq nombres;",
      "repérer les valeurs aberrantes avec la règle de 1.5 × EI et décrire leur effet;",
      "trouver la moyenne à partir d'un tableau de fréquences et lire un histogramme.",
    ],
    curriculum: "D1.2 (représenter et analyser des données à une variable : mesures de tendance centrale, de dispersion, quartiles, diagrammes de quartiles), D1.3",
    prior: [
      [String.raw`Place en ordre croissant : \(7, 3, 9, 3, 5\).`, String.raw`\(3, 3, 5, 7, 9\).`],
      [String.raw`Quel est le milieu de \(4\) et \(9\)?`, String.raw`\(\frac{4+9}{2}=6.5\).`],
      [String.raw`\(3\times12+5\times14=?\)`, String.raw`\(36+70=106\).`],
    ],
    words: [
      ["Moyenne", "somme ÷ nombre de valeurs", "la valeur moyenne"],
      ["Médiane", "valeur du milieu des données ordonnées", "la moitié en dessous, la moitié au-dessus"],
      ["Mode", "valeur la plus fréquente", "il peut n'y en avoir aucun ou plusieurs"],
      ["Quartiles Q1, Q3", "médianes de la moitié inférieure et de la moitié supérieure", "divisent les données en quarts"],
      ["EI (écart interquartile)", "Q3 − Q1 : la dispersion de la moitié centrale", "peu touché par les valeurs aberrantes"],
      ["Valeur aberrante", "une valeur très éloignée des autres", "à plus de 1.5 × EI de la boîte"],
    ],
  }),

  section("📌 Mesures de tendance centrale", String.raw`
  ${table(["Mesure", "Comment la trouver", "Idéale quand"], [
    ["Moyenne", "additionner toutes les valeurs, diviser par leur nombre", "les données sont assez symétriques, sans valeurs aberrantes"],
    ["Médiane", "ordonner les données; prendre la valeur du milieu (ou la moyenne des deux valeurs du milieu)", "il y a des valeurs aberrantes ou les données sont asymétriques (revenus, prix des maisons)"],
    ["Mode", "la valeur la plus fréquente", "données qualitatives, ou la taille ou le choix le plus populaire"],
  ])}
  ${keyIdea(String.raw`Pour \(n\) valeurs ordonnées, la médiane est en position \(\frac{n+1}{2}\). Avec \(n=9\), c'est la 5e valeur; avec \(n=10\), c'est à mi-chemin entre la 5e et la 6e.`)}`),

  section("📌 Dispersion : étendue, quartiles et diagramme de quartiles", String.raw`
  <p>L'<strong>étendue</strong> (max − min) n'utilise que les deux valeurs les plus extrêmes. Les <strong>quartiles</strong> divisent les données ordonnées en quatre parties égales :</p>
  <ol><li>Trouve la médiane (Q2). Elle sépare les données en une moitié inférieure et une moitié supérieure (si \(n\) est impair, laisse la médiane hors des deux moitiés).</li>
  <li>Q1 est la médiane de la moitié inférieure; Q3 est la médiane de la moitié supérieure.</li>
  <li>Le <strong>résumé en cinq nombres</strong> est : min, Q1, médiane, Q3, max. L'<strong>EI</strong> \(=Q_3-Q_1\).</li></ol>
  ${dotPlot({ data: [4, 6, 7, 7, 8, 9, 10, 11, 13, 14, 20], lo: 2, hi: 22, step: 2, label: "buts" })}
  ${boxPlot({ data: [4, 6, 7, 7, 8, 9, 10, 11, 13, 14, 20], lo: 2, hi: 22, step: 2, label: "buts", showValues: true }, "Résumé en cinq nombres : 4, 7, 9, 13, 20. Chaque partie du diagramme de quartiles contient environ le quart des données.")}
  ${keyIdea(String.raw`<strong>Valeurs aberrantes :</strong> une valeur est aberrante si elle est à plus de \(1.5\times\text{EI}\) sous \(Q_1\) ou au-dessus de \(Q_3\). Ici \(\text{EI}=6\), donc les bornes sont \(7-9=-2\) et \(13+9=22\) : \(20\) n'est <em>pas</em> une valeur aberrante.`)}
  <p>Utilise l'explorateur : ajoute une valeur extrême et observe la moyenne bondir pendant que la médiane bouge à peine.</p>`),

  widget("statsExplorer"),

  section("📌 Tableaux de fréquences et histogrammes", String.raw`
  <p>Quand des valeurs se répètent, un <strong>tableau de fréquences</strong> évite de tout réécrire. Pour trouver la moyenne, multiplie chaque valeur par sa fréquence, additionne et divise par la fréquence totale.</p>
  <p>Les données continues sont regroupées en <strong>intervalles</strong> de même largeur et présentées dans un <strong>histogramme</strong> : les bandes se touchent, et la hauteur indique combien de valeurs tombent dans chaque intervalle.</p>
  ${histogram({ bins: [[140, 150, 3], [150, 160, 8], [160, 170, 12], [170, 180, 6], [180, 190, 1]], xlabel: "taille (cm)" }, "Tailles de 30 élèves : la plupart mesurent entre 160 cm et 170 cm.")}`),

  widget("histogramBins"),

  section("📌 Stratégie", watchOut([
    "Ordonne toujours les données avant de trouver la médiane ou les quartiles.",
    "Avec un nombre pair de valeurs, la médiane est la moyenne des deux valeurs du milieu.",
    "La moyenne est tirée vers les valeurs aberrantes; la médiane et l'EI y résistent.",
    "Un diagramme à bandes a des espaces (catégories); les bandes d'un histogramme se touchent (intervalles continus).",
  ])),

  examples([
    ["Moyenne, médiane, mode", String.raw`Le nombre de minutes que huit élèves ont consacré à leurs devoirs était \(35, 50, 20, 45, 50, 60, 40, 30\). Trouve la moyenne, la médiane et le mode.`,
      [String.raw`<b>Définitions.</b> \[\text{moyenne}=\frac{\text{somme des valeurs}}{\text{nombre de valeurs}}\] La <i>médiane</i> est la valeur du milieu de la liste ordonnée; le <i>mode</i> est la valeur la plus fréquente.`,
        String.raw`<b>Moyenne :</b> somme \(=35+50+20+45+50+60+40+30=330\); moyenne \(=330\div8=41.25\) min.`,
        String.raw`<b>Médiane.</b> Ordonne les données : \(20, 30, 35, 40, 45, 50, 50, 60\). Avec \(n=8\) (pair), il y a deux valeurs du milieu, la 4e et la 5e : \(\frac{40+45}{2}=42.5\) min.`,
        String.raw`<b>Mode :</b> \(50\) apparaît deux fois, plus que toute autre valeur : mode \(=50\) min.`],
      String.raw`moyenne \(41.25\), médiane \(42.5\), mode \(50\) minutes`,
      dotPlot({ data: [35, 50, 20, 45, 50, 60, 40, 30], lo: 15, hi: 65, step: 5, label: "minutes", w: 360 })],
    ["Résumé en cinq nombres et diagramme de quartiles", String.raw`Trouve le résumé en cinq nombres et l'EI de \(12, 18, 7, 15, 21, 9, 16, 25, 14\), puis trace un diagramme de quartiles.`,
      [String.raw`<b>Définitions.</b> Résumé en cinq nombres : min, \(Q_1\), médiane, \(Q_3\), max. \(Q_1\) est la médiane de la moitié inférieure et \(Q_3\), celle de la moitié supérieure. \[\text{EI}=Q_3-Q_1\]`,
        String.raw`<b>Ordonner et trouver la médiane.</b> \(7, 9, 12, 14, 15, 16, 18, 21, 25\); \(n=9\), donc la médiane est la 5e valeur : \(15\).`,
        String.raw`<b>\(Q_1\) :</b> moitié inférieure \(7, 9, 12, 14\) : \(\frac{9+12}{2}=10.5\).`,
        String.raw`<b>\(Q_3\) :</b> moitié supérieure \(16, 18, 21, 25\) : \(\frac{18+21}{2}=19.5\).`,
        String.raw`<b>EI :</b> \(19.5-10.5=9\). La boîte va de \(10.5\) à \(19.5\) avec un trait à \(15\); les moustaches atteignent \(7\) et \(25\).`],
      String.raw`\(7, 10.5, 15, 19.5, 25\); EI \(=9\)`,
      boxPlot({ five: [7, 10.5, 15, 19.5, 25], lo: 4, hi: 28, step: 2, showValues: true })],
    ["Comparer deux diagrammes de quartiles", String.raw`Les résultats d'un test de la classe A ont le résumé en cinq nombres \(8, 12, 15, 17, 20\); ceux de la classe B, \(5, 13, 14, 16, 19\). Compare les classes.`,
      [String.raw`<b>Méthode.</b> Compare la <i>tendance centrale</i> (médiane) et la <i>dispersion</i> (EI et étendue).`,
        String.raw`<b>Tendance centrale :</b> la médiane de A, \(15\), est plus élevée que celle de B, \(14\).`,
        String.raw`<b>Dispersion de la moitié centrale :</b> EI de A \(=17-12=5\); EI de B \(=16-13=3\). La moitié centrale de B est plus régulière.`,
        String.raw`<b>Étendue :</b> A \(=20-8=12\); B \(=19-5=14\). L'étendue de B est plus grande seulement à cause d'un résultat faible.`],
      "A a obtenu des résultats un peu plus élevés; la moitié centrale de B était plus régulière",
      boxPlot({ five: [8, 12, 15, 17, 20], lo: 4, hi: 22, step: 2, label: "Classe A", showValues: true }) + boxPlot({ five: [5, 13, 14, 16, 19], lo: 4, hi: 22, step: 2, label: "Classe B", showValues: true })],
    ["Valeurs aberrantes et meilleure mesure", String.raw`Revenus hebdomadaires (en dollars) de sept élèves qui travaillent : \(80, 95, 100, 110, 115, 120, 400\). La valeur \(400\) est-elle aberrante? Quelle mesure de tendance centrale est la meilleure?`,
      [String.raw`<b>Règle des valeurs aberrantes.</b> Une valeur est aberrante si elle est supérieure à \(Q_3+1.5\times\text{EI}\) ou inférieure à \(Q_1-1.5\times\text{EI}\).`,
        String.raw`<b>Quartiles.</b> \(n=7\) : médiane (4e) \(=110\); moitié inférieure \(80, 95, 100\) : \(Q_1=95\); moitié supérieure \(115, 120, 400\) : \(Q_3=120\). EI \(=120-95=25\).`,
        String.raw`<b>Borne supérieure :</b> \(120+1.5(25)=120+37.5=157.5\). Puisque \(400>157.5\), \(400\) est une valeur aberrante.`,
        String.raw`<b>Moyenne :</b> \(1020\div7\approx145.7\), plus élevée que six des sept valeurs. La valeur aberrante tire la moyenne vers le haut.`,
        String.raw`<b>Meilleure mesure :</b> la médiane, \(110\), n'est pas touchée par la valeur aberrante et est plus représentative.`],
      String.raw`oui, \(400\) est une valeur aberrante; utilise la médiane (\(110\) dollars)`,
      boxPlot({ five: [80, 95, 110, 120, 120], lo: 60, hi: 420, step: 40, outliers: [400], label: "dollars" })],
    ["Moyenne à partir d'un tableau de fréquences", String.raw`Un sondage auprès de \(25\) familles a noté le nombre d'enfants : \(1\) enfant : \(8\) familles; \(2\) : \(10\); \(3\) : \(5\); \(4\) : \(2\). Trouve la moyenne et la médiane.`,
      [String.raw`<b>Règle.</b> \[\text{moyenne}=\frac{\sum(\text{valeur}\times\text{fréquence})}{\sum\text{fréquence}}\]`,
        String.raw`<b>Nombre total d'enfants :</b> \(1(8)+2(10)+3(5)+4(2)=8+20+15+8=51\).`,
        String.raw`<b>Moyenne :</b> \(51\div25=2.04\).`,
        String.raw`<b>Médiane.</b> \(n=25\), donc la médiane est la 13e famille. Totaux cumulés : les familles 1 à 8 ont 1 enfant, les familles 9 à 18 en ont 2. La 13e famille est dans le deuxième groupe : médiane \(=2\).`],
      String.raw`moyenne \(2.04\), médiane \(2\) enfants`,
      barChart({ bars: [["1", 8], ["2", 10], ["3", 5], ["4", 2]], step: 2, ylabel: "familles", w: 300 })],
  ]),

  practice([
    q("médiane", String.raw`Trouve la médiane de \(14, 9, 22, 17, 11, 20\).`, num(15.5),
      "Ordonne, puis fais la moyenne des deux valeurs du milieu.", [String.raw`\(9, 11, 14, 17, 20, 22\) : \(\frac{14+17}{2}=15.5\).`], String.raw`\(15.5\)`),
    q("Q1", String.raw`Trouve \(Q_1\) pour \(3, 5, 6, 8, 10, 12, 13, 15\).`, num(5.5),
      "Moitié inférieure : les quatre premières valeurs.", [String.raw`Moitié inférieure \(3, 5, 6, 8\) : \(\frac{5+6}{2}=5.5\).`], String.raw`\(5.5\)`),
    q("EI", String.raw`Un diagramme de quartiles indique min \(20\), \(Q_1=34\), médiane \(41\), \(Q_3=52\), max \(70\). Trouve l'EI.`, num(18),
      "EI = Q3 − Q1.", [String.raw`\(52-34=18\).`], String.raw`\(18\)`),
    q("valeur manquante", String.raw`Quatre résultats de tests sont \(72, 80, 68, 85\). Quel résultat faut-il au cinquième test pour obtenir une moyenne de \(78\)?`, num(85),
      "La somme des cinq résultats doit être 5 × 78.", [String.raw`\(5\times78=390\); \(390-305=85\).`], String.raw`\(85\)`),
    q("valeur aberrante", String.raw`Pour des données où \(Q_1=40\) et \(Q_3=56\), quelle valeur est aberrante?`, choice(["\\(85\\)", "\\(75\\)", "\\(20\\)", "\\(60\\)"], 0),
      "Bornes : Q1 − 1.5·EI et Q3 + 1.5·EI.", [String.raw`EI \(=16\); bornes \(40-24=16\) et \(56+24=80\). Seule la valeur \(85\) est à l'extérieur.`], String.raw`\(85\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi utiliser l'EI plutôt que l'étendue?", "L'étendue dépend seulement des deux valeurs les plus extrêmes, donc une seule valeur inhabituelle la change beaucoup. L'EI mesure la moitié centrale et ignore les extrêmes."],
      ["Que m'indique une longue moustache?", "Les valeurs de ce quart des données sont réparties sur un grand intervalle — les données sont étirées (asymétriques) dans cette direction."],
      ["La moyenne peut-elle être une valeur qui n'apparaît jamais dans les données?", "Oui. Le nombre moyen d'enfants peut être 2.04 même si aucune famille n'a 2.04 enfants. C'est un point d'équilibre, pas une valeur des données."],
      ["Quand le mode est-il la meilleure mesure?", "Pour des données qualitatives (couleur la plus populaire) ou quand tu as besoin de la taille la plus courante, comme un magasin qui commande des chaussures."],
      ["Dois-je inclure la médiane dans les moitiés quand n est impair?", "Dans ce cours, non : laisse la médiane de côté et trouve les médianes des valeurs en dessous et au-dessus. Certaines calculatrices utilisent d'autres règles, donc de petites différences sont possibles."],
    ],
    summary: [
      "Tendance centrale : moyenne (somme ÷ n), médiane (milieu), mode (plus fréquent).",
      "Dispersion : étendue, et EI = Q3 − Q1 pour la moitié centrale.",
      "Diagramme de quartiles : min, Q1, médiane, Q3, max; valeurs aberrantes au-delà de 1.5 × EI.",
      "Les valeurs aberrantes tirent la moyenne, pas la médiane.",
      "Tableaux de fréquences : multiplier valeur × fréquence; les histogrammes montrent des données continues avec des bandes qui se touchent.",
    ],
    next: "La leçon 6.3 porte sur les données à deux variables : nuages de points et droites les mieux ajustées.",
  }),
];
