const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "1.8",
  title: "Absolute Value & Inequalities",
  intro: "Absolute-value equations and inequalities, linear inequalities, and compound inequalities — with interval notation and the sign-flip rule.",
  lesson: [
    ["Linear inequalities", R`Solve like an equation, but <b>reverse the inequality</b> when multiplying or dividing by a negative. Solutions are intervals; a compound "and" is an intersection, "or" is a union.`],
    ["Absolute-value equations", R`$|X|=a$ (with $a\ge 0$) means $X=a$ or $X=-a$. If $a<0$ there is no solution.`],
    ["Absolute-value inequalities", R`$|X|<a\iff -a<X<a$ (a single interval). $|X|>a\iff X<-a$ or $X>a$ (two rays). Geometrically $|x-c|<r$ is "within $r$ of $c$."`],
  ],
  examples: [
    ["Example 1: AV equation", R`Solve $|x-3|=5$.`, R`$x-3=\pm5\Rightarrow x=8$ or $x=-2$.`],
    ["Example 2: Linear inequality", R`Solve $2x-1<7$.`, R`$2x<8\Rightarrow x<4$.`],
    ["Example 3: AV \"greater\"", R`Solve $|x|\ge 4$.`, R`$x\le -4$ or $x\ge 4$.`],
    ["Example 4: AV \"less\"", R`Solve $|2x-1|\le 7$.`, R`$-7\le 2x-1\le 7\Rightarrow -6\le 2x\le 8\Rightarrow -3\le x\le 4$, i.e. $[-3,4]$.`],
    ["Example 5: Compound", R`Solve $-3\le 2x+1<5$.`, R`$-4\le 2x<4\Rightarrow -2\le x<2$, i.e. $[-2,2)$.`],
  ],
  questions: [
    ["Problem 1", R`Solve $|x|=6$.`, R`$x=\pm 6$`],
    ["Problem 2", R`Solve $|x+2|=5$.`, R`$x=3$ or $x=-7$`],
    ["Problem 3", R`Solve $3x+1>10$.`, R`$x>3$`],
    ["Problem 4", R`Solve $-2x<8$.`, R`$x>-4$`],
    ["Problem 5", R`Solve $|x|<3$.`, R`$-3<x<3$`],
    ["Problem 6", R`Solve $|2x-1|>5$.`, R`$x>3$ or $x<-2$`],
    ["Problem 7", R`Solve $1\le x+2\le 6$.`, R`$-1\le x\le 4$`],
    ["Problem 8", R`Solve $|x-4|<2$ and interpret as a distance.`, R`$2<x<6$ (within $2$ of $4$)`],
  ],
};
