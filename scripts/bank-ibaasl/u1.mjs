// IB AA SL Unit 1 — Number & Algebra: question bank.
import { mc, ms, tf, num, fill, order, match } from "../bank-mpm2d/helpers.mjs";

// ── 1.1 Arithmetic Sequences & Series ───────────────
function g11() {
  const q = [];
  q.push(mc("easy", "The general term of an arithmetic sequence is:", ["$u_n=u_1+(n-1)d$", "$u_n=u_1r^{n-1}$", "$u_n=u_1+nd$", "$u_n=nd$"], 0));
  q.push(mc("easy", "In an arithmetic sequence, $d$ is called the:", ["common difference", "common ratio", "first term", "sum"], 0));
  q.push(mc("easy", "Find $u_5$ for $3,7,11,\\dots$", ["19", "15", "23", "17"], 0));
  q.push(mc("easy", "For $10,6,2,\\dots$, the common difference is:", ["$-4$", "$4$", "$-6$", "$6$"], 0));
  q.push(mc("easy", "$S_n=\\dfrac n2(2u_1+(n-1)d)$ computes:", ["the sum of the first $n$ terms", "the $n$th term", "the common difference", "the number of terms"], 0));
  q.push(ms("easy", "True facts about arithmetic sequences:", ["consecutive terms differ by a constant $d$", "$d>0$ means increasing", "$d<0$ means decreasing", "the ratio between terms is constant"], [0, 1, 2]));
  q.push(tf("easy", "In an arithmetic sequence, $d>0$ means the sequence is increasing.", true));
  q.push(tf("easy", "$S_n=\\dfrac n2(u_1+u_n)$ is a valid sum formula once $u_n$ is known.", true));
  q.push(fill("easy", "Find $u_1$ for the sequence $u_n=5+3(n-1)$.", ["5"]));
  q.push(num("easy", "Find $u_{10}$ for $2,5,8,\\dots$", 29, 0));
  q.push(mc("medium", "An arithmetic sequence has $u_1=4$, $d=3$. Find $u_{12}$.", ["37", "40", "33", "36"], 0));
  q.push(mc("medium", "An arithmetic sequence has $u_3=11$ and $u_7=27$. Find $d$.", ["4", "3", "5", "2"], 0));
  q.push(mc("medium", "Find $S_{10}$ for $5,9,13,\\dots$", ["230", "210", "220", "240"], 0));
  q.push(ms("medium", "An arithmetic sequence has $u_4=17$, $u_9=42$. True statements:", ["$d=5$", "$u_1=2$", "$u_1=7$", "$d=5(u_9-u_4)/5$ is the method used"], [0, 1]));
  q.push(tf("medium", "For $u_3=11$, $u_7=27$, the common difference is $d=4$.", true));
  q.push(fill("medium", "Find $S_{20}$ for $1,4,7,\\dots$ (arithmetic, $d=3$).", ["590"]));
  q.push(num("medium", "An arithmetic sequence has $u_1=6$, $S_{15}=330$. Find $d$.", 4, 0.1));
  q.push(num("medium", "Find the number of terms in $4,9,14,\\dots,144$.", 29, 0));
  q.push(match("medium", "Match each sequence to its common difference.", ["$5,8,11,\\dots$", "$20,14,8,\\dots$", "$-3,-1,1,\\dots$"], ["$3$", "$-6$", "$2$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find $u_1$ and $d$ given $u_5=18$, $u_9=34$.", ["Subtract: $4d=34-18=16$", "Solve: $d=4$", "Substitute into $u_5=u_1+4d$: $18=u_1+16$", "Solve: $u_1=2$"]));
  q.push(mc("hard", "A theatre has 20 seats in row 1, increasing by 4 per row for 10 rows. Total seats:", ["380", "360", "400", "340"], 0));
  q.push(mc("hard", "How many terms of $2,5,8,\\dots$ are needed before the sum first exceeds 200?", ["12", "11", "13", "10"], 0));
  q.push(mc("hard", "An arithmetic sequence has $u_1=3$ and $S_8=108$. Find $d$.", ["3", "2", "4", "3.5"], 0));
  q.push(ms("hard", "For the sequence with $u_1=3$, $S_8=108$:", ["$S_8=\\dfrac82(6+7d)=108$", "$d=3$", "$u_8=24$", "$d=4$"], [0, 1, 2]));
  q.push(tf("hard", "For $2,5,8,\\dots$, the sum first exceeds 200 at $n=12$.", true));
  q.push(fill("hard", "A theatre adds 3 seats per row to a first row of 15, for 14 rows. Total seats.", ["483"]));
  q.push(num("hard", "Find $S_{25}$ for an arithmetic sequence with $u_1=-4$, $d=3$.", 800, 0));
  q.push(order("hard", "Order the steps to find the total logs stacked from 24 (bottom) decreasing by 2 per row to 2 (top).", ["Find $n$: $2=24+(n-1)(-2)\\Rightarrow n=12$", "Use $S_n=\\dfrac n2(u_1+u_n)$", "Substitute: $S_{12}=\\dfrac{12}2(24+2)$", "Result: $156$"]));
  q.push(match("hard", "Match each arithmetic series to its sum.", ["$u_1=5,d=2,n=10$", "$u_1=1,d=1,n=20$", "$u_1=10,d=-2,n=6$"], ["$140$", "$210$", "$30$"], [0, 1, 2]));
  return q;
}

// ── 1.2 Geometric Sequences & Series ───────────────
function g12() {
  const q = [];
  q.push(mc("easy", "The general term of a geometric sequence is:", ["$u_n=u_1r^{n-1}$", "$u_n=u_1+(n-1)d$", "$u_n=u_1+nr$", "$u_n=r^n$"], 0));
  q.push(mc("easy", "In a geometric sequence, $r$ is the:", ["common ratio", "common difference", "first term", "sum"], 0));
  q.push(mc("easy", "Find $u_5$ for $2,6,18,\\dots$", ["162", "108", "54", "486"], 0));
  q.push(mc("easy", "For $80,40,20,\\dots$, the ratio $r$ is:", ["$0.5$", "$2$", "$-0.5$", "$40$"], 0));
  q.push(mc("easy", "$S_\\infty$ exists only when:", ["$-1<r<1$", "$r>1$", "$r<-1$", "$r=1$"], 0));
  q.push(ms("easy", "True facts about geometric sequences:", ["consecutive terms have a constant ratio $r$", "$S_\\infty$ requires $|r|<1$", "$u_n=u_1r^{n-1}$", "the difference between terms is constant"], [0, 1, 2]));
  q.push(tf("easy", "A geometric sequence with $r=-1$ alternates in sign.", true));
  q.push(tf("easy", "$S_\\infty$ exists for $r=2$.", false));
  q.push(fill("easy", "Find $u_1$ for $u_n=3(2)^{n-1}$.", ["3"]));
  q.push(num("easy", "Find $u_6$ for $5,10,20,\\dots$", 160, 0));
  q.push(mc("medium", "A geometric sequence has $u_1=4$, $r=3$. Find $S_5$.", ["484", "324", "400", "244"], 0));
  q.push(mc("medium", "A geometric sequence has $u_1=200$, $u_4=25$. Find $r$.", ["0.5", "0.25", "2", "0.125"], 0));
  q.push(mc("medium", "Find $S_\\infty$ for $60,30,15,\\dots$", ["120", "90", "150", "100"], 0));
  q.push(ms("medium", "For $u_1=200$, $u_4=25$: true statements.", ["$r^3=1/8$", "$r=0.5$", "$r=2$", "$u_5=12.5$"], [0, 1, 3]));
  q.push(tf("medium", "For $60,30,15,\\dots$, $S_\\infty=120$.", true));
  q.push(fill("medium", "Find $S_\\infty$ for $u_1=18$, $r=1/3$.", ["27"]));
  q.push(num("medium", "A car worth \\$20000 depreciates 15\\% yearly. Find its value after 4 years (nearest dollar).", 10440, 20));
  q.push(num("medium", "Find $S_6$ for a geometric series with $u_1=3$, $r=2$.", 189, 0));
  q.push(match("medium", "Match each geometric sequence to its ratio.", ["$4,8,16,\\dots$", "$81,27,9,\\dots$", "$5,-10,20,\\dots$"], ["$2$", "$1/3$", "$-2$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find $S_\\infty$ for $u_1=50$, $r=0.6$.", ["Check $|r|<1$: valid", "Use $S_\\infty=\\dfrac{u_1}{1-r}$", "Substitute: $\\dfrac{50}{1-0.6}$", "Result: $125$"]));
  q.push(mc("hard", "A ball dropped from 10 m rebounds to 50\\% each bounce. Total vertical distance (down+up, forever):", ["30 m", "20 m", "25 m", "40 m"], 0));
  q.push(mc("hard", "A geometric sequence has $u_2=6$, $u_5=48$. Find $u_1$.", ["3", "2", "4", "1.5"], 0));
  q.push(mc("hard", "A savings plan of \\$1000 grows 6\\% yearly; find its value after 12 years (nearest dollar).", ["2012", "1795", "2140", "1890"], 0));
  q.push(ms("hard", "For $u_2=6$, $u_5=48$:", ["$r^3=8$", "$r=2$", "$u_1=3$", "$u_1=6$"], [0, 1, 2]));
  q.push(tf("hard", "A ball dropped from 10 m rebounding 50\\% each time travels a total of 30 m (down+up, forever).", true));
  q.push(fill("hard", "Find $S_\\infty$ for $k, k/4, k/16,\\dots$ in terms of $k$.", ["4k/3"]));
  q.push(num("hard", "$S_\\infty=45$ for $u_1,\\ u_1/3,\\ u_1/9,\\dots$; find $u_1$.", 30, 0.1));
  q.push(order("hard", "Order the steps to find $r$ given $u_1=500$, $u_5=0.5$.", ["Use $u_5=u_1r^4$", "Substitute: $0.5=500r^4$", "Solve: $r^4=0.001$", "Result: $r\\approx0.1778$"]));
  q.push(match("hard", "Match each scenario to its type of series.", ["repeated 50\\% depreciation forever", "a fixed 20-term geometric sum", "$S_\\infty$ with $r=1.2$"], ["converges", "finite sum formula", "diverges (no sum)"], [0, 1, 2]));
  return q;
}

// ── 1.3 Sigma Notation ───────────────
function g13() {
  const q = [];
  q.push(mc("easy", "$\\displaystyle\\sum_{n=1}^{4}n$ equals:", ["10", "9", "8", "12"], 0));
  q.push(mc("easy", "$\\displaystyle\\sum_{n=1}^{N}f(n)$ means:", ["sum $f(n)$ for every integer $n$ from 1 to $N$", "multiply $f(n)$ for every $n$", "the value of $f$ at $N$ only", "the average of $f(1)$ and $f(N)$"], 0));
  q.push(mc("easy", "Evaluate $\\displaystyle\\sum_{n=1}^{3}(2n+1)$.", ["15", "12", "18", "9"], 0));
  q.push(mc("easy", "The lower limit in $\\displaystyle\\sum_{n=2}^{5}f(n)$ is:", ["2", "5", "1", "4"], 0));
  q.push(mc("easy", "$\\displaystyle\\sum_{n=1}^{4}3$ equals:", ["12", "3", "7", "9"], 0));
  q.push(ms("easy", "True facts about sigma notation:", ["it compactly represents a sum", "the general term is substituted for each integer in range", "it can represent arithmetic or geometric series", "it always represents multiplication"], [0, 1, 2]));
  q.push(tf("easy", "$\\displaystyle\\sum_{n=1}^{3}(2n+1)=15$.", true));
  q.push(tf("easy", "The upper limit of $\\displaystyle\\sum_{n=1}^{7}f(n)$ is $1$.", false));
  q.push(fill("easy", "Evaluate $\\displaystyle\\sum_{n=1}^{5}2$.", ["10"]));
  q.push(num("easy", "Evaluate $\\displaystyle\\sum_{n=1}^{4}n^2$.", 30, 0));
  q.push(mc("medium", "Evaluate $\\displaystyle\\sum_{n=1}^{6}(3n-2)$.", ["51", "48", "54", "45"], 0));
  q.push(mc("medium", "Evaluate $\\displaystyle\\sum_{n=1}^{5}2(3)^{n-1}$.", ["242", "162", "121", "486"], 0));
  q.push(mc("medium", "Write $5+8+11+\\cdots+29$ (arithmetic) as a sigma sum's number of terms $n$:", ["9", "8", "10", "7"], 0));
  q.push(ms("medium", "For $\\displaystyle\\sum_{n=1}^{5}2(3)^{n-1}$:", ["this is a geometric series", "$u_1=2$", "$r=3$", "$u_1=3$"], [0, 1, 2]));
  q.push(tf("medium", "$\\displaystyle\\sum_{n=1}^{6}(3n-2)=51$.", true));
  q.push(fill("medium", "Evaluate $\\displaystyle\\sum_{k=1}^{4}(k^2+1)$.", ["34"]));
  q.push(num("medium", "Evaluate $\\displaystyle\\sum_{n=0}^{4}5(2)^n$.", 155, 0));
  q.push(num("medium", "Evaluate $\\displaystyle\\sum_{n=1}^{10}n$.", 55, 0));
  q.push(match("medium", "Match each sigma sum to its value.", ["$\\sum_{n=1}^{3}n^2$", "$\\sum_{n=1}^{4}(2n)$", "$\\sum_{n=1}^{3}5$"], ["$14$", "$20$", "$15$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to evaluate $\\displaystyle\\sum_{n=1}^{4}(2n+3)$.", ["List terms: $5,7,9,11$", "Add consecutively: $5+7=12$", "$12+9=21$", "$21+11=32$"]));
  q.push(mc("hard", "A savings plan deposits $D_n=20+4n$ dollars in month $n$, $n=1$ to $10$. Total deposited:", ["420", "400", "440", "380"], 0));
  q.push(mc("hard", "Evaluate $\\displaystyle\\sum_{n=1}^{8}3(0.5)^{n-1}$ (2 d.p.):", ["5.98", "6.00", "5.50", "6.50"], 0));
  q.push(mc("hard", "Write $100+90+80+\\cdots+10$ as a sigma sum's number of terms:", ["10", "9", "11", "8"], 0));
  q.push(ms("hard", "For $\\displaystyle\\sum_{n=1}^{5}(2n+3)$ and $\\displaystyle\\sum_{n=0}^{4}(2n+5)$:", ["both equal 45", "shifting the index start changes the formula but not the total", "the terms produced are identical in both", "they are different totals"], [0, 1, 2]));
  q.push(tf("hard", "$\\displaystyle\\sum_{n=1}^{5}(2n+3)$ and $\\displaystyle\\sum_{n=0}^{4}(2n+5)$ give the same total.", true));
  q.push(fill("hard", "Total deposited by $D_n=15+3n$ dollars for $n=1$ to $8$.", ["228"]));
  q.push(num("hard", "Evaluate $\\displaystyle\\sum_{n=1}^{6}(4n-1)$.", 78, 0));
  q.push(order("hard", "Order the steps to write $9+13+17+\\cdots+41$ in sigma notation.", ["Identify arithmetic, $u_1=9$, $d=4$", "General term $u_n=4n+5$", "Solve $4n+5=41\\Rightarrow n=9$", "Write $\\sum_{n=1}^{9}(4n+5)$"]));
  q.push(match("hard", "Match each sigma expression's series type.", ["$\\sum 3(2)^{n-1}$", "$\\sum(5n-2)$", "$\\sum 7$"], ["geometric", "arithmetic", "constant"], [0, 1, 2]));
  return q;
}

// ── 1.4 The Binomial Theorem ───────────────
function g14() {
  const q = [];
  q.push(mc("easy", "$(a+b)^n=\\displaystyle\\sum_{r=0}^{n}\\dbinom nr a^{n-r}b^r$ is the:", ["Binomial Theorem", "Pythagorean Theorem", "Sigma rule", "Difference of squares"], 0));
  q.push(mc("easy", "$\\dbinom42$ equals:", ["6", "8", "4", "12"], 0));
  q.push(mc("easy", "The general term $T_{r+1}$ of $(a+b)^n$ is:", ["$\\dbinom nr a^{n-r}b^r$", "$\\dbinom nr a^rb^{n-r}$", "$n^ra^rb^{n-r}$", "$\\dbinom nr(a+b)^r$"], 0));
  q.push(mc("easy", "The row of Pascal's triangle for $n=3$ is:", ["$1,3,3,1$", "$1,2,1$", "$1,4,6,4,1$", "$1,3,1$"], 0));
  q.push(mc("easy", "$\\dbinom50$ equals:", ["1", "0", "5", "120"], 0));
  q.push(ms("easy", "True facts about binomial coefficients:", ["$\\dbinom nr=\\dbinom n{n-r}$", "row $n$ of Pascal's triangle has $n+1$ entries", "$\\dbinom n0=1$ always", "$\\dbinom nr$ can be negative"], [0, 1, 2]));
  q.push(tf("easy", "$\\dbinom nr=\\dbinom n{n-r}$.", true));
  q.push(tf("easy", "$(a+b)^n$ has $n$ terms in its full expansion.", false));
  q.push(fill("easy", "Evaluate $\\dbinom63$.", ["20"]));
  q.push(num("easy", "Evaluate $\\dbinom72$.", 21, 0));
  q.push(mc("medium", "Expand $(x+1)^3$ fully: the coefficient of $x^2$ is:", ["3", "1", "2", "6"], 0));
  q.push(mc("medium", "Find the coefficient of $x^3$ in $(x+2)^5$.", ["80", "40", "160", "20"], 0));
  q.push(mc("medium", "Find the coefficient of $x^4$ in $(2x-1)^6$.", ["240", "120", "60", "480"], 0));
  q.push(ms("medium", "For the expansion of $(x+2)^5$:", ["the term with $x^3$ has coefficient $\\dbinom53 2^2$", "the coefficient is 80", "the full expansion has 6 terms", "the full expansion has 5 terms"], [0, 1, 2]));
  q.push(tf("medium", "The coefficient of $x^3$ in $(x+2)^5$ is $80$.", true));
  q.push(fill("medium", "Find the constant term in $(x+1/x)^4$.", ["6"]));
  q.push(num("medium", "Find the coefficient of $x^2$ in $(x+3)^4$.", 54, 0));
  q.push(num("medium", "Find the coefficient of $x^5$ in $(x-1)^7$.", 21, 0));
  q.push(match("medium", "Match each binomial term request to its coefficient.", ["$x^2$ in $(x+1)^4$", "$x^3$ in $(x+1)^5$", "$x^1$ in $(x+1)^3$"], ["$6$", "$10$", "$3$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to find the coefficient of $x^3$ in $(x+2)^6$.", ["General term $T_{r+1}=\\dbinom6r x^{6-r}2^r$", "Set $6-r=3\\Rightarrow r=3$", "Compute $\\dbinom63 2^3$", "Result: $160$"]));
  q.push(mc("hard", "Find the coefficient of $x^3$ in $(2x-3)^5$.", ["-1080", "1080", "-720", "720"], 0));
  q.push(mc("hard", "Find the constant term in $(x^2+2/x)^6$.", ["240", "160", "480", "60"], 0));
  q.push(mc("hard", "Use the first 3 binomial terms of $(1.01)^5=(1+0.01)^5$ to approximate to 4 d.p.:", ["1.0510", "1.0500", "1.0520", "1.0505"], 0));
  q.push(ms("hard", "For the constant term in $(x^2+2/x)^6$:", ["general term is $\\dbinom6r(x^2)^{6-r}(2/x)^r$", "exponent of $x$ is $12-3r$", "constant when $r=4$", "constant when $r=3$"], [0, 1, 2]));
  q.push(tf("hard", "The constant term in $(x^2+2/x)^6$ is $240$.", true));
  q.push(fill("hard", "Find the coefficient of $x^3y^2$ in $(x+y)^5$.", ["10"]));
  q.push(num("hard", "Find the coefficient of $x^4$ in $(3x-2)^6$.", 2160, 0));
  q.push(order("hard", "Order the steps to approximate $0.99^6$ using the first 3 binomial terms.", ["Write as $(1-0.01)^6$", "First 3 terms: $1-6(0.01)+15(0.01)^2$", "Compute: $1-0.06+0.0015$", "Result: $\\approx0.9415$"]));
  q.push(match("hard", "Match each binomial expansion feature to its description.", ["general term $T_{r+1}$", "row $n$ sum of Pascal's triangle entries", "coefficient symmetry"], ["$\\dbinom nra^{n-r}b^r$", "$2^n$", "$\\dbinom nr=\\dbinom n{n-r}$"], [0, 1, 2]));
  return q;
}

// ── 1.5 Exponents & Radicals ───────────────
function g15() {
  const q = [];
  q.push(mc("easy", "$a^ma^n$ equals:", ["$a^{m+n}$", "$a^{mn}$", "$a^{m-n}$", "$a^{m/n}$"], 0));
  q.push(mc("easy", "$a^0$ equals (for $a\\neq0$):", ["1", "0", "$a$", "undefined"], 0));
  q.push(mc("easy", "$a^{-n}$ equals:", ["$1/a^n$", "$-a^n$", "$a^n$", "$-1/a^n$"], 0));
  q.push(mc("easy", "$\\sqrt{50}$ simplifies to:", ["$5\\sqrt2$", "$25\\sqrt2$", "$10\\sqrt5$", "$2\\sqrt5$"], 0));
  q.push(mc("easy", "$a^{1/n}$ equals:", ["$\\sqrt[n]{a}$", "$na$", "$a/n$", "$n^a$"], 0));
  q.push(ms("easy", "True exponent laws:", ["$(a^m)^n=a^{mn}$", "$a^m/a^n=a^{m-n}$", "$a^{m/n}=(\\sqrt[n]a)^m$", "$a^m+a^n=a^{m+n}$"], [0, 1, 2]));
  q.push(tf("easy", "$a^0=1$ for any nonzero $a$.", true));
  q.push(tf("easy", "$\\sqrt{50}=5\\sqrt2$.", true));
  q.push(fill("easy", "Simplify $x^3\\cdot x^4$.", ["x^7"]));
  q.push(num("easy", "Evaluate $16^{1/2}$.", 4, 0));
  q.push(mc("medium", "Simplify $\\dfrac{x^5y^{-2}}{x^{-1}y^3}$.", ["$x^6y^{-5}$", "$x^4y^{-1}$", "$x^6y^{-1}$", "$x^4y^{-5}$"], 0));
  q.push(mc("medium", "Simplify $\\sqrt{18}+\\sqrt{8}$.", ["$5\\sqrt2$", "$4\\sqrt2$", "$\\sqrt{26}$", "$6\\sqrt2$"], 0));
  q.push(mc("medium", "Solve $2^{3x-1}=32$.", ["$x=2$", "$x=3$", "$x=5/3$", "$x=1$"], 0));
  q.push(ms("medium", "True facts about $27^{2/3}$:", ["$27^{2/3}=(\\sqrt[3]{27})^2$", "equals $9$", "$\\sqrt[3]{27}=3$", "equals $18$"], [0, 1, 2]));
  q.push(tf("medium", "$27^{2/3}=9$.", true));
  q.push(fill("medium", "Rationalize $\\dfrac{3}{\\sqrt5}$ (as $\\sqrt5$ over an integer, e.g. $a\\sqrt5/b$).", ["3sqrt5/5"]));
  q.push(num("medium", "Solve $9^{x+1}=81$ for $x$.", 1, 0));
  q.push(num("medium", "Evaluate $32^{3/5}$.", 8, 0));
  q.push(match("medium", "Match each expression to its simplified value.", ["$16^{3/4}$", "$8^{2/3}$", "$25^{1/2}$"], ["$8$", "$4$", "$5$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to solve $9^{x-1}=27^{2x}$.", ["Write with base 3: $3^{2x-2}=3^{6x}$", "Equate exponents: $2x-2=6x$", "Solve: $-2=4x$", "Result: $x=-1/2$"]));
  q.push(mc("hard", "Rationalize $\\dfrac{6}{\\sqrt7-2}$.", ["$2\\sqrt7+4$", "$2\\sqrt7-4$", "$6\\sqrt7+2$", "$\\sqrt7+2$"], 0));
  q.push(mc("hard", "Solve $2^{2x}-5(2^x)+4=0$ for the larger solution $x$.", ["2", "1", "4", "0"], 0));
  q.push(mc("hard", "Simplify $\\left(\\dfrac{27x^9}{8}\\right)^{1/3}$.", ["$\\dfrac{3x^3}{2}$", "$\\dfrac{3x^6}{2}$", "$\\dfrac{9x^3}{2}$", "$\\dfrac{3x^3}{8}$"], 0));
  q.push(ms("hard", "Solving $2^{2x}-5(2^x)+4=0$ (let $u=2^x$):", ["factors as $(u-1)(u-4)=0$", "$u=1\\Rightarrow x=0$", "$u=4\\Rightarrow x=2$", "only one solution exists"], [0, 1, 2]));
  q.push(tf("hard", "Solving $2^{2x}-5(2^x)+4=0$ gives $x=0$ or $x=2$.", true));
  q.push(fill("hard", "Solve $3^{2x+1}=3^{x+7}$ for $x$.", ["6"]));
  q.push(num("hard", "Simplify $\\sqrt{75}-\\sqrt{27}+\\sqrt{12}$, expressing as $k\\sqrt3$; find $k$.", 4, 0));
  q.push(order("hard", "Order the steps to rationalize $\\dfrac{4}{\\sqrt6+\\sqrt2}$.", ["Multiply by the conjugate $\\sqrt6-\\sqrt2$", "Denominator: $6-2=4$", "Numerator: $4(\\sqrt6-\\sqrt2)$", "Simplify: $\\sqrt6-\\sqrt2$"]));
  q.push(match("hard", "Match each equation type to its solving strategy.", ["$2^{3x}=16$", "$2^{2x}-6(2^x)+8=0$", "$\\sqrt{x+2}=5$"], ["matching bases", "substitution into a quadratic", "isolate and square"], [0, 1, 2]));
  return q;
}

// ── 1.6 Logarithms ───────────────
function g16() {
  const q = [];
  q.push(mc("easy", "$\\log_b(x)=y$ means:", ["$b^y=x$", "$y^b=x$", "$b^x=y$", "$x^y=b$"], 0));
  q.push(mc("easy", "$\\log_2(8)$ equals:", ["3", "4", "2", "8"], 0));
  q.push(mc("easy", "$\\log_b(mn)$ equals:", ["$\\log_bm+\\log_bn$", "$\\log_bm-\\log_bn$", "$\\log_bm\\cdot\\log_bn$", "$\\log_b(m)^n$"], 0));
  q.push(mc("easy", "$\\log_b(m^k)$ equals:", ["$k\\log_bm$", "$(\\log_bm)^k$", "$\\log_b(km)$", "$k+\\log_bm$"], 0));
  q.push(mc("easy", "$\\log_5(1)$ equals:", ["0", "1", "5", "undefined"], 0));
  q.push(ms("easy", "True log laws:", ["$\\log_b(mn)=\\log_bm+\\log_bn$", "$\\log_b(m/n)=\\log_bm-\\log_bn$", "$\\log_b(m^k)=k\\log_bm$", "$\\log_b(m+n)=\\log_bm+\\log_bn$"], [0, 1, 2]));
  q.push(tf("easy", "$\\log_b(1)=0$ for any base $b$.", true));
  q.push(tf("easy", "$\\log_b(x)$ is defined for $x\\leq0$.", false));
  q.push(fill("easy", "Evaluate $\\log_3(27)$.", ["3"]));
  q.push(num("easy", "Evaluate $\\log_{10}(1000)$.", 3, 0));
  q.push(mc("medium", "Solve $5^x=40$ (nearest 0.001):", ["2.292", "2.301", "2.150", "2.500"], 0));
  q.push(mc("medium", "Simplify $\\log_2(20)+\\log_2(4)-\\log_2(5)$.", ["4", "5", "16", "3"], 0));
  q.push(mc("medium", "Solve $\\log_2(x)+\\log_2(x-2)=3$ for $x$ (check domain).", ["4", "-2", "2", "6"], 0));
  q.push(ms("medium", "Solving $\\log_2(x)+\\log_2(x-2)=3$:", ["combines to $\\log_2(x(x-2))=3$", "leads to $x^2-2x-8=0$", "$x=-2$ is rejected (domain)", "both $x=4,-2$ are valid"], [0, 1, 2]));
  q.push(tf("medium", "$\\log_2(20)+\\log_2(4)-\\log_2(5)=4$.", true));
  q.push(fill("medium", "Simplify $\\log_5(3)+\\log_5(4)-\\log_5(2)$ as a single log's argument.", ["6"]));
  q.push(num("medium", "An investment is $A=600(1.04)^t$; find (nearest year) when it first exceeds \\$900.", 11, 0));
  q.push(num("medium", "Solve $\\log_4(x)=2.5$ for $x$.", 32, 0.1));
  q.push(match("medium", "Match each logarithmic equation to its solution.", ["$\\log_3(x)=4$", "$\\log_2(x)=5$", "$\\log_5(x)=2$"], ["$81$", "$32$", "$25$"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to solve $\\log_3(x+1)=2$.", ["Rewrite as exponential: $3^2=x+1$", "Compute: $9=x+1$", "Solve: $x=8$", "Check domain: $x+1=9>0$ valid"]));
  q.push(mc("hard", "Solve $\\log_2(x+3)-\\log_2(x-1)=3$ for $x$.", ["11/7", "2", "4", "3/2"], 0));
  q.push(mc("hard", "The Richter scale uses $M=\\log_{10}(I/I_0)$. Find $M$ if intensity is 8000 times $I_0$ (2 d.p.):", ["3.90", "3.80", "4.00", "3.70"], 0));
  q.push(mc("hard", "Solve $2\\ln(x)=\\ln(x+6)+\\ln4$ for $x>0$.", ["$2+2\\sqrt7$", "$4$", "$2\\sqrt7$", "$6$"], 0));
  q.push(ms("hard", "For $\\log_2(x+3)-\\log_2(x-1)=3$:", ["combines to $\\log_2\\!\\left(\\frac{x+3}{x-1}\\right)=3$", "leads to $x+3=8(x-1)$", "$x=11/7$", "$x=1$"], [0, 1, 2]));
  q.push(tf("hard", "For a sound 8000 times as intense as $I_0$, $M\\approx3.90$.", true));
  q.push(fill("hard", "Solve $\\log_2(x)+\\log_2(x-6)=4$ for the valid $x$.", ["8"]));
  q.push(num("hard", "An investment $A=1000(1.06)^t$; find (nearest year) when it first exceeds \\$2500 (nearest year).", 16, 0));
  q.push(order("hard", "Order the steps to solve $\\log_3(x+2)-\\log_3(x-1)=2$.", ["Combine: $\\log_3\\!\\left(\\frac{x+2}{x-1}\\right)=2$", "Rewrite: $\\frac{x+2}{x-1}=9$", "Solve: $x+2=9x-9$", "Result: $x=11/8$"]));
  q.push(match("hard", "Match each logarithmic scenario to its key technique.", ["solving $\\log$ equation with two logs", "solving $b^x=k$ for unmatched bases", "domain-restricted log equation"], ["combine via log laws", "take $\\ln$/$\\log$ of both sides", "check solutions against $\\log$'s domain"], [0, 1, 2]));
  return q;
}

// ── 1.7 Mathematical Proof ───────────────
function g17() {
  const q = [];
  q.push(mc("easy", "A single case where a claim fails is called a:", ["counterexample", "proof", "theorem", "identity"], 0));
  q.push(mc("easy", "Proof by exhaustion requires:", ["checking every case, when finitely many", "checking one case only", "an infinite number of cases", "no cases at all"], 0));
  q.push(mc("easy", "To disprove a claim, you need:", ["one counterexample", "a full direct proof", "exhaustion over infinite cases", "nothing"], 0));
  q.push(mc("easy", "A direct proof:", ["reasons forward from known facts to the conclusion", "only checks specific numeric examples", "always uses a counterexample", "is only valid for even numbers"], 0));
  q.push(mc("easy", "The sum of two even integers is always:", ["even", "odd", "prime", "negative"], 0));
  q.push(ms("easy", "True facts about proof:", ["a counterexample disproves a general claim", "exhaustion needs finitely many cases", "checking a few examples proves a general claim", "a direct proof works for every case in its scope"], [0, 1, 3]));
  q.push(tf("easy", "One counterexample is enough to disprove a general claim.", true));
  q.push(tf("easy", "Checking a claim for $n=1,2,3$ proves it true for every $n$.", false));
  q.push(fill("easy", "The sum of two odd integers is always ___.", ["even"]));
  q.push(num("easy", "Find a counterexample $n$ (positive integer) to disprove '$n^2>n$ for all $n$'.", 1, 0));
  q.push(mc("medium", "Prove: the sum of three consecutive integers is divisible by 3. The key algebraic step is:", ["$n+(n+1)+(n+2)=3n+3=3(n+1)$", "$n+(n+1)+(n+2)=3n$", "$n\\cdot(n+1)\\cdot(n+2)$", "$3n+2$"], 0));
  q.push(mc("medium", "Disprove '$n^2-n+11$ is prime for every $n$' using:", ["$n=11$, giving $11^2$", "$n=1$", "$n=2$", "no counterexample exists"], 0));
  q.push(mc("medium", "Prove the square of an even number is divisible by 4: key step is writing even as:", ["$2k$, so $(2k)^2=4k^2$", "$k+1$", "$2k+1$", "$k^2$"], 0));
  q.push(ms("medium", "For disproving '$n^2-n+11$ is always prime':", ["$n=11$ gives $121=11^2$, not prime", "this is a valid counterexample", "the claim is disproved", "the claim is proven true"], [0, 1, 2]));
  q.push(tf("medium", "$n=11$ disproves '$n^2-n+11$ is prime for every positive integer $n$'.", true));
  q.push(fill("medium", "Prove $n(n+1)$ is always even: since $n,n+1$ are consecutive, one is always ___.", ["even"]));
  q.push(num("medium", "Find a counterexample $x$ (a simple decimal) to disprove '$x^2\\geq x$ for all real $x$'.", 0.5, 0.4));
  q.push(num("medium", "Disprove '$n^2+n+1$ is always odd' by testing... actually prove it's always true; evaluate $n^2+n+1$ at $n=3$ to confirm odd.", 13, 0));
  q.push(match("medium", "Match each proof type to its description.", ["direct proof", "proof by exhaustion", "disproof by counterexample"], ["reason forward from definitions", "check every finite case", "find one failing case"], [0, 1, 2]));
  q.push(order("medium", "Order the steps to prove the product of two consecutive integers is always even.", ["Let integers be $n$ and $n+1$", "One of any two consecutive integers is even", "So their product includes an even factor", "Therefore the product is always even"]));
  q.push(mc("hard", "Prove $n^3-n$ is divisible by 6: the key factoring step is:", ["$n(n-1)(n+1)$, three consecutive integers", "$n^2(n-1)$", "$(n-1)^3$", "$6n$"], 0));
  q.push(mc("hard", "Prove: if $n$ is odd, $n^2-1$ is divisible by 8. Writing $n=2k+1$, $n^2-1$ simplifies to:", ["$4k(k+1)$", "$4k^2$", "$2k^2+2k$", "$8k$"], 0));
  q.push(mc("hard", "Disprove 'for every real $x$, $x^3\\geq x^2$' using:", ["$x=-1$: $-1\\geq1$ is false", "$x=2$", "$x=0$", "$x=1$"], 0));
  q.push(ms("hard", "Proving $n^3-n$ is divisible by 6:", ["factor as $n(n-1)(n+1)$", "among 3 consecutive integers, one is divisible by 3", "at least one of them is even", "the product is therefore divisible by 6"], [0, 1, 2, 3]));
  q.push(tf("hard", "$n(n-1)(n+1)$ is always divisible by 6, for every integer $n$.", true));
  q.push(fill("hard", "Prove by exhaustion that every integer from 4 to 6 is prime or a product of primes; identify the one that is NOT prime.", ["4"]));
  q.push(num("hard", "Evaluate $n^3-n$ at $n=5$ to confirm it's divisible by 6 (give the value divided by 6).", 20, 0));
  q.push(order("hard", "Order the steps to prove that if $n$ is odd, $n^2-1$ is divisible by 8.", ["Write $n=2k+1$", "Expand $n^2-1=(2k+1)^2-1=4k^2+4k$", "Factor: $4k(k+1)$", "$k(k+1)$ is always even, so $4k(k+1)$ is divisible by 8"]));
  q.push(match("hard", "Match each claim to the correct verdict.", ["'sum of 2 consecutive ints is odd'", "'$n^2-n+11$ always prime'", "'$x^2\\geq x$ for all real $x$'"], ["true (provable)", "false ($n=11$)", "false ($x=0.5$)"], [0, 1, 2]));
  return q;
}

export default [
  { code: "1.1", gen: g11 },
  { code: "1.2", gen: g12 },
  { code: "1.3", gen: g13 },
  { code: "1.4", gen: g14 },
  { code: "1.5", gen: g15 },
  { code: "1.6", gen: g16 },
  { code: "1.7", gen: g17 },
];
