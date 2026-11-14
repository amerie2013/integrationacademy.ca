// MTH1W-FR 1.5 — Fractions : multiplication, division et inverses (miroir de ../mth1w-ch1/v2/l1_5.mjs)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, areaModel, tape, q, num, frac, hard, fig } from "./lib.mjs";
import { tape as tapeSvg, rectangle } from "./bank/svg.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "1.5 Fractions : multiplication, division et inverses";
export const ID = lessonId(1, 5);

export const blocks = () => [
  intro({
    icon: "🧮",
    title: "Fractions : multiplication, division et inverses",
    overview: String.raw`Multiplier des fractions répond à des questions comme « que vaut \(\tfrac23\) de \(\tfrac34\) de tasse? », et diviser répond à « combien de verres de \(\tfrac38\) L remplissent un pichet de \(2\tfrac14\) L? ». Étonnamment, ces opérations sont <em>plus faciles</em> que l'addition : aucun dénominateur commun n'est nécessaire. La grande nouveauté est l'<strong>inverse</strong> d'un nombre — le nombre par lequel on multiplie pour obtenir \(1\) — qui transforme toute division en multiplication.`,
    goals: [
      "multiplier des fractions et des nombres fractionnaires, en simplifiant avant de multiplier;",
      "utiliser un modèle d'aire pour expliquer pourquoi on multiplie les numérateurs et les dénominateurs;",
      String.raw`trouver l'inverse d'une fraction, d'un entier, d'un nombre fractionnaire ou d'un décimal, et expliquer pourquoi \(0\) n'en a pas;`,
      "diviser des fractions en multipliant par l'inverse, et expliquer la division comme « combien de fois ça entre »;",
      "appliquer les règles des signes aux produits et aux quotients de fractions négatives, et résoudre des problèmes;",
      "calculer avec n'importe quels nombres rationnels — décimaux négatifs, fractions et nombres fractionnaires ensemble — en choisissant la forme la plus simple et en estimant d'abord.",
    ],
    curriculum: "B3.3 (signes), B3.4 (opérations sur les fractions et les nombres fractionnaires, formules et mesure)",
    prior: [
      [String.raw`Écris \(3\tfrac{1}{2}\) sous forme de fraction impropre.`, String.raw`\(\tfrac{7}{2}\), car \(3\times2+1=7\).`],
      [String.raw`Simplifie \(\tfrac{15}{40}\).`, String.raw`\(\tfrac{3}{8}\) (divise par \(5\)).`],
      [String.raw`Quel est le signe de \((-6)\div(-2)\)?`, "Positif : même signe."],
    ],
    words: [
      ["Produit de fractions", "multiplier les numérateurs, multiplier les dénominateurs", "\\(\\tfrac23\\times\\tfrac45=\\tfrac{8}{15}\\)"],
      ["« de »", "dans les problèmes de fractions, « de » signifie multiplier", "\\(\\tfrac12\\) de \\(10\\) donne \\(5\\)"],
      ["Inverse", "le nombre dont le produit avec le nombre de départ est 1 (on renverse la fraction)", "l'inverse de \\(\\tfrac25\\) est \\(\\tfrac52\\)"],
      ["Simplification croisée", "diviser un numérateur et un autre dénominateur par un facteur commun avant de multiplier", "\\(\\tfrac{4}{9}\\times\\tfrac{3}{8}\\to\\tfrac{1}{3}\\times\\tfrac{1}{2}\\)"],
      ["Fraction complexe", "une fraction dont le numérateur ou le dénominateur contient une fraction", "\\(\\dfrac{\\ \\tfrac12\\ }{\\tfrac34}\\)"],
    ],
  }),

  section("📌 Multiplier des fractions", String.raw`
  <p>\(\tfrac{2}{3}\times\tfrac{3}{4}\) signifie « \(\tfrac23\) de \(\tfrac34\) ». Ombre \(\tfrac23\) d'un carré dans un sens et \(\tfrac34\) dans l'autre sens. La partie commune compte \(2\times3=6\) petits rectangles sur \(3\times4=12\) :</p>
  ${areaModel({ a: 2, b: 3, c: 3, d: 4, caption: "Colonnes bleues : 2/3. Rangées jaunes : 3/4. Partie commune verte : 6 sur 12 = 1/2." })}
  ${keyIdea(String.raw`\(\dfrac{a}{b}\times\dfrac{c}{d}=\dfrac{a\times c}{b\times d}\). Multiplie les numérateurs, multiplie les dénominateurs, puis simplifie. <strong>Les nombres fractionnaires doivent d'abord être convertis en fractions impropres.</strong>`)}
  <p><strong>Simplifie d'abord.</strong> Avant de multiplier, divise n'importe quel numérateur et n'importe quel dénominateur par un facteur commun. On obtient la même réponse avec de plus petits nombres : \(\tfrac{10}{21}\times\tfrac{7}{15}=\tfrac{2}{3}\times\tfrac{1}{3}=\tfrac{2}{9}\) (divise \(10\) et \(15\) par \(5\); \(7\) et \(21\) par \(7\)).</p>
  <p>Utilise l'explorateur pour construire n'importe quel produit. Remarque que multiplier par une fraction inférieure à \(1\) donne une réponse <em>plus petite</em> que le nombre de départ.</p>`),

  widget("fractionMulDiv", { init: [3, 4, 1, 3] }),

  section("📌 Les inverses", String.raw`
  <p>Deux nombres sont <strong>inverses</strong> l'un de l'autre si leur produit est \(1\). Pour une fraction, renverse-la : \(\tfrac{3}{5}\times\tfrac{5}{3}=1\).</p>
  ${table(["Nombre", "Écrit sous forme de fraction", "Inverse", "Vérification"], [
    ["\\(\\tfrac{3}{5}\\)", "\\(\\tfrac{3}{5}\\)", "\\(\\tfrac{5}{3}\\)", "\\(\\tfrac35\\times\\tfrac53=1\\)"],
    ["\\(-6\\)", "\\(\\tfrac{-6}{1}\\)", "\\(-\\tfrac{1}{6}\\)", "\\((-6)\\left(-\\tfrac16\\right)=1\\)"],
    ["\\(1\\tfrac{1}{2}\\)", "\\(\\tfrac{3}{2}\\)", "\\(\\tfrac{2}{3}\\)", "\\(\\tfrac32\\times\\tfrac23=1\\)"],
    ["\\(0.4\\)", "\\(\\tfrac{2}{5}\\)", "\\(\\tfrac{5}{2}=2.5\\)", "\\(0.4\\times2.5=1\\)"],
    ["\\(0\\)", "—", "aucun", "\\(0\\times\\text{n'importe quoi}=0\\), jamais \\(1\\)"],
  ])}
  <p>L'inverse garde le <strong>même signe</strong> : l'inverse d'un nombre négatif est négatif, car le produit doit être le nombre positif \(1\).</p>`),

  section("📌 Diviser des fractions", String.raw`
  <p>\(2\div\tfrac{1}{3}\) demande « combien de tiers entrent dans \(2\)? ». Chaque unité contient \(3\) tiers, donc \(2\) unités en contiennent \(6\) : \(2\div\tfrac13=2\times3=6\). Diviser par \(\tfrac13\) revient à multiplier par son inverse, \(3\).</p>
  ${tape([{ n: 3, label: "1 unité = 3 tiers", fill: "#dbeafe", stroke: "#1e40af" }, { n: 3, label: "1 unité = 3 tiers", fill: "#dcfce7", stroke: "#15803d" }], "2 ÷ 1/3 = 6 : six tiers entrent dans 2.")}
  ${keyIdea(String.raw`\(\dfrac{a}{b}\div\dfrac{c}{d}=\dfrac{a}{b}\times\dfrac{d}{c}\). <strong>Garde</strong> la première fraction, <strong>change</strong> ÷ en ×, <strong>renverse</strong> le diviseur. Multiplie ensuite et simplifie. Les règles des signes sont les mêmes que pour les entiers.`)}
  <p>Dans l'explorateur, passe à <em>Diviser</em> pour voir les groupes du diviseur se compter le long de la première fraction.</p>
  ${watchOut([
    String.raw`<strong>Renverse le diviseur, pas la première fraction.</strong> \(\tfrac{3}{4}\div\tfrac{1}{2}=\tfrac34\times\tfrac21=\tfrac32\).`,
    String.raw`<strong>Convertis les nombres fractionnaires avant de renverser.</strong> L'inverse de \(2\tfrac13=\tfrac73\) est \(\tfrac37\), et non \(2\tfrac31\).`,
    String.raw`<strong>Diviser par une fraction inférieure à 1 donne une réponse plus grande.</strong> Si ta réponse à \(4\div\tfrac25\) est inférieure à \(4\), il y a une erreur (la réponse est \(10\)).`,
  ])}`),

  section("📌 Tous les nombres rationnels : fractions et décimaux ensemble", String.raw`
  <p>Les fractions, les décimaux, les entiers et les nombres fractionnaires sont tous des <strong>nombres rationnels</strong>; un seul ensemble de règles s'applique donc à tous : les <strong>règles des signes des entiers</strong> (1.2, 1.3) et <strong>PEDMAS</strong>. Les vrais problèmes mélangent les formes — un prix en décimaux, une recette en fractions, une température négative.</p>
  ${table(["Expression", "Le signe d'abord", "Puis la grandeur", "Réponse"], [
    ["\\(-2.4\\times1.5\\)", "signes contraires → −", "\\(2.4\\times1.5=3.6\\)", "\\(-3.6\\)"],
    ["\\(-0.6\\div\\left(-\\tfrac34\\right)\\)", "même signe → +", "\\(0.6\\times\\tfrac43=0.8\\)", "\\(0.8\\)"],
    ["\\(-3.6-(-0.75)\\)", "additionner l'opposé", "\\(-3.6+0.75\\)", "\\(-2.85\\)"],
  ])}
  <p><strong>Choisis la forme la plus simple.</strong> Si une fraction se convertit en un décimal court (\(\tfrac34=0.75\), \(\tfrac25=0.4\)), les décimaux sont rapides. Sinon (\(\tfrac13=0.333\ldots\)), convertis plutôt le décimal en fraction : \(0.5\times\tfrac13=\tfrac12\times\tfrac13=\tfrac16\), ce qui est exact.</p>
  ${keyIdea(String.raw`<strong>Estime avant de calculer.</strong> Pour \(-2.4\times1.5\) : environ \(-2\times1.5=-3\); une réponse de \(-3.6\) est donc raisonnable, mais pas \(36\) ni \(+3.6\).`)}
  <p>Exemple en contexte : une température de \(-4.5\,^\circ\)C baisse de \(\tfrac23\) de degré par heure pendant \(6\) heures : \(-4.5+6\times\left(-\tfrac23\right)=-4.5-4=-8.5\,^\circ\)C.</p>`),

  examples([
    ["Simplifier, puis multiplier", String.raw`Évalue \(\dfrac{4}{9}\times\dfrac{3}{10}\).`,
      [String.raw`<b>Règle.</b> Multiplie les numérateurs et multiplie les dénominateurs : \[\frac{a}{b}\times\frac{c}{d}=\frac{a\times c}{b\times d}\] N'importe quel numérateur peut d'abord se simplifier avec n'importe quel dénominateur, car cela revient à diviser le haut et le bas du produit par le même nombre.`,
        String.raw`<b>Simplification croisée :</b> \(4\) (en haut) et \(10\) (en bas) ont \(2\) en commun : \(4\to2,\ 10\to5\). \(3\) (en haut) et \(9\) (en bas) ont \(3\) en commun : \(3\to1,\ 9\to3\).`,
        String.raw`<b>Multiplie maintenant :</b> \(\tfrac{2}{3}\times\tfrac{1}{5}=\tfrac{2\times1}{3\times5}=\tfrac{2}{15}\).`,
        String.raw`<b>Vérifie sans simplifier d'abord :</b> \(\tfrac{4\times3}{9\times10}=\tfrac{12}{90}\); en divisant par \(6\), on obtient \(\tfrac{2}{15}\) ✓`],
      String.raw`\(\tfrac{4}{9}\times\tfrac{3}{10}=\tfrac{2}{15}\)`],
    ["Des nombres fractionnaires négatifs", String.raw`Évalue \(-2\tfrac{1}{2}\times1\tfrac{1}{5}\).`,
      [String.raw`<b>Règle.</b> Les nombres fractionnaires doivent devenir des fractions impropres avant la multiplication (on ne peut pas multiplier séparément les parties entières et les parties fractionnaires).`,
        String.raw`<b>Convertis :</b> \(2\tfrac12=\tfrac{2\times2+1}{2}=\tfrac{5}{2}\), donc \(-2\tfrac12=-\tfrac52\); et \(1\tfrac15=\tfrac{6}{5}\).`,
        String.raw`<b>Signe :</b> un facteur négatif → le produit est négatif.`,
        String.raw`<b>Simplifie et multiplie les grandeurs :</b> \(\tfrac{5}{2}\times\tfrac{6}{5}\) : les \(5\) s'annulent, et \(6\) avec \(2\) donne \(3\) : \(\tfrac{1}{1}\times\tfrac{3}{1}=3\).`,
        String.raw`<b>Vérifie avec des décimaux :</b> \(-2.5\times1.2=-3\) ✓`],
      String.raw`\(-2\tfrac12\times1\tfrac15=-3\)`],
    ["Trouver des inverses", String.raw`Trouve l'inverse de a) \(-\tfrac{4}{7}\), b) \(3\tfrac{1}{3}\), c) \(0.25\).`,
      [String.raw`<b>Définition.</b> L'inverse de \(x\) est le nombre qui, multiplié par \(x\), donne \(1\). Pour une fraction, \(\tfrac{a}{b}\times\tfrac{b}{a}=1\); on la renverse donc. Le signe reste le même, car \((-)(-)=+\).`,
        String.raw`<b>a)</b> Renverse \(-\tfrac{4}{7}\) : \(-\tfrac{7}{4}\). Vérification : \(-\tfrac47\times\left(-\tfrac74\right)=\tfrac{28}{28}=1\) ✓`,
        String.raw`<b>b)</b> Écris-le d'abord en une seule fraction : \(3\tfrac13=\tfrac{10}{3}\). Renverse : \(\tfrac{3}{10}\). Vérification : \(\tfrac{10}{3}\times\tfrac{3}{10}=1\) ✓`,
        String.raw`<b>c)</b> \(0.25=\tfrac{25}{100}=\tfrac{1}{4}\). Renverse : \(\tfrac41=4\). Vérification : \(0.25\times4=1\) ✓`],
      String.raw`a) \(-\tfrac74\); b) \(\tfrac{3}{10}\); c) \(4\)`],
    ["Diviser : combien de fois ça entre?", String.raw`Évalue \(\dfrac{5}{6}\div\dfrac{5}{12}\) et explique la réponse.`,
      [String.raw`<b>Règle.</b> Diviser par une fraction revient à multiplier par son inverse : \[\frac{a}{b}\div\frac{c}{d}=\frac{a}{b}\times\frac{d}{c}\]`,
        String.raw`<b>Applique-la :</b> \(\tfrac{5}{6}\div\tfrac{5}{12}=\tfrac{5}{6}\times\tfrac{12}{5}\).`,
        String.raw`<b>Simplifie :</b> les \(5\) s'annulent; \(12\div6=2\). Résultat : \(\tfrac{1}{1}\times\tfrac{2}{1}=2\).`,
        String.raw`<b>Signification :</b> la division demande « combien de \(\tfrac{5}{12}\) entrent dans \(\tfrac56\)? ». Puisque \(\tfrac{5}{6}=\tfrac{10}{12}\), exactement deux morceaux de \(\tfrac{5}{12}\) y entrent.`,
        String.raw`<b>Vérifie en remultipliant :</b> \(2\times\tfrac{5}{12}=\tfrac{10}{12}=\tfrac56\) ✓`],
      String.raw`\(\tfrac56\div\tfrac{5}{12}=2\)`,
      tape([{ n: 5, label: "premier 5/12", fill: "#dbeafe", stroke: "#1e40af" }, { n: 5, label: "deuxième 5/12", fill: "#dcfce7", stroke: "#15803d" }, { n: 2, label: "reste", fill: "#ffffff", stroke: "#94a3b8" }], "Une unité en douzièmes. 5/6 = 10/12 correspond exactement à deux morceaux de 5/12.", 26)],
    ["Un problème de pâtisserie", String.raw`Une recette demande \(\tfrac{5}{8}\) de tasse de farine par fournée. Combien de fournées peux-tu faire avec \(3\tfrac{3}{4}\) tasses?`,
      [String.raw`<b>Choisis l'opération.</b> « Combien de fournées entrent dans la farine » demande combien de \(\tfrac58\) il y a dans \(3\tfrac34\) : divise, \(3\tfrac34\div\tfrac58\).`,
        String.raw`<b>Fraction impropre :</b> \(3\tfrac34=\tfrac{3\times4+3}{4}=\tfrac{15}{4}\).`,
        String.raw`<b>Multiplie par l'inverse :</b> \(\tfrac{15}{4}\times\tfrac{8}{5}\).`,
        String.raw`<b>Simplifie :</b> \(15\) avec \(5\) donne \(3\); \(8\) avec \(4\) donne \(2\) : \(\tfrac{3}{1}\times\tfrac{2}{1}=6\).`,
        String.raw`<b>Vérification :</b> \(6\times\tfrac58=\tfrac{30}{8}=\tfrac{15}{4}=3\tfrac34\) tasses ✓`],
      String.raw`tu peux faire \(6\) fournées`],
  ]),

  practice([
    q("multiplier", String.raw`Évalue \(\dfrac{5}{7}\times\dfrac{14}{15}\).`, frac(2, 3),
      String.raw`Simplifie en croisé \(5\) avec \(15\) et \(14\) avec \(7\).`, [String.raw`\(\tfrac{1}{1}\times\tfrac{2}{3}\).`, String.raw`\(=\tfrac{2}{3}\).`], String.raw`\(\tfrac{2}{3}\)`, { placeholder: "une fraction comme 3/4" }),
    q("décimaux et signes", String.raw`Évalue \(-1.2\times2.5-(-0.4)\div0.8\).`, num(-2.5),
      "Multiplie et divise d'abord. Détermine chaque signe avant la grandeur.", [String.raw`\(-1.2\times2.5=-3\).`, String.raw`\(-0.4\div0.8=-0.5\).`, String.raw`\(-3-(-0.5)=-3+0.5=-2.5\).`], String.raw`\(-2.5\)`),
    q("inverse", String.raw`Quel est l'inverse de \(-1\tfrac{3}{5}\)?`, frac(-5, 8),
      "Convertis d'abord en fraction impropre, puis renverse. Garde le signe.", [String.raw`\(-1\tfrac35=-\tfrac{8}{5}\).`, String.raw`Renverse : \(-\tfrac{5}{8}\).`], String.raw`\(-\tfrac{5}{8}\)`, { placeholder: "p. ex. -2/3" }),
    q("diviser", String.raw`Évalue \(2\tfrac{2}{5}\div\dfrac{3}{5}\).`, num(4),
      "Fraction impropre, puis multiplie par l'inverse de 3/5.", [String.raw`\(\tfrac{12}{5}\times\tfrac{5}{3}\).`, String.raw`\(=\tfrac{12}{3}=4\).`], String.raw`\(4\)`),
    q("problème du pichet", String.raw`Un pichet contient \(2\tfrac{1}{4}\) L. Combien de verres de \(\tfrac{3}{8}\) L peut-il remplir?`, num(6),
      String.raw`Combien de \(\tfrac38\) entrent dans \(2\tfrac14\)? Divise.`, [String.raw`\(\tfrac{9}{4}\div\tfrac{3}{8}=\tfrac{9}{4}\times\tfrac{8}{3}\).`, String.raw`\(=\tfrac{3}{1}\times\tfrac{2}{1}=6\).`], String.raw`\(6\) verres`),
  ]),

  ...hard([
    ["Tout à la fois", String.raw`Évalue \(\left[\left(\tfrac12-\tfrac23\right)\div\tfrac34+1\tfrac13\right]\times\left(-\tfrac{9}{10}\right)\).`,
      [String.raw`Parenthèse intérieure : \(\tfrac12-\tfrac23=\tfrac36-\tfrac46=-\tfrac16\).`,
        String.raw`Divise en multipliant par l'inverse : \(-\tfrac16\times\tfrac43=-\tfrac29\).`,
        String.raw`Additionne : \(-\tfrac29+\tfrac43=-\tfrac29+\tfrac{12}{9}=\tfrac{10}{9}\).`,
        String.raw`Multiplie : \(\tfrac{10}{9}\times\left(-\tfrac{9}{10}\right)=-1\), car ce sont des inverses de signes contraires.`],
      String.raw`la valeur est \(-1\)`],
    ["Une fraction dans une fraction", String.raw`Évalue \(1+\dfrac{1}{2+\dfrac13}\).`,
      [String.raw`Commence par le bas : \(2+\tfrac13=\tfrac73\).`,
        String.raw`Diviser \(1\) par \(\tfrac73\) donne son inverse, \(\tfrac37\).`,
        String.raw`Additionne : \(1+\tfrac37=\tfrac{10}{7}\).`],
      String.raw`la valeur est \(\tfrac{10}{7}\)`],
    ["Remonter à travers les restes", String.raw`Sara dépense \(\tfrac13\) de son argent, puis \(\tfrac14\) de ce qui reste, puis \(\tfrac15\) de ce qui reste ensuite. Il lui reste \(48\) dollars. Combien avait-elle au départ?`,
      [String.raw`Dépenser \(\tfrac13\) laisse \(\tfrac23\). Dépenser \(\tfrac14\) de ce reste en laisse les \(\tfrac34\). Dépenser \(\tfrac15\) en laisse les \(\tfrac45\).`,
        String.raw`La fraction qui reste est \(\tfrac23\times\tfrac34\times\tfrac45=\tfrac25\).`,
        String.raw`Donc \(\tfrac25\) de son argent vaut \(48\) dollars, et le total est \(48\div\tfrac25=48\times\tfrac52=120\).`],
      String.raw`elle avait \(120\) dollars au départ`,
      fig(tapeSvg([{ n: 10, label: "1/3", color: "blue" }, { n: 5, label: "1/4 du reste", color: "amber" }, { n: 3, label: "1/5", color: "violet" }, { n: 12, label: "reste : 48 dollars", color: "green" }], { unit: 16 }), "L'argent de Sara en 30 parties égales. Chaque achat est pris sur ce qui reste à ce moment-là.")],
    ["Carreler un plancher", String.raw`Un plancher mesure \(2\tfrac23\) m sur \(3\tfrac38\) m. Les carreaux mesurent \(\tfrac34\) m sur \(\tfrac12\) m. Combien de carreaux couvrent le plancher?`,
      [String.raw`Aire du plancher : \(\tfrac83\times\tfrac{27}{8}=9\) m².`,
        String.raw`Aire d'un carreau : \(\tfrac34\times\tfrac12=\tfrac38\) m².`,
        String.raw`Divise : \(9\div\tfrac38=9\times\tfrac83=24\).`],
      String.raw`\(24\) carreaux couvrent le plancher, si aucun ne doit être coupé`,
      fig(rectangle("3 3/8 m", "2 2/3 m"), "Le plancher.")],
  ], [
    q("tout à la fois", String.raw`Évalue \(\left[\left(\tfrac34-\tfrac56\right)\div\tfrac23+1\tfrac18\right]\times\left(-\tfrac45\right)\).`, frac(-4, 5),
      "Travaille de la parenthèse la plus intérieure vers l'extérieur.",
      [String.raw`\(\tfrac34-\tfrac56=-\tfrac{1}{12}\).`, String.raw`\(-\tfrac{1}{12}\times\tfrac32=-\tfrac18\).`, String.raw`\(-\tfrac18+\tfrac98=1\).`, String.raw`\(1\times\left(-\tfrac45\right)=-\tfrac45\).`], String.raw`\(-\tfrac45\)`, { placeholder: "une fraction comme -2/3" }),
    q("fraction emboîtée", String.raw`Évalue \(2+\dfrac{1}{3+\dfrac12}\). Réponds par une fraction.`, frac(16, 7),
      "Commence par le bas et remonte.",
      [String.raw`\(3+\tfrac12=\tfrac72\).`, String.raw`Son inverse est \(\tfrac27\).`, String.raw`\(2+\tfrac27=\tfrac{16}{7}\).`], String.raw`\(\tfrac{16}{7}\)`, { placeholder: "une fraction comme 7/4" }),
    q("restes", String.raw`Théo dépense \(\tfrac14\) de son argent, puis \(\tfrac23\) de ce qui reste. Il lui reste \(30\) dollars. Combien de dollars avait-il au départ?`, num(120),
      "Multiplie les fractions qui restent.",
      [String.raw`Fraction qui reste : \(\tfrac34\times\tfrac13=\tfrac14\).`, String.raw`\(\tfrac14\) de son argent vaut \(30\) dollars, donc il avait \(120\) dollars au départ.`], String.raw`\(120\)`),
    q("aire", String.raw`Un plancher mesure \(4\tfrac12\) m sur \(3\tfrac13\) m. Chaque carreau couvre \(\tfrac38\) m². Combien de carreaux faut-il?`, num(40),
      "Trouve l'aire du plancher, puis divise par l'aire d'un carreau.",
      [String.raw`\(\tfrac92\times\tfrac{10}{3}=15\) m².`, String.raw`\(15\div\tfrac38=15\times\tfrac83=40\).`], String.raw`\(40\)`),
    q("nombre inconnu", String.raw`Les \(\tfrac25\) d'un nombre valent \(-\tfrac78\). Quel est ce nombre? Réponds par une fraction.`, frac(-35, 16),
      String.raw`Divise par \(\tfrac25\), c'est-à-dire multiplie par son inverse.`,
      [String.raw`Nombre \(=-\tfrac78\div\tfrac25\).`, String.raw`\(=-\tfrac78\times\tfrac52=-\tfrac{35}{16}\).`], String.raw`\(-\tfrac{35}{16}\)`, { placeholder: "une fraction comme -7/4" }),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi n'ai-je pas besoin d'un dénominateur commun pour multiplier?", "Dans le modèle d'aire, la grille crée son propre dénominateur (rangées × colonnes); les morceaux ont donc automatiquement la même taille."],
      ["Pourquoi « garder, changer, renverser » fonctionne-t-il?", String.raw`Diviser par \(\tfrac{c}{d}\) demande combien de \(\tfrac{c}{d}\) entrent. Une unité en contient \(\tfrac{d}{c}\); la réponse est donc le premier nombre multiplié par \(\tfrac{d}{c}\).`],
      [String.raw`\(0\) a-t-il un inverse?`, String.raw`Non. Un inverse doit donner \(1\) quand on le multiplie, et \(0\) multiplié par n'importe quel nombre donne \(0\).`],
      ["Puis-je simplifier en croisé quand j'additionne?", String.raw`Non — seulement quand je multiplie (ou après avoir changé une division en multiplication). Pour \(\tfrac{2}{3}+\tfrac{3}{4}\), il faut le PPCD.`],
      ["Comment savoir s'il faut multiplier ou diviser dans un problème écrit?", String.raw`« Une partie de » ou « de » → multiplier. « Combien de fois ça entre », « combien de groupes », « partagé en morceaux de taille » → diviser.`],
    ],
    summary: [
      String.raw`\(\tfrac{a}{b}\times\tfrac{c}{d}=\tfrac{ac}{bd}\) : simplifie d'abord, convertis les nombres fractionnaires en fractions impropres.`,
      String.raw`Le produit de deux inverses est \(1\); ils ont le même signe; \(0\) n'a pas d'inverse.`,
      String.raw`\(\tfrac{a}{b}\div\tfrac{c}{d}=\tfrac{a}{b}\times\tfrac{d}{c}\).`,
      "Les règles des signes des entiers s'appliquent aussi aux fractions.",
    ],
    next: "La leçon 1.6 revient aux puissances : ce que signifie un exposant nul ou négatif.",
  }),
];
