// MHF4U-FR Unité 7 — Taux de variation et combinaison de fonctions.
import { mkLesson, gframe } from "./mhf4u-lessons-fr-helpers.mjs";
const r = String.raw;
export const u7 = {};

u7["7.1"] = mkLesson({
  code: "7.1", title: "Taux de variation moyen et instantané", emoji: "📉",
  overview: r`Le taux de variation moyen sur \([a,b]\) est la pente de la sécante \(\dfrac{f(b)-f(a)}{b-a}\) ; le taux instantané en un point est la pente de la tangente, estimée sur un très petit intervalle.`,
  points: [
    r`Taux moyen \(=\dfrac{f(b)-f(a)}{b-a}\) (pente de la sécante).`,
    r`Taux instantané \(=\) pente de la tangente en un point.`,
    r`On l'estime avec un petit intervalle comme \([a,a+0.1]\).`,
  ],
  graphs: [gframe(["y = x^2"], { title: "y = x² : la pente de la sécante s'approche de la tangente quand l'intervalle rétrécit" })],
  examples: [
    { title: "Taux moyen", prompt: r`Taux de variation moyen de \(f(x)=x^2\) sur \([1,3]\).`, steps: [r`\(\dfrac{f(3)-f(1)}{3-1}=\dfrac{9-1}{2}\).`], concl: r`\(4\).` },
    { title: "Estimer le taux instantané", prompt: r`Estimer le taux instantané de \(f(x)=x^2\) en \(x=2\) en utilisant \([2,2.1]\).`,
      steps: [r`\(\dfrac{2.1^2-2^2}{0.1}=\dfrac{4.41-4}{0.1}\).`], concl: r`\(4.1\) (valeur exacte \(4\)).` },
    { title: "Taux linéaire", prompt: r`Taux de variation moyen de \(f(x)=2x+1\) sur \([0,5]\).`, steps: [r`\(\dfrac{11-1}{5}\) — constant pour une droite.`], concl: r`\(2\).` },
  ],
  practice: [
    { prompt: r`Taux moyen de \(f(x)=x^2\) sur \([0,4]\) ?`, answer: r`\(\dfrac{16-0}{4}=4\).` },
    { prompt: r`Taux moyen de \(f(x)=x^3\) sur \([1,2]\) ?`, answer: r`\(\dfrac{8-1}{1}=7\).` },
    { prompt: r`Estimer le taux instantané de \(f(x)=x^2\) en \(x=3\) avec \([3,3.1]\).`, answer: r`\(\dfrac{9.61-9}{0.1}=6.1\approx6\).` },
  ],
  qa: [
    { q: "Quelle est la différence entre une sécante et une tangente ?", a: "La sécante relie deux points ; la tangente touche le graphique en un seul point et donne le taux instantané." },
    { q: "Comment estime-t-on un taux instantané ?", a: "Avec le taux moyen sur un intervalle très petit autour du point." },
    { q: "Que mesure la pente d'une tangente ?", a: "Le taux de variation instantané en ce point." },
  ],
});

