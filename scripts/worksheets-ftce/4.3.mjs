const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "4.3",
  title: "Trigonometric Identities",
  intro: "The reciprocal, quotient, and Pythagorean identities — and using them to simplify expressions and find all six functions from one.",
  lesson: [
    ["Reciprocal & quotient", R`$\csc=\dfrac1{\sin}$, $\sec=\dfrac1{\cos}$, $\cot=\dfrac1{\tan}$; and $\tan=\dfrac{\sin}{\cos}$, $\cot=\dfrac{\cos}{\sin}$.`],
    ["Pythagorean identities", R`$\sin^2\theta+\cos^2\theta=1$; $1+\tan^2\theta=\sec^2\theta$; $1+\cot^2\theta=\csc^2\theta$.`],
    ["Using identities", R`Rewrite everything in terms of $\sin$ and $\cos$ to simplify, or use $\sin^2+\cos^2=1$ with the quadrant to find a missing function.`],
  ],
  examples: [
    ["Example 1: Fundamental", R`Simplify $\sin^2\theta+\cos^2\theta$.`, R`$1$.`],
    ["Example 2: Find cosine", R`If $\sin\theta=\dfrac35$ and $\theta$ is in QI, find $\cos\theta$.`, R`$\cos\theta=\sqrt{1-\tfrac{9}{25}}=\dfrac45$.`],
    ["Example 3: Pythagorean", R`Simplify $1+\tan^2\theta$.`, R`$\sec^2\theta$.`],
    ["Example 4: Difference", R`Simplify $\sec^2\theta-\tan^2\theta$.`, R`$1$.`],
    ["Example 5: Quotient", R`Simplify $\sin\theta\cot\theta$.`, R`$\sin\theta\cdot\dfrac{\cos\theta}{\sin\theta}=\cos\theta$.`],
  ],
  questions: [
    ["Problem 1", R`Simplify $\sin^2\theta+\cos^2\theta$.`, R`$1$`],
    ["Problem 2", R`Simplify $1+\tan^2\theta$.`, R`$\sec^2\theta$`],
    ["Problem 3", R`Write $\tan\theta$ in terms of $\sin$ and $\cos$.`, R`$\dfrac{\sin\theta}{\cos\theta}$`],
    ["Problem 4", R`Simplify $\csc^2\theta-\cot^2\theta$.`, R`$1$`],
    ["Problem 5", R`Simplify $\cos\theta\sec\theta$.`, R`$1$`],
    ["Problem 6", R`If $\cos\theta=0.6$, find $\sin^2\theta$.`, R`$0.64$`],
    ["Problem 7", R`The reciprocal of $\cos\theta$ is ___.`, R`$\sec\theta$`],
    ["Problem 8", R`Simplify $\cos\theta\tan\theta$.`, R`$\sin\theta$`],
  ],
};
