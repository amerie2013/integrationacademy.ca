// 3.2 Construire du code à partir d'étapes — 20 questions faciles + 20 moyennes (sorties calculées en exécutant le code)
import { mc, ms, num, fill, tf } from "./kit.mjs";
import { codeFig, withStart, numOut, out } from "./code.mjs";

const n = (prompt, code, feedback, tol) => num(withStart(prompt, code), numOut(code), feedback, codeFig(code), tol);
const count = (prompt, code, feedback) => num(withStart(prompt, code), out(code).split("\n").length, feedback, codeFig(code));
const last = (prompt, code, feedback) => num(withStart(prompt, code), Number(out(code).split("\n").pop()), feedback, codeFig(code));

export const E = [
  count(`Combien de nombres ce programme affiche-t-il?`, "for i in range(3, 9):\n    print(i)", "3, 4, 5, 6, 7, 8 : le range s'arrête avant 9."),
  last(`Quel est le dernier nombre affiché?`, "for k in range(0, 20, 4):\n    print(k)", "0, 4, 8, 12, 16 : 20 n'est pas inclus."),
  n(`Qu'affiche ce programme?`, "total = 0\nfor k in range(1, 6):\n    total = total + k\nprint(total)", "1 + 2 + 3 + 4 + 5 = 15."),
  fill(`x = 7, puis : if x > 5: print("grand") else: print("petit"). Le programme affiche ___.`, ["grand"], "7 > 5 est vrai (True)."),
  mc(`Quelle boucle s'exécute exactement 4 fois?`, "for i in range(4):", ["for i in range(1, 4):", "for i in range(0, 4, 2):", "for i in range(4, 0):"], "range(4) donne 0, 1, 2, 3."),
  tf(`range(1, 10) inclut le nombre 10.`, false, "Un range s'arrête avant sa valeur de fin."),
  n(`Qu'affiche ce programme?`, "compteur = 0\nfor n in range(1, 11):\n    if n % 2 == 0:\n        compteur = compteur + 1\nprint(compteur)", "Les nombres pairs 2, 4, 6, 8, 10."),
  n(`Qu'affiche ce programme?`, "n = 1\nwhile n < 20:\n    n = n * 2\nprint(n)", "1, 2, 4, 8, 16, 32 : la boucle s'arrête quand n vaut 32."),
  mc(`Une structure if / else est un exemple de…`, "sélection", ["répétition", "séquence", "fonction"], "if / else choisit entre des chemins."),
  n(`Qu'affiche ce programme?`, "p = 1\nfor k in range(1, 5):\n    p = p * k\nprint(p)", "1 × 2 × 3 × 4 = 24."),
  count(`Combien de fois « salut » est-il affiché?`, `for k in range(3):\n    print("salut")`, "range(3) contient trois valeurs."),
  tf(`Une boucle while dont la condition ne devient jamais fausse s'exécute sans fin.`, true, "C'est une boucle infinie."),
  n(`Qu'affiche ce programme?`, "total = 0\nfor k in range(2, 11, 2):\n    total = total + k\nprint(total)", "2 + 4 + 6 + 8 + 10 = 30."),
  mc(`Quelle est la première étape pour décomposer un problème?`, "repérer les entrées, le traitement et les sorties", ["taper le code", "exécuter le programme", "choisir les noms des variables"], "Planifie avant de coder."),
  n(`Qu'affiche ce programme?`, "x = 10\nwhile x > 0:\n    x = x - 3\nprint(x)", "10, 7, 4, 1, −2 : la boucle s'arrête quand x vaut −2."),
  n(`Qu'affiche ce programme?`, "compteur = 0\nfor n in range(1, 21):\n    if n % 2 == 1:\n        compteur = compteur + 1\nprint(compteur)", "Il y a 10 nombres impairs de 1 à 20."),
  mc(`Que signifie elif en Python?`, "sinon si : une autre condition, vérifiée seulement quand les précédentes sont fausses", ["terminer le if", "répéter le if", "exécuter les deux branches"], "Python vérifie les conditions elif dans l'ordre."),
  n(`Qu'affiche ce programme?`, "def frais(h):\n    if h <= 3:\n        return 6\n    else:\n        return 6 + 2 * (h - 3)\n\nprint(frais(5))", "5 > 3 : 6 + 2 × 2 = 10."),
  count(`Combien de nombres ce programme affiche-t-il?`, "for i in range(10, 0, -2):\n    print(i)", "10, 8, 6, 4, 2."),
  tf(`Dans une chaîne if / elif / else, plus d'une branche peut s'exécuter.`, false, "Seule la première branche dont la condition est vraie s'exécute."),
];

