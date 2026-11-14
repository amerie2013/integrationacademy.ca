// Devoirs du chapitre 3 (français) : 10 questions chacun — Connaissance 1-3, Habiletés de la pensée 4-5,
// Communication 6-7, Mise en application 8-10 (même répartition que les devoirs anglais).
// [[clé|légende]] dans une ligne est remplacé par une figure (liste de code SVG téléversée) lors de la publication.
import { codeFig } from "../bank/code.mjs";

export const ASSIGNMENTS = [
  { code: "3.1", title: "Devoir 3.1 — Coder des concepts algébriques", figs: {
      a: codeFig("p = 6\nq = p * 3 - 4\np = q - p\nprint(p, q)"),
      f: codeFig("def g(x):\n    return x ** 2 - 6 * x + 5\n\nfor x in range(0, 7):\n    print(x, g(x))"),
      ineq: codeFig("for x in range(-10, 11):\n    if 7 - 3 * x >= -5:\n        print(x, end=\" \")") }, lines: [
    "Connaissance et compréhension",
    String.raw`1. Prédis la sortie de print(5 + 12 // 5 * 2) et celle de print(5 + 12 / 5 * 2). Explique la différence.`,
    String.raw`2. Écris une ligne de Python qui range \(y=\dfrac{3x-4}{2}\) dans y.`,
    String.raw`3. Trace le programme et donne sa sortie. [[a|Programme de la question 3]]`,
    "Habiletés de la pensée",
    String.raw`4. Prédis la table de valeurs affichée par le programme, puis utilise-la pour trouver les valeurs de \(x\) pour lesquelles \(g(x)<0\). [[f|Programme de la question 4]]`,
    String.raw`5. Prédis la sortie, puis résous \(7-3x\ge-5\) avec l'algèbre et compare. [[ineq|Programme de la question 5]]`,
    "Communication",
    "6. Explique la différence entre un paramètre et un argument. Utilise une de tes propres fonctions comme exemple.",
    String.raw`7. Explique pourquoi x = x + 5 a du sens en Python, alors que \(x=x+5\) n'a pas de solution en algèbre.`,
    "Mise en application",
    String.raw`8. Écris une fonction qui renvoie le coût d'un concert pour \(n\) personnes si les billets coûtent 38.50 dollars chacun, plus des frais de réservation de 12 dollars. Donne le coût pour 4 personnes.`,
    String.raw`9. Un forfait de téléphone coûte \(25+0.15m\) dollars et un autre coûte \(40+0.05m\) dollars pour \(m\) minutes. Écris un programme qui affiche le forfait le moins cher pour m = 100, 150 et 200.`,
    String.raw`10. Écris un programme qui utilise une boucle et un if pour faire la liste de tous les nombres entiers de \(-20\) à \(20\) qui vérifient \(-8<4x+4\le24\). Vérifie avec l'algèbre.`,
  ] },
  { code: "3.2", title: "Devoir 3.2 — Construire du code à partir d'étapes", figs: {
      loop: codeFig("total = 0\nfor k in range(3, 30, 4):\n    total = total + k\nprint(total)"),
      water: codeFig("eau = 1200\nminutes = 0\nwhile eau > 300:\n    eau = eau - 75\n    minutes = minutes + 1\nprint(minutes, eau)") }, lines: [
    "Connaissance et compréhension",
    "1. Fais la liste des valeurs produites par range(4, 25, 5) et par range(20, 0, -6).",
    "2. Prédis la sortie du programme. [[loop|Programme de la question 2]]",
    "3. Nomme les trois structures à partir desquelles chaque programme est construit, avec un exemple d'une ligne pour chacune.",
    "Habiletés de la pensée",
    String.raw`4. Un réservoir contient 1200 L et se vide de 75 L par minute. Prédis la sortie du programme, puis vérifie avec une inéquation. [[water|Programme de la question 4]]`,
    "5. Écris un programme qui compte les nombres de 1 à 500 qui sont des multiples de 7, mais pas des multiples de 2. Explique comment tu pourrais vérifier la réponse sans ordinateur.",
    "Communication",
    String.raw`6. Trace un organigramme pour ce problème : « Une plante mesure 4 cm et pousse de 1.5 cm par semaine. Après combien de semaines mesure-t-elle plus de 30 cm? » Ensuite, écris le code.`,
    "7. Explique quand tu choisirais une boucle for et quand tu choisirais une boucle while. Donne un exemple de chacune tiré de la vie courante.",
    "Mise en application",
    String.raw`8. Le stationnement coûte 4 dollars pour la première heure et 2.50 dollars pour chaque heure supplémentaire, jusqu'à un maximum de 20 dollars. Écris une fonction avec if / elif / else qui donne le coût pour \(h\) heures complètes, et donne le coût pour 1, 5 et 10 heures.`,
    String.raw`9. Une voiture qui vaut 26000 dollars perd 15 % de sa valeur chaque année. Écris un programme qui trouve combien d'années il faut pour qu'elle vaille moins de 13000 dollars.`,
    String.raw`10. Écris un programme qui trouve le plus petit nombre naturel \(n\) pour lequel \(1+2+3+\dots+n>750\).`,
  ] },
  { code: "3.3", title: "Devoir 3.3 — Lire, prédire et modifier du code", figs: {
      trace: codeFig("x = 3\ny = 1\nfor i in range(4):\n    y = y * x\n    x = x - 1\nprint(x, y)"),
      bug: codeFig("# Objectif : compter les nombres pairs de 2 à 20\ncompteur = 0\nfor n in range(2, 20)\n    if n % 2 == 0:\n        compteur = compteur + 1\nprint(compteur)"),
      model: codeFig("prix = 900\ntaux = 0.04\nannee = 0\nwhile prix < 1200:\n    prix = prix * (1 + taux)\n    annee = annee + 1\nprint(annee, round(prix, 2))") }, lines: [
    "Connaissance et compréhension",
    "1. Fais une table de traçage pour x, y et i, et donne la sortie. [[trace|Programme de la question 1]]",
    "2. Nomme les trois types d'erreurs et donne un exemple de chacun.",
    String.raw`3. Qu'affiche for n in range(1, 8): print(n * n)? Combien de lignes?`,
    "Habiletés de la pensée",
    "4. Le programme contient deux erreurs. Trouve-les toutes les deux, dis de quel type est chacune et corrige-les. Qu'affiche le programme corrigé? [[bug|Programme de la question 4]]",
    "5. Un programme qui devrait calculer 1 + 2 + … + 50 affiche 1225. Sans voir le code, explique l'erreur la plus probable et comment tu le sais.",
    "Communication",
    "6. Explique comment une table de traçage t'aide à trouver une erreur de logique. Utilise un exemple.",
    "7. Explique la différence entre modifier un paramètre et modifier une contrainte dans un programme. Donne un exemple de chacun à l'aide du programme de la question 8.",
    "Mise en application",
    "8. Le programme modélise un prix qui augmente de 4 % par année. Prédis sa sortie. [[model|Programme de la question 8]]",
    String.raw`9. Modifie le programme de la question 8 pour que le prix augmente de 6 % par année, et prédis la nouvelle sortie. Ensuite, modifie-le pour modéliser un prix qui diminue de 4 % par année à partir de 900 dollars, jusqu'à ce qu'il soit inférieur à 600 dollars.`,
    "10. Écris ton propre court programme (de 5 à 8 lignes) qui modélise une situation réelle à l'aide d'une boucle. Échange-le avec un ou une camarade : chacun prédit la sortie du programme de l'autre avant de l'exécuter.",
  ] },
];
