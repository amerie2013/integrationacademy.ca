// MTH1W-FR 3.3 — Lire, prédire et modifier du code (format autonome, Python)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, txt, choice, py, ic, out, err, shell } from "./lib.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "3.3 Lire, prédire et modifier du code";
export const ID = lessonId(3, 3);

const TRACE = `a = 3
b = 5
for i in range(3):
    a = a + b
    b = a - b
print(a, b)`;
const BUGGY = `# Objectif : additionner les nombres entiers de 1 à 10 (réponse 55)
total = 0
for k in range(1, 10):
    total = total + k
print("total", total)`;
const MODEL = `# Une voiture achetée 28000 $ perd 18 % de sa valeur chaque année.
valeur = 28000
taux = 0.18
annee = 0
while valeur >= 10000:
    valeur = valeur * (1 - taux)
    annee = annee + 1
print("sous 10000 après", annee, "ans :", round(valeur, 2))`;

const E1 = `x = 1
y = 1
for i in range(5):
    z = x + y
    x = y
    y = z
print(y)`;
const E2 = `for n in range(1, 8):
    if n % 3 == 0:
        print("fizz")
    else:
        print(n)`;
const E3bad = `n = 4
if n > 3
    print("grand")`;
const E4 = `compteur = 0
for x in range(1, 20):
    if 2 * x + 5 > 20:
        compteur = compteur + 1
print(compteur)`;
const E5 = `solde = 500
semaines = 0
while solde < 2000:
    solde = solde + 75
    semaines = semaines + 1
print(semaines)`;
const E5alt = E5.replace("75", "120");

const P1 = `x = 2
for i in range(4):
    x = x * 2 - 1
print(x)`;
const P2 = `total = 0
for k in range(1, 6):
    if k % 2 == 1:
        total = total + k * k
print(total)`;
const P4a = `n = 1
while 4 * n + 1 <= 100:
    n = n + 1
print(n)`;
const P4b = P4a.replace("4 * n + 1", "3 * n + 2");

