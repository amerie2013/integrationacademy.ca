// MHF4U-FR Unité 6 — Identités et équations trigonométriques.
import { mkLesson, gframe } from "./mhf4u-lessons-fr-helpers.mjs";
const r = String.raw;
export const u6 = {};

u6["6.1"] = mkLesson({
  code: "6.1", title: "Formules d'angles composés", emoji: "➕",
  overview: r`\(\sin(A\pm B)=\sin A\cos B\pm\cos A\sin B\) et \(\cos(A\pm B)=\cos A\cos B\mp\sin A\sin B\) donnent des valeurs exactes pour de nouveaux angles.`,
  points: [
    r`\(\sin(A\pm B)=\sin A\cos B\pm\cos A\sin B\).`,
    r`\(\cos(A\pm B)=\cos A\cos B\mp\sin A\sin B\).`,
    r`Écrire \(15^\circ,75^\circ,\dots\) comme des sommes ou différences d'angles remarquables.`,
  ],
  graphs: [],
  examples: [
    { title: "Sinus d'une somme", prompt: r`Trouver \(\sin 75^\circ=\sin(45^\circ+30^\circ)\).`,
      steps: [r`\(\sin45\cos30+\cos45\sin30=\tfrac{\sqrt6}{4}+\tfrac{\sqrt2}{4}\).`], concl: r`\(\dfrac{\sqrt6+\sqrt2}{4}\).` },
    { title: "Cosinus d'une somme", prompt: r`Trouver \(\cos 75^\circ\).`, steps: [r`\(\cos45\cos30-\sin45\sin30=\dfrac{\sqrt6-\sqrt2}{4}\).`], concl: r`\(\dfrac{\sqrt6-\sqrt2}{4}\).` },
    { title: "Utiliser des valeurs données", prompt: r`Avec \(\sin A=\tfrac35,\cos A=\tfrac45,\sin B=\tfrac5{13},\cos B=\tfrac{12}{13}\), trouver \(\sin(A+B)\).`,
      steps: [r`\(\tfrac35\cdot\tfrac{12}{13}+\tfrac45\cdot\tfrac5{13}=\tfrac{36+20}{65}\).`], concl: r`\(\dfrac{56}{65}\).` },
  ],
  practice: [
    { prompt: r`Trouver \(\cos 15^\circ\).`, answer: r`\(\cos45\cos30+\sin45\sin30=\dfrac{\sqrt6+\sqrt2}{4}\).` },
    { prompt: r`Simplifier \(\sin x\cos y+\cos x\sin y\).`, answer: r`\(\sin(x+y)\).` },
    { prompt: r`Trouver \(\sin 105^\circ=\sin(60^\circ+45^\circ)\).`, answer: r`\(\dfrac{\sqrt6+\sqrt2}{4}\).` },
  ],
  qa: [
    { q: "Quelle est la formule de sin(A+B) ?", a: r`\(\sin A\cos B+\cos A\sin B\).` },
    { q: "Comment trouve-t-on cos(A−B) ?", a: r`\(\cos A\cos B+\sin A\sin B\) (le signe change pour la différence).` },
    { q: "À quoi servent les angles composés ?", a: "À trouver des valeurs exactes pour des angles qui ne sont pas remarquables, en les écrivant comme une somme ou une différence." },
  ],
});

u6["6.2"] = mkLesson({
  code: "6.2", title: "Formules de l'angle double", emoji: "✌️",
  overview: r`En posant \(B=A\) : \(\sin2\theta=2\sin\theta\cos\theta\) et \(\cos2\theta=\cos^2\theta-\sin^2\theta=1-2\sin^2\theta=2\cos^2\theta-1\).`,
  points: [
    r`\(\sin2\theta=2\sin\theta\cos\theta\).`,
    r`\(\cos2\theta=1-2\sin^2\theta=2\cos^2\theta-1\).`,
    r`\(\tan2\theta=\tfrac{2\tan\theta}{1-\tan^2\theta}\).`,
  ],
  graphs: [],
  examples: [
    { title: "Sinus de l'angle double", prompt: r`Avec \(\sin\theta=\tfrac35,\cos\theta=\tfrac45\), trouver \(\sin2\theta\).`, steps: [r`\(2\cdot\tfrac35\cdot\tfrac45=\dfrac{24}{25}\).`], concl: r`\(\dfrac{24}{25}\).` },
    { title: "Cosinus de l'angle double", prompt: r`Avec \(\sin\theta=\tfrac35\), trouver \(\cos2\theta\).`, steps: [r`\(1-2\sin^2\theta=1-\tfrac{18}{25}\).`], concl: r`\(\dfrac{7}{25}\).` },
    { title: "Reconnaître le modèle", prompt: r`Simplifier \(2\sin x\cos x\).`, steps: [r`C'est exactement la formule de \(\sin2x\).`], concl: r`\(\sin2x\).` },
  ],
  practice: [
    { prompt: r`Avec \(\sin\theta=\tfrac5{13},\cos\theta=\tfrac{12}{13}\), trouver \(\sin2\theta\).`, answer: r`\(2\cdot\tfrac5{13}\cdot\tfrac{12}{13}=\dfrac{120}{169}\).` },
    { prompt: r`Simplifier \(2\cos^2 x-1\).`, answer: r`\(\cos2x\).` },
    { prompt: r`Écrire \(\cos2\theta\) en fonction de \(\cos\theta\) seulement.`, answer: r`\(2\cos^2\theta-1\).` },
  ],
  qa: [
    { q: "Quelle est la formule de sin 2θ ?", a: r`\(2\sin\theta\cos\theta\).` },
    { q: "Combien de formes a cos 2θ ?", a: "Trois : en cos²θ − sin²θ, 1 − 2sin²θ, ou 2cos²θ − 1." },
    { q: "D'où viennent les formules de l'angle double ?", a: "Des formules d'angles composés, en posant B = A." },
  ],
});