u7["7.2"] = mkLesson({
  code: "7.2", title: "Combinaison de fonctions", emoji: "➕",
  overview: r`Combiner des fonctions point par point : \((f\pm g)(x)=f(x)\pm g(x)\), \((fg)(x)=f(x)g(x)\), \(\left(\tfrac fg\right)(x)=\dfrac{f(x)}{g(x)}\) (avec \(g\ne0\)).`,
  points: [
    r`\((f\pm g)(x)=f(x)\pm g(x)\) ; \((fg)(x)=f(x)g(x)\).`,
    r`Domaine \(=\) intersection des deux domaines.`,
    r`Pour \(\tfrac fg\), exclure aussi \(g(x)=0\).`,
  ],
  graphs: [],
  examples: [
    { title: "Somme", prompt: r`\(f=x^2,\ g=x\). Trouver \((f+g)(x)\).`, steps: [r`\(x^2+x\).`], concl: r`\(x^2+x\).` },
    { title: "Produit", prompt: r`Avec les mêmes \(f,g\), trouver \((fg)(x)\).`, steps: [r`\(x^2\cdot x\).`], concl: r`\(x^3\).` },
    { title: "Quotient", prompt: r`Trouver \(\left(\tfrac fg\right)(x)\) et son domaine.`, steps: [r`\(\dfrac{x^2}{x}=x\), avec \(x\ne0\).`], concl: r`\(x\), domaine \(x\ne0\).` },
  ],
  practice: [
    { prompt: r`\(f=x+1,\ g=x-1\). Trouver \((f+g)(x)\).`, answer: r`\(2x\).` },
    { prompt: r`\(f=x^2,\ g=3\). Trouver \((f-g)(x)\).`, answer: r`\(x^2-3\).` },
    { prompt: r`\(f=x,\ g=x+2\). Trouver \((f+g)(3)\).`, answer: r`\(3+5=8\).` },
  ],
  qa: [
    { q: "Comment additionne-t-on deux fonctions ?", a: "Point par point : (f+g)(x) = f(x) + g(x)." },
    { q: "Quel est le domaine d'une combinaison de fonctions ?", a: "L'intersection des deux domaines (et, pour un quotient, sans les zéros du dénominateur)." },
    { q: "Que faut-il exclure pour f/g ?", a: "Toute valeur où g(x) = 0." },
  ],
});

u7["7.3"] = mkLesson({
  code: "7.3", title: "Composition de fonctions", emoji: "🔗",
  overview: r`Une composition insère une fonction dans une autre : \((f\circ g)(x)=f(g(x))\) — d'abord l'intérieure, puis l'extérieure. L'ordre compte, et on peut aussi décomposer.`,
  points: [
    r`\((f\circ g)(x)=f(g(x))\) : appliquer \(g\) d'abord, puis \(f\).`,
    r`Domaine : \(x\) dans le domaine de \(g\) et \(g(x)\) dans le domaine de \(f\).`,
    r`Décomposer : séparer une fonction en une extérieure et une intérieure.`,
  ],
  graphs: [gframe(["y = (x+1)^2"], { title: "y = (x+1)² : la parabole de base déplacée à gauche de 1" })],
  examples: [
    { title: "Composer", prompt: r`\(f=x^2,\ g=x+1\). Trouver \(f(g(x))\).`, steps: [r`Remplacer l'entrée de \(f\) par \(g(x)\) : \((x+1)^2\).`], concl: r`\((x+1)^2\).` },
    { title: "Évaluer", prompt: r`Trouver \(f(g(2))\).`, steps: [r`\(g(2)=3\), puis \(f(3)=9\).`], concl: r`\(9\).` },
    { title: "Décomposer", prompt: r`Écrire \(h(x)=(x+1)^2\) sous la forme \(f(g(x))\).`, steps: [r`Intérieure \(g(x)=x+1\), extérieure \(f(x)=x^2\).`], concl: r`\(g(x)=x+1,\ f(x)=x^2\).` },
  ],
  practice: [
    { prompt: r`\(f=x^2,\ g=x-2\). Trouver \(f(g(x))\).`, answer: r`\((x-2)^2\).` },
    { prompt: r`Avec les mêmes \(f,g\), trouver \(g(f(x))\).`, answer: r`\(x^2-2\).` },
    { prompt: r`Décomposer \(h(x)=\sqrt{x+5}\).`, answer: r`\(f(x)=\sqrt x,\ g(x)=x+5\).` },
  ],
  qa: [
    { q: "Qu'est-ce que (f∘g)(x) ?", a: "f(g(x)) : on applique d'abord g, puis f." },
    { q: "L'ordre compte-t-il dans une composition ?", a: "Oui : f(g(x)) n'est généralement pas égal à g(f(x))." },
    { q: "Comment décompose-t-on une fonction composée ?", a: "On identifie l'opération appliquée en dernier (l'extérieure) et ce qui reste à l'intérieur (l'intérieure)." },
  ],
});
