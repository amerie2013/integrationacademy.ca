// Fiche 7.4 — Budgets (édition de l'enseignant). Miroir de ../../mth1w-ch7/ws/w7_4.mjs.
// L'argent en LaTeX s'écrit \$ (après le nombre); les valeurs et les points décimaux sont identiques à l'anglais.
import { barT } from "./figT.mjs";

const EXAMPLES = [
  { title: "Du brut au net", q: String.raw`Jordan gagne un salaire brut de $3100$~\$ par mois. Retenues : impôt sur le revenu $390$~\$, RPC $170$~\$, AE $51$~\$, cotisations syndicales $40$~\$. Trouve la paie nette et le pourcentage retenu.`,
    steps: [String.raw`Retenues $=390+170+51+40=651$~\$.`, String.raw`Net $=3100-651=2449$~\$; $\frac{651}{3100}=21\%$.`], ans: String.raw`$2449$~\$; $21\%$ retenu` },
  { title: "Convertir des périodes de paie", q: String.raw`Convertis en montant mensuel : (a) $520$~\$ par semaine (b) $1150$~\$ toutes les deux semaines (c) $980$~\$ deux fois par mois.`,
    steps: [String.raw`(a) $520\times52\div12\approx2253.33$~\$.`, String.raw`(b) $1150\times26\div12\approx2491.67$~\$.`, String.raw`(c) $980\times2=1960$~\$.`], ans: String.raw`$2253.33$~\$, $2491.67$~\$, $1960$~\$` },
  { title: "Établir un budget", q: String.raw`Revenu net $2450$~\$. Dépenses : loyer $950$~\$, services publics $110$~\$, épicerie $380$~\$, transport en commun $156$~\$, téléphone $55$~\$, restaurants $160$~\$, divertissement $120$~\$, épargne $250$~\$. Trouve le surplus ou le déficit.`,
    steps: [String.raw`Total $=950+110+380+156+55+160+120+250=2181$~\$.`, String.raw`Surplus $=2450-2181=269$~\$.`], ans: String.raw`surplus de $269$~\$` },
  { title: "Comparer avec la règle 50/30/20", q: "Classe les dépenses de l'exemple 3 et compare-les à la règle 50/30/20.",
    fig: barT({ bars: [["besoins", 67.4], ["désirs", 11.4], ["épargne", 10.2]], base: 0, top: 80, step: 20, ylabel: "% du revenu", color: "green" }, 4.8),
    steps: [String.raw`Besoins : $950+110+380+156+55=1651$~\$ ($67.4\%$).`, String.raw`Désirs : $280$ ($11.4\%$). Épargne : $250$ ($10.2\%$).`, "Les besoins dépassent 50 % à cause du loyer; ajouter le surplus à l'épargne porterait l'épargne à environ 21 %."], ans: "besoins 67.4\\%, désirs 11.4\\%, épargne 10.2\\%" },
  { title: "Dépenses irrégulières", q: String.raw`Coûts annuels : assurance auto $1680$~\$, cadeaux $360$~\$, fournitures scolaires $240$~\$. Combien faut-il mettre de côté chaque mois?`,
    steps: [String.raw`$1680+360+240=2280$~\$ par année.`, String.raw`$2280\div12=190$~\$ par mois.`], ans: String.raw`$190$~\$ par mois` },
  { title: "Les petites dépenses s'accumulent", q: String.raw`Un élève achète une boisson à $5.75$~\$ chacun des $20$ jours d'école du mois. Trouve le coût annuel (10 mois d'école) et ce que cette somme deviendrait si elle était épargnée à $4\%$ pendant $5$ ans (un dépôt par année, composé annuellement).`,
    steps: [String.raw`Par mois $=5.75\times20=115$~\$; par année $=1150$~\$.`, String.raw`Cinq dépôts de $1150$ à $4\%$ : $1150(1.04^5+1.04^4+1.04^3+1.04^2+1.04)\approx6477.92$~\$.`], ans: String.raw`$1150$~\$ par année; $\approx6478$~\$ après 5 ans` },
  { title: "Le revenu baisse", q: String.raw`Dans l'exemple 3, le revenu baisse de $20\%$. Rééquilibre le budget en protégeant les besoins.`,
    steps: [String.raw`Nouveau revenu $=2450\times0.8=1960$~\$; dépenses $2181$~\$ : déficit de $221$~\$.`, String.raw`Réduis les désirs : restaurants $160\to60$, divertissement $120\to60$ ($-160$~\$); réduis l'épargne $250\to180$ ($-70$~\$).`, String.raw`Nouveau total $1951$~\$ : un surplus de $9$~\$.`], ans: "réduire d'abord les désirs, puis l'épargne; les besoins restent" },
  { title: "Planifier un objectif d'épargne", q: String.raw`Priya veut $2400$~\$ pour un voyage dans $10$ mois. Elle a $450$~\$. Combien doit-elle épargner par mois? Par semaine?`,
    steps: [String.raw`Somme nécessaire $=2400-450=1950$~\$; par mois $=195$~\$.`, String.raw`Par semaine $=195\times12\div52=45$~\$.`], ans: String.raw`$195$~\$ par mois ($45$~\$ par semaine)` },
  { title: "Fonds d'urgence", q: String.raw`Les dépenses mensuelles essentielles sont de $1650$~\$. Combien de temps faut-il pour constituer un fonds d'urgence de $3$ mois en épargnant $275$~\$ par mois?`,
    steps: [String.raw`Objectif $=3\times1650=4950$~\$.`, String.raw`$4950\div275=18$ mois.`], ans: "18 mois" },
];

