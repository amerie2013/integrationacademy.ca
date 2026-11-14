// Fiche 3.1 — Coder des concepts algébriques (édition de l'enseignant)
import { codeT, ct, out, errOf } from "./codekit.mjs";
import { PROBLEMS } from "./p3_1.mjs";

const E1 = `a = 7
b = a - 2
a = a + b
print(a, b)`;
const E2 = `print(23 // 4, 23 % 4, -2 ** 4)`;
const E3 = `a = 6
b = 10
h = 4
A = (a + b) * h / 2
print(A)`;
const E4 = `def interet(P, r, t):
    return P * r * t

print(interet(1500, 0.04, 3))`;
const E5 = `def f(x):
    return x ** 2 - 4 * x

for x in range(0, 5):
    print(x, f(x))`;
const E6 = `x = -2
print(5 * x + 3 == -7)
print(x ** 2 - x == 6)`;
const E7 = `for x in range(-3, 4):
    print(x, 2 * x - 1 < 3)`;
const E8 = `for x in range(-5, 10):
    if 3 <= 2 * x + 1 < 11:
        print(x, end=" ")`;
const E9bad = `x = 4
y = 3x + 1
print(y)`;

export const WS = {
  code: "3.1",
  title: "Coder des concepts algébriques",
  bigideas: String.raw`Le code et l'algèbre partagent les mêmes idées. Une \textbf{variable} range une valeur (et ${ct("=")} signifie \emph{ranger}); une \textbf{expression} combine des valeurs avec des opérateurs qui suivent PEDMAS; une \textbf{fonction} est une formule dont les entrées sont des \textbf{paramètres}; et une \textbf{comparaison} comme ${ct("3 * x - 5 == 7")} est vraie (True) ou fausse (False), donc le code peut vérifier des solutions d'équations et chercher des valeurs qui vérifient des inéquations.`,
  goals: [
    String.raw`Utiliser des variables et l'affectation; expliquer ${ct("x = x + 3")}.`,
    String.raw`Écrire et évaluer des expressions avec ${ct("+ - * / // % **")}, en suivant PEDMAS.`,
    "Représenter des formules par des fonctions avec paramètres et construire des tables de valeurs.",
    String.raw`Utiliser ${ct("== != < <= > >=")} pour vérifier des solutions d'équations et d'inéquations.`,
    "Utiliser une boucle pour faire la liste des nombres entiers d'un intervalle qui vérifient une inéquation.",
  ],
  curriculum: "C2.1",
  vocab: [
    ["Affectation", String.raw`${ct("nom = expression")} : évaluer le membre de droite, le ranger dans la variable de gauche`],
    ["Fonction", String.raw`${ct("def nom(parametres):")} \ldots ${ct("return valeur")}`],
    ["Paramètre / argument", "le nom de l'entrée dans la définition / la valeur donnée lors d'un appel"],
    ["Booléen", String.raw`${ct("True")} ou ${ct("False")}, le résultat d'une comparaison`],
    ["Float / int", String.raw`une valeur décimale (${ct("3.5")}) / une valeur entière (${ct("3")})`],
  ],
  hook: String.raw`Écris au tableau : $x=x+5$. Demande : « Est-ce vrai? Pour quelle valeur de $x$? » (Jamais, en algèbre.) Ensuite, tape ${ct("x = 2")}, ${ct("x = x + 5")}, ${ct("print(x)")} dans Python (ou dans l'explorateur de la leçon) et exécute : le programme affiche $7$. Discutez : en code, ${ct("=")} est une instruction (« ranger »), et non un énoncé d'égalité. Cette seule idée ouvre la porte à tout le chapitre.`,
  concepts: [
    ["1. Variables et affectation", String.raw`Python évalue d'abord le membre de droite, puis range le résultat :
\begin{center}\begin{tabular}{lll}\toprule Ligne & Calcul & Valeur rangée \\\midrule ${ct("p = 12")} & --- & $p=12$\\ ${ct("p = p - 5")} & $12-5$ & $p=7$\\ ${ct("p = p * p")} & $7\times7$ & $p=49$\\\bottomrule\end{tabular}\end{center}
Une variable contient une seule valeur à la fois; l'ancienne valeur est remplacée.`],
    ["2. Les opérateurs et la priorité des opérations", String.raw`\begin{center}\begin{tabular}{llll}\toprule Python & Sens & Exemple & Résultat\\\midrule ${ct("/")} & diviser (donne un nombre décimal) & ${ct("9 / 2")} & ${ct(out("print(9 / 2)"))}\\ ${ct("//")} & quotient entier & ${ct("9 // 2")} & ${ct(out("print(9 // 2)"))}\\ ${ct("%")} & reste & ${ct("9 % 2")} & ${ct(out("print(9 % 2)"))}\\ ${ct("**")} & puissance & ${ct("3 ** 4")} & ${ct(out("print(3 ** 4)"))}\\\bottomrule\end{tabular}\end{center}
Ordre : les parenthèses, ${ct("**")}, puis ${ct("* / // %")}, puis ${ct("+ -")}, de gauche à droite. Chaque multiplication doit être écrite : $3x$ s'écrit ${ct("3 * x")}.`],
    ["3. Les fonctions sont des formules avec paramètres", String.raw`${codeT(`def aire_triangle(b, h):\n    return b * h / 2\n\nprint(aire_triangle(9, 4))`)}
${ct("b")} et ${ct("h")} sont des paramètres; ${ct("9")} et ${ct("4")} sont des arguments. Sortie : ${ct(out(`def aire_triangle(b, h):\n    return b * h / 2\nprint(aire_triangle(9, 4))`))}. Appeler une fonction dans une boucle ${ct("for")} construit une table de valeurs.`],
    ["4. Équations et inéquations", String.raw`${ct("==")} \emph{demande} si deux valeurs sont égales; ${ct("=")} \emph{range}. Une comparaison est vraie ou fausse, donc ${ct("print(2 * 5 - 3 == 7)")} affiche ${ct(out("print(2 * 5 - 3 == 7)"))}. Python permet les comparaisons enchaînées, comme en algèbre : ${ct("0 <= x < 5")} signifie $0\le x<5$. Une boucle avec un ${ct("if")} donne la liste de tous les nombres entiers d'un intervalle qui rendent la condition vraie.`],
  ],
  tips: [
    String.raw`Les élèves tapent ${ct("3x")} ou ${ct("x^2")} : montre le message d'erreur, puis ${ct("3 * x")} et ${ct("x ** 2")}.`,
    String.raw`${ct("-3 ** 2")} vaut $-9$ en Python, exactement comme $-3^2$ en math; mets les bases négatives entre parenthèses.`,
    String.raw`${ct("/")} donne toujours un nombre décimal (${ct("4 / 2")} vaut ${ct("2.0")}); utilise ${ct("//")} pour la division entière.`,
    String.raw`${ct("range(a, b)")} exclut $b$ --- demande aux élèves de faire la liste des valeurs avant d'exécuter.`,
    "Une boucle trouve seulement les nombres entiers qu'elle teste; relie toujours la recherche à la solution algébrique.",
  ],
  examples: [
    { title: "La réaffectation", q: String.raw`Trace le programme et donne la sortie.${codeT(E1)}`,
      steps: [String.raw`\textbf{Règle :} les lignes s'exécutent de haut en bas; dans une affectation, le membre de droite est calculé avec les valeurs \emph{actuelles}, puis rangé dans la variable de gauche (en remplaçant son ancienne valeur).`, String.raw`$a=7$; $b=7-2=5$.`, String.raw`$a=7+5=12$ (utilise la valeur actuelle de $b$).`, String.raw`\textbf{Vérification :} la valeur finale de $a$ est l'ancienne valeur de $a$ plus la nouvelle valeur de $b$ : $7+5=12$ \checkmark`], ans: ct(out(E1)) },
    { title: "Division entière, reste, puissances", q: String.raw`Prédis la sortie.${codeT(E2)}`,
      steps: [String.raw`\textbf{Opérateurs :} ${ct("//")} donne le quotient entier, ${ct("%")} le reste ($a=b\cdot q+r$), et ${ct("**")} est une puissance, calculée avant le signe moins placé devant.`, String.raw`$23=4\times5+3$ : quotient $5$, reste $3$.`, String.raw`${ct("-2 ** 4")} vaut $-(2^4)=-16$.`, String.raw`\textbf{Vérification :} $4\times5+3=23$ \checkmark; et $(-2)^4=16$ exigerait des parenthèses : ${ct("(-2) ** 4")}.`], ans: ct(out(E2)) },
    { title: "Une formule en code", q: String.raw`Écris le code de l'aire d'un trapèze $A=\frac{(a+b)h}{2}$ et évalue-la.${codeT(E3)}`,
      steps: [String.raw`\textbf{Règle :} Python suit PEDMAS et n'a pas de barre de fraction, donc tout ce que la barre regroupe doit être mis entre parenthèses.`, String.raw`La barre de fraction regroupe $(a+b)h$, donc il faut des parenthèses autour de $a+b$.`, String.raw`$(16)(4)/2=32$; ${ct("/")} donne un nombre décimal.`, String.raw`\textbf{Vérification à la main :} $\frac{(a+b)h}{2}$ avec les valeurs du programme donne $\frac{16\times4}{2}=32$ \checkmark`], ans: ct(out(E3)) },
    { title: "Une fonction à trois paramètres", q: String.raw`Prédis la sortie.${codeT(E4)}`,
      steps: [String.raw`\textbf{Règle :} les arguments sont associés aux paramètres dans l'ordre; la fonction évalue ensuite $I=Prt$ avec ces valeurs ($4\%=0.04$).`, String.raw`$P=1500$, $r=0.04$, $t=3$.`, String.raw`$1500(0.04)(3)=180$.`, String.raw`\textbf{Vérification :} une année rapporte $1500\times0.04=60$, et $3\times60=180$ \checkmark`], ans: ct(out(E4)) },
    { title: "Une table de valeurs", q: String.raw`Prédis chaque ligne.${codeT(E5)}`,
      steps: [String.raw`\textbf{Méthode :} la boucle substitue chaque $x$ dans $f(x)=x^2-4x$; calcule d'abord la puissance, puis soustrais.`, String.raw`$f(x)=x^2-4x$ pour $x=0$ à $4$.`, String.raw`$0, -3, -4, -3, 0$ : la table est symétrique par rapport à $x=2$.`, String.raw`\textbf{Vérifie une ligne :} $f(3)=9-12=-3$ \checkmark`], ans: out(E5).split("\n").map((l) => ct(l)).join("; ") },
    { title: "Vérifier des solutions", q: String.raw`$x=-2$ est-il une solution de $5x+3=-7$? de $x^2-x=6$?${codeT(E6)}`,
      steps: [String.raw`\textbf{Définition :} une valeur est une solution si les deux membres de l'équation sont égaux après la substitution. ${ct("==")} teste l'égalité et affiche True ou False.`, String.raw`$5(-2)+3=-7$ ✓.`, String.raw`$(-2)^2-(-2)=4+2=6$ ✓.`], ans: out(E6).split("\n").map((l) => ct(l)).join(", ") },
    { title: "Une inéquation vraie ou fausse", q: String.raw`Prédis la sortie.${codeT(E7)}`,
      steps: [String.raw`\textbf{Résous d'abord :} $2x-1<3\Rightarrow2x<4\Rightarrow x<2$; le programme affiche True exactement pour les valeurs testées de $x$ inférieures à $2$.`, String.raw`$2x-1<3$ signifie $x<2$.`, String.raw`True pour $-3,\dots,1$; False pour $2, 3$.`, String.raw`\textbf{Vérification de la borne :} $x=2$ : $2(2)-1=3$, et $3<3$ est faux (False) \checkmark`], ans: String.raw`True pour $x\le1$, False pour $x=2,3$` },
    { title: "Une inéquation double", q: String.raw`Quels nombres entiers sont affichés?${codeT(E8)}`,
      steps: [String.raw`\textbf{Règle :} pour une inéquation double, effectue la même opération sur les trois parties : soustrais $1$, puis divise par $2$.`, String.raw`$3\le2x+1<11\Rightarrow2\le2x<10\Rightarrow1\le x<5$.`, String.raw`\textbf{Vérifie les bornes :} $x=1$ : $2(1)+1=3$, et $3\le3$ \checkmark; $x=5$ : $11<11$ est faux, donc $5$ n'est pas affiché \checkmark`], ans: ct(out(E8).trim()) },
    { title: "Une erreur de syntaxe", q: String.raw`Pourquoi ce programme échoue-t-il?${codeT(E9bad)}`,
      steps: [String.raw`\textbf{Règle :} en algèbre, $3x$ signifie $3\times x$, mais Python a besoin que chaque multiplication soit écrite avec ${ct("*")}; ${ct("3x")} ne respecte pas la grammaire, donc le programme ne s'exécute pas.`, String.raw`Python signale « ${errOf(E9bad).message} » à la ligne ${errOf(E9bad).line}.`, String.raw`${ct("3x")} doit s'écrire ${ct("3 * x")}; la sortie est alors ${ct(out(E9bad.replace("3x", "3 * x")))}.`], ans: String.raw`écris ${ct("y = 3 * x + 1")}` },
  ],
  problems: PROBLEMS,
};
