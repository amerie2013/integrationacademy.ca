// MTH1W-FR 1.1 — Les ensembles de nombres et leurs sous-ensembles (miroir de ../mth1w-ch1/v2/l1_1.mjs)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, numberLine, q, num, frac, txt, choice, hard, fig } from "./lib.mjs";
import { numberLine as lineSvg } from "./bank/svg.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "1.1 Les ensembles de nombres et leurs sous-ensembles";
export const ID = lessonId(1, 1);

const NEST = String.raw`<div style="text-align:center;margin:12px 0;"><svg viewBox="0 0 560 210" width="560" style="max-width:100%;height:auto;" role="img" aria-label="Ensembles emboîtés : les naturels dans les entiers non négatifs, dans les entiers, dans les rationnels; les irrationnels à côté des rationnels; tous dans les réels">
<rect x="4" y="4" width="552" height="202" rx="14" fill="#f8fafc" stroke="#334155" stroke-width="1.6"/><text x="16" y="24" font-size="14" font-weight="700" fill="#334155">Nombres réels ℝ</text>
<rect x="18" y="34" width="340" height="164" rx="12" fill="#ede9fe" stroke="#6d28d9" stroke-width="1.6"/><text x="30" y="54" font-size="13.5" font-weight="700" fill="#6d28d9">Rationnels ℚ   p. ex. 2/3, −0.25, 0.1̅</text>
<rect x="32" y="64" width="312" height="126" rx="11" fill="#dbeafe" stroke="#1e40af" stroke-width="1.6"/><text x="44" y="84" font-size="13.5" font-weight="700" fill="#1e40af">Entiers ℤ   p. ex. −7, −1</text>
<rect x="46" y="94" width="284" height="88" rx="10" fill="#dcfce7" stroke="#15803d" stroke-width="1.6"/><text x="58" y="114" font-size="13.5" font-weight="700" fill="#15803d">Entiers non négatifs 𝕎   0</text>
<rect x="60" y="124" width="256" height="50" rx="9" fill="#fef3c7" stroke="#b45309" stroke-width="1.6"/><text x="72" y="154" font-size="13.5" font-weight="700" fill="#b45309">Naturels ℕ   1, 2, 3, …</text>
<rect x="372" y="34" width="172" height="164" rx="12" fill="#ffe4e6" stroke="#be123c" stroke-width="1.6"/><text x="384" y="54" font-size="13.5" font-weight="700" fill="#be123c">Irrationnels</text><text x="384" y="84" font-size="13" fill="#be123c">√2, √7, π,</text><text x="384" y="104" font-size="13" fill="#be123c">0.1010010001…</text>
</svg><div style="font-size:13px;color:#64748b;">Chaque ensemble est contenu dans le suivant. Les rationnels et les irrationnels ne se chevauchent jamais; ensemble, ils forment les nombres réels.</div></div>`;

