// MTH1W-FR 7.3 — Intérêts et emprunts (miroir de ../mth1w-ch7/l7_3.mjs) : intérêt simple et composé, périodes de
// capitalisation, épargner ou emprunter, cartes de crédit, comparaison de prêts
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, choice } from "./lib.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "7.3 Intérêts et emprunts";
export const ID = lessonId(7, 3);

export const blocks = () => [
  intro({
    icon: "🏦",
    title: "Intérêts et emprunts",
    overview: String.raw`L'intérêt est le prix à payer pour utiliser de l'argent. Quand tu épargnes ou que tu investis, une banque te verse des intérêts; quand tu empruntes — un prêt auto, un prêt étudiant, un solde de carte de crédit — c'est toi qui paies des intérêts. Dans cette leçon, tu vas calculer l'intérêt simple et l'intérêt composé, voir pourquoi la capitalisation compte autant avec le temps et déterminer le coût réel d'un solde impayé sur une carte de crédit.`,
    goals: [
      "calculer l'intérêt simple avec \\(I=Prt\\) et le montant \\(A=P(1+rt)\\);",
      "calculer l'intérêt composé avec \\(A=P\\left(1+\\frac{r}{n}\\right)^{nt}\\);",
      "expliquer comment la fréquence de capitalisation et la durée influent sur la croissance;",
      "comparer des options d'épargne et d'emprunt à des taux différents;",
      "estimer le coût et la durée du remboursement d'un solde de carte de crédit.",
    ],
    curriculum: "F1.3 (intérêt simple et intérêt composé; emprunt et épargne; crédit), F1.1",
    prior: [
      [String.raw`\(4\%\) de \(2500\,\$\)?`, String.raw`\(100\,\$\).`],
      [String.raw`Écris \(3.5\%\) sous forme décimale.`, String.raw`\(0.035\).`],
      [String.raw`Évalue \(1000(1.05)^2\).`, String.raw`\(1102.50\).`],
    ],
    words: [
      ["Capital (P)", "la somme épargnée ou empruntée", "2000 $"],
      ["Taux d'intérêt (r)", "pourcentage par année, sous forme décimale", "0.04"],
      ["Intérêt simple", "intérêt calculé sur le capital seulement", "I = Prt"],
      ["Intérêt composé", "intérêt gagné aussi sur les intérêts", "A = P(1 + r/n)ⁿᵗ"],
      ["Période de capitalisation", "la fréquence à laquelle l'intérêt est ajouté (n fois par année)", "mensuelle : n = 12"],
      ["TAP", "taux annuel en pourcentage exigé sur un prêt ou une carte", "19.99 %"],
    ],
  }),

  section("📌 L'intérêt simple", String.raw`
  ${keyIdea(String.raw`\(I=Prt\) et \(A=P+I=P(1+rt)\), avec \(r\) sous forme décimale et \(t\) en années. L'intérêt simple augmente du même montant chaque année : c'est une relation <strong>linéaire</strong>.`)}
  <p>Il faut convertir les mois en années : \(9\) mois donnent \(t=\frac{9}{12}=0.75\).</p>`),

  section("📌 L'intérêt composé", String.raw`
  <p>Avec l'intérêt composé, l'intérêt de chaque période est ajouté au solde, et l'intérêt de la période suivante est calculé sur ce nouveau solde, plus grand.</p>
  ${table(["Année", "Début", "Intérêt à 5 %", "Fin"], [["1", "1000.00 $", "50.00 $", "1050.00 $"], ["2", "1050.00 $", "52.50 $", "1102.50 $"], ["3", "1102.50 $", "55.13 $", "1157.63 $"]])}
  ${keyIdea(String.raw`\(A=P\left(1+\dfrac{r}{n}\right)^{nt}\), où \(n\) est le nombre de périodes de capitalisation par année (\(1\) annuelle, \(2\) semestrielle, \(4\) trimestrielle, \(12\) mensuelle). La croissance composée est <strong>exponentielle</strong>.`)}
  <p>Compare les deux sortes d'intérêt dans l'explorateur. Essaie 40 ans, puis essaie une capitalisation mensuelle.</p>`),

  widget("interestGrowth"),

  section("📌 Les emprunts et les cartes de crédit", String.raw`
  <p>Les cartes de crédit sont pratiques, mais les soldes impayés entraînent des intérêts élevés (souvent environ \(20\%\) par année), composés mensuellement. Ne payer que le minimum peut transformer un petit solde en des années de versements. Payer le solde au complet avant la date d'échéance évite complètement les intérêts.</p>`),

  widget("creditPayoff"),

  section("📌 Stratégie", watchOut([
    "Convertis le taux sous forme décimale et la durée en années.",
    "Pour l'intérêt composé, divise le taux annuel par n et multiplie le nombre d'années par n.",
    "Intérêt gagné = A − P; ne donne pas A comme réponse pour l'intérêt.",
    "Compare les prêts selon leur coût total, et pas seulement selon le versement mensuel.",
  ])),

  examples([
    ["Intérêt simple", String.raw`Trouve l'intérêt simple sur \(2500\,\$\) à \(4\%\) par année pendant \(3\) ans, ainsi que le montant total.`,
      [String.raw`\(I=2500\times0.04\times3=300\,\$\).`, String.raw`\(A=2500+300=2800\,\$\).`],
      String.raw`\(I=300\,\$\), \(A=2800\,\$\)`],
    ["Intérêt simple sur des mois", String.raw`Un prêt de \(1800\,\$\) porte un intérêt simple de \(6.5\%\) pendant \(8\) mois. Quel est l'intérêt dû?`,
      [String.raw`\(t=\frac{8}{12}\).`, String.raw`\(I=1800\times0.065\times\frac{8}{12}=78\,\$\).`],
      String.raw`\(78\,\$\)`],
    ["Intérêt composé annuellement", String.raw`On investit \(1500\,\$\) à \(5\%\) composé annuellement pendant \(10\) ans. Trouve le montant et l'intérêt gagné.`,
      [String.raw`\(A=1500(1.05)^{10}\approx1500\times1.62889=2443.34\,\$\).`, String.raw`Intérêt \(=2443.34-1500=943.34\,\$\) (l'intérêt simple ne donnerait que \(750\,\$\)).`],
      String.raw`\(A\approx2443.34\,\$\); intérêt \(\approx943.34\,\$\)`],
    ["Capitalisation mensuelle", String.raw`On épargne \(2000\,\$\) à \(3.6\%\) composé mensuellement pendant \(5\) ans. Trouve le montant.`,
      [String.raw`\(\frac{r}{n}=\frac{0.036}{12}=0.003\); \(nt=60\).`, String.raw`\(A=2000(1.003)^{60}\approx2000\times1.19689=2393.79\,\$\).`],
      String.raw`environ \(2393.79\,\$\)`],
    ["Le coût d'un solde de carte de crédit", String.raw`Une élève doit \(1000\,\$\) sur une carte qui exige \(19.8\%\) par année, composé mensuellement, et ne fait aucun paiement pendant un an. Combien doit-elle?`,
      [String.raw`\(\frac{0.198}{12}=0.0165\) par mois.`, String.raw`\(1000(1.0165)^{12}\approx1000\times1.2170=1216.99\,\$\).`, String.raw`Environ \(217\,\$\) d'intérêts en un an — presque \(22\%\) du solde.`],
      String.raw`environ \(1216.99\,\$\)`],
  ]),

  practice([
    q("simple", String.raw`Trouve l'intérêt simple sur \(3200\,\$\) à \(3.5\%\) par année pendant \(4\) ans.`, num(448),
      "I = Prt.", [String.raw`\(3200\times0.035\times4=448\).`], String.raw`\(448\,\$\)`),
    q("simple, en mois", String.raw`Trouve l'intérêt simple sur \(900\,\$\) à \(8\%\) par année pendant \(6\) mois.`, num(36),
      "t = 6/12.", [String.raw`\(900\times0.08\times0.5=36\).`], String.raw`\(36\,\$\)`),
    q("composé", String.raw`On investit \(1000\,\$\) à \(4\%\) composé annuellement pendant \(3\) ans. Trouve le montant (au cent près).`, num(1124.86, 0.006),
      "A = P(1 + r)ⁿ.", [String.raw`\(1000(1.04)^3=1124.864\).`], String.raw`\(1124.86\,\$\)`),
    q("composé trimestriellement", String.raw`\(5000\,\$\) à \(6\%\) composé trimestriellement pendant \(2\) ans. Trouve le montant (au cent près).`, num(5632.46, 0.006),
      "r/n = 0.015, nt = 8.", [String.raw`\(5000(1.015)^8\approx5632.46\).`], String.raw`\(5632.46\,\$\)`),
    q("meilleure option", String.raw`Laquelle fait croître le plus \(1000\,\$\) en \(10\) ans?`, choice(["\\(5\\%\\) composé annuellement", "\\(5.5\\%\\) d'intérêt simple", "elles donnent la même croissance", "impossible à dire"], 0),
      "Calcule les deux.", [String.raw`Composé : \(1000(1.05)^{10}\approx1628.89\); simple : \(1000(1+0.055\times10)=1550\).`], "5 % composé annuellement"),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi l'intérêt composé dépasse-t-il l'intérêt simple avec le temps?", "L'intérêt de chaque année est ajouté au solde et rapporte lui-même des intérêts. L'effet est faible au début et énorme après des décennies."],
      ["Une capitalisation plus fréquente aide-t-elle beaucoup?", "Un peu. Au même taux, la capitalisation mensuelle rapporte plus que la capitalisation annuelle, mais le taux et la durée comptent beaucoup plus que la fréquence."],
      ["Pourquoi commencer à épargner tôt?", "Le temps est le facteur le plus puissant de la croissance composée : l'argent investi à 15 ans croît pendant beaucoup plus de périodes que l'argent investi à 35 ans."],
      ["Un petit versement mensuel est-il une bonne affaire?", "Pas nécessairement. Un prêt plus long donne des versements plus petits, mais plus d'intérêts au total. Compare les coûts totaux."],
      ["Comment éviter les intérêts sur une carte de crédit?", "Paie le solde complet du relevé avant la date d'échéance chaque mois. Les intérêts ne sont exigés que sur les soldes reportés."],
    ],
    summary: [
      "Intérêt simple : I = Prt, A = P(1 + rt) — croissance linéaire.",
      "Intérêt composé : A = P(1 + r/n)ⁿᵗ — croissance exponentielle.",
      "Intérêt = A − P.",
      "Le taux et la durée comptent le plus; la fréquence ajoute un peu.",
      "Les soldes de carte de crédit augmentent vite à des taux élevés : paie-les au complet quand c'est possible.",
    ],
    next: "La leçon 7.4 réunit les revenus, les dépenses et l'épargne dans un budget.",
  }),
];
