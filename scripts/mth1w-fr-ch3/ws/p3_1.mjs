// Fiche 3.1 — problèmes : 3 de connaissance, 5 d'application, 5 problèmes difficiles (à plusieurs parties).
// Chaque sortie est calculée en exécutant le code (codekit.out).
import { codeT, ct, out } from "./codekit.mjs";

const P3 = `m = 9
m = m // 2
m = m * m
print(m)`;
const P4 = `def f(x):
    return 3 * x - 8

print(f(-4), f(0))`;
const P5 = `x = 3
print(4 * x - 5 >= 2 * x + 1)`;
const P7 = `for x in range(-3, 8):
    if 5 - 2 * x > -3:
        print(x, end=" ")`;
const P9 = `def planA(m):
    return 20 + 0.10 * m

def planB(m):
    return 35 + 0.04 * m

print(planA(100), planB(100))`;
const P9b = `${P9.split("\n\nprint")[0]}

m = 0
while planB(m) >= planA(m):
    m = m + 10
print(m)`;
const P10 = `def tuiles(n):
    return 6 * n - 4

n = 1
while tuiles(n) <= 1000:
    n = n + 1
print(n)`;
const P11 = `for x in range(-10, 11):
    if -4 <= 3 * x + 2 < 14:
        print(x, end=" ")`;
const P12 = `a = 78
b = 85
c = 91
moy = a + b + c / 3
print(moy)`;
const P13 = `for x in range(-50, 51):
    if 5 * x - 18 == 2 * x + 9:
        print(x)`;
const P13b = P13.replace("5 * x - 18 == 2 * x + 9", "4 * (x - 3) == 2 * x + 10");