u6["6.3"] = mkLesson({
  code: "6.3", title: "Preuve d'identités trigonométriques", emoji: "✅",
  overview: r`Transformer un côté en utilisant les identités pythagoriciennes, de quotient et réciproques jusqu'à ce qu'il corresponde à l'autre.`,
  points: [
    r`\(\sin^2\theta+\cos^2\theta=1\) ; \(1+\tan^2\theta=\sec^2\theta\) ; \(1+\cot^2\theta=\csc^2\theta\).`,
    r`\(\tan\theta=\tfrac{\sin\theta}{\cos\theta}\), \(\cot\theta=\tfrac{\cos\theta}{\sin\theta}\).`,
    r`Commencer par le côté le plus compliqué ; réécrire en sinus et cosinus.`,
  ],
  graphs: [],
  examples: [
    { title: "Identité pythagoricienne", prompt: r`Prouver \(1-\cos^2 x=\sin^2 x\).`, steps: [r`À partir de \(\sin^2 x+\cos^2 x=1\), soustraire \(\cos^2 x\).`], concl: r`vrai, par l'identité pythagoricienne.` },
    { title: "Quotient", prompt: r`Prouver \(\tan x\cos x=\sin x\).`, steps: [r`\(\dfrac{\sin x}{\cos x}\cdot\cos x=\sin x\).`], concl: r`c'est vrai. ✓` },
    { title: "Rapports réciproques", prompt: r`Prouver \(\dfrac{\sec x}{\csc x}=\tan x\).`, steps: [r`\(\dfrac{1/\cos x}{1/\sin x}=\dfrac{\sin x}{\cos x}=\tan x\).`], concl: r`c'est vrai. ✓` },
  ],
  practice: [
    { prompt: r`Prouver \(1-\sin^2 x=\cos^2 x\).`, answer: r`À partir de \(\sin^2+\cos^2=1\).` },
    { prompt: r`Prouver \(\cot x\sin x=\cos x\).`, answer: r`\(\tfrac{\cos x}{\sin x}\cdot\sin x=\cos x\).` },
    { prompt: r`Prouver \(1+\tan^2 x=\sec^2 x\).`, answer: r`Diviser l'identité pythagoricienne par \(\cos^2 x\).` },
  ],
  qa: [
    { q: "Par quel côté commence-t-on ?", a: "Le côté le plus compliqué, en général." },
    { q: "Quelles sont les trois identités pythagoriciennes ?", a: r`\(\sin^2+\cos^2=1\), \(1+\tan^2=\sec^2\), \(1+\cot^2=\csc^2\).` },
    { q: "Une stratégie utile ?", a: "Réécrire tous les rapports en sinus et cosinus." },
  ],
});

u6["6.4"] = mkLesson({
  code: "6.4", title: "Résolution d'équations trigonométriques", emoji: "🔍",
  overview: r`Trouver toutes les solutions sur \([0,2\pi)\) : isoler le rapport, trouver l'angle de référence, puis utiliser la règle CAST pour chaque quadrant.`,
  points: [
    r`Isoler le rapport ; trouver l'angle de référence à partir d'une valeur remarquable.`,
    r`Utiliser la règle CAST pour situer chaque solution.`,
    r`Quadratiques : factoriser d'abord ; formes mixtes : utiliser une identité.`,
  ],
  graphs: [],
  examples: [
    { title: "Sinus de base", prompt: r`Résoudre \(\sin\theta=\tfrac12\) sur \([0,2\pi)\).`, steps: [r`Angle de référence \(\tfrac{\pi}{6}\) ; sinus positif en QI, QII.`], concl: r`\(\theta=\tfrac{\pi}{6},\tfrac{5\pi}{6}\).` },
    { title: "Cosinus nul", prompt: r`Résoudre \(\cos\theta=0\) sur \([0,2\pi)\).`, steps: [r`\(\cos\theta=0\) aux quadrantales verticales.`], concl: r`\(\theta=\tfrac{\pi}{2},\tfrac{3\pi}{2}\).` },
    { title: "Isoler d'abord", prompt: r`Résoudre \(2\cos\theta-1=0\) sur \([0,2\pi)\).`, steps: [r`\(\cos\theta=\tfrac12\) ; angle de référence \(\tfrac{\pi}{3}\), positif en QI, QIV.`], concl: r`\(\theta=\tfrac{\pi}{3},\tfrac{5\pi}{3}\).` },
  ],
  practice: [
    { prompt: r`Résoudre \(\sin\theta=0\) sur \([0,2\pi)\).`, answer: r`\(\theta=0,\pi\).` },
    { prompt: r`Résoudre \(\tan\theta=1\) sur \([0,2\pi)\).`, answer: r`\(\theta=\tfrac{\pi}{4},\tfrac{5\pi}{4}\).` },
    { prompt: r`Résoudre \(\cos\theta=\tfrac12\) sur \([0,2\pi)\).`, answer: r`\(\theta=\tfrac{\pi}{3},\tfrac{5\pi}{3}\).` },
  ],
  qa: [
    { q: "Quelle est la première étape pour résoudre une équation trigonométrique ?", a: "Isoler le rapport trigonométrique." },
    { q: "Que donne l'angle de référence ?", a: "La solution dans le premier quadrant, à partir de laquelle on trouve toutes les autres." },
    { q: "Comment place-t-on les solutions dans chaque quadrant ?", a: "Avec la règle CAST, qui donne le signe du rapport dans chaque quadrant." },
  ],
});
