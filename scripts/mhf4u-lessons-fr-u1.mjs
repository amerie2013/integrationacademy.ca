// MHF4U-FR Unité 1 — Fonctions polynomiales.
import { mkLesson, gframe } from "./mhf4u-lessons-fr-helpers.mjs";
const r = String.raw;
export const u1 = {};

u1["1.1"] = mkLesson({
  code: "1.1", title: "Fonctions puissance et comportement à l'infini", emoji: "📈",
  overview: r`Une <strong>fonction puissance</strong> est \(f(x)=ax^{n}\) — un seul terme. Tout polynôme se comporte comme son terme de plus haut degré aux extrémités du graphique, alors comprendre les fonctions puissance permet de connaître le <strong>comportement à l'infini</strong> de <em>n'importe quel</em> polynôme : ce qui arrive à \(y\) quand \(x\to-\infty\) et \(x\to+\infty\). Deux éléments le déterminent : la parité du degré \(n\) et le signe du coefficient dominant \(a\).`,
  points: [
    r`<strong>Degré pair</strong> (\(x^2,x^4,\dots\)) : les deux extrémités vont dans la <em>même</em> direction — haut-haut si \(a>0\), bas-bas si \(a<0\).`,
    r`<strong>Degré impair</strong> (\(x^3,x^5,\dots\)) : les extrémités vont dans des directions <em>opposées</em> — bas-haut si \(a>0\), haut-bas si \(a<0\).`,
    r`On l'écrit avec des limites : par exemple pour \(y=x^3\), quand \(x\to+\infty,\ y\to+\infty\) et quand \(x\to-\infty,\ y\to-\infty\).`,
  ],
  graphs: [gframe(["y = x^3"], { title: "y = x³ : degré impair, a > 0 — extrémités bas-haut" })],
  examples: [
    { title: "Comportement à l'infini d'un polynôme complet", prompt: r`Déterminer le comportement à l'infini de \(f(x)=-3x^5+2x^3-7x+4\).`,
      steps: [r`Seul le <em>terme dominant</em> compte loin de l'origine : ici \(-3x^5\).`, r`Degré \(5\) impair ⇒ extrémités opposées ; \(a=-3<0\) ⇒ l'extrémité gauche monte et l'extrémité droite descend.`],
      concl: r`quand \(x\to-\infty,\ f(x)\to+\infty\) ; quand \(x\to+\infty,\ f(x)\to-\infty\).` },
    { title: "Comportement à l'infini à partir de la forme factorisée", prompt: r`Trouver le comportement à l'infini de \(g(x)=-2(x-1)(x+3)(x-2)^2\) sans développer.`,
      steps: [r`Ne multiplier que la partie dominante de chaque facteur : \((-2)(x)(x)(x^2)=-2x^4\).`, r`Degré \(4\) pair ⇒ mêmes extrémités ; \(a=-2<0\) ⇒ les deux descendent.`],
      concl: r`quand \(x\to\pm\infty,\ g(x)\to-\infty\) (bas-bas).`, extra: gframe(["y = -2*(x-1)*(x+3)*(x-2)^2"], { title: "g(x) = −2(x−1)(x+3)(x−2)² : degré 4, les deux extrémités descendent" }) },
    { title: "Regrouper des fonctions selon leur comportement", prompt: r`Parmi (i) \(3x^4\), (ii) \(-x^6\), (iii) \(-5x^2\), (iv) \(x^3\), lesquelles ont le même comportement que \(h(x)=2-x^4\) ?`,
      steps: [r`\(h\) a pour terme dominant \(-x^4\) : degré pair, \(a<0\) ⇒ bas-bas.`, r`Comparer : (i) \(3x^4\) haut-haut ; (ii) \(-x^6\) bas-bas ✓ ; (iii) \(-5x^2\) bas-bas ✓ ; (iv) \(x^3\) bas-haut.`],
      concl: r`(ii) et (iii) correspondent à \(h\).` },
  ],
  practice: [
    { prompt: r`Quel est le comportement à l'infini de \(f(x)=x^7\) ?`, answer: r`Degré impair, \(a>0\) : bas-haut.` },
    { prompt: r`Quel est le comportement à l'infini de \(f(x)=-x^6\) ?`, answer: r`Degré pair, \(a<0\) : bas-bas.` },
    { prompt: r`Quel est le comportement à l'infini de \(f(x)=2x^4\) ?`, answer: r`Degré pair, \(a>0\) : haut-haut.` },
  ],
  qa: [
    { q: "Qu'est-ce qui détermine le comportement à l'infini ?", a: "La parité du degré (pair ou impair) et le signe du coefficient dominant." },
    { q: "Que signifie « bas-haut » ?", a: r`À gauche \(y\to-\infty\), à droite \(y\to+\infty\) — typique d'un polynôme de degré impair avec \(a>0\).` },
    { q: "Pourquoi seul le terme dominant compte-t-il ?", a: "Loin de l'origine, ce terme devient beaucoup plus grand en valeur absolue que tous les autres." },
  ],
});

