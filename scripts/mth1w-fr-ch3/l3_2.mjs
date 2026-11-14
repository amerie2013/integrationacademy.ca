// MTH1W-FR 3.2 — Construire du code à partir d'étapes (format autonome, Python)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, txt, choice, py, ic, out, shell } from "./lib.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "3.2 Construire du code à partir d'étapes";
export const ID = lessonId(3, 2);

const FLOW = String.raw`<div style="text-align:center;margin:12px 0;"><svg viewBox="0 0 520 300" width="520" style="max-width:100%;height:auto;" role="img" aria-label="Organigramme d'une boucle d'épargne"><g font-family="Arial" font-size="13" text-anchor="middle">
<rect x="200" y="8" width="120" height="34" rx="17" fill="#ede9fe" stroke="#6d28d9"/><text x="260" y="30" fill="#6d28d9" font-weight="700">Début</text>
<rect x="160" y="62" width="200" height="36" rx="4" fill="#dbeafe" stroke="#1e40af"/><text x="260" y="85" fill="#1e40af">epargne = 250, semaines = 0</text>
<polygon points="260,118 360,152 260,186 160,152" fill="#fef3c7" stroke="#b45309"/><text x="260" y="156" fill="#b45309" font-weight="700">epargne &lt; 1000 ?</text>
<rect x="380" y="134" width="130" height="36" rx="4" fill="#dbeafe" stroke="#1e40af"/><text x="445" y="150" fill="#1e40af">epargne += 40</text><text x="445" y="164" fill="#1e40af">semaines += 1</text>
<rect x="190" y="208" width="140" height="34" rx="4" fill="#dcfce7" stroke="#15803d"/><text x="260" y="230" fill="#15803d">print(semaines)</text>
<rect x="200" y="258" width="120" height="34" rx="17" fill="#ede9fe" stroke="#6d28d9"/><text x="260" y="280" fill="#6d28d9" font-weight="700">Fin</text>
</g><g stroke="#475569" stroke-width="1.8" fill="none"><path d="M260,42 V60"/><path d="M260,98 V116"/><path d="M360,152 H378"/><path d="M445,134 V108 H275 V116"/><path d="M260,186 V206"/><path d="M260,242 V256"/></g>
<g font-family="Arial" font-size="12" fill="#475569"><text x="368" y="146">oui</text><text x="268" y="200">non</text></g></svg>
<div style="font-size:13px;color:#64748b;">Un organigramme : le losange est une décision; la flèche qui remonte crée une boucle.</div></div>`;

const W1 = `epargne = 250
semaines = 0
while epargne < 1000:
    epargne = epargne + 40
    semaines = semaines + 1
print("semaines :", semaines)
print("épargne :", epargne)`;
const W2 = `# Résoudre 7x - 12 = 5x + 30 en testant des nombres entiers
for x in range(-50, 51):
    if 7 * x - 12 == 5 * x + 30:
        print("solution :", x)`;

const E1 = `for c in range(-10, 31, 10):
    f = 1.8 * c + 32
    print(c, f)`;
const E2 = `def frais(h):
    if h <= 2:
        return 5
    else:
        return 5 + 3 * (h - 2)

print(frais(1))
print(frais(5))`;
const E3 = `total = 0
for k in range(1, 100, 2):
    total = total + k
print(total)`;
const E4 = `valeur = 32000
annees = 0
while valeur > 16000:
    valeur = valeur * 0.85
    annees = annees + 1
print(annees)`;
const E5 = `compteur = 0
for n in range(1, 101):
    if n % 3 == 0 or n % 5 == 0:
        compteur = compteur + 1
print(compteur)`;

const P1 = `for i in range(3, 15, 4):
    print(i)`;