export const PROBLEMS = [
  { level: 1, q: String.raw`Prédis la sortie de ${ct("print(4 + 6 / 2 * 3)")}.`, recap: String.raw`Sortie de ${ct("print(4 + 6 / 2 * 3)")}.`, ans: `${ct(out("print(4 + 6 / 2 * 3)"))}` },
  { level: 1, q: String.raw`Écris une ligne de Python qui range $y=5x^2-2x+7$ dans la variable ${ct("y")}.`, recap: String.raw`Python pour $y=5x^2-2x+7$.`, ans: ct("y = 5 * x ** 2 - 2 * x + 7") },
  { level: 1, q: String.raw`Trace le programme et donne la sortie.${codeT(P3)}`, recap: String.raw`Trace ${ct("m = 9; m = m // 2; m = m * m")}.`, ans: ct(out(P3)) },
  { level: 2, q: String.raw`Qu'affiche ce programme?${codeT(P4)}`, recap: String.raw`${ct("f(x) = 3*x - 8")} : ${ct("f(-4), f(0)")}.`, ans: ct(out(P4)) },
  { level: 2, q: String.raw`Qu'affiche ce programme? À quelle question sur $4x-5\ge2x+1$ répond-il?${codeT(P5)}`, recap: String.raw`$x=3$ vérifie-t-il $4x-5\ge2x+1$?`, ans: String.raw`${ct(out(P5))} : $x=3$ la vérifie ($7\ge7$)` },
  { level: 2, q: String.raw`Écris une fonction ${ct("vers_f(c)")} qui renvoie la température en degrés Fahrenheit $1.8c+32$, et donne la valeur de ${ct("vers_f(25)")}.`, recap: String.raw`Fonction ${ct("vers_f(c)")}; valeur à $25$.`, ans: String.raw`${ct("def vers_f(c): return 1.8 * c + 32")}; ${ct(out("def vers_f(c):\n    return 1.8 * c + 32\nprint(vers_f(25))"))}` },
  { level: 2, q: String.raw`Qu'affiche ce programme? Vérifie avec l'algèbre.${codeT(P7)}`, recap: String.raw`Nombres entiers de $[-3,7]$ tels que $5-2x>-3$.`, ans: String.raw`${ct(out(P7).trim())} ($x<4$)` },
  { level: 2, q: String.raw`Explique pourquoi ${ct("y = x ** 2")} et ${ct("y = -x ** 2")} donnent des valeurs différentes lorsque ${ct("x = -3")}.`, recap: String.raw`${ct("x ** 2")} ou ${ct("-x ** 2")} à $x=-3$.`, ans: String.raw`$(-3)^2=9$; ${ct("-x ** 2")} signifie $-(x^2)=-9$ (la puissance avant l'opposé)` },
  { level: 3, space: 5.5,
    q: String.raw`Deux forfaits de téléphone sont écrits sous forme de fonctions.${codeT(P9)}
(a) Prédis la sortie.
(b) Écris une boucle ${ct("while")} qui commence à ${ct("m = 0")}, ajoute $10$ minutes à chaque passage tant que le forfait B coûte au moins autant que le forfait A, puis affiche ${ct("m")}. Qu'affiche-t-elle?
(c) Résous $20+0.10m=35+0.04m$ avec l'algèbre et explique pourquoi la réponse de la boucle est un peu plus grande.`,
    recap: "Forfaits A = 20 + 0.10m et B = 35 + 0.04m.",
    ans: String.raw`(a) ${ct(out(P9))} (b) ${ct(out(P9b))} (c) $0.06m=15$, $m=250$; à $250$, les forfaits sont à égalité, et la boucle compte par bonds de $10$, donc elle s'arrête au premier multiple de $10$ après $250$.` },
  { level: 3, space: 5,
    q: String.raw`La figure $n$ d'une régularité a ${ct("tuiles(n) = 6 * n - 4")} tuiles.
(a) Fais une table de valeurs pour $n=1$ à $5$.
(b) Quelle figure a $116$ tuiles? Montre l'algèbre.
(c) Prédis la sortie de ce programme, puis vérifie avec l'algèbre.${codeT(P10)}`,
    recap: String.raw`Régularité ${ct("6 * n - 4")}.`,
    ans: String.raw`(a) $2, 8, 14, 20, 26$ (b) $6n-4=116$, $n=20$ (c) ${ct(out(P10))} : $6n-4>1000$ donne $n>167.3$` },
  { level: 3, space: 5,
    q: String.raw`(a) Résous $-4\le3x+2<14$ avec l'algèbre.
(b) Prédis la sortie de ce programme.${codeT(P11)}
(c) Explique pourquoi le programme ne peut pas montrer la solution complète de l'inéquation.`,
    recap: String.raw`Inéquation double $-4\le3x+2<14$.`,
    ans: String.raw`(a) $-2\le x<4$ (b) ${ct(out(P11).trim())} (c) Il teste seulement les nombres entiers de $-10$ à $10$; des nombres décimaux comme $3.5$ vérifient aussi l'inéquation.` },
  { level: 3, space: 5,
    q: String.raw`Ce programme devrait afficher la moyenne de trois notes de test.${codeT(P12)}
(a) Prédis ce qu'il affiche vraiment, et explique l'erreur.
(b) Corrige le programme et donne la bonne moyenne au dixième près.
(c) De quel type d'erreur s'agit-il : de syntaxe, d'exécution ou de logique?`,
    recap: "Moyenne de 78, 85, 91 sans parenthèses.",
    ans: String.raw`(a) ${ct(out(P12))} : seul $c$ est divisé par $3$ (b) ${ct("moy = (a + b + c) / 3")}; $${out("print(round((78 + 85 + 91) / 3, 1))")}$ (c) erreur de logique — il s'exécute, mais donne une mauvaise réponse` },
  { level: 3, space: 5,
    q: String.raw`(a) Prédis la sortie de ce programme.${codeT(P13)}
(b) Change la condition pour tester $4(x-3)=2x+10$. Qu'est-ce qui est affiché?
(c) Si l'équation était $2x=9$, qu'afficherait le programme? Explique.`,
    recap: "Résoudre des équations en cherchant parmi les nombres entiers.",
    ans: String.raw`(a) ${ct(out(P13))} (b) ${ct(out(P13b))} (c) Rien : la solution $4.5$ n'est pas un nombre entier, donc aucune valeur testée ne rend la condition vraie.` },
];
