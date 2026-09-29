// MHF4U-FR Unité 2 — Équations et inégalités polynomiales.
import { mkLesson, gframe } from "./mhf4u-lessons-fr-helpers.mjs";
const r = String.raw;
export const u2 = {};

u2["2.1"] = mkLesson({
  code: "2.1", title: "Division de polynômes", emoji: "➗",
  overview: r`La division longue fonctionne toujours ; la division synthétique est un raccourci pour diviser par \(x-a\). Tout résultat s'écrit comme un énoncé de division \(P(x)=D(x)Q(x)+R(x)\).`,
  points: [
    r`Division longue : diviser, multiplier, soustraire, abaisser le terme suivant.`,
    r`Division synthétique (par \(x-a\)) : abaisser, multiplier par \(a\), additionner.`,
    r`\(\deg R<\deg D\) ; un reste de \(0\) signifie que \(D\) est un facteur de \(P\).`,
  ],
  graphs: [gframe(["y = x^2+5*x+6"], { title: "y = x² + 5x + 6 : un zéro en x = −2 confirme que (x + 2) est un facteur" })],
  examples: [
    { title: "Division longue exacte", prompt: r`Diviser \((x^2+5x+6)\div(x+2)\).`,
      steps: [r`\(x^2\div x=x\) ; soustraire \(x^2+2x\) → il reste \(3x+6\).`, r`\(3x\div x=3\) ; soustraire \(3x+6\) → il reste \(0\).`],
      concl: r`quotient \(x+3\), reste \(0\) : \(x^2+5x+6=(x+2)(x+3)\).` },
    { title: "Division synthétique", prompt: r`Diviser \((x^3-4x^2+x+6)\div(x-2)\) par division synthétique.`,
      steps: [r`Coefficients \(1,-4,1,6\), racine \(2\) : abaisser \(1\) ; \(1\cdot2=2,\ -4+2=-2\) ; \(-2\cdot2=-4,\ 1-4=-3\) ; \(-3\cdot2=-6,\ 6-6=0\).`],
      concl: r`quotient \(x^2-2x-3\), reste \(0\).` },
    { title: "Énoncé de division avec reste", prompt: r`Diviser \((x^2+3x+5)\div(x+1)\) et écrire l'énoncé de division.`,
      steps: [r`\(x^2\div x=x\) ; soustraire \(x^2+x\) → il reste \(2x+5\).`, r`\(2x\div x=2\) ; soustraire \(2x+2\) → il reste \(3\).`],
      concl: r`quotient \(x+2\), reste \(3\) : \(x^2+3x+5=(x+1)(x+2)+3\).` },
  ],
  practice: [
    { prompt: r`Diviser \((x^2+6x+8)\div(x+2)\).`, answer: r`Quotient \(x+4\), reste \(0\).` },
    { prompt: r`Diviser \((x^3-1)\div(x-1)\) par division synthétique.`, answer: r`Quotient \(x^2+x+1\), reste \(0\).` },
    { prompt: r`Diviser \((x^2+4x+1)\div(x+1)\), avec le reste.`, answer: r`Quotient \(x+3\), reste \(-2\).` },
  ],
  qa: [
    { q: "Quand utilise-t-on la division synthétique ?", a: r`Seulement pour diviser par un binôme de la forme \(x-a\).` },
    { q: "Que signifie un reste de 0 ?", a: "Le diviseur est un facteur exact du polynôme." },
    { q: "Quelle est la condition sur le reste ?", a: r`\(\deg R<\deg D\) (ou \(R=0\)).` },
  ],
});

