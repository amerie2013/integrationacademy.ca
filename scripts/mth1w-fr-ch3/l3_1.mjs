// MTH1W-FR 3.1 — Coder des concepts algébriques (format autonome, Python)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, watchOut, table, q, num, txt, choice, py, ic, out, shell } from "./lib.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "3.1 Coder des concepts algébriques";
export const ID = lessonId(3, 1);

const E1 = `prix = 24
taxe = prix * 0.13
total = prix + taxe
print(total)`;
const E2 = `x = 5
x = x + 3
x = x * 2
print(x)`;
const E3 = `print(2 + 3 * 4 ** 2)
print((2 + 3) * 4 ** 2)
print(17 // 5, 17 % 5)`;
const E4 = `def perimetre(l, w):
    return 2 * l + 2 * w

print(perimetre(7, 4))
print(perimetre(2.5, 10))`;
const E5 = `for x in range(-2, 6):
    if 3 * x - 4 > 5:
        print(x, "convient")`;

const W1 = `longueur = 8
largeur = 3
aire = longueur * largeur
print("aire =", aire)
largeur = largeur + 2
aire = longueur * largeur
print("nouvelle aire =", aire)`;
const W2 = `def f(x):
    return 2 * x ** 2 - 3 * x + 1

for x in range(-2, 4):
    print(x, f(x))

# Quelles valeurs de x rendent f(x) plus petit que 10 ?
for x in range(-2, 4):
    if f(x) < 10:
        print(x, "vérifie l'inéquation")`;

const P3 = `a = 7
b = 2
c = a // b + a % b
print(c)`;
const P4 = `def cout(n):
    return 45 + 12.5 * n

print(cout(8))`;
const P5 = `compteur = 0
for x in range(0, 20):
    if 4 * x + 3 <= 31:
        compteur = compteur + 1
print(compteur)`;