const PROBLEMS = [
  { level: 1, q: String.raw`Classe chaque dépense comme fixe ou variable et comme besoin ou désir : (a) le loyer (b) des billets de cinéma (c) l'épicerie (d) un abonnement au centre de conditionnement physique.`, recap: "Classer quatre dépenses.", ans: "(a) fixe, besoin (b) variable, désir (c) variable, besoin (d) fixe, désir" },
  { level: 1, q: String.raw`Un emploi à temps partiel paie $16.50$~\$ l'heure pour $15$ heures par semaine. Trouve la paie brute hebdomadaire et mensuelle.`, recap: "16.50 \\$/h, 15 h/semaine.", ans: String.raw`$247.50$~\$; $\approx1072.50$~\$` },
  { level: 1, q: String.raw`Revenu net $1980$~\$; dépenses $2045$~\$. Trouve le surplus ou le déficit.`, recap: "Revenu 1980, dépenses 2045.", ans: String.raw`déficit de $65$~\$` },
  { level: 2, q: String.raw`Selon la règle 50/30/20, avec un revenu net de $2850$~\$, trouve les montants pour les besoins, les désirs et l'épargne.`, recap: "50/30/20 sur 2850 \\$.", ans: String.raw`$1425$~\$, $855$~\$, $570$~\$` },
  { level: 2, q: String.raw`La paie brute est de $2600$~\$ par mois et les retenues sont de $18\%$. Trouve la paie nette.`, recap: "Net à partir du brut avec 18\\%.", ans: String.raw`$2132$~\$` },
  { level: 2, q: String.raw`Des dépenses annuelles de $1440$~\$ (assurance) et de $600$~\$ (cadeaux) doivent être prévues dans le budget mensuel. Trouve le montant mensuel.`, recap: "Part mensuelle des coûts annuels.", ans: String.raw`$170$~\$` },
  { level: 2, q: String.raw`Ben dépense $12$~\$ pour son dîner chaque jour d'école ($20$ jours par mois). Apporter son dîner coûte $4$~\$ par jour. Combien économise-t-il pendant une année scolaire de $10$ mois?`, recap: "Économies sur les dîners.", ans: String.raw`$8\times20\times10=1600$~\$` },
  { level: 2, q: String.raw`Pour épargner $3000$~\$ en $15$ mois, combien faut-il par mois? Et si tu as déjà $600$~\$?`, recap: "Objectif d'épargne.", ans: String.raw`$200$~\$; $160$~\$` },
  { level: 3, space: 6, q: String.raw`Crée un budget mensuel pour un premier appartement avec un revenu net de $2600$~\$ : inclus le loyer, les services publics, l'épicerie, le transport, le téléphone, l'assurance, le divertissement, les vêtements et l'épargne.
(a) Montre le total et le surplus ou le déficit.
(b) Compare avec la règle 50/30/20.`, recap: "Budget d'un premier appartement.", ans: "les réponses varient; le total doit être exact, il faut classer besoins/désirs/épargne et comparer les pourcentages" },
  { level: 3, space: 5, q: String.raw`Ton budget du problème 9 change : le loyer augmente de $8\%$ et tu obtiens une augmentation de $120$~\$ par mois. Ajuste le budget et explique tes choix.`, recap: "Ajuster pour la hausse de loyer et l'augmentation.", ans: "les réponses varient; recalculer loyer × 1.08 et revenu + 120, rééquilibrer désirs/épargne" },
  { level: 3, space: 5, q: String.raw`Une élève gagne $1400$~\$ net par mois. Elle veut un téléphone de $1200$~\$. Option A : épargner $200$~\$ par mois et l'acheter plus tard. Option B : l'acheter maintenant avec un plan de $59$~\$ par mois pendant $24$ mois.
(a) Trouve le coût total de chaque option.
(b) Dans combien de mois pourra-t-elle l'acheter avec l'option A?
(c) Recommande une option.`, recap: "Téléphone : épargner d'abord ou plan.", ans: String.raw`(a) A $1200$~\$ (plus la TVH si elle n'est pas incluse); B $1416$~\$ (b) $6$ mois (c) les réponses varient; A fait économiser $216$~\$` },
  { level: 3, space: 5, q: String.raw`Les dépenses essentielles sont de $1800$~\$ par mois et tu peux épargner $300$~\$ par mois dans un compte qui rapporte $3\%$ d'intérêt simple.
(a) Combien de temps faut-il pour constituer un fonds d'urgence de $4$ mois (ignore l'intérêt)?
(b) Pourquoi un fonds d'urgence est-il important dans un budget?`, recap: "Fonds d'urgence.", ans: String.raw`(a) $7200\div300=24$ mois (b) il couvre une perte d'emploi, des réparations ou une maladie sans s'endetter` },
  { level: 3, space: 5, q: "Note tes propres dépenses (ou des dépenses inventées) pendant une semaine. Classe chaque article comme besoin ou désir, convertis les totaux en une estimation mensuelle et propose deux changements qui augmenteraient l'épargne.", recap: "Journal des dépenses.", ans: "les réponses varient; conversion correcte (× 52 ÷ 12) et suggestions raisonnables" },
];

