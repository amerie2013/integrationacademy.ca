// 2.6 Problèmes de taux de variation — 20 questions difficiles
import { mc, num, tf } from "./kit.mjs";
import { graph, P } from "./fig.mjs";

const S = String.raw;
export const TOPIC = "2.6 Problèmes de taux de variation";
export const Q = [
  num(S`La demande est $p=120-0.4x$ dollars. Trouve le revenu maximal.`, 9000, "R = 120x − 0.4x²; R′ = 0 en x = 150, p = 60."),
  num(S`$C(x)=1600+10x+0.04x^2$. À quel niveau de production le coût moyen est-il le plus bas?`, 200, "A = 1600/x + 10 + 0.04x; A′ = 0 lorsque x² = 40000."),
  num("C(x) = 900 + 6x + 0.25x². Le coût moyen A(x) = C(x)/x est illustré. Trouve le coût moyen minimal.", 36, "A′ = −900/x² + 0.25 = 0 en x = 60; A(60) = 15 + 6 + 15.", graph((x) => 900 / x + 6 + 0.25 * x, { xmin: 0, xmax: 160, ymin: 0, ymax: 80 }, [P(60, 36)], { a: 15, b: 160, step: { x: 20, y: 10 } })),
  num(S`Pour un gaz, $P=\frac{1200}{V}$ kPa. Trouve $\frac{dP}{dV}$ à $V=30$ L (4 décimales).`, -1.3333, "−1200/V².", null, 0.0005),
  num(S`Pour un gaz, $P=\frac{1200}{V}$ kPa, et le volume augmente de 3 L/min. À quel rythme la pression varie-t-elle lorsque $V=20$ L (kPa par min)?`, -9, "dP/dV = −3; dP/dt = −3 · 3."),
  num("R(x) = 80x − 0.02x² et C(x) = 5000 + 20x. Le profit P = R − C est illustré. Où le profit marginal est-il nul?", 1500, "P′ = 60 − 0.04x.", graph((x) => 60 * x - 0.02 * x * x - 5000, { xmin: 0, xmax: 3000, ymin: -6000, ymax: 42000 }, [P(1500, 40000)], { a: 0, b: 3000, step: { x: 500, y: 6000 } })),
  num(S`Un réservoir contient $V(t)=3000\left(1-\frac{t}{60}\right)^2$ L. Trouve $V'(30)$ en L par min.`, -50, "6000(1 − t/60)(−1/60) en 30."),
  num(S`Au prix de $p$ dollars le billet, $3000-50p$ billets se vendent. Quel prix maximise le revenu?`, 30, "R = 3000p − 50p²; R′ = 0."),
  tf("Au niveau de production où le coût moyen est le plus bas, le coût moyen est égal au coût marginal.", true, "A′ = (xC′ − C)/x² = 0 donne C′ = C/x."),
  num(S`Une population est $P(t)=\frac{10000}{1+t}$. Trouve $P'(4)$.`, -400, "−10000/(1 + t)²."),
  num(S`Un cylindre a une hauteur de 8 cm. Trouve $\frac{dV}{dr}$ à $r=5$ cm (2 décimales).`, 251.33, "V = 8πr²; dV/dr = 16πr = 80π.", null, 0.01),
  num("C(x) = 0.002x³ − 0.6x² + 80x + 500. Son coût marginal C′(x) est illustré. Trouve le coût marginal le plus bas.", 20, "C″ = 0.012x − 1.2 = 0 en x = 100; C′(100) = 60 − 120 + 80.", graph((x) => 0.006 * x * x - 1.2 * x + 80, { xmin: 0, xmax: 200, ymin: 0, ymax: 90 }, [P(100, 20)], { a: 0, b: 200, step: { x: 25, y: 10 } })),
  num("Le profit P(x) = −0.5x² + 60x − 1000 est illustré. Trouve la plus petite quantité au seuil de rentabilité.", 20, "x² − 120x + 2000 = 0 : x = 20 ou 100.", graph((x) => -0.5 * x * x + 60 * x - 1000, { xmin: 0, xmax: 120, ymin: -1200, ymax: 1000 }, [P(20, 0), P(100, 0), P(60, 800)], { a: 0, b: 120, step: { x: 10, y: 200 } })),
  num(S`L'intensité sonore est $I=\frac{500}{d^2}$. Trouve $\frac{dI}{dd}$ à $d=10$ m.`, -1, "−1000/d³."),
  mc("Quelle quantité estime le mieux le coût de production du 51e article?", "C′(50)", ["C(51)", "C(50)/50", "C′(51) − C′(50)"], "Le coût marginal à 50."),
  num(S`$R(x)=x(40-0.1x)$. Pour quelle valeur de $x$ le revenu marginal est-il nul?`, 200, "R′ = 40 − 0.2x."),
  num(S`L'arête d'un glaçon est $s=3-0.1t$ cm. À quel rythme son volume varie-t-il à $t=10$ min (cm³ par min)?`, -1.2, "3s² · (−0.1) avec s = 2.", null, 0.0001),
  num(S`Une quantité est $Q(t)=\frac{4t+20}{t+1}$. Trouve $Q'(1)$.`, -4, "(4(t + 1) − (4t + 20))/(t + 1)² = −16/4."),
  num(S`$C(x)=1500+30x-0.1x^2+0.001x^3$. Trouve $C'(50)$.`, 27.5, "30 − 0.2(50) + 0.003(2500).", null, 0.0001),
  num("Une voiture qui freine a pour position s(t) = 25t − 2.5t² m (graphique illustré). Quelle distance parcourt-elle avant de s'arrêter?", 62.5, "v = 25 − 5t = 0 à t = 5.", graph((t) => 25 * t - 2.5 * t * t, { xmin: 0, xmax: 6, ymin: 0, ymax: 70 }, [P(5, 62.5)], { a: 0, b: 6, step: { x: 1, y: 10 } }), 0.0001),
];