export const M = [
  n(`Ce programme additionne des carrés. Quel total affiche-t-il?`, "total = 0\nfor k in range(1, 6):\n    total = total + k * k\nprint(total)", "1 + 4 + 9 + 16 + 25 = 55."),
  n(`Qu'affiche ce programme?`, "compteur = 0\nfor n in range(1, 51):\n    if n % 3 == 0:\n        compteur = compteur + 1\nprint(compteur)", "3, 6, …, 48 : 16 multiples."),
  n(`L'épargne commence à 100 dollars et augmente de 45 dollars par semaine. Qu'affiche le programme?`, "s = 100\nw = 0\nwhile s < 400:\n    s = s + 45\n    w = w + 1\nprint(w)", String.raw`$100+45w\ge400$ exige $w\ge6.7$ : $7$ semaines.`),
  n(`Qu'affiche ce programme?`, "def billet(age):\n    if age < 12:\n        return 6\n    elif age < 65:\n        return 12\n    else:\n        return 8\n\nprint(billet(5) + billet(30) + billet(70))", "6 + 12 + 8 = 26."),
  n(`Qu'affiche ce programme?`, "compteur = 0\nfor x in range(1, 31):\n    if x % 2 == 0 or x % 5 == 0:\n        compteur = compteur + 1\nprint(compteur)", "15 nombres pairs + 6 multiples de 5 − 3 multiples de 10 = 18."),
  last(`Quel est le dernier nombre affiché?`, "for k in range(5, 50, 7):\n    print(k)", "5, 12, 19, 26, 33, 40, 47."),
  n(`Une voiture de 20000 dollars perd 20 % de sa valeur par année. Qu'affiche le programme?`, "valeur = 20000\nannees = 0\nwhile valeur >= 10000:\n    valeur = valeur * 0.8\n    annees = annees + 1\nprint(annees)", "16000, 12800, 10240, 8192 : sous 10000 après 4 ans."),
  n(`Des bactéries doublent toutes les 20 minutes, à partir de 30. Qu'affiche le programme?`, "b = 30\nminutes = 0\nwhile b <= 1000:\n    b = b * 2\n    minutes = minutes + 20\nprint(minutes)", "Passer de 30 à 1920 demande 6 doublements : 120 minutes."),
  ms(`Quelles boucles affichent exactement 1, 3, 5, 7? Choisis toutes les bonnes réponses.`, ["for i in range(1, 8, 2):", "for i in range(1, 9, 2):", "for i in range(1, 7, 2):", "for i in range(0, 8, 2):"], [0, 1], "range(1, 7, 2) s'arrête à 5; range(0, 8, 2) donne des nombres pairs."),
  mc(`Quelle structure répond le mieux à « combien d'années avant qu'un placement double? »`, "une boucle while", ["une boucle for sur range(10)", "un seul if / else", "une instruction print"], "On répète jusqu'à ce qu'une condition soit remplie, sans connaître le nombre de passages d'avance."),
  n(`Qu'affiche ce programme?`, "p = 1\nfor i in range(10):\n    p = p * 2\nprint(p)", String.raw`$2^{10}=1024$.`),
  n(`Qu'affiche ce programme?`, "compteur = 0\nfor n in range(1, 101):\n    if n * n < 50:\n        compteur = compteur + 1\nprint(compteur)", "De 1² à 7², les carrés sont inférieurs à 50 (7² = 49)."),
  n(`Qu'affiche ce programme?`, "notes = [70, 84, 91, 63]\ntotal = 0\nfor m in notes:\n    total = total + m\nprint(total / len(notes))", "308 ÷ 4 = 77.0."),
  n(`Qu'affiche ce programme?`, "n = 0\nwhile 3 ** n <= 1000:\n    n = n + 1\nprint(n)", String.raw`$3^6=729$, $3^7=2187$ : la première puissance supérieure à $1000$ est $n=7$.`),
  tf(`for i in range(5): exécute son corps avec i = 1, 2, 3, 4, 5.`, false, "Il s'exécute avec i = 0, 1, 2, 3, 4."),
  n(`Qu'affiche ce programme?`, "compteur = 0\nfor n in range(1, 21):\n    if n % 4 == 0:\n        compteur = compteur + 1\nprint(compteur)", "4, 8, 12, 16, 20."),
  n(`Qu'affiche ce programme?`, "n = 100\ncompteur = 0\nwhile n > 1:\n    n = n // 2\n    compteur = compteur + 1\nprint(compteur)", "100 → 50 → 25 → 12 → 6 → 3 → 1 : six divisions par deux."),
  n(`Qu'affiche ce programme?`, "total = 0\nfor k in range(1, 101):\n    total = total + k\nprint(total)", String.raw`$\frac{100(101)}{2}=5050$.`),
  n(`L'impôt sur le revenu est de 15 % jusqu'à 50000 dollars, plus 20.5 % du montant au-delà de 50000 dollars. Qu'affiche le programme?`, "def impot(revenu):\n    if revenu <= 50000:\n        return revenu * 0.15\n    return 7500 + (revenu - 50000) * 0.205\n\nprint(impot(60000))", "7500 + 10000 × 0.205 = 9550."),
  mc(`Un organigramme a un losange de décision avec une flèche qui remonte jusqu'au losange. Quel code y correspond?`, "une boucle while", ["un seul if", "un appel de fonction", "une instruction print"], "Revenir à la même décision signifie une répétition."),
];
