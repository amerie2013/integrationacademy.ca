const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "4.5",
  title: "Graphs of Sine & Cosine",
  intro: "Amplitude, period, midline, and phase shift of sinusoidal graphs — and reading them from an equation or from max/min.",
  lesson: [
    ["Amplitude, period, midline", R`For $y=a\sin(bx)+d$: amplitude $|a|$, period $\dfrac{2\pi}{b}$, midline $y=d$, maximum $d+|a|$, minimum $d-|a|$.`],
    ["Shape & phase shift", R`$\sin$ starts at the midline rising; $\cos$ starts at the maximum. For $y=a\sin\big(b(x-c)\big)$ the graph shifts right by $c$ (the phase shift).`],
    ["From max & min", R`Amplitude $=\dfrac{\max-\min}{2}$ and midline $=\dfrac{\max+\min}{2}$.`],
  ],
  examples: [
    ["Example 1: Amplitude & period", R`Give the amplitude and period of $y=3\sin(2x)$.`, R`Amplitude $3$; period $\dfrac{2\pi}{2}=\pi$.`],
    ["Example 2: Max & min", R`Give the max and min of $y=2\sin x+3$.`, R`Max $3+2=5$; min $3-2=1$.`],
    ["Example 3: Period", R`Find the period of $y=\cos\dfrac{x}{2}$.`, R`$\dfrac{2\pi}{1/2}=4\pi$.`],
    ["Example 4: Amplitude", R`Find the amplitude of $y=-4\cos x$.`, R`$|-4|=4$.`],
    ["Example 5: Midline", R`Find the midline of $y=\sin x+2$.`, R`$y=2$.`],
  ],
  questions: [
    ["Problem 1", R`Amplitude of $y=5\sin x$?`, R`$5$`],
    ["Problem 2", R`Period of $y=\sin(3x)$?`, R`$\dfrac{2\pi}{3}$`],
    ["Problem 3", R`Maximum of $y=2\cos x$?`, R`$2$`],
    ["Problem 4", R`Midline of $y=\cos x-1$?`, R`$y=-1$`],
    ["Problem 5", R`Period of $y=\cos x$?`, R`$2\pi$`],
    ["Problem 6", R`Amplitude of $y=-2\sin x$?`, R`$2$`],
    ["Problem 7", R`Maximum of $y=3\sin x+1$?`, R`$4$`],
    ["Problem 8", R`Minimum of $y=4\sin x-2$?`, R`$-6$`],
  ],
};
