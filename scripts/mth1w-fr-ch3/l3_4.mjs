// MTH1W-FR 3.4 — Révision du chapitre 3 (leçon de révision, placée après 3.3)
import { intro, section, keyIdea, widget, examples, practice, wrapUp, table, q, num, txt, choice, py, ic, out, shell } from "./lib.mjs";
import { lessonId } from "../mth1w-fr/common.mjs";

export const TITLE = "3.4 Révision du chapitre 3";
export const ID = lessonId(3, 4);

const W = `# Défi varié : les tuiles d'une régularité, et la première figure qui dépasse une limite
def tuiles(n):
    return 5 * n - 2

for n in range(1, 6):
    print("figure", n, ":", tuiles(n))

n = 1
while tuiles(n) <= 200:
    n = n + 1
print("première figure avec plus de 200 tuiles :", n)`;

const E1 = `def h(t):
    return 80 - 5 * t ** 2

for t in range(0, 5):
    print(t, h(t))`;
const E2 = `prix = 120
rabais = 0.25
prix_solde = prix * (1 - rabais)
final = prix_solde * 1.13
print(round(final, 2))`;
const E3 = `n = 0
total = 0
while total < 100:
    n = n + 1
    total = total + n
print(n, total)`;
const E4 = `def livraison(kg):
    if kg <= 1:
        return 8
    elif kg <= 5:
        return 8 + 2.5 * (kg - 1)
    else:
        return 18 + 2 * (kg - 5)

print(livraison(0.5), livraison(3), livraison(9))`;
const E5 = `for x in range(-10, 11):
    if 4 * x - 7 >= 2 * x + 5 and x < 9:
        print(x, end=" ")`;

const M1 = `a = 4
b = a ** 2 - 3 * a
print(b)`;
const M2 = `s = 0
for k in range(2, 12, 3):
    s = s + k
print(s)`;
const M3 = `v = 1000
annees = 0
while v < 2000:
    v = v * 1.08
    annees = annees + 1
print(annees)`;
const M5 = `compteur = 0
for x in range(-5, 6):
    if x ** 2 < 10:
        compteur = compteur + 1
print(compteur)`;