u2["2.2"] = mkLesson({
  code: "2.2", title: "Théorèmes du reste et du facteur", emoji: "🎯",
  overview: r`Le reste de \(P(x)\div(x-a)\) est \(P(a)\) ; et \(x-a\) est un facteur exactement quand \(P(a)=0\).`,
  points: [
    r`Théorème du reste : le reste \(=P(a)\).`,
    r`Théorème du facteur : \(x-a\) est un facteur \(\iff P(a)=0\).`,
    r`Théorème des racines rationnelles : \(\tfrac{p}{q}\) avec \(p\mid\) terme constant, \(q\mid\) coefficient dominant.`,
  ],
  graphs: [gframe(["y = x^3 - 1"], { title: "y = x³ − 1 : la courbe traverse l'axe en x = 1, où P(1) = 0" })],
  examples: [
    { title: "Trouver un reste", prompt: r`Trouver le reste de \(P(x)=x^3-2x+1\) divisé par \(x-2\).`,
      steps: [r`Par le théorème du reste, calculer \(P(2)=8-4+1\).`], concl: r`le reste est \(5\).` },
    { title: "Vérifier un facteur", prompt: r`\(x-1\) est-il un facteur de \(x^3-1\) ?`,
      steps: [r`Calculer \(P(1)=1-1=0\).`], concl: r`oui, car \(P(1)=0\).`, extra: gframe(["y = x^3-1"], { title: "x³ − 1 traverse l'axe en x = 1" }) },
    { title: "Trouver un zéro rationnel", prompt: r`Trouver un zéro rationnel de \(P(x)=x^3-2x^2-x+2\).`,
      steps: [r`Candidats : \(\pm1,\pm2\).`, r`\(P(1)=1-2-1+2=0\).`], concl: r`\(x=1\) est un zéro.` },
  ],
  practice: [
    { prompt: r`Trouver le reste de \(x^3+1\) divisé par \(x-1\).`, answer: r`\(P(1)=1+1=2\).` },
    { prompt: r`\(x-2\) est-il un facteur de \(x^3-8\) ?`, answer: r`\(P(2)=8-8=0\) : oui.` },
    { prompt: r`Trouver \(k\) pour que \(x+1\) soit un facteur de \(x^3+kx+4\).`, answer: r`\(P(-1)=-1-k+4=0\Rightarrow k=3\).` },
  ],
  qa: [
    { q: "Que donne le théorème du reste ?", a: r`Le reste de \(P(x)\div(x-a)\) sans faire la division : c'est \(P(a)\).` },
    { q: "Comment le théorème du facteur aide-t-il à factoriser ?", a: "Tester des valeurs candidates pour trouver une racine, puis diviser." },
    { q: "D'où viennent les candidats du théorème des racines rationnelles ?", a: r`\(p\) divise le terme constant, \(q\) divise le coefficient dominant.` },
  ],
});

u2["2.3"] = mkLesson({
  code: "2.3", title: "Résolution d'équations polynomiales", emoji: "🧩",
  overview: r`Factoriser complètement — facteur commun, groupement, ou le théorème du facteur — puis poser chaque facteur égal à zéro.`,
  points: [
    r`D'abord, mettre le facteur commun en évidence.`,
    r`Essayer le groupement, ou le théorème du facteur suivi d'une division.`,
    r`Un polynôme de degré \(n\) a \(n\) racines (avec multiplicité).`,
  ],
  graphs: [gframe(["y = x^3 - 4*x"], { title: "y = x³ − 4x : trois zéros simples, en x = 0, 2, −2" })],
  examples: [
    { title: "Facteur commun", prompt: r`Résoudre \(x^3-4x=0\).`,
      steps: [r`Mettre \(x\) en évidence : \(x(x^2-4)=x(x-2)(x+2)=0\).`], concl: r`\(x=0,\ 2,\ -2\).` },
    { title: "Groupement", prompt: r`Résoudre \(x^3+2x^2-x-2=0\).`,
      steps: [r`Grouper : \(x^2(x+2)-(x+2)=(x+2)(x^2-1)\).`, r`Factoriser \(x^2-1=(x-1)(x+1)\), donc \((x+2)(x-1)(x+1)=0\).`],
      concl: r`\(x=-2,\ 1,\ -1\).` },
    { title: "Théorème du facteur", prompt: r`Résoudre \(x^3-7x-6=0\).`,
      steps: [r`Tester \(x=-1\) : \(P(-1)=-1+7-6=0\).`, r`Diviser par \(x+1\) : \((x+1)(x^2-x-6)=(x+1)(x-3)(x+2)\).`],
      concl: r`\(x=-1,\ 3,\ -2\).`, extra: gframe(["y = x^3-7*x-6"], { title: "y = x³ − 7x − 6 : trois zéros, en x = −2, −1, 3" }) },
  ],
  practice: [
    { prompt: r`Résoudre \(x^3-9x=0\).`, answer: r`\(x(x-3)(x+3)=0\Rightarrow x=0,\ 3,\ -3\).` },
    { prompt: r`Résoudre \(x^3-x^2-2x=0\).`, answer: r`\(x(x-2)(x+1)=0\Rightarrow x=0,\ 2,\ -1\).` },
    { prompt: r`Résoudre \(x^4-5x^2+4=0\).`, answer: r`\((x^2-1)(x^2-4)=0\Rightarrow x=\pm1,\ \pm2\).` },
  ],
  qa: [
    { q: "Quelle est la première étape pour résoudre une équation polynomiale ?", a: "Mettre en évidence tout facteur commun." },
    { q: "Combien de racines une équation de degré n possède-t-elle ?", a: r`\(n\) racines, en comptant les multiplicités.` },
    { q: "Que faire si aucun facteur commun n'existe ?", a: "Essayer le groupement, ou tester des racines candidates avec le théorème du facteur." },
  ],
});

