// FTCE Mathematics 6-12 assignments — one per lesson, 10 questions in 3
// categories (Knowledge & Understanding / Application / Thinking). Certification
// depth. Keyed by lesson code; consumed by seed-ftce.mjs. Money uses \$ outside
// $...$ math; LaTeX uses \\ in these double-quoted strings.

const A3 = (code, topic, knowledge, application, thinking) => {
  let n = 0;
  const sec = (arr) => arr.map((q) => `${++n}. ${q}`);
  const description = [
    "Knowledge & Understanding", ...sec(knowledge),
    "Application", ...sec(application),
    "Thinking", ...sec(thinking),
  ].join("\n");
  return { title: `Assignment ${code} — ${topic}`, description };
};

export const ASSIGN = {
  // ── Unit 1: Algebra ──────────────────────────────────────────
  "1.1": A3("1.1", "Polynomial Operations",
    ["Add $(3x^2-2x+5)+(x^2+4x-1)$.", "Multiply $(2x-3)(x^2+x-4)$.", "State the degree and leading coefficient of $-4x^5+2x^3-7$.", "Divide $6x^3y^2$ by $2xy$."],
    ["Divide $2x^3-3x^2+4x-1$ by $x-2$ and state the remainder.", "Expand $(x+2)^3$.", "Simplify $(3x^2-1)^2-(3x^2+1)^2$."],
    ["Explain how polynomial long division parallels long division of integers.", "Explain why the product of two degree-$m$ and degree-$n$ polynomials has degree $m+n$.", "A student writes $(a+b)^2=a^2+b^2$. Diagnose the error and give the correct expansion."]),
  "1.2": A3("1.2", "Factoring",
    ["Factor $x^2-9$.", "Factor $x^3-27$.", "Factor $6x^2+7x-3$.", "Factor out the GCF of $12x^3y-18x^2y^2$."],
    ["Factor completely $2x^4-32$.", "Factor $x^3+2x^2-9x-18$ by grouping.", "Factor $8x^3+27$."],
    ["Explain why $x^2+9$ does not factor over the reals but $x^2-9$ does.", "Explain the difference-of-cubes pattern and verify it by expansion.", "Give a polynomial that looks factorable by grouping but is not, and explain."]),
  "1.3": A3("1.3", "Rational Expressions",
    ["Simplify $\\dfrac{x^2-4}{x^2-x-6}$.", "Multiply $\\dfrac{x}{x+1}\\cdot\\dfrac{x^2-1}{x^2}$.", "State the restrictions on $\\dfrac{3}{x^2-4}$.", "Add $\\dfrac{1}{x}+\\dfrac{1}{x+1}$."],
    ["Simplify the complex fraction $\\dfrac{\\frac{1}{x}-\\frac{1}{y}}{\\frac{1}{x}+\\frac{1}{y}}$.", "Subtract $\\dfrac{2}{x-3}-\\dfrac{1}{x+2}$.", "Divide $\\dfrac{x^2-9}{x+2}\\div\\dfrac{x-3}{x^2-4}$."],
    ["Explain why restrictions must be stated from the ORIGINAL expression, not the simplified one.", "Explain how a complex fraction is simplified by the LCD method versus invert-and-multiply.", "Explain why $\\dfrac{x-2}{2-x}=-1$ for $x\\ne 2$."]),
  "1.4": A3("1.4", "Linear & Radical Equations",
    ["Solve $3x-7=2x+5$.", "Solve $\\dfrac{x}{2}+\\dfrac{x}{3}=5$.", "Solve $\\sqrt{x+3}=4$.", "Solve $\\dfrac{2}{x}=\\dfrac{5}{x+3}$ (cross-multiply)."],
    ["Solve $\\sqrt{2x+1}=x-1$ and check for extraneous roots.", "Solve $\\dfrac{3}{x-1}+\\dfrac{2}{x+1}=\\dfrac{5}{x^2-1}$.", "Solve $\\sqrt{x}+\\sqrt{x+5}=5$."],
    ["Explain why squaring both sides can introduce extraneous solutions.", "Explain the first step for a fractional equation and why it is valid.", "Explain how to recognise an identity versus a conditional linear equation."]),
  "1.5": A3("1.5", "Lines: Slope & Forms",
    ["Find the slope through $(1,2)$ and $(5,10)$.", "Write $y-3=2(x-1)$ in slope-intercept form.", "State the slope of a line perpendicular to $y=\\tfrac{2}{3}x+1$.", "Find both intercepts of $3x-4y=12$."],
    ["Find the equation of the line through $(2,-1)$ perpendicular to $2x+y=7$.", "Find the equation of the line through $(1,4)$ and $(3,10)$ in standard form.", "Determine whether $2x+3y=6$ and $4x+6y=1$ are parallel, perpendicular, or neither."],
    ["Explain why vertical lines have undefined slope while horizontal lines have slope $0$.", "Explain the geometric meaning of the slope $m$ and intercept $b$.", "Explain why two nonvertical perpendicular lines have slopes whose product is $-1$."]),
  "1.6": A3("1.6", "Systems of Linear Equations",
    ["Solve $\\begin{cases}x+y=7\\\\x-y=1\\end{cases}$.", "Classify $\\begin{cases}2x+3y=6\\\\4x+6y=7\\end{cases}$.", "Solve by substitution $\\begin{cases}y=2x\\\\3x+y=10\\end{cases}$.", "What does a dependent system look like graphically?"],
    ["Solve the $3\\times 3$ system $\\begin{cases}x+y+z=6\\\\x-y+z=2\\\\2x+y-z=1\\end{cases}$.", "Solve $\\begin{cases}3x+2y=12\\\\x-y=1\\end{cases}$ by elimination.", "For what $k$ is $\\begin{cases}2x+3y=5\\\\4x+6y=k\\end{cases}$ consistent?"],
    ["Explain when a linear system has no solution, one solution, or infinitely many, in terms of the lines.", "Explain why a homogeneous system always has at least the trivial solution.", "Explain the elimination method as producing an equivalent system."]),
  "1.7": A3("1.7", "Quadratic Equations",
    ["Solve $x^2-5x+6=0$ by factoring.", "Solve $x^2=49$.", "State the discriminant of $2x^2-3x+5$.", "Solve $x^2+4x-1=0$ by the quadratic formula."],
    ["Solve $2x^2+3x-2=0$ by completing the square.", "Find $k$ so that $x^2+kx+9=0$ has a double root.", "Solve $3x^2-2x+1=0$ over the complex numbers."],
    ["Explain what the sign of the discriminant tells you about the roots.", "Derive the quadratic formula by completing the square on $ax^2+bx+c=0$.", "Explain the relationship between the roots and the coefficients (sum and product)."]),
  "1.8": A3("1.8", "Absolute Value & Inequalities",
    ["Solve $|x-3|=5$.", "Solve $2x-1<7$.", "Solve $|x|\\ge 4$.", "Solve $-3\\le 2x+1<5$."],
    ["Solve $|2x-1|\\le 7$ and write the solution in interval notation.", "Solve $|3x+2|>4$.", "Solve the compound inequality $x+1<3$ or $2x-1>7$."],
    ["Explain why $|x|<a$ becomes $-a<x<a$ but $|x|>a$ becomes $x<-a$ or $x>a$.", "Explain why $|x-c|<r$ describes the points within distance $r$ of $c$.", "Explain why multiplying an inequality by a negative reverses it."]),
  "1.9": A3("1.9", "Ratios, Proportions & Variation",
    ["Solve the proportion $\\dfrac{3}{4}=\\dfrac{x}{20}$.", "If $y$ varies directly as $x$ and $y=12$ when $x=3$, find $y$ when $x=7$.", "If $y$ varies inversely as $x$ and $y=6$ when $x=4$, find $y$ when $x=8$.", "Write '$z$ varies jointly as $x$ and $y$' as an equation."],
    ["$z$ varies jointly as $x$ and the square of $y$; $z=96$ when $x=3,y=2$. Find $z$ when $x=2,y=5$.", "A map scale is $1\\,\\text{cm}:15\\,\\text{km}$; how far apart are cities $8\\,\\text{cm}$ apart?", "The current $I$ varies inversely as resistance $R$; $I=4$ A at $R=6\\,\\Omega$. Find $I$ at $R=8\\,\\Omega$."],
    ["Explain the difference between direct, inverse, and joint variation with a real example of each.", "Explain why a proportion is equivalent to the equality of two cross products.", "Explain how to detect from a data table whether $y$ varies directly or inversely with $x$."]),
  "1.10": A3("1.10", "Algebraic Word Problems",
    ["Translate: 'five less than twice a number is $17$' and solve.", "Two numbers sum to $30$ and differ by $8$; find them.", "A rectangle's length is $3$ more than its width and its perimeter is $34$; find the dimensions.", "Set up an equation for '$\\$1000$ split so one part is twice the other.'"],
    ["A train leaves at $60$ km/h; two hours later a second at $80$ km/h on the same route. When does the second catch the first?", "How many litres of $20\\%$ acid must be added to $10$ L of $50\\%$ acid to make $30\\%$?", "Working together, A (in $4$ h) and B (in $6$ h) finish a job in how long?"],
    ["Explain a general strategy for translating a rate/time/distance problem into equations.", "Explain how a mixture problem is modeled by a 'total amount of substance' equation.", "Explain why defining the variable precisely is the critical first step in a word problem."]),
  // ── Unit 2: Functions ────────────────────────────────────────
  "2.1": A3("2.1", "Functions: Domain & Range",
    ["For $f(x)=x^2-3x$, find $f(-2)$.", "State the domain of $f(x)=\\dfrac{x}{x-4}$.", "State the domain of $\\sqrt{2x-6}$.", "State the range of $f(x)=x^2+1$."],
    ["State the domain of $f(x)=\\dfrac{\\sqrt{x+1}}{x-3}$.", "State the range of $f(x)=-2(x-1)^2+5$.", "For $f(x)=\\dfrac{1}{x^2-x-6}$, find all excluded values."],
    ["Explain how the vertical-line test distinguishes functions from non-functions.", "Explain why $\\sqrt{x}$ and $\\dfrac1x$ each restrict the domain, and how.", "Explain how a vertical shift and a reflection each change the range."]),
  "2.2": A3("2.2", "Function Arithmetic & Composition",
    ["For $f(x)=x^2$, $g(x)=x-1$, find $(f-g)(x)$.", "Find $(f\\circ g)(x)$ for $f(x)=2x$, $g(x)=x+3$.", "Find $(g\\circ f)(x)$ for the same functions.", "For $f(x)=x+2$, find $(f\\circ f)(x)$."],
    ["For $f(x)=\\sqrt{x}$, $g(x)=x-4$, find $(f\\circ g)(x)$ and its domain.", "For $f(x)=3x-1$, $g(x)=\\dfrac{x+1}{3}$, compute $(f\\circ g)(x)$ and interpret.", "If $f(x)=x^2+1$ and $(f\\circ g)(x)=x^2$, find a possible $g$."],
    ["Explain why composition is generally not commutative, with an example.", "Explain how the domain of $f\\circ g$ depends on both $f$ and $g$.", "Explain what it means that the composition in the second Application problem returns $x$."]),
  "2.3": A3("2.3", "Inverse Functions",
    ["Find the inverse of $f(x)=4x-8$.", "Find the inverse of $f(x)=x^3+1$.", "Across what line are $f$ and $f^{-1}$ reflections?", "Does $f(x)=x^2$ (all reals) have an inverse?"],
    ["Find the inverse of $f(x)=\\dfrac{2x+1}{x-3}$.", "Verify that $f(x)=5x-2$ and $g(x)=\\dfrac{x+2}{5}$ are inverses.", "Restrict the domain of $f(x)=x^2-4$ so that an inverse exists, and give it."],
    ["Explain why only one-to-one functions have inverses.", "Explain why $f^{-1}$ is not $\\dfrac{1}{f}$.", "Explain how domain and range interchange between $f$ and $f^{-1}$."]),
  "2.4": A3("2.4", "Exponential & Logarithmic Functions",
    ["Evaluate $\\log_2 32$.", "Write $5^3=125$ in logarithmic form.", "State the range of $y=3^x$.", "Evaluate $\\log_b b$ and $\\log_b 1$."],
    ["Expand $\\log\\!\\left(\\dfrac{x^3\\sqrt{y}}{z^2}\\right)$.", "Condense $3\\log x-\\tfrac12\\log y$.", "Solve $\\log_3(x-1)=4$."],
    ["Explain why $\\log_b x$ is undefined for $x\\le 0$.", "Explain how the log laws follow from the exponent laws.", "Explain why an exponential function has a horizontal asymptote but no $x$-intercept."]),
  "2.5": A3("2.5", "Properties of Functions",
    ["Is $f(x)=x^4$ even, odd, or neither?", "Is $f(x)=x^3-x$ even, odd, or neither?", "Find the zeros of $f(x)=x^2-2x-8$.", "State the period of $\\sin x$."],
    ["Classify $f(x)=x^3+x^2$ as even, odd, or neither, with justification.", "Find the zeros of $f(x)=x^3-4x$.", "State the period of $f(x)=\\cos(3x)$."],
    ["Explain the symmetry meaning of even and odd functions.", "Explain the connection between one-to-one functions and inverses.", "Explain why $f(x)=x^2$ is not one-to-one but $f(x)=x^3$ is."]),
  "2.6": A3("2.6", "Graphing, Symmetry & Asymptotes",
    ["Vertical asymptote of $\\dfrac{1}{x-5}$?", "Horizontal asymptote of $\\dfrac{4x}{x+2}$?", "Horizontal asymptote of $\\dfrac{7}{x^2+3}$?", "$y$-intercept of $f(x)=\\dfrac{x-2}{x+4}$?"],
    ["Find all asymptotes of $f(x)=\\dfrac{x+1}{x^2-9}$.", "Find the intercepts of $f(x)=\\dfrac{x-3}{x+1}$.", "Test $y=x^3-x$ for symmetry."],
    ["Explain how comparing degrees determines the horizontal asymptote of a rational function.", "Explain why a vertical asymptote requires the numerator to be nonzero at that point.", "Explain how symmetry reduces the work of sketching a graph."]),
};

export default ASSIGN;
