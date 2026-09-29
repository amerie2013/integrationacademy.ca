// MHF4U-FR Unité 5 — Fonctions trigonométriques.
import { mkLesson, gframe } from "./mhf4u-lessons-fr-helpers.mjs";
const r = String.raw;
export const u5 = {};

u5["5.1"] = mkLesson({
  code: "5.1", title: "Mesure en radians", emoji: "⭕",
  overview: r`Un radian mesure un angle par la longueur de l'arc ; un tour complet vaut \(2\pi\) radians \(=360^\circ\). On convertit avec \(\tfrac{\pi}{180}\) ou \(\tfrac{180}{\pi}\), et on utilise \(s=r\theta\) pour la longueur d'arc.`,
  points: [
    r`Degrés\(\to\)radians : \(\times\tfrac{\pi}{180}\). Radians\(\to\)degrés : \(\times\tfrac{180}{\pi}\).`,
    r`\(30^\circ=\tfrac{\pi}{6},\ 45^\circ=\tfrac{\pi}{4},\ 60^\circ=\tfrac{\pi}{3},\ 90^\circ=\tfrac{\pi}{2}\).`,
    r`Longueur d'arc \(s=r\theta\) (\(\theta\) en radians).`,
  ],
  graphs: [],
  examples: [
    { title: "Degrés vers radians", prompt: r`Convertir \(180^\circ\) en radians.`, steps: [r`\(180\cdot\tfrac{\pi}{180}=\pi\).`], concl: r`\(\pi\).` },
    { title: "Radians vers degrés", prompt: r`Convertir \(\tfrac{\pi}{3}\) en degrés.`, steps: [r`\(\tfrac{\pi}{3}\cdot\tfrac{180}{\pi}=60^\circ\).`], concl: r`\(60^\circ\).` },
    { title: "Longueur d'arc", prompt: r`Longueur d'arc pour \(r=6,\ \theta=\tfrac{\pi}{2}\).`, steps: [r`\(s=r\theta=6\cdot\tfrac{\pi}{2}\).`], concl: r`\(s=3\pi\).` },
  ],
  practice: [
    { prompt: r`Convertir \(60^\circ\) en radians.`, answer: r`\(\tfrac{\pi}{3}\).` },
    { prompt: r`Convertir \(\tfrac{\pi}{6}\) en degrés.`, answer: r`\(30^\circ\).` },
    { prompt: r`Longueur d'arc pour \(r=4,\ \theta=\tfrac{\pi}{3}\).`, answer: r`\(s=4\cdot\tfrac{\pi}{3}=\tfrac{4\pi}{3}\).` },
  ],
  qa: [
    { q: "Comment convertit-on des degrés en radians ?", a: r`En multipliant par \(\tfrac{\pi}{180}\).` },
    { q: "À combien de radians correspond un tour complet ?", a: r`\(2\pi\).` },
    { q: "Quelle est la formule de la longueur d'arc ?", a: r`\(s=r\theta\), avec \(\theta\) en radians.` },
  ],
});

u5["5.2"] = mkLesson({
  code: "5.2", title: "Rapports trigonométriques et le cercle unitaire", emoji: "🎡",
  overview: r`Sur le cercle unitaire, le point à l'angle \(\theta\) est \((\cos\theta,\sin\theta)\) ; cela donne toutes les valeurs des angles remarquables et le signe dans chaque quadrant.`,
  points: [
    r`\((\cos\theta,\sin\theta)\) ; \(\tan\theta=\tfrac{\sin\theta}{\cos\theta}\).`,
    r`\(\sin\tfrac{\pi}{6}=\tfrac12,\ \cos\tfrac{\pi}{6}=\tfrac{\sqrt3}{2},\ \sin\tfrac{\pi}{4}=\cos\tfrac{\pi}{4}=\tfrac{\sqrt2}{2}\).`,
    r`Règle CAST (ou « TSCT ») : quels rapports sont positifs selon le quadrant.`,
  ],
  graphs: [],
  examples: [
    { title: "Sinus", prompt: r`Trouver \(\sin\tfrac{\pi}{6}\).`, steps: [r`\(\tfrac{\pi}{6}=30^\circ\Rightarrow\tfrac12\).`], concl: r`\(\tfrac12\).` },
    { title: "Cosinus", prompt: r`Trouver \(\cos\tfrac{\pi}{3}\).`, steps: [r`\(\tfrac{\pi}{3}=60^\circ\Rightarrow\tfrac12\).`], concl: r`\(\tfrac12\).` },
    { title: "Valeur quadrantale", prompt: r`Trouver \(\sin\tfrac{\pi}{2}\).`, steps: [r`Point \((0,1)\Rightarrow1\).`], concl: r`\(1\).` },
    { title: "Tangente", prompt: r`Trouver \(\tan\tfrac{\pi}{4}\).`, steps: [r`\(\tfrac{\sqrt2/2}{\sqrt2/2}=1\).`], concl: r`\(1\).` },
  ],
  practice: [
    { prompt: r`Trouver \(\cos\tfrac{\pi}{6}\).`, answer: r`\(\tfrac{\sqrt3}{2}\).` },
    { prompt: r`Trouver \(\sin\tfrac{\pi}{3}\).`, answer: r`\(\tfrac{\sqrt3}{2}\).` },
    { prompt: r`Dans quel quadrant \(\sin\theta>0\) et \(\cos\theta<0\) ?`, answer: r`Quadrant II.` },
  ],
  qa: [
    { q: "Comment le cercle unitaire définit-il sinus et cosinus ?", a: r`Le point à l'angle \(\theta\) est \((\cos\theta,\sin\theta)\).` },
    { q: "Que donne la règle CAST ?", a: "Le signe de chaque rapport trigonométrique selon le quadrant." },
    { q: "Comment trouve-t-on la tangente ?", a: r`\(\tan\theta=\tfrac{\sin\theta}{\cos\theta}\).` },
  ],
});