const P2 = `compteur = 0
for n in range(1, 101):
    if n % 6 == 0:
        compteur = compteur + 1
print(compteur)`;
const P3 = `n = 1
while n < 500:
    n = n * 3
print(n)`;
const P4 = `note = 68
if note >= 80:
    print("A")
elif note >= 70:
    print("B")
elif note >= 60:
    print("C")
else:
    print("D")`;

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Construire du code à partir d'étapes",
    overview: String.raw`Les programmeurs résolvent les problèmes comme les mathématiciens : ils <strong>décomposent</strong> un problème en petites étapes, puis placent les étapes dans le bon ordre. Chaque programme est construit à partir de trois structures — la <strong>séquence</strong> (une étape après l'autre), la <strong>sélection</strong> (des décisions avec ${ic("if")}) et la <strong>répétition</strong> (les boucles). Dans cette leçon, tu vas planifier des programmes avec des mots et des organigrammes, utiliser des boucles ${ic("for")} et ${ic("while")}, tenir des totaux cumulatifs et des compteurs, modéliser des situations comme l'épargne et la dépréciation, et laisser l'ordinateur chercher la solution d'une équation.`,
    goals: [
      "décomposer un problème en étapes d'entrée, de traitement et de sortie, et tracer un organigramme;",
      String.raw`utiliser ${ic("if")} / ${ic("elif")} / ${ic("else")} pour modéliser une règle qui change (une règle définie par parties);`,
      String.raw`utiliser des boucles ${ic("for")} avec ${ic("range(debut, fin, pas)")} et des boucles ${ic("while")} qui se répètent jusqu'à ce qu'une condition devienne fausse;`,
      "utiliser un accumulateur (total cumulatif) et un compteur;",
      "écrire du code qui modélise une situation et répond à une question comme « combien de semaines avant que… ? » ou « quel nombre entier résout… ? ».",
    ],
    curriculum: "C2.2 (décomposer des situations en étapes de calcul; créer du code pour résoudre des problèmes)",
    prior: [
      [String.raw`Que fait ${ic("x = x + 2")}?`, "Elle augmente de 2 la valeur rangée dans x."],
      [String.raw`Quels nombres entiers de 1 à 20 sont des multiples de 6?`, String.raw`\(6, 12, 18\).`],
      [String.raw`Une voiture perd \(15\%\) de sa valeur chaque année. Par quoi multiplies-tu chaque année?`, String.raw`\(0.85\).`],
    ],
    words: [
      ["Algorithme", "une liste ordonnée d'étapes qui résout un problème", "une recette; la division longue"],
      ["Décomposer", "diviser un problème en parties plus petites", "entrée → traitement → sortie"],
      ["Sélection", "choisir entre des chemins à l'aide d'une condition", ic("if note >= 50:")],
      ["Boucle", "répéter un bloc de code", ic("for i in range(10):")],
      ["Accumulateur", "une variable qui tient un total cumulatif", ic("total = total + k")],
      ["Compteur", "une variable qui compte combien de fois quelque chose se produit", ic("compteur = compteur + 1")],
    ],
  }),

  section("📌 Décomposer, puis planifier", String.raw`
  <p><strong>Problème.</strong> Mia a \(250\) $ et épargne \(40\) $ par semaine. Combien de semaines lui faut-il pour avoir au moins \(1000\) $?</p>
  ${table(["Étape", "En mots", "En code"], [
    ["Entrée", "montant de départ, épargne hebdomadaire, objectif", `${ic("epargne = 250")}, ${ic("semaines = 0")}`],
    ["Traitement", "tant que l'objectif n'est pas atteint, ajouter l'épargne d'une semaine", `${ic("while epargne < 1000:")}`],
    ["Sortie", "le nombre de semaines", ic("print(semaines)")],
  ])}
  ${FLOW}
  ${keyIdea(String.raw`Chaque programme est construit à partir de la <strong>séquence</strong>, de la <strong>sélection</strong> et de la <strong>répétition</strong>. Planifie d'abord avec des mots ou un organigramme; ensuite, chaque case devient une ou deux lignes de code.`)}`),

  widget("codeTracer", { code: W1, title: "Une boucle while : épargner jusqu'à un objectif", task: "Prédis d'abord le nombre de semaines avec l'algèbre : \\(250+40w\\ge1000\\). Ensuite, change le montant hebdomadaire pour 55 et l'objectif pour 1500." }),

  section("📌 Les boucles : for et while", String.raw`
  ${table(["Boucle", "Utilise-la quand…", "Exemple"], [
    [ic("for i in range(a, b):"), "tu sais combien de fois répéter", `${ic("range(1, 6)")} donne 1, 2, 3, 4, 5 (s'arrête <em>avant</em> 6)`],
    [ic("for i in range(a, b, pas):"), "tu veux compter par bonds (ou à rebours)", `${ic("range(10, 0, -2)")} donne 10, 8, 6, 4, 2`],
    [ic("while condition:"), "tu répètes <em>jusqu'à ce que</em> quelque chose se produise", ic("while epargne < 1000:")],
  ])}
  ${watchOut([
    String.raw`${ic("range(1, 10)")} s'arrête à 9. Pour inclure 10, écris ${ic("range(1, 11)")}.`,
    String.raw`Une boucle ${ic("while")} doit changer la variable de sa condition, sinon elle ne s'arrête jamais (une <em>boucle infinie</em>).`,
    String.raw`L'indentation compte en Python : ce sont les lignes indentées qui se répètent.`,
  ])}`),

  section("📌 La sélection : des règles qui changent", String.raw`
  <p>Beaucoup de règles réelles sont <strong>définies par parties</strong> : le stationnement coûte \(5\) $ pour un maximum de \(2\) heures, puis \(3\) $ pour chaque heure supplémentaire. Un ${ic("if")} / ${ic("else")} choisit la bonne formule :</p>
  ${py(E2)}
  <p>Python vérifie les conditions à partir du haut et exécute <strong>seulement la première</strong> branche dont la condition est vraie. ${ic("elif")} signifie « sinon si ».</p>`),

  section("📌 Laisser l'ordinateur chercher", String.raw`
  <p>Une boucle peut tester chaque nombre entier d'un intervalle — une version rapide de la méthode essais et erreurs. C'est utile pour vérifier une solution algébrique ou pour des équations difficiles à résoudre à la main.</p>`),

  widget("codeTracer", { code: W2, title: "Résoudre une équation par recherche", task: "Résous \\(7x-12=5x+30\\) avec l'algèbre et compare. Ensuite, change l'équation pour \\(3x+8=11x-40\\). Que se passe-t-il si la solution n'est pas un nombre entier, par exemple \\(2x=7\\)?" }),

  examples([
    ["Une table de conversion", String.raw`Qu'affiche ce programme?${py(E1)}`,
      [String.raw`<b>Comment fonctionne une boucle for.</b> \(\texttt{range(debut, fin, pas)}\) commence à debut, ajoute pas à chaque fois et s'arrête <i>avant</i> fin. Le corps de la boucle s'exécute une fois pour chaque valeur.`, String.raw`${ic("range(-10, 31, 10)")} donne \(-10, 0, 10, 20, 30\).`, String.raw`Pour chacune, \(F=1.8C+32\) : \(14, 32, 50, 68, 86\). Python les affiche comme des nombres décimaux parce que \(1.8\) est un nombre décimal.`, String.raw`<b>Vérifie une ligne à la main :</b> \(C=20\) : \(1.8(20)+32=36+32=68\) ✓`],
      shell(out(E1))],
    ["Une règle définie par parties", String.raw`Prédis les deux sorties du programme de stationnement ci-dessus.`,
      [String.raw`<b>Comment fonctionne if/else.</b> La condition est testée; si elle est vraie, la première branche s'exécute, sinon c'est la branche else. Une seule branche s'exécute à chaque appel.`, String.raw`${ic("frais(1)")} : \(1\le2\), donc la première branche renvoie \(5\).`, String.raw`${ic("frais(5)")} : \(5>2\), donc \(5+3(5-2)=14\).`, String.raw`<b>Sens :</b> \(5\) $ couvrent les \(2\) premières heures, et chaque heure suivante coûte \(3\) $ : \(5-2=3\) heures supplémentaires coûtent \(9\) $ ✓`],
      shell(out(E2))],
    ["Un accumulateur", String.raw`Qu'affiche ce programme? Que calcule-t-il?${py(E3)}`,
      [String.raw`<b>Le modèle de l'accumulateur.</b> On commence avec \(\texttt{total = 0}\); chaque passage ajoute la valeur actuelle, donc après la boucle \(\texttt{total}\) contient la somme.`, String.raw`${ic("range(1, 100, 2)")} donne les nombres impairs \(1, 3, 5,\dots,99\) — il y en a cinquante.`, String.raw`${ic("total")} les additionne : \(1+3+5+\dots+99\).`, String.raw`La somme des \(n\) premiers nombres impairs est \(n^2\) : \(50^2=2500\).`, String.raw`<b>Pourquoi \(n^2\) :</b> \(1=1^2\), \(1+3=4=2^2\), \(1+3+5=9=3^2\) — chaque nombre impair ajoute une nouvelle couche en forme de L à un carré ✓`],
      ic(out(E3))],
    ["La dépréciation avec une boucle while", String.raw`Une voiture de \(32\,000\) $ perd \(15\%\) de sa valeur chaque année. Combien d'années faut-il pour qu'elle vaille \(16\,000\) $ ou moins?${py(E4)}`,
      [String.raw`<b>Comment fonctionne une boucle while.</b> Le corps se répète tant que la condition est vraie. Perdre \(15\%\) laisse \(85\%\), donc chaque passage multiplie la valeur par \(0.85\) et ajoute \(1\) au compteur d'années.`, String.raw`Chaque passage multiplie par \(0.85\) : \(27\,200,\ 23\,120,\ 19\,652,\ 16\,704.20,\ 14\,198.57\).`, String.raw`Après \(4\) ans, elle vaut encore plus de \(16\,000\) $; après \(5\) ans, elle vaut moins, donc la boucle s'arrête.`, String.raw`<b>Vérification :</b> \(32\,000\times0.85^5\approx14\,198.57\le16\,000\), mais \(32\,000\times0.85^4=16\,704.20>16\,000\) ✓`],
      String.raw`${ic(out(E4))} ans`],
    ["Un compteur avec deux conditions", String.raw`Combien de nombres de \(1\) à \(100\) sont des multiples de \(3\) ou de \(5\)?${py(E5)}`,
      [String.raw`<b>Logique.</b> « \(3\) ou \(5\) » est vrai si l'une ou l'autre condition est vraie. Compter les deux listes séparément compte deux fois les multiples des deux (les multiples de \(15\)), donc on les soustrait une fois.`, String.raw`Multiples de \(3\) : \(33\). Multiples de \(5\) : \(20\). Les deux (multiples de \(15\)) : \(6\).`, String.raw`\(33+20-6=47\) — le compteur est d'accord.`, String.raw`<b>D'où viennent ces nombres :</b> \(100=3\times33+1\), \(100=5\times20\), \(100=15\times6+10\).`],
      ic(out(E5))],
  ]),

  practice([
    q("range", String.raw`Combien de nombres ce programme affiche-t-il?${py(P1)}`, num(out(P1).split("\n").length),
      String.raw`Commence à \(3\) et ajoute \(4\) tant que tu restes sous \(15\).`, [String.raw`\(3, 7, 11\); le suivant serait \(15\), mais le range s'arrête avant \(15\).`], String.raw`\(${out(P1).split("\n").length}\)`),
    q("compteur", String.raw`Qu'affiche ce programme?${py(P2)}`, num(Number(out(P2))),
      String.raw`${ic("n % 6 == 0")} est vrai pour les multiples de \(6\).`, [String.raw`\(6, 12, \dots, 96\) : \(96\div6=16\) nombres.`], String.raw`\(${out(P2)}\)`),
    q("while", String.raw`Qu'affiche ce programme?${py(P3)}`, num(Number(out(P3))),
      "Continue de tripler jusqu'à ce que la valeur soit 500 ou plus.", [String.raw`\(1\to3\to9\to27\to81\to243\to729\). \(729\ge500\), donc la boucle s'arrête.`], String.raw`\(${out(P3)}\)`),
    q("sélection", String.raw`Qu'affiche ce programme?${py(P4)}`, txt(out(P4)),
      "Seule la première condition vraie s'exécute.", [String.raw`\(68\ge80\)? Non. \(68\ge70\)? Non. \(68\ge60\)? Oui.`], ic(out(P4)), { placeholder: "le texte affiché" }),
    q("range", "Quelle boucle affiche 10, 8, 6, 4, 2?", choice([ic("for i in range(10, 0, -2):"), ic("for i in range(10, 2, -2):"), ic("for i in range(2, 10, 2):"), ic("for i in range(10, 1, 2):")], 0),
      "Compte à rebours par bonds de 2 et arrête-toi avant 0.", [String.raw`${ic("range(10, 2, -2)")} s'arrête avant \(2\); ${ic("range(10, 1, 2)")} est vide.`], ic("range(10, 0, -2)")),
  ]),

  wrapUp({
    qas: [
      [String.raw`Quand dois-je utiliser ${ic("for")} et quand utiliser ${ic("while")}?`, String.raw`Utilise ${ic("for")} quand tu sais combien de fois répéter (ou quand tu as une liste de valeurs). Utilise ${ic("while")} quand tu répètes jusqu'à ce que quelque chose se produise, comme atteindre un objectif, et que tu ne sais pas d'avance combien de passages il faudra.`],
      [String.raw`Pourquoi ${ic("range(1, 10)")} s'arrête-t-il à 9?`, String.raw`Les ranges de Python incluent le début mais excluent la fin. ${ic("range(1, 10)")} contient exactement \(10-1=9\) valeurs. Une fois qu'on y est habitué, cette règle « s'arrêter avant » évite beaucoup d'erreurs de décalage de un.`],
      ["Qu'est-ce qu'un accumulateur?", String.raw`Une variable qui commence à \(0\) (ou à \(1\) pour les produits) et qui est mise à jour à chaque passage d'une boucle : ${ic("total = total + k")}. Après la boucle, elle contient le total.`],
      ["Une boucle de recherche peut-elle manquer la réponse?", String.raw`Oui : elle teste seulement les valeurs de son intervalle, habituellement des nombres entiers. Si la solution est \(3.5\) ou se trouve hors de l'intervalle, la boucle n'affiche rien. L'algèbre te dit où chercher; la boucle confirme.`],
      ["Pourquoi planifier avec un organigramme?", "Il sépare la réflexion (quelles étapes, dans quel ordre, quelles décisions) de la saisie du code. Chaque case devient une ou deux lignes de code, et les erreurs dans le plan sont plus faciles à repérer avant d'écrire le programme."],
    ],
    summary: [
      "Décomposer : entrée → traitement → sortie; planifier avec des mots ou un organigramme.",
      String.raw`La séquence, la sélection (${ic("if/elif/else")}) et la répétition (${ic("for")}, ${ic("while")}) construisent chaque programme.`,
      String.raw`${ic("range(a, b, pas)")} s'arrête avant \(b\). Les accumulateurs additionnent; les compteurs comptent.`,
      "Les boucles peuvent modéliser la croissance et la décroissance et chercher des solutions — mais seulement parmi les valeurs que tu testes.",
    ],
    next: "La leçon 3.3 lit du code écrit par quelqu'un d'autre : tracer, trouver des erreurs et modifier des programmes pour modéliser de nouvelles situations.",
  }),
];
