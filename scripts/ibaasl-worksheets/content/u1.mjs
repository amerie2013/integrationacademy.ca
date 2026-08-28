// IB AA SL worksheets — Unit 1: Number & Algebra. Original problems, written
// fresh for the worksheet format (not reused from the lesson content).
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
    ],
    questions: [
      { ask: r`Find $u_{15}$ for $6,10,14,\dots$` },
      { ask: r`Find $u_{30}$ for $50,45,40,\dots$` },
      { ask: r`An arithmetic sequence has $u_4=18$ and $u_9=38$. Find $u_1$ and $d$.` },
      { ask: r`Find $S_{18}$ for $2,9,16,\dots$` },
      { ask: r`Find $S_{40}$ for $100,95,90,\dots$` },
      { ask: r`A theatre has 18 seats in the first row, increasing by 3 seats per row for 12 rows. Find the total seating capacity.` },
      { ask: r`Find the number of terms in the sequence $5,9,13,\dots,161$.` },
      { ask: r`How many terms of $3,7,11,\dots$ are needed for the sum to first exceed 200?`, challenge: true, ws: "3.2cm" },
      { ask: r`An arithmetic sequence has $u_1=4$ and $S_{10}=205$. Find $d$.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$u_{15}=62$`, r`$u_{30}=-95$`, r`$d=4$, $u_1=6$`, r`$S_{18}=1107$`, r`$S_{40}=-3700$`,
      r`$12$ rows: $S_{12}=\tfrac{12}{2}(2(18)+11(3))=6(69)=414$ seats`,
      r`$5+(n-1)4=161\Rightarrow n=40$ terms`,
      r`$S_n=\tfrac n2(6+4(n-1))>200\Rightarrow 2n^2+4n-200>0\Rightarrow n^2+2n-100>0$; testing, $n=10$ gives $S_{10}=210>200$ (and $n=9$ gives $171<200$), so $n=10$`,
      r`$S_{10}=\tfrac{10}{2}(8+9d)=205\Rightarrow 40+45d=205\Rightarrow d=\tfrac{165}{45}=\tfrac{11}{3}$`,
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
    ],
    questions: [
      { ask: r`Find $u_7$ for $5,10,20,\dots$` },
      { ask: r`A geometric sequence has $u_1=81$ and $u_5=1$. Find $r$ (assume $r>0$).` },
      { ask: r`Find $S_{10}$ for $2,6,18,\dots$` },
      { ask: r`Find $S_\infty$ for $60,12,2.4,\dots$` },
      { ask: r`Find $S_\infty$ for $16,-8,4,-2,\dots$` },
      { ask: r`A ball dropped from 8 m rebounds to 60\% of its previous height each bounce. Find the total vertical distance it travels (down and up), assuming it bounces forever.` },
      { ask: r`A savings account of \$2000 grows by 4\% each year. Find its value after 10 years.` },
      { ask: r`A geometric sequence has $u_2=12$ and $u_5=324$. Find $u_1$ and $r$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Find $S_\infty$ in terms of $k$ for the sequence $k,\ \tfrac k3,\ \tfrac{k}{9},\dots$ (assume $k>0$), then find $k$ if $S_\infty=45$.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$u_7=320$`, r`$r^4=\tfrac1{81}\Rightarrow r=\tfrac13$`, r`$S_{10}=\tfrac{2(3^{10}-1)}{2}=59048$`,
      r`$S_\infty=\tfrac{60}{1-0.2}=75$`, r`$S_\infty=\tfrac{16}{1-(-1/2)}=\tfrac{32}{3}$`,
      r`down 8, then up+down $2(8)(0.6)+2(8)(0.6)^2+\dots=2(8)\cdot\tfrac{0.6}{1-0.6}=2(8)(1.5)=24$; total $=8+24=32$ m`,
      r`$u_{10}=2000(1.04)^9\approx2846.30$`,
      r`$r^3=\tfrac{324}{12}=27\Rightarrow r=3$; $u_1=12/3=4$`,
      r`$S_\infty=\dfrac{k}{1-1/3}=\dfrac{3k}{2}$; set $=45\Rightarrow k=30$`,
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
    ],
    questions: [
      { ask: r`Evaluate $\displaystyle\sum_{n=1}^{7}(2n+1)$.` },
      { ask: r`Evaluate $\displaystyle\sum_{n=1}^{5}5(3)^{n-1}$.` },
      { ask: r`Evaluate $\displaystyle\sum_{k=3}^{6}(k^2-1)$.` },
      { ask: r`Write $4+9+14+\cdots+64$ in sigma notation and evaluate it.` },
      { ask: r`Write $2+6+18+\cdots+486$ in sigma notation and evaluate it.` },
      { ask: r`Evaluate $\displaystyle\sum_{n=0}^{4}7(0.5)^{n}$.` },
      { ask: r`A theatre adds $D_n=40+2n$ extra dollars in ticket sales on day $n$ of a promotion, for $n=1$ to $10$. Find the total extra revenue.` },
      { ask: r`Show that $\displaystyle\sum_{n=1}^{5}(2n+3)$ and $\displaystyle\sum_{n=0}^{4}(2n+5)$ give the same total, and explain why.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`terms $3,5,\dots,15$: sum $=63$`, r`$S_5=\tfrac{5(3^5-1)}{2}=605$`, r`$8+15+24+35=82$`,
      r`$u_n=5n-1$, $n=13$; $\sum_{n=1}^{13}(5n-1)$, $S_{13}=\tfrac{13}{2}(4+64)=442$`,
      r`$u_n=2(3)^{n-1}$, $n=6$; $\sum_{n=1}^{6}2(3)^{n-1}$, $S_6=\tfrac{2(3^6-1)}{2}=728$`,
      r`$S=\tfrac{7(1-0.5^5)}{1-0.5}=13.5625$`,
      r`$\sum_{n=1}^{10}(40+2n)=400+2(55)=510$`,
      r`Both give $5+7+9+11+13=45$ --- shifting the index start from 1 to 0 while adjusting the formula's constant leaves every actual term unchanged`,
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
    ],
    questions: [
      { ask: r`Expand $(x+1)^5$ fully.` },
      { ask: r`Expand $(2x-1)^4$ fully.` },
      { ask: r`Find the coefficient of $x^4$ in the expansion of $(x+2)^7$.` },
      { ask: r`Find the coefficient of $x^3$ in the expansion of $(3x-1)^6$.` },
      { ask: r`Find the constant term in the expansion of $\left(x+\dfrac{1}{x}\right)^8$.` },
      { ask: r`Find the term containing $x^6$ in the expansion of $(2x-3)^9$.` },
      { ask: r`Use the first three binomial terms of $(1-0.02)^6$ to approximate $0.98^6$ to 4 decimal places.` },
      { ask: r`Find the coefficient of $x^3y^4$ in the expansion of $(2x+y)^7$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Find the value of $n$ if the coefficient of $x^2$ in the expansion of $(1+x)^n$ is $45$.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$x^5+5x^4+10x^3+10x^2+5x+1$`, r`$16x^4-32x^3+24x^2-8x+1$`,
      r`$\binom73 2^3=280$`, r`$\binom63 3^3(-1)^3=-540$`,
      r`$T_{r+1}=\binom8r x^{8-2r}$; $8-2r=0\Rightarrow r=4$: $\binom84=70$`,
      r`$T_{r+1}=\binom9r(2x)^{9-r}(-3)^r$; $9-r=6\Rightarrow r=3$: $\binom93 2^6(-3)^3=84(64)(-27)=-145152$, so $-145152x^6$`,
      r`$1-6(0.02)+15(0.02)^2=1-0.12+0.006=0.8860$`,
      r`$T_{r+1}=\binom7r(2x)^{7-r}y^r$; need $r=4$: $\binom74 2^3 = 35(8)=280$`,
      r`$\binom n2=45\Rightarrow\dfrac{n(n-1)}{2}=45\Rightarrow n^2-n-90=0\Rightarrow(n-10)(n+9)=0\Rightarrow n=10$`,
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
    ],
    questions: [
      { ask: r`Simplify $\dfrac{x^5y^{-1}}{x^{-2}y^3}$.` },
      { ask: r`Simplify $\sqrt{50}+\sqrt{8}-\sqrt{18}$.` },
      { ask: r`Solve $2^{3x+1}=32$.` },
      { ask: r`Simplify $32^{3/5}$.` },
      { ask: r`Rationalize $\dfrac{4}{\sqrt5-1}$.` },
      { ask: r`Solve $9^{x-1}=27^{2x}$ by writing both sides with base 3.` },
      { ask: r`Simplify $\left(\dfrac{8x^6}{27}\right)^{1/3}$.` },
      { ask: r`Simplify $\dfrac{\sqrt{45}}{\sqrt5}+\sqrt{2}\cdot\sqrt{8}$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Solve $2^{2x}-5(2^x)+4=0$ (let $u=2^x$, factor as a quadratic in $u$).`, challenge: true, ws: "3.6cm" },
    ],
    answers: [
      r`$x^7y^{-4}=\dfrac{x^7}{y^4}$`, r`$5\sqrt2+2\sqrt2-3\sqrt2=4\sqrt2$`, r`$3x+1=5\Rightarrow x=\tfrac43$`,
      r`$32^{3/5}=(2^5)^{3/5}=2^3=8$`, r`$\dfrac{4(\sqrt5+1)}{4}=\sqrt5+1$`,
      r`$3^{2x-2}=3^{6x}\Rightarrow2x-2=6x\Rightarrow x=-\tfrac12$`, r`$\dfrac{2x^2}{3}$`,
      r`$\sqrt9+\sqrt{16}=3+4=7$`,
      r`$u^2-5u+4=0\Rightarrow(u-1)(u-4)=0\Rightarrow u=1$ or $u=4$; $2^x=1\Rightarrow x=0$; $2^x=4\Rightarrow x=2$`,
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
    ],
    questions: [
      { ask: r`Evaluate $\log_5(125)$.` },
      { ask: r`Solve $4^x=70$ to 3 decimal places.` },
      { ask: r`Simplify $\log_4(48)-\log_4(3)$.` },
      { ask: r`Solve $\log_2(x)+\log_2(x-6)=4$, checking the domain.` },
      { ask: r`An investment is $A=800(1.05)^t$. Find, to the nearest year, when it first exceeds \$1500.` },
      { ask: r`Simplify $2\log_5(3)+\log_5(4)$ as a single logarithm, then evaluate it.` },
      { ask: r`The Richter scale uses $M=\log_{10}(I/I_0)$. Find $M$ if an earthquake is 12{,}000 times as intense as $I_0$.` },
      { ask: r`Solve $\log_2(x+3)-\log_2(x-1)=3$, checking the domain.`, challenge: true, ws: "3.4cm" },
      { ask: r`Solve $2\ln(x)=\ln(x+6)+\ln(4)$ for $x>0$.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$3$`, r`$x=\dfrac{\ln70}{\ln4}\approx3.075$`, r`$\log_4(16)=2$`,
      r`$x(x-6)=16\Rightarrow x^2-6x-16=0\Rightarrow(x-8)(x+2)=0\Rightarrow x=8$ (rejecting $x=-2$)`,
      r`$1.05^t>1.875\Rightarrow t>\dfrac{\ln1.875}{\ln1.05}\approx12.9$, so $t=13$ years`,
      r`$\log_5(36)$; $5^{2.226\ldots}=36$, so value $\approx2.226$`,
      r`$M=\log_{10}(12000)\approx4.079$`,
      r`$\log_2\!\left(\tfrac{x+3}{x-1}\right)=3\Rightarrow\tfrac{x+3}{x-1}=8\Rightarrow x+3=8x-8\Rightarrow x=\tfrac{11}{7}$ (valid, since $>1$)`,
      r`$\ln(x^2)=\ln(4(x+6))\Rightarrow x^2=4x+24\Rightarrow x^2-4x-24=0\Rightarrow x=\dfrac{4\pm\sqrt{112}}{2}=2\pm2\sqrt7$; reject the negative root, so $x=2+2\sqrt7$`,
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
    ],
    questions: [
      { ask: r`Prove that the sum of any three consecutive integers is always divisible by 3.` },
      { ask: r`Disprove: "$n^2+n+11$ is prime for every positive integer $n$." (Hint: try $n=10$.)` },
      { ask: r`Prove that the square of any even number is divisible by 4.` },
      { ask: r`Prove by exhaustion that every integer from 10 to 14 is either prime or a product of primes.` },
      { ask: r`Disprove: "For every real number $x$, $x^2>x$."` },
      { ask: r`Prove that the product of any two odd integers is odd.` },
      { ask: r`Prove that $n^3-n$ is always divisible by 6, for every integer $n$ (hint: factor as $n(n-1)(n+1)$ and think about consecutive integers).`, challenge: true, ws: "3.6cm" },
      { ask: r`A student claims "if $a^2=b^2$ then $a=b$." Determine whether this is true, and prove or disprove it.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$n+(n+1)+(n+2)=3n+3=3(n+1)$, a multiple of 3`,
      r`$n=10$: $100+10+11=121=11^2$, not prime --- disproved`,
      r`$(2k)^2=4k^2$, divisible by 4`,
      r`$10=2\cdot5$, $11$ prime, $12=2^2\cdot3$, $13$ prime, $14=2\cdot7$ --- every case checks out`,
      r`$x=0.5$: $0.25<0.5$ --- disproved`,
      r`$(2m+1)(2n+1)=4mn+2m+2n+1=2(2mn+m+n)+1$, odd`,
      r`Among $n-1,n,n+1$ (three consecutive integers) one is divisible by 3 and at least one is even, so their product is divisible by both 2 and 3, hence by 6`,
      r`False: $a=2,b=-2$ gives $a^2=b^2=4$ but $a\neq b$ --- disproved by counterexample`,
    ],
  },
];
