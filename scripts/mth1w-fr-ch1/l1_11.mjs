// MTH1W-FR 1.11 — Révision du chapitre 1 (miroir de ../mth1w-ch1/v2/l1_11.mjs)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, tape, q, num, frac, sci, choice, hard } from "./lib.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "1.11 Révision du chapitre 1";
export const ID = lessonId(1, 11);

const MAP = String.raw`<div style="text-align:center;margin:12px 0;"><svg viewBox="0 0 640 250" width="640" style="max-width:100%;height:auto;" role="img" aria-label="Schéma conceptuel du chapitre 1">
<defs><marker id="cm" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>
<g font-family="Arial" font-size="13" font-weight="700" text-anchor="middle">
<rect x="250" y="8" width="140" height="40" rx="10" fill="#ede9fe" stroke="#6d28d9"/><text x="320" y="33" fill="#6d28d9">1.1 Ensembles</text>
<rect x="40" y="88" width="150" height="40" rx="10" fill="#dbeafe" stroke="#1e40af"/><text x="115" y="113" fill="#1e40af">1.2–1.3 Entiers</text>
<rect x="245" y="88" width="150" height="40" rx="10" fill="#dcfce7" stroke="#15803d"/><text x="320" y="113" fill="#15803d">1.4–1.5 Fractions</text>
<rect x="450" y="88" width="150" height="40" rx="10" fill="#fee2e2" stroke="#be123c"/><text x="525" y="113" fill="#be123c">1.10 Densité, limites</text>
<rect x="40" y="180" width="150" height="40" rx="10" fill="#fef3c7" stroke="#b45309"/><text x="115" y="205" fill="#b45309">1.6–1.7 Puissances</text>
<rect x="245" y="180" width="150" height="40" rx="10" fill="#e0f2fe" stroke="#0369a1"/><text x="320" y="205" fill="#0369a1">1.8 Rapports</text>
<rect x="450" y="180" width="150" height="40" rx="10" fill="#f1f5f9" stroke="#334155"/><text x="525" y="205" fill="#334155">1.9 Taux, %</text>
</g>
<g stroke="#475569" stroke-width="1.8" fill="none" marker-end="url(#cm)">
<path d="M290,48 L140,86"/><path d="M320,48 L320,86"/><path d="M350,48 L500,86"/><path d="M115,128 L115,178"/><path d="M190,108 L243,108"/><path d="M320,128 L320,178"/><path d="M395,200 L448,200"/><path d="M395,108 L448,108"/>
</g>
<g font-family="Arial" font-size="11" fill="#475569"><text x="128" y="157">les signes suivent</text><text x="330" y="157">fractions → rapports</text><text x="421" y="98">milieux</text><text x="421" y="193">par unité</text></g>
</svg><div style="font-size:13px;color:#64748b;">Comment le chapitre s'articule : chaque sujet suivant réutilise les signes des entiers et les habiletés avec les fractions.</div></div>`;

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 1 — Sens du nombre",
    overview: String.raw`Cette page rassemble tout le chapitre avant le test du chapitre. Elle résume chaque sujet sur un seul écran, montre comment les sujets sont liés et te propose des exercices variés — le genre de questions où c'est <em>toi</em> qui dois décider quelle habileté utiliser. Fais-la après avoir terminé les leçons 1.1 à 1.10, et retourne à la leçon correspondante dès que tu bloques.`,
    goals: [
      "te rappeler l'idée clé, un exemple typique et l'erreur la plus fréquente pour chaque sujet du chapitre;",
      "choisir la bonne stratégie quand une question n'indique pas de quelle leçon elle vient;",
      "résoudre des problèmes à plusieurs étapes qui combinent entiers, fractions, décimaux, puissances, rapports et pourcentages;",
      "vérifier toi-même si tu es prêt pour le test du chapitre à l'aide de la liste d'autoévaluation.",
    ],
    curriculum: "B1.1–B1.3, B2.1–B2.2, B3.1–B3.5 (tout le chapitre)",
    prior: [
      [String.raw`Que vaut \((-3)\times(-4)\)? Que vaut \((-3)+(-4)\)?`, String.raw`\(12\) et \(-7\). Les règles sont différentes pour la multiplication et l'addition.`],
      [String.raw`Que vaut \(2^{-2}\)?`, String.raw`\(\tfrac14\) — un exposant négatif signifie l'inverse.`],
      [String.raw`Que vaut \(15\%\) de \(80\)?`, String.raw`\(12\).`],
    ],
    words: [
      ["Nombre rationnel", "peut s'écrire \\(\\tfrac ab\\) (entiers, \\(b\\neq0\\))", "\\(-2.5=-\\tfrac52\\)"],
      ["Inverse", "multiplié par le nombre, il donne 1", "\\(\\tfrac34\\leftrightarrow\\tfrac43\\)"],
      ["Lois des exposants", "même base : additionner, soustraire ou multiplier les exposants", "\\(x^2x^5=x^7\\)"],
      ["Proportion", "deux rapports égaux", "\\(\\tfrac{x}{6}=\\tfrac{2}{3}\\)"],
      ["Multiplicateur", "variation en pourcentage en une étape", "\\(-20\\%\\to\\times0.8\\)"],
    ],
  }),

  section("📌 Le chapitre sur une seule page", table(["Sujet", "Idée clé", "Exemple typique", "Attention"], [
    ["1.1 Ensembles de nombres", "\\(\\mathbb N\\subset\\mathbb W\\subset\\mathbb Z\\subset\\mathbb Q\\subset\\mathbb R\\); les décimaux finis ou périodiques sont rationnels", "\\(0.\\overline{2}=\\tfrac29\\)", "simplifie d'abord : \\(\\sqrt{25}=5\\)"],
    ["1.2 Additionner/soustraire des entiers", "\\(a-b=a+(-b)\\)", "\\(-3-(-9)=6\\)", "\\((-3)+(-4)=-7\\), et non \\(7\\)"],
    ["1.3 Multiplier/diviser des entiers", "même signe \\(+\\), signes contraires \\(-\\); PEDMAS", "\\((-6)(-5)\\div(-3)=-10\\)", "\\(-3^2=-9\\), mais \\((-3)^2=9\\)"],
    ["1.4 Additionner/soustraire des fractions", "d'abord un dénominateur commun", "\\(\\tfrac23-\\tfrac34=-\\tfrac1{12}\\)", "n'additionne jamais les dénominateurs"],
    ["1.5 Multiplier/diviser des fractions", "multiplier en ligne; diviser = multiplier par l'inverse", "\\(\\tfrac35\\div\\tfrac9{10}=\\tfrac23\\)", "nombres fractionnaires → fractions impropres d'abord"],
    ["1.6 Puissances", "\\(a^0=1\\), \\(a^{-n}=\\tfrac1{a^n}\\); les racines annulent les puissances", "\\(3^{-2}=\\tfrac19\\), \\(\\sqrt{0.36}=0.6\\)", "exposant négatif ≠ valeur négative"],
    ["1.7 Lois, notation scientifique", "\\(a^ma^n=a^{m+n}\\), \\(\\tfrac{a^m}{a^n}=a^{m-n}\\), \\((a^m)^n=a^{mn}\\)", "\\(4.2\\times10^{-3}=0.0042\\)", "\\(x^2x^3=x^5\\), et non \\(x^6\\)"],
    ["1.8 Rapports", "multiplier chaque terme par le même nombre", "\\(12:20=3:5\\)", "l'ordre compte; total = somme des parties"],
    ["1.9 Taux, pourcentages", "taux unitaires; partie/tout = %/100; multiplicateurs", "\\(+13\\%\\to\\times1.13\\)", "variation en % ÷ la valeur initiale"],
    ["1.10 Densité, limites", "toujours un point milieu entre deux rationnels", "\\(\\tfrac1n\\to0\\)", "\\(0.\\overline9=1\\)"],
  ])),

  section("📌 Comment les sujets sont liés", String.raw`${MAP}
  ${keyIdea(String.raw`La plupart des erreurs au test du chapitre ne sont pas des erreurs sur les nouveaux sujets — ce sont des <strong>erreurs de signe</strong> (1.2–1.3) et des <strong>erreurs de fractions</strong> (1.4–1.5) à l'intérieur d'une question plus avancée. Quand une réponse semble fausse, vérifie-les d'abord.`)}`),

  section("📌 Quelle habileté utiliser?", String.raw`<p>Dans un test, les questions n'indiquent pas de quelle leçon elles viennent. Avant de calculer, nomme l'habileté. Essaie les cinq questions ci-dessous — elles demandent seulement <em>quelle</em> méthode utiliser.</p>`),

  practice([
    q("stratégie", String.raw`Pour déterminer lequel est le plus grand, \(\tfrac58\) ou \(\tfrac{7}{11}\), la meilleure première étape est de…`, choice(["réécrire les deux avec un dénominateur commun", "additionner les numérateurs et les dénominateurs", "multiplier par l'inverse", "extraire les racines carrées"], 0),
      "Pour comparer des fractions, il faut des morceaux de même taille.", ["Dénominateur commun \\(88\\) : \\(\\tfrac{55}{88}\\) et \\(\\tfrac{56}{88}\\)."], String.raw`dénominateur commun (\(\tfrac{7}{11}\) est le plus grand)`),
    q("stratégie", String.raw`Quelle loi permet de simplifier \(\dfrac{x^7}{x^{-2}}\)?`, choice(["la loi du quotient : soustraire les exposants", "la loi du produit : additionner les exposants", "la puissance d'une puissance : multiplier les exposants", "aucune loi ne s'applique"], 0),
      "Même base, on divise.", [String.raw`\(x^{7-(-2)}=x^9\).`], String.raw`la loi du quotient, qui donne \(x^9\)`),
    q("stratégie", String.raw`Un prix est réduit de \(15\%\), puis on ajoute la TVH de \(13\%\). Quel calcul unique donne le prix final à partir de \(P\)?`, choice([String.raw`\(P\times0.85\times1.13\)`, String.raw`\(P\times(1-0.15+0.13)\)`, String.raw`\(P\times0.98\)`, String.raw`\(P-15+13\)`], 0),
      "Chaque variation en pourcentage est un multiplicateur; les variations successives se multiplient.", [String.raw`Rabais : \(\times0.85\). Taxe sur le prix réduit : \(\times1.13\).`], String.raw`\(P\times0.85\times1.13\)`),
    q("stratégie", String.raw`Pour prouver que \(0.\overline{6}\) est rationnel, tu devrais…`, choice(["poser x = 0.666…, comparer 10x et x, puis résoudre", "l'arrondir à 0.67", "montrer qu'il est entre 0 et 1", "l'élever au carré"], 0),
      "Rationnel signifie quotient d'entiers — trouve cette fraction.", [String.raw`\(10x-x=6\), donc \(x=\tfrac69=\tfrac23\).`], String.raw`comparer \(10x\) avec \(x\) : \(0.\overline6=\tfrac23\)`),
    q("stratégie", String.raw`Quel fait t'indique que \(-3-(-8)\) est positif sans calculer?`, choice(["soustraire un négatif revient à additionner son opposé", "deux négatifs donnent toujours un positif", "le plus grand nombre est négatif", "la soustraction est commutative"], 0),
      "Réécris la soustraction en addition.", [String.raw`\(-3-(-8)=-3+8=5>0\). (« Deux négatifs donnent un positif » est une règle de multiplication, pas d'addition.)`], "additionner l'opposé"),
  ]),

  examples([
    ["Ensembles de nombres et racines", String.raw`Évalue \(\sqrt{\tfrac{49}{81}}-0.\overline{3}\) et indique à quels ensembles de nombres appartient la réponse.`,
      [String.raw`<b>Faits utilisés.</b> \(\sqrt{\tfrac{a}{b}}=\tfrac{\sqrt a}{\sqrt b}\), et un décimal périodique peut s'écrire sous forme de fraction.`,
        String.raw`<b>Racine :</b> \(49=7^2\) et \(81=9^2\), donc \(\sqrt{\tfrac{49}{81}}=\tfrac79\).`,
        String.raw`<b>Décimal périodique :</b> pose \(x=0.\overline3\); alors \(10x=3.\overline3\), donc \(9x=3\) et \(x=\tfrac13=\tfrac39\).`,
        String.raw`<b>Soustrais avec le dénominateur commun \(9\) :</b> \(\tfrac79-\tfrac39=\tfrac49\).`,
        String.raw`<b>Classe :</b> \(\tfrac49\) est un quotient d'entiers; il est donc rationnel et réel; il est entre \(0\) et \(1\), donc ce n'est pas un entier.`,
        String.raw`<b>Vérifie avec des décimaux :</b> \(0.777\ldots-0.333\ldots=0.444\ldots=\tfrac49\) ✓`],
      String.raw`\(\tfrac49\) : rationnel et réel`],
    ["Entiers et PEDMAS", String.raw`Évalue \(-3^2+(-12)\div(-4)\times2-(-5)\).`,
      [String.raw`<b>Ordre.</b> Exposants → division et multiplication de gauche à droite → addition et soustraction de gauche à droite.`,
        String.raw`<b>Exposant :</b> dans \(-3^2\), la base est \(3\), et non \(-3\), donc \(-3^2=-(9)=-9\).`,
        String.raw`<b>Divise, puis multiplie (de gauche à droite) :</b> \((-12)\div(-4)=3\) (même signe → positif), puis \(3\times2=6\).`,
        String.raw`<b>Soustraire un négatif revient à additionner :</b> \(-(-5)=+5\).`,
        String.raw`<b>Combine :</b> \(-9+6+5=2\).`,
        String.raw`<b>Vérifie le piège :</b> si on lisait \(-3^2\) comme \((-3)^2=9\), la réponse serait \(20\) — ce sont les parenthèses qui décident.`],
      String.raw`\(2\)`],
    ["Fractions, nombres fractionnaires et décimaux", String.raw`Évalue \(\left(2\tfrac13-3.5\right)\div\left(-\tfrac{7}{12}\right)\).`,
      [String.raw`<b>Plan.</b> Mets tout sous la même forme (fractions impropres), calcule la parenthèse, puis divise en multipliant par l'inverse.`,
        String.raw`<b>Convertis :</b> \(2\tfrac13=\tfrac73\) et \(3.5=\tfrac72\).`,
        String.raw`<b>Parenthèse (PPCD \(6\)) :</b> \(\tfrac{14}{6}-\tfrac{21}{6}=-\tfrac76\).`,
        String.raw`<b>Divise :</b> \(-\tfrac76\div\left(-\tfrac{7}{12}\right)=-\tfrac76\times\left(-\tfrac{12}{7}\right)\). Deux négatifs → positif.`,
        String.raw`<b>Simplifie :</b> les \(7\) s'annulent et \(\tfrac{12}{6}=2\); la réponse est donc \(2\).`,
        String.raw`<b>Vérification :</b> \(2\times\left(-\tfrac{7}{12}\right)=-\tfrac{14}{12}=-\tfrac76\), la valeur de la parenthèse ✓`],
      String.raw`\(2\)`],
    ["Lois des exposants et notation scientifique", String.raw`Évalue \(\dfrac{(6\times10^{5})^2}{1.2\times10^{-3}}\) en notation scientifique.`,
      [String.raw`<b>Lois.</b> \((ab)^n=a^nb^n\), \((10^m)^n=10^{mn}\), \(\tfrac{10^m}{10^n}=10^{m-n}\).`,
        String.raw`<b>Numérateur :</b> \((6\times10^5)^2=6^2\times10^{5\times2}=36\times10^{10}\).`,
        String.raw`<b>Divise séparément les nombres et les puissances :</b> \(\tfrac{36}{1.2}=30\) et \(\tfrac{10^{10}}{10^{-3}}=10^{10-(-3)}=10^{13}\).`,
        String.raw`<b>Corrige la forme</b> (\(30\) n'est pas entre \(1\) et \(10\)) : \(30\times10^{13}=3\times10^{1}\times10^{13}=3\times10^{14}\).`,
        String.raw`<b>Vérification :</b> \(3\times10^{14}\times1.2\times10^{-3}=3.6\times10^{11}=36\times10^{10}\), le numérateur ✓`],
      String.raw`\(3\times10^{14}\)`],
    ["Un rapport, puis un pourcentage", String.raw`Une boisson est préparée selon le rapport concentré : eau \(=2:5\). a) Quelle quantité de concentré y a-t-il dans \(4.2\) L de boisson? b) Le concentré coûte \(3.60\) dollars le litre et il est à \(25\%\) de rabais. Combien coûte cette quantité?`,
      [String.raw`<b>a) Parties.</b> \(2:5\) signifie que \(2+5=7\) parties égales forment toute la boisson.`,
        String.raw`<b>a) Une partie :</b> \(4.2\div7=0.6\) L. Le concentré correspond à \(2\) parties : \(2\times0.6=1.2\) L.`,
        String.raw`<b>a) Vérification :</b> eau \(=5\times0.6=3\) L, et \(1.2+3=4.2\) L ✓`,
        String.raw`<b>b) Plein prix :</b> coût \(=\) prix unitaire \(\times\) quantité \(=3.60\times1.2=4.32\) dollars.`,
        String.raw`<b>b) Rabais :</b> \(25\%\) de rabais conserve \(75\%\) : \(4.32\times0.75=3.24\) dollars.`,
        String.raw`<b>b) Vérification :</b> le rabais est \(\tfrac14\) de \(4.32\), soit \(1.08\), et \(4.32-1.08=3.24\) ✓`],
      String.raw`a) \(1.2\) L; b) \(3.24\) dollars`,
      tape([{ n: 2, label: "concentré", fill: "#fef3c7", stroke: "#b45309" }, { n: 5, label: "eau", fill: "#dbeafe", stroke: "#1e40af" }], "7 parties égales font 4.2 L; chaque partie vaut donc 0.6 L.", 40)],
  ]),

  section("📌 Révision mixte", String.raw`<p>Ces cinq questions combinent chacune deux leçons ou plus. Estime d'abord, puis vérifie.</p>`),

  practice([
    q("puissances + PEDMAS", String.raw`Évalue \((-2)^3-4^{-1}\times12\).`, num(-11), String.raw`\(4^{-1}=\tfrac14\).`, [String.raw`\((-2)^3=-8\).`, String.raw`\(\tfrac14\times12=3\).`, String.raw`\(-8-3=-11\).`], String.raw`\(-11\)`),
    q("nombres rationnels", String.raw`Évalue \(\tfrac34-1\tfrac16+(-0.5)\). Donne une fraction.`, frac(-11, 12), "Convertis tout en douzièmes.", [String.raw`\(\tfrac{9}{12}-\tfrac{14}{12}-\tfrac{6}{12}\).`, String.raw`\(=-\tfrac{11}{12}\).`], String.raw`\(-\tfrac{11}{12}\)`, { placeholder: "p. ex. -5/6" }),
    q("notation scientifique", String.raw`Écris \(0.0072\times5000\) en notation scientifique.`, sci(3.6, 1), String.raw`\(7.2\times10^{-3}\times5\times10^{3}\).`, [String.raw`\(7.2\times5=36\) et \(10^{-3+3}=10^0\).`, String.raw`\(36=3.6\times10^{1}\).`], String.raw`\(3.6\times10^{1}\)`, { placeholder: "p. ex. 4.5 x 10^2" }),
    q("rapport", String.raw`Partage \(156\) dollars selon le rapport \(5:7\). Combien de dollars vaut la plus grande part?`, num(91), "Le nombre total de parties, puis une partie.", [String.raw`\(12\) parties; une partie \(=13\).`, String.raw`\(7\times13=91\).`], String.raw`\(91\) dollars`),
    q("densité", String.raw`Trouve le point milieu de \(-0.4\) et de \(\tfrac14\). Donne un décimal.`, num(-0.075), String.raw`\(\tfrac14=0.25\); fais la moyenne des deux.`, [String.raw`\(-0.4+0.25=-0.15\).`, String.raw`\(-0.15\div2=-0.075\).`], String.raw`\(-0.075\)`),
  ]),

  section("📌 Suis-je prêt pour le test?", String.raw`<p>Coche chaque énoncé seulement si tu peux le faire <em>sans regarder tes notes</em>. Sinon, le numéro de la leçon t'indique où retourner.</p>
  <ul style="list-style:none;padding-left:0;">
    ${[
      ["1.1", "Je peux classer n'importe quel nombre et transformer un décimal périodique en fraction."],
      ["1.2", "Je peux additionner et soustraire des entiers, et expliquer pourquoi soustraire un négatif revient à additionner."],
      ["1.3", "Je peux multiplier et diviser des entiers et appliquer PEDMAS avec des parenthèses et des puissances."],
      ["1.4", "Je peux comparer, additionner et soustraire des fractions et des nombres fractionnaires, y compris négatifs."],
      ["1.5", "Je peux multiplier et diviser des fractions, et calculer avec des décimaux et des fractions ensemble."],
      ["1.6", "Je peux évaluer des exposants nuls et négatifs, et utiliser les racines carrées pour annuler des carrés."],
      ["1.7", "Je peux utiliser les lois des exposants et calculer en notation scientifique."],
      ["1.8", "Je peux simplifier des rapports, résoudre des proportions et partager selon un rapport."],
      ["1.9", "Je peux trouver des taux unitaires, des taux de variation avec un signe, des pourcentages et des variations en pourcentage."],
      ["1.10", "Je peux trouver un nombre entre deux rationnels quelconques et décrire une limite."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  ...hard([
    ["Puissances, fractions et valeur absolue", String.raw`Évalue \(\left(-\tfrac23\right)^{-2}\times\left(2^{-3}\div4^{-2}\right)-\left|-1\tfrac12\right|\).`,
      [String.raw`Renverse et élève au carré : \(\left(-\tfrac23\right)^{-2}=\left(-\tfrac32\right)^2=\tfrac94\).`,
        String.raw`La parenthèse : \(2^{-3}\div4^{-2}=\tfrac18\div\tfrac{1}{16}=2\).`,
        String.raw`Multiplie : \(\tfrac94\times2=\tfrac92\).`,
        String.raw`Soustrais la valeur absolue : \(\tfrac92-\tfrac32=3\).`],
      String.raw`la valeur est \(3\)`],
    ["Croissance en pourcentage et notation scientifique", String.raw`Une entreprise stocke \(2.4\times10^{6}\) Go de données. La quantité augmente de \(25\%\) par année pendant \(2\) ans. Elle est ensuite partagée également entre \(1.5\times10^{4}\) utilisateurs. Combien de Go cela fait-il par utilisateur?`,
      [String.raw`Facteur de croissance : \(1.25\times1.25=1.5625\).`,
        String.raw`Nouvelle quantité : \(2.4\times1.5625=3.75\), soit \(3.75\times10^{6}\) Go.`,
        String.raw`Divise : \(\tfrac{3.75}{1.5}=2.5\) et \(10^{6-4}=10^{2}\).`,
        String.raw`\(2.5\times10^{2}=250\) Go.`],
      String.raw`chaque utilisateur reçoit \(250\) Go`],
    ["Un rapport qui change", String.raw`Un alliage de \(40\) kg contient du cuivre et du zinc selon le rapport \(7:3\). Quelle quantité de zinc faut-il ajouter pour obtenir le rapport \(7:5\)?`,
      [String.raw`Il y a \(10\) parties de \(4\) kg chacune; il y a donc \(28\) kg de cuivre et \(12\) kg de zinc.`,
        String.raw`Le cuivre ne change pas, et \(28\) kg représentent toujours \(7\) parties de \(4\) kg.`,
        String.raw`Le nouveau zinc pèse \(5\times4=20\) kg; il faut donc ajouter \(20-12=8\) kg.`],
      String.raw`ajoute \(8\) kg de zinc`],
  ], [
    q("exposants négatifs", String.raw`Évalue \(\left(3^{-1}+6^{-1}\right)^{-2}\).`, num(4),
      "Additionne d'abord dans la parenthèse.",
      [String.raw`\(\tfrac13+\tfrac16=\tfrac12\).`, String.raw`\(\left(\tfrac12\right)^{-2}=2^2=4\).`], String.raw`\(4\)`),
    q("fractions", String.raw`Évalue \(\tfrac34\div\left(\tfrac25-1\right)+\left|-\tfrac12\right|\).`, frac(-3, 4),
      "Calcule la parenthèse, puis divise, puis additionne.",
      [String.raw`\(\tfrac25-1=-\tfrac35\).`, String.raw`\(\tfrac34\times\left(-\tfrac53\right)=-\tfrac54\).`, String.raw`\(-\tfrac54+\tfrac12=-\tfrac34\).`], String.raw`\(-\tfrac34\)`, { placeholder: "une fraction comme -2/3" }),
    q("pourcentage", String.raw`Un prix monte de \(25\%\), puis baisse de \(10\%\). Quelle est l'augmentation globale en pourcentage? Donne le nombre de pour cent.`, num(12.5, 0.001),
      "Multiplie les facteurs.",
      [String.raw`\(1.25\times0.9=1.125\).`, String.raw`C'est une augmentation de \(12.5\%\).`], String.raw`\(12.5\)`),
    q("notation scientifique", String.raw`Évalue \(\dfrac{(6\times10^{-3})^{2}}{9\times10^{-4}}\) en notation scientifique.`, sci(4, -2),
      "Élève au carré les deux parties du numérateur, puis divise.",
      [String.raw`Numérateur : \(36\times10^{-6}\).`, String.raw`\(\tfrac{36}{9}=4\) et \(10^{-6-(-4)}=10^{-2}\).`], String.raw`\(4\times10^{-2}\)`, { placeholder: "p. ex. 4.5 x 10^6" }),
    q("entiers", String.raw`Évalue \(\left[(-2)^5+|-7-5|\right]\div(-4)\).`, num(5),
      "La puissance est négative, car l'exposant est impair.",
      [String.raw`\((-2)^5=-32\) et \(|-12|=12\).`, String.raw`\(-32+12=-20\).`, String.raw`\(-20\div(-4)=5\).`], String.raw`\(5\)`),
  ]),

  wrapUp({
    qas: [
      ["Comment étudier pour le test du chapitre?", "Fais la révision mixte ci-dessus sans tes notes, repère tes erreurs et refais les exercices de ces leçons. Fais ensuite les problèmes des fiches d'exercices de tes deux sujets les plus faibles. Les exercices variés valent mieux qu'une simple relecture."],
      ["Quelles sont les erreurs les plus fréquentes de ce chapitre?", String.raw`Les erreurs de signe (\((-3)+(-4)\) ou \((-3)(-4)\)), l'addition des dénominateurs, l'oubli des parenthèses autour des bases négatives (\(-3^2\) ou \((-3)^2\)), traiter un exposant négatif comme un nombre négatif, et diviser une variation en pourcentage par la nouvelle valeur.`],
      ["Comment savoir quelle règle utiliser?", "Nomme d'abord l'opération (additionner? multiplier? puissance?) et le type de nombre (entier, fraction, décimal). Utilise ensuite la règle de cette opération — le type de nombre ne change jamais les règles des signes."],
      ["Devrais-je utiliser une calculatrice?", "Utilise-la pour vérifier, pas pour réfléchir. Tu dois quand même décider de l'ordre des opérations, des signes et du caractère raisonnable de la réponse. Entre les bases négatives entre parenthèses."],
      ["Je suis encore faible avec les fractions. Que faire?", "Retourne aux explorateurs de fractions des leçons 1.4 et 1.5 et fais toutes les questions d'exercice. Les habiletés avec les fractions servent dans presque tous les chapitres suivants; cela vaut donc la peine d'y consacrer plus de temps."],
    ],
    summary: [
      "Sens du nombre = ensembles, signes, fractions, puissances et raisonnement proportionnel.",
      "Détermine d'abord le signe, puis la grandeur; estime avant de calculer.",
      "Chaque sujet suivant réutilise les habiletés avec les entiers et les fractions.",
    ],
    next: "Fais le test du chapitre 1. Ensuite, le chapitre 2 utilise ces habiletés pour construire et simplifier des expressions algébriques.",
  }),
];
