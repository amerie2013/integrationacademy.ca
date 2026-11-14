// MTH1W-FR 2.4 — Créer et résoudre des équations (miroir de ../mth1w-ch2/l2_4.mjs) : opérations inverses, modèle de la balance,
// raisonnement à rebours, équations tirées de mots et de relations linéaires / graphiques
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num } from "./lib.mjs";
import { balance, flow, lineGraph } from "../mth1w-ch2/figs.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "2.4 Créer et résoudre des équations";
export const ID = lessonId(2, 4);

export const blocks = () => [
  intro({
    icon: "⚖️",
    title: "Créer et résoudre des équations",
    overview: String.raw`Une <strong>équation</strong> affirme que deux expressions sont égales. La <strong>résoudre</strong>, c'est trouver toutes les valeurs de la variable qui la rendent vraie. Dans cette leçon, tu vérifieras des solutions, tu résoudras des équations à une et à deux étapes à l'aide des <strong>opérations inverses</strong> et du <strong>modèle de la balance</strong>, tu remonteras une chaîne d'opérations à rebours, et tu transformeras des problèmes écrits et des relations linéaires en équations. Tu verras aussi que résoudre une équation revient à lire un point sur un graphique.`,
    goals: [
      "distinguer une équation d'une expression, et vérifier si une valeur est une solution;",
      "résoudre des équations à une et à deux étapes avec des coefficients entiers, fractionnaires et décimaux à l'aide des opérations inverses;",
      "expliquer chaque étape avec le modèle de la balance : faire la même chose des deux côtés;",
      "écrire et résoudre une équation pour un problème écrit ou une relation linéaire, et donner la réponse en contexte;",
      "estimer une solution à partir d'un graphique et la confirmer par l'algèbre.",
    ],
    curriculum: "C1.5 (créer et résoudre des équations), lien avec C3 (relations linéaires); B3 (opérations sur les nombres rationnels)",
    prior: [
      [String.raw`Évalue \(5x-8\) pour \(x=-2\).`, String.raw`\(-18\).`],
      [String.raw`Quelle opération annule « multiplier par \(4\) »?`, String.raw`Diviser par \(4\).`],
      [String.raw`Simplifie \(\tfrac34\times\tfrac43\).`, String.raw`\(1\) — ce sont des inverses.`],
    ],
    words: [
      ["Équation", "un énoncé qui affirme que deux expressions sont égales", "\\(3x-5=16\\)"],
      ["Solution (racine)", "une valeur qui rend l'équation vraie", "\\(x=7\\)"],
      ["Opération inverse", "l'opération qui en annule une autre", "\\(+\\leftrightarrow-\\), \\(\\times\\leftrightarrow\\div\\)"],
      ["Isoler", "laisser la variable seule d'un côté", "\\(x=\\dots\\)"],
      ["Vérifier", "substituer la solution dans l'équation de départ", "\\(3(7)-5=16\\) ✓"],
      ["Équations équivalentes", "des équations qui ont la même solution", "\\(3x=21\\) et \\(x=7\\)"],
    ],
  }),

  section("📌 Expressions, équations et solutions", String.raw`
  <p>\(3x-5\) est une <strong>expression</strong> — elle n'a pas de signe d'égalité; on peut la simplifier ou l'évaluer, mais pas la résoudre. \(3x-5=16\) est une <strong>équation</strong> : elle est vraie pour une valeur de \(x\) et fausse pour les autres.</p>
  ${table(["Essai x =", "Membre de gauche 3x − 5", "Membre de droite", "Vrai?"], [["\\(5\\)", "\\(10\\)", "\\(16\\)", "non"], ["\\(6\\)", "\\(13\\)", "\\(16\\)", "non"], ["\\(7\\)", "\\(16\\)", "\\(16\\)", "<strong>oui</strong>"]])}
  <p>La méthode essais et erreurs fonctionne, mais elle est lente et échoue pour des réponses comme \(x=-\tfrac{13}{4}\). Les opérations inverses trouvent la solution directement.</p>`),

  section("📌 Le modèle de la balance et les opérations inverses", String.raw`
  ${balance("3x − 5", "16", "Une équation est une balance. Faire la même chose des deux côtés la garde en équilibre.")}
  <p>Pour construire \(3x-5\) à partir de \(x\), on <em>multiplie par \(3\)</em>, puis on <em>soustrait \(5\)</em>. Pour revenir à \(x\), on annule ces opérations <strong>dans l'ordre inverse</strong> :</p>
  ${flow("x", ["× 3", "− 5"], "16", "Vers l'avant (en haut) et à rebours (en bas) : annule d'abord la dernière opération.", ["16", "+ 5", "÷ 3", "x = 7"])}
  <p>\[\begin{aligned}3x-5&=16\\3x-5+5&=16+5&&\text{ajoute 5 des deux côtés}\\3x&=21\\ \tfrac{3x}{3}&=\tfrac{21}{3}&&\text{divise les deux côtés par 3}\\x&=7\end{aligned}\]</p>
  <p><strong>Vérifie :</strong> \(3(7)-5=21-5=16\) ✓. Chaque ligne est une <em>équation équivalente</em> — elle a la même solution que la précédente.</p>
  ${keyIdea(String.raw`Pour isoler la variable : annule d'abord l'addition ou la soustraction, puis la multiplication ou la division (l'inverse de la priorité des opérations). Tout ce que tu fais d'un côté, fais-le de l'autre.`)}
  <p>Essaie-le dans l'explorateur. Choisis une quantité et une opération, applique-la aux deux côtés et observe les plateaux. Passe à <em>Tester une valeur</em> pour voir la balance pencher quand une supposition est fausse.</p>`),

  widget("balanceSolver", { left: { x: 4, k: 7 }, right: { x: 0, k: -13 } }),

  section("📌 Fractions et nombres décimaux", String.raw`
  <ul>
    <li>\(\tfrac{n}{6}=-4\) : annule « diviser par \(6\) » en multipliant par \(6\) : \(n=-24\).</li>
    <li>\(\tfrac{2}{5}w=8\) : multiplie les deux côtés par l'<strong>inverse</strong> \(\tfrac52\) : \(w=8\times\tfrac52=20\).</li>
    <li>\(1.5p+0.8=5.3\) : soustrais \(0.8\) : \(1.5p=4.5\); divise par \(1.5\) : \(p=3\). (Ou multiplie d'abord chaque terme par \(10\) : \(15p+8=53\).)</li>
  </ul>
  ${watchOut([
    String.raw`<strong>Annule dans l'ordre inverse.</strong> Dans \(4x+7=-13\), soustrais \(7\) <em>avant</em> de diviser par \(4\).`,
    String.raw`<strong>Garde le signe avec le terme.</strong> Dans \(9-2x=15\), le coefficient est \(-2\) : \(-2x=6\), donc \(x=-3\) (pas \(3\)).`,
    String.raw`<strong>Divise tout le membre.</strong> À partir de \(5x=-35\), \(x=-7\) : divise <em>les deux</em> côtés par \(5\), en gardant le signe.`,
    String.raw`<strong>Vérifie toujours dans l'équation de départ</strong>, pas dans une ligne plus loin où une erreur peut déjà s'être glissée.`,
  ])}`),

  section("📌 Des équations à partir de mots et de relations linéaires", String.raw`
  <p><strong>Les mots.</strong> Nomme l'inconnue avec une lettre (« soit \(n\) le nombre… »), écris l'équation, résous-la et réponds par une phrase avec les unités.</p>
  <p><strong>Les relations linéaires.</strong> Une relation comme \(C=12+0.35d\) (une location d'auto : \(12\) dollars plus \(0.35\) dollar par km) donne une équation dès qu'une variable est connue :</p>
  <ul><li>Coût pour \(80\) km : substitue \(d=80\) : \(C=12+28=40\) dollars (pas besoin de résoudre).</li>
  <li>Distance pour une facture de \(54\) dollars : \(54=12+0.35d\), donc \(0.35d=42\) et \(d=120\) km.</li></ul>
  <p>Sur le graphique de la relation, la deuxième question revient à « aller horizontalement de \(54\) jusqu'à la droite, puis descendre ». L'explorateur le montre pour une pile de téléphone qui commence à \(100\%\) et baisse de \(8\%\) par heure : \(100-8t=c\).</p>`),

  widget("equationGraph", { m: -8, b: 100, cInit: 20, xMax: 14, yMax: 100, xLabel: "temps (h)", yLabel: "pile (%)", xStep: 2, yStep: 20 }),

  examples([
    ["Est-ce une solution?", String.raw`Est-ce que \(x=-3\) est une solution de \(4-2x=3x+19\)?`,
      [String.raw`<b>Définition.</b> Une valeur est une solution si elle rend le membre de gauche et le membre de droite égaux. Substitue-la dans chaque membre séparément.`, String.raw`Gauche : \(4-2(-3)=4+6=10\).`, String.raw`Droite : \(3(-3)+19=-9+19=10\).`, String.raw`Les deux membres valent \(10\).`],
      String.raw`oui, \(x=-3\) est une solution`],
    ["Équation à deux étapes", String.raw`Résous \(7x+9=-26\) et vérifie.`,
      [String.raw`<b>Règle.</b> Faire la même opération des deux côtés garde une équation en équilibre. Annule les opérations sur \(x\) dans l'ordre inverse : d'abord le \(+9\), puis le \(\times7\).`, String.raw`Soustrais \(9\) des deux côtés : \(7x=-35\).`, String.raw`Divise les deux côtés par \(7\) : \(x=-5\).`, String.raw`Vérifie : \(7(-5)+9=-35+9=-26\) ✓`],
      String.raw`\(x=-5\)`,
      balance("7x + 9", "−26", "Enlève 9 des deux plateaux, puis partage chaque côté en 7 groupes égaux.")],
    ["Un coefficient fractionnaire", String.raw`Résous \(\tfrac{2m}{3}+5=-7\).`,
      [String.raw`<b>Règle.</b> Annule dans l'ordre inverse : d'abord \(+5\), puis \(\times\tfrac23\). Multiplier par l'inverse annule un coefficient fractionnaire, car \(\tfrac32\times\tfrac23=1\).`, String.raw`Soustrais \(5\) : \(\tfrac{2m}{3}=-12\).`, String.raw`Multiplie les deux côtés par \(\tfrac32\) (l'inverse de \(\tfrac23\)) : \(m=-12\times\tfrac32=-18\).`, String.raw`Vérifie : \(\tfrac{2(-18)}{3}+5=-12+5=-7\) ✓`],
      String.raw`\(m=-18\)`],
    ["Raisonner à rebours", String.raw`Ana pense à un nombre, le multiplie par \(4\), soustrait \(7\), puis divise par \(3\). Le résultat est \(11\). Quel était son nombre?`,
      [String.raw`<b>Méthode.</b> Écris les étapes sous forme d'équation, puis annule chaque opération par son inverse (\(\div\leftrightarrow\times\), \(-\leftrightarrow+\)) dans l'ordre inverse.`, String.raw`Soit \(n\) le nombre : \(\dfrac{4n-7}{3}=11\).`, String.raw`Annule dans l'ordre inverse : \(\times3\) : \(4n-7=33\); \(+7\) : \(4n=40\); \(\div4\) : \(n=10\).`, String.raw`Vérifie vers l'avant : \(10\to40\to33\to11\) ✓`],
      String.raw`le nombre d'Ana était \(10\)`,
      flow("n", ["× 4", "− 7", "÷ 3"], "11", "Vers l'avant, puis à rebours : chaque étape est annulée dans l'ordre inverse.", ["11", "× 3", "+ 7", "÷ 4", "n = 10"])],
    ["Une relation linéaire et son graphique", String.raw`Un taxi demande \(3.75\) dollars plus \(1.80\) dollar par kilomètre : \(C=3.75+1.8d\). a) Utilise le graphique pour estimer la distance que tu peux parcourir pour \(30.75\) dollars. b) Résous l'équation de façon exacte.`,
      [String.raw`<b>Modèle.</b> \(C=3.75+1.8d\) : le \(3.75\) est le tarif fixe de départ (l'ordonnée à l'origine), et \(1.8\) est le coût par km (la pente). Résoudre \(C=30.75\), c'est trouver \(d\) sur la droite à cette hauteur.`, String.raw`a) Va horizontalement de \(C\approx31\) jusqu'à la droite, puis descends : environ \(15\) km.`, String.raw`b) \(3.75+1.8d=30.75\), donc \(1.8d=27\).`, String.raw`\(d=27\div1.8=15\). Vérifie : \(3.75+1.8(15)=3.75+27=30.75\) ✓`, String.raw`<b>Compare :</b> l'estimation graphique (environ \(15\)) correspond à la solution exacte; les deux sont donc raisonnables ✓`],
      String.raw`\(15\) km`,
      lineGraph({ m: 1.8, b: 3.75, c: 30.75, xMax: 20, yMax: 40, xStep: 2, yStep: 5, xLabel: "distance d (km)", yLabel: "coût C (dollars)" }, "C = 3.75 + 1.8d avec le coût visé de 30.75 dollars (pointillé).")],
  ]),

  practice([
    q("deux étapes", String.raw`Résous \(-6y+13=49\).`, num(-6),
      String.raw`Soustrais d'abord \(13\), puis divise par \(-6\).`, [String.raw`\(-6y=36\).`, String.raw`\(y=36\div(-6)=-6\).`, String.raw`Vérifie : \(-6(-6)+13=36+13=49\) ✓`], String.raw`\(y=-6\)`),
    q("fraction", String.raw`Résous \(\tfrac{x}{5}+8=3\).`, num(-25),
      String.raw`Soustrais \(8\), puis multiplie par \(5\).`, [String.raw`\(\tfrac{x}{5}=-5\).`, String.raw`\(x=-25\).`], String.raw`\(x=-25\)`),
    q("nombres décimaux", String.raw`Résous \(0.4t-1.7=2.3\).`, num(10),
      String.raw`Ajoute \(1.7\) des deux côtés, puis divise par \(0.4\).`, [String.raw`\(0.4t=4\).`, String.raw`\(t=4\div0.4=10\).`], String.raw`\(t=10\)`),
    q("mots", String.raw`Cinq de moins que le triple d'un nombre donne \(31\). Trouve le nombre.`, num(12),
      String.raw`Écris \(3n-5=31\).`, [String.raw`\(3n-5=31\).`, String.raw`\(3n=36\), donc \(n=12\).`, String.raw`Vérifie : \(3(12)-5=31\) ✓`], String.raw`\(12\)`),
    q("relation linéaire", String.raw`La facture d'un plombier est de \(C=65+45h\) dollars pour \(h\) heures. Une facture s'élevait à \(290\) dollars. Combien d'heures le plombier a-t-il travaillé?`, num(5),
      String.raw`Pose \(65+45h=290\) et résous.`, [String.raw`\(45h=225\).`, String.raw`\(h=5\).`], String.raw`\(5\) heures`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi dois-je annuler les opérations dans l'ordre inverse?", String.raw`Pense aux chaussettes, puis aux chaussures : pour te déchausser, tu enlèves d'abord les chaussures. Dans \(3x-5\), le \(\times3\) a été fait en premier et le \(-5\) en dernier, donc on annule le \(-5\) en premier.`],
      ["Pourquoi dois-je faire la même chose des deux côtés?", "Le signe d'égalité dit que les deux côtés sont en équilibre. Si tu ajoutes 5 d'un seul côté, la balance penche et la nouvelle équation a une autre solution."],
      [String.raw`Comment traiter \(\tfrac23x\)?`, String.raw`Multiplie les deux côtés par l'inverse \(\tfrac32\). Cela transforme \(\tfrac23x\) en \(1x\) en une seule étape — comme diviser par \(\tfrac23\).`],
      ["Suffit-il de vérifier ma réponse dans ma dernière ligne?", "Non. Vérifie dans l'équation de départ. Si tu as fait une erreur dans une étape précoce, toutes les lignes suivantes en héritent, et une vérification à cet endroit semblera correcte."],
      ["À quoi sert un graphique si l'algèbre donne la réponse exacte?", "Un graphique montre toute la relation d'un coup, donne une estimation rapide et repère les réponses impossibles (par exemple, un temps négatif). Utilise-le pour vérifier l'algèbre."],
    ],
    summary: [
      "Une équation est une balance : fais la même opération des deux côtés.",
      "Annule les opérations dans l'ordre inverse : d'abord + et −, puis × et ÷ (utilise l'inverse pour un coefficient fractionnaire).",
      "Définis la variable, écris l'équation, résous-la, vérifie dans l'équation de départ, réponds par une phrase avec les unités.",
      "Résoudre une équation tirée d'une relation linéaire, c'est aller horizontalement jusqu'à la droite puis descendre sur son graphique.",
    ],
    next: "La leçon 2.5 résout des équations à plusieurs étapes : parenthèses, variables des deux côtés et fractions.",
  }),
];
