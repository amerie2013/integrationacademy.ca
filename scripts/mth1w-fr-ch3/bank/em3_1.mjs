// 3.1 Coder des concepts algébriques — 20 questions faciles + 20 moyennes (sorties calculées en exécutant le code)
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { codeFig, withStart, numOut, out } from "./code.mjs";

const n = (prompt, code, feedback) => num(withStart(prompt, code), numOut(code), feedback, codeFig(code));
const line = (code) => numOut(code); // programmes d'une ligne écrits dans l'énoncé

export const E = [
  num(`Qu'affiche print(7 + 3 * 2)?`, line("print(7 + 3 * 2)"), "On multiplie d'abord : 7 + 6."),
  num(`Qu'affiche print(2 ** 5)?`, line("print(2 ** 5)"), String.raw`$2^5=32$.`),
  num(`Qu'affiche print(17 // 3)?`, line("print(17 // 3)"), String.raw`$17=3\times5+2$ : le quotient entier est $5$.`),
  num(`Qu'affiche print(17 % 3)?`, line("print(17 % 3)"), String.raw`Le reste de $17\div3$ est $2$.`),
  mc(String.raw`Quelle ligne Python calcule $y=4x^2$?`, "y = 4 * x ** 2", ["y = 4x^2", "y = 4 * x ^ 2", "y = (4 * x) ** 2"], "Écris le * et utilise ** pour les puissances. (4 * x) ** 2 donnerait 16x²."),
  tf(`En Python, un seul = compare deux valeurs.`, false, "Un seul = range une valeur; == compare."),
  n(`Qu'affiche ce programme?`, "x = 4\nx = x + 6\nprint(x)", "x devient 4 + 6 = 10."),
  mc(`Qu'affiche print(10 / 4)?`, "2.5", ["2", "2.0", "3"], "/ donne un nombre décimal : 2.5."),
  n(`Qu'affiche ce programme?`, "a = 3\nb = a * 2\nprint(a + b)", "b = 6, donc a + b = 9."),
  tf(`print(3 * 4 == 12) affiche True.`, true, "3 * 4 vaut 12, donc la comparaison est vraie (True)."),
  mc(`Dans def aire(l, w): return l * w, quels sont les paramètres?`, "l et w", ["aire", "l * w", "return"], "Les paramètres sont les noms des entrées entre parenthèses."),
  n(`Qu'affiche ce programme?`, "def f(x):\n    return 2 * x + 1\n\nprint(f(5))", "f(5) = 2(5) + 1 = 11."),
  fill(`print(9 > 4) affiche ___.`, ["True", "true", "vrai"], "9 > 4 est une comparaison vraie."),
  num(`Qu'affiche print(-3 ** 2)?`, line("print(-3 ** 2)"), "La puissance est calculée d'abord : −(3²) = −9."),
  mc(`Quel opérateur Python signifie « n'est pas égal à »?`, "!=", ["<>", "=/=", "~="], "!= signifie « différent de »."),
  num(`Qu'affiche print((2 + 3) * 4)?`, line("print((2 + 3) * 4)"), "Les parenthèses d'abord : 5 × 4."),
  tf(`x = x + 1 est une instruction Python valide quand x a déjà une valeur.`, true, "Elle ajoute 1 à la valeur rangée dans x."),
  n(`Qu'affiche ce programme?`, "n = 10\nn = n * n\nprint(n)", "10 × 10 = 100."),
  mc(String.raw`Quelle expression Python signifie $3\le x$?`, "3 <= x", ["3 =< x", "3 => x", "x => 3"], "L'opérateur est <= (inférieur ou égal à)."),
  num(`Quel nombre print(20 - 8 / 2) affiche-t-il? (Python l'affiche comme un nombre décimal.)`, line("print(20 - 8 / 2)"), "On divise d'abord : 20 − 4.0 = 16.0."),
];