export const blocks = () => [
  intro({
    icon: "🔎",
    title: "Lire, prédire et modifier du code",
    overview: String.raw`La plus grande partie de la programmation consiste à lire du code — le tien, écrit la semaine dernière, ou celui de quelqu'un d'autre — et à le modifier. Dans cette leçon, tu vas <strong>tracer</strong> des programmes à l'aide d'une table de traçage, <strong>prédire</strong> leur sortie avant de les exécuter, trouver et corriger les trois types d'<strong>erreurs</strong> (de syntaxe, d'exécution et de logique), et <strong>modifier</strong> les paramètres et les conditions d'un programme pour qu'il modélise une nouvelle situation. Ce sont les habiletés que tu utiliseras chaque fois que tu rencontreras du code dans tes cours futurs, en laboratoire de sciences et dans les tableurs.`,
    goals: [
      "tracer un programme ligne par ligne avec une table de traçage et prédire sa sortie;",
      "expliquer ce qu'une boucle ou une condition fait aux variables;",
      "reconnaître les erreurs de syntaxe, les erreurs d'exécution et les erreurs de logique, et les corriger;",
      "trouver et corriger les erreurs de décalage de un dans les ranges;",
      "modifier des paramètres, des contraintes et des conditions pour que le code modélise une situation semblable ou nouvelle, et prédire l'effet.",
    ],
    curriculum: "C2.3 (lire du code pour prédire des résultats; modifier du code pour ajuster des contraintes, des paramètres et des résultats)",
    prior: [
      [String.raw`Que produit ${ic("range(2, 8, 2)")}?`, String.raw`\(2, 4, 6\).`],
      [String.raw`Après ${ic("a = 3")}, ${ic("a = a * a")}, que vaut ${ic("a")}?`, String.raw`\(9\).`],
      [String.raw`Une valeur perd \(18\%\) chaque année. Quel est le multiplicateur annuel?`, String.raw`\(0.82\).`],
    ],
    words: [
      ["Tracer", "suivre un programme ligne par ligne en notant chaque variable", "une table de traçage"],
      ["Table de traçage", "un tableau avec une colonne par variable et une ligne par étape", ""],
      ["Erreur de syntaxe", "le code ne respecte pas la grammaire de Python, donc il ne peut pas s'exécuter", "deux-points manquant"],
      ["Erreur d'exécution", "le code démarre, mais plante sur une ligne", ic("ZeroDivisionError")],
      ["Erreur de logique", "le code s'exécute, mais donne une mauvaise réponse", ic("range(1, 10)") + " au lieu de " + ic("range(1, 11)")],
      ["Erreur de décalage de un", "une boucle s'exécute une fois de trop ou une fois de moins", ""],
    ],
  }),

  section("📌 Tracer avec une table de traçage", String.raw`
  <p>Pour prédire la sortie, fais un tableau : une colonne par variable, une ligne chaque fois qu'une variable change. Voici le traçage de ce programme :</p>
  ${py(TRACE)}
  ${table(["après", "i", "a", "b"], [["départ", "—", "3", "5"], ["passage 1", "0", "8", "3"], ["passage 2", "1", "11", "8"], ["passage 3", "2", "19", "11"]])}
  ${shell(out(TRACE))}
  ${keyIdea(String.raw`À l'intérieur d'une boucle, chaque ligne utilise les valeurs <strong>à ce moment-là</strong>. Au passage 1, ${ic("b = a - b")} utilise la <em>nouvelle</em> valeur \(a=8\) : \(8-5=3\).`)}`),

  section("📌 Trois types d'erreurs", String.raw`
  ${table(["Type", "Quand tu le remarques", "Exemple", "Python dit"], [
    ["Syntaxe", "avant que quoi que ce soit s'exécute", "deux-points manquant après if", ic(err(E3bad).message)],
    ["Exécution", "le programme plante en cours de route", ic("print(10 / (5 - 5))"), ic(err("print(10 / (5 - 5))").message)],
    ["Logique", "jamais — la sortie est simplement fausse", "additionner de 1 à 9 au lieu de 1 à 10", "rien!"],
  ])}
  ${watchOut([
    String.raw`Les erreurs de logique sont les plus difficiles : compare toujours la sortie à une estimation rapide ou à un calcul à la main.`,
    String.raw`Décalage de un : ${ic("range(1, n)")} s'arrête à \(n-1\).`,
    String.raw`Utiliser une variable avant de lui avoir affecté une valeur donne une ${ic("NameError")}; vérifie l'orthographe — ${ic("Total")} et ${ic("total")} sont des noms différents.`,
  ])}
  <p>Le programme ci-dessous contient une erreur de logique. Exécute-le, compare avec l'objectif, puis appuie sur <em>Modifier le code</em> et corrige-le.</p>`),

  widget("codeTracer", { code: BUGGY, title: "Trouve et corrige l'erreur de logique", task: "La sortie devrait être 55. Trouve l'erreur et corrige-la avec un seul changement. Ensuite, modifie le programme pour additionner les nombres pairs de 2 à 100." }),

  section("📌 Modifier du code pour modéliser une nouvelle situation", String.raw`
  <p>Les bons programmes gardent les nombres qui décrivent une situation — les <strong>paramètres</strong> — dans des variables aux noms clairs. Pour modéliser une autre voiture ou un autre taux de dépréciation, change seulement ces lignes. Pour poser une autre question, change la <strong>condition</strong>.</p>`),

  widget("codeTracer", { code: MODEL, title: "Modifie un modèle de dépréciation", task: String.raw`(1) Prédis, puis exécute. (2) Change le taux pour 0.12 — est-ce que cela prend plus ou moins de temps? (3) Fais en sorte que le modèle montre l'<em>appréciation</em> d'un objet de collection qui vaut 5000 $ et qui prend 7 % de valeur par année, jusqu'à ce qu'il vaille 10000 $.` }),

  examples([
    ["Une table de traçage à trois variables", String.raw`Trace le programme et donne la sortie.${py(E1)}`,
      [String.raw`<b>La méthode de la table de traçage.</b> Fais une colonne par variable et une ligne par passage; chaque ligne utilise les valeurs <i>juste avant</i> son exécution.`, String.raw`À chaque passage : \(z=x+y\), puis on décale : \(x\) prend l'ancienne valeur de \(y\), et \(y\) prend \(z\).`, String.raw`\(y\) prend les valeurs \(2, 3, 5, 8, 13\) au cours des cinq passages (les nombres de Fibonacci).`, String.raw`<b>Vérifie la régularité :</b> chaque nouvelle valeur de \(y\) est la somme des deux précédentes : \(2+3=5\), \(3+5=8\), \(5+8=13\) ✓`],
      ic(out(E1))],
    ["Prédire la sortie avec une condition", String.raw`Prédis chaque ligne de la sortie.${py(E2)}`,
      [String.raw`<b>Règle.</b> \(\texttt{n \% 3 == 0}\) est vrai exactement quand \(3\) divise \(n\) avec un reste de \(0\).`, String.raw`\(n\) va de \(1\) à \(7\).`, String.raw`Les multiples de \(3\) (\(3\) et \(6\)) affichent ${ic("fizz")}; les autres affichent le nombre.`, String.raw`<b>Vérification :</b> \(7\) lignes en tout; \(2\) disent fizz et \(5\) montrent des nombres ✓`],
      shell(out(E2))],
    ["Trouver une erreur de syntaxe", String.raw`Pourquoi ce programme ne s'exécute-t-il pas, et comment le corriger?${py(E3bad)}`,
      [String.raw`<b>Syntaxe ou logique.</b> Une erreur de syntaxe ne respecte pas les règles de grammaire de Python, donc le programme ne s'exécute pas du tout; Python indique la ligne où il s'est perdu.`, String.raw`Python signale : ${ic(err(E3bad).message)} à la ligne ${err(E3bad).line}.`, String.raw`Chaque ligne ${ic("if")}, ${ic("for")}, ${ic("while")} et ${ic("def")} doit se terminer par un deux-points : ${ic("if n > 3:")}`],
      String.raw`ajoute le deux-points; le programme affiche alors ${ic(out(E3bad.replace("n > 3", "n > 3:")))}`],
    ["Lire une inéquation dans du code", String.raw`Qu'affiche le programme, et quelle inéquation représente-t-il?${py(E4)}`,
      [String.raw`<b>Résous l'inéquation.</b> \(2x+5>20\Rightarrow2x>15\Rightarrow x>7.5\). La boucle teste seulement des nombres entiers, donc le plus petit qui convient est \(8\).`, String.raw`Il compte les nombres entiers \(x\) de \(1\) à \(19\) tels que \(2x+5>20\), c'est-à-dire \(x>7.5\).`, String.raw`Ce sont \(8, 9, \dots, 19\) : \(12\) valeurs.`, String.raw`<b>Compte :</b> les nombres entiers de \(8\) à \(19\) : \(19-8+1=12\) ✓`],
      ic(out(E4))],
    ["Modifier un paramètre", String.raw`Le programme trouve combien de semaines il faut pour faire passer \(500\) $ à \(2000\) $ en épargnant \(75\) $ par semaine. Prédis la sortie, puis prédis-la de nouveau si \(75\) est remplacé par \(120\).${py(E5)}`,
      [String.raw`<b>Modèle.</b> l'épargne après \(w\) semaines \(=500+75w\). La boucle s'arrête à la première semaine complète où l'épargne est \(\ge2000\) : résous \(75w\ge1500\).`, String.raw`\(500+75w\ge2000\) donne \(w\ge20\) : sortie \(${out(E5)}\).`, String.raw`Avec \(120\) : \(120w\ge1500\), \(w\ge12.5\), donc \(13\) semaines (une boucle compte des semaines complètes).`, String.raw`<b>Vérification avec \(120\) :</b> après \(12\) semaines, \(500+1440=1940<2000\); après \(13\), \(500+1560=2060\) ✓`],
      String.raw`\(${out(E5)}\) semaines, puis \(${out(E5alt)}\) semaines`],
  ]),

  practice([
    q("traçage", String.raw`Qu'affiche ce programme?${py(P1)}`, num(Number(out(P1))),
      "Fais une table de traçage pour x sur quatre passages.", [String.raw`\(2\to3\to5\to9\to17\) (à chaque passage : doubler, puis soustraire 1).`], String.raw`\(${out(P1)}\)`),
    q("prédire", String.raw`Qu'affiche ce programme?${py(P2)}`, num(Number(out(P2))),
      String.raw`Seules les valeurs impaires de \(k\) sont utilisées, et chacune ajoute \(k^2\).`, [String.raw`\(k=1,3,5\) : \(1+9+25=35\).`], String.raw`\(${out(P2)}\)`),
    q("erreurs", String.raw`Quel type d'erreur ce programme contient-il?${py(`print(note)\nnote = 90`)}`, choice(["une erreur d'exécution (NameError)", "une erreur de syntaxe", "une erreur de logique", "aucune erreur"], 0),
      "Une valeur est-elle affectée à note avant qu'on l'utilise?", [String.raw`La ligne 1 utilise ${ic("note")} avant que la ligne 2 la crée : ${ic(err(`print(note)\nnote = 90`).message)}.`], "une erreur d'exécution (NameError)"),
    q("modifier", String.raw`Ce programme affiche le premier numéro de figure \(n\) dont la figure a plus de \(100\) tuiles, lorsque la figure \(n\) a \(4n+1\) tuiles.${py(P4a)}Si la régularité devient \(3n+2\) tuiles, qu'est-ce qui est affiché?`, num(Number(out(P4b))),
      String.raw`Trouve le premier \(n\) tel que \(3n+2>100\).`, [String.raw`\(3n>98\), \(n>32.7\), donc \(n=33\) (\(3(33)+2=101\)).`], String.raw`\(${out(P4b)}\)`),
    q("décalage de un", String.raw`Combien de nombres ${ic("for i in range(0, 10, 2): print(i)")} affiche-t-il?`, num(out(`for i in range(0, 10, 2):\n    print(i)`).split("\n").length),
      "Fais-en la liste; le range s'arrête avant 10.", [String.raw`\(0, 2, 4, 6, 8\).`], String.raw`\(5\)`),
  ]),

  wrapUp({
    qas: [
      ["Pourquoi tracer à la main si l'ordinateur peut exécuter le code?", "Le traçage te montre pourquoi la sortie est ce qu'elle est. C'est ainsi que tu trouves les erreurs de logique et que tu vérifies un programme avant de lui faire confiance, et c'est exactement ce que les tests te demandent de faire sans ordinateur."],
      ["Comment trouver une erreur de logique?", "Prédis la réponse d'une autre façon (algèbre, estimation, petit cas à la main), puis trace le programme avec une petite entrée et compare ligne par ligne. La première ligne où les deux ne concordent pas indique l'erreur."],
      ["Qu'est-ce qui rend du code facile à modifier?", String.raw`Des noms de variables clairs et des paramètres placés au début (${ic("taux = 0.18")}), plutôt que des nombres enfouis dans les formules. Une nouvelle situation demande alors de changer une seule ligne.`],
      [String.raw`Que m'apprend un message d'erreur comme ${ic("line 2: NameError")}?`, String.raw`La ligne où Python a remarqué le problème et le type de problème. La vraie cause se trouve parfois sur une ligne précédente (par exemple, un nom de variable mal orthographié).`],
      ["Changer un paramètre, est-ce la même chose que changer une contrainte?", String.raw`Les paramètres sont les nombres qui décrivent la situation (valeur de départ, taux). Les contraintes sont les conditions qui contrôlent le code (la condition d'arrêt de la boucle, les bornes du range, un test ${ic("if")}). Modifier l'un ou l'autre change le résultat.`],
    ],
    summary: [
      "Trace avec un tableau : une colonne par variable, une ligne par changement.",
      "Les erreurs de syntaxe empêchent le programme de démarrer; les erreurs d'exécution le font planter; les erreurs de logique donnent de mauvaises réponses sans avertissement.",
      String.raw`Méfie-toi des erreurs de décalage de un avec ${ic("range")}.`,
      "Modifie les paramètres et les conditions pour modéliser de nouvelles situations, et prédis l'effet avant d'exécuter.",
    ],
    next: "La leçon 3.4 révise tout le chapitre avec des problèmes variés.",
  }),
];