u2["2.4"] = mkLesson({
  code: "2.4", title: "Inégalités polynomiales", emoji: "⚖️",
  overview: r`Pour résoudre \(P(x)>0\) ou \(P(x)<0\), trouver d'abord les zéros — ils divisent la droite numérique en intervalles. Sur chaque intervalle, \(P\) garde un signe constant, qu'on trouve avec un point d'essai. Un <strong>tableau de signes</strong> organise le travail.`,
  points: [
    r`Déplacer tous les termes d'un côté ; <strong>factoriser</strong> pour trouver les zéros.`,
    r`Marquer les zéros sur une droite numérique et <strong>tester un point</strong> dans chaque intervalle.`,
    r`Choisir les intervalles qui satisfont l'inégalité ; inclure les extrémités pour \(\ge\) ou \(\le\). Le signe change à un zéro de multiplicité impaire, mais pas à un zéro de multiplicité paire.`,
  ],
  graphs: [gframe(["y = (x-1)*(x+2)"], { title: "(x−1)(x+2) : positif à l'extérieur de [−2, 1], négatif à l'intérieur" })],
  examples: [
    { title: "Produit positif", prompt: r`Résoudre \((x-1)(x+2)>0\).`,
      steps: [r`Zéros \(1,\ -2\). Tester \(x=-3\) (+), \(x=0\) (−), \(x=2\) (+).`], concl: r`\(x<-2\) ou \(x>1\).` },
    { title: "Ramener à zéro d'abord", prompt: r`Résoudre \(x^2+2x\ge3\).`,
      steps: [r`Tout ramener d'un côté : \(x^2+2x-3\ge0\).`, r`Factoriser \((x+3)(x-1)\ge0\) ; zéros \(-3,\ 1\). Les points d'essai donnent \(+,-,+\), et \(\ge\) inclut les zéros.`],
      concl: r`\(x\le-3\) ou \(x\ge1\).`, extra: gframe(["y = x^2 + 2*x - 3"], { title: "x² + 2x − 3 ≥ 0 là où la parabole est sur ou au-dessus de l'axe : x ≤ −3 ou x ≥ 1" }) },
    { title: "Trois facteurs", prompt: r`Résoudre \(x(x-2)(x+1)<0\).`,
      steps: [r`Zéros \(-1,\ 0,\ 2\). Signes par intervalle : \((-\infty,-1)\) −, \((-1,0)\) +, \((0,2)\) −, \((2,\infty)\) +.`], concl: r`\(x<-1\) ou \(0<x<2\).` },
  ],
  practice: [
    { prompt: r`Résoudre \((x-3)(x+1)>0\).`, answer: r`\(x<-1\) ou \(x>3\).` },
    { prompt: r`Résoudre \(x^2-4<0\).`, answer: r`\(-2<x<2\).` },
    { prompt: r`Résoudre \(x^2-2x-3\ge0\).`, answer: r`\((x-3)(x+1)\ge0\Rightarrow x\le-1\) ou \(x\ge3\).` },
  ],
  qa: [
    { q: "Que font les zéros dans une inégalité polynomiale ?", a: "Ils divisent la droite numérique en intervalles de signe constant." },
    { q: "Comment trouve-t-on le signe sur chaque intervalle ?", a: "En substituant un seul point d'essai." },
    { q: "Le signe change-t-il toujours à un zéro ?", a: "Seulement à une multiplicité impaire ; une multiplicité paire garde le même signe." },
  ],
});
