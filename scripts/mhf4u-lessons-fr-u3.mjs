// MHF4U-FR Unité 3 — Fonctions rationnelles.
import { mkLesson, gframe } from "./mhf4u-lessons-fr-helpers.mjs";
const r = String.raw;
export const u3 = {};

u3["3.1"] = mkLesson({
  code: "3.1", title: "Fonctions réciproques et rationnelles", emoji: "🪞",
  overview: r`Une <strong>fonction rationnelle</strong> est un quotient de polynômes \(f(x)=\dfrac{p(x)}{q(x)}\). Son graphique est déterminé par des <strong>asymptotes</strong> — des droites que la courbe approche sans jamais les atteindre. Le cas le plus simple est la réciproque \(y=\tfrac1x\), avec une <strong>asymptote verticale</strong> en \(x=0\) et une <strong>asymptote horizontale</strong> en \(y=0\).`,
  points: [
    r`<strong>Domaine :</strong> exclure tout \(x\) où \(q(x)=0\).`,
    r`<strong>Asymptote verticale :</strong> aux zéros de \(q(x)\) qui ne s'annulent pas avec le numérateur.`,
    r`<strong>Asymptote horizontale :</strong> \(\deg p<\deg q\Rightarrow y=0\) ; degrés égaux \(\Rightarrow y=\dfrac{\text{coeff. dominant de }p}{\text{coeff. dominant de }q}\).`,
    r`<strong>Trou :</strong> là où un facteur commun de \(p\) et \(q\) s'annule.`,
  ],
  graphs: [gframe(["y = 1/x"], { title: "y = 1/x : asymptote verticale x = 0, asymptote horizontale y = 0" })],
  examples: [
    { title: "Analyse complète d'une fonction", prompt: r`Pour \(y=\dfrac{x+1}{x-3}\), donner le domaine, l'asymptote verticale et l'asymptote horizontale.`,
      steps: [r`Le dénominateur est nul en \(x=3\) : domaine \(x\ne3\), asymptote verticale \(x=3\).`, r`Numérateur et dénominateur de degré 1 (égaux) ⇒ l'asymptote horizontale est le rapport des coefficients dominants, \(y=\tfrac11=1\).`],
      concl: r`domaine \(x\ne3\), AV \(x=3\), AH \(y=1\).`, extra: gframe(["y = (x+1)/(x-3)"], { title: "(x+1)/(x−3) : asymptote verticale x=3, asymptote horizontale y=1" }) },
    { title: "Deux asymptotes verticales", prompt: r`Trouver les asymptotes de \(y=\dfrac{5}{x^2-4}\).`,
      steps: [r`\(x^2-4=(x-2)(x+2)=0\) en \(x=\pm2\) ⇒ <em>deux</em> asymptotes verticales.`, r`Numérateur de degré \(0<\) dénominateur de degré \(2\) ⇒ asymptote horizontale \(y=0\).`],
      concl: r`AV \(x=2\) et \(x=-2\) ; AH \(y=0\).` },
    { title: "Un trou (facteur qui s'annule)", prompt: r`Décrire \(y=\dfrac{x^2-1}{x-1}\).`,
      steps: [r`Factoriser : \(\dfrac{(x-1)(x+1)}{x-1}=x+1\), mais \(x\ne1\).`], concl: r`la droite \(y=x+1\) avec un <em>trou</em> en \(x=1\) — pas une asymptote.` },
  ],
  practice: [
    { prompt: r`Quelle est l'asymptote verticale de \(y=\dfrac{1}{x-5}\) ?`, answer: r`\(x=5\).` },
    { prompt: r`Quelle est l'asymptote horizontale de \(y=\dfrac{5x}{x+2}\) ?`, answer: r`Degrés égaux : \(y=5\).` },
    { prompt: r`Où est le trou de \(y=\dfrac{x^2-4}{x-2}\) ?`, answer: r`En \(x=2\) (se simplifie à \(x+2\)).` },
  ],
  qa: [
    { q: "Où sont les asymptotes verticales ?", a: "Aux zéros du dénominateur qui ne s'annulent pas avec le numérateur." },
    { q: "Comment trouve-t-on l'asymptote horizontale ?", a: "En comparant les degrés : le plus petit numérateur donne y=0 ; des degrés égaux donnent le rapport des coefficients dominants." },
    { q: "Qu'est-ce qui cause un trou ?", a: "Un facteur qui s'annule entre le numérateur et le dénominateur." },
  ],
});

