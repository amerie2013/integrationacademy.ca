// IB AA SL worksheets — Unit 1: Number & Algebra. Original problems, written
// fresh for the worksheet format (not reused from the lesson content).
// 9 worked examples + 13 practice questions per worksheet, matching the
// established MCV4U density.
const r = String.raw;
const U = "1: Number and Algebra";

export default [
  {
    code: "1.1", unit: U, title: "Arithmetic Sequences & Series",
    intro: r`An arithmetic sequence has a constant common difference $d$ between consecutive terms.`,
    ideas: [
      r`General term: $u_n=u_1+(n-1)d$.`,
      r`Sum of the first $n$ terms: $S_n=\dfrac n2\big(2u_1+(n-1)d\big)=\dfrac n2(u_1+u_n)$.`,
      r`$d>0$ increasing, $d<0$ decreasing, $d=0$ constant.`,
    ],
    learn: [
      ["Two equivalent sum formulas", r`$S_n=\dfrac n2(2u_1+(n-1)d)$ uses only $u_1$ and $d$; $S_n=\dfrac n2(u_1+u_n)$ is faster once you already know the last term $u_n$.`],
      ["Finding $u_1,d$ from two terms", r`Two given terms give two equations in $u_1$ and $d$ --- subtract them to eliminate $u_1$ and solve for $d$ first.`],
    ],
    examples: [
      { t: "Find a term", body: r`Find $u_{20}$ for the sequence $8,13,18,\dots$\soln
$u_1=8$, $d=5$. $u_{20}=8+(19)(5)=8+95$.\\[3pt]
\textbf{Conclusion:} $u_{20}=103$.` },
      { t: "Solve for the first term and common difference", body: r`An arithmetic sequence has $u_6=23$ and $u_{11}=48$. Find $u_1$ and $d$.\soln
\textbf{Step 1:} Subtract: $u_{11}-u_6=5d=48-23=25\Rightarrow d=5$.\\[3pt]
\textbf{Step 2:} $u_6=u_1+5d=23\Rightarrow u_1+25=23\Rightarrow u_1=-2$.\\[3pt]
\textbf{Conclusion:} $u_1=-2$, $d=5$.` },
      { t: "Sum of a series", body: r`Find $S_{25}$ for $7,11,15,\dots$\soln
$u_1=7$, $d=4$, $n=25$. $S_{25}=\dfrac{25}{2}\big(2(7)+24(4)\big)=\dfrac{25}{2}(14+96)$.\\[3pt]
\textbf{Conclusion:} $S_{25}=\dfrac{25}{2}(110)=1375$.` },
      { t: "Application --- stacking", body: r`Logs are stacked with 22 in the bottom row, each row above having 2 fewer, down to 4 in the top row. Find the total number of logs.\soln
\textbf{Step 1:} $u_1=22$, $d=-2$, last term $u_n=4$.\\[3pt]
\textbf{Step 2:} Find $n$: $4=22+(n-1)(-2)\Rightarrow -18=-2(n-1)\Rightarrow n=10$.\\[3pt]
\textbf{Step 3:} $S_{10}=\dfrac{10}{2}(22+4)=5(26)$.\\[3pt]
\textbf{Conclusion:} $130$ logs.` },
      { t: "Sum from first and last term only", body: r`An arithmetic sequence has $u_1=5$, $d=6$, and last term $u_n=95$. Find $S_n$.\soln
\textbf{Step 1:} Find $n$: $95=5+6(n-1)\Rightarrow 90=6(n-1)\Rightarrow n=16$.\\[3pt]
\textbf{Step 2:} $S_{16}=\dfrac{16}{2}(5+95)=8(100)$.\\[3pt]
\textbf{Conclusion:} $S_{16}=800$.` },
      { t: "Application --- rising salary", body: r`A worker's salary starts at \$38{,}000 and rises by \$1400 each year. Find the total earned over the first 9 years.\soln
$u_1=38000$, $d=1400$, $n=9$. $S_9=\dfrac92\big(2(38000)+8(1400)\big)=\dfrac92(76000+11200)$.\\[3pt]
\textbf{Conclusion:} $S_9=\dfrac92(87200)=\$392{,}400$.` },
      { t: "Solve for $n$ from a sum equation", body: r`An arithmetic sequence has $u_1=2$, $d=6$. Find $n$ such that $S_n=184$.\soln
\textbf{Step 1:} $S_n=\dfrac n2\big(4+6(n-1)\big)=n(3n-1)=3n^2-n$.\\[3pt]
\textbf{Step 2:} $3n^2-n-184=0\Rightarrow(n-8)(3n+23)=0$.\\[3pt]
\textbf{Conclusion:} $n=8$ (rejecting the negative root). ✓` },
      { t: "Two sequences meeting", body: r`Sequence A: $u_1=10$, $d=3$. Sequence B: $u_1=50$, $d=-2$. Find the term number where both sequences give the same value.\soln
\textbf{Step 1:} Set general terms equal: $10+3(n-1)=50-2(n-1)$.\\[3pt]
\textbf{Step 2:} $3n+7=52-2n\Rightarrow5n=45\Rightarrow n=9$.\\[3pt]
\textbf{Conclusion:} at $n=9$, both sequences equal $34$. ✓` },
      { t: "Application --- accumulated temperature drop", body: r`A region's daily low starts at $20°$C on day 1 and drops by $1.5°$C each day. Find the sum of all daily lows over the first 14 days.\soln
$u_1=20$, $d=-1.5$, $n=14$. $S_{14}=\dfrac{14}2\big(2(20)+13(-1.5)\big)=7(40-19.5)$.\\[3pt]
\textbf{Conclusion:} $S_{14}=7(20.5)=143.5°$C (sum of daily lows). ✓` },
    ],
    questions: [
      { ask: r`Find $u_{15}$ for $6,10,14,\dots$` },
      { ask: r`Find $u_{30}$ for $50,45,40,\dots$` },
      { ask: r`An arithmetic sequence has $u_4=18$ and $u_9=38$. Find $u_1$ and $d$.` },
      { ask: r`Find $S_{18}$ for $2,9,16,\dots$` },
      { ask: r`Find $S_{40}$ for $100,95,90,\dots$` },
      { ask: r`A theatre has 18 seats in the first row, increasing by 3 seats per row for 12 rows. Find the total seating capacity.` },
      { ask: r`Find the number of terms in the sequence $5,9,13,\dots,161$.` },
      { ask: r`An arithmetic sequence has $u_1=3$, $d=5$, and last term $u_n=98$. Find $S_n$.` },
      { ask: r`A stadium's rows increase by 4 seats each row, starting at 30 in row 1, for 20 rows. Find the total capacity.` },
      { ask: r`How many terms of $3,7,11,\dots$ are needed for the sum to first exceed 200?`, challenge: true, ws: "3.2cm" },
      { ask: r`An arithmetic sequence has $u_1=4$ and $S_{10}=205$. Find $d$.`, challenge: true, ws: "3.2cm" },
      { ask: r`An arithmetic sequence has $u_1=5$, $d=8$. Find $n$ such that $S_n=612$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Sequence C: $u_1=100$, $d=-7$. Sequence D: $u_1=4$, $d=9$. Find the term number and value where they meet.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$u_{15}=62$`, r`$u_{30}=-95$`, r`$d=4$, $u_1=6$`, r`$S_{18}=1107$`, r`$S_{40}=-3700$`,
      r`$12$ rows: $S_{12}=\tfrac{12}{2}(2(18)+11(3))=6(69)=414$ seats`,
      r`$5+(n-1)4=161\Rightarrow n=40$ terms`,
      r`$n$: $98=3+5(n-1)\Rightarrow n=20$; $S_{20}=\tfrac{20}2(3+98)=10(101)=1010$`,
      r`$S_{20}=\tfrac{20}2(60+19(4))=10(136)=1360$ seats`,
      r`$S_n=\tfrac n2(6+4(n-1))>200\Rightarrow 2n^2+4n-200>0\Rightarrow n^2+2n-100>0$; testing, $n=10$ gives $S_{10}=210>200$ (and $n=9$ gives $171<200$), so $n=10$`,
      r`$S_{10}=\tfrac{10}{2}(8+9d)=205\Rightarrow 40+45d=205\Rightarrow d=\tfrac{165}{45}=\tfrac{11}{3}$`,
      r`$S_n=n(4n+3)-n... $ precisely $4n^2+3n=612\Rightarrow(n-12)(4n+51)=0\Rightarrow n=12$`,
      r`$100-7(n-1)=4+9(n-1)\Rightarrow107-7n=9n-5\Rightarrow112=16n\Rightarrow n=7$; value $=100-7(6)=58$`,
    ],
  },
  {
    code: "1.2", unit: U, title: "Geometric Sequences & Series",
    intro: r`A geometric sequence has a constant common ratio $r$ between consecutive terms.`,
    ideas: [
      r`General term: $u_n=u_1r^{n-1}$.`,
      r`Sum of the first $n$ terms: $S_n=\dfrac{u_1(r^n-1)}{r-1}$, $r\neq1$.`,
      r`Sum to infinity (only when $|r|<1$): $S_\infty=\dfrac{u_1}{1-r}$.`,
    ],
    learn: [
      ["When does $S_\\infty$ exist?", r`Only when $-1<r<1$ --- otherwise the terms don't shrink toward 0 and the sum grows without bound.`],
      ["Finding $r$ from two terms", r`Divide two given terms to eliminate $u_1$: $\dfrac{u_m}{u_n}=r^{m-n}$, then solve for $r$.`],
    ],
    examples: [
      { t: "Find a term", body: r`Find $u_9$ for $3,6,12,\dots$\soln
$u_1=3$, $r=2$. $u_9=3(2)^8=3(256)$.\\[3pt]\textbf{Conclusion:} $u_9=768$.` },
      { t: "Find the common ratio from two terms", body: r`A geometric sequence has $u_1=500$ and $u_6=15.625$. Find $r$ (assume $r>0$).\soln
$u_6=u_1r^5\Rightarrow15.625=500r^5\Rightarrow r^5=0.03125=\tfrac{1}{32}$.\\[3pt]\textbf{Conclusion:} $r=\tfrac12$.` },
      { t: "Sum to infinity", body: r`Find $S_\infty$ for $40,-20,10,-5,\dots$\soln
$u_1=40$, $r=-\tfrac12$ (valid, since $|r|<1$). $S_\infty=\dfrac{40}{1-(-1/2)}=\dfrac{40}{3/2}$.\\[3pt]\textbf{Conclusion:} $S_\infty=\dfrac{80}{3}$.` },
      { t: "Application --- depreciation", body: r`A machine worth \$18{,}000 loses 20\% of its value each year. Find its value after 5 years, and the total depreciation over that time.\soln
\textbf{Step 1:} Value follows $u_n=18000(0.8)^n$; after 5 years, $u_5=18000(0.8)^5\approx5898.24$.\\[3pt]
\textbf{Step 2:} Total depreciation $=18000-5898.24$.\\[3pt]
\textbf{Conclusion:} value $\approx\$5898.24$; depreciation $\approx\$12{,}101.76$.` },
      { t: "Solve for $u_1$ given $S_\infty$", body: r`A geometric series has $r=0.4$ and $S_\infty=60$. Find $u_1$.\soln
$60=\dfrac{u_1}{1-0.4}=\dfrac{u_1}{0.6}$.\\[3pt]\textbf{Conclusion:} $u_1=36$.` },
      { t: "Application --- population growth", body: r`A town of 5000 grows by 3\% each year. Find its population after 8 years (nearest whole number).\soln
$u_9=5000(1.03)^8$ (year 8 growth applied 8 times from the start).\\[3pt]\textbf{Conclusion:} population $\approx6333$.` },
      { t: "Sum of a finite geometric series with negative $r$", body: r`Find $S_7$ for $2,-6,18,-54,\dots$\soln
$u_1=2$, $r=-3$. $S_7=\dfrac{2\big((-3)^7-1\big)}{-3-1}=\dfrac{2(-2187-1)}{-4}$.\\[3pt]\textbf{Conclusion:} $S_7=\dfrac{2(-2188)}{-4}=1094$.` },
      { t: "Solve for $n$ given a term value", body: r`A geometric sequence has $u_1=5$, $r=2$. Find $n$ such that $u_n=1280$.\soln
$5(2)^{n-1}=1280\Rightarrow2^{n-1}=256=2^8$.\\[3pt]\textbf{Conclusion:} $n-1=8\Rightarrow n=9$. ✓` },
      { t: "Application --- doubling investment", body: r`An investment doubles every 6 years. If it starts at \$2000, express its value after $t$ periods of 6 years as a geometric sequence, and find its value after 4 periods (24 years).\soln
\textbf{Step 1:} $u_1=2000$, $r=2$ per period. $u_5=2000(2)^4$ (value after 4 periods is the 5th term, counting the start as term 1).\\[3pt]
\textbf{Conclusion:} $u_5=2000(16)=\$32{,}000$. ✓` },
    ],
    questions: [
      { ask: r`Find $u_7$ for $5,10,20,\dots$` },
      { ask: r`A geometric sequence has $u_1=81$ and $u_5=1$. Find $r$ (assume $r>0$).` },
      { ask: r`Find $S_{10}$ for $2,6,18,\dots$` },
      { ask: r`Find $S_\infty$ for $60,12,2.4,\dots$` },
      { ask: r`Find $S_\infty$ for $16,-8,4,-2,\dots$` },
      { ask: r`A ball dropped from 8 m rebounds to 60\% of its previous height each bounce. Find the total vertical distance it travels (down and up), assuming it bounces forever.` },
      { ask: r`A savings account of \$2000 grows by 4\% each year. Find its value after 10 years.` },
      { ask: r`A geometric series has $r=0.25$ and $S_\infty=80$. Find $u_1$.` },
      { ask: r`Find $S_6$ for $3,-9,27,-81,\dots$` },
      { ask: r`A geometric sequence has $u_1=4$, $r=3$. Find $n$ such that $u_n=972$.` },
      { ask: r`A geometric sequence has $u_2=12$ and $u_5=324$. Find $u_1$ and $r$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Find $S_\infty$ in terms of $k$ for the sequence $k,\ \tfrac k3,\ \tfrac{k}{9},\dots$ (assume $k>0$), then find $k$ if $S_\infty=45$.`, challenge: true, ws: "3.4cm" },
      { ask: r`A population of 8000 grows by 2.5\% each year; find its population after 6 years (nearest whole number).`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$u_7=320$`, r`$r^4=\tfrac1{81}\Rightarrow r=\tfrac13$`, r`$S_{10}=\tfrac{2(3^{10}-1)}{2}=59048$`,
      r`$S_\infty=\tfrac{60}{1-0.2}=75$`, r`$S_\infty=\tfrac{16}{1-(-1/2)}=\tfrac{32}{3}$`,
      r`down 8, then up+down $2(8)(0.6)+2(8)(0.6)^2+\dots=2(8)\cdot\tfrac{0.6}{1-0.6}=2(8)(1.5)=24$; total $=8+24=32$ m`,
      r`$u_{10}=2000(1.04)^9\approx2846.30$`,
      r`$80=\dfrac{u_1}{0.75}\Rightarrow u_1=60$`,
      r`$S_6=\tfrac{3(3^6-1)}{-4}=\tfrac{3(728)}{-4}=-546$`,
      r`$4(3)^{n-1}=972\Rightarrow3^{n-1}=243=3^5\Rightarrow n=6$`,
      r`$r^3=\tfrac{324}{12}=27\Rightarrow r=3$; $u_1=12/3=4$`,
      r`$S_\infty=\dfrac{k}{1-1/3}=\dfrac{3k}{2}$; set $=45\Rightarrow k=30$`,
      r`$u_7=8000(1.025)^6\approx9277$`,
    ],
  },
  {
    code: "1.3", unit: U, title: "Sigma Notation",
    intro: r`Sigma notation $\displaystyle\sum_{n=1}^{N}f(n)$ compactly writes the sum of $f(n)$ from $n=1$ to $n=N$.`,
    ideas: [
      r`$\displaystyle\sum_{n=a}^{b}f(n)$: substitute each integer $n$ from $a$ to $b$ into $f(n)$ and add.`,
      r`If $f(n)$ is linear in $n$, the sum is an arithmetic series; if $f(n)$ involves $r^n$, it's geometric.`,
      r`Splitting or shifting the index (e.g.\ starting at $n=0$ vs $n=1$) can change the formula without changing the sum's value.`,
    ],
    examples: [
      { t: "Evaluate directly", body: r`Evaluate $\displaystyle\sum_{n=1}^{5}(3n-2)$.\soln
Terms: $1,4,7,10,13$.\\[3pt]\textbf{Conclusion:} sum $=35$.` },
      { t: "Geometric sigma sum", body: r`Evaluate $\displaystyle\sum_{n=1}^{6}4(2)^{n-1}$.\soln
This is a geometric series with $u_1=4$, $r=2$, $n=6$ terms: $S_6=\dfrac{4(2^6-1)}{2-1}=4(63)$.\\[3pt]\textbf{Conclusion:} $252$.` },
      { t: "Write a series in sigma form", body: r`Write $8+13+18+\cdots+68$ in sigma notation and evaluate it.\soln
\textbf{Step 1:} Arithmetic, $u_1=8$, $d=5$, general term $u_n=8+5(n-1)=5n+3$.\\[3pt]
\textbf{Step 2:} Find $n$: $5n+3=68\Rightarrow n=13$. So $\displaystyle\sum_{n=1}^{13}(5n+3)$.\\[3pt]
\textbf{Step 3:} $S_{13}=\dfrac{13}{2}(8+68)=\dfrac{13}{2}(76)$.\\[3pt]\textbf{Conclusion:} sigma form $\sum_{n=1}^{13}(5n+3)$, value $=494$.` },
      { t: "Application --- total savings", body: r`A savings plan deposits $D_n=25+3n$ dollars in month $n$, for $n=1$ to $12$. Find the total deposited over the year.\soln
$\displaystyle\sum_{n=1}^{12}(25+3n)=12(25)+3\sum_{n=1}^{12}n=300+3\left(\dfrac{12(13)}{2}\right)=300+3(78)$.\\[3pt]\textbf{Conclusion:} total $=\$534$.` },
      { t: "Splitting a sum into known pieces", body: r`Evaluate $\displaystyle\sum_{n=1}^{10}(4n^2-3n)$ using $\sum n=\tfrac{n(n+1)}2$ and $\sum n^2=\tfrac{n(n+1)(2n+1)}6$.\soln
$\sum_{n=1}^{10}n^2=\tfrac{10(11)(21)}6=385$; $\sum_{n=1}^{10}n=55$.\\[3pt]\textbf{Conclusion:} $4(385)-3(55)=1540-165=1375$.` },
      { t: "Shifted-index geometric sum", body: r`Evaluate $\displaystyle\sum_{n=0}^{5}3(2)^{n}$.\soln
This is geometric with $u_1=3$ (at $n=0$), $r=2$, and $6$ terms (from $n=0$ to $5$): $S_6=\dfrac{3(2^6-1)}{1}$.\\[3pt]\textbf{Conclusion:} $S_6=3(63)=189$.` },
      { t: "Application --- attendance decline", body: r`A festival's attendance is modelled by $A_n=2000-40n$ for day $n=1$ to $10$. Find the total attendance over the 10 days.\soln
$\displaystyle\sum_{n=1}^{10}(2000-40n)=10(2000)-40\sum_{n=1}^{10}n=20000-40(55)$.\\[3pt]\textbf{Conclusion:} total $=20000-2200=17800$ attendees.` },
      { t: "Find an unknown upper limit", body: r`Find $N$ such that $\displaystyle\sum_{n=1}^{N}(2n-1)=144$.\soln
\textbf{Step 1:} This is arithmetic ($u_1=1,d=2$): $S_N=\dfrac N2(2+2(N-1))=N^2$.\\[3pt]
\textbf{Conclusion:} $N^2=144\Rightarrow N=12$. ✓` },
      { t: "Sigma sum requiring factoring first", body: r`Evaluate $\displaystyle\sum_{n=1}^{5}n(n+1)$ by expanding first.\soln
$n(n+1)=n^2+n$, so the sum is $\sum n^2+\sum n=\tfrac{5(6)(11)}6+\tfrac{5(6)}2=55+15$.\\[3pt]\textbf{Conclusion:} $70$.` },
    ],
    questions: [
      { ask: r`Evaluate $\displaystyle\sum_{n=1}^{7}(2n+1)$.` },
      { ask: r`Evaluate $\displaystyle\sum_{n=1}^{5}5(3)^{n-1}$.` },
      { ask: r`Evaluate $\displaystyle\sum_{k=3}^{6}(k^2-1)$.` },
      { ask: r`Write $4+9+14+\cdots+64$ in sigma notation and evaluate it.` },
      { ask: r`Write $2+6+18+\cdots+486$ in sigma notation and evaluate it.` },
      { ask: r`Evaluate $\displaystyle\sum_{n=0}^{4}7(0.5)^{n}$.` },
      { ask: r`A theatre adds $D_n=40+2n$ extra dollars in ticket sales on day $n$ of a promotion, for $n=1$ to $10$. Find the total extra revenue.` },
      { ask: r`Evaluate $\displaystyle\sum_{n=1}^{8}n^2$ using $\sum n^2=\tfrac{n(n+1)(2n+1)}6$.` },
      { ask: r`Evaluate $\displaystyle\sum_{n=1}^{6}n(n-1)$ by expanding first.` },
      { ask: r`Find $N$ such that $\displaystyle\sum_{n=1}^{N}(2n-1)=225$.` },
      { ask: r`Show that $\displaystyle\sum_{n=1}^{5}(2n+3)$ and $\displaystyle\sum_{n=0}^{4}(2n+5)$ give the same total, and explain why.`, challenge: true, ws: "3.2cm" },
      { ask: r`Evaluate $\displaystyle\sum_{n=1}^{12}(3n^2-2n)$ using the standard sum formulas.`, challenge: true, ws: "3.4cm" },
      { ask: r`A model predicts sales of $S_n=500-15n$ units in week $n$, for $n=1$ to $15$. Find total sales over the 15 weeks.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`terms $3,5,\dots,15$: sum $=63$`, r`$S_5=\tfrac{5(3^5-1)}{2}=605$`, r`$8+15+24+35=82$`,
      r`$u_n=5n-1$, $n=13$; $\sum_{n=1}^{13}(5n-1)$, $S_{13}=\tfrac{13}{2}(4+64)=442$`,
      r`$u_n=2(3)^{n-1}$, $n=6$; $\sum_{n=1}^{6}2(3)^{n-1}$, $S_6=\tfrac{2(3^6-1)}{2}=728$`,
      r`$S=\tfrac{7(1-0.5^5)}{1-0.5}=13.5625$`,
      r`$\sum_{n=1}^{10}(40+2n)=400+2(55)=510$`,
      r`$\tfrac{8(9)(17)}6=204$`,
      r`$\sum n^2-\sum n=\tfrac{6(7)(13)}6-\tfrac{6(7)}2=91-21=70$`,
      r`$N^2=225\Rightarrow N=15$`,
      r`Both give $5+7+9+11+13=45$ --- shifting the index start from 1 to 0 while adjusting the formula's constant leaves every actual term unchanged`,
      r`$3\sum n^2-2\sum n=3\left(\tfrac{12(13)(25)}6\right)-2\left(\tfrac{12(13)}2\right)=3(650)-2(78)=1950-156=1794$`,
      r`$15(500)-15\sum_{n=1}^{15}n=7500-15(120)=7500-1800=5700$ units`,
    ],
  },
  {
    code: "1.4", unit: U, title: "The Binomial Theorem",
    intro: r`The Binomial Theorem expands $(a+b)^n$ without multiplying it out term by term.`,
    ideas: [
      r`$(a+b)^n=\displaystyle\sum_{r=0}^{n}\binom nr a^{n-r}b^r$.`,
      r`General term: $T_{r+1}=\dbinom nr a^{n-r}b^r$.`,
      r`$\dbinom nr=\dfrac{n!}{r!(n-r)!}$ --- Pascal's triangle row $n$.`,
    ],
    examples: [
      { t: "Full expansion", body: r`Expand $(x+2)^4$ fully.\soln
$\displaystyle\sum_{r=0}^{4}\binom4r x^{4-r}2^r=x^4+4x^3(2)+6x^2(4)+4x(8)+16$.\\[3pt]\textbf{Conclusion:} $x^4+8x^3+24x^2+32x+16$.` },
      { t: "One coefficient", body: r`Find the coefficient of $x^5$ in the expansion of $(x+3)^8$.\soln
$T_{r+1}=\binom8r x^{8-r}3^r$; need $8-r=5\Rightarrow r=3$. $\binom83 3^3=56(27)$.\\[3pt]\textbf{Conclusion:} coefficient $=1512$.` },
      { t: "Constant term", body: r`Find the constant term in the expansion of $\left(x^2+\dfrac{2}{x}\right)^6$.\soln
$T_{r+1}=\binom6r (x^2)^{6-r}\left(\dfrac2x\right)^r=\binom6r 2^r x^{12-3r}$; need $12-3r=0\Rightarrow r=4$. $\binom64 2^4=15(16)$.\\[3pt]\textbf{Conclusion:} constant term $=240$.` },
      { t: "Approximation", body: r`Use the first three terms of the binomial expansion of $(1+0.01)^5$ to approximate $1.01^5$ to 4 decimal places.\soln
$(1+0.01)^5\approx1+5(0.01)+10(0.01)^2=1+0.05+0.001$.\\[3pt]\textbf{Conclusion:} $1.01^5\approx1.0510$.` },
      { t: "Sum of coefficients", body: r`Find the sum of all coefficients in the expansion of $(2x-1)^5$ (hint: substitute $x=1$).\soln
Substituting $x=1$ gives the sum of all coefficients directly: $(2(1)-1)^5=1^5$.\\[3pt]\textbf{Conclusion:} sum of coefficients $=1$.` },
      { t: "Find $n$ from a given coefficient", body: r`The coefficient of $x^2$ in the expansion of $(1+x)^n$ is $28$. Find $n$.\soln
Coefficient of $x^2$ is $\dbinom n2=\dfrac{n(n-1)}2=28\Rightarrow n(n-1)=56\Rightarrow n^2-n-56=0\Rightarrow(n-8)(n+7)=0$.\\[3pt]\textbf{Conclusion:} $n=8$ (rejecting the negative root). ✓` },
      { t: "Two-variable coefficient", body: r`Find the coefficient of $x^4y^3$ in the expansion of $(x+2y)^7$.\soln
$T_{r+1}=\binom7r x^{7-r}(2y)^r$; need $r=3$: $\binom73 2^3=35(8)$.\\[3pt]\textbf{Conclusion:} coefficient $=280$.` },
      { t: "Middle term of an expansion", body: r`Find the middle term in the expansion of $(x+3)^6$ (the term where $r=3$, since there are 7 terms total).\soln
$T_4=\binom63 x^3 3^3=20x^3(27)$.\\[3pt]\textbf{Conclusion:} middle term $=540x^3$.` },
      { t: "Approximation with a negative term", body: r`Use the first three terms of $(1-0.01)^7$ to approximate $0.99^7$ to 4 decimal places.\soln
$(1-0.01)^7\approx1-7(0.01)+21(0.01)^2=1-0.07+0.0021$.\\[3pt]\textbf{Conclusion:} $0.99^7\approx0.9321$.` },
    ],
    questions: [
      { ask: r`Expand $(x+1)^5$ fully.` },
      { ask: r`Expand $(2x-1)^4$ fully.` },
      { ask: r`Find the coefficient of $x^4$ in the expansion of $(x+2)^7$.` },
      { ask: r`Find the coefficient of $x^3$ in the expansion of $(3x-1)^6$.` },
      { ask: r`Find the constant term in the expansion of $\left(x+\dfrac{1}{x}\right)^8$.` },
      { ask: r`Find the term containing $x^6$ in the expansion of $(2x-3)^9$.` },
      { ask: r`Use the first three binomial terms of $(1-0.02)^6$ to approximate $0.98^6$ to 4 decimal places.` },
      { ask: r`Find the sum of all coefficients in the expansion of $(3x-2)^4$ (substitute $x=1$).` },
      { ask: r`Find the coefficient of $x^5y^2$ in the expansion of $(x+y)^7$.` },
      { ask: r`Find the middle term in the expansion of $(2x-1)^6$.` },
      { ask: r`Find the coefficient of $x^3y^4$ in the expansion of $(2x+y)^7$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Find the value of $n$ if the coefficient of $x^2$ in the expansion of $(1+x)^n$ is $45$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Use the first three binomial terms of $(1+0.005)^{10}$ to approximate $1.005^{10}$ to 5 decimal places.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$x^5+5x^4+10x^3+10x^2+5x+1$`, r`$16x^4-32x^3+24x^2-8x+1$`,
      r`$\binom73 2^3=280$`, r`$\binom63 3^3(-1)^3=-540$`,
      r`$T_{r+1}=\binom8r x^{8-2r}$; $8-2r=0\Rightarrow r=4$: $\binom84=70$`,
      r`$T_{r+1}=\binom9r(2x)^{9-r}(-3)^r$; $9-r=6\Rightarrow r=3$: $\binom93 2^6(-3)^3=84(64)(-27)=-145152$, so $-145152x^6$`,
      r`$1-6(0.02)+15(0.02)^2=1-0.12+0.006=0.8860$`,
      r`substitute $x=1$: $(3-2)^4=1$`,
      r`$T_{r+1}=\binom7r x^{7-r}y^r$; need $r=2$: $\binom72=21$`,
      r`7 terms total, middle is $T_4$ ($r=3$): $\binom63(2x)^3(-1)^3=20(8x^3)(-1)=-160x^3$`,
      r`$T_{r+1}=\binom7r(2x)^{7-r}y^r$; need $r=4$: $\binom74 2^3 = 35(8)=280$`,
      r`$\binom n2=45\Rightarrow\dfrac{n(n-1)}{2}=45\Rightarrow n^2-n-90=0\Rightarrow(n-10)(n+9)=0\Rightarrow n=10$`,
      r`$1+10(0.005)+45(0.005)^2=1+0.05+0.001125\approx1.05113$`,
    ],
  },
  {
    code: "1.5", unit: U, title: "Exponents & Radicals",
    intro: r`The laws of exponents and radicals let you simplify expressions and solve equations where the variable sits in an exponent.`,
    ideas: [
      r`$a^ma^n=a^{m+n}$, $\dfrac{a^m}{a^n}=a^{m-n}$, $(a^m)^n=a^{mn}$, $a^0=1$, $a^{-n}=\dfrac1{a^n}$.`,
      r`$a^{1/n}=\sqrt[n]{a}$, $a^{m/n}=\left(\sqrt[n]{a}\right)^m$.`,
      r`Matching-base equations: write both sides with the same base, then equate exponents.`,
    ],
    examples: [
      { t: "Simplify", body: r`Simplify $\dfrac{(x^3y^{-2})^2}{x^{-1}y^4}$.\soln
Numerator: $x^6y^{-4}$. Divide: $x^6y^{-4}\div x^{-1}y^4=x^{6-(-1)}y^{-4-4}=x^7y^{-8}$.\\[3pt]\textbf{Conclusion:} $\dfrac{x^7}{y^8}$.` },
      { t: "Simplify radicals", body: r`Simplify $\sqrt{75}-\sqrt{12}+\sqrt{27}$.\soln
$\sqrt{75}=5\sqrt3$, $\sqrt{12}=2\sqrt3$, $\sqrt{27}=3\sqrt3$. Combine: $5\sqrt3-2\sqrt3+3\sqrt3$.\\[3pt]\textbf{Conclusion:} $6\sqrt3$.` },
      { t: "Solve an exponential equation", body: r`Solve $4^{2x-1}=64$.\soln
Write $64=4^3$: $2x-1=3\Rightarrow x=2$.\\[3pt]\textbf{Conclusion:} $x=2$.` },
      { t: "Rationalize", body: r`Rationalize $\dfrac{6}{\sqrt7+2}$.\soln
Multiply by the conjugate: $\dfrac{6(\sqrt7-2)}{(\sqrt7+2)(\sqrt7-2)}=\dfrac{6(\sqrt7-2)}{7-4}=\dfrac{6(\sqrt7-2)}{3}$.\\[3pt]\textbf{Conclusion:} $2(\sqrt7-2)=2\sqrt7-4$.` },
      { t: "Simplify a fractional exponent", body: r`Simplify $\left(\dfrac{16x^8}{81}\right)^{3/4}$.\soln
Apply the exponent to numerator and denominator separately: $\dfrac{(16)^{3/4}(x^8)^{3/4}}{(81)^{3/4}}=\dfrac{8x^6}{27}$.\\[3pt]\textbf{Conclusion:} $\dfrac{8x^6}{27}$.` },
      { t: "Solve with unmatched-looking bases", body: r`Solve $8^{x+1}=32^{x-1}$ by writing both sides with base 2.\soln
$8=2^3$, $32=2^5$: $2^{3x+3}=2^{5x-5}\Rightarrow3x+3=5x-5$.\\[3pt]\textbf{Conclusion:} $8=2x\Rightarrow x=4$.` },
      { t: "Rationalize with a binomial denominator", body: r`Rationalize $\dfrac{2+\sqrt3}{2-\sqrt3}$.\soln
Multiply by the conjugate: $\dfrac{(2+\sqrt3)^2}{(2-\sqrt3)(2+\sqrt3)}=\dfrac{4+4\sqrt3+3}{4-3}$.\\[3pt]\textbf{Conclusion:} $7+4\sqrt3$.` },
      { t: "Simplify nested radicals", body: r`Simplify $\sqrt{2}\cdot\sqrt{50}+\sqrt{8}\cdot\sqrt{2}$.\soln
$\sqrt2\cdot\sqrt{50}=\sqrt{100}=10$; $\sqrt8\cdot\sqrt2=\sqrt{16}=4$.\\[3pt]\textbf{Conclusion:} $10+4=14$.` },
      { t: "Solve a substitution-style exponential equation", body: r`Solve $3^{2x}-10(3^x)+9=0$ (let $u=3^x$).\soln
$u^2-10u+9=0\Rightarrow(u-1)(u-9)=0\Rightarrow u=1$ or $u=9$.\\[3pt]
\textbf{Conclusion:} $3^x=1\Rightarrow x=0$; $3^x=9\Rightarrow x=2$. ✓` },
    ],
    questions: [
      { ask: r`Simplify $\dfrac{x^5y^{-1}}{x^{-2}y^3}$.` },
      { ask: r`Simplify $\sqrt{50}+\sqrt{8}-\sqrt{18}$.` },
      { ask: r`Solve $2^{3x+1}=32$.` },
      { ask: r`Simplify $32^{3/5}$.` },
      { ask: r`Rationalize $\dfrac{4}{\sqrt5-1}$.` },
      { ask: r`Solve $9^{x-1}=27^{2x}$ by writing both sides with base 3.` },
      { ask: r`Simplify $\left(\dfrac{8x^6}{27}\right)^{1/3}$.` },
      { ask: r`Simplify $\dfrac{\sqrt{45}}{\sqrt5}+\sqrt{2}\cdot\sqrt{8}$.` },
      { ask: r`Rationalize $\dfrac{3-\sqrt2}{3+\sqrt2}$.` },
      { ask: r`Simplify $\left(\dfrac{25x^4}{9}\right)^{3/2}$.` },
      { ask: r`Solve $2^{2x}-5(2^x)+4=0$ (let $u=2^x$, factor as a quadratic in $u$).`, challenge: true, ws: "3.6cm" },
      { ask: r`Solve $16^{x+1}=64^{x-2}$ by writing both sides with base 2.`, challenge: true, ws: "3.2cm" },
      { ask: r`Solve $5^{2x}-6(5^x)+5=0$ (let $u=5^x$).`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$x^7y^{-4}=\dfrac{x^7}{y^4}$`, r`$5\sqrt2+2\sqrt2-3\sqrt2=4\sqrt2$`, r`$3x+1=5\Rightarrow x=\tfrac43$`,
      r`$32^{3/5}=(2^5)^{3/5}=2^3=8$`, r`$\dfrac{4(\sqrt5+1)}{4}=\sqrt5+1$`,
      r`$3^{2x-2}=3^{6x}\Rightarrow2x-2=6x\Rightarrow x=-\tfrac12$`, r`$\dfrac{2x^2}{3}$`,
      r`$\sqrt9+\sqrt{16}=3+4=7$`,
      r`$\dfrac{(3-\sqrt2)^2}{9-2}=\dfrac{9-6\sqrt2+2}{7}=\dfrac{11-6\sqrt2}{7}$`,
      r`$\dfrac{125x^6}{27}$`,
      r`$u^2-5u+4=0\Rightarrow(u-1)(u-4)=0\Rightarrow u=1$ or $u=4$; $2^x=1\Rightarrow x=0$; $2^x=4\Rightarrow x=2$`,
      r`$2^{4x+4}=2^{6x-12}\Rightarrow4x+4=6x-12\Rightarrow x=8$`,
      r`$u^2-6u+5=0\Rightarrow(u-1)(u-5)=0\Rightarrow u=1$ or $u=5$; $5^x=1\Rightarrow x=0$; $5^x=5\Rightarrow x=1$`,
    ],
  },
  {
    code: "1.6", unit: U, title: "Logarithms",
    intro: r`Logarithms are the inverse of exponentials: $\log_b(x)=y\iff b^y=x$.`,
    ideas: [
      r`$\log_b(mn)=\log_bm+\log_bn$, $\log_b\!\left(\dfrac mn\right)=\log_bm-\log_bn$, $\log_b(m^k)=k\log_bm$.`,
      r`Change of base: $\log_ba=\dfrac{\ln a}{\ln b}$.`,
      r`Use logarithms to solve exponential equations with unmatched bases.`,
    ],
    examples: [
      { t: "Evaluate directly", body: r`Evaluate $\log_3(81)$.\soln
$3^{?}=81=3^4$.\\[3pt]\textbf{Conclusion:} $4$.` },
      { t: "Solve via logarithms", body: r`Solve $6^x=50$ to 3 decimal places.\soln
Take $\ln$ of both sides: $x\ln6=\ln50\Rightarrow x=\dfrac{\ln50}{\ln6}$.\\[3pt]\textbf{Conclusion:} $x\approx2.184$.` },
      { t: "Simplify using log laws", body: r`Simplify $\log_2(20)+\log_2(4)-\log_2(5)$.\soln
$=\log_2\!\left(\dfrac{20\times4}{5}\right)=\log_2(16)$.\\[3pt]\textbf{Conclusion:} $4$.` },
      { t: "Solve with a domain check", body: r`Solve $\log_3(x)+\log_3(x-2)=1$, checking the domain.\soln
\textbf{Step 1:} $\log_3\big(x(x-2)\big)=1\Rightarrow x(x-2)=3\Rightarrow x^2-2x-3=0\Rightarrow(x-3)(x+1)=0$.\\[3pt]
\textbf{Step 2:} $x=3$ or $x=-1$; but $\log_3(x)$ requires $x>0$, so $x=-1$ is rejected.\\[3pt]
\textbf{Conclusion:} $x=3$.` },
      { t: "Change of base", body: r`Evaluate $\log_7(50)$ to 3 decimal places using change of base.\soln
$\log_7(50)=\dfrac{\ln50}{\ln7}$.\\[3pt]\textbf{Conclusion:} $\approx2.010$.` },
      { t: "Solve for an exponent using change of base", body: r`Solve $3^{x+1}=20$ to 3 decimal places.\soln
Take $\ln$: $(x+1)\ln3=\ln20\Rightarrow x+1=\dfrac{\ln20}{\ln3}$.\\[3pt]\textbf{Conclusion:} $x\approx1.727$.` },
      { t: "Application --- half-life", body: r`A substance decays according to $A=A_0(0.5)^{t/8}$ (8-day half-life). Find, to the nearest day, when only 20\% remains.\soln
$0.2=0.5^{t/8}\Rightarrow\ln0.2=\dfrac t8\ln0.5\Rightarrow t=8\cdot\dfrac{\ln0.2}{\ln0.5}$.\\[3pt]\textbf{Conclusion:} $t\approx19$ days.` },
      { t: "Combine multiple log laws", body: r`Simplify $3\log_2(x)-\log_2(x^2)+\log_2(4)$ as a single logarithm.\soln
$=\log_2(x^3)-\log_2(x^2)+\log_2(4)=\log_2\!\left(\dfrac{4x^3}{x^2}\right)$.\\[3pt]\textbf{Conclusion:} $\log_2(4x)$.` },
      { t: "Solve a log equation reducing to a quadratic", body: r`Solve $(\log_2x)^2-3\log_2x+2=0$ (let $u=\log_2x$).\soln
$u^2-3u+2=0\Rightarrow(u-1)(u-2)=0\Rightarrow u=1$ or $u=2$.\\[3pt]
\textbf{Conclusion:} $\log_2x=1\Rightarrow x=2$; $\log_2x=2\Rightarrow x=4$. ✓` },
    ],
    questions: [
      { ask: r`Evaluate $\log_5(125)$.` },
      { ask: r`Solve $4^x=70$ to 3 decimal places.` },
      { ask: r`Simplify $\log_4(48)-\log_4(3)$.` },
      { ask: r`Solve $\log_2(x)+\log_2(x-6)=4$, checking the domain.` },
      { ask: r`An investment is $A=800(1.05)^t$. Find, to the nearest year, when it first exceeds \$1500.` },
      { ask: r`Simplify $2\log_5(3)+\log_5(4)$ as a single logarithm, then evaluate it.` },
      { ask: r`The Richter scale uses $M=\log_{10}(I/I_0)$. Find $M$ if an earthquake is 12{,}000 times as intense as $I_0$.` },
      { ask: r`Evaluate $\log_9(200)$ to 3 decimal places using change of base.` },
      { ask: r`A substance decays as $A=A_0(0.5)^{t/5}$; find, to the nearest day, when 30\% remains.` },
      { ask: r`Solve $(\log_3x)^2-4\log_3x+3=0$.` },
      { ask: r`Solve $\log_2(x+3)-\log_2(x-1)=3$, checking the domain.`, challenge: true, ws: "3.4cm" },
      { ask: r`Solve $2\ln(x)=\ln(x+6)+\ln(4)$ for $x>0$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Solve $5^{2x+1}=3^{x}$ to 3 decimal places by taking $\ln$ of both sides.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$3$`, r`$x=\dfrac{\ln70}{\ln4}\approx3.075$`, r`$\log_4(16)=2$`,
      r`$x(x-6)=16\Rightarrow x^2-6x-16=0\Rightarrow(x-8)(x+2)=0\Rightarrow x=8$ (rejecting $x=-2$)`,
      r`$1.05^t>1.875\Rightarrow t>\dfrac{\ln1.875}{\ln1.05}\approx12.9$, so $t=13$ years`,
      r`$\log_5(36)$; $5^{2.226\ldots}=36$, so value $\approx2.226$`,
      r`$M=\log_{10}(12000)\approx4.079$`,
      r`$\dfrac{\ln200}{\ln9}\approx2.415$`,
      r`$0.3=0.5^{t/5}\Rightarrow t=5\cdot\dfrac{\ln0.3}{\ln0.5}\approx9$ days`,
      r`let $u=\log_3x$: $(u-1)(u-3)=0$; $x=3$ or $x=27$`,
      r`$\log_2\!\left(\tfrac{x+3}{x-1}\right)=3\Rightarrow\tfrac{x+3}{x-1}=8\Rightarrow x+3=8x-8\Rightarrow x=\tfrac{11}{7}$ (valid, since $>1$)`,
      r`$\ln(x^2)=\ln(4(x+6))\Rightarrow x^2=4x+24\Rightarrow x^2-4x-24=0\Rightarrow x=\dfrac{4\pm\sqrt{112}}{2}=2\pm2\sqrt7$; reject the negative root, so $x=2+2\sqrt7$`,
      r`$(2x+1)\ln5=x\ln3\Rightarrow2x\ln5+\ln5=x\ln3\Rightarrow x(2\ln5-\ln3)=-\ln5\Rightarrow x=\dfrac{-\ln5}{2\ln5-\ln3}\approx-1.007$`,
    ],
  },
  {
    code: "1.7", unit: U, title: "Mathematical Proof",
    intro: r`A proof must hold for every case a claim covers; a single counterexample is enough to disprove a claim.`,
    ideas: [
      r`\textbf{Direct proof}: start from known facts/definitions and reason forward to the conclusion.`,
      r`\textbf{Proof by exhaustion}: check every case, when there are only finitely many.`,
      r`\textbf{Disproof by counterexample}: one case where the claim fails is enough.`,
    ],
    examples: [
      { t: "Direct proof", body: r`Prove that the sum of two consecutive even integers is always divisible by 4... or is it? Check first, then prove or disprove.\soln
\textbf{Step 1 (test):} $2+4=6$ (not divisible by 4) --- the claim is false as stated.\\[3pt]
\textbf{Step 2:} Let the two consecutive even integers be $2n$ and $2n+2$. Their sum is $4n+2=2(2n+1)$, which is divisible by 2 but not generally by 4 (since $2n+1$ is odd).\\[3pt]\textbf{Conclusion:} the original claim is false; the sum is always divisible by 2, but not always by 4.` },
      { t: "Disproof by counterexample", body: r`Disprove: "For every integer $n$, $n^2+n+1$ is odd."\soln
Test $n=1$: $1+1+1=3$ (odd). Test $n=2$: $4+2+1=7$ (odd). Test general parity: if $n$ is even, $n^2$ even, $n$ even, so $n^2+n+1$ is even+even+odd=odd. If $n$ is odd, $n^2$ odd, $n$ odd, so odd+odd+odd=odd.\\[3pt]\textbf{Conclusion:} the claim actually holds for every integer --- checking both parities (a proof by exhaustion over the two cases even and odd) proves it rather than disproving it.` },
      { t: "Proof by exhaustion", body: r`Prove that $n^2-n$ is even for every integer $n$ from $1$ to $4$, then generalize.\soln
\textbf{Step 1 (exhaustion for $n=1..4$):} $n=1:0$; $n=2:2$; $n=3:6$; $n=4:12$ --- all even.\\[3pt]
\textbf{Step 2 (general case):} $n^2-n=n(n-1)$, the product of two consecutive integers. One of any two consecutive integers is always even, so their product is always even.\\[3pt]\textbf{Conclusion:} $n^2-n$ is even for every integer $n$.` },
      { t: "Direct proof --- algebraic identity", body: r`Prove that the difference of squares of two consecutive odd integers is always a multiple of 8.\soln
\textbf{Step 1:} Let the odd integers be $2n+1$ and $2n+3$.\\[3pt]
\textbf{Step 2:} $(2n+3)^2-(2n+1)^2=\big[(2n+3)-(2n+1)\big]\big[(2n+3)+(2n+1)\big]=(2)(4n+4)=8n+8=8(n+1)$.\\[3pt]\textbf{Conclusion:} the difference is $8(n+1)$, a multiple of 8 for every integer $n$.` },
      { t: "Disproof needing a less obvious counterexample", body: r`Disprove: "For every positive integer $n$, $2^n>n^2$."\soln
Test $n=1$: $2>1$ true. Test $n=2$: $4=4$ false (not strictly greater!).\\[3pt]\textbf{Conclusion:} $n=2$ is a counterexample --- $2^2=4^2$... more precisely $2^2=4=2^2$, so $2^n>n^2$ fails at $n=2$ (equality, not strict inequality). ✓` },
      { t: "Proof by exhaustion over a small finite set", body: r`Prove that $n^2+1$ is never divisible by 4, for $n=0,1,2,3$ (representing all four residues mod 4).\soln
$n=0:1$; $n=1:2$; $n=2:5$; $n=3:10$ --- remainders mod 4 are $1,2,1,2$, never $0$.\\[3pt]\textbf{Conclusion:} since every integer has one of these four remainders when squared and incremented follows the same pattern (by periodicity), $n^2+1$ is never divisible by 4. ✓` },
      { t: "Direct proof with a clever substitution", body: r`Prove that $(n+1)^2-n^2$ is always an odd number, for any integer $n$.\soln
Expand: $(n+1)^2-n^2=n^2+2n+1-n^2=2n+1$.\\[3pt]\textbf{Conclusion:} $2n+1$ is odd for every integer $n$ (one more than an even number). ✓` },
      { t: "Disproof involving a subtle algebra claim", body: r`Disprove: "For all real $a,b$, $\sqrt{a^2+b^2}=a+b$."\soln
Test $a=3,b=4$: LHS $=\sqrt{9+16}=\sqrt{25}=5$; RHS $=3+4=7$.\\[3pt]\textbf{Conclusion:} $5\neq7$, so the claim is false. ✓` },
      { t: "Proof combining exhaustion and direct reasoning", body: r`Prove that the remainder when a perfect square is divided by 3 is never 2.\soln
\textbf{Step 1:} Any integer $n$ has remainder $0,1,$ or $2$ mod 3.\\[3pt]
\textbf{Step 2:} $n=3k$: $n^2=9k^2$, remainder $0$. $n=3k+1$: $n^2=9k^2+6k+1$, remainder $1$. $n=3k+2$: $n^2=9k^2+12k+4$, remainder $1$ (since $4=3+1$).\\[3pt]\textbf{Conclusion:} every case gives remainder $0$ or $1$, never $2$. ✓` },
    ],
    questions: [
      { ask: r`Prove that the sum of any three consecutive integers is always divisible by 3.` },
      { ask: r`Disprove: "$n^2+n+11$ is prime for every positive integer $n$." (Hint: try $n=10$.)` },
      { ask: r`Prove that the square of any even number is divisible by 4.` },
      { ask: r`Prove by exhaustion that every integer from 10 to 14 is either prime or a product of primes.` },
      { ask: r`Disprove: "For every real number $x$, $x^2>x$."` },
      { ask: r`Prove that the product of any two odd integers is odd.` },
      { ask: r`Disprove: "For every positive integer $n$, $3^n>2^{n+1}$."` },
      { ask: r`Prove that $(n+2)^2-n^2$ is always divisible by 4, for any integer $n$.` },
      { ask: r`Prove by exhaustion that the remainder of a perfect square divided by 4 is never 3 (test $n=0,1,2,3$ mod 4).` },
      { ask: r`Disprove: "For all real $a,b$: $(a+b)^2=a^2+b^2$."` },
      { ask: r`Prove that $n^3-n$ is always divisible by 6, for every integer $n$ (hint: factor as $n(n-1)(n+1)$ and think about consecutive integers).`, challenge: true, ws: "3.6cm" },
      { ask: r`A student claims "if $a^2=b^2$ then $a=b$." Determine whether this is true, and prove or disprove it.`, challenge: true, ws: "3.2cm" },
      { ask: r`Prove that the sum of the squares of any two consecutive integers is always odd.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$n+(n+1)+(n+2)=3n+3=3(n+1)$, a multiple of 3`,
      r`$n=10$: $100+10+11=121=11^2$, not prime --- disproved`,
      r`$(2k)^2=4k^2$, divisible by 4`,
      r`$10=2\cdot5$, $11$ prime, $12=2^2\cdot3$, $13$ prime, $14=2\cdot7$ --- every case checks out`,
      r`$x=0.5$: $0.25<0.5$ --- disproved`,
      r`$(2m+1)(2n+1)=4mn+2m+2n+1=2(2mn+m+n)+1$, odd`,
      r`$n=1$: $3^1=3$, $2^2=4$; $3<4$, so the inequality fails at $n=1$ --- disproved`,
      r`$(n+2)^2-n^2=4n+4=4(n+1)$, a multiple of 4`,
      r`$n=0:0$; $n=1:1$; $n=2:4\to0$; $n=3:9\to1$ --- remainders are $0,1,0,1$, never 3`,
      r`$a=1,b=1$: LHS $=4$, RHS $=1+1=2$; $4\neq2$ --- disproved`,
      r`Among $n-1,n,n+1$ (three consecutive integers) one is divisible by 3 and at least one is even, so their product is divisible by both 2 and 3, hence by 6`,
      r`False: $a=2,b=-2$ gives $a^2=b^2=4$ but $a\neq b$ --- disproved by counterexample`,
      r`$n^2+(n+1)^2=2n^2+2n+1=2(n^2+n)+1$, one more than an even number, so always odd`,
    ],
  },
];
