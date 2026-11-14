// Fiche 3.3 — Lire, prédire et modifier du code (édition de l'enseignant)
import { codeT, ct, out, errOf } from "./codekit.mjs";
import { PROBLEMS } from "./p3_3.mjs";

const E1 = `p = 1
for i in range(1, 5):
    p = p * i + 1
print(p)`;
const E2 = `for n in range(10, 16):
    if n % 2 == 0 and n % 3 == 0:
        print("les deux")
    elif n % 2 == 0:
        print("pair")
    else:
        print(n)`;
const E3 = `def h(x):
    if x < 0:
        return -x
    return 2 * x

print(h(-5) + h(3))`;
const E4bad = `for i in range(3):
print(i)`;
const E5 = `for k in range(-2, 3):
    print(12 / k)`;
const E6 = `# Objectif : moyenne de 70, 80 et 90
moyenne = 70 + 80 + 90 / 3
print(moyenne)`;
const E7 = `n = 0
while n < 10:
    n = n + 2
print(n)`;
const E8 = `montant = 1000
for annee in range(1, 4):
    montant = montant + 1000 * 0.06
print(round(montant, 2))`;
const E8c = E8.replace("1000 * 0.06", "montant * 0.06");
const E9 = `argent = 120
semaines = 0
while semaines < 52:
    argent = argent + 15
    semaines = semaines + 1
print(argent)`;

