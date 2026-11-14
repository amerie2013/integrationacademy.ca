// MTH1W-FR 2.1 — Des mots aux expressions algébriques (miroir de ../mth1w-ch2/l2_1.mjs)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, expr, choice } from "./lib.mjs";
import { timeline, pattern, rect } from "../mth1w-ch2/figs.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "2.1 Des mots aux expressions algébriques";
export const ID = lessonId(2, 1);

export const blocks = () => [
  intro({
    icon: "🔤",
    title: "Des mots aux expressions algébriques",
    overview: String.raw`L'algèbre est un langage qui décrit des régularités et des relations à l'aide de lettres. Dans cette leçon, tu verras comment ce langage s'est développé pendant 1500 ans, tu apprendras son vocabulaire (variable, terme, coefficient, constante), tu passeras des mots aux symboles et inversement, tu évalueras des expressions par substitution et tu construiras une expression pour la \(n\)e figure d'une suite non numérique croissante. Tous les sujets suivants de ce chapitre — simplifier, développer et résoudre — partent d'une expression bien écrite.`,
    goals: [
      "décrire comment la notation algébrique s'est développée en Grèce, en Inde, dans le monde islamique et en Europe;",
      "nommer les parties d'une expression : variable, terme, coefficient, terme constant;",
      String.raw`traduire des phrases comme « \(5\) de moins que le double d'un nombre » en expressions, et des expressions en mots;`,
      "évaluer des expressions en substituant des nombres entiers, des fractions et des nombres décimaux, en respectant la priorité des opérations;",
      String.raw`écrire et utiliser une expression pour la \(n\)e figure d'une suite croissante linéaire, et pour une situation réelle comme des frais de service.`,
    ],
    curriculum: "C1.1 (histoire de l'algèbre), C1.2 (créer des expressions à partir de régularités), C1.3 (évaluer des expressions)",
    prior: [
      [String.raw`Évalue \(3+4\times5\).`, String.raw`\(23\) — la multiplication avant l'addition.`],
      [String.raw`Évalue \((-2)^3\).`, String.raw`\(-8\) — trois facteurs négatifs.`],
      [String.raw`Quel est le terme suivant : \(4, 7, 10, 13,\ \dots\)?`, String.raw`\(16\) — la suite augmente de \(3\) chaque fois.`],
    ],
    words: [
      ["Variable", "une lettre qui représente un nombre qui peut changer ou qui est inconnu", "\\(n\\), \\(x\\), \\(t\\)"],
      ["Expression algébrique", "des nombres, des variables et des opérations, sans signe d'égalité", "\\(3n-5\\)"],
      ["Terme", "une partie d'une expression, séparée par \\(+\\) ou \\(-\\)", "\\(3n-5\\) a les termes \\(3n\\) et \\(-5\\)"],
      ["Coefficient", "le nombre qui multiplie une variable", "\\(-4\\) dans \\(-4x^2\\)"],
      ["Terme constant", "un terme sans variable", "\\(-5\\) dans \\(3n-5\\)"],
      ["Substituer", "remplacer une variable par un nombre", "\\(3n-5\\) pour \\(n=4\\) : \\(3(4)-5=7\\)"],
    ],
  }),

  section("📌 D'où vient l'algèbre", String.raw`
  <p>Pendant presque toute l'histoire, on a écrit les mathématiques en <strong>mots</strong>. Une tablette babylonienne (vers 1800 av. J.-C.) demande « le côté d'un carré » lorsque « l'aire ajoutée au côté donne trois quarts » — une équation du second degré sans aucun symbole. La notation algébrique s'est développée lentement, en trois étapes :</p>
  ${timeline([
    ["v. 250", "Diophante", "Alexandrie"],
    ["628", "Brahmagupta", "Inde"],
    ["v. 820", "al-Khwārizmī", "Bagdad"],
    ["1591", "François Viète", "France"],
    ["1637", "René Descartes", "France"],
  ], "Des mots aux symboles : environ 1400 ans de développement.")}
  ${table(["Étape", "À quoi elle ressemblait", "Qui"], [
    ["Rhétorique", "tout en mots : « une chose, et deux fois la chose, font douze »", "Babylone, Égypte, Grèce ancienne"],
    ["Syncopée", "des mots raccourcis en abréviations pour l'inconnue et ses puissances", "Diophante (<em>Arithmetica</em>); Brahmagupta utilisait des noms de couleurs pour plusieurs inconnues et donnait des règles pour le zéro et les nombres négatifs"],
    ["Symbolique", "des lettres et des signes, comme aujourd'hui : \\(3x+2=14\\)", "Viète utilisait des lettres pour les inconnues <em>et</em> pour les quantités connues; Descartes a choisi \\(x, y, z\\) pour les inconnues et \\(a, b, c\\) pour les quantités connues"],
  ])}
  <p>Le mot <strong>algèbre</strong> vient de <em>al-jabr</em> (« restaurer »), dans le titre d'un ouvrage de Muhammad ibn Mūsā al-Khwārizmī, de la Maison de la sagesse de Bagdad. <em>Al-jabr</em> voulait dire déplacer une quantité soustraite de l'autre côté d'une équation pour qu'elle devienne une addition — exactement ce que tu feras en résolvant des équations en 2.4. Son nom, en latin, nous a aussi donné le mot <strong>algorithme</strong>.</p>
  ${keyIdea(String.raw`Les symboles ont rendu l'algèbre puissante parce qu'une courte expression comme \(3n+1\) décrit une infinité de nombres à la fois — et on peut la transformer avec des règles plutôt qu'avec de longues phrases.`)}`),

  section("📌 Les parties d'une expression", String.raw`
  <p>Dans l'expression \(4x^2-x+7\) :</p>
  ${table(["Terme", "Coefficient", "Partie variable", "Type"], [
    ["\\(4x^2\\)", "\\(4\\)", "\\(x^2\\)", "terme variable"],
    ["\\(-x\\)", "\\(-1\\)", "\\(x\\)", "terme variable (le \\(1\\) ne s'écrit pas)"],
    ["\\(7\\)", "—", "aucune", "terme constant"],
  ])}
  <p>Un terme garde le signe placé devant lui : le deuxième terme est \(-x\), pas \(x\). On omet habituellement les signes de multiplication : \(4x^2\) signifie \(4\times x\times x\), et \(ab\) signifie \(a\times b\). Une barre de fraction regroupe : \(\frac{n+1}{2}\) signifie \((n+1)\div2\).</p>`),

  section("📌 Traduire des mots en symboles", String.raw`
  ${table(["Opération", "Mots qui l'annoncent", "Exemple", "Expression"], [
    ["\\(+\\)", "somme, de plus que, augmenté de, plus, total", "\\(6\\) de plus qu'un nombre", "\\(n+6\\)"],
    ["\\(-\\)", "différence, de moins que, diminué de, moins", "\\(6\\) de moins qu'un nombre", "\\(n-6\\) (pas \\(6-n\\))"],
    ["\\(\\times\\)", "produit, fois, le double / le triple, de", "les \\(\\tfrac34\\) d'un nombre", "\\(\\tfrac34n\\)"],
    ["\\(\\div\\)", "quotient, divisé par, par, la moitié de", "un nombre partagé entre \\(5\\)", "\\(\\tfrac{n}{5}\\)"],
    ["parenthèses", "« la somme de … puis … », « la quantité »", "le triple de la somme d'un nombre et de \\(4\\)", "\\(3(n+4)\\)"],
  ])}
  ${watchOut([
    String.raw`<strong>« De moins que » inverse l'ordre.</strong> « \(8\) de moins que \(x\) » s'écrit \(x-8\) : on part de \(x\) et on descend de \(8\).`,
    String.raw`<strong>Les parenthèses changent le sens.</strong> « Le double d'un nombre, plus \(5\) » s'écrit \(2n+5\); « le double de la somme d'un nombre et de \(5\) » s'écrit \(2(n+5)=2n+10\).`,
    String.raw`<strong>Des nombres entiers consécutifs</strong> diffèrent de \(1\) : \(n, n+1, n+2\). Des nombres entiers <em>pairs</em> (ou impairs) consécutifs diffèrent de \(2\) : \(n, n+2, n+4\).`,
  ])}`),

  section("📌 Évaluer : substituer, puis suivre la priorité des opérations", String.raw`
  <p>Pour <strong>évaluer</strong> une expression, remplace chaque variable par sa valeur <strong>entre parenthèses</strong>, puis calcule.</p>
  <p>\(3a^2-2ab\) pour \(a=-2,\ b=\tfrac12\) : \(3(-2)^2-2(-2)\left(\tfrac12\right)=3(4)+2=14\).</p>
  <p>Une formule est une expression qui porte un nom. Le périmètre de ce rectangle est \(P=2l+2w\) :</p>
  ${rect("l = 7.5 cm", "w = 3.2 cm", "P = 2(7.5) + 2(3.2) = 15 + 6.4 = 21.4 cm")}`),

  section("📌 Suites croissantes et la ne figure", String.raw`
  ${pattern(4, 2, "La figure 1 a 6 tuiles, la figure 2 en a 10, la figure 3 en a 14 — la partie bleue augmente de 4.")}
  <p>La suite ci-dessus ajoute \(4\) tuiles chaque fois et garde \(2\) tuiles fixes; la figure \(n\) a donc \(4n+2\) tuiles. Vérification : figure \(3\) : \(4(3)+2=14\) ✓. La figure \(100\) a \(402\) tuiles — inutile de dessiner \(100\) figures.</p>
  ${keyIdea(String.raw`Pour une suite qui augmente de la même quantité à chaque étape : <strong>coefficient de \(n\) = la différence constante</strong>; <strong>terme constant = la valeur pour \(n=0\)</strong> (une étape avant la figure 1).`)}
  <p>Utilise l'explorateur : change le nombre de tuiles ajoutées et le nombre de tuiles fixes, et observe l'expression, la table et le dessin changer ensemble.</p>`),

  widget("patternRule", { initA: 4, initB: 2 }),

  examples([
    ["Des mots à une expression", String.raw`Écris une expression pour « \(7\) de moins que le produit de \(5\) et d'un nombre \(k\) », puis évalue-la pour \(k=-3\).`,
      [String.raw`<b>Méthode.</b> Traduis une partie de la phrase à la fois. « Produit » veut dire multiplier; « \(a\) de moins que \(B\) » veut dire \(B-a\) — l'ordre est inversé par rapport aux mots.`, String.raw`« Le produit de \(5\) et de \(k\) » s'écrit \(5k\).`, String.raw`« \(7\) de moins » que ce produit : on part de \(5k\) et on soustrait \(7\) : \(5k-7\).`, String.raw`Substitue : \(5(-3)-7=-15-7=-22\).`, String.raw`<b>Vérifie l'ordre :</b> « \(7\) de moins que \(10\) » donne \(10-7=3\), pas \(7-10\); donc « \(7\) de moins que \(5k\) » s'écrit \(5k-7\) ✓`],
      String.raw`\(5k-7\); valeur \(-22\)`],
    ["Nombres entiers consécutifs", String.raw`Écris une expression simplifiée pour la somme de trois nombres entiers impairs consécutifs si le plus petit est \(n\). Trouve ensuite la somme lorsque \(n=17\).`,
      [String.raw`<b>Modèle.</b> Les nombres entiers impairs sont à \(2\) d'écart (\(17, 19, 21,\dots\)); si le plus petit est \(n\), les deux suivants sont \(n+2\) et \(n+4\).`, String.raw`Des nombres impairs consécutifs diffèrent de \(2\) : \(n,\ n+2,\ n+4\).`, String.raw`Somme : \(n+(n+2)+(n+4)=3n+6\).`, String.raw`Pour \(n=17\) : \(3(17)+6=57\). Vérification : \(17+19+21=57\).`, String.raw`<b>Pourquoi ça marche pour tout \(n\) :</b> les termes semblables se regroupent : \(n+n+n=3n\) et \(2+4=6\).`],
      String.raw`\(3n+6\); \(57\)`],
    ["Évaluer avec des fractions et des nombres négatifs", String.raw`Évalue \(\dfrac{x^2-3y}{2x+y}\) lorsque \(x=-4\) et \(y=\tfrac23\).`,
      [String.raw`<b>Règle.</b> Substitue chaque valeur entre parenthèses; une barre de fraction regroupe son numérateur et son dénominateur, alors évalue chacun complètement avant de diviser.`, String.raw`Numérateur : \((-4)^2-3\left(\tfrac23\right)=16-2=14\).`, String.raw`Dénominateur : \(2(-4)+\tfrac23=-8+\tfrac23=-\tfrac{22}{3}\).`, String.raw`Divise : \(14\div\left(-\tfrac{22}{3}\right)=14\times\left(-\tfrac{3}{22}\right)=-\tfrac{42}{22}=-\tfrac{21}{11}\).`, String.raw`<b>Vérifie avec des nombres décimaux :</b> \(y\approx0.667\) : numérateur \(16-2=14\), dénominateur \(-8+0.667=-7.333\), et \(14\div(-7.333)\approx-1.909\); \(-\tfrac{21}{11}\approx-1.909\) ✓`],
      String.raw`\(-\tfrac{21}{11}\)`],
    ["Une règle à partir d'une suite", String.raw`Une suite utilise \(5, 8, 11, 14\) cure-dents pour les figures \(1\) à \(4\). Écris une expression pour la figure \(n\) et détermine si une figure utilise exactement \(100\) cure-dents.`,
      [String.raw`<b>Règle d'une suite linéaire.</b> \[T=(\text{différence constante})\times n+(\text{valeur pour }n=0)\] Ici, la différence constante est \(8-5=11-8=14-11=3\).`, String.raw`La différence est \(3\), donc le coefficient de \(n\) est \(3\).`, String.raw`Pour \(n=0\), la valeur serait \(5-3=2\), donc \(T=3n+2\). Vérifie la figure \(4\) : \(3(4)+2=14\) ✓.`, String.raw`Pour \(100\) : \(3n+2=100\) exige \(3n=98\), et \(98\) n'est pas un multiple de \(3\).`],
      String.raw`\(T=3n+2\); aucune figure n'a exactement \(100\) cure-dents (la figure \(32\) en a \(98\), la figure \(33\) en a \(101\))`],
    ["Une expression pour une situation réelle", String.raw`Un électricien demande des frais de déplacement de \(65\) dollars plus \(48.50\) dollars l'heure. Un technicien en chauffage demande \(40\) dollars plus \(52.75\) dollars l'heure. a) Écris une expression pour chaque facture pour \(h\) heures. b) Écris une seule expression pour le total si les deux travaillent les mêmes \(h\) heures. c) Évalue b) pour \(3.5\) heures.`,
      [String.raw`<b>Modèle.</b> facture \(=\) frais fixes \(+\) (taux horaire)\(\times\)(heures). Les frais s'ajoutent une seule fois; le taux est multiplié par \(h\).`, String.raw`a) Électricien : \(65+48.5h\). Technicien : \(40+52.75h\).`, String.raw`b) Additionne les parties semblables : \((65+40)+(48.5+52.75)h=105+101.25h\).`, String.raw`c) \(105+101.25(3.5)=105+354.375=459.375\), donc environ \(459.38\) dollars.`, String.raw`<b>Vérifie c) séparément :</b> électricien \(65+48.5(3.5)=234.75\); technicien \(40+52.75(3.5)=224.625\); somme \(459.375\) ✓`],
      String.raw`b) \(105+101.25h\); c) \(459.38\) dollars`],
  ]),

  practice([
    q("mots → expression", String.raw`Écris une expression pour « \(9\) de moins que le tiers d'un nombre \(m\) ».`, expr("m/3-9"),
      String.raw`« Le tiers de \(m\) » s'écrit \(\tfrac{m}{3}\); « \(9\) de moins » soustrait \(9\) de ce nombre.`, [String.raw`Le tiers de \(m\) : \(\tfrac{m}{3}\).`, String.raw`\(9\) de moins que cela : \(\tfrac{m}{3}-9\).`], String.raw`\(\tfrac{m}{3}-9\)`),
    q("parties d'une expression", String.raw`Dans \(-x^3+6x-\tfrac{x^2}{4}+11\), quel est le coefficient de \(x^2\)?`, { kind: "number", value: -0.25 },
      String.raw`\(\tfrac{x^2}{4}\) signifie \(\tfrac14x^2\); garde le signe placé devant.`, [String.raw`Le terme est \(-\tfrac{x^2}{4}=-\tfrac14x^2\).`, String.raw`Son coefficient est \(-\tfrac14\).`], String.raw`\(-\tfrac14\)`),
    q("évaluer", String.raw`Évalue \(2p^2-5pq+q\) lorsque \(p=-3\) et \(q=4\).`, num(82),
      String.raw`Mets chaque valeur entre parenthèses : \(2(-3)^2-5(-3)(4)+4\).`, [String.raw`\(2(-3)^2=2(9)=18\).`, String.raw`\(-5(-3)(4)=60\).`, String.raw`\(18+60+4=82\).`], String.raw`\(82\)`),
    q("règle d'une suite", String.raw`Une suite compte \(7, 13, 19, 25\) carrés dans les figures \(1\) à \(4\). Écris une expression pour le nombre de carrés de la figure \(n\).`, expr("6n+1"),
      "Trouve la différence constante, puis la valeur une étape avant la figure 1.", [String.raw`Différence \(6\), donc \(6n\).`, String.raw`Une étape avant la figure 1 : \(7-6=1\).`, String.raw`Vérifie la figure 4 : \(6(4)+1=25\) ✓`], String.raw`\(6n+1\)`),
    q("nombres entiers consécutifs", String.raw`Le nombre du milieu de trois nombres entiers pairs consécutifs est \(m\). Écris une expression simplifiée pour leur somme.`, expr("3m"),
      String.raw`Des nombres pairs consécutifs diffèrent de \(2\) : les trois nombres sont \(m-2,\ m,\ m+2\).`, [String.raw`\((m-2)+m+(m+2)\).`, String.raw`Le \(-2\) et le \(+2\) forment une paire nulle : \(3m\).`], String.raw`\(3m\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi utiliser des lettres?", String.raw`Une lettre permet à une seule expression de décrire tous les cas à la fois. « La figure \(n\) a \(4n+2\) tuiles » couvre la figure \(1\) et la figure \(1000\). Elle permet aussi d'appliquer des règles (simplifier, résoudre) plutôt que de raisonner en longues phrases — l'étape qui a mené l'algèbre de Diophante à Descartes.`],
      [String.raw`« \(5\) de moins que \(x\) », est-ce la même chose que \(5-x\)?`, String.raw`Non. Cela veut dire partir de \(x\) et descendre de \(5\) : \(x-5\). Teste avec \(x=12\) : « \(5\) de moins que \(12\) » donne \(7=12-5\), mais \(5-12=-7\).`],
      [String.raw`Quel est le coefficient de \(-x\)?`, String.raw`\(-1\). Quand le coefficient est \(1\) ou \(-1\), on n'écrit pas le \(1\), mais il est quand même là.`],
      ["Pourquoi dois-je mettre un nombre négatif substitué entre parenthèses?", String.raw`Sans parenthèses, le signe se perd dans la priorité des opérations : \(x^2\) pour \(x=-3\) donne \((-3)^2=9\), mais taper \(-3^2\) donne \(-9\).`],
      ["Comment vérifier la règle d'une suite?", String.raw`Substitue deux numéros de figure que tu connais déjà (par exemple \(n=1\) et \(n=4\)). Si les deux correspondent aux nombres comptés, la règle est bonne pour toutes les figures d'une suite qui augmente d'une quantité constante.`],
    ],
    summary: [
      "L'algèbre est passée des mots (rhétorique) aux abréviations (syncopée) puis aux symboles; son nom vient de l'al-jabr d'al-Khwārizmī.",
      "Un terme garde son signe; le coefficient multiplie la variable; le terme constant n'a pas de variable.",
      "« De moins que » inverse l'ordre; les parenthèses regroupent une somme avant qu'elle soit multipliée.",
      String.raw`Substitue entre parenthèses, puis respecte la priorité des opérations. Une suite à différence constante a la règle (différence)\(\times n\) + (valeur pour \(n=0\)).`,
    ],
    next: "La leçon 2.2 montre quand deux expressions d'apparence différente sont équivalentes, et comment additionner et soustraire des polynômes avec des tuiles algébriques.",
  }),
];
