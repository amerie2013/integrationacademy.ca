const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "8.6",
  title: "Applications of the Derivative",
  intro: "Critical points, the first and second derivative tests, intervals of increase/decrease, and concavity — for finding extrema and sketching curves.",
  lesson: [
    ["Critical points", R`Set $f'(x)=0$ (or where $f'$ is undefined) to find <b>critical points</b> — the candidates for local maxima and minima.`],
    ["Derivative tests", R`<b>First test</b>: $f'$ changing $+\to-$ gives a local max, $-\to+$ a local min. <b>Second test</b>: $f''(c)>0\Rightarrow$ min, $f''(c)<0\Rightarrow$ max.`],
    ["Increase/decrease & concavity", R`$f'>0$: increasing; $f'<0$: decreasing. $f''>0$: concave up; $f''<0$: concave down; $f''=0$ may mark an inflection point.`],
  ],
  examples: [
    ["Example 1: Critical point", R`Find the critical point of $f(x)=x^2-4x$.`, R`$f'(x)=2x-4=0\Rightarrow x=2$ (a minimum, since $f''=2>0$).`],
    ["Example 2: Minimum value", R`Find the minimum of $f(x)=x^2-4x+3$.`, R`At $x=2$, $f(2)=4-8+3=-1$.`],
    ["Example 3: Critical point", R`Find $c$ with $f'(c)=0$ for $f(x)=3x^2-12x+9$.`, R`$6x-12=0\Rightarrow x=2$.`],
    ["Example 4: Inflection", R`Analyze $f(x)=x^3$ at $x=0$.`, R`$f'(0)=0$ but $f'$ doesn't change sign — an inflection point, not an extremum.`],
    ["Example 5: Concavity", R`Describe the concavity of $f(x)=x^2$.`, R`$f''=2>0$: concave up everywhere.`],
  ],
  questions: [
    ["Problem 1", R`Critical point of $f(x)=x^2-6x$?`, R`$x=3$`],
    ["Problem 2", R`$f''>0$ means the graph is concave ___.`, R`up`],
    ["Problem 3", R`$f'>0$ means the function is ___.`, R`increasing`],
    ["Problem 4", R`$f(x)=x^2-4x$ has a minimum at $x=$ ?`, R`$2$`],
    ["Problem 5", R`At a local max, $f'$ changes from $+$ to ___.`, R`$-$`],
    ["Problem 6", R`$f''(c)<0$ indicates a local ___.`, R`max`],
    ["Problem 7", R`Critical points occur where $f'=$ ___.`, R`$0$ (or undefined)`],
    ["Problem 8", R`$f(x)=x^3$ has an inflection point at $x=$ ?`, R`$0$`],
  ],
};