export const WS = {
  code: "3.3",
  title: "Lire, prédire et modifier du code",
  bigideas: String.raw`Pour comprendre du code, \textbf{trace-le} : tiens un tableau avec une colonne par variable et note chaque changement. Les erreurs sont de trois types --- de \textbf{syntaxe} (le code ne peut pas démarrer), d'\textbf{exécution} (il plante sur une ligne) et de \textbf{logique} (il s'exécute, mais la réponse est fausse). Du code bien écrit garde les \textbf{paramètres} d'une situation dans des variables nommées, donc \textbf{modifier} une valeur ou une condition modélise une nouvelle situation; prédis toujours l'effet avant d'exécuter.`,
  goals: [
    "Tracer des programmes avec des boucles, des conditions et des fonctions à l'aide d'une table de traçage.",
    "Prédire la sortie avant d'exécuter le code, et vérifier les prédictions.",
    "Reconnaître les erreurs de syntaxe, d'exécution et de logique, et les corriger.",
    "Trouver et corriger les erreurs de décalage de un.",
    "Modifier des paramètres, des contraintes et des conditions pour modéliser des situations semblables ou nouvelles.",
  ],
  curriculum: "C2.3",
  vocab: [
    ["Table de traçage", "des colonnes pour les variables, une ligne par changement"],
    ["Erreur de syntaxe", "ne respecte pas la grammaire de Python; rien ne s'exécute"],
    ["Erreur d'exécution", String.raw`le programme plante pendant l'exécution, p. ex. ${ct("ZeroDivisionError")}`],
    ["Erreur de logique", "s'exécute, mais donne un mauvais résultat"],
    ["Paramètre / contrainte", "une valeur qui décrit la situation / une condition qui contrôle le code"],
  ],
  hook: String.raw`Projette un programme de 6 lignes sans l'exécuter. En dyades, les élèves écrivent leur prédiction de la sortie sur un mini-tableau blanc; ensuite, exécute-le. Souligne les bonnes prédictions, et passe le plus de temps sur les mauvaises : « Quelle ligne as-tu lue différemment de l'ordinateur? » Cette question est au cœur de la leçon d'aujourd'hui.`,
  concepts: [
    ["1. Les tables de traçage", String.raw`${codeT(`a = 2\nb = 7\nfor i in range(3):\n    a = a + b\n    b = b - a`)}
\begin{center}\begin{tabular}{cccc}\toprule après & i & a & b\\\midrule départ & --- & 2 & 7\\ passage 1 & 0 & 9 & $-2$\\ passage 2 & 1 & 7 & $-9$\\ passage 3 & 2 & $-2$ & $-7$\\\bottomrule\end{tabular}\end{center}
Chaque ligne utilise les valeurs \emph{à ce moment-là} : au passage 1, ${ct("b = b - a")} utilise la nouvelle valeur $a=9$.`],
    ["2. Trois types d'erreurs", String.raw`\begin{center}\begin{tabular}{lll}\toprule Type & Exemple & Python signale\\\midrule syntaxe & deux-points ou indentation manquants & ${ct(errOf(E4bad).message)}\\ exécution & ${ct("12 / 0")}, nom inconnu & ${ct(errOf("print(12 / 0)").message)}\\ logique & ${ct("70 + 80 + 90 / 3")} & rien --- mauvaise réponse\\\bottomrule\end{tabular}\end{center}`],
    ["3. Les erreurs de décalage de un", String.raw`${ct("range(1, 10)")} a $9$ valeurs et s'arrête à $9$. Une boucle while avec ${ct("<")} plutôt que ${ct("<=")} s'exécute un nombre de fois différent. Pour corriger, fais la liste de la première et de la dernière valeur que la boucle utilise réellement.`],
    ["4. Modifier du code", String.raw`Change les \textbf{paramètres} (valeur de départ, taux, pas) pour modéliser une situation semblable; change les \textbf{contraintes} (bornes de la boucle, conditions) pour répondre à une autre question; change la \textbf{formule} pour modéliser une nouvelle situation (intérêt simple $\to$ intérêt composé; dépréciation $\to$ appréciation). Prédis d'abord, puis exécute.`],
  ],
  tips: [
    "Exige une prédiction écrite avant d'exécuter quelque code que ce soit.",
    "Les tables de traçage révèlent la plupart des erreurs de logique; exige une ligne par changement, et non par ligne de code.",
    String.raw`Python distingue les majuscules des minuscules dans les noms : ${ct("Total")} et ${ct("total")} sont des variables différentes.`,
    "Les messages d'erreur indiquent où Python a remarqué le problème; la cause peut se trouver une ligne plus haut.",
    "Quand tu modifies du code, change une seule chose à la fois et prédis son effet.",
  ],
  examples: [
    { title: "Une table de traçage", q: String.raw`Trace le programme et donne la sortie.${codeT(E1)}`,
      steps: [String.raw`\textbf{Méthode :} une ligne par passage; calcule la nouvelle valeur de $p$ à partir des valeurs actuelles de $p$ et de $i$ : $1\cdot1+1=2$, $2\cdot2+1=5$, $5\cdot3+1=16$, $16\cdot4+1=65$.`, String.raw`$p$ : $1\to2\to5\to16\to65$ (à chaque passage : $p\cdot i+1$ avec $i=1,2,3,4$).`], ans: ct(out(E1)) },
    { title: "Prédire avec des conditions", q: String.raw`Prédis chaque ligne.${codeT(E2)}`,
      steps: [String.raw`\textbf{Règle :} les conditions sont testées dans l'ordre et la première qui est vraie détermine la ligne, donc « multiple de $2$ et de $3$ » doit être testé avant « pair ».`, String.raw`$12$ est un multiple de $2$ et de $3$; $10$ et $14$ sont seulement pairs; les nombres impairs s'affichent eux-mêmes.`], ans: out(E2).split("\n").map((l) => ct(l)).join(", ") },
    { title: "Tracer une fonction", q: String.raw`Qu'affiche ce programme?${codeT(E3)}`,
      steps: [String.raw`\textbf{Règle :} chaque appel exécute le corps de la fonction avec son propre argument; la branche du if est choisie selon le signe de l'entrée.`, String.raw`$h(-5)$ : $-5<0$, donc $5$.`, String.raw`$h(3)=6$; $5+6=11$.`], ans: ct(out(E3)) },
    { title: "Une erreur de syntaxe", q: String.raw`Pourquoi ce programme ne s'exécute-t-il pas?${codeT(E4bad)}`,
      steps: [String.raw`\textbf{Règle :} Python utilise l'indentation pour savoir quelles lignes appartiennent à une boucle; une ligne de boucle qui se termine par un deux-points doit être suivie d'un corps indenté.`, String.raw`Python signale ${ct(errOf(E4bad).message)} (ligne ${errOf(E4bad).line}).`, String.raw`Le corps d'une boucle doit être indenté : quatre espaces avant ${ct("print(i)")}.`], ans: String.raw`indente la ligne 2; sortie ${out(E4bad.replace("\nprint", "\n    print")).split("\n").map((l) => ct(l)).join(", ")}` },
    { title: "Une erreur d'exécution", q: String.raw`Que se passe-t-il?${codeT(E5)}`,
      steps: [String.raw`\textbf{Erreur d'exécution :} le code respecte la grammaire, mais une étape est impossible --- ici, diviser par $0$, ce qui n'est pas défini en math non plus.`, String.raw`$k=-2$ : ${ct("-6.0")}; $k=-1$ : ${ct("-12.0")}.`, String.raw`$k=0$ : ${ct(errOf(E5).message)}; le programme s'arrête.`], ans: "deux lignes de sortie, puis le programme plante" },
    { title: "Une erreur de logique", q: String.raw`Qu'affiche ce programme, et pourquoi est-ce faux?${codeT(E6)}`,
      steps: [String.raw`\textbf{Erreur de logique :} le programme s'exécute, mais donne une mauvaise réponse. PEDMAS fait la division avant l'addition, donc seule la dernière note est divisée par $3$.`, String.raw`Seul $90$ est divisé par $3$ : $70+80+30=180$.`, String.raw`Correction : ${ct("(70 + 80 + 90) / 3")} donne ${ct(out("print((70 + 80 + 90) / 3)"))}.`, String.raw`\textbf{Vraisemblance :} une moyenne de $180$ est impossible pour des notes entre $70$ et $90$; la bonne moyenne, $80$, se situe entre elles \checkmark`], ans: String.raw`${ct(out(E6))} (faux); bonne réponse ${ct(out("print((70 + 80 + 90) / 3)"))}` },
    { title: "Un décalage de un", q: String.raw`Qu'affiche ce programme? Qu'est-ce qui change avec ${ct("n <= 10")}?${codeT(E7)}`,
      steps: [String.raw`\textbf{Règle :} une boucle while s'exécute seulement tant que sa condition est vraie (True); à la limite, ${ct("<")} et ${ct("<=")} diffèrent d'un passage.`, String.raw`$n$ : $0, 2, 4, 6, 8, 10$; à $10$, ${ct("10 < 10")} est faux (False).`, String.raw`Avec ${ct("<=")}, un passage de plus : ${ct(out(E7.replace("n < 10", "n <= 10")))}.`], ans: ct(out(E7)) },
    { title: "Modifier la formule", q: String.raw`Prédis la sortie. Ensuite, remplace ${ct("1000 * 0.06")} par ${ct("montant * 0.06")}. Quelle situation chaque version modélise-t-elle?${codeT(E8)}`,
      steps: [String.raw`\textbf{Deux modèles :} l'intérêt simple ajoute le même montant ($6\%$ des $1000$ \$ d'origine) chaque année; l'intérêt composé ajoute $6\%$ du montant actuel, c'est-à-dire qu'il multiplie par $1.06$.`, String.raw`Intérêt simple : $60$ chaque année : ${ct(out(E8))}.`, String.raw`Composé : $1000(1.06)^3$ : ${ct(out(E8c))}.`], ans: "intérêt simple ou intérêt composé" },
    { title: "Modifier une contrainte", q: String.raw`Qu'affiche ce programme? Modifie-le pour trouver combien de semaines il faut pour atteindre $1000$ \$.${codeT(E9)}`,
      steps: [String.raw`\textbf{Modèle :} argent $=120+15w$ après $w$ semaines; changer la condition de la boucle change ce que la boucle cherche.`, String.raw`$52$ semaines : $120+52(15)$.`, String.raw`Change la condition pour ${ct("argent < 1000")} : ${ct(out(E9.replace("semaines < 52", "argent < 1000").replace("print(argent)", "print(semaines)")))} semaines ($120+15w\ge1000$).`, String.raw`\textbf{Vérification :} $120+15w\ge1000$ donne $w\ge58.\overline6$, donc $59$ semaines complètes \checkmark`], ans: ct(out(E9)) },
  ],
  problems: PROBLEMS,
};
