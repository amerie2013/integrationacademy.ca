// MTH1W-FR 1.9 — Taux, pourcentages et variation en pourcentage (miroir de ../mth1w-ch1/v2/l1_9.mjs)
// La leçon 1.8 traite des rapports et des proportions; celle-ci porte sur les taux (y compris les taux de variation
// avec un signe) et les pourcentages, et utilise les proportions comme outil.
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, numberLine, q, num, pct, hard, fig } from "./lib.mjs";
import { graph } from "./bank/svg.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "1.9 Taux, pourcentages et variation en pourcentage";
export const ID = lessonId(1, 9);

export const blocks = () => [
  intro({
    icon: "📈",
    title: "Taux, pourcentages et variation en pourcentage",
    overview: String.raw`Un rapport compare des quantités exprimées dans la <em>même</em> unité; un <strong>taux</strong> compare des quantités exprimées dans des unités <em>différentes</em> — kilomètres par heure, dollars par kilogramme, degrés par heure. Un <strong>pourcentage</strong> est un rapport particulier sur \(100\). Ensemble, ils guident les décisions de tous les jours : quel format est le meilleur achat, à quelle vitesse une température baisse, ce que coûte vraiment une veste après un rabais et la TVH. Cette leçon s'appuie sur les proportions de la leçon 1.8 et ajoute les taux avec un signe, où le signe indique le sens de la variation.`,
    goals: [
      "écrire des taux et des taux unitaires, et utiliser les taux unitaires pour comparer des prix et des vitesses;",
      "interpréter des taux de variation positifs et négatifs (quantités qui augmentent ou diminuent);",
      "passer d'une fraction à un décimal et à un pourcentage, et inversement;",
      "trouver le pourcentage d'un nombre, le tout à partir d'une partie, et l'augmentation ou la diminution en pourcentage;",
      "utiliser des multiplicateurs pour les rabais, les taxes et les variations en pourcentage successives.",
    ],
    curriculum: "B3.3 (signes des rapports, des taux et des décimaux), B3.5 (taux, pourcentages et proportions); lien avec F1 (littératie financière)",
    prior: [
      [String.raw`Écris \(\tfrac{3}{4}\) sous forme décimale.`, String.raw`\(0.75\).`],
      [String.raw`Résous \(\tfrac{x}{10}=\tfrac{3}{5}\).`, String.raw`\(x=6\).`],
      [String.raw`Que vaut \(10\%\) de \(80\)?`, String.raw`\(8\).`],
    ],
    words: [
      ["Taux", "une comparaison de quantités exprimées dans des unités différentes", "\\(240\\) km en \\(3\\) h"],
      ["Taux unitaire", "un taux pour une unité de la deuxième quantité", "\\(80\\) km/h"],
      ["Taux de variation", "variation d'une quantité par unité d'une autre; son signe indique le sens", "\\(-2.5\\ ^\\circ\\)C/h"],
      ["Pourcentage", "un rapport sur 100", "\\(35\\%=\\tfrac{35}{100}=0.35\\)"],
      ["Multiplicateur", "le nombre unique qui applique une variation en pourcentage", "un rabais de \\(20\\%\\) correspond à \\(\\times0.8\\)"],
    ],
  }),

  section("📌 Taux et taux unitaires", String.raw`
  <p>Pour comparer équitablement des taux, réécris chacun sous forme de <strong>taux unitaire</strong> — divise pour que la deuxième quantité soit \(1\).</p>
  ${table(["Situation", "Taux", "Taux unitaire"], [
    ["\\(330\\) km en \\(4\\) h", "\\(\\tfrac{330\\text{ km}}{4\\text{ h}}\\)", "\\(82.5\\) km/h"],
    ["\\(2.4\\) kg de pommes pour \\(7.20\\) dollars", "\\(\\tfrac{7.20\\text{ dollars}}{2.4\\text{ kg}}\\)", "\\(3.00\\) dollars/kg"],
    ["\\(450\\) mots en \\(6\\) min", "\\(\\tfrac{450\\text{ mots}}{6\\text{ min}}\\)", "\\(75\\) mots/min"],
  ])}
  <p>Le <strong>meilleur achat</strong> est celui dont le prix unitaire est le plus bas (avec la même unité pour les deux!).</p>
  <p><strong>Taux avec un signe (taux de variation).</strong> Quand une quantité diminue, son taux de variation est <strong>négatif</strong>. Si le niveau d'eau d'une piscine baisse de \(12\) cm en \(4\) heures, le taux est \(\tfrac{-12\text{ cm}}{4\text{ h}}=-3\) cm/h. Un taux négatif divisé par une durée positive reste négatif — ce sont les règles des signes des entiers de la leçon 1.3.</p>
  ${keyIdea(String.raw`taux de variation \(=\dfrac{\text{variation de la quantité}}{\text{variation du temps}}=\dfrac{\text{final}-\text{initial}}{\text{temps}}\). Positif → augmentation; négatif → diminution; nul → aucune variation.`)}`),

  section("📌 Pourcentage, fraction, décimal", String.raw`
  <p>Pour cent signifie « sur cent ». Pour convertir :</p>
  ${table(["Fraction", "Décimal", "Pourcentage", "Comment"], [
    ["\\(\\tfrac{3}{8}\\)", "\\(0.375\\)", "\\(37.5\\%\\)", "divise \\(3\\div8\\), puis × 100"],
    ["\\(\\tfrac{6}{5}\\)", "\\(1.2\\)", "\\(120\\%\\)", "plus que le tout → plus de 100 %"],
    ["\\(\\tfrac{1}{200}\\)", "\\(0.005\\)", "\\(0.5\\%\\)", "moins de 1 %"],
  ])}
  <p>Trois sortes de questions de pourcentage — toutes reviennent à la proportion \(\dfrac{\text{partie}}{\text{tout}}=\dfrac{\text{pourcentage}}{100}\) :</p>
  <ul>
    <li><strong>Trouver la partie :</strong> \(15\%\) de \(60\) \(=0.15\times60=9\).</li>
    <li><strong>Trouver le pourcentage :</strong> \(9\) sur \(60\) donne \(\tfrac{9}{60}=0.15=15\%\).</li>
    <li><strong>Trouver le tout :</strong> \(9\) représente \(15\%\) de quel nombre? \(0.15\times w=9\), donc \(w=60\).</li>
  </ul>
  <p>Utilise la barre de pourcentage : fais glisser le pourcentage et le tout, puis passe à <em>Augmentation</em> et à <em>Diminution</em>.</p>`),

  widget("percentBar", { initWhole: 80, initPct: 35 }),

  section("📌 Variation en pourcentage et multiplicateurs", String.raw`
  <p><strong>Variation en pourcentage</strong> \(=\dfrac{\text{nouvelle}-\text{initiale}}{\text{initiale}}\times100\%\). Un résultat négatif est une <em>diminution</em> en pourcentage.</p>
  <p>Les <strong>multiplicateurs</strong> effectuent une variation en pourcentage en une seule étape :</p>
  <ul>
    <li>augmentation de \(r\%\) : multiplie par \(1+\tfrac{r}{100}\) (ajouter la TVH de \(13\%\) revient à \(\times1.13\));</li>
    <li>diminution de \(r\%\) : multiplie par \(1-\tfrac{r}{100}\) (un rabais de \(25\%\) revient à \(\times0.75\)).</li>
  </ul>
  <p>Les variations successives se multiplient : un rabais de \(25\%\) suivi d'une taxe de \(13\%\) revient à \(\times0.75\times1.13\).</p>
  ${watchOut([
    String.raw`<strong>La variation en pourcentage utilise la valeur initiale</strong> comme dénominateur, et non la nouvelle valeur.`,
    String.raw`<strong>Une hausse et une baisse égales ne s'annulent pas.</strong> Une hausse de \(10\%\) suivie d'une baisse de \(10\%\) donne \(\times1.1\times0.9=\times0.99\) — une perte de \(1\%\) au total.`,
    String.raw`<strong>Compare des taux unitaires exprimés dans les mêmes unités.</strong> Convertis les mL en L (ou les g en kg) avant de comparer des prix.`,
  ])}`),

  examples([
    ["Le meilleur achat", String.raw`Le jus coûte \(3.60\) dollars pour \(750\) mL ou \(5.40\) dollars pour \(1.2\) L. Quel est le meilleur achat?`,
      [String.raw`<b>Formule.</b> \[\text{prix unitaire}=\frac{\text{coût}}{\text{quantité}}\] Le prix unitaire le plus bas est le meilleur achat, mais seulement si les deux utilisent la <b>même unité</b>.`,
        String.raw`<b>Même unité :</b> \(1.2\) L \(=1.2\times1000=1200\) mL.`,
        String.raw`<b>Petite bouteille :</b> \(\tfrac{3.60}{750}=0.0048\) dollar/mL, soit \(0.48\) dollar par \(100\) mL.`,
        String.raw`<b>Grande bouteille :</b> \(\tfrac{5.40}{1200}=0.0045\) dollar/mL, soit \(0.45\) dollar par \(100\) mL.`,
        String.raw`<b>Compare :</b> \(0.45<0.48\); la grande bouteille coûte donc moins cher par millilitre.`,
        String.raw`<b>Vérifie autrement :</b> \(1200\) mL en petites bouteilles, c'est \(1.6\) bouteille, au coût de \(1.6\times3.60=5.76>5.40\) ✓`],
      String.raw`le format de \(1.2\) L est le meilleur achat (\(0.45\) contre \(0.48\) dollar par \(100\) mL)`],
    ["Un taux de variation négatif", String.raw`À 16 h, la température est de \(6\,^\circ\text{C}\); à 22 h, elle est de \(-9\,^\circ\text{C}\). Trouve le taux de variation moyen de la température.`,
      [String.raw`<b>Formule.</b> \[\text{taux de variation moyen}=\frac{\text{variation de la quantité}}{\text{variation du temps}}=\frac{\text{final}-\text{initial}}{t_2-t_1}\]`,
        String.raw`<b>Variation de la température</b> (final \(-\) initial) : \(-9-6=-15\) degrés. Négative, car il a fait plus froid.`,
        String.raw`<b>Variation du temps :</b> \(22-16=6\) heures.`,
        String.raw`<b>Divise :</b> \(\tfrac{-15}{6}=-2.5\) degrés par heure.`,
        String.raw`<b>Vérification :</b> \(6+6\times(-2.5)=6-15=-9\) ✓`],
      String.raw`la température a varié de \(-2.5\,^\circ\text{C}\) par heure (elle a baissé en moyenne de \(2.5\) degrés par heure)`,
      numberLine({ min: -10, max: 7, dots: [{ at: 6, label: "16 h", color: "blue" }, { at: -9, label: "22 h", color: "red" }], arrows: [{ from: 6, to: -9, label: "−15 en 6 h", color: "red", lane: 0 }], caption: "Une baisse de 15 degrés en 6 heures.", id: "nl91", unit: 30 })],
    ["Trouver le pourcentage", String.raw`À un test, Kiran a obtenu \(27\) sur \(60\). Quel pourcentage cela représente-t-il?`,
      [String.raw`<b>Formule.</b> \[\text{pourcentage}=\frac{\text{partie}}{\text{tout}}\times100\%\]`,
        String.raw`<b>Partie et tout :</b> partie \(=27\), tout \(=60\).`,
        String.raw`<b>Divise :</b> \(\tfrac{27}{60}=0.45\).`,
        String.raw`<b>Convertis :</b> \(0.45\times100\%=45\%\).`,
        String.raw`<b>Vérifie avec une fraction équivalente :</b> \(\tfrac{27}{60}=\tfrac{45}{100}\) (multiplie le haut et le bas par \(\tfrac53\)), et \(\tfrac{45}{100}=45\%\) ✓`],
      String.raw`\(45\%\)`],
    ["Diminution en pourcentage", String.raw`La population d'une ville est passée de \(2400\) à \(2100\). Trouve la variation en pourcentage.`,
      [String.raw`<b>Formule.</b> \[\text{variation en pourcentage}=\frac{\text{nouvelle}-\text{initiale}}{\text{initiale}}\times100\%\] Divise toujours par la valeur <b>initiale</b>, celle de départ.`,
        String.raw`<b>Variation :</b> \(2100-2400=-300\) (négative, donc une diminution).`,
        String.raw`<b>Divise par la valeur initiale :</b> \(\tfrac{-300}{2400}=-0.125\).`,
        String.raw`<b>Pourcentage :</b> \(-0.125\times100\%=-12.5\%\).`,
        String.raw`<b>Vérifie avec un multiplicateur :</b> une diminution de \(12.5\%\) conserve \(87.5\%\), et \(2400\times0.875=2100\) ✓`],
      String.raw`une diminution de \(12.5\%\)`],
    ["Un rabais, puis la TVH", String.raw`Un chandail à capuchon coûte \(85\) dollars. Il est à \(25\%\) de rabais, puis on ajoute la TVH de \(13\%\). Quel est le prix final?`,
      [String.raw`<b>Multiplicateurs.</b> Une diminution de \(p\%\) multiplie par \(1-\tfrac{p}{100}\); une augmentation de \(p\%\) multiplie par \(1+\tfrac{p}{100}\).`,
        String.raw`<b>Rabais :</b> \(25\%\) de rabais conserve \(75\%\), multiplicateur \(0.75\) : \(85\times0.75=63.75\) dollars.`,
        String.raw`<b>La TVH</b> s'applique au prix réduit : multiplicateur \(1.13\) : \(63.75\times1.13=72.0375\).`,
        String.raw`<b>Arrondis au cent :</b> \(72.04\) dollars.`,
        String.raw`<b>Vérifie en une étape :</b> \(85\times0.75\times1.13=85\times0.8475=72.0375\) ✓ (l'ordre des deux multiplicateurs n'a pas d'importance).`],
      String.raw`le prix final est de \(72.04\) dollars`,
      table(["Étape", "Multiplicateur", "Prix ($)"], [["initial", "", "85.00"], ["rabais de 25 %", "× 0.75", "63.75"], ["TVH de 13 %", "× 1.13", "72.04"]])],
  ]),

  practice([
    q("trouver le tout", String.raw`\(64\) représente \(40\%\) de quel nombre?`, num(160),
      String.raw`\(0.40\times w=64\).`, [String.raw`\(w=64\div0.40\).`, String.raw`\(=160\).`], String.raw`\(160\)`),
    q("taux unitaire", String.raw`Une voiture parcourt \(315\) km en \(3.5\) h. Quelle est sa vitesse moyenne en km/h?`, num(90),
      "Divise la distance par le temps.", [String.raw`\(315\div3.5\).`, String.raw`\(=90\).`], String.raw`\(90\) km/h`),
    q("de fraction à pourcentage", String.raw`Écris \(\tfrac{7}{8}\) sous forme de pourcentage.`, pct(0.875),
      String.raw`Divise, puis multiplie par \(100\).`, [String.raw`\(7\div8=0.875\).`, String.raw`\(0.875\times100\%=87.5\%\).`], String.raw`\(87.5\%\)`, { placeholder: "p. ex. 62.5%" }),
    q("augmentation en pourcentage", String.raw`Le prix d'un billet passe de \(30\) dollars à \(36\) dollars. Quelle est l'augmentation en pourcentage?`, pct(0.2),
      "La variation divisée par le prix initial.", [String.raw`Variation \(=36-30=6\).`, String.raw`\(\tfrac{6}{30}=0.2=20\%\).`], String.raw`\(20\%\)`, { placeholder: "p. ex. 15%" }),
    q("rabais et taxe", String.raw`Un article de \(45\) dollars est à \(15\%\) de rabais, puis on ajoute la TVH de \(13\%\). Quel est le prix final en dollars (au cent près)?`, num(43.22, 0.006),
      String.raw`Multiplie par \(0.85\), puis par \(1.13\).`, [String.raw`\(45\times0.85=38.25\).`, String.raw`\(38.25\times1.13=43.2225\).`, String.raw`Arrondis : \(43.22\).`], String.raw`\(43.22\) dollars`),
  ]),

  ...hard([
    ["Remonter à travers un rabais et une taxe", String.raw`Un manteau est à \(25\%\) de rabais, et on ajoute la TVH de \(13\%\) au prix réduit. Le prix final est de \(101.70\) dollars. Quel était le prix initial?`,
      [String.raw`Chaque changement est une multiplication : initial \(\times0.75\times1.13=101.70\).`,
        String.raw`Annule d'abord la taxe : \(101.70\div1.13=90\) dollars est le prix réduit.`,
        String.raw`Annule le rabais : \(90\div0.75=120\) dollars.`,
        String.raw`Vérification : \(120\times0.75\times1.13=101.70\).`],
      String.raw`le prix initial était de \(120\) dollars`],
    ["Plusieurs variations en pourcentage", String.raw`Une action monte de \(20\%\), baisse de \(25\%\), puis monte de \(10\%\). Trouve la variation globale en pourcentage, et la hausse en pourcentage nécessaire pour revenir au départ.`,
      [String.raw`Multiplie les facteurs : \(1.2\times0.75\times1.1=0.99\).`,
        String.raw`L'action vaut \(99\%\) de sa valeur de départ, soit une diminution globale de \(1\%\).`,
        String.raw`Pour revenir au départ, multiplie par \(1\div0.99\approx1.0101\).`,
        String.raw`C'est une hausse d'environ \(1.01\%\), un peu plus que le \(1\%\) perdu.`],
      String.raw`la variation globale est de \(-1\%\), et une hausse d'environ \(1.01\%\) permet de revenir au départ`],
    ["Rattraper", String.raw`Un train part à \(90\) km/h. Un deuxième train part de la même gare \(40\) minutes plus tard à \(120\) km/h sur une voie parallèle. Quand et où rattrape-t-il le premier?`,
      [String.raw`En \(40\) minutes, soit \(\tfrac23\) d'heure, le premier train parcourt \(90\times\tfrac23=60\) km.`,
        String.raw`Le deuxième train gagne \(120-90=30\) km chaque heure.`,
        String.raw`Temps pour combler l'écart : \(60\div30=2\) heures après le départ du deuxième train.`,
        String.raw`Distance : \(120\times2=240\) km de la gare. Vérification : le premier train a roulé \(2\tfrac23\) heures, et \(90\times2\tfrac23=240\).`],
      String.raw`il le rattrape \(2\) heures après son départ, à \(240\) km de la gare`,
      fig(graph({ series: [{ pts: [[0, 0], [1, 90], [2, 180], [3, 270]], color: "blue", label: "premier" }, { pts: [[0.667, 0], [1.667, 120], [2.667, 240]], color: "red", label: "deuxième" }], xmin: 0, xmax: 3.5, ymin: 0, ymax: 320, xstep: 0.5, ystep: 40, xlabel: "heures après le départ du premier train", ylabel: "km" }), "Les droites se croisent là où le deuxième train rattrape le premier.")],
    ["Diluer un mélange", String.raw`Un pichet de \(5\) L de boisson contient \(40\%\) de jus. Quelle quantité d'eau faut-il ajouter pour qu'il contienne \(25\%\) de jus?`,
      [String.raw`La quantité de jus ne change pas : \(40\%\) de \(5\) L, c'est \(2\) L.`,
        String.raw`Dans la nouvelle boisson, \(2\) L doivent représenter \(25\%\) du total; le total est donc \(2\div0.25=8\) L.`,
        String.raw`Eau à ajouter : \(8-5=3\) L.`],
      String.raw`ajoute \(3\) L d'eau`],
  ], [
    q("remonter", String.raw`Un prix est réduit de \(15\%\), puis on ajoute la TVH de \(13\%\). Le prix final est de \(76.84\) dollars. Quel était le prix initial, en dollars?`, num(80, 0.01),
      "Divise par 1.13, puis par 0.85.",
      [String.raw`\(76.84\div1.13=68\).`, String.raw`\(68\div0.85=80\).`], String.raw`\(80\)`),
    q("plusieurs variations", String.raw`Un prix monte de \(25\%\), baisse de \(20\%\), puis monte de \(10\%\). Quelle est l'augmentation globale en pourcentage? Donne le nombre de pour cent.`, num(10, 0.001),
      "Multiplie les trois facteurs.",
      [String.raw`\(1.25\times0.8\times1.1=1.1\).`, String.raw`C'est une augmentation de \(10\%\).`], String.raw`\(10\)`),
    q("rattraper", String.raw`Une voiture part à \(96\) km/h. Une deuxième voiture part \(30\) minutes plus tard du même endroit à \(120\) km/h. Combien d'heures après son départ la deuxième voiture rattrape-t-elle la première?`, num(2, 0.001),
      "Trouve l'avance en km, puis la vitesse à laquelle l'écart se comble.",
      [String.raw`Avance : \(96\times\tfrac12=48\) km.`, String.raw`L'écart se comble à \(120-96=24\) km/h.`, String.raw`\(48\div24=2\) heures.`], String.raw`\(2\)`),
    q("dilution", String.raw`Un bac de \(10\) L de solution contient \(30\%\) de sel. Combien de litres d'eau faut-il ajouter pour qu'il contienne \(20\%\) de sel?`, num(5, 0.001),
      "La quantité de sel reste la même.",
      [String.raw`Sel : \(0.3\times10=3\) L.`, String.raw`Nouveau total : \(3\div0.2=15\) L.`, String.raw`Ajoute \(15-10=5\) L.`], String.raw`\(5\)`),
    q("deux augmentations", String.raw`Après des augmentations de \(5\%\), puis de \(8\%\), un salaire est de \(56\,700\) dollars. Quel était-il avant les augmentations, en dollars?`, num(50000, 0.5),
      "Multiplie les facteurs, puis divise.",
      [String.raw`\(1.05\times1.08=1.134\).`, String.raw`\(56\,700\div1.134=50\,000\).`], String.raw`\(50\,000\)`),
  ]),

  wrapUp({
    qas: [
      ["Quelle est la différence entre un rapport et un taux?", "Un rapport compare des quantités exprimées dans la même unité (et n'a pas d'unité). Un taux compare des unités différentes; il garde donc ses unités, comme les km/h."],
      ["Que signifie un taux négatif?", String.raw`La quantité diminue. \(-3\) cm/h signifie que le niveau baisse de \(3\) cm chaque heure.`],
      ["Un pourcentage peut-il dépasser 100 %?", String.raw`Oui. \(150\%\) d'un nombre, c'est une fois et demie ce nombre, et un prix qui double a augmenté de \(100\%\).`],
      ["Un rabais de 20 % suivi d'une hausse de 20 % ramène-t-il au prix initial?", String.raw`Non : \(\times0.8\times1.2=\times0.96\), donc on finit \(4\%\) sous le prix initial.`],
      ["Dois-je arrondir au milieu d'un problème d'argent?", "Non — garde toute la précision jusqu'à la fin, puis arrondis une seule fois au cent."],
    ],
    summary: [
      "Un taux unitaire est un taux pour une unité; compare les taux unitaires (dans les mêmes unités) pour trouver le meilleur achat.",
      "Taux de variation = variation ÷ temps; le signe indique si la quantité augmente ou diminue.",
      String.raw`\(\tfrac{\text{partie}}{\text{tout}}=\tfrac{\text{pourcentage}}{100}\) répond à toutes les questions de base sur les pourcentages.`,
      String.raw`Augmentation de \(r\%\) : \(\times(1+\tfrac{r}{100})\); diminution : \(\times(1-\tfrac{r}{100})\); les variations successives se multiplient.`,
    ],
    next: "La leçon 1.10 examine ce qui se passe entre les nombres, et quand les nombres grandissent sans fin : la densité, l'infini et la limite.",
  }),
];