u1["1.2"] = mkLesson({
  code: "1.2", title: "Caractéristiques des fonctions polynomiales", emoji: "🔍",
  overview: r`Le degré \(n\) d'un polynôme limite son graphique : au plus \(n\) zéros et \(n-1\) points de rebroussement (extremums locaux), et les différences finies d'ordre \(n\) sont constantes. La symétrie révèle si la fonction est paire, impaire, ou ni l'une ni l'autre.`,
  points: [
    r`Au plus \(n\) zéros (abscisses à l'origine) et au plus \(n-1\) points de rebroussement.`,
    r`Les différences finies d'ordre \(n\) d'un polynôme de degré \(n\) sont constantes.`,
    r`Paire : \(f(-x)=f(x)\) (symétrie par rapport à l'axe des \(y\)). Impaire : \(f(-x)=-f(x)\) (symétrie par rapport à l'origine).`,
  ],
  graphs: [gframe(["y = x^4 - 5*x^2 + 4"], { title: "y = x⁴ − 5x² + 4 : degré 4, jusqu'à 4 zéros et 3 points de rebroussement" })],
  examples: [
    { title: "Points de rebroussement maximaux", prompt: r`Combien de points de rebroussement un polynôme de degré \(5\) peut-il avoir au maximum ?`,
      steps: [r`La règle est \(n-1\), donc \(5-1=4\).`], concl: r`au maximum \(4\) points de rebroussement.` },
    { title: "Paire, impaire, ou ni l'une ni l'autre", prompt: r`\(f(x)=x^4-3x^2\) est-elle paire, impaire, ou ni l'une ni l'autre ?`,
      steps: [r`Calculer \(f(-x)=(-x)^4-3(-x)^2=x^4-3x^2\).`, r`\(f(-x)=f(x)\), donc la fonction est paire.`], concl: r`\(f\) est paire (symétrique par rapport à l'axe des \(y\)).` },
    { title: "Degré à partir des différences finies", prompt: r`Les différences finies du 3ᵉ ordre d'un polynôme sont constantes. Quel est son degré ?`,
      steps: [r`Les différences d'ordre \(n\) constantes signifient un degré \(n\).`], concl: r`degré \(3\) (une cubique).` },
  ],
  practice: [
    { prompt: r`Au maximum, combien de zéros un polynôme de degré \(4\) peut-il avoir ?`, answer: r`\(4\).` },
    { prompt: r`\(f(x)=x^3-x\) est-elle paire, impaire, ou ni l'une ni l'autre ?`, answer: r`\(f(-x)=-x^3+x=-(x^3-x)=-f(x)\) : impaire.` },
    { prompt: r`Au maximum, combien de points de rebroussement un polynôme de degré \(6\) peut-il avoir ?`, answer: r`\(6-1=5\).` },
  ],
  qa: [
    { q: "Combien de zéros un polynôme de degré n peut-il avoir au maximum ?", a: r`Au maximum \(n\).` },
    { q: "Comment reconnaît-on une fonction paire par son graphique ?", a: "Le graphique est symétrique par rapport à l'axe des y." },
    { q: "À quoi servent les différences finies ?", a: "À trouver le degré d'un polynôme à partir d'un tableau de valeurs également espacées." },
  ],
});

