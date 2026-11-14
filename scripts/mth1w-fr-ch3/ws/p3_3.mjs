// Fiche 3.3 — problèmes : 3 de connaissance, 5 d'application, 5 problèmes difficiles (à plusieurs parties).
import { codeT, ct, out, errOf } from "./codekit.mjs";

const P1 = `a = 10
for i in range(3):
    a = a - 4
print(a)`;
const P2 = `x = 5
if x % 2 == 0:
    print("pair")
else:
    print("impair")`;
const P3 = `total = 0
for k in range(1, 5)
    total = total + k`;
const P4 = `def g(x):
    if x > 0:
        return x - 3
    return x + 3

print(g(g(4)))`;
const P5 = `n = 1
s = 0
while n <= 5:
    s = s + 2 * n - 1
    n = n + 1
print(s)`;
const P6 = `for k in range(-2, 3):
    print(12 / k)`;
const P7 = `compteur = 0
for x in range(1, 10):
    compteur = compteur + 1
print(compteur)`;
const P8 = `prix = 80
for annee in range(3):
    prix = prix * 1.10
print(round(prix, 2))`;
const P9 = `def f(x):
    return x * x - 2 * x

total = 0
for x in range(1, 5):
    total = total + f(x)
    print(x, f(x), total)`;
const P10 = `# Objectif : afficher l'aire et le périmètre d'un rectangle de 6 sur 4
l = 6
w = 4
aire = l * W
perimetre = 2 * l + w
print(aire, perimetre)`;
const P10fixed = P10.replace("l * W", "l * w").replace("2 * l + w", "2 * (l + w)");
const P11 = `solde = 2000
taux = 0.05
for annee in range(1, 4):
    interet = 2000 * taux
    solde = solde + interet
    print(annee, round(solde, 2))`;
const P11c = P11.replace("interet = 2000 * taux", "interet = solde * taux");
const P12 = `n = 1
while 2 * n + 3 <= 50:
    n = n + 1
print(n)`;
const P12b = P12.replace("2 * n + 3 <= 50", "5 * n - 4 <= 50");
const P12c = P12.replace("2 * n + 3 <= 50", "2 * n + 3 <= 120");
const P13 = `for d in range(-3, 4):
    print(d, 6 / d)`;
const P13fix = `for d in range(-3, 4):
    if d != 0:
        print(d, 6 / d)`;

