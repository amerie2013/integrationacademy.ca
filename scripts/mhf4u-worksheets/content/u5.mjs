// MHF4U Unit 5 worksheets — Trigonometric Functions (radians).
// pgfplots trig is in DEGREES, so radian plots wrap the argument in deg():
// sin(deg(x)) gives y = sin x with x in radians (period 2π).
const r = String.raw;
const U = "5: Trigonometric Functions";

// Radian-axis trig graph with π-labelled x-ticks.
const trig = (body, ymin = -1.6, ymax = 1.6) =>
  `\\begin{center}\\begin{tikzpicture}\\begin{axis}[width=9.2cm,height=4.6cm,axis lines=middle,xlabel={\\small$x$},ylabel={\\small$y$},xmin=-0.4,xmax=6.9,ymin=${ymin},ymax=${ymax},samples=220,xtick={1.5708,3.1416,4.7124,6.2832},xticklabels={$\\frac{\\pi}{2}$,$\\pi$,$\\frac{3\\pi}{2}$,$2\\pi$}]${body}\\end{axis}\\end{tikzpicture}\\end{center}`;
const sinRef = trig(r`\addplot[exblue,very thick,domain=0:6.4]{sin(deg(x))};`);
const sincos = trig(r`\addplot[exblue,very thick,domain=0:6.4]{sin(deg(x))};\addplot[qorange,very thick,domain=0:6.4]{cos(deg(x))};`);
const ampPlot = trig(r`\addplot[exblue,very thick,domain=0:6.4]{2*sin(deg(x))};`, -2.4, 2.4);
const periodPlot = trig(r`\addplot[exblue,very thick,domain=0:6.4]{sin(deg(2*x))};`);

