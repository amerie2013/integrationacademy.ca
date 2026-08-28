// IB AA SL worksheets — Unit 4: Statistics and Probability. Original problems.
const r = String.raw;
const U = "4: Statistics and Probability";

export default [
  {
    code: "4.1", unit: U, title: "Sampling and Presenting Data",
    intro: r`Good sampling avoids bias; grouped data needs a midpoint estimate for its mean.`,
    ideas: [
      r`Stratified sampling: sample each subgroup proportionally to its size.`,
      r`Estimated mean from grouped data: $\bar x\approx\dfrac{\sum fm}{\sum f}$, using class midpoints $m$.`,
    ],
    examples: [
      { t: "Stratified sample sizes", body: r`A population of 1000 has 350 in group P, 650 in group Q. Find stratified sample sizes for a total sample of 40.\soln
Fraction $=40/1000=1/25$. P: $350/25=14$. Q: $650/25=26$.\\[3pt]\textbf{Conclusion:} 14 from P, 26 from Q.` },
      { t: "Bias critique", body: r`A survey on gym habits only interviews people leaving a gym at 6am. Identify the bias.\soln
This is convenience sampling of a specific subgroup (early-morning gym-goers), likely the most dedicated exercisers.\\[3pt]\textbf{Conclusion:} over-represents highly motivated exercisers; underestimates how rarely the average person exercises.` },
      { t: "Grouped mean", body: r`Estimate the mean from: $0$--$10$ (freq 5), $10$--$20$ (freq 8), $20$--$30$ (freq 7).\soln
Midpoints $5,15,25$. $\sum fm=25+120+175=320$; $\sum f=20$.\\[3pt]\textbf{Conclusion:} $\bar x=16$.` },
      { t: "Modal class", body: r`State the modal class for the data in the previous example.\soln
Highest frequency (8) is in the $10$--$20$ class.\\[3pt]\textbf{Conclusion:} modal class $10$--$20$.` },
    ],
    questions: [
      { ask: r`A population of 600 has 220 in group A, 380 in group B; find stratified sample sizes for a sample of 30.` },
      { ask: r`Estimate the mean from: $0$--$4$ (freq 6), $4$--$8$ (freq 9), $8$--$12$ (freq 5).` },
      { ask: r`State the modal class for the data in the previous question.` },
      { ask: r`A researcher only surveys people who respond to an online ad; explain a likely bias.` },
      { ask: r`Estimate the mean from: $10$--$20$ (freq 3), $20$--$30$ (freq 8), $30$--$40$ (freq 12), $40$--$50$ (freq 7).`, challenge: true, ws: "3cm" },
      { ask: r`A school of 1200 (700 juniors, 500 seniors) wants a stratified sample of 60; find sample sizes for each group.` },
      { ask: r`Explain why a census (surveying an entire population) is not always more useful than a well-designed sample.` },
    ],
    answers: [
      r`fraction $=1/20$: A: $11$, B: $19$`, r`midpoints $2,6,10$; $\sum fm=12+54+50=116$, $\sum f=20$: $\bar x=5.8$`,
      r`$4$--$8$ (freq 9)`, r`over-represents people active online / interested enough to respond, under-represents everyone else`,
      r`midpoints $15,25,35,45$; $\sum fm=45+200+420+315=980$, $\sum f=30$: $\bar x\approx32.7$`,
      r`fraction $=1/20$: juniors $35$, seniors $25$`,
      r`a census can be slower, costlier, and harder to keep accurate/consistent across every member than a well-designed representative sample`,
    ],
  },
  {
    code: "4.2", unit: U, title: "Measures of Central Tendency and Spread",
    intro: r`Standard deviation, quartiles, and the outlier rule describe how spread out data is.`,
    ideas: [
      r`$\sigma=\sqrt{\dfrac{\sum(x-\bar x)^2}{n}}$.`,
      r`Outlier rule: below $Q_1-1.5\,IQR$ or above $Q_3+1.5\,IQR$.`,
      r`Adding a constant shifts the mean, not the SD; multiplying scales both.`,
    ],
    examples: [
      { t: "Mean and median", body: r`Find the mean and median of $6,6,11,14,23$.\soln
Mean $=\dfrac{60}{5}=12$; median (middle value) $=11$.\\[3pt]\textbf{Conclusion:} mean 12, median 11.` },
      { t: "Standard deviation", body: r`Find the SD of $4,6,8,10,12$.\soln
Mean $=8$; deviations squared: $16,4,0,4,16$; sum $=40$; $\sigma=\sqrt{8}$.\\[3pt]\textbf{Conclusion:} $\sigma\approx2.83$.` },
      { t: "Outlier check", body: r`A data set has $Q_1=22$, $Q_3=38$. Is $65$ an outlier?\soln
$IQR=16$; upper fence $=38+24=62$.\\[3pt]\textbf{Conclusion:} yes, $65>62$.` },
      { t: "Transformation", body: r`A data set has mean 55, SD 6. Every value is tripled, then 4 is subtracted. Find the new mean and SD.\soln
Tripling: mean $165$, SD $18$; subtracting 4 changes only the mean.\\[3pt]\textbf{Conclusion:} new mean $161$, SD $18$.` },
    ],
    questions: [
      { ask: r`Find the mean and median of $2,5,9,12,27$.` },
      { ask: r`Find the SD of $3,7,11,15,19$.` },
      { ask: r`A data set has $Q_1=10$, $Q_3=20$. Is $36$ an outlier?` },
      { ask: r`A data set has mean 30, SD 4. Every value has 12 added. Find the new mean and SD.` },
      { ask: r`A data set has mean 20, SD 3. Every value is doubled. Find the new mean and SD.` },
      { ask: r`Class A: median 80, IQR 6. Class B: median 76, IQR 18. Compare performance and consistency.` },
      { ask: r`A data set has five-number summary $5,15,20,28,55$. Determine whether $55$ is an outlier.`, challenge: true, ws: "3.2cm" },
      { ask: r`A data set has mean 44 and SD 5. Every value is halved and then 10 is added. Find the new mean and SD.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`mean $=11$, median $=9$`, r`mean $=11$; deviations sq: $64,16,0,16,64=160$; $\sigma=\sqrt{32}\approx5.66$`,
      r`$IQR=10$, fence $=20+15=35$; $36>35$: yes, outlier`, r`mean $42$, SD unchanged $4$`,
      r`mean $40$, SD $6$`, r`A has higher median (better typical score) and smaller IQR (more consistent)`,
      r`$IQR=13$, fence $=28+19.5=47.5$; $55>47.5$: yes, outlier`,
      r`halving: mean $22$, SD $2.5$; $+10$ changes only mean: mean $32$, SD $2.5$`,
    ],
  },
  {
    code: "4.3", unit: U, title: "Bivariate Data and Correlation",
    intro: r`Correlation measures linear association; a regression line predicts, but extrapolation is risky.`,
    ideas: [
      r`$r$ near $\pm1$: strong linear relationship; near 0: weak/none.`,
      r`Interpolation (inside the data range) is more trustworthy than extrapolation (outside it).`,
    ],
    examples: [
      { t: "Interpret r", body: r`A study finds $r=-0.82$ between hours of TV watched and test scores. Interpret this.\soln
Strong negative correlation --- more TV watched tends to associate with lower scores.\\[3pt]\textbf{Conclusion:} strong negative correlation.` },
      { t: "Interpolation", body: r`A line $y=2.1x+8$ fits data for $x\in[0,20]$. Predict $y$ at $x=12$ and classify.\soln
$y=2.1(12)+8=25.2+8$; $x=12$ is inside $[0,20]$.\\[3pt]\textbf{Conclusion:} $y=33.2$; interpolation.` },
      { t: "Extrapolation risk", body: r`Using the same line, predict $y$ at $x=80$ and explain the risk.\soln
$y=2.1(80)+8=176$; far outside $[0,20]$.\\[3pt]\textbf{Conclusion:} $y=176$ mathematically, but unreliable since it's extrapolated well beyond the data.` },
      { t: "Slope interpretation", body: r`A line relating monthly rent $x$ (\$100s) to apartment size $y$ (m$^2$) is $y=3.5x+12$. Interpret the slope.\soln
Each extra \$100 in monthly rent is associated with about $3.5$ more m$^2$ of space, on average.\\[3pt]\textbf{Conclusion:} slope $3.5$: more rent associates with more space.` },
    ],
    questions: [
      { ask: r`Describe the correlation implied by $r=0.25$.` },
      { ask: r`Describe the correlation implied by $r=-0.97$.` },
      { ask: r`A line $y=4x+15$ fits data for $x\in[2,18]$; predict $y$ at $x=10$ and classify (interpolation/extrapolation).` },
      { ask: r`Using the same line, predict $y$ at $x=60$ and explain the risk.` },
      { ask: r`A line relates study hours $x$ to score $y$: $y=5.2x+48$; interpret the $y$-intercept in context.` },
      { ask: r`Ice cream sales and sunscreen sales are strongly positively correlated. Explain why this doesn't mean one causes the other.` },
      { ask: r`A line $y=-2.4x+90$ models a car's value (\$1000s) vs its age $x$ (years), fit on data for $x\in[0,10]$; predict the value at $x=25$ and explain why this prediction is almost certainly wrong.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`very weak positive correlation`, r`very strong negative correlation`,
      r`$y=55$; interpolation (10 is inside [2,18])`,
      r`$y=255$; extrapolation, far outside the fitted range, so unreliable`,
      r`predicted score with 0 study hours is 48 --- a baseline from prior knowledge/other factors`,
      r`a confounding variable (hot weather) increases both independently`,
      r`$y=-2.4(25)+90=30$; but a car's value can't go negative and doesn't depreciate linearly forever, so extrapolating this far is unrealistic`,
    ],
  },
  {
    code: "4.4", unit: U, title: "Probability Basics and Venn Diagrams",
    intro: r`Venn diagrams and the addition rule solve "at least one" and unknown-overlap problems.`,
    ideas: [
      r`$P(A\cup B)=P(A)+P(B)-P(A\cap B)$.`,
      r`Independent: $P(A\cap B)=P(A)P(B)$. Mutually exclusive: $P(A\cap B)=0$.`,
    ],
    examples: [
      { t: "Addition rule", body: r`Of 40 students, 24 study French, 18 study Spanish, 9 study both. Find $P(\text{at least one})$.\soln
$P(F\cup S)=\tfrac{24}{40}+\tfrac{18}{40}-\tfrac{9}{40}=\tfrac{33}{40}$.\\[3pt]\textbf{Conclusion:} $\tfrac{33}{40}$.` },
      { t: "Unknown overlap", body: r`Of 60 people, 38 like tea, 30 like coffee, 8 like neither. Find how many like both.\soln
At least one $=52$. $52=38+30-\text{both}\Rightarrow\text{both}=16$.\\[3pt]\textbf{Conclusion:} $16$.` },
      { t: "Independence check", body: r`$P(A)=0.5$, $P(B)=0.4$, $P(A\cap B)=0.2$. Are $A,B$ independent?\soln
$P(A)P(B)=0.2$, matches $P(A\cap B)$.\\[3pt]\textbf{Conclusion:} yes, independent.` },
      { t: "Mutually exclusive check", body: r`$P(C)=0.35$, $P(D)=0.4$, $P(C\cup D)=0.75$. Are $C,D$ mutually exclusive?\soln
$P(C\cap D)=0.35+0.4-0.75=0$.\\[3pt]\textbf{Conclusion:} yes, $P(C\cap D)=0$.` },
    ],
    questions: [
      { ask: r`$P(A)=0.6$, $P(B)=0.25$, $P(A\cap B)=0.1$. Find $P(A\cup B)$.` },
      { ask: r`Of 50 people, 30 own a car, 22 own a bike, 10 own neither. Find how many own both.` },
      { ask: r`$P(A)=0.4$, $P(B)=0.3$, $P(A\cap B)=0.12$. Are $A,B$ independent?` },
      { ask: r`$P(C)=0.5$, $P(D)=0.3$. If mutually exclusive, find $P(C\cup D)$.` },
      { ask: r`Of 80 gym members, 50 use weights, 35 use cardio, everyone uses at least one. Find how many use both.` },
      { ask: r`A survey of 100 finds 65 like pop music, 45 like rock, and $x$ like both, with 15 liking neither. Find $x$ and $P(\text{pop only})$.`, challenge: true, ws: "3.4cm" },
      { ask: r`Explain why two mutually exclusive events with nonzero probability can never be independent.` },
    ],
    answers: [
      r`$0.6+0.25-0.1=0.75$`, r`at least one $=40$; both $=30+22-40=12$`,
      r`$P(A)P(B)=0.12$, matches: yes independent`, r`$0.8$`,
      r`$50+35-80=5$`,
      r`at least one $=85$; $85=65+45-x\Rightarrow x=25$; pop only $=65-25=40\Rightarrow P=0.40$`,
      r`if mutually exclusive, one occurring guarantees the other didn't ($P(A\cap B)=0$), which contradicts independence unless one probability is already 0`,
    ],
  },
  {
    code: "4.5", unit: U, title: "Conditional Probability and Tree Diagrams",
    intro: r`Tree diagrams handle sequences of events, including without-replacement draws and reversed conditionals.`,
    ideas: [
      r`$P(A\mid B)=\dfrac{P(A\cap B)}{P(B)}$.`,
      r`Multiply along a branch; add across matching outcomes.`,
    ],
    examples: [
      { t: "Basic conditional probability", body: r`$P(A)=0.6$, $P(A\cap B)=0.18$. Find $P(B\mid A)$.\soln
$P(B\mid A)=\dfrac{0.18}{0.6}$.\\[3pt]\textbf{Conclusion:} $0.3$.` },
      { t: "Without replacement", body: r`A bag has 6 red, 4 blue balls. Two drawn without replacement; find $P(\text{both red})$.\soln
$\dfrac6{10}\times\dfrac59=\dfrac{30}{90}$.\\[3pt]\textbf{Conclusion:} $\dfrac13$.` },
      { t: "At least one", body: r`Using the same bag, find $P(\text{at least one blue})$.\soln
$1-P(\text{both red})=1-\tfrac13$.\\[3pt]\textbf{Conclusion:} $\dfrac23$.` },
      { t: "Reverse conditional (tree reversal)", body: r`Factory A makes 65\% of items with a 2\% defect rate; Factory B makes 35\% with a 6\% defect rate. Given an item is defective, find $P(\text{from B})$.\soln
$P(A\cap d)=0.65(0.02)=0.013$; $P(B\cap d)=0.35(0.06)=0.021$; total $=0.034$.\\[3pt]\textbf{Conclusion:} $P(B\mid d)=\dfrac{0.021}{0.034}\approx0.618$.` },
    ],
    questions: [
      { ask: r`$P(A)=0.7$, $P(A\cap B)=0.28$. Find $P(B\mid A)$.` },
      { ask: r`A bag has 5 green, 5 yellow marbles. Two drawn without replacement; find $P(\text{both green})$.` },
      { ask: r`Using the same bag, find $P(\text{at least one yellow})$.` },
      { ask: r`Two independent events each have probability 0.3. Find $P(\text{exactly one occurs})$.` },
      { ask: r`A box has 9 working, 3 faulty phones. Two selected without replacement; find $P(\text{at least one faulty})$.`, challenge: true, ws: "3.2cm" },
      { ask: r`Machine X makes 40\% of output with 5\% defects; Machine Y makes 60\% with 2\% defects. Find the overall $P(\text{defective})$.` },
      { ask: r`Using the previous question, given an item is defective, find $P(\text{from Machine X})$.`, challenge: true, ws: "3.2cm" },
    ],
    answers: [
      r`$0.28/0.7=0.4$`, r`$\tfrac5{10}\times\tfrac49=\tfrac{20}{90}=\tfrac29$`, r`$1-\tfrac29=\tfrac79$`,
      r`$2(0.3\times0.7)=0.42$`,
      r`$P(\text{no faulty})=\tfrac9{12}\times\tfrac8{11}=\tfrac{72}{132}=\tfrac6{11}$; at least one $=1-\tfrac6{11}=\tfrac5{11}$`,
      r`$0.4(0.05)+0.6(0.02)=0.02+0.012=0.032$`,
      r`$P(X\mid d)=\dfrac{0.02}{0.032}=0.625$`,
    ],
  },
  {
    code: "4.6", unit: U, title: "Discrete Random Variables and the Binomial Distribution",
    intro: r`The binomial distribution models a fixed number of independent yes/no trials.`,
    ideas: [
      r`$E(X)=\sum xP(X=x)$.`,
      r`$X\sim B(n,p)$: $P(X=k)=\dbinom nk p^k(1-p)^{n-k}$, $E(X)=np$, $\text{Var}(X)=np(1-p)$.`,
    ],
    examples: [
      { t: "Unknown table entry", body: r`$P(X=0)=0.1$, $P(X=1)=k$, $P(X=2)=0.5$. Find $k$ and $E(X)$.\soln
$k=1-0.1-0.5=0.4$. $E(X)=0(0.1)+1(0.4)+2(0.5)$.\\[3pt]\textbf{Conclusion:} $k=0.4$, $E(X)=1.4$.` },
      { t: "Binomial probability", body: r`$X\sim B(9,0.35)$. Find $P(X=3)$.\soln
$\binom93(0.35)^3(0.65)^6\approx84(0.042875)(0.0754)\approx0.272$.\\[3pt]\textbf{Conclusion:} $P(X=3)\approx0.272$.` },
      { t: "At least one", body: r`$X\sim B(6,0.15)$. Find $P(X\geq1)$.\soln
$P(X=0)=(0.85)^6\approx0.377$.\\[3pt]\textbf{Conclusion:} $P(X\geq1)\approx0.623$.` },
      { t: "Solve for p", body: r`$X\sim B(5,p)$ and $P(X=5)=0.00243$. Find $p$.\soln
$p^5=0.00243\Rightarrow p=0.00243^{1/5}=0.3$ (recognizing $0.3^5=0.00243$).\\[3pt]\textbf{Conclusion:} $p=0.3$.` },
    ],
    questions: [
      { ask: r`$P(X=0)=0.2$, $P(X=1)=k$, $P(X=2)=0.35$. Find $k$ and $E(X)$.` },
      { ask: r`$X\sim B(7,0.4)$. Find $P(X=2)$.` },
      { ask: r`$X\sim B(8,0.1)$. Find $P(X\geq1)$.` },
      { ask: r`$X\sim B(40,0.25)$. Find the mean and variance.` },
      { ask: r`A basketball player makes 65\% of free throws; for 8 attempts, find $P(\text{makes at least 6})$.`, challenge: true, ws: "3.4cm" },
      { ask: r`$X\sim B(4,p)$ and $P(X=0)=0.0016$. Find $p$.` },
      { ask: r`A factory tests 10 items with a 4\% individual defect rate; find $P(\text{at most 1 defective})$.`, challenge: true, ws: "3.4cm" },
    ],
    answers: [
      r`$k=0.45$; $E(X)=0.45+0.7=1.15$`, r`$\binom72(0.4)^2(0.6)^5\approx21(0.16)(0.07776)\approx0.261$`,
      r`$P(X=0)=(0.9)^8\approx0.4305$; $P(X\geq1)\approx0.5695$`, r`mean $=10$, variance $=40(0.25)(0.75)=7.5$`,
      r`$P(6)+P(7)+P(8)=\binom86(0.65)^6(0.35)^2+\binom87(0.65)^7(0.35)+\binom88(0.65)^8\approx0.2587+0.1373+0.0319\approx0.428$`,
      r`$(1-p)^4=0.0016\Rightarrow1-p=0.0016^{1/4}=0.2\Rightarrow p=0.8$`,
      r`$P(0)=(0.96)^{10}\approx0.6648$; $P(1)=\binom{10}1(0.04)(0.96)^9\approx0.2770$; sum $\approx0.9418$`,
    ],
  },
  {
    code: "4.7", unit: U, title: "The Normal Distribution",
    intro: r`Z-scores standardize any normal distribution, letting probabilities and percentiles be found (or reversed).`,
    ideas: [
      r`$z=\dfrac{x-\mu}{\sigma}$.`,
      r`Inverse normal: given a probability, work backward for $x=\mu+z\sigma$.`,
    ],
    examples: [
      { t: "Z-score and probability", body: r`$\mu=80$, $\sigma=6$. Find $P(X<89)$ given $P(Z<1.5)\approx0.9332$.\soln
$z=\dfrac{89-80}{6}=1.5$.\\[3pt]\textbf{Conclusion:} $P(X<89)\approx0.9332$.` },
      { t: "Inverse normal", body: r`$\mu=80$, $\sigma=6$. Find the score at the 90th percentile, given $P(Z<1.2816)\approx0.90$.\soln
$x=80+1.2816(6)$.\\[3pt]\textbf{Conclusion:} $x\approx87.69$.` },
      { t: "Between two values", body: r`$\mu=80$, $\sigma=6$. Find $P(71<X<89)$ given $P(Z<-1.5)\approx0.0668$ and $P(Z<1.5)\approx0.9332$.\soln
$z_1=-1.5$, $z_2=1.5$.\\[3pt]\textbf{Conclusion:} $P\approx0.9332-0.0668=0.8664$.` },
      { t: "Solve for mu and sigma", body: r`It's known $P(X<60)=0.1587$ and $P(X<100)=0.8413$. Find $\mu,\sigma$ (using $P(Z<-1)\approx0.1587$, $P(Z<1)\approx0.8413$).\soln
$\mu-\sigma=60$, $\mu+\sigma=100$. Add: $2\mu=160\Rightarrow\mu=80$; $\sigma=20$.\\[3pt]\textbf{Conclusion:} $\mu=80$, $\sigma=20$.` },
    ],
    questions: [
      { ask: r`$\mu=45$, $\sigma=4$. Find the z-score for $x=53$.` },
      { ask: r`$\mu=120$, $\sigma=10$. Find $P(X<135)$ given $P(Z<1.5)\approx0.9332$.` },
      { ask: r`$\mu=120$, $\sigma=10$. Find the score at the 95th percentile, given $P(Z<1.645)\approx0.95$.` },
      { ask: r`$\mu=120$, $\sigma=10$. Find $P(105<X<135)$ given $P(Z<-1.5)\approx0.0668$ and $P(Z<1.5)\approx0.9332$.` },
      { ask: r`A machine's fill weights are normal with unknown $\mu,\sigma$; $P(X<480)=0.1587$, $P(X<540)=0.8413$. Find $\mu,\sigma$.`, challenge: true, ws: "3.2cm" },
      { ask: r`$\mu=50$, $\sigma=8$. Find the weight below which the lightest 10\% falls, given $P(Z<-1.2816)\approx0.10$.` },
      { ask: r`Explain why $P(X<\mu)=0.5$ for any normal distribution.` },
    ],
    answers: [
      r`$z=2$`, r`$P\approx0.9332$`, r`$x=120+1.645(10)\approx136.45$`, r`$0.9332-0.0668=0.8664$`,
      r`$\mu-\sigma=480$, $\mu+\sigma=540$: $\mu=510$, $\sigma=30$`,
      r`$50+(-1.2816)(8)\approx39.75$`,
      r`the normal distribution is symmetric about $\mu$, so exactly half the probability lies below the mean`,
    ],
  },
];
