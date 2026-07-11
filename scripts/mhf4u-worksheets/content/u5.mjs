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
      { t: "Radians to degrees", body: r`Convert $\tfrac{\pi}{3}$ to degrees.\soln $\tfrac{\pi}{3}\cdot\tfrac{180}{\pi}=60^\circ$.` },
      { t: "Degrees to radians", body: r`Convert $45^\circ$ to radians.\soln $45\cdot\tfrac{\pi}{180}=\tfrac{\pi}{4}$.` },
      { t: "Arc length", body: r`Arc length for $r=6,\ \theta=\tfrac{\pi}{2}$.\soln $s=r\theta=6\cdot\tfrac{\pi}{2}=3\pi$.` },
      { t: "Degrees to radians", body: r`Convert $60^\circ$ to radians.\soln $\tfrac{\pi}{3}$.` },
      { t: "Radians to degrees", body: r`Convert $\tfrac{\pi}{6}$ to degrees.\soln $30^\circ$.` },
      { t: "Degrees to radians", body: r`Convert $270^\circ$ to radians.\soln $270\cdot\tfrac{\pi}{180}=\tfrac{3\pi}{2}$.` },
      { t: "Arc length", body: r`Arc length for $r=4,\ \theta=\tfrac{\pi}{3}$.\soln $s=4\cdot\tfrac{\pi}{3}=\tfrac{4\pi}{3}$.` },
    ],
    questions: [
      { ask: r`Convert $60^\circ$ to radians.` },
      { ask: r`Convert $\tfrac{\pi}{6}$ to degrees.` },
      { ask: r`Convert $270^\circ$ to radians.` },
      { ask: r`Convert $2\pi$ to degrees.` },
      { ask: r`Arc length for $r=4,\ \theta=\tfrac{\pi}{3}$?` },
      { ask: r`Convert $120^\circ$ to radians.` },
      { ask: r`Convert $\tfrac{3\pi}{4}$ to degrees.` },
      { ask: r`Convert $360^\circ$ to radians.` },
      { ask: r`Arc length for $r=10,\ \theta=\tfrac{\pi}{5}$?` },
      { ask: r`Convert $30^\circ$ to radians.` },
      { ask: r`Convert $\pi$ to degrees.` },
      { ask: r`Convert $225^\circ$ to radians.` },
      { ask: r`A wheel of radius 0.5 m turns through $4\pi$ radians. How far does a point on the rim travel?`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$\tfrac{\pi}{3}$`, r`$30^\circ$`, r`$\tfrac{3\pi}{2}$`, r`$360^\circ$`, r`$\tfrac{4\pi}{3}$`, r`$\tfrac{2\pi}{3}$`, r`$135^\circ$`, r`$2\pi$`, r`$2\pi$`, r`$\tfrac{\pi}{6}$`, r`$180^\circ$`, r`$\tfrac{5\pi}{4}$`, r`$s=0.5\cdot4\pi=2\pi\approx6.28$ m`],
  },
  {
    code: "5.2", unit: U, title: "Trigonometric Ratios & the Unit Circle",
    intro: r`On the unit circle the point at angle $\theta$ is $(\cos\theta,\sin\theta)$; this gives every special-angle value and the sign in each quadrant.`,
    ideas: [r`$(\cos\theta,\sin\theta)$; $\tan\theta=\tfrac{\sin\theta}{\cos\theta}$.`, r`$\sin\tfrac{\pi}{6}=\tfrac12,\ \cos\tfrac{\pi}{6}=\tfrac{\sqrt3}{2},\ \sin\tfrac{\pi}{4}=\cos\tfrac{\pi}{4}=\tfrac{\sqrt2}{2}$.`, r`CAST: which ratios are positive by quadrant.`],
    examples: [
      { t: "Sine", body: r`Find $\sin\tfrac{\pi}{6}$.\soln $\tfrac{\pi}{6}=30^\circ\Rightarrow\tfrac12$. Sine and cosine are the same wave shifted by $\tfrac{\pi}{2}$:` + sincos },
      { t: "Cosine", body: r`Find $\cos\tfrac{\pi}{3}$.\soln $\tfrac{\pi}{3}=60^\circ\Rightarrow\tfrac12$.` },
      { t: "Quadrantal", body: r`Find $\sin\tfrac{\pi}{2}$.\soln Point $(0,1)\Rightarrow1$.` },
      { t: "Cosine of π", body: r`Find $\cos\pi$.\soln Point $(-1,0)\Rightarrow-1$.` },
      { t: "Tangent", body: r`Find $\tan\tfrac{\pi}{4}$.\soln $\tfrac{\sqrt2/2}{\sqrt2/2}=1$.` },
      { t: "Cosine", body: r`Find $\cos\tfrac{\pi}{6}$.\soln $\tfrac{\sqrt3}{2}$.` },
      { t: "Sine", body: r`Find $\sin\tfrac{\pi}{3}$.\soln $\tfrac{\sqrt3}{2}$.` },
      { t: "Quadrantal", body: r`Find $\cos\tfrac{\pi}{2}$.\soln $0$.` },
      { t: "Sine of π", body: r`Find $\sin\pi$.\soln $0$.` },
    ],
    questions: [
      { ask: r`Find $\cos\tfrac{\pi}{6}$.` },
      { ask: r`Find $\sin\tfrac{\pi}{3}$.` },
      { ask: r`Find $\cos\tfrac{\pi}{2}$.` },
      { ask: r`Find $\sin\pi$.` },
      { ask: r`In which quadrant is $\sin\theta>0,\ \cos\theta<0$?` },
      { ask: r`Find $\sin\tfrac{\pi}{6}$.` },
      { ask: r`Find $\tan\tfrac{\pi}{4}$.` },
      { ask: r`Find $\cos\pi$.` },
      { ask: r`Find $\sin\tfrac{\pi}{2}$.` },
      { ask: r`Find $\cos 0$.` },
      { ask: r`Find $\tan\pi$.` },
      { ask: r`In which quadrant are both $\sin\theta<0$ and $\cos\theta<0$?` },
      { ask: r`Using the unit circle, find $\sin\tfrac{2\pi}{3}$ and $\cos\tfrac{2\pi}{3}$.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$\tfrac{\sqrt3}{2}$`, r`$\tfrac{\sqrt3}{2}$`, r`$0$`, r`$0$`, r`II`, r`$\tfrac12$`, r`$1$`, r`$-1$`, r`$1$`, r`$1$`, r`$0$`, r`III`, r`$\sin=\tfrac{\sqrt3}{2},\ \cos=-\tfrac12$`],
  },
  {
    code: "5.3", unit: U, title: "Graphs of Sinusoidal Functions",
    intro: r`$y=a\sin(k(x-d))+c$: amplitude $|a|$, period $\tfrac{2\pi}{k}$, phase shift $d$, midline $y=c$.`,
    ideas: [r`Amplitude $=|a|$; midline $y=c$.`, r`Period $=\tfrac{2\pi}{k}$; phase shift $=d$.`, r`Read these four to sketch, or read the graph to write the equation.`],
    examples: [
      { t: "Amplitude", body: r`Amplitude of $y=3\sin x$?\soln $|a|=3$. Compare $y=2\sin x$ (taller wave):` + ampPlot },
      { t: "Period", body: r`Period of $y=\sin(2x)$?\soln $\tfrac{2\pi}{2}=\pi$ — two cycles in $2\pi$:` + periodPlot },
      { t: "Midline", body: r`Midline of $y=\sin x+2$?\soln $c=2$, so $y=2$.` },
      { t: "Longer period", body: r`Period of $y=\cos(\tfrac{x}{2})$?\soln $k=\tfrac12\Rightarrow\tfrac{2\pi}{1/2}=4\pi$.` },
      { t: "Both", body: r`Amplitude and period of $y=2\sin(3x)$?\soln $|a|=2$; period $\tfrac{2\pi}{3}$.` },
      { t: "Amplitude", body: r`Amplitude of $y=5\sin x$?\soln $5$.` },
      { t: "Period", body: r`Period of $y=\sin(4x)$?\soln $\tfrac{2\pi}{4}=\tfrac{\pi}{2}$.` },
      { t: "Midline", body: r`Midline of $y=\cos x-3$?\soln $y=-3$.` },
      { t: "Both", body: r`Amplitude and period of $y=4\cos(2x)$?\soln Amplitude $4$, period $\pi$.` },
    ],
    questions: [
      { ask: r`Amplitude of $y=5\sin x$?` },
      { ask: r`Period of $y=\sin(4x)$?` },
      { ask: r`Midline of $y=\cos x-3$?` },
      { ask: r`Period of $y=\sin(\tfrac{x}{3})$?` },
      { ask: r`Amplitude and period of $y=4\cos(2x)$?` },
      { ask: r`Amplitude of $y=\tfrac12\sin x$?` },
      { ask: r`Period of $y=\cos(3x)$?` },
      { ask: r`Midline of $y=\sin x+5$?` },
      { ask: r`Amplitude and period of $y=3\sin(\tfrac{x}{2})$?` },
      { ask: r`Period of $y=\sin x$?` },
      { ask: r`Amplitude of $y=7\cos x$?` },
      { ask: r`Midline of $y=2\sin x-1$?` },
      { ask: r`State the amplitude, period and midline of $y=3\sin(2x)+1$.`, challenge: true, ws: "3cm" },
    ],
    answers: [r`$5$`, r`$\tfrac{\pi}{2}$`, r`$y=-3$`, r`$6\pi$`, r`amp $4$, period $\pi$`, r`$\tfrac12$`, r`$\tfrac{2\pi}{3}$`, r`$y=5$`, r`amp $3$, period $4\pi$`, r`$2\pi$`, r`$7$`, r`$y=-1$`, r`amp $3$, period $\pi$, midline $y=1$`],
  },
  {
    code: "5.4", unit: U, title: "Reciprocal Trigonometric Functions",
    intro: r`$\csc\theta=\tfrac1{\sin\theta}$, $\sec\theta=\tfrac1{\cos\theta}$, $\cot\theta=\tfrac{\cos\theta}{\sin\theta}$ — each undefined where its base function is zero.`,
    ideas: [r`$\csc=\tfrac1{\sin}$ (undefined where $\sin=0$); $\sec=\tfrac1{\cos}$.`, r`$\cot=\tfrac{\cos}{\sin}$ (undefined where $\sin=0$).`, r`Evaluate the base ratio first, then reciprocate.`],
    examples: [
      { t: "Cosecant", body: r`Find $\csc\tfrac{\pi}{2}$.\soln $\sin\tfrac{\pi}{2}=1\Rightarrow\csc=1$. The reciprocal blows up wherever $\sin$ (below) hits 0:` + sinRef },
      { t: "Secant", body: r`Find $\sec 0$.\soln $\cos 0=1\Rightarrow\sec=1$.` },
      { t: "Cotangent", body: r`Find $\cot\tfrac{\pi}{4}$.\soln $\tan\tfrac{\pi}{4}=1\Rightarrow\cot=1$.` },
      { t: "Cosecant", body: r`Find $\csc\tfrac{\pi}{6}$.\soln $\sin\tfrac{\pi}{6}=\tfrac12\Rightarrow\csc=2$.` },
      { t: "Secant", body: r`Find $\sec\tfrac{\pi}{3}$.\soln $\cos\tfrac{\pi}{3}=\tfrac12\Rightarrow\sec=2$.` },
      { t: "Cotangent", body: r`Find $\cot\tfrac{\pi}{2}$.\soln $\tfrac{\cos(\pi/2)}{\sin(\pi/2)}=\tfrac01=0$.` },
      { t: "Secant of π", body: r`Find $\sec\pi$.\soln $\tfrac1{\cos\pi}=\tfrac1{-1}=-1$.` },
      { t: "Cosecant", body: r`Find $\csc\tfrac{3\pi}{2}$.\soln $\sin\tfrac{3\pi}{2}=-1\Rightarrow\csc=-1$.` },
      { t: "Secant of 2π", body: r`Find $\sec 2\pi$.\soln $\cos 2\pi=1\Rightarrow\sec=1$.` },
    ],
    questions: [
      { ask: r`Find $\csc\tfrac{\pi}{2}$.` },
      { ask: r`Find $\sec\tfrac{\pi}{3}$.` },
      { ask: r`Where does $\csc\theta$ have asymptotes?` },
      { ask: r`Find $\cot\tfrac{\pi}{2}$.` },
      { ask: r`Find $\sec\pi$.` },
      { ask: r`Find $\csc\tfrac{\pi}{6}$.` },
      { ask: r`Find $\sec 0$.` },
      { ask: r`Find $\cot\tfrac{\pi}{4}$.` },
      { ask: r`Find $\csc\tfrac{3\pi}{2}$.` },
      { ask: r`Where does $\sec\theta$ have asymptotes?` },
      { ask: r`Find $\sec\tfrac{\pi}{6}$.` },
      { ask: r`Find $\csc\pi$ (state if undefined).` },
      { ask: r`Find $\cot\tfrac{\pi}{3}$ exactly.`, challenge: true, ws: "2.6cm" },
    ],
    answers: [r`$1$`, r`$2$`, r`where $\sin\theta=0$`, r`$0$`, r`$-1$`, r`$2$`, r`$1$`, r`$1$`, r`$-1$`, r`where $\cos\theta=0$`, r`$\tfrac{2}{\sqrt3}$`, r`undefined ($\sin\pi=0$)`, r`$\tfrac{1}{\sqrt3}$`],
  },
];
