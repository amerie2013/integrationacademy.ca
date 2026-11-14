// MTH1W-FR 1.3 — Multiplier et diviser des nombres entiers (miroir de ../mth1w-ch1/v2/l1_3.mjs)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, numberLine, q, num, hard, fig } from "./lib.mjs";
import { graph } from "./bank/svg.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "1.3 Multiplier et diviser des nombres entiers";
export const ID = lessonId(1, 3);

export const blocks = () => [
  intro({
    icon: "✖️",
    title: "Multiplier et diviser des nombres entiers",
    overview: String.raw`La multiplication est une addition répétée, et cette seule idée explique toutes les règles des signes pour les entiers — y compris le fameux « négatif fois négatif donne positif ». Dans cette leçon, tu verras les règles sur une droite numérique et dans une régularité, tu les utiliseras pour multiplier et diviser, puis tu combineras les quatre opérations en respectant la <strong>priorité des opérations</strong>, avec les parenthèses et les puissances. Tu te serviras de ces habiletés chaque fois que tu substitueras un nombre négatif dans une formule.`,
    goals: [
      "multiplier et diviser deux entiers et donner le signe de la réponse avant de calculer;",
      "expliquer les règles des signes à l'aide de sauts répétés et de régularités;",
      "trouver le signe d'un produit de plusieurs facteurs en comptant les facteurs négatifs;",
      String.raw`expliquer pourquoi la division par \(0\) n'est pas définie;`,
      "évaluer des expressions avec des entiers comportant des parenthèses, des puissances et les quatre opérations, et substituer des entiers dans des formules.",
    ],
    curriculum: "B3.1, B3.3 (effet des signes); B3.4 (formules)",
    prior: [
      [String.raw`Évalue \(-3+(-3)+(-3)+(-3)\).`, String.raw`\(-12\). Quatre groupes de \(-3\).`],
      [String.raw`Que vaut \(7\times8\)? \(56\div7\)?`, String.raw`\(56\) et \(8\). La division annule la multiplication.`],
      [String.raw`Dans \(2+3\times4\), quelle opération vient en premier?`, String.raw`La multiplication : \(2+12=14\).`],
    ],
    words: [
      ["Produit", "le résultat d'une multiplication", "le produit de \\(-3\\) et de \\(4\\) est \\(-12\\)"],
      ["Quotient", "le résultat d'une division", "\\(-20\\div5=-4\\)"],
      ["Facteur", "un nombre que l'on multiplie", "dans \\((-2)(7)\\), les facteurs sont \\(-2\\) et \\(7\\)"],
      ["Non défini", "n'a aucune valeur — aucun nombre ne convient", "\\(8\\div0\\)"],
      ["Priorité des opérations", "l'ordre convenu : Parenthèses, Exposants, Division et Multiplication (de gauche à droite), Addition et Soustraction (de gauche à droite)", "PEDMAS"],
    ],
  }),

  section("📌 Les règles des signes", String.raw`
  <p>\(3\times(-4)\) signifie trois sauts de \(-4\) : \((-4)+(-4)+(-4)=-12\). Chaque saut va vers la gauche, donc le produit est négatif.</p>
  ${numberLine({ min: -13, max: 1, arrows: [{ from: 0, to: -4, label: "−4", color: "red", lane: 0 }, { from: -4, to: -8, label: "−4", color: "red", lane: 1 }, { from: -8, to: -12, label: "−4", color: "red", lane: 0 }], dots: [{ at: -12, label: "−12", color: "green" }], caption: "3 × (−4) : trois sauts de −4 aboutissent à −12.", id: "nl31", unit: 30 })}
  <p>Un multiplicateur négatif signifie « l'opposé de » : \(-3\times(-4)\) est l'opposé de \(3\times(-4)\), donc l'opposé de \(-12\), soit \(+12\).</p>
  ${keyIdea(String.raw`Quand on multiplie ou divise deux entiers : <strong>même signe → positif</strong>, <strong>signes contraires → négatif</strong>. La grandeur de la réponse est le produit (ou le quotient) des valeurs absolues.`)}
  ${table(["", "positif", "négatif"], [["<strong>positif</strong>", "\\((+)(+)=+\\)", "\\((+)(-)=-\\)"], ["<strong>négatif</strong>", "\\((-)(+)=-\\)", "\\((-)(-)=+\\)"]])}
  <p>L'explorateur montre les règles de trois façons : par des sauts, par une table de régularité qui doit continuer au-delà de zéro, et par une vérification de division. Essaie \(a=-3\), \(b=-4\) dans chaque mode.</p>`),

  widget("signRules", { initA: 3, initB: -4 }),

  section("📌 Plusieurs facteurs, la division et le zéro", String.raw`
  <p><strong>Plusieurs facteurs.</strong> Les facteurs négatifs s'annulent deux par deux. Compte-les :</p>
  <ul><li>un nombre <strong>pair</strong> de facteurs négatifs → produit positif;</li><li>un nombre <strong>impair</strong> de facteurs négatifs → produit négatif.</li></ul>
  <p>Ainsi, \((-1)(-1)(-1)=-1\), mais \((-1)(-1)(-1)(-1)=1\).</p>
  <p>La <strong>division</strong> annule la multiplication; elle suit donc les mêmes règles des signes. Tu peux toujours vérifier un quotient en remultipliant : \(-35\div7=-5\), car \(-5\times7=-35\).</p>
  <p><strong>Le zéro.</strong> \(0\div6=0\), car \(0\times6=0\). Mais \(6\div0\) n'est <strong>pas défini</strong> : aucun nombre multiplié par \(0\) ne donne \(6\).</p>`),

  section("📌 La priorité des opérations avec des entiers", String.raw`
  <p>Les expressions comportant plusieurs opérations suivent <strong>PEDMAS</strong> :</p>
  <ol>
    <li>les <strong>P</strong>arenthèses d'abord (les plus intérieures en premier);</li>
    <li>les <strong>E</strong>xposants (puissances);</li>
    <li>la <strong>D</strong>ivision et la <strong>M</strong>ultiplication, dans l'ordre, de gauche à droite;</li>
    <li>l'<strong>A</strong>ddition et la <strong>S</strong>oustraction, dans l'ordre, de gauche à droite.</li>
  </ol>
  <p><strong>Les parenthèses autour d'une base négative comptent.</strong> \((-5)^2=(-5)(-5)=25\), mais \(-5^2\) signifie \(-(5^2)=-25\) : l'exposant ne s'applique qu'au \(5\).</p>
  <p><strong>Substitution.</strong> Quand tu remplaces une variable par un nombre négatif, mets le nombre entre parenthèses : si \(x=-2\), alors \(3x^2=3(-2)^2=3(4)=12\).</p>
  ${watchOut([
    String.raw`<strong>Ne mélange pas les règles.</strong> Pour l'addition, \((-4)+(-5)=-9\). Pour la multiplication, \((-4)(-5)=20\).`,
    String.raw`<strong>La division et la multiplication sont à égalité.</strong> Effectue-les de gauche à droite : \(24\div(-4)\times2=(-6)\times2=-12\), et non \(24\div(-8)\).`,
    String.raw`<strong>Mets toujours un négatif substitué entre parenthèses.</strong> Avec \(x=-3\), \(x^2=(-3)^2=9\), et non \(-9\).`,
  ])}`),

  examples([
    ["Les règles des signes", String.raw`Évalue a) \((-5)(-8)\) et b) \((-5)(8)\).`,
      [String.raw`<b>Règles des signes.</b> \[(+)(+)=+,\quad(-)(-)=+,\quad(+)(-)=-,\quad(-)(+)=-\] Multiplie les valeurs absolues, puis détermine le signe.`,
        String.raw`<b>Valeurs absolues :</b> \(5\times8=40\).`,
        String.raw`<b>a)</b> \((-5)(-8)\) : même signe, donc positif : \(40\).`,
        String.raw`<b>b)</b> \((-5)(8)\) : signes contraires, donc négatif : \(-40\).`,
        String.raw`<b>Pourquoi \((-)(-)=+\) :</b> dans la table, chaque fois que le deuxième facteur diminue de \(1\), le produit <i>augmente</i> de \(5\). En prolongeant la régularité au-delà de \(0\), on obtient \((-5)(-1)=5\), et donc \((-5)(-8)=40\) ✓`],
      String.raw`a) \(40\); b) \(-40\)`,
      table(["\\((-5)\\times\\)", "2", "1", "0", "−1", "−2"], [["produit", "−10", "−5", "0", "5", "10"]])],
    ["Compter les facteurs négatifs", String.raw`Évalue \((-2)(3)(-1)(-4)\).`,
      [String.raw`<b>Règle.</b> Un produit est positif s'il a un nombre <b>pair</b> de facteurs négatifs et négatif s'il en a un nombre <b>impair</b>, car chaque paire de négatifs donne un positif.`,
        String.raw`<b>Compte :</b> \(-2,\ -1,\ -4\) sont négatifs — trois facteurs, un nombre impair, donc le produit est négatif.`,
        String.raw`<b>Valeurs absolues :</b> \(2\times3\times1\times4=24\).`,
        String.raw`<b>Combine :</b> \(-24\).`,
        String.raw`<b>Vérifie deux à la fois :</b> \((-2)(3)=-6\); \((-6)(-1)=6\); \(6(-4)=-24\) ✓`],
      String.raw`\((-2)(3)(-1)(-4)=-24\)`],
    ["Division et vérification", String.raw`Évalue a) \(-72\div(-9)\) et b) \(56\div(-7)\). Vérifie chaque réponse en multipliant.`,
      [String.raw`<b>Règle.</b> La division suit les mêmes règles des signes que la multiplication, car \(a\div b=c\) signifie \(c\times b=a\).`,
        String.raw`<b>a)</b> Même signe → positif. \(72\div9=8\), donc \(-72\div(-9)=8\).`,
        String.raw`<b>Vérification de a) :</b> \(8\times(-9)=-72\) ✓`,
        String.raw`<b>b)</b> Signes contraires → négatif. \(56\div7=8\), donc \(56\div(-7)=-8\).`,
        String.raw`<b>Vérification de b) :</b> \((-8)\times(-7)=56\) ✓`],
      String.raw`a) \(8\); b) \(-8\)`],
    ["La priorité des opérations", String.raw`Évalue \((-4)^2-3(-6+2)\div(-2)\).`,
      [String.raw`<b>Ordre (PEDMAS).</b> Parenthèses → Exposants → Division et Multiplication (de gauche à droite) → Addition et Soustraction (de gauche à droite).`,
        String.raw`<b>Parenthèses :</b> \(-6+2=-4\). L'expression devient \((-4)^2-3(-4)\div(-2)\).`,
        String.raw`<b>Exposant :</b> \((-4)^2=(-4)(-4)=16\) (deux négatifs → positif).`,
        String.raw`<b>Multiplie et divise, de gauche à droite :</b> \(3(-4)=-12\), puis \(-12\div(-2)=6\).`,
        String.raw`<b>Soustrais :</b> \(16-6=10\).`,
        String.raw`<b>Vérification, en considérant le \(-\) comme faisant partie du terme :</b> \(16+(-3)(-4)\div(-2)=16+12\div(-2)=16+(-6)=10\) ✓`],
      String.raw`\((-4)^2-3(-6+2)\div(-2)=10\)`],
    ["Substituer des négatifs", String.raw`Évalue \(2a^2-3ab\) lorsque \(a=-2\) et \(b=5\).`,
      [String.raw`<b>Règle.</b> Remplace chaque variable par sa valeur <b>entre parenthèses</b>, pour que le signe reste attaché; suis ensuite PEDMAS.`,
        String.raw`<b>Substitue :</b> \(2(-2)^2-3(-2)(5)\).`,
        String.raw`<b>L'exposant d'abord :</b> \((-2)^2=4\), donc le premier terme vaut \(2(4)=8\).`,
        String.raw`<b>Deuxième terme :</b> \(3(-2)(5)\) a un facteur négatif → négatif; \(3\times2\times5=30\), donc il vaut \(-30\).`,
        String.raw`<b>Soustrais :</b> \(8-(-30)=8+30=38\).`,
        String.raw`<b>Vérifie en factorisant :</b> \(2a^2-3ab=a(2a-3b)=(-2)(-4-15)=(-2)(-19)=38\) ✓`],
      String.raw`\(2a^2-3ab=38\)`],
  ]),

  practice([
    q("deux négatifs", String.raw`Évalue \((-7)(-9)\).`, num(63),
      "Deux facteurs de même signe donnent un produit positif.", [String.raw`\(7\times9=63\).`, "Même signe, donc positif."], String.raw`\(63\)`),
    q("division", String.raw`Évalue \(-84\div12\).`, num(-7),
      "Des signes contraires donnent un quotient négatif.", [String.raw`\(84\div12=7\).`, "Signes contraires, donc négatif."], String.raw`\(-7\)`),
    q("trois facteurs", String.raw`Évalue \((-3)(-2)(-5)\).`, num(-30),
      "Compte les facteurs négatifs : nombre pair ou impair?", [String.raw`Trois facteurs négatifs (impair) → négatif.`, String.raw`\(3\times2\times5=30\).`], String.raw`\(-30\)`),
    q("priorité des opérations", String.raw`Évalue \(-2+6(-3)-(-10)\div5\).`, num(-18),
      "Effectue la multiplication et la division avant l'addition et la soustraction.",
      [String.raw`\(6(-3)=-18\) et \((-10)\div5=-2\).`, String.raw`\(-2+(-18)-(-2)=-2-18+2\).`, String.raw`\(=-18\).`], String.raw`\(-18\)`),
    q("substitution", String.raw`Évalue \(3m-m^2\) lorsque \(m=-4\).`, num(-28),
      String.raw`Mets le négatif entre parenthèses : \(3(-4)-(-4)^2\).`,
      [String.raw`\(3(-4)=-12\).`, String.raw`\((-4)^2=16\).`, String.raw`\(-12-16=-28\).`], String.raw`\(-28\)`),
  ]),

  ...hard([
    ["Parenthèses, puissances et signes à la fois", String.raw`Évalue \(\left[(-4)^3-(-2)^4\right]\div\left[(-5)(-2)-(-6)\right]\).`,
      [String.raw`Évalue les puissances dans le premier crochet : \((-4)^3=-64\) et \((-2)^4=16\).`,
        String.raw`Premier crochet : \(-64-16=-80\).`,
        String.raw`Deuxième crochet : \((-5)(-2)=10\), et \(10-(-6)=16\).`,
        String.raw`Divise : \(-80\div16=-5\).`],
      String.raw`la valeur est \(-5\)`],
    ["Trois variables, toutes avec des signes", String.raw`Évalue \(x^2y-3yz^2-(x-z)^3\div y\) lorsque \(x=-3\), \(y=2\) et \(z=-1\).`,
      [String.raw`\(x^2y=(-3)^2(2)=18\).`,
        String.raw`\(3yz^2=3(2)(-1)^2=6\).`,
        String.raw`\(x-z=-3-(-1)=-2\), donc \((x-z)^3=-8\), et \(-8\div2=-4\).`,
        String.raw`Combine, en faisant attention aux soustractions : \(18-6-(-4)=16\).`],
      String.raw`la valeur est \(16\)`],
    ["Déterminer le signe sans calculer", String.raw`\(-2^6\times(-3)^5\div(-1)^9\) est-il positif ou négatif? Explique.`,
      [String.raw`\(-2^6\) signifie \(-(2^6)\), donc il est négatif.`,
        String.raw`\((-3)^5\) a un exposant impair, donc il est négatif.`,
        String.raw`\((-1)^9\) a un exposant impair, donc il est négatif.`,
        String.raw`Trois facteurs négatifs donnent un résultat négatif.`],
      "le résultat est négatif"],
    ["Remonter à partir d'un pointage", String.raw`Un concours accorde \(+4\) pour une bonne réponse et \(-2\) pour une mauvaise. Dana a répondu aux \(25\) questions et a obtenu \(46\). Combien de bonnes réponses Dana a-t-elle eues?`,
      [String.raw`Un pointage parfait serait \(25\times4=100\).`,
        String.raw`Changer une réponse de bonne à mauvaise modifie le pointage de \(-2-4=-6\).`,
        String.raw`Le pointage est \(100-46=54\) sous le pointage parfait, donc il y a \(54\div6=9\) mauvaises réponses.`,
        String.raw`Bonnes réponses : \(25-9=16\). Vérification : \(16(4)+9(-2)=64-18=46\).`],
      String.raw`Dana a eu \(16\) bonnes réponses`],
    ["Lire un taux sur un graphique", String.raw`Le graphique montre une température qui baisse à un taux constant. Quand atteindra-t-elle \(-22\,^\circ\)C?`,
      [String.raw`Lis deux points : \((0,8)\) et \((2,2)\). La température baisse de \(6\) degrés en \(2\) heures, soit un taux de \(-3\) degrés par heure.`,
        String.raw`La variation totale nécessaire est \(-22-8=-30\).`,
        String.raw`Divise : \(-30\div(-3)=10\).`],
      String.raw`la température atteint \(-22\,^\circ\)C après \(10\) heures`,
      fig(graph({ series: [{ pts: [[0, 8], [2, 2], [4, -4]] }], xmin: 0, xmax: 11, ymin: -24, ymax: 10, xstep: 1, ystep: 4, xlabel: "heures", ylabel: "°C" }), "Une température qui baisse à un taux constant.")],
  ], [
    q("priorité des opérations", String.raw`Évalue \(\left[(-3)^4-(-5)^2\right]\div\left[(-2)(7)\right]\).`, num(-4),
      "Calcule chaque crochet séparément. Repère les puissances qui sont positives.",
      [String.raw`\((-3)^4=81\) et \((-5)^2=25\), donc le premier crochet vaut \(56\).`, String.raw`Le deuxième crochet vaut \(-14\).`, String.raw`\(56\div(-14)=-4\).`], String.raw`\(-4\)`),
    q("substitution", String.raw`Évalue \(x^3y-2xy^2\) lorsque \(x=-2\) et \(y=-3\).`, num(60),
      "Substitue en mettant chaque nombre négatif entre parenthèses.",
      [String.raw`\(x^3y=(-8)(-3)=24\).`, String.raw`\(2xy^2=2(-2)(9)=-36\).`, String.raw`\(24-(-36)=60\).`], String.raw`\(60\)`),
    q("valeur manquante", String.raw`Les lectures \(-14,\ 7,\ -3,\ -20,\ 5\) et une autre ont une moyenne de \(-6\). Quelle est la lecture manquante?`, num(-11),
      "Multiplie la moyenne par 6 pour obtenir le total des six lectures.",
      [String.raw`Total des six lectures : \(6(-6)=-36\).`, String.raw`Somme des cinq lectures connues : \(-25\).`, String.raw`Lecture manquante : \(-36-(-25)=-11\).`], String.raw`\(-11\)`),
    q("concours", String.raw`Un concours accorde \(+3\) pour une bonne réponse et \(-2\) pour une mauvaise. Ravi a répondu aux \(20\) questions et a obtenu \(20\). Combien de bonnes réponses Ravi a-t-il eues?`, num(12),
      "Chaque réponse qui passe de bonne à mauvaise fait baisser le pointage de 5.",
      [String.raw`Un pointage parfait est \(60\), soit \(40\) de plus que celui de Ravi.`, String.raw`\(40\div5=8\) mauvaises réponses.`, String.raw`\(20-8=12\) bonnes. Vérification : \(36-16=20\).`], String.raw`\(12\)`),
    q("produit et somme", String.raw`Deux entiers ont un produit de \(-54\) et une somme de \(-3\). Quel est le plus petit entier?`, num(-9),
      "Le produit est négatif, donc les signes sont contraires. La somme est négative, donc le nombre négatif a la plus grande valeur absolue.",
      [String.raw`Les paires de facteurs de \(54\) dont la différence est \(3\) : \(6\) et \(9\).`, String.raw`La plus grande valeur absolue est négative : \(6+(-9)=-3\).`], String.raw`\(-9\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi un négatif fois un négatif donne-t-il un positif?", String.raw`Un multiplicateur négatif signifie « l'opposé de ». \((-3)(-4)\) est l'opposé de \(3(-4)=-12\), soit \(12\). La table de régularité montre la même chose : les produits continuent d'augmenter quand on dépasse zéro.`],
      ["Les règles des signes de la multiplication fonctionnent-elles aussi pour la division?", String.raw`Oui. La division annule la multiplication; un même signe donne donc un quotient positif, et des signes contraires donnent un quotient négatif.`],
      [String.raw`Quelle est la différence entre \(-3^2\) et \((-3)^2\)?`, String.raw`\((-3)^2=(-3)(-3)=9\). Dans \(-3^2\), l'exposant ne s'applique qu'à \(3\), donc il vaut \(-(3^2)=-9\).`],
      [String.raw`Pourquoi ne puis-je pas diviser par \(0\)?`, String.raw`Diviser revient à demander « quel nombre multiplié par le diviseur donne le dividende? ». Aucun nombre multiplié par \(0\) ne donne un nombre non nul; il n'y a donc pas de réponse — c'est non défini.`],
      ["Comment trouver rapidement le signe d'un long produit?", "Compte seulement les facteurs négatifs. Nombre pair → positif; nombre impair → négatif. Multiplie ensuite les grandeurs."],
    ],
    summary: [
      "Même signe → positif; signes contraires → négatif (pour × et ÷).",
      "Un nombre pair de facteurs négatifs donne un produit positif; un nombre impair donne un produit négatif.",
      String.raw`La division par \(0\) n'est pas définie; \(0\) divisé par n'importe quel nombre non nul donne \(0\).`,
      "PEDMAS : parenthèses, exposants, × et ÷ de gauche à droite, + et − de gauche à droite. Mets entre parenthèses chaque négatif substitué.",
    ],
    next: "La leçon 1.4 applique ces idées aux fractions : fractions équivalentes, comparaison, addition et soustraction.",
  }),
];
