// MTH1W-FR 7.2 — Appréciation et dépréciation (miroir de ../mth1w-ch7/l7_2.mjs) : variation en pourcentage,
// facteurs de croissance et de décroissance, dépréciation linéaire ou en pourcentage, facteurs de valeur, temps de doublement
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "7.2 Appréciation et dépréciation";
export const ID = lessonId(7, 2);

export const blocks = () => [
  intro({
    icon: "📉",
    title: "Appréciation et dépréciation",
    overview: String.raw`Certains biens prennent de la valeur avec le temps — les maisons, les objets de collection rares, certains placements — et d'autres en perdent, comme les autos, les téléphones et les ordinateurs. La plupart de ces changements se font selon un pourcentage chaque année, ils se composent donc : tu multiplies par le même facteur encore et encore. Dans cette leçon, tu vas calculer des valeurs futures, comparer la dépréciation en pourcentage et la dépréciation linéaire, et examiner ce qui fait monter ou baisser les valeurs.`,
    goals: [
      "calculer une augmentation ou une diminution en pourcentage et la valeur qui en résulte;",
      "utiliser les facteurs de croissance et de décroissance : \\(V=V_0(1+r)^n\\) et \\(V=V_0(1-r)^n\\);",
      "comparer la dépréciation linéaire (montant fixe) et la dépréciation en pourcentage (taux fixe);",
      "trouver un taux de variation à partir d'une valeur de départ et d'une valeur finale;",
      "décrire les facteurs qui causent l'appréciation et la dépréciation et en tenir compte dans ses décisions.",
    ],
    curriculum: "F1.2 (appréciation et dépréciation : facteurs et calculs)",
    prior: [
      [String.raw`Écris \(15\%\) sous forme décimale.`, String.raw`\(0.15\).`],
      [String.raw`\(1-0.2=?\)`, String.raw`\(0.8\).`],
      [String.raw`Évalue \(2000(1.1)^2\).`, String.raw`\(2420\).`],
    ],
    words: [
      ["Appréciation", "une augmentation de la valeur avec le temps", "une maison qui prend 5 % par année"],
      ["Dépréciation", "une diminution de la valeur avec le temps", "une auto qui perd 15 % par année"],
      ["Facteur de croissance", "1 + r, le multiplicateur d'une augmentation", "1.05"],
      ["Facteur de décroissance", "1 − r, le multiplicateur d'une diminution", "0.85"],
      ["Dépréciation linéaire", "perdre le même montant en dollars chaque année", "3000 $ par année"],
      ["Valeur résiduelle", "ce que vaut encore un article après quelques années", ""],
    ],
  }),

  section("📌 La variation en pourcentage comme multiplicateur", String.raw`
  ${table(["Variation", "Multiplier par", "Exemple"], [["augmentation de 8 %", "\\(1.08\\)", "\\(500\\to540\\)"], ["diminution de 8 %", "\\(0.92\\)", "\\(500\\to460\\)"], ["augmentation de 8 % par année pendant 3 ans", "\\(1.08^3\\approx1.2597\\)", "\\(500\\to629.86\\)"]])}
  ${keyIdea(String.raw`Après \(n\) années au taux \(r\) : appréciation \(V=V_0(1+r)^n\); dépréciation \(V=V_0(1-r)^n\). Le pourcentage s'applique chaque année à la valeur <em>actuelle</em>, donc la variation en dollars augmente (appréciation) ou diminue (dépréciation).`)}
  <p>Une augmentation de \(20\%\) suivie d'une diminution de \(20\%\) ne ramène <strong>pas</strong> au point de départ : \(1.2\times0.8=0.96\), une perte nette de \(4\%\).</p>`),

  section("📌 Deux façons de déprécier", String.raw`
  ${table(["", "Linéaire", "En pourcentage (solde dégressif)"], [["Comment", "soustraire le même montant en dollars chaque année", "multiplier par le même facteur chaque année"], ["Graphique", "droite", "courbe qui s'aplatit"], ["Modèle", "\\(V=V_0-dn\\)", "\\(V=V_0(1-r)^n\\)"], ["Atteint 0?", "oui, tôt ou tard", "jamais exactement"]])}
  <p>Passe de la dépréciation à l'appréciation dans l'explorateur et compare la courbe avec la droite pointillée.</p>`),

  widget("valueTimeline"),

  section("📌 Qu'est-ce qui fait changer les valeurs?", String.raw`
  ${table(["Tend à s'apprécier", "Pourquoi", "Tend à se déprécier", "Pourquoi"], [
    ["terrains et maisons", "offre limitée, population croissante", "autos", "usure, kilométrage, nouveaux modèles"],
    ["objets de collection rares", "rareté et demande", "téléphones et ordinateurs", "la technologie s'améliore rapidement"],
    ["certains placements", "croissance de l'entreprise", "vêtements, meubles", "usure et modes qui changent"],
  ])}
  ${watchOut([
    "Utilise le facteur de décroissance 1 − r pour la dépréciation, et non −r.",
    "Une diminution en pourcentage après une augmentation en pourcentage ne l'annule pas.",
    "Les taux sont par période : assure-toi que n compte les mêmes périodes (années, mois).",
    "Une appréciation passée ne garantit pas une appréciation future.",
  ])}`),

  examples([
    ["Une année d'appréciation", String.raw`Un tableau d'une valeur de \(4500\,\$\) s'apprécie de \(6\%\) en un an. Trouve sa nouvelle valeur.`,
      [String.raw`Facteur de croissance \(1.06\).`, String.raw`\(4500\times1.06=4770\,\$\).`],
      String.raw`\(4770\,\$\)`],
    ["Plusieurs années de dépréciation", String.raw`Une auto neuve coûte \(32\,000\,\$\) et se déprécie de \(18\%\) par année. Trouve sa valeur après \(4\) ans.`,
      [String.raw`Facteur de décroissance \(1-0.18=0.82\).`, String.raw`\(32\,000(0.82)^4\approx32\,000\times0.4521\approx14\,468\,\$\).`],
      String.raw`environ \(14\,468\,\$\)`],
    ["Linéaire ou en pourcentage", String.raw`Un portable de \(2400\,\$\) perd de la valeur. Compare sa valeur après \(3\) ans a) à \(600\,\$\) par année (linéaire), b) à \(30\%\) par année.`,
      [String.raw`a) \(2400-3(600)=600\,\$\).`, String.raw`b) \(2400(0.7)^3=2400\times0.343=823.20\,\$\).`, "Ici, la dépréciation linéaire fait perdre plus d'ici la 3e année, car 30 % d'une valeur qui diminue devient inférieur à 600 $."],
      String.raw`a) \(600\,\$\) b) \(823.20\,\$\)`],
    ["Trouver le taux", String.raw`Une maison achetée \(400\,000\,\$\) vaut \(441\,000\,\$\) deux ans plus tard. Quel taux annuel d'appréciation constant cela représente-t-il?`,
      [String.raw`\(400\,000(1+r)^2=441\,000\Rightarrow(1+r)^2=1.1025\).`, String.raw`\(1+r=\sqrt{1.1025}=1.05\), donc \(r=5\%\).`],
      String.raw`\(5\%\) par année`],
    ["Une décision", String.raw`Tu peux acheter un téléphone de 2 ans pour \(480\,\$\) ou un neuf pour \(900\,\$\). Les téléphones se déprécient d'environ \(25\%\) par année. Combien vaudrait le téléphone neuf quand il aurait 2 ans, et qu'est-ce que cela suggère?`,
      [String.raw`\(900(0.75)^2=900\times0.5625=506.25\,\$\).`, String.raw`Acheter neuf coûte \(900-506.25=393.75\,\$\) en perte de valeur sur 2 ans; le téléphone usagé a déjà absorbé cette perte.`],
      String.raw`environ \(506\,\$\) — acheter usagé évite la dépréciation la plus forte`],
  ]),

  practice([
    q("appréciation", String.raw`Une pièce de monnaie d'une valeur de \(250\,\$\) s'apprécie de \(4\%\) par année. Trouve sa valeur après \(3\) ans (au cent près).`, num(281.22, 0.006),
      "Multiplie par 1.04 trois fois.", [String.raw`\(250(1.04)^3=250\times1.124864\approx281.22\).`], String.raw`\(281.22\,\$\)`),
    q("dépréciation", String.raw`Un vélo de \(1200\,\$\) se déprécie de \(20\%\) par année. Combien vaut-il après \(2\) ans?`, num(768),
      "Facteur de décroissance 0.8.", [String.raw`\(1200\times0.8^2=1200\times0.64=768\).`], String.raw`\(768\,\$\)`),
    q("facteur", String.raw`Quel facteur donne une diminution de \(12\%\)?`, choice(["\\(0.88\\)", "\\(0.12\\)", "\\(1.12\\)", "\\(-0.12\\)"], 0),
      "1 − r.", [String.raw`\(1-0.12=0.88\).`], String.raw`\(0.88\)`),
    q("linéaire", String.raw`Une machine de \(9000\,\$\) perd \(1500\,\$\) par année (dépréciation linéaire). Dans combien d'années vaudra-t-elle \(0\,\$\)?`, num(6),
      "Divise la valeur par la perte annuelle.", [String.raw`\(9000\div1500=6\).`], String.raw`\(6\) ans`),
    q("variation nette", String.raw`Une action monte de \(10\%\) une année et baisse de \(10\%\) l'année suivante. Quelle est la variation nette en pourcentage? (Entre un nombre négatif pour une perte.)`, num(-1),
      "Multiplie les facteurs.", [String.raw`\(1.1\times0.9=0.99\) : une perte de \(1\%\).`], "−1 (une perte de 1 %)"),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi une hausse de 10 % suivie d'une baisse de 10 % ne s'annulent-elles pas?", "La baisse correspond à 10 % d'un nombre plus grand. 1.1 × 0.9 = 0.99, donc tu termines 1 % sous ton point de départ."],
      ["Pourquoi une auto qui se déprécie perd-elle le plus d'argent dans ses premières années?", "Le pourcentage est calculé sur la valeur la plus élevée. 18 % de 32 000 $ donne 5760 $; quelques années plus tard, 18 % d'une valeur plus petite est beaucoup moins."],
      ["Quelle méthode de dépréciation est la « bonne »?", "Les deux sont utilisées : les comptables utilisent souvent la méthode linéaire par simplicité; les modèles en pourcentage correspondent habituellement mieux aux vrais prix de revente."],
      ["Les maisons s'apprécient-elles toujours?", "Pas toujours. Les prix dépendent des taux d'intérêt, de l'économie, de l'emplacement et de la demande, et ils peuvent baisser pendant des années."],
      ["Comment trouver le temps nécessaire pour doubler?", "Essaie des valeurs de n dans (1 + r)ⁿ jusqu'à obtenir 2. Un raccourci, la règle de 72 : environ 72 ÷ (taux en %) années — à 6 %, environ 12 ans."],
    ],
    summary: [
      "Augmenter de r : × (1 + r); diminuer de r : × (1 − r).",
      "Appréciation V = V₀(1 + r)ⁿ; dépréciation V = V₀(1 − r)ⁿ.",
      "La dépréciation linéaire soustrait un montant fixe chaque année.",
      "Les variations en pourcentage ne s'annulent pas : multiplie les facteurs.",
      "L'offre, la demande, l'état, l'âge et la technologie déterminent la valeur.",
    ],
    next: "La leçon 7.3 applique les mêmes facteurs de croissance à l'argent lui-même : les intérêts et les emprunts.",
  }),
];
