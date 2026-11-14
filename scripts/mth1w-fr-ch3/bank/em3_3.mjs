// 3.3 Lire, prédire et modifier du code — 20 questions faciles + 20 moyennes (sorties calculées)
import { mc, ms, num, tf } from "./kit.mjs";
import { codeFig, withStart, numOut, out, errOf } from "./code.mjs";

const n = (prompt, code, feedback, tol) => num(withStart(prompt, code), numOut(code), feedback, codeFig(code), tol);
const count = (prompt, code, feedback) => num(withStart(prompt, code), out(code).split("\n").length, feedback, codeFig(code));
const kind = (prompt, code, correct, wrong, feedback) => mc(withStart(prompt, code), correct, wrong, feedback, codeFig(code));

export const E = [
  n(`Trace le programme. Qu'affiche-t-il?`, "a = 5\na = a * 2\na = a - 3\nprint(a)", "5 → 10 → 7."),
  kind(`Quel type d'erreur ce programme contient-il?`, "x = 4\nif x > 3\n    print(x)", "erreur de syntaxe", ["erreur d'exécution", "erreur de logique", "aucune erreur"], `Python signale : ${errOf("x = 4\nif x > 3\n    print(x)").message} — il manque le deux-points.`),
  kind(`Que se passe-t-il quand ce programme s'exécute?`, "print(10 / 0)", "une erreur d'exécution (ZeroDivisionError)", ["il affiche 0", "il affiche 10", "une erreur de syntaxe"], "Diviser par zéro fait planter le programme pendant son exécution."),
  tf(`Une erreur de logique produit toujours un message d'erreur.`, false, "Le programme s'exécute et donne une mauvaise réponse, sans message."),
  n(`Qu'affiche ce programme?`, "x = 1\nfor i in range(3):\n    x = x + i\nprint(x)", "i = 0, 1, 2 : 1 + 0 + 1 + 2 = 4."),
  kind(`Ce programme devrait additionner les nombres de 1 à 10. Qu'est-ce qui ne va pas?`, "total = 0\nfor k in range(1, 10):\n    total = total + k\nprint(total)", "le range s'arrête à 9 (décalage de un)", ["total devrait commencer à 1", "il devrait utiliser while", "rien ne cloche"], `Il affiche ${out("total = 0\nfor k in range(1, 10):\n    total = total + k\nprint(total)")}; range(1, 11) donne 55.`),
  n(`Trace le programme. Qu'affiche-t-il?`, "b = 2\nfor i in range(3):\n    b = b * b\nprint(b)", "2 → 4 → 16 → 256."),
  n(`Ce programme était auparavant print(5 * n). Il a été modifié pour donner la version montrée. Qu'affiche-t-il maintenant?`, "n = 4\nprint(7 * n)", "7 × 4 = 28."),
  tf(`Python distingue les majuscules des minuscules dans les noms : note et Note sont des variables différentes.`, true, "Les lettres majuscules et minuscules sont différentes dans les noms."),
  kind(`Que se passe-t-il quand ce programme s'exécute?`, "note = 90\nprint(Note)", "NameError : Note n'existe pas", ["il affiche 90", "une erreur de syntaxe", "il affiche Note"], "Aucune valeur n'a jamais été affectée à Note (N majuscule)."),
  n(`Qu'affiche ce programme?`, "k = 0\nwhile k < 5:\n    k = k + 2\nprint(k)", "0, 2, 4, 6 : la boucle s'arrête quand k vaut 6."),
  mc(`Pour que for i in range(1, 5) inclue le nombre 5, il faut le remplacer par…`, "range(1, 6)", ["range(0, 5)", "range(1, 5, 1)", "range(2, 6)"], "La valeur de fin n'est pas incluse."),
  n(`Qu'affiche ce programme?`, "def d(x):\n    return x * 2\n\nprint(d(d(3)))", "d(3) = 6, d(6) = 12."),
  tf(`Une indentation manquante après une ligne for cause une erreur avant même que le programme s'exécute.`, true, "Python ne peut pas exécuter du code mal indenté (une IndentationError, un type d'erreur de syntaxe)."),
  n(`Qu'affiche ce programme?`, "s = 0\nfor i in range(4):\n    s = s + 3\nprint(s)", "Quatre passages de + 3."),
  mc(`Qu'est-ce qu'une table de traçage?`, "un tableau de la valeur de chaque variable après chaque étape", ["une liste de messages d'erreur", "un graphique de la sortie", "un tableau des mots-clés de Python"], "Le traçage note les valeurs au fur et à mesure qu'elles changent."),
  n(`Qu'affiche ce programme?`, "n = 10\nif n > 5:\n    n = n - 5\nif n > 5:\n    n = n - 5\nprint(n)", "10 → 5; ensuite 5 > 5 est faux."),
  n(`Ce programme multipliait auparavant par 1.1 (une augmentation de 10 %). Il a été modifié comme on le voit. Quel nombre affiche-t-il maintenant?`, "v = 100\nv = v * 1.2\nprint(v)", "100 × 1.2 = 120.0 : une augmentation de 20 %."),
  mc(`Quelle ligne cause une ZeroDivisionError?`, "print(8 / (4 - 4))", ["print(8 / 4 - 4)", "print(0 / 8)", "print(8 - 4 / 4)"], "Seule la première divise par zéro; 0 / 8 ne pose aucun problème."),
  count(`Combien de nombres ce programme affiche-t-il?`, "n = 1\nwhile n < 10:\n    print(n)\n    n = n + 3", "1, 4, 7."),
];

