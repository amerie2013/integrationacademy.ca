// MTH1W-FR 2.2 — Expressions équivalentes (miroir de ../mth1w-ch2/l2_2.mjs) : polynômes, termes semblables, addition et soustraction
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, expr, choice } from "./lib.mjs";
import { tiles, tileLegend, polygon } from "../mth1w-ch2/figs.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "2.2 Expressions équivalentes";
export const ID = lessonId(2, 2);

export const blocks = () => [
  intro({
    icon: "🟦",
    title: "Expressions équivalentes",
    overview: String.raw`Deux expressions sont <strong>équivalentes</strong> si elles donnent la même valeur pour <em>toutes</em> les valeurs de la variable — comme \(3x+2x\) et \(5x\). Dans cette leçon, tu nommeras les parties d'un polynôme, tu représenteras des polynômes avec des tuiles algébriques, tu regrouperas des <strong>termes semblables</strong>, et tu additionneras et soustrairas des polynômes. Tu apprendras aussi un test rapide qui prouve que deux expressions ne sont <em>pas</em> équivalentes.`,
    goals: [
      "classer un polynôme selon son nombre de termes et trouver son degré;",
      "reconnaître des termes semblables, y compris des termes à deux variables;",
      "représenter et simplifier des polynômes avec des tuiles algébriques et le principe du zéro;",
      "additionner et soustraire des polynômes, y compris soustraire un polynôme en additionnant son opposé;",
      "vérifier par substitution si deux expressions sont équivalentes, et utiliser un contre-exemple pour montrer qu'elles ne le sont pas.",
    ],
    curriculum: "C1.3 (expressions équivalentes), C1.4 (simplifier et vérifier)",
    prior: [
      [String.raw`Évalue \(-7+3-(-5)\).`, String.raw`\(1\). Soustraire \(-5\) revient à additionner \(5\).`],
      [String.raw`Quel est le coefficient dans \(-x^2\)?`, String.raw`\(-1\).`],
      [String.raw`Évalue \(2x^2-x\) pour \(x=-3\).`, String.raw`\(2(9)-(-3)=21\).`],
    ],
    words: [
      ["Polynôme", "un terme ou une somme de termes dont les variables ont des exposants entiers positifs ou nuls", "\\(3x^2-5x+1\\)"],
      ["Monôme / binôme / trinôme", "un polynôme à 1 / 2 / 3 termes", "\\(-4ab\\) / \\(x+7\\) / \\(x^2+x-2\\)"],
      ["Degré d'un terme", "la somme des exposants de ses variables", "\\(5x^2y^3\\) est de degré \\(5\\)"],
      ["Degré d'un polynôme", "le plus haut degré parmi ses termes", "\\(x^4-3x+2\\) : degré \\(4\\)"],
      ["Termes semblables", "des termes qui ont exactement les mêmes variables affectées des mêmes exposants", "\\(3xy^2\\) et \\(-xy^2\\)"],
      ["Expressions équivalentes", "des expressions égales pour toutes les valeurs de la ou des variables", "\\(2(x+1)\\) et \\(2x+2\\)"],
    ],
  }),

  section("📌 Polynômes : termes et degré", String.raw`
  <p>Un <strong>polynôme</strong> est une somme de termes dans lesquels chaque variable a un exposant entier positif ou nul. \(\frac{3}{x}\) et \(\sqrt{x}\) ne sont <em>pas</em> des termes d'un polynôme.</p>
  ${table(["Polynôme", "Nombre de termes", "Nom", "Degré de chaque terme", "Degré"], [
    ["\\(-8a^3\\)", "1", "monôme", "3", "3"],
    ["\\(6m-11\\)", "2", "binôme", "1, 0", "1"],
    ["\\(x^2y-4xy+y^3\\)", "3", "trinôme", "3, 2, 3", "3"],
    ["\\(2p^4-p^2q^3+7pq-1\\)", "4", "polynôme", "4, 5, 2, 0", "5"],
  ])}
  <p>On écrit habituellement un polynôme à une variable selon l'<strong>ordre décroissant</strong> des exposants : \(4-x+3x^2\) devient \(3x^2-x+4\).</p>`),

  section("📌 Tuiles algébriques et termes semblables", String.raw`
  ${tileLegend("Tuiles algébriques : la tuile x² mesure x sur x, la tuile x mesure x sur 1, la tuile unité mesure 1 sur 1. Les tuiles rouges sont négatives.")}
  <p>Les tuiles de même forme sont des <strong>termes semblables</strong> — on peut les regrouper. Une tuile positive et une tuile négative de même forme forment une <strong>paire nulle</strong> et peuvent être retirées (le <em>principe du zéro</em>).</p>
  ${tiles([{ label: "modèle", x2: 3, x: -4, c: 2 }, { label: "", x2: -1, x: 1, c: -5 }], "3x² − 4x + 2 − x² + x − 5 : une paire nulle de x², une paire nulle de x et deux paires nulles d'unités.", [{ row: 0, kind: "x2", n: 1 }, { row: 1, kind: "x2", n: 1 }, { row: 0, kind: "x", n: 1 }, { row: 1, kind: "x", n: 1 }, { row: 0, kind: "c", n: 2 }, { row: 1, kind: "c", n: 2 }])}
  <p>Ce qui reste : deux tuiles \(x^2\), trois tuiles \(x\) négatives et trois tuiles unités négatives, donc \(3x^2-4x+2-x^2+x-5=2x^2-3x-3\).</p>
  ${keyIdea(String.raw`Pour regrouper des termes semblables, additionne leurs <strong>coefficients</strong> et garde la partie variable : \(5xy^2-8xy^2=-3xy^2\). Les exposants ne changent jamais quand on additionne ou soustrait.`)}
  ${watchOut([
    String.raw`\(x^2\) et \(x\) ne sont <strong>pas</strong> des termes semblables : \(3x^2+2x\) ne peut pas être simplifié (une tuile \(x^2\) et une tuile \(x\) n'ont pas la même forme).`,
    String.raw`\(x^2y\) et \(xy^2\) ne sont pas semblables non plus — les exposants portent sur des variables différentes.`,
    String.raw`Additionner des termes semblables ne change jamais les exposants : \(4x^2+3x^2=7x^2\), et non \(7x^4\).`,
  ])}`),

  section("📌 Additionner et soustraire des polynômes", String.raw`
  <p><strong>Additionner :</strong> enlève les parenthèses et regroupe les termes semblables.</p>
  <p>\((2x^2-5x+3)+(x^2+7x-8)=3x^2+2x-5\)</p>
  <p><strong>Soustraire :</strong> soustraire un polynôme revient à additionner son <strong>opposé</strong> — change le signe de <em>chaque</em> terme de la deuxième parenthèse, puis regroupe :</p>
  <p>\((2x^2-5x+3)-(x^2+7x-8)=2x^2-5x+3-x^2-7x+8=x^2-12x+11\)</p>
  <p>Avec des tuiles, l'opposé d'un polynôme, ce sont les mêmes tuiles avec chaque couleur inversée. Utilise l'explorateur pour additionner et soustraire; observe les paires nulles disparaître.</p>`),

  widget("algebraTiles", { initP: [2, -3, 4], initQ: [-1, 5, -6] }),

  section("📌 Vérifier l'équivalence", String.raw`
  <p>Substitue la même valeur dans les deux expressions.</p>
  <ul>
    <li>Si les valeurs sont <strong>différentes</strong> pour une seule valeur, les expressions ne sont <strong>pas équivalentes</strong> — cette valeur est un <em>contre-exemple</em>.</li>
    <li>Si les valeurs sont les mêmes, c'est un indice, mais pas une preuve : \(x^2\) et \(2x\) concordent pour \(x=2\), mais pas pour \(x=3\). Pour <strong>prouver</strong> l'équivalence, simplifie une expression jusqu'à obtenir l'autre.</li>
  </ul>
  ${table(["Expressions", "Test x = 3", "Conclusion"], [
    ["\\(4x-(x-5)\\) et \\(3x+5\\)", "\\(12-(-2)=14\\) et \\(14\\)", "concordent; la simplification le prouve : \\(4x-x+5=3x+5\\)"],
    ["\\((x+1)^2\\) et \\(x^2+1\\)", "\\(16\\) et \\(10\\)", "<strong>non</strong> équivalentes"],
  ])}
  <p>Choisis tes valeurs-tests avec soin : \(0\) et \(1\) cachent souvent les différences (\(x^2\) et \(x\) concordent pour les deux!). Une valeur comme \(3\) ou \(-2\) est plus sûre.</p>`),

  examples([
    ["Classer un polynôme", String.raw`Pour \(5a^2b-3ab+2b^3-7\) : combien de termes a-t-il, quel est le degré de chaque terme et quel est le degré du polynôme?`,
      [String.raw`<b>Définitions.</b> Les termes sont séparés par des signes \(+\) et \(-\). Le degré d'un terme est la <b>somme</b> des exposants de ses variables; le degré d'un polynôme est le degré de son terme de plus haut degré.`, String.raw`Quatre termes : \(5a^2b,\ -3ab,\ 2b^3,\ -7\).`, String.raw`Degrés : \(5a^2b\) a \(2+1=3\); \(-3ab\) a \(1+1=2\); \(2b^3\) a \(3\); \(-7\) a \(0\).`, String.raw`Le plus haut est \(3\).`, String.raw`<b>Remarque :</b> \(5a^2b\) et \(2b^3\) sont tous deux de degré \(3\); l'un ou l'autre fixe le degré du polynôme.`],
      String.raw`un polynôme à \(4\) termes, de degré \(3\)`],
    ["Simplifier avec des tuiles", String.raw`Utilise des tuiles algébriques pour simplifier \(-2x^2+6x-1+4x^2-3x-4\).`,
      [String.raw`<b>Règle.</b> Seuls les termes semblables (mêmes variables, mêmes exposants) peuvent être regroupés : additionne leurs coefficients. Avec des tuiles, une tuile positive et une tuile négative de même forme forment une paire nulle.`, String.raw`Paires nulles : deux paires de \(x^2\) et trois paires de \(x\). Les unités sont toutes négatives, donc elles ne forment aucune paire nulle.`, String.raw`Il reste : \(2\) tuiles \(x^2\) positives, \(3\) tuiles \(x\) positives, \(5\) unités négatives.`, String.raw`Vérifie avec les coefficients : \((-2+4)x^2+(6-3)x+(-1-4)\).`, String.raw`<b>Vérifie avec \(x=1\) :</b> original \(-2+6-1+4-3-4=0\); réponse \(2+3-5=0\) ✓`],
      String.raw`\(2x^2+3x-5\)`,
      tiles([{ label: "", x2: -2, x: 6, c: -1 }, { label: "", x2: 4, x: -3, c: -4 }], "Deux paires nulles de x² et trois paires nulles de x sont barrées; les cinq tuiles unités sont toutes négatives.", [{ row: 0, kind: "x2", n: 2 }, { row: 1, kind: "x2", n: 2 }, { row: 0, kind: "x", n: 3 }, { row: 1, kind: "x", n: 3 }])],
    ["Termes semblables avec des fractions et deux variables", String.raw`Simplifie \(\tfrac23m+\tfrac14n-\tfrac16m-\tfrac58n\).`,
      [String.raw`<b>Règle.</b> Regroupe les termes semblables et additionne leurs coefficients; avec des coefficients fractionnaires, utilise un dénominateur commun (PPCD \(6\) pour les termes en \(m\), \(8\) pour les termes en \(n\)).`, String.raw`Termes en \(m\) : \(\tfrac46m-\tfrac16m=\tfrac36m=\tfrac12m\).`, String.raw`Termes en \(n\) : \(\tfrac28n-\tfrac58n=-\tfrac38n\).`, String.raw`<b>Vérifie avec \(m=6,\ n=8\) :</b> original \(4+2-1-5=0\); réponse \(3-3=0\) ✓`],
      String.raw`\(\tfrac12m-\tfrac38n\)`],
    ["Soustraire des polynômes", String.raw`Simplifie \((4x^2-3xy+2y^2)-(-x^2+5xy-6y^2)\).`,
      [String.raw`<b>Règle.</b> \(A-(B)\) signifie soustraire <b>chaque</b> terme de \(B\) : distribue \(-1\), ce qui change le signe de chaque terme entre parenthèses.`, String.raw`Additionne l'opposé de chaque terme de la deuxième parenthèse : \(4x^2-3xy+2y^2+x^2-5xy+6y^2\).`, String.raw`\(x^2\) : \(4+1=5\); \(xy\) : \(-3-5=-8\); \(y^2\) : \(2+6=8\).`, String.raw`Vérifie avec \(x=1,\ y=1\) : original \((4-3+2)-(-1+5-6)=3-(-2)=5\); réponse \(5-8+8=5\) ✓`],
      String.raw`\(5x^2-8xy+8y^2\)`],
    ["Le périmètre comme polynôme", String.raw`Un triangle a des côtés de \(3x-4\), \(2x+9\) et \(x+5\) (en cm). a) Écris une expression simplifiée pour le périmètre. b) Trouve le périmètre lorsque \(x=4.5\). c) Pour quelles valeurs de \(x\) le triangle existe-t-il? (Chaque côté doit être positif.)`,
      [String.raw`<b>Formule.</b> Le périmètre d'un polygone est la somme des longueurs de ses côtés : \(P=a+b+c\). Regroupe ensuite les termes semblables : \(3x+2x+x=6x\) et \(-4+9+5=10\).`, String.raw`a) \((3x-4)+(2x+9)+(x+5)=6x+10\).`, String.raw`b) \(6(4.5)+10=27+10=37\) cm.`, String.raw`c) \(3x-4>0\) exige \(x>\tfrac43\); les deux autres côtés sont positifs dès que \(x>\tfrac43\). (Un test complet vérifierait aussi que chaque côté est plus court que la somme des deux autres.)`, String.raw`<b>Vérifie b) côté par côté :</b> \(x=4.5\) donne des côtés de \(9.5,\ 18,\ 9.5\), et \(9.5+18+9.5=37\) ✓`],
      String.raw`a) \(6x+10\); b) \(37\) cm; c) \(x>\tfrac43\)`,
      polygon([[0, 160], [240, 160], [90, 20]], ["3x − 4", "2x + 9", "x + 5"], "Longueurs des côtés en centimètres.")],
  ]),

  practice([
    q("degré", String.raw`Quel est le degré de \(4x^3y-x^2y^2+9xy^4\)?`, num(5),
      "Additionne les exposants de chaque terme; le degré du polynôme est le plus grand.", [String.raw`Degrés des termes : \(3+1=4\), \(2+2=4\), \(1+4=5\).`, "Le plus haut est 5."], String.raw`\(5\)`),
    q("regrouper les termes semblables", String.raw`Simplifie \(7k-3k^2+2-5k+k^2-9\). Écris le résultat dans l'ordre décroissant.`, expr("-2k^2+2k-7"),
      String.raw`Regroupe les termes en \(k^2\), les termes en \(k\) et les constantes.`, [String.raw`\(k^2\) : \(-3+1=-2\).`, String.raw`\(k\) : \(7-5=2\).`, String.raw`Constantes : \(2-9=-7\).`], String.raw`\(-2k^2+2k-7\)`),
    q("additionner", String.raw`Simplifie \((2a^2-5a+1)+(-6a^2+a+8)\).`, expr("-4a^2-4a+9"),
      "Enlève les parenthèses et regroupe les termes semblables.", [String.raw`\(a^2\) : \(2-6=-4\).`, String.raw`\(a\) : \(-5+1=-4\).`, String.raw`Constantes : \(1+8=9\).`], String.raw`\(-4a^2-4a+9\)`),
    q("soustraire", String.raw`Simplifie \((3p^2+2pq-q^2)-(5p^2-4pq+2q^2)\).`, expr("-2p^2+6pq-3q^2"),
      "Change d'abord le signe de chaque terme de la deuxième parenthèse.", [String.raw`\(3p^2+2pq-q^2-5p^2+4pq-2q^2\).`, String.raw`\(p^2\) : \(-2\); \(pq\) : \(6\); \(q^2\) : \(-3\).`], String.raw`\(-2p^2+6pq-3q^2\)`),
    q("équivalence", String.raw`Quelle expression est équivalente à \(3-(x-4)\)?`, choice([String.raw`\(7-x\)`, String.raw`\(-1-x\)`, String.raw`\(7+x\)`, String.raw`\(-x-1\)`], 0),
      "Le signe moins devant la parenthèse change le signe des deux termes à l'intérieur.", [String.raw`\(3-(x-4)=3-x+4\).`, String.raw`\(=7-x\). Teste \(x=2\) : \(3-(-2)=5\) et \(7-2=5\) ✓`], String.raw`\(7-x\)`),
  ]),

  wrapUp({
    qas: [
      [String.raw`Pourquoi ne puis-je pas regrouper \(3x^2\) et \(2x\)?`, String.raw`Ce sont des quantités de types différents — une tuile \(x^2\) et une tuile \(x\) n'ont pas la même aire. C'est comme additionner \(3\) mètres carrés et \(2\) mètres. On ne peut compter ensemble que des tuiles de même forme.`],
      ["Quand je soustrais une parenthèse, est-ce que je change seulement le signe du premier terme?", String.raw`Non — de chaque terme. \(-(x^2-3x+5)=-x^2+3x-5\). La parenthèse est multipliée par \(-1\).`],
      ["Si deux expressions concordent pour une valeur, sont-elles équivalentes?", String.raw`Pas forcément : \(x^2\) et \(4x-4\) valent toutes deux \(4\) pour \(x=2\), mais pour \(x=3\) elles donnent \(9\) et \(8\). Un seul désaccord réfute l'équivalence; pour la prouver, simplifie algébriquement.`],
      [String.raw`Est-ce que \(\tfrac{x}{2}\) est un terme d'un polynôme? Et \(\tfrac{2}{x}\)?`, String.raw`\(\tfrac{x}{2}=\tfrac12x\) est un terme d'un polynôme (le coefficient est une fraction — c'est permis). \(\tfrac{2}{x}=2x^{-1}\) ne l'est pas : l'exposant de la variable est négatif.`],
      ["Quel est le degré d'une constante comme 7?", String.raw`\(0\), parce que \(7=7x^0\). Le degré ne compte que les exposants des variables.`],
    ],
    summary: [
      "Monôme, binôme, trinôme : 1, 2, 3 termes. Degré = la plus grande somme d'exposants dans un même terme.",
      "Les termes semblables ont des parties variables identiques; on les regroupe en additionnant les coefficients.",
      "Pour soustraire un polynôme, additionne l'opposé de chacun de ses termes.",
      "Un seul contre-exemple prouve que deux expressions ne sont pas équivalentes; la simplification prouve qu'elles le sont.",
    ],
    next: "La leçon 2.3 porte sur la multiplication : la distributivité, un monôme multiplié par un polynôme, et développer puis simplifier.",
  }),
];