u5["5.3"] = mkLesson({
  code: "5.3", title: "Graphiques des fonctions sinusoïdales", emoji: "🌊",
  overview: r`\(y=a\sin(k(x-d))+c\) : amplitude \(|a|\), période \(\tfrac{2\pi}{k}\), déphasage \(d\), axe médian \(y=c\).`,
  points: [
    r`Amplitude \(=|a|\) ; axe médian \(y=c\).`,
    r`Période \(=\tfrac{2\pi}{k}\) ; déphasage \(=d\).`,
    r`Lire ces quatre valeurs pour esquisser, ou lire le graphique pour écrire l'équation.`,
  ],
  graphs: [gframe(["y = sin(x)"], { title: "y = sin x : amplitude 1, période 2π" })],
  examples: [
    { title: "Amplitude", prompt: r`Quelle est l'amplitude de \(y=3\sin x\) ?`, steps: [r`\(|a|=3\).`], concl: r`\(3\).` },
    { title: "Période", prompt: r`Quelle est la période de \(y=\sin(2x)\) ?`, steps: [r`\(\tfrac{2\pi}{2}=\pi\) — deux cycles en \(2\pi\).`], concl: r`\(\pi\).` },
    { title: "Axe médian", prompt: r`Quel est l'axe médian de \(y=\sin x+2\) ?`, steps: [r`\(c=2\).`], concl: r`\(y=2\).` },
  ],
  practice: [
    { prompt: r`Quelle est l'amplitude de \(y=5\sin x\) ?`, answer: r`\(5\).` },
    { prompt: r`Quelle est la période de \(y=\sin(4x)\) ?`, answer: r`\(\tfrac{2\pi}{4}=\tfrac{\pi}{2}\).` },
    { prompt: r`Quel est l'axe médian de \(y=\cos x-3\) ?`, answer: r`\(y=-3\).` },
  ],
  qa: [
    { q: "Comment trouve-t-on l'amplitude ?", a: r`\(|a|\), le coefficient devant le sinus ou le cosinus.` },
    { q: "Comment trouve-t-on la période ?", a: r`\(\tfrac{2\pi}{k}\).` },
    { q: "Que représente l'axe médian ?", a: "La droite horizontale autour de laquelle la courbe oscille." },
  ],
});

u5["5.4"] = mkLesson({
  code: "5.4", title: "Fonctions trigonométriques réciproques", emoji: "🔁",
  overview: r`\(\csc\theta=\tfrac1{\sin\theta}\), \(\sec\theta=\tfrac1{\cos\theta}\), \(\cot\theta=\tfrac{\cos\theta}{\sin\theta}\) — chacune non définie là où sa fonction de base vaut zéro.`,
  points: [
    r`\(\csc=\tfrac1{\sin}\) (non définie où \(\sin=0\)) ; \(\sec=\tfrac1{\cos}\).`,
    r`\(\cot=\tfrac{\cos}{\sin}\) (non définie où \(\sin=0\)).`,
    r`Évaluer d'abord le rapport de base, puis prendre l'inverse.`,
  ],
  graphs: [],
  examples: [
    { title: "Cosécante", prompt: r`Trouver \(\csc\tfrac{\pi}{2}\).`, steps: [r`\(\sin\tfrac{\pi}{2}=1\Rightarrow\csc=1\).`], concl: r`\(1\).` },
    { title: "Sécante", prompt: r`Trouver \(\sec 0\).`, steps: [r`\(\cos 0=1\Rightarrow\sec=1\).`], concl: r`\(1\).` },
    { title: "Cotangente", prompt: r`Trouver \(\cot\tfrac{\pi}{4}\).`, steps: [r`\(\tan\tfrac{\pi}{4}=1\Rightarrow\cot=1\).`], concl: r`\(1\).` },
  ],
  practice: [
    { prompt: r`Trouver \(\csc\tfrac{\pi}{6}\).`, answer: r`\(\sin\tfrac{\pi}{6}=\tfrac12\Rightarrow\csc=2\).` },
    { prompt: r`Trouver \(\sec\tfrac{\pi}{3}\).`, answer: r`\(\cos\tfrac{\pi}{3}=\tfrac12\Rightarrow\sec=2\).` },
    { prompt: r`Où \(\csc\theta\) a-t-elle des asymptotes ?`, answer: r`Là où \(\sin\theta=0\).` },
  ],
  qa: [
    { q: "Comment trouve-t-on la cosécante ?", a: r`\(\csc\theta=\tfrac1{\sin\theta}\).` },
    { q: "Quand la sécante est-elle non définie ?", a: r`Quand \(\cos\theta=0\).` },
    { q: "Quel est le lien entre cotangente et tangente ?", a: r`\(\cot\theta=\tfrac1{\tan\theta}=\tfrac{\cos\theta}{\sin\theta}\).` },
  ],
});