export const PROBLEMS = [
  { level: 1, q: String.raw`Trace le programme et donne la sortie.${codeT(P1)}`, recap: String.raw`${ct("a = 10")}, soustraire 4 trois fois.`, ans: ct(out(P1)) },
  { level: 1, q: String.raw`Qu'affiche ce programme?${codeT(P2)}`, recap: String.raw`${ct("x % 2 == 0")} avec ${ct("x = 5")}.`, ans: ct(out(P2)) },
  { level: 1, q: String.raw`Ce programme ne s'exécutera pas. Trouve l'erreur et corrige-la.${codeT(P3)}`, recap: "Deux-points manquant après l'en-tête d'un for.", ans: String.raw`${errOf(P3).message.replace(/'/g, "")} (ligne ${errOf(P3).line}); ajoute un deux-points : ${ct("for k in range(1, 5):")}` },
  { level: 2, q: String.raw`Qu'affiche ce programme?${codeT(P4)}`, recap: String.raw`${ct("g(g(4))")} pour une fonction ${ct("g")} définie par parties.`, ans: String.raw`${ct(out(P4))} ($g(4)=1$, $g(1)=-2$)` },
  { level: 2, q: String.raw`Fais une table de traçage pour ${ct("n")} et ${ct("s")} et donne la sortie. Quelle régularité remarques-tu?${codeT(P5)}`, recap: "Somme de nombres impairs avec une boucle while.", ans: String.raw`${ct(out(P5))} : $1+3+5+7+9=25=5^2$` },
  { level: 2, q: String.raw`Que se passe-t-il quand ce programme s'exécute? Donne la sortie avant qu'il s'arrête.${codeT(P6)}`, recap: String.raw`${ct("12 / k")} pour $k=-2$ à $2$.`, ans: String.raw`affiche ${ct("-6.0")} et ${ct("-12.0")}, puis une ${ct(errOf(P6).kind)} à $k=0$ (erreur d'exécution)` },
  { level: 2, q: String.raw`Le programme devrait compter les nombres naturels de $1$ à $10$. Qu'affiche-t-il? Corrige-le.${codeT(P7)}`, recap: "Décalage de un en comptant de 1 à 10.", ans: String.raw`${ct(out(P7))}; utilise ${ct("range(1, 11)")} pour obtenir ${ct(out(P7.replace("range(1, 10)", "range(1, 11)")))}` },
  { level: 2, q: String.raw`Un prix augmente de $10\%$ par année. Prédis la sortie, puis modifie le programme pour une \emph{diminution} de $10\%$ par année et prédis de nouveau.${codeT(P8)}`, recap: "Prix de 80 qui augmente (puis diminue) de 10 % par année.", ans: String.raw`${ct(out(P8))}; avec ${ct("0.90")} : ${ct(out(P8.replace("1.10", "0.90")))}` },
  { level: 3, space: 5.5,
    q: String.raw`${codeT(P9)}
(a) Remplis une table de traçage avec les colonnes ${ct("x")}, ${ct("f(x)")}, ${ct("total")}.
(b) Quelle est la valeur finale de ${ct("total")}?
(c) Modifie une ligne pour que le programme additionne $f(x)$ pour $x=1$ à $10$. Utilise la régularité de ta table ou le programme pour trouver le nouveau total.`,
    recap: String.raw`Accumuler $f(x)=x^2-2x$.`,
    ans: String.raw`(a) ${out(P9).split("\n").map((l) => ct(l)).join("; ")} (b) ${ct(out(P9).split("\n").pop().split(" ").pop())} (c) ${ct("range(1, 11)")} : total ${ct(out(P9.replace("range(1, 5)", "range(1, 11)").replace("    print(x, f(x), total)", "print(total)").replace(/\n+print\(total\)$/, "\nprint(total)")).split("\n").pop())}` },
  { level: 3, space: 5,
    q: String.raw`Ce programme contient deux erreurs.${codeT(P10)}
(a) Quelle erreur arrête le programme? De quel type d'erreur s'agit-il?
(b) Une fois celle-ci corrigée, le programme donne encore un mauvais périmètre. De quel type d'erreur s'agit-il? Corrige-la.
(c) Donne la sortie correcte.`,
    recap: "Programme du rectangle avec une NameError et une erreur de logique.",
    ans: String.raw`(a) ${ct(errOf(P10).message)} à la ligne ${errOf(P10).line} : une erreur d'exécution (Python distingue les majuscules des minuscules dans les noms) (b) erreur de logique : ${ct("2 * l + w")} devrait être ${ct("2 * (l + w)")} (c) ${ct(out(P10fixed))}` },
  { level: 3, space: 5.5,
    q: String.raw`${codeT(P11)}
(a) Prédis la sortie. S'agit-il d'intérêt simple ou d'intérêt composé? Comment le sais-tu?
(b) Quel changement unique en fait de l'intérêt composé (intérêt gagné sur le solde actuel)?
(c) Prédis la sortie après ton changement, et explique pourquoi l'écart augmente chaque année.`,
    recap: "Intérêt simple ou composé sur 2000 à 5 %.",
    ans: String.raw`(a) ${out(P11).split("\n").map((l) => ct(l)).join("; ")} : simple (l'intérêt est toujours $5\%$ de $2000$) (b) ${ct("interet = solde * taux")} (c) ${out(P11c).split("\n").map((l) => ct(l)).join("; ")} : on gagne de l'intérêt sur les intérêts précédents` },
  { level: 3, space: 5,
    q: String.raw`La figure $n$ d'une régularité a $2n+3$ tuiles. Ce programme trouve la première figure qui a plus de $50$ tuiles.${codeT(P12)}
(a) Prédis la sortie et vérifie avec une inéquation.
(b) Modifie le programme pour la régularité $5n-4$. Prédis la sortie.
(c) Modifie-le plutôt pour trouver la première figure de la régularité d'origine qui a plus de $120$ tuiles.`,
    recap: String.raw`Premier $n$ tel que $2n+3>50$; règle et limite modifiées.`,
    ans: String.raw`(a) ${ct(out(P12))} : $2n+3>50$, $n>23.5$ (b) ${ct(out(P12b))} : $5n-4>50$, $n>10.8$ (c) ${ct(out(P12c))} : $n>58.5$` },
  { level: 3, space: 5,
    q: String.raw`${codeT(P13)}
(a) Qu'est-ce qui est affiché avant que le programme s'arrête? Pourquoi s'arrête-t-il?
(b) Modifie le programme pour qu'il saute $d=0$ et se termine. Montre la sortie complète.
(c) Explique le lien avec le fait que $\frac{6}{0}$ n'est pas défini.`,
    recap: String.raw`${ct("6 / d")} pour $d=-3$ à $3$.`,
    ans: String.raw`(a) ${out(P13.replace("range(-3, 4)", "range(-3, 0)")).split("\n").map((l) => ct(l)).join("; ")}, puis une ${ct(errOf(P13).kind)} à $d=0$ (b) ajoute ${ct("if d != 0:")} : ${out(P13fix).split("\n").map((l) => ct(l)).join("; ")} (c) aucun nombre multiplié par $0$ ne donne $6$, donc Python refuse de diviser par $0$.` },
];
