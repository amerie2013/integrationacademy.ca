const R = String.raw;
export default {
  grade: "Algebra 1 (FL B.E.S.T.)",
  code: "5.7",
  title: "Function Transformations: f(x)+k, kf(x), f(x−h)",
  intro: "Adding, multiplying, and shifting the input transform a graph in predictable ways. This worksheet practises reading transformations of y = x².",
  lesson: [
    ["Vertical shift", R`$f(x) + k$ shifts the graph up by $k$ (down if $k < 0$).`],
    ["Vertical stretch / reflection", R`$k\,f(x)$ stretches vertically by factor $k$; if $k < 0$ it also reflects over the $x$-axis.`],
    ["Horizontal shift", R`$f(x - h)$ shifts right by $h$ (left if $h < 0$).`],
  ],
  examples: [
    ["Example 1: Vertical shift", R`How is $y = x^2 + 3$ related to $y = x^2$?`, R`Shifted up $3$.`],
    ["Example 2: Horizontal shift", R`How is $y = (x - 2)^2$ related to $y = x^2$?`, R`Shifted right $2$.`],
    ["Example 3: Vertical stretch", R`Compare $y = 2x^2$ to $y = x^2$.`, R`Vertical stretch by $2$ (narrower).`],
    ["Example 4: Reflection", R`Describe $y = -x^2$.`, R`Reflected over the $x$-axis (opens down).`],
    ["Example 5: Combined", R`Describe $y = (x + 1)^2 - 4$.`, R`Left $1$, down $4$.`],
    ["Example 6: Vertex from form", R`Find the vertex of $y = (x - 3)^2 + 5$.`, R`$(3, 5)$.`],
  ],
  questions: [
    ["Problem 1", R`How is $y = x^2 - 5$ related to $y = x^2$?`, R`Down $5$`],
    ["Problem 2", R`How is $y = (x - 4)^2$ related to $y = x^2$?`, R`Right $4$`],
    ["Problem 3", R`How is $y = (x + 3)^2$ related to $y = x^2$?`, R`Left $3$`],
    ["Problem 4", R`Compare $y = 3x^2$ to $y = x^2$.`, R`Vertical stretch by $3$`],
    ["Problem 5", R`Describe $y = -2x^2$.`, R`Reflect over $x$-axis, stretch by $2$`],
    ["Problem 6", R`Vertex of $y = (x - 1)^2 + 2$?`, R`$(1, 2)$`],
    ["Problem 7", R`How is $y = x^2 + 7$ related to $y = x^2$?`, R`Up $7$`],
    ["Problem 8", R`Vertex of $y = (x + 5)^2 - 3$?`, R`$(-5, -3)$`],
    ["Problem 9", R`Compare $y = \dfrac{1}{2}x^2$ to $y = x^2$.`, R`Vertical compression (wider)`],
    ["Problem 10", R`Which way does $y = (x - 2)^2 + 1$ shift horizontally?`, R`Right $2$`],
    ["Problem 11", R`Which transformation does $f(x) + k$ give?`, R`Vertical shift`],
    ["Problem 12", R`Vertex of $y = -(x - 4)^2 + 6$?`, R`$(4, 6)$`],
  ],
};
