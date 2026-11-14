// MTH1W-FR 7.5 — Révision du chapitre 7 (miroir de ../mth1w-ch7/l7_5.mjs)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, choice } from "./lib.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "7.5 Révision du chapitre 7";
export const ID = lessonId(7, 5);

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 7 — Littératie financière",
    overview: String.raw`Cette page fait la synthèse du chapitre avant le test : l'idée clé de chaque leçon sur un seul écran, des questions où tu dois choisir la bonne méthode, des problèmes d'argent à plusieurs étapes, une pratique mixte et une liste de vérification pour savoir si tu es prêt. Fais-la après les leçons 7.1 à 7.4 et retourne à toute leçon où tu bloques.`,
    goals: [
      "te rappeler la formule clé et l'erreur fréquente de chaque leçon;",
      "choisir le bon calcul pour une question financière;",
      "résoudre des problèmes à plusieurs étapes qui combinent prix, intérêts, variations de valeur et budgets;",
      "vérifier si tu es prêt pour le test du chapitre.",
    ],
    curriculum: "F1.1–F1.4 (tout le domaine F)",
    prior: [
      [String.raw`Prix d'un article de \(60\,\$\) avec la TVH de \(13\%\)?`, String.raw`\(67.80\,\$\).`],
      [String.raw`Facteur de décroissance pour une perte de \(20\%\)?`, String.raw`\(0.8\).`],
      [String.raw`Intérêt simple sur \(500\,\$\) à \(4\%\) pendant \(2\) ans?`, String.raw`\(40\,\$\).`],
    ],
    words: [
      ["Seuil de rentabilité", "le point où deux options coûtent la même chose", "égaler les coûts"],
      ["Facteur de croissance / décroissance", "1 + r / 1 − r", "1.05 / 0.85"],
      ["Intérêt composé", "A = P(1 + r/n)ⁿᵗ", ""],
      ["Surplus", "revenu net − dépenses", ""],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple type", "Attention"], [
    ["7.1 Décisions", "prix unitaire; × (1 − d) × 1.13; fixe + variable; seuil de rentabilité; inflation P(1 + r)ⁿ", "30 + 5n = 75 → n = 9", "compare les totaux, pas les versements mensuels"],
    ["7.2 Variation de valeur", "V₀(1 + r)ⁿ et V₀(1 − r)ⁿ; linéaire V₀ − dn", "32 000(0.82)⁴ ≈ 14 468", "les variations en pourcentage ne s'annulent pas"],
    ["7.3 Intérêts", "I = Prt; A = P(1 + r/n)ⁿᵗ", "1500(1.05)¹⁰ ≈ 2443.34", "mois → années; r/n et nt"],
    ["7.4 Budgets", "revenu net; besoins, désirs, épargne; surplus ou déficit; 50/30/20", "2200 − 2051 = 149", "convertis d'abord en montants mensuels"],
  ])),

  section("📌 Quel calcul?", keyIdea(String.raw`<strong>Quel format ou quel forfait est le moins cher?</strong> prix unitaire ou seuil de rentabilité. <strong>Prix à la caisse?</strong> rabais, puis \(\times1.13\). <strong>Valeur après des années?</strong> facteur de croissance ou de décroissance. <strong>De l'argent qui croît dans un compte?</strong> intérêt composé. <strong>Puis-je me le permettre chaque mois?</strong> un budget.`)),

  practice([
    q("méthode", "Pour choisir entre un forfait illimité à 50 $/mois et un forfait à 20 $ + 1.50 $/Go, tu devrais…", choice(["trouver le seuil de rentabilité", "comparer seulement les frais fixes", "calculer l'intérêt composé", "utiliser la règle 50/30/20"], 0),
      "Deux modèles de coût linéaires.", ["Pose 50 = 20 + 1.5x."], "le seuil de rentabilité"),
    q("méthode", "Une auto perd 15 % de sa valeur chaque année. Pour trouver sa valeur dans 5 ans, multiplie par…", choice(["\\(0.85^5\\)", "\\(0.15^5\\)", "\\(1.15^5\\)", "\\(5\\times0.15\\)"], 0),
      "Le facteur de décroissance à la puissance du nombre d'années.", [String.raw`\((1-0.15)^5=0.85^5\).`], "0.85⁵"),
    q("méthode", String.raw`Pour \(800\,\$\) à \(6\%\) composé mensuellement, la base de la puissance est…`, choice(["\\(1.005\\)", "\\(1.06\\)", "\\(1.5\\)", "\\(0.995\\)"], 0),
      "1 + r/n.", [String.raw`\(1+\frac{0.06}{12}=1.005\).`], "1.005"),
    q("méthode", "Quel revenu un budget devrait-il utiliser?", choice(["le revenu net (celui que tu reçois)", "le revenu brut", "le revenu annuel avant impôt", "le plus gros chèque de paie"], 0),
      "Qu'est-ce qui arrive vraiment dans ton compte?", ["Les retenues sont prélevées avant que tu sois payé."], "le revenu net"),
    q("méthode", "Une banque te demande par texto de confirmer ton NIP. Tu devrais…", choice(["ne pas répondre, et communiquer avec la banque à son numéro officiel", "répondre vite pour garder ton compte ouvert", "envoyer plutôt le NIP par courriel", "en parler en ligne"], 0),
      "Les banques ne demandent jamais de NIP par texto.", ["C'est une tentative d'hameçonnage."], "communiquer toi-même avec la banque"),
  ]),

  examples([
    ["Rabais, taxe et prix unitaire", String.raw`Un paquet de 6 boissons pour sportifs coûte \(7.49\,\$\); un paquet de 15 coûte \(16.99\,\$\), mais il est en solde à \(15\%\) de rabais. Lequel a le plus bas prix par bouteille, TVH de \(13\%\) incluse?`,
      [String.raw`Paquet de 6 : \(7.49\times1.13\div6\approx1.41\,\$\) par bouteille.`, String.raw`Paquet de 15 : \(16.99\times0.85\times1.13\div15\approx1.09\,\$\) par bouteille.`],
      "le paquet de 15 en solde"],
    ["Dépréciation et prêt", String.raw`Sam achète une auto usagée de \(14\,000\,\$\) avec un prêt à \(7\%\) composé annuellement, remboursé en un seul montant après \(3\) ans. L'auto se déprécie de \(15\%\) par année. Compare ce que Sam doit avec ce que vaut l'auto après \(3\) ans.`,
      [String.raw`Montant dû : \(14\,000(1.07)^3\approx17\,150.60\,\$\).`, String.raw`Valeur : \(14\,000(0.85)^3\approx8597.75\,\$\).`, "Sam doit environ le double de la valeur de l'auto — emprunter pour des biens qui perdent de la valeur coûte cher."],
      String.raw`doit \(\approx17\,151\,\$\); l'auto vaut \(\approx8598\,\$\)`],
    ["Épargner avec l'intérêt composé", String.raw`À 16 ans, Léa investit \(2000\,\$\) à \(5\%\) composé annuellement. Combien aura-t-elle à 30 ans? À 60 ans?`,
      [String.raw`À 30 ans (\(14\) ans) : \(2000(1.05)^{14}\approx3959.86\,\$\).`, String.raw`À 60 ans (\(44\) ans) : \(2000(1.05)^{44}\approx17\,114.30\,\$\).`],
      String.raw`\(\approx3960\,\$\) et \(\approx17\,114\,\$\)`],
    ["Inflation et salaires", String.raw`La paie de Jo augmente de \(2\%\) par année tandis que les prix augmentent de \(3\%\) par année. Après \(5\) ans, de quel pourcentage le pouvoir d'achat de Jo a-t-il changé?`,
      [String.raw`Facteur de la paie \(1.02^5\approx1.1041\); facteur des prix \(1.03^5\approx1.1593\).`, String.raw`Facteur du pouvoir d'achat \(1.1041\div1.1593\approx0.9524\) : une baisse d'environ \(4.8\%\).`],
      String.raw`environ \(4.8\%\) de pouvoir d'achat en moins`],
    ["Ajuster un budget", String.raw`Le revenu net d'une élève est de \(1400\,\$\) par mois et ses dépenses sont de \(1310\,\$\). Ses heures sont réduites, ce qui diminue son revenu de \(12\%\). Trouve le nouveau surplus ou déficit et propose une solution.`,
      [String.raw`Nouveau revenu : \(1400\times0.88=1232\,\$\).`, String.raw`\(1232-1310=-78\,\$\) : un déficit.`, "Solution : réduire les désirs d'au moins 78 $ (restaurants, abonnements) ou mettre un objectif d'épargne en pause pour un temps."],
      String.raw`déficit de \(78\,\$\); réduire les désirs`],
  ]),

  section("📌 Révision mixte", String.raw`<p>Chaque question fait appel à plus d'une leçon.</p>`),

  practice([
    q("taxe + rabais", String.raw`Un jeu de \(64\,\$\) est à \(25\%\) de rabais. Quel est le prix avec la TVH de \(13\%\)?`, num(54.24, 0.006),
      "× 0.75 × 1.13.", [String.raw`\(64\times0.75=48\); \(48\times1.13=54.24\).`], String.raw`\(54.24\,\$\)`),
    q("dépréciation", String.raw`Un vélo électrique de \(1500\,\$\) se déprécie de \(22\%\) par année. Combien vaut-il après \(2\) ans (au cent près)?`, num(912.6, 0.006),
      "× 0.78².", [String.raw`\(1500\times0.6084=912.60\).`], String.raw`\(912.60\,\$\)`),
    q("composé", String.raw`\(3000\,\$\) à \(4\%\) composé semestriellement pendant \(3\) ans. Trouve le montant (au cent près).`, num(3378.49, 0.006),
      "r/n = 0.02, nt = 6.", [String.raw`\(3000(1.02)^6\approx3378.49\).`], String.raw`\(3378.49\,\$\)`),
    q("seuil de rentabilité", String.raw`Une location d'auto coûte \(45\,\$\) par jour plus \(0.20\,\$\)/km, ou \(70\,\$\) par jour avec kilométrage illimité. Au-delà de combien de km par jour l'option illimitée est-elle moins chère?`, num(125),
      "Pose 45 + 0.2k = 70.", [String.raw`\(0.2k=25\Rightarrow k=125\).`], String.raw`\(125\) km`),
    q("budget", String.raw`Le revenu net est de \(2600\,\$\) par mois. Selon la règle 50/30/20, combien devrait aller à l'épargne chaque année?`, num(6240),
      "20 % par mois, puis × 12.", [String.raw`\(0.2\times2600=520\); \(520\times12=6240\).`], String.raw`\(6240\,\$\)`),
  ]),

  section("📌 Suis-je prêt pour le test?", String.raw`<ul style="list-style:none;padding-left:0;">
    ${[
      ["7.1", "Je peux comparer des prix unitaires, appliquer des rabais et la TVH, trouver des seuils de rentabilité, calculer l'inflation et repérer la fraude."],
      ["7.2", "Je peux calculer l'appréciation et la dépréciation avec des modèles en pourcentage et linéaires, et expliquer ce qui influe sur la valeur."],
      ["7.3", "Je peux calculer l'intérêt simple et l'intérêt composé, et expliquer le coût d'un emprunt et d'un solde de carte de crédit."],
      ["7.4", "Je peux établir un budget à partir du revenu net, trouver un surplus ou un déficit et l'ajuster quand la situation change."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  widget("interestGrowth"),

  wrapUp({
    qas: [
      ["Comment devrais-je étudier pour ce test?", "Fais la révision mixte sans tes notes, puis refais l'explorateur et la série d'exercices de chaque leçon où tu as fait une erreur. Essaie les problèmes de niveau 3 des fiches d'exercices pour tes deux leçons les plus faibles."],
      ["Quelles sont les erreurs les plus fréquentes?", "Utiliser 0.15 au lieu de 0.85 pour une diminution de 15 %, oublier de diviser le taux par n, mélanger les mois et les années, établir un budget avec la paie brute et croire qu'un versement mensuel plus petit veut dire un prêt moins cher."],
      ["Que devrais-je montrer dans un problème d'argent?", "La formule, la substitution avec les unités, la réponse arrondie au cent près et une phrase qui répond à la question dans son contexte."],
      ["Pourquoi ce chapitre est-il important en dehors de l'école?", "Chaque forfait de téléphone, achat d'auto, prêt, compte d'épargne et chèque de paie utilise ces idées. Les bonnes habitudes prises maintenant font économiser des milliers de dollars plus tard."],
      ["Quel est le lien avec les chapitres précédents?", "Les coûts fixes + variables sont des relations linéaires (chapitre 4); l'appréciation, la dépréciation et l'intérêt composé sont des modèles exponentiels (chapitre 6)."],
    ],
    summary: [
      "Prix unitaire, × (1 − d) × 1.13, seuil de rentabilité, inflation.",
      "Variation de valeur : V₀(1 ± r)ⁿ ou linéaire.",
      "Intérêts : I = Prt et A = P(1 + r/n)ⁿᵗ.",
      "Budgets : revenu net, besoins/désirs/épargne, surplus ou déficit.",
    ],
    next: "Fais le test du chapitre 7 — il termine le cours MTH1W.",
  }),
];
