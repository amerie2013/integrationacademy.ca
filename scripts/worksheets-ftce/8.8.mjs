const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "8.8",
  title: "Applications of Integration",
  intro: "Area under a curve, area between two curves, and volumes of solids of revolution by the disk/washer method.",
  lesson: [
    ["Area under a curve", R`$\displaystyle\int_a^b f(x)\,dx$ is the net signed area; for total area, split at the zeros or integrate $|f|$.`],
    ["Area between curves", R`$\displaystyle\int_a^b\big[\text{top}-\text{bottom}\big]\,dx$ over $[a,b]$, where $a,b$ are the intersection points.`],
    ["Volumes of revolution", R`Disk/washer: $V=\pi\displaystyle\int\big(R^2-r^2\big)\,dx$. Shell: $V=2\pi\displaystyle\int(\text{radius})(\text{height})\,dx$.`],
  ],
  examples: [
    ["Example 1: Area under a curve", R`Find the area under $y=x^2$ from $0$ to $3$.`, R`$\left[\dfrac{x^3}{3}\right]_0^3=9$.`],
    ["Example 2: Area under a line", R`Find the area under $y=2x$ from $0$ to $4$.`, R`$\left[x^2\right]_0^4=16$.`],
    ["Example 3: Between curves", R`Find the area between $y=x$ and $y=x^2$ from $0$ to $1$.`, R`$\displaystyle\int_0^1(x-x^2)\,dx=\left[\dfrac{x^2}{2}-\dfrac{x^3}{3}\right]_0^1=\dfrac12-\dfrac13=\dfrac16$.`],
    ["Example 4: Disk method", R`Rotate the region under $y=2$ on $[0,3]$ about the $x$-axis; find the volume.`, R`$V=\pi\displaystyle\int_0^3 2^2\,dx=\pi(4)(3)=12\pi$.`],
    ["Example 5: The formula", R`State the disk-method volume formula.`, R`$V=\pi\displaystyle\int R^2\,dx$.`],
  ],
  questions: [
    ["Problem 1", R`Area under $y=x^2$ from $0$ to $2$?`, R`$\dfrac83$`],
    ["Problem 2", R`Area under $y=3x^2$ from $0$ to $1$?`, R`$1$`],
    ["Problem 3", R`Area between $y=x$ and $y=x^2$ on $[0,1]$?`, R`$\dfrac16$`],
    ["Problem 4", R`Disk-method volume formula?`, R`$V=\pi\displaystyle\int R^2\,dx$`],
    ["Problem 5", R`Area under $y=4$ from $0$ to $5$?`, R`$20$`],
    ["Problem 6", R`$\displaystyle\int_0^1 x^2\,dx$?`, R`$\dfrac13$`],
    ["Problem 7", R`Volume rotating $y=1$ on $[0,2]$ about the $x$-axis?`, R`$2\pi$`],
    ["Problem 8", R`Area between curves integrates (top $-$ ___).`, R`bottom`],
  ],
};
