// MTH1W-FR 1.4 — Fractions : équivalence, comparaison, addition et soustraction (miroir de ../mth1w-ch1/v2/l1_4.mjs)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, numberLine, fracBar, tape, q, frac, choice, hard, fig, num } from "./lib.mjs";
import { bars } from "./bank/svg.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "1.4 Fractions : équivalence, comparaison, addition et soustraction";
export const ID = lessonId(1, 4);

export const blocks = () => [
  intro({
    icon: "🍰",
    title: "Fractions : équivalence, comparaison, addition et soustraction",
    overview: String.raw`Une fraction \(\tfrac{a}{b}\) représente \(a\) parties d'un tout divisé en \(b\) parties égales. Les fractions sont des nombres rationnels; elles peuvent donc aussi être négatives, et on les trouve partout : recettes, mesures en pouces, statistiques sportives, probabilités. L'idée la plus importante de cette leçon est que <strong>tu ne peux additionner ou comparer que des parties de même taille</strong> — tu dois donc d'abord réécrire les fractions avec un dénominateur commun. Tu travailleras aussi avec des nombres fractionnaires et des fractions négatives.`,
    goals: [
      "écrire des fractions équivalentes et simplifier une fraction en fraction irréductible à l'aide du PGCD;",
      String.raw`expliquer pourquoi \(-\tfrac{3}{4}=\tfrac{-3}{4}=\tfrac{3}{-4}\);`,
      "comparer et ordonner des fractions, y compris des fractions négatives, à l'aide d'un dénominateur commun;",
      "additionner et soustraire des fractions de dénominateurs différents à l'aide du plus petit commun dénominateur (PPCD);",
      "additionner et soustraire des nombres fractionnaires et résoudre des problèmes qui en comportent.",
    ],
    curriculum: "B3.2 (fractions unitaires), B3.3 (signes des fractions), B3.4 (opérations sur les fractions et les nombres fractionnaires)",
    prior: [
      [String.raw`Quel est le PGCD de \(18\) et de \(24\)?`, String.raw`\(6\) — le plus grand nombre qui divise les deux.`],
      [String.raw`Quel est le PPCM de \(4\) et de \(6\)?`, String.raw`\(12\) — le plus petit nombre divisible par les deux.`],
      [String.raw`\(\tfrac{1}{3}\) est-il plus grand ou plus petit que \(\tfrac{1}{4}\)?`, String.raw`Plus grand. Couper un tout en 3 morceaux donne des morceaux plus gros que le couper en 4.`],
    ],
    words: [
      ["Numérateur / dénominateur", "nombre du haut (combien de parties) / nombre du bas (combien de parties égales dans un tout)", "dans \\(\\tfrac{3}{8}\\) : 3 et 8"],
      ["Fractions équivalentes", "fractions qui ont la même valeur", "\\(\\tfrac{2}{3}=\\tfrac{8}{12}\\)"],
      ["Fraction irréductible", "le numérateur et le dénominateur n'ont aucun facteur commun autre que 1", "\\(\\tfrac{18}{24}=\\tfrac{3}{4}\\)"],
      ["PPCD", "plus petit commun dénominateur = PPCM des dénominateurs", "le PPCD de \\(\\tfrac16,\\tfrac14\\) est \\(12\\)"],
      ["Nombre fractionnaire / fraction impropre", "un entier accompagné d'une fraction / une fraction plus grande que 1 écrite sur un seul dénominateur", "\\(2\\tfrac{1}{3}=\\tfrac{7}{3}\\)"],
    ],
  }),

  section("📌 Fractions équivalentes et fractions irréductibles", String.raw`
  <p>Multiplier ou diviser le numérateur <em>et</em> le dénominateur par un même nombre non nul donne une <strong>fraction équivalente</strong> — la même quantité, coupée en un nombre différent de morceaux.</p>
  ${fracBar({ n: 2, d: 3, caption: "2/3 d'une barre" })}
  ${fracBar({ n: 8, d: 12, caption: "8/12 de la même barre : chaque tiers est coupé en 4, donc 2 × 4 = 8 morceaux sur 3 × 4 = 12" })}
  <p>Pour écrire une fraction sous sa <strong>forme irréductible</strong>, divise le numérateur et le dénominateur par leur <strong>plus grand commun diviseur (PGCD)</strong> : \(\tfrac{18}{24}=\tfrac{18\div6}{24\div6}=\tfrac{3}{4}\).</p>
  <p><strong>Fractions négatives.</strong> Une fraction est une division, et diviser des entiers de signes contraires donne un résultat négatif; donc \(\tfrac{-3}{4}=\tfrac{3}{-4}=-\tfrac{3}{4}\). Deux négatifs s'annulent : \(\tfrac{-3}{-4}=\tfrac{3}{4}\). Écris le signe devant la fraction.</p>`),

  section("📌 Comparer et ordonner des fractions", String.raw`
  <p>Pour comparer des fractions, réécris-les avec un <strong>dénominateur commun</strong> et compare les numérateurs. Pour comparer \(\tfrac{5}{6}\) et \(\tfrac{7}{9}\) : le PPCD est \(18\), donc \(\tfrac{15}{18}\) contre \(\tfrac{14}{18}\), et \(\tfrac{5}{6}\) est plus grand.</p>
  <p>Pour les <strong>fractions négatives</strong>, pense à la droite numérique : le nombre le plus à gauche est le plus petit. Puisque \(\tfrac{5}{6}>\tfrac{7}{9}\), l'ordre de leurs opposés s'inverse : \(-\tfrac{5}{6}<-\tfrac{7}{9}\).</p>
  ${numberLine({ min: -1, max: 1, dots: [{ at: -0.8333, label: "−5/6", color: "red" }, { at: -0.7778, label: "", color: "amber" }, { at: 0.7778, label: "7/9", color: "amber" }, { at: 0.8333, label: "5/6", color: "blue" }], caption: "Les opposés sont symétriques par rapport à 0; l'ordre des fractions négatives est donc inversé.", id: "nl41", unit: 260 })}
  <p>Les estimations rapides aident aussi : compare chaque fraction aux <strong>repères</strong> \(0\), \(\tfrac12\) et \(1\). \(\tfrac{3}{7}\) est inférieur à \(\tfrac12\) et \(\tfrac{5}{9}\) est supérieur, donc \(\tfrac37<\tfrac59\) sans aucun calcul.</p>`),

  section("📌 Additionner et soustraire des fractions", String.raw`
  ${keyIdea(String.raw`N'additionne ou ne soustrais que des parties de même taille. <strong>(1)</strong> Réécris les deux fractions avec le PPCD. <strong>(2)</strong> Additionne ou soustrais les numérateurs; garde le dénominateur. <strong>(3)</strong> Simplifie et, si la question le demande, écris une réponse impropre sous forme de nombre fractionnaire.`)}
  <p>L'explorateur montre pourquoi. Les barres de départ ont des morceaux de tailles différentes; en recoupant les deux selon le PPCD, les morceaux deviennent identiques, et les numérateurs s'additionnent simplement. Essaie \(\tfrac{1}{4}+\tfrac{5}{6}\), puis passe à <em>Comparer</em> et à <em>Soustraire</em>.</p>`),

  widget("fractionAddSub", { init: [2, 3, 1, 4] }),

  section("📌 Les nombres fractionnaires", String.raw`
  <p>Deux méthodes fiables :</p>
  <ul>
    <li><strong>Fractions impropres.</strong> Convertis chaque nombre fractionnaire (\(3\tfrac{2}{5}=\tfrac{3\times5+2}{5}=\tfrac{17}{5}\)), puis additionne ou soustrais comme d'habitude. Cela fonctionne toujours, même avec des négatifs.</li>
    <li><strong>Entiers et parties.</strong> Additionne séparément les entiers et les fractions. Pour soustraire, il faut parfois d'abord <em>regrouper</em> une unité sous forme de fraction : \(5\tfrac{1}{4}-2\tfrac{3}{4}=4\tfrac{5}{4}-2\tfrac{3}{4}=2\tfrac{2}{4}=2\tfrac12\).</li>
  </ul>
  ${watchOut([
    String.raw`<strong>N'additionne jamais les dénominateurs.</strong> \(\tfrac12+\tfrac13\neq\tfrac25\). Une demi-pizza plus un tiers de pizza, c'est plus qu'une demi-pizza, mais \(\tfrac25\) est moins.`,
    String.raw`<strong>Convertis correctement les nombres fractionnaires.</strong> \(2\tfrac34=\tfrac{2\times4+3}{4}=\tfrac{11}{4}\), et non \(\tfrac{2\times3+4}{4}\).`,
    String.raw`<strong>Le signe d'un nombre fractionnaire négatif s'applique aux deux parties.</strong> \(-1\tfrac12=-\left(1+\tfrac12\right)=-\tfrac32\), et non \(-1+\tfrac12\).`,
  ])}`),

  examples([
    ["La fraction irréductible à l'aide du PGCD", String.raw`Écris \(\dfrac{84}{126}\) sous forme de fraction irréductible.`,
      [String.raw`<b>Règle.</b> Diviser le numérateur et le dénominateur par un même nombre non nul donne une fraction équivalente : \[\frac{a}{b}=\frac{a\div k}{b\div k}\] En prenant \(k=\) le PGCD, on obtient la forme irréductible en une seule étape.`,
        String.raw`<b>Facteurs premiers :</b> \(84=2\times2\times3\times7=2^2\times3\times7\) et \(126=2\times3\times3\times7=2\times3^2\times7\).`,
        String.raw`<b>PGCD</b> = les facteurs premiers communs, chacun à la plus petite puissance : \(2\times3\times7=42\).`,
        String.raw`<b>Divise :</b> \(\tfrac{84\div42}{126\div42}=\tfrac{2}{3}\).`,
        String.raw`<b>Vérification :</b> \(2\) et \(3\) n'ont aucun facteur commun autre que \(1\), donc la fraction est irréductible; et \(2\times126=252=3\times84\), donc les fractions sont égales ✓`],
      String.raw`\(\tfrac{84}{126}=\tfrac{2}{3}\)`,
      table(["", "Facteurs premiers", "Communs"], [["\\(84\\)", "\\(2\\cdot2\\cdot3\\cdot7\\)", "\\(2\\cdot3\\cdot7\\)"], ["\\(126\\)", "\\(2\\cdot3\\cdot3\\cdot7\\)", "\\(2\\cdot3\\cdot7\\)"], ["PGCD", "", "\\(42\\)"]])],
    ["Comparer des fractions négatives", String.raw`Lequel est le plus grand, \(-\dfrac{2}{3}\) ou \(-\dfrac{5}{8}\)?`,
      [String.raw`<b>Règle.</b> Pour comparer des fractions, écris-les avec un dénominateur commun, puis compare les numérateurs. Sur une droite numérique, le nombre le plus à <i>droite</i> est le plus grand.`,
        String.raw`<b>PPCD de \(3\) et de \(8\) :</b> ils n'ont aucun facteur commun, donc PPCD \(=3\times8=24\).`,
        String.raw`<b>Réécris :</b> \(-\tfrac{2}{3}=-\tfrac{2\times8}{3\times8}=-\tfrac{16}{24}\) et \(-\tfrac{5}{8}=-\tfrac{5\times3}{8\times3}=-\tfrac{15}{24}\).`,
        String.raw`<b>Compare :</b> \(-15>-16\) (\(-15\) est plus près de \(0\)), donc \(-\tfrac{15}{24}>-\tfrac{16}{24}\).`,
        String.raw`<b>Vérifie avec des décimaux :</b> \(-\tfrac58=-0.625\) et \(-\tfrac23\approx-0.667\); \(-0.625\) est à droite ✓`],
      String.raw`\(-\tfrac{5}{8}>-\tfrac{2}{3}\)`,
      numberLine({ min: -1, max: 0, dots: [{ at: -0.6667, label: "−2/3", color: "red" }, { at: -0.625, label: "−5/8", color: "green" }], caption: "−5/8 est plus près de 0 : c'est le plus grand nombre.", id: "nl42", unit: 480 })],
    ["Additionner à l'aide du PPCD", String.raw`Évalue \(\dfrac{3}{4}+\dfrac{5}{6}\).`,
      [String.raw`<b>Règle.</b> On ne peut additionner des fractions que si les morceaux ont la même taille : \[\frac{a}{d}+\frac{b}{d}=\frac{a+b}{d}\]`,
        String.raw`<b>PPCD de \(4\) et de \(6\) :</b> les multiples de \(6\) sont \(6, 12, \dots\); \(12\) est le premier qui est aussi divisible par \(4\). PPCD \(=12\).`,
        String.raw`<b>Réécris :</b> \(\tfrac{3}{4}=\tfrac{3\times3}{4\times3}=\tfrac{9}{12}\) et \(\tfrac{5}{6}=\tfrac{5\times2}{6\times2}=\tfrac{10}{12}\).`,
        String.raw`<b>Additionne les numérateurs :</b> \(\tfrac{9+10}{12}=\tfrac{19}{12}\).`,
        String.raw`<b>Nombre fractionnaire :</b> \(19=12+7\), donc \(\tfrac{19}{12}=1\tfrac{7}{12}\).`,
        String.raw`<b>Vérifie par une estimation :</b> \(0.75+0.83\approx1.58\), et \(1\tfrac{7}{12}\approx1.58\) ✓`],
      String.raw`\(\tfrac{3}{4}+\tfrac{5}{6}=\tfrac{19}{12}=1\tfrac{7}{12}\)`,
      `${fracBar({ n: 9, d: 12, caption: "3/4 = 9/12" })}${fracBar({ n: 10, d: 12, caption: "5/6 = 10/12" })}`],
    ["Soustraire avec un négatif", String.raw`Évalue \(-\dfrac{1}{2}-\dfrac{3}{5}\).`,
      [String.raw`<b>Règles.</b> Utilise un dénominateur commun et change la soustraction en addition de l'opposé : \(a-b=a+(-b)\).`,
        String.raw`<b>PPCD de \(2\) et de \(5\) :</b> \(10\). Donc \(-\tfrac{1}{2}=-\tfrac{5}{10}\) et \(\tfrac{3}{5}=\tfrac{6}{10}\).`,
        String.raw`<b>Additionne l'opposé :</b> \(-\tfrac{5}{10}-\tfrac{6}{10}=-\tfrac{5}{10}+\left(-\tfrac{6}{10}\right)\).`,
        String.raw`<b>Même signe :</b> additionne les grandeurs et garde \(-\) : \(-\tfrac{5+6}{10}=-\tfrac{11}{10}=-1\tfrac{1}{10}\).`,
        String.raw`<b>Vérifie avec des décimaux :</b> \(-0.5-0.6=-1.1\) ✓`],
      String.raw`\(-\tfrac{1}{2}-\tfrac{3}{5}=-\tfrac{11}{10}=-1\tfrac{1}{10}\)`,
      numberLine({ min: -2, max: 0, arrows: [{ from: 0, to: -0.5, label: "−1/2", color: "gray", lane: 0 }, { from: -0.5, to: -1.1, label: "−3/5", color: "red", lane: 1 }], dots: [{ at: -1.1, label: "", color: "green" }], caption: "Pars de −1/2 et déplace-toi de 6 dixièmes de plus vers la gauche; tu arrives à −11/10 (le point vert).", id: "nlx44", unit: 170 })],
    ["Des nombres fractionnaires dans un problème", String.raw`Une planche mesure \(4\tfrac{1}{3}\) m de long. On en coupe un morceau de \(1\tfrac{3}{4}\) m. Quelle est la longueur du morceau qui reste?`,
      [String.raw`<b>Modèle.</b> « Couper » signifie soustraire : reste \(=4\tfrac13-1\tfrac34\).`,
        String.raw`<b>Fractions impropres</b> (pour ne jamais avoir à emprunter une unité) : \(4\tfrac13=\tfrac{4\times3+1}{3}=\tfrac{13}{3}\) et \(1\tfrac34=\tfrac{1\times4+3}{4}=\tfrac{7}{4}\).`,
        String.raw`<b>Le PPCD de \(3\) et de \(4\) est \(12\) :</b> \(\tfrac{13}{3}=\tfrac{52}{12}\) et \(\tfrac{7}{4}=\tfrac{21}{12}\).`,
        String.raw`<b>Soustrais :</b> \(\tfrac{52-21}{12}=\tfrac{31}{12}\). En nombre fractionnaire : \(31=2\times12+7\), donc \(2\tfrac{7}{12}\).`,
        String.raw`<b>Vérifie en additionnant :</b> \(2\tfrac{7}{12}+1\tfrac{9}{12}=3\tfrac{16}{12}=4\tfrac{4}{12}=4\tfrac13\) ✓`],
      String.raw`le morceau qui reste mesure \(2\tfrac{7}{12}\) m`,
      tape([{ n: 21, label: "coupé : 21/12 m", fill: "#fecdd3", stroke: "#be123c" }, { n: 31, label: "reste : 31/12 m", fill: "#dcfce7", stroke: "#15803d" }], "La planche en douzièmes de mètre : 52 parties = 21 coupées + 31 qui restent.", 8)],
  ]),

  practice([
    q("fraction irréductible", String.raw`Écris \(\dfrac{60}{84}\) sous forme de fraction irréductible.`, frac(5, 7),
      String.raw`Trouve le PGCD de \(60\) et de \(84\).`, [String.raw`Le PGCD de \(60\) et de \(84\) est \(12\).`, String.raw`\(\tfrac{60\div12}{84\div12}=\tfrac{5}{7}\).`], String.raw`\(\tfrac{5}{7}\)`, { placeholder: "une fraction comme 3/4" }),
    q("comparer", String.raw`Lequel est le plus grand?`, choice([String.raw`\(\tfrac{4}{7}\)`, String.raw`\(\tfrac{5}{9}\)`, "Ils sont égaux"], 0),
      String.raw`Réécris les deux avec le dénominateur \(63\).`, [String.raw`\(\tfrac47=\tfrac{36}{63}\) et \(\tfrac59=\tfrac{35}{63}\).`, String.raw`\(36>35\).`], String.raw`\(\tfrac{4}{7}\)`),
    q("additionner", String.raw`Évalue \(\dfrac{2}{5}+\dfrac{1}{3}\).`, frac(11, 15),
      String.raw`Le PPCD de \(5\) et de \(3\) est \(15\).`, [String.raw`\(\tfrac{6}{15}+\tfrac{5}{15}\).`, String.raw`\(=\tfrac{11}{15}\).`], String.raw`\(\tfrac{11}{15}\)`, { placeholder: "une fraction comme 3/4" }),
    q("soustraire jusqu'à un négatif", String.raw`Évalue \(\dfrac{5}{6}-\dfrac{7}{8}\).`, frac(-1, 24),
      String.raw`Le PPCD de \(6\) et de \(8\) est \(24\). Quelle fraction est la plus grande?`, [String.raw`\(\tfrac{20}{24}-\tfrac{21}{24}\).`, String.raw`\(=-\tfrac{1}{24}\).`], String.raw`\(-\tfrac{1}{24}\)`, { placeholder: "p. ex. -1/6" }),
    q("nombres fractionnaires", String.raw`Évalue \(2\tfrac{1}{4}+1\tfrac{5}{6}\). Donne un nombre fractionnaire ou une fraction impropre.`, frac(49, 12),
      String.raw`Convertis en fractions impropres, puis utilise le PPCD \(12\).`,
      [String.raw`\(\tfrac{9}{4}+\tfrac{11}{6}\).`, String.raw`\(\tfrac{27}{12}+\tfrac{22}{12}=\tfrac{49}{12}\).`, String.raw`\(\tfrac{49}{12}=4\tfrac{1}{12}\).`], String.raw`\(4\tfrac{1}{12}\) \(\left(=\tfrac{49}{12}\right)\)`, { placeholder: "p. ex. 3 1/2 ou 7/2" }),
  ]),

  ...hard([
    ["Nombres fractionnaires, négatifs et valeur absolue", String.raw`Évalue \(-2\tfrac13-\left(-1\tfrac34\right)+\tfrac56-\left|\tfrac13-1\tfrac12\right|\).`,
      [String.raw`Convertis en fractions impropres : \(-\tfrac73+\tfrac74+\tfrac56-\left|\tfrac13-\tfrac32\right|\).`,
        String.raw`Entre les barres : \(\tfrac13-\tfrac32=\tfrac26-\tfrac96=-\tfrac76\), donc la valeur absolue est \(\tfrac76\).`,
        String.raw`Utilise le dénominateur commun \(12\) : \(\tfrac{-28+21+10-14}{12}\).`,
        String.raw`Additionne les numérateurs : \(-\tfrac{11}{12}\).`],
      String.raw`la valeur est \(-\tfrac{11}{12}\)`],
    ["Trouver une capacité à partir d'une variation de fractions", String.raw`Un réservoir est rempli aux \(\tfrac38\). Après l'ajout de \(22\) L, il est rempli aux \(\tfrac56\). Trouve la capacité du réservoir.`,
      [String.raw`L'augmentation est \(\tfrac56-\tfrac38=\tfrac{20}{24}-\tfrac{9}{24}=\tfrac{11}{24}\) du réservoir.`,
        String.raw`Donc \(\tfrac{11}{24}\) du réservoir correspond à \(22\) L, ce qui veut dire que \(\tfrac{1}{24}\) du réservoir correspond à \(22\div11=2\) L.`,
        String.raw`Le réservoir entier contient \(24\times2=48\) L.`],
      String.raw`le réservoir contient \(48\) L`,
      fig(bars([{ n: 9, d: 24, label: "avant" }, { n: 20, d: 24, label: "après", color: "amber" }]), "Chaque petite case représente 1/24 du réservoir. Le niveau monte de 11 cases.")],
    ["Une fraction entre deux négatifs très proches", String.raw`Trouve une fraction entre \(-\tfrac47\) et \(-\tfrac59\).`,
      [String.raw`Utilise le dénominateur commun \(63\) : \(-\tfrac{36}{63}\) et \(-\tfrac{35}{63}\).`,
        String.raw`Il n'y a aucun entier entre \(35\) et \(36\); double donc les dénominateurs : \(-\tfrac{72}{126}\) et \(-\tfrac{70}{126}\).`,
        String.raw`\(-\tfrac{71}{126}\) se trouve entre les deux.`],
      String.raw`\(-\tfrac{71}{126}\) est une de ces fractions`],
    ["Une longue somme qui se simplifie", String.raw`Évalue \(\tfrac{1}{1\times2}+\tfrac{1}{2\times3}+\tfrac{1}{3\times4}+\cdots+\tfrac{1}{9\times10}\).`,
      [String.raw`Remarque une régularité : \(\tfrac12-\tfrac13=\tfrac{3-2}{6}=\tfrac{1}{2\times3}\). De la même façon, chaque terme est une différence de deux fractions unitaires.`,
        String.raw`Réécris la somme : \(\left(1-\tfrac12\right)+\left(\tfrac12-\tfrac13\right)+\left(\tfrac13-\tfrac14\right)+\cdots+\left(\tfrac19-\tfrac{1}{10}\right)\).`,
        String.raw`Chaque \(-\tfrac12\) annule le \(+\tfrac12\) suivant, et ainsi de suite. Seuls le premier et le dernier morceau restent.`,
        String.raw`\(1-\tfrac{1}{10}=\tfrac{9}{10}\).`],
      String.raw`la somme est \(\tfrac{9}{10}\)`],
  ], [
    q("longue expression", String.raw`Évalue \(3\tfrac25-\left(-1\tfrac12\right)-\left|-2\tfrac34+\tfrac12\right|\). Réponds par une fraction.`, frac(53, 20),
      "Trouve d'abord la valeur absolue, puis utilise le dénominateur 20.",
      [String.raw`\(-\tfrac{11}{4}+\tfrac24=-\tfrac94\), donc la valeur absolue est \(\tfrac94\).`, String.raw`\(\tfrac{17}{5}+\tfrac32-\tfrac94=\tfrac{68+30-45}{20}\).`, String.raw`\(=\tfrac{53}{20}\).`], String.raw`\(\tfrac{53}{20}\)`, { placeholder: "une fraction comme 7/4" }),
    q("capacité", String.raw`Un réservoir est rempli aux \(\tfrac25\). Après l'ajout de \(26\) L, il est rempli aux \(\tfrac56\). Trouve la capacité du réservoir, en litres.`, num(60),
      "Soustrais les fractions pour trouver quelle partie du réservoir représentent 26 L.",
      [String.raw`\(\tfrac56-\tfrac25=\tfrac{25-12}{30}=\tfrac{13}{30}\).`, String.raw`\(\tfrac{1}{30}\) du réservoir correspond à \(26\div13=2\) L.`, String.raw`Le réservoir contient \(60\) L.`], String.raw`\(60\)`),
    q("somme qui se simplifie", String.raw`Évalue \(\tfrac{1}{2\times3}+\tfrac{1}{3\times4}+\cdots+\tfrac{1}{7\times8}\).`, frac(3, 8),
      String.raw`Chaque terme est une différence, comme \(\tfrac12-\tfrac13\). Que reste-t-il après les annulations?`,
      [String.raw`La somme est \(\left(\tfrac12-\tfrac13\right)+\left(\tfrac13-\tfrac14\right)+\cdots+\left(\tfrac17-\tfrac18\right)\).`, String.raw`Tout s'annule sauf \(\tfrac12-\tfrac18\).`, String.raw`\(\tfrac48-\tfrac18=\tfrac38\).`], String.raw`\(\tfrac38\)`, { placeholder: "une fraction comme 2/5" }),
    q("nombre manquant", String.raw`Quel nombre faut-il additionner à \(-2\tfrac16\) pour obtenir \(\tfrac34\)? Réponds par une fraction.`, frac(35, 12),
      "Soustrais : la cible moins le nombre de départ.",
      [String.raw`\(\tfrac34-\left(-\tfrac{13}{6}\right)=\tfrac34+\tfrac{13}{6}\).`, String.raw`\(=\tfrac{9}{12}+\tfrac{26}{12}=\tfrac{35}{12}\).`], String.raw`\(\tfrac{35}{12}\)`, { placeholder: "une fraction comme 7/4" }),
    q("fraction la plus proche", String.raw`Quelle fraction est la plus proche de \(\tfrac23\)?`, choice([String.raw`\(\tfrac58\)`, String.raw`\(\tfrac{7}{10}\)`, String.raw`\(\tfrac{9}{14}\)`, String.raw`\(\tfrac{11}{15}\)`], 2),
      String.raw`Trouve la distance entre \(\tfrac23\) et chacune, sous forme de fraction.`,
      [String.raw`\(\tfrac23-\tfrac58=\tfrac{1}{24}\).`, String.raw`\(\tfrac{7}{10}-\tfrac23=\tfrac{1}{30}\).`, String.raw`\(\tfrac23-\tfrac{9}{14}=\tfrac{1}{42}\).`, String.raw`\(\tfrac{11}{15}-\tfrac23=\tfrac{1}{15}\). La plus petite distance est \(\tfrac{1}{42}\).`], String.raw`\(\tfrac{9}{14}\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi ai-je besoin d'un dénominateur commun pour additionner, mais pas pour multiplier?", String.raw`Additionner réunit des morceaux; ils doivent donc avoir la même taille. Multiplier revient à prendre une partie d'une partie — le modèle d'aire de la leçon 1.5 crée son propre dénominateur.`],
      ["Dois-je utiliser le plus petit commun dénominateur?", String.raw`N'importe quel dénominateur commun fonctionne (le produit des dénominateurs convient toujours), mais le PPCD garde les nombres petits et réduit la simplification à la fin.`],
      [String.raw`Où se place le signe négatif dans \(-\tfrac{3}{4}\)?`, String.raw`N'importe où — \(\tfrac{-3}{4}\), \(\tfrac{3}{-4}\) et \(-\tfrac34\) sont égaux. Par convention, on l'écrit devant.`],
      ["Comment comparer deux fractions négatives?", String.raw`Compare d'abord leurs grandeurs. Celle qui a la plus grande grandeur est la plus éloignée de \(0\) vers la gauche; c'est donc le plus petit nombre.`],
      ["Ma réponse doit-elle être un nombre fractionnaire ou une fraction impropre?", "Les deux sont correctes. Les nombres fractionnaires sont plus faciles à visualiser dans les problèmes de mesure; les fractions impropres sont plus pratiques pour poursuivre les calculs."],
    ],
    summary: [
      "Multiplie ou divise le haut et le bas par un même nombre pour obtenir une fraction équivalente; divise par le PGCD pour obtenir la fraction irréductible.",
      String.raw`\(\tfrac{-a}{b}=\tfrac{a}{-b}=-\tfrac{a}{b}\).`,
      "Compare, additionne et soustrais avec un dénominateur commun (PPCD); n'additionne jamais les dénominateurs.",
      "Convertis les nombres fractionnaires en fractions impropres, ou additionne séparément les entiers et les parties en regroupant au besoin.",
    ],
    next: "La leçon 1.5 porte sur la multiplication et la division de fractions et présente l'inverse d'un nombre.",
  }),
];