export default [
  {
    code: "5.1", unit: U, title: "Radian Measure",
    intro: r`A radian measures an angle by arc length; a full turn is $2\pi$ radians $=360^\circ$. Convert with $\tfrac{\pi}{180}$ or $\tfrac{180}{\pi}$, and use $s=r\theta$ for arc length.`,
    ideas: [r`Degrees$\to$radians: $\times\tfrac{\pi}{180}$. Radians$\to$degrees: $\times\tfrac{180}{\pi}$.`, r`$30^\circ=\tfrac{\pi}{6},\ 45^\circ=\tfrac{\pi}{4},\ 60^\circ=\tfrac{\pi}{3},\ 90^\circ=\tfrac{\pi}{2}$.`, r`Arc length $s=r\theta$ ($\theta$ in radians).`],
    examples: [
      { t: "Degrees to radians", body: r`Convert $180^\circ$ to radians.\soln $180\cdot\tfrac{\pi}{180}=\pi$. Radians are the natural axis for trig graphs:` + sinRef },
      { t: "Degrees to radians", body: r`Convert $90^\circ$ to radians.\soln $90\cdot\tfrac{\pi}{180}=\tfrac{\pi}{2}$.` },
      { t: "Radians to degrees", body: r`Convert $\tfrac{5\pi}{4}$ to degrees.\soln $\tfrac{5\pi}{4}\cdot\tfrac{180}{\pi}=225^\circ$.` },
      { t: "Degrees to radians", body: r`Convert $45^\circ$ to radians.\soln $45\cdot\tfrac{\pi}{180}=\tfrac{\pi}{4}$.` },
      { t: "Arc length", body: r`Arc length for $r=8,\ \theta=\tfrac{\pi}{4}$.\soln $s=r\theta=8\cdot\tfrac{\pi}{4}=2\pi$.` },
      { t: "Degrees to radians", body: r`Convert $15^\circ$ to radians.\soln $15\cdot\tfrac{\pi}{180}=\tfrac{\pi}{12}$.` },
      { t: "Radians to degrees", body: r`Convert $\tfrac{\pi}{5}$ to degrees.\soln $\tfrac{\pi}{5}\cdot\tfrac{180}{\pi}=36^\circ$.` },
      { t: "Degrees to radians", body: r`Convert $300^\circ$ to radians.\soln $300\cdot\tfrac{\pi}{180}=\tfrac{5\pi}{3}$.` },
      { t: "Arc length", body: r`Arc length for $r=12,\ \theta=\tfrac{\pi}{6}$.\soln $s=12\cdot\tfrac{\pi}{6}=2\pi$.` },
    ],
    questions: [
      { ask: r`Convert $20^\circ$ to radians.` },
      { ask: r`Convert $\tfrac{11\pi}{12}$ to degrees.` },
      { ask: r`Convert $80^\circ$ to radians.` },
      { ask: r`Convert $\tfrac{7\pi}{9}$ to degrees.` },
      { ask: r`Arc length for $r=9,\ \theta=\tfrac{2\pi}{3}$?` },
      { ask: r`Convert $40^\circ$ to radians.` },
      { ask: r`Convert $\tfrac{5\pi}{9}$ to degrees.` },
      { ask: r`Convert $450^\circ$ to radians.` },
      { ask: r`Arc length for $r=20,\ \theta=\tfrac{\pi}{4}$?` },
      { ask: r`Convert $12^\circ$ to radians.` },
      { ask: r`Convert $\tfrac{3\pi}{5}$ to degrees.` },
      { ask: r`Convert $105^\circ$ to radians.` },
      { ask: r`A wheel of radius 0.5 m turns through $4\pi$ radians. How far does a point on the rim travel?`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$\tfrac{\pi}{9}$`, r`$165^\circ$`, r`$\tfrac{4\pi}{9}$`, r`$140^\circ$`, r`$6\pi$`, r`$\tfrac{2\pi}{9}$`, r`$100^\circ$`, r`$\tfrac{5\pi}{2}$`, r`$5\pi$`, r`$\tfrac{\pi}{15}$`, r`$108^\circ$`, r`$\tfrac{7\pi}{12}$`, r`$s=0.5\cdot4\pi=2\pi\approx6.28$ m`],
  },
  {
    code: "5.2", unit: U, title: "Trigonometric Ratios & the Unit Circle",
    intro: r`On the unit circle the point at angle $\theta$ is $(\cos\theta,\sin\theta)$; this gives every special-angle value and the sign in each quadrant.`,
    ideas: [r`$(\cos\theta,\sin\theta)$; $\tan\theta=\tfrac{\sin\theta}{\cos\theta}$.`, r`$\sin\tfrac{\pi}{6}=\tfrac12,\ \cos\tfrac{\pi}{6}=\tfrac{\sqrt3}{2},\ \sin\tfrac{\pi}{4}=\cos\tfrac{\pi}{4}=\tfrac{\sqrt2}{2}$.`, r`CAST: which ratios are positive by quadrant.`],
    examples: [
      { t: "Sine", body: r`Find $\sin\tfrac{\pi}{4}$.\soln $\tfrac{\pi}{4}=45^\circ\Rightarrow\tfrac{\sqrt2}{2}$. Sine and cosine are the same wave shifted by $\tfrac{\pi}{2}$:` + sincos },
      { t: "Second quadrant", body: r`Find $\cos\tfrac{3\pi}{4}$.\soln Related angle $\tfrac{\pi}{4}$, and $\cos<0$ in QII: $-\tfrac{\sqrt2}{2}$.` },
      { t: "Quadrantal", body: r`Find $\sin\tfrac{3\pi}{2}$.\soln Point $(0,-1)\Rightarrow-1$.` },
      { t: "Cosine of 2π", body: r`Find $\cos 2\pi$.\soln Point $(1,0)\Rightarrow1$.` },
      { t: "Tangent", body: r`Find $\tan\tfrac{\pi}{3}$.\soln $\tfrac{\sqrt3/2}{1/2}=\sqrt3$.` },
      { t: "Sine", body: r`Find $\sin\tfrac{2\pi}{3}$.\soln Related angle $\tfrac{\pi}{3}$, $\sin>0$ in QII: $\tfrac{\sqrt3}{2}$.` },
      { t: "Cosine", body: r`Find $\cos\tfrac{5\pi}{3}$.\soln Related angle $\tfrac{\pi}{3}$, $\cos>0$ in QIV: $\tfrac12$.` },
      { t: "Sine", body: r`Find $\sin\tfrac{7\pi}{6}$.\soln Related angle $\tfrac{\pi}{6}$, $\sin<0$ in QIII: $-\tfrac12$.` },
      { t: "Tangent", body: r`Find $\tan\tfrac{3\pi}{4}$.\soln $\tfrac{\sin}{\cos}=\tfrac{\sqrt2/2}{-\sqrt2/2}=-1$.` },
    ],
    questions: [
      { ask: r`Find $\cos\tfrac{\pi}{4}$.` },
      { ask: r`Find $\sin\tfrac{5\pi}{3}$.` },
      { ask: r`Find $\cos\tfrac{3\pi}{2}$.` },
      { ask: r`Find $\sin 0$.` },
      { ask: r`In which quadrant is $\sin\theta<0,\ \cos\theta>0$?` },
      { ask: r`Find $\tan\tfrac{\pi}{6}$.` },
      { ask: r`Find $\cos\tfrac{7\pi}{6}$.` },
      { ask: r`Find $\sin\tfrac{5\pi}{4}$.` },
      { ask: r`Find $\tan\tfrac{5\pi}{6}$.` },
      { ask: r`Find $\cos 0$.` },
      { ask: r`Find $\tan\pi$.` },
      { ask: r`In which quadrant are both $\sin\theta<0$ and $\cos\theta<0$?` },
      { ask: r`Using the unit circle, find $\sin\tfrac{11\pi}{6}$ and $\cos\tfrac{11\pi}{6}$.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$\tfrac{\sqrt2}{2}$`, r`$-\tfrac{\sqrt3}{2}$`, r`$0$`, r`$0$`, r`IV`, r`$\tfrac{1}{\sqrt3}$`, r`$-\tfrac{\sqrt3}{2}$`, r`$-\tfrac{\sqrt2}{2}$`, r`$-\tfrac{1}{\sqrt3}$`, r`$1$`, r`$0$`, r`III`, r`$\sin=-\tfrac12,\ \cos=\tfrac{\sqrt3}{2}$`],
  },
  {
    code: "5.3", unit: U, title: "Graphs of Sinusoidal Functions",
    intro: r`$y=a\sin(k(x-d))+c$: amplitude $|a|$, period $\tfrac{2\pi}{k}$, phase shift $d$, midline $y=c$.`,
    ideas: [r`Amplitude $=|a|$; midline $y=c$.`, r`Period $=\tfrac{2\pi}{k}$; phase shift $=d$.`, r`Read these four to sketch, or read the graph to write the equation.`],
    examples: [
      { t: "Amplitude", body: r`Amplitude of $y=2\sin x$?\soln $|a|=2$: the wave reaches $\pm2$:` + ampPlot },
      { t: "Period", body: r`Period of $y=\sin(3x)$?\soln $\tfrac{2\pi}{3}$ — three cycles in $2\pi$:` + trig(r`\addplot[exblue,very thick,domain=0:6.4]{sin(deg(3*x))};`) },
      { t: "Midline", body: r`Midline of $y=\cos x+4$?\soln $c=4$, so $y=4$.` },
      { t: "Longer period", body: r`Period of $y=\cos(\tfrac{x}{2})$?\soln $k=\tfrac12\Rightarrow\tfrac{2\pi}{1/2}=4\pi$.` },
      { t: "Both", body: r`Amplitude and period of $y=6\sin(2x)$?\soln $|a|=6$; period $\tfrac{2\pi}{2}=\pi$.` },
      { t: "Amplitude", body: r`Amplitude of $y=8\cos x$?\soln $8$.` },
      { t: "Period", body: r`Period of $y=\cos(6x)$?\soln $\tfrac{2\pi}{6}=\tfrac{\pi}{3}$.` },
      { t: "Midline", body: r`Midline of $y=\sin x-6$?\soln $y=-6$.` },
      { t: "Both", body: r`Amplitude and period of $y=3\cos(4x)$?\soln Amplitude $3$, period $\tfrac{\pi}{2}$.` },
    ],
    questions: [
      { ask: r`Amplitude of $y=9\sin x$?` },
      { ask: r`Period of $y=\sin(8x)$?` },
      { ask: r`Midline of $y=\cos x-5$?` },
      { ask: r`Period of $y=\sin(\tfrac{x}{4})$?` },
      { ask: r`Amplitude and period of $y=5\cos(3x)$?` },
      { ask: r`Amplitude of $y=\tfrac12\sin x$?` },
      { ask: r`Period of $y=\cos(3x)$?` },
      { ask: r`Midline of $y=\sin x+5$?` },
      { ask: r`Amplitude and period of $y=3\sin(\tfrac{x}{2})$?` },
      { ask: r`Period of $y=\sin x$?` },
      { ask: r`Amplitude of $y=7\cos x$?` },
      { ask: r`Midline of $y=2\sin x-1$?` },
      { ask: r`State the amplitude, period and midline of $y=4\sin(3x)-2$.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$9$`, r`$\tfrac{\pi}{4}$`, r`$y=-5$`, r`$8\pi$`, r`amp $5$, period $\tfrac{2\pi}{3}$`, r`$\tfrac12$`, r`$\tfrac{2\pi}{3}$`, r`$y=5$`, r`amp $3$, period $4\pi$`, r`$2\pi$`, r`$7$`, r`$y=-1$`, r`amp $4$, period $\tfrac{2\pi}{3}$, midline $y=-2$`],
  },
  {
    code: "5.4", unit: U, title: "Reciprocal Trigonometric Functions",
    intro: r`$\csc\theta=\tfrac1{\sin\theta}$, $\sec\theta=\tfrac1{\cos\theta}$, $\cot\theta=\tfrac{\cos\theta}{\sin\theta}$ — each undefined where its base function is zero.`,
    ideas: [r`$\csc=\tfrac1{\sin}$ (undefined where $\sin=0$); $\sec=\tfrac1{\cos}$.`, r`$\cot=\tfrac{\cos}{\sin}$ (undefined where $\sin=0$).`, r`Evaluate the base ratio first, then reciprocate.`],
    examples: [
      { t: "Cosecant", body: r`Find $\csc\tfrac{\pi}{4}$.\soln $\sin\tfrac{\pi}{4}=\tfrac{\sqrt2}{2}\Rightarrow\csc=\tfrac{2}{\sqrt2}=\sqrt2$. The reciprocal blows up wherever $\sin$ (below) hits 0:` + sinRef },
      { t: "Secant", body: r`Find $\sec\tfrac{\pi}{6}$.\soln $\cos\tfrac{\pi}{6}=\tfrac{\sqrt3}{2}\Rightarrow\sec=\tfrac{2}{\sqrt3}$.` },
      { t: "Cotangent", body: r`Find $\cot\tfrac{\pi}{3}$.\soln $\tan\tfrac{\pi}{3}=\sqrt3\Rightarrow\cot=\tfrac1{\sqrt3}$.` },
      { t: "Cosecant", body: r`Find $\csc\tfrac{\pi}{6}$.\soln $\sin\tfrac{\pi}{6}=\tfrac12\Rightarrow\csc=2$.` },
      { t: "Secant", body: r`Find $\sec\tfrac{3\pi}{4}$.\soln $\cos\tfrac{3\pi}{4}=-\tfrac{\sqrt2}{2}\Rightarrow\sec=-\sqrt2$.` },
      { t: "Cotangent", body: r`Find $\cot\tfrac{3\pi}{2}$.\soln $\tfrac{\cos(3\pi/2)}{\sin(3\pi/2)}=\tfrac{0}{-1}=0$.` },
      { t: "Secant", body: r`Find $\sec\tfrac{5\pi}{3}$.\soln $\cos\tfrac{5\pi}{3}=\tfrac12\Rightarrow\sec=2$.` },
      { t: "Cosecant", body: r`Find $\csc\tfrac{3\pi}{2}$.\soln $\sin\tfrac{3\pi}{2}=-1\Rightarrow\csc=-1$.` },
      { t: "Secant of 2π", body: r`Find $\sec 2\pi$.\soln $\cos 2\pi=1\Rightarrow\sec=1$.` },
    ],
    questions: [
      { ask: r`Find $\csc\tfrac{\pi}{3}$.` },
      { ask: r`Find $\sec\tfrac{\pi}{4}$.` },
      { ask: r`Where does $\csc\theta$ have asymptotes?` },
      { ask: r`Find $\cot\tfrac{\pi}{6}$.` },
      { ask: r`Find $\sec\tfrac{7\pi}{6}$.` },
      { ask: r`Find $\csc\tfrac{5\pi}{6}$.` },
      { ask: r`Find $\sec\tfrac{4\pi}{3}$.` },
      { ask: r`Find $\cot\tfrac{2\pi}{3}$.` },
      { ask: r`Find $\csc\tfrac{5\pi}{3}$.` },
      { ask: r`Where does $\sec\theta$ have asymptotes?` },
      { ask: r`Find $\sec\tfrac{11\pi}{6}$.` },
      { ask: r`Find $\cot\pi$ (state if undefined).` },
      { ask: r`Find $\cot\tfrac{5\pi}{6}$ exactly.`, challenge: true, ws: "2.6cm" },
    ],
    answers: [r`$\tfrac{2}{\sqrt3}$`, r`$\sqrt2$`, r`where $\sin\theta=0$`, r`$\sqrt3$`, r`$-\tfrac{2}{\sqrt3}$`, r`$2$`, r`$-2$`, r`$-\tfrac{1}{\sqrt3}$`, r`$-\tfrac{2}{\sqrt3}$`, r`where $\cos\theta=0$`, r`$\tfrac{2}{\sqrt3}$`, r`undefined ($\sin\pi=0$)`, r`$-\sqrt3$`],
  },
];
