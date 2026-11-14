// Fiche 1.4 — Fractions : équivalence, comparaison, addition et soustraction (édition de l'enseignant)
import { numberLine, fracBar, barStack, tape } from "./tikz.mjs";
import { PROBLEMS } from "./p1_4.mjs";

const fifths = ["$0$", "$\\frac15$", "$\\frac25$", "$\\frac35$", "$\\frac45$", "$1$"];

export const WS = {
  code: "1.4",
  title: "Fractions : équivalence, comparaison, addition et soustraction",
  bigideas: String.raw`Une fraction $\frac{a}{b}$ représente $a$ morceaux d'un tout coupé en $b$ morceaux égaux; c'est aussi un point de la droite numérique. Multiplier le haut et le bas par un même nombre donne une \textbf{fraction équivalente}. On ne peut \textbf{comparer, additionner ou soustraire que des morceaux de même taille}; il faut donc d'abord réécrire les fractions avec un dénominateur commun.`,
  goals: [
    "Interpréter une fraction comme une partie d'un tout et comme un point de la droite numérique.",
    "Écrire des fractions équivalentes et simplifier en fraction irréductible à l'aide du PGCD.",
    String.raw`Passer d'un nombre fractionnaire à une fraction impropre et inversement, y compris avec des négatifs ($-\frac{a}{b}=\frac{-a}{b}=\frac{a}{-b}$).`,
    "Comparer et ordonner des fractions à l'aide d'un dénominateur commun, de repères et de la droite numérique.",
    "Additionner et soustraire des fractions et des nombres fractionnaires (avec regroupement) et résoudre des problèmes de mesure.",
  ],
  curriculum: "B3.2, B3.3, B3.4",
  vocab: [
    ["Numérateur / dénominateur", "morceaux pris / morceaux égaux dans un tout"],
    ["Fractions équivalentes", "fractions qui ont la même valeur : $\\frac23=\\frac{10}{15}$"],
    ["Fraction irréductible", "le numérateur et le dénominateur n'ont aucun facteur commun autre que 1"],
    ["PPCD", "plus petit commun dénominateur --- le PPCM des dénominateurs"],
    ["Nombre fractionnaire", "un entier et une fraction propre, $3\\frac14$"],
    ["Fraction impropre", "numérateur au moins aussi grand que le dénominateur, $\\frac{13}{4}$"],
  ],
  hook: String.raw`Dessine deux tablettes de chocolat de même taille. L'une est coupée en $3$ morceaux et Sam en mange $1$; l'autre est coupée en $4$ morceaux et Ria en mange $1$. Demande : « Ensemble, ont-ils mangé $\frac{2}{7}$ d'une tablette? » La plupart des élèves savent que c'est plus qu'un quart de tablette plus un tiers --- donc $\frac27$ (moins que chacun des deux!) ne peut pas être juste. Le problème, c'est que les morceaux n'ont pas la même taille. Recoupe les deux tablettes en $12$ morceaux et la réponse $\frac{4}{12}+\frac{3}{12}=\frac{7}{12}$ apparaît.`,
  concepts: [
    ["1. Une fraction est une partie d'un tout et un point sur une droite", String.raw`${fracBar(3, 5, { label: "$\\frac35$", width: 8 })}
${numberLine({ min: 0, max: 1, step: 0.2, unit: 1.6, labels: fifths, dots: [{ at: 0.6, label: "$\\frac35$", color: "blue" }], caption: "Coupe le segment de 0 à 1 en 5 parties égales et compte-en 3." })}
Les fractions supérieures à $1$ continuent au-delà de $1$ ($\frac75$ est à deux cinquièmes après $1$), et les fractions négatives sont leurs images miroirs à gauche de $0$.`],
    ["2. Fractions équivalentes et fractions irréductibles", String.raw`${barStack([{ n: 1, d: 2, label: "$\\frac12$" }, { n: 2, d: 4, label: "$\\frac24$", color: "green" }, { n: 4, d: 8, label: "$\\frac48$", color: "amber" }], { width: 8, caption: "La même quantité, coupée en plus de morceaux : $\\frac12=\\frac24=\\frac48$." })}
\textbf{Agrandir :} multiplie le haut et le bas par le même nombre, $\frac{2}{3}=\frac{2\times5}{3\times5}=\frac{10}{15}$.\quad
\textbf{Simplifier :} divise le haut et le bas par le \textbf{PGCD}, $\frac{36}{48}=\frac{36\div12}{48\div12}=\frac34$.`],
    ["3. Nombres fractionnaires, fractions impropres et négatifs", String.raw`$2\frac{3}{5}=\frac{2\times5+3}{5}=\frac{13}{5}$ \qquad et \qquad $\frac{17}{4}=4\frac14$ (car $17\div4=4$, reste $1$).\\[2pt]
Un signe négatif s'applique au nombre entier : $-1\frac14=-\left(1+\frac14\right)=-\frac54$. Aussi, $\frac{-5}{4}=\frac{5}{-4}=-\frac54$, tandis que $\frac{-5}{-4}=\frac54$.
${numberLine({ min: -2, max: 2, step: 0.25, labelEvery: 4, unit: 0.85, dots: [{ at: -1.25, label: "$-1\\frac14$", color: "red" }, { at: 0.75, label: "$\\frac34$", color: "blue" }, { at: 1.25, label: "$1\\frac14$", color: "blue" }], caption: "$-1\\frac14$ et $1\\frac14$ sont des opposés." })}`],
    ["4. Comparer et ordonner", String.raw`\textbf{Dénominateur commun :} pour comparer $\frac23$ et $\frac35$, utilise des quinzièmes : $\frac{10}{15}>\frac{9}{15}$, donc $\frac23>\frac35$.
${barStack([{ n: 10, d: 15, label: "$\\frac23=\\frac{10}{15}$" }, { n: 9, d: 15, label: "$\\frac35=\\frac{9}{15}$", color: "amber" }], { width: 9 })}
\textbf{Repères :} compare avec $0$, $\frac12$, $1$. $\frac{5}{11}<\frac12<\frac{7}{13}$; aucun calcul n'est nécessaire.\\
\textbf{Fractions négatives :} celle qui a la \emph{plus grande grandeur} est la \emph{plus petite} : $\frac23>\frac35$ signifie $-\frac23<-\frac35$.`],
    ["5. Additionner et soustraire", String.raw`(1) Réécris avec le PPCD. (2) Additionne ou soustrais les numérateurs; garde le dénominateur. (3) Simplifie.
${barStack([{ n: 1, d: 4, label: "$\\frac14$" }, { n: 2, d: 3, label: "$\\frac23$", color: "amber" }, { n: 3, d: 12, label: "$\\frac{3}{12}$" }, { n: 8, d: 12, label: "$\\frac{8}{12}$", color: "amber" }, { n: 11, d: 12, label: "somme $\\frac{11}{12}$", color: "green" }], { width: 9, caption: "Recoupe les quarts et les tiers en douzièmes; les numérateurs s'additionnent ensuite." })}
\textbf{Nombres fractionnaires :} convertis-les en fractions impropres, ou additionne séparément les entiers et les parties et \textbf{regroupe} : $5\frac14-2\frac34=4\frac54-2\frac34=2\frac24=2\frac12$.`],
  ],
  tips: [
    String.raw`N'additionne jamais les dénominateurs : $\frac12+\frac13\neq\frac25$. Utilise l'image des tablettes de chocolat pour montrer pourquoi.`,
    String.raw`Conversion des nombres fractionnaires : $3\frac25=\frac{3\times5+2}{5}$; les élèves calculent souvent $\frac{3\times2+5}{5}$.`,
    String.raw`Avec un nombre fractionnaire négatif, convertis d'abord : $-2\frac13=-\frac73$ (et non $-2+\frac13$).`,
    String.raw`Pour ordonner des négatifs, esquisse une droite numérique --- l'intuition tirée des positifs est inversée.`,
    String.raw`Simplifie la réponse finale et donne-la sous la forme demandée (nombre fractionnaire ou fraction impropre).`,
  ],
  examples: [
    { title: "Fraction irréductible", q: String.raw`Écris $\frac{72}{90}$ sous forme de fraction irréductible.`, steps: [String.raw`\textbf{Règle :} $\frac ab=\frac{a\div k}{b\div k}$ pour tout $k\ne0$; diviser par le PGCD donne la fraction irréductible en une seule étape.`, String.raw`$72=2^3\cdot3^2$ et $90=2\cdot3^2\cdot5$, donc le PGCD est $2\cdot9=18$.`, String.raw`$\frac{72\div18}{90\div18}=\frac45$.`, String.raw`\textbf{Vérification :} $4$ et $5$ n'ont aucun facteur commun autre que $1$, et $4\times90=360=5\times72$; les fractions sont donc égales \checkmark`], ans: String.raw`$\frac45$` },
    { title: "Construire des fractions équivalentes", q: String.raw`Complète : $\frac56=\frac{\square}{42}$ \quad et \quad $\frac38=\frac{15}{\square}$.`, steps: [String.raw`\textbf{Règle :} le nombre par lequel on multiplie le dénominateur doit aussi multiplier le numérateur (c'est multiplier par $\frac kk=1$).`, String.raw`$6\times7=42$; multiplie donc le haut par $7$ : $\frac{35}{42}$.`, String.raw`$3\times5=15$; multiplie donc le bas par $5$ : $\frac{15}{40}$.`, String.raw`\textbf{Vérification par les produits croisés :} $5\times42=210=6\times35$ \checkmark \ et \ $3\times40=120=8\times15$ \checkmark`], ans: "$35$ et $40$" },
    { title: "Nombre fractionnaire et fraction impropre", q: String.raw`Écris $\frac{23}{6}$ sous forme de nombre fractionnaire et $-2\frac37$ sous forme de fraction impropre.`, steps: [String.raw`\textbf{Règle :} pour écrire $\frac ab$ en nombre fractionnaire, le quotient de $a\div b$ est la partie entière et le reste devient le nouveau numérateur. Dans l'autre sens : $w\frac nd=\frac{w\times d+n}{d}$.`, String.raw`$23\div6=3$, reste $5$, donc $3\frac56$.`, String.raw`$2\frac37=\frac{2\times7+3}{7}=\frac{17}{7}$, donc $-2\frac37=-\frac{17}{7}$.`, String.raw`\textbf{Vérification :} $3\frac56=\frac{18+5}{6}=\frac{23}{6}$ \checkmark \ et \ $17=2\times7+3$, donc $\frac{17}{7}=2\frac37$ \checkmark`], ans: String.raw`$3\frac56$ et $-\frac{17}{7}$` },
    { title: "Comparer avec des barres", q: String.raw`Lequel est le plus grand, $\frac79$ ou $\frac45$?`,
      fig: barStack([{ n: 35, d: 45, label: "$\\frac79=\\frac{35}{45}$" }, { n: 36, d: 45, label: "$\\frac45=\\frac{36}{45}$", color: "amber" }], { width: 9 }),
      steps: [String.raw`\textbf{Règle :} pour comparer des fractions, réécris-les avec le même dénominateur; le plus grand numérateur donne alors la plus grande fraction.`, String.raw`Le PPCD de $9$ et de $5$ est $45$.`, String.raw`$\frac79=\frac{35}{45}$ et $\frac45=\frac{36}{45}$; $36>35$.`, String.raw`\textbf{Vérifie avec des décimaux :} $\frac79=0.777\ldots$ et $\frac45=0.8$, et $0.8>0.777$ \checkmark`], ans: String.raw`$\frac45$ (de $\frac{1}{45}$)` },
    { title: "Ordonner des fractions négatives", q: String.raw`Place $-\frac12,\ -\frac38,\ -\frac{5}{12}$ dans l'ordre croissant.`,
      fig: numberLine({ min: -0.625, max: -0.25, step: 1 / 24, labelEvery: 3, unit: 0.9, labels: ["$-\\frac{15}{24}$", "", "", "$-\\frac{12}{24}$", "", "", "$-\\frac{9}{24}$", "", "", "$-\\frac{6}{24}$"], dots: [{ at: -0.5, label: "$-\\frac12$", color: "red" }, { at: -5 / 12, label: "$-\\frac{5}{12}$", color: "amber", raise: 0.4 }, { at: -0.375, label: "$-\\frac38$", color: "blue" }] }),
      steps: [String.raw`\textbf{Règle :} utilise un dénominateur commun; pour des négatifs, le nombre le plus éloigné de $0$ (plus grande grandeur) est le \emph{plus petit}.`, String.raw`PPCD $24$ : $-\frac{12}{24},\ -\frac{9}{24},\ -\frac{10}{24}$.`, String.raw`Sur la droite numérique, $-12$ est le plus à gauche, puis $-10$, puis $-9$.`, String.raw`\textbf{Vérifie avec des décimaux :} $-0.5<-0.4167<-0.375$ \checkmark`], ans: String.raw`$-\frac12<-\frac{5}{12}<-\frac38$` },
    { title: "Additionner à l'aide du PPCD", q: String.raw`Évalue $\frac14+\frac23$.`, steps: [String.raw`\textbf{Règle :} $\frac ad+\frac bd=\frac{a+b}{d}$ --- seuls des morceaux de même taille s'additionnent. PPCD de $4$ et de $3$ : ils n'ont aucun facteur commun, donc $4\times3=12$.`, String.raw`PPCD $12$ : $\frac{3}{12}+\frac{8}{12}$.`, String.raw`$=\frac{11}{12}$ (déjà irréductible).`, String.raw`\textbf{Vérification :} $0.25+0.667\approx0.917$ et $11\div12\approx0.917$ \checkmark`], ans: String.raw`$\frac{11}{12}$` },
    { title: "Une soustraction au résultat négatif", q: String.raw`Évalue $\frac{7}{10}-\frac56$.`, steps: [String.raw`\textbf{Règle :} d'abord un dénominateur commun. PPCD de $10$ et de $6$ : les multiples de $10$ sont $10,20,30$; $30$ est le premier divisible par $6$.`, String.raw`PPCD $30$ : $\frac{21}{30}-\frac{25}{30}$.`, String.raw`$=-\frac{4}{30}=-\frac{2}{15}$.`, String.raw`\textbf{Vérification :} $0.7-0.833\approx-0.133$ et $-2\div15\approx-0.133$ \checkmark \ (négatif, car $\frac56>\frac7{10}$).`], ans: String.raw`$-\frac{2}{15}$` },
    { title: "Soustraire avec regroupement", q: String.raw`Un ruban mesure $6\frac18$ m de long. On en coupe un morceau de $2\frac56$ m. Combien en reste-t-il?`,
      fig: tape([{ n: 3, label: "coupé $2\\frac56$ m", color: "red" }, { n: 4, label: "reste : ?", color: "green" }], { unit: 1.1, total: "$6\\frac18$ m" }),
      steps: [String.raw`\textbf{Modèle :} « couper » signifie soustraire. Le PPCD de $8$ et de $6$ est $24$ : $\frac18=\frac{3}{24}$, $\frac56=\frac{20}{24}$.`, String.raw`PPCD $24$ : $6\frac{3}{24}-2\frac{20}{24}$.`, String.raw`$\frac{3}{24}<\frac{20}{24}$; regroupe donc une unité : $5\frac{27}{24}-2\frac{20}{24}$.`, String.raw`$=3\frac{7}{24}$.`, String.raw`\textbf{Vérifie en additionnant :} $3\frac{7}{24}+2\frac{20}{24}=5\frac{27}{24}=6\frac{3}{24}=6\frac18$ \checkmark`], ans: String.raw`$3\frac{7}{24}$ m` },
    { title: "Trouver une capacité", q: String.raw`Un réservoir est rempli aux $\frac25$. Après l'ajout de $25$ L, il est rempli aux $\frac{11}{15}$. Trouve la capacité du réservoir.`, steps: [String.raw`\textbf{Idée :} les $25$ L ajoutés correspondent à la \emph{variation} du remplissage; trouve donc cette variation en fraction du réservoir entier.`, String.raw`Trouve l'augmentation sous forme de fraction : $\dfrac{11}{15}-\dfrac25=\dfrac{11}{15}-\dfrac{6}{15}=\dfrac{5}{15}=\dfrac13$ du réservoir.`, String.raw`Donc un tiers du réservoir correspond à $25$ L.`, String.raw`Le réservoir entier contient $3\times25=75$ L.`, String.raw`\textbf{Vérification :} $\frac25\times75=30$ L, plus $25$ L donne $55$ L, et $\frac{11}{15}\times75=55$ L \checkmark`], ans: "$75$ L" },
  ],
  problems: PROBLEMS,
};
