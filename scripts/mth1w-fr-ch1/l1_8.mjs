// MTH1W-FR 1.8 — Travailler avec des rapports et des proportions (miroir de ../mth1w-ch1/v2/l1_8.mjs)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, tape, q, num, ratio, hard, fig } from "./lib.mjs";
import { rectangle } from "./bank/svg.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "1.8 Travailler avec des rapports et des proportions";
export const ID = lessonId(1, 8);

export const blocks = () => [
  intro({
    icon: "⚖️",
    title: "Travailler avec des rapports et des proportions",
    overview: String.raw`Un <strong>rapport</strong> compare deux quantités ou plus mesurées dans la même unité : \(3\) tasses de farine pour \(2\) tasses de sucre, \(14\) filles pour \(16\) garçons. Quand deux rapports sont égaux, l'équation est une <strong>proportion</strong>, et les proportions résolvent un très grand éventail de problèmes — adapter une recette, lire une carte, mélanger de la peinture, partager un prix équitablement. Dans cette leçon, tu vas écrire et simplifier des rapports, reconnaître des rapports équivalents, résoudre des proportions et partager une quantité selon un rapport donné.`,
    goals: [
      String.raw`écrire un rapport sous les formes \(a:b\), \(a\) pour \(b\) et \(\tfrac{a}{b}\), en comparant une partie à une partie ou une partie au tout;`,
      "simplifier des rapports, y compris des rapports à trois termes et des rapports de décimaux ou de fractions;",
      "trouver des rapports équivalents à l'aide d'un facteur d'échelle, d'une table de rapports ou d'une double droite numérique;",
      "résoudre des proportions à l'aide d'un facteur d'échelle ou du produit croisé;",
      "partager une quantité selon un rapport donné et résoudre des problèmes de dessins à l'échelle.",
    ],
    curriculum: "B3.5 (taux, pourcentages et proportions dans divers contextes)",
    prior: [
      [String.raw`Simplifie \(\tfrac{12}{18}\).`, String.raw`\(\tfrac23\) (divise par \(6\)).`],
      [String.raw`Que valent les \(\tfrac35\) de \(40\)?`, String.raw`\(24\).`],
      [String.raw`Combien de centimètres y a-t-il dans \(2.5\) m?`, String.raw`\(250\) cm.`],
    ],
    words: [
      ["Rapport", "une comparaison de quantités exprimées dans la même unité", "\\(3:2\\)"],
      ["Termes", "les nombres d'un rapport", "dans \\(3:2\\), les termes sont \\(3\\) et \\(2\\)"],
      ["Partie à partie / partie au tout", "compare deux parties / compare une partie au total", "filles : garçons ou filles : élèves"],
      ["Rapports équivalents", "rapports qui font la même comparaison", "\\(2:3=10:15\\)"],
      ["Proportion", "une équation qui affirme que deux rapports sont égaux", "\\(\\tfrac{x}{12}=\\tfrac{3}{4}\\)"],
    ],
  }),

  section("📌 Écrire et simplifier des rapports", String.raw`
  <p>L'<strong>ordre compte</strong> : « rouge pour bleu » s'écrit \(4:6\), mais « bleu pour rouge » s'écrit \(6:4\). Les quantités doivent être dans la même unité — convertis d'abord (\(50\) cm pour \(2\) m donne \(50:200=1:4\)).</p>
  <p>Simplifie un rapport comme une fraction : divise chaque terme par le PGCD. \(18:24:30=3:4:5\) (divise par \(6\)). Pour des décimaux ou des fractions, multiplie d'abord chaque terme pour obtenir des nombres entiers : \(1.5:0.6=15:6=5:2\).</p>
  ${keyIdea(String.raw`Multiplier ou diviser <strong>chaque terme</strong> d'un rapport par un même nombre non nul donne un <strong>rapport équivalent</strong>. Ce nombre est le <strong>facteur d'échelle</strong>.`)}`),

  section("📌 Rapports équivalents : tables et doubles droites numériques", String.raw`
  <p>Un jus se prépare avec \(2\) parties de concentré pour \(3\) parties d'eau. Préparer \(3\) recettes demande \(6\) parties pour \(9\) parties, ce qui donne le même goût. Une <strong>table de rapports</strong> et une <strong>double droite numérique</strong> organisent cette mise à l'échelle :</p>
  ${table(["Recettes", "1", "2", "3", "4", "5"], [["concentré (tasses)", "2", "4", "6", "8", "10"], ["eau (tasses)", "3", "6", "9", "12", "15"]])}
  <p>Utilise l'explorateur pour changer le rapport et le facteur d'échelle. La ligne verte pointillée sur la double droite numérique relie toujours des quantités correspondantes.</p>`),

  widget("ratioScale", { initA: 2, initB: 3, labels: ["jus", "eau"] }),

  section("📌 Résoudre des proportions et partager selon un rapport", String.raw`
  <p><strong>Résoudre une proportion.</strong> Pour résoudre \(\tfrac{x}{12}=\tfrac{3}{4}\) :</p>
  <ul>
    <li><em>Facteur d'échelle :</em> \(4\times3=12\), donc \(x=3\times3=9\).</li>
    <li><em>Produit croisé :</em> si \(\tfrac{a}{b}=\tfrac{c}{d}\), alors \(ad=bc\). Ici, \(4x=36\), donc \(x=9\). Cela fonctionne même quand le facteur d'échelle n'est pas un nombre entier.</li>
  </ul>
  <p><strong>Partager selon un rapport.</strong> Pour partager une quantité selon le rapport \(a:b\), trouve le nombre total de parties \(a+b\), trouve la valeur d'une partie, puis multiplie.</p>
  ${tape([{ n: 3, label: "Sam : 3 parties", fill: "#dbeafe", stroke: "#1e40af" }, { n: 5, label: "Ria : 5 parties", fill: "#fef3c7", stroke: "#b45309" }], "Partager 80 dollars selon le rapport 3 : 5 → 8 parties, donc 1 partie = 10 dollars : Sam 30, Ria 50.")}
  ${watchOut([
    String.raw`<strong>Garde le même ordre.</strong> Si le rapport est garçons : filles, place les garçons en haut dans les <em>deux</em> fractions de la proportion.`,
    String.raw`<strong>Additionne (ne soustrais pas) pour obtenir le total.</strong> Dans un partage \(3:5\), il y a \(3+5=8\) parties, et non \(5-3\).`,
    String.raw`<strong>Les rapports ne sont pas des différences.</strong> \(2:3\) et \(5:6\) ont tous deux une différence de \(1\), mais ils ne sont pas équivalents (\(\tfrac23\neq\tfrac56\)).`,
  ])}`),

  examples([
    ["Partie à partie et partie au tout", String.raw`Une classe compte \(14\) filles et \(16\) garçons. Écris, sous sa forme la plus simple, le rapport a) des filles aux garçons et b) des filles à l'ensemble des élèves.`,
      [String.raw`<b>Définitions.</b> Un rapport partie à partie compare un groupe à un autre; un rapport partie au tout compare un groupe au total. Un rapport est sous sa forme la plus simple quand ses termes n'ont aucun facteur commun autre que \(1\).`,
        String.raw`<b>a) Partie à partie :</b> filles : garçons \(=14:16\). Le PGCD de \(14\) et de \(16\) est \(2\) : \(14\div2:16\div2=7:8\).`,
        String.raw`<b>b) Trouve d'abord le tout :</b> \(14+16=30\) élèves.`,
        String.raw`<b>b) Partie au tout :</b> filles : élèves \(=14:30\). PGCD \(=2\) : \(7:15\).`,
        String.raw`<b>Vérification :</b> les parties de a) donnent le tout de b) : \(7+8=15\) ✓`],
      String.raw`a) \(7:8\); b) \(7:15\)`,
      tape([{ n: 7, label: "filles : 7 parties", fill: "#fce7f3", stroke: "#be185d" }, { n: 8, label: "garçons : 8 parties", fill: "#dbeafe", stroke: "#1e40af" }], "7 : 8 partie à partie; le tout compte 7 + 8 = 15 parties (1 partie = 2 élèves).", 24)],
    ["Rapports de décimaux et de fractions", String.raw`Simplifie a) \(2.5:1.5\) et b) \(\tfrac{2}{3}:\tfrac{5}{6}\).`,
      [String.raw`<b>Règle.</b> Multiplier ou diviser <b>chaque</b> terme par un même nombre non nul donne un rapport équivalent : \(a:b=ka:kb\). Sers-t'en pour éliminer d'abord les décimaux et les fractions.`,
        String.raw`<b>a) Élimine les décimaux</b> (multiplie par \(10\)) : \(25:15\). PGCD \(5\) : \(5:3\).`,
        String.raw`<b>b) Élimine les fractions</b> (multiplie par le PPCD \(6\)) : \(\tfrac23\times6=4\) et \(\tfrac56\times6=5\), ce qui donne \(4:5\).`,
        String.raw`<b>Vérification de a) :</b> \(\tfrac{2.5}{1.5}=1.\overline{6}\) et \(\tfrac{5}{3}=1.\overline{6}\) ✓ <b>Vérification de b) :</b> \(\tfrac{2/3}{5/6}=\tfrac23\times\tfrac65=\tfrac{4}{5}\) ✓`],
      String.raw`a) \(5:3\); b) \(4:5\)`],
    ["Résoudre une proportion", String.raw`Résous \(\dfrac{x}{12}=\dfrac{15}{20}\).`,
      [String.raw`<b>Règle.</b> Dans une proportion, les produits croisés sont égaux : \[\frac{a}{b}=\frac{c}{d}\ \Longrightarrow\ ad=bc\] (multiplie les deux membres par \(bd\)).`,
        String.raw`<b>Simplifie d'abord le rapport connu</b> (pour avoir de plus petits nombres) : \(\tfrac{15}{20}=\tfrac{3}{4}\). Donc \(\tfrac{x}{12}=\tfrac34\).`,
        String.raw`<b>Produit croisé :</b> \(4x=3\times12=36\).`,
        String.raw`<b>Divise les deux membres par \(4\) :</b> \(x=9\).`,
        String.raw`<b>Vérification :</b> \(\tfrac{9}{12}=\tfrac34\) et \(\tfrac{15}{20}=\tfrac34\) ✓`],
      String.raw`\(x=9\)`],
    ["Un partage en trois", String.raw`\(450\) g de mélange montagnard se composent de noix, de raisins secs et de graines selon le rapport \(2:3:4\). Combien de grammes de chaque?`,
      [String.raw`<b>Méthode.</b> Un rapport \(2:3:4\) divise le tout en parties égales. Trouve le nombre de parties, puis la taille d'une partie.`,
        String.raw`<b>Nombre total de parties :</b> \(2+3+4=9\).`,
        String.raw`<b>Une partie :</b> \(450\div9=50\) g.`,
        String.raw`<b>Chaque ingrédient :</b> noix \(2\times50=100\) g, raisins secs \(3\times50=150\) g, graines \(4\times50=200\) g.`,
        String.raw`<b>Vérifie le total :</b> \(100+150+200=450\) ✓ <b>Vérifie le rapport :</b> \(100:150:200\), divisé par \(50\) : \(2:3:4\) ✓`],
      String.raw`\(100\) g de noix, \(150\) g de raisins secs, \(200\) g de graines`,
      tape([{ n: 2, label: "noix", fill: "#fef3c7", stroke: "#b45309" }, { n: 3, label: "raisins secs", fill: "#fce7f3", stroke: "#be185d" }, { n: 4, label: "graines", fill: "#dcfce7", stroke: "#15803d" }], "9 parties égales font 450 g; chaque partie vaut donc 50 g.", 40)],
    ["Dessin à l'échelle", String.raw`Un plan d'étage utilise l'échelle \(1\text{ cm}:2.5\text{ m}\). Une pièce mesure \(5.2\) cm de long sur le plan. Quelle est la longueur réelle de la pièce?`,
      [String.raw`<b>Signification de l'échelle.</b> Chaque \(1\) cm sur le plan représente \(2.5\) m dans la réalité; les longueurs réelles sont donc proportionnelles aux longueurs du plan.`,
        String.raw`<b>Pose la proportion</b> (plan sur réel des deux côtés) : \(\tfrac{1}{2.5}=\tfrac{5.2}{x}\).`,
        String.raw`<b>Produit croisé :</b> \(1\times x=2.5\times5.2\).`,
        String.raw`<b>Multiplie :</b> \(2.5\times5.2=13\), donc \(x=13\) m.`,
        String.raw`<b>Vérification :</b> \(5.2\) cm est un peu plus que \(5\) cm, et \(5\times2.5=12.5\) m; \(13\) m est donc raisonnable ✓`],
      String.raw`la pièce mesure réellement \(13\) m de long`,
      table(["", "Plan (cm)", "Réel (m)"], [["échelle", "\\(1\\)", "\\(2.5\\)"], ["pièce", "\\(5.2\\)", "\\(x\\)"], ["facteur", "\\(\\times5.2\\)", "\\(\\times5.2\\)"]])],
  ]),

  practice([
    q("simplifier", String.raw`Écris \(36:48\) sous sa forme la plus simple. Écris-le comme <em>2:5</em>.`, ratio(3, 4),
      String.raw`Divise les deux termes par leur PGCD.`, [String.raw`Le PGCD est \(12\).`, String.raw`\(36\div12:48\div12=3:4\).`], String.raw`\(3:4\)`, { placeholder: "p. ex. 2:5" }),
    q("résoudre une proportion", String.raw`Résous \(6:x=9:15\).`, num(10),
      String.raw`Écris-la sous la forme \(\tfrac{6}{x}=\tfrac{9}{15}\) et fais le produit croisé.`, [String.raw`\(9x=6\times15=90\).`, String.raw`\(x=10\).`], String.raw`\(x=10\)`),
    q("partie au tout", String.raw`Un sac contient \(8\) billes rouges et \(12\) billes bleues. Écris le rapport des billes rouges à <strong>l'ensemble</strong> des billes sous sa forme la plus simple.`, ratio(2, 5),
      "Trouve d'abord le total.", [String.raw`Total \(=8+12=20\).`, String.raw`\(8:20=2:5\).`], String.raw`\(2:5\)`, { placeholder: "p. ex. 1:3" }),
    q("partager", String.raw`Partage \(240\) dollars selon le rapport \(3:5\). Quelle est la <strong>plus grande</strong> part (en dollars)?`, num(150),
      "Le nombre total de parties, puis la valeur d'une partie.", [String.raw`\(3+5=8\) parties; une partie \(=240\div8=30\).`, String.raw`Plus grande part \(=5\times30=150\).`], String.raw`\(150\) dollars`),
    q("recette", String.raw`On cuit le riz avec \(2\) tasses de riz pour \(3\) tasses d'eau. Combien de tasses d'eau faut-il pour \(5\) tasses de riz?`, num(7.5),
      String.raw`Pose \(\tfrac{2}{3}=\tfrac{5}{w}\).`, [String.raw`\(2w=15\).`, String.raw`\(w=7.5\).`], String.raw`\(7.5\) tasses`),
  ]),

  ...hard([
    ["Quand un rapport change", String.raw`Un club compte des juniors et des seniors selon le rapport \(5:3\). Après le départ de \(8\) juniors et l'arrivée de \(4\) seniors, les deux groupes sont égaux. Combien de membres y avait-il au départ?`,
      [String.raw`Pose \(5k\) juniors et \(3k\) seniors.`,
        String.raw`Après les changements, les nombres sont égaux : \(5k-8=3k+4\).`,
        String.raw`Soustrais \(3k\) des deux membres et ajoute \(8\) : \(2k=12\), donc \(k=6\).`,
        String.raw`Au départ, il y avait \(30\) juniors et \(18\) seniors, soit \(48\) membres. Vérification : \(22=22\).`],
      String.raw`il y avait \(48\) membres au départ`],
    ["Relier deux rapports", String.raw`\(A:B=3:4\) et \(B:C=6:5\). Si \(A+B+C=310\), trouve chaque nombre.`,
      [String.raw`\(B\) a des valeurs différentes dans les deux rapports. Le plus petit commun multiple de \(4\) et de \(6\) est \(12\).`,
        String.raw`Mets à l'échelle : \(A:B=9:12\) et \(B:C=12:10\), donc \(A:B:C=9:12:10\).`,
        String.raw`Il y a \(9+12+10=31\) parties, et une partie vaut \(310\div31=10\).`,
        String.raw`\(A=90\), \(B=120\), \(C=100\).`],
      String.raw`\(A=90\), \(B=120\) et \(C=100\)`],
    ["Retirer une partie d'un mélange", String.raw`Un pichet de \(12\) L contient du jus et de l'eau selon le rapport \(3:1\). Tu verses \(4\) L du mélange, puis tu remplis le pichet avec de l'eau. Quel est le nouveau rapport?`,
      [String.raw`Au départ, il y a \(9\) L de jus et \(3\) L d'eau.`,
        String.raw`Les \(4\) L versés ont le même rapport \(3:1\); ils contiennent donc \(3\) L de jus et \(1\) L d'eau.`,
        String.raw`Ce qui reste : \(6\) L de jus et \(2\) L d'eau.`,
        String.raw`Ajoute \(4\) L d'eau : \(6\) L de jus et \(6\) L d'eau.`],
      String.raw`le nouveau rapport est \(1:1\)`],
    ["Échelle et aire", String.raw`Un plan d'étage a une échelle de \(1:50\). Une pièce mesure \(24\) cm sur \(18\) cm sur le plan. Trouve son aire réelle et compare l'aire sur le plan avec l'aire réelle.`,
      [String.raw`Longueur réelle : \(24\times50=1200\) cm \(=12\) m. Largeur réelle : \(18\times50=900\) cm \(=9\) m.`,
        String.raw`Aire réelle : \(12\times9=108\) m².`,
        String.raw`Aire sur le plan : \(24\times18=432\) cm². Aire réelle dans la même unité : \(1200\times900=1\,080\,000\) cm².`,
        String.raw`\(1\,080\,000\div432=2500=50^2\). Les longueurs sont multipliées par \(50\), mais les aires par \(50^2\).`],
      String.raw`la pièce a une aire de \(108\) m², et le rapport des aires est \(1:2500\)`,
      fig(rectangle("24 cm", "18 cm"), "La pièce sur le plan, à l'échelle 1 : 50.")],
  ], [
    q("rapport qui change", String.raw`Dans un groupe, les garçons et les filles sont dans le rapport \(5:7\). Après l'arrivée de \(6\) garçons et le départ de \(2\) filles, les nombres sont égaux. Combien de personnes le groupe comptait-il au départ?`, num(48),
      "Écris le groupe sous la forme 5k et 7k, puis égale les nouveaux nombres.",
      [String.raw`\(5k+6=7k-2\), donc \(2k=8\) et \(k=4\).`, String.raw`Au départ : \(20\) garçons et \(28\) filles, soit \(48\).`], String.raw`\(48\)`),
    q("relier des rapports", String.raw`\(A:B=2:5\) et \(B:C=3:4\). Écris \(A:C\) sous sa forme la plus simple.`, ratio(3, 10),
      "Fais en sorte que B soit le même nombre dans les deux rapports.",
      [String.raw`Mets à l'échelle : \(A:B=6:15\) et \(B:C=15:20\).`, String.raw`\(A:C=6:20=3:10\).`], String.raw`\(3:10\)`),
    q("mélange", String.raw`Un bidon de \(20\) L de peinture contient du rouge et du blanc selon le rapport \(3:2\). Combien de litres de rouge faut-il ajouter pour obtenir le rapport \(2:1\)?`, num(4),
      "La quantité de blanc ne change pas.",
      [String.raw`Au départ : \(12\) L de rouge et \(8\) L de blanc.`, String.raw`Pour \(2:1\) avec \(8\) L de blanc, il faut \(16\) L de rouge.`, String.raw`Ajoute \(16-12=4\) L.`], String.raw`\(4\)`),
    q("échelle d'aire", String.raw`Un plan a une échelle de \(1:200\). Un parc couvre \(30\) cm² sur le plan. Quelle est son aire réelle, en m²?`, num(120),
      "Les aires sont multipliées par le carré de l'échelle des longueurs. Rappelle-toi que 1 m² vaut 10 000 cm².",
      [String.raw`Échelle des aires : \(200^2=40\,000\).`, String.raw`\(30\times40\,000=1\,200\,000\) cm².`, String.raw`\(1\,200\,000\div10\,000=120\) m².`], String.raw`\(120\)`),
    q("rapport de fractions", String.raw`Partage \(390\) dollars selon le rapport \(\tfrac12:\tfrac13:\tfrac14\). Combien de dollars vaut la plus petite part?`, num(90),
      "Multiplie tous les termes par 12 pour obtenir des nombres entiers.",
      [String.raw`Multiplie par \(12\) : \(6:4:3\), soit \(13\) parties.`, String.raw`Une partie vaut \(390\div13=30\).`, String.raw`La plus petite part est \(3\times30=90\).`], String.raw`\(90\)`),
  ]),

  wrapUp({
    qas: [
      ["Quelle est la différence entre un rapport et une fraction?", String.raw`Une fraction compare une partie à un tout. Un rapport peut comparer une partie à un tout <em>ou</em> deux parties — \(3:5\) (partie à partie) n'est pas « trois cinquièmes » de quoi que ce soit; les parties font \(8\) au total.`],
      ["Un rapport peut-il avoir plus de deux termes?", String.raw`Oui, par exemple \(2:3:4\). Simplifie en divisant chaque terme par le même nombre.`],
      ["Les rapports ont-ils des unités?", String.raw`Non — les unités s'annulent; c'est pourquoi les deux quantités doivent être dans la <em>même</em> unité avant d'écrire le rapport.`],
      ["Quand faut-il faire le produit croisé plutôt qu'utiliser un facteur d'échelle?", "Utilise le facteur d'échelle quand c'est un nombre entier facile à voir. Le produit croisé fonctionne toujours, surtout avec des décimaux."],
      ["Comment vérifier la réponse d'une proportion?", String.raw`Remplace ta réponse et simplifie les deux rapports — ils doivent être égaux. Vérifie aussi que c'est logique : plus de riz demande plus d'eau.`],
    ],
    summary: [
      "Les rapports comparent des quantités dans la même unité; l'ordre compte.",
      "Simplifie en divisant chaque terme par le PGCD; élimine d'abord les décimaux et les fractions.",
      String.raw`Une proportion \(\tfrac ab=\tfrac cd\) se résout à l'aide d'un facteur d'échelle ou du produit croisé (\(ad=bc\)).`,
      "Pour partager selon un rapport : nombre total de parties → valeur d'une partie → multiplier.",
    ],
    next: "La leçon 1.9 compare des quantités exprimées dans des unités différentes (les taux) et travaille avec les pourcentages.",
  }),
];