export const M = [
  n(`Trace le programme. Qu'affiche-t-il?`, "a = 4\nb = 9\na = a + b\nb = a - b\nprint(b)", "a = 13, puis b = 13 − 9 = 4."),
  n(`Qu'affiche ce programme?`, "total = 0\nfor n in range(1, 8):\n    if n % 2 == 0:\n        total = total + n\n    else:\n        total = total - 1\nprint(total)", "Les nombres pairs ajoutent 2 + 4 + 6 = 12; les quatre nombres impairs soustraient 4."),
  n(`Trace le programme. Qu'affiche-t-il?`, "p = 1\nfor i in range(1, 4):\n    p = p * i + i\nprint(p)", "i = 1 : 2; i = 2 : 6; i = 3 : 21."),
  kind(`Quel type d'erreur ce programme contient-il?`, "for i in range(3)\n    print(i)", "erreur de syntaxe", ["erreur d'exécution", "erreur de logique", "aucune erreur"], "La ligne for a besoin d'un deux-points."),
  kind(`Le programme devrait afficher la moyenne de a et de b. Quel type d'erreur contient-il?`, "a = 80\nb = 90\nprint(a + b / 2)", "erreur de logique", ["erreur de syntaxe", "erreur d'exécution", "aucune erreur"], `Il affiche ${out("a = 80\nb = 90\nprint(a + b / 2)")} : seul b est divisé par deux. Utilise (a + b) / 2.`),
  num(withStart(`Combien de nombres ce programme affiche-t-il avant de planter?`, "for k in [2, 1, 0]:\n    print(6 // k)"), 2, "6 // 2 = 3 et 6 // 1 = 6; ensuite, 6 // 0 fait planter le programme.", codeFig("for k in [2, 1, 0]:\n    print(6 // k)")),
  n(`La figure n a 3n + 2 tuiles. Qu'affiche le programme?`, "n = 1\nwhile 3 * n + 2 <= 40:\n    n = n + 1\nprint(n)", String.raw`$3n+2>40$ donne $n>12.7$ : $13$.`),
  n(`La limite est remplacée par 100. Qu'affiche le programme maintenant?`, "n = 1\nwhile 3 * n + 2 <= 100:\n    n = n + 1\nprint(n)", String.raw`$3n+2>100$ donne $n>32.7$ : $33$.`),
  ms(`Quelles boucles affichent 0, 2, 4, 6, 8, 10? Choisis toutes les bonnes réponses.`, ["for i in range(0, 11, 2):", "for i in range(0, 12, 2):", "for i in range(0, 10, 2):", "for i in range(2, 12, 2):"], [0, 1], "range(0, 10, 2) s'arrête à 8; range(2, 12, 2) omet 0."),
  n(`Qu'affiche ce programme?`, "def f(x):\n    if x % 2 == 0:\n        return x // 2\n    return 3 * x + 1\n\nprint(f(f(f(7))))", "f(7) = 22, f(22) = 11, f(11) = 34."),
  tf(`Remplacer taux = 0.05 par taux = 0.08 dans un programme d'intérêt change un paramètre.`, true, "Le taux est une valeur qui décrit la situation."),
  n(`Le programme devrait afficher le périmètre d'un rectangle de 5 sur 3. Qu'affiche-t-il réellement?`, "l = 5\nw = 3\nprint(2 * l + w)", "2 × 5 + 3 = 13 (le bon périmètre est 16)."),
  mc(`Comment corriger print(2 * l + w) pour obtenir le périmètre?`, "print(2 * (l + w))", ["print(2 * l * w)", "print(l + w)", "print(2 * l + 2)"], "Les deux côtés sont doublés : 2(l + w)."),
  n(`Qu'affiche ce programme?`, "montant = 1000\nfor annee in range(2):\n    montant = montant * 1.10\nprint(round(montant))", "1000 × 1.1 × 1.1 = 1210."),
  n(`Trace le programme. Qu'affiche-t-il?`, "x = 3\ny = x\nx = x + 1\nprint(y)", "y a copié la valeur 3; changer x par la suite ne change pas y."),
  mc(`Un programme qui devrait additionner les nombres de 1 à 10 affiche 45. Quelle est l'erreur la plus probable?`, "range(1, 10) au lieu de range(1, 11)", ["total commence à 0", "il utilise + au lieu de *", "il devrait afficher total + 1"], "55 − 45 = 10 : le dernier nombre manque."),
  n(`Qu'affiche ce programme?`, "xs = [3, 8, 1, 6]\nm = xs[0]\nfor x in xs:\n    if x > m:\n        m = x\nprint(m)", "Il garde la plus grande valeur : 8."),
  n(`Dans ce programme, la comparaison est x < m. Qu'affiche-t-il?`, "xs = [3, 8, 1, 6]\nm = xs[0]\nfor x in xs:\n    if x < m:\n        m = x\nprint(m)", "Il garde maintenant la plus petite valeur : 1."),
  n(`Qu'affiche ce programme?`, "compteur = 0\nfor i in range(3):\n    for j in range(4):\n        compteur = compteur + 1\nprint(compteur)", "3 × 4 = 12 passages."),
  tf(`Une erreur d'exécution peut se produire au 50e passage d'une boucle même si les 49 premiers passages ont fonctionné.`, true, "Par exemple, une division par une valeur qui devient 0 seulement au 50e passage."),
];
