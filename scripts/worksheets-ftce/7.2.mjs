const R = String.raw;
export default {
  grade: "FTCE Mathematics 6–12",
  code: "7.2",
  title: "Matrix Arithmetic",
  intro: "Matrix dimensions and equality, addition/subtraction and scalar multiplication, and matrix multiplication with its dimension rule.",
  lesson: [
    ["Dimensions & equality", R`An $m\times n$ matrix has $m$ rows and $n$ columns. Two matrices are equal only if they have the same dimensions and identical corresponding entries.`],
    ["Addition & scalar multiplication", R`Add or subtract matrices of the <b>same</b> dimensions entrywise. Scalar multiplication multiplies every entry by the scalar.`],
    ["Matrix multiplication", R`$AB$ is defined when the columns of $A$ equal the rows of $B$: $(m\times n)(n\times p)=m\times p$. Each entry is the dot product of a row of $A$ with a column of $B$. Multiplication is <b>not</b> commutative.`],
  ],
  examples: [
    ["Example 1: Add", R`$\begin{bmatrix}1&2\\3&4\end{bmatrix}+\begin{bmatrix}5&6\\7&8\end{bmatrix}$.`, R`$\begin{bmatrix}6&8\\10&12\end{bmatrix}$.`],
    ["Example 2: Scalar", R`$3\begin{bmatrix}1&2\\3&4\end{bmatrix}$.`, R`$\begin{bmatrix}3&6\\9&12\end{bmatrix}$.`],
    ["Example 3: Product dimensions", R`What are the dimensions of a $(2\times3)(3\times2)$ product?`, R`$2\times2$.`],
    ["Example 4: Row × column", R`$\begin{bmatrix}1&2\end{bmatrix}\begin{bmatrix}3\\4\end{bmatrix}$.`, R`$1(3)+2(4)=11$.`],
    ["Example 5: Matrix × vector", R`$\begin{bmatrix}2&0\\1&3\end{bmatrix}\begin{bmatrix}1\\2\end{bmatrix}$.`, R`$\begin{bmatrix}2(1)+0(2)\\1(1)+3(2)\end{bmatrix}=\begin{bmatrix}2\\7\end{bmatrix}$.`],
  ],
  questions: [
    ["Problem 1", R`Dimensions of a matrix with $3$ rows and $2$ columns?`, R`$3\times2$`],
    ["Problem 2", R`$\begin{bmatrix}1&2\end{bmatrix}+\begin{bmatrix}3&4\end{bmatrix}$?`, R`$\begin{bmatrix}4&6\end{bmatrix}$`],
    ["Problem 3", R`$2\begin{bmatrix}1&3\end{bmatrix}$?`, R`$\begin{bmatrix}2&6\end{bmatrix}$`],
    ["Problem 4", R`Can you add a $2\times2$ and a $2\times3$ matrix?`, R`no`],
    ["Problem 5", R`Dimensions of a $(2\times3)(3\times4)$ product?`, R`$2\times4$`],
    ["Problem 6", R`$\begin{bmatrix}1&0\\0&1\end{bmatrix}$ is the ___ matrix.`, R`identity`],
    ["Problem 7", R`Is matrix multiplication commutative?`, R`no`],
    ["Problem 8", R`$\begin{bmatrix}1&2\\3&4\end{bmatrix}-\begin{bmatrix}1&1\\1&1\end{bmatrix}$?`, R`$\begin{bmatrix}0&1\\2&3\end{bmatrix}$`],
  ],
};