export const WS = {
  code: "7.4",
  title: "Budgets",
  bigideas: String.raw`Un budget compare le revenu net aux dépenses pour que tu puisses couvrir tes besoins, te permettre certains désirs et épargner. Les dépenses sont fixes ou variables, des besoins ou des désirs. Surplus $=$ revenus $-$ dépenses; un résultat négatif est un déficit. La règle 50/30/20 (besoins, désirs, épargne) est une vérification utile. Il faut ajuster un budget quand la situation change : protéger les besoins, réduire les désirs, continuer d'épargner et constituer un fonds d'urgence.`,
  goals: ["Trouver le revenu net et convertir des périodes de paie.", "Classer les dépenses.", "Établir un budget et trouver le surplus ou le déficit.", "Comparer avec la règle 50/30/20.", "Ajuster un budget et planifier des objectifs d'épargne."],
  curriculum: "F1.4, F1.1",
  vocab: [["Revenu brut / net", "avant / après les retenues"], ["Retenues", "impôt sur le revenu, RPC, AE"], ["Dépense fixe / variable", "la même chaque mois / change"], ["Surplus / déficit", "argent qui reste / qui manque"], ["Fonds d'urgence", "épargne pour les coûts imprévus"]],
  hook: String.raw`Demande aux élèves d'estimer ce que coûte par mois le fait de vivre seul dans ta ville : loyer, nourriture, téléphone, transport en commun. Compare leurs estimations avec de vraies annonces et de vrais prix, puis demande quel salaire horaire couvrirait ces dépenses.`,
  concepts: [
    ["1. Le revenu", String.raw`Établis le budget avec la paie nette. Mensuel à partir d'hebdomadaire : $\times52\div12$; aux deux semaines : $\times26\div12$; deux fois par mois : $\times2$.`],
    ["2. Les dépenses et la vérification 50/30/20", String.raw`Besoins, désirs et épargne en pourcentage du revenu net; coûts annuels irréguliers divisés par 12.
${barT({ bars: [["besoins", 50], ["désirs", 30], ["épargne", 20]], base: 0, top: 60, step: 10, ylabel: "% du revenu net", color: "green" }, 4.4)}`],
    ["3. Une situation qui change", String.raw`Recalcule, trouve le nouveau surplus ou déficit, protège les besoins, réduis les désirs, garde un peu d'épargne et planifie les objectifs en divisant la somme nécessaire par le nombre de mois disponibles.`],
  ],
  tips: ["Les élèves établissent souvent leur budget avec la paie brute.", "Exige une seule période (mensuelle) avant d'additionner.", "Les dépenses irrégulières sont celles qu'on oublie le plus souvent.", "Laisse les élèves rechercher de vrais prix locaux.", "Précise que la règle 50/30/20 est un guide, pas une loi."],
  examples: EXAMPLES,
  problems: PROBLEMS,
};
