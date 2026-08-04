const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "4.6",
  title: "Inverse Trigonometric Functions",
  intro: "The inverse trig functions, their restricted ranges, evaluating them at common values, and compositions.",
  lesson: [
    ["Definitions & ranges", R`$\arcsin x$ has range $[-\tfrac{\pi}{2},\tfrac{\pi}{2}]$, $\arccos x$ has range $[0,\pi]$, and $\arctan x$ has range $(-\tfrac{\pi}{2},\tfrac{\pi}{2})$. Each returns the angle whose trig value is $x$.`],
    ["Evaluating", R`$\arcsin\tfrac12=\tfrac{\pi}{6}$ ($30^\circ$); $\arccos 0=\tfrac{\pi}{2}$ ($90^\circ$); $\arctan 1=\tfrac{\pi}{4}$ ($45^\circ$).`],
    ["Compositions", R`$\sin(\arcsin x)=x$ for $x\in[-1,1]$; $\arcsin(\sin\theta)$ returns the angle within the restricted range.`],
  ],
  examples: [
    ["Example 1", R`Evaluate $\arcsin\dfrac12$.`, R`$\dfrac{\pi}{6}$ ($30^\circ$).`],
    ["Example 2", R`Evaluate $\arccos 1$.`, R`$0$.`],
    ["Example 3", R`Evaluate $\arctan 1$.`, R`$\dfrac{\pi}{4}$ ($45^\circ$).`],
    ["Example 4", R`Evaluate $\arcsin\left(-\dfrac12\right)$.`, R`$-\dfrac{\pi}{6}$.`],
    ["Example 5: Composition", R`Evaluate $\cos(\arccos 0.4)$.`, R`$0.4$.`],
  ],
  questions: [
    ["Problem 1", R`Evaluate $\arcsin 0$.`, R`$0$`],
    ["Problem 2", R`Evaluate $\arccos 0$.`, R`$\dfrac{\pi}{2}$ ($90^\circ$)`],
    ["Problem 3", R`Evaluate $\arctan 0$.`, R`$0$`],
    ["Problem 4", R`Evaluate $\arcsin 1$.`, R`$\dfrac{\pi}{2}$ ($90^\circ$)`],
    ["Problem 5", R`Evaluate $\arccos(-1)$.`, R`$\pi$ ($180^\circ$)`],
    ["Problem 6", R`State the range of $\arcsin$.`, R`$[-\tfrac{\pi}{2},\tfrac{\pi}{2}]$`],
    ["Problem 7", R`Evaluate $\arctan\sqrt3$.`, R`$\dfrac{\pi}{3}$ ($60^\circ$)`],
    ["Problem 8", R`Evaluate $\sin(\arcsin 0.7)$.`, R`$0.7$`],
  ],
};
