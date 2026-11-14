// MTH1W-FR 7.4 — Budgets (miroir de ../mth1w-ch7/l7_4.mjs) : revenu brut et net, dépenses fixes et variables,
// besoins et désirs, règle 50/30/20, surplus et déficit, ajuster un budget quand la situation change, objectifs d'épargne
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { barChart } from "../mth1w-ch6/figs6.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "7.4 Budgets";
export const ID = lessonId(7, 4);

export const blocks = () => [
  intro({
    icon: "🧾",
    title: "Budgets",
    overview: String.raw`Un budget est un plan pour ton argent : il indique ce qui entre, ce qui sort et ce qui reste à épargner. Avec un budget, tu peux couvrir tes besoins, te permettre certains désirs, atteindre des objectifs d'épargne et faire face aux changements — une augmentation de salaire, une perte d'emploi, une hausse de loyer. Dans cette leçon, tu vas établir un budget mensuel, le comparer à la règle 50/30/20 et l'ajuster quand la situation change.`,
    goals: [
      "distinguer le revenu brut du revenu net et reconnaître les retenues courantes;",
      "classer les dépenses comme fixes ou variables, et comme besoins ou désirs;",
      "établir un budget mensuel et trouver le surplus ou le déficit;",
      "comparer un budget à la règle 50/30/20;",
      "modifier un budget quand la situation change et planifier un objectif d'épargne.",
    ],
    curriculum: "F1.4 (créer et modifier des budgets selon des situations qui changent), F1.1",
    prior: [
      [String.raw`\(30\%\) de \(2400\,\$\)?`, String.raw`\(720\,\$\).`],
      [String.raw`Un montant hebdomadaire de \(45\,\$\) représente combien par année?`, String.raw`\(45\times52=2340\,\$\).`],
      [String.raw`\(1800-1650=?\)`, String.raw`\(150\).`],
    ],
    words: [
      ["Revenu brut", "la paie avant les retenues", "2600 $ par mois"],
      ["Revenu net", "la paie reçue après les retenues", "2050 $"],
      ["Retenues", "impôt sur le revenu, RPC, AE, avantages sociaux", ""],
      ["Dépense fixe", "la même chaque mois", "loyer, forfait de téléphone"],
      ["Dépense variable", "change d'un mois à l'autre", "épicerie, essence"],
      ["Surplus / déficit", "argent qui reste / qui manque", "revenus − dépenses"],
    ],
  }),

  section("📌 Le revenu", String.raw`
  <p>Ta paie <strong>brute</strong> est ce que tu gagnes; ta paie <strong>nette</strong> est ce qui arrive dans ton compte bancaire après les retenues comme l'impôt sur le revenu, les cotisations au Régime de pensions du Canada (RPC) et les cotisations à l'assurance-emploi (AE). Établis ton budget avec le revenu <strong>net</strong>.</p>
  ${table(["Période de paie", "Nombre de fois par année", "Pour obtenir un montant mensuel"], [["hebdomadaire", "52", "× 52 ÷ 12"], ["toutes les deux semaines (aux deux semaines)", "26", "× 26 ÷ 12"], ["deux fois par mois (semi-mensuelle)", "24", "× 2"]])}`),

  section("📌 Les dépenses : fixes ou variables, besoins ou désirs", String.raw`
  ${table(["Dépense", "Fixe ou variable?", "Besoin ou désir?"], [["loyer", "fixe", "besoin"], ["épicerie", "variable", "besoin"], ["forfait de téléphone", "fixe", "besoin (de base) / désir (haut de gamme)"], ["services de diffusion en continu", "fixe", "désir"], ["repas au restaurant", "variable", "désir"]])}
  ${keyIdea(String.raw`<strong>Surplus</strong> \(=\) revenu net \(-\) dépenses totales. Un résultat négatif est un <strong>déficit</strong>. La <strong>règle 50/30/20</strong> suggère environ \(50\%\) du revenu net pour les besoins, \(30\%\) pour les désirs et \(20\%\) pour l'épargne et le remboursement des dettes — un point de départ, pas une loi.`)}
  ${barChart({ bars: [["besoins", 50], ["désirs", 30], ["épargne", 20]], base: 0, top: 60, step: 10, ylabel: "% du revenu net", color: "green" }, "La règle 50/30/20.")}
  <p>Établis ton propre budget dans l'explorateur et compare-le à la règle. Change ensuite le revenu ou le loyer et rééquilibre.</p>`),

  widget("budgetBuilder"),

  section("📌 Quand la situation change", String.raw`
  <p>Il faut ajuster un budget quand les revenus ou les dépenses changent. Un bon ordre : protège d'abord les besoins, réduis ou reporte ensuite les désirs, et continue d'épargner au moins un peu. Un <strong>fonds d'urgence</strong> équivalant à quelques mois de dépenses amortit les imprévus.</p>
  ${watchOut([
    "Utilise la paie nette (celle que tu reçois), pas la paie brute.",
    "Convertis chaque montant à la même période (habituellement mensuelle) avant d'additionner.",
    "Les coûts irréguliers (cadeaux, réparations, frais annuels) demandent de mettre de côté une part chaque mois.",
    "Les petites dépenses quotidiennes s'accumulent : 5 $ par jour, c'est environ 150 $ par mois.",
  ])}`),

  examples([
    ["Revenu net et paie mensuelle", String.raw`Aïcha gagne \(18\,\$\) l'heure et travaille \(25\) heures par semaine. Environ \(15\%\) de sa paie va aux retenues. Trouve son revenu net mensuel.`,
      [String.raw`Brut hebdomadaire : \(18\times25=450\,\$\). Annuel : \(450\times52=23\,400\,\$\).`, String.raw`Brut mensuel : \(23\,400\div12=1950\,\$\).`, String.raw`Net : \(1950\times0.85=1657.50\,\$\).`],
      String.raw`environ \(1657.50\,\$\) par mois`],
    ["Surplus ou déficit", String.raw`Revenu net mensuel \(2200\,\$\); dépenses : loyer \(850\,\$\), épicerie \(340\,\$\), transport en commun \(156\,\$\), téléphone \(65\,\$\), divertissement \(220\,\$\), vêtements \(120\,\$\), épargne \(300\,\$\). Trouve le surplus ou le déficit.`,
      [String.raw`Total : \(850+340+156+65+220+120+300=2051\,\$\).`, String.raw`\(2200-2051=149\,\$\) de surplus.`],
      String.raw`surplus de \(149\,\$\)`],
    ["Comparer avec la règle 50/30/20", String.raw`Pour le budget de l'exemple 2, trouve le pourcentage consacré aux besoins (loyer, épicerie, transport en commun, téléphone), aux désirs (divertissement, vêtements) et à l'épargne.`,
      [String.raw`Besoins : \(1411\div2200\approx64.1\%\). Désirs : \(340\div2200\approx15.5\%\). Épargne : \(300\div2200\approx13.6\%\).`, "Les besoins dépassent largement 50 %, surtout à cause du loyer; les désirs sont faibles. Si le surplus de 149 $ allait à l'épargne, l'épargne atteindrait environ 20 %."],
      "besoins 64.1 %, désirs 15.5 %, épargne 13.6 %"],
    ["Un changement de situation", String.raw`Dans l'exemple 2, le loyer augmente de \(175\,\$\) et le transport en commun de \(20\,\$\). Ajuste le budget sans réduire les besoins ni l'épargne.`,
      [String.raw`Nouvelles dépenses : \(2051+195=2246\,\$\); déficit \(2200-2246=-46\,\$\).`, String.raw`Réduis les désirs d'au moins \(46\,\$\) : p. ex. divertissement \(220\to170\) (\(-50\,\$\)).`, String.raw`Nouveau surplus : \(2200-2196=4\,\$\).`],
      String.raw`réduire les désirs de \(50\,\$\); surplus de \(4\,\$\)`],
    ["Un objectif d'épargne", String.raw`Marco veut \(1500\,\$\) pour un portable dans \(8\) mois. Il a déjà \(300\,\$\) et peut épargner \(40\,\$\) par semaine. Atteindra-t-il son objectif?`,
      [String.raw`De hebdomadaire à mensuel : \(40\times52\div12\approx173.33\,\$\).`, String.raw`En \(8\) mois : \(300+8\times173.33\approx1686.67\,\$\).`],
      String.raw`oui, avec environ \(187\,\$\) de plus`],
  ]),

  practice([
    q("revenu mensuel", String.raw`Un emploi paie \(600\,\$\) toutes les deux semaines. Quel est le revenu mensuel?`, num(1300),
      "26 paies par année, puis ÷ 12.", [String.raw`\(600\times26=15600\); \(15600\div12=1300\).`], String.raw`\(1300\,\$\)`),
    q("surplus", String.raw`Revenu net \(1850\,\$\); les dépenses totalisent \(1720\,\$\). Quel est le surplus?`, num(130),
      "Revenus − dépenses.", [String.raw`\(1850-1720=130\).`], String.raw`\(130\,\$\)`),
    q("50/30/20", String.raw`Avec un revenu net de \(2400\,\$\), combien la règle 50/30/20 suggère-t-elle pour les désirs?`, num(720),
      "30 % du revenu.", [String.raw`\(0.3\times2400=720\).`], String.raw`\(720\,\$\)`),
    q("classer", "Quelle dépense est à la fois variable et un désir?", choice(["des billets de concert", "le loyer", "une carte d'autobus mensuelle", "l'assurance habitation"], 0),
      "Elle change d'un mois à l'autre et n'est pas essentielle.", ["Les dépenses pour des concerts varient et sont facultatives."], "des billets de concert"),
    q("objectif d'épargne", String.raw`Pour épargner \(900\,\$\) en \(6\) mois, combien faut-il épargner chaque mois?`, num(150),
      "Divise l'objectif par le nombre de mois.", [String.raw`\(900\div6=150\).`], String.raw`\(150\,\$\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi établir un budget avec le revenu net?", "Les retenues sont prélevées avant que tu sois payé, donc seul le revenu net est vraiment disponible pour dépenser ou épargner."],
      ["Et si mon budget a toujours un déficit?", "Cherche des désirs à réduire, des besoins qui peuvent coûter moins cher (forfait de téléphone moins cher, transport en commun au lieu d'une auto) ou des façons d'augmenter tes revenus. Un déficit couvert par le crédit se transforme en dette."],
      ["La règle 50/30/20 est-elle réaliste pour tout le monde?", "Pas toujours — dans les grandes villes, le loyer peut faire monter les besoins bien au-delà de 50 %. Utilise-la comme guide pour voir où va ton argent, puis fixe tes propres cibles."],
      ["Quelle taille devrait avoir un fonds d'urgence?", "Un objectif courant est de 3 à 6 mois de dépenses essentielles, constitué petit à petit."],
      ["À quelle fréquence devrais-je revoir mon budget?", "Chaque mois, et chaque fois que quelque chose change : un nouvel emploi, un déménagement, un gros achat."],
    ],
    summary: [
      "Établis ton budget avec le revenu net; convertis tout en montants mensuels.",
      "Dépenses : fixes ou variables; besoins ou désirs.",
      "Surplus = revenus − dépenses; un résultat négatif est un déficit.",
      "La règle 50/30/20 est un guide pour les besoins, les désirs et l'épargne.",
      "Quand la situation change, protège les besoins, réduis les désirs, continue d'épargner.",
    ],
    next: "La leçon 7.5 fait la révision de tout le chapitre.",
  }),
];
