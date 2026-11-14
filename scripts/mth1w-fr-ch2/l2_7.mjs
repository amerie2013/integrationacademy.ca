// MTH1W-FR 2.7 — Révision du chapitre 2 (miroir de ../mth1w-ch2/l2_7.mjs)
import { intro, section, keyIdea, examples, practice, wrapUp, table, q, num, expr, choice } from "./lib.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "2.7 Révision du chapitre 2";
export const ID = lessonId(2, 7);

// Same concept map as the English lesson; boxes widened (190 px, same centres) so the French labels fit.
const MAP = String.raw`<div style="text-align:center;margin:12px 0;"><svg viewBox="0 0 640 230" width="640" style="max-width:100%;height:auto;" role="img" aria-label="Carte conceptuelle du chapitre 2">
<defs><marker id="c2m" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#475569"/></marker></defs>
<g font-family="Arial" font-size="12" font-weight="700" text-anchor="middle">
<rect x="10" y="20" width="190" height="44" rx="10" fill="#ede9fe" stroke="#6d28d9"/><text x="105" y="47" fill="#6d28d9">2.1 Écrire des expressions</text>
<rect x="225" y="20" width="190" height="44" rx="10" fill="#dbeafe" stroke="#1e40af"/><text x="320" y="47" fill="#1e40af">2.2 Ajouter, soustraire</text>
<rect x="440" y="20" width="190" height="44" rx="10" fill="#dcfce7" stroke="#15803d"/><text x="535" y="47" fill="#15803d">2.3 Développer, factoriser</text>
<rect x="10" y="160" width="190" height="44" rx="10" fill="#fef3c7" stroke="#b45309"/><text x="105" y="187" fill="#b45309">2.4 Résoudre des équations</text>
<rect x="225" y="160" width="190" height="44" rx="10" fill="#fee2e2" stroke="#be123c"/><text x="320" y="187" fill="#be123c">2.5 Plusieurs étapes</text>
<rect x="440" y="160" width="190" height="44" rx="10" fill="#e0f2fe" stroke="#0369a1"/><text x="535" y="187" fill="#0369a1">2.6 Transformer des formules</text>
</g>
<g stroke="#475569" stroke-width="1.8" fill="none" marker-end="url(#c2m)">
<path d="M200,42 L223,42"/><path d="M415,42 L438,42"/><path d="M105,64 L105,158"/><path d="M535,64 L330,158"/><path d="M200,182 L223,182"/><path d="M415,182 L438,182"/>
</g>
<g font-family="Arial" font-size="11" fill="#475569"><text x="112" y="112" text-anchor="start">équation = expression = expression</text><text x="452" y="104" text-anchor="middle">simplifier chaque membre d'abord</text><text x="419" y="174" text-anchor="middle">mêmes gestes</text></g>
</svg><div style="font-size:13px;color:#64748b;">Les expressions (rangée du haut) sont les briques de base; les équations (rangée du bas) en posent deux égales.</div></div>`;

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 2 — Algèbre",
    overview: String.raw`Cette page rassemble le chapitre avant l'évaluation : l'idée clé de chaque leçon sur un seul écran, les liens entre les leçons, des questions où tu dois choisir la méthode, des exemples variés à plusieurs étapes du niveau de l'évaluation, et une liste pour vérifier si tu es prêt. Fais-la après les leçons 2.1 à 2.6, et retourne à toute leçon où tu bloques.`,
    goals: [
      "te rappeler l'idée clé, un exemple typique et l'erreur la plus fréquente de chaque leçon;",
      "distinguer les expressions (simplifier) des équations (résoudre) et choisir la bonne méthode;",
      "résoudre des problèmes à plusieurs étapes qui combinent suites, polynômes, équations et formules;",
      "vérifier si tu es prêt pour l'évaluation du chapitre à l'aide de la liste d'autoévaluation.",
    ],
    curriculum: "C1.1–C1.5 (tout le chapitre)",
    prior: [
      [String.raw`Simplifie \(3x-(x-4)\).`, String.raw`\(2x+4\).`],
      [String.raw`Résous \(3x-(x-4)=10\).`, String.raw`\(2x+4=10\), donc \(x=3\).`],
      [String.raw`Quelle est la différence entre les deux questions ci-dessus?`, String.raw`La première est une expression (pas de \(=\)) : on la simplifie. La deuxième est une équation : on trouve \(x\).`],
    ],
    words: [
      ["Termes semblables", "mêmes variables, mêmes exposants", "\\(4ab^2\\), \\(-ab^2\\)"],
      ["Distributivité", "\\(a(b+c)=ab+ac\\)", "\\(-2(x-5)=-2x+10\\)"],
      ["Opérations inverses", "s'annulent l'une l'autre", "\\(\\times3\\leftrightarrow\\div3\\)"],
      ["PPCD", "élimine les fractions dans une équation", "\\(\\tfrac x2+\\tfrac x3=5\\to3x+2x=30\\)"],
      ["Variable isolée d'une formule", "la variable seule d'un côté", "\\(t\\) dans \\(t=\\tfrac dv\\)"],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Exemple typique", "Attention"], [
    ["2.1 Expressions", "mots → symboles; substituer entre parenthèses; règle d'une suite = (différence)\\(n\\) + départ", "\\(5,9,13,\\dots\\to4n+1\\)", "« \\(3\\) de moins que \\(x\\) » s'écrit \\(x-3\\)"],
    ["2.2 Expressions équivalentes", "regrouper les termes semblables; soustraire = additionner l'opposé", "\\((x^2-2x)-(3x^2+x)=-2x^2-3x\\)", "\\(x^2\\) et \\(x\\) ne sont pas des termes semblables"],
    ["2.3 Simplifier", "distribuer à chaque terme; additionner les exposants quand on multiplie; factoriser = l'inverse", "\\(-3x(x^2-4)=-3x^3+12x\\)", "\\(4(x+3)\\neq4x+3\\)"],
    ["2.4 Résoudre des équations", "annuler les opérations dans l'ordre inverse des deux côtés", "\\(\\tfrac{x}{3}-4=2\\to x=18\\)", "vérifier dans l'équation de départ"],
    ["2.5 Plusieurs étapes", "développer, éliminer les fractions, regrouper les termes en x, puis les constantes", "\\(2(x-1)=x+5\\to x=7\\)", "multiplier <em>chaque</em> terme par le PPCD"],
    ["2.6 Formules", "isoler n'importe quelle variable avec les mêmes gestes", "\\(A=\\tfrac12bh\\to h=\\tfrac{2A}{b}\\)", "diviser tout le membre"],
  ])),

  section("📌 Les liens entre les leçons", String.raw`${MAP}
  ${keyIdea(String.raw`La plupart des erreurs aux évaluations du chapitre 2 sont des <strong>erreurs de signe quand un nombre négatif multiplie une parenthèse</strong> et des <strong>oublis de multiplier chaque terme</strong> (par le facteur extérieur ou par le PPCD). Quand une réponse ne passe pas la vérification, regarde là en premier.`)}`),

  section("📌 Quelle méthode utiliser?", String.raw`<p>Les questions d'évaluation ne disent pas de quelle leçon elles viennent. Choisis la méthode avant de calculer.</p>`),

  practice([
    q("stratégie", String.raw`\(4(x-2)-3x\) — que dois-tu faire?`, choice(["la simplifier (c'est une expression)", "résoudre pour x", "isoler x dans une formule", "substituer x = 0"], 0),
      "Il n'y a pas de signe d'égalité.", [String.raw`C'est une expression : \(4x-8-3x=x-8\).`], String.raw`simplifier : \(x-8\)`),
    q("stratégie", String.raw`Pour résoudre \(\tfrac{x}{4}+\tfrac{x}{6}=5\), la meilleure première étape est de…`, choice(["multiplier chaque terme par 12", "additionner les dénominateurs", "multiplier seulement les fractions par 12", "diviser les deux côtés par 10"], 0),
      "Élimine les fractions à l'aide du PPCD.", [String.raw`\(3x+2x=60\), donc \(x=12\).`], String.raw`multiplier chaque terme par \(12\)`),
    q("stratégie", String.raw`Dans \(5x+2=2x-7\), quelle première étape garde le coefficient de \(x\) positif?`, choice(["soustraire 2x des deux côtés", "soustraire 5x des deux côtés", "diviser les deux côtés par 5", "ajouter 7 au membre de gauche seulement"], 0),
      "Enlève le plus petit terme en x.", [String.raw`\(3x+2=-7\Rightarrow3x=-9\Rightarrow x=-3\).`], String.raw`soustraire \(2x\) (puis \(x=-3\))`),
    q("stratégie", String.raw`Qu'est-ce qui montre que \((x+3)^2\) et \(x^2+9\) ne sont PAS équivalentes?`, choice(["pour x = 1, elles donnent 16 et 10", "pour x = 0, elles donnent 9 et 9", "les deux ont un terme en x²", "les deux sont des polynômes"], 0),
      "Un seul contre-exemple suffit.", [String.raw`Pour \(x=1\) : \(16\neq10\).`], "un contre-exemple pour x = 1"),
    q("stratégie", String.raw`Un tableur doit calculer la largeur \(w\) de nombreux rectangles à partir de \(A\) et de \(l\). Que dois-tu faire avec \(A=lw\)?`, choice(["transformer une seule fois : w = A/l", "résoudre une nouvelle équation pour chaque ligne", "développer A = lw", "factoriser A"], 0),
      "Transforme une fois, substitue plusieurs fois.", [String.raw`\(w=\tfrac{A}{l}\).`], String.raw`transformer : \(w=\tfrac{A}{l}\)`),
  ]),

  examples([
    ["Une suite rencontre une équation", String.raw`La figure \(n\) d'une suite a \(5n-3\) carrés. a) Combien de carrés y a-t-il dans la figure \(18\)? b) Quelle figure a \(122\) carrés?`,
      [String.raw`<b>Deux types de questions.</b> Si on connaît \(n\), on <i>évalue</i> l'expression \(5n-3\). Si on connaît le nombre de carrés, on <i>résout</i> l'équation \(5n-3=122\).`, String.raw`a) \(5(18)-3=87\).`, String.raw`b) \(5n-3=122\), donc \(5n=125\) et \(n=25\).`, String.raw`Vérification : \(5(25)-3=122\) ✓`, String.raw`<b>Vérification de bon sens :</b> chaque figure ajoute \(5\) carrés, et \(122\) dépasse \(87\) de \(35\), soit \(7\) figures de plus : \(18+7=25\) ✓`],
      String.raw`a) \(87\); b) la figure \(25\)`],
    ["Simplifier, puis évaluer", String.raw`Simplifie \(2x(3x-1)-(x^2-4x+5)\), puis évalue pour \(x=-2\). Vérifie avec l'expression de départ.`,
      [String.raw`<b>Plan.</b> Distribue \(2x\) dans la première parenthèse et \(-1\) dans la deuxième (chaque signe à l'intérieur change), puis regroupe les termes semblables.`, String.raw`Développe : \(6x^2-2x-x^2+4x-5\).`, String.raw`Regroupe : \(5x^2+2x-5\).`, String.raw`Pour \(x=-2\) : \(5(4)-4-5=11\).`, String.raw`Expression de départ pour \(x=-2\) : \(2(-2)(-7)-(4+8+5)=28-17=11\) ✓`],
      String.raw`\(5x^2+2x-5\); valeur \(11\)`],
    ["Des parenthèses des deux côtés", String.raw`Résous \(2(3x-4)-(x+1)=3(x-5)\).`,
      [String.raw`<b>Plan.</b> Développe (le \(-\) devant \((x+1)\) multiplie les deux termes), simplifie chaque membre, rassemble les termes en \(x\) d'un côté, puis divise.`, String.raw`Développe : \(6x-8-x-1=3x-15\).`, String.raw`Simplifie : \(5x-9=3x-15\).`, String.raw`\(2x=-6\), donc \(x=-3\).`, String.raw`Vérifie : \(2(-13)-(-2)=-24\) et \(3(-8)=-24\) ✓`],
      String.raw`\(x=-3\)`],
    ["Des fractions dans un problème écrit", String.raw`Le tiers d'un nombre, augmenté de \(4\), est égal aux trois quarts du nombre diminués de \(1\). Trouve le nombre.`,
      [String.raw`<b>Traduis.</b> « Le tiers d'un nombre » s'écrit \(\tfrac n3\); « augmenté de \(4\) » ajoute \(4\); « les trois quarts du nombre diminués de \(1\) » s'écrit \(\tfrac{3n}{4}-1\). Le PPCD de \(3\) et de \(4\) est \(12\).`, String.raw`\(\tfrac{n}{3}+4=\tfrac{3n}{4}-1\).`, String.raw`Multiplie chaque terme par \(12\) : \(4n+48=9n-12\).`, String.raw`\(60=5n\), donc \(n=12\).`, String.raw`Vérification : \(4+4=8\) et \(9-1=8\) ✓`],
      String.raw`\(12\)`],
    ["Transformer, puis utiliser", String.raw`Un triangle isocèle a deux côtés égaux \(s\) et une base \(b\) : \(P=2s+b\). Isole \(s\), puis trouve \(s\) lorsque \(P=50\) cm et \(b=14\) cm.`,
      [String.raw`<b>Plan.</b> \(s\) est doublé, puis on ajoute \(b\). Annule dans l'ordre inverse : soustrais \(b\), puis divise par \(2\).`, String.raw`\(P-b=2s\), donc \(s=\dfrac{P-b}{2}\).`, String.raw`\(s=\dfrac{50-14}{2}=18\) cm.`, String.raw`Vérification : \(2(18)+14=50\) ✓`],
      String.raw`\(s=\tfrac{P-b}{2}\); \(18\) cm`],
  ]),

  section("📌 Révision variée", String.raw`<p>Chaque question fait appel à au moins deux leçons. Simplifie ou résous, puis vérifie par substitution.</p>`),

  practice([
    q("soustraire des polynômes", String.raw`Simplifie \((4m^2-3m+2)-(m^2+5m-7)\).`, expr("3m^2-8m+9"),
      "Change chaque signe de la deuxième parenthèse.", [String.raw`\(4m^2-3m+2-m^2-5m+7\).`, String.raw`\(3m^2-8m+9\).`], String.raw`\(3m^2-8m+9\)`),
    q("développer et simplifier", String.raw`Simplifie \(-2a(a-3)+4(a^2-a)\).`, expr("2a^2+2a"),
      "Développe les deux parenthèses, puis regroupe.", [String.raw`\(-2a^2+6a+4a^2-4a\).`, String.raw`\(2a^2+2a\).`], String.raw`\(2a^2+2a\)`),
    q("plusieurs étapes", String.raw`Résous \(4(2y-1)=3y+21\).`, num(5),
      "Développe, puis regroupe les termes en y.", [String.raw`\(8y-4=3y+21\).`, String.raw`\(5y=25\), donc \(y=5\).`], String.raw`\(y=5\)`),
    q("fractions", String.raw`Résous \(\dfrac{n-3}{4}=\dfrac{n+1}{6}\).`, num(11),
      String.raw`Multiplie les deux côtés par \(12\); mets les numérateurs entre parenthèses.`, [String.raw`\(3(n-3)=2(n+1)\).`, String.raw`\(3n-9=2n+2\), donc \(n=11\).`, String.raw`Vérification : \(\tfrac84=2\) et \(\tfrac{12}{6}=2\) ✓`], String.raw`\(n=11\)`),
    q("formule", String.raw`Isole \(h\) dans \(V=lwh\).`, expr("V/(lw)", false),
      String.raw`\(h\) est multiplié par \(l\) et par \(w\).`, [String.raw`Divise les deux côtés par \(lw\).`], String.raw`\(h=\dfrac{V}{lw}\)`, { placeholder: "h = …" }),
  ]),

  section("📌 Suis-je prêt pour l'évaluation?", String.raw`<p>Coche chaque énoncé seulement si tu peux le faire <em>sans notes</em>. Le numéro de leçon t'indique où retourner.</p>
  <ul style="list-style:none;padding-left:0;">
    ${[
      ["2.1", "Je peux décrire comment la notation algébrique s'est développée, traduire des mots en expressions, les évaluer et trouver la règle d'une suite croissante."],
      ["2.2", "Je peux nommer un polynôme et trouver son degré, et additionner et soustraire des polynômes."],
      ["2.3", "Je peux multiplier des monômes, développer un monôme multiplié par un polynôme, simplifier plusieurs parenthèses et mettre en évidence le PGFC."],
      ["2.4", "Je peux résoudre des équations à une et à deux étapes, vérifier la solution, et résoudre à partir d'une relation linéaire ou d'un graphique."],
      ["2.5", "Je peux résoudre des équations avec des parenthèses, des variables des deux côtés et des fractions, et reconnaître l'absence de solution ou une infinité de solutions."],
      ["2.6", "Je peux isoler n'importe quelle variable dans une formule et l'utiliser."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  wrapUp({
    qas: [
      ["Comment étudier pour l'évaluation du chapitre?", "Fais la révision variée sans notes, repère tes erreurs et refais la pratique des leçons concernées. Essaie ensuite les problèmes les plus difficiles des fiches d'exercices (niveau 3) de tes deux leçons les plus faibles. La pratique variée est plus efficace que la relecture."],
      ["Quelles sont les erreurs les plus fréquentes de ce chapitre?", String.raw`Ne pas distribuer à chaque terme; perdre le signe quand un nombre négatif multiplie une parenthèse; regrouper des termes non semblables (\(x^2+x=x^3\)); multiplier seulement certains termes par le PPCD; et diviser un seul terme quand on transforme une formule.`],
      ["Comment savoir s'il faut simplifier ou résoudre?", String.raw`Cherche un signe d'égalité. Une expression (pas de \(=\)) peut seulement être simplifiée, développée, factorisée ou évaluée. Une équation peut être résolue.`],
      ["Comment vérifier mon travail sans le corrigé?", "Substitue : une expression simplifiée doit donner la même valeur que l'expression de départ pour un nombre-test; une solution doit rendre égaux les deux membres de l'équation de départ."],
      ["Je trouve les problèmes écrits difficiles. Qu'est-ce qui aide?", "Écris d'abord « Soit x … », puis traduis une phrase à la fois. Fais un diagramme ou un tableau (maintenant / plus tard, taux × temps). Après avoir résolu, vérifie que la réponse a du sens dans la situation."],
    ],
    summary: [
      "Expressions : écrire, évaluer, regrouper les termes semblables, distribuer, factoriser.",
      "Équations : développer, éliminer les fractions, regrouper, isoler — et vérifier dans l'équation de départ.",
      "Formules : les mêmes opérations inverses, avec des lettres.",
    ],
    next: "Fais l'évaluation du chapitre 2. Le chapitre 3 utilise ces habiletés algébriques pour écrire et lire du code.",
  }),
];