export const M = [
  n(`Qu'affiche ce programme?`, "prix = 40\ntaxe = prix * 0.13\nprint(prix + taxe)", "Taxe 5.2; total 45.2."),
  num(`Qu'affiche print(2 + 3 * 4 ** 2 // 5)?`, line("print(2 + 3 * 4 ** 2 // 5)"), "4² = 16; 3 × 16 = 48; 48 // 5 = 9; 2 + 9 = 11."),
  n(`Qu'affiche ce programme?`, "def g(a, b):\n    return a * a - b\n\nprint(g(4, 7))", "16 − 7 = 9."),
  mc(`Qu'affiche print(5 / 2, 5 // 2)?`, "2.5 2", ["2.5 2.5", "2 2", "2.0 2"], "/ donne 2.5; // donne la partie entière, 2."),
  n(`Qu'affiche ce programme?`, "x = 2\ny = x ** 3\nx = y - x\nprint(x + y)", "y = 8, puis x = 8 − 2 = 6; 6 + 8 = 14."),
  ms(`Quelles comparaisons sont vraies (True) lorsque x = 4? Choisis toutes les bonnes réponses.`, ["x * 2 == 8", "x > 4", "x >= 4", "x != 4", "x % 2 == 0"], [0, 2, 4], "4 > 4 est faux; 4 != 4 est faux; 4 % 2 vaut 0."),
  n(`Combien de nombres ce programme compte-t-il?`, "compteur = 0\nfor x in range(1, 6):\n    if 3 * x - 2 > 7:\n        compteur = compteur + 1\nprint(compteur)", "3x − 2 > 7 signifie x > 3 : x = 4 et 5."),
  num(`Quel nombre print(4 * 2.5) affiche-t-il?`, line("print(4 * 2.5)"), "10.0 (un nombre décimal, parce que 2.5 est un nombre décimal)."),
  mc(String.raw`Quelle ligne vérifie si x est une solution de $5x-3=12$?`, "print(5 * x - 3 == 12)", ["print(5 * x - 3 = 12)", "print(5x - 3 == 12)", "5 * x - 3 = 12"], "Utilise == pour comparer; écris la multiplication."),
  num(`Qu'affiche print(int(7.9) + round(2.5))?`, line("print(int(7.9) + round(2.5))"), "int(7.9) = 7 (coupe la partie décimale); round(2.5) = 2 (arrondit une demie au nombre pair); 7 + 2 = 9."),
  num(`Quel est le DERNIER nombre affiché par ce programme?`, Number(out("for x in range(-2, 3):\n    print(x ** 2 - 5)").split("\n").pop()), "La dernière valeur de x est 2 : 4 − 5 = −1.", codeFig("for x in range(-2, 3):\n    print(x ** 2 - 5)")),
  tf(`print(2 * 3 ** 2) affiche 36.`, false, "La puissance d'abord : 3² = 9, puis 2 × 9 = 18."),
  n(`Qu'affiche ce programme?`, "a = 5\na += 3\na *= 2\nprint(a)", "5 + 3 = 8, puis 8 × 2 = 16."),
  mc(`Quelle fonction renvoie l'aire d'un cercle (utilise 3.14 pour π)?`, "def A(r): return 3.14 * r ** 2", ["def A(r): return 3.14 * r * 2", "def A(r): return (3.14 * r) ** 2", "def A(r): return 3.14r^2"], "Aire = πr² : la puissance s'applique seulement à r."),
  n(`Combien de nombres entiers ce programme compte-t-il?`, "compteur = 0\nfor x in range(-5, 6):\n    if 2 * x + 1 < -3:\n        compteur = compteur + 1\nprint(compteur)", "2x + 1 < −3 signifie x < −2 : −5, −4, −3."),
  fill(`print(14 % 4 == 2) affiche ___.`, ["True", "true", "vrai"], "14 = 4 × 3 + 2, donc le reste est 2."),
  num(`Qu'est-ce qui est affiché? x = 6, puis print(x // 4 + x % 4)`, line("x = 6\nprint(x // 4 + x % 4)"), "6 // 4 = 1 et 6 % 4 = 2."),
  mc(`Dans def cout(n, taux, frais): return frais + taux * n, quel mot n'est PAS un paramètre?`, "cout", ["n", "taux", "frais"], "cout est le nom de la fonction."),
  n(`Qu'affiche ce programme?`, "def f(x):\n    return 3 * x - 7\n\nprint(f(f(4)))", "f(4) = 5, puis f(5) = 8."),
  ms(`Quelles conditions signifient « x est entre 2 et 9, inclusivement »? Choisis toutes les bonnes réponses.`, ["2 <= x <= 9", "x >= 2 and x <= 9", "2 < x < 9", "x >= 2 or x <= 9"], [0, 1], "« Inclusivement » demande <=; « or » (ou) est vrai pour tout x."),
];
