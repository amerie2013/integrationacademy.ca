// FTCE Unit 7 — Discrete Mathematics. ~24 curated questions per topic. Verified.
import { mc, tf, num, fill } from "./helpers.mjs";
const R = String.raw;

// ── 7.1 Sequences & Series ───────────────────────────────────
const g71 = () => [
  num("easy", R`Common difference of $5,9,13,\ldots$?`, 4, 0),
  num("easy", R`Common difference of $7,10,13,\ldots$?`, 3, 0),
  num("easy", R`Common ratio of $3,6,12,\ldots$?`, 2, 0),
  num("easy", R`Common ratio of $2,6,18,\ldots$?`, 3, 0),
  num("medium", R`$a_5$ of an arithmetic sequence with $a_1=3$, $d=4$?`, 19, 0),
  num("medium", R`$a_{10}$ of an arithmetic sequence with $a_1=1$, $d=2$?`, 19, 0),
  num("medium", R`$a_6$ of an arithmetic sequence with $a_1=4$, $d=3$?`, 19, 0),
  num("medium", R`$a_4$ of a geometric sequence with $a_1=2$, $r=3$?`, 54, 0),
  num("medium", R`$a_4$ of a geometric sequence with $a_1=1$, $r=3$?`, 27, 0),
  num("medium", R`$a_5$ of a geometric sequence with $a_1=3$, $r=2$?`, 48, 0),
  num("easy", R`Sum of $2,4,6,8,10$?`, 30, 0),
  num("hard", R`Sum of the first $10$ terms with $a_1=2$, $d=3$?`, 155, 0),
  num("hard", R`Sum of the first $4$ geometric terms with $a_1=3$, $r=2$?`, 45, 0),
  num("medium", R`Infinite geometric sum with $a_1=8$, $r=\tfrac12$?`, 16, 0),
  num("medium", R`Infinite geometric sum with $a_1=1$, $r=\tfrac12$?`, 2, 0),
  num("hard", R`Infinite geometric sum with $a_1=9$, $r=\tfrac13$? (decimal)`, 13.5, 0.01),
  mc("easy", R`The $n$th term of an arithmetic sequence is`, [R`$a_1+(n-1)d$`, R`$a_1 r^{n-1}$`, R`$a_1+nd$`, R`$\tfrac{n}{2}(a_1+a_n)$`], 0),
  mc("medium", R`The $n$th term of a geometric sequence is`, [R`$a_1 r^{\,n-1}$`, R`$a_1+(n-1)d$`, R`$a_1 r^n$`, R`$a_1 n$`], 0),
  tf("medium", R`An infinite geometric series converges when $|r|<1$.`, true),
  tf("easy", R`An infinite geometric series with $r=2$ converges.`, false),
  num("hard", R`The $20$th term of $3,7,11,\ldots$?`, 79, 0),
  num("medium", R`Sum of $1+2+4+8+16$?`, 31, 0),
  num("hard", R`The $100$th term of an arithmetic sequence with $a_1=1$, $d=1$?`, 100, 0),
  num("medium", R`Next term after $10,7,4,\ldots$?`, 1, 0),
];