u1["1.3"] = mkLesson({
  code: "1.3", title: "Équations et graphiques des fonctions polynomiales", emoji: "✖️",
  overview: r`Sous forme factorisée \(f(x)=a(x-r_1)^{m_1}\cdots\), les zéros sont les \(r_i\) et les multiplicités \(m_i\) déterminent comment le graphique rencontre l'axe des \(x\).`,
  points: [
    r`Zéros : poser chaque facteur égal à \(0\).`,
    r`Multiplicité impaire : le graphique traverse l'axe. Multiplicité paire : le graphique touche l'axe et rebrousse chemin.`,
    r`Ordonnée à l'origine \(=f(0)\) ; on trouve \(a\) à partir d'un point supplémentaire.`,
  ],
  graphs: [gframe(["y = (x-2)*(x+1)*(x-3)"], { title: "y = (x−2)(x+1)(x−3) : trois zéros simples, la courbe traverse à chacun" })],
  examples: [
    { title: "Trouver les zéros", prompt: r`Quels sont les zéros de \(f(x)=(x-2)(x+1)(x-3)\) ?`,
      steps: [r`Poser chaque facteur égal à \(0\) : \(x-2=0\), \(x+1=0\), \(x-3=0\).`], concl: r`\(x=2,\ -1,\ 3\).` },
    { title: "Multiplicité : toucher ou traverser", prompt: r`En \(x=-1\) et \(x=2\) de \(f(x)=(x+1)^2(x-2)\), le graphique touche-t-il ou traverse-t-il l'axe ?`,
      steps: [r`\((x+1)^2\) a une multiplicité paire (\(2\)) : le graphique touche l'axe en \(x=-1\).`, r`\((x-2)\) a une multiplicité impaire (\(1\)) : le graphique traverse l'axe en \(x=2\).`],
      concl: r`touche en \(x=-1\), traverse en \(x=2\).`, extra: gframe(["y = (x+1)^2*(x-2)"], { title: "y = (x+1)²(x−2) : touche en x=−1, traverse en x=2" }) },
    { title: "Ordonnée à l'origine", prompt: r`Quelle est l'ordonnée à l'origine de \(f(x)=(x-1)(x+2)(x-4)\) ?`,
      steps: [r`Calculer \(f(0)=(-1)(2)(-4)\).`], concl: r`\(f(0)=8\), donc l'ordonnée à l'origine est \((0,8)\).` },
  ],
  practice: [
    { prompt: r`Quels sont les zéros de \(f(x)=(x-5)(x+3)\) ?`, answer: r`\(x=5\) et \(x=-3\).` },
    { prompt: r`Quelle est l'ordonnée à l'origine de \((x-2)(x+1)(x+3)\) ?`, answer: r`\(f(0)=(-2)(1)(3)=-6\), soit \((0,-6)\).` },
    { prompt: r`En \(x=3\) de \((x-3)^2(x+2)\), le graphique touche-t-il ou traverse-t-il l'axe ?`, answer: r`Multiplicité paire (\(2\)) : il touche l'axe.` },
  ],
  qa: [
    { q: "Comment trouve-t-on les zéros d'un polynôme factorisé ?", a: "On pose chaque facteur égal à zéro." },
    { q: "Que fait une multiplicité paire ?", a: "Le graphique touche l'axe des x à ce zéro, sans le traverser." },
    { q: "Comment trouve-t-on l'ordonnée à l'origine ?", a: r`En évaluant \(f(0)\).` },
  ],
});

