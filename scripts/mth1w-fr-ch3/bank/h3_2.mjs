// 3.2 Construire du code à partir d'étapes — 20 questions difficiles (sorties calculées en exécutant le code)
import { mc, ms, num } from "./kit.mjs";
import { codeFig, withStart, numOut, out } from "./code.mjs";

export const TOPIC = "3.2 Construire du code à partir d'étapes";
const n = (prompt, code, feedback, tol) => num(withStart(prompt, code), numOut(code), feedback, codeFig(code), tol);

export const Q = [
  n(`Ana a 200 dollars et épargne 30 dollars par semaine; Ben a 1000 dollars et dépense 50 dollars par semaine. Qu'affiche le programme?`, "a = 200\nb = 1000\nw = 0\nwhile a < b:\n    a = a + 30\n    b = b - 50\n    w = w + 1\nprint(w)", String.raw`$200+30w\ge1000-50w$ donne $80w\ge800$, $w=10$.`),
  n(`Un placement augmente de 6 % par année. Qu'affiche le programme?`, "v = 1000\na = 0\nwhile v < 2000:\n    v = v * 1.06\n    a = a + 1\nprint(a)", String.raw`$1.06^{11}\approx1.90$ et $1.06^{12}\approx2.01$ : $12$ ans.`),
  n(`Qu'affiche le programme?`, "n = 0\nt = 0\nwhile t <= 1000:\n    n = n + 1\n    t = t + n\nprint(n)", String.raw`Nombres triangulaires : $T_{44}=990$, $T_{45}=1035$.`),
  n(`Cette boucle applique la règle de Collatz. Qu'affiche le programme?`, "n = 6\netapes = 0\nwhile n != 1:\n    if n % 2 == 0:\n        n = n // 2\n    else:\n        n = 3 * n + 1\n    etapes = etapes + 1\nprint(etapes)", "6, 3, 10, 5, 16, 8, 4, 2, 1 : huit étapes."),
  n(`Qu'affiche le programme?`, "compteur = 0\nfor k in range(1, 1001):\n    if k % 3 == 0 and k % 9 != 0:\n        compteur = compteur + 1\nprint(compteur)", "333 multiples de 3, moins 111 multiples de 9."),
  n(`Qu'affiche le programme?`, "def envoi(kg):\n    if kg <= 1:\n        return 9\n    elif kg <= 5:\n        return 9 + 3 * (kg - 1)\n    return 21 + 2 * (kg - 5)\n\nprint(envoi(0.5) + envoi(4) + envoi(8))", "9 + 18 + 27 = 54."),
  n(`Qu'affiche le programme?`, "k = 0\ns = 0\nwhile s <= 500:\n    k = k + 1\n    s = s + k\nprint(k)", String.raw`$1+\dots+31=496$; ajouter $32$ donne $528>500$.`),
  n(String.raw`Combien de couples de nombres naturels $(x,y)$ vérifient $2x+3y=24$? Le programme les compte.`, "compteur = 0\nfor x in range(0, 13):\n    for y in range(0, 9):\n        if 2 * x + 3 * y == 24:\n            compteur = compteur + 1\nprint(compteur)", "y doit être pair : (12,0), (9,2), (6,4), (3,6), (0,8)."),
  n(`Qu'affiche le programme?`, "n = 4721\ns = 0\nwhile n > 0:\n    s = s + n % 10\n    n = n // 10\nprint(s)", "Il additionne les chiffres : 1 + 2 + 7 + 4 = 14."),
  n(`Qu'affiche le programme? (C'est l'algorithme d'Euclide.)`, "a = 84\nb = 36\nwhile b != 0:\n    r = a % b\n    a = b\n    b = r\nprint(a)", "84 = 36·2 + 12; 36 = 12·3 + 0 : le plus grand facteur commun est 12."),
  n(`Qu'affiche le programme?`, "compteur = 0\nfor n in range(2, 30):\n    premier = True\n    for d in range(2, n):\n        if n % d == 0:\n            premier = False\n    if premier:\n        compteur = compteur + 1\nprint(compteur)", "Les nombres premiers inférieurs à 30 : 2, 3, 5, 7, 11, 13, 17, 19, 23, 29."),
  n(`Une population de 2000 lapins augmente de 15 % par année, puis 100 lapins sont déplacés ailleurs. Qu'affiche le programme?`, "p = 2000\nannees = 0\nwhile p <= 4000:\n    p = p * 1.15 - 100\n    annees = annees + 1\nprint(annees)", "2200, 2430, 2694.5, 2998.7, 3348.5, 3750.8, 4213.4 : sept ans."),
  ms(`Quelles lignes affichent 15? Choisis toutes les bonnes réponses.`, ["print(1 + 2 + 3 + 4 + 5)", "print(sum([4, 5, 6]))", "print(2 ** 4 - 1)", "print(45 // 3)", "print(16 % 5)"], [0, 1, 2, 3], "16 % 5 est le reste 1; les quatre autres lignes affichent chacune 15."),
  mc(`Quelle boucle while ne s'arrête jamais?`, "n = 1; while n != 10: n = n + 2", ["n = 0; while n != 10: n = n + 2", "n = 1; while n < 10: n = n + 2", "n = 20; while n > 10: n = n - 3"], "Commencer à 1 et ajouter 2 donne seulement des nombres impairs, donc n ne vaut jamais 10."),
  n(`Qu'affiche le programme?`, "total = 0\nk = 1\nwhile k * k < 200:\n    if k % 2 == 1:\n        total = total + k * k\n    k = k + 1\nprint(total)", "Les carrés impairs inférieurs à 200 : 1 + 9 + 25 + 49 + 81 + 121 + 169 = 455."),
  n(`Qu'affiche le programme?`, "a = 1\nb = 1\nwhile b <= 500:\n    c = a + b\n    a = b\n    b = c\nprint(b)", "Fibonacci : …, 233, 377, 610 : le premier terme supérieur à 500 est 610."),
  n(String.raw`Combien de termes de $\frac12+\frac14+\frac18+\dots$ faut-il pour que la somme dépasse $0.99$?`, "s = 0\nterme = 0.5\nk = 0\nwhile s <= 0.99:\n    s = s + terme\n    terme = terme / 2\n    k = k + 1\nprint(k)", String.raw`Après $k$ termes, la somme vaut $1-\frac1{2^k}$; $\frac1{2^7}<0.01$.`),
  n(`Qu'affiche le programme?`, "compteur = 0\nfor x in range(0, 7):\n    for y in range(0, 7):\n        if x + y == 7:\n            compteur = compteur + 1\nprint(compteur)", "x = 1 à 6 (et y = 6 à 1); x = 0 exigerait y = 7, qui est hors de l'intervalle."),
  n(`Le salaire est de 20 dollars l'heure, et 1.5 fois ce taux pour les heures au-delà de 40. Qu'affiche le programme?`, "def paie(h):\n    if h <= 40:\n        return 20 * h\n    return 800 + 30 * (h - 40)\n\nprint(paie(45))", "800 + 5 × 30 = 950."),
  n(`La liste se termine par −1, un signal d'arrêt. Qu'affiche le programme? (Donne deux décimales.)`, "valeurs = [12, 7, 9, -1]\ni = 0\ntotal = 0\nwhile valeurs[i] >= 0:\n    total = total + valeurs[i]\n    i = i + 1\nprint(total / i)", "28 ÷ 3 ≈ 9.33 : le −1 n'est pas inclus.", 0.006),
];
