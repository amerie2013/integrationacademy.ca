// MPM2D 4.1 "Introducing Quadratic Relations" question bank: 60 questions, 20 easy / 20 medium / 20 hard.
// Tables inside prompts are KaTeX arrays. Questions that need a figure carry an `image` (SVG string) that the
// publish script uploads to the public graph-images bucket. Answers are computed from the functions below
// wherever possible so a table can never disagree with its answer; every table is also asserted via classify().
import assert from "node:assert";
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";
import { poly, classify, graphSvg } from "./lib41.mjs";

const arr = (xs, ys, xl = "x", yl = "y") =>
  `$\\begin{array}{c|${"c".repeat(xs.length)}} ${xl}&${xs.join("&")}\\\\\\hline ${yl}&${ys.map((v) => (v === null ? "?" : v)).join("&")}\\end{array}$`;
const col = (f, xs) => xs.map(f);
const img = (q, svg) => ({ ...q, image: svg });
const kindOf = (ys) => classify(ys).kind;
const INK = "#1e293b";
const dot = (x, y, label, extra = {}) => ({ x, y, label, color: INK, ...extra });

export function bank41() {
  const q = [];

  // ───────────────────────── EASY ─────────────────────────
  q.push(mc("easy", "Which relation is quadratic?", ["$y=2x+9$", "$y=3x^2-5$", "$y=x^3-5$", "$y=\\dfrac{3}{x}$"], 1,
    "A quadratic relation has the form $y=ax^2+bx+c$ with $a\\ne0$: the highest power of $x$ is 2."));
  q.push(mc("easy", "Which relation is NOT quadratic?", ["$y=4x^2-1$", "$y=x(x-5)$", "$y=x^3-x^2$", "$y=-x^2$"], 2,
    "$y=x^3-x^2$ has an $x^3$ term, so it is cubic."));
  q.push(img(mc("easy", "The graph shows a parabola. It opens ___, so its vertex is a ___ point.", ["down; maximum", "up; minimum", "down; minimum", "up; maximum"], 0,
    "The curve opens downward ($a<0$), so the vertex is the highest point: a maximum."),
    graphSvg({ fn: poly(-1, 2, 3), xmin: -3, xmax: 5, ymin: -3, ymax: 6, title: "A parabola" })));
  {
    const xs = [0, 1, 2, 3, 4], ys = [1, 2, 5, 10, 17];
    assert(kindOf(ys) === "quadratic");
    q.push(mc("easy", `The table gives $y=x^2+1$. ${arr(xs, ys)} The first differences are:`, ["$1,\\,3,\\,5,\\,7$", "$1,\\,1,\\,1,\\,1$", "$2,\\,2,\\,2,\\,2$", "$1,\\,2,\\,3,\\,4$"], 0,
      "$2-1=1,\\ 5-2=3,\\ 10-5=5,\\ 17-10=7$."));
  }
  {
    const xs = [0, 1, 2, 3, 4], ys = [3, 4, 7, 12, 19];
    assert(classify(ys).d2.every((v) => v === 2));
    q.push(mc("easy", `For the table ${arr(xs, ys)} the constant second difference is:`, ["$2$", "$1$", "$4$", "$0$"], 0,
      "First differences $1,3,5,7$; second differences $2,2,2$."));
  }
  q.push(num("easy", "If $f(x)=x^2+3x-2$, find $f(2)$.", poly(1, 3, -2)(2), 0, "$4+6-2=8$."));
  q.push(num("easy", "If $f(x)=2x^2-x$, find $f(-3)$.", poly(2, -1, 0)(-3), 0, "$2(9)-(-3)=18+3=21$."));
  q.push(tf("easy", "A relation whose first differences are all equal is quadratic.", false, "Constant first differences mean the relation is linear."));
  q.push(tf("easy", "For $y=-3x^2$ (step 1), the constant second difference is $-6$.", true, "Second difference $=2a=2(-3)=-6$."));
  q.push(fill("easy", "A relation whose second differences are constant and non-zero is ___ (linear/quadratic).", ["quadratic"]));
  q.push(ms("easy", "Which statements are true of EVERY quadratic relation?", ["its degree is $2$", "its graph is a parabola", "its second differences are constant", "its first differences are constant"], [0, 1, 2]));
  q.push(match("easy", "Match each description of a table (step 1) to the type of relation.",
    ["first differences are all $4$", "first differences are $1,3,5,7$", "first differences are $2,4,8,16$"],
    ["linear", "quadratic", "neither linear nor quadratic"], [0, 1, 2]));
  {
    const f = poly(1, -1, -2);
    assert(f(3) === 4 && f(-1) === 0 && f(0) === -2 && f(2) === 0);
    q.push(img(mc("easy", "The graph of $y=x^2-x-2$ is shown with four plotted points. Which point is NOT on the parabola?", ["$A(3,4)$", "$B(-1,0)$", "$C(2,2)$", "$D(0,-2)$"], 2,
      "At $x=2$: $y=4-2-2=0$, not $2$. The point $(2,2)$ lies above the curve."),
      graphSvg({ fn: f, xmin: -3, xmax: 4, ymin: -3, ymax: 6, points: [dot(3, 4, "A"), dot(-1, 0, "B", { dx: -14 }), dot(2, 2, "C"), dot(0, -2, "D")] })));
  }
  {
    const xs = [-2, -1, 0, 1, 2], ys = col(poly(1, 0, -3), xs), blank = ys.slice(0, 4).concat([null]);
    q.push(num("easy", `Complete the table for a quadratic (second differences constant). ${arr(xs, blank)} Find the missing $y$-value.`, ys[4], 0, "The table is symmetric about $x=0$, so $y(2)=y(-2)=1$."));
  }
  q.push(fill("easy", "The $y$-intercept of $y=x^2+4x-7$ is ___.", ["-7", "−7", "(0,-7)", "(0,−7)"], "Put $x=0$: $y=c=-7$."));
  q.push(mc("easy", "A diver's height is $h=-5t^2+10t$ metres after $t$ seconds. At $t=1$, $h=$", ["$5$", "$10$", "$-5$", "$15$"], 0, "$-5+10=5$ m."));
  q.push(order("easy", "Put the steps in order to test whether a point $(a,b)$ is on the graph of $y=f(x)$.",
    ["Substitute $x=a$ into the equation", "Evaluate to get a value of $y$", "Compare that value with $b$", "State whether the point is on the graph"]));
  q.push(img(mc("easy", "Which equation matches the graph?", ["$y=x^2-4$", "$y=4-x^2$", "$y=x^2+4$", "$y=2x-4$"], 0,
    "It opens up, with $y$-intercept $-4$ and zeros $\\pm2$: $y=x^2-4$."),
    graphSvg({ fn: poly(1, 0, -4), xmin: -4, xmax: 4, ymin: -5, ymax: 6, title: "A parabola" })));
  q.push(num("easy", "For $y=4x^2+x-9$ with $x$ increasing by $1$, find the constant second difference.", 8, 0, "Second difference $=2a=8$."));
  q.push(tf("easy", "The point $(2,7)$ lies on $y=x^2+3$.", true, "$2^2+3=7$."));

  // ───────────────────────── MEDIUM ─────────────────────────
  {
    const xs = [0, 1, 2, 3, 4], ys = [5, 8, 13, 20, 29];
    assert(kindOf(ys) === "quadratic");
    q.push(mc("medium", `Classify the relation. ${arr(xs, ys)}`, ["quadratic (second differences all $2$)", "linear (first differences all $3$)", "quadratic (second differences all $3$)", "neither"], 0,
      "First differences $3,5,7,9$; second differences $2,2,2$."));
  }
  {
    const xs = [0, 1, 2, 3, 4], ys = [1, 2, 4, 8, 16];
    assert(kindOf(ys) === "neither");
    q.push(mc("medium", `Classify the relation. ${arr(xs, ys)}`, ["neither: first differences $1,2,4,8$ and second differences $1,2,4$ both keep changing", "quadratic", "linear", "quadratic with $a=\\tfrac12$"], 0,
      "Neither difference row becomes constant; this table doubles each step (exponential)."));
  }
  {
    const xs = [0, 2, 4, 6], ys = col(poly(1, 0, 1), xs);
    assert(kindOf(ys) === "quadratic" && classify(ys).d2[0] === 8);
    q.push(mc("medium", `The $x$-values go up by $2$. ${arr(xs, ys)} The constant second difference is $8$. What is $a$ in $y=ax^2+bx+c$?`, ["$1$", "$4$", "$8$", "$2$"], 0,
      "With step $h$, the second difference is $2ah^2$: $8=2a(4)$, so $a=1$."));
  }
  {
    const xs = [0, 1, 2, 3, 4], f = poly(2, -3, 6), ys = col(f, xs);
    assert(classify(ys).d2.every((v) => v === 4));
    q.push(num("medium", `${arr(xs, ys.slice(0, 4).concat([null]))} The relation is quadratic. Find the missing $y$-value.`, ys[4], 0, "First differences $-1,3,7$, then $11$. So $y=15+11=26$."));
  }
  q.push(num("medium", "A stunt jumper's height is $h=-5t^2+25t+3$ metres. Find $h$ at $t=3$.", poly(-5, 25, 3)(3), 0, "$-45+75+3=33$."));
  q.push(img(num("medium", "The graph of $y=x^2-6x+5$ is shown. The point $(0,5)$ is marked. At what other $x$-value is $y=5$?", 6, 0,
    "The axis of symmetry is $x=3$, so the mirror image of $x=0$ is $x=6$."),
    graphSvg({ fn: poly(1, -6, 5), xmin: -1, xmax: 7, ymin: -5, ymax: 8, points: [dot(0, 5, "(0, 5)")] })));
  q.push(num("medium", "The point $(-2,k)$ is on $y=3x^2+x-1$. Find $k$.", poly(3, 1, -1)(-2), 0, "$3(4)-2-1=9$."));
  q.push(mc("medium", "Which relation is quadratic?", ["$y=(x+2)(x-2)$", "$y=(x+3)^2-x^2$", "$y=4x-7$", "$y=2^x$"], 0,
    "$(x+2)(x-2)=x^2-4$. Expanding $(x+3)^2-x^2$ gives $6x+9$, which is linear."));
  {
    const xs = [1, 2, 3, 4, 5], ys = col(poly(1, 3, -2), xs);
    assert(classify(ys).d2.every((v) => v === 2));
    q.push(ms("medium", `Consider the table ${arr(xs, ys)} Which statements are true?`, ["the relation is quadratic", "the constant second difference is $2$", "$a=1$", "the first differences are constant"], [0, 1, 2],
      "First differences $6,8,10,12$; second differences $2,2,2$, so $2a=2$ and $a=1$."));
  }
  q.push(img(ms("medium", "The graph of $y=-x^2+4x$ is shown. Which statements are true?", ["the parabola opens down", "the maximum value is $4$", "the point $(4,0)$ is on the graph", "the second differences are positive"], [0, 1, 2],
    "$a=-1<0$, so it opens down and the second differences are $-2$. The vertex is $(2,4)$ and $y(4)=-16+16=0$."),
    graphSvg({ fn: poly(-1, 4, 0), xmin: -1, xmax: 5, ymin: -3, ymax: 6, title: "A parabola" })));
  q.push(tf("medium", "A table with $x$ going up by $2$ and a constant second difference of $8$ must come from $y=4x^2+\\cdots$.", false, "With step $h=2$: $8=2a(2^2)$, so $a=1$."));
  q.push(tf("medium", "If the second differences of a table are all $0$, the relation is quadratic.", false, "Second differences of $0$ mean the first differences are constant: linear."));
  {
    const xs = [0, 1, 2, 3], ys = col(poly(1, -2, 5), xs);
    assert(classify(ys).d2.every((v) => v === 2));
    q.push(fill("medium", `${arr(xs, ys)} The constant second difference is ___.`, ["2"], "First differences $-1,1,3$; second differences $2,2$."));
  }
  {
    const xs = [0, 1, 2, 3], f = poly(3, -4, 3), ys = col(f, xs);
    assert(classify(ys).d2.every((v) => v === 6));
    q.push(num("medium", `${arr(xs, ys)} The relation is $y=ax^2+bx+c$. Find $a$.`, 3, 0, "First differences $-1,5,11$; second differences $6,6$. Since $2a=6$, $a=3$."));
  }
  {
    const f = poly(2, -1, -1);
    assert(f(0) === -1 && f(1) === 0 && f(2) === 5);
    q.push(num("medium", "A parabola $y=ax^2+bx+c$ passes through $(0,-1)$, $(1,0)$ and $(2,5)$. Find $y$ when $x=3$.", f(3), 0,
      "$c=-1$; $a+b=1$; $4a+2b=6$. So $a=2$, $b=-1$ and $y=2x^2-x-1$. Then $y(3)=18-3-1=14$."));
  }
  q.push(match("medium", "Match each relation (with $x$ going up by $1$) to its constant second difference.",
    ["$y=3x^2+2$", "$y=-2x^2+x$", "$y=\\tfrac12x^2$", "$y=5x-x^2$"], ["$6$", "$-4$", "$1$", "$-2$"], [0, 1, 2, 3]));
  {
    const f = poly(-5, 5, 10);
    assert(f(0) === 10 && f(1) === 10);
    q.push(mc("medium", "A diver's height is $h=-5t^2+5t+10$ metres. At which times is the diver exactly $10$ m high?", ["$t=0$ and $t=1$", "$t=0$ only", "$t=1$ and $t=2$", "$t=2$ only"], 0,
      "Set $-5t^2+5t=0$: $-5t(t-1)=0$, so $t=0$ or $t=1$."));
  }
  q.push(mc("medium", "A table (step $1$) has constant second differences of $-6$. The parabola opens ___ and $a=$", ["down; $-3$", "down; $-6$", "up; $3$", "up; $-3$"], 0, "Second difference $=2a=-6$, so $a=-3<0$: opens down."));
  {
    const f = poly(2, 0, -7), xs = [-3, -2, -1, 0, 1, 2], ys = col(f, xs);
    q.push(num("medium", `The relation is quadratic. ${arr(xs, ys.slice(0, 5).concat([null]))} Find the missing value.`, f(2), 0, "The table is symmetric about $x=0$ so $y(2)=y(-2)=1$."));
  }
  q.push(num("medium", "A rectangle has width $w$ and length $w+3$, so its area is $A=w^2+3w$. Find the area when $w=5$.", 40, 0, "$25+15=40$."));

  // ───────────────────────── HARD ─────────────────────────
  {
    const f = poly(2, 1, 3), xs = [0, 1, 2, 3, 4, 5], ys = col(f, xs);
    assert(kindOf(ys) === "quadratic");
    q.push(num("hard", `The relation is quadratic but TWO values are missing. ${arr(xs, [ys[0], null, ys[2], ys[3], null, ys[5]])} Find the sum of the two missing $y$-values.`, ys[1] + ys[4], 0,
      "Let the second difference be $d$. Using the known values, $y(0)=3$, $y(2)=13$, $y(3)=24$ gives $y(1)=6$ and $d=4$, then $y(4)=24+(11+4)=39$. Sum $=6+39=45$; check $y(5)=39+19=58$."));
  }
  {
    const f = poly(3, -6, 4);
    assert(f(0) === 4 && f(1) === 1 && f(3) === 13);
    q.push(num("hard", "Differences do not work here, because the $x$-values are not equally spaced. A parabola $y=ax^2+bx+c$ passes through $(0,4)$, $(1,1)$ and $(3,13)$. Find $y$ when $x=5$.", f(5), 0,
      "$c=4$. $a+b=-3$ and $9a+3b=9$ give $3a+b=3$, so $a=3$, $b=-6$. $y(5)=75-30+4=49$."));
  }
  {
    const t = (n) => 2 * n * n - n + 3, seq = [1, 2, 3, 4].map(t);
    assert(seq.join() === "4,9,18,31" && kindOf(seq) === "quadratic");
    q.push(num("hard", "A pattern has terms $4,\\ 9,\\ 18,\\ 31,\\ \\dots$ (term numbers $n=1,2,3,4$). The terms follow $t_n=an^2+bn+c$. Find the 10th term.", t(10), 0,
      "First differences $5,9,13$; second differences $4$, so $a=2$. $2+b+c=4$ and $8+2b+c=9$ give $b=-1$, $c=3$. $t_{10}=200-10+3=193$."));
  }
  {
    const f = poly(3, 1, 1), xs = [0, 0.5, 1, 1.5, 2], ys = col(f, xs);
    assert(ys.join() === "1,2.25,5,9.25,15");
    q.push(num("hard", `The $x$-values go up by $0.5$. ${arr(xs, ys)} The relation is $y=ax^2+bx+c$. Find $a$.`, 3, 0,
      "First differences $1.25,2.75,4.25,5.75$; second difference $1.5=2a(0.5)^2$, so $a=3$ (not $0.75$)."));
  }
  q.push(mc("hard", `${arr([0, 1, 2, 4, 5], [0, 1, 4, 16, 25])} A student says "the second differences are not constant, so this is not quadratic." Is the student right?`,
    ["No: the relation is $y=x^2$; the $x$-values are not equally spaced, so differences cannot be used", "Yes: the second differences are $2,9,-3$, so it is not quadratic", "Yes: a quadratic needs first differences that are all equal", "No: it is linear"], 0,
    "$y=x^2$ matches every pair. Finite differences only work when the $x$-values step evenly (here the step changes from 1 to 2)."));
  {
    const f = poly(2, 4, 1);
    const d1 = [6, 10, 14]; let y = 1; for (const d of d1) y += d; // y(3)
    assert(y === f(3));
    q.push(num("hard", "A quadratic relation (step $1$, starting at $x=0$) has $y(0)=1$ and first differences $6,\\ 10,\\ 14,\\ \\dots$ for $x=0\\to1,\\ 1\\to2,\\ 2\\to3,\\dots$. Find $y(5)$.", f(5), 0,
      "The first differences grow by $4$: $6,10,14,18,22$. So $y(1)=7$, $y(2)=17$, $y(3)=31$, $y(4)=49$, $y(5)=71$."));
  }
  {
    const f = poly(1, -2, -3), ys = [0, 1, 2, 3].map(f);
    assert(ys.join() === "-3,-4,-3,0");
    q.push(img(mc("hard", "The graph is the parabola $y=ax^2+bx+c$. Which list gives its $y$-values at $x=0,1,2,3$?",
      ["$-3,\\ -4,\\ -3,\\ 0$", "$-2,\\ -3,\\ -2,\\ 1$", "$-3,\\ -2,\\ 1,\\ 6$", "$3,\\ 0,\\ -1,\\ 0$"], 0,
      "The curve crosses the $y$-axis at $-3$ and the $x$-axis at $-1$ and $3$, so $y=x^2-2x-3$. Then $y(1)=-4$, $y(2)=-3$, $y(3)=0$."),
      graphSvg({ fn: poly(1, -2, -3), xmin: -2, xmax: 5, ymin: -5, ymax: 8, title: "A parabola" })));
  }
  {
    const f = poly(-5, 20, 2);
    assert(f(0) === 2 && f(1) === 17 && f(3) === 17);
    q.push(img(num("hard", "A ball's height $h$ (metres) at time $t$ (s) is a quadratic. Three points are marked. Find the height at $t=2.5$ s.", f(2.5), 0.01,
      "Using $(0,2)$: $c=2$. $a+b=15$ and $9a+3b=15$ give $3a+b=5$, so $a=-5$, $b=20$. $h(2.5)=-31.25+50+2=20.75$."),
      graphSvg({ fn: f, xmin: 0, xmax: 4.5, ymin: 0, ymax: 26, domain: [0, 4.4], points: [dot(0, 2, "(0, 2)"), dot(1, 17, "(1, 17)", { dy: -9 }), dot(3, 17, "(3, 17)", { dy: -9 })], title: "Height of a ball" })));
  }
  q.push(ms("hard", `A table has $x:-1,0,1,2,3$ and $y:6,3,2,3,6$. Which statements are true?`,
    ["the second differences are all $2$", "the table is symmetric about $x=1$", "the $y$-intercept is $3$", "the vertex is at $(0,3)$"], [0, 1, 2],
    "$y=x^2-2x+3$. The vertex is $(1,2)$, not $(0,3)$."));
  q.push(tf("hard", "If every first difference of a table is positive, the relation cannot be quadratic.", false, "$y=x^2$ for $x=0,1,2,3$ has first differences $1,3,5$, all positive."));
  q.push(tf("hard", "A table with constant second differences must be quadratic even if the $x$-values are unevenly spaced.", false, "The finite-difference test only applies when $x$ steps by a constant amount."));
  q.push(mc("hard", "A table has $x$ going up by $2$ each row and constant second difference $6$. Find $a$.", ["$\\frac34$", "$3$", "$\\frac32$", "$\\frac38$"], 0, "$6=2a(2)^2=8a$, so $a=\\frac34$."));
  {
    const f = poly(-1, 4, 2), xs = [0, 3, 6, 9, 12], ys = col(f, xs);
    assert(ys.slice(0, 4).join() === "2,5,-10,-43" && classify(ys).d2.every((v) => v === -18));
    q.push(num("hard", `The $x$-values go up by $3$. ${arr(xs, ys.slice(0, 4).concat([null]))} The relation is quadratic. Find the missing $y$-value.`, ys[4], 0,
      "First differences $3,-15,-33$, so the second difference is $-18$ and the next first difference is $-51$. $y=-43-51=-94$."));
  }
  {
    const xs = [0, 1, 2, 3, 4, 5], ys = [1, 2, 5, 10, 17, 27];
    assert(classify(ys).d2.join() === "2,2,2,3");
    q.push(num("hard", `This table should come from a quadratic, but ONE $y$-value is wrong. ${arr(xs, ys)} What should the value at $x=5$ be?`, 26, 0,
      "Second differences $2,2,2,3$: the first three agree, so $y=x^2+1$ and $y(5)=26$ (not $27$)."));
  }
  {
    const f = poly(-1, 8, 0), xs = [0, 2, 4, 6, 8], ys = col(f, xs);
    assert(ys.join() === "0,12,16,12,0" && classify(ys).d2.every((v) => v === -8));
    q.push(img(num("hard", "An arch's height is measured every $2$ m across its base. The points shown fit a quadratic. Find the height of the arch at $x=3$ m.", f(3), 0,
      "Step $h=2$: $-8=2a(4)$, so $a=-1$; $c=0$; $y(2)=12$ gives $b=8$. $y=-x^2+8x$, $y(3)=15$."),
      graphSvg({ xmin: -1, xmax: 9, ymin: -2, ymax: 18, points: ys.map((y, i) => dot(xs[i], y, `(${xs[i]}, ${y})`, { dy: -9 })), title: "Height of an arch (m)" })));
  }
  {
    const tables = [[1, 3, 7, 13], [2, 2, 2, 2], [0, 1, 8, 27], [5, 2, 1, 2]];
    assert(kindOf(tables[0]) === "quadratic" && kindOf(tables[1]) === "linear" && kindOf(tables[2]) === "neither" && kindOf(tables[3]) === "quadratic");
    q.push(ms("hard", "Each table has $x=0,1,2,3$. Which could come from $y=ax^2+bx+c$ with $a\\ne0$?",
      ["$y:\\ 1,3,7,13$", "$y:\\ 2,2,2,2$", "$y:\\ 0,1,8,27$", "$y:\\ 5,2,1,2$"], [0, 3],
      "$1,3,7,13$ has second differences $2,2$; $5,2,1,2$ has $2,2$. $2,2,2,2$ is constant (not quadratic) and $0,1,8,27$ has second differences $6,12$."));
  }
  {
    const f = poly(2, -4, 5);
    assert(f(0) === 5 && f(1) === 3 && f(2) === 5);
    q.push(fill("hard", "A quadratic $y=ax^2+bx+c$ has $y(0)=5$, $y(1)=3$ and $y(2)=5$. Then $b=$ ___.", ["-4", "−4"], "$c=5$; $a+b=-2$; $4a+2b=0$ gives $b=-2a$, so $a=2$, $b=-4$."));
  }
  q.push(order("hard", "Put the steps in order to find the equation of a quadratic from a table with $x=0,1,2,\\dots$",
    ["Compute the first differences", "Compute the second differences and set $2a$ equal to them", "Read $c$ from the $y$-value at $x=0$", "Use one more point to find $b$"]));
  q.push(match("hard", "Each table has a constant second difference of $6$. Match the $x$-step to the value of $a$.",
    ["step $1$", "step $2$", "step $0.5$", "step $3$ (second difference $-18$ instead of $6$)"], ["$3$", "$\\frac34$", "$12$", "$-1$"], [0, 1, 2, 3],
    "$d_2=2ah^2$: $a=\\dfrac{d_2}{2h^2}$."));
  {
    const f = poly(2, -3, 3);
    assert(f(-1) === 8 && f(0) === 3 && f(2) === 5);
    q.push(img(num("hard", "The marked points lie on a parabola. Find $y$ when $x=3$.", f(3), 0,
      "$c=3$. $a-b=5$ and $2a+b=1$ give $a=2$, $b=-3$. $y(3)=18-9+3=12$."),
      graphSvg({ xmin: -3, xmax: 5, ymin: -1, ymax: 12, points: [dot(-1, 8, "(-1, 8)"), dot(0, 3, "(0, 3)", { dy: 16 }), dot(2, 5, "(2, 5)")], title: "Three points on a parabola" })));
  }

  const c = { easy: 0, medium: 0, hard: 0 };
  for (const x of q) c[x.difficulty]++;
  assert(q.length === 60 && c.easy === 20 && c.medium === 20 && c.hard === 20, JSON.stringify(c));
  return q;
}