export const blocks = () => [
  intro({
    icon: "🔢",
    title: "Les ensembles de nombres et leurs sous-ensembles",
    overview: String.raw`Les mathématiciens classent les nombres en familles — <em>naturels, entiers non négatifs, entiers, rationnels, irrationnels</em> et <em>réels</em> — un peu comme les biologistes classent les êtres vivants. Savoir à quelle famille appartient un nombre te dit ce que tu peux en faire : s'il peut s'écrire sous forme de fraction, si son développement décimal se termine, s'il peut être négatif. Cette leçon construit l'arbre généalogique des nombres, montre comment classer n'importe quel nombre (même ceux qui semblent piégés, comme \(\sqrt{49}\) ou \(0.\overline{45}\)) et raconte d'où viennent deux de ces nombres : le zéro et les nombres négatifs.`,
    goals: [
      String.raw`nommer et décrire les ensembles \(\mathbb{N},\ \mathbb{W},\ \mathbb{Z},\ \mathbb{Q}\), les irrationnels et \(\mathbb{R}\), et expliquer comment ils s'emboîtent les uns dans les autres;`,
      "classer n'importe quel nombre, en le simplifiant d'abord au besoin;",
      "expliquer pourquoi les décimaux finis et les décimaux périodiques sont rationnels, et convertir un décimal périodique en fraction;",
      "utiliser un contre-exemple pour montrer qu'un énoncé sur les ensembles de nombres est faux;",
      "décrire comment le zéro et les nombres négatifs se sont développés dans différentes cultures et pourquoi ils sont importants aujourd'hui.",
    ],
    curriculum: "B1.1 (histoire d'un concept numérique), B1.2 (sous-ensembles d'un système de nombres)",
    prior: [
      [String.raw`Que vaut \(\sqrt{81}\)?`, String.raw`\(9\), car \(9\times9=81\).`],
      [String.raw`Écris \(0.3\) sous forme de fraction.`, String.raw`\(\tfrac{3}{10}\) — le dernier chiffre est à la position des dixièmes.`],
      [String.raw`\(-5\) est-il plus grand ou plus petit que \(-2\)?`, String.raw`Plus petit : \(-5\) est plus à gauche sur la droite numérique.`],
    ],
    words: [
      ["Nombres naturels \\(\\mathbb{N}\\)", "les nombres qui servent à compter", "\\(1, 2, 3, \\dots\\)"],
      ["Nombres entiers non négatifs \\(\\mathbb{W}\\)", "les nombres naturels et zéro", "\\(0, 1, 2, \\dots\\)"],
      ["Nombres entiers \\(\\mathbb{Z}\\)", "les entiers non négatifs et leurs opposés", "\\(\\dots,-2,-1,0,1,2,\\dots\\)"],
      ["Rationnels \\(\\mathbb{Q}\\)", "tout nombre qui peut s'écrire \\(\\tfrac{a}{b}\\), où \\(a,b\\) sont des entiers et \\(b\\neq0\\)", "\\(-\\tfrac{4}{9},\\ 0.6,\\ 0.\\overline{2},\\ 5\\)"],
      ["Irrationnels", "un nombre réel qui ne peut pas s'écrire \\(\\tfrac{a}{b}\\); son développement décimal ne se termine jamais et ne se répète jamais", "\\(\\sqrt{3},\\ \\pi\\)"],
      ["Réels \\(\\mathbb{R}\\)", "tous les nombres de la droite numérique (rationnels ou irrationnels)", "tous les nombres ci-dessus"],
      ["Sous-ensemble \\(\\subset\\)", "un ensemble dont tous les éléments appartiennent à un ensemble plus grand", "\\(\\mathbb{N}\\subset\\mathbb{W}\\)"],
    ],
  }),

  section("📌 L'arbre généalogique des nombres", String.raw`
  <p>Chaque ensemble est construit à partir du précédent en y ajoutant de nouvelles sortes de nombres :</p>
  <ul>
    <li>Commence par les <strong>nombres naturels</strong> \(1,2,3,\dots\) — les nombres qui servent à compter.</li>
    <li>Ajoute \(0\) pour obtenir les <strong>nombres entiers non négatifs</strong>.</li>
    <li>Ajoute les négatifs \(-1,-2,-3,\dots\) pour obtenir les <strong>nombres entiers</strong>.</li>
    <li>Ajoute tous les quotients d'entiers, comme \(\tfrac{2}{3}\) et \(-\tfrac{7}{4}\), pour obtenir les <strong>nombres rationnels</strong>. Tout entier est déjà rationnel : \(5=\tfrac{5}{1}\).</li>
    <li>La droite numérique a encore des trous — des nombres comme \(\sqrt{2}\) et \(\pi\) qui <em>ne sont pas</em> des quotients d'entiers. Ce sont les <strong>nombres irrationnels</strong>. Les rationnels et les irrationnels réunis remplissent toute la droite : ce sont les <strong>nombres réels</strong>.</li>
  </ul>
  ${NEST}
  ${keyIdea(String.raw`\(\mathbb{N}\subset\mathbb{W}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}\). Un nombre appartient à <em>son propre ensemble et à tous les ensembles qui l'entourent</em>. Ainsi, \(4\) est naturel, entier non négatif, entier, rationnel et réel — cinq ensembles à la fois.`)}
  <p>Essaie ci-dessous : choisis un nombre et regarde s'allumer tous les ensembles auxquels il appartient.</p>`),

  widget("numberSets"),

  section("📌 Rationnel ou irrationnel? Observe le développement décimal", String.raw`
  <p>La forme décimale d'un nombre t'indique à quelle famille il appartient :</p>
  ${table(["Type de décimal", "Exemple", "Rationnel?", "Pourquoi"], [
    ["Fini (il se termine)", "\\(0.375\\)", "Oui", "\\(0.375=\\tfrac{375}{1000}=\\tfrac{3}{8}\\)"],
    ["Périodique (un bloc se répète sans fin)", "\\(0.\\overline{6}=0.666\\ldots\\)", "Oui", "\\(0.\\overline{6}=\\tfrac{2}{3}\\)"],
    ["Infini et non périodique", "\\(\\sqrt{2}=1.41421356\\ldots\\)", "Non — irrationnel", "aucune fraction d'entiers n'est égale à ce nombre"],
  ])}
  <p><strong>Convertir un décimal périodique en fraction.</strong> Appelle le nombre \(x\). Multiplie par \(10\) si un chiffre se répète, par \(100\) si deux chiffres se répètent, et ainsi de suite. La soustraction aligne les parties qui se répètent pour qu'elles s'annulent :</p>
  <p style="text-align:center;">\(x=0.\overline{8}\ \Rightarrow\ 10x=8.\overline{8}\ \Rightarrow\ 10x-x=8\ \Rightarrow\ 9x=8\ \Rightarrow\ x=\tfrac{8}{9}\)</p>
  <p><strong>Racines carrées.</strong> \(\sqrt{n}\) est rationnel seulement si \(n\) est un carré parfait (\(1,4,9,16,25,\dots\)). Sinon, il est irrationnel, mais tu peux quand même le situer : \(\sqrt{20}\) est entre \(\sqrt{16}=4\) et \(\sqrt{25}=5\), un peu plus près de \(4\).</p>
  ${numberLine({ min: 0, max: 6, dots: [{ at: 4, label: "√16", color: "blue" }, { at: 5, label: "√25", color: "blue" }], caption: "√20 se trouve entre √16 = 4 et √25 = 5 (environ 4.47).", id: "nl11" })}
  ${watchOut([
    String.raw`<strong>Simplifie avant de classer.</strong> \(\sqrt{49}\) semble irrationnel, mais vaut \(7\); \(-\tfrac{12}{4}\) ressemble à une fraction, mais vaut \(-3\), un entier.`,
    String.raw`<strong>Zéro est un entier non négatif, mais pas un nombre naturel.</strong> Les nombres naturels commencent à \(1\).`,
    String.raw`<strong>\(\tfrac{22}{7}\) n'est pas \(\pi\).</strong> \(\tfrac{22}{7}=3.\overline{142857}\) est périodique, donc rationnel — ce n'est qu'une approximation de l'irrationnel \(\pi\).`,
    String.raw`<strong>L'affichage de la calculatrice ne décide pas.</strong> \(\sqrt{2}\) s'affiche \(1.414213562\) seulement parce que l'écran manque de place; le vrai développement décimal continue sans fin et sans se répéter.`,
  ])}`),

  section("📌 Une histoire de nombres : le zéro et les négatifs", String.raw`
  <p>Les ensembles ci-dessus n'ont pas été inventés d'un seul coup. Différentes cultures avaient besoin de différents nombres, et certaines idées ont mis des siècles à être acceptées.</p>
  <ul>
    <li><strong>Les nombres négatifs en Chine.</strong> Le texte chinois <em>Les neuf chapitres sur l'art mathématique</em> (compilé il y a environ 2000 ans) résolvait des problèmes de dettes et de gains à l'aide de baguettes à calculer : des baguettes rouges pour les quantités positives, des noires pour les négatives, avec des règles pour les combiner.</li>
    <li><strong>Un symbole pour « rien ».</strong> Les scribes babyloniens utilisaient une marque de position à l'intérieur des nombres, et les Mayas d'Amérique centrale écrivaient un zéro en forme de coquillage dans leurs calculs de calendrier.</li>
    <li><strong>Le zéro comme nombre.</strong> En Inde, le mathématicien Brahmagupta (628 de notre ère) a traité le zéro comme un nombre à part entière et a écrit des règles comme « une dette moins zéro est une dette » — les premières règles connues pour calculer avec le zéro et les négatifs. Ces idées ont voyagé à travers le monde arabophone jusqu'en Europe, où l'on se méfiait encore des négatifs jusque dans les années 1600.</li>
  </ul>
  <p><strong>Pourquoi c'est important aujourd'hui.</strong> Les entiers négatifs servent à noter les températures sous zéro, les soldes bancaires à découvert et les profondeurs sous le niveau de la mer. Le zéro fait fonctionner la valeur de position — sans lui, \(205\) et \(25\) se ressembleraient — et tout ordinateur stocke l'information sous forme de suites de \(0\) et de \(1\).</p>`),

  examples([
    ["Simplifier, puis classer", String.raw`Classe \(-\dfrac{18}{3}\). Donne tous les ensembles auxquels il appartient.`,
      [String.raw`<b>Les ensembles, du plus petit au plus grand.</b> \[\mathbb{N}\subset\mathbb{W}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}\] \(\mathbb{N}=\{1,2,3,\dots\}\), \(\mathbb{W}=\{0,1,2,\dots\}\), \(\mathbb{Z}=\{\dots,-2,-1,0,1,2,\dots\}\), \(\mathbb{Q}=\left\{\tfrac{a}{b}:a,b\in\mathbb{Z},\ b\ne0\right\}\).`,
        String.raw`<b>Simplifie d'abord</b>, car on classe un nombre selon sa valeur, et non selon sa façon d'être écrit : \(-\tfrac{18}{3}=-6\).`,
        String.raw`<b>Naturel ou entier non négatif?</b> Aucun de ces ensembles ne contient de nombres négatifs, et \(-6<0\), donc non.`,
        String.raw`<b>Entier?</b> \(-6\) est un nombre entier muni d'un signe, donc \(-6\in\mathbb{Z}\). Puisque \(\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}\), il est aussi rationnel et réel.`,
        String.raw`<b>Vérifie directement qu'il est rationnel :</b> \(-6=\tfrac{-6}{1}\), un quotient d'entiers ✓`],
      String.raw`\(-\tfrac{18}{3}=-6\) appartient à \(\mathbb{Z},\ \mathbb{Q},\ \mathbb{R}\)`,
      numberLine({ min: -8, max: 2, dots: [{ at: -6, label: "−18/3 = −6", color: "blue" }, { at: 0, label: "0", color: "gray" }], caption: "−6 est à gauche de 0 : c'est un entier, mais pas un entier non négatif ni un naturel.", id: "nlx11" })],
    ["Un décimal périodique est rationnel", String.raw`Montre que \(0.\overline{45}=0.454545\ldots\) est rationnel en l'écrivant sous forme de fraction irréductible.`,
      [String.raw`<b>Définition.</b> Un nombre est rationnel s'il peut s'écrire \(\tfrac{a}{b}\), où \(a,b\) sont des entiers et \(b\ne0\). Il faut donc trouver une telle fraction.`,
        String.raw`<b>Nomme le nombre.</b> Pose \(x=0.\overline{45}\). Le bloc « 45 » a <b>2</b> chiffres; multiplie donc par \(10^2=100\) pour décaler d'un bloc complet : \(100x=45.\overline{45}\).`,
        String.raw`<b>Soustrais pour éliminer la partie qui se répète.</b> Les deux nombres ont la même queue \(0.4545\ldots\) : \[100x-x=45.\overline{45}-0.\overline{45}\quad\Rightarrow\quad 99x=45\]`,
        String.raw`<b>Résous et réduis.</b> \(x=\tfrac{45}{99}\). Le PGCD de \(45\) et \(99\) est \(9\) : \(\tfrac{45\div9}{99\div9}=\tfrac{5}{11}\).`,
        String.raw`<b>Vérification :</b> \(5\div11=0.454545\ldots\) ✓`],
      String.raw`\(0.\overline{45}=\tfrac{5}{11}\), un quotient d'entiers, donc il est rationnel`],
    ["Racines carrées : carré parfait ou non?", String.raw`Classe \(\sqrt{36}\) et \(\sqrt{40}\). Entre quels deux entiers se trouve \(\sqrt{40}\)?`,
      [String.raw`<b>Règle.</b> Pour un entier non négatif \(n\), \(\sqrt{n}\) est un entier si \(n\) est un carré parfait; sinon, il est <b>irrationnel</b> — son développement décimal ne se termine jamais et ne se répète jamais.`,
        String.raw`<b>\(\sqrt{36}\) :</b> \(36=6\times6=6^2\), un carré parfait, donc \(\sqrt{36}=6\). Alors \(6\) est naturel, entier non négatif, entier, rationnel et réel.`,
        String.raw`<b>\(\sqrt{40}\) :</b> \(6^2=36\) et \(7^2=49\); aucun entier n'a pour carré \(40\), donc \(\sqrt{40}\) est irrationnel.`,
        String.raw`<b>Encadre-le entre des carrés parfaits.</b> \(36<40<49\). Les racines carrées conservent l'ordre, donc \(\sqrt{36}<\sqrt{40}<\sqrt{49}\), c'est-à-dire \(6<\sqrt{40}<7\).`,
        String.raw`<b>Vérification :</b> \(6.32^2\approx39.94\) et \(6.33^2\approx40.07\), donc \(\sqrt{40}\approx6.32\), entre \(6\) et \(7\) ✓`],
      String.raw`\(\sqrt{36}\) est naturel; \(\sqrt{40}\approx6.32\) est irrationnel et se trouve entre \(6\) et \(7\)`,
      numberLine({ min: 4, max: 8, dots: [{ at: 6, label: "√36", color: "blue" }, { at: 6.32, label: "√40", color: "red" }, { at: 7, label: "√49", color: "gray" }], caption: "√40 ≈ 6.32 se situe entre 6 et 7.", id: "nl12", unit: 110 })],
    ["Trier une liste", String.raw`Trie \(\left\{-3,\ 0,\ 2.6,\ \tfrac{5}{8},\ \sqrt{11},\ 12\right\}\) : quels nombres sont des entiers, lesquels sont rationnels et lesquels sont irrationnels?`,
      [String.raw`<b>Tests.</b> Entier : aucune partie fractionnaire. Rationnel : peut s'écrire \(\tfrac{a}{b}\) (tout décimal fini ou périodique le peut). Irrationnel : réel, mais pas rationnel.`,
        String.raw`<b>Entiers :</b> \(-3,\ 0,\ 12\) n'ont pas de partie fractionnaire.`,
        String.raw`<b>Rationnels :</b> tout entier est rationnel (\(n=\tfrac{n}{1}\)). De plus, \(2.6=\tfrac{26}{10}=\tfrac{13}{5}\) (un décimal fini) et \(\tfrac{5}{8}\) (déjà une fraction).`,
        String.raw`<b>Irrationnels :</b> \(3^2=9\) et \(4^2=16\), et \(9<11<16\); \(11\) n'est donc pas un carré parfait et \(\sqrt{11}\) est irrationnel.`,
        String.raw`<b>Vérification :</b> chaque nombre est soit rationnel, soit irrationnel, jamais les deux, et les six sont placés (\(5+1=6\)) ✓`],
      String.raw`entiers \(\{-3,0,12\}\); rationnels \(\{-3,0,2.6,\tfrac58,12\}\); irrationnels \(\{\sqrt{11}\}\)`,
      table(["Nombre", "ℕ", "𝕎", "ℤ", "ℚ", "Irrationnel"], [
        ["\\(-3\\)", "", "", "✓", "✓", ""], ["\\(0\\)", "", "✓", "✓", "✓", ""], ["\\(2.6\\)", "", "", "", "✓", ""],
        ["\\(\\tfrac58\\)", "", "", "", "✓", ""], ["\\(\\sqrt{11}\\)", "", "", "", "", "✓"], ["\\(12\\)", "✓", "✓", "✓", "✓", ""],
      ])],
    ["Réfuter un énoncé à l'aide d'un contre-exemple", String.raw`Ali affirme : « La somme de deux nombres irrationnels est toujours un nombre irrationnel. » Ali a-t-il raison?`,
      [String.raw`<b>Logique.</b> Un énoncé qui dit « toujours » est faux s'il échoue même une seule fois. Un cas où il échoue s'appelle un <b>contre-exemple</b>.`,
        String.raw`<b>Choisis deux nombres irrationnels dont les parties irrationnelles s'annulent :</b> \(\sqrt{2}\) et \(-\sqrt{2}\). Les deux sont irrationnels, car \(2\) n'est pas un carré parfait.`,
        String.raw`<b>Additionne-les :</b> \(\sqrt{2}+(-\sqrt{2})=0\).`,
        String.raw`<b>Classe la somme :</b> \(0=\tfrac{0}{1}\) est rationnel, pas irrationnel.`,
        String.raw`<b>Conclus :</b> l'énoncé échoue pour cette paire, donc il n'est pas toujours vrai. (Il est vrai pour certaines paires, p. ex. \(\sqrt2+\sqrt2=2\sqrt2\), mais « parfois » n'est pas « toujours ».)`],
      String.raw`Ali a tort : \(\sqrt{2}+(-\sqrt{2})=0\) est un contre-exemple`],
  ]),

  practice([
    q("plus petit ensemble", String.raw`Quel est le <strong>plus petit</strong> ensemble qui contient \(-11\)?`,
      choice(["Nombres naturels", "Nombres entiers non négatifs", "Nombres entiers", "Nombres rationnels"], 2),
      String.raw`\(-11\) sert-il à compter? Est-il un entier non négatif? Les négatifs apparaissent d'abord dans les entiers.`,
      [String.raw`\(-11\) est négatif, donc il n'est ni naturel ni entier non négatif.`, String.raw`C'est un entier. Les rationnels le contiennent aussi, mais les entiers forment l'ensemble le plus petit.`],
      "Nombres entiers"),
    q("décimal périodique", String.raw`Écris \(0.\overline{7}=0.777\ldots\) sous forme de fraction.`,
      frac(7, 9), String.raw`Pose \(x=0.\overline{7}\). Un seul chiffre se répète; compare donc \(10x\) avec \(x\).`,
      [String.raw`\(x=0.\overline{7}\) et \(10x=7.\overline{7}\).`, String.raw`\(10x-x=7\), donc \(9x=7\).`, String.raw`\(x=\tfrac{7}{9}\).`],
      String.raw`\(\tfrac{7}{9}\)`, { placeholder: "une fraction comme 2/3" }),
    q("trouve l'irrationnel", String.raw`Quel nombre est irrationnel?`,
      choice([String.raw`\(\sqrt{64}\)`, String.raw`\(0.125\)`, String.raw`\(\sqrt{30}\)`, String.raw`\(-\tfrac{2}{3}\)`], 2),
      "Simplifie chacun. Une racine carrée est irrationnelle seulement si le nombre sous le radical n'est pas un carré parfait.",
      [String.raw`\(\sqrt{64}=8\) (rationnel).`, String.raw`\(0.125=\tfrac18\) (rationnel).`, String.raw`\(-\tfrac23\) est un quotient d'entiers (rationnel).`, String.raw`\(30\) n'est pas un carré parfait, donc \(\sqrt{30}\) est irrationnel.`],
      String.raw`\(\sqrt{30}\)`),
    q("décimal fini", String.raw`Écris \(0.36\) sous forme de fraction irréductible.`,
      frac(9, 25), "Le dernier chiffre est à la position des centièmes; commence donc avec un dénominateur de 100.",
      [String.raw`\(0.36=\tfrac{36}{100}\).`, String.raw`Divise le numérateur et le dénominateur par \(4\) : \(\tfrac{9}{25}\).`],
      String.raw`\(\tfrac{9}{25}\)`, { placeholder: "une fraction comme 3/4" }),
    q("situer une racine", String.raw`Entre quels deux entiers consécutifs se trouve \(\sqrt{70}\)? Écris-les ainsi : <em>3 et 4</em>.`,
      txt("8 et 9", "8, 9", "8,9", "8 9", "entre 8 et 9", "8 à 9", "9 et 8", "8 and 9", "between 8 and 9"),
      "Trouve les carrés parfaits juste en dessous et juste au-dessus de 70.",
      [String.raw`\(8^2=64\) et \(9^2=81\).`, String.raw`\(64<70<81\), donc \(8<\sqrt{70}<9\).`],
      String.raw`entre \(8\) et \(9\) (\(\sqrt{70}\approx8.37\))`),
  ]),

  ...hard([
    ["Un décimal périodique qui commence plus loin", String.raw`Écris \(2.1\overline{36}=2.13636\ldots\) sous forme de fraction irréductible.`,
      [String.raw`Pose \(x=2.1\overline{36}\). Un chiffre précède la période, donc \(10x=21.\overline{36}\).`,
        String.raw`Deux chiffres se répètent; décale donc de deux positions de plus : \(1000x=2136.\overline{36}\).`,
        String.raw`Soustrais pour que les queues s'annulent : \(1000x-10x=2136-21\), ce qui donne \(990x=2115\).`,
        String.raw`Divise et réduis par \(45\) : \(x=\tfrac{2115}{990}=\tfrac{47}{22}\).`,
        String.raw`Vérification : \(47\div22=2.13636\ldots\) ✓`],
      String.raw`\(2.1\overline{36}=\tfrac{47}{22}\)`],
    ["Ne te fie pas à l'apparence d'un nombre", String.raw`Classe chaque nombre comme rationnel ou irrationnel : \(\sqrt{12}\times\sqrt{3}\), \(\ \sqrt{2.25}\), \(\ 3+\sqrt{2}\), \(\ \sqrt{0.4}\).`,
      [String.raw`Multiplie sous le radical : \(\sqrt{12}\times\sqrt{3}=\sqrt{36}=6\), qui est rationnel.`,
        String.raw`\(1.5^2=2.25\), donc \(\sqrt{2.25}=1.5\), qui est rationnel.`,
        String.raw`\(\sqrt{2}\) est irrationnel, et l'ajout d'un nombre rationnel ne peut pas faire disparaître le développement décimal infini; \(3+\sqrt{2}\) est donc irrationnel.`,
        String.raw`\(0.4=\tfrac{2}{5}\), et ni \(2\) ni \(5\) n'est un carré parfait, donc \(\sqrt{0.4}\) est irrationnel. Ce n'est pas \(0.2\), car \(0.2^2=0.04\).`],
      String.raw`\(\sqrt{12}\times\sqrt{3}\) et \(\sqrt{2.25}\) sont rationnels; \(3+\sqrt{2}\) et \(\sqrt{0.4}\) sont irrationnels`],
    ["Une courte preuve", String.raw`Explique pourquoi \(2+\sqrt{3}\) ne peut pas être rationnel, sachant que \(\sqrt{3}\) est irrationnel.`,
      [String.raw`Supposons que \(2+\sqrt{3}\) soit rationnel. Appelons-le \(r\).`,
        String.raw`Soustrais \(2\) des deux côtés : \(\sqrt{3}=r-2\).`,
        String.raw`Un nombre rationnel moins un nombre rationnel donne un nombre rationnel, donc \(\sqrt{3}\) serait rationnel.`,
        String.raw`Cela contredit ce que l'on sait de \(\sqrt{3}\); la supposition doit donc être fausse.`],
      String.raw`\(2+\sqrt{3}\) est irrationnel`],
    ["Encadrer une racine carrée", String.raw`Trouve \(\sqrt{47}\) au dixième près sans utiliser la touche racine. Utilise seulement la multiplication.`,
      [String.raw`\(6^2=36\) et \(7^2=49\), donc \(\sqrt{47}\) est entre \(6\) et \(7\), près de \(7\).`,
        String.raw`Essaie les dixièmes : \(6.8^2=46.24\) est trop petit, et \(6.9^2=47.61\) est trop grand.`,
        String.raw`Compare les écarts : \(47-46.24=0.76\) et \(47.61-47=0.61\). Le deuxième écart est plus petit.`],
      String.raw`\(\sqrt{47}\approx6.9\)`,
      fig(lineSvg({ min: 6.5, max: 7.5, step: 0.1, labelEvery: 5, letters: [{ at: 6.86, label: "√47" }] }), "√47 se situe entre 6.8 et 6.9, un peu plus près de 6.9.")],
  ], [
    q("période tardive", String.raw`Écris \(0.2\overline{7}=0.2777\ldots\) sous forme de fraction irréductible.`, frac(5, 18),
      String.raw`Compare \(100x\) avec \(10x\), pour que les queues périodiques s'alignent.`,
      [String.raw`\(100x=27.\overline{7}\) et \(10x=2.\overline{7}\).`, String.raw`Soustrais : \(90x=25\).`, String.raw`\(x=\tfrac{25}{90}=\tfrac{5}{18}\).`], String.raw`\(\tfrac{5}{18}\)`, { placeholder: "une fraction comme 2/3" }),
    q("bloc qui se répète", String.raw`Écris \(1.\overline{18}=1.1818\ldots\) sous forme de fraction impropre irréductible.`, frac(13, 11),
      "Deux chiffres se répètent; compare donc 100x avec x.",
      [String.raw`\(100x=118.\overline{18}\) et \(x=1.\overline{18}\).`, String.raw`Soustrais : \(99x=117\).`, String.raw`\(x=\tfrac{117}{99}=\tfrac{13}{11}\).`], String.raw`\(\tfrac{13}{11}\)`, { placeholder: "une fraction comme 7/3" }),
    q("trouve l'irrationnel", "Quel nombre est irrationnel?", choice([String.raw`\(\sqrt{2}\times\sqrt{18}\)`, String.raw`\(\sqrt{0.09}\)`, String.raw`\(\sqrt{0.9}\)`, String.raw`\((\sqrt{7})^2\)`], 2),
      "Simplifie d'abord chacun. Attention aux décimaux sous les radicaux.",
      [String.raw`\(\sqrt{2}\times\sqrt{18}=\sqrt{36}=6\).`, String.raw`\(\sqrt{0.09}=0.3\).`, String.raw`\((\sqrt{7})^2=7\).`, String.raw`\(0.9=\tfrac{9}{10}\), et \(10\) n'est pas un carré parfait, donc \(\sqrt{0.9}\) est irrationnel.`], String.raw`\(\sqrt{0.9}\)`),
    q("compter des entiers", String.raw`Combien d'entiers se trouvent strictement entre \(-\sqrt{30}\) et \(\sqrt{50}\)?`, num(13),
      "Situe chaque racine entre deux entiers, puis compte, sans oublier de compter 0.",
      [String.raw`\(25<30<36\), donc \(-\sqrt{30}\) est entre \(-6\) et \(-5\).`, String.raw`\(49<50<64\), donc \(\sqrt{50}\) est entre \(7\) et \(8\).`, String.raw`Les entiers sont \(-5,-4,\dots,6,7\), soit \(13\) entiers.`], String.raw`\(13\)`),
    q("toujours vrai?", "Quel énoncé est toujours vrai?", choice(["Le produit de deux nombres irrationnels est irrationnel.", "La somme de deux nombres rationnels est rationnelle.", "Le quotient de deux entiers est rationnel.", "La racine carrée d'un nombre rationnel positif est rationnelle."], 1),
      "Cherche un contre-exemple à chaque énoncé.",
      [String.raw`\(\sqrt{2}\times\sqrt{2}=2\) élimine le premier.`, String.raw`\(5\div0\) n'est pas défini, ce qui élimine le troisième.`, String.raw`\(\sqrt{2}\) élimine le quatrième.`, String.raw`La somme de fractions d'entiers donne toujours une fraction d'entiers.`], "La somme de deux nombres rationnels est rationnelle."),
  ]),

  wrapUp({
    qas: [
      [String.raw`\(0\) est-il positif ou négatif?`, String.raw`Ni l'un ni l'autre. C'est l'entier qui sépare les positifs des négatifs; il est entier non négatif, entier, rationnel et réel, mais pas naturel.`],
      [String.raw`Un nombre peut-il être à la fois rationnel et irrationnel?`, String.raw`Non. « Irrationnel » veut dire « non rationnel »; les deux ensembles ne se chevauchent donc jamais. Tout nombre réel est exactement l'un des deux.`],
      [String.raw`Toute fraction est-elle rationnelle?`, String.raw`Toute fraction d'<em>entiers</em> (avec un dénominateur non nul) est rationnelle. \(\tfrac{\pi}{2}\) s'écrit comme une fraction, mais elle est irrationnelle, car \(\pi\) n'est pas un entier.`],
      [String.raw`Comment savoir si un long décimal affiché sur ma calculatrice est rationnel?`, String.raw`En général, l'écran seul ne suffit pas. Décide d'après l'origine du nombre : la racine d'un carré parfait, une fraction ou un décimal fini est rationnel; la racine carrée d'un nombre qui n'est pas un carré parfait, ou \(\pi\), est irrationnelle.`],
      [String.raw`Pourquoi les mathématiciens tiennent-ils à savoir dans quel ensemble se trouve un nombre?`, String.raw`Chaque ensemble répond à des questions différentes. Compter exige \(\mathbb{N}\), les températures exigent \(\mathbb{Z}\), partager et mesurer exigent \(\mathbb{Q}\), et des longueurs comme la diagonale d'un carré exigent les irrationnels.`],
    ],
    summary: [
      String.raw`\(\mathbb{N}\subset\mathbb{W}\subset\mathbb{Z}\subset\mathbb{Q}\subset\mathbb{R}\); les irrationnels sont les réels qui ne sont pas rationnels.`,
      "Les décimaux finis et périodiques sont rationnels; les décimaux infinis non périodiques sont irrationnels.",
      String.raw`\(\sqrt{n}\) est rationnel seulement si \(n\) est un carré parfait — simplifie toujours avant de classer.`,
      "Un seul contre-exemple suffit pour prouver qu'un énoncé général est faux.",
      "Le zéro et les négatifs sont nés de besoins concrets (dettes, calendriers, valeur de position) en Chine, en Inde et en Amérique centrale.",
    ],
    next: "La leçon 1.2 utilise les entiers pour représenter des gains et des pertes — additionner et soustraire avec des signes.",
  }),
];