export const blocks = () => [
  intro({
    icon: "🧩",
    title: "Révision du chapitre 3 — Le codage",
    overview: String.raw`Cette page rassemble le chapitre sur le codage : les idées clés sur un seul écran, des questions où tu choisis la bonne structure, des exemples variés qui combinent l'algèbre et le code, un défi varié à exécuter et à modifier, et une liste de vérification pour savoir si tu es prêt ou prête. Fais-la après les leçons 3.1 à 3.3.`,
    goals: [
      "te rappeler l'idée clé, un exemple typique et l'erreur la plus fréquente de chaque leçon;",
      "choisir entre for, while et if selon la situation;",
      "lire, tracer et modifier des programmes qui utilisent des fonctions, des boucles, des conditions et des inéquations;",
      "vérifier si tu es prêt ou prête pour le test du chapitre.",
    ],
    curriculum: "C2.1 à C2.3 (tout le chapitre)",
    prior: [
      [String.raw`Qu'affiche ${ic("print(17 % 5)")}?`, String.raw`\(2\).`],
      [String.raw`Combien de valeurs contient ${ic("range(3, 10)")}?`, String.raw`\(7\).`],
      [String.raw`Quelle est la différence entre ${ic("=")} et ${ic("==")}?`, "= range une valeur; == compare deux valeurs."],
    ],
    words: [
      ["Variable", "un espace de stockage nommé pour une valeur", ic("x = 5")],
      ["Fonction / paramètre", "une formule réutilisable et ses entrées", ic("def f(x):")],
      ["Boucle", "répéter du code", `${ic("for")} / ${ic("while")}`],
      ["Condition", "un test vrai/faux (True/False)", ic("4 * x - 7 >= 5")],
      ["Table de traçage", "le relevé des valeurs des variables, étape par étape", ""],
    ],
  }),

  section("📌 Le chapitre sur une page", table(["Leçon", "Idée clé", "Code typique", "Attention"], [
    ["3.1 Concepts algébriques", "variables, opérateurs, fonctions avec paramètres, comparaisons", ic("def f(x): return 2 * x ** 2 - 3"), `${ic("**")} et non ${ic("^")}; écris ${ic("*")}; ${ic("=")} ou ${ic("==")}`],
    ["3.2 Construire à partir d'étapes", "décomposer; séquence, sélection, répétition; accumulateurs", ic("while epargne < 1000:"), `${ic("range")} s'arrête avant la fin; les boucles doivent se terminer`],
    ["3.3 Lire et modifier", "tables de traçage; erreurs de syntaxe, d'exécution et de logique; changer les paramètres", ic("taux = 0.18"), "les erreurs de logique ne donnent aucun message — vérifie avec une estimation"],
  ])),

  section("📌 Choisis la structure", String.raw`<p>Avant d'écrire du code, décide de quelle structure chaque partie du problème a besoin.</p>
  ${keyIdea(String.raw`<strong>Nombre de répétitions connu</strong> → ${ic("for")}. <strong>Répéter jusqu'à ce que quelque chose se produise</strong> → ${ic("while")}. <strong>Une règle qui dépend d'une valeur</strong> → ${ic("if / elif / else")}. <strong>Une formule utilisée plusieurs fois</strong> → une fonction.`)}`),

  practice([
    q("structure", "Un programme doit afficher une table de valeurs de y = 3x − 2 pour x = −5 à 5. Quelle structure convient le mieux?", choice(["une boucle for sur range(-5, 6)", "une boucle while qui s'arrête quand y > 100", "un if / else", "une seule instruction print"], 0),
      "Le nombre de valeurs est connu d'avance.", [String.raw`${ic("for x in range(-5, 6): print(x, 3 * x - 2)")}`], "une boucle for"),
    q("structure", "Combien de mois faut-il pour qu'un solde qui augmente de 2 % par mois double? Quelle structure convient le mieux?", choice(["une boucle while", "une boucle for sur range(12)", "un if / else", "une fonction sans boucle"], 0),
      "Tu ne sais pas combien de passages il faudra.", [String.raw`${ic("while solde < 2 * depart:")}`], "une boucle while"),
    q("structure", "Un taxi demande un tarif pour les 5 premiers kilomètres et un autre tarif ensuite. Quelle structure modélise cette situation?", choice(["if / else", "une boucle for", "une boucle while", "une liste"], 0),
      "La règle dépend de la distance.", ["Une règle définie par parties a besoin d'une décision."], "if / else"),
    q("syntaxe", String.raw`Quelle ligne vérifie correctement si \(x\) satisfait \(2x+3\le11\)?`, choice([ic("if 2 * x + 3 <= 11:"), ic("if 2x + 3 <= 11:"), ic("if 2 * x + 3 =< 11:"), ic("if 2 * x + 3 <= 11")], 0),
      "Écris la multiplication, utilise <=, et termine par un deux-points.", [String.raw`${ic("=<")} n'est pas un opérateur; il manque le deux-points dans le dernier choix.`], ic("if 2 * x + 3 <= 11:")),
    q("erreurs", "Un programme s'exécute et affiche 45 au lieu de 55 pour la somme 1 + 2 + … + 10. Quel type d'erreur est le plus probable?", choice(["une erreur de logique (décalage de un) dans le range", "une erreur de syntaxe", "une NameError", "une ZeroDivisionError"], 0),
      "Il s'est exécuté, donc ce n'est ni une erreur de syntaxe ni une erreur d'exécution.", [String.raw`\(55-45=10\) : le dernier nombre a été oublié — ${ic("range(1, 10)")} au lieu de ${ic("range(1, 11)")}.`], "une erreur de logique"),
  ]),

  examples([
    ["Une fonction et une table de valeurs", String.raw`On laisse tomber une balle d'une hauteur de \(80\) m; sa hauteur après \(t\) secondes est \(h=80-5t^2\). Qu'affiche ce programme, et quand la balle touche-t-elle le sol?${py(E1)}`,
      [String.raw`<b>Priorité des opérations.</b> Dans \(h=80-5t^2\), élève d'abord \(t\) au carré, multiplie par \(5\), puis soustrais de \(80\).`, String.raw`Substitue \(t=0,1,2,3,4\) : \(80, 75, 60, 35, 0\).`, String.raw`\(h=0\) à \(t=4\) : elle touche le sol après \(4\) s.`, String.raw`<b>Vérifie \(t=3\) :</b> \(80-5(9)=80-45=35\) ✓. « Toucher le sol » signifie \(h=0\) : \(5t^2=80\), \(t^2=16\), \(t=4\) ✓`],
      shell(out(E1))],
    ["Des pourcentages en code", String.raw`Qu'affiche ce programme?${py(E2)}`,
      [String.raw`<b>Multiplicateurs.</b> Un rabais de \(25\%\) laisse \(75\%\) (\(\times0.75\)); une taxe de \(13\%\) donne \(113\%\) (\(\times1.13\)).`, String.raw`Prix soldé : \(120\times0.75=90\).`, String.raw`Avec la taxe de \(13\%\) : \(90\times1.13=101.70\).`, String.raw`<b>Vérification :</b> \(120\times0.75\times1.13=120\times0.8475=101.70\) ✓`],
      String.raw`${ic(out(E2))} (Python laisse tomber le zéro final)`],
    ["Une boucle while avec un accumulateur", String.raw`Qu'affiche ce programme? Explique ce qu'il trouve.${py(E3)}`,
      [String.raw`<b>Règle.</b> La boucle continue d'ajouter le nombre entier suivant tant que le total est encore sous \(100\), et s'arrête dès que le total atteint \(100\) ou plus.`, String.raw`Il additionne \(1+2+3+\dots\) jusqu'à ce que le total atteigne au moins \(100\).`, String.raw`\(1+2+\dots+13=91<100\); ajouter \(14\) donne \(105\).`, String.raw`<b>Vérifie avec la formule</b> \(1+2+\dots+n=\tfrac{n(n+1)}{2}\) : \(\tfrac{13\cdot14}{2}=91\) et \(\tfrac{14\cdot15}{2}=105\) ✓`],
      String.raw`${ic(out(E3))} : le premier \(n\) tel que \(1+\dots+n\ge100\) est \(14\)`],
    ["Une règle en trois parties", String.raw`Un service de messagerie demande \(8\) $ jusqu'à \(1\) kg, puis \(2.50\) $ par kilogramme supplémentaire jusqu'à \(5\) kg, puis \(2\) $ par kilogramme au-delà de \(5\) kg. Qu'affiche ce programme?${py(E4)}`,
      [String.raw`<b>Règle définie par parties.</b> \(\texttt{if}/\texttt{elif}/\texttt{else}\) teste les conditions dans l'ordre et exécute la première branche vraie. Chaque branche facture seulement les kilogrammes de sa propre tranche.`, String.raw`\(0.5\) kg : première branche, \(8\).`, String.raw`\(3\) kg : \(8+2.5(2)=13\).`, String.raw`\(9\) kg : \(18+2(4)=26\). (\(18\) est le coût pour exactement \(5\) kg.)`, String.raw`<b>D'où vient \(18\) :</b> \(8+2.5(5-1)=8+10=18\) ✓`],
      ic(out(E4))],
    ["Deux inéquations ensemble", String.raw`Quelles valeurs sont affichées? Écris la solution sous forme d'inéquation double.${py(E5)}`,
      [String.raw`<b>Logique.</b> « \(\texttt{and}\) » (et) est vrai seulement quand les deux conditions sont vraies, donc les valeurs affichées vérifient les deux inéquations à la fois.`, String.raw`\(4x-7\ge2x+5\Rightarrow2x\ge12\Rightarrow x\ge6\).`, String.raw`${ic("and x < 9")} ajoute \(x<9\). Les nombres entiers tels que \(6\le x<9\) : \(6, 7, 8\).`, String.raw`<b>Vérifie les bornes :</b> \(x=6\) : \(17\ge17\) vrai ✓; \(x=9\) ne vérifie pas \(x<9\) ✓`],
      String.raw`${ic(out(E5).trim())} : \(6\le x<9\)`],
  ]),

  section("📌 Défi varié", String.raw`<p>Exécute le programme, puis modifie-le : change la régularité pour \(7n+3\), et change la limite pour \(500\). Prédis chaque sortie avec l'algèbre avant de l'exécuter.</p>`),

  widget("codeTracer", { code: W, title: "Défi varié : régularités, fonctions et boucles while", task: String.raw`Vérifie la dernière ligne avec l'algèbre : \(5n-2>200\). Ensuite, modifie la règle et la limite.` }),

  section("📌 Révision variée", String.raw`<p>Chaque question combine des idées de plus d'une leçon.</p>`),

  practice([
    q("expressions", String.raw`Qu'est-ce qui est affiché?${py(M1)}`, num(Number(out(M1))), String.raw`\(4^2-3(4)\).`, [String.raw`\(16-12=4\).`], String.raw`\(${out(M1)}\)`),
    q("range + accumulateur", String.raw`Qu'est-ce qui est affiché?${py(M2)}`, num(Number(out(M2))), String.raw`Fais la liste des valeurs de ${ic("range(2, 12, 3)")}.`, [String.raw`\(2, 5, 8, 11\); somme \(26\).`], String.raw`\(${out(M2)}\)`),
    q("croissance", String.raw`Un placement augmente de \(8\%\) par année. Qu'affiche le programme?${py(M3)}`, num(Number(out(M3))), String.raw`Multiplie par \(1.08\) jusqu'à ce que la valeur atteigne \(2000\).`, [String.raw`\(1.08^9\approx1.999\) (juste sous \(2\)); \(1.08^{10}\approx2.159\).`], String.raw`\(${out(M3)}\)`),
    q("fonctions", String.raw`Pour ${ic("def g(x): return 3 * x - x ** 2")}, que vaut ${ic("g(-2)")}?`, num(Number(out(`def g(x):\n    return 3 * x - x ** 2\nprint(g(-2))`))), String.raw`Substitue avec des parenthèses : \(3(-2)-(-2)^2\).`, [String.raw`\(-6-4=-10\).`], String.raw`\(${out(`def g(x):\n    return 3 * x - x ** 2\nprint(g(-2))`)}\)`),
    q("inéquation", String.raw`Combien de nombres entiers le programme compte-t-il?${py(M5)}`, num(Number(out(M5))), String.raw`Quels nombres entiers de \(-5\) à \(5\) ont \(x^2<10\)?`, [String.raw`\(-3,-2,\dots,3\) : sept nombres entiers (\(4^2=16\) est trop grand).`], String.raw`\(${out(M5)}\)`),
  ]),

  section("📌 Suis-je prêt ou prête pour le test?", String.raw`<ul style="list-style:none;padding-left:0;">
    ${[
      ["3.1", "Je peux lire et écrire des expressions Python, des fonctions avec paramètres, et des comparaisons pour des équations et des inéquations."],
      ["3.2", "Je peux planifier un programme, choisir for / while / if, et utiliser des accumulateurs et des compteurs pour résoudre un problème."],
      ["3.3", "Je peux tracer du code avec un tableau, trouver les erreurs de syntaxe, d'exécution et de logique, et modifier du code pour une nouvelle situation."],
    ].map(([c, t]) => `<li style="margin:6px 0;"><label><input type="checkbox"> <strong>${c}</strong> — ${t}</label></li>`).join("")}
  </ul>`),

  wrapUp({
    qas: [
      ["Comment dois-je étudier pour les questions de codage du test?", "Exerce-toi à tracer sans ordinateur : fais des tables de traçage pour les exemples des leçons 3.2 et 3.3, puis vérifie tes prédictions dans les explorateurs. La plupart des questions de test te demandent de prédire, d'expliquer ou de modifier du code, et non de le taper."],
      ["Quelles sont les erreurs les plus fréquentes?", String.raw`Les ranges décalés de un, ${ic("^")} au lieu de ${ic("**")}, un ${ic("*")} manquant, ${ic("=")} au lieu de ${ic("==")}, l'oubli du deux-points et les boucles while qui ne se terminent jamais.`],
      ["Quel est le lien entre le codage et le reste du cours?", "Les fonctions sont des relations (chapitre 4), les boucles construisent des tables de valeurs et modélisent la croissance et la décroissance (chapitres 4 et 7), et la recherche vérifie des solutions d'équations et d'inéquations (chapitre 2)."],
      ["Dois-je mémoriser Python?", String.raw`Seulement les quelques éléments utilisés ici : ${ic("print")}, ${ic("def/return")}, ${ic("for … in range")}, ${ic("while")}, ${ic("if/elif/else")} et les opérateurs. La réflexion — décomposer, tracer, tester — compte plus que la syntaxe.`],
      ["Où puis-je continuer à m'exercer?", "Chaque explorateur de ce chapitre est modifiable : change les nombres, les conditions et les formules, prédis, puis exécute."],
    ],
    summary: [
      "Les variables, les opérateurs et les fonctions transforment l'algèbre en code.",
      "La séquence, la sélection et la répétition construisent chaque programme.",
      "Trace, prédis, débogue et modifie — et vérifie toujours le code avec l'algèbre.",
    ],
    next: "Fais le test du chapitre 3. Le chapitre 4 étudie les relations linéaires et non linéaires — plusieurs des fonctions que tu as codées ici.",
  }),
];