u1["1.4"] = mkLesson({
  code: "1.4", title: "Transformations de fonctions", emoji: "🔧",
  overview: r`Toute fonction peut être transformée avec \(g(x)=a\,f\big(k(x-d)\big)+c\). Chaque paramètre modifie le graphique de la fonction de base d'une façon prévisible — pour les fonctions puissance \(f(x)=x^n\), cela permet de construire et de lire rapidement des polynômes plus complexes.`,
  points: [
    r`<strong>\(a\)</strong> : étirement vertical de \(|a|\) ; réflexion par rapport à l'axe des \(x\) si \(a<0\).`,
    r`<strong>\(k\)</strong> : étirement horizontal de \(\tfrac1{|k|}\) ; réflexion par rapport à l'axe des \(y\) si \(k<0\).`,
    r`<strong>\(d\)</strong> : translation horizontale (signe contraire). <strong>\(c\)</strong> : translation verticale.`,
    r`Règle du mapping pour un point : \((x,y)\to\left(\dfrac{x}{k}+d,\ a\,y+c\right)\).`,
  ],
  graphs: [gframe(["y = 2*(x-1)^3 + 3"], { title: "y = 2(x−1)³ + 3 : étirement ×2, droite 1, haut 3" })],
  examples: [
    { title: "Décrire les quatre paramètres", prompt: r`Décrire \(y=-2(x+3)^4-5\) comme une suite de transformations de \(y=x^4\).`,
      steps: [r`\(a=-2\) : étirement vertical de \(2\) <em>et</em> réflexion par rapport à l'axe des \(x\).`, r`\(d=-3\) : gauche \(3\) (signe contraire). \(c=-5\) : bas \(5\).`],
      concl: r`réflexion, étirement ×2, gauche 3, bas 5.`, extra: gframe(["y = -2*(x+3)^4 - 5"], { title: "y = −2(x+3)⁴ − 5 : ouvre vers le bas, étirée ×2, gauche 3, bas 5" }) },
    { title: "Trouver l'image d'un point", prompt: r`Le point \((2,8)\) appartient à \(y=x^3\). Trouver son image sur \(y=-\tfrac12(x-1)^3+4\).`,
      steps: [r`Nouveau \(x\) : appliquer \(d=1\) ⇒ \(2+1=3\).`, r`Nouveau \(y\) : appliquer \(a=-\tfrac12\) puis \(c=4\) ⇒ \(-\tfrac12(8)+4=0\).`],
      concl: r`l'image est \((3,0)\).` },
    { title: "Écrire l'équation à partir d'une description", prompt: r`Écrire \(y=x^3\) après : translation à droite de \(4\) et vers le haut de \(1\).`,
      steps: [r`Droite \(4\) ⇒ \(d=4\). Haut \(1\) ⇒ \(c=1\).`], concl: r`\(y=(x-4)^3+1\).` },
  ],
  practice: [
    { prompt: r`Décrire \(y=(x-6)^3+2\) à partir de \(y=x^3\).`, answer: r`Translation à droite de \(6\) et vers le haut de \(2\).` },
    { prompt: r`Le point \((1,1)\) appartient à \(y=x^3\). Trouver son image sur \(y=2(x+1)^3-3\).`, answer: r`\(x:1-1=0\) ; \(y:2(1)-3=-1\) ⇒ \((0,-1)\).` },
    { prompt: r`Écrire \(y=x^4\), réfléchie, translation à gauche de \(1\) et vers le bas de \(2\).`, answer: r`\(y=-(x+1)^4-2\).` },
  ],
  qa: [
    { q: "Que contrôle a ?", a: r`L'étirement vertical de \(|a|\) et, si \(a<0\), une réflexion par rapport à l'axe des \(x\).` },
    { q: "Comment déplace-t-on un point avec la règle du mapping ?", a: r`On applique \(d\) à \(x\) (après division par \(k\)), et \(a\) puis \(c\) à \(y\).` },
    { q: "Pourquoi le signe de d est-il contraire au déplacement ?", a: r`Parce que la transformation est écrite \(k(x-d)\) : \(x=d\) rend cette parenthèse nulle, donc \(d\) est la nouvelle position du centre.` },
  ],
});
