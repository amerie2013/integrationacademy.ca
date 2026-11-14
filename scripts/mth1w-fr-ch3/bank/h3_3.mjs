// 3.3 Lire, prédire et modifier du code — 20 questions difficiles (sorties calculées)
import { mc, ms, num, fill } from "./kit.mjs";
import { codeFig, withStart, numOut, out, errOf } from "./code.mjs";

export const TOPIC = "3.3 Lire, prédire et modifier du code";
const n = (prompt, code, feedback, tol) => num(withStart(prompt, code), numOut(code), feedback, codeFig(code), tol);

const SIMPLE = "a = 5000\nfor y in range(3):\n    a = a + 5000 * 0.08\nprint(a)";
const COMP = "a = 5000\nfor y in range(3):\n    a = a * 1.08\nprint(round(a, 2))";
const FIZZ = "for n in range(1, 16):\n    if n % 15 == 0:\n        print(\"fizzbuzz\")\n    elif n % 3 == 0:\n        print(\"fizz\")\n    else:\n        print(n)";
const REV = "s = \"\"\nfor c in \"abc\":\n    s = c + s\nprint(s)";

export const Q = [
  n(`Trace le programme. Qu'affiche-t-il?`, "x = 2\ny = 5\nfor i in range(3):\n    x = x + y\n    y = x - 2 * y\nprint(x * 100 + y)", `x, y après chaque passage : (7, −3), (4, 10), (14, −6). 14 × 100 + (−6) = 1394.`),
  fill(withStart(`Quelle est la DERNIÈRE ligne affichée par ce programme?`, FIZZ), [out(FIZZ).split("\n").pop()], "La dernière valeur de n est 15, un multiple de 15, et ce test vient en premier.", codeFig(FIZZ)),
  mc(withStart(`Que se passe-t-il quand ce programme s'exécute?`, "xs = [1, 2, 3]\nprint(xs[3])"), "IndexError : les positions sont 0, 1 et 2", ["il affiche 3", "il affiche None", "une erreur de syntaxe"], `Python signale : ${errOf("xs = [1, 2, 3]\nprint(xs[3])").message}. Les listes commencent à la position 0.`, codeFig("xs = [1, 2, 3]\nprint(xs[3])")),
  n(`Un camion de 30000 dollars se déprécie. Le taux a été changé de 0.20 à 0.15. Qu'affiche le programme?`, "valeur = 30000\ntaux = 0.15\nannees = 0\nwhile valeur > 12000:\n    valeur = valeur * (1 - taux)\n    annees = annees + 1\nprint(annees)", String.raw`$30000(0.85)^5\approx13311$ et $(0.85)^6$ donne $\approx11314$ : $6$ ans.`),
  n(`Ce compteur de nombres premiers contient une erreur. Qu'affiche-t-il?`, "compteur = 0\nfor n in range(2, 20):\n    premier = True\n    for d in range(1, n):\n        if n % d == 0:\n            premier = False\n    if premier:\n        compteur = compteur + 1\nprint(compteur)", "Chaque n est divisible par d = 1, donc aucun nombre n'est premier : 0. Le range intérieur devrait commencer à 2."),
  n(`Qu'affiche ce programme?`, "n = 0\ns = 0\nwhile s < 50 and n < 8:\n    n = n + 1\n    s = s + n * n\nprint(n)", "s : 1, 5, 14, 30, 55 — il s'arrête quand s ≥ 50, à n = 5."),
  num(withStart(`De combien de dollars l'intérêt composé dépasse-t-il l'intérêt simple après 3 ans? (Exécute les deux programmes mentalement.)`, COMP), +(+out(COMP) - +out(SIMPLE)).toFixed(2), `Composé : ${out(COMP)}; simple : ${out(SIMPLE)}; différence 98.56.`, codeFig(COMP), 0.006),
  n(`Qu'affiche ce programme? Ensuite, réfléchis : qu'afficherait-il si * était remplacé par +?`, "def f(n):\n    if n == 1:\n        return 1\n    return n * f(n - 1)\n\nprint(f(5))", "5 × 4 × 3 × 2 × 1 = 120. Avec +, il additionnerait 5 + 4 + 3 + 2 + 1 = 15."),
  mc(`Un programme de dépréciation multiplie la valeur par (1 - taux) chaque année. Quel changement lui fait modéliser une appréciation de 7 % par année?`, "multiplier plutôt par 1.07", ["poser taux = −0.07 et garder while valeur > 0", "soustraire 7 chaque année", "remplacer while par for"], "L'appréciation est une croissance : multiplie par 1 + 0.07."),
  n(`Qu'affiche ce programme?`, "n = 0\nwhile n <= 10:\n    n = n + 3\nprint(n)", "0, 3, 6, 9, 12 : 9 ≤ 10, donc la boucle s'exécute une fois de plus."),
  n(`Qu'affiche ce programme?`, "compteur = 0\nfor x in range(-5, 6):\n    if x * x > 4:\n        compteur = compteur + 1\nprint(compteur)", "x = −5, −4, −3 et 3, 4, 5."),
  ms(`Pour quels couples (a, b) for x in range(a, b): print(x) affiche-t-il exactement 7 nombres? Choisis toutes les bonnes réponses.`, ["(0, 7)", "(3, 10)", "(-3, 4)", "(1, 7)"], [0, 1, 2], "Le nombre de valeurs est b − a; (1, 7) en donne 6."),
  fill(withStart(`Qu'affiche ce programme?`, REV), [out(REV)], "Chaque lettre est placée devant : a, ba, cba.", codeFig(REV)),
  n(`Qu'affiche ce programme?`, "for n in range(1, 100):\n    if n * n > 50:\n        break\nprint(n)", "break arrête la boucle au premier n tel que n² > 50 : 8."),
  n(`Qu'affiche ce programme?`, "total = 0\nfor n in range(1, 11):\n    if n % 3 == 0:\n        continue\n    total = total + n\nprint(total)", "continue saute 3, 6, 9 : 55 − 18 = 37."),
  mc(`Avec x = 7, pourquoi while x != 0: x = x - 2 ne s'arrête-t-il jamais?`, "x prend les valeurs 7, 5, 3, 1, −1, … et saute par-dessus 0", ["x ne change jamais", "!= n'est pas permis en Python", "0 n'est pas un nombre"], "Utilise while x > 0 pour arrêter sans risque."),
  n(`Qu'affiche ce programme?`, "def tuiles(n, a, b):\n    return a * n + b\n\nprint(tuiles(10, 4, 3))", "4 × 10 + 3 = 43."),
  n(`Qu'affiche ce programme?`, "def tuiles(n, a, b):\n    return a * n + b\n\nn = 1\nwhile tuiles(n, 4, 3) <= 200:\n    n = n + 1\nprint(n)", String.raw`$4n+3>200$ donne $n>49.25$ : $50$.`),
  n(`Un montant de 5000 dollars augmente de 4 % par année. Qu'affiche le programme?`, "v = 5000\nannees = 0\nwhile v <= 6000:\n    v = v * 1.04\n    annees = annees + 1\nprint(annees)", String.raw`$1.04^4\approx1.17$, $1.04^5\approx1.217$ : $5$ ans.`),
  n(`Qu'affiche ce programme?`, "n = 123\nr = 0\nwhile n > 0:\n    r = r * 10 + n % 10\n    n = n // 10\nprint(r)", "Il inverse l'ordre des chiffres : 3, 32, 321."),
];
