// MTH1W-FR 1.2 — Additionner et soustraire des nombres entiers (miroir de ../mth1w-ch1/v2/l1_2.mjs)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, numberLine, chips, q, num, choice, hard, fig } from "./lib.mjs";
import { barChart } from "./bank/svg.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "1.2 Additionner et soustraire des nombres entiers";
export const ID = lessonId(1, 2);

export const blocks = () => [
  intro({
    icon: "➕",
    title: "Additionner et soustraire des nombres entiers",
    overview: String.raw`Les <strong>nombres entiers</strong> sont les entiers non négatifs et leurs opposés : \(\dots,-3,-2,-1,0,1,2,3,\dots\). Ils décrivent les températures sous zéro, les étages sous le niveau du sol, les comptes bancaires à découvert et les pointages au golf sous la normale. Dans cette leçon, tu vas additionner et soustraire des entiers à l'aide de deux modèles — la <strong>droite numérique</strong> et les <strong>paires nulles</strong> — puis à l'aide de deux règles courtes qui fonctionnent à tout coup. L'algèbre, plus loin dans le cours, dépend de la bonne gestion de ces signes; prends donc ton temps ici.`,
    goals: [
      "trouver l'opposé et la valeur absolue d'un entier;",
      "additionner des entiers de même signe et de signes contraires, à l'aide d'un modèle et à l'aide d'une règle;",
      String.raw`soustraire n'importe quel entier en additionnant son opposé : \(a-b=a+(-b)\);`,
      "évaluer des expressions comportant plusieurs termes entiers;",
      "résoudre des problèmes de variation et de distance (température, altitude, argent).",
    ],
    curriculum: "B3.1 (nombres entiers pour représenter une position, une direction, une quantité et une variation)",
    prior: [
      [String.raw`Lequel est le plus grand, \(-8\) ou \(-3\)?`, String.raw`\(-3\). Sur une droite numérique, il est à droite de \(-8\).`],
      [String.raw`Quel est l'opposé de \(12\)?`, String.raw`\(-12\). Deux opposés sont à la même distance de \(0\), de part et d'autre.`],
      ["Que signifie une température de −6 °C?", "6 degrés sous zéro."],
    ],
    words: [
      ["Nombre entier", "un entier non négatif ou son opposé", "\\(-4,\\ 0,\\ 17\\)"],
      ["Opposés", "deux nombres à la même distance de 0, de part et d'autre; leur somme est 0", "\\(5\\) et \\(-5\\)"],
      ["Valeur absolue \\(|n|\\)", "la distance par rapport à 0 — jamais négative", "\\(|-9|=9\\)"],
      ["Paire nulle", "une unité positive et une unité négative; ensemble, elles valent 0", "\\((+1)+(-1)=0\\)"],
      ["Somme / différence", "le résultat d'une addition / d'une soustraction", "la somme de \\(-2\\) et de \\(5\\) est \\(3\\)"],
    ],
  }),

  section("📌 Les opposés et la valeur absolue", String.raw`
  <p>Deux entiers situés à la même distance de \(0\), de part et d'autre, sont des <strong>opposés</strong>, comme \(6\) et \(-6\). La <strong>valeur absolue</strong> \(|n|\) est la distance entre un nombre et \(0\); elle n'est donc jamais négative : \(|-6|=6\) et \(|6|=6\). La valeur absolue t'indique la <em>grandeur</em> d'un nombre, sans tenir compte de sa direction.</p>
  ${numberLine({ min: -7, max: 7, dots: [{ at: -6, label: "−6", color: "red" }, { at: 6, label: "6", color: "blue" }], caption: "−6 et 6 sont des opposés : tous deux sont à 6 unités de 0.", id: "nl21" })}`),

  section("📌 Additionner des entiers", String.raw`
  <p>Sur une droite numérique, pars du premier nombre. Additionner un entier <strong>positif</strong> te déplace vers la <strong>droite</strong>; additionner un entier <strong>négatif</strong> te déplace vers la <strong>gauche</strong>.</p>
  <p>Avec des jetons, un jeton jaune \(+\) et un jeton rouge \(-\) forment une <strong>paire nulle</strong> et s'annulent. Ce qui reste après l'annulation est la réponse.</p>
  ${chips({ pos: 3, neg: 7, caption: "3 + (−7) : trois paires nulles s'annulent et il reste 4 jetons négatifs; la somme est donc −4." })}
  ${keyIdea(String.raw`<ul style="margin:4px 0 0;"><li><strong>Même signe :</strong> additionne les valeurs absolues et garde le signe. \((-6)+(-9)=-15\).</li><li><strong>Signes contraires :</strong> soustrais la plus petite valeur absolue de la plus grande; la réponse prend le signe du nombre le plus éloigné de \(0\). \(11+(-4)=7\) et \((-11)+4=-7\).</li></ul>`)}
  <p>Utilise l'explorateur pour tester les règles. Choisis deux entiers, sélectionne <em>additionner</em> et passe de la droite numérique aux paires nulles — les deux modèles donnent toujours la même réponse.</p>`),

  widget("integerOps", { initA: -6, initB: 9, initOp: "+" }),

  section("📌 Soustraire des entiers : additionner l'opposé", String.raw`
  <p>Une soustraction peut toujours être réécrite comme une addition : <strong>soustraire un nombre revient à additionner son opposé.</strong></p>
  <p style="text-align:center;font-size:1.1em;">\(a-b=a+(-b)\)</p>
  ${table(["Soustraction", "Additionner l'opposé", "Réponse"], [
    ["\\(9-13\\)", "\\(9+(-13)\\)", "\\(-4\\)"],
    ["\\(-2-6\\)", "\\(-2+(-6)\\)", "\\(-8\\)"],
    ["\\(5-(-7)\\)", "\\(5+7\\)", "\\(12\\)"],
    ["\\(-10-(-3)\\)", "\\(-10+3\\)", "\\(-7\\)"],
  ])}
  <p><strong>Pourquoi soustraire un négatif revient-il à additionner?</strong> Pense à un nombre négatif comme à une dette. Enlever une dette de 7 dollars te laisse 7 dollars plus riche — exactement comme additionner 7. Dans l'explorateur, choisis <em>soustraire</em> avec un deuxième nombre négatif et regarde la flèche se tourner vers la droite.</p>
  <p><strong>La soustraction comme distance.</strong> La distance entre une valeur basse \(b\) et une valeur haute \(a\) est \(a-b\). De \(-4\) jusqu'à \(9\), il y a \(9-(-4)=13\) unités — compte-les sur une droite numérique pour vérifier.</p>
  <p><strong>Plusieurs termes.</strong> Réécris chaque soustraction comme l'addition de l'opposé. Additionne ensuite de gauche à droite, ou additionne séparément tous les positifs et tous les négatifs, puis combine.</p>
  ${watchOut([
    String.raw`<strong>Le signe moins a deux rôles.</strong> Dans \(4-9\), il veut dire <em>soustraire</em>; dans \(-9\), il veut dire <em>négatif</em>. Écrire \(4-9\) sous la forme \(4+(-9)\) sépare les deux rôles.`,
    String.raw`<strong>« Deux négatifs donnent un positif » n'est pas une règle d'addition.</strong> \((-3)+(-4)=-7\), et non \(7\). Cela s'applique à la <em>soustraction</em> d'un négatif et à la multiplication.`,
    String.raw`<strong>L'ordre compte dans une soustraction.</strong> \(3-8=-5\), mais \(8-3=5\). Inverser les nombres donne la réponse opposée.`,
  ])}`),

  examples([
    ["Signes contraires, avec des paires nulles", String.raw`Évalue \(6+(-10)\).`,
      [String.raw`<b>Règle (signes contraires).</b> Soustrais les valeurs absolues; la réponse prend le signe du nombre qui a la plus grande valeur absolue.`,
        String.raw`<b>Valeurs absolues :</b> \(|6|=6\) et \(|-10|=10\). Soustrais : \(10-6=4\).`,
        String.raw`<b>Signe :</b> \(|-10|>|6|\), donc la réponse est négative : \(-4\).`,
        String.raw`<b>Pourquoi ça marche (jetons) :</b> un \(+1\) et un \(-1\) forment une paire nulle. Six paires nulles s'annulent et il reste quatre jetons négatifs.`,
        String.raw`<b>Vérification :</b> additionner \(+10\) annule l'ajout de \(-10\) : \(-4+10=6\) ✓`],
      String.raw`\(6+(-10)=-4\)`,
      chips({ pos: 6, neg: 10, caption: "6 paires nulles s'annulent; il reste 4 jetons négatifs." })],
    ["Même signe, sur une droite numérique", String.raw`Évalue \((-7)+(-4)\).`,
      [String.raw`<b>Règle (même signe).</b> Additionne les valeurs absolues et garde le signe commun.`,
        String.raw`<b>Valeurs absolues :</b> \(7+4=11\). Les deux nombres sont négatifs, donc la réponse est \(-11\).`,
        String.raw`<b>Droite numérique :</b> pars de \(-7\). Additionner un négatif déplace vers la <i>gauche</i>; déplace-toi donc de \(4\) unités vers la gauche : \(-7\to-11\).`,
        String.raw`<b>Vérification :</b> \(-11-(-4)=-11+4=-7\), on revient au départ ✓`],
      String.raw`\((-7)+(-4)=-11\)`,
      numberLine({ min: -12, max: 1, arrows: [{ from: 0, to: -7, label: "−7", color: "gray", lane: 0 }, { from: -7, to: -11, label: "+(−4)", color: "red", lane: 1 }], dots: [{ at: -11, label: "−11", color: "green" }], caption: "Pars de −7 et déplace-toi de 4 vers la gauche.", id: "nl22" })],
    ["Soustraire un négatif", String.raw`Évalue \(4-(-6)\).`,
      [String.raw`<b>Règle.</b> Soustraire un nombre revient à additionner son opposé : \[a-b=a+(-b)\]`,
        String.raw`<b>Applique-la :</b> l'opposé de \(-6\) est \(+6\), donc \(4-(-6)=4+6\).`,
        String.raw`<b>Additionne :</b> \(4+6=10\).`,
        String.raw`<b>Signification :</b> \(4-(-6)\) est la distance de \(-6\) jusqu'à \(4\). Sur la droite numérique, il faut \(6\) unités pour atteindre \(0\), puis \(4\) de plus : \(6+4=10\).`,
        String.raw`<b>Vérification :</b> \(10+(-6)=4\) ✓ (ajouter ce qu'on a soustrait ramène au départ).`],
      String.raw`\(4-(-6)=10\)`,
      numberLine({ min: -7, max: 11, arrows: [{ from: -6, to: 4, label: "distance 10", color: "blue", lane: 0 }], dots: [{ at: -6, label: "−6", color: "gray" }, { at: 4, label: "4", color: "green" }], caption: "4 − (−6) est la distance de −6 jusqu'à 4 : 10 unités.", id: "nl23" })],
    ["Plusieurs termes", String.raw`Évalue \(-5-8+12-(-3)\).`,
      [String.raw`<b>Règle.</b> Transforme chaque soustraction en addition de l'opposé; les termes peuvent alors être additionnés dans n'importe quel ordre.`,
        String.raw`<b>Réécris :</b> \(-5-8+12-(-3)=-5+(-8)+12+(+3)\).`,
        String.raw`<b>Regroupe les négatifs :</b> \(-5+(-8)=-13\) (même signe : additionne \(5+8\), garde \(-\)).`,
        String.raw`<b>Regroupe les positifs :</b> \(12+3=15\).`,
        String.raw`<b>Combine :</b> \(-13+15\) : signes contraires, \(15-13=2\), et \(15\) a la plus grande valeur absolue, donc \(+2\).`,
        String.raw`<b>Vérifie de gauche à droite :</b> \(-5-8=-13\); \(-13+12=-1\); \(-1-(-3)=-1+3=2\) ✓`],
      String.raw`\(-5-8+12-(-3)=2\)`,
      table(["Étape", "Total cumulé"], [["départ", "\\(-5\\)"], ["\\(-8\\)", "\\(-13\\)"], ["\\(+12\\)", "\\(-1\\)"], ["\\(-(-3)=+3\\)", "\\(2\\)"]])],
    ["Variation de température", String.raw`À 6 h, il fait \(-14\,^\circ\text{C}\). À midi, la température a monté de \(9\) degrés, et à minuit, elle a baissé de \(17\) degrés par rapport à celle de midi. a) Quelle est la température à minuit? b) De combien fait-il plus froid à minuit qu'à 6 h?`,
      [String.raw`<b>Modèle.</b> Une hausse est \(+\), une baisse est \(-\). « De combien plus froid » est une différence : valeur haute \(-\) valeur basse.`,
        String.raw`<b>Midi :</b> \(-14+9\). Signes contraires : \(14-9=5\), signe de \(-14\) : \(-5\,^\circ\text{C}\).`,
        String.raw`<b>Minuit :</b> \(-5-17=-5+(-17)=-22\,^\circ\text{C}\) (même signe : \(5+17=22\)).`,
        String.raw`<b>Différence :</b> la température de 6 h est la plus haute, donc \(-14-(-22)=-14+22=8\) degrés.`,
        String.raw`<b>Vérification :</b> la variation totale est \(+9-17=-8\), et \(-14+(-8)=-22\) ✓`],
      String.raw`a) \(-22\,^\circ\text{C}\); b) il fait \(8\) degrés plus froid à minuit qu'à 6 h`,
      numberLine({ min: -24, max: 0, dots: [{ at: -22, label: "minuit", color: "red" }, { at: -14, label: "6 h", color: "blue" }, { at: -5, label: "midi", color: "green" }], caption: "Les trois températures sur un thermomètre vertical, dessiné à l'horizontale.", id: "nl24", unit: 22 })],
  ]),

  practice([
    q("signes contraires", String.raw`Évalue \(-9+4\).`, num(-5),
      String.raw`Signes contraires : soustrais les grandeurs, puis prends le signe du nombre le plus éloigné de \(0\).`,
      [String.raw`\(9-4=5\).`, String.raw`\(-9\) est plus éloigné de \(0\), donc la réponse est négative.`], String.raw`\(-5\)`),
    q("soustraire jusqu'à un négatif", String.raw`Évalue \(7-12\).`, num(-5),
      String.raw`Réécris sous la forme \(7+(-12)\).`,
      [String.raw`\(7-12=7+(-12)\).`, String.raw`\(12-7=5\), et \(-12\) a la plus grande valeur absolue, donc \(-5\).`], String.raw`\(-5\)`),
    q("soustraire un négatif", String.raw`Évalue \(-6-(-10)\).`, num(4),
      String.raw`Soustraire \(-10\) revient à additionner \(10\).`,
      [String.raw`\(-6-(-10)=-6+10\).`, String.raw`\(10-6=4\), positif, car \(10\) a la plus grande valeur absolue.`], String.raw`\(4\)`),
    q("même signe", String.raw`Évalue \(-15+(-8)\).`, num(-23),
      "Les deux sont négatifs : additionne les grandeurs et garde le signe.",
      [String.raw`\(15+8=23\).`, "Garde le signe négatif."], String.raw`\(-23\)`),
    q("solde bancaire", String.raw`Un compte bancaire est à découvert : son solde est de \(-45\) dollars. On fait un dépôt de \(120\) dollars, puis un retrait de \(90\) dollars. Quel est le nouveau solde (en dollars)?`, num(-15),
      "Un dépôt s'additionne; un retrait se soustrait. Procède une étape à la fois.",
      [String.raw`Après le dépôt : \(-45+120=75\).`, String.raw`Après le retrait : \(75-90=-15\).`], String.raw`\(-15\) dollars (découvert de \(15\) dollars)`),
  ]),

  ...hard([
    ["Des valeurs absolues dans une longue expression", String.raw`Évalue \(-|-8-(-3)|-\left(-|4-11|+5\right)\).`,
      [String.raw`Calcule à l'intérieur des premières barres : \(-8-(-3)=-8+3=-5\), et \(|-5|=5\). Avec le signe moins devant, ce terme vaut \(-5\).`,
        String.raw`Calcule à l'intérieur des deuxièmes barres : \(4-11=-7\), et \(|-7|=7\).`,
        String.raw`Évalue la parenthèse : \(-7+5=-2\).`,
        String.raw`Rassemble le tout : \(-5-(-2)=-5+2=-3\).`],
      String.raw`la valeur est \(-3\)`],
    ["Additionner une longue suite d'entiers", String.raw`Trouve la somme de tous les entiers de \(-40\) à \(37\).`,
      [String.raw`Chaque entier de \(-37\) à \(37\) a son opposé dans la liste, et chaque paire a une somme de \(0\).`,
        String.raw`Seuls \(-40\), \(-39\) et \(-38\) n'ont pas de partenaire.`,
        String.raw`Additionne-les : \(-40+(-39)+(-38)=-117\).`],
      String.raw`la somme est \(-117\)`],
    ["Deux entiers inconnus", String.raw`Deux entiers ont une somme de \(-8\). Le plus grand moins le plus petit donne \(22\). Trouve ces entiers.`,
      [String.raw`Plus grand \(+\) plus petit \(=-8\) et plus grand \(-\) plus petit \(=22\).`,
        String.raw`Additionne les deux énoncés. Le plus petit nombre s'annule, donc \(2\times\text{plus grand}=14\).`,
        String.raw`Le plus grand entier est \(7\).`,
        String.raw`Le plus petit entier est \(-8-7=-15\).`,
        String.raw`Vérification : \(7+(-15)=-8\) et \(7-(-15)=22\).`],
      String.raw`les entiers sont \(7\) et \(-15\)`],
    ["Le point le plus bas d'un solde bancaire", String.raw`Un solde commence à \(-25\) dollars et varie comme le montre le diagramme. Trouve le solde le plus bas et la différence entre le solde le plus bas et le solde final.`,
      [String.raw`Tiens un solde cumulé : \(-25+60=35\).`,
        String.raw`\(35-110=-75\).`,
        String.raw`\(-75+45=-30\), puis \(-30-30=-60\), puis \(-60+80=20\).`,
        String.raw`Le solde le plus bas est \(-75\) dollars, et le solde final est \(20\) dollars.`,
        String.raw`La différence est \(20-(-75)=95\).`],
      String.raw`le solde le plus bas est \(-75\) dollars, soit \(95\) dollars sous le solde final`,
      fig(barChart([["1", 60], ["2", -110], ["3", 45], ["4", -30], ["5", 80]], { ylabel: "variation (dollars)", min: -120, max: 100, step: 20 }), "La variation du solde pour chacune des cinq transactions.")],
  ], [
    q("valeurs absolues", String.raw`Évalue \(-|6-15|-\left(-|-4|\right)+(-7)\).`, num(-12),
      "Calcule d'abord ce qui est entre les barres, puis occupe-toi des signes à l'extérieur.",
      [String.raw`\(|6-15|=|-9|=9\), donc le premier terme est \(-9\).`, String.raw`\(-|-4|=-4\), et le soustraire revient à additionner \(4\).`, String.raw`\(-9+4-7=-12\).`], String.raw`\(-12\)`),
    q("une longue somme", String.raw`Trouve la somme de tous les entiers de \(-25\) à \(21\).`, num(-94),
      "Annule les paires d'opposés. Quels nombres n'ont pas de partenaire?",
      [String.raw`De \(-21\) à \(21\), tout s'annule pour donner \(0\).`, String.raw`Il reste \(-25,-24,-23,-22\).`, String.raw`Leur somme est \(-94\).`], String.raw`\(-94\)`),
    q("deux entiers", String.raw`Deux entiers ont une somme de \(-14\) et une différence (le plus grand moins le plus petit) de \(26\). Quel est le plus petit entier?`, num(-20),
      "Additionne les deux énoncés pour trouver d'abord le plus grand entier.",
      [String.raw`\(2\times\text{plus grand}=-14+26=12\), donc le plus grand entier est \(6\).`, String.raw`Le plus petit entier est \(-14-6=-20\).`], String.raw`\(-20\)`),
    q("substitution", String.raw`Si \(a=-9\) et \(b=14\), évalue \(|a|-|b|-|a-b|\).`, num(-28),
      "Trouve chaque valeur absolue séparément.",
      [String.raw`\(|a|=9\) et \(|b|=14\).`, String.raw`\(a-b=-9-14=-23\), donc \(|a-b|=23\).`, String.raw`\(9-14-23=-28\).`], String.raw`\(-28\)`),
    q("température", String.raw`À 6 h, il fait \(-14\,^\circ\)C. La température monte de \(5\) degrés par heure pendant \(3\) heures, puis baisse de \(2\) degrés par heure pendant \(4\) heures. De combien de degrés doit-elle ensuite monter pour atteindre \(3\,^\circ\)C?`, num(10),
      "Trouve la température après la hausse et la baisse, puis soustrais-la de 3.",
      [String.raw`Après la hausse : \(-14+15=1\).`, String.raw`Après la baisse : \(1-8=-7\).`, String.raw`\(3-(-7)=10\).`], String.raw`\(10\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi soustraire un nombre négatif donne-t-il un résultat plus grand?", String.raw`Enlever une dette te laisse plus riche. En symboles, \(a-(-b)=a+b\) : soustraire un nombre revient à additionner son opposé.`],
      ["Comment connaître le signe quand j'additionne des entiers de signes contraires?", String.raw`Regarde quel nombre est le plus éloigné de \(0\). La réponse a le signe de ce nombre, et sa grandeur est la différence des valeurs absolues.`],
      [String.raw`\(a-b\) est-il égal à \(b-a\)?`, String.raw`Non — ce sont des opposés. \(10-4=6\), mais \(4-10=-6\).`],
      ["Quelle est la façon la plus rapide d'additionner une longue liste d'entiers?", "Réécris les soustractions en additions, additionne tous les positifs, additionne tous les négatifs, puis combine les deux totaux."],
      ["Comment vérifier une réponse rapidement?", "Estime d'abord le signe : si les négatifs l'emportent sur les positifs, la réponse doit être négative. Esquisse ensuite les déplacements sur une droite numérique."],
    ],
    summary: [
      String.raw`La somme de deux opposés est \(0\); \(|n|\) est la distance par rapport à \(0\).`,
      "Même signe : additionne les grandeurs, garde le signe. Signes contraires : soustrais les grandeurs, prends le signe de la plus grande grandeur.",
      String.raw`\(a-b=a+(-b)\) : pour soustraire, additionne l'opposé.`,
      "La distance entre deux valeurs est la valeur haute moins la valeur basse.",
    ],
    next: "La leçon 1.3 porte sur la multiplication et la division d'entiers et explique pourquoi un négatif multiplié par un négatif donne un positif.",
  }),
];