// ── 7.2 Matrix Arithmetic ────────────────────────────────────
const g72 = () => [
  fill("easy", R`Dimensions of a matrix with $3$ rows and $2$ columns? (form $a\times b$)`, ["3x2", "3×2", "3 x 2"]),
  mc("easy", R`$\begin{bmatrix}1&2\end{bmatrix}+\begin{bmatrix}3&4\end{bmatrix}=$`, [R`$\begin{bmatrix}4&6\end{bmatrix}$`, R`$\begin{bmatrix}3&8\end{bmatrix}$`, R`$\begin{bmatrix}4&8\end{bmatrix}$`, R`$\begin{bmatrix}3&6\end{bmatrix}$`], 0),
  mc("easy", R`$2\begin{bmatrix}1&3\end{bmatrix}=$`, [R`$\begin{bmatrix}2&6\end{bmatrix}$`, R`$\begin{bmatrix}2&3\end{bmatrix}$`, R`$\begin{bmatrix}1&6\end{bmatrix}$`, R`$\begin{bmatrix}3&5\end{bmatrix}$`], 0),
  mc("easy", R`Can you add a $2\times2$ and a $2\times3$ matrix?`, [R`no`, R`yes`, R`only if square`, R`sometimes`], 0),
  mc("medium", R`Dimensions of a $(2\times3)(3\times4)$ product?`, [R`$2\times4$`, R`$3\times3$`, R`$2\times3$`, R`undefined`], 0),
  mc("medium", R`Dimensions of a $(2\times3)(3\times2)$ product?`, [R`$2\times2$`, R`$3\times3$`, R`$2\times3$`, R`undefined`], 0),
  mc("easy", R`$\begin{bmatrix}1&0\\0&1\end{bmatrix}$ is the`, [R`identity matrix`, R`zero matrix`, R`inverse matrix`, R`scalar matrix`], 0),
  tf("easy", R`Matrix multiplication is commutative.`, false),
  num("medium", R`$\begin{bmatrix}1&2\end{bmatrix}\begin{bmatrix}3\\4\end{bmatrix}=$ ?`, 11, 0),
  num("medium", R`Second entry of $\begin{bmatrix}2&0\\1&3\end{bmatrix}\begin{bmatrix}1\\2\end{bmatrix}$?`, 7, 0),
  num("easy", R`Top-left entry of $3\begin{bmatrix}1&2\\3&4\end{bmatrix}$?`, 3, 0),
  num("easy", R`Top-left entry of $\begin{bmatrix}1&2\\3&4\end{bmatrix}+\begin{bmatrix}5&6\\7&8\end{bmatrix}$?`, 6, 0),
  mc("medium", R`Dimensions of a $(3\times2)(2\times5)$ product?`, [R`$3\times5$`, R`$2\times2$`, R`$5\times3$`, R`undefined`], 0),
  mc("medium", R`A matrix product $AB$ is defined when`, [R`columns of $A=$ rows of $B$`, R`$A$ and $B$ are square`, R`rows of $A=$ rows of $B$`, R`always`], 0),
  mc("hard", R`Dimensions of a $(1\times3)(3\times1)$ product?`, [R`$1\times1$`, R`$3\times3$`, R`$1\times3$`, R`undefined`], 0),
  mc("easy", R`Dimensions of the row vector $\begin{bmatrix}1&2&3\end{bmatrix}$?`, [R`$1\times3$`, R`$3\times1$`, R`$3\times3$`, R`$1\times1$`], 0),
  mc("medium", R`$\begin{bmatrix}4&5\end{bmatrix}-\begin{bmatrix}1&2\end{bmatrix}=$`, [R`$\begin{bmatrix}3&3\end{bmatrix}$`, R`$\begin{bmatrix}5&7\end{bmatrix}$`, R`$\begin{bmatrix}3&2\end{bmatrix}$`, R`$\begin{bmatrix}4&3\end{bmatrix}$`], 0),
  num("easy", R`Number of entries in a $2\times3$ matrix?`, 6, 0),
  tf("easy", R`Adding a zero matrix to $A$ leaves $A$ unchanged.`, true),
  mc("medium", R`Can you multiply a $2\times3$ by a $2\times3$ matrix?`, [R`no`, R`yes`, R`only if entries match`, R`always`], 0),
  mc("easy", R`$5\begin{bmatrix}2&0\end{bmatrix}=$`, [R`$\begin{bmatrix}10&0\end{bmatrix}$`, R`$\begin{bmatrix}7&5\end{bmatrix}$`, R`$\begin{bmatrix}10&5\end{bmatrix}$`, R`$\begin{bmatrix}2&0\end{bmatrix}$`], 0),
  mc("hard", R`Dimensions of a $(4\times1)(1\times4)$ product?`, [R`$4\times4$`, R`$1\times1$`, R`$4\times1$`, R`undefined`], 0),
  tf("medium", R`Two matrices are equal only if they have the same dimensions.`, true),
  mc("medium", R`Top entry of $\begin{bmatrix}1&2\\0&1\end{bmatrix}\begin{bmatrix}3\\4\end{bmatrix}$?`, [R`$11$`, R`$3$`, R`$7$`, R`$4$`], 0),
];

