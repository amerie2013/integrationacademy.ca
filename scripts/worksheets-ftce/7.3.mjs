const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "7.3",
  title: "Matrices & Systems of Equations",
  intro: "Representing a linear system as an augmented matrix, solving by row reduction, and the 2×2 determinant with Cramer's rule.",
  lesson: [
    ["Representing a system", R`A linear system can be written as an augmented matrix $[A\mid b]$, one row per equation, one column per variable (plus the constants).`],
    ["Row reduction", R`Elementary row operations — swap two rows, scale a row, add a multiple of one row to another — reduce the matrix to row-echelon form; then back-substitute.`],
    ["Determinant & Cramer's rule", R`For $\begin{bmatrix}a&b\\c&d\end{bmatrix}$, $\det=ad-bc$. A $2\times2$ system has a unique solution exactly when $\det\ne 0$; Cramer's rule expresses the solution as ratios of determinants.`],
  ],
  examples: [
    ["Example 1: Determinant", R`Evaluate $\det\begin{bmatrix}2&1\\3&4\end{bmatrix}$.`, R`$2(4)-1(3)=5$.`],
    ["Example 2: Singular", R`Evaluate $\det\begin{bmatrix}1&2\\2&4\end{bmatrix}$.`, R`$4-4=0$ — no unique solution.`],
    ["Example 3: Augmented matrix", R`Write $\begin{cases}x+y=5\\x-y=1\end{cases}$ as an augmented matrix.`, R`$\left[\begin{array}{cc|c}1&1&5\\1&-1&1\end{array}\right]$.`],
    ["Example 4: Cramer's rule", R`Solve that system by Cramer's rule.`, R`$x=\dfrac{\det\left[\begin{smallmatrix}5&1\\1&-1\end{smallmatrix}\right]}{\det\left[\begin{smallmatrix}1&1\\1&-1\end{smallmatrix}\right]}=\dfrac{-6}{-2}=3$, $y=\dfrac{-4}{-2}=2$. Solution $(3,2)$.`],
    ["Example 5: Solvability", R`When does a $2\times2$ system have a unique solution?`, R`When $\det\ne 0$.`],
  ],
  questions: [
    ["Problem 1", R`$\det\begin{bmatrix}1&2\\3&4\end{bmatrix}$?`, R`$-2$`],
    ["Problem 2", R`$\det\begin{bmatrix}3&0\\0&5\end{bmatrix}$?`, R`$15$`],
    ["Problem 3", R`$\det\begin{bmatrix}2&1\\4&2\end{bmatrix}$?`, R`$0$`],
    ["Problem 4", R`A unique solution requires the determinant to be ___.`, R`nonzero`],
    ["Problem 5", R`$\det\begin{bmatrix}5&2\\3&1\end{bmatrix}$?`, R`$-1$`],
    ["Problem 6", R`Rows in an augmented matrix equal the number of ___.`, R`equations`],
    ["Problem 7", R`$\det\begin{bmatrix}1&0\\0&1\end{bmatrix}$?`, R`$1$`],
    ["Problem 8", R`$\det\begin{bmatrix}a&b\\c&d\end{bmatrix}=$ ?`, R`$ad-bc$`],
  ],
};
