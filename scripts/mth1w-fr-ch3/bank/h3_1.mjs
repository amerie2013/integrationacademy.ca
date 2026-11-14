// 3.1 Coder des concepts algébriques — 20 questions difficiles (sorties calculées en exécutant le code)
import { mc, ms, num, tf } from "./kit.mjs";
import { codeFig, withStart, numOut } from "./code.mjs";

export const TOPIC = "3.1 Coder des concepts algébriques";
const n = (prompt, code, feedback) => num(withStart(prompt, code), numOut(code), feedback, codeFig(code));

export const Q = [
  n(String.raw`Combien de nombres entiers le programme compte-t-il? Vérifie en résolvant $2x^2-3x-5\le0$.`, "def f(x):\n    return 2 * x ** 2 - 3 * x - 5\n\ncompteur = 0\nfor x in range(-10, 11):\n    if f(x) <= 0:\n        compteur = compteur + 1\nprint(compteur)", String.raw`$2x^2-3x-5=(2x-5)(x+1)$ est $\le0$ pour $-1\le x\le2.5$ : les entiers $-1,0,1,2$.`),
  n(`Qu'affiche le programme? Vérifie avec l'algèbre.`, "for x in range(-100, 101):\n    if 3 * (x - 4) == 5 * x + 10:\n        print(x)", String.raw`$3x-12=5x+10$, $-22=2x$, $x=-11$.`),
  mc(String.raw`Un programme teste chaque nombre entier de $-100$ à $100$ dans $4x+1=2x+8$ et n'affiche rien. Pourquoi?`, "La solution, 3.5, n'est pas un nombre entier.", ["L'équation n'a pas de solution.", "L'intervalle est trop petit.", "== ne peut pas comparer des expressions."], String.raw`$2x=7$, $x=3.5$; la boucle teste seulement des nombres entiers.`),
  n(`Qu'affiche le programme?`, "x = 7\ny = 3\nx = x + y\ny = x - y\nx = x - y\nprint(x * 10 + y)", "x = 10; y = 10 − 3 = 7; x = 10 − 7 = 3. Les valeurs sont échangées : 3 × 10 + 7 = 37."),
  n(String.raw`La hauteur d'une balle est $h(t)=45+20t-5t^2$. Qu'affiche le programme?`, "def h(t):\n    return 45 + 20 * t - 5 * t ** 2\n\nm = 0\nfor t in range(0, 6):\n    if h(t) > m:\n        m = h(t)\nprint(m)", "Hauteurs 45, 60, 65, 60, 45, 20 : la plus grande est 65."),
  ms(`Pour quelles valeurs de x print(x ** 2 > 2 * x) affiche-t-il False? Choisis toutes les bonnes réponses.`, ["-1", "0", "1", "2", "3"], [1, 2, 3], String.raw`$x^2>2x$ est faux pour $0\le x\le2$.`),
  n(`Les billets coûtent 15 dollars chacun, avec un rabais de 10 % sur les commandes de plus de 10 billets. Qu'affiche le programme?`, "def cout(n):\n    c = 15 * n\n    if n > 10:\n        c = c * 0.9\n    return c\n\nprint(cout(12))", "15 × 12 = 180; rabais de 10 % : 162.0."),
  num(`Qu'affiche print(2 ** 3 ** 2)? (Python évalue ** de droite à gauche.)`, numOut("print(2 ** 3 ** 2)"), String.raw`$3^2=9$ d'abord, puis $2^9=512$.`),
  mc(String.raw`Quel programme affiche $3x-5$ pour $x=-2,-1,0,1,2$?`, "for x in range(-2, 3): print(3 * x - 5)", ["for x in range(-2, 2): print(3 * x - 5)", "for x in range(2, -3): print(3 * x - 5)", "for x in range(-2, 3): print(3x - 5)"], "range(-2, 3) s'arrête avant 3; range(2, -3) est vide; 3x est une erreur de syntaxe."),
  n(`Qu'affiche le programme?`, "def g(n):\n    return n * (n + 1) // 2\n\nprint(g(100) - g(50))", String.raw`$g(n)=1+2+\dots+n$. $5050-1275=3775$ : la somme de $51$ à $100$.`),
  n(`Combien de nombres le programme compte-t-il?`, "compteur = 0\nfor x in range(1, 101):\n    if x % 3 == 1 and x % 4 == 1:\n        compteur = compteur + 1\nprint(compteur)", "Les deux restes valent 1 exactement quand x est 1 de plus qu'un multiple de 12 : 1, 13, …, 97."),
  tf(`En Python, print(0.1 + 0.2 == 0.3) affiche True.`, false, "Les nombres décimaux sont rangés en binaire : 0.1 + 0.2 donne 0.30000000000000004."),
  n(`Qu'affiche le programme?`, "total = 0\nfor x in range(1, 11):\n    if x ** 2 % 2 == 1:\n        total = total + x ** 2\nprint(total)", "Les carrés impairs : 1 + 9 + 25 + 49 + 81 = 165."),
  mc(`Pour quelle valeur de k le programme affiche-t-il exactement trois nombres? Programme : for x in range(0, 20): if 2 * x + 1 < k: print(x)`, "6", ["5", "8", "3"], String.raw`Il faut seulement $x=0,1,2$ : $5<k$ et $7\ge k$. Parmi les choix, seul $6$ convient.`),
  n(`Qu'affiche le programme?`, "def croissance(P, r, t):\n    return P * (1 + r) ** t\n\nprint(round(croissance(1000, 0.05, 3), 2))", String.raw`$1000(1.05)^3=1157.625$, arrondi à $1157.63$.`),
  n(String.raw`Qu'affiche le programme? (Que calcule $m$?)`, "def m(a, b):\n    return (a + b + abs(a - b)) / 2\n\nprint(m(-3, 8))", "(5 + 11) / 2 = 8.0 : m renvoie le plus grand de a et b."),
  ms(`Quelles lignes affichent 12? Choisis toutes les bonnes réponses.`, ["print(3 * 2 ** 2)", "print((3 * 2) ** 2)", "print(24 // 2)", "print(25 % 13)", "print(2 ** 3 + 4)"], [0, 2, 3, 4], "(3 * 2) ** 2 vaut 36; les autres valent 12."),
  n(`Combien de nombres entiers le programme compte-t-il?`, "compteur = 0\nfor x in range(-20, 21):\n    if x % 2 == 0 and -7 < 3 * x + 2 <= 20:\n        compteur = compteur + 1\nprint(compteur)", String.raw`$-7<3x+2\le20$ signifie $-3<x\le6$; les entiers pairs $-2,0,2,4,6$.`),
  n(`Qu'affiche le programme?`, "def f(x):\n    return (x + 3) * (x - 2)\n\nprint(f(-3) + f(2) + f(0))", "f(−3) = 0, f(2) = 0, f(0) = 3 × (−2) = −6."),
  n(`Qu'affiche le programme?`, "def f(x):\n    return x + 4\n\ndef g(x):\n    return 2 * x\n\nprint(f(g(3)) - g(f(3)))", "f(g(3)) = f(6) = 10; g(f(3)) = g(7) = 14; 10 − 14 = −4."),
];