// ── 7.3 Matrices & Systems of Equations ──────────────────────
const g73 = () => [
  num("easy", R`$\det\begin{bmatrix}1&2\\3&4\end{bmatrix}$?`, -2, 0),
  num("easy", R`$\det\begin{bmatrix}2&1\\3&4\end{bmatrix}$?`, 5, 0),
  num("easy", R`$\det\begin{bmatrix}3&0\\0&5\end{bmatrix}$?`, 15, 0),
  num("easy", R`$\det\begin{bmatrix}2&1\\4&2\end{bmatrix}$?`, 0, 0),
  num("medium", R`$\det\begin{bmatrix}5&2\\3&1\end{bmatrix}$?`, -1, 0),
  num("easy", R`$\det\begin{bmatrix}1&0\\0&1\end{bmatrix}$?`, 1, 0),
  num("medium", R`$\det\begin{bmatrix}4&3\\2&1\end{bmatrix}$?`, -2, 0),
  num("medium", R`$\det\begin{bmatrix}3&1\\2&4\end{bmatrix}$?`, 10, 0),
  num("medium", R`$\det\begin{bmatrix}0&1\\1&0\end{bmatrix}$?`, -1, 0),
  num("medium", R`$\det\begin{bmatrix}2&3\\1&4\end{bmatrix}$?`, 5, 0),
  num("hard", R`$\det\begin{bmatrix}-1&2\\3&1\end{bmatrix}$?`, -7, 0),
  num("medium", R`$\det\begin{bmatrix}7&2\\3&1\end{bmatrix}$?`, 1, 0),
  num("medium", R`$\det\begin{bmatrix}1&2\\2&4\end{bmatrix}$?`, 0, 0),
  num("medium", R`$\det\begin{bmatrix}2&0\\0&2\end{bmatrix}$?`, 4, 0),
  num("hard", R`$\det\begin{bmatrix}6&2\\3&1\end{bmatrix}$?`, 0, 0),
  mc("easy", R`$\det\begin{bmatrix}a&b\\c&d\end{bmatrix}=$`, [R`$ad-bc$`, R`$ab-cd$`, R`$ad+bc$`, R`$ac-bd$`], 0),
  mc("easy", R`A $2\times2$ system has a unique solution when the determinant is`, [R`nonzero`, R`zero`, R`positive only`, R`$1$`], 0),
  mc("medium", R`If $\det=0$, the system has`, [R`no unique solution`, R`exactly one solution`, R`always no solution`, R`a negative solution`], 0),
  mc("medium", R`Rows in an augmented matrix equal the number of`, [R`equations`, R`variables`, R`solutions`, R`constants`], 0),
  mc("medium", R`Cramer's rule solves a system using`, [R`determinants`, R`the slope`, R`factoring`, R`the midpoint`], 0),
  mc("hard", R`The augmented matrix of $\begin{cases}x+y=5\\x-y=1\end{cases}$ is`, [R`$\left[\begin{smallmatrix}1&1&5\\1&-1&1\end{smallmatrix}\right]$`, R`$\left[\begin{smallmatrix}1&1\\1&-1\end{smallmatrix}\right]$`, R`$\left[\begin{smallmatrix}5&1\\1&-1\end{smallmatrix}\right]$`, R`$\left[\begin{smallmatrix}1&5\\1&1\end{smallmatrix}\right]$`], 0),
  mc("easy", R`Which is an elementary row operation?`, [R`swap two rows`, R`transpose`, R`invert an entry`, R`delete a column`], 0),
  tf("medium", R`If a $2\times2$ system's determinant is nonzero, it has exactly one solution.`, true),
  num("hard", R`Solve $\begin{cases}x+2y=5\\3x-y=1\end{cases}$ by Cramer's rule; find $x$.`, 1, 0),
];

export default [
  { code: "7.1", gen: g71 }, { code: "7.2", gen: g72 }, { code: "7.3", gen: g73 },
];