export const blocks = () => [
  intro({
    icon: "💻",
    title: "Coder des concepts algébriques",
    overview: String.raw`Les programmes et l'algèbre utilisent les mêmes idées : des <strong>variables</strong> qui contiennent des nombres, des <strong>expressions</strong> construites avec des opérations, des <strong>formules</strong> avec des entrées, et des <strong>équations et inéquations</strong> qui sont vraies ou fausses. Dans cette leçon, tu vas écrire et lire de courts programmes en <strong>Python</strong> (le langage utilisé dans la plupart des écoles de l'Ontario) et les exécuter directement dans la page. Tu verras qu'une fonction en code est une formule avec des <strong>paramètres</strong>, et qu'un ordinateur peut tester des milliers de valeurs de \(x\) dans une inéquation en une fraction de seconde.`,
    goals: [
      String.raw`utiliser des variables et l'affectation, et expliquer pourquoi ${ic("x = x + 3")} a du sens en code, mais pas en algèbre;`,
      String.raw`écrire des expressions avec ${ic("+ - * / // % **")} et prédire leur valeur à l'aide de la priorité des opérations;`,
      "écrire une fonction avec des paramètres pour représenter une formule, et l'utiliser pour construire une table de valeurs;",
      String.raw`utiliser ${ic("==")}, ${ic("<")}, ${ic(">")}, ${ic("<=")}, ${ic(">=")} pour vérifier si une valeur est une solution d'une équation ou d'une inéquation;`,
      "utiliser une boucle pour trouver tous les nombres entiers d'un intervalle qui vérifient une inéquation.",
    ],
    curriculum: "C2.1 (variables, paramètres, équations et inéquations en code)",
    prior: [
      [String.raw`Évalue \(3x^2-2x\) lorsque \(x=4\).`, String.raw`\(48-8=40\).`],
      [String.raw`\(x=2\) est-il une solution de \(5x-3=7\)?`, String.raw`Oui : \(10-3=7\).`],
      [String.raw`Quels nombres entiers de \(0\) à \(5\) vérifient \(2x+1>6\)?`, String.raw`\(3, 4, 5\) (\(2x>5\) signifie \(x>2.5\)).`],
    ],
    words: [
      ["Variable (code)", "un espace de stockage nommé qui contient une valeur; elle peut changer pendant l'exécution du programme", ic("total = 0")],
      ["Affectation", "ranger la valeur du membre de droite dans la variable de gauche", ic("x = x + 3")],
      ["Expression", "un calcul qui produit une valeur", ic("2 * x ** 2 - 3")],
      ["Fonction", "un bloc de code nommé qui reçoit des entrées et renvoie une sortie", ic("def f(x):")],
      ["Paramètre", "le nom d'une entrée dans la définition d'une fonction", "<code>l</code>, <code>w</code> dans <code>perimetre(l, w)</code>"],
      ["Booléen", "la valeur True (vrai) ou False (faux), produite par une comparaison", ic("3 * 4 - 5 == 7")],
    ],
  }),

  section("📌 Variables et affectation", String.raw`
  <p>En Python, ${ic("=")} signifie <strong>« ranger »</strong>, et non « égale ». L'ordinateur calcule d'abord le membre de droite, puis place le résultat dans la variable de gauche.</p>
  ${table(["Ligne", "Ce qui se passe", "x ensuite"], [
    [ic("x = 5"), "ranger 5 dans x", "5"],
    [ic("x = x + 3"), "calculer 5 + 3 = 8, le ranger dans x", "8"],
    [ic("x = x * 2"), "calculer 8 × 2 = 16, le ranger dans x", "16"],
  ])}
  <p>En algèbre, \(x=x+3\) n'a pas de solution. En code, c'est une instruction normale : « augmente \(x\) de \(3\) ». Python a aussi un raccourci : ${ic("x += 3")}.</p>
  ${keyIdea(String.raw`Une variable en code contient <strong>une seule valeur à la fois</strong>. Une variable en algèbre représente une inconnue ou chaque valeur d'un domaine. Les deux sont des noms pour des nombres, et les deux nous permettent d'écrire des règles générales.`)}
  <p>Exécute le programme ci-dessous une étape à la fois et observe la boîte <em>Variables</em>. Ensuite, appuie sur <em>Modifier le code</em> et change la largeur.</p>`),

  widget("codeTracer", { code: W1, title: "Les variables changent pendant l'exécution du programme", task: "Prédis les deux aires affichées avant d'appuyer sur Exécuter. Ensuite, remplace <code>largeur + 2</code> par <code>largeur * 2</code> et prédis de nouveau." }),

  section("📌 Les opérateurs et la priorité des opérations", String.raw`
  ${table(["Python", "Math", "Exemple", "Résultat"], [
    [ic("+  -  *"), "\\(+\\ \\ -\\ \\ \\times\\)", ic("6 * 7"), out("print(6 * 7)")],
    [ic("/"), "\\(\\div\\) (donne toujours un nombre décimal)", ic("7 / 2"), out("print(7 / 2)")],
    [ic("//"), "quotient entier", ic("17 // 5"), out("print(17 // 5)")],
    [ic("%"), "reste", ic("17 % 5"), out("print(17 % 5)")],
    [ic("**"), "puissance, \\(a^b\\)", ic("2 ** 5"), out("print(2 ** 5)")],
  ])}
  <p>Python utilise le même ordre que PEDMAS : les parenthèses, puis ${ic("**")}, puis ${ic("* / // %")} de gauche à droite, puis ${ic("+ -")} de gauche à droite.</p>
  ${watchOut([
    String.raw`Écris chaque multiplication : \(3x\) s'écrit ${ic("3 * x")}, et non ${ic("3x")}.`,
    String.raw`${ic("^")} n'est <strong>pas</strong> une puissance en Python; utilise ${ic("**")} : \(x^2\) s'écrit ${ic("x ** 2")}.`,
    String.raw`${ic("-3 ** 2")} vaut \(-9\), exactement comme \(-3^2\) en math. Écris ${ic("(-3) ** 2")} pour obtenir \(9\).`,
    String.raw`Une barre de fraction regroupe : \(\dfrac{a+b}{2}\) doit s'écrire ${ic("(a + b) / 2")}.`,
  ])}`),

  section("📌 Les formules comme fonctions avec paramètres", String.raw`
  <p>Une <strong>fonction</strong> emballe une formule. Les noms entre parenthèses sont les <strong>paramètres</strong>; les nombres que tu donnes quand tu <em>appelles</em> la fonction sont les <strong>arguments</strong>.</p>
  ${py(`def aire(l, w):      # l et w sont des paramètres
    return l * w

print(aire(8, 3))    # 8 et 3 sont des arguments`)}
  ${shell(out(`def aire(l, w):\n    return l * w\nprint(aire(8, 3))`))}
  <p>Appeler une fonction à l'intérieur d'une boucle construit une <strong>table de valeurs</strong> — exactement comme substituer \(x=-2,-1,0,1,\dots\) à la main.</p>`),

  section("📌 Équations et inéquations en code", String.raw`
  <p>Une comparaison donne un <strong>booléen</strong> : ${ic("True")} (vrai) ou ${ic("False")} (faux). Remarque le double signe égal ${ic("==")} — il <em>demande</em> si deux valeurs sont égales (un seul ${ic("=")} range une valeur).</p>
  ${py(`print(3 * 4 - 5 == 7)     # x = 4 est-il une solution de 3x - 5 = 7 ?
print(3 * 4 - 5 > 9)      # x = 4 vérifie-t-il 3x - 5 > 9 ?`)}
  ${shell(out(`print(3 * 4 - 5 == 7)\nprint(3 * 4 - 5 > 9)`))}
  ${table(["Math", "\\(=\\)", "\\(\\ne\\)", "\\(<\\)", "\\(\\le\\)", "\\(>\\)", "\\(\\ge\\)"], [["Python", ic("=="), ic("!="), ic("<"), ic("<="), ic(">"), ic(">=")]])}
  <p>Avec une boucle et un ${ic("if")}, l'ordinateur peut tester chaque nombre entier d'un intervalle. L'explorateur ci-dessous construit une table de valeurs de \(f(x)=2x^2-3x+1\), puis donne la liste des valeurs de \(x\) qui vérifient \(f(x)<10\).</p>`),

  widget("codeTracer", { code: W2, title: "Une fonction, une table de valeurs et une inéquation", task: String.raw`Change l'inéquation pour <code>f(x) &gt;= 3</code> et prédis la nouvelle liste. Ensuite, élargis l'intervalle à <code>range(-5, 6)</code>.` }),

  examples([
    ["Des variables dans une formule", String.raw`Qu'affiche ce programme?${py(E1)}`,
      [String.raw`<b>Comment Python exécute un programme.</b> Les lignes s'exécutent de haut en bas. Dans \(\texttt{nom = expression}\), le membre de droite est d'abord calculé avec les valeurs actuelles, puis rangé dans le nom de gauche.`, String.raw`${ic("taxe")} \(=24\times0.13=3.12\).`, String.raw`${ic("total")} \(=24+3.12=27.12\).`, "L'ordinateur affiche la valeur de total.", String.raw`<b>Vérification avec les maths :</b> ajouter une taxe de \(13\%\) revient à multiplier par \(1.13\), et \(24\times1.13=27.12\) ✓`],
      String.raw`${ic(out(E1))}`],
    ["La réaffectation", String.raw`Trace le programme et donne la valeur finale de ${ic("x")}.${py(E2)}`,
      [String.raw`<b>Règle.</b> Une variable contient une seule valeur à la fois. \(\texttt{x = x + 3}\) signifie « prends la valeur actuelle de \(x\), ajoute \(3\) et range le résultat de nouveau dans \(x\) » — c'est une instruction, pas une équation.`, String.raw`Ligne 1 : \(x=5\).`, String.raw`Ligne 2 : \(5+3=8\), donc \(x=8\).`, String.raw`Ligne 3 : \(8\times2=16\), donc \(x=16\).`, String.raw`<b>Vérification :</b> les deux changements ensemble donnent \((5+3)\times2=16\) ✓`],
      String.raw`${ic(out(E2))}`],
    ["La priorité des opérations", String.raw`Prédis les trois lignes affichées.${py(E3)}`,
      [String.raw`<b>L'ordre de Python.</b> \(\texttt{**}\) (les puissances) d'abord, puis \(\texttt{*}\), \(\texttt{/}\), \(\texttt{//}\), \(\texttt{\%}\), puis \(\texttt{+}\) et \(\texttt{-}\) — comme PEDMAS. \(\texttt{a // b}\) est le quotient entier et \(\texttt{a \% b}\) le reste.`, String.raw`\(4^2=16\), \(3\times16=48\), \(2+48=50\).`, String.raw`Les parenthèses d'abord : \(5\times16=80\).`, String.raw`\(17=5\times3+2\) : ${ic("17 // 5")} vaut \(3\) et ${ic("17 % 5")} vaut \(2\).`, String.raw`<b>Vérification de la ligne de division :</b> \(5\times3+2=17\) ✓`],
      String.raw`${shell(out(E3))}`],
    ["Une fonction avec des paramètres", String.raw`Qu'affiche ce programme?${py(E4)}`,
      [String.raw`<b>Règle.</b> Quand une fonction est appelée, chaque argument est copié dans son paramètre, dans l'ordre (\(l\) d'abord, puis \(w\)), et le corps calcule la formule \(P=2l+2w\) avec ces valeurs.`, String.raw`${ic("perimetre(7, 4)")} : \(l=7\), \(w=4\), \(2(7)+2(4)=22\).`, String.raw`${ic("perimetre(2.5, 10)")} : \(5+20=25\). Comme \(2.5\) est un nombre décimal, Python affiche un nombre décimal.`, String.raw`<b>Vérification :</b> un rectangle de \(2.5\) sur \(10\) a des côtés \(2.5+10+2.5+10=25\) ✓`],
      String.raw`${shell(out(E4))}`],
    ["Une inéquation par recherche", String.raw`Quelles valeurs ce programme affiche-t-il? Vérifie avec l'algèbre.${py(E5)}`,
      [String.raw`<b>Deux méthodes, même réponse.</b> L'ordinateur teste chaque nombre entier de l'intervalle; l'algèbre résout l'inéquation en effectuant la même opération des deux côtés.`, String.raw`Le programme teste \(x=-2,-1,\dots,5\) (un range s'arrête <em>avant</em> sa valeur de fin).`, String.raw`Algèbre : \(3x-4>5\Rightarrow3x>9\Rightarrow x>3\).`, String.raw`Donc seulement \(4\) et \(5\) sont affichés.`, String.raw`<b>Vérification de la borne :</b> \(x=3\) donne \(3(3)-4=5\), et \(5>5\) est faux, donc \(3\) n'est pas affiché, avec raison ✓`],
      String.raw`${shell(out(E5))}`],
  ]),

  practice([
    q("affectation", String.raw`Qu'est-ce qui est affiché?${py(`n = 10\nn = n - 4\nn = n * n\nprint(n)`)}`, num(Number(out(`n = 10\nn = n - 4\nn = n * n\nprint(n)`))),
      "Procède ligne par ligne; chaque ligne utilise la valeur rangée par la ligne précédente.", [String.raw`\(n=10\), puis \(10-4=6\), puis \(6\times6=36\).`], String.raw`\(${out(`n = 10\nn = n - 4\nn = n * n\nprint(n)`)}\)`),
    q("syntaxe Python", String.raw`Quelle ligne calcule correctement \(y=3x^2-5\) en Python?`, choice([ic("y = 3 * x ** 2 - 5"), ic("y = 3x^2 - 5"), ic("y = 3 * x ^ 2 - 5"), ic("y = (3 * x) ** 2 - 5")], 0),
      String.raw`La multiplication doit être écrite, et l'opérateur de puissance est ${ic("**")}.`, [String.raw`${ic("^")} n'est pas une puissance en Python; ${ic("(3 * x) ** 2")} élève \(3x\) au carré, ce qui donne \(9x^2\).`], ic("y = 3 * x ** 2 - 5")),
    q("// et %", String.raw`Qu'est-ce qui est affiché?${py(P3)}`, num(Number(out(P3))),
      String.raw`${ic("//")} est le quotient entier et ${ic("%")} le reste.`, [String.raw`\(7=2\times3+1\) : quotient \(3\), reste \(1\).`, String.raw`\(3+1=4\).`], String.raw`\(${out(P3)}\)`),
    q("fonction", String.raw`La location d'un vélo coûte \(45\) $ plus \(12.50\) $ l'heure. Qu'affiche ce programme?${py(P4)}`, num(Number(out(P4))),
      String.raw`Substitue \(n=8\) dans \(45+12.5n\).`, [String.raw`\(45+12.5(8)=45+100=145\). Python l'affiche comme un nombre décimal parce que \(12.5\) est un nombre décimal.`], String.raw`${ic(out(P4))}`),
    q("inéquation", String.raw`Combien de nombres entiers ce programme compte-t-il?${py(P5)}`, num(Number(out(P5))),
      String.raw`Résous \(4x+3\le31\), puis compte les nombres entiers de \(0\) jusqu'à la réponse.`, [String.raw`\(4x\le28\Rightarrow x\le7\).`, String.raw`Les entiers \(0,1,\dots,7\) : il y en a huit.`], String.raw`\(${out(P5)}\)`),
  ]),

  wrapUp({
    qas: [
      [String.raw`Pourquoi ${ic("x = x + 1")} est-il permis en code?`, String.raw`Parce que ${ic("=")} signifie « ranger ». L'ordinateur calcule \(x+1\) avec l'ancienne valeur de \(x\), puis range la réponse de nouveau dans \(x\). En algèbre, \(x=x+1\) serait un énoncé faux.`],
      [String.raw`Quelle est la différence entre ${ic("=")} et ${ic("==")}?`, String.raw`${ic("=")} range une valeur dans une variable. ${ic("==")} compare deux valeurs et donne ${ic("True")} ou ${ic("False")} — c'est celui qu'on utilise pour vérifier une solution d'une équation.`],
      [String.raw`Pourquoi ${ic("print(7 / 2)")} a-t-il affiché ${ic("3.5")}, alors que ${ic("print(4 / 2)")} affiche ${ic("2.0")}?`, String.raw`En Python, ${ic("/")} produit toujours un nombre décimal (un « float »). Utilise ${ic("//")} quand tu veux seulement la partie entière.`],
      ["Quelle est la différence entre un paramètre et un argument?", String.raw`Un paramètre est le nom dans la définition (${ic("l")} dans ${ic("def aire(l, w)")}); un argument est la valeur réelle que tu donnes quand tu appelles la fonction (${ic("8")} dans ${ic("aire(8, 3)")}). C'est comme une formule et les nombres que tu y substitues.`],
      ["Chercher avec une boucle, est-ce aussi bon que résoudre une inéquation avec l'algèbre?", String.raw`Une boucle vérifie seulement les valeurs que tu lui donnes (souvent les entiers d'un intervalle), donc elle peut manquer des nombres décimaux ou des valeurs hors de l'intervalle. L'algèbre donne la réponse complète (\(x>3\)). Le code est excellent pour vérifier l'algèbre et pour les problèmes difficiles à résoudre à la main.`],
    ],
    summary: [
      String.raw`${ic("=")} range; ${ic("==")} compare. ${ic("x = x + 3")} met à jour une variable.`,
      String.raw`Opérateurs : ${ic("+ - * / // % **")}; Python suit PEDMAS. Écris toujours ${ic("*")}; les puissances utilisent ${ic("**")}.`,
      "Une fonction est une formule avec des paramètres; l'appeler dans une boucle construit une table de valeurs.",
      "Les comparaisons donnent True/False; une boucle avec un if vérifie quelles valeurs satisfont une équation ou une inéquation.",
    ],
    next: "La leçon 3.2 décompose des problèmes plus grands en étapes et utilise des boucles et des décisions pour les résoudre.",
  }),
];