u3["3.2"] = mkLesson({
  code: "3.2", title: "Graphiques des fonctions rationnelles", emoji: "📐",
  overview: r`Esquisser à partir du squelette : les abscisses et l'ordonnée à l'origine, les asymptotes verticale et horizontale, et le comportement de chaque côté d'une asymptote verticale.`,
  points: [
    r`Abscisse à l'origine : numérateur \(=0\). Ordonnée à l'origine : évaluer \(f(0)\).`,
    r`AV : dénominateur \(=0\). AH : à partir des degrés.`,
    r`Près d'une AV, la courbe file vers \(\pm\infty\) — tester chaque côté.`,
  ],
  graphs: [gframe(["y = 1/x"], { title: "y = 1/x : deux branches, sans intersection avec les axes" })],
  examples: [
    { title: "Le squelette complet", prompt: r`Pour \(y=\dfrac{x-2}{x+1}\), trouver les abscisses, l'ordonnée à l'origine et les asymptotes.`,
      steps: [r`Abscisse : numérateur \(=0\Rightarrow x=2\), point \((2,0)\).`, r`Ordonnée à l'origine : \(f(0)=\dfrac{-2}{1}=-2\), point \((0,-2)\).`, r`AV \(x=-1\) ; AH \(y=1\) (degrés égaux).`],
      concl: r`\((2,0)\), \((0,-2)\), AV \(x=-1\), AH \(y=1\).`, extra: gframe(["y = (x-2)/(x+1)"], { title: "(x−2)/(x+1) : AV x=−1, AH y=1" }) },
    { title: "Comportement près d'une asymptote", prompt: r`Comment \(y=\dfrac{1}{x-2}\) se comporte-t-elle près de \(x=2\) ?`,
      steps: [r`Juste à gauche (\(x=1.9\)) : dénominateur négatif, \(y\to-\infty\).`, r`Juste à droite (\(x=2.1\)) : dénominateur positif, \(y\to+\infty\).`],
      concl: r`\(y\to-\infty\) à gauche, \(y\to+\infty\) à droite.` },
    { title: "Comportement à l'infini", prompt: r`Quand \(x\to\infty\), que fait \(y=\dfrac{2x+1}{x-3}\) ?`,
      steps: [r`Degrés égaux ⇒ le rapport des coefficients dominants \(\tfrac21\).`], concl: r`\(y\to2\).` },
  ],
  practice: [
    { prompt: r`Quelles sont l'AV et l'AH de \(y=\dfrac{1}{x-4}\) ?`, answer: r`AV \(x=4\), AH \(y=0\).` },
    { prompt: r`Quelle est l'abscisse à l'origine de \(y=\dfrac{x-5}{x+2}\) ?`, answer: r`\((5,0)\).` },
    { prompt: r`Quelle est l'ordonnée à l'origine de \(y=\dfrac{x+4}{x-2}\) ?`, answer: r`\(f(0)=\dfrac{4}{-2}=-2\) : \((0,-2)\).` },
  ],
  qa: [
    { q: "Comment trouve-t-on l'abscisse à l'origine d'une fonction rationnelle ?", a: "En posant le numérateur égal à zéro." },
    { q: "Que se passe-t-il près d'une asymptote verticale ?", a: "La courbe tend vers +∞ ou −∞ ; il faut tester chaque côté séparément." },
    { q: "Comment esquisse-t-on rapidement le graphique ?", a: "Marquer les asymptotes et les intercepts, puis remplir chaque intervalle avec le comportement trouvé." },
  ],
});

u3["3.3"] = mkLesson({
  code: "3.3", title: "Résolution d'équations et inégalités rationnelles", emoji: "🧮",
  overview: r`Pour résoudre une <strong>équation</strong> rationnelle, multiplier par le plus petit dénominateur commun pour éliminer les fractions — puis résoudre le polynôme restant, et <strong>rejeter toute solution</strong> qui annule un dénominateur original (une racine étrangère). Pour une <strong>inégalité</strong>, tout ramener d'un côté, trouver les <strong>valeurs critiques</strong> (zéros du numérateur <em>et</em> du dénominateur), et utiliser un tableau de signes — le dénominateur reste toujours exclu.`,
  points: [
    r`Équation : multiplier par le PPDC, résoudre, puis vérifier les restrictions.`,
    r`Inégalité : ramener à \(0\) d'un côté, trouver les valeurs critiques, tester chaque intervalle.`,
    r`Les zéros du dénominateur ne font jamais partie de la solution (cercles ouverts).`,
  ],
  graphs: [gframe(["y = x/(x-1)"], { title: "y = x/(x−1) : la solution de x/(x−1) > 0 est là où la courbe est au-dessus de l'axe" })],
  examples: [
    { title: "Attention à la racine étrangère", prompt: r`Résoudre \(\dfrac{x}{x-2}=\dfrac{2}{x-2}\).`,
      steps: [r`Noter la restriction \(x\ne2\). Multiplier les deux côtés par \(x-2\) : \(x=2\).`, r`Mais \(x=2\) est exclu — il annule les dénominateurs.`],
      concl: r`\(x=2\) est étrangère, donc il n'y a <em>pas de solution</em>.` },
    { title: "Produit croisé", prompt: r`Résoudre \(\dfrac{x+1}{x-2}=3\).`,
      steps: [r`\(x+1=3(x-2)=3x-6\).`, r`\(7=2x\).`], concl: r`\(x=\tfrac72\) (valide, \(\ne2\)).`, extra: gframe(["y = (x+1)/(x-2)", "y = 3"], { title: "(x+1)/(x−2) = 3 là où la courbe rencontre la droite y=3 — en x=7/2" }) },
    { title: "Inégalité", prompt: r`Résoudre \(\dfrac{x}{x-1}>0\).`,
      steps: [r`Valeurs critiques \(0\) (numérateur) et \(1\) (dénominateur).`, r`Signes : \((-\infty,0)\) +, \((0,1)\) −, \((1,\infty)\) +.`], concl: r`\(x<0\) ou \(x>1\).` },
  ],
  practice: [
    { prompt: r`Résoudre \(\dfrac3x=6\).`, answer: r`\(x=\tfrac12\).` },
    { prompt: r`Résoudre \(\dfrac{x-1}{x+2}=2\).`, answer: r`\(x-1=2x+4\Rightarrow x=-5\).` },
    { prompt: r`Résoudre \(\dfrac{1}{x+1}>0\).`, answer: r`\(x>-1\).` },
  ],
  qa: [
    { q: "Comment élimine-t-on les fractions ?", a: "En multipliant chaque terme par le plus petit dénominateur commun." },
    { q: "Qu'est-ce qu'une racine étrangère ?", a: "Une solution qui annule un dénominateur original — on la rejette." },
    { q: "Les zéros du dénominateur sont-ils jamais inclus ?", a: "Non — ils sont toujours exclus (cercles ouverts)." },
  ],
});
